$gwx3_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_2 || [];

        function gz$gwx3_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_2 = true;
        var x = ['./packages/others/pages/detail-info/edu-detail/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_2_1()
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
                g = "$gwx3_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/detail-info/edu-detail/index.wxml'] = [$gwx3_XC_2, './packages/others/pages/detail-info/edu-detail/index.wxml'];
else __wxAppCode__['packages/others/pages/detail-info/edu-detail/index.wxml'] = $gwx3_XC_2('./packages/others/pages/detail-info/edu-detail/index.wxml');;
__wxRoute = "packages/others/pages/detail-info/edu-detail/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/detail-info/edu-detail/index.js";
define("packages/others/pages/detail-info/edu-detail/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/detail-info/edu-detail/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/edu-detail/index.tsx": function(e, s, a) {
                var t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    o = a("./src/components/PageLayout/index.tsx"),
                    n = a("./src/common/hook.ts"),
                    r = a("webpack/container/remote/react"),
                    d = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    c = a("./src/packages/others/module/edu-news/index.ts"),
                    i = a("./src/packages/others/pages/detail-info/utils/preView.ts"),
                    l = a("./src/packages/others/pages/detail-info/utils/replaceScript.ts"),
                    u = a("webpack/container/remote/react/jsx-runtime");
                s.default = function() {
                    var e = (0, c.useEduNewsDetail)(),
                        s = "https://jwc.njupt.edu.cn",
                        a = (0, n.useModule)(c.EduModule),
                        p = a.loading,
                        m = a.success,
                        f = (0, r.useState)(""),
                        b = (0, t.default)(f, 2),
                        g = b[0],
                        w = b[1];
                    (0, r.useEffect)((function() {
                        w(e.content)
                    }), [e.content]);
                    var _ = function(e) {
                            var a = e.startsWith("http") ? e : "".concat(s).concat(e);
                            (0, i.PreViewFile)(a)
                        },
                        h = g ? (0, l.replaceScript)(g, s, _) : "";
                    return (0, u.jsx)(o.Layout, {
                        titleText: "教务快讯",
                        loading: p,
                        success: m,
                        backgroundColor: "#ffffff",
                        children: g && (0, u.jsxs)(d.View, {
                            className: "container",
                            children: [(0, u.jsx)(d.View, {
                                className: "title",
                                children: e.title
                            }), (0, u.jsxs)(d.View, {
                                className: "info",
                                children: [(0, u.jsx)(d.View, {
                                    className: "date",
                                    children: e.data
                                }), (0, u.jsxs)(d.View, {
                                    className: "viewCount",
                                    children: ["阅读量：", e.viewCount]
                                })]
                            }), (0, u.jsx)(d.View, {
                                onClick: function(e) {
                                    var s = e.target;
                                    s && s.dataset && s.dataset.href && _(s.dataset.href)
                                },
                                dangerouslySetInnerHTML: {
                                    __html: h
                                }
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/pages/detail-info/edu-detail/index.tsx": function(e, s, a) {
                var t = a("webpack/container/remote/@tarojs/runtime"),
                    o = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/edu-detail/index.tsx");
                Page((0, t.createPageConfig)(o.default, "packages/others/pages/detail-info/edu-detail/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), o.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/detail-info/edu-detail/index.tsx", e(e.s = "./src/packages/others/pages/detail-info/edu-detail/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/detail-info/edu-detail/index.js'
});
require("packages/others/pages/detail-info/edu-detail/index.js");