/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        if (typeof $gwx === 'function') $gwx('init', global);
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx5 || [];
        __WXML_GLOBAL__.ops_set.$gwx5 = z;
        __WXML_GLOBAL__.ops_init.$gwx5 = true;
        var nv_require = function() {
            var nnm = {};
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        var x = [];
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx5";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || true) $gwx5();;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/0fe96556afcc53fda06fc27f5608783f.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 0fe96556afcc53fda06fc27f5608783f.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/0fe96556afcc53fda06fc27f5608783f"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js": function(e, n, r) {
                function u(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var r = 0, u = Array(n); r < n; r++) u[r] = e[r];
                    return u
                }
                r.d(n, {
                    default: function() {
                        return u
                    }
                })
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/0fe96556afcc53fda06fc27f5608783f.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/165914ad6d844b974299367142081efe.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 165914ad6d844b974299367142081efe.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/165914ad6d844b974299367142081efe"], {
            "./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/icons/jsx-runtime-f8fc01f8.mjs": function(e, r, t) {
                t.d(r, {
                    F: function() {
                        return c
                    },
                    j: function() {
                        return s
                    }
                });
                var n, o = t("webpack/container/remote/react"),
                    a = {},
                    i = {};
                ({get exports() {
                        return a
                    },
                    set exports(e) {
                        a = e
                    }
                }).exports = (n || (n = 1, function() {
                    var e, r = o,
                        t = Symbol.for("react.element"),
                        n = Symbol.for("react.portal"),
                        a = Symbol.for("react.fragment"),
                        c = Symbol.for("react.strict_mode"),
                        s = Symbol.for("react.profiler"),
                        u = Symbol.for("react.provider"),
                        l = Symbol.for("react.context"),
                        f = Symbol.for("react.forward_ref"),
                        p = Symbol.for("react.suspense"),
                        y = Symbol.for("react.suspense_list"),
                        d = Symbol.for("react.memo"),
                        m = Symbol.for("react.lazy"),
                        v = Symbol.for("react.offscreen"),
                        b = Symbol.iterator,
                        g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

                    function h(e) {
                        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
                        ! function(e, r, t) {
                            var n = g.ReactDebugCurrentFrame.getStackAddendum();
                            "" !== n && (r += "%s", t = t.concat([n]));
                            var o = t.map((function(e) {
                                return String(e)
                            }));
                            o.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, o)
                        }("error", e, t)
                    }

                    function k(e) {
                        return e.displayName || "Context"
                    }

                    function w(e) {
                        if (null == e) return null;
                        if ("number" == typeof e.tag && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), "function" == typeof e) return e.displayName || e.name || null;
                        if ("string" == typeof e) return e;
                        switch (e) {
                            case a:
                                return "Fragment";
                            case n:
                                return "Portal";
                            case s:
                                return "Profiler";
                            case c:
                                return "StrictMode";
                            case p:
                                return "Suspense";
                            case y:
                                return "SuspenseList"
                        }
                        if ("object" == typeof e) switch (e.$$typeof) {
                            case l:
                                return k(e) + ".Consumer";
                            case u:
                                return k(e._context) + ".Provider";
                            case f:
                                return function(e, r, t) {
                                    var n = e.displayName;
                                    if (n) return n;
                                    var o = r.displayName || r.name || "";
                                    return "" !== o ? t + "(" + o + ")" : t
                                }(e, e.render, "ForwardRef");
                            case d:
                                var r = e.displayName || null;
                                return null !== r ? r : w(e.type) || "Memo";
                            case m:
                                var t = e,
                                    o = t._payload,
                                    i = t._init;
                                try {
                                    return w(i(o))
                                } catch {
                                    return null
                                }
                        }
                        return null
                    }
                    e = Symbol.for("react.module.reference");
                    var _, j, S, O, R, E, x, P = Object.assign,
                        T = 0;

                    function $() {}
                    $.__reactDisabledLog = !0;
                    var C, F = g.ReactCurrentDispatcher;

                    function D(e, r, t) {
                        if (void 0 === C) try {
                            throw Error()
                        } catch (e) {
                            var n = e.stack.trim().match(/\n( *(at )?)/);
                            C = n && n[1] || ""
                        }
                        return "\n" + C + e
                    }
                    var N, I = !1,
                        W = "function" == typeof WeakMap ? WeakMap : Map;

                    function L(e, r) {
                        if (!e || I) return "";
                        var t, n = N.get(e);
                        if (void 0 !== n) return n;
                        I = !0;
                        var o, a = Error.prepareStackTrace;
                        Error.prepareStackTrace = void 0, o = F.current, F.current = null,
                            function() {
                                if (0 === T) {
                                    _ = console.log, j = console.info, S = console.warn, O = console.error, R = console.group, E = console.groupCollapsed, x = console.groupEnd;
                                    var e = {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: $,
                                        writable: !0
                                    };
                                    Object.defineProperties(console, {
                                        info: e,
                                        log: e,
                                        warn: e,
                                        error: e,
                                        group: e,
                                        groupCollapsed: e,
                                        groupEnd: e
                                    })
                                }
                                T++
                            }();
                        try {
                            if (r) {
                                var i = function() {
                                    throw Error()
                                };
                                if (Object.defineProperty(i.prototype, "props", {set: function() {
                                            throw Error()
                                        }
                                    }), "object" == typeof Reflect && Reflect.construct) {
                                    try {
                                        Reflect.construct(i, [])
                                    } catch (e) {
                                        t = e
                                    }
                                    Reflect.construct(e, [], i)
                                } else {
                                    try {
                                        i.call()
                                    } catch (e) {
                                        t = e
                                    }
                                    e.call(i.prototype)
                                }
                            } else {
                                try {
                                    throw Error()
                                } catch (e) {
                                    t = e
                                }
                                e()
                            }
                        } catch (r) {
                            if (r && t && "string" == typeof r.stack) {
                                for (var c = r.stack.split("\n"), s = t.stack.split("\n"), u = c.length - 1, l = s.length - 1; u >= 1 && l >= 0 && c[u] !== s[l];) l--;
                                for (; u >= 1 && l >= 0; u--, l--)
                                    if (c[u] !== s[l]) {
                                        if (1 !== u || 1 !== l)
                                            do {
                                                if (u--, --l < 0 || c[u] !== s[l]) {
                                                    var f = "\n" + c[u].replace(" at new ", " at ");
                                                    return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), "function" == typeof e && N.set(e, f), f
                                                }
                                            } while (u >= 1 && l >= 0);
                                        break
                                    }
                            }
                        } finally {
                            I = !1, F.current = o,
                                function() {
                                    if (0 == --T) {
                                        var e = {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0
                                        };
                                        Object.defineProperties(console, {
                                            log: P({}, e, {
                                                value: _
                                            }),
                                            info: P({}, e, {
                                                value: j
                                            }),
                                            warn: P({}, e, {
                                                value: S
                                            }),
                                            error: P({}, e, {
                                                value: O
                                            }),
                                            group: P({}, e, {
                                                value: R
                                            }),
                                            groupCollapsed: P({}, e, {
                                                value: E
                                            }),
                                            groupEnd: P({}, e, {
                                                value: x
                                            })
                                        })
                                    }
                                    T < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
                                }(), Error.prepareStackTrace = a
                        }
                        var p = e ? e.displayName || e.name : "",
                            y = p ? D(p) : "";
                        return "function" == typeof e && N.set(e, y), y
                    }

                    function U(e, r, t) {
                        if (null == e) return "";
                        if ("function" == typeof e) return L(e, function(e) {
                            var r = e.prototype;
                            return !(!r || !r.isReactComponent)
                        }(e));
                        if ("string" == typeof e) return D(e);
                        switch (e) {
                            case p:
                                return D("Suspense");
                            case y:
                                return D("SuspenseList")
                        }
                        if ("object" == typeof e) switch (e.$$typeof) {
                            case f:
                                return function(e, r, t) {
                                    return L(e, !1)
                                }(e.render);
                            case d:
                                return U(e.type, r, t);
                            case m:
                                var n = e,
                                    o = n._payload,
                                    a = n._init;
                                try {
                                    return U(a(o), r, t)
                                } catch {}
                        }
                        return ""
                    }
                    N = new W;
                    var z = Object.prototype.hasOwnProperty,
                        A = {},
                        M = g.ReactDebugCurrentFrame;

                    function Y(e) {
                        if (e) {
                            var r = e._owner,
                                t = U(e.type, e._source, r ? r.type : null);
                            M.setExtraStackFrame(t)
                        } else M.setExtraStackFrame(null)
                    }
                    var B = Array.isArray;

                    function J(e) {
                        return B(e)
                    }

                    function q(e) {
                        return "" + e
                    }

                    function V(e) {
                        if (function(e) {
                                try {
                                    return q(e), !1
                                } catch {
                                    return !0
                                }
                            }(e)) return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", function(e) {
                            return "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object"
                        }(e)), q(e)
                    }
                    var H, X, G, K = g.ReactCurrentOwner,
                        Q = {
                            key: !0,
                            ref: !0,
                            __self: !0,
                            __source: !0
                        };
                    G = {};
                    var Z, ee = function(e, r, n, o, a, i, c) {
                            var s = {
                                $$typeof: t,
                                type: e,
                                key: r,
                                ref: n,
                                props: c,
                                _owner: i,
                                _store: {}
                            };
                            return Object.defineProperty(s._store, "validated", {
                                configurable: !1,
                                enumerable: !1,
                                writable: !0,
                                value: !1
                            }), Object.defineProperty(s, "_self", {
                                configurable: !1,
                                enumerable: !1,
                                writable: !1,
                                value: o
                            }), Object.defineProperty(s, "_source", {
                                configurable: !1,
                                enumerable: !1,
                                writable: !1,
                                value: a
                            }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s
                        },
                        re = g.ReactCurrentOwner,
                        te = g.ReactDebugCurrentFrame;

                    function ne(e) {
                        if (e) {
                            var r = e._owner,
                                t = U(e.type, e._source, r ? r.type : null);
                            te.setExtraStackFrame(t)
                        } else te.setExtraStackFrame(null)
                    }

                    function oe(e) {
                        return "object" == typeof e && null !== e && e.$$typeof === t
                    }

                    function ae() {
                        if (re.current) {
                            var e = w(re.current.type);
                            if (e) return "\n\nCheck the render method of `" + e + "`."
                        }
                        return ""
                    }
                    Z = !1;
                    var ie = {};

                    function ce(e, r) {
                        if (e._store && !e._store.validated && null == e.key) {
                            e._store.validated = !0;
                            var t = function(e) {
                                var r = ae();
                                if (!r) {
                                    var t = "string" == typeof e ? e : e.displayName || e.name;
                                    t && (r = "\n\nCheck the top-level render call using <" + t + ">.")
                                }
                                return r
                            }(r);
                            if (!ie[t]) {
                                ie[t] = !0;
                                var n = "";
                                e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + w(e._owner.type) + "."), ne(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), ne(null)
                            }
                        }
                    }

                    function se(e, r) {
                        if ("object" == typeof e)
                            if (J(e))
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    oe(n) && ce(n, r)
                                } else if (oe(e)) e._store && (e._store.validated = !0);
                                else if (e) {
                            var o = function(e) {
                                if (null === e || "object" != typeof e) return null;
                                var r = b && e[b] || e["@@iterator"];
                                return "function" == typeof r ? r : null
                            }(e);
                            if ("function" == typeof o && o !== e.entries)
                                for (var a, i = o.call(e); !(a = i.next()).done;) oe(a.value) && ce(a.value, r)
                        }
                    }

                    function ue(r, n, o, i, b, g) {
                        var k = function(r) {
                            return !("string" != typeof r && "function" != typeof r && r !== a && r !== s && r !== c && r !== p && r !== y && r !== v && ("object" != typeof r || null === r || r.$$typeof !== m && r.$$typeof !== d && r.$$typeof !== u && r.$$typeof !== l && r.$$typeof !== f && r.$$typeof !== e && void 0 === r.getModuleId))
                        }(r);
                        if (!k) {
                            var _, j = "";
                            (void 0 === r || "object" == typeof r && null !== r && 0 === Object.keys(r).length) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), j += function(e) {
                                return void 0 !== e ? "\n\nCheck your code at " + e.fileName.replace(/^.*[\\\/]/, "") + ":" + e.lineNumber + "." : ""
                            }(b) || ae(), null === r ? _ = "null" : J(r) ? _ = "array" : void 0 !== r && r.$$typeof === t ? (_ = "<" + (w(r.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof r, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, j)
                        }
                        var S = function(e, r, t, n, o) {
                            var a, i = {},
                                c = null,
                                s = null;
                            for (a in void 0 !== t && (V(t), c = "" + t), function(e) {
                                    if (z.call(e, "key")) {
                                        var r = Object.getOwnPropertyDescriptor(e, "key").get;
                                        if (r && r.isReactWarning) return !1
                                    }
                                    return void 0 !== e.key
                                }(r) && (V(r.key), c = "" + r.key), function(e) {
                                    if (z.call(e, "ref")) {
                                        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
                                        if (r && r.isReactWarning) return !1
                                    }
                                    return void 0 !== e.ref
                                }(r) && (s = r.ref, function(e, r) {
                                    if ("string" == typeof e.ref && K.current && r && K.current.stateNode !== r) {
                                        var t = w(K.current.type);
                                        G[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(K.current.type), e.ref), G[t] = !0)
                                    }
                                }(r, o)), r) z.call(r, a) && !Q.hasOwnProperty(a) && (i[a] = r[a]);
                            if (e && e.defaultProps) {
                                var u = e.defaultProps;
                                for (a in u) void 0 === i[a] && (i[a] = u[a])
                            }
                            if (c || s) {
                                var l = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
                                c && function(e, r) {
                                    var t = function() {
                                        H || (H = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r))
                                    };
                                    t.isReactWarning = !0, Object.defineProperty(e, "key", {get: t,
                                        configurable: !0
                                    })
                                }(i, l), s && function(e, r) {
                                    var t = function() {
                                        X || (X = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r))
                                    };
                                    t.isReactWarning = !0, Object.defineProperty(e, "ref", {get: t,
                                        configurable: !0
                                    })
                                }(i, l)
                            }
                            return ee(e, c, s, o, n, K.current, i)
                        }(r, n, o, b, g);
                        if (null == S) return S;
                        if (k) {
                            var O = n.children;
                            if (void 0 !== O)
                                if (i)
                                    if (J(O)) {
                                        for (var R = 0; R < O.length; R++) se(O[R], r);
                                        Object.freeze && Object.freeze(O)
                                    } else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                            else se(O, r)
                        }
                        return r === a ? function(e) {
                            for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                                var n = r[t];
                                if ("children" !== n && "key" !== n) {
                                    ne(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), ne(null);
                                    break
                                }
                            }
                            null !== e.ref && (ne(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null))
                        }(S) : function(e) {
                            var r, t = e.type;
                            if (null != t && "string" != typeof t) {
                                if ("function" == typeof t) r = t.propTypes;
                                else {
                                    if ("object" != typeof t || t.$$typeof !== f && t.$$typeof !== d) return;
                                    r = t.propTypes
                                }
                                if (r) {
                                    var n = w(t);
                                    ! function(e, r, t, n, o) {
                                        var a = Function.call.bind(z);
                                        for (var i in e)
                                            if (a(e, i)) {
                                                var c = void 0;
                                                try {
                                                    if ("function" != typeof e[i]) {
                                                        var s = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                                        throw s.name = "Invariant Violation", s
                                                    }
                                                    c = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                                                } catch (e) {
                                                    c = e
                                                }
                                                c && !(c instanceof Error) && (Y(o), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof c), Y(null)), c instanceof Error && !(c.message in A) && (A[c.message] = !0, Y(o), h("Failed %s type: %s", t, c.message), Y(null))
                                            }
                                    }(r, e.props, "prop", n, e)
                                } else void 0 === t.PropTypes || Z || (Z = !0, h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w(t) || "Unknown"));
                                "function" == typeof t.getDefaultProps && !t.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")
                            }
                        }(S), S
                    }
                    i.Fragment = a, i.jsx = function(e, r, t) {
                        return ue(e, r, t, !1)
                    }, i.jsxs = function(e, r, t) {
                        return ue(e, r, t, !0)
                    }
                }()), i);
                const c = a.Fragment,
                    s = a.jsx;
                a.jsxs
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/165914ad6d844b974299367142081efe.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/273fc4ee15907e670fab3358ab61a9de.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 273fc4ee15907e670fab3358ab61a9de.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/273fc4ee15907e670fab3358ab61a9de"], {
            "./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/icons/StarFillN.js": function(e, n, t) {
                t.d(n, {
                    default: function() {
                        return u
                    }
                });
                var o = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    l = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    s = t("./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/icons/jsx-runtime-f8fc01f8.mjs"),
                    a = t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),
                    i = t.n(a),
                    c = (t("webpack/container/remote/react"), {
                        className: "",
                        style: void 0,
                        name: "StarFillN",
                        width: "",
                        height: "",
                        onClick: function() {}
                    }),
                    u = function(e) {
                        var n = (0, l.default)((0, l.default)({}, c), e),
                            t = n.className,
                            a = n.style,
                            u = n.name,
                            r = n.color,
                            d = n.width,
                            m = n.height,
                            p = n.onClick,
                            f = function(e) {
                                return "" === e ? "" : isNaN(Number(e)) ? String(e) : e + "px"
                            },
                            b = {},
                            h = f(d || ""),
                            w = f(m || "");
                        return h && (b.width = h), w && (b.height = w), (0, s.j)(s.F, {
                            children: (0, s.j)("svg", {
                                className: function() {
                                    var e, n = "nut-icon";
                                    return i()((e = {}, (0, o.default)(e, "".concat(t), t), (0, o.default)(e, n, !0), (0, o.default)(e, n + "-" + u, u), e))
                                }(),
                                style: (0, l.default)((0, l.default)({}, a), b),
                                onClick: function(e) {
                                    p && p(e)
                                },
                                xmlns: "http://www.w3.org/2000/svg",
                                color: r,
                                viewBox: "0 0 1081 1024",
                                "aria-labelledby": u,
                                role: "presentation",
                                children: (0, s.j)("path", {
                                    d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
                                    fill: "currentColor",
                                    fillOpacity: "0.9"
                                })
                            })
                        })
                    };
                u.defaultProps = c
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/273fc4ee15907e670fab3358ab61a9de.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/33d5c4b66ac52ad50ea1ec1bfe4b51a2.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 33d5c4b66ac52ad50ea1ec1bfe4b51a2.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/33d5c4b66ac52ad50ea1ec1bfe4b51a2"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js": function(e, r, t) {
                t.d(r, {
                    default: function() {
                        return a
                    }
                });
                var n = t("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

                function a(e, r) {
                    if (e) {
                        if ("string" == typeof e) return (0, n.default)(e, r);
                        var t = {}.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, n.default)(e, r) : void 0
                    }
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/33d5c4b66ac52ad50ea1ec1bfe4b51a2.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/50229e439bb385e9339db36bb2caff47.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 50229e439bb385e9339db36bb2caff47.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/50229e439bb385e9339db36bb2caff47"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/typeof.js": function(o, e, t) {
                function n(o) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                        return typeof o
                    } : function(o) {
                        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                    })(o)
                }
                t.d(e, {
                    default: function() {
                        return n
                    }
                })
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/50229e439bb385e9339db36bb2caff47.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/5299ce84ba4422a4aa992d42329b1fb6.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 5299ce84ba4422a4aa992d42329b1fb6.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/5299ce84ba4422a4aa992d42329b1fb6"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js": function(e, n, r) {
                function a(e) {
                    if (Array.isArray(e)) return e
                }
                r.d(n, {
                    default: function() {
                        return a
                    }
                })
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/5299ce84ba4422a4aa992d42329b1fb6.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/55a4a810d4a2fbd784f64e9c74fa3ec9.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 55a4a810d4a2fbd784f64e9c74fa3ec9.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/55a4a810d4a2fbd784f64e9c74fa3ec9"], {
            "./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/use-props-value.js": function(e, n, u) {
                u.d(n, {
                    a: function() {
                        return c
                    },
                    u: function() {
                        return o
                    }
                });
                var r = u("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    t = u("webpack/container/remote/react"),
                    a = u.n(t);

                function c() {
                    var e = a().useState(),
                        n = (0, r.default)(e, 2)[1];
                    return a().useCallback((function() {
                        return n({})
                    }), [])
                }

                function o(e) {
                    var n = e.value,
                        u = e.defaultValue,
                        r = e.finalValue,
                        a = e.onChange,
                        o = void 0 === a ? function(e) {} : a,
                        i = c(),
                        s = void 0 !== u ? u : r,
                        l = (0, t.useRef)(void 0 !== n ? n : s);
                    void 0 !== n && (l.current = n);
                    var d = (0, t.useCallback)((function(e) {
                        var n = l.current;
                        l.current = e, n !== l.current && i(), null == o || o(e)
                    }), [n, o]);
                    return [l.current, d]
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/55a4a810d4a2fbd784f64e9c74fa3ec9.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/60da8e5a7381a7655cdebf74b3b82bbd.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 60da8e5a7381a7655cdebf74b3b82bbd.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/60da8e5a7381a7655cdebf74b3b82bbd"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js": function(e, t, r) {
                r.d(t, {
                    default: function() {
                        return i
                    }
                });
                var n = r("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/typeof.js");

                function i(e, t) {
                    if ("object" != (0, n.default)(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(e, t || "default");
                        if ("object" != (0, n.default)(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/60da8e5a7381a7655cdebf74b3b82bbd.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/643a8c16a98b0ac48fee198a46001f25.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 643a8c16a98b0ac48fee198a46001f25.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/643a8c16a98b0ac48fee198a46001f25"], {
            "./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/style_icon.css": function() {}
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/643a8c16a98b0ac48fee198a46001f25.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/656dcb41506dd82bf4e3649d50030aa5.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 656dcb41506dd82bf4e3649d50030aa5.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/656dcb41506dd82bf4e3649d50030aa5"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js": function(e, n, l) {
                l.d(n, {
                    default: function() {
                        return r
                    }
                });
                var s = l("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"),
                    u = l("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js"),
                    m = l("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),
                    o = l("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");

                function r(e, n) {
                    return (0, s.default)(e) || (0, u.default)(e, n) || (0, m.default)(e, n) || (0, o.default)()
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/656dcb41506dd82bf4e3649d50030aa5.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/7f5b9ebfeb838c951d3e80421739c824.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 7f5b9ebfeb838c951d3e80421739c824.js.LICENSE.txt */
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/7f5b9ebfeb838c951d3e80421739c824"], {
            "./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/typeof.js": function(o) {
                function e(t) {
                    return o.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                        return typeof o
                    } : function(o) {
                        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                    }, o.exports.__esModule = !0, o.exports.default = o.exports, e(t)
                }
                o.exports = e, o.exports.__esModule = !0, o.exports.default = o.exports
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/7f5b9ebfeb838c951d3e80421739c824.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/83c00dbfc5e0b365e94755e74e99c21e.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 83c00dbfc5e0b365e94755e74e99c21e.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/83c00dbfc5e0b365e94755e74e99c21e"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, r) {
                r.d(n, {
                    default: function() {
                        return o
                    }
                });
                var u = r("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

                function o(e, n, r) {
                    return (n = (0, u.default)(n)) in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = r, e
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/83c00dbfc5e0b365e94755e74e99c21e.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/9a5ff4cd880cf91987cc27a94e6e4115.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 9a5ff4cd880cf91987cc27a94e6e4115.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/9a5ff4cd880cf91987cc27a94e6e4115"], {
            "./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/index.es.js": function(n, e, s) {
                s.d(e, {
                    JoySmile: function() {
                        return o.default
                    },
                    StarFillN: function() {
                        return u.default
                    }
                });
                var o = s("./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/icons/JoySmile.js"),
                    u = s("./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/icons/StarFillN.js");
                s("./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/style_icon.css")
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/9a5ff4cd880cf91987cc27a94e6e4115.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/a5a885b11f0712b78aa3b3ca95407012.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see a5a885b11f0712b78aa3b3ca95407012.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/a5a885b11f0712b78aa3b3ca95407012"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js": function(e, n, o) {
                o.d(n, {
                    default: function() {
                        return m
                    }
                });
                var s = o("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/typeof.js"),
                    u = o("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js");

                function m(e) {
                    var n = (0, u.default)(e, "string");
                    return "symbol" == (0, s.default)(n) ? n : n + ""
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/a5a885b11f0712b78aa3b3ca95407012.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/b1891c2d0b06af8d218b542641f4ed40.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see b1891c2d0b06af8d218b542641f4ed40.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/b1891c2d0b06af8d218b542641f4ed40"], {
            "./src/packages/campus-card/api/pay.ts": function(a, e, n) {
                n.d(e, {
                    payByCampusCard: function() {
                        return r
                    },
                    payForNet: function() {
                        return t
                    }
                });
                var r = function(a, e) {
                        return e.request({
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            url: "/e-card/pay/consume",
                            method: "POST",
                            data: {
                                orderId: a
                            }
                        }, {
                            base: "main"
                        })
                    },
                    t = function(a, e, n) {
                        return n.request({
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            url: "/e-card/pay/net/card",
                            method: "POST",
                            data: {
                                amount: a,
                                password: e
                            }
                        }, {
                            base: "main"
                        })
                    }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/b1891c2d0b06af8d218b542641f4ed40.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/c41cd8159e79e226c9b93f0e65b931bd.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see c41cd8159e79e226c9b93f0e65b931bd.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/c41cd8159e79e226c9b93f0e65b931bd"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js": function(e, n, t) {
                function o() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                t.d(n, {
                    default: function() {
                        return o
                    }
                })
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/c41cd8159e79e226c9b93f0e65b931bd.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/c7ed0abc524d3c7e623f43b45d89a5cb.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see c7ed0abc524d3c7e623f43b45d89a5cb.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/c7ed0abc524d3c7e623f43b45d89a5cb"], {
            "./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/icons/JoySmile.js": function(e, n, t) {
                t.d(n, {
                    default: function() {
                        return u
                    }
                });
                var o = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    s = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    l = t("./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/icons/jsx-runtime-f8fc01f8.mjs"),
                    i = t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),
                    a = t.n(i),
                    c = (t("webpack/container/remote/react"), {
                        className: "",
                        style: void 0,
                        name: "JoySmile",
                        width: "",
                        height: "",
                        onClick: function() {}
                    }),
                    u = function(e) {
                        var n = (0, s.default)((0, s.default)({}, c), e),
                            t = n.className,
                            i = n.style,
                            u = n.name,
                            d = n.color,
                            r = n.width,
                            m = n.height,
                            p = n.onClick,
                            f = function(e) {
                                return "" === e ? "" : isNaN(Number(e)) ? String(e) : e + "px"
                            },
                            b = {},
                            h = f(r || ""),
                            w = f(m || "");
                        return h && (b.width = h), w && (b.height = w), (0, l.j)(l.F, {
                            children: (0, l.j)("svg", {
                                className: function() {
                                    var e, n = "nut-icon";
                                    return a()((e = {}, (0, o.default)(e, "".concat(t), t), (0, o.default)(e, n, !0), (0, o.default)(e, n + "-" + u, u), e))
                                }(),
                                style: (0, s.default)((0, s.default)({}, i), b),
                                onClick: function(e) {
                                    p && p(e)
                                },
                                xmlns: "http://www.w3.org/2000/svg",
                                color: d,
                                viewBox: "0 0 3072 1024",
                                "aria-labelledby": u,
                                role: "presentation",
                                children: (0, l.j)("path", {
                                    d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
                                    fill: "currentColor",
                                    fillOpacity: "0.9"
                                })
                            })
                        })
                    };
                u.defaultProps = c
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/c7ed0abc524d3c7e623f43b45d89a5cb.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/d1c76ddd847397c4b16622472b316248.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see d1c76ddd847397c4b16622472b316248.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/d1c76ddd847397c4b16622472b316248"], {
            "./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/typings.js": function(t, e, n) {
                n.d(e, {
                    C: function() {
                        return u
                    }
                });
                var u = {
                    className: "",
                    style: {}
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/d1c76ddd847397c4b16622472b316248.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/ef5d36d73b87f4e75ecc11cbcbb5c1e2.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see ef5d36d73b87f4e75ecc11cbcbb5c1e2.js.LICENSE.txt */
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/ef5d36d73b87f4e75ecc11cbcbb5c1e2"], {
            "./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js": function(e, n, r) {
                var t, o = r("webpack/container/remote/@tarojs/runtime").window,
                    a = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/typeof.js").default;
                ! function() {
                    "use strict";
                    var s = {}.hasOwnProperty;

                    function u() {
                        for (var e = "", n = 0; n < arguments.length; n++) {
                            var r = arguments[n];
                            r && (e = c(e, i(r)))
                        }
                        return e
                    }

                    function i(e) {
                        if ("string" == typeof e || "number" == typeof e) return e;
                        if ("object" !== a(e)) return "";
                        if (Array.isArray(e)) return u.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                        var n = "";
                        for (var r in e) s.call(e, r) && e[r] && (n = c(n, r));
                        return n
                    }

                    function c(e, n) {
                        return n ? e ? e + " " + n : e + n : e
                    }
                    e.exports ? (u.default = u, e.exports = u) : "object" === a(r.amdO) && r.amdO ? void 0 === (t = function() {
                        return u
                    }.apply(n, [])) || (e.exports = t) : o.classNames = u
                }()
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/ef5d36d73b87f4e75ecc11cbcbb5c1e2.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-common/fd701aca8114a25a26eddbfbae8e153d.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see fd701aca8114a25a26eddbfbae8e153d.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/fd701aca8114a25a26eddbfbae8e153d"], {
            "./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js": function(e, n, r) {
                function t(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, l, u, a, o = [],
                            i = !0,
                            f = !1;
                        try {
                            if (u = (r = r.call(e)).next, 0 === n) {
                                if (Object(r) !== r) return;
                                i = !1
                            } else
                                for (; !(i = (t = u.call(r)).done) && (o.push(t.value), o.length !== n); i = !0);
                        } catch (e) {
                            f = !0, l = e
                        } finally {
                            try {
                                if (!i && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (f) throw l
                            }
                        }
                        return o
                    }
                }
                r.d(n, {
                    default: function() {
                        return t
                    }
                })
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-common/fd701aca8114a25a26eddbfbae8e153d.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/stadium-booking/sub-vendors.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see sub-vendors.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/stadium-booking/sub-vendors"], {
            "./src/packages/stadium-booking/api/index.ts": function(e, t, n) {
                n.d(t, {
                    bookingStadium: function() {
                        return c
                    },
                    cacelBooking: function() {
                        return s
                    },
                    getBookingList: function() {
                        return i
                    },
                    getGymList: function() {
                        return r
                    },
                    getGymType: function() {
                        return a
                    },
                    getNoticeData: function() {
                        return o
                    },
                    getOrderData: function() {
                        return l
                    },
                    getTimeTable: function() {
                        return u
                    }
                });
                var o = function(e) {
                        return e.request({
                            url: "/venue/ad/notice",
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    },
                    a = function(e) {
                        return e.request({
                            url: "/venue/user/types",
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    },
                    r = function(e, t, n, o) {
                        return o.request({
                            url: "/venue/user/stadiums/".concat(e),
                            method: "GET",
                            data: {
                                hour: t,
                                date: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    u = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                                var t = e.getDate(),
                                    n = e.getMonth() + 1,
                                    o = e.getFullYear(),
                                    a = "".concat(n >= 10 ? "" : "0").concat(n),
                                    r = "".concat(t >= 10 ? "" : "0").concat(t);
                                return "".concat(o, "-").concat(a, "-").concat(r)
                            }(new Date),
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return console.log(t), n.request({
                            url: "/venue/user/time/display/".concat(e),
                            method: "GET",
                            data: {
                                date: t
                            }
                        }, {
                            base: "main"
                        })
                    },
                    s = function(e, t) {
                        return t.request({
                            url: "/venue/user/cancel/".concat(e),
                            method: "POST"
                        }, {
                            base: "main"
                        })
                    },
                    i = function(e) {
                        return e.request({
                            url: "/venue/user/orders",
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    },
                    c = function(e, t, n) {
                        return n.request({
                            url: "/venue/user/booking/pomelo/".concat(e),
                            method: "POST",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                date: t
                            }
                        }, {
                            base: "main"
                        })
                    },
                    l = function(e, t) {
                        return t.request({
                            url: "/venue/user/booking/pomelo/sign/".concat(e),
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    }
            },
            "./src/packages/stadium-booking/common/assets.ts": function(e, t, n) {
                n.d(t, {
                    STADIUM_BOOKING_ASSETS: function() {
                        return r
                    },
                    STADIUM_BOOKING_LOCAL: function() {
                        return a
                    }
                });
                var o = n("./src/constants/assets.ts"),
                    a = {
                        Clock: "/packages/stadium-booking/assets/clock.svg",
                        Notice: "/packages/stadium-booking/assets/notice.svg"
                    },
                    r = new Proxy({
                        Gym: "packages/stadium-booking/gym.png",
                        Tennis: "packages/stadium-booking/tennis.png",
                        Badminton: "packages/stadium-booking/badminton.png",
                        Basketball: "packages/stadium-booking/basketball.png"
                    }, o.handler)
            },
            "./src/packages/stadium-booking/module/hook.ts": function(e, t, n) {
                n.d(t, {
                    useIndexData: function() {
                        return u
                    },
                    useNoticesData: function() {
                        return r
                    },
                    useTimeTableData: function() {
                        return s
                    }
                });
                var o = n("webpack/container/remote/react-redux"),
                    a = n("./src/packages/stadium-booking/module/store.ts"),
                    r = function() {
                        return (0, o.useSelector)(a.getNoticeData)
                    },
                    u = function() {
                        return (0, o.useSelector)(a.getStadiumBookingData)
                    },
                    s = function() {
                        return (0, o.useSelector)(a.getTimeTableData)
                    }
            },
            "./src/packages/stadium-booking/module/index.ts": function(e, t, n) {
                n.d(t, {
                    StadiumBookingModule: function() {
                        return v
                    },
                    useTimeTableData: function() {
                        return y.useTimeTableData
                    }
                });
                var o, a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    u = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    s = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    i = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    c = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    l = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    d = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    m = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    p = n("webpack/container/remote/@tarojs/taro"),
                    g = n.n(p),
                    f = n("./src/constants/module.ts"),
                    b = n("./src/packages/campus-card/api/pay.ts"),
                    k = n("./src/common/mini4/Mini4BaseModule.ts"),
                    h = n("./src/packages/stadium-booking/api/index.ts"),
                    T = n("./src/packages/stadium-booking/module/store.ts"),
                    y = n("./src/packages/stadium-booking/module/hook.ts"),
                    v = new((0, k.injectReducers)(T.Slice)(o = function(e, t) {
                        (0, l.default)(o, e);
                        var n = (0, d.default)(o);

                        function o() {
                            var e, t;
                            (0, s.default)(this, o);
                            for (var i = arguments.length, l = new Array(i), d = 0; d < i; d++) l[d] = arguments[d];
                            return t = n.call.apply(n, [this].concat(l)), (0, m.default)((0, c.default)(t), "id", f.ModuleID.stadiumBooking), (0, m.default)((0, c.default)(t), "refresh", (function() {
                                return g().showLoading({
                                    title: "加载中"
                                }), Promise.all([(0, h.getGymType)(t.requestController), (0, h.getNoticeData)(t.requestController), (0, h.getBookingList)(t.requestController)]).then((function(e) {
                                    var n = (0, u.default)(e, 3),
                                        o = n[0],
                                        a = n[1],
                                        r = n[2];
                                    t.store.dispatch((0, T.setNotice)(a.data)), t.store.dispatch((0, T.setGymType)(o.data)), t.store.dispatch((0, T.setBookingList)(r.data)), g().hideLoading(), g().showToast({
                                        title: "刷新成功",
                                        icon: "success"
                                    })
                                })).catch((function(e) {
                                    var t = e.errMsg;
                                    g().showToast({
                                        title: t,
                                        icon: "error"
                                    })
                                }))
                            })), (0, m.default)((0, c.default)(t), "getGymList", (function(e, n, o) {
                                return (0, h.getGymList)(e, n, o, t.requestController)
                            })), (0, m.default)((0, c.default)(t), "getTimeTable", (function(n, o) {
                                return (e = e || (0, r.default)((0, a.default)().mark((function e(n, o) {
                                    return (0, a.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", new Promise((function(e, a) {
                                                    (0, h.getTimeTable)(n, o, t.requestController).then((function(n) {
                                                        t.store.dispatch(T.Slice.actions.setTimeTable(n.data)), e(n.data)
                                                    })).catch((function(e) {
                                                        a(e)
                                                    }))
                                                })));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))).apply(this, arguments)
                            })), (0, m.default)((0, c.default)(t), "bookingStadium", (function(e, n) {
                                return (0, h.bookingStadium)(e, n, t.requestController)
                            })), (0, m.default)((0, c.default)(t), "payByCampusCard", (function(e) {
                                return (0, b.payByCampusCard)(e, t.requestController)
                            })), (0, m.default)((0, c.default)(t), "cancelOrder", (function(e) {
                                return (0, h.cacelBooking)(e, t.requestController)
                            })), (0, m.default)((0, c.default)(t), "getOrderData", (function(e) {
                                return (0, h.getOrderData)(e, t.requestController)
                            })), t
                        }
                        return (0, i.default)(o, [{
                            key: "auto",
                            value: function() {
                                return (t = t || (0, r.default)((0, a.default)().mark((function e() {
                                    var t = this;
                                    return (0, a.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", Promise.allSettled([(0, h.getBookingList)(this.requestController), (0, h.getNoticeData)(this.requestController), (0, h.getGymType)(this.requestController)]).then((function(e) {
                                                    var n = (0, u.default)(e, 3),
                                                        o = n[0].value,
                                                        a = n[1].value,
                                                        r = n[2].value;
                                                    t.store.dispatch((0, T.setNotice)(a.data)), t.store.dispatch((0, T.setGymType)(r.data)), t.store.dispatch((0, T.setBookingList)(o.data))
                                                })));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }]), o
                    }(k.Mini4BaseModule)) || o)
            },
            "./src/packages/stadium-booking/module/store.ts": function(e, t, n) {
                n.d(t, {
                    Slice: function() {
                        return o
                    },
                    getNoticeData: function() {
                        return u
                    },
                    getStadiumBookingData: function() {
                        return a
                    },
                    getTimeTableData: function() {
                        return r
                    },
                    setBookingList: function() {
                        return i
                    },
                    setGymType: function() {
                        return c
                    },
                    setNotice: function() {
                        return l
                    }
                });
                var o = (0, n("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "stadiumBooking",
                        initialState: {
                            notice: [],
                            gymType: [],
                            timeTable: [],
                            bookingList: []
                        },
                        reducers: {
                            setNotice: function(e, t) {
                                e.notice = t.payload
                            },
                            setGymType: function(e, t) {
                                e.gymType = t.payload
                            },
                            setBookingList: function(e, t) {
                                e.bookingList = t.payload
                            },
                            setTimeTable: function(e, t) {
                                e.timeTable = t.payload
                            }
                        }
                    }),
                    a = function(e) {
                        return e.stadiumBooking
                    },
                    r = function(e) {
                        return e.stadiumBooking.timeTable
                    },
                    u = function(e) {
                        return e.stadiumBooking.notice
                    },
                    s = o.actions,
                    i = s.setBookingList,
                    c = s.setGymType,
                    l = s.setNotice
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/stadium-booking/sub-vendors.js'
});