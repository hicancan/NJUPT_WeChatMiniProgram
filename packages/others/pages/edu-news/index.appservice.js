$gwx3_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_4 || [];

        function gz$gwx3_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_4 = true;
        var x = ['./packages/others/pages/edu-news/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_4_1()
            var aZ = e_[x[0]].i
            _ai(aZ, x[1], e_, x[0], 1, 1)
            var t1 = _v()
            _(r, t1)
            var e2 = _oz(z, 1, e, s, gg)
            var b3 = _gd(x[0], e2, e_, d_)
            if (b3) {
                var o4 = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                t1.wxXCkey = 3
                b3(o4, o4, t1, gg)
                gg.f = cur_globalf
            } else _w(e2, x[0], 2, 14)
            aZ.pop()
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
                g = "$gwx3_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/edu-news/index.wxml'] = [$gwx3_XC_4, './packages/others/pages/edu-news/index.wxml'];
else __wxAppCode__['packages/others/pages/edu-news/index.wxml'] = $gwx3_XC_4('./packages/others/pages/edu-news/index.wxml');;
__wxRoute = "packages/others/pages/edu-news/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/edu-news/index.js";
define("packages/others/pages/edu-news/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/edu-news/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/edu-news/index.tsx": function(e, s, n) {
                n.d(s, {
                    default: function() {
                        return h
                    }
                });
                var t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    o = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    c = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    d = n("webpack/container/remote/@tarojs/taro"),
                    u = n.n(d),
                    l = n("./src/common/hook.ts"),
                    i = n("./src/components/PageLayout/index.tsx"),
                    p = n("./src/packages/others/module/edu-news/index.ts"),
                    m = n("./src/components/PageScroll/index.tsx"),
                    b = n("./src/components/LoadingIcon/index.tsx"),
                    f = n("webpack/container/remote/react"),
                    w = n("./src/packages/others/pages/edu-news/news-item/index.tsx"),
                    g = n("./src/packages/others/pages/utils/debounce.ts"),
                    x = n("webpack/container/remote/react/jsx-runtime");

                function h() {
                    var e, s = (0, f.useRef)(1),
                        n = (0, l.useModule)(p.EduModule),
                        d = n.loading,
                        h = n.success,
                        _ = (0, p.useEduNews)(),
                        k = (0, f.useState)([]),
                        j = (0, c.default)(k, 2)[1];
                    (0, f.useEffect)((function() {
                        return _.length > 0 && j(_),
                            function() {
                                j([])
                            }
                    }), [_]);
                    var v = (0, g.deBounce)((function() {
                        ! function() {
                            (e = e || (0, o.default)((0, a.default)().mark((function e() {
                                var n;
                                return (0, a.default)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!d) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, p.EduModule.LoadEduNews(s.current);
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
                        titleText: "教务快讯",
                        loading: d,
                        success: h,
                        backgroundColor: "#F5F5F5",
                        children: (0, x.jsxs)(m.PageScroll, {
                            onScroll: function(e) {
                                var s = e.detail,
                                    n = s.scrollTop;
                                s.scrollHeight - n <= u().getSystemInfoSync().windowHeight + 10 && v()
                            },
                            children: [_.map((function(e) {
                                return (0, f.createElement)(w.default, (0, t.default)((0, t.default)({}, e), {}, {
                                    key: e.id
                                }))
                            })), (0, x.jsx)(b.default, {})]
                        })
                    })
                }
            },
            "./src/packages/others/pages/edu-news/index.tsx": function(e, s, n) {
                var t = n("webpack/container/remote/@tarojs/runtime"),
                    a = n("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/edu-news/index.tsx");
                Page((0, t.createPageConfig)(a.default, "packages/others/pages/edu-news/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), a.default
            },
            "./src/packages/others/pages/edu-news/news-item/index.tsx": function(e, s, n) {
                n.d(s, {
                    default: function() {
                        return l
                    }
                });
                var t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    r = n("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = n("webpack/container/remote/@tarojs/taro"),
                    c = n("./src/packages/others/module/edu-news/index.ts"),
                    d = n("./src/packages/others/assets/back.svg"),
                    u = n("webpack/container/remote/react/jsx-runtime");

                function l(e) {
                    var s, n;
                    return (0, u.jsxs)(r.View, {
                        className: "news-item",
                        onClick: function() {
                            (0, o.navigateTo)({
                                url: "/packages/others/pages/detail-info/edu-detail/index"
                            }),
                            function(e) {
                                (s = s || (0, a.default)((0, t.default)().mark((function e(s) {
                                    return (0, t.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c.EduModule.DetailInfo(s);
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
                        children: [(0, u.jsx)(r.View, {
                            className: "news-header",
                            children: e.title
                        }), (0, u.jsx)(r.Image, {
                            className: "news-header-icon",
                            src: d
                        }), (0, u.jsx)(r.View, {
                            className: "news-content",
                            children: null === (n = e.description) || void 0 === n ? void 0 : n.trimLeft()
                        }), (0, u.jsx)(r.Text, {
                            className: "news-time",
                            children: e.date
                        })]
                    })
                }
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "sub-common/5cadce6ba9a3c23f663c84fdf39fc435", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/edu-news/index.tsx", e(e.s = "./src/packages/others/pages/edu-news/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/edu-news/index.js'
});
require("packages/others/pages/edu-news/index.js");