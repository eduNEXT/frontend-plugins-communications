import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages.alerts';
export var AlertMessage = function AlertMessage(_ref) {
  var emailRecipients = _ref.emailRecipients,
    isScheduled = _ref.isScheduled,
    subject = _ref.subject;
  var intl = useIntl();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, intl.formatMessage(messages.TaskAlertModalAlertTypesRecipients, {
    subject: subject
  })), /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled"
  }, emailRecipients.map(function (group) {
    return /*#__PURE__*/React.createElement("li", {
      key: group
    }, group);
  })), !isScheduled && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, intl.formatMessage(messages.TaskAlertModalAlertTypesInstructionCaption)), intl.formatMessage(messages.TaskAlertModalAlertTypesInstructionCaptionMessage)));
};
AlertMessage.defaultProps = {
  emailRecipients: []
};
AlertMessage.propTypes = {
  emailRecipients: PropTypes.arrayOf(PropTypes.string),
  isScheduled: PropTypes.bool.isRequired,
  subject: PropTypes.string.isRequired
};
export var EditMessage = function EditMessage(_ref2) {
  var emailRecipients = _ref2.emailRecipients,
    isScheduled = _ref2.isScheduled,
    scheduleDate = _ref2.scheduleDate,
    scheduleTime = _ref2.scheduleTime,
    subject = _ref2.subject;
  var intl = useIntl();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, intl.formatMessage(messages.TaskAlertModalAlertTypesEditingDate, {
    dateTime: new Date("".concat(scheduleDate, " ").concat(scheduleTime)).toLocaleString()
  })), /*#__PURE__*/React.createElement("p", null, intl.formatMessage(messages.TaskAlertModalAlertTypesEditingSubject, {
    subject: subject
  })), /*#__PURE__*/React.createElement("p", null, intl.formatMessage(messages.TaskAlertModalAlertTypesEditingTo)), /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled"
  }, emailRecipients.map(function (group) {
    return /*#__PURE__*/React.createElement("li", {
      key: group
    }, group);
  })), /*#__PURE__*/React.createElement("p", null, intl.formatMessage(messages.TaskAlertModalAlertTypesEditingWarning)), !isScheduled && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, intl.formatMessage(messages.TaskAlertModalAlertTypesInstructionCaption)), intl.formatMessage(messages.TaskAlertModalAlertTypesInstructionCaptionMessage)));
};
EditMessage.defaultProps = {
  emailRecipients: [],
  scheduleDate: '',
  scheduleTime: ''
};
EditMessage.propTypes = {
  emailRecipients: PropTypes.arrayOf(PropTypes.string),
  isScheduled: PropTypes.bool.isRequired,
  scheduleDate: PropTypes.string,
  scheduleTime: PropTypes.string,
  subject: PropTypes.string.isRequired
};
//# sourceMappingURL=AlertTypes.js.map