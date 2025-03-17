$gwx0_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_2 || [];

        function gz$gwx0_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_2 = true;
        var x = ['./packages/campus-card/pages/card-index/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_2_1()
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
                g = "$gwx0_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/campus-card/pages/card-index/index.wxml'] = [$gwx0_XC_2, './packages/campus-card/pages/card-index/index.wxml'];
else __wxAppCode__['packages/campus-card/pages/card-index/index.wxml'] = $gwx0_XC_2('./packages/campus-card/pages/card-index/index.wxml');;
__wxRoute = "packages/campus-card/pages/card-index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/campus-card/pages/card-index/index.js";
define("packages/campus-card/pages/card-index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/campus-card/pages/card-index/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/campus-card/pages/card-index/index.tsx": function(t, e, i) {
                i.d(e, {
                    default: function() {
                        return S
                    }
                });
                var n = i("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    a = i("./src/common/hook.ts"),
                    o = i("webpack/container/remote/@tarojs/taro"),
                    r = i.n(o),
                    s = i("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    c = i("./src/common/module/home/index.ts"),
                    l = i("./src/packages/campus-card/api/request.ts"),
                    h = i("webpack/container/remote/react"),
                    d = i("./src/packages/campus-card/assets/index.ts"),
                    u = i("./src/packages/campus-card/components/wxcharts-min.js"),
                    f = i.n(u),
                    x = i("./src/components/PageLayout/index.tsx"),
                    p = i("./src/components/BindCard/index.tsx"),
                    g = i("./src/packages/campus-card/components/LostHalfPage/index.tsx"),
                    m = i("./src/packages/campus-card/module/card/index.ts"),
                    y = i("webpack/container/remote/react/jsx-runtime"),
                    v = [{
                        text: "消费明细",
                        thumb: d.CARD_INDEX_ASSETS.DetailIcon,
                        navigateURL: "./card-bill/index",
                        refreshData: function() {
                            return m.CampusCardModule.getBills()
                        },
                        state: !0
                    }, {
                        text: "校园卡挂失",
                        thumb: d.CARD_INDEX_ASSETS.LostIcon,
                        navigateURL: "",
                        state: !1
                    }, {
                        text: "金额操作记录",
                        thumb: d.CARD_INDEX_ASSETS.MoneyLogIcon,
                        navigateURL: "./money-log/index",
                        refreshData: function() {
                            return m.CampusCardModule.getLogs()
                        },
                        state: !0
                    }],
                    P = function() {
                        var t = (0, c.useIsBind)(),
                            e = (0, m.useCampusCardState)(),
                            i = e.cardInfo,
                            a = e.weekList,
                            u = e.yearList,
                            P = (0, h.useContext)(x.TitleLoading),
                            S = (0, n.default)(P, 2)[1],
                            b = (0, h.useState)(!1),
                            T = (0, n.default)(b, 2),
                            A = T[0],
                            w = T[1],
                            _ = (0, h.useState)("week"),
                            M = (0, n.default)(_, 2),
                            k = M[0],
                            C = M[1];
                        return (0, h.useEffect)((function() {
                            var t = "week" == k ? a.days : u.months,
                                e = "week" == k ? a.data : u.data;
                            t.length > 0 && e.length > 0 && new(f())({
                                type: "area",
                                canvasId: "chartCanvas",
                                categories: t,
                                series: [{
                                    data: e.map((function(t) {
                                        return Number(t)
                                    }))
                                }],
                                yAxis: {
                                    min: 0,
                                    gridColor: "rgba(255,255,255,0)",
                                    format: function(t) {
                                        return t + "元"
                                    }
                                },
                                legend: !1,
                                width: Math.floor(r().getWindowInfo().screenWidth),
                                height: 200
                            }).stopAnimation()
                        }), [k, a, u]), (0, o.usePullDownRefresh)((function() {
                            S(!0), r().showLoading({
                                title: "加载中"
                            }), m.CampusCardModule.refresh().finally((function() {
                                S(!1), r().hideLoading(), r().stopPullDownRefresh(), r().showToast({
                                    title: "刷新成功",
                                    icon: "success",
                                    duration: 700
                                })
                            }))
                        })), (0, y.jsxs)(y.Fragment, {
                            children: [t ? (0, y.jsx)(g.LostPage, {
                                show: A,
                                setHide: function() {
                                    return w(!1)
                                }
                            }) : (0, y.jsx)(p.BindCardHalfPage, {
                                show: !t,
                                successCallback: m.CampusCardModule.refresh.bind(m.CampusCardModule)
                            }), (0, y.jsxs)(s.View, {
                                className: "container1",
                                children: [(0, y.jsx)(s.View, {
                                    className: "bg"
                                }), (0, y.jsxs)(s.View, {
                                    className: "index-head",
                                    children: [(0, y.jsx)(s.Image, {
                                        className: "index-head-bg",
                                        src: d.CARD_INDEX_ASSETS.IndexCardBg
                                    }), (0, y.jsx)(s.View, {
                                        className: "tip",
                                        children: "余额（元）"
                                    }), (0, y.jsx)(s.View, {
                                        className: "balance",
                                        children: i.amount / 100
                                    }), (0, y.jsxs)(s.View, {
                                        className: "card-text",
                                        children: ["卡号：", i.accountId]
                                    }), (0, y.jsxs)(s.View, {
                                        className: "tip",
                                        children: ["截止时间：", (0, l.formatDate)(new Date)]
                                    })]
                                }), (0, y.jsx)(s.View, {
                                    className: "list",
                                    children: v.map((function(t, e) {
                                        return (0, y.jsxs)(s.View, {
                                            className: "item-container",
                                            onClick: function() {
                                                return function(t) {
                                                    t.state ? t.refreshData ? t.refreshData().then((function() {
                                                        r().navigateTo({
                                                            url: t.navigateURL
                                                        })
                                                    })) : r().navigateTo({
                                                        url: t.navigateURL
                                                    }) : w(!A)
                                                }(t)
                                            },
                                            children: [(0, y.jsx)(s.Image, {
                                                className: "iconx",
                                                mode: "aspectFit",
                                                src: t.thumb
                                            }), (0, y.jsxs)(s.View, {
                                                className: "content",
                                                children: [(0, y.jsx)(s.Text, {
                                                    children: t.text
                                                }), (0, y.jsx)(s.Image, {
                                                    mode: "aspectFit",
                                                    className: "iconRight",
                                                    src: d.CARD_INDEX_ASSETS.IndexRightArrow
                                                })]
                                            })]
                                        }, e)
                                    }))
                                }), (0, y.jsxs)(s.View, {
                                    className: "chart-container",
                                    children: [(0, y.jsx)(s.Text, {
                                        className: "title",
                                        children: "消费水平"
                                    }), (0, y.jsxs)(s.View, {
                                        className: "tab-list",
                                        children: [(0, y.jsx)(s.View, {
                                            id: "week",
                                            className: "tab ".concat("week" == k ? "active" : null),
                                            onClick: function() {
                                                return C("week")
                                            },
                                            children: "近7天"
                                        }), (0, y.jsx)(s.View, {
                                            id: "year",
                                            className: "tab ".concat("year" == k ? "active" : null),
                                            onClick: function() {
                                                return C("year")
                                            },
                                            children: "近一年"
                                        })]
                                    }), (0, y.jsx)(s.Canvas, {
                                        "z-index": "10",
                                        className: "canvas",
                                        "disable-scroll": "true",
                                        "canvas-id": "chartCanvas",
                                        style: {
                                            display: !A && t ? "block" : "none"
                                        }
                                    })]
                                })]
                            })]
                        })
                    };

                function S() {
                    var t = (0, a.useModule)(m.CampusCardModule),
                        e = t.loading,
                        i = t.success;
                    return (0, y.jsx)(x.Layout, {
                        titleText: "一卡通",
                        animation: !0,
                        loading: e,
                        success: i,
                        children: (0, y.jsx)(P, {})
                    })
                }
            },
            "./src/packages/campus-card/components/LostHalfPage/index.tsx": function(t, e, i) {
                i.d(e, {
                    LostPage: function() {
                        return l
                    }
                });
                var n = i("webpack/container/remote/@tarojs/taro"),
                    a = i.n(n),
                    o = i("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    r = i("./src/components/HalfSubPage/index.tsx"),
                    s = i("./src/packages/campus-card/module/card/index.ts"),
                    c = i("webpack/container/remote/react/jsx-runtime"),
                    l = function(t) {
                        var e = t.show,
                            i = t.setHide,
                            n = [{
                                text: "校园卡挂失",
                                action: function() {
                                    a().showModal({
                                        title: "提示！",
                                        content: "您确定要挂失校园卡吗？挂失之后校园卡和微信支付都无法使用哦，可以先去失物招领看看",
                                        success: function(t) {
                                            t.confirm && s.CampusCardModule.admitLost()
                                        }
                                    })
                                }
                            }, {
                                text: "挂失解除",
                                action: function() {
                                    a().showModal({
                                        title: "解除校园卡挂失状态",
                                        content: "您确定要解除挂失吗？",
                                        success: function(t) {
                                            t.confirm && s.CampusCardModule.findLost()
                                        }
                                    })
                                }
                            }, {
                                text: "捡到校园卡",
                                action: function() {
                                    a().showModal({
                                        title: "捡到了其他人的校园卡？",
                                        content: "可以交到图书馆一楼的学生事务中心处，蟹蟹热心的你！",
                                        confirmText: "我知道了",
                                        showCancel: !1
                                    })
                                }
                            }, {
                                text: "失物招领",
                                action: function() {
                                    a().showModal({
                                        title: "校园卡丢失了吗？",
                                        content: "是否要前往小程序首页的失物招领处看看",
                                        confirmText: "前往",
                                        success: function(t) {
                                            t.confirm && a().switchTab({
                                                url: "/pages/door/index"
                                            })
                                        }
                                    })
                                }
                            }];
                        return (0, c.jsx)(r.HalfSubPage, {
                            show: e,
                            setHide: i,
                            children: (0, c.jsx)(o.View, {
                                className: "lost-container",
                                children: n.map((function(t, e) {
                                    return (0, c.jsx)(o.View, {
                                        className: "action",
                                        onClick: t.action,
                                        children: (0, c.jsx)(o.Text, {
                                            className: "text",
                                            children: t.text
                                        })
                                    }, e)
                                }))
                            })
                        })
                    }
            },
            "./src/packages/campus-card/components/wxcharts-min.js": function(t, e, i) {
                var n = i("webpack/container/remote/@tarojs/runtime").requestAnimationFrame;

                function a(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var i = Object(t), n = 1; n < arguments.length; n++) {
                        var a = arguments[n];
                        if (null != a)
                            for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o])
                    }
                    return i
                }

                function o(t, e, i) {
                    if (isNaN(t)) throw new Error("[wxCharts] unvalid series data!");
                    i = i || 10, e = e || "upper";
                    for (var n = 1; i < 1;) i *= 10, n *= 10;
                    for (t = "upper" === e ? Math.ceil(t * n) : Math.floor(t * n); t % i != 0;) "upper" === e ? t++ : t--;
                    return t / n
                }

                function r(t, e, i) {
                    function n(t) {
                        for (; t < 0;) t += 2 * Math.PI;
                        for (; t > 2 * Math.PI;) t -= 2 * Math.PI;
                        return t
                    }
                    return t = n(t), (e = n(e)) > (i = n(i)) && (i += 2 * Math.PI, t < e && (t += 2 * Math.PI)), t >= e && t <= i
                }

                function s(t, e) {
                    function i(t, e) {
                        return !(!t[e - 1] || !t[e + 1]) && (t[e].y >= Math.max(t[e - 1].y, t[e + 1].y) || t[e].y <= Math.min(t[e - 1].y, t[e + 1].y))
                    }
                    var n = null,
                        a = null,
                        o = null,
                        r = null;
                    if (e < 1 ? (n = t[0].x + .2 * (t[1].x - t[0].x), a = t[0].y + .2 * (t[1].y - t[0].y)) : (n = t[e].x + .2 * (t[e + 1].x - t[e - 1].x), a = t[e].y + .2 * (t[e + 1].y - t[e - 1].y)), e > t.length - 3) {
                        var s = t.length - 1;
                        o = t[s].x - .2 * (t[s].x - t[s - 1].x), r = t[s].y - .2 * (t[s].y - t[s - 1].y)
                    } else o = t[e + 1].x - .2 * (t[e + 2].x - t[e].x), r = t[e + 1].y - .2 * (t[e + 2].y - t[e].y);
                    return i(t, e + 1) && (r = t[e + 1].y), i(t, e) && (a = t[e].y), {
                        ctrA: {
                            x: n,
                            y: a
                        },
                        ctrB: {
                            x: o,
                            y: r
                        }
                    }
                }

                function c(t, e, i) {
                    return {
                        x: i.x + t,
                        y: i.y - e
                    }
                }

                function l(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        i = (t = (t = String(t)).split(""), 0);
                    return t.forEach((function(t) {
                        /[a-zA-Z]/.test(t) ? i += 7 : /[0-9]/.test(t) ? i += 5.5 : /\./.test(t) ? i += 2.7 : /-/.test(t) ? i += 3.25 : /[\u4e00-\u9fa5]/.test(t) ? i += 10 : /\(|\)/.test(t) ? i += 3.73 : /\s/.test(t) ? i += 2.5 : /%/.test(t) ? i += 8 : i += 10
                    })), i * e / 10
                }

                function h(t) {
                    return t.reduce((function(t, e) {
                        return (t.data ? t.data : t).concat(e.data)
                    }), [])
                }

                function d(t, e, i) {
                    return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2) <= Math.pow(i, 2)
                }

                function u(t) {
                    var e = [],
                        i = [];
                    return t.forEach((function(t, n) {
                        null !== t ? i.push(t) : (i.length && e.push(i), i = [])
                    })), i.length && e.push(i), e
                }

                function f(t, e, i) {
                    if (!1 === e.legend) return {
                        legendList: [],
                        legendHeight: 0
                    };
                    var n = [],
                        a = 0,
                        o = [];
                    return t.forEach((function(t) {
                        var i = 30 + l(t.name || "undefined");
                        a + i > e.width ? (n.push(o), a = i, o = [t]) : (a += i, o.push(t))
                    })), o.length && n.push(o), {
                        legendList: n,
                        legendHeight: n.length * (i.fontSize + 8) + 5
                    }
                }

                function x(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        i = 0,
                        n = 0;
                    return t.forEach((function(t) {
                        t.data = null === t.data ? 0 : t.data, i += t.data
                    })), t.forEach((function(t) {
                        t.data = null === t.data ? 0 : t.data, t._proportion_ = t.data / i * e
                    })), t.forEach((function(t) {
                        t._start_ = n, n += 2 * t._proportion_ * Math.PI
                    })), t
                }

                function p(t, e, i, n, a, o) {
                    return t.map((function(t) {
                        return null === t ? null : (t.width = (e - 2 * a.columePadding) / i, o.extra.column && o.extra.column.width && +o.extra.column.width > 0 ? t.width = Math.min(t.width, +o.extra.column.width) : t.width = Math.min(t.width, 25), t.x += (n + .5 - i / 2) * t.width, t)
                    }))
                }

                function g(t, e, i) {
                    var n = i.yAxisWidth + i.yAxisTitleWidth,
                        a = (e.width - 2 * i.padding - n) / (e.enableScroll ? Math.min(5, t.length) : t.length),
                        o = [],
                        r = i.padding + n,
                        s = e.width - i.padding;
                    return t.forEach((function(t, e) {
                        o.push(r + e * a)
                    })), !0 === e.enableScroll ? o.push(r + t.length * a) : o.push(s), {
                        xAxisPoints: o,
                        startX: r,
                        endX: s,
                        eachSpacing: a
                    }
                }

                function m(t, e, i, n, a, o, r) {
                    var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
                        c = [],
                        l = o.height - 2 * r.padding - r.xAxisHeight - r.legendHeight;
                    return t.forEach((function(t, h) {
                        if (null === t) c.push(null);
                        else {
                            var d = {};
                            d.x = n[h] + Math.round(a / 2);
                            var u = l * (t - e) / (i - e);
                            u *= s, d.y = o.height - r.xAxisHeight - r.legendHeight - Math.round(u) - r.padding, c.push(d)
                        }
                    })), c
                }

                function y(t, e, i) {
                    var n = function(t, e, i) {
                            var n = h(t);
                            n = n.filter((function(t) {
                                return null !== t
                            }));
                            var a = Math.min.apply(this, n),
                                r = Math.max.apply(this, n);
                            if ("number" == typeof e.yAxis.min && (a = Math.min(e.yAxis.min, a)), "number" == typeof e.yAxis.max && (r = Math.max(e.yAxis.max, r)), a === r) {
                                var s = r || 1;
                                a -= s, r += s
                            }
                            for (var c = function(t, e) {
                                    var i, n = e - t;
                                    return {
                                        minRange: o(t, "lower", i = n >= 1e4 ? 1e3 : n >= 1e3 ? 100 : n >= 100 ? 10 : n >= 10 ? 5 : n >= 1 ? 1 : n >= .1 ? .1 : .01),
                                        maxRange: o(e, "upper", i)
                                    }
                                }(a, r), l = c.minRange, d = [], u = (c.maxRange - l) / i.yAxisSplit, f = 0; f <= i.yAxisSplit; f++) d.push(l + u * f);
                            return d.reverse()
                        }(t, e, i),
                        a = i.yAxisWidth,
                        r = n.map((function(t) {
                            return t = I.toFixed(t, 2), t = e.yAxis.format ? e.yAxis.format(Number(t)) : t, a = Math.max(a, l(t) + 5), t
                        }));
                    return !0 === e.yAxis.disabled && (a = 0), {
                        rangesFormat: r,
                        ranges: n,
                        yAxisWidth: a
                    }
                }

                function v(t, e, i, n) {
                    n.beginPath(), n.setStrokeStyle("#ffffff"), n.setLineWidth(1), n.setFillStyle(e), "diamond" === i ? t.forEach((function(t, e) {
                        null !== t && (n.moveTo(t.x, t.y - 4.5), n.lineTo(t.x - 4.5, t.y), n.lineTo(t.x, t.y + 4.5), n.lineTo(t.x + 4.5, t.y), n.lineTo(t.x, t.y - 4.5))
                    })) : "circle" === i ? t.forEach((function(t, e) {
                        null !== t && (n.moveTo(t.x + 3.5, t.y), n.setLineWidth(1), n.setStrokeStyle("rgb(102,209,255)"), n.arc(t.x, t.y, 3, 0, 2 * Math.PI, !1), n.stroke())
                    })) : "rect" === i ? t.forEach((function(t, e) {
                        null !== t && (n.moveTo(t.x - 3.5, t.y - 3.5), n.rect(t.x - 3.5, t.y - 3.5, 7, 7))
                    })) : "triangle" === i && t.forEach((function(t, e) {
                        null !== t && (n.moveTo(t.x, t.y - 4.5), n.lineTo(t.x - 4.5, t.y + 4.5), n.lineTo(t.x + 4.5, t.y + 4.5), n.lineTo(t.x, t.y - 4.5))
                    })), n.closePath(), n.setFillStyle("white"), n.fill(), n.setFillStyle("rgba(223,249,255,1)"), n.stroke()
                }

                function P(t, e, i, n) {
                    var a = e.data;
                    n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle("#666666"), t.forEach((function(t, i) {
                        if (null !== t) {
                            var o = e.format ? e.format(a[i]) : a[i];
                            n.fillText(o, t.x - l(o) / 2, t.y - 2)
                        }
                    })), n.closePath(), n.stroke()
                }

                function S(t, e, i, n, a, o) {
                    var r = a + i.pieChartLinePadding,
                        s = (i.pieChartTextPadding, []),
                        h = null;
                    t.map((function(t) {
                        return {
                            arc: 2 * Math.PI - (t._start_ + 2 * Math.PI * t._proportion_ / 2),
                            text: t.format ? t.format(+t._proportion_.toFixed(2)) : I.toFixed(100 * t._proportion_) + "%",
                            color: t.color
                        }
                    })).forEach((function(t) {
                        var e = Math.cos(t.arc) * r,
                            n = Math.sin(t.arc) * r,
                            o = Math.cos(t.arc) * a,
                            c = Math.sin(t.arc) * a,
                            d = e >= 0 ? e + i.pieChartTextPadding : e - i.pieChartTextPadding,
                            u = n,
                            f = l(t.text),
                            x = u;
                        h && I.isSameXCoordinateArea(h.start, {
                            x: d
                        }) && (x = d > 0 ? Math.min(u, h.start.y) : e < 0 || u > 0 ? Math.max(u, h.start.y) : Math.min(u, h.start.y)), d < 0 && (d -= f);
                        var p = {
                            lineStart: {
                                x: o,
                                y: c
                            },
                            lineEnd: {
                                x: e,
                                y: n
                            },
                            start: {
                                x: d,
                                y: x
                            },
                            width: f,
                            height: i.fontSize,
                            text: t.text,
                            color: t.color
                        };
                        h = function(t, e) {
                            if (e)
                                for (; I.isCollision(t, e);) t.start.x > 0 ? t.start.y-- : t.start.x < 0 || t.start.y > 0 ? t.start.y++ : t.start.y--;
                            return t
                        }(p, h), s.push(h)
                    })), s.forEach((function(t) {
                        var e = c(t.lineStart.x, t.lineStart.y, o),
                            a = c(t.lineEnd.x, t.lineEnd.y, o),
                            r = c(t.start.x, t.start.y, o);
                        n.setLineWidth(1), n.setFontSize(i.fontSize), n.beginPath(), n.setStrokeStyle(t.color), n.setFillStyle(t.color), n.moveTo(e.x, e.y);
                        var s = t.start.x < 0 ? r.x + t.width : r.x,
                            l = t.start.x < 0 ? r.x - 5 : r.x + 5;
                        n.quadraticCurveTo(a.x, a.y, s, r.y), n.moveTo(e.x, e.y), n.stroke(), n.closePath(), n.beginPath(), n.moveTo(r.x + t.width, r.y), n.arc(s, r.y, 2, 0, 2 * Math.PI), n.closePath(), n.fill(), n.beginPath(), n.setFillStyle("#666666"), n.fillText(t.text, l, r.y + 3), n.closePath(), n.stroke(), n.closePath()
                    }))
                }

                function b(t, e, i, n) {
                    var a = i.padding,
                        o = e.height - i.padding - i.xAxisHeight - i.legendHeight;
                    n.beginPath(), n.setStrokeStyle("#cccccc"), n.setLineWidth(1), n.moveTo(t, a), n.lineTo(t, o), n.stroke(), n.closePath()
                }

                function T(t, e, i, n) {
                    i.save(), t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && i.translate(t._scrollDistance_, 0), t.tooltip && t.tooltip.textList && t.tooltip.textList.length && 1 === n && function(t, e, i, n, o) {
                        var r = !1;
                        (e = a({
                            x: 0,
                            y: 0
                        }, e)).y -= 8;
                        var s = t.map((function(t) {
                                return l(t.text)
                            })),
                            c = 9 + 4 * n.toolTipPadding + Math.max.apply(null, s),
                            h = 2 * n.toolTipPadding + t.length * n.toolTipLineHeight;
                        e.x - Math.abs(i._scrollDistance_) + 8 + c > i.width && (r = !0), o.beginPath(), o.setFillStyle(i.tooltip.option.background || n.toolTipBackground), o.setGlobalAlpha(n.toolTipOpacity), r ? (o.moveTo(e.x, e.y + 10), o.lineTo(e.x - 8, e.y + 10 - 5), o.lineTo(e.x - 8, e.y + 10 + 5), o.moveTo(e.x, e.y + 10), o.fillRect(e.x - c - 8, e.y, c, h)) : (o.moveTo(e.x, e.y + 10), o.lineTo(e.x + 8, e.y + 10 - 5), o.lineTo(e.x + 8, e.y + 10 + 5), o.moveTo(e.x, e.y + 10), o.fillRect(e.x + 8, e.y, c, h)), o.closePath(), o.fill(), o.setGlobalAlpha(1), t.forEach((function(t, i) {
                            o.beginPath(), o.setFillStyle(t.color);
                            var a = e.x + 8 + 2 * n.toolTipPadding,
                                s = e.y + (n.toolTipLineHeight - n.fontSize) / 2 + n.toolTipLineHeight * i + n.toolTipPadding;
                            r && (a = e.x - c - 8 + 2 * n.toolTipPadding), o.fillRect(a, s, 4, n.fontSize), o.closePath()
                        })), o.beginPath(), o.setFontSize(n.fontSize), o.setFillStyle("#ffffff"), t.forEach((function(t, i) {
                            var a = e.x + 8 + 2 * n.toolTipPadding + 4 + 5;
                            r && (a = e.x - c - 8 + 2 * n.toolTipPadding + 4 + 5);
                            var s = e.y + (n.toolTipLineHeight - n.fontSize) / 2 + n.toolTipLineHeight * i + n.toolTipPadding;
                            o.fillText(t.text, a, s + n.fontSize)
                        })), o.stroke(), o.closePath()
                    }(t.tooltip.textList, t.tooltip.offset, t, e, i), i.restore()
                }

                function A(t, e, i, n) {
                    var a = g(t, e, i),
                        o = a.xAxisPoints,
                        r = a.eachSpacing,
                        s = e.height - i.padding - i.xAxisHeight - i.legendHeight;
                    i.xAxisLineHeight, n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && n.translate(e._scrollDistance_, 0), n.beginPath(), n.setStrokeStyle(e.xAxis.gridColor || "#cccccc"), !0 !== e.xAxis.disableGrid && (e.xAxis.type, o.forEach((function(t, e) {}))), n.closePath(), n.stroke();
                    var c = e.width - 2 * i.padding - i.yAxisWidth - i.yAxisTitleWidth,
                        h = Math.min(t.length, Math.ceil(c / i.fontSize / 1.5)),
                        d = Math.ceil(t.length / h);
                    t = t.map((function(t, e) {
                        return e % d != 0 ? "" : t
                    })), 0 === i._xAxisTextAngle_ ? (n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.xAxis.fontColor || "#666666"), t.forEach((function(t, e) {
                        var a = r / 2 - l(t) / 2;
                        n.fillText(t, o[e] + a, s + i.fontSize + 5)
                    })), n.closePath(), n.stroke()) : t.forEach((function(t, a) {
                        n.save(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.xAxis.fontColor || "#666666");
                        var c = l(t),
                            h = r / 2 - c,
                            d = function(t, e, i) {
                                var n = t,
                                    a = i - e,
                                    o = n + (i - a - n) / Math.sqrt(2);
                                return {
                                    transX: o *= -1,
                                    transY: (i - a) * (Math.sqrt(2) - 1) - (i - a - n) / Math.sqrt(2)
                                }
                            }(o[a] + r / 2, s + i.fontSize / 2 + 5, e.height),
                            u = d.transX,
                            f = d.transY;
                        n.rotate(-1 * i._xAxisTextAngle_), n.translate(u, f), n.fillText(t, o[a] + h, s + i.fontSize + 5), n.closePath(), n.stroke(), n.restore()
                    })), n.restore()
                }

                function w(t, e, i) {
                    for (var n = t.height - 2 * e.padding - e.xAxisHeight - e.legendHeight, a = Math.floor(n / e.yAxisSplit), o = e.yAxisWidth + e.yAxisTitleWidth, r = e.padding + o, s = t.width - e.padding, c = [], l = 0; l < e.yAxisSplit; l++) c.push(e.padding + a * l);
                    c.push(e.padding + a * e.yAxisSplit + 2), i.beginPath(), i.setStrokeStyle(t.yAxis.gridColor || "#cccccc"), i.setLineWidth(1), c.forEach((function(t, e) {
                        i.moveTo(r, t), i.lineTo(s, t)
                    })), i.closePath(), i.stroke()
                }

                function _(t, e, i, n) {
                    if (!0 !== e.yAxis.disabled) {
                        var a = y(t, e, i).rangesFormat,
                            o = i.yAxisWidth + i.yAxisTitleWidth,
                            r = e.height - 2 * i.padding - i.xAxisHeight - i.legendHeight,
                            s = Math.floor(r / i.yAxisSplit),
                            c = i.padding + o,
                            h = e.width - i.padding,
                            d = (i.padding, e.height - i.padding - i.xAxisHeight - i.legendHeight);
                        n.setFillStyle(e.background || "#ffffff"), e._scrollDistance_ < 0 && n.fillRect(0, 0, c, d + i.xAxisHeight + 5), n.fillRect(h, 0, e.width, d + i.xAxisHeight + 5);
                        for (var u = [], f = 0; f <= i.yAxisSplit; f++) u.push(i.padding + s * f);
                        n.stroke(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.yAxis.fontColor || "#666666"), a.forEach((function(t, e) {
                            var a = u[e] ? u[e] : d;
                            n.fillText(t, i.padding + i.yAxisTitleWidth, a + i.fontSize / 2)
                        })), n.closePath(), n.stroke(), e.yAxis.title && function(t, e, i, n) {
                            var a = i.xAxisHeight + (e.height - i.xAxisHeight - l(t)) / 2;
                            n.save(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.yAxis.titleFontColor || "#333333"), n.translate(0, e.height), n.rotate(-90 * Math.PI / 180), n.fillText(t, a, i.padding + .5 * i.fontSize), n.stroke(), n.closePath(), n.restore()
                        }(e.yAxis.title, e, i, n)
                    }
                }

                function M(t, e, i, n) {
                    e.legend && f(t, e, i).legendList.forEach((function(t, a) {
                        var o = 0;
                        t.forEach((function(t) {
                            t.name = t.name || "undefined", o += 15 + l(t.name) + 15
                        }));
                        var r = (e.width - o) / 2 + 5,
                            s = e.height - i.padding - i.legendHeight + a * (i.fontSize + 8) + 5 + 8;
                        n.setFontSize(i.fontSize), t.forEach((function(t) {
                            switch (e.type) {
                                case "line":
                                    n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(t.color), n.moveTo(r - 2, s + 5), n.lineTo(r + 17, s + 5), n.stroke(), n.closePath(), n.beginPath(), n.setLineWidth(1), n.setStrokeStyle("#ffffff"), n.setFillStyle(t.color), n.moveTo(r + 7.5, s + 5), n.arc(r + 7.5, s + 5, 4, 0, 2 * Math.PI), n.fill(), n.stroke(), n.closePath();
                                    break;
                                case "pie":
                                case "ring":
                                    n.beginPath(), n.setFillStyle(t.color), n.moveTo(r + 7.5, s + 5), n.arc(r + 7.5, s + 5, 7, 0, 2 * Math.PI), n.closePath(), n.fill();
                                    break;
                                default:
                                    n.beginPath(), n.setFillStyle(t.color), n.moveTo(r, s), n.rect(r, s, 15, 10), n.closePath(), n.fill()
                            }
                            r += 20, n.beginPath(), n.setFillStyle(e.extra.legendTextColor || "#333333"), n.fillText(t.name, r, s + 9), n.closePath(), n.stroke(), r += l(t.name) + 10
                        }))
                    }))
                }

                function k(t, e) {
                    e.draw()
                }

                function C(t) {
                    this.isStop = !1, t.duration = void 0 === t.duration ? 1e3 : t.duration, t.timing = t.timing || "linear";
                    var e = void 0 !== n ? n : "undefined" != typeof setTimeout ? function(t, e) {
                            setTimeout((function() {
                                var e = +new Date;
                                t(e)
                            }), e)
                        } : function(t) {
                            t(null)
                        },
                        i = null,
                        a = function(n) {
                            if (null === n || !0 === this.isStop) return t.onProcess && t.onProcess(1), void(t.onAnimationFinish && t.onAnimationFinish());
                            if (null === i && (i = n), n - i < t.duration) {
                                var o = (n - i) / t.duration;
                                o = (0, D[t.timing])(o), t.onProcess && t.onProcess(o), e(a, 17)
                            } else t.onProcess && t.onProcess(1), t.onAnimationFinish && t.onAnimationFinish()
                        };
                    a = a.bind(this), e(a, 17)
                }

                function L(t, e, i, n) {
                    var a = this,
                        o = e.series,
                        r = e.categories,
                        d = f(o = function(t, e) {
                            var i = 0;
                            return t.map((function(t) {
                                return t.color || (t.color = e.colors[i], i = (i + 1) % e.colors.length), t
                            }))
                        }(o, i), e, i).legendHeight;
                    i.legendHeight = d;
                    var L = y(o, e, i).yAxisWidth;
                    if (i.yAxisWidth = L, r && r.length) {
                        var E = function(t, e, i) {
                                var n = {
                                        angle: 0,
                                        xAxisHeight: i.xAxisHeight
                                    },
                                    a = g(t, e, i).eachSpacing,
                                    o = t.map((function(t) {
                                        return l(t)
                                    })),
                                    r = Math.max.apply(this, o);
                                return r + 2 * i.xAxisTextPadding > a && (n.angle = 45 * Math.PI / 180, n.xAxisHeight = 2 * i.xAxisTextPadding + r * Math.sin(n.angle)), n
                            }(r, e, i),
                            F = E.xAxisHeight,
                            D = E.angle;
                        i.xAxisHeight = F, i._xAxisTextAngle_ = D
                    }
                    "pie" !== t && "ring" !== t || (i._pieTextMaxLength_ = !1 === e.dataLabel ? 0 : function(t) {
                        t = x(t);
                        var e = 0;
                        return t.forEach((function(t) {
                            var i = t.format ? t.format(+t._proportion_.toFixed(2)) : I.toFixed(100 * t._proportion_) + "%";
                            e = Math.max(e, l(i))
                        })), e
                    }(o));
                    var H = e.animation ? 1e3 : 0;
                    switch (this.animationInstance && this.animationInstance.stop(), t) {
                        case "line":
                            this.animationInstance = new C({
                                timing: "easeIn",
                                duration: H,
                                onProcess: function(t) {
                                    w(e, i, n);
                                    var c = function(t, e, i, n) {
                                            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                                                o = y(t, e, i).ranges,
                                                r = g(e.categories, e, i),
                                                c = r.xAxisPoints,
                                                l = r.eachSpacing,
                                                h = o.pop(),
                                                d = o.shift(),
                                                f = [];
                                            return n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && n.translate(e._scrollDistance_, 0), e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === a && b(e.tooltip.offset.x, e, i, n), t.forEach((function(t, o) {
                                                var r = m(t.data, h, d, c, l, e, i, a);
                                                if (f.push(r), u(r).forEach((function(i, a) {
                                                        n.beginPath(), n.setStrokeStyle(t.color), n.setLineWidth(2), 1 === i.length ? (n.moveTo(i[0].x, i[0].y), n.arc(i[0].x, i[0].y, 1, 0, 2 * Math.PI)) : (n.moveTo(i[0].x, i[0].y), "curve" === e.extra.lineStyle ? i.forEach((function(t, e) {
                                                            if (e > 0) {
                                                                var a = s(i, e - 1);
                                                                n.bezierCurveTo(a.ctrA.x, a.ctrA.y, a.ctrB.x, a.ctrB.y, t.x, t.y)
                                                            }
                                                        })) : i.forEach((function(t, e) {
                                                            e > 0 && n.lineTo(t.x, t.y)
                                                        })), n.moveTo(i[0].x, i[0].y)), n.closePath(), n.stroke()
                                                    })), !1 !== e.dataPointShape) {
                                                    var x = i.dataPointShape[o % i.dataPointShape.length];
                                                    v(r, t.color, x, n)
                                                }
                                            })), !1 !== e.dataLabel && 1 === a && t.forEach((function(t, o) {
                                                P(m(t.data, h, d, c, l, e, i, a), t, i, n)
                                            })), n.restore(), {
                                                xAxisPoints: c,
                                                calPoints: f,
                                                eachSpacing: l
                                            }
                                        }(o, e, i, n, t),
                                        l = c.xAxisPoints,
                                        h = c.calPoints,
                                        d = c.eachSpacing;
                                    a.chartData.xAxisPoints = l, a.chartData.calPoints = h, a.chartData.eachSpacing = d, A(r, e, i, n), M(e.series, e, i, n), _(o, e, i, n), T(e, i, n, t), k(0, n)
                                },
                                onAnimationFinish: function() {
                                    a.event.trigger("renderComplete")
                                }
                            });
                            break;
                        case "column":
                            this.animationInstance = new C({
                                timing: "easeIn",
                                duration: H,
                                onProcess: function(t) {
                                    w(e, i, n);
                                    var s = function(t, e, i, n) {
                                            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                                                o = y(t, e, i).ranges,
                                                r = g(e.categories, e, i),
                                                s = r.xAxisPoints,
                                                c = r.eachSpacing,
                                                l = o.pop(),
                                                h = o.shift();
                                            return e.height, i.padding, i.xAxisHeight, i.legendHeight, n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && n.translate(e._scrollDistance_, 0), t.forEach((function(o, r) {
                                                var d = m(o.data, l, h, s, c, e, i, a);
                                                d = p(d, c, t.length, r, i, e), n.beginPath(), n.setFillStyle(o.color), d.forEach((function(t, a) {
                                                    if (null !== t) {
                                                        var o = t.x - t.width / 2 + 1,
                                                            r = e.height - t.y - i.padding - i.xAxisHeight - i.legendHeight;
                                                        n.moveTo(o, t.y), n.rect(o, t.y, t.width - 2, r)
                                                    }
                                                })), n.closePath(), n.fill()
                                            })), t.forEach((function(o, r) {
                                                var d = m(o.data, l, h, s, c, e, i, a);
                                                d = p(d, c, t.length, r, i, e), !1 !== e.dataLabel && 1 === a && P(d, o, i, n)
                                            })), n.restore(), {
                                                xAxisPoints: s,
                                                eachSpacing: c
                                            }
                                        }(o, e, i, n, t),
                                        c = s.xAxisPoints,
                                        l = s.eachSpacing;
                                    a.chartData.xAxisPoints = c, a.chartData.eachSpacing = l, A(r, e, i, n), M(e.series, e, i, n), _(o, e, i, n), k(0, n)
                                },
                                onAnimationFinish: function() {
                                    a.event.trigger("renderComplete")
                                }
                            });
                            break;
                        case "area":
                            this.animationInstance = new C({
                                timing: "easeIn",
                                duration: H,
                                onProcess: function(t) {
                                    w(e, i, n);
                                    var c = function(t, e, i, n) {
                                            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                                                o = y(t, e, i).ranges,
                                                r = g(e.categories, e, i),
                                                c = r.xAxisPoints,
                                                l = r.eachSpacing,
                                                h = o.pop(),
                                                d = o.shift(),
                                                f = e.height - i.padding - i.xAxisHeight - i.legendHeight,
                                                x = [];
                                            return n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && n.translate(e._scrollDistance_, 0), e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === a && b(e.tooltip.offset.x, e, i, n), t.forEach((function(t, o) {
                                                var r = m(t.data, h, d, c, l, e, i, a);
                                                x.push(r), u(r).forEach((function(t) {
                                                    if (n.beginPath(), n.setStrokeStyle("rgb(102,209,255)"), n.setFillStyle("rgba(223,249,255,1)"), n.setLineWidth(2), t.length > 1) {
                                                        var i = t[0],
                                                            a = t[t.length - 1];
                                                        n.moveTo(i.x, i.y), "curve" === e.extra.lineStyle ? t.forEach((function(e, i) {
                                                            if (i > 0) {
                                                                var a = s(t, i - 1);
                                                                n.bezierCurveTo(a.ctrA.x, a.ctrA.y, a.ctrB.x, a.ctrB.y, e.x, e.y)
                                                            }
                                                        })) : t.forEach((function(t, e) {
                                                            e > 0 && n.lineTo(t.x, t.y)
                                                        })), n.stroke(), n.lineTo(a.x, f), n.lineTo(i.x, f), n.lineTo(i.x, i.y)
                                                    } else {
                                                        var o = t[0];
                                                        n.moveTo(o.x - l / 2, o.y), n.lineTo(o.x + l / 2, o.y), n.lineTo(o.x + l / 2, f), n.lineTo(o.x - l / 2, f), n.moveTo(o.x - l / 2, o.y)
                                                    }
                                                    n.closePath(), n.fill(), n.setGlobalAlpha(1)
                                                })), !1 !== e.dataPointShape && (i.dataPointShape[o % i.dataPointShape.length], v(r, t.color, "circle", n))
                                            })), !1 !== e.dataLabel && 1 === a && t.forEach((function(t, o) {
                                                P(m(t.data, h, d, c, l, e, i, a), t, i, n)
                                            })), n.restore(), {
                                                xAxisPoints: c,
                                                calPoints: x,
                                                eachSpacing: l
                                            }
                                        }(o, e, i, n, t),
                                        l = c.xAxisPoints,
                                        h = c.calPoints,
                                        d = c.eachSpacing;
                                    a.chartData.xAxisPoints = l, a.chartData.calPoints = h, a.chartData.eachSpacing = d, A(r, e, i, n), M(e.series, e, i, n), _(o, e, i, n), T(e, i, n, t), k(0, n)
                                },
                                onAnimationFinish: function() {
                                    a.event.trigger("renderComplete")
                                }
                            });
                            break;
                        case "ring":
                        case "pie":
                            this.animationInstance = new C({
                                timing: "easeInOut",
                                duration: H,
                                onProcess: function(t) {
                                    a.chartData.pieData = function(t, e, i, n) {
                                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                                            o = e.extra.pie || {};
                                        t = x(t, a);
                                        var r = {
                                                x: e.width / 2,
                                                y: (e.height - i.legendHeight) / 2
                                            },
                                            s = Math.min(r.x - i.pieChartLinePadding - i.pieChartTextPadding - i._pieTextMaxLength_, r.y - i.pieChartLinePadding - i.pieChartTextPadding);
                                        if (e.dataLabel ? s -= 10 : s -= 2 * i.padding, (t = t.map((function(t) {
                                                return t._start_ += (o.offsetAngle || 0) * Math.PI / 180, t
                                            }))).forEach((function(t) {
                                                n.beginPath(), n.setLineWidth(2), n.setStrokeStyle("#ffffff"), n.setFillStyle(t.color), n.moveTo(r.x, r.y), n.arc(r.x, r.y, s, t._start_, t._start_ + 2 * t._proportion_ * Math.PI), n.closePath(), n.fill(), !0 !== e.disablePieStroke && n.stroke()
                                            })), "ring" === e.type) {
                                            var c = .6 * s;
                                            "number" == typeof e.extra.ringWidth && e.extra.ringWidth > 0 && (c = Math.max(0, s - e.extra.ringWidth)), n.beginPath(), n.setFillStyle(e.background || "#ffffff"), n.moveTo(r.x, r.y), n.arc(r.x, r.y, c, 0, 2 * Math.PI), n.closePath(), n.fill()
                                        }
                                        if (!1 !== e.dataLabel && 1 === a) {
                                            for (var h = !1, d = 0, u = t.length; d < u; d++)
                                                if (t[d].data > 0) {
                                                    h = !0;
                                                    break
                                                }
                                            h && S(t, 0, i, n, s, r)
                                        }
                                        return 1 === a && "ring" === e.type && function(t, e, i) {
                                            var n = t.title.fontSize || e.titleFontSize,
                                                a = t.subtitle.fontSize || e.subtitleFontSize,
                                                o = t.title.name || "",
                                                r = t.subtitle.name || "",
                                                s = t.title.color || e.titleColor,
                                                c = t.subtitle.color || e.subtitleColor,
                                                h = o ? n : 0,
                                                d = r ? a : 0;
                                            if (r) {
                                                var u = l(r, a),
                                                    f = (t.width - u) / 2 + (t.subtitle.offsetX || 0),
                                                    x = (t.height - e.legendHeight + a) / 2;
                                                o && (x -= (h + 5) / 2), i.beginPath(), i.setFontSize(a), i.setFillStyle(c), i.fillText(r, f, x), i.stroke(), i.closePath()
                                            }
                                            if (o) {
                                                var p = l(o, n),
                                                    g = (t.width - p) / 2 + (t.title.offsetX || 0),
                                                    m = (t.height - e.legendHeight + n) / 2;
                                                r && (m += (d + 5) / 2), i.beginPath(), i.setFontSize(n), i.setFillStyle(s), i.fillText(o, g, m), i.stroke(), i.closePath()
                                            }
                                        }(e, i, n), {
                                            center: r,
                                            radius: s,
                                            series: t
                                        }
                                    }(o, e, i, n, t), M(e.series, e, i, n), k(0, n)
                                },
                                onAnimationFinish: function() {
                                    a.event.trigger("renderComplete")
                                }
                            });
                            break;
                        case "radar":
                            this.animationInstance = new C({
                                timing: "easeInOut",
                                duration: H,
                                onProcess: function(t) {
                                    a.chartData.radarData = function(t, e, i, n) {
                                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                                            o = e.extra.radar || {},
                                            r = function(t) {
                                                for (var e = 2 * Math.PI / t, i = [], n = 0; n < t; n++) i.push(e * n);
                                                return i.map((function(t) {
                                                    return -1 * t + Math.PI / 2
                                                }))
                                            }(e.categories.length),
                                            s = {
                                                x: e.width / 2,
                                                y: (e.height - i.legendHeight) / 2
                                            },
                                            d = Math.min(s.x - (function(t) {
                                                var e = t.map((function(t) {
                                                    return l(t)
                                                }));
                                                return Math.max.apply(null, e)
                                            }(e.categories) + i.radarLabelTextMargin), s.y - i.radarLabelTextMargin);
                                        d -= i.padding, n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(o.gridColor || "#cccccc"), r.forEach((function(t) {
                                            var e = c(d * Math.cos(t), d * Math.sin(t), s);
                                            n.moveTo(s.x, s.y), n.lineTo(e.x, e.y)
                                        })), n.stroke(), n.closePath();
                                        for (var u = 1; u <= i.radarGridCount; u++) ! function(t) {
                                            var e = {};
                                            n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(o.gridColor || "#cccccc"), r.forEach((function(a, o) {
                                                var r = c(d / i.radarGridCount * t * Math.cos(a), d / i.radarGridCount * t * Math.sin(a), s);
                                                0 === o ? (e = r, n.moveTo(r.x, r.y)) : n.lineTo(r.x, r.y)
                                            })), n.lineTo(e.x, e.y), n.stroke(), n.closePath()
                                        }(u);
                                        return function(t, e, i, n, a) {
                                                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                                                    r = a.extra.radar || {};
                                                r.max = r.max || 0;
                                                var s = Math.max(r.max, Math.max.apply(null, h(n))),
                                                    l = [];
                                                return n.forEach((function(n) {
                                                    var a = {};
                                                    a.color = n.color, a.data = [], n.data.forEach((function(n, r) {
                                                        var l = {};
                                                        l.angle = t[r], l.proportion = n / s, l.position = c(i * l.proportion * o * Math.cos(l.angle), i * l.proportion * o * Math.sin(l.angle), e), a.data.push(l)
                                                    })), l.push(a)
                                                })), l
                                            }(r, s, d, t, e, a).forEach((function(t, a) {
                                                if (n.beginPath(), n.setFillStyle(t.color), n.setGlobalAlpha(.6), t.data.forEach((function(t, e) {
                                                        0 === e ? n.moveTo(t.position.x, t.position.y) : n.lineTo(t.position.x, t.position.y)
                                                    })), n.closePath(), n.fill(), n.setGlobalAlpha(1), !1 !== e.dataPointShape) {
                                                    var o = i.dataPointShape[a % i.dataPointShape.length];
                                                    v(t.data.map((function(t) {
                                                        return t.position
                                                    })), t.color, o, n)
                                                }
                                            })),
                                            function(t, e, i, n, a, o) {
                                                var r = n.extra.radar || {};
                                                e += a.radarLabelTextMargin, o.beginPath(), o.setFontSize(a.fontSize), o.setFillStyle(r.labelColor || "#666666"), t.forEach((function(t, r) {
                                                    var s = {
                                                            x: e * Math.cos(t),
                                                            y: e * Math.sin(t)
                                                        },
                                                        h = c(s.x, s.y, i),
                                                        d = h.x,
                                                        u = h.y;
                                                    I.approximatelyEqual(s.x, 0) ? d -= l(n.categories[r] || "") / 2 : s.x < 0 && (d -= l(n.categories[r] || "")), o.fillText(n.categories[r] || "", d, u + a.fontSize / 2)
                                                })), o.stroke(), o.closePath()
                                            }(r, d, s, e, i, n), {
                                                center: s,
                                                radius: d,
                                                angleList: r
                                            }
                                    }(o, e, i, n, t), M(e.series, e, i, n), k(0, n)
                                },
                                onAnimationFinish: function() {
                                    a.event.trigger("renderComplete")
                                }
                            })
                    }
                }

                function E() {
                    this.events = {}
                }
                var F = {
                        yAxisWidth: 15,
                        yAxisSplit: 5,
                        xAxisHeight: 15,
                        xAxisLineHeight: 15,
                        legendHeight: 15,
                        yAxisTitleWidth: 15,
                        padding: 12,
                        columePadding: 3,
                        fontSize: 10,
                        dataPointShape: ["diamond", "circle", "triangle", "rect"],
                        colors: ["rgba(109,209,255,1)", "#f7a35c", "#434348", "#90ed7d", "#f15c80", "#8085e9"],
                        pieChartLinePadding: 25,
                        pieChartTextPadding: 15,
                        xAxisTextPadding: 3,
                        titleColor: "#333333",
                        titleFontSize: 20,
                        subtitleColor: "#999999",
                        subtitleFontSize: 15,
                        toolTipPadding: 3,
                        toolTipBackground: "#000000",
                        toolTipOpacity: .7,
                        toolTipLineHeight: 14,
                        radarGridCount: 3,
                        radarLabelTextMargin: 15
                    },
                    I = {
                        toFixed: function(t, e) {
                            return e = e || 2, this.isFloat(t) && (t = t.toFixed(e)), t
                        },
                        isFloat: function(t) {
                            return t % 1 != 0
                        },
                        approximatelyEqual: function(t, e) {
                            return Math.abs(t - e) < 1e-10
                        },
                        isSameSign: function(t, e) {
                            return Math.abs(t) === t && Math.abs(e) === e || Math.abs(t) !== t && Math.abs(e) !== e
                        },
                        isSameXCoordinateArea: function(t, e) {
                            return this.isSameSign(t.x, e.x)
                        },
                        isCollision: function(t, e) {
                            return t.end = {}, t.end.x = t.start.x + t.width, t.end.y = t.start.y - t.height, e.end = {}, e.end.x = e.start.x + e.width, e.end.y = e.start.y - e.height, !(e.start.x > t.end.x || e.end.x < t.start.x || e.end.y > t.start.y || e.start.y < t.end.y)
                        }
                    },
                    D = {
                        easeIn: function(t) {
                            return Math.pow(t, 3)
                        },
                        easeOut: function(t) {
                            return Math.pow(t - 1, 3) + 1
                        },
                        easeInOut: function(t) {
                            return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
                        },
                        linear: function(t) {
                            return t
                        }
                    };
                C.prototype.stop = function() {
                    this.isStop = !0
                }, E.prototype.addEventListener = function(t, e) {
                    this.events[t] = this.events[t] || [], this.events[t].push(e)
                }, E.prototype.trigger = function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var n = e[0],
                        a = e.slice(1);
                    this.events[n] && this.events[n].forEach((function(t) {
                        try {
                            t.apply(null, a)
                        } catch (t) {
                            console.error(t)
                        }
                    }))
                };
                var H = function(t) {
                    t.title = t.title || {}, t.subtitle = t.subtitle || {}, t.yAxis = t.yAxis || {}, t.xAxis = t.xAxis || {}, t.extra = t.extra || {}, t.legend = !1 !== t.legend, t.animation = !1 !== t.animation;
                    var e = a({}, F);
                    e.yAxisTitleWidth = !0 !== t.yAxis.disabled && t.yAxis.title ? e.yAxisTitleWidth : 0, e.pieChartLinePadding = !1 === t.dataLabel ? 0 : e.pieChartLinePadding, e.pieChartTextPadding = !1 === t.dataLabel ? 0 : e.pieChartTextPadding, this.opts = t, this.config = e, this.context = wx.createCanvasContext(t.canvasId), this.chartData = {}, this.event = new E, this.scrollOption = {
                        currentOffset: 0,
                        startTouchX: 0,
                        distance: 0
                    }, L.call(this, t.type, t, e, this.context)
                };
                H.prototype.updateData = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.opts.series = t.series || this.opts.series, this.opts.categories = t.categories || this.opts.categories, this.opts.title = a({}, this.opts.title, t.title || {}), this.opts.subtitle = a({}, this.opts.subtitle, t.subtitle || {}), L.call(this, this.opts.type, this.opts, this.config, this.context)
                }, H.prototype.stopAnimation = function() {
                    this.animationInstance && this.animationInstance.stop()
                }, H.prototype.addEventListener = function(t, e) {
                    this.event.addEventListener(t, e)
                }, H.prototype.getCurrentDataIndex = function(t) {
                    var e = t.touches && t.touches.length ? t.touches : t.changedTouches;
                    if (e && e.length) {
                        var i = e[0],
                            n = i.x,
                            a = i.y;
                        return "pie" === this.opts.type || "ring" === this.opts.type ? function(t, e) {
                            var i = -1;
                            if (d(t, e.center, e.radius)) {
                                var n = Math.atan2(e.center.y - t.y, t.x - e.center.x);
                                n = -n;
                                for (var a = 0, o = e.series.length; a < o; a++) {
                                    var s = e.series[a];
                                    if (r(n, s._start_, s._start_ + 2 * s._proportion_ * Math.PI)) {
                                        i = a;
                                        break
                                    }
                                }
                            }
                            return i
                        }({
                            x: n,
                            y: a
                        }, this.chartData.pieData) : "radar" === this.opts.type ? function(t, e, i) {
                            var n = 2 * Math.PI / i,
                                a = -1;
                            if (d(t, e.center, e.radius)) {
                                var o = function(t) {
                                        return t < 0 && (t += 2 * Math.PI), t > 2 * Math.PI && (t -= 2 * Math.PI), t
                                    },
                                    r = Math.atan2(e.center.y - t.y, t.x - e.center.x);
                                (r *= -1) < 0 && (r += 2 * Math.PI), e.angleList.map((function(t) {
                                    return o(-1 * t)
                                })).forEach((function(t, e) {
                                    var i = o(t - n / 2),
                                        s = o(t + n / 2);
                                    s < i && (s += 2 * Math.PI), (r >= i && r <= s || r + 2 * Math.PI >= i && r + 2 * Math.PI <= s) && (a = e)
                                }))
                            }
                            return a
                        }({
                            x: n,
                            y: a
                        }, this.chartData.radarData, this.opts.categories.length) : function(t, e, i, n) {
                            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                                o = -1;
                            return function(t, e, i) {
                                return t.x < e.width - i.padding && t.x > i.padding + i.yAxisWidth + i.yAxisTitleWidth && t.y > i.padding && t.y < e.height - i.legendHeight - i.xAxisHeight - i.padding
                            }(t, i, n) && e.forEach((function(e, i) {
                                t.x + a > e && (o = i)
                            })), o
                        }({
                            x: n,
                            y: a
                        }, this.chartData.xAxisPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset))
                    }
                    return -1
                }, H.prototype.showToolTip = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("line" === this.opts.type || "area" === this.opts.type) {
                        var i = this.getCurrentDataIndex(t),
                            n = this.scrollOption.currentOffset,
                            o = a({}, this.opts, {
                                _scrollDistance_: n,
                                animation: !1
                            });
                        if (i > -1) {
                            var r = function(t, e) {
                                var i = [];
                                return t.forEach((function(t) {
                                    if (null !== t.data[e] && void 0 !== t.data[e]) {
                                        var n = {};
                                        n.color = t.color, n.name = t.name, n.data = t.format ? t.format(t.data[e]) : t.data[e], i.push(n)
                                    }
                                })), i
                            }(this.opts.series, i);
                            if (0 !== r.length) {
                                var s = function(t, e, i, n) {
                                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                                            o = t.map((function(t) {
                                                return {
                                                    text: a.format ? a.format(t, n[i]) : t.name + ": " + t.data,
                                                    color: t.color
                                                }
                                            })),
                                            r = [],
                                            s = {
                                                x: 0,
                                                y: 0
                                            };
                                        return e.forEach((function(t) {
                                            void 0 !== t[i] && null !== t[i] && r.push(t[i])
                                        })), r.forEach((function(t) {
                                            s.x = Math.round(t.x), s.y += t.y
                                        })), s.y /= r.length, {
                                            textList: o,
                                            offset: s
                                        }
                                    }(r, this.chartData.calPoints, i, this.opts.categories, e),
                                    c = s.textList,
                                    l = s.offset;
                                o.tooltip = {
                                    textList: c,
                                    offset: l,
                                    option: e
                                }
                            }
                        }
                        L.call(this, o.type, o, this.config, this.context)
                    }
                }, H.prototype.scrollStart = function(t) {
                    t.touches[0] && !0 === this.opts.enableScroll && (this.scrollOption.startTouchX = t.touches[0].x)
                }, H.prototype.scroll = function(t) {
                    if (t.touches[0] && !0 === this.opts.enableScroll) {
                        var e = t.touches[0].x - this.scrollOption.startTouchX,
                            i = this.scrollOption.currentOffset,
                            n = function(t, e, i, n) {
                                var a = n.width - i.padding - e.xAxisPoints[0],
                                    o = e.eachSpacing * n.categories.length,
                                    r = t;
                                return t >= 0 ? r = 0 : Math.abs(t) >= o - a && (r = a - o), r
                            }(i + e, this.chartData, this.config, this.opts);
                        this.scrollOption.distance = e = n - i;
                        var o = a({}, this.opts, {
                            _scrollDistance_: i + e,
                            animation: !1
                        });
                        L.call(this, o.type, o, this.config, this.context)
                    }
                }, H.prototype.scrollEnd = function(t) {
                    if (!0 === this.opts.enableScroll) {
                        var e = this.scrollOption,
                            i = e.currentOffset,
                            n = e.distance;
                        this.scrollOption.currentOffset = i + n, this.scrollOption.distance = 0
                    }
                }, t.exports = H
            },
            "./src/packages/campus-card/pages/card-index/index.tsx": function(t, e, i) {
                var n = i("webpack/container/remote/@tarojs/runtime"),
                    a = i("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/campus-card/pages/card-index/index.tsx");
                Page((0, n.createPageConfig)(a.default, "packages/campus-card/pages/card-index/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "一卡通",
                    enablePullDownRefresh: !0
                } || {})), a.default
            }
        },
        function(t) {
            t.O(0, ["packages/campus-card/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/campus-card/pages/card-index/index.tsx", t(t.s = "./src/packages/campus-card/pages/card-index/index.tsx")
            })), t.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/campus-card/pages/card-index/index.js'
});
require("packages/campus-card/pages/card-index/index.js");