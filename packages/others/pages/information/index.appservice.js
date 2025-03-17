$gwx3_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_5 || [];

        function gz$gwx3_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_5 = true;
        var x = ['./packages/others/pages/information/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_5_1()
            var o6 = e_[x[0]].i
            _ai(o6, x[1], e_, x[0], 1, 1)
            var f7 = _v()
            _(r, f7)
            var c8 = _oz(z, 1, e, s, gg)
            var h9 = _gd(x[0], c8, e_, d_)
            if (h9) {
                var o0 = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                f7.wxXCkey = 3
                h9(o0, o0, f7, gg)
                gg.f = cur_globalf
            } else _w(c8, x[0], 2, 14)
            o6.pop()
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
                g = "$gwx3_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/information/index.wxml'] = [$gwx3_XC_5, './packages/others/pages/information/index.wxml'];
else __wxAppCode__['packages/others/pages/information/index.wxml'] = $gwx3_XC_5('./packages/others/pages/information/index.wxml');;
__wxRoute = "packages/others/pages/information/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/information/index.js";
define("packages/others/pages/information/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/information/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/information/index.tsx": function(e, n, t) {
                t.d(n, {
                    default: function() {
                        return g
                    }
                });
                var a = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    s = t("webpack/container/remote/@tarojs/taro"),
                    o = t.n(s),
                    r = t("webpack/container/remote/react"),
                    c = t("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    i = t("./src/common/hook.ts"),
                    l = t("./src/components/PageLayout/index.tsx"),
                    u = t("./src/constants/assets.ts"),
                    d = t("./src/packages/others/assets/index.ts"),
                    m = t("./src/components/PageScroll/index.tsx"),
                    f = t("./src/common/module/notice/index.ts"),
                    p = t("webpack/container/remote/react/jsx-runtime");

                function x() {
                    var e = (0, f.useInformation)(),
                        n = (0, r.useRef)(),
                        t = (0, r.useRef)(15),
                        s = (0, r.useRef)(0),
                        i = (0, r.useState)(1),
                        l = (0, a.default)(i, 2),
                        x = l[0],
                        g = l[1],
                        j = (0, r.useState)(0),
                        b = (0, a.default)(j, 2),
                        w = b[0],
                        _ = b[1],
                        N = (0, r.useState)(),
                        k = (0, a.default)(N, 2),
                        S = k[0],
                        T = k[1];
                    return (0, r.useEffect)((function() {
                        o().nextTick((function() {
                            n.current = o().createAnimation({
                                duration: 300
                            }), _(0), T(n.current.left("0%").step().export())
                        }))
                    }), []), (0, r.useEffect)((function() {
                        n.current && T(n.current.left("".concat(25 * w, "%")).step().export())
                    }), [n, w]), (0, p.jsxs)(c.View, {
                        className: "information",
                        children: [(0, p.jsxs)(c.View, {
                            className: "info-tab",
                            children: [e.category.map((function(e, n) {
                                return (0, p.jsx)(c.View, {
                                    className: "tab-item",
                                    onClick: function() {
                                        _(n)
                                    },
                                    children: e.title
                                }, n)
                            })), (0, p.jsx)(c.View, {
                                className: "bottom-bar",
                                animation: S
                            })]
                        }), (0, p.jsxs)(c.View, {
                            className: "info-top",
                            children: [(0, p.jsx)(c.Text, {
                                className: "title",
                                children: "消息列表"
                            }), (0, p.jsxs)(c.View, {
                                className: "widgets",
                                children: [!e.unread || (0, p.jsx)(c.Image, {
                                    mode: "aspectFit",
                                    className: "icon",
                                    src: d.INFORMATION_ASSETS.AllRead,
                                    onClick: function() {
                                        return f.InformationModule.allRead()
                                    }
                                }), !e.category[0].info.length || (0, p.jsx)(c.Image, {
                                    mode: "aspectFit",
                                    className: "icon",
                                    src: d.INFORMATION_ASSETS.AllClear,
                                    onClick: function() {
                                        return f.InformationModule.allClear()
                                    }
                                })]
                            })]
                        }), (0, p.jsx)(m.PageScroll, {
                            className: "info-main",
                            offsetHeight: "180rpx",
                            onPullRefresh: f.InformationModule.getInformation.bind(f.InformationModule),
                            onTouchStart: function(e) {
                                var n = (0, a.default)(e.touches, 1)[0].pageX;
                                return s.current = n
                            },
                            onTouchEnd: function(e) {
                                var n = (0, a.default)(e.changedTouches, 1)[0].pageX;
                                if (n + 45 < s.current) {
                                    if (3 === w) return;
                                    _((function(e) {
                                        return ++e
                                    }))
                                }
                                if (n - s.current > 45) {
                                    if (0 === w) return;
                                    _((function(e) {
                                        return --e
                                    }))
                                }
                            },
                            onScrollToLower: function() {
                                e.category[w].info.length > x * t.current && g((function(e) {
                                    return ++e
                                }))
                            },
                            children: (0, p.jsx)(c.View, {
                                className: "card-list",
                                children: e.category[w].info.length ? e.category[w].info.slice(0, x * t.current).map((function(n, t) {
                                    w && (t = n, n = e.category[0].info[n]);
                                    var a = n,
                                        s = a.id,
                                        o = a.tag,
                                        r = a.read,
                                        i = a.title,
                                        l = a.content,
                                        u = a.createDate;
                                    return (0, p.jsxs)(c.View, {
                                        onClick: function() {
                                            r || f.InformationModule.read(s, t, e.category[3].tag.includes(o))
                                        },
                                        className: "card-item ".concat(r ? "" : "unread", " ").concat(6 == o ? "noread" : ""),
                                        children: [(0, p.jsxs)(c.View, {
                                            className: "left",
                                            children: [(0, p.jsxs)(c.View, {
                                                className: "title",
                                                children: [r ? null : (0, p.jsx)(c.View, {
                                                    className: "dot"
                                                }), (0, p.jsx)(c.Text, {
                                                    children: i
                                                })]
                                            }), (0, p.jsx)(c.Text, {
                                                className: "content",
                                                children: l
                                            }), (0, p.jsx)(c.Text, {
                                                className: "createtime",
                                                children: h(Date.now() - new Date(null == u ? void 0 : u.replace(" ", "T")).getTime())
                                            })]
                                        }), (0, p.jsx)(c.View, {
                                            className: "right"
                                        })]
                                    }, s)
                                })) : (0, p.jsxs)(c.View, {
                                    className: "null-data",
                                    children: [(0, p.jsx)(c.Image, {
                                        mode: "widthFix",
                                        className: "null-img",
                                        src: u.COMMON_ASSETS.NullData
                                    }), (0, p.jsx)(c.Text, {
                                        className: "null-text",
                                        children: "目前还没有收到消息哦"
                                    })]
                                })
                            })
                        })]
                    })
                }

                function g() {
                    var e = (0, i.useModule)(f.InformationModule),
                        n = e.loading,
                        t = e.success;
                    return (0, p.jsx)(l.Layout, {
                        titleText: "消息盒子",
                        loading: n,
                        success: t,
                        children: (0, p.jsx)(x, {})
                    })
                }

                function h(e) {
                    if (!((e /= 1e3) <= 0)) return e < 60 ? ~~e + " 秒前" : e < 3600 ? ~~(e / 60) + " 分钟前" : e < 86400 ? ~~(e / 3600) + " 小时前" : ~~(e / 86400) + " 天前"
                }
            },
            "./src/packages/others/pages/information/index.tsx": function(e, n, t) {
                var a = t("webpack/container/remote/@tarojs/runtime"),
                    s = t("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/information/index.tsx");
                Page((0, a.createPageConfig)(s.default, "packages/others/pages/information/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), s.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/information/index.tsx", e(e.s = "./src/packages/others/pages/information/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/information/index.js'
});
require("packages/others/pages/information/index.js");