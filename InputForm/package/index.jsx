import React from 'react';
import PropTypes from 'prop-types';
import { Form, Container } from '@edx/paragon';
var InputForm = function InputForm(_ref) {
  var isValid = _ref.isValid,
    controlId = _ref.controlId,
    label = _ref.label,
    feedbackText = _ref.feedbackText;
  var feedbackType = isValid ? 'valid' : 'invalid';
  return /*#__PURE__*/React.createElement(Form.Group, {
    isValid: isValid,
    controlId: controlId,
    "data-testid": "plugin-input",
    className: "p-3 border border-success-300"
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: "h3 text-primary-500"
  }, label), /*#__PURE__*/React.createElement(Container, {
    className: "row"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    className: "col-3"
  }), /*#__PURE__*/React.createElement("p", {
    className: "col-8"
  }, "@openedx-plugins/communications-app-input-form")), /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: feedbackType
  }, feedbackText));
};
InputForm.propTypes = {
  isValid: PropTypes.bool.isRequired,
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  feedbackText: PropTypes.string.isRequired
};
export default InputForm;
//# sourceMappingURL=index.js.map