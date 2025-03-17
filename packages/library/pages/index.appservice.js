$gwx2_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_2 || [];

        function gz$gwx2_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx2_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx2_XC_2 = true;
        var x = ['./packages/library/pages/index.wxml', '../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx2_XC_2_1()
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
                g = "$gwx2_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/library/pages/index.wxml'] = [$gwx2_XC_2, './packages/library/pages/index.wxml'];
else __wxAppCode__['packages/library/pages/index.wxml'] = $gwx2_XC_2('./packages/library/pages/index.wxml');;
__wxRoute = "packages/library/pages/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/library/pages/index.js";
define("packages/library/pages/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../sub-vendors.js"), require("../sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/library/pages/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/library/pages/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return f
                    }
                });
                var r = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    n = a("webpack/container/remote/@tarojs/taro"),
                    o = a.n(n),
                    t = a("./src/common/hook.ts"),
                    c = a("webpack/container/remote/react"),
                    i = a("./src/components/PageLayout/index.tsx"),
                    l = a("./src/packages/library/components/book-search/index.tsx"),
                    d = a("./src/packages/library/module/index.ts"),
                    u = a("./src/packages/library/components/borrowed-book/index.tsx"),
                    m = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    p = a("./src/packages/library/module/hook.ts"),
                    b = a("webpack/container/remote/react/jsx-runtime"),
                    h = function() {
                        var e = (0, p.useLibraryData)(),
                            s = o().useRouter().params.type,
                            a = (0, c.useState)(0),
                            n = (0, r.default)(a, 2),
                            t = n[0],
                            i = n[1];
                        return (0, c.useEffect)((function() {
                            "1" == s && i(1)
                        }), []), (0, b.jsxs)(m.View, {
                            className: "library-container",
                            children: [(0, b.jsxs)(m.View, {
                                className: "library-tabBar",
                                style: {
                                    backgroundColor: "#FFFFFF"
                                },
                                children: [(0, b.jsx)(m.View, {
                                    className: "tab-item",
                                    style: 0 == t ? {
                                        color: "#4A7EE3"
                                    } : {},
                                    onClick: function() {
                                        i(0)
                                    },
                                    children: "书目检索"
                                }), (0, b.jsx)(m.View, {
                                    className: "tab-item",
                                    onClick: function() {
                                        i(1)
                                    },
                                    style: 1 == t ? {
                                        color: "#4A7EE3"
                                    } : {},
                                    children: "已借书目"
                                }), (0, b.jsx)(m.View, {
                                    className: "active-line",
                                    style: 0 == t ? {
                                        left: "120rpx"
                                    } : {
                                        left: "497rpx"
                                    }
                                })]
                            }), (0, b.jsxs)(m.Swiper, {
                                className: "library-swiper",
                                duration: 300,
                                onChange: function(e) {
                                    i(e.detail.current)
                                },
                                current: t,
                                style: {
                                    height: "".concat(o().getSystemInfoSync().windowHeight - 78.5 * o().getSystemInfoSync().windowWidth / 750 - 84, "px")
                                },
                                children: [(0, b.jsx)(m.SwiperItem, {
                                    className: "swiperItem",
                                    children: (0, b.jsx)(l.default, {
                                        hotBooks: e.hotBook
                                    })
                                }), (0, b.jsx)(m.SwiperItem, {
                                    className: "swiperItem",
                                    children: (0, b.jsx)(u.default, {
                                        books: e.borrowedBook
                                    })
                                })]
                            })]
                        })
                    };

                function f() {
                    var e = (0, t.useModule)(d.LibraryModule),
                        s = e.loading,
                        a = e.success;
                    return (0, b.jsx)(i.Layout, {
                        titleText: "图书馆",
                        loading: s,
                        success: a,
                        backgroundColor: "#FBFBFB",
                        children: (0, b.jsx)(h, {})
                    })
                }
            },
            "./src/packages/library/components/book-search/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return f
                    }
                });
                var r = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    n = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    o = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    t = a("./src/packages/others/assets/back.svg"),
                    c = a("webpack/container/remote/@tarojs/taro"),
                    i = a.n(c),
                    l = a("./src/components/DataEmpty/index.tsx"),
                    d = a("./src/constants/assets.ts"),
                    u = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    m = a("webpack/container/remote/react"),
                    p = a("./src/packages/library/module/index.ts"),
                    b = a("./src/packages/library/utils/throttle.ts"),
                    h = a("webpack/container/remote/react/jsx-runtime");

                function f(e) {
                    var s, a, c = e.hotBooks,
                        f = (0, m.useRef)(1),
                        x = (0, m.useRef)(0),
                        w = (0, m.useState)(""),
                        k = (0, o.default)(w, 2),
                        j = k[0],
                        g = k[1],
                        y = (0, m.useState)(0),
                        N = (0, o.default)(y, 2),
                        _ = N[0],
                        V = N[1],
                        v = (0, m.useState)([]),
                        S = (0, o.default)(v, 2),
                        F = S[0],
                        T = S[1],
                        B = d.LIBRARY_ASSETS.noCover,
                        I = ["书名", "作者", "ISBN", "索书号", "出版社"],
                        C = (0, m.useMemo)((function() {
                            return (0, b.throttle)((function(e) {
                                L(e)
                            }), 1e3)
                        }), []),
                        L = function(e) {
                            E(e.recordId)
                        },
                        E = function(e) {
                            return (s = s || (0, n.default)((0, r.default)().mark((function e(s) {
                                var a, n, t, c, l;
                                return (0, r.default)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return i().showLoading({
                                                title: "加载中"
                                            }), e.prev = 1, e.next = 4, p.LibraryModule.storeBookInfo(s);
                                        case 4:
                                            a = e.sent, n = (0, o.default)(a, 3), t = n[0], c = n[1], l = n[2], t && c.success && l.success && t.data.length > 0 ? i().navigateTo({
                                                url: "/packages/library/pages/book-info/index"
                                            }) : i().showToast({
                                                title: "小柚没找到信息",
                                                icon: "none"
                                            }), e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(1), console.error("出问题了", e.t0), i().showToast({
                                                icon: "error",
                                                title: "呀，出错了！"
                                            });
                                        case 16:
                                            return e.prev = 16, i().hideLoading(), e.finish(16);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 12, 16, 19]
                                ])
                            })))).apply(this, arguments)
                        },
                        A = function() {
                            return (a = a || (0, n.default)((0, r.default)().mark((function e() {
                                var s, a, n = arguments;
                                return (0, r.default)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = n.length > 1 && void 0 !== n[1] ? n[1] : _, "" !== (s = n.length > 0 && void 0 !== n[0] ? n[0] : j)) {
                                                e.next = 6;
                                                break
                                            }
                                            i().showToast({
                                                title: "请输入搜索内容",
                                                icon: "error"
                                            }), e.next = 10;
                                            break;
                                        case 6:
                                            return i().showLoading({
                                                title: "加载中"
                                            }), e.next = 9, p.LibraryModule.getBookSearch(s, a, f.current).then((function(e) {
                                                T((function(s) {
                                                    return 1 === f.current ? e.data.records : s.concat(e.data.records)
                                                })), f.current = e.data.pageNum, e.data.records.length > 0 ? x.current = 1 : x.current = 2
                                            }));
                                        case 9:
                                            i().hideLoading();
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        };
                    return (0, h.jsxs)(u.View, {
                        className: "search-container",
                        children: [(0, h.jsx)(u.View, {
                            className: "search-bar-container",
                            children: (0, h.jsxs)(u.View, {
                                className: "search-bar",
                                children: [(0, h.jsx)(u.Picker, {
                                    mode: "selector",
                                    range: I,
                                    className: "search-picker",
                                    onChange: function(e) {
                                        V(Number(e.detail.value))
                                    },
                                    children: (0, h.jsx)(u.Image, {
                                        className: "search-icon",
                                        src: d.LIBRARY_ASSETS.Search
                                    })
                                }), (0, h.jsx)(u.Input, {
                                    value: j,
                                    type: "text",
                                    confirmType: "search",
                                    className: "search-input",
                                    placeholder: "根据".concat(I[_], "进行搜索"),
                                    onInput: function(e) {
                                        g(e.target.value)
                                    },
                                    onConfirm: function() {
                                        f.current = 1, A()
                                    }
                                }), (0, h.jsx)(u.Button, {
                                    className: "search-btn",
                                    onClick: function() {
                                        f.current = 1, A()
                                    },
                                    children: "搜索"
                                })]
                            })
                        }), 0 === x.current && (0, h.jsxs)(u.View, {
                            className: "search-recommend",
                            children: [(0, h.jsx)(u.View, {
                                className: "search-recommend-title",
                                children: "热门推荐"
                            }), (0, h.jsx)(u.View, {
                                className: "search-recommend-content",
                                children: c.slice(0, 10).map((function(e, s) {
                                    return (0, h.jsx)(u.View, {
                                        className: "search-recommend-book",
                                        onClick: function() {
                                            f.current = 1, A(e, 0), g(e), V(0)
                                        },
                                        children: e
                                    }, s)
                                }))
                            })]
                        }), 1 === x.current && (0, h.jsxs)(u.View, {
                            className: "search-result",
                            children: [F.map((function(e, s) {
                                return (0, h.jsxs)(u.View, {
                                    className: "book-item",
                                    onClick: function() {
                                        return C(e)
                                    },
                                    children: [(0, h.jsxs)(u.View, {
                                        className: "above-book-info",
                                        children: [(0, h.jsx)(u.Image, {
                                            className: "news-header-icon",
                                            src: t
                                        }), (0, h.jsx)(u.View, {
                                            className: "book-pic",
                                            children: (0, h.jsx)(u.Image, {
                                                style: {
                                                    display: "flex",
                                                    width: "100%",
                                                    height: "100px"
                                                },
                                                mode: "aspectFit",
                                                src: "" === e.pic ? B : e.pic
                                            })
                                        }), (0, h.jsxs)(u.View, {
                                            className: "book-info",
                                            children: [(0, h.jsx)(u.View, {
                                                className: "book-name",
                                                children: e.title
                                            }), (0, h.jsxs)(u.View, {
                                                className: "info",
                                                children: ["作者 : ", e.author || "未知"]
                                            }), (0, h.jsxs)(u.View, {
                                                className: "info",
                                                children: ["出版社 : ", e.publisher || "未知"]
                                            }), (0, h.jsxs)(u.View, {
                                                className: "info",
                                                children: ["索书号 : ", e.callNo || "未知"]
                                            })]
                                        })]
                                    }), (0, h.jsx)(u.View, {
                                        className: "bottom-time",
                                        children: (0, h.jsxs)(u.View, {
                                            className: "book-info-0",
                                            style: "color:#0BB1D6",
                                            children: ["可借本数 : ", e.count]
                                        })
                                    })]
                                }, s)
                            })), (0, h.jsx)(u.View, {
                                className: "more",
                                style: {
                                    color: "".concat(F.length % 10 == 0 ? "#03A9F4" : "gray")
                                },
                                onClick: function() {
                                    F.length % 10 == 0 && (f.current++, A())
                                },
                                children: F.length % 10 == 0 ? "加载更多" : "找不到更多啦"
                            })]
                        }), 2 === x.current && (0, h.jsx)(l.DataEmpty, {})]
                    })
                }
            },
            "./src/packages/library/components/borrowed-book/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return c
                    }
                });
                var r = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = a("./src/constants/assets.ts"),
                    o = a("./src/packages/library/utils/timeformat.ts"),
                    t = a("webpack/container/remote/react/jsx-runtime");

                function c(e) {
                    var s = e.books;
                    return (0, t.jsx)(t.Fragment, {
                        children: 0 == s.length ? (0, t.jsxs)(r.View, {
                            className: "books-none-container",
                            children: [(0, t.jsx)(r.Image, {
                                className: "books-none-img",
                                src: n.COMMON_ASSETS.Empty
                            }), (0, t.jsx)(r.View, {
                                children: "当前没有借书，快去图书馆借本书吧！"
                            })]
                        }) : (0, t.jsx)(r.View, {
                            className: "books-list",
                            children: s.map((function(e, s) {
                                return (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsxs)(r.View, {
                                        className: "book-item",
                                        children: [(0, t.jsx)(r.View, {
                                            className: "above-book-info",
                                            children: (0, t.jsxs)(r.View, {
                                                className: "book-info",
                                                children: [(0, t.jsx)(r.View, {
                                                    className: "book-name",
                                                    children: e.bookName
                                                }), (0, t.jsxs)(r.View, {
                                                    className: "info",
                                                    children: ["文献类型 : ", e.docType]
                                                }), (0, t.jsxs)(r.View, {
                                                    className: "info",
                                                    children: ["图书条码（编号） : ", e.marcNo]
                                                }), (0, t.jsxs)(r.View, {
                                                    className: "info",
                                                    children: ["读者学号 : ", e.readerId]
                                                })]
                                            })
                                        }), (0, t.jsxs)(r.View, {
                                            className: "bottom-time",
                                            children: [(0, t.jsxs)(r.View, {
                                                className: "book-info-0",
                                                style: "color:#0BB1D6",
                                                children: ["借书日期 : ", (0, o.formatTime)(e.leftTime)]
                                            }), (0, t.jsxs)(r.View, {
                                                className: "book-info-0",
                                                style: "color:#FF6666",
                                                children: ["应还日期 : ", (0, o.formatTime)(e.deadline)]
                                            })]
                                        })]
                                    }, s)
                                })
                            }))
                        })
                    })
                }
            },
            "./src/packages/library/pages/index.tsx": function(e, s, a) {
                var r = a("webpack/container/remote/@tarojs/runtime"),
                    n = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/library/pages/index.tsx");
                Page((0, r.createPageConfig)(n.default, "packages/library/pages/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "图书馆",
                    disableScroll: !0,
                    backgroundColor: "#FFFFFF",
                    backgroundTextStyle: "dark"
                } || {})), n.default
            },
            "./src/packages/library/utils/timeformat.ts": function(e, s, a) {
                a.d(s, {
                    formatTime: function() {
                        return r
                    }
                });
                var r = function(e) {
                    return e.split(" ")[0].slice(2)
                }
            }
        },
        function(e) {
            e.O(0, ["packages/library/sub-vendors", "sub-common/5cadce6ba9a3c23f663c84fdf39fc435", "taro", "vendors", "common"], (function() {
                return "./src/packages/library/pages/index.tsx", e(e.s = "./src/packages/library/pages/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/library/pages/index.js'
});
require("packages/library/pages/index.js");