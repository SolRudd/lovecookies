var Dr = { exports: {} }, ul = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ty;
function M1() {
  if (ty) return ul;
  ty = 1;
  var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function o(r, c, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      d = {};
      for (var g in c)
        g !== "key" && (d[g] = c[g]);
    } else d = c;
    return c = d.ref, {
      $$typeof: i,
      type: r,
      key: h,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return ul.Fragment = l, ul.jsx = o, ul.jsxs = o, ul;
}
var ey;
function D1() {
  return ey || (ey = 1, Dr.exports = M1()), Dr.exports;
}
var tt = D1(), Cr = { exports: {} }, ol = {}, zr = { exports: {} }, Or = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ny;
function C1() {
  return ny || (ny = 1, (function(i) {
    function l(q, N) {
      var L = q.length;
      q.push(N);
      t: for (; 0 < L; ) {
        var st = L - 1 >>> 1, yt = q[st];
        if (0 < c(yt, N))
          q[st] = N, q[L] = yt, L = st;
        else break t;
      }
    }
    function o(q) {
      return q.length === 0 ? null : q[0];
    }
    function r(q) {
      if (q.length === 0) return null;
      var N = q[0], L = q.pop();
      if (L !== N) {
        q[0] = L;
        t: for (var st = 0, yt = q.length, ae = yt >>> 1; st < ae; ) {
          var x = 2 * (st + 1) - 1, B = q[x], w = x + 1, F = q[w];
          if (0 > c(B, L))
            w < yt && 0 > c(F, B) ? (q[st] = F, q[w] = L, st = w) : (q[st] = B, q[x] = L, st = x);
          else if (w < yt && 0 > c(F, L))
            q[st] = F, q[w] = L, st = w;
          else break t;
        }
      }
      return N;
    }
    function c(q, N) {
      var L = q.sortIndex - N.sortIndex;
      return L !== 0 ? L : q.id - N.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      i.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, g = h.now();
      i.unstable_now = function() {
        return h.now() - g;
      };
    }
    var p = [], m = [], v = 1, T = null, b = 3, V = !1, U = !1, j = !1, G = !1, H = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function W(q) {
      for (var N = o(m); N !== null; ) {
        if (N.callback === null) r(m);
        else if (N.startTime <= q)
          r(m), N.sortIndex = N.expirationTime, l(p, N);
        else break;
        N = o(m);
      }
    }
    function k(q) {
      if (j = !1, W(q), !U)
        if (o(p) !== null)
          U = !0, $ || ($ = !0, te());
        else {
          var N = o(m);
          N !== null && ue(k, N.startTime - q);
        }
    }
    var $ = !1, et = -1, Y = 5, mt = -1;
    function Dt() {
      return G ? !0 : !(i.unstable_now() - mt < Y);
    }
    function It() {
      if (G = !1, $) {
        var q = i.unstable_now();
        mt = q;
        var N = !0;
        try {
          t: {
            U = !1, j && (j = !1, X(et), et = -1), V = !0;
            var L = b;
            try {
              e: {
                for (W(q), T = o(p); T !== null && !(T.expirationTime > q && Dt()); ) {
                  var st = T.callback;
                  if (typeof st == "function") {
                    T.callback = null, b = T.priorityLevel;
                    var yt = st(
                      T.expirationTime <= q
                    );
                    if (q = i.unstable_now(), typeof yt == "function") {
                      T.callback = yt, W(q), N = !0;
                      break e;
                    }
                    T === o(p) && r(p), W(q);
                  } else r(p);
                  T = o(p);
                }
                if (T !== null) N = !0;
                else {
                  var ae = o(m);
                  ae !== null && ue(
                    k,
                    ae.startTime - q
                  ), N = !1;
                }
              }
              break t;
            } finally {
              T = null, b = L, V = !1;
            }
            N = void 0;
          }
        } finally {
          N ? te() : $ = !1;
        }
      }
    }
    var te;
    if (typeof Q == "function")
      te = function() {
        Q(It);
      };
    else if (typeof MessageChannel < "u") {
      var De = new MessageChannel(), Pe = De.port2;
      De.port1.onmessage = It, te = function() {
        Pe.postMessage(null);
      };
    } else
      te = function() {
        H(It, 0);
      };
    function ue(q, N) {
      et = H(function() {
        q(i.unstable_now());
      }, N);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, i.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < q ? Math.floor(1e3 / q) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, i.unstable_next = function(q) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = b;
      }
      var L = b;
      b = N;
      try {
        return q();
      } finally {
        b = L;
      }
    }, i.unstable_requestPaint = function() {
      G = !0;
    }, i.unstable_runWithPriority = function(q, N) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var L = b;
      b = q;
      try {
        return N();
      } finally {
        b = L;
      }
    }, i.unstable_scheduleCallback = function(q, N, L) {
      var st = i.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? st + L : st) : L = st, q) {
        case 1:
          var yt = -1;
          break;
        case 2:
          yt = 250;
          break;
        case 5:
          yt = 1073741823;
          break;
        case 4:
          yt = 1e4;
          break;
        default:
          yt = 5e3;
      }
      return yt = L + yt, q = {
        id: v++,
        callback: N,
        priorityLevel: q,
        startTime: L,
        expirationTime: yt,
        sortIndex: -1
      }, L > st ? (q.sortIndex = L, l(m, q), o(p) === null && q === o(m) && (j ? (X(et), et = -1) : j = !0, ue(k, L - st))) : (q.sortIndex = yt, l(p, q), U || V || (U = !0, $ || ($ = !0, te()))), q;
    }, i.unstable_shouldYield = Dt, i.unstable_wrapCallback = function(q) {
      var N = b;
      return function() {
        var L = b;
        b = N;
        try {
          return q.apply(this, arguments);
        } finally {
          b = L;
        }
      };
    };
  })(Or)), Or;
}
var ay;
function z1() {
  return ay || (ay = 1, zr.exports = C1()), zr.exports;
}
var Rr = { exports: {} }, at = {}, iy;
function O1() {
  if (iy) return at;
  iy = 1;
  var i = { env: { NODE_ENV: "production" } };
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), g = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), V = Symbol.iterator;
  function U(x) {
    return x === null || typeof x != "object" ? null : (x = V && x[V] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var j = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, G = Object.assign, H = {};
  function X(x, B, w) {
    this.props = x, this.context = B, this.refs = H, this.updater = w || j;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(x, B) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, B, "setState");
  }, X.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = X.prototype;
  function W(x, B, w) {
    this.props = x, this.context = B, this.refs = H, this.updater = w || j;
  }
  var k = W.prototype = new Q();
  k.constructor = W, G(k, X.prototype), k.isPureReactComponent = !0;
  var $ = Array.isArray;
  function et() {
  }
  var Y = { H: null, A: null, T: null, S: null }, mt = Object.prototype.hasOwnProperty;
  function Dt(x, B, w) {
    var F = w.ref;
    return {
      $$typeof: l,
      type: x,
      key: B,
      ref: F !== void 0 ? F : null,
      props: w
    };
  }
  function It(x, B) {
    return Dt(x.type, B, x.props);
  }
  function te(x) {
    return typeof x == "object" && x !== null && x.$$typeof === l;
  }
  function De(x) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(w) {
      return B[w];
    });
  }
  var Pe = /\/+/g;
  function ue(x, B) {
    return typeof x == "object" && x !== null && x.key != null ? De("" + x.key) : B.toString(36);
  }
  function q(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(et, et) : (x.status = "pending", x.then(
          function(B) {
            x.status === "pending" && (x.status = "fulfilled", x.value = B);
          },
          function(B) {
            x.status === "pending" && (x.status = "rejected", x.reason = B);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function N(x, B, w, F, ut) {
    var ot = typeof x;
    (ot === "undefined" || ot === "boolean") && (x = null);
    var St = !1;
    if (x === null) St = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          St = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case l:
            case o:
              St = !0;
              break;
            case T:
              return St = x._init, N(
                St(x._payload),
                B,
                w,
                F,
                ut
              );
          }
      }
    if (St)
      return ut = ut(x), St = F === "" ? "." + ue(x, 0) : F, $(ut) ? (w = "", St != null && (w = St.replace(Pe, "$&/") + "/"), N(ut, B, w, "", function(mi) {
        return mi;
      })) : ut != null && (te(ut) && (ut = It(
        ut,
        w + (ut.key == null || x && x.key === ut.key ? "" : ("" + ut.key).replace(
          Pe,
          "$&/"
        ) + "/") + St
      )), B.push(ut)), 1;
    St = 0;
    var ie = F === "" ? "." : F + ":";
    if ($(x))
      for (var Bt = 0; Bt < x.length; Bt++)
        F = x[Bt], ot = ie + ue(F, Bt), St += N(
          F,
          B,
          w,
          ot,
          ut
        );
    else if (Bt = U(x), typeof Bt == "function")
      for (x = Bt.call(x), Bt = 0; !(F = x.next()).done; )
        F = F.value, ot = ie + ue(F, Bt++), St += N(
          F,
          B,
          w,
          ot,
          ut
        );
    else if (ot === "object") {
      if (typeof x.then == "function")
        return N(
          q(x),
          B,
          w,
          F,
          ut
        );
      throw B = String(x), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return St;
  }
  function L(x, B, w) {
    if (x == null) return x;
    var F = [], ut = 0;
    return N(x, F, "", "", function(ot) {
      return B.call(w, ot, ut++);
    }), F;
  }
  function st(x) {
    if (x._status === -1) {
      var B = x._result;
      B = B(), B.then(
        function(w) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = w);
        },
        function(w) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = w);
        }
      ), x._status === -1 && (x._status = 0, x._result = B);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var yt = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, ae = {
    map: L,
    forEach: function(x, B, w) {
      L(
        x,
        function() {
          B.apply(this, arguments);
        },
        w
      );
    },
    count: function(x) {
      var B = 0;
      return L(x, function() {
        B++;
      }), B;
    },
    toArray: function(x) {
      return L(x, function(B) {
        return B;
      }) || [];
    },
    only: function(x) {
      if (!te(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return at.Activity = b, at.Children = ae, at.Component = X, at.Fragment = r, at.Profiler = d, at.PureComponent = W, at.StrictMode = c, at.Suspense = m, at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, at.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return Y.H.useMemoCache(x);
    }
  }, at.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, at.cacheSignal = function() {
    return null;
  }, at.cloneElement = function(x, B, w) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var F = G({}, x.props), ut = x.key;
    if (B != null)
      for (ot in B.key !== void 0 && (ut = "" + B.key), B)
        !mt.call(B, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && B.ref === void 0 || (F[ot] = B[ot]);
    var ot = arguments.length - 2;
    if (ot === 1) F.children = w;
    else if (1 < ot) {
      for (var St = Array(ot), ie = 0; ie < ot; ie++)
        St[ie] = arguments[ie + 2];
      F.children = St;
    }
    return Dt(x.type, ut, F);
  }, at.createContext = function(x) {
    return x = {
      $$typeof: g,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: h,
      _context: x
    }, x;
  }, at.createElement = function(x, B, w) {
    var F, ut = {}, ot = null;
    if (B != null)
      for (F in B.key !== void 0 && (ot = "" + B.key), B)
        mt.call(B, F) && F !== "key" && F !== "__self" && F !== "__source" && (ut[F] = B[F]);
    var St = arguments.length - 2;
    if (St === 1) ut.children = w;
    else if (1 < St) {
      for (var ie = Array(St), Bt = 0; Bt < St; Bt++)
        ie[Bt] = arguments[Bt + 2];
      ut.children = ie;
    }
    if (x && x.defaultProps)
      for (F in St = x.defaultProps, St)
        ut[F] === void 0 && (ut[F] = St[F]);
    return Dt(x, ot, ut);
  }, at.createRef = function() {
    return { current: null };
  }, at.forwardRef = function(x) {
    return { $$typeof: p, render: x };
  }, at.isValidElement = te, at.lazy = function(x) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: x },
      _init: st
    };
  }, at.memo = function(x, B) {
    return {
      $$typeof: v,
      type: x,
      compare: B === void 0 ? null : B
    };
  }, at.startTransition = function(x) {
    var B = Y.T, w = {};
    Y.T = w;
    try {
      var F = x(), ut = Y.S;
      ut !== null && ut(w, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(et, yt);
    } catch (ot) {
      yt(ot);
    } finally {
      B !== null && w.types !== null && (B.types = w.types), Y.T = B;
    }
  }, at.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, at.use = function(x) {
    return Y.H.use(x);
  }, at.useActionState = function(x, B, w) {
    return Y.H.useActionState(x, B, w);
  }, at.useCallback = function(x, B) {
    return Y.H.useCallback(x, B);
  }, at.useContext = function(x) {
    return Y.H.useContext(x);
  }, at.useDebugValue = function() {
  }, at.useDeferredValue = function(x, B) {
    return Y.H.useDeferredValue(x, B);
  }, at.useEffect = function(x, B) {
    return Y.H.useEffect(x, B);
  }, at.useEffectEvent = function(x) {
    return Y.H.useEffectEvent(x);
  }, at.useId = function() {
    return Y.H.useId();
  }, at.useImperativeHandle = function(x, B, w) {
    return Y.H.useImperativeHandle(x, B, w);
  }, at.useInsertionEffect = function(x, B) {
    return Y.H.useInsertionEffect(x, B);
  }, at.useLayoutEffect = function(x, B) {
    return Y.H.useLayoutEffect(x, B);
  }, at.useMemo = function(x, B) {
    return Y.H.useMemo(x, B);
  }, at.useOptimistic = function(x, B) {
    return Y.H.useOptimistic(x, B);
  }, at.useReducer = function(x, B, w) {
    return Y.H.useReducer(x, B, w);
  }, at.useRef = function(x) {
    return Y.H.useRef(x);
  }, at.useState = function(x) {
    return Y.H.useState(x);
  }, at.useSyncExternalStore = function(x, B, w) {
    return Y.H.useSyncExternalStore(
      x,
      B,
      w
    );
  }, at.useTransition = function() {
    return Y.H.useTransition();
  }, at.version = "19.2.0", at;
}
var ly;
function gc() {
  return ly || (ly = 1, Rr.exports = O1()), Rr.exports;
}
var Vr = { exports: {} }, ee = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sy;
function R1() {
  if (sy) return ee;
  sy = 1;
  var i = gc();
  function l(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(l(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function d(p, m, v) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: m,
      implementation: v
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, m) {
    if (p === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ee.createPortal = function(p, m) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(l(299));
    return d(p, m, null, v);
  }, ee.flushSync = function(p) {
    var m = h.T, v = r.p;
    try {
      if (h.T = null, r.p = 2, p) return p();
    } finally {
      h.T = m, r.p = v, r.d.f();
    }
  }, ee.preconnect = function(p, m) {
    typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(p, m));
  }, ee.prefetchDNS = function(p) {
    typeof p == "string" && r.d.D(p);
  }, ee.preinit = function(p, m) {
    if (typeof p == "string" && m && typeof m.as == "string") {
      var v = m.as, T = g(v, m.crossOrigin), b = typeof m.integrity == "string" ? m.integrity : void 0, V = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      v === "style" ? r.d.S(
        p,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: T,
          integrity: b,
          fetchPriority: V
        }
      ) : v === "script" && r.d.X(p, {
        crossOrigin: T,
        integrity: b,
        fetchPriority: V,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, ee.preinitModule = function(p, m) {
    if (typeof p == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var v = g(
            m.as,
            m.crossOrigin
          );
          r.d.M(p, {
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && r.d.M(p);
  }, ee.preload = function(p, m) {
    if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var v = m.as, T = g(v, m.crossOrigin);
      r.d.L(p, v, {
        crossOrigin: T,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, ee.preloadModule = function(p, m) {
    if (typeof p == "string")
      if (m) {
        var v = g(m.as, m.crossOrigin);
        r.d.m(p, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else r.d.m(p);
  }, ee.requestFormReset = function(p) {
    r.d.r(p);
  }, ee.unstable_batchedUpdates = function(p, m) {
    return p(m);
  }, ee.useFormState = function(p, m, v) {
    return h.H.useFormState(p, m, v);
  }, ee.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, ee.version = "19.2.0", ee;
}
var uy;
function V1() {
  if (uy) return Vr.exports;
  uy = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Vr.exports = R1(), Vr.exports;
}
var oy;
function _1() {
  if (oy) return ol;
  oy = 1;
  var i = { env: { NODE_ENV: "production" } };
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l = z1(), o = gc(), r = V1();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function g(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (h(t) !== t)
      throw Error(c(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (a = s.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return m(s), t;
          if (u === a) return m(s), e;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = s, a = u;
      else {
        for (var f = !1, y = s.child; y; ) {
          if (y === n) {
            f = !0, n = s, a = u;
            break;
          }
          if (y === a) {
            f = !0, a = s, n = u;
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = u.child; y; ) {
            if (y === n) {
              f = !0, n = u, a = s;
              break;
            }
            if (y === a) {
              f = !0, a = u, n = s;
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? t : e;
  }
  function T(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = T(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign, V = Symbol.for("react.element"), U = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), W = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), Dt = Symbol.for("react.activity"), It = Symbol.for("react.memo_cache_sentinel"), te = Symbol.iterator;
  function De(t) {
    return t === null || typeof t != "object" ? null : (t = te && t[te] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Pe = Symbol.for("react.client.reference");
  function ue(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Pe ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case G:
        return "Fragment";
      case X:
        return "Profiler";
      case H:
        return "StrictMode";
      case $:
        return "Suspense";
      case et:
        return "SuspenseList";
      case Dt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case j:
          return "Portal";
        case W:
          return t.displayName || "Context";
        case Q:
          return (t._context.displayName || "Context") + ".Consumer";
        case k:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Y:
          return e = t.displayName || null, e !== null ? e : ue(t.type) || "Memo";
        case mt:
          e = t._payload, t = t._init;
          try {
            return ue(t(e));
          } catch {
          }
      }
    return null;
  }
  var q = Array.isArray, N = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, st = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yt = [], ae = -1;
  function x(t) {
    return { current: t };
  }
  function B(t) {
    0 > ae || (t.current = yt[ae], yt[ae] = null, ae--);
  }
  function w(t, e) {
    ae++, yt[ae] = t.current, t.current = e;
  }
  var F = x(null), ut = x(null), ot = x(null), St = x(null);
  function ie(t, e) {
    switch (w(ot, e), w(ut, t), w(F, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? xm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = xm(e), t = Em(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    B(F), w(F, t);
  }
  function Bt() {
    B(F), B(ut), B(ot);
  }
  function mi(t) {
    t.memoizedState !== null && w(St, t);
    var e = F.current, n = Em(e, t.type);
    e !== n && (w(ut, t), w(F, n));
  }
  function Dl(t) {
    ut.current === t && (B(F), B(ut)), St.current === t && (B(St), al._currentValue = st);
  }
  var uu, $c;
  function kn(t) {
    if (uu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        uu = e && e[1] || "", $c = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + uu + t + $c;
  }
  var ou = !1;
  function ru(t, e) {
    if (!t || ou) return "";
    ou = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (z) {
                  var C = z;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (z) {
                  C = z;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                C = z;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (z) {
            if (z && C && typeof z.stack == "string")
              return [z.stack, C.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), f = u[0], y = u[1];
      if (f && y) {
        var S = f.split(`
`), D = y.split(`
`);
        for (s = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < D.length && !D[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === S.length || s === D.length)
          for (a = S.length - 1, s = D.length - 1; 1 <= a && 0 <= s && S[a] !== D[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (S[a] !== D[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || S[a] !== D[s]) {
                  var O = `
` + S[a].replace(" at new ", " at ");
                  return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), O;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      ou = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? kn(n) : "";
  }
  function n0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return kn(t.type);
      case 16:
        return kn("Lazy");
      case 13:
        return t.child !== e && e !== null ? kn("Suspense Fallback") : kn("Suspense");
      case 19:
        return kn("SuspenseList");
      case 0:
      case 15:
        return ru(t.type, !1);
      case 11:
        return ru(t.type.render, !1);
      case 1:
        return ru(t.type, !0);
      case 31:
        return kn("Activity");
      default:
        return "";
    }
  }
  function Ic(t) {
    try {
      var e = "", n = null;
      do
        e += n0(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var cu = Object.prototype.hasOwnProperty, fu = l.unstable_scheduleCallback, hu = l.unstable_cancelCallback, a0 = l.unstable_shouldYield, i0 = l.unstable_requestPaint, pe = l.unstable_now, l0 = l.unstable_getCurrentPriorityLevel, tf = l.unstable_ImmediatePriority, ef = l.unstable_UserBlockingPriority, Cl = l.unstable_NormalPriority, s0 = l.unstable_LowPriority, nf = l.unstable_IdlePriority, u0 = l.log, o0 = l.unstable_setDisableYieldValue, yi = null, ge = null;
  function Sn(t) {
    if (typeof u0 == "function" && o0(t), ge && typeof ge.setStrictMode == "function")
      try {
        ge.setStrictMode(yi, t);
      } catch {
      }
  }
  var ve = Math.clz32 ? Math.clz32 : f0, r0 = Math.log, c0 = Math.LN2;
  function f0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (r0(t) / c0 | 0) | 0;
  }
  var zl = 256, Ol = 262144, Rl = 4194304;
  function Fn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Vl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0, u = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var y = a & 134217727;
    return y !== 0 ? (a = y & ~u, a !== 0 ? s = Fn(a) : (f &= y, f !== 0 ? s = Fn(f) : n || (n = y & ~t, n !== 0 && (s = Fn(n))))) : (y = a & ~u, y !== 0 ? s = Fn(y) : f !== 0 ? s = Fn(f) : n || (n = a & ~t, n !== 0 && (s = Fn(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function pi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function h0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function af() {
    var t = Rl;
    return Rl <<= 1, (Rl & 62914560) === 0 && (Rl = 4194304), t;
  }
  function du(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function gi(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function d0(t, e, n, a, s, u) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var y = t.entanglements, S = t.expirationTimes, D = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var O = 31 - ve(n), _ = 1 << O;
      y[O] = 0, S[O] = -1;
      var C = D[O];
      if (C !== null)
        for (D[O] = null, O = 0; O < C.length; O++) {
          var z = C[O];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~_;
    }
    a !== 0 && lf(t, a, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e));
  }
  function lf(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function sf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - ve(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function uf(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : mu(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function mu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function yu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function of() {
    var t = L.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Jm(t.type));
  }
  function rf(t, e) {
    var n = L.p;
    try {
      return L.p = t, e();
    } finally {
      L.p = n;
    }
  }
  var Tn = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + Tn, oe = "__reactProps$" + Tn, Sa = "__reactContainer$" + Tn, pu = "__reactEvents$" + Tn, m0 = "__reactListeners$" + Tn, y0 = "__reactHandles$" + Tn, cf = "__reactResources$" + Tn, vi = "__reactMarker$" + Tn;
  function gu(t) {
    delete t[Jt], delete t[oe], delete t[pu], delete t[m0], delete t[y0];
  }
  function Ta(t) {
    var e = t[Jt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Sa] || n[Jt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Vm(t); t !== null; ) {
            if (n = t[Jt]) return n;
            t = Vm(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ba(t) {
    if (t = t[Jt] || t[Sa]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Si(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Aa(t) {
    var e = t[cf];
    return e || (e = t[cf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Zt(t) {
    t[vi] = !0;
  }
  var ff = /* @__PURE__ */ new Set(), hf = {};
  function Wn(t, e) {
    xa(t, e), xa(t + "Capture", e);
  }
  function xa(t, e) {
    for (hf[t] = e, t = 0; t < e.length; t++)
      ff.add(e[t]);
  }
  var p0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), df = {}, mf = {};
  function g0(t) {
    return cu.call(mf, t) ? !0 : cu.call(df, t) ? !1 : p0.test(t) ? mf[t] = !0 : (df[t] = !0, !1);
  }
  function _l(t, e, n) {
    if (g0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ul(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function $e(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function Ce(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function yf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function v0(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var s = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(f) {
          n = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function vu(t) {
    if (!t._valueTracker) {
      var e = yf(t) ? "checked" : "value";
      t._valueTracker = v0(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function pf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = yf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  function Nl(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var S0 = /[\n"\\]/g;
  function ze(t) {
    return t.replace(
      S0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Su(t, e, n, a, s, u, f, y) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ce(e)) : t.value !== "" + Ce(e) && (t.value = "" + Ce(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? Tu(t, f, Ce(e)) : n != null ? Tu(t, f, Ce(n)) : a != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + Ce(y) : t.removeAttribute("name");
  }
  function gf(t, e, n, a, s, u, f, y) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        vu(t);
        return;
      }
      n = n != null ? "" + Ce(n) : "", e = e != null ? "" + Ce(e) : n, y || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = y ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), vu(t);
  }
  function Tu(t, e, n) {
    e === "number" && Nl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Ea(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ce(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function vf(t, e, n) {
    if (e != null && (e = "" + Ce(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ce(n) : "";
  }
  function Sf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (q(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Ce(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), vu(t);
  }
  function Ma(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var T0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || T0.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function bf(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && Tf(t, s, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Tf(t, u, e[u]);
  }
  function bu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var b0 = /* @__PURE__ */ new Map([
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
  ]), A0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Bl(t) {
    return A0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ie() {
  }
  var Au = null;
  function xu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Da = null, Ca = null;
  function Af(t) {
    var e = ba(t);
    if (e && (t = e.stateNode)) {
      var n = t[oe] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Su(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + ze(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[oe] || null;
                if (!s) throw Error(c(90));
                Su(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && pf(a);
          }
          break t;
        case "textarea":
          vf(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Ea(t, !!n.multiple, e, !1);
      }
    }
  }
  var Eu = !1;
  function xf(t, e, n) {
    if (Eu) return t(e, n);
    Eu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Eu = !1, (Da !== null || Ca !== null) && (As(), Da && (e = Da, t = Ca, Ca = Da = null, Af(e), t)))
        for (e = 0; e < t.length; e++) Af(t[e]);
    }
  }
  function Ti(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[oe] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        c(231, e, typeof n)
      );
    return n;
  }
  var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mu = !1;
  if (tn)
    try {
      var bi = {};
      Object.defineProperty(bi, "passive", {
        get: function() {
          Mu = !0;
        }
      }), window.addEventListener("test", bi, bi), window.removeEventListener("test", bi, bi);
    } catch {
      Mu = !1;
    }
  var bn = null, Du = null, jl = null;
  function Ef() {
    if (jl) return jl;
    var t, e = Du, n = e.length, a, s = "value" in bn ? bn.value : bn.textContent, u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[u - a]; a++) ;
    return jl = s.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ll(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Hl() {
    return !0;
  }
  function Mf() {
    return !1;
  }
  function re(t) {
    function e(n, a, s, u, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var y in t)
        t.hasOwnProperty(y) && (n = t[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Hl : Mf, this.isPropagationStopped = Mf, this;
    }
    return b(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hl);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hl);
      },
      persist: function() {
      },
      isPersistent: Hl
    }), e;
  }
  var Pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, wl = re(Pn), Ai = b({}, Pn, { view: 0, detail: 0 }), x0 = re(Ai), Cu, zu, xi, Yl = b({}, Ai, {
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
    getModifierState: Ru,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== xi && (xi && t.type === "mousemove" ? (Cu = t.screenX - xi.screenX, zu = t.screenY - xi.screenY) : zu = Cu = 0, xi = t), Cu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : zu;
    }
  }), Df = re(Yl), E0 = b({}, Yl, { dataTransfer: 0 }), M0 = re(E0), D0 = b({}, Ai, { relatedTarget: 0 }), Ou = re(D0), C0 = b({}, Pn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), z0 = re(C0), O0 = b({}, Pn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), R0 = re(O0), V0 = b({}, Pn, { data: 0 }), Cf = re(V0), _0 = {
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
  }, U0 = {
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
  }, N0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function B0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = N0[t]) ? !!e[t] : !1;
  }
  function Ru() {
    return B0;
  }
  var j0 = b({}, Ai, {
    key: function(t) {
      if (t.key) {
        var e = _0[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ll(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? U0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ru,
    charCode: function(t) {
      return t.type === "keypress" ? Ll(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ll(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), L0 = re(j0), H0 = b({}, Yl, {
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
  }), zf = re(H0), w0 = b({}, Ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ru
  }), Y0 = re(w0), q0 = b({}, Pn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), G0 = re(q0), X0 = b({}, Yl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Q0 = re(X0), Z0 = b({}, Pn, {
    newState: 0,
    oldState: 0
  }), K0 = re(Z0), J0 = [9, 13, 27, 32], Vu = tn && "CompositionEvent" in window, Ei = null;
  tn && "documentMode" in document && (Ei = document.documentMode);
  var k0 = tn && "TextEvent" in window && !Ei, Of = tn && (!Vu || Ei && 8 < Ei && 11 >= Ei), Rf = " ", Vf = !1;
  function _f(t, e) {
    switch (t) {
      case "keyup":
        return J0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Uf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var za = !1;
  function F0(t, e) {
    switch (t) {
      case "compositionend":
        return Uf(e);
      case "keypress":
        return e.which !== 32 ? null : (Vf = !0, Rf);
      case "textInput":
        return t = e.data, t === Rf && Vf ? null : t;
      default:
        return null;
    }
  }
  function W0(t, e) {
    if (za)
      return t === "compositionend" || !Vu && _f(t, e) ? (t = Ef(), jl = Du = bn = null, za = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Of && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var P0 = {
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
  function Nf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!P0[t.type] : e === "textarea";
  }
  function Bf(t, e, n, a) {
    Da ? Ca ? Ca.push(a) : Ca = [a] : Da = a, e = Os(e, "onChange"), 0 < e.length && (n = new wl(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Mi = null, Di = null;
  function $0(t) {
    gm(t, 0);
  }
  function ql(t) {
    var e = Si(t);
    if (pf(e)) return t;
  }
  function jf(t, e) {
    if (t === "change") return e;
  }
  var Lf = !1;
  if (tn) {
    var _u;
    if (tn) {
      var Uu = "oninput" in document;
      if (!Uu) {
        var Hf = document.createElement("div");
        Hf.setAttribute("oninput", "return;"), Uu = typeof Hf.oninput == "function";
      }
      _u = Uu;
    } else _u = !1;
    Lf = _u && (!document.documentMode || 9 < document.documentMode);
  }
  function wf() {
    Mi && (Mi.detachEvent("onpropertychange", Yf), Di = Mi = null);
  }
  function Yf(t) {
    if (t.propertyName === "value" && ql(Di)) {
      var e = [];
      Bf(
        e,
        Di,
        t,
        xu(t)
      ), xf($0, e);
    }
  }
  function I0(t, e, n) {
    t === "focusin" ? (wf(), Mi = e, Di = n, Mi.attachEvent("onpropertychange", Yf)) : t === "focusout" && wf();
  }
  function tv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ql(Di);
  }
  function ev(t, e) {
    if (t === "click") return ql(e);
  }
  function nv(t, e) {
    if (t === "input" || t === "change")
      return ql(e);
  }
  function av(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Se = typeof Object.is == "function" ? Object.is : av;
  function Ci(t, e) {
    if (Se(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!cu.call(e, s) || !Se(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function qf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gf(t, e) {
    var n = qf(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = qf(n);
    }
  }
  function Xf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Xf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Qf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Nl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Nl(t.document);
    }
    return e;
  }
  function Nu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var iv = tn && "documentMode" in document && 11 >= document.documentMode, Oa = null, Bu = null, zi = null, ju = !1;
  function Zf(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ju || Oa == null || Oa !== Nl(a) || (a = Oa, "selectionStart" in a && Nu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), zi && Ci(zi, a) || (zi = a, a = Os(Bu, "onSelect"), 0 < a.length && (e = new wl(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Oa)));
  }
  function $n(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ra = {
    animationend: $n("Animation", "AnimationEnd"),
    animationiteration: $n("Animation", "AnimationIteration"),
    animationstart: $n("Animation", "AnimationStart"),
    transitionrun: $n("Transition", "TransitionRun"),
    transitionstart: $n("Transition", "TransitionStart"),
    transitioncancel: $n("Transition", "TransitionCancel"),
    transitionend: $n("Transition", "TransitionEnd")
  }, Lu = {}, Kf = {};
  tn && (Kf = document.createElement("div").style, "AnimationEvent" in window || (delete Ra.animationend.animation, delete Ra.animationiteration.animation, delete Ra.animationstart.animation), "TransitionEvent" in window || delete Ra.transitionend.transition);
  function In(t) {
    if (Lu[t]) return Lu[t];
    if (!Ra[t]) return t;
    var e = Ra[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Kf)
        return Lu[t] = e[n];
    return t;
  }
  var Jf = In("animationend"), kf = In("animationiteration"), Ff = In("animationstart"), lv = In("transitionrun"), sv = In("transitionstart"), uv = In("transitioncancel"), Wf = In("transitionend"), Pf = /* @__PURE__ */ new Map(), Hu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Hu.push("scrollEnd");
  function qe(t, e) {
    Pf.set(t, e), Wn(e, [t]);
  }
  var Gl = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Oe = [], Va = 0, wu = 0;
  function Xl() {
    for (var t = Va, e = wu = Va = 0; e < t; ) {
      var n = Oe[e];
      Oe[e++] = null;
      var a = Oe[e];
      Oe[e++] = null;
      var s = Oe[e];
      Oe[e++] = null;
      var u = Oe[e];
      if (Oe[e++] = null, a !== null && s !== null) {
        var f = a.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s;
      }
      u !== 0 && $f(n, s, u);
    }
  }
  function Ql(t, e, n, a) {
    Oe[Va++] = t, Oe[Va++] = e, Oe[Va++] = n, Oe[Va++] = a, wu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Yu(t, e, n, a) {
    return Ql(t, e, n, a), Zl(t);
  }
  function ta(t, e) {
    return Ql(t, null, null, e), Zl(t);
  }
  function $f(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - ve(n), t = u.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function Zl(t) {
    if (50 < Wi)
      throw Wi = 0, Wo = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var _a = {};
  function ov(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Te(t, e, n, a) {
    return new ov(t, e, n, a);
  }
  function qu(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function en(t, e) {
    var n = t.alternate;
    return n === null ? (n = Te(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function If(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Kl(t, e, n, a, s, u) {
    var f = 0;
    if (a = t, typeof t == "function") qu(t) && (f = 1);
    else if (typeof t == "string")
      f = d1(
        t,
        n,
        F.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Dt:
          return t = Te(31, n, e, s), t.elementType = Dt, t.lanes = u, t;
        case G:
          return ea(n.children, s, u, e);
        case H:
          f = 8, s |= 24;
          break;
        case X:
          return t = Te(12, n, e, s | 2), t.elementType = X, t.lanes = u, t;
        case $:
          return t = Te(13, n, e, s), t.elementType = $, t.lanes = u, t;
        case et:
          return t = Te(19, n, e, s), t.elementType = et, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case W:
                f = 10;
                break t;
              case Q:
                f = 9;
                break t;
              case k:
                f = 11;
                break t;
              case Y:
                f = 14;
                break t;
              case mt:
                f = 16, a = null;
                break t;
            }
          f = 29, n = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Te(f, n, e, s), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function ea(t, e, n, a) {
    return t = Te(7, t, a, e), t.lanes = n, t;
  }
  function Gu(t, e, n) {
    return t = Te(6, t, null, e), t.lanes = n, t;
  }
  function th(t) {
    var e = Te(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Xu(t, e, n) {
    return e = Te(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var eh = /* @__PURE__ */ new WeakMap();
  function Re(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = eh.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Ic(e)
      }, eh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Ic(e)
    };
  }
  var Ua = [], Na = 0, Jl = null, Oi = 0, Ve = [], _e = 0, An = null, Ze = 1, Ke = "";
  function nn(t, e) {
    Ua[Na++] = Oi, Ua[Na++] = Jl, Jl = t, Oi = e;
  }
  function nh(t, e, n) {
    Ve[_e++] = Ze, Ve[_e++] = Ke, Ve[_e++] = An, An = t;
    var a = Ze;
    t = Ke;
    var s = 32 - ve(a) - 1;
    a &= ~(1 << s), n += 1;
    var u = 32 - ve(e) + s;
    if (30 < u) {
      var f = s - s % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, Ze = 1 << 32 - ve(e) + s | n << s | a, Ke = u + t;
    } else
      Ze = 1 << u | n << s | a, Ke = t;
  }
  function Qu(t) {
    t.return !== null && (nn(t, 1), nh(t, 1, 0));
  }
  function Zu(t) {
    for (; t === Jl; )
      Jl = Ua[--Na], Ua[Na] = null, Oi = Ua[--Na], Ua[Na] = null;
    for (; t === An; )
      An = Ve[--_e], Ve[_e] = null, Ke = Ve[--_e], Ve[_e] = null, Ze = Ve[--_e], Ve[_e] = null;
  }
  function ah(t, e) {
    Ve[_e++] = Ze, Ve[_e++] = Ke, Ve[_e++] = An, Ze = e.id, Ke = e.overflow, An = t;
  }
  var kt = null, Ct = null, dt = !1, xn = null, Ue = !1, Ku = Error(c(519));
  function En(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ri(Re(e, t)), Ku;
  }
  function ih(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[Jt] = t, e[oe] = a, n) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < $i.length; n++)
          ct($i[n], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e), gf(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), Sf(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || bm(e.textContent, n) ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)), a.onScroll != null && ct("scroll", e), a.onScrollEnd != null && ct("scrollend", e), a.onClick != null && (e.onclick = Ie), e = !0) : e = !1, e || En(t, !0);
  }
  function lh(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 5:
        case 31:
        case 13:
          Ue = !1;
          return;
        case 27:
        case 3:
          Ue = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function Ba(t) {
    if (t !== kt) return !1;
    if (!dt) return lh(t), dt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || fr(t.type, t.memoizedProps)), n = !n), n && Ct && En(t), lh(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Ct = Rm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Ct = Rm(t);
    } else
      e === 27 ? (e = Ct, Hn(t.type) ? (t = pr, pr = null, Ct = t) : Ct = e) : Ct = kt ? Be(t.stateNode.nextSibling) : null;
    return !0;
  }
  function na() {
    Ct = kt = null, dt = !1;
  }
  function Ju() {
    var t = xn;
    return t !== null && (de === null ? de = t : de.push.apply(
      de,
      t
    ), xn = null), t;
  }
  function Ri(t) {
    xn === null ? xn = [t] : xn.push(t);
  }
  var ku = x(null), aa = null, an = null;
  function Mn(t, e, n) {
    w(ku, e._currentValue), e._currentValue = n;
  }
  function ln(t) {
    t._currentValue = ku.current, B(ku);
  }
  function Fu(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Wu(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var f = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var y = u;
          u = s;
          for (var S = 0; S < e.length; S++)
            if (y.context === e[S]) {
              u.lanes |= n, y = u.alternate, y !== null && (y.lanes |= n), Fu(
                u.return,
                n,
                t
              ), a || (f = null);
              break t;
            }
          u = y.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(c(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), Fu(f, n, t), f = null;
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function ja(t, e, n, a) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(c(387));
        if (f = f.memoizedProps, f !== null) {
          var y = s.type;
          Se(s.pendingProps.value, f.value) || (t !== null ? t.push(y) : t = [y]);
        }
      } else if (s === St.current) {
        if (f = s.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(al) : t = [al]);
      }
      s = s.return;
    }
    t !== null && Wu(
      e,
      t,
      n,
      a
    ), e.flags |= 262144;
  }
  function kl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Se(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ia(t) {
    aa = t, an = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Ft(t) {
    return sh(aa, t);
  }
  function Fl(t, e) {
    return aa === null && ia(t), sh(t, e);
  }
  function sh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, an === null) {
      if (t === null) throw Error(c(308));
      an = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else an = an.next = e;
    return n;
  }
  var rv = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, cv = l.unstable_scheduleCallback, fv = l.unstable_NormalPriority, wt = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Pu() {
    return {
      controller: new rv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vi(t) {
    t.refCount--, t.refCount === 0 && cv(fv, function() {
      t.controller.abort();
    });
  }
  var _i = null, $u = 0, La = 0, Ha = null;
  function hv(t, e) {
    if (_i === null) {
      var n = _i = [];
      $u = 0, La = nr(), Ha = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return $u++, e.then(uh, uh), e;
  }
  function uh() {
    if (--$u === 0 && _i !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var t = _i;
      _i = null, La = 0, Ha = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function dv(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var s = 0; s < n.length; s++) (0, n[s])(e);
      },
      function(s) {
        for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), a;
  }
  var oh = N.S;
  N.S = function(t, e) {
    Zd = pe(), typeof e == "object" && e !== null && typeof e.then == "function" && hv(t, e), oh !== null && oh(t, e);
  };
  var la = x(null);
  function Iu() {
    var t = la.current;
    return t !== null ? t : Mt.pooledCache;
  }
  function Wl(t, e) {
    e === null ? w(la, la.current) : w(la, e.pool);
  }
  function rh() {
    var t = Iu();
    return t === null ? null : { parent: wt._currentValue, pool: t };
  }
  var wa = Error(c(460)), to = Error(c(474)), Pl = Error(c(542)), $l = { then: function() {
  } };
  function ch(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function fh(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Ie, Ie), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, dh(t), t;
      default:
        if (typeof e.status == "string") e.then(Ie, Ie);
        else {
          if (t = Mt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "fulfilled", s.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "rejected", s.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, dh(t), t;
        }
        throw ua = e, wa;
    }
  }
  function sa(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ua = n, wa) : n;
    }
  }
  var ua = null;
  function hh() {
    if (ua === null) throw Error(c(459));
    var t = ua;
    return ua = null, t;
  }
  function dh(t) {
    if (t === wa || t === Pl)
      throw Error(c(483));
  }
  var Ya = null, Ui = 0;
  function Il(t) {
    var e = Ui;
    return Ui += 1, Ya === null && (Ya = []), fh(Ya, t, e);
  }
  function Ni(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ts(t, e) {
    throw e.$$typeof === V ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function mh(t) {
    function e(E, A) {
      if (t) {
        var M = E.deletions;
        M === null ? (E.deletions = [A], E.flags |= 16) : M.push(A);
      }
    }
    function n(E, A) {
      if (!t) return null;
      for (; A !== null; )
        e(E, A), A = A.sibling;
      return null;
    }
    function a(E) {
      for (var A = /* @__PURE__ */ new Map(); E !== null; )
        E.key !== null ? A.set(E.key, E) : A.set(E.index, E), E = E.sibling;
      return A;
    }
    function s(E, A) {
      return E = en(E, A), E.index = 0, E.sibling = null, E;
    }
    function u(E, A, M) {
      return E.index = M, t ? (M = E.alternate, M !== null ? (M = M.index, M < A ? (E.flags |= 67108866, A) : M) : (E.flags |= 67108866, A)) : (E.flags |= 1048576, A);
    }
    function f(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function y(E, A, M, R) {
      return A === null || A.tag !== 6 ? (A = Gu(M, E.mode, R), A.return = E, A) : (A = s(A, M), A.return = E, A);
    }
    function S(E, A, M, R) {
      var P = M.type;
      return P === G ? O(
        E,
        A,
        M.props.children,
        R,
        M.key
      ) : A !== null && (A.elementType === P || typeof P == "object" && P !== null && P.$$typeof === mt && sa(P) === A.type) ? (A = s(A, M.props), Ni(A, M), A.return = E, A) : (A = Kl(
        M.type,
        M.key,
        M.props,
        null,
        E.mode,
        R
      ), Ni(A, M), A.return = E, A);
    }
    function D(E, A, M, R) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== M.containerInfo || A.stateNode.implementation !== M.implementation ? (A = Xu(M, E.mode, R), A.return = E, A) : (A = s(A, M.children || []), A.return = E, A);
    }
    function O(E, A, M, R, P) {
      return A === null || A.tag !== 7 ? (A = ea(
        M,
        E.mode,
        R,
        P
      ), A.return = E, A) : (A = s(A, M), A.return = E, A);
    }
    function _(E, A, M) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = Gu(
          "" + A,
          E.mode,
          M
        ), A.return = E, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case U:
            return M = Kl(
              A.type,
              A.key,
              A.props,
              null,
              E.mode,
              M
            ), Ni(M, A), M.return = E, M;
          case j:
            return A = Xu(
              A,
              E.mode,
              M
            ), A.return = E, A;
          case mt:
            return A = sa(A), _(E, A, M);
        }
        if (q(A) || De(A))
          return A = ea(
            A,
            E.mode,
            M,
            null
          ), A.return = E, A;
        if (typeof A.then == "function")
          return _(E, Il(A), M);
        if (A.$$typeof === W)
          return _(
            E,
            Fl(E, A),
            M
          );
        ts(E, A);
      }
      return null;
    }
    function C(E, A, M, R) {
      var P = A !== null ? A.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return P !== null ? null : y(E, A, "" + M, R);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case U:
            return M.key === P ? S(E, A, M, R) : null;
          case j:
            return M.key === P ? D(E, A, M, R) : null;
          case mt:
            return M = sa(M), C(E, A, M, R);
        }
        if (q(M) || De(M))
          return P !== null ? null : O(E, A, M, R, null);
        if (typeof M.then == "function")
          return C(
            E,
            A,
            Il(M),
            R
          );
        if (M.$$typeof === W)
          return C(
            E,
            A,
            Fl(E, M),
            R
          );
        ts(E, M);
      }
      return null;
    }
    function z(E, A, M, R, P) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return E = E.get(M) || null, y(A, E, "" + R, P);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case U:
            return E = E.get(
              R.key === null ? M : R.key
            ) || null, S(A, E, R, P);
          case j:
            return E = E.get(
              R.key === null ? M : R.key
            ) || null, D(A, E, R, P);
          case mt:
            return R = sa(R), z(
              E,
              A,
              M,
              R,
              P
            );
        }
        if (q(R) || De(R))
          return E = E.get(M) || null, O(A, E, R, P, null);
        if (typeof R.then == "function")
          return z(
            E,
            A,
            M,
            Il(R),
            P
          );
        if (R.$$typeof === W)
          return z(
            E,
            A,
            M,
            Fl(A, R),
            P
          );
        ts(A, R);
      }
      return null;
    }
    function Z(E, A, M, R) {
      for (var P = null, pt = null, J = A, lt = A = 0, ht = null; J !== null && lt < M.length; lt++) {
        J.index > lt ? (ht = J, J = null) : ht = J.sibling;
        var gt = C(
          E,
          J,
          M[lt],
          R
        );
        if (gt === null) {
          J === null && (J = ht);
          break;
        }
        t && J && gt.alternate === null && e(E, J), A = u(gt, A, lt), pt === null ? P = gt : pt.sibling = gt, pt = gt, J = ht;
      }
      if (lt === M.length)
        return n(E, J), dt && nn(E, lt), P;
      if (J === null) {
        for (; lt < M.length; lt++)
          J = _(E, M[lt], R), J !== null && (A = u(
            J,
            A,
            lt
          ), pt === null ? P = J : pt.sibling = J, pt = J);
        return dt && nn(E, lt), P;
      }
      for (J = a(J); lt < M.length; lt++)
        ht = z(
          J,
          E,
          lt,
          M[lt],
          R
        ), ht !== null && (t && ht.alternate !== null && J.delete(
          ht.key === null ? lt : ht.key
        ), A = u(
          ht,
          A,
          lt
        ), pt === null ? P = ht : pt.sibling = ht, pt = ht);
      return t && J.forEach(function(Xn) {
        return e(E, Xn);
      }), dt && nn(E, lt), P;
    }
    function I(E, A, M, R) {
      if (M == null) throw Error(c(151));
      for (var P = null, pt = null, J = A, lt = A = 0, ht = null, gt = M.next(); J !== null && !gt.done; lt++, gt = M.next()) {
        J.index > lt ? (ht = J, J = null) : ht = J.sibling;
        var Xn = C(E, J, gt.value, R);
        if (Xn === null) {
          J === null && (J = ht);
          break;
        }
        t && J && Xn.alternate === null && e(E, J), A = u(Xn, A, lt), pt === null ? P = Xn : pt.sibling = Xn, pt = Xn, J = ht;
      }
      if (gt.done)
        return n(E, J), dt && nn(E, lt), P;
      if (J === null) {
        for (; !gt.done; lt++, gt = M.next())
          gt = _(E, gt.value, R), gt !== null && (A = u(gt, A, lt), pt === null ? P = gt : pt.sibling = gt, pt = gt);
        return dt && nn(E, lt), P;
      }
      for (J = a(J); !gt.done; lt++, gt = M.next())
        gt = z(J, E, lt, gt.value, R), gt !== null && (t && gt.alternate !== null && J.delete(gt.key === null ? lt : gt.key), A = u(gt, A, lt), pt === null ? P = gt : pt.sibling = gt, pt = gt);
      return t && J.forEach(function(E1) {
        return e(E, E1);
      }), dt && nn(E, lt), P;
    }
    function Et(E, A, M, R) {
      if (typeof M == "object" && M !== null && M.type === G && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case U:
            t: {
              for (var P = M.key; A !== null; ) {
                if (A.key === P) {
                  if (P = M.type, P === G) {
                    if (A.tag === 7) {
                      n(
                        E,
                        A.sibling
                      ), R = s(
                        A,
                        M.props.children
                      ), R.return = E, E = R;
                      break t;
                    }
                  } else if (A.elementType === P || typeof P == "object" && P !== null && P.$$typeof === mt && sa(P) === A.type) {
                    n(
                      E,
                      A.sibling
                    ), R = s(A, M.props), Ni(R, M), R.return = E, E = R;
                    break t;
                  }
                  n(E, A);
                  break;
                } else e(E, A);
                A = A.sibling;
              }
              M.type === G ? (R = ea(
                M.props.children,
                E.mode,
                R,
                M.key
              ), R.return = E, E = R) : (R = Kl(
                M.type,
                M.key,
                M.props,
                null,
                E.mode,
                R
              ), Ni(R, M), R.return = E, E = R);
            }
            return f(E);
          case j:
            t: {
              for (P = M.key; A !== null; ) {
                if (A.key === P)
                  if (A.tag === 4 && A.stateNode.containerInfo === M.containerInfo && A.stateNode.implementation === M.implementation) {
                    n(
                      E,
                      A.sibling
                    ), R = s(A, M.children || []), R.return = E, E = R;
                    break t;
                  } else {
                    n(E, A);
                    break;
                  }
                else e(E, A);
                A = A.sibling;
              }
              R = Xu(M, E.mode, R), R.return = E, E = R;
            }
            return f(E);
          case mt:
            return M = sa(M), Et(
              E,
              A,
              M,
              R
            );
        }
        if (q(M))
          return Z(
            E,
            A,
            M,
            R
          );
        if (De(M)) {
          if (P = De(M), typeof P != "function") throw Error(c(150));
          return M = P.call(M), I(
            E,
            A,
            M,
            R
          );
        }
        if (typeof M.then == "function")
          return Et(
            E,
            A,
            Il(M),
            R
          );
        if (M.$$typeof === W)
          return Et(
            E,
            A,
            Fl(E, M),
            R
          );
        ts(E, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, A !== null && A.tag === 6 ? (n(E, A.sibling), R = s(A, M), R.return = E, E = R) : (n(E, A), R = Gu(M, E.mode, R), R.return = E, E = R), f(E)) : n(E, A);
    }
    return function(E, A, M, R) {
      try {
        Ui = 0;
        var P = Et(
          E,
          A,
          M,
          R
        );
        return Ya = null, P;
      } catch (J) {
        if (J === wa || J === Pl) throw J;
        var pt = Te(29, J, null, E.mode);
        return pt.lanes = R, pt.return = E, pt;
      } finally {
      }
    };
  }
  var oa = mh(!0), yh = mh(!1), Dn = !1;
  function eo(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function no(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Cn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (vt & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Zl(t), $f(t, null, n), e;
    }
    return Ql(t, a, e, n), Zl(t);
  }
  function Bi(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, sf(t, n);
    }
  }
  function ao(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? s = u = e : u = u.next = e;
      } else s = u = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var io = !1;
  function ji() {
    if (io) {
      var t = Ha;
      if (t !== null) throw t;
    }
  }
  function Li(t, e, n, a) {
    io = !1;
    var s = t.updateQueue;
    Dn = !1;
    var u = s.firstBaseUpdate, f = s.lastBaseUpdate, y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var S = y, D = S.next;
      S.next = null, f === null ? u = D : f.next = D, f = S;
      var O = t.alternate;
      O !== null && (O = O.updateQueue, y = O.lastBaseUpdate, y !== f && (y === null ? O.firstBaseUpdate = D : y.next = D, O.lastBaseUpdate = S));
    }
    if (u !== null) {
      var _ = s.baseState;
      f = 0, O = D = S = null, y = u;
      do {
        var C = y.lane & -536870913, z = C !== y.lane;
        if (z ? (ft & C) === C : (a & C) === C) {
          C !== 0 && C === La && (io = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          t: {
            var Z = t, I = y;
            C = e;
            var Et = n;
            switch (I.tag) {
              case 1:
                if (Z = I.payload, typeof Z == "function") {
                  _ = Z.call(Et, _, C);
                  break t;
                }
                _ = Z;
                break t;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = I.payload, C = typeof Z == "function" ? Z.call(Et, _, C) : Z, C == null) break t;
                _ = b({}, _, C);
                break t;
              case 2:
                Dn = !0;
            }
          }
          C = y.callback, C !== null && (t.flags |= 64, z && (t.flags |= 8192), z = s.callbacks, z === null ? s.callbacks = [C] : z.push(C));
        } else
          z = {
            lane: C,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, O === null ? (D = O = z, S = _) : O = O.next = z, f |= C;
        if (y = y.next, y === null) {
          if (y = s.shared.pending, y === null)
            break;
          z = y, y = z.next, z.next = null, s.lastBaseUpdate = z, s.shared.pending = null;
        }
      } while (!0);
      O === null && (S = _), s.baseState = S, s.firstBaseUpdate = D, s.lastBaseUpdate = O, u === null && (s.shared.lanes = 0), Un |= f, t.lanes = f, t.memoizedState = _;
    }
  }
  function ph(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function gh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        ph(n[t], e);
  }
  var qa = x(null), es = x(0);
  function vh(t, e) {
    t = mn, w(es, t), w(qa, e), mn = t | e.baseLanes;
  }
  function lo() {
    w(es, mn), w(qa, qa.current);
  }
  function so() {
    mn = es.current, B(qa), B(es);
  }
  var be = x(null), Ne = null;
  function On(t) {
    var e = t.alternate;
    w(jt, jt.current & 1), w(be, t), Ne === null && (e === null || qa.current !== null || e.memoizedState !== null) && (Ne = t);
  }
  function uo(t) {
    w(jt, jt.current), w(be, t), Ne === null && (Ne = t);
  }
  function Sh(t) {
    t.tag === 22 ? (w(jt, jt.current), w(be, t), Ne === null && (Ne = t)) : Rn();
  }
  function Rn() {
    w(jt, jt.current), w(be, be.current);
  }
  function Ae(t) {
    B(be), Ne === t && (Ne = null), B(jt);
  }
  var jt = x(0);
  function ns(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || mr(n) || yr(n)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var sn = 0, it = null, At = null, Yt = null, as = !1, Ga = !1, ra = !1, is = 0, Hi = 0, Xa = null, mv = 0;
  function _t() {
    throw Error(c(321));
  }
  function oo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Se(t[n], e[n])) return !1;
    return !0;
  }
  function ro(t, e, n, a, s, u) {
    return sn = u, it = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = t === null || t.memoizedState === null ? nd : Mo, ra = !1, u = n(a, s), ra = !1, Ga && (u = bh(
      e,
      n,
      a,
      s
    )), Th(t), u;
  }
  function Th(t) {
    N.H = qi;
    var e = At !== null && At.next !== null;
    if (sn = 0, Yt = At = it = null, as = !1, Hi = 0, Xa = null, e) throw Error(c(300));
    t === null || qt || (t = t.dependencies, t !== null && kl(t) && (qt = !0));
  }
  function bh(t, e, n, a) {
    it = t;
    var s = 0;
    do {
      if (Ga && (Xa = null), Hi = 0, Ga = !1, 25 <= s) throw Error(c(301));
      if (s += 1, Yt = At = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      N.H = ad, u = e(n, a);
    } while (Ga);
    return u;
  }
  function yv() {
    var t = N.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? wi(e) : e, t = t.useState()[0], (At !== null ? At.memoizedState : null) !== t && (it.flags |= 1024), e;
  }
  function co() {
    var t = is !== 0;
    return is = 0, t;
  }
  function fo(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function ho(t) {
    if (as) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      as = !1;
    }
    sn = 0, Yt = At = it = null, Ga = !1, Hi = is = 0, Xa = null;
  }
  function le() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? it.memoizedState = Yt = t : Yt = Yt.next = t, Yt;
  }
  function Lt() {
    if (At === null) {
      var t = it.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = At.next;
    var e = Yt === null ? it.memoizedState : Yt.next;
    if (e !== null)
      Yt = e, At = t;
    else {
      if (t === null)
        throw it.alternate === null ? Error(c(467)) : Error(c(310));
      At = t, t = {
        memoizedState: At.memoizedState,
        baseState: At.baseState,
        baseQueue: At.baseQueue,
        queue: At.queue,
        next: null
      }, Yt === null ? it.memoizedState = Yt = t : Yt = Yt.next = t;
    }
    return Yt;
  }
  function ls() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wi(t) {
    var e = Hi;
    return Hi += 1, Xa === null && (Xa = []), t = fh(Xa, t, e), e = it, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, N.H = e === null || e.memoizedState === null ? nd : Mo), t;
  }
  function ss(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return wi(t);
      if (t.$$typeof === W) return Ft(t);
    }
    throw Error(c(438, String(t)));
  }
  function mo(t) {
    var e = null, n = it.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = it.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = ls(), it.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = It;
    return e.index++, n;
  }
  function un(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function us(t) {
    var e = Lt();
    return yo(e, At, t);
  }
  function yo(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = u.next, u.next = f;
      }
      e.baseQueue = s = u, a.pending = null;
    }
    if (u = t.baseState, s === null) t.memoizedState = u;
    else {
      e = s.next;
      var y = f = null, S = null, D = e, O = !1;
      do {
        var _ = D.lane & -536870913;
        if (_ !== D.lane ? (ft & _) === _ : (sn & _) === _) {
          var C = D.revertLane;
          if (C === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), _ === La && (O = !0);
          else if ((sn & C) === C) {
            D = D.next, C === La && (O = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, S === null ? (y = S = _, f = u) : S = S.next = _, it.lanes |= C, Un |= C;
          _ = D.action, ra && n(u, _), u = D.hasEagerState ? D.eagerState : n(u, _);
        } else
          C = {
            lane: _,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, S === null ? (y = S = C, f = u) : S = S.next = C, it.lanes |= _, Un |= _;
        D = D.next;
      } while (D !== null && D !== e);
      if (S === null ? f = u : S.next = y, !Se(u, t.memoizedState) && (qt = !0, O && (n = Ha, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = f, t.baseQueue = S, a.lastRenderedState = u;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function po(t) {
    var e = Lt(), n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, s = n.pending, u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        u = t(u, f.action), f = f.next;
      while (f !== s);
      Se(u, e.memoizedState) || (qt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ah(t, e, n) {
    var a = it, s = Lt(), u = dt;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var f = !Se(
      (At || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, qt = !0), s = s.queue, So(Mh.bind(null, a, s, t), [
      t
    ]), s.getSnapshot !== e || f || Yt !== null && Yt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Qa(
        9,
        { destroy: void 0 },
        Eh.bind(
          null,
          a,
          s,
          n,
          e
        ),
        null
      ), Mt === null) throw Error(c(349));
      u || (sn & 127) !== 0 || xh(a, e, n);
    }
    return n;
  }
  function xh(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = it.updateQueue, e === null ? (e = ls(), it.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Eh(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Dh(e) && Ch(t);
  }
  function Mh(t, e, n) {
    return n(function() {
      Dh(e) && Ch(t);
    });
  }
  function Dh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Se(t, n);
    } catch {
      return !0;
    }
  }
  function Ch(t) {
    var e = ta(t, 2);
    e !== null && me(e, t, 2);
  }
  function go(t) {
    var e = le();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), ra) {
        Sn(!0);
        try {
          n();
        } finally {
          Sn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: un,
      lastRenderedState: t
    }, e;
  }
  function zh(t, e, n, a) {
    return t.baseState = n, yo(
      t,
      At,
      typeof a == "function" ? a : un
    );
  }
  function pv(t, e, n, a, s) {
    if (cs(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          u.listeners.push(f);
        }
      };
      N.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Oh(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Oh(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var u = N.T, f = {};
      N.T = f;
      try {
        var y = n(s, a), S = N.S;
        S !== null && S(f, y), Rh(t, e, y);
      } catch (D) {
        vo(t, e, D);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), N.T = u;
      }
    } else
      try {
        u = n(s, a), Rh(t, e, u);
      } catch (D) {
        vo(t, e, D);
      }
  }
  function Rh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Vh(t, e, a);
      },
      function(a) {
        return vo(t, e, a);
      }
    ) : Vh(t, e, n);
  }
  function Vh(t, e, n) {
    e.status = "fulfilled", e.value = n, _h(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Oh(t, n)));
  }
  function vo(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, _h(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function _h(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Uh(t, e) {
    return e;
  }
  function Nh(t, e) {
    if (dt) {
      var n = Mt.formState;
      if (n !== null) {
        t: {
          var a = it;
          if (dt) {
            if (Ct) {
              e: {
                for (var s = Ct, u = Ue; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (s = Be(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Ct = Be(
                  s.nextSibling
                ), a = s.data === "F!";
                break t;
              }
            }
            En(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = le(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Uh,
      lastRenderedState: e
    }, n.queue = a, n = Ih.bind(
      null,
      it,
      a
    ), a.dispatch = n, a = go(!1), u = Eo.bind(
      null,
      it,
      !1,
      a.queue
    ), a = le(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = pv.bind(
      null,
      it,
      s,
      u,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Bh(t) {
    var e = Lt();
    return jh(e, At, t);
  }
  function jh(t, e, n) {
    if (e = yo(
      t,
      e,
      Uh
    )[0], t = us(un)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = wi(e);
      } catch (f) {
        throw f === wa ? Pl : f;
      }
    else a = e;
    e = Lt();
    var s = e.queue, u = s.dispatch;
    return n !== e.memoizedState && (it.flags |= 2048, Qa(
      9,
      { destroy: void 0 },
      gv.bind(null, s, n),
      null
    )), [a, u, t];
  }
  function gv(t, e) {
    t.action = e;
  }
  function Lh(t) {
    var e = Lt(), n = At;
    if (n !== null)
      return jh(e, n, t);
    Lt(), e = e.memoizedState, n = Lt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Qa(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = it.updateQueue, e === null && (e = ls(), it.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Hh() {
    return Lt().memoizedState;
  }
  function os(t, e, n, a) {
    var s = le();
    it.flags |= t, s.memoizedState = Qa(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function rs(t, e, n, a) {
    var s = Lt();
    a = a === void 0 ? null : a;
    var u = s.memoizedState.inst;
    At !== null && a !== null && oo(a, At.memoizedState.deps) ? s.memoizedState = Qa(e, u, n, a) : (it.flags |= t, s.memoizedState = Qa(
      1 | e,
      u,
      n,
      a
    ));
  }
  function wh(t, e) {
    os(8390656, 8, t, e);
  }
  function So(t, e) {
    rs(2048, 8, t, e);
  }
  function vv(t) {
    it.flags |= 4;
    var e = it.updateQueue;
    if (e === null)
      e = ls(), it.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Yh(t) {
    var e = Lt().memoizedState;
    return vv({ ref: e, nextImpl: t }), function() {
      if ((vt & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function qh(t, e) {
    return rs(4, 2, t, e);
  }
  function Gh(t, e) {
    return rs(4, 4, t, e);
  }
  function Xh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Qh(t, e, n) {
    n = n != null ? n.concat([t]) : null, rs(4, 4, Xh.bind(null, e, t), n);
  }
  function To() {
  }
  function Zh(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && oo(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Kh(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && oo(e, a[1]))
      return a[0];
    if (a = t(), ra) {
      Sn(!0);
      try {
        t();
      } finally {
        Sn(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function bo(t, e, n) {
    return n === void 0 || (sn & 1073741824) !== 0 && (ft & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Jd(), it.lanes |= t, Un |= t, n);
  }
  function Jh(t, e, n, a) {
    return Se(n, e) ? n : qa.current !== null ? (t = bo(t, n, a), Se(t, e) || (qt = !0), t) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (ft & 261930) === 0 ? (qt = !0, t.memoizedState = n) : (t = Jd(), it.lanes |= t, Un |= t, e);
  }
  function kh(t, e, n, a, s) {
    var u = L.p;
    L.p = u !== 0 && 8 > u ? u : 8;
    var f = N.T, y = {};
    N.T = y, Eo(t, !1, e, n);
    try {
      var S = s(), D = N.S;
      if (D !== null && D(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var O = dv(
          S,
          a
        );
        Yi(
          t,
          e,
          O,
          Me(t)
        );
      } else
        Yi(
          t,
          e,
          a,
          Me(t)
        );
    } catch (_) {
      Yi(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: _ },
        Me()
      );
    } finally {
      L.p = u, f !== null && y.types !== null && (f.types = y.types), N.T = f;
    }
  }
  function Sv() {
  }
  function Ao(t, e, n, a) {
    if (t.tag !== 5) throw Error(c(476));
    var s = Fh(t).queue;
    kh(
      t,
      s,
      e,
      st,
      n === null ? Sv : function() {
        return Wh(t), n(a);
      }
    );
  }
  function Fh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: st,
      baseState: st,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: st
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Wh(t) {
    var e = Fh(t);
    e.next === null && (e = t.alternate.memoizedState), Yi(
      t,
      e.next.queue,
      {},
      Me()
    );
  }
  function xo() {
    return Ft(al);
  }
  function Ph() {
    return Lt().memoizedState;
  }
  function $h() {
    return Lt().memoizedState;
  }
  function Tv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Me();
          t = Cn(n);
          var a = zn(e, t, n);
          a !== null && (me(a, e, n), Bi(a, e, n)), e = { cache: Pu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function bv(t, e, n) {
    var a = Me();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cs(t) ? td(e, n) : (n = Yu(t, e, n, a), n !== null && (me(n, t, a), ed(n, e, a)));
  }
  function Ih(t, e, n) {
    var a = Me();
    Yi(t, e, n, a);
  }
  function Yi(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (cs(t)) td(e, s);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var f = e.lastRenderedState, y = u(f, n);
          if (s.hasEagerState = !0, s.eagerState = y, Se(y, f))
            return Ql(t, e, s, 0), Mt === null && Xl(), !1;
        } catch {
        } finally {
        }
      if (n = Yu(t, e, s, a), n !== null)
        return me(n, t, a), ed(n, e, a), !0;
    }
    return !1;
  }
  function Eo(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: nr(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cs(t)) {
      if (e) throw Error(c(479));
    } else
      e = Yu(
        t,
        n,
        a,
        2
      ), e !== null && me(e, t, 2);
  }
  function cs(t) {
    var e = t.alternate;
    return t === it || e !== null && e === it;
  }
  function td(t, e) {
    Ga = as = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function ed(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, sf(t, n);
    }
  }
  var qi = {
    readContext: Ft,
    use: ss,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
    useHostTransitionStatus: _t,
    useFormState: _t,
    useActionState: _t,
    useOptimistic: _t,
    useMemoCache: _t,
    useCacheRefresh: _t
  };
  qi.useEffectEvent = _t;
  var nd = {
    readContext: Ft,
    use: ss,
    useCallback: function(t, e) {
      return le().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Ft,
    useEffect: wh,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, os(
        4194308,
        4,
        Xh.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return os(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      os(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = le();
      e = e === void 0 ? null : e;
      var a = t();
      if (ra) {
        Sn(!0);
        try {
          t();
        } finally {
          Sn(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = le();
      if (n !== void 0) {
        var s = n(e);
        if (ra) {
          Sn(!0);
          try {
            n(e);
          } finally {
            Sn(!1);
          }
        }
      } else s = e;
      return a.memoizedState = a.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, a.queue = t, t = t.dispatch = bv.bind(
        null,
        it,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = le();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = go(t);
      var e = t.queue, n = Ih.bind(null, it, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: To,
    useDeferredValue: function(t, e) {
      var n = le();
      return bo(n, t, e);
    },
    useTransition: function() {
      var t = go(!1);
      return t = kh.bind(
        null,
        it,
        t.queue,
        !0,
        !1
      ), le().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = it, s = le();
      if (dt) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = e(), Mt === null)
          throw Error(c(349));
        (ft & 127) !== 0 || xh(a, e, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return s.queue = u, wh(Mh.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Qa(
        9,
        { destroy: void 0 },
        Eh.bind(
          null,
          a,
          u,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = le(), e = Mt.identifierPrefix;
      if (dt) {
        var n = Ke, a = Ze;
        n = (a & ~(1 << 32 - ve(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = is++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = mv++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: xo,
    useFormState: Nh,
    useActionState: Nh,
    useOptimistic: function(t) {
      var e = le();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Eo.bind(
        null,
        it,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: mo,
    useCacheRefresh: function() {
      return le().memoizedState = Tv.bind(
        null,
        it
      );
    },
    useEffectEvent: function(t) {
      var e = le(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((vt & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Mo = {
    readContext: Ft,
    use: ss,
    useCallback: Zh,
    useContext: Ft,
    useEffect: So,
    useImperativeHandle: Qh,
    useInsertionEffect: qh,
    useLayoutEffect: Gh,
    useMemo: Kh,
    useReducer: us,
    useRef: Hh,
    useState: function() {
      return us(un);
    },
    useDebugValue: To,
    useDeferredValue: function(t, e) {
      var n = Lt();
      return Jh(
        n,
        At.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = us(un)[0], e = Lt().memoizedState;
      return [
        typeof t == "boolean" ? t : wi(t),
        e
      ];
    },
    useSyncExternalStore: Ah,
    useId: Ph,
    useHostTransitionStatus: xo,
    useFormState: Bh,
    useActionState: Bh,
    useOptimistic: function(t, e) {
      var n = Lt();
      return zh(n, At, t, e);
    },
    useMemoCache: mo,
    useCacheRefresh: $h
  };
  Mo.useEffectEvent = Yh;
  var ad = {
    readContext: Ft,
    use: ss,
    useCallback: Zh,
    useContext: Ft,
    useEffect: So,
    useImperativeHandle: Qh,
    useInsertionEffect: qh,
    useLayoutEffect: Gh,
    useMemo: Kh,
    useReducer: po,
    useRef: Hh,
    useState: function() {
      return po(un);
    },
    useDebugValue: To,
    useDeferredValue: function(t, e) {
      var n = Lt();
      return At === null ? bo(n, t, e) : Jh(
        n,
        At.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = po(un)[0], e = Lt().memoizedState;
      return [
        typeof t == "boolean" ? t : wi(t),
        e
      ];
    },
    useSyncExternalStore: Ah,
    useId: Ph,
    useHostTransitionStatus: xo,
    useFormState: Lh,
    useActionState: Lh,
    useOptimistic: function(t, e) {
      var n = Lt();
      return At !== null ? zh(n, At, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: mo,
    useCacheRefresh: $h
  };
  ad.useEffectEvent = Yh;
  function Do(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : b({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Co = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Me(), s = Cn(a);
      s.payload = e, n != null && (s.callback = n), e = zn(t, s, a), e !== null && (me(e, t, a), Bi(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Me(), s = Cn(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = zn(t, s, a), e !== null && (me(e, t, a), Bi(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Me(), a = Cn(n);
      a.tag = 2, e != null && (a.callback = e), e = zn(t, a, n), e !== null && (me(e, t, n), Bi(e, t, n));
    }
  };
  function id(t, e, n, a, s, u, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !Ci(n, a) || !Ci(s, u) : !0;
  }
  function ld(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Co.enqueueReplaceState(e, e.state, null);
  }
  function ca(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = b({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function sd(t) {
    Gl(t);
  }
  function ud(t) {
    console.error(t);
  }
  function od(t) {
    Gl(t);
  }
  function fs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function rd(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function zo(t, e, n) {
    return n = Cn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      fs(t, e);
    }, n;
  }
  function cd(t) {
    return t = Cn(t), t.tag = 3, t;
  }
  function fd(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = a.value;
      t.payload = function() {
        return s(u);
      }, t.callback = function() {
        rd(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      rd(e, n, a), typeof s != "function" && (Nn === null ? Nn = /* @__PURE__ */ new Set([this]) : Nn.add(this));
      var y = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function Av(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && ja(
        e,
        n,
        s,
        !0
      ), n = be.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ne === null ? xs() : n.alternate === null && Ut === 0 && (Ut = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === $l ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Io(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === $l ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Io(t, a, s)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Io(t, a, s), xs(), !1;
    }
    if (dt)
      return e = be.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== Ku && (t = Error(c(422), { cause: a }), Ri(Re(t, n)))) : (a !== Ku && (e = Error(c(423), {
        cause: a
      }), Ri(
        Re(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = Re(a, n), s = zo(
        t.stateNode,
        a,
        s
      ), ao(t, s), Ut !== 4 && (Ut = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = Re(u, n), Fi === null ? Fi = [u] : Fi.push(u), Ut !== 4 && (Ut = 2), e === null) return !0;
    a = Re(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = zo(n.stateNode, a, t), ao(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Nn === null || !Nn.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = cd(s), fd(
              s,
              t,
              n,
              a
            ), ao(n, s), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Oo = Error(c(461)), qt = !1;
  function Wt(t, e, n, a) {
    e.child = t === null ? yh(e, null, n, a) : oa(
      e,
      t.child,
      n,
      a
    );
  }
  function hd(t, e, n, a, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var y in a)
        y !== "ref" && (f[y] = a[y]);
    } else f = a;
    return ia(e), a = ro(
      t,
      e,
      n,
      f,
      u,
      s
    ), y = co(), t !== null && !qt ? (fo(t, e, s), on(t, e, s)) : (dt && y && Qu(e), e.flags |= 1, Wt(t, e, a, s), e.child);
  }
  function dd(t, e, n, a, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !qu(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, md(
        t,
        e,
        u,
        a,
        s
      )) : (t = Kl(
        n.type,
        null,
        a,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Lo(t, s)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ci, n(f, a) && t.ref === e.ref)
        return on(t, e, s);
    }
    return e.flags |= 1, t = en(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function md(t, e, n, a, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ci(u, a) && t.ref === e.ref)
        if (qt = !1, e.pendingProps = a = u, Lo(t, s))
          (t.flags & 131072) !== 0 && (qt = !0);
        else
          return e.lanes = t.lanes, on(t, e, s);
    }
    return Ro(
      t,
      e,
      n,
      a,
      s
    );
  }
  function yd(t, e, n, a) {
    var s = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, s = 0; a !== null; )
            s = s | a.lanes | a.childLanes, a = a.sibling;
          a = s & ~u;
        } else a = 0, e.child = null;
        return pd(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Wl(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? vh(e, u) : lo(), Sh(e);
      else
        return a = e.lanes = 536870912, pd(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (Wl(e, u.cachePool), vh(e, u), Rn(), e.memoizedState = null) : (t !== null && Wl(e, null), lo(), Rn());
    return Wt(t, e, s, n), e.child;
  }
  function Gi(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function pd(t, e, n, a, s) {
    var u = Iu();
    return u = u === null ? null : { parent: wt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && Wl(e, null), lo(), Sh(e), t !== null && ja(t, e, a, !0), e.childLanes = s, null;
  }
  function hs(t, e) {
    return e = ms(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function gd(t, e, n) {
    return oa(e, t.child, null, n), t = hs(e, e.pendingProps), t.flags |= 2, Ae(e), e.memoizedState = null, t;
  }
  function xv(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (dt) {
        if (a.mode === "hidden")
          return t = hs(e, a), e.lanes = 536870912, Gi(null, t);
        if (uo(e), (t = Ct) ? (t = Om(
          t,
          Ue
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: An !== null ? { id: Ze, overflow: Ke } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = th(t), n.return = e, e.child = n, kt = e, Ct = null)) : t = null, t === null) throw En(e);
        return e.lanes = 536870912, null;
      }
      return hs(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (uo(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = gd(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (qt || ja(t, e, n, !1), s = (n & t.childLanes) !== 0, qt || s) {
        if (a = Mt, a !== null && (f = uf(a, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, ta(t, f), me(a, t, f), Oo;
        xs(), e = gd(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Ct = Be(f.nextSibling), kt = e, dt = !0, xn = null, Ue = !1, t !== null && ah(e, t), e = hs(e, a), e.flags |= 4096;
      return e;
    }
    return t = en(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ds(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ro(t, e, n, a, s) {
    return ia(e), n = ro(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = co(), t !== null && !qt ? (fo(t, e, s), on(t, e, s)) : (dt && a && Qu(e), e.flags |= 1, Wt(t, e, n, s), e.child);
  }
  function vd(t, e, n, a, s, u) {
    return ia(e), e.updateQueue = null, n = bh(
      e,
      a,
      n,
      s
    ), Th(t), a = co(), t !== null && !qt ? (fo(t, e, u), on(t, e, u)) : (dt && a && Qu(e), e.flags |= 1, Wt(t, e, n, u), e.child);
  }
  function Sd(t, e, n, a, s) {
    if (ia(e), e.stateNode === null) {
      var u = _a, f = n.contextType;
      typeof f == "object" && f !== null && (u = Ft(f)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Co, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, eo(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? Ft(f) : _a, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Do(
        e,
        n,
        f,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Co.enqueueReplaceState(u, u.state, null), Li(e, a, u, s), ji(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var y = e.memoizedProps, S = ca(n, y);
      u.props = S;
      var D = u.context, O = n.contextType;
      f = _a, typeof O == "object" && O !== null && (f = Ft(O));
      var _ = n.getDerivedStateFromProps;
      O = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function", y = e.pendingProps !== y, O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y || D !== f) && ld(
        e,
        u,
        a,
        f
      ), Dn = !1;
      var C = e.memoizedState;
      u.state = C, Li(e, a, u, s), ji(), D = e.memoizedState, y || C !== D || Dn ? (typeof _ == "function" && (Do(
        e,
        n,
        _,
        a
      ), D = e.memoizedState), (S = Dn || id(
        e,
        n,
        S,
        a,
        C,
        D,
        f
      )) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = D), u.props = a, u.state = D, u.context = f, a = S) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, no(t, e), f = e.memoizedProps, O = ca(n, f), u.props = O, _ = e.pendingProps, C = u.context, D = n.contextType, S = _a, typeof D == "object" && D !== null && (S = Ft(D)), y = n.getDerivedStateFromProps, (D = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== _ || C !== S) && ld(
        e,
        u,
        a,
        S
      ), Dn = !1, C = e.memoizedState, u.state = C, Li(e, a, u, s), ji();
      var z = e.memoizedState;
      f !== _ || C !== z || Dn || t !== null && t.dependencies !== null && kl(t.dependencies) ? (typeof y == "function" && (Do(
        e,
        n,
        y,
        a
      ), z = e.memoizedState), (O = Dn || id(
        e,
        n,
        O,
        a,
        C,
        z,
        S
      ) || t !== null && t.dependencies !== null && kl(t.dependencies)) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, S), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        z,
        S
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = z), u.props = a, u.state = z, u.context = S, a = O) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, ds(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = oa(
      e,
      t.child,
      null,
      s
    ), e.child = oa(
      e,
      null,
      n,
      s
    )) : Wt(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = on(
      t,
      e,
      s
    ), t;
  }
  function Td(t, e, n, a) {
    return na(), e.flags |= 256, Wt(t, e, n, a), e.child;
  }
  var Vo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function _o(t) {
    return { baseLanes: t, cachePool: rh() };
  }
  function Uo(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ee), t;
  }
  function bd(t, e, n) {
    var a = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, f;
    if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (dt) {
        if (s ? On(e) : Rn(), (t = Ct) ? (t = Om(
          t,
          Ue
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: An !== null ? { id: Ze, overflow: Ke } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = th(t), n.return = e, e.child = n, kt = e, Ct = null)) : t = null, t === null) throw En(e);
        return yr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var y = a.children;
      return a = a.fallback, s ? (Rn(), s = e.mode, y = ms(
        { mode: "hidden", children: y },
        s
      ), a = ea(
        a,
        s,
        n,
        null
      ), y.return = e, a.return = e, y.sibling = a, e.child = y, a = e.child, a.memoizedState = _o(n), a.childLanes = Uo(
        t,
        f,
        n
      ), e.memoizedState = Vo, Gi(null, a)) : (On(e), No(e, y));
    }
    var S = t.memoizedState;
    if (S !== null && (y = S.dehydrated, y !== null)) {
      if (u)
        e.flags & 256 ? (On(e), e.flags &= -257, e = Bo(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Rn(), e.child = t.child, e.flags |= 128, e = null) : (Rn(), y = a.fallback, s = e.mode, a = ms(
          { mode: "visible", children: a.children },
          s
        ), y = ea(
          y,
          s,
          n,
          null
        ), y.flags |= 2, a.return = e, y.return = e, a.sibling = y, e.child = a, oa(
          e,
          t.child,
          null,
          n
        ), a = e.child, a.memoizedState = _o(n), a.childLanes = Uo(
          t,
          f,
          n
        ), e.memoizedState = Vo, e = Gi(null, a));
      else if (On(e), yr(y)) {
        if (f = y.nextSibling && y.nextSibling.dataset, f) var D = f.dgst;
        f = D, a = Error(c(419)), a.stack = "", a.digest = f, Ri({ value: a, source: null, stack: null }), e = Bo(
          t,
          e,
          n
        );
      } else if (qt || ja(t, e, n, !1), f = (n & t.childLanes) !== 0, qt || f) {
        if (f = Mt, f !== null && (a = uf(f, n), a !== 0 && a !== S.retryLane))
          throw S.retryLane = a, ta(t, a), me(f, t, a), Oo;
        mr(y) || xs(), e = Bo(
          t,
          e,
          n
        );
      } else
        mr(y) ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, Ct = Be(
          y.nextSibling
        ), kt = e, dt = !0, xn = null, Ue = !1, t !== null && ah(e, t), e = No(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return s ? (Rn(), y = a.fallback, s = e.mode, S = t.child, D = S.sibling, a = en(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 65011712, D !== null ? y = en(
      D,
      y
    ) : (y = ea(
      y,
      s,
      n,
      null
    ), y.flags |= 2), y.return = e, a.return = e, a.sibling = y, e.child = a, Gi(null, a), a = e.child, y = t.child.memoizedState, y === null ? y = _o(n) : (s = y.cachePool, s !== null ? (S = wt._currentValue, s = s.parent !== S ? { parent: S, pool: S } : s) : s = rh(), y = {
      baseLanes: y.baseLanes | n,
      cachePool: s
    }), a.memoizedState = y, a.childLanes = Uo(
      t,
      f,
      n
    ), e.memoizedState = Vo, Gi(t.child, a)) : (On(e), n = t.child, t = n.sibling, n = en(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function No(t, e) {
    return e = ms(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function ms(t, e) {
    return t = Te(22, t, null, e), t.lanes = 0, t;
  }
  function Bo(t, e, n) {
    return oa(e, t.child, null, n), t = No(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Ad(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Fu(t.return, e, n);
  }
  function jo(t, e, n, a, s, u) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = s, f.treeForkCount = u);
  }
  function xd(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, u = a.tail;
    a = a.children;
    var f = jt.current, y = (f & 2) !== 0;
    if (y ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, w(jt, f), Wt(t, e, a, n), a = dt ? Oi : 0, !y && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Ad(t, n, e);
        else if (t.tag === 19)
          Ad(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          t = n.alternate, t !== null && ns(t) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), jo(
          e,
          !1,
          s,
          n,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && ns(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        jo(
          e,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        jo(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function on(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Un |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (ja(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, n = en(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = en(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Lo(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && kl(t)));
  }
  function Ev(t, e, n) {
    switch (e.tag) {
      case 3:
        ie(e, e.stateNode.containerInfo), Mn(e, wt, t.memoizedState.cache), na();
        break;
      case 27:
      case 5:
        mi(e);
        break;
      case 4:
        ie(e, e.stateNode.containerInfo);
        break;
      case 10:
        Mn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, uo(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (On(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? bd(t, e, n) : (On(e), t = on(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        On(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (a = (n & e.childLanes) !== 0, a || (ja(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), s) {
          if (a)
            return xd(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), w(jt, jt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, yd(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Mn(e, wt, t.memoizedState.cache);
    }
    return on(t, e, n);
  }
  function Ed(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        qt = !0;
      else {
        if (!Lo(t, n) && (e.flags & 128) === 0)
          return qt = !1, Ev(
            t,
            e,
            n
          );
        qt = (t.flags & 131072) !== 0;
      }
    else
      qt = !1, dt && (e.flags & 1048576) !== 0 && nh(e, Oi, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = sa(e.elementType), e.type = t, typeof t == "function")
            qu(t) ? (a = ca(t, a), e.tag = 1, e = Sd(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = Ro(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === k) {
                e.tag = 11, e = hd(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === Y) {
                e.tag = 14, e = dd(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              }
            }
            throw e = ue(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ro(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, s = ca(
          a,
          e.pendingProps
        ), Sd(
          t,
          e,
          a,
          s,
          n
        );
      case 3:
        t: {
          if (ie(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          s = u.element, no(t, e), Li(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, Mn(e, wt, a), a !== u.cache && Wu(
            e,
            [wt],
            n,
            !0
          ), ji(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Td(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== s) {
              s = Re(
                Error(c(424)),
                e
              ), Ri(s), e = Td(
                t,
                e,
                a,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Ct = Be(t.firstChild), kt = e, dt = !0, xn = null, Ue = !0, n = yh(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (na(), a === s) {
              e = on(
                t,
                e,
                n
              );
              break t;
            }
            Wt(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return ds(t, e), t === null ? (n = Bm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : dt || (n = e.type, t = e.pendingProps, a = Rs(
          ot.current
        ).createElement(n), a[Jt] = e, a[oe] = t, Pt(a, n, t), Zt(a), e.stateNode = a) : e.memoizedState = Bm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return mi(e), t === null && dt && (a = e.stateNode = _m(
          e.type,
          e.pendingProps,
          ot.current
        ), kt = e, Ue = !0, s = Ct, Hn(e.type) ? (pr = s, Ct = Be(a.firstChild)) : Ct = s), Wt(
          t,
          e,
          e.pendingProps.children,
          n
        ), ds(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && dt && ((s = a = Ct) && (a = t1(
          a,
          e.type,
          e.pendingProps,
          Ue
        ), a !== null ? (e.stateNode = a, kt = e, Ct = Be(a.firstChild), Ue = !1, s = !0) : s = !1), s || En(e)), mi(e), s = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = u.children, fr(s, u) ? a = null : f !== null && fr(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = ro(
          t,
          e,
          yv,
          null,
          null,
          n
        ), al._currentValue = s), ds(t, e), Wt(t, e, a, n), e.child;
      case 6:
        return t === null && dt && ((t = n = Ct) && (n = e1(
          n,
          e.pendingProps,
          Ue
        ), n !== null ? (e.stateNode = n, kt = e, Ct = null, t = !0) : t = !1), t || En(e)), null;
      case 13:
        return bd(t, e, n);
      case 4:
        return ie(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = oa(
          e,
          null,
          a,
          n
        ) : Wt(t, e, a, n), e.child;
      case 11:
        return hd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return Wt(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return Wt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return Wt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return a = e.pendingProps, Mn(e, e.type, a.value), Wt(t, e, a.children, n), e.child;
      case 9:
        return s = e.type._context, a = e.pendingProps.children, ia(e), s = Ft(s), a = a(s), e.flags |= 1, Wt(t, e, a, n), e.child;
      case 14:
        return dd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return md(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return xd(t, e, n);
      case 31:
        return xv(t, e, n);
      case 22:
        return yd(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ia(e), a = Ft(wt), t === null ? (s = Iu(), s === null && (s = Mt, u = Pu(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = { parent: a, cache: s }, eo(e), Mn(e, wt, s)) : ((t.lanes & n) !== 0 && (no(t, e), Li(e, null, null, n), ji()), s = t.memoizedState, u = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), Mn(e, wt, a)) : (a = u.cache, Mn(e, wt, a), a !== s.cache && Wu(
          e,
          [wt],
          n,
          !0
        ))), Wt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function rn(t) {
    t.flags |= 4;
  }
  function Ho(t, e, n, a, s) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Pd()) t.flags |= 8192;
        else
          throw ua = $l, to;
    } else t.flags &= -16777217;
  }
  function Md(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Ym(e))
      if (Pd()) t.flags |= 8192;
      else
        throw ua = $l, to;
  }
  function ys(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? af() : 536870912, t.lanes |= e, ka |= e);
  }
  function Xi(t, e) {
    if (!dt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 65011712, a |= s.flags & 65011712, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function Mv(t, e, n) {
    var a = e.pendingProps;
    switch (Zu(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return zt(e), null;
      case 1:
        return zt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), ln(wt), Bt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ba(e) ? rn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ju())), zt(e), null;
      case 26:
        var s = e.type, u = e.memoizedState;
        return t === null ? (rn(e), u !== null ? (zt(e), Md(e, u)) : (zt(e), Ho(
          e,
          s,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (rn(e), zt(e), Md(e, u)) : (zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && rn(e), zt(e), Ho(
          e,
          s,
          t,
          a,
          n
        )), null;
      case 27:
        if (Dl(e), n = ot.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && rn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(c(166));
            return zt(e), null;
          }
          t = F.current, Ba(e) ? ih(e) : (t = _m(s, a, n), e.stateNode = t, rn(e));
        }
        return zt(e), null;
      case 5:
        if (Dl(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && rn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(c(166));
            return zt(e), null;
          }
          if (u = F.current, Ba(e))
            ih(e);
          else {
            var f = Rs(
              ot.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(s, { is: a.is }) : f.createElement(s);
                }
            }
            u[Jt] = e, u[oe] = a;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = u;
            t: switch (Pt(u, s, a), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && rn(e);
          }
        }
        return zt(e), Ho(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && rn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = ot.current, Ba(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = kt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            t[Jt] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || bm(t.nodeValue, n)), t || En(e, !0);
          } else
            t = Rs(t).createTextNode(
              a
            ), t[Jt] = e, e.stateNode = t;
        }
        return zt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Ba(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[Jt] = e;
            } else
              na(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            zt(e), t = !1;
          } else
            n = Ju(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return zt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Ba(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(c(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(c(317));
              s[Jt] = e;
            } else
              na(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            zt(e), s = !1;
          } else
            s = Ju(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (Ae(e), e) : (Ae(e), null);
        }
        return Ae(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ys(e, e.updateQueue), zt(e), null);
      case 4:
        return Bt(), t === null && sr(e.stateNode.containerInfo), zt(e), null;
      case 10:
        return ln(e.type), zt(e), null;
      case 19:
        if (B(jt), a = e.memoizedState, a === null) return zt(e), null;
        if (s = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (s) Xi(a, !1);
          else {
            if (Ut !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = ns(t), u !== null) {
                  for (e.flags |= 128, Xi(a, !1), t = u.updateQueue, e.updateQueue = t, ys(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    If(n, t), n = n.sibling;
                  return w(
                    jt,
                    jt.current & 1 | 2
                  ), dt && nn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && pe() > Ts && (e.flags |= 128, s = !0, Xi(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = ns(u), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, ys(e, t), Xi(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !dt)
                return zt(e), null;
            } else
              2 * pe() - a.renderingStartTime > Ts && n !== 536870912 && (e.flags |= 128, s = !0, Xi(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = pe(), t.sibling = null, n = jt.current, w(
          jt,
          s ? n & 1 | 2 : n & 1
        ), dt && nn(e, a.treeForkCount), t) : (zt(e), null);
      case 22:
      case 23:
        return Ae(e), so(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), n = e.updateQueue, n !== null && ys(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && B(la), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ln(wt), zt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function Dv(t, e) {
    switch (Zu(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ln(wt), Bt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Dl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ae(e), e.alternate === null)
            throw Error(c(340));
          na();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ae(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          na();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return B(jt), null;
      case 4:
        return Bt(), null;
      case 10:
        return ln(e.type), null;
      case 22:
      case 23:
        return Ae(e), so(), t !== null && B(la), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ln(wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dd(t, e) {
    switch (Zu(e), e.tag) {
      case 3:
        ln(wt), Bt();
        break;
      case 26:
      case 27:
      case 5:
        Dl(e);
        break;
      case 4:
        Bt();
        break;
      case 31:
        e.memoizedState !== null && Ae(e);
        break;
      case 13:
        Ae(e);
        break;
      case 19:
        B(jt);
        break;
      case 10:
        ln(e.type);
        break;
      case 22:
      case 23:
        Ae(e), so(), t !== null && B(la);
        break;
      case 24:
        ln(wt);
    }
  }
  function Qi(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create, f = n.inst;
            a = u(), f.destroy = a;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      bt(e, e.return, y);
    }
  }
  function Vn(t, e, n) {
    try {
      var a = e.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst, y = f.destroy;
            if (y !== void 0) {
              f.destroy = void 0, s = e;
              var S = n, D = y;
              try {
                D();
              } catch (O) {
                bt(
                  s,
                  S,
                  O
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (O) {
      bt(e, e.return, O);
    }
  }
  function Cd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        gh(e, n);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function zd(t, e, n) {
    n.props = ca(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      bt(t, e, a);
    }
  }
  function Zi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (s) {
      bt(t, e, s);
    }
  }
  function Je(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          bt(t, e, s);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          bt(t, e, s);
        }
      else n.current = null;
  }
  function Od(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      bt(t, t.return, s);
    }
  }
  function wo(t, e, n) {
    try {
      var a = t.stateNode;
      kv(a, t.type, n, e), a[oe] = e;
    } catch (s) {
      bt(t, t.return, s);
    }
  }
  function Rd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hn(t.type) || t.tag === 4;
  }
  function Yo(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Rd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Hn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function qo(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Ie));
    else if (a !== 4 && (a === 27 && Hn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (qo(t, e, n), t = t.sibling; t !== null; )
        qo(t, e, n), t = t.sibling;
  }
  function ps(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (a !== 4 && (a === 27 && Hn(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (ps(t, e, n), t = t.sibling; t !== null; )
        ps(t, e, n), t = t.sibling;
  }
  function Vd(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      Pt(e, a, n), e[Jt] = t, e[oe] = n;
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  var cn = !1, Gt = !1, Go = !1, _d = typeof WeakSet == "function" ? WeakSet : Set, Kt = null;
  function Cv(t, e) {
    if (t = t.containerInfo, rr = Ls, t = Qf(t), Nu(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0, y = -1, S = -1, D = 0, O = 0, _ = t, C = null;
            e: for (; ; ) {
              for (var z; _ !== n || s !== 0 && _.nodeType !== 3 || (y = f + s), _ !== u || a !== 0 && _.nodeType !== 3 || (S = f + a), _.nodeType === 3 && (f += _.nodeValue.length), (z = _.firstChild) !== null; )
                C = _, _ = z;
              for (; ; ) {
                if (_ === t) break e;
                if (C === n && ++D === s && (y = f), C === u && ++O === a && (S = f), (z = _.nextSibling) !== null) break;
                _ = C, C = _.parentNode;
              }
              _ = z;
            }
            n = y === -1 || S === -1 ? null : { start: y, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (cr = { focusedElem: t, selectionRange: n }, Ls = !1, Kt = e; Kt !== null; )
      if (e = Kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Kt = t;
      else
        for (; Kt !== null; ) {
          switch (e = Kt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (n = 0; n < t.length; n++)
                  s = t[n], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, n = e, s = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
                try {
                  var Z = ca(
                    n.type,
                    s
                  );
                  t = a.getSnapshotBeforeUpdate(
                    Z,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (I) {
                  bt(
                    n,
                    n.return,
                    I
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  dr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      dr(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Kt = t;
            break;
          }
          Kt = e.return;
        }
  }
  function Ud(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(t, n), a & 4 && Qi(5, n);
        break;
      case 1:
        if (hn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              bt(n, n.return, f);
            }
          else {
            var s = ca(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                s,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              bt(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && Cd(n), a & 512 && Zi(n, n.return);
        break;
      case 3:
        if (hn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            gh(t, e);
          } catch (f) {
            bt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Vd(n);
      case 26:
      case 5:
        hn(t, n), e === null && a & 4 && Od(n), a & 512 && Zi(n, n.return);
        break;
      case 12:
        hn(t, n);
        break;
      case 31:
        hn(t, n), a & 4 && jd(t, n);
        break;
      case 13:
        hn(t, n), a & 4 && Ld(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = jv.bind(
          null,
          n
        ), n1(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || cn, !a) {
          e = e !== null && e.memoizedState !== null || Gt, s = cn;
          var u = Gt;
          cn = a, (Gt = e) && !u ? dn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : hn(t, n), cn = s, Gt = u;
        }
        break;
      case 30:
        break;
      default:
        hn(t, n);
    }
  }
  function Nd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Nd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && gu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ot = null, ce = !1;
  function fn(t, e, n) {
    for (n = n.child; n !== null; )
      Bd(t, e, n), n = n.sibling;
  }
  function Bd(t, e, n) {
    if (ge && typeof ge.onCommitFiberUnmount == "function")
      try {
        ge.onCommitFiberUnmount(yi, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Gt || Je(n, e), fn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Gt || Je(n, e);
        var a = Ot, s = ce;
        Hn(n.type) && (Ot = n.stateNode, ce = !1), fn(
          t,
          e,
          n
        ), tl(n.stateNode), Ot = a, ce = s;
        break;
      case 5:
        Gt || Je(n, e);
      case 6:
        if (a = Ot, s = ce, Ot = null, fn(
          t,
          e,
          n
        ), Ot = a, ce = s, Ot !== null)
          if (ce)
            try {
              (Ot.nodeType === 9 ? Ot.body : Ot.nodeName === "HTML" ? Ot.ownerDocument.body : Ot).removeChild(n.stateNode);
            } catch (u) {
              bt(
                n,
                e,
                u
              );
            }
          else
            try {
              Ot.removeChild(n.stateNode);
            } catch (u) {
              bt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Ot !== null && (ce ? (t = Ot, Cm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), ni(t)) : Cm(Ot, n.stateNode));
        break;
      case 4:
        a = Ot, s = ce, Ot = n.stateNode.containerInfo, ce = !0, fn(
          t,
          e,
          n
        ), Ot = a, ce = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vn(2, n, e), Gt || Vn(4, n, e), fn(
          t,
          e,
          n
        );
        break;
      case 1:
        Gt || (Je(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && zd(
          n,
          e,
          a
        )), fn(
          t,
          e,
          n
        );
        break;
      case 21:
        fn(
          t,
          e,
          n
        );
        break;
      case 22:
        Gt = (a = Gt) || n.memoizedState !== null, fn(
          t,
          e,
          n
        ), Gt = a;
        break;
      default:
        fn(
          t,
          e,
          n
        );
    }
  }
  function jd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ni(t);
      } catch (n) {
        bt(e, e.return, n);
      }
    }
  }
  function Ld(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ni(t);
      } catch (n) {
        bt(e, e.return, n);
      }
  }
  function zv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new _d()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new _d()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function gs(t, e) {
    var n = zv(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = Lv.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function fe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a], u = t, f = e, y = f;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Hn(y.type)) {
                Ot = y.stateNode, ce = !1;
                break t;
              }
              break;
            case 5:
              Ot = y.stateNode, ce = !1;
              break t;
            case 3:
            case 4:
              Ot = y.stateNode.containerInfo, ce = !0;
              break t;
          }
          y = y.return;
        }
        if (Ot === null) throw Error(c(160));
        Bd(u, f, s), Ot = null, ce = !1, u = s.alternate, u !== null && (u.return = null), s.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Hd(e, t), e = e.sibling;
  }
  var Ge = null;
  function Hd(t, e) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fe(e, t), he(t), a & 4 && (Vn(3, t, t.return), Qi(3, t), Vn(5, t, t.return));
        break;
      case 1:
        fe(e, t), he(t), a & 512 && (Gt || n === null || Je(n, n.return)), a & 64 && cn && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var s = Ge;
        if (fe(e, t), he(t), a & 512 && (Gt || n === null || Je(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = t.memoizedState, n === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, n = t.memoizedProps, s = s.ownerDocument || s;
                  e: switch (a) {
                    case "title":
                      u = s.getElementsByTagName("title")[0], (!u || u[vi] || u[Jt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(a), s.head.insertBefore(
                        u,
                        s.querySelector("head > title")
                      )), Pt(u, a, n), u[Jt] = t, Zt(u), a = u;
                      break t;
                    case "link":
                      var f = Hm(
                        "link",
                        "href",
                        s
                      ).get(a + (n.href || ""));
                      if (f) {
                        for (var y = 0; y < f.length; y++)
                          if (u = f[y], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      u = s.createElement(a), Pt(u, a, n), s.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = Hm(
                        "meta",
                        "content",
                        s
                      ).get(a + (n.content || ""))) {
                        for (y = 0; y < f.length; y++)
                          if (u = f[y], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      u = s.createElement(a), Pt(u, a, n), s.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  u[Jt] = t, Zt(u), a = u;
                }
                t.stateNode = a;
              } else
                wm(
                  s,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Lm(
                s,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? wm(
              s,
              t.type,
              t.stateNode
            ) : Lm(
              s,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && wo(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        fe(e, t), he(t), a & 512 && (Gt || n === null || Je(n, n.return)), n !== null && a & 4 && wo(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (fe(e, t), he(t), a & 512 && (Gt || n === null || Je(n, n.return)), t.flags & 32) {
          s = t.stateNode;
          try {
            Ma(s, "");
          } catch (Z) {
            bt(t, t.return, Z);
          }
        }
        a & 4 && t.stateNode != null && (s = t.memoizedProps, wo(
          t,
          s,
          n !== null ? n.memoizedProps : s
        )), a & 1024 && (Go = !0);
        break;
      case 6:
        if (fe(e, t), he(t), a & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          a = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = a;
          } catch (Z) {
            bt(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (Us = null, s = Ge, Ge = Vs(e.containerInfo), fe(e, t), Ge = s, he(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ni(e.containerInfo);
          } catch (Z) {
            bt(t, t.return, Z);
          }
        Go && (Go = !1, wd(t));
        break;
      case 4:
        a = Ge, Ge = Vs(
          t.stateNode.containerInfo
        ), fe(e, t), he(t), Ge = a;
        break;
      case 12:
        fe(e, t), he(t);
        break;
      case 31:
        fe(e, t), he(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gs(t, a)));
        break;
      case 13:
        fe(e, t), he(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ss = pe()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gs(t, a)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null, D = cn, O = Gt;
        if (cn = D || s, Gt = O || S, fe(e, t), Gt = O, cn = D, he(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, s && (n === null || S || cn || Gt || fa(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (u = S.stateNode, s)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    y = S.stateNode;
                    var _ = S.memoizedProps.style, C = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    y.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (Z) {
                  bt(S, S.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (Z) {
                  bt(S, S.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                S = e;
                try {
                  var z = S.stateNode;
                  s ? zm(z, !0) : zm(S.stateNode, !1);
                } catch (Z) {
                  bt(S, S.return, Z);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, gs(t, n))));
        break;
      case 19:
        fe(e, t), he(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gs(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fe(e, t), he(t);
    }
  }
  function he(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Rd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode, u = Yo(t);
            ps(t, u, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ma(f, ""), n.flags &= -33);
            var y = Yo(t);
            ps(t, y, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo, D = Yo(t);
            qo(
              t,
              D,
              S
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (O) {
        bt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function wd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        wd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function hn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Ud(t, e.alternate, e), e = e.sibling;
  }
  function fa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Vn(4, e, e.return), fa(e);
          break;
        case 1:
          Je(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && zd(
            e,
            e.return,
            n
          ), fa(e);
          break;
        case 27:
          tl(e.stateNode);
        case 26:
        case 5:
          Je(e, e.return), fa(e);
          break;
        case 22:
          e.memoizedState === null && fa(e);
          break;
        case 30:
          fa(e);
          break;
        default:
          fa(e);
      }
      t = t.sibling;
    }
  }
  function dn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, s = t, u = e, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          dn(
            s,
            u,
            n
          ), Qi(4, u);
          break;
        case 1:
          if (dn(
            s,
            u,
            n
          ), a = u, s = a.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (D) {
              bt(a, a.return, D);
            }
          if (a = u, s = a.updateQueue, s !== null) {
            var y = a.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  ph(S[s], y);
            } catch (D) {
              bt(a, a.return, D);
            }
          }
          n && f & 64 && Cd(u), Zi(u, u.return);
          break;
        case 27:
          Vd(u);
        case 26:
        case 5:
          dn(
            s,
            u,
            n
          ), n && a === null && f & 4 && Od(u), Zi(u, u.return);
          break;
        case 12:
          dn(
            s,
            u,
            n
          );
          break;
        case 31:
          dn(
            s,
            u,
            n
          ), n && f & 4 && jd(s, u);
          break;
        case 13:
          dn(
            s,
            u,
            n
          ), n && f & 4 && Ld(s, u);
          break;
        case 22:
          u.memoizedState === null && dn(
            s,
            u,
            n
          ), Zi(u, u.return);
          break;
        case 30:
          break;
        default:
          dn(
            s,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Xo(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Vi(n));
  }
  function Qo(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Vi(t));
  }
  function Xe(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Yd(
          t,
          e,
          n,
          a
        ), e = e.sibling;
  }
  function Yd(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Xe(
          t,
          e,
          n,
          a
        ), s & 2048 && Qi(9, e);
        break;
      case 1:
        Xe(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        Xe(
          t,
          e,
          n,
          a
        ), s & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Vi(t)));
        break;
      case 12:
        if (s & 2048) {
          Xe(
            t,
            e,
            n,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, f = u.id, y = u.onPostCommit;
            typeof y == "function" && y(
              f,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (S) {
            bt(e, e.return, S);
          }
        } else
          Xe(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        Xe(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        Xe(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, f = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Xe(
          t,
          e,
          n,
          a
        ) : Ki(t, e) : u._visibility & 2 ? Xe(
          t,
          e,
          n,
          a
        ) : (u._visibility |= 2, Za(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Xo(f, e);
        break;
      case 24:
        Xe(
          t,
          e,
          n,
          a
        ), s & 2048 && Qo(e.alternate, e);
        break;
      default:
        Xe(
          t,
          e,
          n,
          a
        );
    }
  }
  function Za(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, f = e, y = n, S = a, D = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Za(
            u,
            f,
            y,
            S,
            s
          ), Qi(8, f);
          break;
        case 23:
          break;
        case 22:
          var O = f.stateNode;
          f.memoizedState !== null ? O._visibility & 2 ? Za(
            u,
            f,
            y,
            S,
            s
          ) : Ki(
            u,
            f
          ) : (O._visibility |= 2, Za(
            u,
            f,
            y,
            S,
            s
          )), s && D & 2048 && Xo(
            f.alternate,
            f
          );
          break;
        case 24:
          Za(
            u,
            f,
            y,
            S,
            s
          ), s && D & 2048 && Qo(f.alternate, f);
          break;
        default:
          Za(
            u,
            f,
            y,
            S,
            s
          );
      }
      e = e.sibling;
    }
  }
  function Ki(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, s = a.flags;
        switch (a.tag) {
          case 22:
            Ki(n, a), s & 2048 && Xo(
              a.alternate,
              a
            );
            break;
          case 24:
            Ki(n, a), s & 2048 && Qo(a.alternate, a);
            break;
          default:
            Ki(n, a);
        }
        e = e.sibling;
      }
  }
  var Ji = 8192;
  function Ka(t, e, n) {
    if (t.subtreeFlags & Ji)
      for (t = t.child; t !== null; )
        qd(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function qd(t, e, n) {
    switch (t.tag) {
      case 26:
        Ka(
          t,
          e,
          n
        ), t.flags & Ji && t.memoizedState !== null && m1(
          n,
          Ge,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ka(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var a = Ge;
        Ge = Vs(t.stateNode.containerInfo), Ka(
          t,
          e,
          n
        ), Ge = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Ji, Ji = 16777216, Ka(
          t,
          e,
          n
        ), Ji = a) : Ka(
          t,
          e,
          n
        ));
        break;
      default:
        Ka(
          t,
          e,
          n
        );
    }
  }
  function Gd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ki(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          Kt = a, Qd(
            a,
            t
          );
        }
      Gd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Xd(t), t = t.sibling;
  }
  function Xd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ki(t), t.flags & 2048 && Vn(9, t, t.return);
        break;
      case 3:
        ki(t);
        break;
      case 12:
        ki(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, vs(t)) : ki(t);
        break;
      default:
        ki(t);
    }
  }
  function vs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          Kt = a, Qd(
            a,
            t
          );
        }
      Gd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, e, e.return), vs(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, vs(e));
          break;
        default:
          vs(e);
      }
      t = t.sibling;
    }
  }
  function Qd(t, e) {
    for (; Kt !== null; ) {
      var n = Kt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Vi(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, Kt = a;
      else
        t: for (n = t; Kt !== null; ) {
          a = Kt;
          var s = a.sibling, u = a.return;
          if (Nd(a), a === n) {
            Kt = null;
            break t;
          }
          if (s !== null) {
            s.return = u, Kt = s;
            break t;
          }
          Kt = u;
        }
    }
  }
  var Ov = {
    getCacheForType: function(t) {
      var e = Ft(wt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Ft(wt).controller.signal;
    }
  }, Rv = typeof WeakMap == "function" ? WeakMap : Map, vt = 0, Mt = null, rt = null, ft = 0, Tt = 0, xe = null, _n = !1, Ja = !1, Zo = !1, mn = 0, Ut = 0, Un = 0, ha = 0, Ko = 0, Ee = 0, ka = 0, Fi = null, de = null, Jo = !1, Ss = 0, Zd = 0, Ts = 1 / 0, bs = null, Nn = null, Qt = 0, Bn = null, Fa = null, yn = 0, ko = 0, Fo = null, Kd = null, Wi = 0, Wo = null;
  function Me() {
    return (vt & 2) !== 0 && ft !== 0 ? ft & -ft : N.T !== null ? nr() : of();
  }
  function Jd() {
    if (Ee === 0)
      if ((ft & 536870912) === 0 || dt) {
        var t = Ol;
        Ol <<= 1, (Ol & 3932160) === 0 && (Ol = 262144), Ee = t;
      } else Ee = 536870912;
    return t = be.current, t !== null && (t.flags |= 32), Ee;
  }
  function me(t, e, n) {
    (t === Mt && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null) && (Wa(t, 0), jn(
      t,
      ft,
      Ee,
      !1
    )), gi(t, n), ((vt & 2) === 0 || t !== Mt) && (t === Mt && ((vt & 2) === 0 && (ha |= n), Ut === 4 && jn(
      t,
      ft,
      Ee,
      !1
    )), ke(t));
  }
  function kd(t, e, n) {
    if ((vt & 6) !== 0) throw Error(c(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || pi(t, e), s = a ? Uv(t, e) : $o(t, e, !0), u = a;
    do {
      if (s === 0) {
        Ja && !a && jn(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !Vv(n)) {
          s = $o(t, e, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var y = t;
              s = Fi;
              var S = y.current.memoizedState.isDehydrated;
              if (S && (Wa(y, f).flags |= 256), f = $o(
                y,
                f,
                !1
              ), f !== 2) {
                if (Zo && !S) {
                  y.errorRecoveryDisabledLanes |= u, ha |= u, s = 4;
                  break t;
                }
                u = de, de = s, u !== null && (de === null ? de = u : de.push.apply(
                  de,
                  u
                ));
              }
              s = f;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Wa(t, 0), jn(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = s, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              jn(
                a,
                e,
                Ee,
                !_n
              );
              break t;
            case 2:
              de = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (s = Ss + 300 - pe(), 10 < s)) {
            if (jn(
              a,
              e,
              Ee,
              !_n
            ), Vl(a, 0, !0) !== 0) break t;
            yn = e, a.timeoutHandle = Mm(
              Fd.bind(
                null,
                a,
                n,
                de,
                bs,
                Jo,
                e,
                Ee,
                ha,
                ka,
                _n,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          Fd(
            a,
            n,
            de,
            bs,
            Jo,
            e,
            Ee,
            ha,
            ka,
            _n,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ke(t);
  }
  function Fd(t, e, n, a, s, u, f, y, S, D, O, _, C, z) {
    if (t.timeoutHandle = -1, _ = e.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ie
      }, qd(
        e,
        u,
        _
      );
      var Z = (u & 62914560) === u ? Ss - pe() : (u & 4194048) === u ? Zd - pe() : 0;
      if (Z = y1(
        _,
        Z
      ), Z !== null) {
        yn = u, t.cancelPendingCommit = Z(
          am.bind(
            null,
            t,
            e,
            u,
            n,
            a,
            s,
            f,
            y,
            S,
            O,
            _,
            null,
            C,
            z
          )
        ), jn(t, u, f, !D);
        return;
      }
    }
    am(
      t,
      e,
      u,
      n,
      a,
      s,
      f,
      y,
      S
    );
  }
  function Vv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var s = n[a], u = s.getSnapshot;
          s = s.value;
          try {
            if (!Se(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function jn(t, e, n, a) {
    e &= ~Ko, e &= ~ha, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var u = 31 - ve(s), f = 1 << u;
      a[u] = -1, s &= ~f;
    }
    n !== 0 && lf(t, n, e);
  }
  function As() {
    return (vt & 6) === 0 ? (Pi(0), !1) : !0;
  }
  function Po() {
    if (rt !== null) {
      if (Tt === 0)
        var t = rt.return;
      else
        t = rt, an = aa = null, ho(t), Ya = null, Ui = 0, t = rt;
      for (; t !== null; )
        Dd(t.alternate, t), t = t.return;
      rt = null;
    }
  }
  function Wa(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Pv(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), yn = 0, Po(), Mt = t, rt = n = en(t.current, null), ft = e, Tt = 0, xe = null, _n = !1, Ja = pi(t, e), Zo = !1, ka = Ee = Ko = ha = Un = Ut = 0, de = Fi = null, Jo = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - ve(a), u = 1 << s;
        e |= t[s], a &= ~u;
      }
    return mn = e, Xl(), n;
  }
  function Wd(t, e) {
    it = null, N.H = qi, e === wa || e === Pl ? (e = hh(), Tt = 3) : e === to ? (e = hh(), Tt = 4) : Tt = e === Oo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, xe = e, rt === null && (Ut = 1, fs(
      t,
      Re(e, t.current)
    ));
  }
  function Pd() {
    var t = be.current;
    return t === null ? !0 : (ft & 4194048) === ft ? Ne === null : (ft & 62914560) === ft || (ft & 536870912) !== 0 ? t === Ne : !1;
  }
  function $d() {
    var t = N.H;
    return N.H = qi, t === null ? qi : t;
  }
  function Id() {
    var t = N.A;
    return N.A = Ov, t;
  }
  function xs() {
    Ut = 4, _n || (ft & 4194048) !== ft && be.current !== null || (Ja = !0), (Un & 134217727) === 0 && (ha & 134217727) === 0 || Mt === null || jn(
      Mt,
      ft,
      Ee,
      !1
    );
  }
  function $o(t, e, n) {
    var a = vt;
    vt |= 2;
    var s = $d(), u = Id();
    (Mt !== t || ft !== e) && (bs = null, Wa(t, e)), e = !1;
    var f = Ut;
    t: do
      try {
        if (Tt !== 0 && rt !== null) {
          var y = rt, S = xe;
          switch (Tt) {
            case 8:
              Po(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              be.current === null && (e = !0);
              var D = Tt;
              if (Tt = 0, xe = null, Pa(t, y, S, D), n && Ja) {
                f = 0;
                break t;
              }
              break;
            default:
              D = Tt, Tt = 0, xe = null, Pa(t, y, S, D);
          }
        }
        _v(), f = Ut;
        break;
      } catch (O) {
        Wd(t, O);
      }
    while (!0);
    return e && t.shellSuspendCounter++, an = aa = null, vt = a, N.H = s, N.A = u, rt === null && (Mt = null, ft = 0, Xl()), f;
  }
  function _v() {
    for (; rt !== null; ) tm(rt);
  }
  function Uv(t, e) {
    var n = vt;
    vt |= 2;
    var a = $d(), s = Id();
    Mt !== t || ft !== e ? (bs = null, Ts = pe() + 500, Wa(t, e)) : Ja = pi(
      t,
      e
    );
    t: do
      try {
        if (Tt !== 0 && rt !== null) {
          e = rt;
          var u = xe;
          e: switch (Tt) {
            case 1:
              Tt = 0, xe = null, Pa(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (ch(u)) {
                Tt = 0, xe = null, em(e);
                break;
              }
              e = function() {
                Tt !== 2 && Tt !== 9 || Mt !== t || (Tt = 7), ke(t);
              }, u.then(e, e);
              break t;
            case 3:
              Tt = 7;
              break t;
            case 4:
              Tt = 5;
              break t;
            case 7:
              ch(u) ? (Tt = 0, xe = null, em(e)) : (Tt = 0, xe = null, Pa(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (rt.tag) {
                case 26:
                  f = rt.memoizedState;
                case 5:
                case 27:
                  var y = rt;
                  if (f ? Ym(f) : y.stateNode.complete) {
                    Tt = 0, xe = null;
                    var S = y.sibling;
                    if (S !== null) rt = S;
                    else {
                      var D = y.return;
                      D !== null ? (rt = D, Es(D)) : rt = null;
                    }
                    break e;
                  }
              }
              Tt = 0, xe = null, Pa(t, e, u, 5);
              break;
            case 6:
              Tt = 0, xe = null, Pa(t, e, u, 6);
              break;
            case 8:
              Po(), Ut = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Nv();
        break;
      } catch (O) {
        Wd(t, O);
      }
    while (!0);
    return an = aa = null, N.H = a, N.A = s, vt = n, rt !== null ? 0 : (Mt = null, ft = 0, Xl(), Ut);
  }
  function Nv() {
    for (; rt !== null && !a0(); )
      tm(rt);
  }
  function tm(t) {
    var e = Ed(t.alternate, t, mn);
    t.memoizedProps = t.pendingProps, e === null ? Es(t) : rt = e;
  }
  function em(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = vd(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ft
        );
        break;
      case 11:
        e = vd(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ft
        );
        break;
      case 5:
        ho(e);
      default:
        Dd(n, e), e = rt = If(e, mn), e = Ed(n, e, mn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Es(t) : rt = e;
  }
  function Pa(t, e, n, a) {
    an = aa = null, ho(e), Ya = null, Ui = 0;
    var s = e.return;
    try {
      if (Av(
        t,
        s,
        e,
        n,
        ft
      )) {
        Ut = 1, fs(
          t,
          Re(n, t.current)
        ), rt = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw rt = s, u;
      Ut = 1, fs(
        t,
        Re(n, t.current)
      ), rt = null;
      return;
    }
    e.flags & 32768 ? (dt || a === 1 ? t = !0 : Ja || (ft & 536870912) !== 0 ? t = !1 : (_n = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = be.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nm(e, t)) : Es(e);
  }
  function Es(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        nm(
          e,
          _n
        );
        return;
      }
      t = e.return;
      var n = Mv(
        e.alternate,
        e,
        mn
      );
      if (n !== null) {
        rt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        rt = e;
        return;
      }
      rt = e = t;
    } while (e !== null);
    Ut === 0 && (Ut = 5);
  }
  function nm(t, e) {
    do {
      var n = Dv(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, rt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        rt = t;
        return;
      }
      rt = t = n;
    } while (t !== null);
    Ut = 6, rt = null;
  }
  function am(t, e, n, a, s, u, f, y, S) {
    t.cancelPendingCommit = null;
    do
      Ms();
    while (Qt !== 0);
    if ((vt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (u = e.lanes | e.childLanes, u |= wu, d0(
        t,
        n,
        u,
        f,
        y,
        S
      ), t === Mt && (rt = Mt = null, ft = 0), Fa = e, Bn = t, yn = n, ko = u, Fo = s, Kd = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Hv(Cl, function() {
        return om(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = N.T, N.T = null, s = L.p, L.p = 2, f = vt, vt |= 4;
        try {
          Cv(t, e, n);
        } finally {
          vt = f, L.p = s, N.T = a;
        }
      }
      Qt = 1, im(), lm(), sm();
    }
  }
  function im() {
    if (Qt === 1) {
      Qt = 0;
      var t = Bn, e = Fa, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = N.T, N.T = null;
        var a = L.p;
        L.p = 2;
        var s = vt;
        vt |= 4;
        try {
          Hd(e, t);
          var u = cr, f = Qf(t.containerInfo), y = u.focusedElem, S = u.selectionRange;
          if (f !== y && y && y.ownerDocument && Xf(
            y.ownerDocument.documentElement,
            y
          )) {
            if (S !== null && Nu(y)) {
              var D = S.start, O = S.end;
              if (O === void 0 && (O = D), "selectionStart" in y)
                y.selectionStart = D, y.selectionEnd = Math.min(
                  O,
                  y.value.length
                );
              else {
                var _ = y.ownerDocument || document, C = _ && _.defaultView || window;
                if (C.getSelection) {
                  var z = C.getSelection(), Z = y.textContent.length, I = Math.min(S.start, Z), Et = S.end === void 0 ? I : Math.min(S.end, Z);
                  !z.extend && I > Et && (f = Et, Et = I, I = f);
                  var E = Gf(
                    y,
                    I
                  ), A = Gf(
                    y,
                    Et
                  );
                  if (E && A && (z.rangeCount !== 1 || z.anchorNode !== E.node || z.anchorOffset !== E.offset || z.focusNode !== A.node || z.focusOffset !== A.offset)) {
                    var M = _.createRange();
                    M.setStart(E.node, E.offset), z.removeAllRanges(), I > Et ? (z.addRange(M), z.extend(A.node, A.offset)) : (M.setEnd(A.node, A.offset), z.addRange(M));
                  }
                }
              }
            }
            for (_ = [], z = y; z = z.parentNode; )
              z.nodeType === 1 && _.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < _.length; y++) {
              var R = _[y];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          Ls = !!rr, cr = rr = null;
        } finally {
          vt = s, L.p = a, N.T = n;
        }
      }
      t.current = e, Qt = 2;
    }
  }
  function lm() {
    if (Qt === 2) {
      Qt = 0;
      var t = Bn, e = Fa, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = N.T, N.T = null;
        var a = L.p;
        L.p = 2;
        var s = vt;
        vt |= 4;
        try {
          Ud(t, e.alternate, e);
        } finally {
          vt = s, L.p = a, N.T = n;
        }
      }
      Qt = 3;
    }
  }
  function sm() {
    if (Qt === 4 || Qt === 3) {
      Qt = 0, i0();
      var t = Bn, e = Fa, n = yn, a = Kd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Qt = 5 : (Qt = 0, Fa = Bn = null, um(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (s === 0 && (Nn = null), yu(n), e = e.stateNode, ge && typeof ge.onCommitFiberRoot == "function")
        try {
          ge.onCommitFiberRoot(
            yi,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = N.T, s = L.p, L.p = 2, N.T = null;
        try {
          for (var u = t.onRecoverableError, f = 0; f < a.length; f++) {
            var y = a[f];
            u(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          N.T = e, L.p = s;
        }
      }
      (yn & 3) !== 0 && Ms(), ke(t), s = t.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? t === Wo ? Wi++ : (Wi = 0, Wo = t) : Wi = 0, Pi(0);
    }
  }
  function um(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Vi(e)));
  }
  function Ms() {
    return im(), lm(), sm(), om();
  }
  function om() {
    if (Qt !== 5) return !1;
    var t = Bn, e = ko;
    ko = 0;
    var n = yu(yn), a = N.T, s = L.p;
    try {
      L.p = 32 > n ? 32 : n, N.T = null, n = Fo, Fo = null;
      var u = Bn, f = yn;
      if (Qt = 0, Fa = Bn = null, yn = 0, (vt & 6) !== 0) throw Error(c(331));
      var y = vt;
      if (vt |= 4, Xd(u.current), Yd(
        u,
        u.current,
        f,
        n
      ), vt = y, Pi(0, !1), ge && typeof ge.onPostCommitFiberRoot == "function")
        try {
          ge.onPostCommitFiberRoot(yi, u);
        } catch {
        }
      return !0;
    } finally {
      L.p = s, N.T = a, um(t, e);
    }
  }
  function rm(t, e, n) {
    e = Re(n, e), e = zo(t.stateNode, e, 2), t = zn(t, e, 2), t !== null && (gi(t, 2), ke(t));
  }
  function bt(t, e, n) {
    if (t.tag === 3)
      rm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          rm(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Nn === null || !Nn.has(a))) {
            t = Re(n, t), n = cd(2), a = zn(e, n, 2), a !== null && (fd(
              n,
              a,
              e,
              t
            ), gi(a, 2), ke(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Io(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Rv();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (Zo = !0, s.add(n), t = Bv.bind(null, t, e, n), e.then(t, t));
  }
  function Bv(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Mt === t && (ft & n) === n && (Ut === 4 || Ut === 3 && (ft & 62914560) === ft && 300 > pe() - Ss ? (vt & 2) === 0 && Wa(t, 0) : Ko |= n, ka === ft && (ka = 0)), ke(t);
  }
  function cm(t, e) {
    e === 0 && (e = af()), t = ta(t, e), t !== null && (gi(t, e), ke(t));
  }
  function jv(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), cm(t, n);
  }
  function Lv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    a !== null && a.delete(e), cm(t, n);
  }
  function Hv(t, e) {
    return fu(t, e);
  }
  var Ds = null, $a = null, tr = !1, Cs = !1, er = !1, Ln = 0;
  function ke(t) {
    t !== $a && t.next === null && ($a === null ? Ds = $a = t : $a = $a.next = t), Cs = !0, tr || (tr = !0, Yv());
  }
  function Pi(t, e) {
    if (!er && Cs) {
      er = !0;
      do
        for (var n = !1, a = Ds; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = a.suspendedLanes, y = a.pingedLanes;
              u = (1 << 31 - ve(42 | t) + 1) - 1, u &= s & ~(f & ~y), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, mm(a, u));
          } else
            u = ft, u = Vl(
              a,
              a === Mt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || pi(a, u) || (n = !0, mm(a, u));
          a = a.next;
        }
      while (n);
      er = !1;
    }
  }
  function wv() {
    fm();
  }
  function fm() {
    Cs = tr = !1;
    var t = 0;
    Ln !== 0 && Wv() && (t = Ln);
    for (var e = pe(), n = null, a = Ds; a !== null; ) {
      var s = a.next, u = hm(a, e);
      u === 0 ? (a.next = null, n === null ? Ds = s : n.next = s, s === null && ($a = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (Cs = !0)), a = s;
    }
    Qt !== 0 && Qt !== 5 || Pi(t), Ln !== 0 && (Ln = 0);
  }
  function hm(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - ve(u), y = 1 << f, S = s[f];
      S === -1 ? ((y & n) === 0 || (y & a) !== 0) && (s[f] = h0(y, e)) : S <= e && (t.expiredLanes |= y), u &= ~y;
    }
    if (e = Mt, n = ft, n = Vl(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && hu(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || pi(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && hu(a), yu(n)) {
        case 2:
        case 8:
          n = ef;
          break;
        case 32:
          n = Cl;
          break;
        case 268435456:
          n = nf;
          break;
        default:
          n = Cl;
      }
      return a = dm.bind(null, t), n = fu(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && hu(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function dm(t, e) {
    if (Qt !== 0 && Qt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Ms() && t.callbackNode !== n)
      return null;
    var a = ft;
    return a = Vl(
      t,
      t === Mt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (kd(t, a, e), hm(t, pe()), t.callbackNode != null && t.callbackNode === n ? dm.bind(null, t) : null);
  }
  function mm(t, e) {
    if (Ms()) return null;
    kd(t, e, !0);
  }
  function Yv() {
    $v(function() {
      (vt & 6) !== 0 ? fu(
        tf,
        wv
      ) : fm();
    });
  }
  function nr() {
    if (Ln === 0) {
      var t = La;
      t === 0 && (t = zl, zl <<= 1, (zl & 261888) === 0 && (zl = 256)), Ln = t;
    }
    return Ln;
  }
  function ym(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Bl("" + t);
  }
  function pm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function qv(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = ym(
        (s[oe] || null).action
      ), f = a.submitter;
      f && (e = (e = f[oe] || null) ? ym(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
      var y = new wl(
        "action",
        "action",
        null,
        a,
        s
      );
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ln !== 0) {
                  var S = f ? pm(s, f) : new FormData(s);
                  Ao(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: u
                    },
                    null,
                    S
                  );
                }
              } else
                typeof u == "function" && (y.preventDefault(), S = f ? pm(s, f) : new FormData(s), Ao(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: u
                  },
                  u,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var ar = 0; ar < Hu.length; ar++) {
    var ir = Hu[ar], Gv = ir.toLowerCase(), Xv = ir[0].toUpperCase() + ir.slice(1);
    qe(
      Gv,
      "on" + Xv
    );
  }
  qe(Jf, "onAnimationEnd"), qe(kf, "onAnimationIteration"), qe(Ff, "onAnimationStart"), qe("dblclick", "onDoubleClick"), qe("focusin", "onFocus"), qe("focusout", "onBlur"), qe(lv, "onTransitionRun"), qe(sv, "onTransitionStart"), qe(uv, "onTransitionCancel"), qe(Wf, "onTransitionEnd"), xa("onMouseEnter", ["mouseout", "mouseover"]), xa("onMouseLeave", ["mouseout", "mouseover"]), xa("onPointerEnter", ["pointerout", "pointerover"]), xa("onPointerLeave", ["pointerout", "pointerover"]), Wn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var $i = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Qv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($i)
  );
  function gm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var y = a[f], S = y.instance, D = y.currentTarget;
            if (y = y.listener, S !== u && s.isPropagationStopped())
              break t;
            u = y, s.currentTarget = D;
            try {
              u(s);
            } catch (O) {
              Gl(O);
            }
            s.currentTarget = null, u = S;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (y = a[f], S = y.instance, D = y.currentTarget, y = y.listener, S !== u && s.isPropagationStopped())
              break t;
            u = y, s.currentTarget = D;
            try {
              u(s);
            } catch (O) {
              Gl(O);
            }
            s.currentTarget = null, u = S;
          }
      }
    }
  }
  function ct(t, e) {
    var n = e[pu];
    n === void 0 && (n = e[pu] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (vm(e, t, 2, !1), n.add(a));
  }
  function lr(t, e, n) {
    var a = 0;
    e && (a |= 4), vm(
      n,
      t,
      a,
      e
    );
  }
  var zs = "_reactListening" + Math.random().toString(36).slice(2);
  function sr(t) {
    if (!t[zs]) {
      t[zs] = !0, ff.forEach(function(n) {
        n !== "selectionchange" && (Qv.has(n) || lr(n, !1, t), lr(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[zs] || (e[zs] = !0, lr("selectionchange", !1, e));
    }
  }
  function vm(t, e, n, a) {
    switch (Jm(e)) {
      case 2:
        var s = v1;
        break;
      case 8:
        s = S1;
        break;
      default:
        s = br;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !Mu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function ur(t, e, n, a, s) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var y = a.stateNode.containerInfo;
          if (y === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; y !== null; ) {
            if (f = Ta(y), f === null) return;
            if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              a = u = f;
              continue t;
            }
            y = y.parentNode;
          }
        }
        a = a.return;
      }
    xf(function() {
      var D = u, O = xu(n), _ = [];
      t: {
        var C = Pf.get(t);
        if (C !== void 0) {
          var z = wl, Z = t;
          switch (t) {
            case "keypress":
              if (Ll(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = L0;
              break;
            case "focusin":
              Z = "focus", z = Ou;
              break;
            case "focusout":
              Z = "blur", z = Ou;
              break;
            case "beforeblur":
            case "afterblur":
              z = Ou;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Df;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = M0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Y0;
              break;
            case Jf:
            case kf:
            case Ff:
              z = z0;
              break;
            case Wf:
              z = G0;
              break;
            case "scroll":
            case "scrollend":
              z = x0;
              break;
            case "wheel":
              z = Q0;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = R0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = zf;
              break;
            case "toggle":
            case "beforetoggle":
              z = K0;
          }
          var I = (e & 4) !== 0, Et = !I && (t === "scroll" || t === "scrollend"), E = I ? C !== null ? C + "Capture" : null : C;
          I = [];
          for (var A = D, M; A !== null; ) {
            var R = A;
            if (M = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || M === null || E === null || (R = Ti(A, E), R != null && I.push(
              Ii(A, R, M)
            )), Et) break;
            A = A.return;
          }
          0 < I.length && (C = new z(
            C,
            Z,
            null,
            n,
            O
          ), _.push({ event: C, listeners: I }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (C = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", C && n !== Au && (Z = n.relatedTarget || n.fromElement) && (Ta(Z) || Z[Sa]))
            break t;
          if ((z || C) && (C = O.window === O ? O : (C = O.ownerDocument) ? C.defaultView || C.parentWindow : window, z ? (Z = n.relatedTarget || n.toElement, z = D, Z = Z ? Ta(Z) : null, Z !== null && (Et = h(Z), I = Z.tag, Z !== Et || I !== 5 && I !== 27 && I !== 6) && (Z = null)) : (z = null, Z = D), z !== Z)) {
            if (I = Df, R = "onMouseLeave", E = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (I = zf, R = "onPointerLeave", E = "onPointerEnter", A = "pointer"), Et = z == null ? C : Si(z), M = Z == null ? C : Si(Z), C = new I(
              R,
              A + "leave",
              z,
              n,
              O
            ), C.target = Et, C.relatedTarget = M, R = null, Ta(O) === D && (I = new I(
              E,
              A + "enter",
              Z,
              n,
              O
            ), I.target = M, I.relatedTarget = Et, R = I), Et = R, z && Z)
              e: {
                for (I = Zv, E = z, A = Z, M = 0, R = E; R; R = I(R))
                  M++;
                R = 0;
                for (var P = A; P; P = I(P))
                  R++;
                for (; 0 < M - R; )
                  E = I(E), M--;
                for (; 0 < R - M; )
                  A = I(A), R--;
                for (; M--; ) {
                  if (E === A || A !== null && E === A.alternate) {
                    I = E;
                    break e;
                  }
                  E = I(E), A = I(A);
                }
                I = null;
              }
            else I = null;
            z !== null && Sm(
              _,
              C,
              z,
              I,
              !1
            ), Z !== null && Et !== null && Sm(
              _,
              Et,
              Z,
              I,
              !0
            );
          }
        }
        t: {
          if (C = D ? Si(D) : window, z = C.nodeName && C.nodeName.toLowerCase(), z === "select" || z === "input" && C.type === "file")
            var pt = jf;
          else if (Nf(C))
            if (Lf)
              pt = nv;
            else {
              pt = tv;
              var J = I0;
            }
          else
            z = C.nodeName, !z || z.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? D && bu(D.elementType) && (pt = jf) : pt = ev;
          if (pt && (pt = pt(t, D))) {
            Bf(
              _,
              pt,
              n,
              O
            );
            break t;
          }
          J && J(t, C, D), t === "focusout" && D && C.type === "number" && D.memoizedProps.value != null && Tu(C, "number", C.value);
        }
        switch (J = D ? Si(D) : window, t) {
          case "focusin":
            (Nf(J) || J.contentEditable === "true") && (Oa = J, Bu = D, zi = null);
            break;
          case "focusout":
            zi = Bu = Oa = null;
            break;
          case "mousedown":
            ju = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ju = !1, Zf(_, n, O);
            break;
          case "selectionchange":
            if (iv) break;
          case "keydown":
          case "keyup":
            Zf(_, n, O);
        }
        var lt;
        if (Vu)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          za ? _f(t, n) && (ht = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ht = "onCompositionStart");
        ht && (Of && n.locale !== "ko" && (za || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && za && (lt = Ef()) : (bn = O, Du = "value" in bn ? bn.value : bn.textContent, za = !0)), J = Os(D, ht), 0 < J.length && (ht = new Cf(
          ht,
          t,
          null,
          n,
          O
        ), _.push({ event: ht, listeners: J }), lt ? ht.data = lt : (lt = Uf(n), lt !== null && (ht.data = lt)))), (lt = k0 ? F0(t, n) : W0(t, n)) && (ht = Os(D, "onBeforeInput"), 0 < ht.length && (J = new Cf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          O
        ), _.push({
          event: J,
          listeners: ht
        }), J.data = lt)), qv(
          _,
          t,
          D,
          n,
          O
        );
      }
      gm(_, e);
    });
  }
  function Ii(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Os(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = Ti(t, n), s != null && a.unshift(
        Ii(t, s, u)
      ), s = Ti(t, e), s != null && a.push(
        Ii(t, s, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Zv(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Sm(t, e, n, a, s) {
    for (var u = e._reactName, f = []; n !== null && n !== a; ) {
      var y = n, S = y.alternate, D = y.stateNode;
      if (y = y.tag, S !== null && S === a) break;
      y !== 5 && y !== 26 && y !== 27 || D === null || (S = D, s ? (D = Ti(n, u), D != null && f.unshift(
        Ii(n, D, S)
      )) : s || (D = Ti(n, u), D != null && f.push(
        Ii(n, D, S)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Kv = /\r\n?/g, Jv = /\u0000|\uFFFD/g;
  function Tm(t) {
    return (typeof t == "string" ? t : "" + t).replace(Kv, `
`).replace(Jv, "");
  }
  function bm(t, e) {
    return e = Tm(e), Tm(t) === e;
  }
  function xt(t, e, n, a, s, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Ma(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Ma(t, "" + a);
        break;
      case "className":
        Ul(t, "class", a);
        break;
      case "tabIndex":
        Ul(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ul(t, n, a);
        break;
      case "style":
        bf(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Ul(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Bl("" + a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (e !== "input" && xt(t, e, "name", s.name, s, null), xt(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), xt(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), xt(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (xt(t, e, "encType", s.encType, s, null), xt(t, e, "method", s.method, s, null), xt(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Bl("" + a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ie);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Bl("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        ct("beforetoggle", t), ct("toggle", t), _l(t, "popover", a);
        break;
      case "xlinkActuate":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        _l(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = b0.get(n) || n, _l(t, n, a));
    }
  }
  function or(t, e, n, a, s, u) {
    switch (n) {
      case "style":
        bf(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ma(t, a) : (typeof a == "number" || typeof a == "bigint") && Ma(t, "" + a);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ie);
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
        if (!hf.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), e = n.slice(2, s ? n.length - 7 : void 0), u = t[oe] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, s), typeof a == "function")) {
              typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, s);
              break t;
            }
            n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : _l(t, n, a);
          }
    }
  }
  function Pt(t, e, n) {
    switch (e) {
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
        ct("error", t), ct("load", t);
        var a = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  xt(t, e, u, f, n, null);
              }
          }
        s && xt(t, e, "srcSet", n.srcSet, n, null), a && xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ct("invalid", t);
        var y = u = f = s = null, S = null, D = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var O = n[a];
            if (O != null)
              switch (a) {
                case "name":
                  s = O;
                  break;
                case "type":
                  f = O;
                  break;
                case "checked":
                  S = O;
                  break;
                case "defaultChecked":
                  D = O;
                  break;
                case "value":
                  u = O;
                  break;
                case "defaultValue":
                  y = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(c(137, e));
                  break;
                default:
                  xt(t, e, a, O, n, null);
              }
          }
        gf(
          t,
          u,
          y,
          S,
          D,
          f,
          s,
          !1
        );
        return;
      case "select":
        ct("invalid", t), a = f = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (y = n[s], y != null))
            switch (s) {
              case "value":
                u = y;
                break;
              case "defaultValue":
                f = y;
                break;
              case "multiple":
                a = y;
              default:
                xt(t, e, s, y, n, null);
            }
        e = u, n = f, t.multiple = !!a, e != null ? Ea(t, !!a, e, !1) : n != null && Ea(t, !!a, n, !0);
        return;
      case "textarea":
        ct("invalid", t), u = s = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (y = n[f], y != null))
            switch (f) {
              case "value":
                a = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                u = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(c(91));
                break;
              default:
                xt(t, e, f, y, n, null);
            }
        Sf(t, a, s, u);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && (a = n[S], a != null))
            switch (S) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                xt(t, e, S, a, n, null);
            }
        return;
      case "dialog":
        ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < $i.length; a++)
          ct($i[a], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
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
        for (D in n)
          if (n.hasOwnProperty(D) && (a = n[D], a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                xt(t, e, D, a, n, null);
            }
        return;
      default:
        if (bu(e)) {
          for (O in n)
            n.hasOwnProperty(O) && (a = n[O], a !== void 0 && or(
              t,
              e,
              O,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && (a = n[y], a != null && xt(t, e, y, a, n, null));
  }
  function kv(t, e, n, a) {
    switch (e) {
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
        var s = null, u = null, f = null, y = null, S = null, D = null, O = null;
        for (z in n) {
          var _ = n[z];
          if (n.hasOwnProperty(z) && _ != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = _;
              default:
                a.hasOwnProperty(z) || xt(t, e, z, null, a, _);
            }
        }
        for (var C in a) {
          var z = a[C];
          if (_ = n[C], a.hasOwnProperty(C) && (z != null || _ != null))
            switch (C) {
              case "type":
                u = z;
                break;
              case "name":
                s = z;
                break;
              case "checked":
                D = z;
                break;
              case "defaultChecked":
                O = z;
                break;
              case "value":
                f = z;
                break;
              case "defaultValue":
                y = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(c(137, e));
                break;
              default:
                z !== _ && xt(
                  t,
                  e,
                  C,
                  z,
                  a,
                  _
                );
            }
        }
        Su(
          t,
          f,
          y,
          S,
          D,
          O,
          u,
          s
        );
        return;
      case "select":
        z = f = y = C = null;
        for (u in n)
          if (S = n[u], n.hasOwnProperty(u) && S != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                z = S;
              default:
                a.hasOwnProperty(u) || xt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  S
                );
            }
        for (s in a)
          if (u = a[s], S = n[s], a.hasOwnProperty(s) && (u != null || S != null))
            switch (s) {
              case "value":
                C = u;
                break;
              case "defaultValue":
                y = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== S && xt(
                  t,
                  e,
                  s,
                  u,
                  a,
                  S
                );
            }
        e = y, n = f, a = z, C != null ? Ea(t, !!n, C, !1) : !!a != !!n && (e != null ? Ea(t, !!n, e, !0) : Ea(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        z = C = null;
        for (y in n)
          if (s = n[y], n.hasOwnProperty(y) && s != null && !a.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                xt(t, e, y, null, a, s);
            }
        for (f in a)
          if (s = a[f], u = n[f], a.hasOwnProperty(f) && (s != null || u != null))
            switch (f) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(c(91));
                break;
              default:
                s !== u && xt(t, e, f, s, a, u);
            }
        vf(t, C, z);
        return;
      case "option":
        for (var Z in n)
          if (C = n[Z], n.hasOwnProperty(Z) && C != null && !a.hasOwnProperty(Z))
            switch (Z) {
              case "selected":
                t.selected = !1;
                break;
              default:
                xt(
                  t,
                  e,
                  Z,
                  null,
                  a,
                  C
                );
            }
        for (S in a)
          if (C = a[S], z = n[S], a.hasOwnProperty(S) && C !== z && (C != null || z != null))
            switch (S) {
              case "selected":
                t.selected = C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                xt(
                  t,
                  e,
                  S,
                  C,
                  a,
                  z
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
        for (var I in n)
          C = n[I], n.hasOwnProperty(I) && C != null && !a.hasOwnProperty(I) && xt(t, e, I, null, a, C);
        for (D in a)
          if (C = a[D], z = n[D], a.hasOwnProperty(D) && C !== z && (C != null || z != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(c(137, e));
                break;
              default:
                xt(
                  t,
                  e,
                  D,
                  C,
                  a,
                  z
                );
            }
        return;
      default:
        if (bu(e)) {
          for (var Et in n)
            C = n[Et], n.hasOwnProperty(Et) && C !== void 0 && !a.hasOwnProperty(Et) && or(
              t,
              e,
              Et,
              void 0,
              a,
              C
            );
          for (O in a)
            C = a[O], z = n[O], !a.hasOwnProperty(O) || C === z || C === void 0 && z === void 0 || or(
              t,
              e,
              O,
              C,
              a,
              z
            );
          return;
        }
    }
    for (var E in n)
      C = n[E], n.hasOwnProperty(E) && C != null && !a.hasOwnProperty(E) && xt(t, e, E, null, a, C);
    for (_ in a)
      C = a[_], z = n[_], !a.hasOwnProperty(_) || C === z || C == null && z == null || xt(t, e, _, C, a, z);
  }
  function Am(t) {
    switch (t) {
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
  function Fv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], u = s.transferSize, f = s.initiatorType, y = s.duration;
        if (u && y && Am(f)) {
          for (f = 0, y = s.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a], D = S.startTime;
            if (D > y) break;
            var O = S.transferSize, _ = S.initiatorType;
            O && Am(_) && (S = S.responseEnd, f += O * (S < y ? 1 : (y - D) / (S - D)));
          }
          if (--a, e += 8 * (u + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var rr = null, cr = null;
  function Rs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function xm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Em(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function fr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var hr = null;
  function Wv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === hr ? !1 : (hr = t, !0) : (hr = null, !1);
  }
  var Mm = typeof setTimeout == "function" ? setTimeout : void 0, Pv = typeof clearTimeout == "function" ? clearTimeout : void 0, Dm = typeof Promise == "function" ? Promise : void 0, $v = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dm < "u" ? function(t) {
    return Dm.resolve(null).then(t).catch(Iv);
  } : Mm;
  function Iv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Hn(t) {
    return t === "head";
  }
  function Cm(t, e) {
    var n = e, a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), ni(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          tl(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, tl(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, y = u.nodeName;
            u[vi] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && tl(t.ownerDocument.body);
      n = s;
    } while (n);
    ni(e);
  }
  function zm(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function dr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          dr(n), gu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function t1(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[vi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Be(t.nextSibling), t === null) break;
    }
    return null;
  }
  function e1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Be(t.nextSibling), t === null)) return null;
    return t;
  }
  function Om(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Be(t.nextSibling), t === null)) return null;
    return t;
  }
  function mr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function yr(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function n1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Be(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var pr = null;
  function Rm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Be(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Vm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function _m(t, e, n) {
    switch (e = Rs(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function tl(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    gu(t);
  }
  var je = /* @__PURE__ */ new Map(), Um = /* @__PURE__ */ new Set();
  function Vs(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var pn = L.d;
  L.d = {
    f: a1,
    r: i1,
    D: l1,
    C: s1,
    L: u1,
    m: o1,
    X: c1,
    S: r1,
    M: f1
  };
  function a1() {
    var t = pn.f(), e = As();
    return t || e;
  }
  function i1(t) {
    var e = ba(t);
    e !== null && e.tag === 5 && e.type === "form" ? Wh(e) : pn.r(t);
  }
  var Ia = typeof document > "u" ? null : document;
  function Nm(t, e, n) {
    var a = Ia;
    if (a && typeof e == "string" && e) {
      var s = ze(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Um.has(s) || (Um.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), Pt(e, "link", t), Zt(e), a.head.appendChild(e)));
    }
  }
  function l1(t) {
    pn.D(t), Nm("dns-prefetch", t, null);
  }
  function s1(t, e) {
    pn.C(t, e), Nm("preconnect", t, e);
  }
  function u1(t, e, n) {
    pn.L(t, e, n);
    var a = Ia;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + ze(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + ze(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + ze(
        n.imageSizes
      ) + '"]')) : s += '[href="' + ze(t) + '"]';
      var u = s;
      switch (e) {
        case "style":
          u = ti(t);
          break;
        case "script":
          u = ei(t);
      }
      je.has(u) || (t = b(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), je.set(u, t), a.querySelector(s) !== null || e === "style" && a.querySelector(el(u)) || e === "script" && a.querySelector(nl(u)) || (e = a.createElement("link"), Pt(e, "link", t), Zt(e), a.head.appendChild(e)));
    }
  }
  function o1(t, e) {
    pn.m(t, e);
    var n = Ia;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + ze(a) + '"][href="' + ze(t) + '"]', u = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ei(t);
      }
      if (!je.has(u) && (t = b({ rel: "modulepreload", href: t }, e), je.set(u, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(nl(u)))
              return;
        }
        a = n.createElement("link"), Pt(a, "link", t), Zt(a), n.head.appendChild(a);
      }
    }
  }
  function r1(t, e, n) {
    pn.S(t, e, n);
    var a = Ia;
    if (a && t) {
      var s = Aa(a).hoistableStyles, u = ti(t);
      e = e || "default";
      var f = s.get(u);
      if (!f) {
        var y = { loading: 0, preload: null };
        if (f = a.querySelector(
          el(u)
        ))
          y.loading = 5;
        else {
          t = b(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = je.get(u)) && gr(t, n);
          var S = f = a.createElement("link");
          Zt(S), Pt(S, "link", t), S._p = new Promise(function(D, O) {
            S.onload = D, S.onerror = O;
          }), S.addEventListener("load", function() {
            y.loading |= 1;
          }), S.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, _s(f, e, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: y
        }, s.set(u, f);
      }
    }
  }
  function c1(t, e) {
    pn.X(t, e);
    var n = Ia;
    if (n && t) {
      var a = Aa(n).hoistableScripts, s = ei(t), u = a.get(s);
      u || (u = n.querySelector(nl(s)), u || (t = b({ src: t, async: !0 }, e), (e = je.get(s)) && vr(t, e), u = n.createElement("script"), Zt(u), Pt(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function f1(t, e) {
    pn.M(t, e);
    var n = Ia;
    if (n && t) {
      var a = Aa(n).hoistableScripts, s = ei(t), u = a.get(s);
      u || (u = n.querySelector(nl(s)), u || (t = b({ src: t, async: !0, type: "module" }, e), (e = je.get(s)) && vr(t, e), u = n.createElement("script"), Zt(u), Pt(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function Bm(t, e, n, a) {
    var s = (s = ot.current) ? Vs(s) : null;
    if (!s) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ti(n.href), n = Aa(
          s
        ).hoistableStyles, a = n.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ti(n.href);
          var u = Aa(
            s
          ).hoistableStyles, f = u.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, f), (u = s.querySelector(
            el(t)
          )) && !u._p && (f.instance = u, f.state.loading = 5), je.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, je.set(t, n), u || h1(
            s,
            t,
            n,
            f.state
          ))), e && a === null)
            throw Error(c(528, ""));
          return f;
        }
        if (e && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ei(n), n = Aa(
          s
        ).hoistableScripts, a = n.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function ti(t) {
    return 'href="' + ze(t) + '"';
  }
  function el(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function jm(t) {
    return b({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function h1(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Pt(e, "link", n), Zt(e), t.head.appendChild(e));
  }
  function ei(t) {
    return '[src="' + ze(t) + '"]';
  }
  function nl(t) {
    return "script[async]" + t;
  }
  function Lm(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + ze(n.href) + '"]'
          );
          if (a)
            return e.instance = a, Zt(a), a;
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Zt(a), Pt(a, "style", s), _s(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          s = ti(n.href);
          var u = t.querySelector(
            el(s)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Zt(u), u;
          a = jm(n), (s = je.get(s)) && gr(a, s), u = (t.ownerDocument || t).createElement("link"), Zt(u);
          var f = u;
          return f._p = new Promise(function(y, S) {
            f.onload = y, f.onerror = S;
          }), Pt(u, "link", a), e.state.loading |= 4, _s(u, n.precedence, t), e.instance = u;
        case "script":
          return u = ei(n.src), (s = t.querySelector(
            nl(u)
          )) ? (e.instance = s, Zt(s), s) : (a = n, (s = je.get(u)) && (a = b({}, n), vr(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), Zt(s), Pt(s, "link", a), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, _s(a, n.precedence, t));
    return e.instance;
  }
  function _s(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = a.length ? a[a.length - 1] : null, u = s, f = 0; f < a.length; f++) {
      var y = a[f];
      if (y.dataset.precedence === e) u = y;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function gr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function vr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Us = null;
  function Hm(t, e, n) {
    if (Us === null) {
      var a = /* @__PURE__ */ new Map(), s = Us = /* @__PURE__ */ new Map();
      s.set(n, a);
    } else
      s = Us, a = s.get(n), a || (a = /* @__PURE__ */ new Map(), s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[vi] || u[Jt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var y = a.get(f);
        y ? y.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function wm(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function d1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Ym(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function m1(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = ti(a.href), u = e.querySelector(
          el(s)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Ns.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, Zt(u);
          return;
        }
        u = e.ownerDocument || e, a = jm(a), (s = je.get(s)) && gr(a, s), u = u.createElement("link"), Zt(u);
        var f = u;
        f._p = new Promise(function(y, S) {
          f.onload = y, f.onerror = S;
        }), Pt(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Ns.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Sr = 0;
  function y1(t, e) {
    return t.stylesheets && t.count === 0 && js(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && js(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Sr === 0 && (Sr = 62500 * Fv());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && js(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Sr ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(s);
      };
    } : null;
  }
  function Ns() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) js(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Bs = null;
  function js(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Bs = /* @__PURE__ */ new Map(), e.forEach(p1, t), Bs = null, Ns.call(t));
  }
  function p1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Bs.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Bs.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, s), n.set(f, s), this.count++, a = Ns.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var al = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: st,
    _currentValue2: st,
    _threadCount: 0
  };
  function g1(t, e, n, a, s, u, f, y, S) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.hiddenUpdates = du(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qm(t, e, n, a, s, u, f, y, S, D, O, _) {
    return t = new g1(
      t,
      e,
      n,
      f,
      S,
      D,
      O,
      _,
      y
    ), e = 1, u === !0 && (e |= 24), u = Te(3, null, null, e), t.current = u, u.stateNode = t, e = Pu(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, eo(u), t;
  }
  function Gm(t) {
    return t ? (t = _a, t) : _a;
  }
  function Xm(t, e, n, a, s, u) {
    s = Gm(s), a.context === null ? a.context = s : a.pendingContext = s, a = Cn(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = zn(t, a, e), n !== null && (me(n, t, e), Bi(n, t, e));
  }
  function Qm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Tr(t, e) {
    Qm(t, e), (t = t.alternate) && Qm(t, e);
  }
  function Zm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ta(t, 67108864);
      e !== null && me(e, t, 67108864), Tr(t, 67108864);
    }
  }
  function Km(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Me();
      e = mu(e);
      var n = ta(t, e);
      n !== null && me(n, t, e), Tr(t, e);
    }
  }
  var Ls = !0;
  function v1(t, e, n, a) {
    var s = N.T;
    N.T = null;
    var u = L.p;
    try {
      L.p = 2, br(t, e, n, a);
    } finally {
      L.p = u, N.T = s;
    }
  }
  function S1(t, e, n, a) {
    var s = N.T;
    N.T = null;
    var u = L.p;
    try {
      L.p = 8, br(t, e, n, a);
    } finally {
      L.p = u, N.T = s;
    }
  }
  function br(t, e, n, a) {
    if (Ls) {
      var s = Ar(a);
      if (s === null)
        ur(
          t,
          e,
          a,
          Hs,
          n
        ), km(t, a);
      else if (b1(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (km(t, a), e & 4 && -1 < T1.indexOf(t)) {
        for (; s !== null; ) {
          var u = ba(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Fn(u.pendingLanes);
                  if (f !== 0) {
                    var y = u;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; f; ) {
                      var S = 1 << 31 - ve(f);
                      y.entanglements[1] |= S, f &= ~S;
                    }
                    ke(u), (vt & 6) === 0 && (Ts = pe() + 500, Pi(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = ta(u, 2), y !== null && me(y, u, 2), As(), Tr(u, 2);
            }
          if (u = Ar(a), u === null && ur(
            t,
            e,
            a,
            Hs,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && a.stopPropagation();
      } else
        ur(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Ar(t) {
    return t = xu(t), xr(t);
  }
  var Hs = null;
  function xr(t) {
    if (Hs = null, t = Ta(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = g(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Hs = t, null;
  }
  function Jm(t) {
    switch (t) {
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
        switch (l0()) {
          case tf:
            return 2;
          case ef:
            return 8;
          case Cl:
          case s0:
            return 32;
          case nf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Er = !1, wn = null, Yn = null, qn = null, il = /* @__PURE__ */ new Map(), ll = /* @__PURE__ */ new Map(), Gn = [], T1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function km(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Yn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        il.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ll.delete(e.pointerId);
    }
  }
  function sl(t, e, n, a, s, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [s]
    }, e !== null && (e = ba(e), e !== null && Zm(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function b1(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return wn = sl(
          wn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return Yn = sl(
          Yn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "mouseover":
        return qn = sl(
          qn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return il.set(
          u,
          sl(
            il.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, ll.set(
          u,
          sl(
            ll.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Fm(t) {
    var e = Ta(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = g(n), e !== null) {
            t.blockedOn = e, rf(t.priority, function() {
              Km(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = p(n), e !== null) {
            t.blockedOn = e, rf(t.priority, function() {
              Km(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ws(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Ar(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Au = a, n.target.dispatchEvent(a), Au = null;
      } else
        return e = ba(n), e !== null && Zm(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Wm(t, e, n) {
    ws(t) && n.delete(e);
  }
  function A1() {
    Er = !1, wn !== null && ws(wn) && (wn = null), Yn !== null && ws(Yn) && (Yn = null), qn !== null && ws(qn) && (qn = null), il.forEach(Wm), ll.forEach(Wm);
  }
  function Ys(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Er || (Er = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      A1
    )));
  }
  var qs = null;
  function Pm(t) {
    qs !== t && (qs = t, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        qs === t && (qs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (xr(a || n) === null)
              continue;
            break;
          }
          var u = ba(n);
          u !== null && (t.splice(e, 3), e -= 3, Ao(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: a
            },
            a,
            s
          ));
        }
      }
    ));
  }
  function ni(t) {
    function e(S) {
      return Ys(S, t);
    }
    wn !== null && Ys(wn, t), Yn !== null && Ys(Yn, t), qn !== null && Ys(qn, t), il.forEach(e), ll.forEach(e);
    for (var n = 0; n < Gn.length; n++) {
      var a = Gn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Gn.length && (n = Gn[0], n.blockedOn === null); )
      Fm(n), n.blockedOn === null && Gn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], u = n[a + 1], f = s[oe] || null;
        if (typeof u == "function")
          f || Pm(n);
        else if (f) {
          var y = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, f = u[oe] || null)
              y = f.formAction;
            else if (xr(s) !== null) continue;
          } else y = f.action;
          typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3), a -= 3), Pm(n);
        }
      }
  }
  function $m() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return s = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      s !== null && (s(), s = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null);
      };
    }
  }
  function Mr(t) {
    this._internalRoot = t;
  }
  Gs.prototype.render = Mr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var n = e.current, a = Me();
    Xm(n, a, t, e, null, null);
  }, Gs.prototype.unmount = Mr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Xm(t.current, 2, null, t, null, null), As(), e[Sa] = null;
    }
  };
  function Gs(t) {
    this._internalRoot = t;
  }
  Gs.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = of();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Gn.length && e !== 0 && e < Gn[n].priority; n++) ;
      Gn.splice(n, 0, t), n === 0 && Fm(t);
    }
  };
  var Im = o.version;
  if (Im !== "19.2.0")
    throw Error(
      c(
        527,
        Im,
        "19.2.0"
      )
    );
  L.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = v(e), t = t !== null ? T(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var x1 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xs.isDisabled && Xs.supportsFiber)
      try {
        yi = Xs.inject(
          x1
        ), ge = Xs;
      } catch {
      }
  }
  return ol.createRoot = function(t, e) {
    if (!d(t)) throw Error(c(299));
    var n = !1, a = "", s = sd, u = ud, f = od;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = qm(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      s,
      u,
      f,
      $m
    ), t[Sa] = e.current, sr(t), new Mr(e);
  }, ol.hydrateRoot = function(t, e, n) {
    if (!d(t)) throw Error(c(299));
    var a = !1, s = "", u = sd, f = ud, y = od, S = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), e = qm(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      s,
      S,
      u,
      f,
      y,
      $m
    ), e.context = Gm(null), n = e.current, a = Me(), a = mu(a), s = Cn(a), s.callback = null, zn(n, s, a), n = a, e.current.lanes = n, gi(e, n), ke(e), t[Sa] = e.current, sr(t), new Gs(e);
  }, ol.version = "19.2.0", ol;
}
var ry;
function U1() {
  if (ry) return Cr.exports;
  ry = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Cr.exports = _1(), Cr.exports;
}
var N1 = U1(), K = gc();
const vc = K.createContext({});
function Sc(i) {
  const l = K.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const Tc = typeof window < "u", Ep = Tc ? K.useLayoutEffect : K.useEffect, au = /* @__PURE__ */ K.createContext(null);
function bc(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function Ac(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1);
}
const gn = (i, l, o) => o > l ? l : o < i ? i : o;
let xc = () => {
};
const vn = {}, Mp = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function Dp(i) {
  return typeof i == "object" && i !== null;
}
const Cp = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function Ec(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const Ye = /* @__NO_SIDE_EFFECTS__ */ (i) => i, B1 = (i, l) => (o) => l(i(o)), Al = (...i) => i.reduce(B1), pl = /* @__NO_SIDE_EFFECTS__ */ (i, l, o) => {
  const r = l - i;
  return r === 0 ? 1 : (o - i) / r;
};
class Mc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return bc(this.subscriptions, l), () => Ac(this.subscriptions, l);
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, o, r);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Fe = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, we = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3;
function zp(i, l) {
  return l ? i * (1e3 / l) : 0;
}
const Op = (i, l, o) => (((1 - 3 * o + 3 * l) * i + (3 * o - 6 * l)) * i + 3 * l) * i, j1 = 1e-7, L1 = 12;
function H1(i, l, o, r, c) {
  let d, h, g = 0;
  do
    h = l + (o - l) / 2, d = Op(h, r, c) - i, d > 0 ? o = h : l = h;
  while (Math.abs(d) > j1 && ++g < L1);
  return h;
}
function xl(i, l, o, r) {
  if (i === l && o === r)
    return Ye;
  const c = (d) => H1(d, 0, 1, i, o);
  return (d) => d === 0 || d === 1 ? d : Op(c(d), l, r);
}
const Rp = (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, Vp = (i) => (l) => 1 - i(1 - l), _p = /* @__PURE__ */ xl(0.33, 1.53, 0.69, 0.99), Dc = /* @__PURE__ */ Vp(_p), Up = /* @__PURE__ */ Rp(Dc), Np = (i) => (i *= 2) < 1 ? 0.5 * Dc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Cc = (i) => 1 - Math.sin(Math.acos(i)), Bp = Vp(Cc), jp = Rp(Cc), w1 = /* @__PURE__ */ xl(0.42, 0, 1, 1), Y1 = /* @__PURE__ */ xl(0, 0, 0.58, 1), Lp = /* @__PURE__ */ xl(0.42, 0, 0.58, 1), q1 = (i) => Array.isArray(i) && typeof i[0] != "number", Hp = (i) => Array.isArray(i) && typeof i[0] == "number", G1 = {
  linear: Ye,
  easeIn: w1,
  easeInOut: Lp,
  easeOut: Y1,
  circIn: Cc,
  circInOut: jp,
  circOut: Bp,
  backIn: Dc,
  backInOut: Up,
  backOut: _p,
  anticipate: Np
}, X1 = (i) => typeof i == "string", cy = (i) => {
  if (Hp(i)) {
    xc(i.length === 4);
    const [l, o, r, c] = i;
    return xl(l, o, r, c);
  } else if (X1(i))
    return G1[i];
  return i;
}, Qs = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Q1(i, l) {
  let o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), c = !1, d = !1;
  const h = /* @__PURE__ */ new WeakSet();
  let g = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function p(v) {
    h.has(v) && (m.schedule(v), i()), v(g);
  }
  const m = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, T = !1, b = !1) => {
      const U = b && c ? o : r;
      return T && h.add(v), U.has(v) || U.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      r.delete(v), h.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (g = v, c) {
        d = !0;
        return;
      }
      c = !0, [o, r] = [r, o], o.forEach(p), o.clear(), c = !1, d && (d = !1, m.process(v));
    }
  };
  return m;
}
const Z1 = 40;
function wp(i, l) {
  let o = !1, r = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, d = () => o = !0, h = Qs.reduce((Q, W) => (Q[W] = Q1(d), Q), {}), { setup: g, read: p, resolveKeyframes: m, preUpdate: v, update: T, preRender: b, render: V, postRender: U } = h, j = () => {
    const Q = vn.useManualTiming ? c.timestamp : performance.now();
    o = !1, vn.useManualTiming || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(Q - c.timestamp, Z1), 1)), c.timestamp = Q, c.isProcessing = !0, g.process(c), p.process(c), m.process(c), v.process(c), T.process(c), b.process(c), V.process(c), U.process(c), c.isProcessing = !1, o && l && (r = !1, i(j));
  }, G = () => {
    o = !0, r = !0, c.isProcessing || i(j);
  };
  return { schedule: Qs.reduce((Q, W) => {
    const k = h[W];
    return Q[W] = ($, et = !1, Y = !1) => (o || G(), k.schedule($, et, Y)), Q;
  }, {}), cancel: (Q) => {
    for (let W = 0; W < Qs.length; W++)
      h[Qs[W]].cancel(Q);
  }, state: c, steps: h };
}
const { schedule: Rt, cancel: Zn, state: $t, steps: _r } = /* @__PURE__ */ wp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ye, !0);
let ks;
function K1() {
  ks = void 0;
}
const ye = {
  now: () => (ks === void 0 && ye.set($t.isProcessing || vn.useManualTiming ? $t.timestamp : performance.now()), ks),
  set: (i) => {
    ks = i, queueMicrotask(K1);
  }
}, Yp = (i) => (l) => typeof l == "string" && l.startsWith(i), zc = /* @__PURE__ */ Yp("--"), J1 = /* @__PURE__ */ Yp("var(--"), Oc = (i) => J1(i) ? k1.test(i.split("/*")[0].trim()) : !1, k1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, fi = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, gl = {
  ...fi,
  transform: (i) => gn(0, 1, i)
}, Zs = {
  ...fi,
  default: 1
}, fl = (i) => Math.round(i * 1e5) / 1e5, Rc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function F1(i) {
  return i == null;
}
const W1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Vc = (i, l) => (o) => !!(typeof o == "string" && W1.test(o) && o.startsWith(i) || l && !F1(o) && Object.prototype.hasOwnProperty.call(o, l)), qp = (i, l, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, d, h, g] = r.match(Rc);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(d),
    [o]: parseFloat(h),
    alpha: g !== void 0 ? parseFloat(g) : 1
  };
}, P1 = (i) => gn(0, 255, i), Ur = {
  ...fi,
  transform: (i) => Math.round(P1(i))
}, ya = {
  test: /* @__PURE__ */ Vc("rgb", "red"),
  parse: /* @__PURE__ */ qp("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: o, alpha: r = 1 }) => "rgba(" + Ur.transform(i) + ", " + Ur.transform(l) + ", " + Ur.transform(o) + ", " + fl(gl.transform(r)) + ")"
};
function $1(i) {
  let l = "", o = "", r = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), o = i.substring(3, 5), r = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), o = i.substring(2, 3), r = i.substring(3, 4), c = i.substring(4, 5), l += l, o += o, r += r, c += c), {
    red: parseInt(l, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Wr = {
  test: /* @__PURE__ */ Vc("#"),
  parse: $1,
  transform: ya.transform
}, El = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), Qn = /* @__PURE__ */ El("deg"), We = /* @__PURE__ */ El("%"), nt = /* @__PURE__ */ El("px"), I1 = /* @__PURE__ */ El("vh"), tS = /* @__PURE__ */ El("vw"), fy = {
  ...We,
  parse: (i) => We.parse(i) / 100,
  transform: (i) => We.transform(i * 100)
}, ai = {
  test: /* @__PURE__ */ Vc("hsl", "hue"),
  parse: /* @__PURE__ */ qp("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + We.transform(fl(l)) + ", " + We.transform(fl(o)) + ", " + fl(gl.transform(r)) + ")"
}, Xt = {
  test: (i) => ya.test(i) || Wr.test(i) || ai.test(i),
  parse: (i) => ya.test(i) ? ya.parse(i) : ai.test(i) ? ai.parse(i) : Wr.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ya.transform(i) : ai.transform(i),
  getAnimatableNone: (i) => {
    const l = Xt.parse(i);
    return l.alpha = 0, Xt.transform(l);
  }
}, eS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nS(i) {
  return isNaN(i) && typeof i == "string" && (i.match(Rc)?.length || 0) + (i.match(eS)?.length || 0) > 0;
}
const Gp = "number", Xp = "color", aS = "var", iS = "var(", hy = "${}", lS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vl(i) {
  const l = i.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const g = l.replace(lS, (p) => (Xt.test(p) ? (r.color.push(d), c.push(Xp), o.push(Xt.parse(p))) : p.startsWith(iS) ? (r.var.push(d), c.push(aS), o.push(p)) : (r.number.push(d), c.push(Gp), o.push(parseFloat(p))), ++d, hy)).split(hy);
  return { values: o, split: g, indexes: r, types: c };
}
function Qp(i) {
  return vl(i).values;
}
function Zp(i) {
  const { split: l, types: o } = vl(i), r = l.length;
  return (c) => {
    let d = "";
    for (let h = 0; h < r; h++)
      if (d += l[h], c[h] !== void 0) {
        const g = o[h];
        g === Gp ? d += fl(c[h]) : g === Xp ? d += Xt.transform(c[h]) : d += c[h];
      }
    return d;
  };
}
const sS = (i) => typeof i == "number" ? 0 : Xt.test(i) ? Xt.getAnimatableNone(i) : i;
function uS(i) {
  const l = Qp(i);
  return Zp(i)(l.map(sS));
}
const Kn = {
  test: nS,
  parse: Qp,
  createTransformer: Zp,
  getAnimatableNone: uS
};
function Nr(i, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? i + (l - i) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? i + (l - i) * (2 / 3 - o) * 6 : i;
}
function oS({ hue: i, saturation: l, lightness: o, alpha: r }) {
  i /= 360, l /= 100, o /= 100;
  let c = 0, d = 0, h = 0;
  if (!l)
    c = d = h = o;
  else {
    const g = o < 0.5 ? o * (1 + l) : o + l - o * l, p = 2 * o - g;
    c = Nr(p, g, i + 1 / 3), d = Nr(p, g, i), h = Nr(p, g, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: r
  };
}
function $s(i, l) {
  return (o) => o > 0 ? l : i;
}
const Vt = (i, l, o) => i + (l - i) * o, Br = (i, l, o) => {
  const r = i * i, c = o * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, rS = [Wr, ya, ai], cS = (i) => rS.find((l) => l.test(i));
function dy(i) {
  const l = cS(i);
  if (!l)
    return !1;
  let o = l.parse(i);
  return l === ai && (o = oS(o)), o;
}
const my = (i, l) => {
  const o = dy(i), r = dy(l);
  if (!o || !r)
    return $s(i, l);
  const c = { ...o };
  return (d) => (c.red = Br(o.red, r.red, d), c.green = Br(o.green, r.green, d), c.blue = Br(o.blue, r.blue, d), c.alpha = Vt(o.alpha, r.alpha, d), ya.transform(c));
}, Pr = /* @__PURE__ */ new Set(["none", "hidden"]);
function fS(i, l) {
  return Pr.has(i) ? (o) => o <= 0 ? i : l : (o) => o >= 1 ? l : i;
}
function hS(i, l) {
  return (o) => Vt(i, l, o);
}
function _c(i) {
  return typeof i == "number" ? hS : typeof i == "string" ? Oc(i) ? $s : Xt.test(i) ? my : yS : Array.isArray(i) ? Kp : typeof i == "object" ? Xt.test(i) ? my : dS : $s;
}
function Kp(i, l) {
  const o = [...i], r = o.length, c = i.map((d, h) => _c(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < r; h++)
      o[h] = c[h](d);
    return o;
  };
}
function dS(i, l) {
  const o = { ...i, ...l }, r = {};
  for (const c in o)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = _c(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in r)
      o[d] = r[d](c);
    return o;
  };
}
function mS(i, l) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], h = i.indexes[d][r[d]], g = i.values[h] ?? 0;
    o[c] = g, r[d]++;
  }
  return o;
}
const yS = (i, l) => {
  const o = Kn.createTransformer(l), r = vl(i), c = vl(l);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? Pr.has(i) && !c.values.length || Pr.has(l) && !r.values.length ? fS(i, l) : Al(Kp(mS(r, c), c.values), o) : $s(i, l);
};
function Jp(i, l, o) {
  return typeof i == "number" && typeof l == "number" && typeof o == "number" ? Vt(i, l, o) : _c(i)(i, l);
}
const pS = (i) => {
  const l = ({ timestamp: o }) => i(o);
  return {
    start: (o = !0) => Rt.update(l, o),
    stop: () => Zn(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => $t.isProcessing ? $t.timestamp : ye.now()
  };
}, kp = (i, l, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / o), 2);
  for (let d = 0; d < c; d++)
    r += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Is = 2e4;
function Uc(i) {
  let l = 0;
  const o = 50;
  let r = i.next(l);
  for (; !r.done && l < Is; )
    l += o, r = i.next(l);
  return l >= Is ? 1 / 0 : l;
}
function gS(i, l = 100, o) {
  const r = o({ ...i, keyframes: [0, l] }), c = Math.min(Uc(r), Is);
  return {
    type: "keyframes",
    ease: (d) => r.next(c * d).value / l,
    duration: /* @__PURE__ */ we(c)
  };
}
const vS = 5;
function Fp(i, l, o) {
  const r = Math.max(l - vS, 0);
  return zp(o - i(r), l - r);
}
const Nt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, jr = 1e-3;
function SS({ duration: i = Nt.duration, bounce: l = Nt.bounce, velocity: o = Nt.velocity, mass: r = Nt.mass }) {
  let c, d, h = 1 - l;
  h = gn(Nt.minDamping, Nt.maxDamping, h), i = gn(Nt.minDuration, Nt.maxDuration, /* @__PURE__ */ we(i)), h < 1 ? (c = (m) => {
    const v = m * h, T = v * i, b = v - o, V = $r(m, h), U = Math.exp(-T);
    return jr - b / V * U;
  }, d = (m) => {
    const T = m * h * i, b = T * o + o, V = Math.pow(h, 2) * Math.pow(m, 2) * i, U = Math.exp(-T), j = $r(Math.pow(m, 2), h);
    return (-c(m) + jr > 0 ? -1 : 1) * ((b - V) * U) / j;
  }) : (c = (m) => {
    const v = Math.exp(-m * i), T = (m - o) * i + 1;
    return -jr + v * T;
  }, d = (m) => {
    const v = Math.exp(-m * i), T = (o - m) * (i * i);
    return v * T;
  });
  const g = 5 / i, p = bS(c, d, g);
  if (i = /* @__PURE__ */ Fe(i), isNaN(p))
    return {
      stiffness: Nt.stiffness,
      damping: Nt.damping,
      duration: i
    };
  {
    const m = Math.pow(p, 2) * r;
    return {
      stiffness: m,
      damping: h * 2 * Math.sqrt(r * m),
      duration: i
    };
  }
}
const TS = 12;
function bS(i, l, o) {
  let r = o;
  for (let c = 1; c < TS; c++)
    r = r - i(r) / l(r);
  return r;
}
function $r(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const AS = ["duration", "bounce"], xS = ["stiffness", "damping", "mass"];
function yy(i, l) {
  return l.some((o) => i[o] !== void 0);
}
function ES(i) {
  let l = {
    velocity: Nt.velocity,
    stiffness: Nt.stiffness,
    damping: Nt.damping,
    mass: Nt.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!yy(i, xS) && yy(i, AS))
    if (i.visualDuration) {
      const o = i.visualDuration, r = 2 * Math.PI / (o * 1.2), c = r * r, d = 2 * gn(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Nt.mass,
        stiffness: c,
        damping: d
      };
    } else {
      const o = SS(i);
      l = {
        ...l,
        ...o,
        mass: Nt.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function tu(i = Nt.visualDuration, l = Nt.bounce) {
  const o = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i;
  let { restSpeed: r, restDelta: c } = o;
  const d = o.keyframes[0], h = o.keyframes[o.keyframes.length - 1], g = { done: !1, value: d }, { stiffness: p, damping: m, mass: v, duration: T, velocity: b, isResolvedFromDuration: V } = ES({
    ...o,
    velocity: -/* @__PURE__ */ we(o.velocity || 0)
  }), U = b || 0, j = m / (2 * Math.sqrt(p * v)), G = h - d, H = /* @__PURE__ */ we(Math.sqrt(p / v)), X = Math.abs(G) < 5;
  r || (r = X ? Nt.restSpeed.granular : Nt.restSpeed.default), c || (c = X ? Nt.restDelta.granular : Nt.restDelta.default);
  let Q;
  if (j < 1) {
    const k = $r(H, j);
    Q = ($) => {
      const et = Math.exp(-j * H * $);
      return h - et * ((U + j * H * G) / k * Math.sin(k * $) + G * Math.cos(k * $));
    };
  } else if (j === 1)
    Q = (k) => h - Math.exp(-H * k) * (G + (U + H * G) * k);
  else {
    const k = H * Math.sqrt(j * j - 1);
    Q = ($) => {
      const et = Math.exp(-j * H * $), Y = Math.min(k * $, 300);
      return h - et * ((U + j * H * G) * Math.sinh(Y) + k * G * Math.cosh(Y)) / k;
    };
  }
  const W = {
    calculatedDuration: V && T || null,
    next: (k) => {
      const $ = Q(k);
      if (V)
        g.done = k >= T;
      else {
        let et = k === 0 ? U : 0;
        j < 1 && (et = k === 0 ? /* @__PURE__ */ Fe(U) : Fp(Q, k, $));
        const Y = Math.abs(et) <= r, mt = Math.abs(h - $) <= c;
        g.done = Y && mt;
      }
      return g.value = g.done ? h : $, g;
    },
    toString: () => {
      const k = Math.min(Uc(W), Is), $ = kp((et) => W.next(k * et).value, k, 30);
      return k + "ms " + $;
    },
    toTransition: () => {
    }
  };
  return W;
}
tu.applyToOptions = (i) => {
  const l = gS(i, 100, tu);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ Fe(l.duration), i.type = "keyframes", i;
};
function Ir({ keyframes: i, velocity: l = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: h, min: g, max: p, restDelta: m = 0.5, restSpeed: v }) {
  const T = i[0], b = {
    done: !1,
    value: T
  }, V = (Y) => g !== void 0 && Y < g || p !== void 0 && Y > p, U = (Y) => g === void 0 ? p : p === void 0 || Math.abs(g - Y) < Math.abs(p - Y) ? g : p;
  let j = o * l;
  const G = T + j, H = h === void 0 ? G : h(G);
  H !== G && (j = H - T);
  const X = (Y) => -j * Math.exp(-Y / r), Q = (Y) => H + X(Y), W = (Y) => {
    const mt = X(Y), Dt = Q(Y);
    b.done = Math.abs(mt) <= m, b.value = b.done ? H : Dt;
  };
  let k, $;
  const et = (Y) => {
    V(b.value) && (k = Y, $ = tu({
      keyframes: [b.value, U(b.value)],
      velocity: Fp(Q, Y, b.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: d,
      restDelta: m,
      restSpeed: v
    }));
  };
  return et(0), {
    calculatedDuration: null,
    next: (Y) => {
      let mt = !1;
      return !$ && k === void 0 && (mt = !0, W(Y), et(Y)), k !== void 0 && Y >= k ? $.next(Y - k) : (!mt && W(Y), b);
    }
  };
}
function MS(i, l, o) {
  const r = [], c = o || vn.mix || Jp, d = i.length - 1;
  for (let h = 0; h < d; h++) {
    let g = c(i[h], i[h + 1]);
    if (l) {
      const p = Array.isArray(l) ? l[h] || Ye : l;
      g = Al(p, g);
    }
    r.push(g);
  }
  return r;
}
function DS(i, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const d = i.length;
  if (xc(d === l.length), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const g = MS(l, r, c), p = g.length, m = (v) => {
    if (h && v < i[0])
      return l[0];
    let T = 0;
    if (p > 1)
      for (; T < i.length - 2 && !(v < i[T + 1]); T++)
        ;
    const b = /* @__PURE__ */ pl(i[T], i[T + 1], v);
    return g[T](b);
  };
  return o ? (v) => m(gn(i[0], i[d - 1], v)) : m;
}
function CS(i, l) {
  const o = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ pl(0, l, r);
    i.push(Vt(o, 1, c));
  }
}
function zS(i) {
  const l = [0];
  return CS(l, i.length - 1), l;
}
function OS(i, l) {
  return i.map((o) => o * l);
}
function RS(i, l) {
  return i.map(() => l || Lp).splice(0, i.length - 1);
}
function hl({ duration: i = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = q1(r) ? r.map(cy) : cy(r), d = {
    done: !1,
    value: l[0]
  }, h = OS(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === l.length ? o : zS(l),
    i
  ), g = DS(h, l, {
    ease: Array.isArray(c) ? c : RS(l, c)
  });
  return {
    calculatedDuration: i,
    next: (p) => (d.value = g(p), d.done = p >= i, d)
  };
}
const VS = (i) => i !== null;
function Nc(i, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const d = i.filter(VS), g = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !g || r === void 0 ? d[g] : r;
}
const _S = {
  decay: Ir,
  inertia: Ir,
  tween: hl,
  keyframes: hl,
  spring: tu
};
function Wp(i) {
  typeof i.type == "string" && (i.type = _S[i.type]);
}
class Bc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const US = (i) => i / 100;
class jc extends Bc {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== ye.now() && this.tick(ye.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    Wp(l);
    const { type: o = hl, repeat: r = 0, repeatDelay: c = 0, repeatType: d, velocity: h = 0 } = l;
    let { keyframes: g } = l;
    const p = o || hl;
    p !== hl && typeof g[0] != "number" && (this.mixKeyframes = Al(US, Jp(g[0], g[1])), g = [0, 100]);
    const m = p({ ...l, keyframes: g });
    d === "mirror" && (this.mirroredGenerator = p({
      ...l,
      keyframes: [...g].reverse(),
      velocity: -h
    })), m.calculatedDuration === null && (m.calculatedDuration = Uc(m));
    const { calculatedDuration: v } = m;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = m;
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(l, o = !1) {
    const { generator: r, totalDuration: c, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: g, calculatedDuration: p } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: m = 0, keyframes: v, repeat: T, repeatType: b, repeatDelay: V, type: U, onUpdate: j, finalKeyframe: G } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const H = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1), X = this.playbackSpeed >= 0 ? H < 0 : H > c;
    this.currentTime = Math.max(H, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let Q = this.currentTime, W = r;
    if (T) {
      const Y = Math.min(this.currentTime, c) / g;
      let mt = Math.floor(Y), Dt = Y % 1;
      !Dt && Y >= 1 && (Dt = 1), Dt === 1 && mt--, mt = Math.min(mt, T + 1), !!(mt % 2) && (b === "reverse" ? (Dt = 1 - Dt, V && (Dt -= V / g)) : b === "mirror" && (W = h)), Q = gn(0, 1, Dt) * g;
    }
    const k = X ? { done: !1, value: v[0] } : W.next(Q);
    d && (k.value = d(k.value));
    let { done: $ } = k;
    !X && p !== null && ($ = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const et = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
    return et && U !== Ir && (k.value = Nc(v, this.options, G, this.speed)), j && j(k.value), et && this.finish(), k;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return /* @__PURE__ */ we(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ we(l);
  }
  get time() {
    return /* @__PURE__ */ we(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ Fe(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    this.updateTime(ye.now());
    const o = this.playbackSpeed !== l;
    this.playbackSpeed = l, o && (this.time = /* @__PURE__ */ we(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = pS, startTime: o } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = o ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ye.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
function NS(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const pa = (i) => i * 180 / Math.PI, tc = (i) => {
  const l = pa(Math.atan2(i[1], i[0]));
  return ec(l);
}, BS = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: tc,
  rotateZ: tc,
  skewX: (i) => pa(Math.atan(i[1])),
  skewY: (i) => pa(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, ec = (i) => (i = i % 360, i < 0 && (i += 360), i), py = tc, gy = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), vy = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), jS = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: gy,
  scaleY: vy,
  scale: (i) => (gy(i) + vy(i)) / 2,
  rotateX: (i) => ec(pa(Math.atan2(i[6], i[5]))),
  rotateY: (i) => ec(pa(Math.atan2(-i[2], i[0]))),
  rotateZ: py,
  rotate: py,
  skewX: (i) => pa(Math.atan(i[4])),
  skewY: (i) => pa(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function nc(i) {
  return i.includes("scale") ? 1 : 0;
}
function ac(i, l) {
  if (!i || i === "none")
    return nc(l);
  const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o)
    r = jS, c = o;
  else {
    const g = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = BS, c = g;
  }
  if (!c)
    return nc(l);
  const d = r[l], h = c[1].split(",").map(HS);
  return typeof d == "function" ? d(h) : h[d];
}
const LS = (i, l) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return ac(o, l);
};
function HS(i) {
  return parseFloat(i.trim());
}
const hi = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], di = new Set(hi), Sy = (i) => i === fi || i === nt, wS = /* @__PURE__ */ new Set(["x", "y", "z"]), YS = hi.filter((i) => !wS.has(i));
function qS(i) {
  const l = [];
  return YS.forEach((o) => {
    const r = i.getValue(o);
    r !== void 0 && (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
  }), l;
}
const ga = {
  // Dimensions
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: o = "0" }) => i.max - i.min - parseFloat(l) - parseFloat(o),
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: o = "0" }) => i.max - i.min - parseFloat(l) - parseFloat(o),
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  // Transform
  x: (i, { transform: l }) => ac(l, "x"),
  y: (i, { transform: l }) => ac(l, "y")
};
ga.translateX = ga.x;
ga.translateY = ga.y;
const va = /* @__PURE__ */ new Set();
let ic = !1, lc = !1, sc = !1;
function Pp() {
  if (lc) {
    const i = Array.from(va).filter((r) => r.needsMeasurement), l = new Set(i.map((r) => r.element)), o = /* @__PURE__ */ new Map();
    l.forEach((r) => {
      const c = qS(r);
      c.length && (o.set(r, c), r.render());
    }), i.forEach((r) => r.measureInitialState()), l.forEach((r) => {
      r.render();
      const c = o.get(r);
      c && c.forEach(([d, h]) => {
        r.getValue(d)?.set(h);
      });
    }), i.forEach((r) => r.measureEndState()), i.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  lc = !1, ic = !1, va.forEach((i) => i.complete(sc)), va.clear();
}
function $p() {
  va.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (lc = !0);
  });
}
function GS() {
  sc = !0, $p(), Pp(), sc = !1;
}
class Lc {
  constructor(l, o, r, c, d, h = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = d, this.isAsync = h;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (va.add(this), ic || (ic = !0, Rt.read($p), Rt.resolveKeyframes(Pp))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const d = c?.get(), h = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (r && o) {
        const g = r.readValue(o, h);
        g != null && (l[0] = g);
      }
      l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]);
    }
    NS(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), va.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (va.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const XS = (i) => i.startsWith("--");
function QS(i, l, o) {
  XS(l) ? i.style.setProperty(l, o) : i.style[l] = o;
}
const ZS = /* @__PURE__ */ Ec(() => window.ScrollTimeline !== void 0), KS = {};
function JS(i, l) {
  const o = /* @__PURE__ */ Ec(i);
  return () => KS[l] ?? o();
}
const Ip = /* @__PURE__ */ JS(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), cl = ([i, l, o, r]) => `cubic-bezier(${i}, ${l}, ${o}, ${r})`, Ty = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cl([0.33, 1.53, 0.69, 0.99])
};
function tg(i, l) {
  if (i)
    return typeof i == "function" ? Ip() ? kp(i, l) : "ease-out" : Hp(i) ? cl(i) : Array.isArray(i) ? i.map((o) => tg(o, l) || Ty.easeOut) : Ty[i];
}
function kS(i, l, o, { delay: r = 0, duration: c = 300, repeat: d = 0, repeatType: h = "loop", ease: g = "easeOut", times: p } = {}, m = void 0) {
  const v = {
    [l]: o
  };
  p && (v.offset = p);
  const T = tg(g, c);
  Array.isArray(T) && (v.easing = T);
  const b = {
    delay: r,
    duration: c,
    easing: Array.isArray(T) ? "linear" : T,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal"
  };
  return m && (b.pseudoElement = m), i.animate(v, b);
}
function eg(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function FS({ type: i, ...l }) {
  return eg(i) && Ip() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class WS extends Bc {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !l)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: d, allowFlatten: h = !1, finalKeyframe: g, onComplete: p } = l;
    this.isPseudoElement = !!d, this.allowFlatten = h, this.options = l, xc(typeof l.type != "string");
    const m = FS(l);
    this.animation = kS(o, r, c, m, d), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = Nc(c, this.options, g, this.speed);
        this.updateMotionValue ? this.updateMotionValue(v) : QS(o, r, v), this.animation.cancel();
      }
      p?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ we(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ we(l);
  }
  get time() {
    return /* @__PURE__ */ we(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Fe(l);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(l) {
    this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, observe: o }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && ZS() ? (this.animation.timeline = l, Ye) : o(this);
  }
}
const ng = {
  anticipate: Np,
  backInOut: Up,
  circInOut: jp
};
function PS(i) {
  return i in ng;
}
function $S(i) {
  typeof i.ease == "string" && PS(i.ease) && (i.ease = ng[i.ease]);
}
const by = 10;
class IS extends WS {
  constructor(l) {
    $S(l), Wp(l), super(l), l.startTime && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: o, onUpdate: r, onComplete: c, element: d, ...h } = this.options;
    if (!o)
      return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const g = new jc({
      ...h,
      autoplay: !1
    }), p = /* @__PURE__ */ Fe(this.finishedTime ?? this.time);
    o.setWithVelocity(g.sample(p - by).value, g.sample(p).value, by), g.stop();
  }
}
const Ay = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Kn.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function tT(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let o = 0; o < i.length; o++)
    if (i[o] !== l)
      return !0;
}
function eT(i, l, o, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = i[i.length - 1], h = Ay(c, l), g = Ay(d, l);
  return !h || !g ? !1 : tT(i) || (o === "spring" || eg(o)) && r;
}
function uc(i) {
  i.duration = 0, i.type = "keyframes";
}
const nT = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), aT = /* @__PURE__ */ Ec(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function iT(i) {
  const { motionValue: l, name: o, repeatDelay: r, repeatType: c, damping: d, type: h } = i;
  if (!(l?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: p, transformTemplate: m } = l.owner.getProps();
  return aT() && o && nT.has(o) && (o !== "transform" || !m) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !r && c !== "mirror" && d !== 0 && h !== "inertia";
}
const lT = 40;
class sT extends Bc {
  constructor({ autoplay: l = !0, delay: o = 0, type: r = "keyframes", repeat: c = 0, repeatDelay: d = 0, repeatType: h = "loop", keyframes: g, name: p, motionValue: m, element: v, ...T }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = ye.now();
    const b = {
      autoplay: l,
      delay: o,
      type: r,
      repeat: c,
      repeatDelay: d,
      repeatType: h,
      name: p,
      motionValue: m,
      element: v,
      ...T
    }, V = v?.KeyframeResolver || Lc;
    this.keyframeResolver = new V(g, (U, j, G) => this.onKeyframesResolved(U, j, b, !G), p, m, v), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: h, velocity: g, delay: p, isHandoff: m, onUpdate: v } = r;
    this.resolvedAt = ye.now(), eT(l, d, h, g) || ((vn.instantAnimations || !p) && v?.(Nc(l, r, o)), l[0] = l[l.length - 1], uc(r), r.repeat = 0);
    const b = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > lT ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: o,
      ...r,
      keyframes: l
    }, V = !m && iT(b) ? new IS({
      ...b,
      element: b.motionValue.owner.current
    }) : new jc(b);
    V.finished.then(() => this.notifyFinished()).catch(Ye), this.pendingTimeline && (this.stopTimeline = V.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = V;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), GS()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const uT = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function oT(i) {
  const l = uT.exec(i);
  if (!l)
    return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function ag(i, l, o = 1) {
  const [r, c] = oT(i);
  if (!r)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const h = d.trim();
    return Mp(h) ? parseFloat(h) : h;
  }
  return Oc(c) ? ag(c, l, o + 1) : c;
}
function Hc(i, l) {
  return i?.[l] ?? i?.default ?? i;
}
const ig = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...hi
]), rT = {
  test: (i) => i === "auto",
  parse: (i) => i
}, lg = (i) => (l) => l.test(i), sg = [fi, nt, We, Qn, tS, I1, rT], xy = (i) => sg.find(lg(i));
function cT(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Cp(i) : !0;
}
const fT = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function hT(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [r] = o.match(Rc) || [];
  if (!r)
    return i;
  const c = o.replace(r, "");
  let d = fT.has(l) ? 1 : 0;
  return r !== o && (d *= 100), l + "(" + d + c + ")";
}
const dT = /\b([a-z-]*)\(.*?\)/gu, oc = {
  ...Kn,
  getAnimatableNone: (i) => {
    const l = i.match(dT);
    return l ? l.map(hT).join(" ") : i;
  }
}, Ey = {
  ...fi,
  transform: Math.round
}, mT = {
  rotate: Qn,
  rotateX: Qn,
  rotateY: Qn,
  rotateZ: Qn,
  scale: Zs,
  scaleX: Zs,
  scaleY: Zs,
  scaleZ: Zs,
  skew: Qn,
  skewX: Qn,
  skewY: Qn,
  distance: nt,
  translateX: nt,
  translateY: nt,
  translateZ: nt,
  x: nt,
  y: nt,
  z: nt,
  perspective: nt,
  transformPerspective: nt,
  opacity: gl,
  originX: fy,
  originY: fy,
  originZ: nt
}, wc = {
  // Border props
  borderWidth: nt,
  borderTopWidth: nt,
  borderRightWidth: nt,
  borderBottomWidth: nt,
  borderLeftWidth: nt,
  borderRadius: nt,
  radius: nt,
  borderTopLeftRadius: nt,
  borderTopRightRadius: nt,
  borderBottomRightRadius: nt,
  borderBottomLeftRadius: nt,
  // Positioning props
  width: nt,
  maxWidth: nt,
  height: nt,
  maxHeight: nt,
  top: nt,
  right: nt,
  bottom: nt,
  left: nt,
  // Spacing props
  padding: nt,
  paddingTop: nt,
  paddingRight: nt,
  paddingBottom: nt,
  paddingLeft: nt,
  margin: nt,
  marginTop: nt,
  marginRight: nt,
  marginBottom: nt,
  marginLeft: nt,
  // Misc
  backgroundPositionX: nt,
  backgroundPositionY: nt,
  ...mT,
  zIndex: Ey,
  // SVG
  fillOpacity: gl,
  strokeOpacity: gl,
  numOctaves: Ey
}, yT = {
  ...wc,
  // Color props
  color: Xt,
  backgroundColor: Xt,
  outlineColor: Xt,
  fill: Xt,
  stroke: Xt,
  // Border props
  borderColor: Xt,
  borderTopColor: Xt,
  borderRightColor: Xt,
  borderBottomColor: Xt,
  borderLeftColor: Xt,
  filter: oc,
  WebkitFilter: oc
}, ug = (i) => yT[i];
function og(i, l) {
  let o = ug(i);
  return o !== oc && (o = Kn), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0;
}
const pT = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function gT(i, l, o) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const d = i[r];
    typeof d == "string" && !pT.has(d) && vl(d).values.length && (c = i[r]), r++;
  }
  if (c && o)
    for (const d of l)
      i[d] = og(o, c);
}
class vT extends Lc {
  constructor(l, o, r, c, d) {
    super(l, o, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let p = 0; p < l.length; p++) {
      let m = l[p];
      if (typeof m == "string" && (m = m.trim(), Oc(m))) {
        const v = ag(m, o.current);
        v !== void 0 && (l[p] = v), p === l.length - 1 && (this.finalKeyframe = m);
      }
    }
    if (this.resolveNoneKeyframes(), !ig.has(r) || l.length !== 2)
      return;
    const [c, d] = l, h = xy(c), g = xy(d);
    if (h !== g)
      if (Sy(h) && Sy(g))
        for (let p = 0; p < l.length; p++) {
          const m = l[p];
          typeof m == "string" && (l[p] = parseFloat(m));
        }
      else ga[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || cT(l[c])) && r.push(c);
    r.length && gT(l, r, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ga[r](l.measureViewportBox(), window.getComputedStyle(l.current)), o[0] = this.measuredOrigin;
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: o, unresolvedKeyframes: r } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const d = r.length - 1, h = r[d];
    r[d] = ga[o](l.measureViewportBox(), window.getComputedStyle(l.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), this.removedTransforms?.length && this.removedTransforms.forEach(([g, p]) => {
      l.getValue(g).set(p);
    }), this.resolveNoneKeyframes();
  }
}
function ST(i, l, o) {
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    let r = document;
    const c = o?.[i] ?? r.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i);
}
const rg = (i, l) => l && typeof i == "number" ? l.transform(i) : i;
function cg(i) {
  return Dp(i) && "offsetHeight" in i;
}
const My = 30, TT = (i) => !isNaN(parseFloat(i));
class bT {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const c = ye.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = o.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = ye.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = TT(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Mc());
    const r = this.events[l].add(o);
    return l === "change" ? () => {
      r(), Rt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, o) {
    this.passiveEffect = l, this.stopPassiveEffect = o;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, o = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = ye.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > My)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, My);
    return zp(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((o) => {
      this.hasAnimated = !0, this.animation = l(o), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ri(i, l) {
  return new bT(i, l);
}
const { schedule: Yc } = /* @__PURE__ */ wp(queueMicrotask, !1), Qe = {
  x: !1,
  y: !1
};
function fg() {
  return Qe.x || Qe.y;
}
function AT(i) {
  return i === "x" || i === "y" ? Qe[i] ? null : (Qe[i] = !0, () => {
    Qe[i] = !1;
  }) : Qe.x || Qe.y ? null : (Qe.x = Qe.y = !0, () => {
    Qe.x = Qe.y = !1;
  });
}
function hg(i, l) {
  const o = ST(i), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  };
  return [o, c, () => r.abort()];
}
function Dy(i) {
  return !(i.pointerType === "touch" || fg());
}
function xT(i, l, o = {}) {
  const [r, c, d] = hg(i, o), h = (g) => {
    if (!Dy(g))
      return;
    const { target: p } = g, m = l(p, g);
    if (typeof m != "function" || !p)
      return;
    const v = (T) => {
      Dy(T) && (m(T), p.removeEventListener("pointerleave", v));
    };
    p.addEventListener("pointerleave", v, c);
  };
  return r.forEach((g) => {
    g.addEventListener("pointerenter", h, c);
  }), d;
}
const dg = (i, l) => l ? i === l ? !0 : dg(i, l.parentElement) : !1, qc = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, ET = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function MT(i) {
  return ET.has(i.tagName) || i.tabIndex !== -1;
}
const Fs = /* @__PURE__ */ new WeakSet();
function Cy(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Lr(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const DT = (i, l) => {
  const o = i.currentTarget;
  if (!o)
    return;
  const r = Cy(() => {
    if (Fs.has(o))
      return;
    Lr(o, "down");
    const c = Cy(() => {
      Lr(o, "up");
    }), d = () => Lr(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", d, l);
  });
  o.addEventListener("keydown", r, l), o.addEventListener("blur", () => o.removeEventListener("keydown", r), l);
};
function zy(i) {
  return qc(i) && !fg();
}
function CT(i, l, o = {}) {
  const [r, c, d] = hg(i, o), h = (g) => {
    const p = g.currentTarget;
    if (!zy(g))
      return;
    Fs.add(p);
    const m = l(p, g), v = (V, U) => {
      window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", b), Fs.has(p) && Fs.delete(p), zy(V) && typeof m == "function" && m(V, { success: U });
    }, T = (V) => {
      v(V, p === window || p === document || o.useGlobalTarget || dg(p, V.target));
    }, b = (V) => {
      v(V, !1);
    };
    window.addEventListener("pointerup", T, c), window.addEventListener("pointercancel", b, c);
  };
  return r.forEach((g) => {
    (o.useGlobalTarget ? window : g).addEventListener("pointerdown", h, c), cg(g) && (g.addEventListener("focus", (m) => DT(m, c)), !MT(g) && !g.hasAttribute("tabindex") && (g.tabIndex = 0));
  }), d;
}
function mg(i) {
  return Dp(i) && "ownerSVGElement" in i;
}
function zT(i) {
  return mg(i) && i.tagName === "svg";
}
const ne = (i) => !!(i && i.getVelocity), OT = [...sg, Xt, Kn], RT = (i) => OT.find(lg(i)), Gc = K.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function Oy(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
function VT(...i) {
  return (l) => {
    let o = !1;
    const r = i.map((c) => {
      const d = Oy(c, l);
      return !o && typeof d == "function" && (o = !0), d;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          typeof d == "function" ? d() : Oy(i[c], null);
        }
      };
  };
}
function _T(...i) {
  return K.useCallback(VT(...i), i);
}
class UT extends K.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.childRef.current;
    if (o && l.isPresent && !this.props.isPresent) {
      const r = o.offsetParent, c = cg(r) && r.offsetWidth || 0, d = this.props.sizeRef.current;
      d.height = o.offsetHeight || 0, d.width = o.offsetWidth || 0, d.top = o.offsetTop, d.left = o.offsetLeft, d.right = c - d.width - d.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function NT({ children: i, isPresent: l, anchorX: o, root: r }) {
  const c = K.useId(), d = K.useRef(null), h = K.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: g } = K.useContext(Gc), p = _T(d, i?.ref);
  return K.useInsertionEffect(() => {
    const { width: m, height: v, top: T, left: b, right: V } = h.current;
    if (l || !d.current || !m || !v)
      return;
    const U = o === "left" ? `left: ${b}` : `right: ${V}`;
    d.current.dataset.motionPopId = c;
    const j = document.createElement("style");
    g && (j.nonce = g);
    const G = r ?? document.head;
    return G.appendChild(j), j.sheet && j.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${v}px !important;
            ${U}px !important;
            top: ${T}px !important;
          }
        `), () => {
      G.contains(j) && G.removeChild(j);
    };
  }, [l]), tt.jsx(UT, { isPresent: l, childRef: d, sizeRef: h, children: K.cloneElement(i, { ref: p }) });
}
const BT = ({ children: i, initial: l, isPresent: o, onExitComplete: r, custom: c, presenceAffectsLayout: d, mode: h, anchorX: g, root: p }) => {
  const m = Sc(jT), v = K.useId();
  let T = !0, b = K.useMemo(() => (T = !1, {
    id: v,
    initial: l,
    isPresent: o,
    custom: c,
    onExitComplete: (V) => {
      m.set(V, !0);
      for (const U of m.values())
        if (!U)
          return;
      r && r();
    },
    register: (V) => (m.set(V, !1), () => m.delete(V))
  }), [o, m, r]);
  return d && T && (b = { ...b }), K.useMemo(() => {
    m.forEach((V, U) => m.set(U, !1));
  }, [o]), K.useEffect(() => {
    !o && !m.size && r && r();
  }, [o]), h === "popLayout" && (i = tt.jsx(NT, { isPresent: o, anchorX: g, root: p, children: i })), tt.jsx(au.Provider, { value: b, children: i });
};
function jT() {
  return /* @__PURE__ */ new Map();
}
function yg(i = !0) {
  const l = K.useContext(au);
  if (l === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l, d = K.useId();
  K.useEffect(() => {
    if (i)
      return c(d);
  }, [i]);
  const h = K.useCallback(() => i && r && r(d), [d, r, i]);
  return !o && r ? [!1, h] : [!0];
}
const Ks = (i) => i.key || "";
function Ry(i) {
  const l = [];
  return K.Children.forEach(i, (o) => {
    K.isValidElement(o) && l.push(o);
  }), l;
}
const Vy = ({ children: i, custom: l, initial: o = !0, onExitComplete: r, presenceAffectsLayout: c = !0, mode: d = "sync", propagate: h = !1, anchorX: g = "left", root: p }) => {
  const [m, v] = yg(h), T = K.useMemo(() => Ry(i), [i]), b = h && !m ? [] : T.map(Ks), V = K.useRef(!0), U = K.useRef(T), j = Sc(() => /* @__PURE__ */ new Map()), [G, H] = K.useState(T), [X, Q] = K.useState(T);
  Ep(() => {
    V.current = !1, U.current = T;
    for (let $ = 0; $ < X.length; $++) {
      const et = Ks(X[$]);
      b.includes(et) ? j.delete(et) : j.get(et) !== !0 && j.set(et, !1);
    }
  }, [X, b.length, b.join("-")]);
  const W = [];
  if (T !== G) {
    let $ = [...T];
    for (let et = 0; et < X.length; et++) {
      const Y = X[et], mt = Ks(Y);
      b.includes(mt) || ($.splice(et, 0, Y), W.push(Y));
    }
    return d === "wait" && W.length && ($ = W), Q(Ry($)), H(T), null;
  }
  const { forceRender: k } = K.useContext(vc);
  return tt.jsx(tt.Fragment, { children: X.map(($) => {
    const et = Ks($), Y = h && !m ? !1 : T === X || b.includes(et), mt = () => {
      if (j.has(et))
        j.set(et, !0);
      else
        return;
      let Dt = !0;
      j.forEach((It) => {
        It || (Dt = !1);
      }), Dt && (k?.(), Q(U.current), h && v?.(), r && r());
    };
    return tt.jsx(BT, { isPresent: Y, initial: !V.current || o ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: d, root: p, onExitComplete: Y ? void 0 : mt, anchorX: g, children: $ }, et);
  }) });
}, pg = K.createContext({ strict: !1 }), _y = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, ci = {};
for (const i in _y)
  ci[i] = {
    isEnabled: (l) => _y[i].some((o) => !!l[o])
  };
function LT(i) {
  for (const l in i)
    ci[l] = {
      ...ci[l],
      ...i[l]
    };
}
const HT = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function eu(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || HT.has(i);
}
let gg = (i) => !eu(i);
function wT(i) {
  typeof i == "function" && (gg = (l) => l.startsWith("on") ? !eu(l) : i(l));
}
try {
  wT(require("@emotion/is-prop-valid").default);
} catch {
}
function YT(i, l, o) {
  const r = {};
  for (const c in i)
    c === "values" && typeof i.values == "object" || (gg(c) || o === !0 && eu(c) || !l && !eu(c) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && c.startsWith("onDrag")) && (r[c] = i[c]);
  return r;
}
const iu = /* @__PURE__ */ K.createContext({});
function lu(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Sl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Xc = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Qc = ["initial", ...Xc];
function su(i) {
  return lu(i.animate) || Qc.some((l) => Sl(i[l]));
}
function vg(i) {
  return !!(su(i) || i.variants);
}
function qT(i, l) {
  if (su(i)) {
    const { initial: o, animate: r } = i;
    return {
      initial: o === !1 || Sl(o) ? o : void 0,
      animate: Sl(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function GT(i) {
  const { initial: l, animate: o } = qT(i, K.useContext(iu));
  return K.useMemo(() => ({ initial: l, animate: o }), [Uy(l), Uy(o)]);
}
function Uy(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Tl = {};
function XT(i) {
  for (const l in i)
    Tl[l] = i[l], zc(l) && (Tl[l].isCSSVariable = !0);
}
function Sg(i, { layout: l, layoutId: o }) {
  return di.has(i) || i.startsWith("origin") || (l || o !== void 0) && (!!Tl[i] || i === "opacity");
}
const QT = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ZT = hi.length;
function KT(i, l, o) {
  let r = "", c = !0;
  for (let d = 0; d < ZT; d++) {
    const h = hi[d], g = i[h];
    if (g === void 0)
      continue;
    let p = !0;
    if (typeof g == "number" ? p = g === (h.startsWith("scale") ? 1 : 0) : p = parseFloat(g) === 0, !p || o) {
      const m = rg(g, wc[h]);
      if (!p) {
        c = !1;
        const v = QT[h] || h;
        r += `${v}(${m}) `;
      }
      o && (l[h] = m);
    }
  }
  return r = r.trim(), o ? r = o(l, c ? "" : r) : c && (r = "none"), r;
}
function Zc(i, l, o) {
  const { style: r, vars: c, transformOrigin: d } = i;
  let h = !1, g = !1;
  for (const p in l) {
    const m = l[p];
    if (di.has(p)) {
      h = !0;
      continue;
    } else if (zc(p)) {
      c[p] = m;
      continue;
    } else {
      const v = rg(m, wc[p]);
      p.startsWith("origin") ? (g = !0, d[p] = v) : r[p] = v;
    }
  }
  if (l.transform || (h || o ? r.transform = KT(l, i.transform, o) : r.transform && (r.transform = "none")), g) {
    const { originX: p = "50%", originY: m = "50%", originZ: v = 0 } = d;
    r.transformOrigin = `${p} ${m} ${v}`;
  }
}
const Kc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Tg(i, l, o) {
  for (const r in l)
    !ne(l[r]) && !Sg(r, o) && (i[r] = l[r]);
}
function JT({ transformTemplate: i }, l) {
  return K.useMemo(() => {
    const o = Kc();
    return Zc(o, l, i), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function kT(i, l) {
  const o = i.style || {}, r = {};
  return Tg(r, o, i), Object.assign(r, JT(i, l)), r;
}
function FT(i, l) {
  const o = {}, r = kT(i, l);
  return i.drag && i.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const WT = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, PT = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function $T(i, l, o = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? WT : PT;
  i[d.offset] = nt.transform(-r);
  const h = nt.transform(l), g = nt.transform(o);
  i[d.array] = `${h} ${g}`;
}
function bg(i, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: h = 0,
  // This is object creation, which we try to avoid per-frame.
  ...g
}, p, m, v) {
  if (Zc(i, g, m), p) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: T, style: b } = i;
  T.transform && (b.transform = T.transform, delete T.transform), (b.transform || T.transformOrigin) && (b.transformOrigin = T.transformOrigin ?? "50% 50%", delete T.transformOrigin), b.transform && (b.transformBox = v?.transformBox ?? "fill-box", delete T.transformBox), l !== void 0 && (T.x = l), o !== void 0 && (T.y = o), r !== void 0 && (T.scale = r), c !== void 0 && $T(T, c, d, h, !1);
}
const Ag = () => ({
  ...Kc(),
  attrs: {}
}), xg = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function IT(i, l, o, r) {
  const c = K.useMemo(() => {
    const d = Ag();
    return bg(d, l, xg(r), i.transformTemplate, i.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (i.style) {
    const d = {};
    Tg(d, i.style, i), c.style = { ...d, ...c.style };
  }
  return c;
}
const tb = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Jc(i) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof i != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    i.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(tb.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function eb(i, l, o, { latestValues: r }, c, d = !1) {
  const g = (Jc(i) ? IT : FT)(l, r, c, i), p = YT(l, typeof i == "string", d), m = i !== K.Fragment ? { ...p, ...g, ref: o } : {}, { children: v } = l, T = K.useMemo(() => ne(v) ? v.get() : v, [v]);
  return K.createElement(i, {
    ...m,
    children: T
  });
}
function Ny(i) {
  const l = [{}, {}];
  return i?.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity();
  }), l;
}
function kc(i, l, o, r) {
  if (typeof l == "function") {
    const [c, d] = Ny(r);
    l = l(o !== void 0 ? o : i.custom, c, d);
  }
  if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") {
    const [c, d] = Ny(r);
    l = l(o !== void 0 ? o : i.custom, c, d);
  }
  return l;
}
function Ws(i) {
  return ne(i) ? i.get() : i;
}
function nb({ scrapeMotionValuesFromProps: i, createRenderState: l }, o, r, c) {
  return {
    latestValues: ab(o, r, c, i),
    renderState: l()
  };
}
function ab(i, l, o, r) {
  const c = {}, d = r(i, {});
  for (const b in d)
    c[b] = Ws(d[b]);
  let { initial: h, animate: g } = i;
  const p = su(i), m = vg(i);
  l && m && !p && i.inherit !== !1 && (h === void 0 && (h = l.initial), g === void 0 && (g = l.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || h === !1;
  const T = v ? g : h;
  if (T && typeof T != "boolean" && !lu(T)) {
    const b = Array.isArray(T) ? T : [T];
    for (let V = 0; V < b.length; V++) {
      const U = kc(i, b[V]);
      if (U) {
        const { transitionEnd: j, transition: G, ...H } = U;
        for (const X in H) {
          let Q = H[X];
          if (Array.isArray(Q)) {
            const W = v ? Q.length - 1 : 0;
            Q = Q[W];
          }
          Q !== null && (c[X] = Q);
        }
        for (const X in j)
          c[X] = j[X];
      }
    }
  }
  return c;
}
const Eg = (i) => (l, o) => {
  const r = K.useContext(iu), c = K.useContext(au), d = () => nb(i, l, r, c);
  return o ? d() : Sc(d);
};
function Fc(i, l, o) {
  const { style: r } = i, c = {};
  for (const d in r)
    (ne(r[d]) || l.style && ne(l.style[d]) || Sg(d, i) || o?.getValue(d)?.liveStyle !== void 0) && (c[d] = r[d]);
  return c;
}
const ib = /* @__PURE__ */ Eg({
  scrapeMotionValuesFromProps: Fc,
  createRenderState: Kc
});
function Mg(i, l, o) {
  const r = Fc(i, l, o);
  for (const c in i)
    if (ne(i[c]) || ne(l[c])) {
      const d = hi.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[d] = i[c];
    }
  return r;
}
const lb = /* @__PURE__ */ Eg({
  scrapeMotionValuesFromProps: Mg,
  createRenderState: Ag
}), sb = Symbol.for("motionComponentSymbol");
function ii(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function ub(i, l, o) {
  return K.useCallback(
    (r) => {
      r && i.onMount && i.onMount(r), l && (r ? l.mount(r) : l.unmount()), o && (typeof o == "function" ? o(r) : ii(o) && (o.current = r));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [l]
  );
}
const Wc = (i) => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), ob = "framerAppearId", Dg = "data-" + Wc(ob), Cg = K.createContext({});
function rb(i, l, o, r, c) {
  const { visualElement: d } = K.useContext(iu), h = K.useContext(pg), g = K.useContext(au), p = K.useContext(Gc).reducedMotion, m = K.useRef(null);
  r = r || h.renderer, !m.current && r && (m.current = r(i, {
    visualState: l,
    parent: d,
    props: o,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const v = m.current, T = K.useContext(Cg);
  v && !v.projection && c && (v.type === "html" || v.type === "svg") && cb(m.current, o, c, T);
  const b = K.useRef(!1);
  K.useInsertionEffect(() => {
    v && b.current && v.update(o, g);
  });
  const V = o[Dg], U = K.useRef(!!V && !window.MotionHandoffIsComplete?.(V) && window.MotionHasOptimisedAnimation?.(V));
  return Ep(() => {
    v && (b.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), U.current && v.animationState && v.animationState.animateChanges());
  }), K.useEffect(() => {
    v && (!U.current && v.animationState && v.animationState.animateChanges(), U.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(V);
    }), U.current = !1), v.enteringChildren = void 0);
  }), v;
}
function cb(i, l, o, r) {
  const { layoutId: c, layout: d, drag: h, dragConstraints: g, layoutScroll: p, layoutRoot: m, layoutCrossfade: v } = l;
  i.projection = new o(i.latestValues, l["data-framer-portal-id"] ? void 0 : zg(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: d,
    alwaysMeasureLayout: !!h || g && ii(g),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: r,
    crossfade: v,
    layoutScroll: p,
    layoutRoot: m
  });
}
function zg(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : zg(i.parent);
}
function Hr(i, { forwardMotionProps: l = !1 } = {}, o, r) {
  o && LT(o);
  const c = Jc(i) ? lb : ib;
  function d(g, p) {
    let m;
    const v = {
      ...K.useContext(Gc),
      ...g,
      layoutId: fb(g)
    }, { isStatic: T } = v, b = GT(g), V = c(g, T);
    if (!T && Tc) {
      hb();
      const U = db(v);
      m = U.MeasureLayout, b.visualElement = rb(i, V, v, r, U.ProjectionNode);
    }
    return tt.jsxs(iu.Provider, { value: b, children: [m && b.visualElement ? tt.jsx(m, { visualElement: b.visualElement, ...v }) : null, eb(i, g, ub(V, b.visualElement, p), V, T, l)] });
  }
  d.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const h = K.forwardRef(d);
  return h[sb] = i, h;
}
function fb({ layoutId: i }) {
  const l = K.useContext(vc).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function hb(i, l) {
  K.useContext(pg).strict;
}
function db(i) {
  const { drag: l, layout: o } = ci;
  if (!l && !o)
    return {};
  const r = { ...l, ...o };
  return {
    MeasureLayout: l?.isEnabled(i) || o?.isEnabled(i) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function mb(i, l) {
  if (typeof Proxy > "u")
    return Hr;
  const o = /* @__PURE__ */ new Map(), r = (d, h) => Hr(d, h, i, l), c = (d, h) => r(d, h);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, h) => h === "create" ? r : (o.has(h) || o.set(h, Hr(h, void 0, i, l)), o.get(h))
  });
}
function Og({ top: i, left: l, right: o, bottom: r }) {
  return {
    x: { min: l, max: o },
    y: { min: i, max: r }
  };
}
function yb({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function pb(i, l) {
  if (!l)
    return i;
  const o = l({ x: i.left, y: i.top }), r = l({ x: i.right, y: i.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  };
}
function wr(i) {
  return i === void 0 || i === 1;
}
function rc({ scale: i, scaleX: l, scaleY: o }) {
  return !wr(i) || !wr(l) || !wr(o);
}
function ma(i) {
  return rc(i) || Rg(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function Rg(i) {
  return By(i.x) || By(i.y);
}
function By(i) {
  return i && i !== "0%";
}
function nu(i, l, o) {
  const r = i - o, c = l * r;
  return o + c;
}
function jy(i, l, o, r, c) {
  return c !== void 0 && (i = nu(i, c, r)), nu(i, o, r) + l;
}
function cc(i, l = 0, o = 1, r, c) {
  i.min = jy(i.min, l, o, r, c), i.max = jy(i.max, l, o, r, c);
}
function Vg(i, { x: l, y: o }) {
  cc(i.x, l.translate, l.scale, l.originPoint), cc(i.y, o.translate, o.scale, o.originPoint);
}
const Ly = 0.999999999999, Hy = 1.0000000000001;
function gb(i, l, o, r = !1) {
  const c = o.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, h;
  for (let g = 0; g < c; g++) {
    d = o[g], h = d.projectionDelta;
    const { visualElement: p } = d.options;
    p && p.props.style && p.props.style.display === "contents" || (r && d.options.layoutScroll && d.scroll && d !== d.root && si(i, {
      x: -d.scroll.offset.x,
      y: -d.scroll.offset.y
    }), h && (l.x *= h.x.scale, l.y *= h.y.scale, Vg(i, h)), r && ma(d.latestValues) && si(i, d.latestValues));
  }
  l.x < Hy && l.x > Ly && (l.x = 1), l.y < Hy && l.y > Ly && (l.y = 1);
}
function li(i, l) {
  i.min = i.min + l, i.max = i.max + l;
}
function wy(i, l, o, r, c = 0.5) {
  const d = Vt(i.min, i.max, c);
  cc(i, l, o, d, r);
}
function si(i, l) {
  wy(i.x, l.x, l.scaleX, l.scale, l.originX), wy(i.y, l.y, l.scaleY, l.scale, l.originY);
}
function _g(i, l) {
  return Og(pb(i.getBoundingClientRect(), l));
}
function vb(i, l, o) {
  const r = _g(i, o), { scroll: c } = l;
  return c && (li(r.x, c.offset.x), li(r.y, c.offset.y)), r;
}
const Yy = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ui = () => ({
  x: Yy(),
  y: Yy()
}), qy = () => ({ min: 0, max: 0 }), Ht = () => ({
  x: qy(),
  y: qy()
}), fc = { current: null }, Ug = { current: !1 };
function Sb() {
  if (Ug.current = !0, !!Tc)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => fc.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      fc.current = !1;
}
const Tb = /* @__PURE__ */ new WeakMap();
function bb(i, l, o) {
  for (const r in l) {
    const c = l[r], d = o[r];
    if (ne(c))
      i.addValue(r, c);
    else if (ne(d))
      i.addValue(r, ri(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(r)) {
        const h = i.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = i.getStaticValue(r);
        i.addValue(r, ri(h !== void 0 ? h : c, { owner: i }));
      }
  }
  for (const r in o)
    l[r] === void 0 && i.removeValue(r);
  return l;
}
const Gy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Ab {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor({ parent: l, props: o, presenceContext: r, reducedMotionConfig: c, blockInitialAnimation: d, visualState: h }, g = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Lc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const b = ye.now();
      this.renderScheduledAt < b && (this.renderScheduledAt = b, Rt.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: m } = h;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = o.initial ? { ...p } : {}, this.renderState = m, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.options = g, this.blockInitialAnimation = !!d, this.isControllingVariants = su(o), this.isVariantNode = vg(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: v, ...T } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const b in T) {
      const V = T[b];
      p[b] !== void 0 && ne(V) && V.set(p[b]);
    }
  }
  mount(l) {
    this.current = l, Tb.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, r) => this.bindToMotionValue(r, o)), Ug.current || Sb(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : fc.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Zn(this.notifyUpdate), Zn(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, o) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = di.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (h) => {
      this.latestValues[l] = h, this.props.onUpdate && Rt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let d;
    window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, o)), this.valueSubscriptions.set(l, () => {
      c(), d && d(), o.owner && o.stop();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in ci) {
      const o = ci[l];
      if (!o)
        continue;
      const { isEnabled: r, Feature: c } = o;
      if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), d.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ht();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, o) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let r = 0; r < Gy.length; r++) {
      const c = Gy[r];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c, h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    this.prevMotionValues = bb(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return o.variantChildren && o.variantChildren.add(l), () => o.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r && (r && this.removeValue(l), this.bindToMotionValue(l, o), this.values.set(l, o), this.latestValues[l] = o.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    o && (o(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let r = this.values.get(l);
    return r === void 0 && o !== void 0 && (r = ri(o === null ? void 0 : o, { owner: this }), this.addValue(l, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, o) {
    let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return r != null && (typeof r == "string" && (Mp(r) || Cp(r)) ? r = parseFloat(r) : !RT(r) && Kn.test(o) && (r = og(l, o)), this.setBaseTarget(l, ne(r) ? r.get() : r)), ne(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const d = kc(this.props, o, this.presenceContext?.custom);
      d && (r = d[l]);
    }
    if (o && r !== void 0)
      return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ne(c) ? c : this.initialValues[l] !== void 0 && r === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, o) {
    return this.events[l] || (this.events[l] = new Mc()), this.events[l].add(o);
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    Yc.render(this.render);
  }
}
class Ng extends Ab {
  constructor() {
    super(...arguments), this.KeyframeResolver = vT;
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    return l.style ? l.style[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    delete o[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ne(l) && (this.childSubscription = l.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
function Bg(i, { style: l, vars: o }, r, c) {
  const d = i.style;
  let h;
  for (h in l)
    d[h] = l[h];
  c?.applyProjectionStyles(d, r);
  for (h in o)
    d.setProperty(h, o[h]);
}
function xb(i) {
  return window.getComputedStyle(i);
}
class Eb extends Ng {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Bg;
  }
  readValueFromInstance(l, o) {
    if (di.has(o))
      return this.projection?.isProjecting ? nc(o) : LS(l, o);
    {
      const r = xb(l), c = (zc(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return _g(l, o);
  }
  build(l, o, r) {
    Zc(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Fc(l, o, r);
  }
}
const jg = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Mb(i, l, o, r) {
  Bg(i, l, void 0, r);
  for (const c in l.attrs)
    i.setAttribute(jg.has(c) ? c : Wc(c), l.attrs[c]);
}
class Db extends Ng {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ht;
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (di.has(o)) {
      const r = ug(o);
      return r && r.default || 0;
    }
    return o = jg.has(o) ? o : Wc(o), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Mg(l, o, r);
  }
  build(l, o, r) {
    bg(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    Mb(l, o, r, c);
  }
  mount(l) {
    this.isSVGTag = xg(l.tagName), super.mount(l);
  }
}
const Cb = (i, l) => Jc(i) ? new Db(l) : new Eb(l, {
  allowProjection: i !== K.Fragment
});
function oi(i, l, o) {
  const r = i.getProps();
  return kc(r, l, o !== void 0 ? o : r.custom, i);
}
const hc = (i) => Array.isArray(i);
function zb(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, ri(o));
}
function Ob(i) {
  return hc(i) ? i[i.length - 1] || 0 : i;
}
function Rb(i, l) {
  const o = oi(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...r };
  for (const h in d) {
    const g = Ob(d[h]);
    zb(i, h, g);
  }
}
function Vb(i) {
  return !!(ne(i) && i.add);
}
function dc(i, l) {
  const o = i.getValue("willChange");
  if (Vb(o))
    return o.add(l);
  if (!o && vn.WillChange) {
    const r = new vn.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
function Lg(i) {
  return i.props[Dg];
}
const _b = (i) => i !== null;
function Ub(i, { repeat: l, repeatType: o = "loop" }, r) {
  const c = i.filter(_b), d = l && o !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
const Nb = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Bb = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), jb = {
  type: "keyframes",
  duration: 0.8
}, Lb = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Hb = (i, { keyframes: l }) => l.length > 2 ? jb : di.has(i) ? i.startsWith("scale") ? Bb(l[1]) : Nb : Lb;
function wb({ when: i, delay: l, delayChildren: o, staggerChildren: r, staggerDirection: c, repeat: d, repeatType: h, repeatDelay: g, from: p, elapsed: m, ...v }) {
  return !!Object.keys(v).length;
}
const Pc = (i, l, o, r = {}, c, d) => (h) => {
  const g = Hc(r, i) || {}, p = g.delay || r.delay || 0;
  let { elapsed: m = 0 } = r;
  m = m - /* @__PURE__ */ Fe(p);
  const v = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...g,
    delay: -m,
    onUpdate: (b) => {
      l.set(b), g.onUpdate && g.onUpdate(b);
    },
    onComplete: () => {
      h(), g.onComplete && g.onComplete();
    },
    name: i,
    motionValue: l,
    element: d ? void 0 : c
  };
  wb(g) || Object.assign(v, Hb(i, v)), v.duration && (v.duration = /* @__PURE__ */ Fe(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ Fe(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let T = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (uc(v), v.delay === 0 && (T = !0)), (vn.instantAnimations || vn.skipAnimations) && (T = !0, uc(v), v.delay = 0), v.allowFlatten = !g.type && !g.ease, T && !d && l.get() !== void 0) {
    const b = Ub(v.keyframes, g);
    if (b !== void 0) {
      Rt.update(() => {
        v.onUpdate(b), v.onComplete();
      });
      return;
    }
  }
  return g.isSync ? new jc(v) : new sT(v);
};
function Yb({ protectedKeys: i, needsAnimating: l }, o) {
  const r = i.hasOwnProperty(o) && l[o] !== !0;
  return l[o] = !1, r;
}
function Hg(i, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: d = i.getDefaultTransition(), transitionEnd: h, ...g } = l;
  r && (d = r);
  const p = [], m = c && i.animationState && i.animationState.getState()[c];
  for (const v in g) {
    const T = i.getValue(v, i.latestValues[v] ?? null), b = g[v];
    if (b === void 0 || m && Yb(m, v))
      continue;
    const V = {
      delay: o,
      ...Hc(d || {}, v)
    }, U = T.get();
    if (U !== void 0 && !T.isAnimating && !Array.isArray(b) && b === U && !V.velocity)
      continue;
    let j = !1;
    if (window.MotionHandoffAnimation) {
      const H = Lg(i);
      if (H) {
        const X = window.MotionHandoffAnimation(H, v, Rt);
        X !== null && (V.startTime = X, j = !0);
      }
    }
    dc(i, v), T.start(Pc(v, T, b, i.shouldReduceMotion && ig.has(v) ? { type: !1 } : V, i, j));
    const G = T.animation;
    G && p.push(G);
  }
  return h && Promise.all(p).then(() => {
    Rt.update(() => {
      h && Rb(i, h);
    });
  }), p;
}
function wg(i, l, o, r = 0, c = 1) {
  const d = Array.from(i).sort((m, v) => m.sortNodePosition(v)).indexOf(l), h = i.size, g = (h - 1) * r;
  return typeof o == "function" ? o(d, h) : c === 1 ? d * r : g - d * r;
}
function mc(i, l, o = {}) {
  const r = oi(i, l, o.type === "exit" ? i.presenceContext?.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const d = r ? () => Promise.all(Hg(i, r, o)) : () => Promise.resolve(), h = i.variantChildren && i.variantChildren.size ? (p = 0) => {
    const { delayChildren: m = 0, staggerChildren: v, staggerDirection: T } = c;
    return qb(i, l, p, m, v, T, o);
  } : () => Promise.resolve(), { when: g } = c;
  if (g) {
    const [p, m] = g === "beforeChildren" ? [d, h] : [h, d];
    return p().then(() => m());
  } else
    return Promise.all([d(), h(o.delay)]);
}
function qb(i, l, o = 0, r = 0, c = 0, d = 1, h) {
  const g = [];
  for (const p of i.variantChildren)
    p.notify("AnimationStart", l), g.push(mc(p, l, {
      ...h,
      delay: o + (typeof r == "function" ? 0 : r) + wg(i.variantChildren, p, r, c, d)
    }).then(() => p.notify("AnimationComplete", l)));
  return Promise.all(g);
}
function Gb(i, l, o = {}) {
  i.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => mc(i, d, o));
    r = Promise.all(c);
  } else if (typeof l == "string")
    r = mc(i, l, o);
  else {
    const c = typeof l == "function" ? oi(i, l, o.custom) : l;
    r = Promise.all(Hg(i, c, o));
  }
  return r.then(() => {
    i.notify("AnimationComplete", l);
  });
}
function Yg(i, l) {
  if (!Array.isArray(l))
    return !1;
  const o = l.length;
  if (o !== i.length)
    return !1;
  for (let r = 0; r < o; r++)
    if (l[r] !== i[r])
      return !1;
  return !0;
}
const Xb = Qc.length;
function qg(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const o = i.parent ? qg(i.parent) || {} : {};
    return i.props.initial !== void 0 && (o.initial = i.props.initial), o;
  }
  const l = {};
  for (let o = 0; o < Xb; o++) {
    const r = Qc[o], c = i.props[r];
    (Sl(c) || c === !1) && (l[r] = c);
  }
  return l;
}
const Qb = [...Xc].reverse(), Zb = Xc.length;
function Kb(i) {
  return (l) => Promise.all(l.map(({ animation: o, options: r }) => Gb(i, o, r)));
}
function Jb(i) {
  let l = Kb(i), o = Xy(), r = !0;
  const c = (p) => (m, v) => {
    const T = oi(i, v, p === "exit" ? i.presenceContext?.custom : void 0);
    if (T) {
      const { transition: b, transitionEnd: V, ...U } = T;
      m = { ...m, ...U, ...V };
    }
    return m;
  };
  function d(p) {
    l = p(i);
  }
  function h(p) {
    const { props: m } = i, v = qg(i.parent) || {}, T = [], b = /* @__PURE__ */ new Set();
    let V = {}, U = 1 / 0;
    for (let G = 0; G < Zb; G++) {
      const H = Qb[G], X = o[H], Q = m[H] !== void 0 ? m[H] : v[H], W = Sl(Q), k = H === p ? X.isActive : null;
      k === !1 && (U = G);
      let $ = Q === v[H] && Q !== m[H] && W;
      if ($ && r && i.manuallyAnimateOnMount && ($ = !1), X.protectedKeys = { ...V }, // If it isn't active and hasn't *just* been set as inactive
      !X.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !Q && !X.prevProp || // Or if the prop doesn't define an animation
      lu(Q) || typeof Q == "boolean")
        continue;
      const et = kb(X.prevProp, Q);
      let Y = et || // If we're making this variant active, we want to always make it active
      H === p && X.isActive && !$ && W || // If we removed a higher-priority variant (i is in reverse order)
      G > U && W, mt = !1;
      const Dt = Array.isArray(Q) ? Q : [Q];
      let It = Dt.reduce(c(H), {});
      k === !1 && (It = {});
      const { prevResolvedValues: te = {} } = X, De = {
        ...te,
        ...It
      }, Pe = (N) => {
        Y = !0, b.has(N) && (mt = !0, b.delete(N)), X.needsAnimating[N] = !0;
        const L = i.getValue(N);
        L && (L.liveStyle = !1);
      };
      for (const N in De) {
        const L = It[N], st = te[N];
        if (V.hasOwnProperty(N))
          continue;
        let yt = !1;
        hc(L) && hc(st) ? yt = !Yg(L, st) : yt = L !== st, yt ? L != null ? Pe(N) : b.add(N) : L !== void 0 && b.has(N) ? Pe(N) : X.protectedKeys[N] = !0;
      }
      X.prevProp = Q, X.prevResolvedValues = It, X.isActive && (V = { ...V, ...It }), r && i.blockInitialAnimation && (Y = !1);
      const ue = $ && et;
      Y && (!ue || mt) && T.push(...Dt.map((N) => {
        const L = { type: H };
        if (typeof N == "string" && r && !ue && i.manuallyAnimateOnMount && i.parent) {
          const { parent: st } = i, yt = oi(st, N);
          if (st.enteringChildren && yt) {
            const { delayChildren: ae } = yt.transition || {};
            L.delay = wg(st.enteringChildren, i, ae);
          }
        }
        return {
          animation: N,
          options: L
        };
      }));
    }
    if (b.size) {
      const G = {};
      if (typeof m.initial != "boolean") {
        const H = oi(i, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        H && H.transition && (G.transition = H.transition);
      }
      b.forEach((H) => {
        const X = i.getBaseTarget(H), Q = i.getValue(H);
        Q && (Q.liveStyle = !0), G[H] = X ?? null;
      }), T.push({ animation: G });
    }
    let j = !!T.length;
    return r && (m.initial === !1 || m.initial === m.animate) && !i.manuallyAnimateOnMount && (j = !1), r = !1, j ? l(T) : Promise.resolve();
  }
  function g(p, m) {
    if (o[p].isActive === m)
      return Promise.resolve();
    i.variantChildren?.forEach((T) => T.animationState?.setActive(p, m)), o[p].isActive = m;
    const v = h(p);
    for (const T in o)
      o[T].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: g,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      o = Xy();
    }
  };
}
function kb(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !Yg(l, i) : !1;
}
function da(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Xy() {
  return {
    animate: da(!0),
    whileInView: da(),
    whileHover: da(),
    whileTap: da(),
    whileDrag: da(),
    whileFocus: da(),
    exit: da()
  };
}
class Jn {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
class Fb extends Jn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = Jb(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    lu(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Wb = 0;
class Pb extends Jn {
  constructor() {
    super(...arguments), this.id = Wb++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r)
      return;
    const c = this.node.animationState.setActive("exit", !l);
    o && !l && c.then(() => {
      o(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const $b = {
  animation: {
    Feature: Fb
  },
  exit: {
    Feature: Pb
  }
};
function bl(i, l, o, r = { passive: !0 }) {
  return i.addEventListener(l, o, r), () => i.removeEventListener(l, o);
}
function Ml(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const Ib = (i) => (l) => qc(l) && i(l, Ml(l));
function dl(i, l, o, r) {
  return bl(i, l, Ib(o), r);
}
const Gg = 1e-4, tA = 1 - Gg, eA = 1 + Gg, Xg = 0.01, nA = 0 - Xg, aA = 0 + Xg;
function se(i) {
  return i.max - i.min;
}
function iA(i, l, o) {
  return Math.abs(i - l) <= o;
}
function Qy(i, l, o, r = 0.5) {
  i.origin = r, i.originPoint = Vt(l.min, l.max, i.origin), i.scale = se(o) / se(l), i.translate = Vt(o.min, o.max, i.origin) - i.originPoint, (i.scale >= tA && i.scale <= eA || isNaN(i.scale)) && (i.scale = 1), (i.translate >= nA && i.translate <= aA || isNaN(i.translate)) && (i.translate = 0);
}
function ml(i, l, o, r) {
  Qy(i.x, l.x, o.x, r ? r.originX : void 0), Qy(i.y, l.y, o.y, r ? r.originY : void 0);
}
function Zy(i, l, o) {
  i.min = o.min + l.min, i.max = i.min + se(l);
}
function lA(i, l, o) {
  Zy(i.x, l.x, o.x), Zy(i.y, l.y, o.y);
}
function Ky(i, l, o) {
  i.min = l.min - o.min, i.max = i.min + se(l);
}
function yl(i, l, o) {
  Ky(i.x, l.x, o.x), Ky(i.y, l.y, o.y);
}
function He(i) {
  return [i("x"), i("y")];
}
const Qg = ({ current: i }) => i ? i.ownerDocument.defaultView : null, Jy = (i, l) => Math.abs(i - l);
function sA(i, l) {
  const o = Jy(i.x, l.x), r = Jy(i.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
class Zg {
  constructor(l, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: h = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = qr(this.lastMoveEventInfo, this.history), V = this.startEvent !== null, U = sA(b.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!V && !U)
        return;
      const { point: j } = b, { timestamp: G } = $t;
      this.history.push({ ...j, timestamp: G });
      const { onStart: H, onMove: X } = this.handlers;
      V || (H && H(this.lastMoveEvent, b), this.startEvent = this.lastMoveEvent), X && X(this.lastMoveEvent, b);
    }, this.handlePointerMove = (b, V) => {
      this.lastMoveEvent = b, this.lastMoveEventInfo = Yr(V, this.transformPagePoint), Rt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (b, V) => {
      this.end();
      const { onEnd: U, onSessionEnd: j, resumeAnimation: G } = this.handlers;
      if (this.dragSnapToOrigin && G && G(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const H = qr(b.type === "pointercancel" ? this.lastMoveEventInfo : Yr(V, this.transformPagePoint), this.history);
      this.startEvent && U && U(b, H), j && j(b, H);
    }, !qc(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = h, this.contextWindow = c || window;
    const g = Ml(l), p = Yr(g, this.transformPagePoint), { point: m } = p, { timestamp: v } = $t;
    this.history = [{ ...m, timestamp: v }];
    const { onSessionStart: T } = o;
    T && T(l, qr(p, this.history)), this.removeListeners = Al(dl(this.contextWindow, "pointermove", this.handlePointerMove), dl(this.contextWindow, "pointerup", this.handlePointerUp), dl(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), Zn(this.updatePoint);
  }
}
function Yr(i, l) {
  return l ? { point: l(i.point) } : i;
}
function ky(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function qr({ point: i }, l) {
  return {
    point: i,
    delta: ky(i, Kg(l)),
    offset: ky(i, uA(l)),
    velocity: oA(l, 0.1)
  };
}
function uA(i) {
  return i[0];
}
function Kg(i) {
  return i[i.length - 1];
}
function oA(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let o = i.length - 1, r = null;
  const c = Kg(i);
  for (; o >= 0 && (r = i[o], !(c.timestamp - r.timestamp > /* @__PURE__ */ Fe(l))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  const d = /* @__PURE__ */ we(c.timestamp - r.timestamp);
  if (d === 0)
    return { x: 0, y: 0 };
  const h = {
    x: (c.x - r.x) / d,
    y: (c.y - r.y) / d
  };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function rA(i, { min: l, max: o }, r) {
  return l !== void 0 && i < l ? i = r ? Vt(l, i, r.min) : Math.max(i, l) : o !== void 0 && i > o && (i = r ? Vt(o, i, r.max) : Math.min(i, o)), i;
}
function Fy(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
  };
}
function cA(i, { top: l, left: o, bottom: r, right: c }) {
  return {
    x: Fy(i.x, o, c),
    y: Fy(i.y, l, r)
  };
}
function Wy(i, l) {
  let o = l.min - i.min, r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([o, r] = [r, o]), { min: o, max: r };
}
function fA(i, l) {
  return {
    x: Wy(i.x, l.x),
    y: Wy(i.y, l.y)
  };
}
function hA(i, l) {
  let o = 0.5;
  const r = se(i), c = se(l);
  return c > r ? o = /* @__PURE__ */ pl(l.min, l.max - r, i.min) : r > c && (o = /* @__PURE__ */ pl(i.min, i.max - c, l.min)), gn(0, 1, o);
}
function dA(i, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - i.min), l.max !== void 0 && (o.max = l.max - i.min), o;
}
const yc = 0.35;
function mA(i = yc) {
  return i === !1 ? i = 0 : i === !0 && (i = yc), {
    x: Py(i, "left", "right"),
    y: Py(i, "top", "bottom")
  };
}
function Py(i, l, o) {
  return {
    min: $y(i, l),
    max: $y(i, o)
  };
}
function $y(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const yA = /* @__PURE__ */ new WeakMap();
class pA {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ht(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (T) => {
      const { dragSnapToOrigin: b } = this.getProps();
      b ? this.pauseAnimation() : this.stopAnimation(), o && this.snapToCursor(Ml(T).point);
    }, h = (T, b) => {
      const { drag: V, dragPropagation: U, onDragStart: j } = this.getProps();
      if (V && !U && (this.openDragLock && this.openDragLock(), this.openDragLock = AT(V), !this.openDragLock))
        return;
      this.latestPointerEvent = T, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), He((H) => {
        let X = this.getAxisMotionValue(H).get() || 0;
        if (We.test(X)) {
          const { projection: Q } = this.visualElement;
          if (Q && Q.layout) {
            const W = Q.layout.layoutBox[H];
            W && (X = se(W) * (parseFloat(X) / 100));
          }
        }
        this.originPoint[H] = X;
      }), j && Rt.postRender(() => j(T, b)), dc(this.visualElement, "transform");
      const { animationState: G } = this.visualElement;
      G && G.setActive("whileDrag", !0);
    }, g = (T, b) => {
      this.latestPointerEvent = T, this.latestPanInfo = b;
      const { dragPropagation: V, dragDirectionLock: U, onDirectionLock: j, onDrag: G } = this.getProps();
      if (!V && !this.openDragLock)
        return;
      const { offset: H } = b;
      if (U && this.currentDirection === null) {
        this.currentDirection = gA(H), this.currentDirection !== null && j && j(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, H), this.updateAxis("y", b.point, H), this.visualElement.render(), G && G(T, b);
    }, p = (T, b) => {
      this.latestPointerEvent = T, this.latestPanInfo = b, this.stop(T, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, m = () => He((T) => this.getAnimationState(T) === "paused" && this.getAxisMotionValue(T).animation?.play()), { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new Zg(l, {
      onSessionStart: d,
      onStart: h,
      onMove: g,
      onSessionEnd: p,
      resumeAnimation: m
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: r,
      contextWindow: Qg(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(l, o) {
    const r = l || this.latestPointerEvent, c = o || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !c || !r)
      return;
    const { velocity: h } = c;
    this.startAnimation(h);
    const { onDragEnd: g } = this.getProps();
    g && Rt.postRender(() => g(r, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1);
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !Js(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + r[l];
    this.constraints && this.constraints[l] && (h = rA(h, this.constraints[l], this.elastic[l])), d.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && ii(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = cA(r.layoutBox, l) : this.constraints = !1, this.elastic = mA(o), c !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && He((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = dA(r.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !ii(l))
      return !1;
    const r = l.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    const d = vb(r, c.root, this.visualElement.getTransformPagePoint());
    let h = fA(c.layout.layoutBox, d);
    if (o) {
      const g = o(yb(h));
      this.hasMutatedConstraints = !!g, g && (h = Og(g));
    }
    return h;
  }
  startAnimation(l) {
    const { drag: o, dragMomentum: r, dragElastic: c, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: g } = this.getProps(), p = this.constraints || {}, m = He((v) => {
      if (!Js(v, o, this.currentDirection))
        return;
      let T = p && p[v] || {};
      h && (T = { min: 0, max: 0 });
      const b = c ? 200 : 1e6, V = c ? 40 : 1e7, U = {
        type: "inertia",
        velocity: r ? l[v] : 0,
        bounceStiffness: b,
        bounceDamping: V,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...T
      };
      return this.startAxisValueAnimation(v, U);
    });
    return Promise.all(m).then(g);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return dc(this.visualElement, l), r.start(Pc(l, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    He((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    He((l) => this.getAxisMotionValue(l).animation?.pause());
  }
  getAnimationState(l) {
    return this.getAxisMotionValue(l).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`, r = this.visualElement.getProps(), c = r[o];
    return c || this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0);
  }
  snapToCursor(l) {
    He((o) => {
      const { drag: r } = this.getProps();
      if (!Js(o, r, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: h, max: g } = c.layout.layoutBox[o];
        d.set(l[o] - Vt(h, g, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: o } = this.getProps(), { projection: r } = this.visualElement;
    if (!ii(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    He((h) => {
      const g = this.getAxisMotionValue(h);
      if (g && this.constraints !== !1) {
        const p = g.get();
        c[h] = hA({ min: p, max: p }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), He((h) => {
      if (!Js(h, l, null))
        return;
      const g = this.getAxisMotionValue(h), { min: p, max: m } = this.constraints[h];
      g.set(Vt(p, m, c[h]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    yA.set(this.visualElement, this);
    const l = this.visualElement.current, o = dl(l, "pointerdown", (p) => {
      const { drag: m, dragListener: v = !0 } = this.getProps();
      m && v && this.start(p);
    }), r = () => {
      const { dragConstraints: p } = this.getProps();
      ii(p) && p.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: c } = this.visualElement, d = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), Rt.read(r);
    const h = bl(window, "resize", () => this.scalePositionWithinConstraints()), g = c.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: m }) => {
      this.isDragging && m && (He((v) => {
        const T = this.getAxisMotionValue(v);
        T && (this.originPoint[v] += p[v].translate, T.set(T.get() + p[v].translate));
      }), this.visualElement.render());
    }));
    return () => {
      h(), o(), d(), g && g();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: h = yc, dragMomentum: g = !0 } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: g
    };
  }
}
function Js(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i);
}
function gA(i, l = 10) {
  let o = null;
  return Math.abs(i.y) > l ? o = "y" : Math.abs(i.x) > l && (o = "x"), o;
}
class vA extends Jn {
  constructor(l) {
    super(l), this.removeGroupControls = Ye, this.removeListeners = Ye, this.controls = new pA(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ye;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Iy = (i) => (l, o) => {
  i && Rt.postRender(() => i(l, o));
};
class SA extends Jn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ye;
  }
  onPointerDown(l) {
    this.session = new Zg(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Qg(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Iy(l),
      onStart: Iy(o),
      onMove: r,
      onEnd: (d, h) => {
        delete this.session, c && Rt.postRender(() => c(d, h));
      }
    };
  }
  mount() {
    this.removePointerDownListener = dl(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ps = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function tp(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const rl = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (nt.test(i))
        i = parseFloat(i);
      else
        return i;
    const o = tp(i, l.target.x), r = tp(i, l.target.y);
    return `${o}% ${r}%`;
  }
}, TA = {
  correct: (i, { treeScale: l, projectionDelta: o }) => {
    const r = i, c = Kn.parse(i);
    if (c.length > 5)
      return r;
    const d = Kn.createTransformer(i), h = typeof c[0] != "number" ? 1 : 0, g = o.x.scale * l.x, p = o.y.scale * l.y;
    c[0 + h] /= g, c[1 + h] /= p;
    const m = Vt(g, p, 0.5);
    return typeof c[2 + h] == "number" && (c[2 + h] /= m), typeof c[3 + h] == "number" && (c[3 + h] /= m), d(c);
  }
};
let Gr = !1;
class bA extends K.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: d } = l;
    XT(AA), d && (o.group && o.group.add(d), r && r.register && c && r.register(d), Gr && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      onExitComplete: () => this.safeToRemove()
    })), Ps.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, visualElement: r, drag: c, isPresent: d } = this.props, { projection: h } = r;
    return h && (h.isPresent = d, Gr = !0, c || l.layoutDependency !== o || o === void 0 || l.isPresent !== d ? h.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? h.promote() : h.relegate() || Rt.postRender(() => {
      const g = h.getStack();
      (!g || !g.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l && (l.root.didUpdate(), Yc.postRender(() => {
      !l.currentAnimation && l.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = l;
    Gr = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Jg(i) {
  const [l, o] = yg(), r = K.useContext(vc);
  return tt.jsx(bA, { ...i, layoutGroup: r, switchLayoutGroup: K.useContext(Cg), isPresent: l, safeToRemove: o });
}
const AA = {
  borderRadius: {
    ...rl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: rl,
  borderTopRightRadius: rl,
  borderBottomLeftRadius: rl,
  borderBottomRightRadius: rl,
  boxShadow: TA
};
function xA(i, l, o) {
  const r = ne(i) ? i : ri(i);
  return r.start(Pc("", r, l, o)), r.animation;
}
const EA = (i, l) => i.depth - l.depth;
class MA {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    bc(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    Ac(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(EA), this.isDirty = !1, this.children.forEach(l);
  }
}
function DA(i, l) {
  const o = ye.now(), r = ({ timestamp: c }) => {
    const d = c - o;
    d >= l && (Zn(r), i(d - l));
  };
  return Rt.setup(r, !0), () => Zn(r);
}
const kg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], CA = kg.length, ep = (i) => typeof i == "string" ? parseFloat(i) : i, np = (i) => typeof i == "number" || nt.test(i);
function zA(i, l, o, r, c, d) {
  c ? (i.opacity = Vt(0, o.opacity ?? 1, OA(r)), i.opacityExit = Vt(l.opacity ?? 1, 0, RA(r))) : d && (i.opacity = Vt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let h = 0; h < CA; h++) {
    const g = `border${kg[h]}Radius`;
    let p = ap(l, g), m = ap(o, g);
    if (p === void 0 && m === void 0)
      continue;
    p || (p = 0), m || (m = 0), p === 0 || m === 0 || np(p) === np(m) ? (i[g] = Math.max(Vt(ep(p), ep(m), r), 0), (We.test(m) || We.test(p)) && (i[g] += "%")) : i[g] = m;
  }
  (l.rotate || o.rotate) && (i.rotate = Vt(l.rotate || 0, o.rotate || 0, r));
}
function ap(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const OA = /* @__PURE__ */ Fg(0, 0.5, Bp), RA = /* @__PURE__ */ Fg(0.5, 0.95, Ye);
function Fg(i, l, o) {
  return (r) => r < i ? 0 : r > l ? 1 : o(/* @__PURE__ */ pl(i, l, r));
}
function ip(i, l) {
  i.min = l.min, i.max = l.max;
}
function Le(i, l) {
  ip(i.x, l.x), ip(i.y, l.y);
}
function lp(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
function sp(i, l, o, r, c) {
  return i -= l, i = nu(i, 1 / o, r), c !== void 0 && (i = nu(i, 1 / c, r)), i;
}
function VA(i, l = 0, o = 1, r = 0.5, c, d = i, h = i) {
  if (We.test(l) && (l = parseFloat(l), l = Vt(h.min, h.max, l / 100) - h.min), typeof l != "number")
    return;
  let g = Vt(d.min, d.max, r);
  i === d && (g -= l), i.min = sp(i.min, l, o, g, c), i.max = sp(i.max, l, o, g, c);
}
function up(i, l, [o, r, c], d, h) {
  VA(i, l[o], l[r], l[c], l.scale, d, h);
}
const _A = ["x", "scaleX", "originX"], UA = ["y", "scaleY", "originY"];
function op(i, l, o, r) {
  up(i.x, l, _A, o ? o.x : void 0, r ? r.x : void 0), up(i.y, l, UA, o ? o.y : void 0, r ? r.y : void 0);
}
function rp(i) {
  return i.translate === 0 && i.scale === 1;
}
function Wg(i) {
  return rp(i.x) && rp(i.y);
}
function cp(i, l) {
  return i.min === l.min && i.max === l.max;
}
function NA(i, l) {
  return cp(i.x, l.x) && cp(i.y, l.y);
}
function fp(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function Pg(i, l) {
  return fp(i.x, l.x) && fp(i.y, l.y);
}
function hp(i) {
  return se(i.x) / se(i.y);
}
function dp(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
class BA {
  constructor() {
    this.members = [];
  }
  add(l) {
    bc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (Ac(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    const o = this.members.findIndex((c) => l === c);
    if (o === 0)
      return !1;
    let r;
    for (let c = o; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        r = d;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
      r.instance && r.scheduleRender(), l.scheduleRender(), l.resumeFrom = r, o && (l.resumeFrom.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: o, resumingFrom: r } = l;
      o.onExitComplete && o.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function jA(i, l, o) {
  let r = "";
  const c = i.x.translate / l.x, d = i.y.translate / l.y, h = o?.z || 0;
  if ((c || d || h) && (r = `translate3d(${c}px, ${d}px, ${h}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), o) {
    const { transformPerspective: m, rotate: v, rotateX: T, rotateY: b, skewX: V, skewY: U } = o;
    m && (r = `perspective(${m}px) ${r}`), v && (r += `rotate(${v}deg) `), T && (r += `rotateX(${T}deg) `), b && (r += `rotateY(${b}deg) `), V && (r += `skewX(${V}deg) `), U && (r += `skewY(${U}deg) `);
  }
  const g = i.x.scale * l.x, p = i.y.scale * l.y;
  return (g !== 1 || p !== 1) && (r += `scale(${g}, ${p})`), r || "none";
}
const Xr = ["", "X", "Y", "Z"], LA = 1e3;
let HA = 0;
function Qr(i, l, o, r) {
  const { latestValues: c } = l;
  c[i] && (o[i] = c[i], l.setStaticValue(i, 0), r && (r[i] = 0));
}
function $g(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const o = Lg(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Rt, !(c || d));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && $g(r);
}
function Ig({ attachResizeListener: i, defaultParent: l, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(h = {}, g = l?.()) {
      this.id = HA++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(qA), this.nodes.forEach(ZA), this.nodes.forEach(KA), this.nodes.forEach(GA);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = h, this.root = g ? g.root || g : this, this.path = g ? [...g.path, g] : [], this.parent = g, this.depth = g ? g.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new MA());
    }
    addEventListener(h, g) {
      return this.eventHandlers.has(h) || this.eventHandlers.set(h, new Mc()), this.eventHandlers.get(h).add(g);
    }
    notifyListeners(h, ...g) {
      const p = this.eventHandlers.get(h);
      p && p.notify(...g);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    /**
     * Lifecycles
     */
    mount(h) {
      if (this.instance)
        return;
      this.isSVG = mg(h) && !zT(h), this.instance = h;
      const { layoutId: g, layout: p, visualElement: m } = this.options;
      if (m && !m.current && m.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || g) && (this.isLayoutDirty = !0), i) {
        let v, T = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        Rt.read(() => {
          T = window.innerWidth;
        }), i(h, () => {
          const V = window.innerWidth;
          V !== T && (T = V, this.root.updateBlockedByResize = !0, v && v(), v = DA(b, 250), Ps.hasAnimatedSinceResize && (Ps.hasAnimatedSinceResize = !1, this.nodes.forEach(pp)));
        });
      }
      g && this.root.registerSharedNode(g, this), this.options.animate !== !1 && m && (g || p) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: T, hasRelativeLayoutChanged: b, layout: V }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const U = this.options.transition || m.getDefaultTransition() || PA, { onLayoutAnimationStart: j, onLayoutAnimationComplete: G } = m.getProps(), H = !this.targetLayout || !Pg(this.targetLayout, V), X = !T && b;
        if (this.options.layoutRoot || this.resumeFrom || X || T && (H || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const Q = {
            ...Hc(U, "layout"),
            onPlay: j,
            onComplete: G
          };
          (m.shouldReduceMotion || this.options.layoutRoot) && (Q.delay = 0, Q.type = !1), this.startAnimation(Q), this.setAnimationOrigin(v, X);
        } else
          T || pp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = V;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Zn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(JA), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && $g(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const T = this.path[v];
        T.shouldResetTransform = !0, T.updateScroll("snapshot"), T.options.layoutRoot && T.willUpdate(!1);
      }
      const { layoutId: g, layout: p } = this.options;
      if (g === void 0 && !p)
        return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mp);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(yp);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(QA), this.nodes.forEach(wA), this.nodes.forEach(YA)) : this.nodes.forEach(yp), this.clearAllSnapshots();
      const g = ye.now();
      $t.delta = gn(0, 1e3 / 60, g - $t.timestamp), $t.timestamp = g, $t.isProcessing = !0, _r.update.process($t), _r.preRender.process($t), _r.render.process($t), $t.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Yc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(XA), this.sharedNodes.forEach(kA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Rt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Rt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !se(this.snapshot.measuredBox.x) && !se(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++)
          this.path[p].updateScroll();
      const h = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Ht(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: g } = this.options;
      g && g.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let g = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (g = !1), g && this.instance) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: p,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, g = this.projectionDelta && !Wg(this.projectionDelta), p = this.getTransformTemplate(), m = p ? p(this.latestValues, "") : void 0, v = m !== this.prevTransformTemplateValue;
      h && this.instance && (g || ma(this.latestValues) || v) && (c(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(h = !0) {
      const g = this.measurePageBox();
      let p = this.removeElementScroll(g);
      return h && (p = this.removeTransform(p)), $A(p), {
        animationId: this.root.animationId,
        measuredBox: g,
        layoutBox: p,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: h } = this.options;
      if (!h)
        return Ht();
      const g = h.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(IA))) {
        const { scroll: m } = this.root;
        m && (li(g.x, m.offset.x), li(g.y, m.offset.y));
      }
      return g;
    }
    removeElementScroll(h) {
      const g = Ht();
      if (Le(g, h), this.scroll?.wasRoot)
        return g;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p], { scroll: v, options: T } = m;
        m !== this.root && v && T.layoutScroll && (v.wasRoot && Le(g, h), li(g.x, v.offset.x), li(g.y, v.offset.y));
      }
      return g;
    }
    applyTransform(h, g = !1) {
      const p = Ht();
      Le(p, h);
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        !g && v.options.layoutScroll && v.scroll && v !== v.root && si(p, {
          x: -v.scroll.offset.x,
          y: -v.scroll.offset.y
        }), ma(v.latestValues) && si(p, v.latestValues);
      }
      return ma(this.latestValues) && si(p, this.latestValues), p;
    }
    removeTransform(h) {
      const g = Ht();
      Le(g, h);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !ma(m.latestValues))
          continue;
        rc(m.latestValues) && m.updateSnapshot();
        const v = Ht(), T = m.measurePageBox();
        Le(v, T), op(g, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, v);
      }
      return ma(this.latestValues) && op(g, this.latestValues), g;
    }
    setTargetDelta(h) {
      this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== $t.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      const g = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = g.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = g.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = g.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== g;
      if (!(h || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: T } = this.options;
      if (!(!this.layout || !(v || T))) {
        if (this.resolvedRelativeTargetAt = $t.timestamp, !this.targetDelta && !this.relativeTarget) {
          const b = this.getClosestProjectingParent();
          b && b.layout && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ht(), this.relativeTargetOrigin = Ht(), yl(this.relativeTargetOrigin, this.layout.layoutBox, b.layout.layoutBox), Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ht(), this.targetWithTransforms = Ht()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), lA(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Le(this.target, this.layout.layoutBox), Vg(this.target, this.targetDelta)) : Le(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const b = this.getClosestProjectingParent();
          b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ht(), this.relativeTargetOrigin = Ht(), yl(this.relativeTargetOrigin, this.target, b.target), Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || rc(this.parent.latestValues) || Rg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const h = this.getLead(), g = !!this.resumingFrom || this !== h;
      let p = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1), g && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === $t.timestamp && (p = !1), p)
        return;
      const { layout: m, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || v))
        return;
      Le(this.layoutCorrected, this.layout.layoutBox);
      const T = this.treeScale.x, b = this.treeScale.y;
      gb(this.layoutCorrected, this.treeScale, this.path, g), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = Ht());
      const { target: V } = h;
      if (!V) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (lp(this.prevProjectionDelta.x, this.projectionDelta.x), lp(this.prevProjectionDelta.y, this.projectionDelta.y)), ml(this.projectionDelta, this.layoutCorrected, V, this.latestValues), (this.treeScale.x !== T || this.treeScale.y !== b || !dp(this.projectionDelta.x, this.prevProjectionDelta.x) || !dp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", V));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      if (this.options.visualElement?.scheduleRender(), h) {
        const g = this.getStack();
        g && g.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ui(), this.projectionDelta = ui(), this.projectionDeltaWithTransform = ui();
    }
    setAnimationOrigin(h, g = !1) {
      const p = this.snapshot, m = p ? p.latestValues : {}, v = { ...this.latestValues }, T = ui();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !g;
      const b = Ht(), V = p ? p.source : void 0, U = this.layout ? this.layout.source : void 0, j = V !== U, G = this.getStack(), H = !G || G.members.length <= 1, X = !!(j && !H && this.options.crossfade === !0 && !this.path.some(WA));
      this.animationProgress = 0;
      let Q;
      this.mixTargetDelta = (W) => {
        const k = W / 1e3;
        gp(T.x, h.x, k), gp(T.y, h.y, k), this.setTargetDelta(T), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (yl(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox), FA(this.relativeTarget, this.relativeTargetOrigin, b, k), Q && NA(this.relativeTarget, Q) && (this.isProjectionDirty = !1), Q || (Q = Ht()), Le(Q, this.relativeTarget)), j && (this.animationValues = v, zA(v, m, this.latestValues, k, X, H)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Zn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Rt.update(() => {
        Ps.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = ri(0)), this.currentAnimation = xA(this.motionValue, [0, 1e3], {
          ...h,
          velocity: 0,
          isSync: !0,
          onUpdate: (g) => {
            this.mixTargetDelta(g), h.onUpdate && h.onUpdate(g);
          },
          onStop: () => {
          },
          onComplete: () => {
            h.onComplete && h.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const h = this.getStack();
      h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(LA), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let { targetWithTransforms: g, target: p, layout: m, latestValues: v } = h;
      if (!(!g || !p || !m)) {
        if (this !== h && this.layout && m && t0(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
          p = this.target || Ht();
          const T = se(this.layout.layoutBox.x);
          p.x.min = h.target.x.min, p.x.max = p.x.min + T;
          const b = se(this.layout.layoutBox.y);
          p.y.min = h.target.y.min, p.y.max = p.y.min + b;
        }
        Le(g, p), si(g, v), ml(this.projectionDeltaWithTransform, this.layoutCorrected, g, v);
      }
    }
    registerSharedNode(h, g) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new BA()), this.sharedNodes.get(h).add(g);
      const m = g.options.initialPromotionConfig;
      g.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(g) : void 0
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h)
        return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: g, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      m && m.promote(this, p), h && (this.projectionDelta = void 0, this.needsReset = !0), g && this.setOptions({ transition: g });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h)
        return;
      let g = !1;
      const { latestValues: p } = h;
      if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (g = !0), !g)
        return;
      const m = {};
      p.z && Qr("z", h, m, this.animationValues);
      for (let v = 0; v < Xr.length; v++)
        Qr(`rotate${Xr[v]}`, h, m, this.animationValues), Qr(`skew${Xr[v]}`, h, m, this.animationValues);
      h.render();
      for (const v in m)
        h.setStaticValue(v, m[v]), this.animationValues && (this.animationValues[v] = m[v]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, g) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, h.visibility = "", h.opacity = "", h.pointerEvents = Ws(g?.pointerEvents) || "", h.transform = p ? p(this.latestValues, "") : "none";
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Ws(g?.pointerEvents) || ""), this.hasProjected && !ma(this.latestValues) && (h.transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return;
      }
      h.visibility = "";
      const v = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let T = jA(this.projectionDeltaWithTransform, this.treeScale, v);
      p && (T = p(v, T)), h.transform = T;
      const { x: b, y: V } = this.projectionDelta;
      h.transformOrigin = `${b.origin * 100}% ${V.origin * 100}% 0`, m.animationValues ? h.opacity = m === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = m === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const U in Tl) {
        if (v[U] === void 0)
          continue;
        const { correct: j, applyTo: G, isCSSVariable: H } = Tl[U], X = T === "none" ? v[U] : j(v[U], m);
        if (G) {
          const Q = G.length;
          for (let W = 0; W < Q; W++)
            h[G[W]] = X;
        } else
          H ? this.options.visualElement.renderState.vars[U] = X : h[U] = X;
      }
      this.options.layoutId && (h.pointerEvents = m === this ? Ws(g?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((h) => h.currentAnimation?.stop()), this.root.nodes.forEach(mp), this.root.sharedNodes.clear();
    }
  };
}
function wA(i) {
  i.updateLayout();
}
function YA(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = i.layout, { animationType: c } = i.options, d = l.source !== i.layout.source;
    c === "size" ? He((v) => {
      const T = d ? l.measuredBox[v] : l.layoutBox[v], b = se(T);
      T.min = o[v].min, T.max = T.min + b;
    }) : t0(c, l.layoutBox, o) && He((v) => {
      const T = d ? l.measuredBox[v] : l.layoutBox[v], b = se(o[v]);
      T.max = T.min + b, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + b);
    });
    const h = ui();
    ml(h, o, l.layoutBox);
    const g = ui();
    d ? ml(g, i.applyTransform(r, !0), l.measuredBox) : ml(g, o, l.layoutBox);
    const p = !Wg(h);
    let m = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: T, layout: b } = v;
        if (T && b) {
          const V = Ht();
          yl(V, l.layoutBox, T.layoutBox);
          const U = Ht();
          yl(U, o, b.layoutBox), Pg(V, U) || (m = !0), v.options.layoutRoot && (i.relativeTarget = U, i.relativeTargetOrigin = V, i.relativeParent = v);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: g,
      layoutDelta: h,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: m
    });
  } else if (i.isLead()) {
    const { onExitComplete: o } = i.options;
    o && o();
  }
  i.options.transition = void 0;
}
function qA(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function GA(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function XA(i) {
  i.clearSnapshot();
}
function mp(i) {
  i.clearMeasurements();
}
function yp(i) {
  i.isLayoutDirty = !1;
}
function QA(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function pp(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function ZA(i) {
  i.resolveTargetDelta();
}
function KA(i) {
  i.calcProjection();
}
function JA(i) {
  i.resetSkewAndRotation();
}
function kA(i) {
  i.removeLeadSnapshot();
}
function gp(i, l, o) {
  i.translate = Vt(l.translate, 0, o), i.scale = Vt(l.scale, 1, o), i.origin = l.origin, i.originPoint = l.originPoint;
}
function vp(i, l, o, r) {
  i.min = Vt(l.min, o.min, r), i.max = Vt(l.max, o.max, r);
}
function FA(i, l, o, r) {
  vp(i.x, l.x, o.x, r), vp(i.y, l.y, o.y, r);
}
function WA(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const PA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Sp = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), Tp = Sp("applewebkit/") && !Sp("chrome/") ? Math.round : Ye;
function bp(i) {
  i.min = Tp(i.min), i.max = Tp(i.max);
}
function $A(i) {
  bp(i.x), bp(i.y);
}
function t0(i, l, o) {
  return i === "position" || i === "preserve-aspect" && !iA(hp(l), hp(o), 0.2);
}
function IA(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const tx = Ig({
  attachResizeListener: (i, l) => bl(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Zr = {
  current: void 0
}, e0 = Ig({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!Zr.current) {
      const i = new tx({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), Zr.current = i;
    }
    return Zr.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), ex = {
  pan: {
    Feature: SA
  },
  drag: {
    Feature: vA,
    ProjectionNode: e0,
    MeasureLayout: Jg
  }
};
function Ap(i, l, o) {
  const { props: r } = i;
  i.animationState && r.whileHover && i.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o, d = r[c];
  d && Rt.postRender(() => d(l, Ml(l)));
}
class nx extends Jn {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = xT(l, (o, r) => (Ap(this.node, r, "Start"), (c) => Ap(this.node, c, "End"))));
  }
  unmount() {
  }
}
class ax extends Jn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Al(bl(this.node.current, "focus", () => this.onFocus()), bl(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function xp(i, l, o) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && r.whileTap && i.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o), d = r[c];
  d && Rt.postRender(() => d(l, Ml(l)));
}
class ix extends Jn {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = CT(l, (o, r) => (xp(this.node, r, "Start"), (c, { success: d }) => xp(this.node, c, d ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const pc = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), lx = (i) => {
  const l = pc.get(i.target);
  l && l(i);
}, sx = (i) => {
  i.forEach(lx);
};
function ux({ root: i, ...l }) {
  const o = i || document;
  Kr.has(o) || Kr.set(o, {});
  const r = Kr.get(o), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(sx, { root: i, ...l })), r[c];
}
function ox(i, l, o) {
  const r = ux(l);
  return pc.set(i, o), r.observe(i), () => {
    pc.delete(i), r.unobserve(i);
  };
}
const rx = {
  some: 0,
  all: 1
};
class cx extends Jn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: d } = l, h = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : rx[c]
    }, g = (p) => {
      const { isIntersecting: m } = p;
      if (this.isInView === m || (this.isInView = m, d && !m && this.hasEnteredView))
        return;
      m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
      const { onViewportEnter: v, onViewportLeave: T } = this.node.getProps(), b = m ? v : T;
      b && b(p);
    };
    return ox(this.node.current, h, g);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(fx(l, o)) && this.startObserver();
  }
  unmount() {
  }
}
function fx({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (o) => i[o] !== l[o];
}
const hx = {
  inView: {
    Feature: cx
  },
  tap: {
    Feature: ix
  },
  focus: {
    Feature: ax
  },
  hover: {
    Feature: nx
  }
}, dx = {
  layout: {
    ProjectionNode: e0,
    MeasureLayout: Jg
  }
}, mx = {
  ...$b,
  ...hx,
  ...ex,
  ...dx
}, Jr = /* @__PURE__ */ mb(mx, Cb);
function kr(i, l) {
  document.cookie = `lovecookies_${i}=${l};path=/;max-age=${365 * 24 * 60 * 60}`;
  const o = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
  o[i] = l, localStorage.setItem("cookieConsent", JSON.stringify(o));
}
function yx() {
  return JSON.parse(localStorage.getItem("cookieConsent") || "{}");
}
function px() {
  localStorage.removeItem("cookieConsent"), document.cookie.split(";").forEach((i) => {
    i.trim().startsWith("lovecookies_") && (document.cookie = `${i.split("=")[0]}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`);
  });
}
function Fr(i) {
  if (typeof window.gtag != "function") return;
  const l = i === "accepted";
  window.gtag("consent", "update", {
    ad_storage: l ? "granted" : "denied",
    analytics_storage: l ? "granted" : "denied",
    functionality_storage: "granted",
    personalization_storage: l ? "granted" : "denied",
    security_storage: "granted"
  }), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
    event: "lc_consent_update",
    consent: i
  }), console.log("LoveCookies: consent updated →", i);
}
const gx = () => /* @__PURE__ */ tt.jsxs(
  "svg",
  {
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ tt.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ tt.jsx("circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ tt.jsx("circle", { cx: "8", cy: "8", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ tt.jsx("circle", { cx: "16", cy: "9", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ tt.jsx("circle", { cx: "9", cy: "15", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ tt.jsx("circle", { cx: "15", cy: "15", r: "1", fill: "currentColor" })
    ]
  }
), vx = ({ options: i }) => {
  const l = i?.color ?? "#00c471", o = i?.policyUrl ?? "/privacy-policy", r = i?.position ?? "bottom-center", c = r === "bottom-left" ? "left-0 right-auto" : r === "bottom-right" ? "right-0 left-auto" : "left-0 right-0", [d, h] = K.useState(!1), [g, p] = K.useState(!1), [m, v] = K.useState({
    essential: !0,
    analytics: !1,
    marketing: !1
  });
  K.useEffect(() => {
    const U = yx();
    if (!U || Object.keys(U).length === 0) {
      const j = setTimeout(() => h(!0), 300);
      return () => clearTimeout(j);
    } else
      v((j) => ({ ...j, ...U }));
  }, []);
  const T = () => {
    const U = { essential: !0, analytics: !0, marketing: !0 };
    for (const j in U) kr(j, U[j]);
    Fr("accepted"), v(U), h(!1);
  }, b = () => {
    const U = { essential: !0, analytics: !1, marketing: !1 };
    for (const j in U) kr(j, U[j]);
    Fr("declined"), v(U), h(!1);
  }, V = () => {
    for (const U in m)
      kr(U, m[U]);
    Fr("accepted"), p(!1), h(!1);
  };
  return /* @__PURE__ */ tt.jsxs(tt.Fragment, { children: [
    /* @__PURE__ */ tt.jsx(
      "button",
      {
        onClick: () => {
          px(), window.location.reload();
        },
        className: "fixed top-4 right-4 text-xs text-gray-400 hover:text-gray-600 z-[999]",
        children: "Reset Cookies"
      }
    ),
    /* @__PURE__ */ tt.jsx(Vy, { children: d && /* @__PURE__ */ tt.jsx(
      Jr.div,
      {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 100, opacity: 0 },
        transition: { duration: 0.4, ease: "easeOut" },
        className: `fixed bottom-0 ${c} z-50 px-4 pb-safe`,
        children: /* @__PURE__ */ tt.jsxs("div", { className: "mx-auto w-full max-w-2xl bg-white border border-gray-200 rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
          /* @__PURE__ */ tt.jsxs("div", { className: "flex items-start sm:items-center gap-4", children: [
            /* @__PURE__ */ tt.jsx(
              "div",
              {
                className: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white",
                style: { backgroundColor: l },
                children: /* @__PURE__ */ tt.jsx(gx, {})
              }
            ),
            /* @__PURE__ */ tt.jsxs("div", { children: [
              /* @__PURE__ */ tt.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900", children: "Cookie Settings" }),
              /* @__PURE__ */ tt.jsxs("p", { className: "text-sm text-gray-600 leading-relaxed mt-1 sm:max-w-sm", children: [
                "We use cookies to enhance your experience.",
                " ",
                /* @__PURE__ */ tt.jsx(
                  "a",
                  {
                    href: o,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline text-blue-600 hover:text-blue-800",
                    children: "Privacy Policy"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ tt.jsxs("div", { className: "flex flex-wrap gap-2 w-full sm:w-auto", children: [
            /* @__PURE__ */ tt.jsx(
              "button",
              {
                onClick: T,
                style: { backgroundColor: l },
                className: "px-5 py-2 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
                children: "Accept All"
              }
            ),
            /* @__PURE__ */ tt.jsx(
              "button",
              {
                onClick: b,
                className: "px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-400 focus:outline-none",
                children: "Reject All"
              }
            ),
            /* @__PURE__ */ tt.jsx(
              "button",
              {
                onClick: () => p(!0),
                className: "px-5 py-2 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 focus:outline-none",
                children: "Customize"
              }
            )
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ tt.jsx(Vy, { children: g && /* @__PURE__ */ tt.jsx(
      Jr.div,
      {
        role: "dialog",
        "aria-modal": "true",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4",
        onClick: () => p(!1),
        children: /* @__PURE__ */ tt.jsxs(
          Jr.div,
          {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.95, opacity: 0 },
            onClick: (U) => U.stopPropagation(),
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden",
            children: [
              /* @__PURE__ */ tt.jsxs("div", { className: "p-6 border-b border-gray-100", children: [
                /* @__PURE__ */ tt.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Cookie Preferences" }),
                /* @__PURE__ */ tt.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Choose which cookies you want to accept" })
              ] }),
              /* @__PURE__ */ tt.jsx("div", { className: "p-6 space-y-4 overflow-y-auto max-h-[60vh]", children: [
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
              ].map(({ key: U, label: j, desc: G, required: H }) => /* @__PURE__ */ tt.jsxs(
                "div",
                {
                  className: `flex items-start justify-between p-4 ${H ? "bg-gray-50" : "border border-gray-200"} rounded-xl`,
                  children: [
                    /* @__PURE__ */ tt.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ tt.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ tt.jsx("h3", { className: "font-semibold text-gray-900", children: j }),
                        H && /* @__PURE__ */ tt.jsx("span", { className: "text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded", children: "Required" })
                      ] }),
                      /* @__PURE__ */ tt.jsx("p", { className: "text-sm text-gray-600 mt-1", children: G })
                    ] }),
                    /* @__PURE__ */ tt.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: m[U] ?? !1,
                        disabled: H,
                        onChange: (X) => v({
                          ...m,
                          [U]: X.target.checked
                        }),
                        className: "w-5 h-5 rounded accent-blue-600 mt-1 cursor-pointer"
                      }
                    )
                  ]
                },
                U
              )) }),
              /* @__PURE__ */ tt.jsxs("div", { className: "p-6 border-t border-gray-100 flex gap-3", children: [
                /* @__PURE__ */ tt.jsx(
                  "button",
                  {
                    onClick: () => p(!1),
                    className: "flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ tt.jsx(
                  "button",
                  {
                    onClick: V,
                    style: { backgroundColor: l },
                    className: "flex-1 px-4 py-2.5 text-white font-medium rounded-lg hover:opacity-90 transition-colors",
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
}, Sx = {
  color: "#00c471",
  position: "bottom-center",
  policyUrl: "/privacy-policy",
  autoShow: !0
};
(function() {
  typeof window > "u" || (window.LoveCookies = {
    init: (l = {}) => {
      const o = { ...Sx, ...l };
      let r = document.getElementById("lovecookies-root");
      r || (r = document.createElement("div"), r.id = "lovecookies-root", document.body.appendChild(r)), N1.createRoot(r).render(/* @__PURE__ */ tt.jsx(vx, { options: o }));
    }
  }, window.LoveCookies.init());
})();
