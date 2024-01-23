import React from 'react';
import PropTypes from 'prop-types';
import { Form, Container } from '@edx/paragon';
var CheckBoxForm = function CheckBoxForm(_ref) {
  var isChecked = _ref.isChecked,
    handleChange = _ref.handleChange,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(Container, {
    className: "my-4 border border-success-300 p-4"
  }, /*#__PURE__*/React.createElement(Form.Checkbox, {
    checked: isChecked,
    onChange: handleChange
  }, label));
};
CheckBoxForm.defaultProps = {
  handleChange: function handleChange() {}
};
CheckBoxForm.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired
};
export default CheckBoxForm;
//# sourceMappingURL=index.js.map