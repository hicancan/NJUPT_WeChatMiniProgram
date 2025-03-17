$gwx0_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_3 || [];

        function gz$gwx0_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_3 = true;
        var x = ['./packages/campus-card/pages/card-index/money-log/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_3_1()
            var cT = e_[x[0]].i
            _ai(cT, x[1], e_, x[0], 1, 1)
            var hU = _v()
            _(r, hU)
            var oV = _oz(z, 1, e, s, gg)
            var cW = _gd(x[0], oV, e_, d_)
            if (cW) {
                var oX = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                hU.wxXCkey = 3
                cW(oX, oX, hU, gg)
                gg.f = cur_globalf
            } else _w(oV, x[0], 2, 14)
            cT.pop()
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
                g = "$gwx0_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/campus-card/pages/card-index/money-log/index.wxml'] = [$gwx0_XC_3, './packages/campus-card/pages/card-index/money-log/index.wxml'];
else __wxAppCode__['packages/campus-card/pages/card-index/money-log/index.wxml'] = $gwx0_XC_3('./packages/campus-card/pages/card-index/money-log/index.wxml');;
__wxRoute = "packages/campus-card/pages/card-index/money-log/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/campus-card/pages/card-index/money-log/index.js";
define("packages/campus-card/pages/card-index/money-log/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/campus-card/pages/card-index/money-log/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/campus-card/pages/card-index/money-log/index.tsx": function(e, a, s) {
                s.d(a, {
                    default: function() {
                        return p
                    }
                });
                var c = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    n = s("webpack/container/remote/react"),
                    r = s("webpack/container/remote/@tarojs/taro"),
                    o = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    d = s("./src/common/hook.ts"),
                    i = s("./src/components/PageLayout/index.tsx"),
                    t = s("./src/packages/campus-card/assets/index.ts"),
                    l = s("./src/packages/campus-card/module/card/index.ts"),
                    m = s("webpack/container/remote/react/jsx-runtime"),
                    u = function() {
                        var e = (0, l.useMoneyLogs)(),
                            a = (0, n.useState)(1),
                            s = (0, c.default)(a, 2),
                            d = s[0],
                            i = s[1];
                        return (0, r.useReachBottom)((function() {
                            l.CampusCardModule.getLogs(d).then((function() {
                                i(d + 1)
                            }))
                        })), (0, m.jsxs)(o.View, {
                            className: "container",
                            children: [(0, m.jsxs)(o.View, {
                                className: "header-tip",
                                children: [(0, m.jsx)(o.Image, {
                                    className: "image-container",
                                    src: t.CARD_COMMON_ASSETS.Notice
                                }), (0, m.jsx)(o.View, {
                                    className: "tip-font",
                                    children: "此表格只代表在小程序端的操作记录，不一定表示交易成功"
                                })]
                            }), (0, m.jsx)(o.ScrollView, {
                                scrollX: !0,
                                scrollY: !0,
                                children: (0, m.jsxs)(o.View, {
                                    className: "main-container",
                                    children: [(0, m.jsxs)(o.View, {
                                        className: "main-container-header",
                                        children: [(0, m.jsx)(o.View, {
                                            className: "header-item",
                                            children: "项目"
                                        }), (0, m.jsx)(o.View, {
                                            className: "header-item",
                                            children: "金额"
                                        }), (0, m.jsx)(o.View, {
                                            className: "header-item",
                                            children: "时间"
                                        })]
                                    }), e.map((function(e) {
                                        return (0, m.jsxs)(o.View, {
                                            className: "main-container-item",
                                            children: [(0, m.jsx)(o.View, {
                                                className: "main-item",
                                                children: e.productInfo
                                            }), (0, m.jsxs)(o.View, {
                                                className: "main-item",
                                                children: [e.transactionAmount / 100, "元"]
                                            }), (0, m.jsx)(o.View, {
                                                className: "main-item",
                                                children: e.orderCreationTime.substring(0, 10)
                                            })]
                                        }, e.orderId)
                                    }))]
                                })
                            })]
                        })
                    };

                function p() {
                    var e = (0, d.useModule)(l.CampusCardModule),
                        a = e.success,
                        s = e.loading;
                    return (0, m.jsx)(i.Layout, {
                        titleText: "金额操作记录",
                        loading: s,
                        success: a,
                        children: (0, m.jsx)(u, {})
                    })
                }
            },
            "./src/packages/campus-card/pages/card-index/money-log/index.tsx": function(e, a, s) {
                var c = s("webpack/container/remote/@tarojs/runtime"),
                    n = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/campus-card/pages/card-index/money-log/index.tsx");
                Page((0, c.createPageConfig)(n.default, "packages/campus-card/pages/card-index/money-log/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), n.default
            }
        },
        function(e) {
            e.O(0, ["packages/campus-card/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/campus-card/pages/card-index/money-log/index.tsx", e(e.s = "./src/packages/campus-card/pages/card-index/money-log/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/campus-card/pages/card-index/money-log/index.js'
});
require("packages/campus-card/pages/card-index/money-log/index.js");