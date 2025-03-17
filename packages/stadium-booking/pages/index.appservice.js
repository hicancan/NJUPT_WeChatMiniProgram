$gwx5_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_1 || [];

        function gz$gwx5_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx5_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx5_XC_1 = true;
        var x = ['./packages/stadium-booking/pages/index.wxml', '../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx5_XC_1_1()
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
                g = "$gwx5_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/stadium-booking/pages/index.wxml'] = [$gwx5_XC_1, './packages/stadium-booking/pages/index.wxml'];
else __wxAppCode__['packages/stadium-booking/pages/index.wxml'] = $gwx5_XC_1('./packages/stadium-booking/pages/index.wxml');;
__wxRoute = "packages/stadium-booking/pages/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/stadium-booking/pages/index.js";
define("packages/stadium-booking/pages/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../sub-vendors.js"), require("../sub-common/b1891c2d0b06af8d218b542641f4ed40.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/stadium-booking/pages/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/stadium-booking/pages/index.tsx": function(e, s, o) {
                o.d(s, {
                    default: function() {
                        return f
                    }
                });
                var n = o("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    a = o("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    t = o("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    i = o("webpack/container/remote/@tarojs/taro"),
                    r = o.n(i),
                    c = o("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    l = o("./src/common/hook.ts"),
                    d = o("./src/components/PageLayout/index.tsx"),
                    m = o("./src/components/DataEmpty/index.tsx"),
                    u = o("./src/components/PageScroll/index.tsx"),
                    p = o("./src/packages/stadium-booking/module/hook.ts"),
                    g = o("./src/packages/stadium-booking/module/index.ts"),
                    b = o("./src/packages/stadium-booking/components/booking-card/index.tsx"),
                    x = o("./src/packages/stadium-booking/common/assets.ts"),
                    k = o("webpack/container/remote/react/jsx-runtime"),
                    j = [{
                        bgcolor: "linear-gradient(180deg, #FAFFF6 0%, #F8FFF3 100%)",
                        bgImg: x.STADIUM_BOOKING_ASSETS.Tennis,
                        text: "网球场",
                        textcolor: "#A7DE34",
                        id: 2
                    }, {
                        bgcolor: "linear-gradient(180deg, #F9FFFF 0%, #F2F8FF 100%)",
                        bgImg: x.STADIUM_BOOKING_ASSETS.Badminton,
                        text: "羽毛球场",
                        textcolor: "#38B7DF",
                        id: 1
                    }, {
                        bgcolor: "linear-gradient(180deg, #FFFCF9 0%, #FFF9F2 100%)",
                        text: "篮球场",
                        bgImg: x.STADIUM_BOOKING_ASSETS.Basketball,
                        textcolor: "#DD782F",
                        id: 3
                    }, {
                        bgcolor: "linear-gradient(180deg, #FFFCF9 0%, #FFF9F2 100%)",
                        bgImg: x.STADIUM_BOOKING_ASSETS.Gym,
                        text: "健身房",
                        textcolor: "#F2CC05",
                        id: 4
                    }],
                    h = function() {
                        var e, s = (0, p.useIndexData)(),
                            o = (0, t.default)(s.bookingList);
                        return r().getStorageSync("fromPay") && g.StadiumBookingModule.auto().then((function() {
                            r().setStorageSync("fromPay", !1)
                        })), (0, k.jsxs)(u.PageScroll, {
                            className: "container",
                            onPullRefresh: function() {
                                g.StadiumBookingModule.refresh()
                            },
                            children: [(0, k.jsxs)(c.View, {
                                className: "notice",
                                onClick: function() {
                                    r().navigateTo({
                                        url: "/packages/stadium-booking/pages/notices/index"
                                    })
                                },
                                children: [(0, k.jsxs)(c.View, {
                                    className: "notice-title",
                                    children: [(0, k.jsx)(c.Text, {
                                        children: "体育部公告"
                                    }), (0, k.jsxs)(c.Text, {
                                        className: "notice-more",
                                        children: ["查看更多", ">"]
                                    })]
                                }), (0, k.jsx)(c.View, {
                                    className: "notice-content",
                                    children: s.notice ? (0, k.jsx)(c.View, {
                                        children: s.notice.map((function(e, s) {
                                            if (s < 3) return (0, k.jsxs)(c.View, {
                                                className: "notice-item",
                                                children: [(0, k.jsxs)(c.View, {
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    children: [(0, k.jsx)(c.Image, {
                                                        className: "notice-icon",
                                                        src: x.STADIUM_BOOKING_LOCAL.Notice
                                                    }), (0, k.jsx)(c.Text, {
                                                        className: "notice-desc",
                                                        children: e.title
                                                    })]
                                                }), (0, k.jsx)(c.Text, {
                                                    className: "notice-time",
                                                    children: e.createTime.substring(0, 16)
                                                })]
                                            }, s)
                                        }))
                                    }) : "暂无公告"
                                })]
                            }), (0, k.jsx)(c.View, {
                                className: "items",
                                children: j.map((function(o) {
                                    return (0, k.jsxs)(c.View, {
                                        onClick: function() {
                                            ! function(o) {
                                                (e = e || (0, a.default)((0, n.default)().mark((function e(o) {
                                                    return (0, n.default)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (s.gymType.map((function(e) {
                                                                        return e.id
                                                                    })).includes(o)) {
                                                                    e.next = 5;
                                                                    break
                                                                }
                                                                r().showToast({
                                                                    title: "该场地暂时关闭",
                                                                    icon: "error"
                                                                }), e.next = 8;
                                                                break;
                                                            case 5:
                                                                return r().showLoading({
                                                                    title: "加载中",
                                                                    mask: !0
                                                                }), e.next = 8, g.StadiumBookingModule.getTimeTable(o).then((function(e) {
                                                                    e.length ? (r().hideLoading(), r().navigateTo({
                                                                        url: "/packages/stadium-booking/pages/booking/index?type=".concat(o)
                                                                    })) : r().showToast({
                                                                        title: "暂无可预约场地",
                                                                        icon: "error"
                                                                    })
                                                                })).catch((function(e) {
                                                                    r().showToast({
                                                                        title: e.errMsg,
                                                                        icon: "error"
                                                                    })
                                                                }));
                                                            case 8:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })))).apply(this, arguments)
                                            }(o.id)
                                        },
                                        className: "item",
                                        style: {
                                            background: "".concat(o.bgcolor)
                                        },
                                        children: [(0, k.jsx)(c.Image, {
                                            src: o.bgImg,
                                            className: "item-icon"
                                        }), (0, k.jsx)(c.Text, {
                                            className: "item-text",
                                            style: {
                                                color: o.textcolor
                                            },
                                            children: o.text
                                        })]
                                    }, o.id)
                                }))
                            }), (0, k.jsxs)(c.View, {
                                className: "my-booking",
                                children: [(0, k.jsxs)(c.View, {
                                    className: "my-booking-title",
                                    children: [(0, k.jsx)(c.Image, {
                                        className: "booking-icon",
                                        src: x.STADIUM_BOOKING_LOCAL.Clock
                                    }), (0, k.jsx)(c.Text, {
                                        children: "我的预约"
                                    })]
                                }), 0 == o.length ? (0, k.jsx)(m.DataEmpty, {}) : (0, k.jsx)(c.View, {
                                    className: "booking-list",
                                    children: o.map((function(e, s) {
                                        return (0, k.jsx)(b.BookingCard, {
                                            bookingInfo: e
                                        }, s)
                                    }))
                                })]
                            })]
                        })
                    };

                function f() {
                    var e = (0, l.useModule)(g.StadiumBookingModule),
                        s = e.loading,
                        o = e.success;
                    return (0, k.jsx)(d.Layout, {
                        titleText: "场地预约",
                        animation: !0,
                        loading: s,
                        success: o,
                        children: (0, k.jsx)(h, {})
                    })
                }
            },
            "./src/packages/stadium-booking/components/booking-card/index.tsx": function(e, s, o) {
                o.d(s, {
                    BookingCard: function() {
                        return p
                    }
                });
                var n, a = o("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    t = o("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    i = o("webpack/container/remote/@tarojs/taro"),
                    r = o.n(i),
                    c = o("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    l = o("./src/packages/stadium-booking/common/assets.ts"),
                    d = o("./src/packages/stadium-booking/module/index.ts"),
                    m = o("webpack/container/remote/react/jsx-runtime"),
                    u = {
                        "健身房": "Gym",
                        "网球": "Tennis",
                        "篮球": "Basketball",
                        "羽毛球": "Badminton"
                    };

                function p(e) {
                    var s = e.bookingInfo;
                    return (0, m.jsxs)(c.View, {
                        className: "card-container",
                        children: [(0, m.jsxs)(c.View, {
                            className: "header",
                            children: [(0, m.jsx)(c.Image, {
                                className: "type-icon",
                                src: l.STADIUM_BOOKING_ASSETS[u[s.sportName]]
                            }), (0, m.jsxs)(c.View, {
                                className: "type-text",
                                children: [s.sportName, "场地预约"]
                            }), (0, m.jsx)(c.View, {
                                className: "order-type",
                                children: s.orderType
                            }), 1 === s.status ? (0, m.jsx)(c.View, {
                                className: "status ",
                                children: " 待支付 "
                            }) : null, 2 === s.status && (0, m.jsx)(c.View, {
                                className: "status",
                                style: {
                                    color: " #7dce5be3"
                                },
                                children: "已预约"
                            }), s.status <= 0 && (0, m.jsx)(c.View, {
                                className: "status",
                                style: {
                                    color: "#FF5A5A"
                                },
                                children: "订单取消"
                            })]
                        }), (0, m.jsxs)(c.View, {
                            className: "main",
                            children: [(0, m.jsx)(c.View, {
                                className: "position",
                                children: s.stadiumName
                            }), (0, m.jsxs)(c.View, {
                                className: "booking-time",
                                children: [s.startTime, " — ", s.endTime.substring(11)]
                            })]
                        }), (0, m.jsxs)(c.View, {
                            className: "footer",
                            children: [(0, m.jsxs)(c.View, {
                                className: "booking-pay",
                                children: ["场地费用：", s.price, "元"]
                            }), 1 === s.status && (0, m.jsx)(c.View, {
                                className: "btn-pay",
                                onClick: function() {
                                    return function(e) {
                                        return (n = n || (0, t.default)((0, a.default)().mark((function e(s) {
                                            var o, n, t;
                                            return (0, a.default)().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, d.StadiumBookingModule.getOrderData(s);
                                                    case 3:
                                                        o = e.sent, console.log(o), n = encodeURIComponent(JSON.stringify(o.data)), t = encodeURIComponent("/packages/stadium-booking/pages/index"), r().redirectTo({
                                                            url: "/packages/pay/pages/pay-page/index?orderData=".concat(n, "&fromUrl=").concat(t)
                                                        }), e.next = 13;
                                                        break;
                                                    case 10:
                                                        e.prev = 10, e.t0 = e.catch(0), console.error("Error during payNow process:", e.t0);
                                                    case 13:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 10]
                                            ])
                                        })))).apply(this, arguments)
                                    }(s.orderId)
                                },
                                children: "马上支付"
                            })]
                        })]
                    })
                }
            },
            "./src/packages/stadium-booking/pages/index.tsx": function(e, s, o) {
                var n = o("webpack/container/remote/@tarojs/runtime"),
                    a = o("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/stadium-booking/pages/index.tsx");
                Page((0, n.createPageConfig)(a.default, "packages/stadium-booking/pages/index", {
                    root: {
                        cn: []
                    }
                }, {
                    backgroundColor: "#FBFBFB",
                    disableScroll: !0
                } || {})), a.default
            }
        },
        function(e) {
            e.O(0, ["packages/stadium-booking/sub-vendors", "sub-common/b1891c2d0b06af8d218b542641f4ed40", "taro", "vendors", "common"], (function() {
                return "./src/packages/stadium-booking/pages/index.tsx", e(e.s = "./src/packages/stadium-booking/pages/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/stadium-booking/pages/index.js'
});
require("packages/stadium-booking/pages/index.js");