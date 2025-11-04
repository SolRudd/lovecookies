import se, { useState as O, useEffect as ae } from "react";
import { AnimatePresence as J, motion as P } from "framer-motion";
var _ = { exports: {} }, y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function le() {
  if (U) return y;
  U = 1;
  var n = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function d(m, i, u) {
    var x = null;
    if (u !== void 0 && (x = "" + u), i.key !== void 0 && (x = "" + i.key), "key" in i) {
      u = {};
      for (var p in i)
        p !== "key" && (u[p] = i[p]);
    } else u = i;
    return i = u.ref, {
      $$typeof: n,
      type: m,
      key: x,
      ref: i !== void 0 ? i : null,
      props: u
    };
  }
  return y.Fragment = c, y.jsx = d, y.jsxs = d, y;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function ce() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case G:
          return "Profiler";
        case B:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case H:
            return e.displayName || "Context";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return t = e.displayName || null, t !== null ? t : n(e.type) || "Memo";
          case N:
            t = e._payload, e = e._init;
            try {
              return n(e(t));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function d(e) {
      try {
        c(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), c(e);
      }
    }
    function m(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var t = n(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function x(e) {
      if (Y.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, t) {
      function s() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function R() {
      var e = n(this.type);
      return M[e] || (M[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function o(e, t, s, a, E, S) {
      var l = s.ref;
      return e = {
        $$typeof: I,
        type: e,
        key: t,
        props: s,
        _owner: a
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function f(e, t, s, a, E, S) {
      var l = t.children;
      if (l !== void 0)
        if (a)
          if (ne(l)) {
            for (a = 0; a < l.length; a++)
              j(l[a]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(l);
      if (Y.call(t, "key")) {
        l = n(e);
        var h = Object.keys(t).filter(function(oe) {
          return oe !== "key";
        });
        a = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", D[l + a] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          l,
          h,
          l
        ), D[l + a] = !0);
      }
      if (l = null, s !== void 0 && (d(s), l = "" + s), x(t) && (d(t.key), l = "" + t.key), "key" in t) {
        s = {};
        for (var A in t)
          A !== "key" && (s[A] = t[A]);
      } else s = t;
      return l && p(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), o(
        e,
        l,
        s,
        i(),
        E,
        S
      );
    }
    function j(e) {
      b(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === N && (e._payload.status === "fulfilled" ? b(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function b(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    var g = se, I = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), H = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), T = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, ne = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, M = {}, W = g.react_stack_bottom_frame.bind(
      g,
      u
    )(), z = C(m(u)), D = {};
    v.Fragment = w, v.jsx = function(e, t, s) {
      var a = 1e4 > T.recentlyCreatedOwnerStacks++;
      return f(
        e,
        t,
        s,
        !1,
        a ? Error("react-stack-top-frame") : W,
        a ? C(m(e)) : z
      );
    }, v.jsxs = function(e, t, s) {
      var a = 1e4 > T.recentlyCreatedOwnerStacks++;
      return f(
        e,
        t,
        s,
        !0,
        a ? Error("react-stack-top-frame") : W,
        a ? C(m(e)) : z
      );
    };
  })()), v;
}
var q;
function ie() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? _.exports = le() : _.exports = ce()), _.exports;
}
var r = ie();
const k = {};
function $(n, c) {
  k[n] = c, document.cookie = `lovecookies_${n}=${c};path=/;max-age=${365 * 24 * 60 * 60}`;
  const d = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
  d[n] = c, localStorage.setItem("cookieConsent", JSON.stringify(d));
}
function pe(n) {
  if (k[n] !== void 0) return k[n];
  const c = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
  if (c[n] !== void 0) return c[n];
  const d = document.cookie.match(
    new RegExp(`(?:^| )lovecookies_${n}=([^;]*)`)
  );
  return d ? d[1] === "true" : void 0;
}
function ue() {
  return JSON.parse(localStorage.getItem("cookieConsent") || "{}");
}
function fe() {
  localStorage.removeItem("cookieConsent"), document.cookie.split(";").forEach((n) => {
    n.trim().startsWith("lovecookies_") && (document.cookie = `${n.split("=")[0]}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`);
  });
  for (const n in k) delete k[n];
}
const de = () => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ r.jsx("circle", { cx: "8", cy: "8", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ r.jsx("circle", { cx: "16", cy: "9", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ r.jsx("circle", { cx: "9", cy: "15", r: "1", fill: "currentColor" }),
      /* @__PURE__ */ r.jsx("circle", { cx: "15", cy: "15", r: "1", fill: "currentColor" })
    ]
  }
), be = () => {
  const [n, c] = O(!1), [d, m] = O(!1), [i, u] = O({
    essential: !0,
    analytics: !1,
    marketing: !1
  });
  ae(() => {
    const o = ue();
    if (!o || Object.keys(o).length === 0) {
      const f = setTimeout(() => c(!0), 300);
      return () => clearTimeout(f);
    } else
      u((f) => ({
        ...f,
        ...o
      }));
  }, []);
  const x = () => {
    const o = { essential: !0, analytics: !0, marketing: !0 };
    for (const f in o) $(f, o[f]);
    u(o), c(!1);
  }, p = () => {
    const o = { essential: !0, analytics: !1, marketing: !1 };
    for (const f in o) $(f, o[f]);
    u(o), c(!1);
  }, R = () => {
    for (const o in i)
      $(o, i[o]);
    m(!1), c(!1);
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: () => {
          fe(), window.location.reload();
        },
        className: "fixed top-4 right-4 text-xs text-gray-400 hover:text-gray-600 z-[999]",
        children: "Reset Cookies"
      }
    ),
    /* @__PURE__ */ r.jsx(J, { children: n && /* @__PURE__ */ r.jsx(
      P.div,
      {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 100, opacity: 0 },
        transition: { duration: 0.4, ease: "easeOut" },
        className: "fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe",
        children: /* @__PURE__ */ r.jsxs("div", { className: "mx-auto w-full max-w-2xl bg-white border border-gray-200 rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-start sm:items-center gap-4", children: [
            /* @__PURE__ */ r.jsx("div", { className: "flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600", children: /* @__PURE__ */ r.jsx(de, {}) }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900", children: "Cookie Settings" }),
              /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 leading-relaxed mt-1 sm:max-w-sm", children: "We use cookies to enhance your experience. You can accept all or customize your preferences." })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex flex-wrap gap-2 w-full sm:w-auto", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                onClick: x,
                className: "px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none",
                children: "Accept All"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                onClick: p,
                className: "px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-400 focus:outline-none",
                children: "Reject All"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                onClick: () => m(!0),
                className: "px-5 py-2 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 focus:outline-none",
                children: "Customize"
              }
            )
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ r.jsx(J, { children: d && /* @__PURE__ */ r.jsx(
      P.div,
      {
        role: "dialog",
        "aria-modal": "true",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4",
        onClick: () => m(!1),
        children: /* @__PURE__ */ r.jsxs(
          P.div,
          {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.95, opacity: 0 },
            onClick: (o) => o.stopPropagation(),
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden",
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "p-6 border-b border-gray-100", children: [
                /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Cookie Preferences" }),
                /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Choose which cookies you want to accept" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "p-6 space-y-4 overflow-y-auto max-h-[60vh]", children: [
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
              ].map(({ key: o, label: f, desc: j, required: b }) => /* @__PURE__ */ r.jsxs(
                "div",
                {
                  className: `flex items-start justify-between p-4 ${b ? "bg-gray-50" : "border border-gray-200"} rounded-xl`,
                  children: [
                    /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ r.jsx("h3", { className: "font-semibold text-gray-900", children: f }),
                        b && /* @__PURE__ */ r.jsx("span", { className: "text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded", children: "Required" })
                      ] }),
                      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: j })
                    ] }),
                    /* @__PURE__ */ r.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: i[o] ?? !1,
                        disabled: b,
                        onChange: (g) => u({
                          ...i,
                          [o]: g.target.checked
                        }),
                        className: "w-5 h-5 rounded accent-blue-600 mt-1 cursor-pointer"
                      }
                    )
                  ]
                },
                o
              )) }),
              /* @__PURE__ */ r.jsxs("div", { className: "p-6 border-t border-gray-100 flex gap-3", children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: () => m(!1),
                    className: "flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: R,
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
export {
  be as Banner,
  fe as clearConsent,
  ue as getAllConsent,
  pe as getConsent,
  $ as setConsent
};
//# sourceMappingURL=lovecookies.es.js.map
