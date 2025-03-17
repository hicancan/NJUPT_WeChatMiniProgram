/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx4 || [];
        __WXML_GLOBAL__.ops_set.$gwx4 = z;
        __WXML_GLOBAL__.ops_init.$gwx4 = true;
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
                g = "$gwx4";
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
if (__vd_version_info__.delayedGwx || true) $gwx4();;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/pe/sub-common/7f5b9ebfeb838c951d3e80421739c824.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 7f5b9ebfeb838c951d3e80421739c824.js.LICENSE.txt */
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/7f5b9ebfeb838c951d3e80421739c824"], {
            "./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/typeof.js": function(o) {
                function e(t) {
                    return o.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                        return typeof o
                    } : function(o) {
                        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                    }, o.exports.__esModule = !0, o.exports.default = o.exports, e(t)
                }
                o.exports = e, o.exports.__esModule = !0, o.exports.default = o.exports
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/pe/sub-common/7f5b9ebfeb838c951d3e80421739c824.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/pe/sub-common/ed38b011cfb987b1850ffd548c33fde1.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
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
    currentFile: 'packages/pe/sub-common/ed38b011cfb987b1850ffd548c33fde1.js'
});