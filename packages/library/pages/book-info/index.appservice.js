$gwx2_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_1 || [];

        function gz$gwx2_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx2_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx2_XC_1 = true;
        var x = ['./packages/library/pages/book-info/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx2_XC_1_1()
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
                g = "$gwx2_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/library/pages/book-info/index.wxml'] = [$gwx2_XC_1, './packages/library/pages/book-info/index.wxml'];
else __wxAppCode__['packages/library/pages/book-info/index.wxml'] = $gwx2_XC_1('./packages/library/pages/book-info/index.wxml');;
__wxRoute = "packages/library/pages/book-info/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/library/pages/book-info/index.js";
define("packages/library/pages/book-info/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/7f5b9ebfeb838c951d3e80421739c824.js"), require("../../sub-common/165914ad6d844b974299367142081efe.js"), require("../../sub-common/9a5ff4cd880cf91987cc27a94e6e4115.js"), require("../../sub-common/273fc4ee15907e670fab3358ab61a9de.js"), require("../../sub-common/c7ed0abc524d3c7e623f43b45d89a5cb.js"), require("../../sub-common/ef5d36d73b87f4e75ecc11cbcbb5c1e2.js"), require("../../sub-common/55a4a810d4a2fbd784f64e9c74fa3ec9.js"), require("../../sub-common/fd701aca8114a25a26eddbfbae8e153d.js"), require("../../sub-common/33d5c4b66ac52ad50ea1ec1bfe4b51a2.js"), require("../../sub-common/656dcb41506dd82bf4e3649d50030aa5.js"), require("../../sub-common/60da8e5a7381a7655cdebf74b3b82bbd.js"), require("../../sub-common/50229e439bb385e9339db36bb2caff47.js"), require("../../sub-common/83c00dbfc5e0b365e94755e74e99c21e.js"), require("../../sub-common/c41cd8159e79e226c9b93f0e65b931bd.js"), require("../../sub-common/a5a885b11f0712b78aa3b3ca95407012.js"), require("../../sub-common/0fe96556afcc53fda06fc27f5608783f.js"), require("../../sub-common/5299ce84ba4422a4aa992d42329b1fb6.js"), require("../../sub-common/d1c76ddd847397c4b16622472b316248.js"), require("../../sub-common/643a8c16a98b0ac48fee198a46001f25.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/library/pages/book-info/index"], {
            "./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/style_icon.css": function() {},
            "./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/Rate/style/style.css": function() {},
            "./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/es/icons/StarFill.js": function(e, o, n) {
                n.d(o, {
                    default: function() {
                        return i
                    }
                });
                var s = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    a = n("webpack/container/remote/react"),
                    t = n.n(a),
                    c = n("./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/es/icons/IconTemplate-4941cb73.mjs"),
                    i = function(e) {
                        return t().createElement(c.I, (0, s.default)((0, s.default)({}, e), {}, {
                            name: e.name || "StarFill",
                            svg64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Im05MDguMSAzNTMuMS0yNTMuOS0zNi45TDU0MC43IDg2LjFjLTMuMS02LjMtOC4yLTExLjQtMTQuNS0xNC41LTE1LjgtNy44LTM1LTEuMy00Mi45IDE0LjVMMzY5LjggMzE2LjJsLTI1My45IDM2LjljLTcgMS0xMy40IDQuMy0xOC4zIDkuMy0xMi4zIDEyLjctMTIuMSAzMi45LjYgNDUuM2wxODMuNyAxNzkuMS00My40IDI1Mi45Yy0xLjIgNi45LS4xIDE0LjEgMy4yIDIwLjMgOC4yIDE1LjYgMjcuNiAyMS43IDQzLjIgMTMuNEw1MTIgNzU0bDIyNy4xIDExOS40YzYuMiAzLjMgMTMuNCA0LjQgMjAuMyAzLjIgMTcuNC0zIDI5LjEtMTkuNSAyNi4xLTM2LjlsLTQzLjQtMjUyLjkgMTgzLjctMTc5LjFjNS00LjkgOC4zLTExLjMgOS4zLTE4LjMgMi43LTE3LjUtOS41LTMzLjctMjctMzYuMyIvPjwvc3ZnPg=="
                        }))
                    };
                i.defaultProps = c.d
            },
            "./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/es/icons/internal.js": function(e, o, n) {
                n.d(o, {
                    globalConfig: function() {
                        return s
                    }
                });
                var s = {
                    useSvg: !0,
                    classPrefix: "nut-icon",
                    tag: "i",
                    fontClassName: "nutui-iconfont"
                }
            },
            "./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/es/index.es.js": function(e, o, n) {
                n.d(o, {
                    StarFill: function() {
                        return s.default
                    }
                });
                var s = n("./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/es/icons/StarFill.js");
                n("./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/style_icon.css")
            },
            "./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/Rate.js": function(e, o, n) {
                n.d(o, {
                    default: function() {
                        return p
                    }
                });
                var s = n("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    a = n("./node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    t = n("webpack/container/remote/react"),
                    c = n.n(t),
                    i = n("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),
                    r = n.n(i),
                    l = n("./node_modules/.pnpm/@nutui+icons-react@0.0.1/node_modules/@nutui/icons-react/dist/es/index.es.js"),
                    u = n("./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/typings.js"),
                    d = n("./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/use-props-value.js");

                function m(e, o) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        o && (s = s.filter((function(o) {
                            return Object.getOwnPropertyDescriptor(e, o).enumerable
                        }))), n.push.apply(n, s)
                    }
                    return n
                }

                function b(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var n = null != arguments[o] ? arguments[o] : {};
                        o % 2 ? m(Object(n), !0).forEach((function(o) {
                            (0, a.default)(e, o, n[o])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(o) {
                            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
                        }))
                    }
                    return e
                }
                var f = b(b({}, u.C), {}, {
                        count: 5,
                        min: 0,
                        checkedIcon: null,
                        uncheckedIcon: null,
                        disabled: !1,
                        readOnly: !1,
                        allowHalf: !1
                    }),
                    p = function(e) {
                        var o = b(b({}, f), e),
                            n = o.className,
                            i = o.style,
                            u = o.count,
                            m = o.value,
                            p = o.defaultValue,
                            j = o.min,
                            x = o.checkedIcon,
                            g = o.uncheckedIcon,
                            _ = o.disabled,
                            k = o.readOnly,
                            h = o.allowHalf,
                            w = o.onChange,
                            y = "nut-rate",
                            N = (0, t.useState)([1, 2, 3, 4, 5]),
                            M = (0, s.default)(N, 2),
                            v = M[0],
                            L = M[1],
                            V = (0, d.u)({
                                value: m,
                                defaultValue: Math.max(p || 0, j),
                                finalValue: 0,
                                onChange: w
                            }),
                            I = (0, s.default)(V, 2),
                            S = I[0],
                            T = I[1];
                        (0, t.useEffect)((function() {
                            for (var e = [], o = 1; o <= Number(u); o++) e.push(o);
                            L(e)
                        }), [u]);
                        var C = function(e) {
                            return e <= S ? x || c().createElement(l.StarFillN, null) : g || (x ? c().cloneElement(x, {
                                color: void 0
                            }) : c().createElement(l.StarFillN, null))
                        };
                        return c().createElement("div", {
                            className: r()(y, n, {
                                disabled: _,
                                readonly: k
                            }),
                            style: i
                        }, v.map((function(e) {
                            return c().createElement("div", {
                                className: "".concat(y, "-item"),
                                key: e,
                                onClick: function(o) {
                                    return function(e, o) {
                                        if (e.preventDefault(), e.stopPropagation(), !_ && !k) {
                                            var n = 0;
                                            1 === o && S === o || (n = o), n = Math.max(n, j), T(n)
                                        }
                                    }(o, e)
                                }
                            }, c().createElement("div", {
                                className: r()("".concat(y, "-item__icon"), (0, a.default)({}, "".concat(y, "-item__icon--disabled"), _ || e > S))
                            }, C(e)), h && S > e - 1 && c().createElement("div", {
                                className: r()("".concat(y, "-item__half"), "".concat(y, "-item__icon"), "".concat(y, "-item__icon--half")),
                                onClick: function(o) {
                                    return function(e, o) {
                                        e.preventDefault(), e.stopPropagation();
                                        var n = Math.max(j, o - .5);
                                        T(n)
                                    }(o, e)
                                }
                            }, C(e)))
                        })))
                    };
                p.defaultProps = f, p.displayName = "NutRate"
            },
            "./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/Rate/style/css.js": function(e, o, n) {
                n("./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/Rate/style/style.css")
            },
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/library/pages/book-info/index.tsx": function(e, o, n) {
                n.d(o, {
                    default: function() {
                        return k
                    }
                }), n("./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/Rate/style/css.js");
                var s = n("./node_modules/.pnpm/@nutui+nutui-react@2.0.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@nutui/nutui-react/dist/esm/Rate.js"),
                    a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    c = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    i = n("webpack/container/remote/@tarojs/taro"),
                    r = n.n(i),
                    l = n("webpack/container/remote/react"),
                    u = n("./src/common/hook.ts"),
                    d = n("./src/packages/library/module/index.ts"),
                    m = n("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    b = n("./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/es/index.es.js"),
                    f = n("./src/constants/assets.ts"),
                    p = n("./src/packages/library/module/hook.ts"),
                    j = n("./src/packages/library/utils/throttle.ts"),
                    x = n("webpack/container/remote/react/jsx-runtime"),
                    g = function(e) {
                        var o = f.LIBRARY_ASSETS.noCover;
                        return (0, x.jsx)(x.Fragment, {
                            children: (0, x.jsxs)(m.View, {
                                className: "book-item",
                                onClick: e.onClick,
                                children: [(0, x.jsx)(m.Image, {
                                    mode: "aspectFill",
                                    className: "book-pic",
                                    src: "" === e.book.pic ? o : e.book.pic
                                }), (0, x.jsxs)(m.View, {
                                    className: "book-title",
                                    children: [" ", e.book.bookTitle || "未知"]
                                })]
                            })
                        })
                    },
                    _ = function() {
                        var e, o, n = (0, p.useBookData)(),
                            i = (0, u.useSafeArea)(),
                            _ = f.LIBRARY_ASSETS.noCover,
                            k = (0, p.useBookData)().sameAuthor,
                            h = (0, p.useBookData)().sameTopic,
                            w = n.positionDetail[0].info,
                            y = w.bookTitle,
                            N = w.author,
                            M = w.publisher,
                            v = w.callNo,
                            L = w.isbn,
                            V = w.price,
                            I = w.topic,
                            S = w.description,
                            T = w.classificationCode,
                            C = w.score,
                            D = w.pic,
                            O = (0, l.useMemo)((function() {
                                return (0, j.throttle)((function(e) {
                                    ! function(e) {
                                        E(e.recordId)
                                    }(e)
                                }), 1e3)
                            }), []),
                            E = function(o) {
                                return (e = e || (0, c.default)((0, a.default)().mark((function e(o) {
                                    var n, s, c, i, l;
                                    return (0, a.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r().showLoading({
                                                    title: "加载中"
                                                }), e.prev = 1, e.next = 4, d.LibraryModule.storeBookInfo(o);
                                            case 4:
                                                n = e.sent, s = (0, t.default)(n, 3), c = s[0], i = s[1], l = s[2], c && i.success && l.success && c.data.length > 0 ? r().redirectTo({
                                                    url: "/packages/library/pages/book-info/index"
                                                }) : r().showToast({
                                                    title: "小柚没找到信息",
                                                    icon: "none"
                                                }), e.next = 15;
                                                break;
                                            case 12:
                                                e.prev = 12, e.t0 = e.catch(1), r().showToast({
                                                    icon: "error",
                                                    title: "啊呀，出错了！"
                                                });
                                            case 15:
                                                return e.prev = 15, r().hideLoading(), e.finish(15);
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 12, 15, 18]
                                    ])
                                })))).apply(this, arguments)
                            },
                            z = (null === (o = n.positionDetail[0]) || void 0 === o ? void 0 : o.info.pic) || "default.jpg",
                            P = {
                                backgroundImage: "url(".concat(z, ")"),
                                width: "100%",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                                overflow: "scroll",
                                height: "100vh"
                            };
                        return (0, x.jsxs)(x.Fragment, {
                            children: [(0, x.jsx)(m.View, {
                                className: "layout-header",
                                style: {
                                    height: "".concat(i.safeAreaHeight, "px"),
                                    paddingTop: "".concat(i.statusBarHeight, "px"),
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: (0, x.jsx)(m.Image, {
                                    src: f.LOCAL_ASSETS.PROFILE.ArrowRight,
                                    style: {
                                        width: "70px",
                                        height: "60px",
                                        transform: "rotate(180deg)"
                                    },
                                    onClick: function() {
                                        r().navigateBack()
                                    }
                                })
                            }), (0, x.jsx)(m.View, {
                                style: P,
                                children: (0, x.jsxs)(m.View, {
                                    className: "book-info-container",
                                    style: {
                                        paddingTop: "".concat(i.safeAreaHeight + 10, "px")
                                    },
                                    children: [(0, x.jsxs)(m.View, {
                                        className: "book-info-title",
                                        children: [(0, x.jsx)(m.Image, {
                                            mode: "aspectFill",
                                            className: "book-pic",
                                            src: "" === D ? _ : D
                                        }), (0, x.jsxs)(m.View, {
                                            className: "book-info-group",
                                            children: [(0, x.jsx)(m.View, {
                                                className: "book-name",
                                                children: y || "未知"
                                            }), (0, x.jsxs)(m.View, {
                                                className: "info",
                                                children: ["作者 : ", N || "未知"]
                                            }), (0, x.jsxs)(m.View, {
                                                className: "info",
                                                children: ["出版社 : ", M || "未知"]
                                            }), (0, x.jsxs)(m.View, {
                                                className: "info",
                                                children: ["索书号 : ", v || "未知"]
                                            }), (0, x.jsxs)(m.View, {
                                                className: "info",
                                                children: ["ISBN : ", L || "未知"]
                                            }), (0, x.jsxs)(m.View, {
                                                className: "rating-box",
                                                children: [(0, x.jsx)(s.default, {
                                                    defaultValue: C,
                                                    checkedIcon: (0, x.jsx)(b.StarFill, {
                                                        color: "#ffd700"
                                                    }),
                                                    uncheckedIcon: (0, x.jsx)(b.StarFill, {
                                                        color: "#444444"
                                                    }),
                                                    readOnly: !0
                                                }), (0, x.jsx)(m.View, {
                                                    style: {
                                                        color: "#ffd700",
                                                        fontSize: "13px",
                                                        margin: "0 12px",
                                                        lineHeight: "22px"
                                                    },
                                                    children: "0" == C ? "暂无评分" : C
                                                })]
                                            })]
                                        })]
                                    }), (0, x.jsxs)(m.View, {
                                        className: "book-info-content",
                                        children: [(0, x.jsx)(m.View, {
                                            style: "font-size: 12px; letter-spacing: 1px; color: #ffffff",
                                            children: "书目信息"
                                        }), (0, x.jsx)(m.View, {
                                            className: "divide"
                                        }), (0, x.jsxs)(m.View, {
                                            className: "book-content",
                                            children: ["作者 : ", N || "未知"]
                                        }), (0, x.jsxs)(m.View, {
                                            className: "book-content",
                                            children: ["出版发行项 : ", M || "未知"]
                                        }), (0, x.jsxs)(m.View, {
                                            className: "book-content",
                                            children: ["ISBN及定价 : ", L || "未知", " CNY:", V || "未知", "¥"]
                                        }), (0, x.jsxs)(m.View, {
                                            className: "book-content",
                                            children: ["学科主题 : ", I || "未知"]
                                        }), (0, x.jsxs)(m.View, {
                                            className: "book-content",
                                            children: ["中国法分类号 : ", T || "未知"]
                                        })]
                                    }), (0, x.jsxs)(m.View, {
                                        className: "book-description",
                                        children: [(0, x.jsx)(m.View, {
                                            className: "book-des-title",
                                            children: "提要文摘附注"
                                        }), (0, x.jsx)(m.View, {
                                            className: "description",
                                            children: S || "暂无相关书籍简介"
                                        })]
                                    }), (0, x.jsxs)(m.View, {
                                        className: "book-available",
                                        onClick: function() {
                                            r().navigateTo({
                                                url: "/packages/library/pages/all-records/index"
                                            })
                                        },
                                        children: [(0, x.jsxs)(m.View, {
                                            className: "book-des-title",
                                            style: {
                                                marginBottom: "20rpx"
                                            },
                                            children: ["纸本馆藏", "  (" + n.positionDetail.length + ")  "]
                                        }), (0, x.jsxs)(m.View, {
                                            className: "book-available-list",
                                            children: [(0, x.jsxs)(m.View, {
                                                className: "book-available-head",
                                                children: [(0, x.jsx)(m.View, {
                                                    className: "book-content",
                                                    children: "索书号"
                                                }), (0, x.jsx)(m.View, {
                                                    className: "book-content",
                                                    children: "条码号"
                                                }), (0, x.jsx)(m.View, {
                                                    className: "book-content",
                                                    children: "年卷期"
                                                }), (0, x.jsx)(m.View, {
                                                    className: "book-content",
                                                    children: "馆藏地点"
                                                }), (0, x.jsx)(m.View, {
                                                    className: "book-content",
                                                    children: "书刊状态"
                                                })]
                                            }), (0, x.jsx)(m.View, {
                                                className: "divide"
                                            }), n.positionDetail.map((function(e, o) {
                                                return (0, x.jsxs)(m.View, {
                                                    className: "book-available-item",
                                                    children: [(0, x.jsx)(m.View, {
                                                        className: "book-content",
                                                        style: {
                                                            paddingLeft: "10px"
                                                        },
                                                        children: e.storePosition.callNo
                                                    }), (0, x.jsx)(m.View, {
                                                        className: "book-content",
                                                        children: e.storePosition.bookBarCode
                                                    }), (0, x.jsx)(m.View, {
                                                        className: "book-content",
                                                        children: e.storePosition.AnnualPeriod || "-"
                                                    }), (0, x.jsx)(m.View, {
                                                        className: "book-content",
                                                        children: e.storePosition.collectionAddr
                                                    }), (0, x.jsx)(m.View, {
                                                        className: "book-content",
                                                        children: e.storePosition.status.slice(0, 2)
                                                    })]
                                                }, o)
                                            })), (0, x.jsx)(m.View, {
                                                className: "divide",
                                                style: {
                                                    marginBottom: "5px"
                                                }
                                            }), (0, x.jsx)(m.View, {
                                                className: "book-available-head",
                                                style: {
                                                    paddingTop: "0px"
                                                },
                                                children: (0, x.jsx)(m.View, {
                                                    style: {
                                                        paddingLeft: "10px",
                                                        width: "100%",
                                                        color: "#ffffff",
                                                        opacity: "1"
                                                    },
                                                    children: "查看全部记录"
                                                })
                                            })]
                                        })]
                                    }), (0, x.jsxs)(m.View, {
                                        className: "book-prefer",
                                        children: [(0, x.jsx)(m.View, {
                                            className: "book-des-title",
                                            children: "猜你喜欢"
                                        }), (0, x.jsx)(m.View, {
                                            className: "book-prefer-list",
                                            children: h.map((function(e, o) {
                                                return (0, x.jsx)(g, {
                                                    book: e,
                                                    onClick: function() {
                                                        return O(e)
                                                    }
                                                }, o)
                                            }))
                                        })]
                                    }), (0, x.jsxs)(m.View, {
                                        className: "book-recommend",
                                        style: {
                                            marginBottom: "50px"
                                        },
                                        children: [(0, x.jsx)(m.View, {
                                            className: "book-des-title",
                                            children: "作者其他著作"
                                        }), (0, x.jsx)(m.View, {
                                            className: "book-recommend-list",
                                            children: k.map((function(e, o) {
                                                return (0, x.jsx)(g, {
                                                    book: e,
                                                    onClick: function() {
                                                        return O(e)
                                                    }
                                                }, o)
                                            }))
                                        })]
                                    })]
                                })
                            })]
                        })
                    };

                function k() {
                    return (0, x.jsx)(x.Fragment, {
                        children: (0, x.jsx)(_, {})
                    })
                }
            },
            "./src/packages/library/pages/book-info/index.tsx": function(e, o, n) {
                var s = n("webpack/container/remote/@tarojs/runtime"),
                    a = n("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/library/pages/book-info/index.tsx");
                Page((0, s.createPageConfig)(a.default, "packages/library/pages/book-info/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "图书信息",
                    disableScroll: !0,
                    backgroundColor: "#FFFFFF",
                    backgroundTextStyle: "dark"
                } || {})), a.default
            },
            "./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/es/icons/IconTemplate-4941cb73.mjs": function(e, o, n) {
                n.d(o, {
                    I: function() {
                        return i
                    },
                    d: function() {
                        return t
                    }
                });
                var s = n("webpack/container/remote/react"),
                    a = n("./node_modules/.pnpm/@nutui+icons-react-taro@1.0.4/node_modules/@nutui/icons-react-taro/dist/es/icons/internal.js");
                const t = {
                        className: "",
                        style: void 0,
                        name: "",
                        width: "",
                        height: "",
                        size: "",
                        svg64: "",
                        onClick: () => {}
                    },
                    c = e => {
                        const o = a.globalConfig.classPrefix,
                            {
                                className: n,
                                style: c,
                                name: i,
                                color: r,
                                width: l,
                                height: u,
                                size: d,
                                svg64: m,
                                onClick: b,
                                fallback: f = !a.globalConfig.useSvg
                            } = {...t, ...e
                            },
                            p = e => "" === e ? "" : isNaN(Number(e)) ? String(e) : e + "px",
                            j = {},
                            x = p(l || d || ""),
                            g = p(u || d || "");
                        return x && (j.width = x), g && (j.height = g), s.createElement(a.globalConfig.tag, {
                            className: (() => {
                                const e = f ? null == i ? void 0 : i.toLowerCase() : i;
                                return `${f?a.globalConfig.fontClassName:""} ${o} ${o}-${e} ${n}`
                            })(),
                            style: {...c, ...f ? {} : {
                                    backgroundColor: r || "currentColor",
                                    mask: `url('${m}')  0 0/100% 100% no-repeat`,
                                    "-webkitMask": `url('${m}') 0 0/100% 100% no-repeat`
                                }, ...j
                            },
                            onClick: e => {
                                b && b(e)
                            },
                            color: r
                        }, e.children)
                    };
                c.defaultProps = t;
                const i = c
            }
        },
        function(e) {
            e.O(0, ["packages/library/sub-vendors", "sub-common/7f5b9ebfeb838c951d3e80421739c824", "sub-common/165914ad6d844b974299367142081efe", "sub-common/511e3bd960bcc843d3885f382d4ea672", "sub-common/9a5ff4cd880cf91987cc27a94e6e4115", "sub-common/273fc4ee15907e670fab3358ab61a9de", "sub-common/c7ed0abc524d3c7e623f43b45d89a5cb", "sub-common/ef5d36d73b87f4e75ecc11cbcbb5c1e2", "sub-common/55a4a810d4a2fbd784f64e9c74fa3ec9", "sub-common/fd701aca8114a25a26eddbfbae8e153d", "sub-common/33d5c4b66ac52ad50ea1ec1bfe4b51a2", "sub-common/656dcb41506dd82bf4e3649d50030aa5", "sub-common/60da8e5a7381a7655cdebf74b3b82bbd", "sub-common/50229e439bb385e9339db36bb2caff47", "sub-common/83c00dbfc5e0b365e94755e74e99c21e", "sub-common/c41cd8159e79e226c9b93f0e65b931bd", "sub-common/a5a885b11f0712b78aa3b3ca95407012", "sub-common/0fe96556afcc53fda06fc27f5608783f", "sub-common/5299ce84ba4422a4aa992d42329b1fb6", "sub-common/d1c76ddd847397c4b16622472b316248", "sub-common/643a8c16a98b0ac48fee198a46001f25", "taro", "vendors", "common"], (function() {
                return "./src/packages/library/pages/book-info/index.tsx", e(e.s = "./src/packages/library/pages/book-info/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/library/pages/book-info/index.js'
});
require("packages/library/pages/book-info/index.js");