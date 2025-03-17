/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        if (typeof $gwx === 'function') $gwx('init', global);
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3 || [];
        __WXML_GLOBAL__.ops_set.$gwx3 = z;
        __WXML_GLOBAL__.ops_init.$gwx3 = true;
        var nv_require = function() {
            var nnm = {};
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        var x = [];
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx3";
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
if (__vd_version_info__.delayedGwx || true) $gwx3();;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/others/sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 5cadce6ba9a3c23f663c84fdf39fc435.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/5cadce6ba9a3c23f663c84fdf39fc435"], {
            "./src/packages/others/assets/back.svg": function(M) {
                M.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjAwMDA2IDQuNTYyNUw5LjA0NTUzIDMuNUwxNi43MTkxIDExLjI5ODZDMTcuMTAyMSAxMS42ODc4IDE3LjEwMjEgMTIuMzEyMiAxNi43MTkxIDEyLjcwMTRMOS4wNDU1MyAyMC41TDguMDAwMDYgMTkuNDM3NUwxNS4zMTgzIDEyTDguMDAwMDYgNC41NjI1WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC45Ii8+Cjwvc3ZnPgo="
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/others/sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/others/sub-common/ed38b011cfb987b1850ffd548c33fde1.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see ed38b011cfb987b1850ffd548c33fde1.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/ed38b011cfb987b1850ffd548c33fde1"], {
            "./src/components/TabsFolder/index.tsx": function(e, n, t) {
                t.d(n, {
                    Tab: function() {
                        return d
                    },
                    TabList: function() {
                        return u
                    },
                    TabPanel: function() {
                        return m
                    },
                    TabPanels: function() {
                        return b
                    },
                    TabsFolderView: function() {
                        return o
                    }
                });
                var r = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    i = t("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    a = t("webpack/container/remote/react"),
                    l = t.n(a),
                    c = t("webpack/container/remote/react/jsx-runtime"),
                    s = (0, a.createContext)(null);

                function o(e) {
                    var n = (0, a.useState)(e.defaultActiveTab),
                        t = (0, r.default)(n, 2),
                        l = t[0],
                        o = t[1],
                        u = (0, a.useMemo)((function() {
                            return {
                                activeTab: l,
                                setActiveTab: o
                            }
                        }), [l, o]);
                    return (0, c.jsx)(i.View, {
                        className: "tabs-folder-view",
                        children: (0, c.jsx)(s.Provider, {
                            value: u,
                            children: e.children
                        })
                    })
                }

                function u(e) {
                    var n = (0, a.useContext)(s);
                    return (0, c.jsx)(i.View, {
                        className: "tab-list",
                        style: e.style,
                        children: l().Children.map(e.children, (function(e, t) {
                            if ((null == e ? void 0 : e.type) !== d) throw new Error("TabList children must be Tab component");
                            if (null != e) return l().cloneElement(e, {
                                onClick: function() {
                                    return null == n ? void 0 : n.setActiveTab(t)
                                },
                                active: (null == n ? void 0 : n.activeTab) === t
                            })
                        }))
                    })
                }

                function d(e) {
                    return (0, c.jsx)(i.View, {
                        style: e.style,
                        className: e.active ? "tab-list-item tab-list-item-actived" : "tab-list-item",
                        onClick: e.onClick,
                        children: e.children
                    })
                }

                function b(e) {
                    var n = (0, a.useContext)(s);
                    return l().Children.map(e.children, (function(e) {
                        if ((null == e ? void 0 : e.type) !== m) throw new Error("TabPanels children must be TabPanel component")
                    })), (0, c.jsx)(i.Swiper, {
                        style: {
                            height: e.height
                        },
                        className: "tab-panels",
                        current: null == n ? void 0 : n.activeTab,
                        onChange: function(e) {
                            null == n || n.setActiveTab(e.detail.current)
                        },
                        children: e.children
                    })
                }

                function m(e) {
                    return (0, c.jsx)(i.SwiperItem, {
                        className: "tab-panel-item",
                        children: e.children
                    })
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/others/sub-common/ed38b011cfb987b1850ffd548c33fde1.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/others/sub-vendors.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see sub-vendors.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/sub-vendors"], {
            "./src/components/LoadingIcon/index.tsx": function(e, n, t) {
                var s = t("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = t("webpack/container/remote/react/jsx-runtime");
                n.default = function() {
                    return (0, o.jsx)(s.View, {
                        className: "modal",
                        children: (0, o.jsxs)("div", {
                            className: "loading",
                            children: [(0, o.jsx)("div", {
                                className: "item1"
                            }), (0, o.jsx)("div", {
                                className: "item2"
                            }), (0, o.jsx)("div", {
                                className: "item3"
                            }), (0, o.jsx)("div", {
                                className: "item4"
                            }), (0, o.jsx)("div", {
                                className: "item5"
                            }), (0, o.jsx)("div", {
                                className: "item6"
                            }), (0, o.jsx)("div", {
                                className: "item7"
                            }), (0, o.jsx)("div", {
                                className: "item8"
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/api/index.ts": function(e, n, t) {
                t.d(n, {
                    DetailAnnoucement: function() {
                        return i
                    },
                    DetailEduMes: function() {
                        return l
                    },
                    DetailNewsMessage: function() {
                        return a
                    },
                    getAnnouceMessage: function() {
                        return u
                    },
                    getEduNewsMessage: function() {
                        return c
                    },
                    getNewsMessage: function() {
                        return r
                    },
                    getSchoolBus: function() {
                        return o
                    },
                    getSchoolCalendar: function() {
                        return s
                    }
                });
                var s = function(e) {
                        return e.request({
                            url: "/other/schoolCalender/",
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    },
                    o = function(e) {
                        return e.request({
                            url: "/other/schoolBus/",
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    },
                    r = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/news",
                            method: "GET",
                            data: {
                                page: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    a = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/news/detail",
                            method: "GET",
                            data: {
                                url: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    u = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/notice",
                            method: "GET",
                            data: {
                                page: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    i = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/notice/detail",
                            method: "GET",
                            data: {
                                url: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    c = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/education",
                            method: "GET",
                            data: {
                                page: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    l = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/education/detail",
                            method: "GET",
                            data: {
                                url: n
                            }
                        }, {
                            base: "main"
                        })
                    }
            },
            "./src/packages/others/assets/index.ts": function(e, n, t) {
                t.d(n, {
                    INFORMATION_ASSETS: function() {
                        return r
                    },
                    SCHOOL_BUS_ASSETS: function() {
                        return o
                    }
                });
                var s = t("./src/constants/assets.ts"),
                    o = new Proxy({
                        Card_0_Arrow: "packages/others/school-bus-arrow-0.png",
                        Card_0_Background: "packages/others/school-bus-bg-0.png",
                        Card_1_Arrow: "packages/others/school-bus-arrow-1.png",
                        Card_1_Background: "packages/others/school-bus-bg-1.png",
                        Card_2_Arrow: "packages/others/school-bus-arrow-2.png",
                        Card_2_Background: "packages/others/school-bus-bg-2.png"
                    }, s.handler),
                    r = new Proxy({
                        AllRead: "packages/others/all-read.png",
                        AllClear: "packages/others/all-clear.png"
                    }, s.handler)
            },
            "./src/packages/others/module/edu-news/hooks.ts": function(e, n, t) {
                t.d(n, {
                    useEduNews: function() {
                        return o
                    },
                    useEduNewsDetail: function() {
                        return r
                    }
                });
                var s = t("webpack/container/remote/react-redux"),
                    o = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.EduNewsMessage.EduNewsLists
                        }))
                    },
                    r = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.EduNewsMessage.DetailInfo
                        }))
                    }
            },
            "./src/packages/others/module/edu-news/index.ts": function(e, n, t) {
                t.d(n, {
                    EduModule: function() {
                        return g
                    },
                    useEduNews: function() {
                        return b.useEduNews
                    },
                    useEduNewsDetail: function() {
                        return b.useEduNewsDetail
                    }
                });
                var s, o = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    a = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    u = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    i = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    c = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    l = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    d = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = t("./src/packages/others/api/index.ts"),
                    p = t("./src/constants/module.ts"),
                    f = t("./src/common/mini4/Mini4BaseModule.ts"),
                    h = t("./src/packages/others/module/edu-news/store.ts"),
                    b = t("./src/packages/others/module/edu-news/hooks.ts"),
                    g = new((0, f.injectReducers)(h.EduNewsMessageSlice)(s = function(e, n) {
                        (0, c.default)(s, e);
                        var t = (0, l.default)(s);

                        function s() {
                            var e;
                            (0, a.default)(this, s);
                            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                            return e = t.call.apply(t, [this].concat(o)), (0, d.default)((0, i.default)(e), "id", p.ModuleID.edu_News), (0, d.default)((0, i.default)(e), "slice", h.EduNewsMessageSlice), e
                        }
                        return (0, u.default)(s, [{
                            key: "auto",
                            value: function() {
                                return (n = n || (0, r.default)((0, o.default)().mark((function e() {
                                    return (0, o.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.LoadEduNews();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }, {
                            key: "LoadEduNews",
                            value: function(e) {
                                var n = this;
                                return e ? (0, m.getEduNewsMessage)(this.requestController, e + 1).then((function(e) {
                                    return n.store.dispatch((0, h.setEduNewsContent)(e.data)), e.data
                                })) : (0, m.getEduNewsMessage)(this.requestController, 1).then((function(e) {
                                    return n.store.dispatch((0, h.setEduNewsContent)(e.data)), e.data
                                }))
                            }
                        }, {
                            key: "DetailInfo",
                            value: function(e) {
                                var n = this;
                                return (0, m.DetailEduMes)(this.requestController, e).then((function(e) {
                                    n.store.dispatch((0, h.storeDetailInfo)(e.data))
                                }))
                            }
                        }]), s
                    }(f.Mini4BaseModule)) || s)
            },
            "./src/packages/others/module/edu-news/store.ts": function(e, n, t) {
                t.d(n, {
                    EduNewsMessageSlice: function() {
                        return s
                    },
                    setEduNewsContent: function() {
                        return r
                    },
                    storeDetailInfo: function() {
                        return a
                    }
                });
                var s = (0, t("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "EduNewsMessage",
                        initialState: {
                            EduNewsLists: [],
                            DetailInfo: {}
                        },
                        reducers: {
                            setEduNewsContent: function(e, n) {
                                e.EduNewsLists = e.EduNewsLists.concat(n.payload)
                            },
                            storeDetailInfo: function(e, n) {
                                e.DetailInfo = n.payload
                            }
                        }
                    }),
                    o = s.actions,
                    r = o.setEduNewsContent,
                    a = o.storeDetailInfo
            },
            "./src/packages/others/module/news-message/hooks.ts": function(e, n, t) {
                t.d(n, {
                    useNewsDetail: function() {
                        return r
                    },
                    useNewsMessage: function() {
                        return o
                    }
                });
                var s = t("webpack/container/remote/react-redux"),
                    o = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.newsMessage.newsList
                        }))
                    },
                    r = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.newsMessage.DetailInfo
                        }))
                    }
            },
            "./src/packages/others/module/news-message/index.ts": function(e, n, t) {
                t.d(n, {
                    newsMessageModule: function() {
                        return g
                    },
                    useNewsDetail: function() {
                        return b.useNewsDetail
                    },
                    useNewsMessage: function() {
                        return b.useNewsMessage
                    }
                });
                var s, o = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    a = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    u = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    i = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    c = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    l = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    d = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = t("./src/packages/others/api/index.ts"),
                    p = t("./src/constants/module.ts"),
                    f = t("./src/common/mini4/Mini4BaseModule.ts"),
                    h = t("./src/packages/others/module/news-message/store.ts"),
                    b = t("./src/packages/others/module/news-message/hooks.ts"),
                    g = new((0, f.injectReducers)(h.newsMessageSlice)(s = function(e, n) {
                        (0, c.default)(s, e);
                        var t = (0, l.default)(s);

                        function s() {
                            var e;
                            (0, a.default)(this, s);
                            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                            return e = t.call.apply(t, [this].concat(o)), (0, d.default)((0, i.default)(e), "id", p.ModuleID.newsMessage), (0, d.default)((0, i.default)(e), "slice", h.newsMessageSlice), e
                        }
                        return (0, u.default)(s, [{
                            key: "auto",
                            value: function() {
                                return (n = n || (0, r.default)((0, o.default)().mark((function e() {
                                    return (0, o.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.LoadNewsMessage();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }, {
                            key: "LoadNewsMessage",
                            value: function(e) {
                                var n = this;
                                return e ? (0, m.getNewsMessage)(this.requestController, e + 1).then((function(e) {
                                    return n.store.dispatch((0, h.setNewsContent)(e.data)), e.data
                                })) : (0, m.getNewsMessage)(this.requestController, 1).then((function(e) {
                                    return n.store.dispatch((0, h.setNewsContent)(e.data)), e.data
                                }))
                            }
                        }, {
                            key: "DetailInfo",
                            value: function(e) {
                                var n = this;
                                return (0, m.DetailNewsMessage)(this.requestController, e).then((function(e) {
                                    n.store.dispatch((0, h.storeDetailInfo)(e.data))
                                }))
                            }
                        }]), s
                    }(f.Mini4BaseModule)) || s)
            },
            "./src/packages/others/module/news-message/store.ts": function(e, n, t) {
                t.d(n, {
                    newsMessageSlice: function() {
                        return s
                    },
                    setNewsContent: function() {
                        return r
                    },
                    storeDetailInfo: function() {
                        return a
                    }
                });
                var s = (0, t("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "newsMessage",
                        initialState: {
                            newsList: [],
                            DetailInfo: {}
                        },
                        reducers: {
                            setNewsContent: function(e, n) {
                                e.newsList = e.newsList.concat(n.payload)
                            },
                            storeDetailInfo: function(e, n) {
                                e.DetailInfo = n.payload
                            }
                        }
                    }),
                    o = s.actions,
                    r = o.setNewsContent,
                    a = o.storeDetailInfo
            },
            "./src/packages/others/module/notice-annoucement/hooks.ts": function(e, n, t) {
                t.d(n, {
                    useAnnouceDetail: function() {
                        return r
                    },
                    useAnnoucement: function() {
                        return o
                    }
                });
                var s = t("webpack/container/remote/react-redux"),
                    o = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.noticeAnnoucement.AnnouceList
                        }))
                    },
                    r = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.noticeAnnoucement.DetailInfo
                        }))
                    }
            },
            "./src/packages/others/module/notice-annoucement/index.ts": function(e, n, t) {
                t.d(n, {
                    AnnouceModule: function() {
                        return g
                    },
                    useAnnouceDetail: function() {
                        return b.useAnnouceDetail
                    },
                    useAnnoucement: function() {
                        return b.useAnnoucement
                    }
                });
                var s, o = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    a = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    u = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    i = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    c = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    l = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    d = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = t("./src/packages/others/api/index.ts"),
                    p = t("./src/constants/module.ts"),
                    f = t("./src/common/mini4/Mini4BaseModule.ts"),
                    h = t("./src/packages/others/module/notice-annoucement/store.ts"),
                    b = t("./src/packages/others/module/notice-annoucement/hooks.ts"),
                    g = new((0, f.injectReducers)(h.AnnouceSlice)(s = function(e, n) {
                        (0, c.default)(s, e);
                        var t = (0, l.default)(s);

                        function s() {
                            var e;
                            (0, a.default)(this, s);
                            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                            return e = t.call.apply(t, [this].concat(o)), (0, d.default)((0, i.default)(e), "id", p.ModuleID.noticeAnnoucement), (0, d.default)((0, i.default)(e), "slice", h.AnnouceSlice), e
                        }
                        return (0, u.default)(s, [{
                            key: "auto",
                            value: function() {
                                return (n = n || (0, r.default)((0, o.default)().mark((function e() {
                                    return (0, o.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.LoadAnnoucement();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }, {
                            key: "LoadAnnoucement",
                            value: function(e) {
                                var n = this;
                                return e ? (0, m.getAnnouceMessage)(this.requestController, e + 1).then((function(e) {
                                    return n.store.dispatch((0, h.setAnnouceContent)(e.data)), e.data
                                })) : (0, m.getAnnouceMessage)(this.requestController, 1).then((function(e) {
                                    return n.store.dispatch((0, h.setAnnouceContent)(e.data)), e.data
                                }))
                            }
                        }, {
                            key: "DetailInfo",
                            value: function(e) {
                                var n = this;
                                return (0, m.DetailAnnoucement)(this.requestController, e).then((function(e) {
                                    n.store.dispatch((0, h.storeDetailInfo)(e.data))
                                }))
                            }
                        }]), s
                    }(f.Mini4BaseModule)) || s)
            },
            "./src/packages/others/module/notice-annoucement/store.ts": function(e, n, t) {
                t.d(n, {
                    AnnouceSlice: function() {
                        return s
                    },
                    setAnnouceContent: function() {
                        return r
                    },
                    storeDetailInfo: function() {
                        return a
                    }
                });
                var s = (0, t("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "noticeAnnoucement",
                        initialState: {
                            AnnouceList: [],
                            DetailInfo: {}
                        },
                        reducers: {
                            setAnnouceContent: function(e, n) {
                                e.AnnouceList = e.AnnouceList.concat(n.payload)
                            },
                            storeDetailInfo: function(e, n) {
                                e.DetailInfo = n.payload
                            }
                        }
                    }),
                    o = s.actions,
                    r = o.setAnnouceContent,
                    a = o.storeDetailInfo
            },
            "./src/packages/others/pages/detail-info/utils/preView.ts": function(e, n, t) {
                t.d(n, {
                    PreViewFile: function() {
                        return r
                    }
                });
                var s = t("webpack/container/remote/@tarojs/taro"),
                    o = t.n(s),
                    r = function(e) {
                        o().showLoading({
                            title: "请稍后..."
                        }), o().downloadFile({
                            url: e,
                            success: function(e) {
                                if (200 === e.statusCode) {
                                    var n = e.tempFilePath;
                                    o().hideLoading(), o().openDocument({
                                        filePath: n,
                                        success: function() {},
                                        fail: function(e) {
                                            o().showToast({
                                                icon: "error",
                                                title: "预览失败"
                                            })
                                        }
                                    })
                                }
                            },
                            fail: function(e) {
                                o().hideLoading(), o().showToast({
                                    icon: "error",
                                    title: "文件下载失败"
                                })
                            }
                        })
                    }
            },
            "./src/packages/others/pages/detail-info/utils/replaceScript.ts": function(e, n, t) {
                function s(e, n, t) {
                    var s = /font-size:\s*([^;]+);/g,
                        o = /text-indent:\s*([^;]+);/g,
                        r = e.replace(/&nbsp;/g, " ");
                    return (r = (r = (r = (r = (r = r.replace(/(<img\s+.*?src=(['"])([^'"]+)(['"])\s*.*?>)|(&nbsp;)|(font-size:\s*([^;]+);)|(text-indent:\s*([^;]+);)|(mso-[^:]+:[^;]+;)/g, (function(e, t, r, a, u, i, c, l, d) {
                        if (i) return " ";
                        if (t) {
                            if (a.toLowerCase().endsWith(".gif")) return '<img src="'.concat(n).concat(a, '" style="width: 10px; height: 10px; object-fit: cover; margin-right: 8px; font-size: 16px;"/>');
                            var m = "".concat(n).concat(a),
                                p = e.replace(s, "");
                            return (p = (p = p.replace(o, "")).replace(/mso-[^:]+:[^;]+;/g, "")).replace(a, m)
                        }
                        return c ? "font-size: 16px;" : l || d ? "" : e
                    }))).replace(/<tr\s+.*?>/g, "<tr>")).replace(/<td\s+.*?>/g, "<td>")).replace(/<table\s+.*?>/g, "<table>")).replace(/<a\s+href=["']([^"']+)["']\s*.*?>(.*?)<\/a>/g, (function(e, t, s) {
                        var o = t.startsWith("http") ? t : "".concat(n).concat(t);
                        return '<span class="hidelink" style="color: #1ABADE; width: 100%; display: block; padding: 5px 0; text-decoration: underline; cursor: pointer; position: relative;  width: 100%;" data-href="'.concat(o, '">').concat(s, "</span>")
                    }))).replace(/margin-bottom:\s*[^;]+;/g, "")
                }
                t.d(n, {
                    replaceScript: function() {
                        return s
                    }
                })
            },
            "./src/packages/others/pages/utils/debounce.ts": function(e, n, t) {
                t.d(n, {
                    deBounce: function() {
                        return s
                    }
                });
                var s = function(e, n) {
                    var t;
                    return function() {
                        for (var s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r];
                        t && clearTimeout(t), t = setTimeout((function() {
                            e.apply(void 0, o)
                        }), n)
                    }
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/others/sub-vendors.js'
});