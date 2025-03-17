$gwx0_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_3 || [];

        function gz$gwx0_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_3 = true;
        var x = ['./packages/campus-card/pages/card-index/money-log/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_3_1()
            var cT = e_[x[0]].i
            _ai(cT, x[1], e_, x[0], 1, 1)
            var hU = _v()
            _(r, hU)
            var oV = _oz(z, 1, e, s, gg)
            var cW = _gd(x[0], oV, e_, d_)
            if (cW) {
                var oX = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                hU.wxXCkey = 3
                cW(oX, oX, hU, gg)
                gg.f = cur_globalf
            } else _w(oV, x[0], 2, 14)
            cT.pop()
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
                g = "$gwx0_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/campus-card/pages/card-index/money-log/index.wxml'] = [$gwx0_XC_3, './packages/campus-card/pages/card-index/money-log/index.wxml'];
else __wxAppCode__['packages/campus-card/pages/card-index/money-log/index.wxml'] = $gwx0_XC_3('./packages/campus-card/pages/card-index/money-log/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/campus-card/pages/card-index/money-log/index.wxss'] = setCssToHead([
        [2, "./packages/campus-card/sub-vendors.wxss"], ".", [1], "container{margin:0 0 0 ", [0, 26], ";min-height:100vh;position:absolute;width:", [0, 724], "}\n.", [1], "container .", [1], "rectangle{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.11)),to(hsla(0,0%,100%,.98)));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.11),hsla(0,0%,100%,.98));background-image:linear-gradient(90deg,hsla(0,0%,100%,.11),hsla(0,0%,100%,.98));height:calc(100% - ", [0, 170], ");position:absolute;right:0;top:", [0, 186], ";width:", [0, 108], "}\n.", [1], "container .", [1], "header-tip{color:#888;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:PingFangSC-Regular,sans-serif;font-size:", [0, 24], ";margin-bottom:", [0, 16], ";width:calc(100% - ", [0, 52], ")}\n.", [1], "container .", [1], "header-tip .", [1], "image-container{background-repeat:no-repeat;background-size:contain;height:", [0, 46], ";width:", [0, 46], "}\n.", [1], "container .", [1], "header-tip .", [1], "tip-font{-ms-flex-item-align:center;-webkit-align-self:center;align-self:center}\n.", [1], "container .", [1], "main-container{width:100%}\n.", [1], "container .", [1], "main-container .", [1], "main-container-header{-ms-flex-align:center;-ms-flex-pack:distribute;-webkit-align-items:center;align-items:center;background:#6bdec9;border-radius:", [0, 6], ";display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 96], ";-webkit-justify-content:space-around;justify-content:space-around}\n.", [1], "container .", [1], "main-container .", [1], "main-container-header .", [1], "header-item{color:#fff;font-family:PingFangSC-Medium,sans-serif;font-size:", [0, 32], "}\n.", [1], "container .", [1], "main-container .", [1], "main-container-item{-ms-flex-align:center;-ms-flex-pack:distribute;-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #d7d7d7;color:#353535;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:PingFangSC-Regular,sans-serif;font-size:", [0, 32], ";height:", [0, 98], ";-webkit-justify-content:space-around;justify-content:space-around;position:relative}\n.", [1], "container .", [1], "main-container .", [1], "main-container-item .", [1], "main-item{overflow:hidden;padding-left:", [0, 23], "}\n.", [1], "container .", [1], "main-container .", [1], "main-container-item .", [1], "longer{-webkit-flex:1;-ms-flex:1;flex:1;width:100%}\n",
    ], undefined, {
        path: "./packages/campus-card/pages/card-index/money-log/index.wxss"
    });
}