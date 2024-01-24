import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TaskAlertModal from '@communications-app/src/components/bulk-email-tool/task-alert-modal';
import { getScheduledBulkEmailThunk } from '@communications-app/src/components/bulk-email-tool/bulk-email-task-manager/bulk-email-scheduled-emails-table/data/thunks';
import { BulkEmailContext } from '@communications-app/src/components/bulk-email-tool/bulk-email-context';
import { useSelector, useDispatch } from '@communications-app/src/components/bulk-email-tool/bulk-email-form/BuildEmailFormExtensible/context';
import { actionCreators as formActions } from '@communications-app/src/components/bulk-email-tool/bulk-email-form/BuildEmailFormExtensible/context/reducer';

import { postBulkEmailInstructorTaskSendEmails, patchScheduledBulkEmailInstructorTask } from './api';
import { AlertMessage, EditMessage } from './AlertTypes';

const TaskAlertModalForm = ({
  courseId,
  isTaskAlertOpen,
  closeTaskAlert,
}) => {
  const [, dispatch] = useContext(BulkEmailContext);
  const formData = useSelector((state) => state.form);
  const dispatchForm = useDispatch();

  const {
    isScheduled,
    emailRecipients,
    scheduleDate = '',
    scheduleTime = '',
    isEditMode = false,
    subject,
    emailId = '',
    schedulingId = '',
    body,
    isScheduleButtonClicked = false,
    isFormSubmitted = false,
    emailLearnersList = [],
    teamsList = [],
    teamsListFullData = [],
  } = formData;

  const changeFormStatus = (status) => dispatchForm(formActions.updateForm({ formStatus: status }));
  const handleResetFormValues = () => dispatchForm(formActions.resetForm());

  const handlePostEmailTask = async () => {
    const teamsNames = teamsListFullData.map(({ name }) => name);
    const invalidRecipients = ['individual-learners', ...teamsNames];
    const emailRecipientsFormat = emailRecipients.filter((recipient) => !invalidRecipients.includes(recipient));
    const emailsLearners = emailLearnersList.map(({ email }) => email);
    const extraTargets = { emails: emailsLearners, teams: teamsList };
    const emailData = new FormData();
    emailData.append('action', 'send');
    emailData.append('send_to', JSON.stringify(emailRecipientsFormat));
    emailData.append('subject', subject);
    emailData.append('message', body);
    emailData.append('extra_targets', JSON.stringify(extraTargets));

    if (isScheduled) {
      emailData.append('schedule', new Date(`${scheduleDate} ${scheduleTime}`).toISOString());
    }

    changeFormStatus('pending');

    try {
      await postBulkEmailInstructorTaskSendEmails(emailData, courseId);
      const newFormStatus = isScheduled ? 'completeSchedule' : 'complete';
      changeFormStatus(newFormStatus);
      setTimeout(() => handleResetFormValues(), 3000);
    } catch {
      changeFormStatus('error');
    }
  };

  const handlePatchEmailTask = async () => {
    const emailRecipientsValue = emailRecipients;
    const emailSubject = subject;
    const emailBody = body;

    const emailData = {
      email: {
        targets: emailRecipientsValue,
        subject: emailSubject,
        message: emailBody,
        id: emailId,
      },
      schedule: isScheduled ? new Date(`${scheduleDate} ${scheduleTime}`).toISOString() : null,
    };

    changeFormStatus('pending');

    try {
      await patchScheduledBulkEmailInstructorTask(emailData, courseId, schedulingId);
      changeFormStatus('completeSchedule');
      setTimeout(() => handleResetFormValues(), 3000);
    } catch {
      changeFormStatus('error');
    }
  };

  const createEmailTask = async () => {
    const isScheduleValid = isScheduled ? scheduleDate.length > 0 && scheduleTime.length > 0 : true;
    const isIndividualEmailsValid = (emailRecipients.includes('individual-learners') && emailLearnersList.length > 0)
    || !emailRecipients.includes('individual-learners');
    const isValidRecipients = emailRecipients.length > 0 || teamsList.length > 0;
    const isFormValid = isValidRecipients && subject.length > 0
    && body.length > 0 && isScheduleValid && isIndividualEmailsValid;

    if (isFormValid && isEditMode) {
      await handlePatchEmailTask();
    }

    if (isFormValid && !isEditMode) {
      await handlePostEmailTask();
    }

    if (isFormValid) {
      dispatch(getScheduledBulkEmailThunk(courseId, 1));
    }
  };

  const handleCloseTaskAlert = (event) => {
    closeTaskAlert();

    if (event.target.name === 'continue') {
      if (!isFormSubmitted) {
        dispatchForm(formActions.updateForm({ isFormSubmitted: true }));
      }

      if (isScheduleButtonClicked) {
        dispatchForm(formActions.updateForm({ isScheduledSubmitted: true }));
      }

      createEmailTask();
    }
  };

  return (
    <TaskAlertModal
      isOpen={isTaskAlertOpen}
      alertMessage={isEditMode
        ? (
          <EditMessage
            subject={subject}
            emailRecipients={emailRecipients}
            {...{ scheduleDate, scheduleTime, isScheduled }}
          />
        )
        : (
          <AlertMessage
            subject={subject}
            emailRecipients={emailRecipients}
            isScheduled={isScheduled}
          />
        )}
      close={handleCloseTaskAlert}
    />
  );
};

TaskAlertModalForm.defaultProps = {
  courseId: '',
  formState: {},
  setFormState: () => {},
  openTaskAlert: () => {},
  closeTaskAlert: () => {},
  isTaskAlertOpen: false,
};

TaskAlertModalForm.propTypes = {
  courseId: PropTypes.string,
  formState: PropTypes.shape({}),
  setFormState: PropTypes.func,
  openTaskAlert: PropTypes.func,
  closeTaskAlert: PropTypes.func,
  isTaskAlertOpen: PropTypes.bool,

};

export default TaskAlertModalForm;
