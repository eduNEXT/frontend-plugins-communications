import React from 'react';
import PropTypes from 'prop-types';
import { Form, Spinner } from '@edx/paragon';
import './FeedbackMessage.scss';
var FeedbackMessage = function FeedbackMessage(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    className: "mt-1",
    "data-testid": "feedback-message-container",
    icon: /*#__PURE__*/React.createElement(Spinner, {
      animation: "border",
      className: "mie-3 loading-teams-spinner__medium",
      screenReaderText: "loading",
      "data-testid": "feedback-message-spinner"
    })
  }, title);
};
FeedbackMessage.propTypes = {
  title: PropTypes.string.isRequired
};
export default FeedbackMessage;
//# sourceMappingURL=FeedbackMessage.js.map