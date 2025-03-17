$gwx_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];

        function gz$gwx_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
        var x = ['./pages/door/profile/feedback/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_4_1()
            var t1 = e_[x[0]].i
            _ai(t1, x[1], e_, x[0], 1, 1)
            var e2 = _v()
            _(r, e2)
            var b3 = _oz(z, 1, e, s, gg)
            var o4 = _gd(x[0], b3, e_, d_)
            if (o4) {
                var x5 = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                e2.wxXCkey = 3
                o4(x5, x5, e2, gg)
                gg.f = cur_globalf
            } else _w(b3, x[0], 2, 14)
            t1.pop()
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
                g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/feedback/index.wxml'] = [$gwx_XC_4, './pages/door/profile/feedback/index.wxml'];
else __wxAppCode__['pages/door/profile/feedback/index.wxml'] = $gwx_XC_4('./pages/door/profile/feedback/index.wxml');;
__wxRoute = "pages/door/profile/feedback/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/door/profile/feedback/index.js";
define("pages/door/profile/feedback/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see index.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["pages/door/profile/feedback/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/feedback/index.tsx": function(e, n, o) {
                o.d(n, {
                    default: function() {
                        return b
                    }
                });
                var s = o("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    t = o("webpack/container/remote/@tarojs/taro"),
                    r = o.n(t),
                    a = o("webpack/container/remote/react"),
                    c = o("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    i = o("./src/components/PageLayout/index.tsx"),
                    d = o("./src/components/Wigets/index.tsx"),
                    l = o("./src/constants/assets.ts"),
                    u = o("./src/components/PageScroll/index.tsx"),
                    p = o("./src/common/auth/index.ts"),
                    m = o("webpack/container/remote/react/jsx-runtime"),
                    f = function() {
                        var e = (0, p.useQuestions)();
                        return (0, m.jsxs)(m.Fragment, {
                            children: [(0, m.jsx)(u.PageScroll, {
                                offsetHeight: "120rpx",
                                children: (0, m.jsx)(c.View, {
                                    className: "feedback-container",
                                    children: e.map((function(e, n) {
                                        return console.log(e), (0, m.jsxs)(c.View, {
                                            className: "question-card",
                                            children: [(0, m.jsx)(c.View, {
                                                className: "main-title",
                                                children: e.title
                                            }), e.data.map((function(e) {
                                                return (0, m.jsx)(x, {
                                                    info: e
                                                }, e.id)
                                            }))]
                                        }, n)
                                    }))
                                })
                            }), (0, m.jsx)(c.View, {
                                className: "bottom",
                                onClick: function() {
                                    return p.AuthModule.withSomeQuestions()
                                },
                                children: (0, m.jsx)(c.Button, {
                                    className: "feedback",
                                    children: "在线客服"
                                })
                            })]
                        })
                    };

                function x(e) {
                    var n = e.info,
                        o = n.id,
                        t = n.answer,
                        i = n.question,
                        u = (0, a.useRef)(),
                        f = (0, a.useState)(!1),
                        x = (0, s.default)(f, 2),
                        b = x[0],
                        w = x[1];
                    return (0, a.useEffect)((function() {
                        r().nextTick((function() {
                            r().createSelectorQuery().select(".id_".concat(o, " .main-info")).boundingClientRect((function(e) {
                                e && (u.current = e.height)
                            })).exec()
                        }))
                    }), []), (0, m.jsx)(c.View, {
                        className: "detail-wrap id_".concat(o),
                        children: (0, m.jsxs)(c.View, {
                            className: "detail-title",
                            style: {
                                height: b ? "".concat(u.current, "px") : ""
                            },
                            onClick: function() {
                                w(!b), b || p.AuthModule.readQuestion(o)
                            },
                            children: [(0, m.jsx)(c.View, {
                                children: i
                            }), (0, m.jsx)(c.Image, {
                                className: "arrow-image",
                                src: l.PROFILE_ASSETS.BtnDown,
                                style: {
                                    transform: b ? "rotate(180deg)" : "rotate(0deg)"
                                }
                            }), (0, m.jsx)(d.Lightweight, {
                                children: (0, m.jsx)(c.View, {
                                    className: "main-info",
                                    children: t
                                })
                            })]
                        })
                    })
                }

                function b() {
                    return (0, m.jsx)(i.Layout, {
                        titleText: "疑问解答",
                        success: !0,
                        loading: !1,
                        needAuth: !1,
                        children: (0, m.jsx)(f, {})
                    })
                }
            },
            "./src/pages/door/profile/feedback/index.tsx": function(e, n, o) {
                var s = o("webpack/container/remote/@tarojs/runtime"),
                    t = o("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/feedback/index.tsx");
                Page((0, s.createPageConfig)(t.default, "pages/door/profile/feedback/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), t.default
            }
        },
        function(e) {
            e.O(0, ["taro", "vendors", "common"], (function() {
                return "./src/pages/door/profile/feedback/index.tsx", e(e.s = "./src/pages/door/profile/feedback/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/door/profile/feedback/index.js'
});
require("pages/door/profile/feedback/index.js");