$gwx0_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_0 || [];

        function gz$gwx0_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_0 = true;
        var x = ['./packages/campus-card/pages/card-charge/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_0_1()
            var oB = e_[x[0]].i
            _ai(oB, x[1], e_, x[0], 1, 1)
            var xC = _v()
            _(r, xC)
            var oD = _oz(z, 1, e, s, gg)
            var fE = _gd(x[0], oD, e_, d_)
            if (fE) {
                var cF = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                xC.wxXCkey = 3
                fE(cF, cF, xC, gg)
                gg.f = cur_globalf
            } else _w(oD, x[0], 2, 14)
            oB.pop()
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
                g = "$gwx0_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/campus-card/pages/card-charge/index.wxml'] = [$gwx0_XC_0, './packages/campus-card/pages/card-charge/index.wxml'];
else __wxAppCode__['packages/campus-card/pages/card-charge/index.wxml'] = $gwx0_XC_0('./packages/campus-card/pages/card-charge/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/campus-card/pages/card-charge/index.wxss'] = setCssToHead([
        [2, "./packages/campus-card/sub-vendors.wxss"], ".", [1], "container{margin-top:", [0, 168], "}\n.", [1], "container,.", [1], "container .", [1], "head-bg{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n.", [1], "container .", [1], "head-bg{background-size:cover;color:#fff;height:", [0, 243], ";margin:0 auto;text-align:center;width:100%}\n.", [1], "container .", [1], "head-bg .", [1], "head-img{height:inherit;position:absolute;width:inherit;z-index:-1}\n.", [1], "container .", [1], "head-bg .", [1], "head-bg-title{font-family:PingFangSC-Regular,sans-serif;font-size:", [0, 28], ";height:", [0, 40], ";line-height:", [0, 40], ";margin-top:", [0, 45], "}\n.", [1], "container .", [1], "head-bg .", [1], "head-bg-remain{font-family:PingFangSC-Medium,sans-serif;font-size:", [0, 80], ";height:", [0, 112], ";line-height:", [0, 112], "}\n.", [1], "container .", [1], "main-container{font-family:PingFangSC-Regular,sans-serif;margin:", [0, 50], " ", [0, 35], " 0}\n.", [1], "container .", [1], "main-container .", [1], "pay-account{color:#353535;font-family:PingFangSC-Medium,sans-serif;font-size:", [0, 32], ";height:", [0, 45], ";line-height:", [0, 45], "}\n.", [1], "container .", [1], "main-container .", [1], "pay-way{color:#888;font-size:", [0, 24], ";height:", [0, 33], ";line-height:", [0, 33], ";margin-top:", [0, 9], "}\n.", [1], "container .", [1], "main-container .", [1], "quick-pay-container{-ms-flex-pack:justify;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-top:", [0, 50], "}\n.", [1], "container .", [1], "main-container .", [1], "quick-pay-container .", [1], "quick-pay-item{border:", [0, 1], " solid #47cff5;border-radius:", [0, 10], ";color:#47cff5;font-family:PingFangSC-Medium,sans-serif;font-size:", [0, 36], ";height:", [0, 100], ";line-height:", [0, 100], ";text-align:center;width:", [0, 150], "}\n.", [1], "container .", [1], "main-container .", [1], "quick-pay-container .", [1], "quick-pay-item:hover{background-color:#47cff5;color:#fff}\n.", [1], "container .", [1], "main-container .", [1], "list{color:#353535;font-family:PingFangSC-Regular,sans-serif;font-size:", [0, 30], ";margin-top:", [0, 60], "}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item .", [1], "why{border-radius:50%;left:", [0, 167], ";position:absolute;top:", [0, 21], ";width:", [0, 30], "}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item .", [1], "list-item-text{margin:0 0 ", [0, 15], "}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item .", [1], "list-item-text:first-of-type{margin-left:", [0, 34], ";margin-right:", [0, 100], "}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item + .", [1], "list-item{border-top:", [0, 2], " solid #e3e3e3}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick{border-bottom:", [0, 2], " solid #e3e3e3}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick,.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick .", [1], "money-list{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick .", [1], "money-list .", [1], "money-item{border:", [0, 2], " solid #47cff5;border-radius:", [0, 60], ";color:#47cff5;height:", [0, 45], ";line-height:", [0, 45], ";margin-right:", [0, 30], ";text-align:center;width:", [0, 93], "}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick .", [1], "input{z-index:auto}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick .", [1], "list-item-text{display:-webkit-flex;display:-ms-flexbox;display:flex;margin:", [0, 15], " 0}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick .", [1], "list-item-text .", [1], "item{width:", [0, 177], "}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick .", [1], "list-item-text .", [1], "input{width:", [0, 500], "}\n.", [1], "container .", [1], "main-container .", [1], "list .", [1], "list-item-quick .", [1], "list-item-text:first-of-type{color:#353535}\n.", [1], "container .", [1], "enter-button{background:#47cff5;border-radius:", [0, 100], ";color:#fff;height:", [0, 85], ";line-height:", [0, 85], ";margin-top:", [0, 60], ";width:62%}\n.", [1], "container .", [1], "enter-button[disabled]{background-color:#d0f5ff}\n.", [1], "container .", [1], "enter-button:after{border:0}\n.", [1], "container .", [1], "button-click{background-color:#d0f5ff;background-image:none}\n",
    ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/campus-card/pages/card-charge/index.wxss:3:4177)", {
        path: "./packages/campus-card/pages/card-charge/index.wxss"
    });
}