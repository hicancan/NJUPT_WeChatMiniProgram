$gwx5_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_2 || [];

        function gz$gwx5_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx5_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx5_XC_2 = true;
        var x = ['./packages/stadium-booking/pages/notices/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx5_XC_2_1()
            var eN = e_[x[0]].i
            _ai(eN, x[1], e_, x[0], 1, 1)
            var bO = _v()
            _(r, bO)
            var oP = _oz(z, 1, e, s, gg)
            var xQ = _gd(x[0], oP, e_, d_)
            if (xQ) {
                var oR = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                bO.wxXCkey = 3
                xQ(oR, oR, bO, gg)
                gg.f = cur_globalf
            } else _w(oP, x[0], 2, 14)
            eN.pop()
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
                g = "$gwx5_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/stadium-booking/pages/notices/index.wxml'] = [$gwx5_XC_2, './packages/stadium-booking/pages/notices/index.wxml'];
else __wxAppCode__['packages/stadium-booking/pages/notices/index.wxml'] = $gwx5_XC_2('./packages/stadium-booking/pages/notices/index.wxml');;
__wxRoute = "packages/stadium-booking/pages/notices/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/stadium-booking/pages/notices/index.js";
define("packages/stadium-booking/pages/notices/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/b1891c2d0b06af8d218b542641f4ed40.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/stadium-booking/pages/notices/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/stadium-booking/pages/notices/index.tsx": function(e, s, o) {
                o.d(s, {
                    default: function() {
                        return m
                    }
                });
                var a = o("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = o("./src/common/hook.ts"),
                    c = o("./src/components/PageLayout/index.tsx"),
                    t = o("./src/components/PageScroll/index.tsx"),
                    i = o("./src/packages/stadium-booking/components/notice-card/index.tsx"),
                    r = o("./src/packages/stadium-booking/module/hook.ts"),
                    d = o("./src/packages/stadium-booking/module/index.ts"),
                    u = o("webpack/container/remote/react/jsx-runtime"),
                    p = function() {
                        var e = (0, r.useNoticesData)();
                        return (0, u.jsx)(t.PageScroll, {
                            className: "notice-wrap",
                            children: (0, u.jsx)(a.View, {
                                className: "notices-container",
                                children: e.map((function(e) {
                                    return (0, u.jsx)(i.NoticeCard, {
                                        noticeInfo: e
                                    }, e.id)
                                }))
                            })
                        })
                    };

                function m() {
                    var e = (0, n.useModule)(d.StadiumBookingModule),
                        s = e.loading,
                        o = e.success;
                    return (0, u.jsx)(c.Layout, {
                        titleText: "场地预约",
                        loading: s,
                        success: o,
                        children: (0, u.jsx)(p, {})
                    })
                }
            },
            "./src/packages/stadium-booking/components/notice-card/index.tsx": function(e, s, o) {
                o.d(s, {
                    NoticeCard: function() {
                        return t
                    }
                });
                var a = o("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = o("./src/packages/stadium-booking/common/assets.ts"),
                    c = o("webpack/container/remote/react/jsx-runtime");

                function t(e) {
                    var s = e.noticeInfo;
                    return (0, c.jsxs)(a.View, {
                        className: "card-container",
                        children: [(0, c.jsxs)(a.View, {
                            className: "header",
                            children: [(0, c.jsxs)(a.View, {
                                className: "notice-item",
                                children: [(0, c.jsx)(a.Image, {
                                    className: "notice-icon",
                                    src: n.STADIUM_BOOKING_LOCAL.Notice
                                }), (0, c.jsx)(a.Text, {
                                    className: "notice-desc",
                                    children: s.title
                                })]
                            }), (0, c.jsx)(a.Text, {
                                className: "notice-time",
                                children: s.createTime.substring(0, 16)
                            })]
                        }), (0, c.jsx)(a.View, {
                            className: "main",
                            children: s.content
                        })]
                    })
                }
            },
            "./src/packages/stadium-booking/pages/notices/index.tsx": function(e, s, o) {
                var a = o("webpack/container/remote/@tarojs/runtime"),
                    n = o("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/stadium-booking/pages/notices/index.tsx");
                Page((0, a.createPageConfig)(n.default, "packages/stadium-booking/pages/notices/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), n.default
            }
        },
        function(e) {
            e.O(0, ["packages/stadium-booking/sub-vendors", "sub-common/b1891c2d0b06af8d218b542641f4ed40", "taro", "vendors", "common"], (function() {
                return "./src/packages/stadium-booking/pages/notices/index.tsx", e(e.s = "./src/packages/stadium-booking/pages/notices/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/stadium-booking/pages/notices/index.js'
});
require("packages/stadium-booking/pages/notices/index.js");