function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StatefulButton, Button, Form, Icon, Toast, Spinner } from '@edx/paragon';
import { SpinnerSimple, Cancel, Send, Event, Check } from '@edx/paragon/icons';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import ScheduleEmailForm from '@communications-app/src/components/bulk-email-tool/bulk-email-form/ScheduleEmailForm';
import useMobileResponsive from '@communications-app/src/utils/useMobileResponsive';
import { useSelector, useDispatch } from '@communications-app/src/components/bulk-email-tool/bulk-email-form/BuildEmailFormExtensible/context';
import { actionCreators as formActions } from '@communications-app/src/components/bulk-email-tool/bulk-email-form/BuildEmailFormExtensible/context/reducer';
import messages from './messages';
import './styles.scss';
var ERROR = 'error';
var COMPLETE = 'complete';
var COMPLETE_SCHEDULE = 'completeSchedule';
var LOADING_TEAMS = 'loadingTeams';
var PENDING = 'pending';
var formStatusToast = [ERROR, COMPLETE, COMPLETE_SCHEDULE, LOADING_TEAMS];
var ScheduleSection = function ScheduleSection(_ref) {
  var openTaskAlert = _ref.openTaskAlert;
  var intl = useIntl();
  var isMobile = useMobileResponsive();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    scheduleInputChanged = _useState2[0],
    isScheduleInputChanged = _useState2[1];
  var formData = useSelector(function (state) {
    return state.form;
  });
  var dispatch = useDispatch();
  var isScheduled = formData.isScheduled,
    _formData$scheduleDat = formData.scheduleDate,
    scheduleDate = _formData$scheduleDat === void 0 ? '' : _formData$scheduleDat,
    _formData$scheduleTim = formData.scheduleTime,
    scheduleTime = _formData$scheduleTim === void 0 ? '' : _formData$scheduleTim,
    isEditMode = formData.isEditMode,
    formStatus = formData.formStatus,
    _formData$isScheduled = formData.isScheduledSubmitted,
    isScheduledSubmitted = _formData$isScheduled === void 0 ? false : _formData$isScheduled,
    _formData$isLoadingTe = formData.isLoadingTeams,
    isLoadingTeams = _formData$isLoadingTe === void 0 ? false : _formData$isLoadingTe;
  var formStatusErrors = {
    error: intl.formatMessage(messages.ScheduleSectionSubmitFormError),
    complete: intl.formatMessage(messages.ScheduleSectionSubmitFormSuccess),
    completeSchedule: intl.formatMessage(messages.ScheduleSectionSubmitFormScheduledSuccess)
  };
  var handleChangeScheduled = function handleChangeScheduled() {
    var newSchedule = !isScheduled;
    var newFormStatus = newSchedule ? 'schedule' : 'default';
    dispatch(formActions.updateForm({
      formStatus: newFormStatus,
      isScheduled: newSchedule
    }));
  };
  var handleScheduleDate = function handleScheduleDate(_ref2) {
    var _ref2$target = _ref2.target,
      name = _ref2$target.name,
      value = _ref2$target.value;
    dispatch(formActions.updateForm(_defineProperty({}, name, value)));
    if (!scheduleInputChanged) {
      isScheduleInputChanged(true);
    }
  };
  var scheduleFields = isScheduledSubmitted ? scheduleDate.length > 0 && scheduleTime.length > 0 && scheduleInputChanged : true;
  var checkIsValidSchedule = isScheduled ? scheduleFields : true;
  var handleResetFormValues = function handleResetFormValues() {
    dispatch(formActions.resetForm());
  };
  var handleCloseToast = function handleCloseToast() {
    dispatch(formActions.updateForm({
      formStatus: 'default'
    }));
  };
  var handleClickStatefulButton = function handleClickStatefulButton(event) {
    event.preventDefault();
    if (formStatus === 'schedule' && !isScheduledSubmitted) {
      dispatch(formActions.updateForm({
        isScheduleButtonClicked: true
      }));
    }
    openTaskAlert();
  };
  var statefulButtonIcons = useMemo(function () {
    return {
      "default": /*#__PURE__*/React.createElement(Icon, {
        src: Send
      }),
      schedule: /*#__PURE__*/React.createElement(Icon, {
        src: Event
      }),
      reschedule: /*#__PURE__*/React.createElement(Icon, {
        src: Event
      }),
      pending: /*#__PURE__*/React.createElement(Icon, {
        src: SpinnerSimple,
        className: "icon-spin"
      }),
      complete: /*#__PURE__*/React.createElement(Icon, {
        src: Check
      }),
      completeSchedule: /*#__PURE__*/React.createElement(Icon, {
        src: Check
      }),
      error: /*#__PURE__*/React.createElement(Icon, {
        src: Cancel
      }),
      isLoadingTeams: /*#__PURE__*/React.createElement(Icon, {
        src: Send
      })
    };
  }, []);
  var statefulButtonLabels = useMemo(function () {
    return {
      "default": intl.formatMessage(messages.ScheduleSectionSubmitButtonDefault),
      schedule: intl.formatMessage(messages.ScheduleSectionSubmitButtonSchedule),
      reschedule: intl.formatMessage(messages.ScheduleSectionSubmitButtonReschedule),
      pending: intl.formatMessage(messages.ScheduleSectionSubmitButtonPending),
      complete: intl.formatMessage(messages.ScheduleSectionSubmitButtonComplete),
      completeSchedule: intl.formatMessage(messages.ScheduleSectionSubmitButtonCompleteSchedule),
      error: intl.formatMessage(messages.ScheduleSectionSubmitButtonError),
      loadingTeams: intl.formatMessage(messages.ScheduleSectionSubmitButtonDefault)
    };
  }, [intl]);
  var statefulButtonDisableStates = useMemo(function () {
    return [PENDING, COMPLETE, COMPLETE_SCHEDULE, isLoadingTeams ? LOADING_TEAMS : ''];
  }, [isLoadingTeams]);
  return /*#__PURE__*/React.createElement(Form.Group, null, getConfig().SCHEDULE_EMAIL_SECTION && /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement(Form.Checkbox, {
    name: "scheduleEmailBox",
    checked: isScheduled,
    onChange: handleChangeScheduled,
    disabled: formStatus === 'pending'
  }, intl.formatMessage(messages.ScheduleSectionSubmitScheduleBox))), isScheduled && /*#__PURE__*/React.createElement(ScheduleEmailForm, {
    isValid: checkIsValidSchedule,
    onDateTimeChange: handleScheduleDate,
    dateTime: {
      date: scheduleDate,
      time: scheduleTime
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames('d-flex', {
      'mt-n4.5': !isScheduled && !isMobile,
      'flex-row-reverse align-items-end': !isMobile,
      'border-top pt-2': isScheduled
    })
  }, isEditMode && /*#__PURE__*/React.createElement(Button, {
    className: "ml-2",
    variant: "outline-brand",
    onClick: handleResetFormValues
  }, "Cancel"), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/React.createElement(StatefulButton, {
    className: "send-email-btn",
    "data-testid": "send-email-btn",
    variant: "primary",
    onClick: handleClickStatefulButton,
    state: isLoadingTeams ? LOADING_TEAMS : formStatus,
    icons: statefulButtonIcons,
    labels: statefulButtonLabels,
    disabledStates: statefulButtonDisableStates
  }), isLoadingTeams && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    className: "mt-1",
    icon: /*#__PURE__*/React.createElement(Spinner, {
      animation: "border",
      className: "mie-3 loading-teams-spinner__medium",
      screenReaderText: "loading"
    })
  }, intl.formatMessage(messages.ScheduleSectionSubmitButtonFeedBackLoadingTeams))), /*#__PURE__*/React.createElement(Toast, {
    show: formStatusToast.includes(formStatus),
    onClose: handleCloseToast
  }, formStatusErrors[formStatus] || '')));
};
ScheduleSection.defaultProps = {
  openTaskAlert: function openTaskAlert() {}
};
ScheduleSection.propTypes = {
  openTaskAlert: PropTypes.func
};
export default ScheduleSection;
//# sourceMappingURL=index.js.map