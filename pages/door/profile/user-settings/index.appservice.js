$gwx_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];

        function gz$gwx_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [8], 'root', [
                        [7],
                        [3, 'root']
                    ]
                ])
                Z([3, 'taro_tmpl'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
        var x = ['./pages/door/profile/user-settings/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_7_1()
            var xIB = e_[x[0]].i
            _ai(xIB, x[1], e_, x[0], 1, 1)
            var oJB = _v()
            _(r, oJB)
            var fKB = _oz(z, 1, e, s, gg)
            var cLB = _gd(x[0], fKB, e_, d_)
            if (cLB) {
                var hMB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                oJB.wxXCkey = 3
                cLB(hMB, hMB, oJB, gg)
                gg.f = cur_globalf
            } else _w(fKB, x[0], 2, 14)
            xIB.pop()
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [x[1]],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/user-settings/index.wxml'] = [$gwx_XC_7, './pages/door/profile/user-settings/index.wxml'];
else __wxAppCode__['pages/door/profile/user-settings/index.wxml'] = $gwx_XC_7('./pages/door/profile/user-settings/index.wxml');;
__wxRoute = "pages/door/profile/user-settings/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/door/profile/user-settings/index.js";
define("pages/door/profile/user-settings/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see index.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["pages/door/profile/user-settings/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/user-settings/index.tsx": function(e, o, s) {
                s.d(o, {
                    default: function() {
                        return p
                    }
                });
                var t = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    n = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    r = s("./src/common/hook.ts"),
                    a = s("./src/components/PageLayout/index.tsx"),
                    u = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    c = s("webpack/container/remote/react"),
                    l = s("./src/common/auth/index.ts"),
                    i = s("webpack/container/remote/react/jsx-runtime");

                function d() {
                    var e = (0, l.useNoticeInfo)(),
                        o = e.map((function(e) {
                            return e.value
                        })),
                        s = (0, c.useState)(o),
                        r = (0, n.default)(s, 2),
                        a = r[0],
                        d = r[1],
                        p = function(e, o) {
                            var s;
                            return function() {
                                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                s && clearTimeout(s), s = setTimeout((function() {
                                    e.apply(void 0, n)
                                }), o)
                            }
                        };
                    return l.AuthModule.initNoticeInfo(), (0, c.useEffect)((function() {
                        d(e.map((function(e) {
                            return e.value
                        })))
                    }), [e]), (0, i.jsx)(u.View, {
                        children: e.map((function(e, o) {
                            return (0, i.jsxs)(u.View, {
                                className: e.status ? "collapse unfold" : "collapse ",
                                children: [(0, i.jsxs)(u.View, {
                                    className: "option-item",
                                    style: e.status ? {
                                        borderRadius: "20rpx 20rpx 0rpx 0rpx"
                                    } : {
                                        borderRadius: "20rpx"
                                    },
                                    children: [(0, i.jsxs)(u.Text, {
                                        children: [e.role.description, "通知"]
                                    }), (0, i.jsx)(u.Switch, {
                                        className: "switch-btn",
                                        checked: !!e.status,
                                        color: "#1A8CF4",
                                        onChange: p((function() {
                                            return function(e, o) {
                                                0 == e.status ? l.AuthModule.changeNoticeInfo(1, o + 1) : e.status && l.AuthModule.changeNoticeInfo(0, o + 1)
                                            }(e, o)
                                        }), 300)
                                    })]
                                }), (0, i.jsxs)(u.View, {
                                    className: "notice-value-area",
                                    children: [(0, i.jsxs)(u.View, {
                                        className: "notice-switch",
                                        children: [(0, i.jsx)(u.Text, {
                                            children: "是否同步企业微信"
                                        }), (0, i.jsx)(u.Switch, {
                                            className: "switch-btn-qw",
                                            checked: 2 === e.status,
                                            color: "#1A8CF4",
                                            onChange: p((function() {
                                                return function(e, o) {
                                                    2 == e.status ? l.AuthModule.changeNoticeInfo(1, o + 1) : 1 == e.status && l.AuthModule.changeNoticeInfo(2, o + 1)
                                                }(e, o)
                                            }), 300)
                                        })]
                                    }), (0, i.jsxs)(u.View, {
                                        className: "notice-value-input",
                                        children: [(0, i.jsx)(u.Text, {
                                            children: "设置提示阈值"
                                        }), (0, i.jsx)(u.Input, {
                                            type: "number",
                                            value: a[o].toString(),
                                            placeholder: "0",
                                            maxlength: 3,
                                            onInput: function(e) {
                                                var s;
                                                ! function(e, o) {
                                                    var s = (0, t.default)(a);
                                                    s[o] = e, d(s)
                                                }(null === (s = e.target) || void 0 === s ? void 0 : s.value, o)
                                            },
                                            onBlur: function() {
                                                var s = {
                                                    status: e.status,
                                                    code: o + 1,
                                                    value: a[o]
                                                };
                                                l.AuthModule.changeNoticeInfo(s.status, s.code, s.value)
                                            }
                                        }), (0, i.jsx)(u.Text, {
                                            className: "unit",
                                            children: e.role.code < 2 ? "度" : "元"
                                        })]
                                    })]
                                })]
                            }, e.role.code)
                        }))
                    })
                }

                function p() {
                    var e = (0, r.useModule)(l.AuthModule),
                        o = e.loading,
                        s = e.success;
                    return (0, i.jsx)(a.Layout, {
                        titleText: "设置",
                        loading: o,
                        success: s,
                        backgroundColor: "#F5F5F5",
                        children: (0, i.jsx)(d, {})
                    })
                }
            },
            "./src/pages/door/profile/user-settings/index.tsx": function(e, o, s) {
                var t = s("webpack/container/remote/@tarojs/runtime"),
                    n = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/user-settings/index.tsx");
                Page((0, t.createPageConfig)(n.default, "pages/door/profile/user-settings/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), n.default
            }
        },
        function(e) {
            e.O(0, ["taro", "vendors", "common"], (function() {
                return "./src/pages/door/profile/user-settings/index.tsx", e(e.s = "./src/pages/door/profile/user-settings/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/door/profile/user-settings/index.js'
});
require("pages/door/profile/user-settings/index.js");