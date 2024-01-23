function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { Form } from '@edx/paragon';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { useSelector, useDispatch } from '@communications-app/src/components/bulk-email-tool/bulk-email-form/BuildEmailFormExtensible/context';
import { actionCreators as formActions } from '@communications-app/src/components/bulk-email-tool/bulk-email-form/BuildEmailFormExtensible/context/reducer';
import PluggableComponent from '@communications-app/src/components/PluggableComponent';
import { BulkEmailContext } from '@communications-app/src/components/bulk-email-tool/bulk-email-context';
import './styles.scss';
var disableIsHasLearners = ['track', 'cohort', 'individual-learners'];
var recipientsFormDescription = 'A selectable choice from a list of potential email recipients';
var RecipientsForm = function RecipientsForm(_ref) {
  var additionalCohorts = _ref.cohorts,
    courseId = _ref.courseId;
  var formData = useSelector(function (state) {
    return state.form;
  });
  var _useContext = useContext(BulkEmailContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    editor = _useContext2[0].editor;
  var dispatch = useDispatch();
  var isEditMode = formData.isEditMode,
    emailRecipients = formData.emailRecipients,
    isFormSubmitted = formData.isFormSubmitted,
    _formData$emailLearne = formData.emailLearnersList,
    emailLearnersList = _formData$emailLearne === void 0 ? [] : _formData$emailLearne,
    _formData$teamsList = formData.teamsList,
    teamsList = _formData$teamsList === void 0 ? [] : _formData$teamsList;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedGroups = _useState2[0],
    setSelectedGroups = _useState2[1];
  var hasAllLearnersSelected = selectedGroups.some(function (group) {
    return group === 'learners';
  });
  var handleChangeCheckBoxes = function handleChangeCheckBoxes(_ref2) {
    var _ref2$target = _ref2.target,
      value = _ref2$target.value,
      checked = _ref2$target.checked;
    var newValue;
    var newEmailLearnersList = emailLearnersList;
    if (checked) {
      var uniqueSet = new Set([].concat(_toConsumableArray(emailRecipients), [value]));
      newValue = Array.from(uniqueSet);
    } else {
      newValue = emailRecipients.filter(function (item) {
        return item !== value;
      });
    }
    if (checked && value === 'learners') {
      newValue = newValue.filter(function (item) {
        return !disableIsHasLearners.some(function (disabled) {
          return item.includes(disabled);
        });
      });
      newEmailLearnersList = [];
    }
    dispatch(formActions.updateForm({
      emailRecipients: newValue,
      emailLearnersList: newEmailLearnersList
    }));
    setSelectedGroups(newValue);
  };

  // When the user selects an email from input autocomplete list
  var handleEmailLearnersSelected = function handleEmailLearnersSelected(emailSelected) {
    var _emailSelected = _slicedToArray(emailSelected, 1),
      firstItem = _emailSelected[0];
    if (firstItem) {
      dispatch(formActions.updateForm({
        emailLearnersList: [].concat(_toConsumableArray(emailLearnersList), [firstItem])
      }));
    }
  };

  // To delete an email from learners list, that list is on the bottom of the input autocomplete
  var handleLearnersDeleteEmail = function handleLearnersDeleteEmail(idToDelete) {
    var setEmailLearnersListUpdated = emailLearnersList.filter(function (_ref3) {
      var id = _ref3.id;
      return id !== idToDelete;
    });
    dispatch(formActions.updateForm({
      emailLearnersList: setEmailLearnersListUpdated
    }));
  };
  var isInvalidRecipients = teamsList.length === 0 && selectedGroups.length === 0;
  useEffect(function () {
    setSelectedGroups(emailRecipients);
  }, [isEditMode, emailRecipients.length, emailRecipients]);
  useDeepCompareEffect(function () {
    if (!editor.editMode) {
      var newSubjectValue = editor.emailSubject;
      var newBodyValue = editor.emailBody;
      dispatch(formActions.updateForm({
        subject: newSubjectValue,
        body: newBodyValue
      }));
    }
  }, [editor, dispatch]);
  return /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, /*#__PURE__*/React.createElement("span", {
    className: "h3 text-primary-500"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bulk.email.form.recipients.sendLabel",
    defaultMessage: "Send to",
    description: "A label before the list of potential recipients"
  }))), /*#__PURE__*/React.createElement(Form.CheckboxSet, {
    name: "recipientGroups",
    className: "flex-wrap flex-row recipient-groups w-100",
    onChange: handleChangeCheckBoxes,
    value: selectedGroups
  }, /*#__PURE__*/React.createElement(Form.Checkbox, {
    key: "myself",
    value: "myself",
    className: "mt-2.5 col col-lg-4 col-sm-6 col-12"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bulk.email.form.recipients.myself",
    defaultMessage: "Myself",
    description: recipientsFormDescription
  })), /*#__PURE__*/React.createElement(Form.Checkbox, {
    key: "staff",
    value: "staff",
    className: "col col-lg-4 col-sm-6 col-12"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bulk.email.form.recipients.staff",
    defaultMessage: "Staff/Administrators",
    description: recipientsFormDescription
  })), /*#__PURE__*/React.createElement(Form.Checkbox, {
    key: "track:verified",
    value: "track:verified",
    disabled: hasAllLearnersSelected,
    className: "col col-lg-4 col-sm-6 col-12"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bulk.email.form.recipients.verified",
    defaultMessage: "Learners in the verified certificate track",
    description: recipientsFormDescription
  })),
  // additional cohorts
  additionalCohorts && additionalCohorts.map(function (cohort) {
    return /*#__PURE__*/React.createElement(Form.Checkbox, {
      key: cohort,
      value: "cohort:".concat(cohort),
      disabled: hasAllLearnersSelected,
      className: "col col-lg-4 col-sm-6 col-12"
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "bulk.email.form.cohort.label",
      defaultMessage: "Cohort: {cohort}",
      values: {
        cohort: cohort
      }
    }));
  }), /*#__PURE__*/React.createElement(Form.Checkbox, {
    key: "track:audit",
    value: "track:audit",
    disabled: hasAllLearnersSelected,
    className: "col col-lg-4 col-sm-6 col-12"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bulk.email.form.recipients.audit",
    defaultMessage: "Learners in the audit track",
    description: recipientsFormDescription
  })), /*#__PURE__*/React.createElement(Form.Checkbox, {
    key: "learners",
    value: "learners",
    className: "col col-lg-4 col-sm-6 col-12"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bulk.email.form.recipients.learners",
    defaultMessage: "All Learners",
    description: recipientsFormDescription
  })), /*#__PURE__*/React.createElement(Form.Checkbox, {
    key: "individual-learners",
    value: "individual-learners",
    className: "col col-lg-4 col-sm-6 col-12",
    disabled: hasAllLearnersSelected
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bulk.email.form.recipients.learners",
    defaultMessage: "Individual learners",
    description: "A selectable choice from a list of potential to add an email list of learners"
  }))), selectedGroups.includes('individual-learners') && /*#__PURE__*/React.createElement(PluggableComponent, {
    id: "individual-learners",
    as: "communications-app-individual-emails",
    courseId: courseId,
    handleEmailSelected: handleEmailLearnersSelected,
    emailList: emailLearnersList,
    handleDeleteEmail: handleLearnersDeleteEmail
  }), /*#__PURE__*/React.createElement(PluggableComponent, {
    id: "team-emails",
    as: "communications-app-team-emails",
    courseId: courseId
  }), isFormSubmitted && isInvalidRecipients && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    className: "px-3",
    type: "invalid",
    hasIcon: true
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "bulk.email.form.recipients.error",
    defaultMessage: "At least one recipient is required",
    description: "An Error message located under the recipients list. Visible only on failure"
  })));
};
RecipientsForm.defaultProps = {
  cohorts: [],
  courseId: ''
};
RecipientsForm.propTypes = {
  cohorts: PropTypes.arrayOf(PropTypes.string),
  courseId: PropTypes.string
};
export default RecipientsForm;
//# sourceMappingURL=index.js.map