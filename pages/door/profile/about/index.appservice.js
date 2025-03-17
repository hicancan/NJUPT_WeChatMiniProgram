$gwx_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];

        function gz$gwx_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
        var x = ['./pages/door/profile/about/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_2_1()
            var bO = e_[x[0]].i
            _ai(bO, x[1], e_, x[0], 1, 1)
            var oP = _v()
            _(r, oP)
            var xQ = _oz(z, 1, e, s, gg)
            var oR = _gd(x[0], xQ, e_, d_)
            if (oR) {
                var fS = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                oP.wxXCkey = 3
                oR(fS, fS, oP, gg)
                gg.f = cur_globalf
            } else _w(xQ, x[0], 2, 14)
            bO.pop()
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
                g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/about/index.wxml'] = [$gwx_XC_2, './pages/door/profile/about/index.wxml'];
else __wxAppCode__['pages/door/profile/about/index.wxml'] = $gwx_XC_2('./pages/door/profile/about/index.wxml');;
__wxRoute = "pages/door/profile/about/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/door/profile/about/index.js";
define("pages/door/profile/about/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see index.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["pages/door/profile/about/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/about/index.tsx": function(e, o, s) {
                s.d(o, {
                    default: function() {
                        return p
                    }
                });
                var a = s("webpack/container/remote/@tarojs/taro"),
                    r = s.n(a),
                    n = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    t = s("./src/components/PageLayout/index.tsx"),
                    c = s("./src/constants/assets.ts"),
                    d = s("./src/components/PageScroll/index.tsx"),
                    l = s("webpack/container/remote/react/jsx-runtime"),
                    i = function() {
                        return (0, l.jsxs)(d.PageScroll, {
                            children: [(0, l.jsx)(n.View, {
                                className: "header",
                                style: {
                                    backgroundImage: "url(".concat(c.PROFILE_ASSETS.AboutUs, ")")
                                },
                                children: (0, l.jsx)(n.Image, {
                                    mode: "aspectFit",
                                    src: c.PROFILE_ASSETS.AboutLogo,
                                    className: "header-logo"
                                })
                            }), (0, l.jsxs)(n.View, {
                                className: "body",
                                children: [(0, l.jsx)(n.View, {
                                    className: "body-head",
                                    children: "- 南邮小程序 -"
                                }), (0, l.jsx)(n.View, {
                                    className: "body-content",
                                    children: "南邮小程序是由南京邮电大学青柚工作室开发，一款方便快捷，无需下载安装即可在微信客户端即开即用的APP，有别于一般需要下载安装的APP，也不同于微信公众号，具有方便快捷的特点。"
                                }), (0, l.jsx)(n.View, {
                                    className: "body-content",
                                    children: "南邮小程序具有许多方便柚子们的功能，服务于广大的南京邮电大学学生们。小程序可以用来查询课表、跑操次数，图书馆、一卡通、校内外资讯、校历等等，集多种功能于一身。还在担心期末图书馆没有座位？那还不赶紧使用我们的小程序。"
                                }), (0, l.jsx)(n.View, {
                                    className: "body-content",
                                    children: "南邮小程序也将不断的进行完善，除了基础的功能以外，日后还会推出各种更加强大实用的功能，各位柚子们敬请期待吧！"
                                })]
                            }), (0, l.jsxs)(n.View, {
                                className: "body",
                                style: "margin-top: 50px",
                                children: [(0, l.jsx)(n.View, {
                                    className: "body-head",
                                    children: "- 青柚工作室 -"
                                }), (0, l.jsx)(n.View, {
                                    className: "body-content",
                                    children: "青柚工作室成立于2017年10月，现已有超过30位成员分别负责技术、设计、运营推广等工作。截止到现在，青柚工作室已经开发“南京邮电大学”、“校谈”等微信小程序。其中，“南邮小程序”现已有超过3.9万用户，日均活跃量超过8千人次。"
                                }), (0, l.jsx)(n.View, {
                                    className: "body-content",
                                    children: "出于对技术的热爱和对设计的追求，青柚工作室成员本着为南邮学生服务的出发点，创造解决生活学习中存在的痛点的可能，开发产品，服务同学，提升技术能力。青柚，我们在创造可能。"
                                })]
                            }), (0, l.jsxs)(n.View, {
                                className: "footer",
                                children: [(0, l.jsx)(n.View, {
                                    className: "footer-dialog-btn",
                                    onClick: function() {
                                        r().navigateTo({
                                            url: "./protocol/index"
                                        })
                                    },
                                    children: "用户协议 | 隐私政策"
                                }), (0, l.jsx)(n.View, {
                                    className: "footer-version",
                                    children: "Version 4.0"
                                })]
                            })]
                        })
                    };

                function p() {
                    return (0, l.jsx)(t.Layout, {
                        titleText: "关于我们",
                        success: !0,
                        loading: !1,
                        children: (0, l.jsx)(i, {})
                    })
                }
            },
            "./src/pages/door/profile/about/index.tsx": function(e, o, s) {
                var a = s("webpack/container/remote/@tarojs/runtime"),
                    r = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/about/index.tsx");
                Page((0, a.createPageConfig)(r.default, "pages/door/profile/about/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), r.default
            }
        },
        function(e) {
            e.O(0, ["taro", "vendors", "common"], (function() {
                return "./src/pages/door/profile/about/index.tsx", e(e.s = "./src/pages/door/profile/about/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/door/profile/about/index.js'
});
require("pages/door/profile/about/index.js");