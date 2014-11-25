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

var naturalSort = function naturalSort (a, b) { 'use strict';
    var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi;
    var sre = /(^[ ]*|[ ]*$)/g;
    var dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;
    var hre = /^0x[0-9a-f]+$/i;
    var ore = /^0/;
    var i = function(s) { return naturalSort.insensitive && (''+s).toLowerCase() || ''+s; };

    // convert all to strings strip whitespace
    var x = i(a).replace(sre, '') || '';
    var y = i(b).replace(sre, '') || '';

    // chunk/tokenize
    var xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0');
    var yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0');

    // numeric, hex or date detection
    var xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x));
    var yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null;
    var oFxNcL, oFyNcL;

    // first try and sort Hex codes or Dates
    if (yD) {
        if ( xD < yD ) return -1;
        else if ( xD > yD ) return 1;
        }

    // natural sorting through split numeric strings and default strings
    for (var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
        // find floats not starting with '0', string or 0 if not defined (Clint Priest)
        oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
        oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
        // handle numeric vs string comparison - number < string - (Kyle Adams)
        if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
        // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
        else if (typeof oFxNcL !== typeof oFyNcL) {
            oFxNcL += '';
            oFyNcL += '';
            }
        if (oFxNcL < oFyNcL) return -1;
        if (oFxNcL > oFyNcL) return 1;
        }
    };

/* exported naturalSort */
