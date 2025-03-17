$gwx3_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_1 || [];

        function gz$gwx3_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_1 = true;
        var x = ['./packages/others/pages/detail-info/annouce-detail/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_1_1()
            var oH = e_[x[0]].i
            _ai(oH, x[1], e_, x[0], 1, 1)
            var cI = _v()
            _(r, cI)
            var oJ = _oz(z, 1, e, s, gg)
            var lK = _gd(x[0], oJ, e_, d_)
            if (lK) {
                var aL = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                cI.wxXCkey = 3
                lK(aL, aL, cI, gg)
                gg.f = cur_globalf
            } else _w(oJ, x[0], 2, 14)
            oH.pop()
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
                g = "$gwx3_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/detail-info/annouce-detail/index.wxml'] = [$gwx3_XC_1, './packages/others/pages/detail-info/annouce-detail/index.wxml'];
else __wxAppCode__['packages/others/pages/detail-info/annouce-detail/index.wxml'] = $gwx3_XC_1('./packages/others/pages/detail-info/annouce-detail/index.wxml');;
__wxRoute = "packages/others/pages/detail-info/annouce-detail/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/detail-info/annouce-detail/index.js";
define("packages/others/pages/detail-info/annouce-detail/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/detail-info/annouce-detail/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/annouce-detail/index.tsx": function(e, t, a) {
                var s = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    n = a("./src/components/PageLayout/index.tsx"),
                    o = a("./src/common/hook.ts"),
                    r = a("webpack/container/remote/react"),
                    c = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    i = a("./src/packages/others/module/notice-annoucement/index.ts"),
                    l = a("./src/packages/others/pages/detail-info/utils/preView.ts"),
                    d = a("./src/packages/others/pages/detail-info/utils/deepReplace.ts"),
                    p = a("webpack/container/remote/react/jsx-runtime");
                t.default = function() {
                    var e = "https://www.njupt.edu.cn",
                        t = (0, i.useAnnouceDetail)(),
                        a = (0, o.useModule)(i.AnnouceModule),
                        u = a.loading,
                        f = a.success,
                        g = (0, r.useState)(""),
                        m = (0, s.default)(g, 2),
                        h = m[0],
                        b = m[1];
                    (0, r.useEffect)((function() {
                        b(t.content)
                    }), [t.content]);
                    var x = function(t) {
                            var a = t.startsWith("http") ? t : "".concat(e).concat(t);
                            (0, l.PreViewFile)(a)
                        },
                        w = h ? (0, d.replaceScriptDeep)(h, e, x) : "";
                    return (0, p.jsx)(n.Layout, {
                        titleText: "通知公告",
                        loading: u,
                        success: f,
                        backgroundColor: "#ffffff",
                        children: h && (0, p.jsxs)(c.View, {
                            className: "container",
                            children: [(0, p.jsx)(c.View, {
                                className: "title",
                                children: t.title
                            }), (0, p.jsxs)(c.View, {
                                className: "info",
                                children: [(0, p.jsx)(c.View, {
                                    className: "date",
                                    children: t.data
                                }), (0, p.jsxs)(c.View, {
                                    className: "viewCount",
                                    children: ["阅读量：", t.viewCount]
                                })]
                            }), (0, p.jsx)(c.View, {
                                onClick: function(e) {
                                    var t = e.target;
                                    t && t.dataset && t.dataset.href && x(t.dataset.href)
                                },
                                dangerouslySetInnerHTML: {
                                    __html: w
                                }
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/pages/detail-info/annouce-detail/index.tsx": function(e, t, a) {
                var s = a("webpack/container/remote/@tarojs/runtime"),
                    n = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/annouce-detail/index.tsx");
                Page((0, s.createPageConfig)(n.default, "packages/others/pages/detail-info/annouce-detail/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), n.default
            },
            "./src/packages/others/pages/detail-info/utils/deepReplace.ts": function(e, t, a) {
                function s(e, t, a) {
                    var s = /font-size:\s*([^;]+);/g,
                        n = /text-indent:\s*([^;]+);/g,
                        o = e.replace(/&nbsp;/g, " ");
                    return (o = (o = (o = (o = (o = o.replace(/(<img\s+.*?src=(['"])([^'"]+)(['"])\s*.*?>)|(&nbsp;)|(font-size:\s*([^;]+);)|(text-indent:\s*([^;]+);)|(mso-[^:]+:[^;]+;)/g, (function(e, a, o, r, c, i, l, d, p) {
                        if (i) return " ";
                        if (a) {
                            if (r.toLowerCase().endsWith(".gif")) return '<img src="'.concat(t).concat(r, '" style="width: 10px; height: 10px; object-fit: cover; margin-right: 8px; font-size: 16px;"/>');
                            var u = "".concat(t).concat(r),
                                f = e.replace(s, "");
                            return (f = (f = f.replace(n, "")).replace(/mso-[^:]+:[^;]+;/g, "")).replace(r, u)
                        }
                        return l ? "font-size: 16px;" : d || p ? "" : e
                    }))).replace(/<tr\s+.*?>/g, "<tr>")).replace(/<td\s+.*?>/g, "<td>")).replace(/<table\s+.*?>/g, "<table>")).replace(/<a\s+href=["']([^"']+)["']\s*.*?>(.*?)<\/a>/g, (function(e, a, s) {
                        var n = a.startsWith("http") ? a : "".concat(t).concat(a);
                        return '<span class="hidelink" style="color: #1ABADE; width: 100%; display: block; padding: 5px 0; text-decoration: underline; cursor: pointer; position: relative;  width: 100%;" data-href="'.concat(n, '">').concat(s, "</span>")
                    }))).replace(/margin-bottom:\s*[^;]+;/g, "")
                }
                a.d(t, {
                    replaceScriptDeep: function() {
                        return s
                    }
                })
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/detail-info/annouce-detail/index.tsx", e(e.s = "./src/packages/others/pages/detail-info/annouce-detail/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/detail-info/annouce-detail/index.js'
});
require("packages/others/pages/detail-info/annouce-detail/index.js");