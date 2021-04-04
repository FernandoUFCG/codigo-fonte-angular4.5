'use strict';
// eslint-disable-next-line no-self-compare
function simpleCompare(a, b) { return a === b || (a !== a && b !== b); }
var csp = function () {
  if (!isDefined(csp.rules)) {


    var ngCspElement = (window.document.querySelector('[ng-csp]') ||
      window.document.querySelector('[data-ng-csp]'));

    if (ngCspElement) {
      var ngCspAttribute = ngCspElement.getAttribute('ng-csp') ||
        ngCspElement.getAttribute('data-ng-csp');
      csp.rules = {
        noUnsafeEval: !ngCspAttribute || (ngCspAttribute.indexOf('no-unsafe-eval') !== -1),
        noInlineStyle: !ngCspAttribute || (ngCspAttribute.indexOf('no-inline-style') !== -1)
      };
    } else {
      csp.rules = {
        noUnsafeEval: noUnsafeEval(),
        noInlineStyle: false
      };
    }
  }

  return csp.rules;

  function noUnsafeEval() {
    try {
      // eslint-disable-next-line no-new, no-new-func
      new Function('');
      return false;
    } catch (e) {
      return true;
    }
  }
};
