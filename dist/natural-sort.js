/*!
 * natural-sort.js
 * ===============
 * Sorting with support for numbers, dates, unicode and more.
 *
 * http://github.com/studio-b12/natural-sort
 * MIT License, © Studio B12 GmbH 2014
 *
 *//*
 *
 * Idea by Dave Koelle
 * Original implementation by Jim Palmer
 * Modified by Tomek Wiszniewski
 *
 */

var naturalSort = function naturalSort (options) { 'use strict';
  if (!options) options = {};

  return function(a, b) {
    var EQUAL = 0;
    var GREATER = (options.direction == 'desc' ?
      -1 :
      1
    );
    var SMALLER = -GREATER;

    var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi;
    var sre = /(^[ ]*|[ ]*$)/g;
    var dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;
    var hre = /^0x[0-9a-f]+$/i;
    var ore = /^0/;

    var normalize = function normalize (value) {
      var string = '' + value;
      return (options.caseSensitive ?
        string :
        string.toLowerCase()
      );
    };

    // Normalize values to strings
    var x = normalize(a).replace(sre, '') || '';
    var y = normalize(b).replace(sre, '') || '';

    // chunk/tokenize
    var xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0');
    var yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0');

    // Return immediately if at least one of the values is empty.
    if (!x && !y) return EQUAL;
    if (!x &&  y) return GREATER;
    if ( x && !y) return SMALLER;

    // numeric, hex or date detection
    var xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x));
    var yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null;
    var oFxNcL, oFyNcL;

    // first try and sort Hex codes or Dates
    if (yD) {
      if ( xD < yD ) return SMALLER;
      else if ( xD > yD ) return GREATER;
    }

    // natural sorting through split numeric strings and default strings
    for (var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {

      // find floats not starting with '0', string or 0 if not defined (Clint Priest)
      oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
      oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;

      // handle numeric vs string comparison - number < string - (Kyle Adams)
      if (isNaN(oFxNcL) !== isNaN(oFyNcL)) return (isNaN(oFxNcL)) ? GREATER : SMALLER;

      // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
      else if (typeof oFxNcL !== typeof oFyNcL) {
        oFxNcL += '';
        oFyNcL += '';
      }

      if (oFxNcL < oFyNcL) return SMALLER;
      if (oFxNcL > oFyNcL) return GREATER;
    }

    return EQUAL;
  };
};

(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.naturalSort = factory();
  }
}(this, function () {

  return naturalSort;

}));
