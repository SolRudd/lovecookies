import Rd, { useState as ai, useEffect as Zd } from "react";
import Vd from "react-dom";
import { AnimatePresence as vv, motion as ui } from "framer-motion";
var ei = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yv;
function Kd() {
  if (yv) return ye;
  yv = 1;
  var M = Symbol.for("react.transitional.element"), F = Symbol.for("react.fragment");
  function el(S, ll, cl) {
    var tt = null;
    if (cl !== void 0 && (tt = "" + cl), ll.key !== void 0 && (tt = "" + ll.key), "key" in ll) {
      cl = {};
      for (var ct in ll)
        ct !== "key" && (cl[ct] = ll[ct]);
    } else cl = ll;
    return ll = cl.ref, {
      $$typeof: M,
      type: S,
      key: tt,
      ref: ll !== void 0 ? ll : null,
      props: cl
    };
  }
  return ye.Fragment = F, ye.jsx = el, ye.jsxs = el, ye;
}
var dv;
function Ld() {
  return dv || (dv = 1, ei.exports = Kd()), ei.exports;
}
var H = Ld(), ni = { exports: {} }, de = {}, fi = { exports: {} }, ci = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function Jd() {
  return hv || (hv = 1, (function(M) {
    function F(b, A) {
      var U = b.length;
      b.push(A);
      l: for (; 0 < U; ) {
        var w = U - 1 >>> 1, W = b[w];
        if (0 < ll(W, A))
          b[w] = A, b[U] = W, U = w;
        else break l;
      }
    }
    function el(b) {
      return b.length === 0 ? null : b[0];
    }
    function S(b) {
      if (b.length === 0) return null;
      var A = b[0], U = b.pop();
      if (U !== A) {
        b[0] = U;
        l: for (var w = 0, W = b.length, El = W >>> 1; w < El; ) {
          var P = 2 * (w + 1) - 1, R = b[P], hl = P + 1, vt = b[hl];
          if (0 > ll(R, U))
            hl < W && 0 > ll(vt, R) ? (b[w] = vt, b[hl] = U, w = hl) : (b[w] = R, b[P] = U, w = P);
          else if (hl < W && 0 > ll(vt, U))
            b[w] = vt, b[hl] = U, w = hl;
          else break l;
        }
      }
      return A;
    }
    function ll(b, A) {
      var U = b.sortIndex - A.sortIndex;
      return U !== 0 ? U : b.id - A.id;
    }
    if (M.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var cl = performance;
      M.unstable_now = function() {
        return cl.now();
      };
    } else {
      var tt = Date, ct = tt.now();
      M.unstable_now = function() {
        return tt.now() - ct;
      };
    }
    var Ol = [], G = [], Tl = 1, x = null, tl = 3, it = !1, at = !1, Vl = !1, _a = !1, Ha = typeof setTimeout == "function" ? setTimeout : null, ou = typeof clearTimeout == "function" ? clearTimeout : null, Kl = typeof setImmediate < "u" ? setImmediate : null;
    function jt(b) {
      for (var A = el(G); A !== null; ) {
        if (A.callback === null) S(G);
        else if (A.startTime <= b)
          S(G), A.sortIndex = A.expirationTime, F(Ol, A);
        else break;
        A = el(G);
      }
    }
    function ia(b) {
      if (Vl = !1, jt(b), !at)
        if (el(Ol) !== null)
          at = !0, mt || (mt = !0, Ll());
        else {
          var A = el(G);
          A !== null && gt(ia, A.startTime - b);
        }
    }
    var mt = !1, St = -1, ut = 5, xa = -1;
    function he() {
      return _a ? !0 : !(M.unstable_now() - xa < ut);
    }
    function qa() {
      if (_a = !1, mt) {
        var b = M.unstable_now();
        xa = b;
        var A = !0;
        try {
          l: {
            at = !1, Vl && (Vl = !1, ou(St), St = -1), it = !0;
            var U = tl;
            try {
              t: {
                for (jt(b), x = el(Ol); x !== null && !(x.expirationTime > b && he()); ) {
                  var w = x.callback;
                  if (typeof w == "function") {
                    x.callback = null, tl = x.priorityLevel;
                    var W = w(
                      x.expirationTime <= b
                    );
                    if (b = M.unstable_now(), typeof W == "function") {
                      x.callback = W, jt(b), A = !0;
                      break t;
                    }
                    x === el(Ol) && S(Ol), jt(b);
                  } else S(Ol);
                  x = el(Ol);
                }
                if (x !== null) A = !0;
                else {
                  var El = el(G);
                  El !== null && gt(
                    ia,
                    El.startTime - b
                  ), A = !1;
                }
              }
              break l;
            } finally {
              x = null, tl = U, it = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Ll() : mt = !1;
        }
      }
    }
    var Ll;
    if (typeof Kl == "function")
      Ll = function() {
        Kl(qa);
      };
    else if (typeof MessageChannel < "u") {
      var se = new MessageChannel(), bu = se.port2;
      se.port1.onmessage = qa, Ll = function() {
        bu.postMessage(null);
      };
    } else
      Ll = function() {
        Ha(qa, 0);
      };
    function gt(b, A) {
      St = Ha(function() {
        b(M.unstable_now());
      }, A);
    }
    M.unstable_IdlePriority = 5, M.unstable_ImmediatePriority = 1, M.unstable_LowPriority = 4, M.unstable_NormalPriority = 3, M.unstable_Profiling = null, M.unstable_UserBlockingPriority = 2, M.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, M.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ut = 0 < b ? Math.floor(1e3 / b) : 5;
    }, M.unstable_getCurrentPriorityLevel = function() {
      return tl;
    }, M.unstable_next = function(b) {
      switch (tl) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = tl;
      }
      var U = tl;
      tl = A;
      try {
        return b();
      } finally {
        tl = U;
      }
    }, M.unstable_requestPaint = function() {
      _a = !0;
    }, M.unstable_runWithPriority = function(b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var U = tl;
      tl = b;
      try {
        return A();
      } finally {
        tl = U;
      }
    }, M.unstable_scheduleCallback = function(b, A, U) {
      var w = M.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? w + U : w) : U = w, b) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = U + W, b = {
        id: Tl++,
        callback: A,
        priorityLevel: b,
        startTime: U,
        expirationTime: W,
        sortIndex: -1
      }, U > w ? (b.sortIndex = U, F(G, b), el(Ol) === null && b === el(G) && (Vl ? (ou(St), St = -1) : Vl = !0, gt(ia, U - w))) : (b.sortIndex = W, F(Ol, b), at || it || (at = !0, mt || (mt = !0, Ll()))), b;
    }, M.unstable_shouldYield = he, M.unstable_wrapCallback = function(b) {
      var A = tl;
      return function() {
        var U = tl;
        tl = A;
        try {
          return b.apply(this, arguments);
        } finally {
          tl = U;
        }
      };
    };
  })(ci)), ci;
}
var sv;
function rd() {
  return sv || (sv = 1, fi.exports = Jd()), fi.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv;
function wd() {
  if (Sv) return de;
  Sv = 1;
  var M = rd(), F = Rd, el = Vd;
  function S(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ll(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function cl(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function tt(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ct(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ol(l) {
    if (cl(l) !== l)
      throw Error(S(188));
  }
  function G(l) {
    var t = l.alternate;
    if (!t) {
      if (t = cl(l), t === null) throw Error(S(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return Ol(e), l;
          if (n === u) return Ol(e), t;
          n = n.sibling;
        }
        throw Error(S(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(S(189));
        }
      }
      if (a.alternate !== u) throw Error(S(190));
    }
    if (a.tag !== 3) throw Error(S(188));
    return a.stateNode.current === a ? l : t;
  }
  function Tl(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = Tl(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var x = Object.assign, tl = Symbol.for("react.element"), it = Symbol.for("react.transitional.element"), at = Symbol.for("react.portal"), Vl = Symbol.for("react.fragment"), _a = Symbol.for("react.strict_mode"), Ha = Symbol.for("react.profiler"), ou = Symbol.for("react.consumer"), Kl = Symbol.for("react.context"), jt = Symbol.for("react.forward_ref"), ia = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), xa = Symbol.for("react.activity"), he = Symbol.for("react.memo_cache_sentinel"), qa = Symbol.iterator;
  function Ll(l) {
    return l === null || typeof l != "object" ? null : (l = qa && l[qa] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var se = Symbol.for("react.client.reference");
  function bu(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === se ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Vl:
        return "Fragment";
      case Ha:
        return "Profiler";
      case _a:
        return "StrictMode";
      case ia:
        return "Suspense";
      case mt:
        return "SuspenseList";
      case xa:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case at:
          return "Portal";
        case Kl:
          return l.displayName || "Context";
        case ou:
          return (l._context.displayName || "Context") + ".Consumer";
        case jt:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case St:
          return t = l.displayName || null, t !== null ? t : bu(l.type) || "Memo";
        case ut:
          t = l._payload, l = l._init;
          try {
            return bu(l(t));
          } catch {
          }
      }
    return null;
  }
  var gt = Array.isArray, b = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = el.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, w = [], W = -1;
  function El(l) {
    return { current: l };
  }
  function P(l) {
    0 > W || (l.current = w[W], w[W] = null, W--);
  }
  function R(l, t) {
    W++, w[W] = l.current, l.current = t;
  }
  var hl = El(null), vt = El(null), pt = El(null), Se = El(null);
  function ge(l, t) {
    switch (R(pt, t), R(vt, l), R(hl, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ym(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Ym(t), l = Cm(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    P(hl), R(hl, l);
  }
  function Ba() {
    P(hl), P(vt), P(pt);
  }
  function pn(l) {
    l.memoizedState !== null && R(Se, l);
    var t = hl.current, a = Cm(t, l.type);
    t !== a && (R(vt, l), R(hl, a));
  }
  function oe(l) {
    vt.current === l && (P(hl), P(vt)), Se.current === l && (P(Se), ce._currentValue = U);
  }
  var Qn, mi;
  function ma(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Qn = t && t[1] || "", mi = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qn + l + mi;
  }
  var Gn = !1;
  function Xn(l, t) {
    if (!l || Gn) return "";
    Gn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (s) {
                  var h = s;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (s) {
                  h = s;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (s) {
                h = s;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (s) {
            if (s && h && typeof s.stack == "string")
              return [s.stack, h.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), d = c.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === i.length || e === d.length)
          for (u = i.length - 1, e = d.length - 1; 1 <= u && 0 <= e && i[u] !== d[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== d[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || i[u] !== d[e]) {
                  var g = `
` + i[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      Gn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? ma(a) : "";
  }
  function ov(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ma(l.type);
      case 16:
        return ma("Lazy");
      case 13:
        return l.child !== t && t !== null ? ma("Suspense Fallback") : ma("Suspense");
      case 19:
        return ma("SuspenseList");
      case 0:
      case 15:
        return Xn(l.type, !1);
      case 11:
        return Xn(l.type.render, !1);
      case 1:
        return Xn(l.type, !0);
      case 31:
        return ma("Activity");
      default:
        return "";
    }
  }
  function vi(l) {
    try {
      var t = "", a = null;
      do
        t += ov(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Rn = Object.prototype.hasOwnProperty, Zn = M.unstable_scheduleCallback, Vn = M.unstable_cancelCallback, bv = M.unstable_shouldYield, zv = M.unstable_requestPaint, Bl = M.unstable_now, Av = M.unstable_getCurrentPriorityLevel, yi = M.unstable_ImmediatePriority, di = M.unstable_UserBlockingPriority, be = M.unstable_NormalPriority, Tv = M.unstable_LowPriority, hi = M.unstable_IdlePriority, Ev = M.log, Mv = M.unstable_setDisableYieldValue, zu = null, Yl = null;
  function Qt(l) {
    if (typeof Ev == "function" && Mv(l), Yl && typeof Yl.setStrictMode == "function")
      try {
        Yl.setStrictMode(zu, l);
      } catch {
      }
  }
  var Cl = Math.clz32 ? Math.clz32 : Uv, Ov = Math.log, Dv = Math.LN2;
  function Uv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ov(l) / Dv | 0) | 0;
  }
  var ze = 256, Ae = 262144, Te = 4194304;
  function va(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ee(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? e = va(u) : (f &= c, f !== 0 ? e = va(f) : a || (a = c & ~l, a !== 0 && (e = va(a))))) : (c = u & ~n, c !== 0 ? e = va(c) : f !== 0 ? e = va(f) : a || (a = u & ~l, a !== 0 && (e = va(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Au(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Nv(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function si() {
    var l = Te;
    return Te <<= 1, (Te & 62914560) === 0 && (Te = 4194304), l;
  }
  function Kn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Tu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function _v(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - Cl(a), z = 1 << g;
      c[g] = 0, i[g] = -1;
      var h = d[g];
      if (h !== null)
        for (d[g] = null, g = 0; g < h.length; g++) {
          var s = h[g];
          s !== null && (s.lane &= -536870913);
        }
      a &= ~z;
    }
    u !== 0 && Si(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Si(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - Cl(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function gi(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - Cl(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function oi(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Ln(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Ln(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Jn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function bi() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : uv(l.type));
  }
  function zi(l, t) {
    var a = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = a;
    }
  }
  var Gt = Math.random().toString(36).slice(2), gl = "__reactFiber$" + Gt, Dl = "__reactProps$" + Gt, Ya = "__reactContainer$" + Gt, rn = "__reactEvents$" + Gt, Hv = "__reactListeners$" + Gt, xv = "__reactHandles$" + Gt, Ai = "__reactResources$" + Gt, Eu = "__reactMarker$" + Gt;
  function wn(l) {
    delete l[gl], delete l[Dl], delete l[rn], delete l[Hv], delete l[xv];
  }
  function Ca(l) {
    var t = l[gl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Ya] || a[gl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Zm(l); l !== null; ) {
            if (a = l[gl]) return a;
            l = Zm(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function ja(l) {
    if (l = l[gl] || l[Ya]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Mu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(S(33));
  }
  function pa(l) {
    var t = l[Ai];
    return t || (t = l[Ai] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function sl(l) {
    l[Eu] = !0;
  }
  var Ti = /* @__PURE__ */ new Set(), Ei = {};
  function ya(l, t) {
    Qa(l, t), Qa(l + "Capture", t);
  }
  function Qa(l, t) {
    for (Ei[l] = t, l = 0; l < t.length; l++)
      Ti.add(t[l]);
  }
  var qv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mi = {}, Oi = {};
  function Bv(l) {
    return Rn.call(Oi, l) ? !0 : Rn.call(Mi, l) ? !1 : qv.test(l) ? Oi[l] = !0 : (Mi[l] = !0, !1);
  }
  function Me(l, t, a) {
    if (Bv(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Oe(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function ot(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function Jl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Di(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Yv(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Wn(l) {
    if (!l._valueTracker) {
      var t = Di(l) ? "checked" : "value";
      l._valueTracker = Yv(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Ui(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = Di(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Cv = /[\n"\\]/g;
  function rl(l) {
    return l.replace(
      Cv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $n(l, t, a, u, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Jl(t)) : l.value !== "" + Jl(t) && (l.value = "" + Jl(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? kn(l, f, Jl(t)) : a != null ? kn(l, f, Jl(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Jl(c) : l.removeAttribute("name");
  }
  function Ni(l, t, a, u, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Wn(l);
        return;
      }
      a = a != null ? "" + Jl(a) : "", t = t != null ? "" + Jl(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), Wn(l);
  }
  function kn(l, t, a) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ga(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + Jl(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _i(l, t, a) {
    if (t != null && (t = "" + Jl(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + Jl(a) : "";
  }
  function Hi(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(S(92));
        if (gt(u)) {
          if (1 < u.length) throw Error(S(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = Jl(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), Wn(l);
  }
  function Xa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var jv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function xi(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || jv.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function qi(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(S(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && xi(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && xi(l, n, t[n]);
  }
  function Fn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var pv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Qv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ue(l) {
    return Qv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function bt() {
  }
  var In = null;
  function Pn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Ra = null, Za = null;
  function Bi(l) {
    var t = ja(l);
    if (t && (l = t.stateNode)) {
      var a = l[Dl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if ($n(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + rl(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Dl] || null;
                if (!e) throw Error(S(90));
                $n(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Ui(u);
          }
          break l;
        case "textarea":
          _i(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ga(l, !!a.multiple, t, !1);
      }
    }
  }
  var lf = !1;
  function Yi(l, t, a) {
    if (lf) return l(t, a);
    lf = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (lf = !1, (Ra !== null || Za !== null) && (sn(), Ra && (t = Ra, l = Za, Za = Ra = null, Bi(t), l)))
        for (t = 0; t < l.length; t++) Bi(l[t]);
    }
  }
  function Ou(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Dl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        S(231, t, typeof a)
      );
    return a;
  }
  var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tf = !1;
  if (zt)
    try {
      var Du = {};
      Object.defineProperty(Du, "passive", {
        get: function() {
          tf = !0;
        }
      }), window.addEventListener("test", Du, Du), window.removeEventListener("test", Du, Du);
    } catch {
      tf = !1;
    }
  var Xt = null, af = null, Ne = null;
  function Ci() {
    if (Ne) return Ne;
    var l, t = af, a = t.length, u, e = "value" in Xt ? Xt.value : Xt.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return Ne = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function _e(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function He() {
    return !0;
  }
  function ji() {
    return !1;
  }
  function Ul(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? He : ji, this.isPropagationStopped = ji, this;
    }
    return x(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = He);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = He);
      },
      persist: function() {
      },
      isPersistent: He
    }), t;
  }
  var da = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, xe = Ul(da), Uu = x({}, da, { view: 0, detail: 0 }), Gv = Ul(Uu), uf, ef, Nu, qe = x({}, Uu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ff,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Nu && (Nu && l.type === "mousemove" ? (uf = l.screenX - Nu.screenX, ef = l.screenY - Nu.screenY) : ef = uf = 0, Nu = l), uf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ef;
    }
  }), pi = Ul(qe), Xv = x({}, qe, { dataTransfer: 0 }), Rv = Ul(Xv), Zv = x({}, Uu, { relatedTarget: 0 }), nf = Ul(Zv), Vv = x({}, da, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Kv = Ul(Vv), Lv = x({}, da, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Jv = Ul(Lv), rv = x({}, da, { data: 0 }), Qi = Ul(rv), wv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Wv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, $v = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function kv(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = $v[l]) ? !!t[l] : !1;
  }
  function ff() {
    return kv;
  }
  var Fv = x({}, Uu, {
    key: function(l) {
      if (l.key) {
        var t = wv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = _e(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Wv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ff,
    charCode: function(l) {
      return l.type === "keypress" ? _e(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? _e(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Iv = Ul(Fv), Pv = x({}, qe, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Gi = Ul(Pv), ly = x({}, Uu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ff
  }), ty = Ul(ly), ay = x({}, da, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), uy = Ul(ay), ey = x({}, qe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ny = Ul(ey), fy = x({}, da, {
    newState: 0,
    oldState: 0
  }), cy = Ul(fy), iy = [9, 13, 27, 32], cf = zt && "CompositionEvent" in window, _u = null;
  zt && "documentMode" in document && (_u = document.documentMode);
  var my = zt && "TextEvent" in window && !_u, Xi = zt && (!cf || _u && 8 < _u && 11 >= _u), Ri = " ", Zi = !1;
  function Vi(l, t) {
    switch (l) {
      case "keyup":
        return iy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ki(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Va = !1;
  function vy(l, t) {
    switch (l) {
      case "compositionend":
        return Ki(t);
      case "keypress":
        return t.which !== 32 ? null : (Zi = !0, Ri);
      case "textInput":
        return l = t.data, l === Ri && Zi ? null : l;
      default:
        return null;
    }
  }
  function yy(l, t) {
    if (Va)
      return l === "compositionend" || !cf && Vi(l, t) ? (l = Ci(), Ne = af = Xt = null, Va = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Xi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var dy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Li(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!dy[l.type] : t === "textarea";
  }
  function Ji(l, t, a, u) {
    Ra ? Za ? Za.push(u) : Za = [u] : Ra = u, t = Tn(t, "onChange"), 0 < t.length && (a = new xe(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var Hu = null, xu = null;
  function hy(l) {
    Nm(l, 0);
  }
  function Be(l) {
    var t = Mu(l);
    if (Ui(t)) return l;
  }
  function ri(l, t) {
    if (l === "change") return t;
  }
  var wi = !1;
  if (zt) {
    var mf;
    if (zt) {
      var vf = "oninput" in document;
      if (!vf) {
        var Wi = document.createElement("div");
        Wi.setAttribute("oninput", "return;"), vf = typeof Wi.oninput == "function";
      }
      mf = vf;
    } else mf = !1;
    wi = mf && (!document.documentMode || 9 < document.documentMode);
  }
  function $i() {
    Hu && (Hu.detachEvent("onpropertychange", ki), xu = Hu = null);
  }
  function ki(l) {
    if (l.propertyName === "value" && Be(xu)) {
      var t = [];
      Ji(
        t,
        xu,
        l,
        Pn(l)
      ), Yi(hy, t);
    }
  }
  function sy(l, t, a) {
    l === "focusin" ? ($i(), Hu = t, xu = a, Hu.attachEvent("onpropertychange", ki)) : l === "focusout" && $i();
  }
  function Sy(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(xu);
  }
  function gy(l, t) {
    if (l === "click") return Be(t);
  }
  function oy(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function by(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var jl = typeof Object.is == "function" ? Object.is : by;
  function qu(l, t) {
    if (jl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Rn.call(t, e) || !jl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Fi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ii(l, t) {
    var a = Fi(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Fi(a);
    }
  }
  function Pi(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pi(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function l0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = De(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = De(l.document);
    }
    return t;
  }
  function yf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var zy = zt && "documentMode" in document && 11 >= document.documentMode, Ka = null, df = null, Bu = null, hf = !1;
  function t0(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    hf || Ka == null || Ka !== De(u) || (u = Ka, "selectionStart" in u && yf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Bu && qu(Bu, u) || (Bu = u, u = Tn(df, "onSelect"), 0 < u.length && (t = new xe(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = Ka)));
  }
  function ha(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var La = {
    animationend: ha("Animation", "AnimationEnd"),
    animationiteration: ha("Animation", "AnimationIteration"),
    animationstart: ha("Animation", "AnimationStart"),
    transitionrun: ha("Transition", "TransitionRun"),
    transitionstart: ha("Transition", "TransitionStart"),
    transitioncancel: ha("Transition", "TransitionCancel"),
    transitionend: ha("Transition", "TransitionEnd")
  }, sf = {}, a0 = {};
  zt && (a0 = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function sa(l) {
    if (sf[l]) return sf[l];
    if (!La[l]) return l;
    var t = La[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in a0)
        return sf[l] = t[a];
    return l;
  }
  var u0 = sa("animationend"), e0 = sa("animationiteration"), n0 = sa("animationstart"), Ay = sa("transitionrun"), Ty = sa("transitionstart"), Ey = sa("transitioncancel"), f0 = sa("transitionend"), c0 = /* @__PURE__ */ new Map(), Sf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Sf.push("scrollEnd");
  function et(l, t) {
    c0.set(l, t), ya(t, [l]);
  }
  var Ye = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, wl = [], Ja = 0, gf = 0;
  function Ce() {
    for (var l = Ja, t = gf = Ja = 0; t < l; ) {
      var a = wl[t];
      wl[t++] = null;
      var u = wl[t];
      wl[t++] = null;
      var e = wl[t];
      wl[t++] = null;
      var n = wl[t];
      if (wl[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && i0(a, e, n);
    }
  }
  function je(l, t, a, u) {
    wl[Ja++] = l, wl[Ja++] = t, wl[Ja++] = a, wl[Ja++] = u, gf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function of(l, t, a, u) {
    return je(l, t, a, u), pe(l);
  }
  function Sa(l, t) {
    return je(l, null, null, t), pe(l);
  }
  function i0(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Cl(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function pe(l) {
    if (50 < le)
      throw le = 0, Uc = null, Error(S(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ra = {};
  function My(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pl(l, t, a, u) {
    return new My(l, t, a, u);
  }
  function bf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function At(l, t) {
    var a = l.alternate;
    return a === null ? (a = pl(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function m0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Qe(l, t, a, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") bf(l) && (f = 1);
    else if (typeof l == "string")
      f = _d(
        l,
        a,
        hl.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case xa:
          return l = pl(31, a, t, e), l.elementType = xa, l.lanes = n, l;
        case Vl:
          return ga(a.children, e, n, t);
        case _a:
          f = 8, e |= 24;
          break;
        case Ha:
          return l = pl(12, a, t, e | 2), l.elementType = Ha, l.lanes = n, l;
        case ia:
          return l = pl(13, a, t, e), l.elementType = ia, l.lanes = n, l;
        case mt:
          return l = pl(19, a, t, e), l.elementType = mt, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Kl:
                f = 10;
                break l;
              case ou:
                f = 9;
                break l;
              case jt:
                f = 11;
                break l;
              case St:
                f = 14;
                break l;
              case ut:
                f = 16, u = null;
                break l;
            }
          f = 29, a = Error(
            S(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = pl(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function ga(l, t, a, u) {
    return l = pl(7, l, u, t), l.lanes = a, l;
  }
  function zf(l, t, a) {
    return l = pl(6, l, null, t), l.lanes = a, l;
  }
  function v0(l) {
    var t = pl(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Af(l, t, a) {
    return t = pl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var y0 = /* @__PURE__ */ new WeakMap();
  function Wl(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = y0.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: vi(t)
      }, y0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: vi(t)
    };
  }
  var wa = [], Wa = 0, Ge = null, Yu = 0, $l = [], kl = 0, Rt = null, yt = 1, dt = "";
  function Tt(l, t) {
    wa[Wa++] = Yu, wa[Wa++] = Ge, Ge = l, Yu = t;
  }
  function d0(l, t, a) {
    $l[kl++] = yt, $l[kl++] = dt, $l[kl++] = Rt, Rt = l;
    var u = yt;
    l = dt;
    var e = 32 - Cl(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - Cl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, yt = 1 << 32 - Cl(t) + e | a << e | u, dt = n + l;
    } else
      yt = 1 << n | a << e | u, dt = l;
  }
  function Tf(l) {
    l.return !== null && (Tt(l, 1), d0(l, 1, 0));
  }
  function Ef(l) {
    for (; l === Ge; )
      Ge = wa[--Wa], wa[Wa] = null, Yu = wa[--Wa], wa[Wa] = null;
    for (; l === Rt; )
      Rt = $l[--kl], $l[kl] = null, dt = $l[--kl], $l[kl] = null, yt = $l[--kl], $l[kl] = null;
  }
  function h0(l, t) {
    $l[kl++] = yt, $l[kl++] = dt, $l[kl++] = Rt, yt = t.id, dt = t.overflow, Rt = l;
  }
  var ol = null, $ = null, j = !1, Zt = null, Fl = !1, Mf = Error(S(519));
  function Vt(l) {
    var t = Error(
      S(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Cu(Wl(t, l)), Mf;
  }
  function s0(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[gl] = l, t[Dl] = u, a) {
      case "dialog":
        B("cancel", t), B("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        B("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ae.length; a++)
          B(ae[a], t);
        break;
      case "source":
        B("error", t);
        break;
      case "img":
      case "image":
      case "link":
        B("error", t), B("load", t);
        break;
      case "details":
        B("toggle", t);
        break;
      case "input":
        B("invalid", t), Ni(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        B("invalid", t);
        break;
      case "textarea":
        B("invalid", t), Hi(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || qm(t.textContent, a) ? (u.popover != null && (B("beforetoggle", t), B("toggle", t)), u.onScroll != null && B("scroll", t), u.onScrollEnd != null && B("scrollend", t), u.onClick != null && (t.onclick = bt), t = !0) : t = !1, t || Vt(l, !0);
  }
  function S0(l) {
    for (ol = l.return; ol; )
      switch (ol.tag) {
        case 5:
        case 31:
        case 13:
          Fl = !1;
          return;
        case 27:
        case 3:
          Fl = !0;
          return;
        default:
          ol = ol.return;
      }
  }
  function $a(l) {
    if (l !== ol) return !1;
    if (!j) return S0(l), j = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Zc(l.type, l.memoizedProps)), a = !a), a && $ && Vt(l), S0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      $ = Rm(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      $ = Rm(l);
    } else
      t === 27 ? (t = $, aa(l.type) ? (l = rc, rc = null, $ = l) : $ = t) : $ = ol ? Pl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function oa() {
    $ = ol = null, j = !1;
  }
  function Of() {
    var l = Zt;
    return l !== null && (xl === null ? xl = l : xl.push.apply(
      xl,
      l
    ), Zt = null), l;
  }
  function Cu(l) {
    Zt === null ? Zt = [l] : Zt.push(l);
  }
  var Df = El(null), ba = null, Et = null;
  function Kt(l, t, a) {
    R(Df, t._currentValue), t._currentValue = a;
  }
  function Mt(l) {
    l._currentValue = Df.current, P(Df);
  }
  function Uf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Nf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Uf(
                n.return,
                a,
                l
              ), u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(S(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Uf(f, a, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function ka(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(S(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          jl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Se.current) {
        if (f = e.alternate, f === null) throw Error(S(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ce) : l = [ce]);
      }
      e = e.return;
    }
    l !== null && Nf(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Xe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!jl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function za(l) {
    ba = l, Et = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function bl(l) {
    return g0(ba, l);
  }
  function Re(l, t) {
    return ba === null && za(l), g0(l, t);
  }
  function g0(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Et === null) {
      if (l === null) throw Error(S(308));
      Et = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Et = Et.next = t;
    return a;
  }
  var Oy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, Dy = M.unstable_scheduleCallback, Uy = M.unstable_NormalPriority, il = {
    $$typeof: Kl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _f() {
    return {
      controller: new Oy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ju(l) {
    l.refCount--, l.refCount === 0 && Dy(Uy, function() {
      l.controller.abort();
    });
  }
  var pu = null, Hf = 0, Fa = 0, Ia = null;
  function Ny(l, t) {
    if (pu === null) {
      var a = pu = [];
      Hf = 0, Fa = Bc(), Ia = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Hf++, t.then(o0, o0), t;
  }
  function o0() {
    if (--Hf === 0 && pu !== null) {
      Ia !== null && (Ia.status = "fulfilled");
      var l = pu;
      pu = null, Fa = 0, Ia = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function _y(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var b0 = b.S;
  b.S = function(l, t) {
    tm = Bl(), typeof t == "object" && t !== null && typeof t.then == "function" && Ny(l, t), b0 !== null && b0(l, t);
  };
  var Aa = El(null);
  function xf() {
    var l = Aa.current;
    return l !== null ? l : r.pooledCache;
  }
  function Ze(l, t) {
    t === null ? R(Aa, Aa.current) : R(Aa, t.pool);
  }
  function z0() {
    var l = xf();
    return l === null ? null : { parent: il._currentValue, pool: l };
  }
  var Pa = Error(S(460)), qf = Error(S(474)), Ve = Error(S(542)), Ke = { then: function() {
  } };
  function A0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function T0(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(bt, bt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, M0(l), l;
      default:
        if (typeof t.status == "string") t.then(bt, bt);
        else {
          if (l = r, l !== null && 100 < l.shellSuspendCounter)
            throw Error(S(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, M0(l), l;
        }
        throw Ea = t, Pa;
    }
  }
  function Ta(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ea = a, Pa) : a;
    }
  }
  var Ea = null;
  function E0() {
    if (Ea === null) throw Error(S(459));
    var l = Ea;
    return Ea = null, l;
  }
  function M0(l) {
    if (l === Pa || l === Ve)
      throw Error(S(483));
  }
  var lu = null, Qu = 0;
  function Le(l) {
    var t = Qu;
    return Qu += 1, lu === null && (lu = []), T0(lu, l, t);
  }
  function Gu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Je(l, t) {
    throw t.$$typeof === tl ? Error(S(525)) : (l = Object.prototype.toString.call(t), Error(
      S(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function O0(l) {
    function t(v, m) {
      if (l) {
        var y = v.deletions;
        y === null ? (v.deletions = [m], v.flags |= 16) : y.push(m);
      }
    }
    function a(v, m) {
      if (!l) return null;
      for (; m !== null; )
        t(v, m), m = m.sibling;
      return null;
    }
    function u(v) {
      for (var m = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? m.set(v.key, v) : m.set(v.index, v), v = v.sibling;
      return m;
    }
    function e(v, m) {
      return v = At(v, m), v.index = 0, v.sibling = null, v;
    }
    function n(v, m, y) {
      return v.index = y, l ? (y = v.alternate, y !== null ? (y = y.index, y < m ? (v.flags |= 67108866, m) : y) : (v.flags |= 67108866, m)) : (v.flags |= 1048576, m);
    }
    function f(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, m, y, o) {
      return m === null || m.tag !== 6 ? (m = zf(y, v.mode, o), m.return = v, m) : (m = e(m, y), m.return = v, m);
    }
    function i(v, m, y, o) {
      var O = y.type;
      return O === Vl ? g(
        v,
        m,
        y.props.children,
        o,
        y.key
      ) : m !== null && (m.elementType === O || typeof O == "object" && O !== null && O.$$typeof === ut && Ta(O) === m.type) ? (m = e(m, y.props), Gu(m, y), m.return = v, m) : (m = Qe(
        y.type,
        y.key,
        y.props,
        null,
        v.mode,
        o
      ), Gu(m, y), m.return = v, m);
    }
    function d(v, m, y, o) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Af(y, v.mode, o), m.return = v, m) : (m = e(m, y.children || []), m.return = v, m);
    }
    function g(v, m, y, o, O) {
      return m === null || m.tag !== 7 ? (m = ga(
        y,
        v.mode,
        o,
        O
      ), m.return = v, m) : (m = e(m, y), m.return = v, m);
    }
    function z(v, m, y) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = zf(
          "" + m,
          v.mode,
          y
        ), m.return = v, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case it:
            return y = Qe(
              m.type,
              m.key,
              m.props,
              null,
              v.mode,
              y
            ), Gu(y, m), y.return = v, y;
          case at:
            return m = Af(
              m,
              v.mode,
              y
            ), m.return = v, m;
          case ut:
            return m = Ta(m), z(v, m, y);
        }
        if (gt(m) || Ll(m))
          return m = ga(
            m,
            v.mode,
            y,
            null
          ), m.return = v, m;
        if (typeof m.then == "function")
          return z(v, Le(m), y);
        if (m.$$typeof === Kl)
          return z(
            v,
            Re(v, m),
            y
          );
        Je(v, m);
      }
      return null;
    }
    function h(v, m, y, o) {
      var O = m !== null ? m.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return O !== null ? null : c(v, m, "" + y, o);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case it:
            return y.key === O ? i(v, m, y, o) : null;
          case at:
            return y.key === O ? d(v, m, y, o) : null;
          case ut:
            return y = Ta(y), h(v, m, y, o);
        }
        if (gt(y) || Ll(y))
          return O !== null ? null : g(v, m, y, o, null);
        if (typeof y.then == "function")
          return h(
            v,
            m,
            Le(y),
            o
          );
        if (y.$$typeof === Kl)
          return h(
            v,
            m,
            Re(v, y),
            o
          );
        Je(v, y);
      }
      return null;
    }
    function s(v, m, y, o, O) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return v = v.get(y) || null, c(m, v, "" + o, O);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case it:
            return v = v.get(
              o.key === null ? y : o.key
            ) || null, i(m, v, o, O);
          case at:
            return v = v.get(
              o.key === null ? y : o.key
            ) || null, d(m, v, o, O);
          case ut:
            return o = Ta(o), s(
              v,
              m,
              y,
              o,
              O
            );
        }
        if (gt(o) || Ll(o))
          return v = v.get(y) || null, g(m, v, o, O, null);
        if (typeof o.then == "function")
          return s(
            v,
            m,
            y,
            Le(o),
            O
          );
        if (o.$$typeof === Kl)
          return s(
            v,
            m,
            y,
            Re(m, o),
            O
          );
        Je(m, o);
      }
      return null;
    }
    function T(v, m, y, o) {
      for (var O = null, p = null, E = m, _ = m = 0, C = null; E !== null && _ < y.length; _++) {
        E.index > _ ? (C = E, E = null) : C = E.sibling;
        var Q = h(
          v,
          E,
          y[_],
          o
        );
        if (Q === null) {
          E === null && (E = C);
          break;
        }
        l && E && Q.alternate === null && t(v, E), m = n(Q, m, _), p === null ? O = Q : p.sibling = Q, p = Q, E = C;
      }
      if (_ === y.length)
        return a(v, E), j && Tt(v, _), O;
      if (E === null) {
        for (; _ < y.length; _++)
          E = z(v, y[_], o), E !== null && (m = n(
            E,
            m,
            _
          ), p === null ? O = E : p.sibling = E, p = E);
        return j && Tt(v, _), O;
      }
      for (E = u(E); _ < y.length; _++)
        C = s(
          E,
          v,
          _,
          y[_],
          o
        ), C !== null && (l && C.alternate !== null && E.delete(
          C.key === null ? _ : C.key
        ), m = n(
          C,
          m,
          _
        ), p === null ? O = C : p.sibling = C, p = C);
      return l && E.forEach(function(ca) {
        return t(v, ca);
      }), j && Tt(v, _), O;
    }
    function D(v, m, y, o) {
      if (y == null) throw Error(S(151));
      for (var O = null, p = null, E = m, _ = m = 0, C = null, Q = y.next(); E !== null && !Q.done; _++, Q = y.next()) {
        E.index > _ ? (C = E, E = null) : C = E.sibling;
        var ca = h(v, E, Q.value, o);
        if (ca === null) {
          E === null && (E = C);
          break;
        }
        l && E && ca.alternate === null && t(v, E), m = n(ca, m, _), p === null ? O = ca : p.sibling = ca, p = ca, E = C;
      }
      if (Q.done)
        return a(v, E), j && Tt(v, _), O;
      if (E === null) {
        for (; !Q.done; _++, Q = y.next())
          Q = z(v, Q.value, o), Q !== null && (m = n(Q, m, _), p === null ? O = Q : p.sibling = Q, p = Q);
        return j && Tt(v, _), O;
      }
      for (E = u(E); !Q.done; _++, Q = y.next())
        Q = s(E, v, _, Q.value, o), Q !== null && (l && Q.alternate !== null && E.delete(Q.key === null ? _ : Q.key), m = n(Q, m, _), p === null ? O = Q : p.sibling = Q, p = Q);
      return l && E.forEach(function(Xd) {
        return t(v, Xd);
      }), j && Tt(v, _), O;
    }
    function J(v, m, y, o) {
      if (typeof y == "object" && y !== null && y.type === Vl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case it:
            l: {
              for (var O = y.key; m !== null; ) {
                if (m.key === O) {
                  if (O = y.type, O === Vl) {
                    if (m.tag === 7) {
                      a(
                        v,
                        m.sibling
                      ), o = e(
                        m,
                        y.props.children
                      ), o.return = v, v = o;
                      break l;
                    }
                  } else if (m.elementType === O || typeof O == "object" && O !== null && O.$$typeof === ut && Ta(O) === m.type) {
                    a(
                      v,
                      m.sibling
                    ), o = e(m, y.props), Gu(o, y), o.return = v, v = o;
                    break l;
                  }
                  a(v, m);
                  break;
                } else t(v, m);
                m = m.sibling;
              }
              y.type === Vl ? (o = ga(
                y.props.children,
                v.mode,
                o,
                y.key
              ), o.return = v, v = o) : (o = Qe(
                y.type,
                y.key,
                y.props,
                null,
                v.mode,
                o
              ), Gu(o, y), o.return = v, v = o);
            }
            return f(v);
          case at:
            l: {
              for (O = y.key; m !== null; ) {
                if (m.key === O)
                  if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                    a(
                      v,
                      m.sibling
                    ), o = e(m, y.children || []), o.return = v, v = o;
                    break l;
                  } else {
                    a(v, m);
                    break;
                  }
                else t(v, m);
                m = m.sibling;
              }
              o = Af(y, v.mode, o), o.return = v, v = o;
            }
            return f(v);
          case ut:
            return y = Ta(y), J(
              v,
              m,
              y,
              o
            );
        }
        if (gt(y))
          return T(
            v,
            m,
            y,
            o
          );
        if (Ll(y)) {
          if (O = Ll(y), typeof O != "function") throw Error(S(150));
          return y = O.call(y), D(
            v,
            m,
            y,
            o
          );
        }
        if (typeof y.then == "function")
          return J(
            v,
            m,
            Le(y),
            o
          );
        if (y.$$typeof === Kl)
          return J(
            v,
            m,
            Re(v, y),
            o
          );
        Je(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, m !== null && m.tag === 6 ? (a(v, m.sibling), o = e(m, y), o.return = v, v = o) : (a(v, m), o = zf(y, v.mode, o), o.return = v, v = o), f(v)) : a(v, m);
    }
    return function(v, m, y, o) {
      try {
        Qu = 0;
        var O = J(
          v,
          m,
          y,
          o
        );
        return lu = null, O;
      } catch (E) {
        if (E === Pa || E === Ve) throw E;
        var p = pl(29, E, null, v.mode);
        return p.lanes = o, p.return = v, p;
      } finally {
      }
    };
  }
  var Ma = O0(!0), D0 = O0(!1), Lt = !1;
  function Bf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Yf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Jt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function rt(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (X & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = pe(l), i0(l, null, a), t;
    }
    return je(l, u, t, a), pe(l);
  }
  function Xu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, gi(l, a);
    }
  }
  function Cf(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var jf = !1;
  function Ru() {
    if (jf) {
      var l = Ia;
      if (l !== null) throw l;
    }
  }
  function Zu(l, t, a, u) {
    jf = !1;
    var e = l.updateQueue;
    Lt = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? n = d : f.next = d, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = d : c.next = d, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var z = e.baseState;
      f = 0, g = d = i = null, c = n;
      do {
        var h = c.lane & -536870913, s = h !== c.lane;
        if (s ? (Y & h) === h : (u & h) === h) {
          h !== 0 && h === Fa && (jf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var T = l, D = c;
            h = t;
            var J = a;
            switch (D.tag) {
              case 1:
                if (T = D.payload, typeof T == "function") {
                  z = T.call(J, z, h);
                  break l;
                }
                z = T;
                break l;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = D.payload, h = typeof T == "function" ? T.call(J, z, h) : T, h == null) break l;
                z = x({}, z, h);
                break l;
              case 2:
                Lt = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, s && (l.flags |= 8192), s = e.callbacks, s === null ? e.callbacks = [h] : s.push(h));
        } else
          s = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (d = g = s, i = z) : g = g.next = s, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          s = c, c = s.next, s.next = null, e.lastBaseUpdate = s, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = z), e.baseState = i, e.firstBaseUpdate = d, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), Ft |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function U0(l, t) {
    if (typeof l != "function")
      throw Error(S(191, l));
    l.call(t);
  }
  function N0(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        U0(a[l], t);
  }
  var tu = El(null), re = El(0);
  function _0(l, t) {
    l = Bt, R(re, l), R(tu, t), Bt = l | t.baseLanes;
  }
  function pf() {
    R(re, Bt), R(tu, tu.current);
  }
  function Qf() {
    Bt = re.current, P(tu), P(re);
  }
  var Ql = El(null), Il = null;
  function wt(l) {
    var t = l.alternate;
    R(nl, nl.current & 1), R(Ql, l), Il === null && (t === null || tu.current !== null || t.memoizedState !== null) && (Il = l);
  }
  function Gf(l) {
    R(nl, nl.current), R(Ql, l), Il === null && (Il = l);
  }
  function H0(l) {
    l.tag === 22 ? (R(nl, nl.current), R(Ql, l), Il === null && (Il = l)) : Wt();
  }
  function Wt() {
    R(nl, nl.current), R(Ql, Ql.current);
  }
  function Gl(l) {
    P(Ql), Il === l && (Il = null), P(nl);
  }
  var nl = El(0);
  function we(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Lc(a) || Jc(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ot = 0, N = null, K = null, ml = null, We = !1, au = !1, Oa = !1, $e = 0, Vu = 0, uu = null, Hy = 0;
  function al() {
    throw Error(S(321));
  }
  function Xf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!jl(l[a], t[a])) return !1;
    return !0;
  }
  function Rf(l, t, a, u, e, n) {
    return Ot = n, N = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? d1 : tc, Oa = !1, n = a(u, e), Oa = !1, au && (n = q0(
      t,
      a,
      u,
      e
    )), x0(l), n;
  }
  function x0(l) {
    b.H = Ju;
    var t = K !== null && K.next !== null;
    if (Ot = 0, ml = K = N = null, We = !1, Vu = 0, uu = null, t) throw Error(S(300));
    l === null || vl || (l = l.dependencies, l !== null && Xe(l) && (vl = !0));
  }
  function q0(l, t, a, u) {
    N = l;
    var e = 0;
    do {
      if (au && (uu = null), Vu = 0, au = !1, 25 <= e) throw Error(S(301));
      if (e += 1, ml = K = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = h1, n = t(a, u);
    } while (au);
    return n;
  }
  function xy() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ku(t) : t, l = l.useState()[0], (K !== null ? K.memoizedState : null) !== l && (N.flags |= 1024), t;
  }
  function Zf() {
    var l = $e !== 0;
    return $e = 0, l;
  }
  function Vf(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Kf(l) {
    if (We) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      We = !1;
    }
    Ot = 0, ml = K = N = null, au = !1, Vu = $e = 0, uu = null;
  }
  function Ml() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ml === null ? N.memoizedState = ml = l : ml = ml.next = l, ml;
  }
  function fl() {
    if (K === null) {
      var l = N.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = K.next;
    var t = ml === null ? N.memoizedState : ml.next;
    if (t !== null)
      ml = t, K = l;
    else {
      if (l === null)
        throw N.alternate === null ? Error(S(467)) : Error(S(310));
      K = l, l = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null
      }, ml === null ? N.memoizedState = ml = l : ml = ml.next = l;
    }
    return ml;
  }
  function ke() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ku(l) {
    var t = Vu;
    return Vu += 1, uu === null && (uu = []), l = T0(uu, l, t), t = N, (ml === null ? t.memoizedState : ml.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? d1 : tc), l;
  }
  function Fe(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ku(l);
      if (l.$$typeof === Kl) return bl(l);
    }
    throw Error(S(438, String(l)));
  }
  function Lf(l) {
    var t = null, a = N.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = N.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ke(), N.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = he;
    return t.index++, a;
  }
  function Dt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Ie(l) {
    var t = fl();
    return Jf(t, K, l);
  }
  function Jf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(S(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, d = t, g = !1;
      do {
        var z = d.lane & -536870913;
        if (z !== d.lane ? (Y & z) === z : (Ot & z) === z) {
          var h = d.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), z === Fa && (g = !0);
          else if ((Ot & h) === h) {
            d = d.next, h === Fa && (g = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = z, f = n) : i = i.next = z, N.lanes |= h, Ft |= h;
          z = d.action, Oa && a(n, z), n = d.hasEagerState ? d.eagerState : a(n, z);
        } else
          h = {
            lane: z,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, N.lanes |= z, Ft |= z;
        d = d.next;
      } while (d !== null && d !== t);
      if (i === null ? f = n : i.next = c, !jl(n, l.memoizedState) && (vl = !0, g && (a = Ia, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function rf(l) {
    var t = fl(), a = t.queue;
    if (a === null) throw Error(S(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      jl(n, t.memoizedState) || (vl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function B0(l, t, a) {
    var u = N, e = fl(), n = j;
    if (n) {
      if (a === void 0) throw Error(S(407));
      a = a();
    } else a = t();
    var f = !jl(
      (K || e).memoizedState,
      a
    );
    if (f && (e.memoizedState = a, vl = !0), e = e.queue, $f(j0.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== t || f || ml !== null && ml.memoizedState.tag & 1) {
      if (u.flags |= 2048, eu(
        9,
        { destroy: void 0 },
        C0.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), r === null) throw Error(S(349));
      n || (Ot & 127) !== 0 || Y0(u, t, a);
    }
    return a;
  }
  function Y0(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = N.updateQueue, t === null ? (t = ke(), N.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function C0(l, t, a, u) {
    t.value = a, t.getSnapshot = u, p0(t) && Q0(l);
  }
  function j0(l, t, a) {
    return a(function() {
      p0(t) && Q0(l);
    });
  }
  function p0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !jl(l, a);
    } catch {
      return !0;
    }
  }
  function Q0(l) {
    var t = Sa(l, 2);
    t !== null && ql(t, l, 2);
  }
  function wf(l) {
    var t = Ml();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Oa) {
        Qt(!0);
        try {
          a();
        } finally {
          Qt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dt,
      lastRenderedState: l
    }, t;
  }
  function G0(l, t, a, u) {
    return l.baseState = a, Jf(
      l,
      K,
      typeof u == "function" ? u : Dt
    );
  }
  function qy(l, t, a, u, e) {
    if (tn(l)) throw Error(S(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      b.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, X0(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function X0(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = a(e, u), i = b.S;
        i !== null && i(f, c), R0(l, t, c);
      } catch (d) {
        Wf(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = a(e, u), R0(l, t, n);
      } catch (d) {
        Wf(l, t, d);
      }
  }
  function R0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        Z0(l, t, u);
      },
      function(u) {
        return Wf(l, t, u);
      }
    ) : Z0(l, t, a);
  }
  function Z0(l, t, a) {
    t.status = "fulfilled", t.value = a, V0(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, X0(l, a)));
  }
  function Wf(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, V0(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function V0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function K0(l, t) {
    return t;
  }
  function L0(l, t) {
    if (j) {
      var a = r.formState;
      if (a !== null) {
        l: {
          var u = N;
          if (j) {
            if ($) {
              t: {
                for (var e = $, n = Fl; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Pl(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                $ = Pl(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            Vt(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Ml(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: K0,
      lastRenderedState: t
    }, a.queue = u, a = m1.bind(
      null,
      N,
      u
    ), u.dispatch = a, u = wf(!1), n = lc.bind(
      null,
      N,
      !1,
      u.queue
    ), u = Ml(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = qy.bind(
      null,
      N,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function J0(l) {
    var t = fl();
    return r0(t, K, l);
  }
  function r0(l, t, a) {
    if (t = Jf(
      l,
      t,
      K0
    )[0], l = Ie(Dt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = Ku(t);
      } catch (f) {
        throw f === Pa ? Ve : f;
      }
    else u = t;
    t = fl();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (N.flags |= 2048, eu(
      9,
      { destroy: void 0 },
      By.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function By(l, t) {
    l.action = t;
  }
  function w0(l) {
    var t = fl(), a = K;
    if (a !== null)
      return r0(t, a, l);
    fl(), t = t.memoizedState, a = fl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function eu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = N.updateQueue, t === null && (t = ke(), N.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function W0() {
    return fl().memoizedState;
  }
  function Pe(l, t, a, u) {
    var e = Ml();
    N.flags |= l, e.memoizedState = eu(
      1 | t,
      { destroy: void 0 },
      a,
      u === void 0 ? null : u
    );
  }
  function ln(l, t, a, u) {
    var e = fl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    K !== null && u !== null && Xf(u, K.memoizedState.deps) ? e.memoizedState = eu(t, n, a, u) : (N.flags |= l, e.memoizedState = eu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function $0(l, t) {
    Pe(8390656, 8, l, t);
  }
  function $f(l, t) {
    ln(2048, 8, l, t);
  }
  function Yy(l) {
    N.flags |= 4;
    var t = N.updateQueue;
    if (t === null)
      t = ke(), N.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function k0(l) {
    var t = fl().memoizedState;
    return Yy({ ref: t, nextImpl: l }), function() {
      if ((X & 2) !== 0) throw Error(S(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function F0(l, t) {
    return ln(4, 2, l, t);
  }
  function I0(l, t) {
    return ln(4, 4, l, t);
  }
  function P0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function l1(l, t, a) {
    a = a != null ? a.concat([l]) : null, ln(4, 4, P0.bind(null, t, l), a);
  }
  function kf() {
  }
  function t1(l, t) {
    var a = fl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Xf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function a1(l, t) {
    var a = fl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Xf(t, u[1]))
      return u[0];
    if (u = l(), Oa) {
      Qt(!0);
      try {
        l();
      } finally {
        Qt(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function Ff(l, t, a) {
    return a === void 0 || (Ot & 1073741824) !== 0 && (Y & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = um(), N.lanes |= l, Ft |= l, a);
  }
  function u1(l, t, a, u) {
    return jl(a, t) ? a : tu.current !== null ? (l = Ff(l, a, u), jl(l, t) || (vl = !0), l) : (Ot & 42) === 0 || (Ot & 1073741824) !== 0 && (Y & 261930) === 0 ? (vl = !0, l.memoizedState = a) : (l = um(), N.lanes |= l, Ft |= l, t);
  }
  function e1(l, t, a, u, e) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, lc(l, !1, t, a);
    try {
      var i = e(), d = b.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = _y(
          i,
          u
        );
        Lu(
          l,
          t,
          g,
          Zl(l)
        );
      } else
        Lu(
          l,
          t,
          u,
          Zl(l)
        );
    } catch (z) {
      Lu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        Zl()
      );
    } finally {
      A.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function Cy() {
  }
  function If(l, t, a, u) {
    if (l.tag !== 5) throw Error(S(476));
    var e = n1(l).queue;
    e1(
      l,
      e,
      t,
      U,
      a === null ? Cy : function() {
        return f1(l), a(u);
      }
    );
  }
  function n1(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: U,
      baseState: U,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dt,
        lastRenderedState: U
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function f1(l) {
    var t = n1(l);
    t.next === null && (t = l.alternate.memoizedState), Lu(
      l,
      t.next.queue,
      {},
      Zl()
    );
  }
  function Pf() {
    return bl(ce);
  }
  function c1() {
    return fl().memoizedState;
  }
  function i1() {
    return fl().memoizedState;
  }
  function jy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Zl();
          l = Jt(a);
          var u = rt(t, l, a);
          u !== null && (ql(u, t, a), Xu(u, t, a)), t = { cache: _f() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function py(l, t, a) {
    var u = Zl();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, tn(l) ? v1(t, a) : (a = of(l, t, a, u), a !== null && (ql(a, l, u), y1(a, t, u)));
  }
  function m1(l, t, a) {
    var u = Zl();
    Lu(l, t, a, u);
  }
  function Lu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (tn(l)) v1(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, a);
          if (e.hasEagerState = !0, e.eagerState = c, jl(c, f))
            return je(l, t, e, 0), r === null && Ce(), !1;
        } catch {
        } finally {
        }
      if (a = of(l, t, e, u), a !== null)
        return ql(a, l, u), y1(a, t, u), !0;
    }
    return !1;
  }
  function lc(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, tn(l)) {
      if (t) throw Error(S(479));
    } else
      t = of(
        l,
        a,
        u,
        2
      ), t !== null && ql(t, l, 2);
  }
  function tn(l) {
    var t = l.alternate;
    return l === N || t !== null && t === N;
  }
  function v1(l, t) {
    au = We = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function y1(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, gi(l, a);
    }
  }
  var Ju = {
    readContext: bl,
    use: Fe,
    useCallback: al,
    useContext: al,
    useEffect: al,
    useImperativeHandle: al,
    useLayoutEffect: al,
    useInsertionEffect: al,
    useMemo: al,
    useReducer: al,
    useRef: al,
    useState: al,
    useDebugValue: al,
    useDeferredValue: al,
    useTransition: al,
    useSyncExternalStore: al,
    useId: al,
    useHostTransitionStatus: al,
    useFormState: al,
    useActionState: al,
    useOptimistic: al,
    useMemoCache: al,
    useCacheRefresh: al
  };
  Ju.useEffectEvent = al;
  var d1 = {
    readContext: bl,
    use: Fe,
    useCallback: function(l, t) {
      return Ml().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: bl,
    useEffect: $0,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, Pe(
        4194308,
        4,
        P0.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return Pe(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Pe(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Ml();
      t = t === void 0 ? null : t;
      var u = l();
      if (Oa) {
        Qt(!0);
        try {
          l();
        } finally {
          Qt(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Ml();
      if (a !== void 0) {
        var e = a(t);
        if (Oa) {
          Qt(!0);
          try {
            a(t);
          } finally {
            Qt(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = py.bind(
        null,
        N,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Ml();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = wf(l);
      var t = l.queue, a = m1.bind(null, N, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var a = Ml();
      return Ff(a, l, t);
    },
    useTransition: function() {
      var l = wf(!1);
      return l = e1.bind(
        null,
        N,
        l.queue,
        !0,
        !1
      ), Ml().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = N, e = Ml();
      if (j) {
        if (a === void 0)
          throw Error(S(407));
        a = a();
      } else {
        if (a = t(), r === null)
          throw Error(S(349));
        (Y & 127) !== 0 || Y0(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, $0(j0.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, eu(
        9,
        { destroy: void 0 },
        C0.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Ml(), t = r.identifierPrefix;
      if (j) {
        var a = dt, u = yt;
        a = (u & ~(1 << 32 - Cl(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = $e++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Hy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Pf,
    useFormState: L0,
    useActionState: L0,
    useOptimistic: function(l) {
      var t = Ml();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = lc.bind(
        null,
        N,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Lf,
    useCacheRefresh: function() {
      return Ml().memoizedState = jy.bind(
        null,
        N
      );
    },
    useEffectEvent: function(l) {
      var t = Ml(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((X & 2) !== 0)
          throw Error(S(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, tc = {
    readContext: bl,
    use: Fe,
    useCallback: t1,
    useContext: bl,
    useEffect: $f,
    useImperativeHandle: l1,
    useInsertionEffect: F0,
    useLayoutEffect: I0,
    useMemo: a1,
    useReducer: Ie,
    useRef: W0,
    useState: function() {
      return Ie(Dt);
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var a = fl();
      return u1(
        a,
        K.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ie(Dt)[0], t = fl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ku(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: c1,
    useHostTransitionStatus: Pf,
    useFormState: J0,
    useActionState: J0,
    useOptimistic: function(l, t) {
      var a = fl();
      return G0(a, K, l, t);
    },
    useMemoCache: Lf,
    useCacheRefresh: i1
  };
  tc.useEffectEvent = k0;
  var h1 = {
    readContext: bl,
    use: Fe,
    useCallback: t1,
    useContext: bl,
    useEffect: $f,
    useImperativeHandle: l1,
    useInsertionEffect: F0,
    useLayoutEffect: I0,
    useMemo: a1,
    useReducer: rf,
    useRef: W0,
    useState: function() {
      return rf(Dt);
    },
    useDebugValue: kf,
    useDeferredValue: function(l, t) {
      var a = fl();
      return K === null ? Ff(a, l, t) : u1(
        a,
        K.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = rf(Dt)[0], t = fl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ku(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: c1,
    useHostTransitionStatus: Pf,
    useFormState: w0,
    useActionState: w0,
    useOptimistic: function(l, t) {
      var a = fl();
      return K !== null ? G0(a, K, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Lf,
    useCacheRefresh: i1
  };
  h1.useEffectEvent = k0;
  function ac(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : x({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var uc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = Zl(), e = Jt(u);
      e.payload = t, a != null && (e.callback = a), t = rt(l, e, u), t !== null && (ql(t, l, u), Xu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = Zl(), e = Jt(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = rt(l, e, u), t !== null && (ql(t, l, u), Xu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = Zl(), u = Jt(a);
      u.tag = 2, t != null && (u.callback = t), t = rt(l, u, a), t !== null && (ql(t, l, a), Xu(t, l, a));
    }
  };
  function s1(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !qu(a, u) || !qu(e, n) : !0;
  }
  function S1(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && uc.enqueueReplaceState(t, t.state, null);
  }
  function Da(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = x({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function g1(l) {
    Ye(l);
  }
  function o1(l) {
    console.error(l);
  }
  function b1(l) {
    Ye(l);
  }
  function an(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function z1(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ec(l, t, a) {
    return a = Jt(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      an(l, t);
    }, a;
  }
  function A1(l) {
    return l = Jt(l), l.tag = 3, l;
  }
  function T1(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        z1(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      z1(t, a, u), typeof e != "function" && (It === null ? It = /* @__PURE__ */ new Set([this]) : It.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Qy(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && ka(
        t,
        a,
        e,
        !0
      ), a = Ql.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Il === null ? Sn() : a.alternate === null && ul === 0 && (ul = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === Ke ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Hc(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === Ke ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Hc(l, u, e)), !1;
        }
        throw Error(S(435, a.tag));
      }
      return Hc(l, u, e), Sn(), !1;
    }
    if (j)
      return t = Ql.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Mf && (l = Error(S(422), { cause: u }), Cu(Wl(l, a)))) : (u !== Mf && (t = Error(S(423), {
        cause: u
      }), Cu(
        Wl(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = Wl(u, a), e = ec(
        l.stateNode,
        u,
        e
      ), Cf(l, e), ul !== 4 && (ul = 2)), !1;
    var n = Error(S(520), { cause: u });
    if (n = Wl(n, a), Pu === null ? Pu = [n] : Pu.push(n), ul !== 4 && (ul = 2), t === null) return !0;
    u = Wl(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = ec(a.stateNode, u, l), Cf(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (It === null || !It.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = A1(e), T1(
              e,
              l,
              a,
              u
            ), Cf(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var nc = Error(S(461)), vl = !1;
  function zl(l, t, a, u) {
    t.child = l === null ? D0(t, null, a, u) : Ma(
      t,
      l.child,
      a,
      u
    );
  }
  function E1(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u)
        c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return za(t), u = Rf(
      l,
      t,
      a,
      f,
      n,
      e
    ), c = Zf(), l !== null && !vl ? (Vf(l, t, e), Ut(l, t, e)) : (j && c && Tf(t), t.flags |= 1, zl(l, t, u, e), t.child);
  }
  function M1(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !bf(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, O1(
        l,
        t,
        n,
        u,
        e
      )) : (l = Qe(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !hc(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : qu, a(f, u) && l.ref === t.ref)
        return Ut(l, t, e);
    }
    return t.flags |= 1, l = At(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function O1(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (qu(n, u) && l.ref === t.ref)
        if (vl = !1, t.pendingProps = u = n, hc(l, e))
          (l.flags & 131072) !== 0 && (vl = !0);
        else
          return t.lanes = l.lanes, Ut(l, t, e);
    }
    return fc(
      l,
      t,
      a,
      u,
      e
    );
  }
  function D1(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; )
            e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return U1(
          l,
          t,
          n,
          a,
          u
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ze(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? _0(t, n) : pf(), H0(t);
      else
        return u = t.lanes = 536870912, U1(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          u
        );
    } else
      n !== null ? (Ze(t, n.cachePool), _0(t, n), Wt(), t.memoizedState = null) : (l !== null && Ze(t, null), pf(), Wt());
    return zl(l, t, e, a), t.child;
  }
  function ru(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function U1(l, t, a, u, e) {
    var n = xf();
    return n = n === null ? null : { parent: il._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ze(t, null), pf(), H0(t), l !== null && ka(l, t, u, !0), t.childLanes = e, null;
  }
  function un(l, t) {
    return t = nn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function N1(l, t, a) {
    return Ma(t, l.child, null, a), l = un(t, t.pendingProps), l.flags |= 2, Gl(t), t.memoizedState = null, l;
  }
  function Gy(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (j) {
        if (u.mode === "hidden")
          return l = un(t, u), t.lanes = 536870912, ru(null, l);
        if (Gf(t), (l = $) ? (l = Xm(
          l,
          Fl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Rt !== null ? { id: yt, overflow: dt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = v0(l), a.return = t, t.child = a, ol = t, $ = null)) : l = null, l === null) throw Vt(t);
        return t.lanes = 536870912, null;
      }
      return un(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Gf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = N1(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(S(558));
      else if (vl || ka(l, t, a, !1), e = (a & l.childLanes) !== 0, vl || e) {
        if (u = r, u !== null && (f = oi(u, a), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Sa(l, f), ql(u, l, f), nc;
        Sn(), t = N1(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, $ = Pl(f.nextSibling), ol = t, j = !0, Zt = null, Fl = !1, l !== null && h0(t, l), t = un(t, u), t.flags |= 4096;
      return t;
    }
    return l = At(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function en(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(S(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function fc(l, t, a, u, e) {
    return za(t), a = Rf(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Zf(), l !== null && !vl ? (Vf(l, t, e), Ut(l, t, e)) : (j && u && Tf(t), t.flags |= 1, zl(l, t, a, e), t.child);
  }
  function _1(l, t, a, u, e, n) {
    return za(t), t.updateQueue = null, a = q0(
      t,
      u,
      a,
      e
    ), x0(l), u = Zf(), l !== null && !vl ? (Vf(l, t, n), Ut(l, t, n)) : (j && u && Tf(t), t.flags |= 1, zl(l, t, a, n), t.child);
  }
  function H1(l, t, a, u, e) {
    if (za(t), t.stateNode === null) {
      var n = ra, f = a.contextType;
      typeof f == "object" && f !== null && (n = bl(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = uc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Bf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? bl(f) : ra, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (ac(
        t,
        a,
        f,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && uc.enqueueReplaceState(n, n.state, null), Zu(t, u, n, e), Ru(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Da(a, c);
      n.props = i;
      var d = n.context, g = a.contextType;
      f = ra, typeof g == "object" && g !== null && (f = bl(g));
      var z = a.getDerivedStateFromProps;
      g = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || d !== f) && S1(
        t,
        n,
        u,
        f
      ), Lt = !1;
      var h = t.memoizedState;
      n.state = h, Zu(t, u, n, e), Ru(), d = t.memoizedState, c || h !== d || Lt ? (typeof z == "function" && (ac(
        t,
        a,
        z,
        u
      ), d = t.memoizedState), (i = Lt || s1(
        t,
        a,
        i,
        u,
        h,
        d,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = d), n.props = u, n.state = d, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Yf(l, t), f = t.memoizedProps, g = Da(a, f), n.props = g, z = t.pendingProps, h = n.context, d = a.contextType, i = ra, typeof d == "object" && d !== null && (i = bl(d)), c = a.getDerivedStateFromProps, (d = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || h !== i) && S1(
        t,
        n,
        u,
        i
      ), Lt = !1, h = t.memoizedState, n.state = h, Zu(t, u, n, e), Ru();
      var s = t.memoizedState;
      f !== z || h !== s || Lt || l !== null && l.dependencies !== null && Xe(l.dependencies) ? (typeof c == "function" && (ac(
        t,
        a,
        c,
        u
      ), s = t.memoizedState), (g = Lt || s1(
        t,
        a,
        g,
        u,
        h,
        s,
        i
      ) || l !== null && l.dependencies !== null && Xe(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, s, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        s,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = s), n.props = u, n.state = s, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, en(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ma(
      t,
      l.child,
      null,
      e
    ), t.child = Ma(
      t,
      null,
      a,
      e
    )) : zl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Ut(
      l,
      t,
      e
    ), l;
  }
  function x1(l, t, a, u) {
    return oa(), t.flags |= 256, zl(l, t, a, u), t.child;
  }
  var cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ic(l) {
    return { baseLanes: l, cachePool: z0() };
  }
  function mc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= Rl), l;
  }
  function q1(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (nl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (j) {
        if (e ? wt(t) : Wt(), (l = $) ? (l = Xm(
          l,
          Fl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Rt !== null ? { id: yt, overflow: dt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = v0(l), a.return = t, t.child = a, ol = t, $ = null)) : l = null, l === null) throw Vt(t);
        return Jc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, e ? (Wt(), e = t.mode, c = nn(
        { mode: "hidden", children: c },
        e
      ), u = ga(
        u,
        e,
        a,
        null
      ), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = ic(a), u.childLanes = mc(
        l,
        f,
        a
      ), t.memoizedState = cc, ru(null, u)) : (wt(t), vc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (wt(t), t.flags &= -257, t = yc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (Wt(), t.child = l.child, t.flags |= 128, t = null) : (Wt(), c = u.fallback, e = t.mode, u = nn(
          { mode: "visible", children: u.children },
          e
        ), c = ga(
          c,
          e,
          a,
          null
        ), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, Ma(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = ic(a), u.childLanes = mc(
          l,
          f,
          a
        ), t.memoizedState = cc, t = ru(null, u));
      else if (wt(t), Jc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var d = f.dgst;
        f = d, u = Error(S(419)), u.stack = "", u.digest = f, Cu({ value: u, source: null, stack: null }), t = yc(
          l,
          t,
          a
        );
      } else if (vl || ka(l, t, a, !1), f = (a & l.childLanes) !== 0, vl || f) {
        if (f = r, f !== null && (u = oi(f, a), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, Sa(l, u), ql(f, l, u), nc;
        Lc(c) || Sn(), t = yc(
          l,
          t,
          a
        );
      } else
        Lc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, $ = Pl(
          c.nextSibling
        ), ol = t, j = !0, Zt = null, Fl = !1, l !== null && h0(t, l), t = vc(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (Wt(), c = u.fallback, e = t.mode, i = l.child, d = i.sibling, u = At(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 65011712, d !== null ? c = At(
      d,
      c
    ) : (c = ga(
      c,
      e,
      a,
      null
    ), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, ru(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = ic(a) : (e = c.cachePool, e !== null ? (i = il._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = z0(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: e
    }), u.memoizedState = c, u.childLanes = mc(
      l,
      f,
      a
    ), t.memoizedState = cc, ru(l.child, u)) : (wt(t), a = l.child, l = a.sibling, a = At(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function vc(l, t) {
    return t = nn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function nn(l, t) {
    return l = pl(22, l, null, t), l.lanes = 0, l;
  }
  function yc(l, t, a) {
    return Ma(t, l.child, null, a), l = vc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function B1(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Uf(l.return, t, a);
  }
  function dc(l, t, a, u, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = a, f.tailMode = e, f.treeForkCount = n);
  }
  function Y1(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var f = nl.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, R(nl, f), zl(l, t, u, a), u = j ? Yu : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && B1(l, a, t);
        else if (l.tag === 19)
          B1(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && we(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), dc(
          t,
          !1,
          e,
          a,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && we(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        dc(
          t,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "together":
        dc(
          t,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ut(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), Ft |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (ka(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(S(153));
    if (t.child !== null) {
      for (l = t.child, a = At(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = At(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function hc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Xe(l)));
  }
  function Xy(l, t, a) {
    switch (t.tag) {
      case 3:
        ge(t, t.stateNode.containerInfo), Kt(t, il, l.memoizedState.cache), oa();
        break;
      case 27:
      case 5:
        pn(t);
        break;
      case 4:
        ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        Kt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Gf(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (wt(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? q1(l, t, a) : (wt(t), l = Ut(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        wt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (ka(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return Y1(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), R(nl, nl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, D1(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Kt(t, il, l.memoizedState.cache);
    }
    return Ut(l, t, a);
  }
  function C1(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        vl = !0;
      else {
        if (!hc(l, a) && (t.flags & 128) === 0)
          return vl = !1, Xy(
            l,
            t,
            a
          );
        vl = (l.flags & 131072) !== 0;
      }
    else
      vl = !1, j && (t.flags & 1048576) !== 0 && d0(t, Yu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = Ta(t.elementType), t.type = l, typeof l == "function")
            bf(l) ? (u = Da(l, u), t.tag = 1, t = H1(
              null,
              t,
              l,
              u,
              a
            )) : (t.tag = 0, t = fc(
              null,
              t,
              l,
              u,
              a
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === jt) {
                t.tag = 11, t = E1(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              } else if (e === St) {
                t.tag = 14, t = M1(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              }
            }
            throw t = bu(l) || l, Error(S(306, t, ""));
          }
        }
        return t;
      case 0:
        return fc(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = Da(
          u,
          t.pendingProps
        ), H1(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (ge(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(S(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Yf(l, t), Zu(t, u, null, a);
          var f = t.memoizedState;
          if (u = f.cache, Kt(t, il, u), u !== n.cache && Nf(
            t,
            [il],
            a,
            !0
          ), Ru(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = x1(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = Wl(
                Error(S(424)),
                t
              ), Cu(e), t = x1(
                l,
                t,
                u,
                a
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for ($ = Pl(l.firstChild), ol = t, j = !0, Zt = null, Fl = !0, a = D0(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (oa(), u === e) {
              t = Ut(
                l,
                t,
                a
              );
              break l;
            }
            zl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return en(l, t), l === null ? (a = Jm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : j || (a = t.type, l = t.pendingProps, u = En(
          pt.current
        ).createElement(a), u[gl] = t, u[Dl] = l, Al(u, a, l), sl(u), t.stateNode = u) : t.memoizedState = Jm(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return pn(t), l === null && j && (u = t.stateNode = Vm(
          t.type,
          t.pendingProps,
          pt.current
        ), ol = t, Fl = !0, e = $, aa(t.type) ? (rc = e, $ = Pl(u.firstChild)) : $ = e), zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), en(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && j && ((e = u = $) && (u = Sd(
          u,
          t.type,
          t.pendingProps,
          Fl
        ), u !== null ? (t.stateNode = u, ol = t, $ = Pl(u.firstChild), Fl = !1, e = !0) : e = !1), e || Vt(t)), pn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Zc(e, n) ? u = null : f !== null && Zc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Rf(
          l,
          t,
          xy,
          null,
          null,
          a
        ), ce._currentValue = e), en(l, t), zl(l, t, u, a), t.child;
      case 6:
        return l === null && j && ((l = a = $) && (a = gd(
          a,
          t.pendingProps,
          Fl
        ), a !== null ? (t.stateNode = a, ol = t, $ = null, l = !0) : l = !1), l || Vt(t)), null;
      case 13:
        return q1(l, t, a);
      case 4:
        return ge(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = Ma(
          t,
          null,
          u,
          a
        ) : zl(l, t, u, a), t.child;
      case 11:
        return E1(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return zl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, Kt(t, t.type, u.value), zl(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, za(t), e = bl(e), u = u(e), t.flags |= 1, zl(l, t, u, a), t.child;
      case 14:
        return M1(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return O1(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Y1(l, t, a);
      case 31:
        return Gy(l, t, a);
      case 22:
        return D1(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return za(t), u = bl(il), l === null ? (e = xf(), e === null && (e = r, n = _f(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = { parent: u, cache: e }, Bf(t), Kt(t, il, e)) : ((l.lanes & a) !== 0 && (Yf(l, t), Zu(t, null, null, a), Ru()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Kt(t, il, u)) : (u = n.cache, Kt(t, il, u), u !== e.cache && Nf(
          t,
          [il],
          a,
          !0
        ))), zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(S(156, t.tag));
  }
  function Nt(l) {
    l.flags |= 4;
  }
  function sc(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (cm()) l.flags |= 8192;
        else
          throw Ea = Ke, qf;
    } else l.flags &= -16777217;
  }
  function j1(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !km(t))
      if (cm()) l.flags |= 8192;
      else
        throw Ea = Ke, qf;
  }
  function fn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? si() : 536870912, l.lanes |= t, iu |= t);
  }
  function wu(l, t) {
    if (!j)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function k(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function Ry(l, t, a) {
    var u = t.pendingProps;
    switch (Ef(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return k(t), null;
      case 1:
        return k(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Mt(il), Ba(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && ($a(t) ? Nt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Of())), k(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Nt(t), n !== null ? (k(t), j1(t, n)) : (k(t), sc(
          t,
          e,
          null,
          u,
          a
        ))) : n ? n !== l.memoizedState ? (Nt(t), k(t), j1(t, n)) : (k(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Nt(t), k(t), sc(
          t,
          e,
          l,
          u,
          a
        )), null;
      case 27:
        if (oe(t), a = pt.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Nt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(S(166));
            return k(t), null;
          }
          l = hl.current, $a(t) ? s0(t) : (l = Vm(e, u, a), t.stateNode = l, Nt(t));
        }
        return k(t), null;
      case 5:
        if (oe(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Nt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(S(166));
            return k(t), null;
          }
          if (n = hl.current, $a(t))
            s0(t);
          else {
            var f = En(
              pt.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? f.createElement("select", {
                      is: u.is
                    }) : f.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? f.createElement(e, { is: u.is }) : f.createElement(e);
                }
            }
            n[gl] = t, n[Dl] = u;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Al(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Nt(t);
          }
        }
        return k(t), sc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Nt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(S(166));
          if (l = pt.current, $a(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = ol, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[gl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || qm(l.nodeValue, a)), l || Vt(t, !0);
          } else
            l = En(l).createTextNode(
              u
            ), l[gl] = t, t.stateNode = l;
        }
        return k(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = $a(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(S(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(557));
              l[gl] = t;
            } else
              oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            k(t), l = !1;
          } else
            a = Of(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (Gl(t), t) : (Gl(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(S(558));
        }
        return k(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = $a(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(S(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
              e[gl] = t;
            } else
              oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            k(t), e = !1;
          } else
            e = Of(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Gl(t), t) : (Gl(t), null);
        }
        return Gl(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), fn(t, t.updateQueue), k(t), null);
      case 4:
        return Ba(), l === null && pc(t.stateNode.containerInfo), k(t), null;
      case 10:
        return Mt(t.type), k(t), null;
      case 19:
        if (P(nl), u = t.memoizedState, u === null) return k(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null)
          if (e) wu(u, !1);
          else {
            if (ul !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = we(l), n !== null) {
                  for (t.flags |= 128, wu(u, !1), l = n.updateQueue, t.updateQueue = l, fn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    m0(a, l), a = a.sibling;
                  return R(
                    nl,
                    nl.current & 1 | 2
                  ), j && Tt(t, u.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null && Bl() > dn && (t.flags |= 128, e = !0, wu(u, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = we(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, fn(t, l), wu(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !j)
                return k(t), null;
            } else
              2 * Bl() - u.renderingStartTime > dn && a !== 536870912 && (t.flags |= 128, e = !0, wu(u, !1), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Bl(), l.sibling = null, a = nl.current, R(
          nl,
          e ? a & 1 | 2 : a & 1
        ), j && Tt(t, u.treeForkCount), l) : (k(t), null);
      case 22:
      case 23:
        return Gl(t), Qf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (k(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : k(t), a = t.updateQueue, a !== null && fn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && P(Aa), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Mt(il), k(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(S(156, t.tag));
  }
  function Zy(l, t) {
    switch (Ef(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Mt(il), Ba(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return oe(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Gl(t), t.alternate === null)
            throw Error(S(340));
          oa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (Gl(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(S(340));
          oa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return P(nl), null;
      case 4:
        return Ba(), null;
      case 10:
        return Mt(t.type), null;
      case 22:
      case 23:
        return Gl(t), Qf(), l !== null && P(Aa), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Mt(il), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function p1(l, t) {
    switch (Ef(t), t.tag) {
      case 3:
        Mt(il), Ba();
        break;
      case 26:
      case 27:
      case 5:
        oe(t);
        break;
      case 4:
        Ba();
        break;
      case 31:
        t.memoizedState !== null && Gl(t);
        break;
      case 13:
        Gl(t);
        break;
      case 19:
        P(nl);
        break;
      case 10:
        Mt(t.type);
        break;
      case 22:
      case 23:
        Gl(t), Qf(), l !== null && P(Aa);
        break;
      case 24:
        Mt(il);
    }
  }
  function Wu(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, f = a.inst;
            u = n(), f.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      V(t, t.return, c);
    }
  }
  function $t(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = a, d = c;
              try {
                d();
              } catch (g) {
                V(
                  e,
                  i,
                  g
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      V(t, t.return, g);
    }
  }
  function Q1(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        N0(t, a);
      } catch (u) {
        V(l, l.return, u);
      }
    }
  }
  function G1(l, t, a) {
    a.props = Da(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      V(l, t, u);
    }
  }
  function $u(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      V(l, t, e);
    }
  }
  function ht(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          V(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          V(l, t, e);
        }
      else a.current = null;
  }
  function X1(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      V(l, l.return, e);
    }
  }
  function Sc(l, t, a) {
    try {
      var u = l.stateNode;
      md(u, l.type, a, t), u[Dl] = t;
    } catch (e) {
      V(l, l.return, e);
    }
  }
  function R1(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && aa(l.type) || l.tag === 4;
  }
  function gc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || R1(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && aa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function oc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = bt));
    else if (u !== 4 && (u === 27 && aa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (oc(l, t, a), l = l.sibling; l !== null; )
        oc(l, t, a), l = l.sibling;
  }
  function cn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && aa(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (cn(l, t, a), l = l.sibling; l !== null; )
        cn(l, t, a), l = l.sibling;
  }
  function Z1(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Al(t, u, a), t[gl] = l, t[Dl] = a;
    } catch (n) {
      V(l, l.return, n);
    }
  }
  var _t = !1, yl = !1, bc = !1, V1 = typeof WeakSet == "function" ? WeakSet : Set, Sl = null;
  function Vy(l, t) {
    if (l = l.containerInfo, Xc = Hn, l = l0(l), yf(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0, c = -1, i = -1, d = 0, g = 0, z = l, h = null;
            t: for (; ; ) {
              for (var s; z !== a || e !== 0 && z.nodeType !== 3 || (c = f + e), z !== n || u !== 0 && z.nodeType !== 3 || (i = f + u), z.nodeType === 3 && (f += z.nodeValue.length), (s = z.firstChild) !== null; )
                h = z, z = s;
              for (; ; ) {
                if (z === l) break t;
                if (h === a && ++d === e && (c = f), h === n && ++g === u && (i = f), (s = z.nextSibling) !== null) break;
                z = h, h = z.parentNode;
              }
              z = s;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Rc = { focusedElem: l, selectionRange: a }, Hn = !1, Sl = t; Sl !== null; )
      if (t = Sl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Sl = l;
      else
        for (; Sl !== null; ) {
          switch (t = Sl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  e = l[a], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var T = Da(
                    a.type,
                    e
                  );
                  l = u.getSnapshotBeforeUpdate(
                    T,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (D) {
                  V(
                    a,
                    a.return,
                    D
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Kc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(S(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Sl = l;
            break;
          }
          Sl = t.return;
        }
  }
  function K1(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        xt(l, a), u & 4 && Wu(5, a);
        break;
      case 1:
        if (xt(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              V(a, a.return, f);
            }
          else {
            var e = Da(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              V(
                a,
                a.return,
                f
              );
            }
          }
        u & 64 && Q1(a), u & 512 && $u(a, a.return);
        break;
      case 3:
        if (xt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            N0(l, t);
          } catch (f) {
            V(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Z1(a);
      case 26:
      case 5:
        xt(l, a), t === null && u & 4 && X1(a), u & 512 && $u(a, a.return);
        break;
      case 12:
        xt(l, a);
        break;
      case 31:
        xt(l, a), u & 4 && r1(l, a);
        break;
      case 13:
        xt(l, a), u & 4 && w1(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = Fy.bind(
          null,
          a
        ), od(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || _t, !u) {
          t = t !== null && t.memoizedState !== null || yl, e = _t;
          var n = yl;
          _t = u, (yl = t) && !n ? qt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : xt(l, a), _t = e, yl = n;
        }
        break;
      case 30:
        break;
      default:
        xt(l, a);
    }
  }
  function L1(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, L1(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && wn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var I = null, Nl = !1;
  function Ht(l, t, a) {
    for (a = a.child; a !== null; )
      J1(l, t, a), a = a.sibling;
  }
  function J1(l, t, a) {
    if (Yl && typeof Yl.onCommitFiberUnmount == "function")
      try {
        Yl.onCommitFiberUnmount(zu, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        yl || ht(a, t), Ht(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        yl || ht(a, t);
        var u = I, e = Nl;
        aa(a.type) && (I = a.stateNode, Nl = !1), Ht(
          l,
          t,
          a
        ), ee(a.stateNode), I = u, Nl = e;
        break;
      case 5:
        yl || ht(a, t);
      case 6:
        if (u = I, e = Nl, I = null, Ht(
          l,
          t,
          a
        ), I = u, Nl = e, I !== null)
          if (Nl)
            try {
              (I.nodeType === 9 ? I.body : I.nodeName === "HTML" ? I.ownerDocument.body : I).removeChild(a.stateNode);
            } catch (n) {
              V(
                a,
                t,
                n
              );
            }
          else
            try {
              I.removeChild(a.stateNode);
            } catch (n) {
              V(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        I !== null && (Nl ? (l = I, Qm(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), gu(l)) : Qm(I, a.stateNode));
        break;
      case 4:
        u = I, e = Nl, I = a.stateNode.containerInfo, Nl = !0, Ht(
          l,
          t,
          a
        ), I = u, Nl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $t(2, a, t), yl || $t(4, a, t), Ht(
          l,
          t,
          a
        );
        break;
      case 1:
        yl || (ht(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && G1(
          a,
          t,
          u
        )), Ht(
          l,
          t,
          a
        );
        break;
      case 21:
        Ht(
          l,
          t,
          a
        );
        break;
      case 22:
        yl = (u = yl) || a.memoizedState !== null, Ht(
          l,
          t,
          a
        ), yl = u;
        break;
      default:
        Ht(
          l,
          t,
          a
        );
    }
  }
  function r1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        gu(l);
      } catch (a) {
        V(t, t.return, a);
      }
    }
  }
  function w1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        gu(l);
      } catch (a) {
        V(t, t.return, a);
      }
  }
  function Ky(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new V1()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new V1()), t;
      default:
        throw Error(S(435, l.tag));
    }
  }
  function mn(l, t) {
    var a = Ky(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = Iy.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function _l(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (aa(c.type)) {
                I = c.stateNode, Nl = !1;
                break l;
              }
              break;
            case 5:
              I = c.stateNode, Nl = !1;
              break l;
            case 3:
            case 4:
              I = c.stateNode.containerInfo, Nl = !0;
              break l;
          }
          c = c.return;
        }
        if (I === null) throw Error(S(160));
        J1(n, f, e), I = null, Nl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        W1(t, l), t = t.sibling;
  }
  var nt = null;
  function W1(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        _l(t, l), Hl(l), u & 4 && ($t(3, l, l.return), Wu(3, l), $t(5, l, l.return));
        break;
      case 1:
        _l(t, l), Hl(l), u & 512 && (yl || a === null || ht(a, a.return)), u & 64 && _t && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = nt;
        if (_l(t, l), Hl(l), u & 512 && (yl || a === null || ht(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Eu] || n[gl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Al(n, u, a), n[gl] = l, sl(n), u = n;
                      break l;
                    case "link":
                      var f = Wm(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Al(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Wm(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Al(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(S(468, u));
                  }
                  n[gl] = l, sl(n), u = n;
                }
                l.stateNode = u;
              } else
                $m(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = wm(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? $m(
              e,
              l.type,
              l.stateNode
            ) : wm(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && Sc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        _l(t, l), Hl(l), u & 512 && (yl || a === null || ht(a, a.return)), a !== null && u & 4 && Sc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (_l(t, l), Hl(l), u & 512 && (yl || a === null || ht(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Xa(e, "");
          } catch (T) {
            V(l, l.return, T);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, Sc(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (bc = !0);
        break;
      case 6:
        if (_l(t, l), Hl(l), u & 4) {
          if (l.stateNode === null)
            throw Error(S(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (T) {
            V(l, l.return, T);
          }
        }
        break;
      case 3:
        if (Dn = null, e = nt, nt = Mn(t.containerInfo), _l(t, l), nt = e, Hl(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            gu(t.containerInfo);
          } catch (T) {
            V(l, l.return, T);
          }
        bc && (bc = !1, $1(l));
        break;
      case 4:
        u = nt, nt = Mn(
          l.stateNode.containerInfo
        ), _l(t, l), Hl(l), nt = u;
        break;
      case 12:
        _l(t, l), Hl(l);
        break;
      case 31:
        _l(t, l), Hl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 13:
        _l(t, l), Hl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (yn = Bl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null, d = _t, g = yl;
        if (_t = d || e, yl = g || i, _l(t, l), yl = g, _t = d, Hl(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || _t || yl || Ua(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var z = i.memoizedProps.style, h = z != null && z.hasOwnProperty("display") ? z.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (T) {
                  V(i, i.return, T);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (T) {
                  V(i, i.return, T);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var s = i.stateNode;
                  e ? Gm(s, !0) : Gm(i.stateNode, !1);
                } catch (T) {
                  V(i, i.return, T);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, mn(l, a))));
        break;
      case 19:
        _l(t, l), Hl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        _l(t, l), Hl(l);
    }
  }
  function Hl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (R1(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(S(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = gc(l);
            cn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Xa(f, ""), a.flags &= -33);
            var c = gc(l);
            cn(l, c, f);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo, d = gc(l);
            oc(
              l,
              d,
              i
            );
            break;
          default:
            throw Error(S(161));
        }
      } catch (g) {
        V(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function $1(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        $1(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function xt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        K1(l, t.alternate, t), t = t.sibling;
  }
  function Ua(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $t(4, t, t.return), Ua(t);
          break;
        case 1:
          ht(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && G1(
            t,
            t.return,
            a
          ), Ua(t);
          break;
        case 27:
          ee(t.stateNode);
        case 26:
        case 5:
          ht(t, t.return), Ua(t);
          break;
        case 22:
          t.memoizedState === null && Ua(t);
          break;
        case 30:
          Ua(t);
          break;
        default:
          Ua(t);
      }
      l = l.sibling;
    }
  }
  function qt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          qt(
            e,
            n,
            a
          ), Wu(4, n);
          break;
        case 1:
          if (qt(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (d) {
              V(u, u.return, d);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  U0(i[e], c);
            } catch (d) {
              V(u, u.return, d);
            }
          }
          a && f & 64 && Q1(n), $u(n, n.return);
          break;
        case 27:
          Z1(n);
        case 26:
        case 5:
          qt(
            e,
            n,
            a
          ), a && u === null && f & 4 && X1(n), $u(n, n.return);
          break;
        case 12:
          qt(
            e,
            n,
            a
          );
          break;
        case 31:
          qt(
            e,
            n,
            a
          ), a && f & 4 && r1(e, n);
          break;
        case 13:
          qt(
            e,
            n,
            a
          ), a && f & 4 && w1(e, n);
          break;
        case 22:
          n.memoizedState === null && qt(
            e,
            n,
            a
          ), $u(n, n.return);
          break;
        case 30:
          break;
        default:
          qt(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function zc(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && ju(a));
  }
  function Ac(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ju(l));
  }
  function ft(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        k1(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function k1(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ft(
          l,
          t,
          a,
          u
        ), e & 2048 && Wu(9, t);
        break;
      case 1:
        ft(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        ft(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ju(l)));
        break;
      case 12:
        if (e & 2048) {
          ft(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            V(t, t.return, i);
          }
        } else
          ft(
            l,
            t,
            a,
            u
          );
        break;
      case 31:
        ft(
          l,
          t,
          a,
          u
        );
        break;
      case 13:
        ft(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? ft(
          l,
          t,
          a,
          u
        ) : ku(l, t) : n._visibility & 2 ? ft(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, nu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && zc(f, t);
        break;
      case 24:
        ft(
          l,
          t,
          a,
          u
        ), e & 2048 && Ac(t.alternate, t);
        break;
      default:
        ft(
          l,
          t,
          a,
          u
        );
    }
  }
  function nu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = a, i = u, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          nu(
            n,
            f,
            c,
            i,
            e
          ), Wu(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? nu(
            n,
            f,
            c,
            i,
            e
          ) : ku(
            n,
            f
          ) : (g._visibility |= 2, nu(
            n,
            f,
            c,
            i,
            e
          )), e && d & 2048 && zc(
            f.alternate,
            f
          );
          break;
        case 24:
          nu(
            n,
            f,
            c,
            i,
            e
          ), e && d & 2048 && Ac(f.alternate, f);
          break;
        default:
          nu(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ku(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            ku(a, u), e & 2048 && zc(
              u.alternate,
              u
            );
            break;
          case 24:
            ku(a, u), e & 2048 && Ac(u.alternate, u);
            break;
          default:
            ku(a, u);
        }
        t = t.sibling;
      }
  }
  var Fu = 8192;
  function fu(l, t, a) {
    if (l.subtreeFlags & Fu)
      for (l = l.child; l !== null; )
        F1(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function F1(l, t, a) {
    switch (l.tag) {
      case 26:
        fu(
          l,
          t,
          a
        ), l.flags & Fu && l.memoizedState !== null && Hd(
          a,
          nt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        fu(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var u = nt;
        nt = Mn(l.stateNode.containerInfo), fu(
          l,
          t,
          a
        ), nt = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = Fu, Fu = 16777216, fu(
          l,
          t,
          a
        ), Fu = u) : fu(
          l,
          t,
          a
        ));
        break;
      default:
        fu(
          l,
          t,
          a
        );
    }
  }
  function I1(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Iu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Sl = u, lm(
            u,
            l
          );
        }
      I1(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        P1(l), l = l.sibling;
  }
  function P1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Iu(l), l.flags & 2048 && $t(9, l, l.return);
        break;
      case 3:
        Iu(l);
        break;
      case 12:
        Iu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : Iu(l);
        break;
      default:
        Iu(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Sl = u, lm(
            u,
            l
          );
        }
      I1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          $t(8, t, t.return), vn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function lm(l, t) {
    for (; Sl !== null; ) {
      var a = Sl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          $t(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          ju(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Sl = u;
      else
        l: for (a = l; Sl !== null; ) {
          u = Sl;
          var e = u.sibling, n = u.return;
          if (L1(u), u === a) {
            Sl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Sl = e;
            break l;
          }
          Sl = n;
        }
    }
  }
  var Ly = {
    getCacheForType: function(l) {
      var t = bl(il), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return bl(il).controller.signal;
    }
  }, Jy = typeof WeakMap == "function" ? WeakMap : Map, X = 0, r = null, q = null, Y = 0, Z = 0, Xl = null, kt = !1, cu = !1, Tc = !1, Bt = 0, ul = 0, Ft = 0, Na = 0, Ec = 0, Rl = 0, iu = 0, Pu = null, xl = null, Mc = !1, yn = 0, tm = 0, dn = 1 / 0, hn = null, It = null, dl = 0, Pt = null, mu = null, Yt = 0, Oc = 0, Dc = null, am = null, le = 0, Uc = null;
  function Zl() {
    return (X & 2) !== 0 && Y !== 0 ? Y & -Y : b.T !== null ? Bc() : bi();
  }
  function um() {
    if (Rl === 0)
      if ((Y & 536870912) === 0 || j) {
        var l = Ae;
        Ae <<= 1, (Ae & 3932160) === 0 && (Ae = 262144), Rl = l;
      } else Rl = 536870912;
    return l = Ql.current, l !== null && (l.flags |= 32), Rl;
  }
  function ql(l, t, a) {
    (l === r && (Z === 2 || Z === 9) || l.cancelPendingCommit !== null) && (vu(l, 0), la(
      l,
      Y,
      Rl,
      !1
    )), Tu(l, a), ((X & 2) === 0 || l !== r) && (l === r && ((X & 2) === 0 && (Na |= a), ul === 4 && la(
      l,
      Y,
      Rl,
      !1
    )), st(l));
  }
  function em(l, t, a) {
    if ((X & 6) !== 0) throw Error(S(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Au(l, t), e = u ? Wy(l, t) : _c(l, t, !0), n = u;
    do {
      if (e === 0) {
        cu && !u && la(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !ry(a)) {
          e = _c(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = Pu;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (vu(c, f).flags |= 256), f = _c(
                c,
                f,
                !1
              ), f !== 2) {
                if (Tc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Na |= n, e = 4;
                  break l;
                }
                n = xl, xl = e, n !== null && (xl === null ? xl = n : xl.push.apply(
                  xl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          vu(l, 0), la(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(S(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              la(
                u,
                t,
                Rl,
                !kt
              );
              break l;
            case 2:
              xl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(S(329));
          }
          if ((t & 62914560) === t && (e = yn + 300 - Bl(), 10 < e)) {
            if (la(
              u,
              t,
              Rl,
              !kt
            ), Ee(u, 0, !0) !== 0) break l;
            Yt = t, u.timeoutHandle = jm(
              nm.bind(
                null,
                u,
                a,
                xl,
                hn,
                Mc,
                t,
                Rl,
                Na,
                iu,
                kt,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          nm(
            u,
            a,
            xl,
            hn,
            Mc,
            t,
            Rl,
            Na,
            iu,
            kt,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    st(l);
  }
  function nm(l, t, a, u, e, n, f, c, i, d, g, z, h, s) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: bt
      }, F1(
        t,
        n,
        z
      );
      var T = (n & 62914560) === n ? yn - Bl() : (n & 4194048) === n ? tm - Bl() : 0;
      if (T = xd(
        z,
        T
      ), T !== null) {
        Yt = n, l.cancelPendingCommit = T(
          hm.bind(
            null,
            l,
            t,
            n,
            a,
            u,
            e,
            f,
            c,
            i,
            g,
            z,
            null,
            h,
            s
          )
        ), la(l, n, f, !d);
        return;
      }
    }
    hm(
      l,
      t,
      n,
      a,
      u,
      e,
      f,
      c,
      i
    );
  }
  function ry(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!jl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function la(l, t, a, u) {
    t &= ~Ec, t &= ~Na, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Cl(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && Si(l, a, t);
  }
  function sn() {
    return (X & 6) === 0 ? (te(0), !1) : !0;
  }
  function Nc() {
    if (q !== null) {
      if (Z === 0)
        var l = q.return;
      else
        l = q, Et = ba = null, Kf(l), lu = null, Qu = 0, l = q;
      for (; l !== null; )
        p1(l.alternate, l), l = l.return;
      q = null;
    }
  }
  function vu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, dd(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Yt = 0, Nc(), r = l, q = a = At(l.current, null), Y = t, Z = 0, Xl = null, kt = !1, cu = Au(l, t), Tc = !1, iu = Rl = Ec = Na = Ft = ul = 0, xl = Pu = null, Mc = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Cl(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Bt = t, Ce(), a;
  }
  function fm(l, t) {
    N = null, b.H = Ju, t === Pa || t === Ve ? (t = E0(), Z = 3) : t === qf ? (t = E0(), Z = 4) : Z = t === nc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Xl = t, q === null && (ul = 1, an(
      l,
      Wl(t, l.current)
    ));
  }
  function cm() {
    var l = Ql.current;
    return l === null ? !0 : (Y & 4194048) === Y ? Il === null : (Y & 62914560) === Y || (Y & 536870912) !== 0 ? l === Il : !1;
  }
  function im() {
    var l = b.H;
    return b.H = Ju, l === null ? Ju : l;
  }
  function mm() {
    var l = b.A;
    return b.A = Ly, l;
  }
  function Sn() {
    ul = 4, kt || (Y & 4194048) !== Y && Ql.current !== null || (cu = !0), (Ft & 134217727) === 0 && (Na & 134217727) === 0 || r === null || la(
      r,
      Y,
      Rl,
      !1
    );
  }
  function _c(l, t, a) {
    var u = X;
    X |= 2;
    var e = im(), n = mm();
    (r !== l || Y !== t) && (hn = null, vu(l, t)), t = !1;
    var f = ul;
    l: do
      try {
        if (Z !== 0 && q !== null) {
          var c = q, i = Xl;
          switch (Z) {
            case 8:
              Nc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Ql.current === null && (t = !0);
              var d = Z;
              if (Z = 0, Xl = null, yu(l, c, i, d), a && cu) {
                f = 0;
                break l;
              }
              break;
            default:
              d = Z, Z = 0, Xl = null, yu(l, c, i, d);
          }
        }
        wy(), f = ul;
        break;
      } catch (g) {
        fm(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Et = ba = null, X = u, b.H = e, b.A = n, q === null && (r = null, Y = 0, Ce()), f;
  }
  function wy() {
    for (; q !== null; ) vm(q);
  }
  function Wy(l, t) {
    var a = X;
    X |= 2;
    var u = im(), e = mm();
    r !== l || Y !== t ? (hn = null, dn = Bl() + 500, vu(l, t)) : cu = Au(
      l,
      t
    );
    l: do
      try {
        if (Z !== 0 && q !== null) {
          t = q;
          var n = Xl;
          t: switch (Z) {
            case 1:
              Z = 0, Xl = null, yu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (A0(n)) {
                Z = 0, Xl = null, ym(t);
                break;
              }
              t = function() {
                Z !== 2 && Z !== 9 || r !== l || (Z = 7), st(l);
              }, n.then(t, t);
              break l;
            case 3:
              Z = 7;
              break l;
            case 4:
              Z = 5;
              break l;
            case 7:
              A0(n) ? (Z = 0, Xl = null, ym(t)) : (Z = 0, Xl = null, yu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (q.tag) {
                case 26:
                  f = q.memoizedState;
                case 5:
                case 27:
                  var c = q;
                  if (f ? km(f) : c.stateNode.complete) {
                    Z = 0, Xl = null;
                    var i = c.sibling;
                    if (i !== null) q = i;
                    else {
                      var d = c.return;
                      d !== null ? (q = d, gn(d)) : q = null;
                    }
                    break t;
                  }
              }
              Z = 0, Xl = null, yu(l, t, n, 5);
              break;
            case 6:
              Z = 0, Xl = null, yu(l, t, n, 6);
              break;
            case 8:
              Nc(), ul = 6;
              break l;
            default:
              throw Error(S(462));
          }
        }
        $y();
        break;
      } catch (g) {
        fm(l, g);
      }
    while (!0);
    return Et = ba = null, b.H = u, b.A = e, X = a, q !== null ? 0 : (r = null, Y = 0, Ce(), ul);
  }
  function $y() {
    for (; q !== null && !bv(); )
      vm(q);
  }
  function vm(l) {
    var t = C1(l.alternate, l, Bt);
    l.memoizedProps = l.pendingProps, t === null ? gn(l) : q = t;
  }
  function ym(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _1(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Y
        );
        break;
      case 11:
        t = _1(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Y
        );
        break;
      case 5:
        Kf(t);
      default:
        p1(a, t), t = q = m0(t, Bt), t = C1(a, t, Bt);
    }
    l.memoizedProps = l.pendingProps, t === null ? gn(l) : q = t;
  }
  function yu(l, t, a, u) {
    Et = ba = null, Kf(t), lu = null, Qu = 0;
    var e = t.return;
    try {
      if (Qy(
        l,
        e,
        t,
        a,
        Y
      )) {
        ul = 1, an(
          l,
          Wl(a, l.current)
        ), q = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw q = e, n;
      ul = 1, an(
        l,
        Wl(a, l.current)
      ), q = null;
      return;
    }
    t.flags & 32768 ? (j || u === 1 ? l = !0 : cu || (Y & 536870912) !== 0 ? l = !1 : (kt = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Ql.current, u !== null && u.tag === 13 && (u.flags |= 16384))), dm(t, l)) : gn(t);
  }
  function gn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        dm(
          t,
          kt
        );
        return;
      }
      l = t.return;
      var a = Ry(
        t.alternate,
        t,
        Bt
      );
      if (a !== null) {
        q = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        q = t;
        return;
      }
      q = t = l;
    } while (t !== null);
    ul === 0 && (ul = 5);
  }
  function dm(l, t) {
    do {
      var a = Zy(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, q = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        q = l;
        return;
      }
      q = l = a;
    } while (l !== null);
    ul = 6, q = null;
  }
  function hm(l, t, a, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      on();
    while (dl !== 0);
    if ((X & 6) !== 0) throw Error(S(327));
    if (t !== null) {
      if (t === l.current) throw Error(S(177));
      if (n = t.lanes | t.childLanes, n |= gf, _v(
        l,
        a,
        n,
        f,
        c,
        i
      ), l === r && (q = r = null, Y = 0), mu = t, Pt = l, Yt = a, Oc = n, Dc = e, am = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Py(be, function() {
        return bm(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null, e = A.p, A.p = 2, f = X, X |= 4;
        try {
          Vy(l, t, a);
        } finally {
          X = f, A.p = e, b.T = u;
        }
      }
      dl = 1, sm(), Sm(), gm();
    }
  }
  function sm() {
    if (dl === 1) {
      dl = 0;
      var l = Pt, t = mu, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null;
        var u = A.p;
        A.p = 2;
        var e = X;
        X |= 4;
        try {
          W1(t, l);
          var n = Rc, f = l0(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Pi(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && yf(c)) {
              var d = i.start, g = i.end;
              if (g === void 0 && (g = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, h = z && z.defaultView || window;
                if (h.getSelection) {
                  var s = h.getSelection(), T = c.textContent.length, D = Math.min(i.start, T), J = i.end === void 0 ? D : Math.min(i.end, T);
                  !s.extend && D > J && (f = J, J = D, D = f);
                  var v = Ii(
                    c,
                    D
                  ), m = Ii(
                    c,
                    J
                  );
                  if (v && m && (s.rangeCount !== 1 || s.anchorNode !== v.node || s.anchorOffset !== v.offset || s.focusNode !== m.node || s.focusOffset !== m.offset)) {
                    var y = z.createRange();
                    y.setStart(v.node, v.offset), s.removeAllRanges(), D > J ? (s.addRange(y), s.extend(m.node, m.offset)) : (y.setEnd(m.node, m.offset), s.addRange(y));
                  }
                }
              }
            }
            for (z = [], s = c; s = s.parentNode; )
              s.nodeType === 1 && z.push({
                element: s,
                left: s.scrollLeft,
                top: s.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var o = z[c];
              o.element.scrollLeft = o.left, o.element.scrollTop = o.top;
            }
          }
          Hn = !!Xc, Rc = Xc = null;
        } finally {
          X = e, A.p = u, b.T = a;
        }
      }
      l.current = t, dl = 2;
    }
  }
  function Sm() {
    if (dl === 2) {
      dl = 0;
      var l = Pt, t = mu, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = b.T, b.T = null;
        var u = A.p;
        A.p = 2;
        var e = X;
        X |= 4;
        try {
          K1(l, t.alternate, t);
        } finally {
          X = e, A.p = u, b.T = a;
        }
      }
      dl = 3;
    }
  }
  function gm() {
    if (dl === 4 || dl === 3) {
      dl = 0, zv();
      var l = Pt, t = mu, a = Yt, u = am;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? dl = 5 : (dl = 0, mu = Pt = null, om(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (It = null), Jn(a), t = t.stateNode, Yl && typeof Yl.onCommitFiberRoot == "function")
        try {
          Yl.onCommitFiberRoot(
            zu,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = b.T, e = A.p, A.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, A.p = e;
        }
      }
      (Yt & 3) !== 0 && on(), st(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Uc ? le++ : (le = 0, Uc = l) : le = 0, te(0);
    }
  }
  function om(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ju(t)));
  }
  function on() {
    return sm(), Sm(), gm(), bm();
  }
  function bm() {
    if (dl !== 5) return !1;
    var l = Pt, t = Oc;
    Oc = 0;
    var a = Jn(Yt), u = b.T, e = A.p;
    try {
      A.p = 32 > a ? 32 : a, b.T = null, a = Dc, Dc = null;
      var n = Pt, f = Yt;
      if (dl = 0, mu = Pt = null, Yt = 0, (X & 6) !== 0) throw Error(S(331));
      var c = X;
      if (X |= 4, P1(n.current), k1(
        n,
        n.current,
        f,
        a
      ), X = c, te(0, !1), Yl && typeof Yl.onPostCommitFiberRoot == "function")
        try {
          Yl.onPostCommitFiberRoot(zu, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = e, b.T = u, om(l, t);
    }
  }
  function zm(l, t, a) {
    t = Wl(a, t), t = ec(l.stateNode, t, 2), l = rt(l, t, 2), l !== null && (Tu(l, 2), st(l));
  }
  function V(l, t, a) {
    if (l.tag === 3)
      zm(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          zm(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (It === null || !It.has(u))) {
            l = Wl(a, l), a = A1(2), u = rt(t, a, 2), u !== null && (T1(
              a,
              u,
              t,
              l
            ), Tu(u, 2), st(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Jy();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (Tc = !0, e.add(a), l = ky.bind(null, l, t, a), t.then(l, l));
  }
  function ky(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, r === l && (Y & a) === a && (ul === 4 || ul === 3 && (Y & 62914560) === Y && 300 > Bl() - yn ? (X & 2) === 0 && vu(l, 0) : Ec |= a, iu === Y && (iu = 0)), st(l);
  }
  function Am(l, t) {
    t === 0 && (t = si()), l = Sa(l, t), l !== null && (Tu(l, t), st(l));
  }
  function Fy(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Am(l, a);
  }
  function Iy(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(S(314));
    }
    u !== null && u.delete(t), Am(l, a);
  }
  function Py(l, t) {
    return Zn(l, t);
  }
  var bn = null, du = null, xc = !1, zn = !1, qc = !1, ta = 0;
  function st(l) {
    l !== du && l.next === null && (du === null ? bn = du = l : du = du.next = l), zn = !0, xc || (xc = !0, td());
  }
  function te(l, t) {
    if (!qc && zn) {
      qc = !0;
      do
        for (var a = !1, u = bn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - Cl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Om(u, n));
          } else
            n = Y, n = Ee(
              u,
              u === r ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Au(u, n) || (a = !0, Om(u, n));
          u = u.next;
        }
      while (a);
      qc = !1;
    }
  }
  function ld() {
    Tm();
  }
  function Tm() {
    zn = xc = !1;
    var l = 0;
    ta !== 0 && yd() && (l = ta);
    for (var t = Bl(), a = null, u = bn; u !== null; ) {
      var e = u.next, n = Em(u, t);
      n === 0 ? (u.next = null, a === null ? bn = e : a.next = e, e === null && (du = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (zn = !0)), u = e;
    }
    dl !== 0 && dl !== 5 || te(l), ta !== 0 && (ta = 0);
  }
  function Em(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Cl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = Nv(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = r, a = Y, a = Ee(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (Z === 2 || Z === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Vn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Au(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Vn(u), Jn(a)) {
        case 2:
        case 8:
          a = di;
          break;
        case 32:
          a = be;
          break;
        case 268435456:
          a = hi;
          break;
        default:
          a = be;
      }
      return u = Mm.bind(null, l), a = Zn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Vn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Mm(l, t) {
    if (dl !== 0 && dl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (on() && l.callbackNode !== a)
      return null;
    var u = Y;
    return u = Ee(
      l,
      l === r ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (em(l, u, t), Em(l, Bl()), l.callbackNode != null && l.callbackNode === a ? Mm.bind(null, l) : null);
  }
  function Om(l, t) {
    if (on()) return null;
    em(l, t, !0);
  }
  function td() {
    hd(function() {
      (X & 6) !== 0 ? Zn(
        yi,
        ld
      ) : Tm();
    });
  }
  function Bc() {
    if (ta === 0) {
      var l = Fa;
      l === 0 && (l = ze, ze <<= 1, (ze & 261888) === 0 && (ze = 256)), ta = l;
    }
    return ta;
  }
  function Dm(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ue("" + l);
  }
  function Um(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function ad(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Dm(
        (e[Dl] || null).action
      ), f = u.submitter;
      f && (t = (t = f[Dl] || null) ? Dm(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new xe(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ta !== 0) {
                  var i = f ? Um(e, f) : new FormData(e);
                  If(
                    a,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Um(e, f) : new FormData(e), If(
                  a,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Yc = 0; Yc < Sf.length; Yc++) {
    var Cc = Sf[Yc], ud = Cc.toLowerCase(), ed = Cc[0].toUpperCase() + Cc.slice(1);
    et(
      ud,
      "on" + ed
    );
  }
  et(u0, "onAnimationEnd"), et(e0, "onAnimationIteration"), et(n0, "onAnimationStart"), et("dblclick", "onDoubleClick"), et("focusin", "onFocus"), et("focusout", "onBlur"), et(Ay, "onTransitionRun"), et(Ty, "onTransitionStart"), et(Ey, "onTransitionCancel"), et(f0, "onTransitionEnd"), Qa("onMouseEnter", ["mouseout", "mouseover"]), Qa("onMouseLeave", ["mouseout", "mouseover"]), Qa("onPointerEnter", ["pointerout", "pointerover"]), Qa("onPointerLeave", ["pointerout", "pointerover"]), ya(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ya(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ya("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ya(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ya(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ya(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ae = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), nd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ae)
  );
  function Nm(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, d = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (g) {
              Ye(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (c = u[f], i = c.instance, d = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (g) {
              Ye(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function B(l, t) {
    var a = t[rn];
    a === void 0 && (a = t[rn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (_m(t, l, 2, !1), a.add(u));
  }
  function jc(l, t, a) {
    var u = 0;
    t && (u |= 4), _m(
      a,
      l,
      u,
      t
    );
  }
  var An = "_reactListening" + Math.random().toString(36).slice(2);
  function pc(l) {
    if (!l[An]) {
      l[An] = !0, Ti.forEach(function(a) {
        a !== "selectionchange" && (nd.has(a) || jc(a, !1, l), jc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[An] || (t[An] = !0, jc("selectionchange", !1, t));
    }
  }
  function _m(l, t, a, u) {
    switch (uv(t)) {
      case 2:
        var e = Yd;
        break;
      case 8:
        e = Cd;
        break;
      default:
        e = Fc;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !tf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Qc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Ca(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Yi(function() {
      var d = n, g = Pn(a), z = [];
      l: {
        var h = c0.get(l);
        if (h !== void 0) {
          var s = xe, T = l;
          switch (l) {
            case "keypress":
              if (_e(a) === 0) break l;
            case "keydown":
            case "keyup":
              s = Iv;
              break;
            case "focusin":
              T = "focus", s = nf;
              break;
            case "focusout":
              T = "blur", s = nf;
              break;
            case "beforeblur":
            case "afterblur":
              s = nf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              s = pi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              s = Rv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              s = ty;
              break;
            case u0:
            case e0:
            case n0:
              s = Kv;
              break;
            case f0:
              s = uy;
              break;
            case "scroll":
            case "scrollend":
              s = Gv;
              break;
            case "wheel":
              s = ny;
              break;
            case "copy":
            case "cut":
            case "paste":
              s = Jv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              s = Gi;
              break;
            case "toggle":
            case "beforetoggle":
              s = cy;
          }
          var D = (t & 4) !== 0, J = !D && (l === "scroll" || l === "scrollend"), v = D ? h !== null ? h + "Capture" : null : h;
          D = [];
          for (var m = d, y; m !== null; ) {
            var o = m;
            if (y = o.stateNode, o = o.tag, o !== 5 && o !== 26 && o !== 27 || y === null || v === null || (o = Ou(m, v), o != null && D.push(
              ue(m, o, y)
            )), J) break;
            m = m.return;
          }
          0 < D.length && (h = new s(
            h,
            T,
            null,
            a,
            g
          ), z.push({ event: h, listeners: D }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", s = l === "mouseout" || l === "pointerout", h && a !== In && (T = a.relatedTarget || a.fromElement) && (Ca(T) || T[Ya]))
            break l;
          if ((s || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, s ? (T = a.relatedTarget || a.toElement, s = d, T = T ? Ca(T) : null, T !== null && (J = cl(T), D = T.tag, T !== J || D !== 5 && D !== 27 && D !== 6) && (T = null)) : (s = null, T = d), s !== T)) {
            if (D = pi, o = "onMouseLeave", v = "onMouseEnter", m = "mouse", (l === "pointerout" || l === "pointerover") && (D = Gi, o = "onPointerLeave", v = "onPointerEnter", m = "pointer"), J = s == null ? h : Mu(s), y = T == null ? h : Mu(T), h = new D(
              o,
              m + "leave",
              s,
              a,
              g
            ), h.target = J, h.relatedTarget = y, o = null, Ca(g) === d && (D = new D(
              v,
              m + "enter",
              T,
              a,
              g
            ), D.target = y, D.relatedTarget = J, o = D), J = o, s && T)
              t: {
                for (D = fd, v = s, m = T, y = 0, o = v; o; o = D(o))
                  y++;
                o = 0;
                for (var O = m; O; O = D(O))
                  o++;
                for (; 0 < y - o; )
                  v = D(v), y--;
                for (; 0 < o - y; )
                  m = D(m), o--;
                for (; y--; ) {
                  if (v === m || m !== null && v === m.alternate) {
                    D = v;
                    break t;
                  }
                  v = D(v), m = D(m);
                }
                D = null;
              }
            else D = null;
            s !== null && Hm(
              z,
              h,
              s,
              D,
              !1
            ), T !== null && J !== null && Hm(
              z,
              J,
              T,
              D,
              !0
            );
          }
        }
        l: {
          if (h = d ? Mu(d) : window, s = h.nodeName && h.nodeName.toLowerCase(), s === "select" || s === "input" && h.type === "file")
            var p = ri;
          else if (Li(h))
            if (wi)
              p = oy;
            else {
              p = Sy;
              var E = sy;
            }
          else
            s = h.nodeName, !s || s.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? d && Fn(d.elementType) && (p = ri) : p = gy;
          if (p && (p = p(l, d))) {
            Ji(
              z,
              p,
              a,
              g
            );
            break l;
          }
          E && E(l, h, d), l === "focusout" && d && h.type === "number" && d.memoizedProps.value != null && kn(h, "number", h.value);
        }
        switch (E = d ? Mu(d) : window, l) {
          case "focusin":
            (Li(E) || E.contentEditable === "true") && (Ka = E, df = d, Bu = null);
            break;
          case "focusout":
            Bu = df = Ka = null;
            break;
          case "mousedown":
            hf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hf = !1, t0(z, a, g);
            break;
          case "selectionchange":
            if (zy) break;
          case "keydown":
          case "keyup":
            t0(z, a, g);
        }
        var _;
        if (cf)
          l: {
            switch (l) {
              case "compositionstart":
                var C = "onCompositionStart";
                break l;
              case "compositionend":
                C = "onCompositionEnd";
                break l;
              case "compositionupdate":
                C = "onCompositionUpdate";
                break l;
            }
            C = void 0;
          }
        else
          Va ? Vi(l, a) && (C = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (C = "onCompositionStart");
        C && (Xi && a.locale !== "ko" && (Va || C !== "onCompositionStart" ? C === "onCompositionEnd" && Va && (_ = Ci()) : (Xt = g, af = "value" in Xt ? Xt.value : Xt.textContent, Va = !0)), E = Tn(d, C), 0 < E.length && (C = new Qi(
          C,
          l,
          null,
          a,
          g
        ), z.push({ event: C, listeners: E }), _ ? C.data = _ : (_ = Ki(a), _ !== null && (C.data = _)))), (_ = my ? vy(l, a) : yy(l, a)) && (C = Tn(d, "onBeforeInput"), 0 < C.length && (E = new Qi(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), z.push({
          event: E,
          listeners: C
        }), E.data = _)), ad(
          z,
          l,
          d,
          a,
          g
        );
      }
      Nm(z, t);
    });
  }
  function ue(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function Tn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ou(l, a), e != null && u.unshift(
        ue(l, e, n)
      ), e = Ou(l, t), e != null && u.push(
        ue(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function fd(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Hm(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === u) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, e ? (d = Ou(a, n), d != null && f.unshift(
        ue(a, d, i)
      )) : e || (d = Ou(a, n), d != null && f.push(
        ue(a, d, i)
      ))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var cd = /\r\n?/g, id = /\u0000|\uFFFD/g;
  function xm(l) {
    return (typeof l == "string" ? l : "" + l).replace(cd, `
`).replace(id, "");
  }
  function qm(l, t) {
    return t = xm(t), xm(l) === t;
  }
  function L(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Xa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Xa(l, "" + u);
        break;
      case "className":
        Oe(l, "class", u);
        break;
      case "tabIndex":
        Oe(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oe(l, a, u);
        break;
      case "style":
        qi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Oe(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Ue("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && L(l, t, "name", e.name, e, null), L(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), L(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), L(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (L(l, t, "encType", e.encType, e, null), L(l, t, "method", e.method, e, null), L(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Ue("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = bt);
        break;
      case "onScroll":
        u != null && B("scroll", l);
        break;
      case "onScrollEnd":
        u != null && B("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(S(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(S(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Ue("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        B("beforetoggle", l), B("toggle", l), Me(l, "popover", u);
        break;
      case "xlinkActuate":
        ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Me(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = pv.get(a) || a, Me(l, a, u));
    }
  }
  function Gc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        qi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(S(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(S(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Xa(l, u) : (typeof u == "number" || typeof u == "bigint") && Xa(l, "" + u);
        break;
      case "onScroll":
        u != null && B("scroll", l);
        break;
      case "onScrollEnd":
        u != null && B("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = bt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ei.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Dl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Me(l, a, u);
          }
    }
  }
  function Al(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        B("error", l), B("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(S(137, t));
                default:
                  L(l, t, n, f, a, null);
              }
          }
        e && L(l, t, "srcSet", a.srcSet, a, null), u && L(l, t, "src", a.src, a, null);
        return;
      case "input":
        B("invalid", l);
        var c = n = f = e = null, i = null, d = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  d = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(S(137, t));
                  break;
                default:
                  L(l, t, u, g, a, null);
              }
          }
        Ni(
          l,
          n,
          c,
          i,
          d,
          f,
          e,
          !1
        );
        return;
      case "select":
        B("invalid", l), u = f = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (c = a[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                L(l, t, e, c, a, null);
            }
        t = n, a = f, l.multiple = !!u, t != null ? Ga(l, !!u, t, !1) : a != null && Ga(l, !!u, a, !0);
        return;
      case "textarea":
        B("invalid", l), n = e = u = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (c = a[f], c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(S(91));
                break;
              default:
                L(l, t, f, c, a, null);
            }
        Hi(l, u, e, n);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && (u = a[i], u != null))
            switch (i) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                L(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        B("beforetoggle", l), B("toggle", l), B("cancel", l), B("close", l);
        break;
      case "iframe":
      case "object":
        B("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ae.length; u++)
          B(ae[u], l);
        break;
      case "image":
        B("error", l), B("load", l);
        break;
      case "details":
        B("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        B("error", l), B("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in a)
          if (a.hasOwnProperty(d) && (u = a[d], u != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(S(137, t));
              default:
                L(l, t, d, u, a, null);
            }
        return;
      default:
        if (Fn(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Gc(
              l,
              t,
              g,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (u = a[c], u != null && L(l, t, c, u, a, null));
  }
  function md(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, d = null, g = null;
        for (s in a) {
          var z = a[s];
          if (a.hasOwnProperty(s) && z != null)
            switch (s) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = z;
              default:
                u.hasOwnProperty(s) || L(l, t, s, null, u, z);
            }
        }
        for (var h in u) {
          var s = u[h];
          if (z = a[h], u.hasOwnProperty(h) && (s != null || z != null))
            switch (h) {
              case "type":
                n = s;
                break;
              case "name":
                e = s;
                break;
              case "checked":
                d = s;
                break;
              case "defaultChecked":
                g = s;
                break;
              case "value":
                f = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (s != null)
                  throw Error(S(137, t));
                break;
              default:
                s !== z && L(
                  l,
                  t,
                  h,
                  s,
                  u,
                  z
                );
            }
        }
        $n(
          l,
          f,
          c,
          i,
          d,
          g,
          n,
          e
        );
        return;
      case "select":
        s = f = c = h = null;
        for (n in a)
          if (i = a[n], a.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                s = i;
              default:
                u.hasOwnProperty(n) || L(
                  l,
                  t,
                  n,
                  null,
                  u,
                  i
                );
            }
        for (e in u)
          if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && L(
                  l,
                  t,
                  e,
                  n,
                  u,
                  i
                );
            }
        t = c, a = f, u = s, h != null ? Ga(l, !!a, h, !1) : !!u != !!a && (t != null ? Ga(l, !!a, t, !0) : Ga(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        s = h = null;
        for (c in a)
          if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                L(l, t, c, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                s = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(S(91));
                break;
              default:
                e !== n && L(l, t, f, e, u, n);
            }
        _i(l, h, s);
        return;
      case "option":
        for (var T in a)
          if (h = a[T], a.hasOwnProperty(T) && h != null && !u.hasOwnProperty(T))
            switch (T) {
              case "selected":
                l.selected = !1;
                break;
              default:
                L(
                  l,
                  t,
                  T,
                  null,
                  u,
                  h
                );
            }
        for (i in u)
          if (h = u[i], s = a[i], u.hasOwnProperty(i) && h !== s && (h != null || s != null))
            switch (i) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                L(
                  l,
                  t,
                  i,
                  h,
                  u,
                  s
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var D in a)
          h = a[D], a.hasOwnProperty(D) && h != null && !u.hasOwnProperty(D) && L(l, t, D, null, u, h);
        for (d in u)
          if (h = u[d], s = a[d], u.hasOwnProperty(d) && h !== s && (h != null || s != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(S(137, t));
                break;
              default:
                L(
                  l,
                  t,
                  d,
                  h,
                  u,
                  s
                );
            }
        return;
      default:
        if (Fn(t)) {
          for (var J in a)
            h = a[J], a.hasOwnProperty(J) && h !== void 0 && !u.hasOwnProperty(J) && Gc(
              l,
              t,
              J,
              void 0,
              u,
              h
            );
          for (g in u)
            h = u[g], s = a[g], !u.hasOwnProperty(g) || h === s || h === void 0 && s === void 0 || Gc(
              l,
              t,
              g,
              h,
              u,
              s
            );
          return;
        }
    }
    for (var v in a)
      h = a[v], a.hasOwnProperty(v) && h != null && !u.hasOwnProperty(v) && L(l, t, v, null, u, h);
    for (z in u)
      h = u[z], s = a[z], !u.hasOwnProperty(z) || h === s || h == null && s == null || L(l, t, z, h, u, s);
  }
  function Bm(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function vd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Bm(f)) {
          for (f = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
            var i = a[u], d = i.startTime;
            if (d > c) break;
            var g = i.transferSize, z = i.initiatorType;
            g && Bm(z) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - d) / (i - d)));
          }
          if (--u, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Xc = null, Rc = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ym(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Cm(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Zc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Vc = null;
  function yd() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Vc ? !1 : (Vc = l, !0) : (Vc = null, !1);
  }
  var jm = typeof setTimeout == "function" ? setTimeout : void 0, dd = typeof clearTimeout == "function" ? clearTimeout : void 0, pm = typeof Promise == "function" ? Promise : void 0, hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof pm < "u" ? function(l) {
    return pm.resolve(null).then(l).catch(sd);
  } : jm;
  function sd(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function aa(l) {
    return l === "head";
  }
  function Qm(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$" || a === "/&") {
          if (u === 0) {
            l.removeChild(e), gu(t);
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          u++;
        else if (a === "html")
          ee(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, ee(a);
          for (var n = a.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Eu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = f;
          }
        } else
          a === "body" && ee(l.ownerDocument.body);
      a = e;
    } while (a);
    gu(t);
  }
  function Gm(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8)
        if (a = u.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
    } while (a);
  }
  function Kc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Kc(a), wn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Sd(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Eu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Pl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function gd(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Pl(l.nextSibling), l === null)) return null;
    return l;
  }
  function Xm(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Pl(l.nextSibling), l === null)) return null;
    return l;
  }
  function Lc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Jc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function od(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function Pl(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var rc = null;
  function Rm(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Pl(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Zm(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Vm(l, t, a) {
    switch (t = En(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(S(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(S(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(S(454));
        return l;
      default:
        throw Error(S(451));
    }
  }
  function ee(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    wn(l);
  }
  var lt = /* @__PURE__ */ new Map(), Km = /* @__PURE__ */ new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Ct = A.d;
  A.d = {
    f: bd,
    r: zd,
    D: Ad,
    C: Td,
    L: Ed,
    m: Md,
    X: Dd,
    S: Od,
    M: Ud
  };
  function bd() {
    var l = Ct.f(), t = sn();
    return l || t;
  }
  function zd(l) {
    var t = ja(l);
    t !== null && t.tag === 5 && t.type === "form" ? f1(t) : Ct.r(l);
  }
  var hu = typeof document > "u" ? null : document;
  function Lm(l, t, a) {
    var u = hu;
    if (u && typeof t == "string" && t) {
      var e = rl(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Km.has(e) || (Km.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Al(t, "link", l), sl(t), u.head.appendChild(t)));
    }
  }
  function Ad(l) {
    Ct.D(l), Lm("dns-prefetch", l, null);
  }
  function Td(l, t) {
    Ct.C(l, t), Lm("preconnect", l, t);
  }
  function Ed(l, t, a) {
    Ct.L(l, t, a);
    var u = hu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + rl(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + rl(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + rl(
        a.imageSizes
      ) + '"]')) : e += '[href="' + rl(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = su(l);
          break;
        case "script":
          n = Su(l);
      }
      lt.has(n) || (l = x(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), lt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(ne(n)) || t === "script" && u.querySelector(fe(n)) || (t = u.createElement("link"), Al(t, "link", l), sl(t), u.head.appendChild(t)));
    }
  }
  function Md(l, t) {
    Ct.m(l, t);
    var a = hu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + rl(u) + '"][href="' + rl(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Su(l);
      }
      if (!lt.has(n) && (l = x({ rel: "modulepreload", href: l }, t), lt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(fe(n)))
              return;
        }
        u = a.createElement("link"), Al(u, "link", l), sl(u), a.head.appendChild(u);
      }
    }
  }
  function Od(l, t, a) {
    Ct.S(l, t, a);
    var u = hu;
    if (u && l) {
      var e = pa(u).hoistableStyles, n = su(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(
          ne(n)
        ))
          c.loading = 5;
        else {
          l = x(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = lt.get(n)) && wc(l, a);
          var i = f = u.createElement("link");
          sl(i), Al(i, "link", l), i._p = new Promise(function(d, g) {
            i.onload = d, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, On(f, t, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function Dd(l, t) {
    Ct.X(l, t);
    var a = hu;
    if (a && l) {
      var u = pa(a).hoistableScripts, e = Su(l), n = u.get(e);
      n || (n = a.querySelector(fe(e)), n || (l = x({ src: l, async: !0 }, t), (t = lt.get(e)) && Wc(l, t), n = a.createElement("script"), sl(n), Al(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Ud(l, t) {
    Ct.M(l, t);
    var a = hu;
    if (a && l) {
      var u = pa(a).hoistableScripts, e = Su(l), n = u.get(e);
      n || (n = a.querySelector(fe(e)), n || (l = x({ src: l, async: !0, type: "module" }, t), (t = lt.get(e)) && Wc(l, t), n = a.createElement("script"), sl(n), Al(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Jm(l, t, a, u) {
    var e = (e = pt.current) ? Mn(e) : null;
    if (!e) throw Error(S(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = su(a.href), a = pa(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = su(a.href);
          var n = pa(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ne(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), lt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, lt.set(l, a), n || Nd(
            e,
            l,
            a,
            f.state
          ))), t && u === null)
            throw Error(S(528, ""));
          return f;
        }
        if (t && u !== null)
          throw Error(S(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Su(a), a = pa(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(S(444, l));
    }
  }
  function su(l) {
    return 'href="' + rl(l) + '"';
  }
  function ne(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function rm(l) {
    return x({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Nd(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Al(t, "link", a), sl(t), l.head.appendChild(t));
  }
  function Su(l) {
    return '[src="' + rl(l) + '"]';
  }
  function fe(l) {
    return "script[async]" + l;
  }
  function wm(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + rl(a.href) + '"]'
          );
          if (u)
            return t.instance = u, sl(u), u;
          var e = x({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), sl(u), Al(u, "style", e), On(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = su(a.href);
          var n = l.querySelector(
            ne(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, sl(n), n;
          u = rm(a), (e = lt.get(e)) && wc(u, e), n = (l.ownerDocument || l).createElement("link"), sl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Al(n, "link", u), t.state.loading |= 4, On(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Su(a.src), (e = l.querySelector(
            fe(n)
          )) ? (t.instance = e, sl(e), e) : (u = a, (e = lt.get(n)) && (u = x({}, a), Wc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), sl(e), Al(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(S(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, On(u, a.precedence, l));
    return t.instance;
  }
  function On(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function wc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Wc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Dn = null;
  function Wm(l, t, a) {
    if (Dn === null) {
      var u = /* @__PURE__ */ new Map(), e = Dn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = Dn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Eu] || n[gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function $m(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function _d(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function km(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Hd(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = su(u.href), n = t.querySelector(
          ne(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Un.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, sl(n);
          return;
        }
        n = t.ownerDocument || t, u = rm(u), (e = lt.get(e)) && wc(u, e), n = n.createElement("link"), sl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Al(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Un.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var $c = 0;
  function xd(l, t) {
    return l.stylesheets && l.count === 0 && _n(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && _n(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && $c === 0 && ($c = 62500 * vd());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && _n(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > $c ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Un() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) _n(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Nn = null;
  function _n(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nn = /* @__PURE__ */ new Map(), t.forEach(qd, l), Nn = null, Un.call(l));
  }
  function qd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Nn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Nn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Un.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ce = {
    $$typeof: Kl,
    Provider: null,
    Consumer: null,
    _currentValue: U,
    _currentValue2: U,
    _threadCount: 0
  };
  function Bd(l, t, a, u, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kn(0), this.hiddenUpdates = Kn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fm(l, t, a, u, e, n, f, c, i, d, g, z) {
    return l = new Bd(
      l,
      t,
      a,
      f,
      i,
      d,
      g,
      z,
      c
    ), t = 1, n === !0 && (t |= 24), n = pl(3, null, null, t), l.current = n, n.stateNode = l, t = _f(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Bf(n), l;
  }
  function Im(l) {
    return l ? (l = ra, l) : ra;
  }
  function Pm(l, t, a, u, e, n) {
    e = Im(e), u.context === null ? u.context = e : u.pendingContext = e, u = Jt(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = rt(l, u, t), a !== null && (ql(a, l, t), Xu(a, l, t));
  }
  function lv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function kc(l, t) {
    lv(l, t), (l = l.alternate) && lv(l, t);
  }
  function tv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Sa(l, 67108864);
      t !== null && ql(t, l, 67108864), kc(l, 67108864);
    }
  }
  function av(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Zl();
      t = Ln(t);
      var a = Sa(l, t);
      a !== null && ql(a, l, t), kc(l, t);
    }
  }
  var Hn = !0;
  function Yd(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 2, Fc(l, t, a, u);
    } finally {
      A.p = n, b.T = e;
    }
  }
  function Cd(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 8, Fc(l, t, a, u);
    } finally {
      A.p = n, b.T = e;
    }
  }
  function Fc(l, t, a, u) {
    if (Hn) {
      var e = Ic(u);
      if (e === null)
        Qc(
          l,
          t,
          u,
          xn,
          a
        ), ev(l, u);
      else if (pd(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (ev(l, u), t & 4 && -1 < jd.indexOf(l)) {
        for (; e !== null; ) {
          var n = ja(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = va(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Cl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    st(n), (X & 6) === 0 && (dn = Bl() + 500, te(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Sa(n, 2), c !== null && ql(c, n, 2), sn(), kc(n, 2);
            }
          if (n = Ic(u), n === null && Qc(
            l,
            t,
            u,
            xn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Qc(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function Ic(l) {
    return l = Pn(l), Pc(l);
  }
  var xn = null;
  function Pc(l) {
    if (xn = null, l = Ca(l), l !== null) {
      var t = cl(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = tt(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = ct(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return xn = l, null;
  }
  function uv(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Av()) {
          case yi:
            return 2;
          case di:
            return 8;
          case be:
          case Tv:
            return 32;
          case hi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var li = !1, ua = null, ea = null, na = null, ie = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), fa = [], jd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ev(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ua = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        na = null;
        break;
      case "pointerover":
      case "pointerout":
        ie.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        me.delete(t.pointerId);
    }
  }
  function ve(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = ja(t), t !== null && tv(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function pd(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ua = ve(
          ua,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ea = ve(
          ea,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return na = ve(
          na,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ie.set(
          n,
          ve(
            ie.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, me.set(
          n,
          ve(
            me.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function nv(l) {
    var t = Ca(l.target);
    if (t !== null) {
      var a = cl(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = tt(a), t !== null) {
            l.blockedOn = t, zi(l.priority, function() {
              av(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = ct(a), t !== null) {
            l.blockedOn = t, zi(l.priority, function() {
              av(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Ic(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        In = u, a.target.dispatchEvent(u), In = null;
      } else
        return t = ja(a), t !== null && tv(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function fv(l, t, a) {
    qn(l) && a.delete(t);
  }
  function Qd() {
    li = !1, ua !== null && qn(ua) && (ua = null), ea !== null && qn(ea) && (ea = null), na !== null && qn(na) && (na = null), ie.forEach(fv), me.forEach(fv);
  }
  function Bn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, li || (li = !0, M.unstable_scheduleCallback(
      M.unstable_NormalPriority,
      Qd
    )));
  }
  var Yn = null;
  function cv(l) {
    Yn !== l && (Yn = l, M.unstable_scheduleCallback(
      M.unstable_NormalPriority,
      function() {
        Yn === l && (Yn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (Pc(u || a) === null)
              continue;
            break;
          }
          var n = ja(a);
          n !== null && (l.splice(t, 3), t -= 3, If(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function gu(l) {
    function t(i) {
      return Bn(i, l);
    }
    ua !== null && Bn(ua, l), ea !== null && Bn(ea, l), na !== null && Bn(na, l), ie.forEach(t), me.forEach(t);
    for (var a = 0; a < fa.length; a++) {
      var u = fa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < fa.length && (a = fa[0], a.blockedOn === null); )
      nv(a), a.blockedOn === null && fa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[Dl] || null;
        if (typeof n == "function")
          f || cv(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Dl] || null)
              c = f.formAction;
            else if (Pc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), cv(a);
        }
      }
  }
  function iv() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ti(l) {
    this._internalRoot = l;
  }
  Cn.prototype.render = ti.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    var a = t.current, u = Zl();
    Pm(a, u, l, t, null, null);
  }, Cn.prototype.unmount = ti.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Pm(l.current, 2, null, l, null, null), sn(), t[Ya] = null;
    }
  };
  function Cn(l) {
    this._internalRoot = l;
  }
  Cn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = bi();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < fa.length && t !== 0 && t < fa[a].priority; a++) ;
      fa.splice(a, 0, l), a === 0 && nv(l);
    }
  };
  var mv = F.version;
  if (mv !== "19.2.0")
    throw Error(
      S(
        527,
        mv,
        "19.2.0"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(S(188)) : (l = Object.keys(l).join(","), Error(S(268, l)));
    return l = G(t), l = l !== null ? Tl(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Gd = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jn.isDisabled && jn.supportsFiber)
      try {
        zu = jn.inject(
          Gd
        ), Yl = jn;
      } catch {
      }
  }
  return de.createRoot = function(l, t) {
    if (!ll(l)) throw Error(S(299));
    var a = !1, u = "", e = g1, n = o1, f = b1;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Fm(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      null,
      e,
      n,
      f,
      iv
    ), l[Ya] = t.current, pc(l), new ti(t);
  }, de.hydrateRoot = function(l, t, a) {
    if (!ll(l)) throw Error(S(299));
    var u = !1, e = "", n = g1, f = o1, c = b1, i = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (i = a.formState)), t = Fm(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      i,
      n,
      f,
      c,
      iv
    ), t.context = Im(null), a = t.current, u = Zl(), u = Ln(u), e = Jt(u), e.callback = null, rt(a, e, u), a = u, t.current.lanes = a, Tu(t, a), st(t), l[Ya] = t.current, pc(l), new Cn(t);
  }, de.version = "19.2.0", de;
}
var gv;
function Wd() {
  if (gv) return ni.exports;
  gv = 1;
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (F) {
        console.error(F);
      }
  }
  return M(), ni.exports = wd(), ni.exports;
}
var $d = Wd();
function ii(M, F) {
  document.cookie = `lovecookies_${M}=${F};path=/;max-age=${365 * 24 * 60 * 60}`;
  const el = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
  el[M] = F, localStorage.setItem("cookieConsent", JSON.stringify(el));
}
function kd() {
  return JSON.parse(localStorage.getItem("cookieConsent") || "{}");
}
function Fd() {
  localStorage.removeItem("cookieConsent"), document.cookie.split(";").forEach((M) => {
    M.trim().startsWith("lovecookies_") && (document.cookie = `${M.split("=")[0]}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`);
  });
}
const Id = () => /* @__PURE__ */ H.jsxs(
  "svg",
  {
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ H.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ H.jsx("circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ H.jsx("circle", { cx: "8", cy: "8", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ H.jsx("circle", { cx: "16", cy: "9", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ H.jsx("circle", { cx: "9", cy: "15", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ H.jsx("circle", { cx: "15", cy: "15", r: "1", fill: "currentColor" })
    ]
  }
), Pd = () => {
  const [M, F] = ai(!1), [el, S] = ai(!1), [ll, cl] = ai({
    essential: !0,
    analytics: !1,
    marketing: !1
  });
  Zd(() => {
    const G = kd();
    if (!G || Object.keys(G).length === 0) {
      const Tl = setTimeout(() => F(!0), 300);
      return () => clearTimeout(Tl);
    } else
      cl((Tl) => ({
        ...Tl,
        ...G
      }));
  }, []);
  const tt = () => {
    const G = { essential: !0, analytics: !0, marketing: !0 };
    for (const Tl in G) ii(Tl, G[Tl]);
    cl(G), F(!1);
  }, ct = () => {
    const G = { essential: !0, analytics: !1, marketing: !1 };
    for (const Tl in G) ii(Tl, G[Tl]);
    cl(G), F(!1);
  }, Ol = () => {
    for (const G in ll)
      ii(G, ll[G]);
    S(!1), F(!1);
  };
  return /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
    /* @__PURE__ */ H.jsx(
      "button",
      {
        onClick: () => {
          Fd(), window.location.reload();
        },
        className: "fixed top-4 right-4 text-xs text-gray-400 hover:text-gray-600 z-[999]",
        children: "Reset Cookies"
      }
    ),
    /* @__PURE__ */ H.jsx(vv, { children: M && /* @__PURE__ */ H.jsx(
      ui.div,
      {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 100, opacity: 0 },
        transition: { duration: 0.4, ease: "easeOut" },
        className: "fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe",
        children: /* @__PURE__ */ H.jsxs("div", { className: "mx-auto w-full max-w-2xl bg-white border border-gray-200 rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
          /* @__PURE__ */ H.jsxs("div", { className: "flex items-start sm:items-center gap-4", children: [
            /* @__PURE__ */ H.jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600", children: /* @__PURE__ */ H.jsx(Id, {}) }),
            /* @__PURE__ */ H.jsxs("div", { children: [
              /* @__PURE__ */ H.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900", children: "Cookie Settings" }),
              /* @__PURE__ */ H.jsx("p", { className: "text-sm text-gray-600 leading-relaxed mt-1 sm:max-w-sm", children: "We use cookies to enhance your experience. You can accept all or customize your preferences." })
            ] })
          ] }),
          /* @__PURE__ */ H.jsxs("div", { className: "flex flex-wrap gap-2 w-full sm:w-auto", children: [
            /* @__PURE__ */ H.jsx(
              "button",
              {
                onClick: tt,
                className: "px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none",
                children: "Accept All"
              }
            ),
            /* @__PURE__ */ H.jsx(
              "button",
              {
                onClick: ct,
                className: "px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-400 focus:outline-none",
                children: "Reject All"
              }
            ),
            /* @__PURE__ */ H.jsx(
              "button",
              {
                onClick: () => S(!0),
                className: "px-5 py-2 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 focus:outline-none",
                children: "Customize"
              }
            )
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ H.jsx(vv, { children: el && /* @__PURE__ */ H.jsx(
      ui.div,
      {
        role: "dialog",
        "aria-modal": "true",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4",
        onClick: () => S(!1),
        children: /* @__PURE__ */ H.jsxs(
          ui.div,
          {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.95, opacity: 0 },
            onClick: (G) => G.stopPropagation(),
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden",
            children: [
              /* @__PURE__ */ H.jsxs("div", { className: "p-6 border-b border-gray-100", children: [
                /* @__PURE__ */ H.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Cookie Preferences" }),
                /* @__PURE__ */ H.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Choose which cookies you want to accept" })
              ] }),
              /* @__PURE__ */ H.jsx("div", { className: "p-6 space-y-4 overflow-y-auto max-h-[60vh]", children: [
                {
                  key: "essential",
                  label: "Essential",
                  desc: "Necessary for website functionality",
                  required: !0
                },
                {
                  key: "analytics",
                  label: "Analytics",
                  desc: "Help us understand site usage"
                },
                {
                  key: "marketing",
                  label: "Marketing",
                  desc: "Used to deliver personalized ads"
                }
              ].map(({ key: G, label: Tl, desc: x, required: tl }) => /* @__PURE__ */ H.jsxs(
                "div",
                {
                  className: `flex items-start justify-between p-4 ${tl ? "bg-gray-50" : "border border-gray-200"} rounded-xl`,
                  children: [
                    /* @__PURE__ */ H.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ H.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ H.jsx("h3", { className: "font-semibold text-gray-900", children: Tl }),
                        tl && /* @__PURE__ */ H.jsx("span", { className: "text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded", children: "Required" })
                      ] }),
                      /* @__PURE__ */ H.jsx("p", { className: "text-sm text-gray-600 mt-1", children: x })
                    ] }),
                    /* @__PURE__ */ H.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: ll[G] ?? !1,
                        disabled: tl,
                        onChange: (it) => cl({
                          ...ll,
                          [G]: it.target.checked
                        }),
                        className: "w-5 h-5 rounded accent-blue-600 mt-1 cursor-pointer"
                      }
                    )
                  ]
                },
                G
              )) }),
              /* @__PURE__ */ H.jsxs("div", { className: "p-6 border-t border-gray-100 flex gap-3", children: [
                /* @__PURE__ */ H.jsx(
                  "button",
                  {
                    onClick: () => S(!1),
                    className: "flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ H.jsx(
                  "button",
                  {
                    onClick: Ol,
                    className: "flex-1 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors",
                    children: "Save Preferences"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) })
  ] });
};
(function() {
  typeof window < "u" && (window.LoveCookies = {
    init: () => {
      let F = document.getElementById("lovecookies-root");
      F || (F = document.createElement("div"), F.id = "lovecookies-root", document.body.appendChild(F)), $d.createRoot(F).render(/* @__PURE__ */ H.jsx(Pd, {}));
    }
  }, window.LoveCookies.init());
})();
//# sourceMappingURL=lovecookies.es.js.map
