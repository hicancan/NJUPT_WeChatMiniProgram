$gwx_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];

        function gz$gwx_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./pages/door/profile/update-log/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var f7 = e_[x[0]].i
            _ai(f7, x[1], e_, x[0], 1, 1)
            var c8 = _v()
            _(r, c8)
            var h9 = _oz(z, 1, e, s, gg)
            var o0 = _gd(x[0], h9, e_, d_)
            if (o0) {
                var cAB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                c8.wxXCkey = 3
                o0(cAB, cAB, c8, gg)
                gg.f = cur_globalf
            } else _w(h9, x[0], 2, 14)
            f7.pop()
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
                g = "$gwx_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/update-log/index.wxml'] = [$gwx_XC_5, './pages/door/profile/update-log/index.wxml'];
else __wxAppCode__['pages/door/profile/update-log/index.wxml'] = $gwx_XC_5('./pages/door/profile/update-log/index.wxml');;
__wxRoute = "pages/door/profile/update-log/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/door/profile/update-log/index.js";
define("pages/door/profile/update-log/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see index.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["pages/door/profile/update-log/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/update-log/index.tsx": function(e, o, s) {
                s.d(o, {
                    default: function() {
                        return u
                    }
                });
                var t = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    r = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = s("webpack/container/remote/react"),
                    a = s("./src/components/PageLayout/index.tsx"),
                    l = s("./src/components/PageScroll/index.tsx"),
                    c = s("./src/components/Wigets/index.tsx"),
                    d = s("./src/pages/door/profile/update-log/LogItem/index.tsx"),
                    i = s("webpack/container/remote/react/jsx-runtime"),
                    p = function() {
                        var e = (0, n.useRef)(10),
                            o = [],
                            s = (0, n.useState)(1),
                            a = (0, t.default)(s, 2),
                            p = a[0],
                            u = a[1],
                            m = (0, n.useState)(0),
                            x = (0, t.default)(m, 2),
                            g = x[0],
                            f = x[1];
                        return (0, i.jsx)(l.PageScroll, {
                            scrollWithAnimation: !0,
                            scrollTop: g,
                            onScrollToLower: function() {
                                o.length > p * e.current && u((function(e) {
                                    return ++e
                                }))
                            },
                            children: (0, i.jsxs)(c.LayoutLightweight, {
                                children: [o.slice(0, p * e.current).map((function(e, o) {
                                    return (0, i.jsx)(d.default, {
                                        log: e
                                    }, o)
                                })), (0, i.jsx)(r.View, {
                                    className: "toTop",
                                    onClick: function() {
                                        return f(Math.random())
                                    },
                                    children: "Top"
                                })]
                            })
                        })
                    };

                function u() {
                    return (0, i.jsx)(a.Layout, {
                        titleText: "更新日志",
                        success: !0,
                        loading: !1,
                        children: (0, i.jsx)(p, {})
                    })
                }
            },
            "./src/pages/door/profile/update-log/LogItem/index.tsx": function(e, o, s) {
                s.d(o, {
                    default: function() {
                        return a
                    }
                });
                var t = s("./src/constants/assets.ts"),
                    r = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = s("webpack/container/remote/react/jsx-runtime");

                function a(e) {
                    var o = e.log;
                    return (0, n.jsxs)(r.View, {
                        className: "log-item-wrap",
                        children: [(0, n.jsxs)(r.View, {
                            className: "item-header",
                            children: [(0, n.jsx)(r.Image, {
                                src: t.PROFILE_ASSETS.Circle,
                                className: "header-round"
                            }), (0, n.jsx)(r.Text, {
                                children: o.title
                            })]
                        }), (0, n.jsx)(r.View, {
                            className: "item-body",
                            children: "" === o.content ? null : (0, n.jsxs)(r.View, {
                                children: [(0, n.jsx)(r.View, {
                                    className: "change-item",
                                    children: "更新概述："
                                }), o.content.map((function(e, o) {
                                    return (0, n.jsxs)(r.View, {
                                        className: "change-item",
                                        children: [o + 1, ". ", e]
                                    }, o)
                                }))]
                            })
                        })]
                    })
                }
            },
            "./src/pages/door/profile/update-log/index.tsx": function(e, o, s) {
                var t = s("webpack/container/remote/@tarojs/runtime"),
                    r = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/update-log/index.tsx");
                Page((0, t.createPageConfig)(r.default, "pages/door/profile/update-log/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), r.default
            }
        },
        function(e) {
            e.O(0, ["taro", "vendors", "common"], (function() {
                return "./src/pages/door/profile/update-log/index.tsx", e(e.s = "./src/pages/door/profile/update-log/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/door/profile/update-log/index.js'
});
require("pages/door/profile/update-log/index.js");