/*!
 * figlet.js v1.5.0
 * http://patorjk.com/software/taag
 *
 * Copyright 2011-2019 Patrick Gillespie
 * Licensed under the MIT license
 * http://opensource.org/licenses/MIT
 */
!(function(t, e) {
  if ('object' == typeof exports && 'undefined' != typeof module) module.exports = e();
  else if ('function' == typeof define && define.amd) define([], e);
  else {
    var r;
    'undefined' != typeof window ? (r = window) : 'undefined' != typeof global ? (r = global) : 'undefined' != typeof self && (r = self), (r.figlet = e());
  }
})(this, function() {
  return (function(t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (e.m = t),
      (e.c = n),
      (e.i = function(t) {
        return t;
      }),
      (e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
      }),
      (e.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return e.d(n, 'a', n), n;
      }),
      (e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ''),
      e((e.s = 4))
    );
  })([
    function(t, e, n) {
      'use strict';
      function r(t) {
        var e,
          n = t.length,
          r = 0,
          o = '';
        for (r = 0; r < n; r++) (e = t[r]), (o += e.line + '\n');
        return o;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.print = r);
    },
    function(t, e, n) {
      'use strict';
      function r(t) {
        return 32 === t ? 0 : t >= 33 && t <= 126 ? t - 32 : 95;
      }
      function o(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = r(t.charCodeAt(n));
        return e;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.toA1Z26 = o);
    },
    function(t, e, n) {
      'use strict';
      function r(t) {
        var e = t.split('\n'),
          n = [];
        return (
          e.forEach(function(t) {
            var e = t.substring(0, t.indexOf(' ')),
              r = t.substring(t.indexOf(' ') + 1);
            n.push({ name: e, font: i.toA1Z26(r) });
          }),
          n
        );
      }
      var o = n(1),
        i = n(2);
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.parseFont = r);
    },
    function(t, e, n) {
      'use strict';
      function r(t) {
        var e = (t && t.font) || [],
          n = (t && t.kerningPairs) || [];
        (this.chars = e), (this.kerningPairs = n);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Font = r);
    },
    function(t, e, n) {
      'use strict';
      function r(t) {
        if ('string' != typeof t) throw new Error('The given font should be a string');
        var e = i.parseFont(t),
          n = new o.Font(e);
        return n;
      }
      var o = n(3),
        i = n(2);
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.textSync = r), (e.Font = o.Font);
    }
  ]);
});
