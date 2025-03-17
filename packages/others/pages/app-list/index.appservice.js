$gwx3_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_0 || [];

        function gz$gwx3_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_0 = true;
        var x = ['./packages/others/pages/app-list/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_0_1()
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
                g = "$gwx3_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/app-list/index.wxml'] = [$gwx3_XC_0, './packages/others/pages/app-list/index.wxml'];
else __wxAppCode__['packages/others/pages/app-list/index.wxml'] = $gwx3_XC_0('./packages/others/pages/app-list/index.wxml');;
__wxRoute = "packages/others/pages/app-list/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/app-list/index.js";
define("packages/others/pages/app-list/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/app-list/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/app-list/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return b
                    }
                });
                var t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    r = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    n = a("webpack/container/remote/@tarojs/taro"),
                    o = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    c = a("./src/common/hook.ts"),
                    p = a("./src/components/PageLayout/index.tsx"),
                    d = a("./src/components/PageScroll/index.tsx"),
                    l = a("./src/packages/others/pages/app-list/AppCardItem/index.tsx"),
                    i = a("./src/common/module/app/index.ts"),
                    m = a("webpack/container/remote/react/jsx-runtime"),
                    u = a("webpack/container/remote/react"),
                    x = function(e) {
                        var s = e.title,
                            a = e.data;
                        return (0, m.jsxs)(o.View, {
                            className: "app-card",
                            children: [(0, m.jsx)(o.Text, {
                                className: "card-title",
                                children: s
                            }), (0, m.jsx)(o.View, {
                                className: "card-content",
                                children: a.map((function(e) {
                                    return (0, u.createElement)(l.AppCardItem, (0, r.default)((0, r.default)({}, e), {}, {
                                        key: e.id
                                    }))
                                }))
                            })]
                        })
                    },
                    h = function() {
                        var e = (0, i.useAllApps)(),
                            s = (0, i.useEditApps)(),
                            a = (0, i.useEditState)(),
                            c = (0, t.default)(a, 2),
                            p = c[0],
                            h = c[1];
                        return (0, n.useUnload)((function() {
                            p && i.AppListModule.refreshEdit()
                        })), (0, m.jsxs)(d.PageScroll, {
                            className: "app-list",
                            children: [(0, m.jsxs)(o.View, {
                                className: "app-list-head",
                                children: [(0, m.jsxs)(o.View, {
                                    className: "head-wrap",
                                    children: [(0, m.jsxs)(o.View, {
                                        className: "head-apps",
                                        children: [(0, m.jsx)(o.Text, {
                                            className: "head-apps-title",
                                            children: "主页应用"
                                        }), s.map((function(e) {
                                            return (0, m.jsx)(o.Image, {
                                                className: "head-apps-item",
                                                src: e.url.getNetCacheAsset()
                                            }, e.id)
                                        }))]
                                    }), (0, m.jsx)(o.View, {
                                        className: "head-edit",
                                        onClick: function() {
                                            if (!p) return h(!0);
                                            i.AppListModule.saveHomeApps(s)
                                        },
                                        children: (0, m.jsx)(o.Text, {
                                            className: "head-edit-text",
                                            children: p ? "保存" : "编辑"
                                        })
                                    })]
                                }), (0, m.jsx)(o.View, {
                                    className: "head-home-apps ".concat(p ? "expand" : ""),
                                    children: (0, m.jsx)(o.View, {
                                        className: "home-apps-wrap",
                                        children: s.map((function(e) {
                                            return (0, u.createElement)(l.AppCardItem, (0, r.default)((0, r.default)({}, e), {}, {
                                                key: e.id
                                            }))
                                        }))
                                    })
                                })]
                            }), (0, m.jsx)(o.View, {
                                className: "app-list-main",
                                children: e.map((function(e, s) {
                                    return (0, m.jsx)(x, {
                                        title: e[0],
                                        data: e[1]
                                    }, s)
                                }))
                            })]
                        })
                    };

                function b() {
                    var e = (0, c.useModule)(i.AppListModule),
                        s = e.loading,
                        a = e.success;
                    return (0, m.jsx)(p.Layout, {
                        titleText: "应用中心",
                        loading: s,
                        success: a,
                        children: (0, m.jsx)(h, {})
                    })
                }
            },
            "./src/packages/others/pages/app-list/AppCardItem/index.tsx": function(e, s, a) {
                a.d(s, {
                    AppCardItem: function() {
                        return i
                    }
                });
                var t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    r = a("webpack/container/remote/react"),
                    n = a("webpack/container/remote/@tarojs/taro"),
                    o = a.n(n),
                    c = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    p = a("./src/constants/assets.ts"),
                    d = a("./src/common/module/app/index.ts"),
                    l = a("webpack/container/remote/react/jsx-runtime"),
                    i = (0, r.memo)((function(e) {
                        var s = e.id,
                            a = e.name,
                            r = e.url,
                            i = e.open,
                            m = e.path,
                            u = e.isEdit,
                            x = void 0 !== u && u,
                            h = (0, d.useEditState)(),
                            b = (0, t.default)(h, 1)[0],
                            j = (0, d.useIsEditApps)(a);
                        return (0, l.jsxs)(c.View, {
                            className: "app-card-item",
                            onClick: function() {
                                b ? x || j ? d.AppListModule.deleteHomeApp(s) : d.AppListModule.addHomeApp(s) : i ? (0, n.navigateTo)({
                                    url: m
                                }) : o().showModal({
                                    title: "提示",
                                    content: "模块维护中",
                                    showCancel: !1
                                })
                            },
                            children: [b ? x || j ? (0, l.jsx)(c.Image, {
                                src: p.LOCAL_ASSETS.COMMON.Subtraction,
                                className: "card-icon-subtraction"
                            }) : (0, l.jsx)(c.Image, {
                                src: p.LOCAL_ASSETS.COMMON.Addition,
                                className: "card-icon-addition"
                            }) : null, (0, l.jsx)(c.Image, {
                                src: r.getNetCacheAsset(),
                                className: "card-item-icon ".concat(i ? "" : "close")
                            }), (0, l.jsx)(c.Text, {
                                className: "card-item-text",
                                children: a
                            })]
                        })
                    }))
            },
            "./src/packages/others/pages/app-list/index.tsx": function(e, s, a) {
                var t = a("webpack/container/remote/@tarojs/runtime"),
                    r = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/app-list/index.tsx");
                Page((0, t.createPageConfig)(r.default, "packages/others/pages/app-list/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "应用中心",
                    backgroundColor: "#F5F5F5",
                    disableScroll: !0
                } || {})), r.default
            }
        },
        function(e) {
            e.O(0, ["taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/app-list/index.tsx", e(e.s = "./src/packages/others/pages/app-list/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/app-list/index.js'
});
require("packages/others/pages/app-list/index.js");