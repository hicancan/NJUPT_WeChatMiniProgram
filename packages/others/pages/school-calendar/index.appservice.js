$gwx3_XC_9 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_9 || [];

        function gz$gwx3_XC_9_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_9 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_9 = true;
        var x = ['./packages/others/pages/school-calendar/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_9_1()
            var eTB = e_[x[0]].i
            _ai(eTB, x[1], e_, x[0], 1, 1)
            var bUB = _v()
            _(r, bUB)
            var oVB = _oz(z, 1, e, s, gg)
            var xWB = _gd(x[0], oVB, e_, d_)
            if (xWB) {
                var oXB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                bUB.wxXCkey = 3
                xWB(oXB, oXB, bUB, gg)
                gg.f = cur_globalf
            } else _w(oVB, x[0], 2, 14)
            eTB.pop()
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
                g = "$gwx3_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_9();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/school-calendar/index.wxml'] = [$gwx3_XC_9, './packages/others/pages/school-calendar/index.wxml'];
else __wxAppCode__['packages/others/pages/school-calendar/index.wxml'] = $gwx3_XC_9('./packages/others/pages/school-calendar/index.wxml');;
__wxRoute = "packages/others/pages/school-calendar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/school-calendar/index.js";
define("packages/others/pages/school-calendar/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/school-calendar/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/school-calendar/index.tsx": function(e, a, s) {
                s.d(a, {
                    default: function() {
                        return m
                    }
                });
                var r = s("webpack/container/remote/@tarojs/taro"),
                    n = s.n(r),
                    o = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    t = s("./src/common/hook.ts"),
                    l = s("./src/components/PageLayout/index.tsx"),
                    c = s("./src/components/PageScroll/index.tsx"),
                    d = s("./src/packages/others/module/schoolCalendar/index.ts"),
                    u = s("webpack/container/remote/react/jsx-runtime"),
                    i = function() {
                        var e = (0, d.useCalendarData)();
                        return (0, u.jsx)(c.PageScroll, {
                            className: "school-calendar",
                            children: e.map((function(a, s) {
                                return (0, u.jsx)(o.Image, {
                                    src: a,
                                    mode: "widthFix",
                                    className: "calendar-img",
                                    onClick: function() {
                                        return n().previewImage({
                                            urls: e
                                        })
                                    }
                                }, s)
                            }))
                        })
                    };

                function m() {
                    var e = (0, t.useModule)(d.CalendarModule),
                        a = e.loading,
                        s = e.success;
                    return (0, u.jsx)(l.Layout, {
                        titleText: "校历",
                        loading: a,
                        success: s,
                        children: (0, u.jsx)(i, {})
                    })
                }
            },
            "./src/packages/others/module/schoolCalendar/hooks.ts": function(e, a, s) {
                s.d(a, {
                    useCalendarData: function() {
                        return n
                    }
                });
                var r = s("webpack/container/remote/react-redux"),
                    n = function() {
                        return (0, r.useSelector)((function(e) {
                            return null == e ? void 0 : e.calendarData.imageUrl
                        }))
                    }
            },
            "./src/packages/others/module/schoolCalendar/index.ts": function(e, a, s) {
                s.d(a, {
                    CalendarModule: function() {
                        return _
                    },
                    useCalendarData: function() {
                        return f.useCalendarData
                    }
                });
                var r, n = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    o = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    t = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    l = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    c = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    d = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    u = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    i = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = s("./src/constants/module.ts"),
                    p = s("./src/packages/others/api/index.ts"),
                    h = s("./src/common/mini4/Mini4BaseModule.ts"),
                    b = s("./src/packages/others/module/schoolCalendar/store.ts"),
                    f = s("./src/packages/others/module/schoolCalendar/hooks.ts"),
                    _ = new((0, h.injectReducers)(b.calendarSlice)(r = function(e, a) {
                        (0, d.default)(r, e);
                        var s = (0, u.default)(r);

                        function r() {
                            var e;
                            (0, t.default)(this, r);
                            for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
                            return e = s.call.apply(s, [this].concat(n)), (0, i.default)((0, c.default)(e), "id", m.ModuleID.calendar), (0, i.default)((0, c.default)(e), "slice", b.calendarSlice), e
                        }
                        return (0, l.default)(r, [{
                            key: "auto",
                            value: function() {
                                return (a = a || (0, o.default)((0, n.default)().mark((function e() {
                                    var a = this;
                                    return (0, n.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, p.getSchoolCalendar)(this.requestController).then((function(e) {
                                                    var s = e.data.imageUrl,
                                                        r = void 0 === s ? [] : s;
                                                    a.store.dispatch((0, b.setCalendarData)(r))
                                                }));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }]), r
                    }(h.Mini4BaseModule)) || r)
            },
            "./src/packages/others/module/schoolCalendar/store.ts": function(e, a, s) {
                s.d(a, {
                    calendarSlice: function() {
                        return r
                    },
                    setCalendarData: function() {
                        return n
                    }
                });
                var r = (0, s("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "calendarData",
                        initialState: {
                            imageUrl: []
                        },
                        reducers: {
                            setCalendarData: function(e, a) {
                                e.imageUrl = a.payload
                            }
                        }
                    }),
                    n = r.actions.setCalendarData
            },
            "./src/packages/others/pages/school-calendar/index.tsx": function(e, a, s) {
                var r = s("webpack/container/remote/@tarojs/runtime"),
                    n = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/school-calendar/index.tsx");
                Page((0, r.createPageConfig)(n.default, "packages/others/pages/school-calendar/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), n.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/school-calendar/index.tsx", e(e.s = "./src/packages/others/pages/school-calendar/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/school-calendar/index.js'
});
require("packages/others/pages/school-calendar/index.js");