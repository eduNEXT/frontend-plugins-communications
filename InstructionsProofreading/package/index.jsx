import React, { memo } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';
var InstructionsProofreading = function InstructionsProofreading() {
  var intl = useIntl();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, intl.formatMessage(messages.instructionsProofreading)));
};
export default /*#__PURE__*/memo(InstructionsProofreading);
//# sourceMappingURL=index.js.map