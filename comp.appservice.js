$gwx_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];

        function gz$gwx_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [9],
                    [
                        [9],
                        [
                            [8], 'i', [
                                [7],
                                [3, 'i']
                            ]
                        ],
                        [
                            [8], 'c', [1, 1]
                        ]
                    ],
                    [
                        [8], 'l', [
                            [7],
                            [3, 'l']
                        ]
                    ]
                ])
                Z([
                    [2, '+'],
                    [1, 'tmpl_0_'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'i']
                        ],
                        [3, 'nn']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_0 = true;
        var x = ['./comp.wxml', './base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_0_1()
            var xC = e_[x[0]].i
            _ai(xC, x[1], e_, x[0], 1, 1)
            var oD = _v()
            _(r, oD)
            var fE = _oz(z, 1, e, s, gg)
            var cF = _gd(x[0], fE, e_, d_)
            if (cF) {
                var hG = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                oD.wxXCkey = 3
                cF(hG, hG, oD, gg)
                gg.f = cur_globalf
            } else _w(fE, x[0], 2, 14)
            xC.pop()
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
                g = "$gwx_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['comp.wxml'] = [$gwx_XC_0, './comp.wxml'];
else __wxAppCode__['comp.wxml'] = $gwx_XC_0('./comp.wxml');;
__wxRoute = "comp";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "comp.js";
define("comp.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["comp"], {},
        function(e) {
            e.O(0, ["taro", "common"], (function() {
                return "./node_modules/.pnpm/@tarojs+webpack5-runner@3.6.16_@babel+core@7.18.6_@swc+core@1.3.23_@types+react@18.2.21_@type_4pq6vhhcxmfnuf4rlih5p5kpay/node_modules/@tarojs/webpack5-runner/dist/template/comp.js", e(e.s = "./node_modules/.pnpm/@tarojs+webpack5-runner@3.6.16_@babel+core@7.18.6_@swc+core@1.3.23_@types+react@18.2.21_@type_4pq6vhhcxmfnuf4rlih5p5kpay/node_modules/@tarojs/webpack5-runner/dist/template/comp.js")
            })), e.O()
        }
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'comp.js'
});
require("comp.js");