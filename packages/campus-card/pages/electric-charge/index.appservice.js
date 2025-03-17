$gwx0_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_4 || [];

        function gz$gwx0_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_4 = true;
        var x = ['./packages/campus-card/pages/electric-charge/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_4_1()
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
                g = "$gwx0_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/campus-card/pages/electric-charge/index.wxml'] = [$gwx0_XC_4, './packages/campus-card/pages/electric-charge/index.wxml'];
else __wxAppCode__['packages/campus-card/pages/electric-charge/index.wxml'] = $gwx0_XC_4('./packages/campus-card/pages/electric-charge/index.wxml');;
__wxRoute = "packages/campus-card/pages/electric-charge/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/campus-card/pages/electric-charge/index.js";
define("packages/campus-card/pages/electric-charge/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/campus-card/pages/electric-charge/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/campus-card/pages/electric-charge/index.tsx": function(e, t, r) {
                r.d(t, {
                    default: function() {
                        return h
                    }
                });
                var a = r("webpack/container/remote/@tarojs/taro"),
                    n = r.n(a),
                    c = r("./src/common/hook.ts"),
                    o = r("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    s = r("./src/components/PageLayout/index.tsx"),
                    i = r("./src/components/DataEmpty/index.tsx"),
                    u = r("./src/packages/campus-card/module/electric/index.ts"),
                    l = r("./src/packages/campus-card/module/electric/hook.ts"),
                    d = r("./src/packages/campus-card/assets/index.ts"),
                    m = r("./src/packages/campus-card/pages/electric-charge/components/AddRoomCard/index.tsx"),
                    p = r("webpack/container/remote/react/jsx-runtime"),
                    f = function() {
                        var e = (0, l.useElectricityData)(),
                            t = e.MyRoomsRemain,
                            r = e.AreaInfoList;
                        return (0, p.jsxs)(o.View, {
                            className: "container",
                            children: [(0, p.jsxs)(o.View, {
                                className: "header-tip",
                                children: [(0, p.jsx)(o.Image, {
                                    className: "image-container",
                                    src: d.CARD_COMMON_ASSETS.Notice
                                }), (0, p.jsx)(o.View, {
                                    className: "tip-font",
                                    children: "充值请到南邮财务处公众号，数据存在延迟，请耐心等待哦~"
                                })]
                            }), t.length ? (0, p.jsx)(o.View, {
                                className: "rooms-container",
                                children: t.map((function(e, t) {
                                    return (0, p.jsxs)(o.View, {
                                        className: "head-bg",
                                        style: {
                                            marginTop: 0 == t ? "" : "26rpx"
                                        },
                                        children: [(0, p.jsx)(o.Image, {
                                            className: "head-bg-img",
                                            src: d.ELECTRICITY_ASSETS.EleInfoBg
                                        }), (0, p.jsx)(o.View, {
                                            className: "head-bg-container",
                                            children: (0, p.jsxs)(o.View, {
                                                className: "remain-electricity",
                                                children: [(0, p.jsxs)(o.View, {
                                                    className: "title",
                                                    children: [e.areaName, e.architectureName, e.roomName, " 剩余电量（", e.remainName, "）"]
                                                }), (0, p.jsx)(o.View, {
                                                    className: "remains",
                                                    children: e.remainPower
                                                }), (0, p.jsxs)(o.View, {
                                                    className: "log-time",
                                                    children: ["截止时间:", e.readTime]
                                                }), (0, p.jsx)(o.View, {
                                                    className: "options",
                                                    children: (0, p.jsx)(o.Text, {
                                                        className: "unbind",
                                                        onClick: function() {
                                                            ! function(e, t) {
                                                                n().showModal({
                                                                    title: "提示",
                                                                    content: "确定解绑".concat(t, "吗？"),
                                                                    success: function(t) {
                                                                        t.confirm && (n().showLoading({
                                                                            title: "解绑中"
                                                                        }), u.ElectricityModule.deleteRoom(e).then((function() {
                                                                            n().showToast({
                                                                                title: "解绑成功",
                                                                                icon: "success"
                                                                            }), u.ElectricityModule.auto()
                                                                        })).catch((function(e) {
                                                                            n().showToast({
                                                                                title: e.errMsg,
                                                                                icon: "error"
                                                                            })
                                                                        })).finally((function() {
                                                                            n().hideLoading()
                                                                        })))
                                                                    }
                                                                })
                                                            }(e.id, e.architectureName + e.roomName)
                                                        },
                                                        children: "解绑"
                                                    })
                                                })]
                                            })
                                        })]
                                    }, t)
                                }))
                            }) : (0, p.jsxs)(p.Fragment, {
                                children: [(0, p.jsx)(m.AddRoomCard, {
                                    areaInfoList: r
                                }), (0, p.jsx)(i.DataEmpty, {})]
                            }), 1 === t.length && (0, p.jsx)(m.AddRoomCard, {
                                areaInfoList: r
                            })]
                        })
                    };

                function h() {
                    var e = (0, c.useModule)(u.ElectricityModule),
                        t = e.success,
                        r = e.loading;
                    return (0, p.jsx)(s.Layout, {
                        titleText: "电费查询",
                        animation: !0,
                        loading: r,
                        success: t,
                        children: (0, p.jsx)(f, {})
                    })
                }
            },
            "./src/packages/campus-card/api/ele.ts": function(e, t, r) {
                r.d(t, {
                    bindRoom: function() {
                        return a
                    },
                    deleteRoom: function() {
                        return n
                    },
                    getAreaInfo: function() {
                        return c
                    },
                    getBuildingInfo: function() {
                        return o
                    },
                    getMeterIdByRoomId: function() {
                        return i
                    },
                    getMyRoomInfo: function() {
                        return u
                    },
                    getRoomInfo: function() {
                        return s
                    }
                });
                var a = function(e, t, r, a, n, c, o, s) {
                        return s.request({
                            url: "/e-card/elec/bind",
                            method: "POST",
                            data: {
                                meterId: o,
                                areaId: e,
                                areaName: t,
                                architectureId: r,
                                architectureName: a,
                                roomId: n,
                                roomName: c
                            }
                        }, {
                            base: "main"
                        })
                    },
                    n = function(e, t) {
                        return t.request({
                            url: "/e-card/elec/delBind",
                            method: "POST",
                            data: {
                                dormId: e
                            },
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }, {
                            base: "main"
                        })
                    },
                    c = function(e) {
                        return e.request({
                            url: "/e-card/elec/area",
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    },
                    o = function(e, t) {
                        return t.request({
                            method: "GET",
                            url: "/e-card/elec/architecture",
                            data: {
                                areaId: e
                            }
                        }, {
                            base: "main"
                        })
                    },
                    s = function(e, t, r) {
                        return r.request({
                            method: "GET",
                            url: "/e-card/elec/room",
                            data: {
                                architectureId: e,
                                floor: t
                            }
                        }, {
                            base: "main"
                        })
                    },
                    i = function(e, t) {
                        return t.request({
                            method: "GET",
                            url: "/e-card/elec/meter",
                            data: {
                                roomId: e
                            }
                        }, {
                            base: "main"
                        })
                    },
                    u = function(e) {
                        return e.request({
                            method: "GET",
                            url: "/e-card/elec/dormInfo"
                        }, {
                            base: "main"
                        })
                    }
            },
            "./src/packages/campus-card/module/electric/hook.ts": function(e, t, r) {
                r.d(t, {
                    useElectricityData: function() {
                        return n
                    }
                });
                var a = r("webpack/container/remote/react-redux"),
                    n = function() {
                        return (0, a.useSelector)((function(e) {
                            return e.Electricity
                        }))
                    }
            },
            "./src/packages/campus-card/module/electric/index.ts": function(e, t, r) {
                r.d(t, {
                    ElectricityModule: function() {
                        return b
                    }
                });
                var a, n = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    c = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    o = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    s = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    i = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    u = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    l = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    d = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    m = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    p = r("./src/constants/module.ts"),
                    f = r("./src/common/mini4/Mini4BaseModule.ts"),
                    h = r("./src/packages/campus-card/api/ele.ts"),
                    g = r("./src/packages/campus-card/module/electric/store.ts"),
                    b = new(r("./src/packages/campus-card/module/electric/hook.ts"), (0, f.injectReducers)(g.electricitySlice)(a = function(e, t) {
                        (0, l.default)(a, e);
                        var r = (0, d.default)(a);

                        function a() {
                            var e, t, n, i, l, d;
                            (0, s.default)(this, a);
                            for (var f = arguments.length, g = new Array(f), b = 0; b < f; b++) g[b] = arguments[b];
                            return d = r.call.apply(r, [this].concat(g)), (0, m.default)((0, u.default)(d), "id", p.ModuleID.electricity), (0, m.default)((0, u.default)(d), "getBuildingInfo", (function(t) {
                                return (e = e || (0, o.default)((0, c.default)().mark((function e(t) {
                                    return (0, c.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", (0, h.getBuildingInfo)(t, d.requestController));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))).apply(this, arguments)
                            })), (0, m.default)((0, u.default)(d), "getFloorInfo", (function(e, r) {
                                return (t = t || (0, o.default)((0, c.default)().mark((function e(t, r) {
                                    return (0, c.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", (0, h.getRoomInfo)(t, r, d.requestController));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))).apply(this, arguments)
                            })), (0, m.default)((0, u.default)(d), "getMeterIdByRoomId", (function(e) {
                                return (n = n || (0, o.default)((0, c.default)().mark((function e(t) {
                                    return (0, c.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", (0, h.getMeterIdByRoomId)(t, d.requestController));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))).apply(this, arguments)
                            })), (0, m.default)((0, u.default)(d), "bindRoom", (function(e, t, r, a, n, s, u) {
                                return (i = i || (0, o.default)((0, c.default)().mark((function e(t, r, a, n, o, s, i) {
                                    return (0, c.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", (0, h.bindRoom)(t, r, a, n, o, s, i, d.requestController));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))).apply(this, arguments)
                            })), (0, m.default)((0, u.default)(d), "deleteRoom", (function(e) {
                                return (l = l || (0, o.default)((0, c.default)().mark((function e(t) {
                                    return (0, c.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", (0, h.deleteRoom)(t, d.requestController));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))).apply(this, arguments)
                            })), d
                        }
                        return (0, i.default)(a, [{
                            key: "auto",
                            value: function() {
                                return (t = t || (0, o.default)((0, c.default)().mark((function e() {
                                    var t = this;
                                    return (0, c.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", Promise.all([(0, h.getAreaInfo)(this.requestController), (0, h.getMyRoomInfo)(this.requestController)]).then((function(e) {
                                                    var r, a = (0, n.default)(e, 2),
                                                        c = a[0],
                                                        o = a[1];
                                                    t.store.dispatch((0, g.setAreaInfo)(null === (r = c.data) || void 0 === r ? void 0 : r.areaInfoList)), t.store.dispatch((0, g.setMyRoomsRemain)(o.data))
                                                })));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }]), a
                    }(f.Mini4BaseModule)) || a)
            },
            "./src/packages/campus-card/module/electric/store.ts": function(e, t, r) {
                r.d(t, {
                    electricitySlice: function() {
                        return a
                    },
                    setAreaInfo: function() {
                        return c
                    },
                    setMyRoomsRemain: function() {
                        return o
                    }
                });
                var a = (0, r("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "Electricity",
                        initialState: {
                            AreaInfoList: [],
                            MyRoomsRemain: {}
                        },
                        reducers: {
                            setAreaInfo: function(e, t) {
                                e.AreaInfoList = t.payload
                            },
                            setMyRoomsRemain: function(e, t) {
                                e.MyRoomsRemain = t.payload
                            }
                        }
                    }),
                    n = a.actions,
                    c = n.setAreaInfo,
                    o = n.setMyRoomsRemain
            },
            "./src/packages/campus-card/pages/electric-charge/components/AddRoomCard/index.tsx": function(e, t, r) {
                r.d(t, {
                    AddRoomCard: function() {
                        return m
                    }
                });
                var a = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    n = r("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    c = r("webpack/container/remote/@tarojs/taro"),
                    o = r.n(c),
                    s = r("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    i = r("webpack/container/remote/react"),
                    u = r("./src/packages/campus-card/assets/index.ts"),
                    l = r("./src/packages/campus-card/module/electric/index.ts"),
                    d = r("webpack/container/remote/react/jsx-runtime"),
                    m = (0, i.memo)((function(e) {
                        var t = e.areaInfoList,
                            r = (0, i.useRef)([0, 0, 0, 0]),
                            c = (0, i.useRef)({
                                AreaList: [],
                                ArchitectureList: [],
                                FloorList: [" ", "1楼", "2楼", "3楼", "4楼", "5楼", "6楼", "7楼", "8楼", "9楼", "10楼"],
                                RoomList: []
                            }),
                            m = (0, i.useState)([
                                [" "],
                                [" "],
                                [" "],
                                [" "]
                            ]),
                            p = (0, n.default)(m, 2),
                            f = p[0],
                            h = p[1],
                            g = function(e) {
                                var t = c.current.ArchitectureList[r.current[1] - 1].ArchitectureID,
                                    n = Number(f[2][e].slice(0, 1));
                                l.ElectricityModule.getFloorInfo(t, n).then((function(e) {
                                    e.data.roomInfoList.length ? (c.current.RoomList = e.data.roomInfoList, h((function(t) {
                                        var r = (0, a.default)(t);
                                        return r[3] = [" "].concat(e.data.roomInfoList.map((function(e) {
                                            return e.RoomName
                                        }))), r
                                    }))) : (r.current[2] = 0, r.current[3] = 0, h((function(e) {
                                        var t = (0, a.default)(e);
                                        return t[2][0] = "无效楼层", t
                                    })))
                                }))
                            };
                        return (0, i.useEffect)((function() {
                            c.current.AreaList = t, t.length && h((function(e) {
                                var r = (0, a.default)(e);
                                return r[0] = [" "].concat(t.map((function(e) {
                                    return e.AreaName
                                }))), r
                            }))
                        }), [t]), (0, d.jsxs)(s.View, {
                            className: "head-bg",
                            children: [(0, d.jsx)(s.Image, {
                                className: "head-bg-img",
                                src: u.ELECTRICITY_ASSETS.EleInfoBg
                            }), (0, d.jsx)(s.View, {
                                className: "head-bg-container",
                                children: (0, d.jsx)(s.Picker, {
                                    range: f,
                                    mode: "multiSelector",
                                    onColumnChange: function(e) {
                                        ! function(e) {
                                            if (3 != e.detail.column) switch (r.current[e.detail.column] = e.detail.value, e.detail.column) {
                                                case 0:
                                                    ! function() {
                                                        var e = c.current.AreaList[r.current[0] - 1].AreaID;
                                                        l.ElectricityModule.getBuildingInfo(e).then((function(e) {
                                                            c.current.ArchitectureList = e.data.architectureInfoList, h((function(t) {
                                                                var r = (0, a.default)(t);
                                                                return r[1] = [" "].concat(e.data.architectureInfoList.map((function(e) {
                                                                    return e.ArchitectureName.length > 5 ? e.ArchitectureName.slice(0, 5) : e.ArchitectureName
                                                                }))), r
                                                            }))
                                                        }))
                                                    }();
                                                    break;
                                                case 1:
                                                    0 !== r.current[2] && g(r.current[2]), h((function(e) {
                                                        var t = (0, a.default)(e),
                                                            n = c.current.ArchitectureList[r.current[1] - 1],
                                                            o = n.ArchitectureBegin,
                                                            s = n.ArchitectureStorys;
                                                        return t[2] = [""].concat(c.current.FloorList.slice(o, o + s)), t
                                                    }));
                                                    break;
                                                case 2:
                                                    g(e.detail.value)
                                            }
                                        }(e)
                                    },
                                    onChange: function(e) {
                                        ! function(e) {
                                            if (0 != r.current[1] && 0 != r.current[2]) {
                                                o().showLoading({
                                                    title: "绑定中"
                                                });
                                                var t = c.current.RoomList[e - 1].RoomNo;
                                                l.ElectricityModule.getMeterIdByRoomId(t).then((function(a) {
                                                    var n = a.data.meterList[0].meterId;
                                                    l.ElectricityModule.bindRoom(c.current.AreaList[r.current[0] - 1].AreaID, c.current.AreaList[r.current[0] - 1].AreaName, c.current.ArchitectureList[r.current[1] - 1].ArchitectureID, c.current.ArchitectureList[r.current[1] - 1].ArchitectureName, t, c.current.RoomList[e - 1].RoomName, n).then((function() {
                                                        o().showToast({
                                                            title: "绑定成功",
                                                            icon: "success"
                                                        }), l.ElectricityModule.auto()
                                                    })).catch((function(e) {
                                                        o().showToast({
                                                            title: e.errMsg,
                                                            icon: "error"
                                                        })
                                                    }))
                                                })).catch((function(e) {
                                                    o().showToast({
                                                        title: e.errMsg,
                                                        icon: "error"
                                                    })
                                                })).finally((function() {
                                                    o().hideLoading()
                                                }))
                                            } else o().showToast({
                                                title: "找不到这个宿舍～",
                                                icon: "error"
                                            })
                                        }(e.target.value[3])
                                    },
                                    value: r.current,
                                    children: (0, d.jsxs)(s.View, {
                                        className: "add-room-wrap",
                                        children: [(0, d.jsx)(s.Image, {
                                            className: "image",
                                            src: u.ELECTRICITY_ASSETS.Position
                                        }), (0, d.jsx)(s.View, {
                                            className: "dorm",
                                            children: "点击添加宿舍地址"
                                        })]
                                    })
                                })
                            })]
                        })
                    }))
            },
            "./src/packages/campus-card/pages/electric-charge/index.tsx": function(e, t, r) {
                var a = r("webpack/container/remote/@tarojs/runtime"),
                    n = r("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/campus-card/pages/electric-charge/index.tsx");
                Page((0, a.createPageConfig)(n.default, "packages/campus-card/pages/electric-charge/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), n.default
            }
        },
        function(e) {
            e.O(0, ["packages/campus-card/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/campus-card/pages/electric-charge/index.tsx", e(e.s = "./src/packages/campus-card/pages/electric-charge/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/campus-card/pages/electric-charge/index.js'
});
require("packages/campus-card/pages/electric-charge/index.js");