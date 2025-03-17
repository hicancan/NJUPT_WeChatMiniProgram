$gwx3_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_7 || [];

        function gz$gwx3_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_7 = true;
        var x = ['./packages/others/pages/notice-announcement/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_7_1()
            var oHB = e_[x[0]].i
            _ai(oHB, x[1], e_, x[0], 1, 1)
            var xIB = _v()
            _(r, xIB)
            var oJB = _oz(z, 1, e, s, gg)
            var fKB = _gd(x[0], oJB, e_, d_)
            if (fKB) {
                var cLB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                xIB.wxXCkey = 3
                fKB(cLB, cLB, xIB, gg)
                gg.f = cur_globalf
            } else _w(oJB, x[0], 2, 14)
            oHB.pop()
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
                g = "$gwx3_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/notice-announcement/index.wxml'] = [$gwx3_XC_7, './packages/others/pages/notice-announcement/index.wxml'];
else __wxAppCode__['packages/others/pages/notice-announcement/index.wxml'] = $gwx3_XC_7('./packages/others/pages/notice-announcement/index.wxml');;
__wxRoute = "packages/others/pages/notice-announcement/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/notice-announcement/index.js";
define("packages/others/pages/notice-announcement/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/notice-announcement/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/notice-announcement/index.tsx": function(e, n, s) {
                s.d(n, {
                    default: function() {
                        return _
                    }
                });
                var t = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    o = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    a = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    r = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    c = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    u = s("webpack/container/remote/@tarojs/taro"),
                    d = s.n(u),
                    l = s("./src/common/hook.ts"),
                    i = s("./src/components/PageLayout/index.tsx"),
                    m = s("./src/packages/others/module/notice-annoucement/index.ts"),
                    p = s("./src/components/PageScroll/index.tsx"),
                    b = s("./src/components/LoadingIcon/index.tsx"),
                    f = s("webpack/container/remote/react"),
                    g = s("./src/packages/others/pages/notice-announcement/news-item/index.tsx"),
                    x = s("./src/packages/others/pages/utils/debounce.ts"),
                    h = s("webpack/container/remote/react/jsx-runtime");

                function _() {
                    var e, n = (0, f.useRef)(1),
                        s = (0, l.useModule)(m.AnnouceModule),
                        u = s.loading,
                        _ = s.success,
                        k = (0, m.useAnnoucement)(),
                        w = (0, f.useState)([]),
                        j = (0, c.default)(w, 2)[1];
                    (0, f.useEffect)((function() {
                        return k.length > 0 && j(k),
                            function() {
                                j([])
                            }
                    }), [k]);
                    var v = (0, x.deBounce)((function() {
                        ! function() {
                            (e = e || (0, r.default)((0, o.default)().mark((function e() {
                                var s;
                                return (0, o.default)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!u) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, m.AnnouceModule.LoadAnnoucement(n.current);
                                        case 4:
                                            s = e.sent, j((function(e) {
                                                return [].concat((0, a.default)(e), (0, a.default)(s))
                                            })), n.current++;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }()
                    }), 1e3);
                    return (0, h.jsx)(i.Layout, {
                        titleText: "通知公告",
                        loading: u,
                        success: _,
                        backgroundColor: "#F5F5F5",
                        children: (0, h.jsxs)(p.PageScroll, {
                            onScroll: function(e) {
                                var n = e.detail,
                                    s = n.scrollTop;
                                n.scrollHeight - s <= d().getSystemInfoSync().windowHeight && v()
                            },
                            children: [k.map((function(e) {
                                return (0, f.createElement)(g.default, (0, t.default)((0, t.default)({}, e), {}, {
                                    key: e.id
                                }))
                            })), (0, h.jsx)(b.default, {})]
                        })
                    })
                }
            },
            "./src/packages/others/pages/notice-announcement/index.tsx": function(e, n, s) {
                var t = s("webpack/container/remote/@tarojs/runtime"),
                    o = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/notice-announcement/index.tsx");
                Page((0, t.createPageConfig)(o.default, "packages/others/pages/notice-announcement/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), o.default
            },
            "./src/packages/others/pages/notice-announcement/news-item/index.tsx": function(e, n, s) {
                s.d(n, {
                    default: function() {
                        return l
                    }
                });
                var t = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    o = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    a = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    r = s("webpack/container/remote/@tarojs/taro"),
                    c = s("./src/packages/others/module/notice-annoucement/index.ts"),
                    u = s("./src/packages/others/assets/back.svg"),
                    d = s("webpack/container/remote/react/jsx-runtime");

                function l(e) {
                    var n, s;
                    return (0, d.jsxs)(a.View, {
                        className: "news-item",
                        onClick: function() {
                            (0, r.navigateTo)({
                                url: "/packages/others/pages/detail-info/annouce-detail/index"
                            }),
                            function(e) {
                                (n = n || (0, o.default)((0, t.default)().mark((function e(n) {
                                    return (0, t.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c.AnnouceModule.DetailInfo(n);
                                            case 3:
                                                e.next = 8;
                                                break;
                                            case 5:
                                                e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 5]
                                    ])
                                })))).apply(this, arguments)
                            }(e.url)
                        },
                        children: [(0, d.jsx)(a.View, {
                            className: "news-header",
                            children: e.title
                        }), (0, d.jsx)(a.Image, {
                            className: "news-header-icon",
                            src: u
                        }), (0, d.jsx)(a.View, {
                            className: "news-content",
                            children: null === (s = e.description) || void 0 === s ? void 0 : s.trimLeft()
                        }), (0, d.jsx)(a.Text, {
                            className: "news-time",
                            children: e.date
                        })]
                    })
                }
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "sub-common/5cadce6ba9a3c23f663c84fdf39fc435", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/notice-announcement/index.tsx", e(e.s = "./src/packages/others/pages/notice-announcement/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/notice-announcement/index.js'
});
require("packages/others/pages/notice-announcement/index.js");