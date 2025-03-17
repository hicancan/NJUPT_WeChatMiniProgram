$gwx0_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_1 || [];

        function gz$gwx0_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_1 = true;
        var x = ['./packages/campus-card/pages/card-index/card-bill/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_1_1()
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
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx0_XC_1";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/campus-card/pages/card-index/card-bill/index.wxml'] = [$gwx0_XC_1, './packages/campus-card/pages/card-index/card-bill/index.wxml'];
else __wxAppCode__['packages/campus-card/pages/card-index/card-bill/index.wxml'] = $gwx0_XC_1('./packages/campus-card/pages/card-index/card-bill/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/campus-card/pages/card-index/card-bill/index.wxss'] = setCssToHead([
        [2, "./packages/campus-card/sub-vendors.wxss"], ".", [1], "container{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n.", [1], "scroll-container{background-color:#f5f5f5;margin-top:", [0, 86.1832], "}\n.", [1], "head-container{-ms-flex-pack:distribute;-ms-flex-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;background-size:contain;color:#353535;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 32], ";font-weight:700;height:", [0, 89], ";-webkit-justify-content:space-around;justify-content:space-around;position:fixed;width:100%;z-index:1}\n.", [1], "head-container .", [1], "head-bg{height:inherit;position:absolute;width:inherit;z-index:-1}\n.", [1], "head-container .", [1], "head-item{height:", [0, 67], ";line-height:", [0, 67], ";text-align:center;width:33%}\n.", [1], "head-container .", [1], "head-item + .", [1], "head-item{border-left:", [0, 2], " solid #e3e3e3}\n.", [1], "card-container{-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#353535;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n.", [1], "card-container .", [1], "time{color:#888;font-size:", [0, 24], ";font-weight:700;height:", [0, 60], ";line-height:", [0, 60], "}\n.", [1], "card-container .", [1], "card-list{background-color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}\n.", [1], "card-container .", [1], "card-list + .", [1], "card-list{border-top:", [0, 2], " solid #e3e3e3}\n.", [1], "card-container .", [1], "card-list .", [1], "list-item{font-size:", [0, 28], ";height:", [0, 84], ";line-height:", [0, 84], ";overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:33%;word-break:keep-all}\n.", [1], "card-container .", [1], "card-list .", [1], "add{color:#09bb07;font-weight:700}\n.", [1], "card-container .", [1], "card-list .", [1], "des{color:#e64340;font-weight:700}\n",
    ], undefined, {
        path: "./packages/campus-card/pages/card-index/card-bill/index.wxss"
    });
}