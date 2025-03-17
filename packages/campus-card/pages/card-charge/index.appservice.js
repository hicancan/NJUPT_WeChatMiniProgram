$gwx0_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_0 || [];

        function gz$gwx0_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_0 = true;
        var x = ['./packages/campus-card/pages/card-charge/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_0_1()
            var oB = e_[x[0]].i
            _ai(oB, x[1], e_, x[0], 1, 1)
            var xC = _v()
            _(r, xC)
            var oD = _oz(z, 1, e, s, gg)
            var fE = _gd(x[0], oD, e_, d_)
            if (fE) {
                var cF = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                xC.wxXCkey = 3
                fE(cF, cF, xC, gg)
                gg.f = cur_globalf
            } else _w(oD, x[0], 2, 14)
            oB.pop()
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
                g = "$gwx0_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/campus-card/pages/card-charge/index.wxml'] = [$gwx0_XC_0, './packages/campus-card/pages/card-charge/index.wxml'];
else __wxAppCode__['packages/campus-card/pages/card-charge/index.wxml'] = $gwx0_XC_0('./packages/campus-card/pages/card-charge/index.wxml');;
__wxRoute = "packages/campus-card/pages/card-charge/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/campus-card/pages/card-charge/index.js";
define("packages/campus-card/pages/card-charge/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/campus-card/pages/card-charge/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/campus-card/pages/card-charge/index.tsx": function(e, a, s) {
                s.d(a, {
                    default: function() {
                        return g
                    }
                });
                var r = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    c = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    n = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = s("webpack/container/remote/@tarojs/taro"),
                    d = s.n(o),
                    t = s("./src/common/module/home/index.ts"),
                    u = s("./src/components/PageLayout/index.tsx"),
                    l = s("./src/components/BindCard/index.tsx"),
                    p = s("./src/packages/campus-card/assets/index.ts"),
                    i = s("./src/packages/campus-card/module/card/index.ts"),
                    m = s("webpack/container/remote/react/jsx-runtime"),
                    b = function() {
                        var e = (0, t.useIsBind)(),
                            a = (0, i.useCampusCardBalance)();
                        return (0, o.usePullDownRefresh)((0, c.default)((0, r.default)().mark((function e() {
                            return (0, r.default)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        console.log("下拉刷新"), setTimeout((function() {
                                            d().stopPullDownRefresh(), d().showToast({
                                                title: "成功",
                                                icon: "success",
                                                duration: 2e3
                                            })
                                        }), 2e3);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), (0, m.jsxs)(n.View, {
                            className: "container",
                            children: [(0, m.jsxs)(n.View, {
                                className: "head-bg",
                                children: [(0, m.jsx)(n.Image, {
                                    className: "head-img",
                                    src: p.CARD_OTHERS_ASSETS.Card
                                }), (0, m.jsx)(n.View, {
                                    className: "head-bg-title",
                                    children: "账户余额（元）"
                                }), (0, m.jsx)(n.View, {
                                    className: "head-bg-remain",
                                    children: a.amount / 100
                                })]
                            }), (0, m.jsx)(n.View, {
                                className: "main-container"
                            }), (0, m.jsx)(l.BindCardHalfPage, {
                                show: !e,
                                successCallback: i.CampusCardModule.refresh.bind(i.CampusCardModule)
                            })]
                        })
                    };

                function g() {
                    return (0, m.jsx)(u.Layout, {
                        titleText: "校园卡充值",
                        animation: !0,
                        loading: !1,
                        success: !1,
                        children: (0, m.jsx)(b, {})
                    })
                }
            },
            "./src/packages/campus-card/pages/card-charge/index.tsx": function(e, a, s) {
                var r = s("webpack/container/remote/@tarojs/runtime"),
                    c = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/campus-card/pages/card-charge/index.tsx");
                Page((0, r.createPageConfig)(c.default, "packages/campus-card/pages/card-charge/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "校园卡充值",
                    enablePullDownRefresh: !0,
                    backgroundTextStyle: "dark"
                } || {})), c.default
            }
        },
        function(e) {
            e.O(0, ["packages/campus-card/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/campus-card/pages/card-charge/index.tsx", e(e.s = "./src/packages/campus-card/pages/card-charge/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/campus-card/pages/card-charge/index.js'
});
require("packages/campus-card/pages/card-charge/index.js");