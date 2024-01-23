import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@edx/paragon';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import './ListTeams.scss';
var recipientsTeamFormDescription = 'A selectable choice from a list of potential email team recipients';
var ListTeams = function ListTeams(_ref) {
  var teams = _ref.teams,
    onChangeCheckBox = _ref.onChangeCheckBox,
    teamsSelected = _ref.teamsSelected;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-wrap flex-row w-100"
  }, teams.map(function (_ref2) {
    var id = _ref2.id,
      name = _ref2.name;
    return /*#__PURE__*/React.createElement(Form.Checkbox, {
      key: "team:".concat(name, "_").concat(id),
      value: id,
      className: "mr-4 mb-4 team-checkbox",
      "data-testid": "team:".concat(id),
      onChange: onChangeCheckBox,
      checked: teamsSelected.includes(id)
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "bulk.email.form.recipients.teams.".concat(name),
      defaultMessage: name,
      description: recipientsTeamFormDescription
    }));
  }));
};
ListTeams.defaultProps = {
  onChangeCheckBox: function onChangeCheckBox() {},
  teamsSelected: []
};
ListTeams.propTypes = {
  onChangeCheckBox: PropTypes.func,
  teamsSelected: PropTypes.arrayOf(PropTypes.string),
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    discussionTopicId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    courseId: PropTypes.string.isRequired,
    topicId: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    lastActivityAt: PropTypes.string.isRequired,
    membership: PropTypes.arrayOf(PropTypes.shape()),
    organizationProtected: PropTypes.bool.isRequired
  })).isRequired
};
export default ListTeams;
//# sourceMappingURL=ListTeams.js.map