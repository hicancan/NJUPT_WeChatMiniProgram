$gwx_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];

        function gz$gwx_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
        var x = ['./pages/door/profile/user-qrcode/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_6_1()
            var lCB = e_[x[0]].i
            _ai(lCB, x[1], e_, x[0], 1, 1)
            var aDB = _v()
            _(r, aDB)
            var tEB = _oz(z, 1, e, s, gg)
            var eFB = _gd(x[0], tEB, e_, d_)
            if (eFB) {
                var bGB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                aDB.wxXCkey = 3
                eFB(bGB, bGB, aDB, gg)
                gg.f = cur_globalf
            } else _w(tEB, x[0], 2, 14)
            lCB.pop()
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
                g = "$gwx_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/user-qrcode/index.wxml'] = [$gwx_XC_6, './pages/door/profile/user-qrcode/index.wxml'];
else __wxAppCode__['pages/door/profile/user-qrcode/index.wxml'] = $gwx_XC_6('./pages/door/profile/user-qrcode/index.wxml');;
__wxRoute = "pages/door/profile/user-qrcode/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/door/profile/user-qrcode/index.js";
define("pages/door/profile/user-qrcode/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see index.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["pages/door/profile/user-qrcode/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/user-qrcode/index.tsx": function(e, r, o) {
                o.d(r, {
                    default: function() {
                        return x
                    }
                });
                var t = o("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    s = o("webpack/container/remote/@tarojs/taro"),
                    n = o.n(s),
                    a = o("./src/common/auth/index.ts"),
                    c = o("./src/common/hook.ts"),
                    i = o("./src/components/Wigets/index.tsx"),
                    d = o("./src/components/PageLayout/index.tsx"),
                    l = o("webpack/container/remote/taro-code"),
                    u = o("webpack/container/remote/react"),
                    h = o("./src/components/PageScroll/index.tsx"),
                    m = o("webpack/container/remote/react/jsx-runtime"),
                    p = function(e) {
                        var r = e.autoFetchQrCode,
                            o = (0, u.useState)((new Date).toLocaleTimeString("chinese", {
                                hour12: !1
                            })),
                            s = (0, t.default)(o, 2),
                            c = s[0],
                            d = s[1],
                            h = (0, u.useState)(""),
                            p = (0, t.default)(h, 2),
                            x = p[0],
                            f = p[1],
                            g = (0, a.useQrCode)();
                        return (0, u.useEffect)((function() {
                            n().nextTick((function() {
                                if (g) {
                                    var e = function(e) {
                                            if ("string" == typeof e) return e;
                                            for (var r = new Uint8Array(e), o = "", t = 0; t < r.length; t++) {
                                                var s = r[t].toString(2),
                                                    n = s.match(/^1+?(?=0)/);
                                                if (n && 8 == s.length) {
                                                    for (var a = n[0].length, c = r[t].toString(2).slice(7 - a), i = 1; i < a; i++) c += r[i + t].toString(2).slice(2);
                                                    o += String.fromCharCode(parseInt(c, 2)), t += a - 1
                                                } else o += String.fromCharCode(r[t])
                                            }
                                            return o
                                        }(n().base64ToArrayBuffer(g.content)),
                                        r = JSON.parse(e);
                                    f(r.userId)
                                }
                            }))
                        }), [g]), (0, u.useEffect)((function() {
                            n().setScreenBrightness({
                                value: 1
                            });
                            var e = setInterval((function() {
                                    d((new Date).toLocaleTimeString("chinese", {
                                        hour12: !1
                                    }))
                                }), 1e3),
                                o = r();
                            return function() {
                                clearInterval(e), clearInterval(o), n().setScreenBrightness({
                                    value: .5
                                })
                            }
                        }), []), (0, m.jsxs)("div", {
                            className: "body",
                            children: [(0, m.jsx)("div", {
                                className: "time-wrap",
                                children: (0, m.jsx)("div", {
                                    className: "time",
                                    children: (0, m.jsx)("div", {
                                        className: "time-text",
                                        children: c
                                    })
                                })
                            }), (0, m.jsx)("div", {
                                className: "code",
                                children: (0, m.jsx)(i.LayoutLightweight, {
                                    customLoading: (0, m.jsx)(m.Fragment, {
                                        children: (0, m.jsxs)("div", {
                                            style: {
                                                width: "50px",
                                                height: "50px"
                                            },
                                            children: [(0, m.jsx)("span", {
                                                className: "loader"
                                            }), (0, m.jsx)("div", {
                                                className: "description",
                                                style: {
                                                    marginTop: "400rpx"
                                                },
                                                children: "加载中"
                                            })]
                                        })
                                    }),
                                    children: g && "" !== x ? (0, m.jsxs)(m.Fragment, {
                                        children: [(0, m.jsx)("div", {
                                            className: "border"
                                        }), (0, m.jsx)(l.Barcode, {
                                            text: x,
                                            width: 300,
                                            height: 60,
                                            scale: 4
                                        }), (0, m.jsx)(l.QRCode, {
                                            text: g.content,
                                            size: 300,
                                            scale: 4,
                                            errorCorrectLevel: "M",
                                            typeNumber: 2
                                        }), (0, m.jsx)("div", {
                                            className: "description",
                                            children: "*活码，请勿截图使用"
                                        })]
                                    }) : (0, m.jsxs)("div", {
                                        style: {
                                            width: "50px",
                                            height: "50px"
                                        },
                                        children: [(0, m.jsx)("span", {
                                            className: "loader"
                                        }), (0, m.jsx)("div", {
                                            className: "description",
                                            style: {
                                                marginTop: "400rpx"
                                            },
                                            children: "加载中"
                                        })]
                                    })
                                })
                            })]
                        })
                    };

                function x(e) {
                    var r = e.lightweight,
                        o = (0, c.useModule)(a.AuthModule),
                        t = o.loading,
                        s = o.success;
                    return (0, m.jsx)(d.Layout, {
                        titleText: "身份码",
                        loading: t,
                        success: s,
                        backgroundColor: "#1a8cf4",
                        titleShowBackIcon: !0,
                        titleBackgroundColor: "#1a8cf4",
                        titleTextColor: "#ffffff",
                        lightweight: r,
                        children: (0, m.jsx)(h.PageScroll, {
                            autoHeight: !0,
                            onPullRefresh: a.AuthModule.manualGetUserQrcode.bind(a.AuthModule),
                            children: (0, m.jsx)(p, {
                                autoFetchQrCode: a.AuthModule.getUserQrcode.bind(a.AuthModule)
                            })
                        })
                    })
                }
            },
            "./src/pages/door/profile/user-qrcode/index.tsx": function(e, r, o) {
                var t = o("webpack/container/remote/@tarojs/runtime"),
                    s = o("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/user-qrcode/index.tsx");
                Page((0, t.createPageConfig)(s.default, "pages/door/profile/user-qrcode/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), s.default
            }
        },
        function(e) {
            e.O(0, ["taro", "vendors", "common"], (function() {
                return "./src/pages/door/profile/user-qrcode/index.tsx", e(e.s = "./src/pages/door/profile/user-qrcode/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/door/profile/user-qrcode/index.js'
});
require("pages/door/profile/user-qrcode/index.js");