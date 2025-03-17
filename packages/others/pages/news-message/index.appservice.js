$gwx3_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_6 || [];

        function gz$gwx3_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_6 = true;
        var x = ['./packages/others/pages/news-message/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_6_1()
            var oBB = e_[x[0]].i
            _ai(oBB, x[1], e_, x[0], 1, 1)
            var lCB = _v()
            _(r, lCB)
            var aDB = _oz(z, 1, e, s, gg)
            var tEB = _gd(x[0], aDB, e_, d_)
            if (tEB) {
                var eFB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                lCB.wxXCkey = 3
                tEB(eFB, eFB, lCB, gg)
                gg.f = cur_globalf
            } else _w(aDB, x[0], 2, 14)
            oBB.pop()
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
                g = "$gwx3_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/news-message/index.wxml'] = [$gwx3_XC_6, './packages/others/pages/news-message/index.wxml'];
else __wxAppCode__['packages/others/pages/news-message/index.wxml'] = $gwx3_XC_6('./packages/others/pages/news-message/index.wxml');;
__wxRoute = "packages/others/pages/news-message/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/news-message/index.js";
define("packages/others/pages/news-message/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/news-message/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/news-message/index.tsx": function(e, s, n) {
                n.d(s, {
                    default: function() {
                        return h
                    }
                });
                var a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    o = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    c = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    d = n("webpack/container/remote/@tarojs/taro"),
                    l = n.n(d),
                    u = n("./src/common/hook.ts"),
                    i = n("./src/components/PageLayout/index.tsx"),
                    m = n("./src/packages/others/module/news-message/index.ts"),
                    p = n("./src/components/PageScroll/index.tsx"),
                    b = n("./src/components/LoadingIcon/index.tsx"),
                    g = n("webpack/container/remote/react"),
                    f = n("./src/packages/others/pages/news-message/news-item/index.tsx"),
                    w = n("./src/packages/others/pages/utils/debounce.ts"),
                    x = n("webpack/container/remote/react/jsx-runtime");

                function h() {
                    var e, s = (0, g.useRef)(1),
                        n = (0, u.useModule)(m.newsMessageModule),
                        d = n.loading,
                        h = n.success,
                        _ = (0, m.useNewsMessage)(),
                        k = (0, g.useState)([]),
                        j = (0, c.default)(k, 2)[1];
                    (0, g.useEffect)((function() {
                        return _.length > 0 && j(_),
                            function() {
                                j([])
                            }
                    }), [_]);
                    var v = (0, w.deBounce)((function() {
                        ! function() {
                            (e = e || (0, o.default)((0, t.default)().mark((function e() {
                                var n;
                                return (0, t.default)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!d) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, m.newsMessageModule.LoadNewsMessage(s.current);
                                        case 4:
                                            n = e.sent, j((function(e) {
                                                return [].concat((0, r.default)(e), (0, r.default)(n))
                                            })), s.current++;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }()
                    }), 1e3);
                    return (0, x.jsx)(i.Layout, {
                        titleText: "南邮要闻",
                        loading: d,
                        success: h,
                        backgroundColor: "#F5F5F5",
                        children: (0, x.jsxs)(p.PageScroll, {
                            onScroll: function(e) {
                                var s = e.detail,
                                    n = s.scrollTop;
                                s.scrollHeight - n <= l().getSystemInfoSync().windowHeight + 10 && v()
                            },
                            children: [_.map((function(e) {
                                return (0, g.createElement)(f.default, (0, a.default)((0, a.default)({}, e), {}, {
                                    key: e.id
                                }))
                            })), (0, x.jsx)(b.default, {})]
                        })
                    })
                }
            },
            "./src/packages/others/pages/news-message/index.tsx": function(e, s, n) {
                var a = n("webpack/container/remote/@tarojs/runtime"),
                    t = n("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/news-message/index.tsx");
                Page((0, a.createPageConfig)(t.default, "packages/others/pages/news-message/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), t.default
            },
            "./src/packages/others/pages/news-message/news-item/index.tsx": function(e, s, n) {
                n.d(s, {
                    default: function() {
                        return u
                    }
                });
                var a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    r = n("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = n("webpack/container/remote/@tarojs/taro"),
                    c = n("./src/packages/others/module/news-message/index.ts"),
                    d = n("./src/packages/others/assets/back.svg"),
                    l = n("webpack/container/remote/react/jsx-runtime");

                function u(e) {
                    var s, n;
                    return (0, l.jsxs)(r.View, {
                        className: "news-item",
                        onClick: function() {
                            (0, o.navigateTo)({
                                url: "/packages/others/pages/detail-info/news-detail/index"
                            }),
                            function(e) {
                                (s = s || (0, t.default)((0, a.default)().mark((function e(s) {
                                    return (0, a.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c.newsMessageModule.DetailInfo(s);
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
                        children: [(0, l.jsx)(r.View, {
                            className: "news-header",
                            children: e.title
                        }), (0, l.jsx)(r.Image, {
                            className: "news-header-icon",
                            src: d
                        }), (0, l.jsx)(r.View, {
                            className: "news-content",
                            children: null === (n = e.description) || void 0 === n ? void 0 : n.trimLeft()
                        }), (0, l.jsx)(r.Text, {
                            className: "news-time",
                            children: e.date
                        })]
                    })
                }
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "sub-common/5cadce6ba9a3c23f663c84fdf39fc435", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/news-message/index.tsx", e(e.s = "./src/packages/others/pages/news-message/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/news-message/index.js'
});
require("packages/others/pages/news-message/index.js");