import React from 'react';
import { Form } from '@edx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import { useSelector, useDispatch } from '@communications-app/src/components/bulk-email-tool/bulk-email-form/BuildEmailFormExtensible/context';
import { actionCreators as formActions } from '@communications-app/src/components/bulk-email-tool/bulk-email-form/BuildEmailFormExtensible/context/reducer';
import messages from './messages';
var SubjectForm = function SubjectForm() {
  var intl = useIntl();
  var formData = useSelector(function (state) {
    return state.form;
  });
  var dispatch = useDispatch();
  var subject = formData.subject,
    isFormSubmitted = formData.isFormSubmitted;
  var handleChangeEmailSubject = function handleChangeEmailSubject(_ref) {
    var value = _ref.target.value;
    dispatch(formActions.updateForm({
      subject: value
    }));
  };
  var isSubjectValid = subject.length > 0;
  return /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "emailSubject",
    className: "my-5"
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: "h3 text-primary-500"
  }, intl.formatMessage(messages.bulkEmailSubjectLabel)), /*#__PURE__*/React.createElement(Form.Control, {
    name: "emailSubject",
    className: "w-lg-50",
    onChange: handleChangeEmailSubject,
    value: subject
  }), isFormSubmitted && !isSubjectValid && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    className: "px-3",
    hasIcon: true,
    type: "invalid"
  }, intl.formatMessage(messages.bulkEmailFormSubjectError)));
};
export default SubjectForm;
//# sourceMappingURL=index.js.map