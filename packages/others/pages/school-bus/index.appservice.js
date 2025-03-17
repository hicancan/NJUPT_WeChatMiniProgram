$gwx3_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_8 || [];

        function gz$gwx3_XC_8_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_8 = true;
        var x = ['./packages/others/pages/school-bus/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_8_1()
            var oNB = e_[x[0]].i
            _ai(oNB, x[1], e_, x[0], 1, 1)
            var cOB = _v()
            _(r, cOB)
            var oPB = _oz(z, 1, e, s, gg)
            var lQB = _gd(x[0], oPB, e_, d_)
            if (lQB) {
                var aRB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                cOB.wxXCkey = 3
                lQB(aRB, aRB, cOB, gg)
                gg.f = cur_globalf
            } else _w(oPB, x[0], 2, 14)
            oNB.pop()
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
                g = "$gwx3_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/school-bus/index.wxml'] = [$gwx3_XC_8, './packages/others/pages/school-bus/index.wxml'];
else __wxAppCode__['packages/others/pages/school-bus/index.wxml'] = $gwx3_XC_8('./packages/others/pages/school-bus/index.wxml');;
__wxRoute = "packages/others/pages/school-bus/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/school-bus/index.js";
define("packages/others/pages/school-bus/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/ed38b011cfb987b1850ffd548c33fde1.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/school-bus/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/school-bus/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return w
                    }
                });
                var r = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    o = a("webpack/container/remote/react"),
                    t = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = a("./src/components/PageLayout/index.tsx"),
                    c = a("./src/packages/others/assets/index.ts"),
                    l = a("./src/common/hook.ts"),
                    i = a("./src/components/Wigets/index.tsx"),
                    d = a("./src/components/HalfSubPage/index.tsx"),
                    u = a("./src/packages/others/module/schoolBus/index.ts"),
                    m = a("./src/components/TabsFolder/index.tsx"),
                    p = a("./src/packages/others/pages/school-bus/BusCard/index.tsx"),
                    h = a("./src/packages/others/pages/school-bus/BusOutlineCard/index.tsx"),
                    b = a("webpack/container/remote/react/jsx-runtime"),
                    x = [{
                        backgroundColor: "#82FBB3",
                        arrowImage: c.SCHOOL_BUS_ASSETS.Card_0_Arrow,
                        backgroundImage: c.SCHOOL_BUS_ASSETS.Card_0_Background
                    }, {
                        backgroundColor: "#64E0FD",
                        arrowImage: c.SCHOOL_BUS_ASSETS.Card_1_Arrow,
                        backgroundImage: c.SCHOOL_BUS_ASSETS.Card_1_Background
                    }, {
                        backgroundColor: "#FF9D6C",
                        arrowImage: c.SCHOOL_BUS_ASSETS.Card_2_Arrow,
                        backgroundImage: c.SCHOOL_BUS_ASSETS.Card_2_Background
                    }];

                function g() {
                    var e = (0, u.useSchoolBus)(),
                        s = (0, l.useSafeArea)(),
                        a = (0, o.useState)(!1),
                        n = (0, r.default)(a, 2),
                        c = n[0],
                        g = n[1];
                    return (0, b.jsxs)(t.View, {
                        className: "school-bus",
                        children: [(0, b.jsx)(d.HalfSubPage, {
                            title: "温馨提示",
                            show: c,
                            setHide: function() {
                                return g(!1)
                            },
                            children: (0, b.jsxs)(t.View, {
                                className: "tips",
                                children: [(0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "1、乘车人员凭支付宝（微信）扫码乘车；"
                                }), (0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "2、仙林校区内停靠站点："
                                }), (0, b.jsx)(t.View, {
                                    className: "text indent",
                                    children: "①由市区进入仙林校区的站点依次为：教学1号楼、行政楼、教学2号楼、教学5号楼、西门配电房、二食堂、青春剧场转盘、学科楼转盘、青教公寓；"
                                }), (0, b.jsx)(t.View, {
                                    className: "text indent",
                                    children: "②仙林校区返回市区的交通车均由学科楼转盘始发，站点依次为：青春剧场转盘、二食堂、西门配电房、教学5号楼、教学2号楼、行政楼、教学1号楼。"
                                }), (0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "3、法定节假日停运，寒暑假根据情况另行安排；"
                                }), (0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "4、后勤管理处根据交通车运行情况酌情进行调整；"
                                }), (0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "5、运输服务中心联系电话：调度13913976262 主任18951650360"
                                })]
                            })
                        }), (0, b.jsxs)(m.TabsFolderView, {
                            defaultActiveTab: 0,
                            children: [(0, b.jsx)(m.TabList, {
                                style: {
                                    marginLeft: "68rpx",
                                    marginRight: "68rpx"
                                },
                                children: e.length ? e.map((function(e, s) {
                                    var a = x[s % 3].backgroundColor;
                                    return (0, b.jsx)(m.Tab, {
                                        style: {
                                            backgroundColor: "".concat(a)
                                        },
                                        children: e.tag
                                    }, e.tag)
                                })) : (0, b.jsx)(m.Tab, {
                                    style: {
                                        backgroundColor: "transparent"
                                    }
                                })
                            }), (0, b.jsx)(m.TabPanels, {
                                height: "calc(100vh - ".concat(s.safeAreaHeight, "px - 105rpx)"),
                                children: e.map((function(e, a) {
                                    var r = Math.floor(3 * Math.random()),
                                        o = ["#FF8181", "#FFC24E", "#4ABEFF"],
                                        n = e.startAddress,
                                        c = e.endAddress,
                                        l = e.updateTime,
                                        d = x[a % 3],
                                        u = d.arrowImage,
                                        w = d.backgroundImage;
                                    return (0, b.jsxs)(m.TabPanel, {
                                        children: [(0, b.jsx)(h.default, {
                                            onPopup: function() {
                                                return g(!0)
                                            },
                                            item: {
                                                startAddress: n,
                                                endAddress: c,
                                                updateTime: l,
                                                arrowImage: u,
                                                backgroundImage: w
                                            }
                                        }), (0, b.jsx)(t.View, {
                                            style: {
                                                height: "calc(100vh - ".concat(s.safeAreaHeight, "px - 425rpx)"),
                                                overflowY: "scroll"
                                            },
                                            children: (0, b.jsx)(i.LayoutLightweight, {
                                                children: e.buses.map((function(e, s) {
                                                    return r = (r + Math.floor(2 * Math.random() + 1)) % 3, (0, b.jsxs)(t.View, {
                                                        children: [(0, b.jsx)(p.default, {
                                                            item: e,
                                                            color: o[r]
                                                        }), (0, b.jsx)(t.View, {
                                                            className: "divider"
                                                        })]
                                                    }, e.carId || s)
                                                }))
                                            })
                                        })]
                                    }, e.tag)
                                }))
                            })]
                        })]
                    })
                }

                function w() {
                    var e = (0, l.useModule)(u.SchoolBusModule),
                        s = e.success,
                        a = e.loading;
                    return (0, b.jsx)(n.Layout, {
                        lightweight: !0,
                        titleText: "校车",
                        needAuth: !1,
                        loading: a,
                        success: s,
                        children: (0, b.jsx)(g, {})
                    })
                }
            },
            "./src/packages/others/module/schoolBus/hooks.ts": function(e, s, a) {
                a.d(s, {
                    useSchoolBus: function() {
                        return o
                    }
                });
                var r = a("webpack/container/remote/react-redux"),
                    o = function() {
                        return (0, r.useSelector)((function(e) {
                            var s;
                            return null == e || null === (s = e.SCHOOL_BUS) || void 0 === s ? void 0 : s.busInfo
                        }))
                    }
            },
            "./src/packages/others/module/schoolBus/index.ts": function(e, s, a) {
                a.d(s, {
                    SchoolBusModule: function() {
                        return g
                    },
                    useSchoolBus: function() {
                        return x.useSchoolBus
                    }
                });
                var r, o = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    n = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    c = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    l = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    i = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    d = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    u = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = a("./src/packages/others/api/index.ts"),
                    p = a("./src/constants/module.ts"),
                    h = a("./src/common/mini4/Mini4BaseModule.ts"),
                    b = a("./src/packages/others/module/schoolBus/store.ts"),
                    x = a("./src/packages/others/module/schoolBus/hooks.ts"),
                    g = new((0, h.injectReducers)(b.schoolBusSlice)(r = function(e, s) {
                        (0, i.default)(r, e);
                        var a = (0, d.default)(r);

                        function r() {
                            var e;
                            (0, n.default)(this, r);
                            for (var s = arguments.length, o = new Array(s), t = 0; t < s; t++) o[t] = arguments[t];
                            return e = a.call.apply(a, [this].concat(o)), (0, u.default)((0, l.default)(e), "id", p.ModuleID.schoolBus), e
                        }
                        return (0, c.default)(r, [{
                            key: "auto",
                            value: function() {
                                return (s = s || (0, t.default)((0, o.default)().mark((function e() {
                                    return (0, o.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.getSchoolBus();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }, {
                            key: "getSchoolBus",
                            value: function() {
                                var e = this;
                                return (0, m.getSchoolBus)(this.requestController).then((function(e) {
                                    return e.data
                                })).then((function(s) {
                                    e.store.dispatch((0, b.setSchoolBus)(s))
                                }))
                            }
                        }]), r
                    }(h.Mini4BaseModule)) || r)
            },
            "./src/packages/others/module/schoolBus/store.ts": function(e, s, a) {
                a.d(s, {
                    schoolBusSlice: function() {
                        return r
                    },
                    setSchoolBus: function() {
                        return o
                    }
                });
                var r = (0, a("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "SCHOOL_BUS",
                        initialState: {
                            busInfo: []
                        },
                        reducers: {
                            setSchoolBus: function(e, s) {
                                e.busInfo = s.payload
                            }
                        }
                    }),
                    o = r.actions.setSchoolBus
            },
            "./src/packages/others/pages/school-bus/BusCard/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return l
                    }
                });
                var r = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    o = a("webpack/container/remote/react"),
                    t = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = a("webpack/container/remote/react/jsx-runtime");

                function c(e) {
                    var s = e.item,
                        a = s.time,
                        r = s.address;
                    return (0, n.jsxs)(t.View, {
                        className: "site via",
                        children: [a ? (0, n.jsxs)(t.View, {
                            className: "tips via",
                            children: ["预计到达 ", a]
                        }) : null, (0, n.jsxs)(t.View, {
                            className: "site-text",
                            children: [(0, n.jsx)(t.View, {
                                className: "circle-container",
                                children: (0, n.jsx)(t.View, {
                                    className: "round",
                                    style: {
                                        backgroundColor: e.color
                                    },
                                    children: (0, n.jsx)(t.View, {
                                        className: "vertical-line via",
                                        style: {
                                            backgroundColor: e.color
                                        }
                                    })
                                })
                            }), (0, n.jsx)(t.View, {
                                className: "text via",
                                children: r
                            })]
                        })]
                    })
                }

                function l(e) {
                    var s = (0, o.useState)(!1),
                        a = (0, r.default)(s, 2),
                        l = a[0],
                        i = a[1],
                        d = e.item,
                        u = d.days,
                        m = d.stops,
                        p = d.departure,
                        h = d.destination,
                        b = d.departureTime;
                    return (0, n.jsxs)(t.View, {
                        className: "bus-container",
                        children: [(0, n.jsx)(t.View, {
                            className: "bus-during",
                            children: u
                        }), (0, n.jsxs)(t.View, {
                            className: "bus-sites-wrapper",
                            children: [(0, n.jsxs)(t.View, {
                                className: "sites-container",
                                children: [(0, n.jsxs)(t.View, {
                                    className: "site start",
                                    children: [(0, n.jsxs)(t.View, {
                                        className: "tips",
                                        children: ["始发站 ", b]
                                    }), (0, n.jsxs)(t.View, {
                                        className: "site-text",
                                        children: [(0, n.jsx)(t.View, {
                                            className: "circle-container",
                                            children: (0, n.jsx)(t.View, {
                                                className: "ring",
                                                style: {
                                                    borderColor: e.color
                                                },
                                                children: l ? (0, n.jsx)(t.View, {
                                                    className: "vertical-line start",
                                                    style: {
                                                        backgroundColor: e.color
                                                    }
                                                }) : null
                                            })
                                        }), (0, n.jsx)(t.View, {
                                            className: "text",
                                            children: p
                                        })]
                                    })]
                                }), (0, n.jsx)(t.View, {
                                    className: "site-via-container",
                                    style: {
                                        height: "".concat(l ? 110 * m.length : 0, "rpx")
                                    },
                                    children: m.map((function(s, a) {
                                        return (0, n.jsx)(c, {
                                            item: s,
                                            color: e.color
                                        }, a)
                                    }))
                                }), (0, n.jsxs)(t.View, {
                                    className: "site end",
                                    children: [(0, n.jsx)(t.View, {
                                        className: "tips",
                                        children: "终点站"
                                    }), (0, n.jsxs)(t.View, {
                                        className: "site-text",
                                        children: [(0, n.jsx)(t.View, {
                                            className: "circle-container",
                                            children: (0, n.jsx)(t.View, {
                                                className: "ring",
                                                style: {
                                                    borderColor: e.color
                                                },
                                                children: l ? (0, n.jsx)(t.View, {
                                                    className: "vertical-line end",
                                                    style: {
                                                        backgroundColor: e.color
                                                    }
                                                }) : null
                                            })
                                        }), (0, n.jsx)(t.View, {
                                            className: "text",
                                            children: h
                                        })]
                                    })]
                                })]
                            }), (0, n.jsxs)(t.View, {
                                className: "arrow-container",
                                onClick: function() {
                                    return i((function(e) {
                                        return !e
                                    }))
                                },
                                children: [(0, n.jsx)(t.View, {
                                    className: "text",
                                    children: "途经站"
                                }), (0, n.jsx)(t.View, {
                                    className: l ? "arrow-down" : "arrow-down active"
                                })]
                            })]
                        })]
                    })
                }
            },
            "./src/packages/others/pages/school-bus/BusOutlineCard/index.tsx": function(e, s, a) {
                var r = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = a("./src/constants/assets.ts"),
                    t = a("webpack/container/remote/react/jsx-runtime");
                s.default = function(e) {
                    var s = e.item,
                        a = s.arrowImage,
                        n = void 0 === a ? "" : a,
                        c = s.updateTime,
                        l = void 0 === c ? "" : c,
                        i = s.endAddress,
                        d = void 0 === i ? "" : i,
                        u = s.startAddress,
                        m = void 0 === u ? "" : u,
                        p = s.backgroundImage,
                        h = void 0 === p ? "" : p,
                        b = e.onPopup;
                    return (0, t.jsx)(r.View, {
                        className: "card-wrapper",
                        children: (0, t.jsxs)(r.View, {
                            className: "card-inner",
                            children: [(0, t.jsx)(r.Image, {
                                className: "bg",
                                src: h
                            }), (0, t.jsx)(r.Image, {
                                onClick: b,
                                className: "question-mark",
                                src: o.COMMON_ASSETS.Question
                            }), (0, t.jsxs)(r.View, {
                                className: "bus-route",
                                children: [(0, t.jsx)(r.View, {
                                    className: "destination start",
                                    children: m
                                }), (0, t.jsx)(r.Image, {
                                    className: "arrow",
                                    src: n,
                                    mode: "aspectFit"
                                }), (0, t.jsx)(r.View, {
                                    className: "destination end",
                                    children: d
                                })]
                            }), (0, t.jsx)(r.View, {
                                className: "tips",
                                children: l ? "更新于：".concat(l) : ""
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/pages/school-bus/index.tsx": function(e, s, a) {
                var r = a("webpack/container/remote/@tarojs/runtime"),
                    o = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/school-bus/index.tsx");
                Page((0, r.createPageConfig)(o.default, "packages/others/pages/school-bus/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), o.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "sub-common/ed38b011cfb987b1850ffd548c33fde1", "sub-common/707d16750112c4bb946873f88718cbfc", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/school-bus/index.tsx", e(e.s = "./src/packages/others/pages/school-bus/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/school-bus/index.js'
});
require("packages/others/pages/school-bus/index.js");