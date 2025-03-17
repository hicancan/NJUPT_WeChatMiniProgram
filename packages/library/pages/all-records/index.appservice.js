$gwx2_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_0 || [];

        function gz$gwx2_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx2_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx2_XC_0 = true;
        var x = ['./packages/library/pages/all-records/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx2_XC_0_1()
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
                g = "$gwx2_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/library/pages/all-records/index.wxml'] = [$gwx2_XC_0, './packages/library/pages/all-records/index.wxml'];
else __wxAppCode__['packages/library/pages/all-records/index.wxml'] = $gwx2_XC_0('./packages/library/pages/all-records/index.wxml');;
__wxRoute = "packages/library/pages/all-records/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/library/pages/all-records/index.js";
define("packages/library/pages/all-records/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/library/pages/all-records/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/library/pages/all-records/index.tsx": function(e, s, o) {
                o.d(s, {
                    default: function() {
                        return d
                    }
                });
                var a = o("./src/common/hook.ts"),
                    r = o("./src/components/PageLayout/index.tsx"),
                    n = o("./src/packages/library/module/index.ts"),
                    c = o("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    l = o("./src/packages/library/module/hook.ts"),
                    i = o("webpack/container/remote/react/jsx-runtime"),
                    t = function() {
                        var e = (0, l.useBookData)();
                        return (0, i.jsx)(i.Fragment, {
                            children: (0, i.jsxs)(c.View, {
                                className: "book-available-list",
                                children: [(0, i.jsxs)(c.View, {
                                    className: "book-available-head",
                                    children: [(0, i.jsx)(c.View, {
                                        className: "book-content",
                                        children: "索书号"
                                    }), (0, i.jsx)(c.View, {
                                        className: "book-content",
                                        children: "条码号"
                                    }), (0, i.jsx)(c.View, {
                                        className: "book-content",
                                        children: "年卷期"
                                    }), (0, i.jsx)(c.View, {
                                        className: "book-content-wide",
                                        children: "馆藏地点"
                                    }), (0, i.jsx)(c.View, {
                                        className: "book-content",
                                        children: "书刊状态"
                                    })]
                                }), (0, i.jsx)(c.View, {
                                    className: "divide"
                                }), (0, i.jsx)(c.View, {
                                    className: "divide"
                                }), e.positionDetail.map((function(e, s) {
                                    return (0, i.jsxs)(c.View, {
                                        className: "book-available-item",
                                        children: [(0, i.jsx)(c.View, {
                                            className: "book-content",
                                            style: {
                                                paddingLeft: "5px"
                                            },
                                            children: e.storePosition.callNo
                                        }), (0, i.jsx)(c.View, {
                                            className: "book-content",
                                            children: e.storePosition.bookBarCode
                                        }), (0, i.jsx)(c.View, {
                                            className: "book-content",
                                            children: e.storePosition.AnnualPeriod || "-"
                                        }), (0, i.jsx)(c.View, {
                                            className: "book-content-wide",
                                            children: e.storePosition.collectionAddr
                                        }), (0, i.jsx)(c.View, {
                                            className: "book-content",
                                            children: e.storePosition.status.slice(0, 2)
                                        })]
                                    }, s)
                                }))]
                            })
                        })
                    };

                function d() {
                    var e = (0, a.useModule)(n.LibraryModule),
                        s = e.loading,
                        o = e.success;
                    return (0, i.jsx)(r.Layout, {
                        titleText: "全部馆藏",
                        loading: s,
                        success: o,
                        backgroundColor: "#FBFBFB",
                        children: (0, i.jsx)(t, {})
                    })
                }
            },
            "./src/packages/library/pages/all-records/index.tsx": function(e, s, o) {
                var a = o("webpack/container/remote/@tarojs/runtime"),
                    r = o("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/library/pages/all-records/index.tsx");
                Page((0, a.createPageConfig)(r.default, "packages/library/pages/all-records/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "全部馆藏",
                    disableScroll: !0,
                    backgroundColor: "#FFFFFF",
                    backgroundTextStyle: "dark"
                } || {})), r.default
            }
        },
        function(e) {
            e.O(0, ["packages/library/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/library/pages/all-records/index.tsx", e(e.s = "./src/packages/library/pages/all-records/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/library/pages/all-records/index.js'
});
require("packages/library/pages/all-records/index.js");