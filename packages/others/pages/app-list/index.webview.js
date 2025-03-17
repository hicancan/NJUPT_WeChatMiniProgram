$gwx3_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_0 || [];

        function gz$gwx3_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_0 = true;
        var x = ['./packages/others/pages/app-list/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_0_1()
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
                g = "$gwx3_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/app-list/index.wxml'] = [$gwx3_XC_0, './packages/others/pages/app-list/index.wxml'];
else __wxAppCode__['packages/others/pages/app-list/index.wxml'] = $gwx3_XC_0('./packages/others/pages/app-list/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/others/pages/app-list/index.wxss'] = setCssToHead([
        [2, "./packages/others/sub-vendors.wxss"], ".", [1], "app-card-item{-ms-flex-pack:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:", [0, 140], ";-webkit-justify-content:center;justify-content:center;position:relative;width:", [0, 120], "}\n.", [1], "app-card-item,.", [1], "app-card-item .", [1], "card-item-icon{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex}\n.", [1], "app-card-item .", [1], "card-item-icon{height:", [0, 100], ";width:", [0, 100], "}\n.", [1], "app-card-item .", [1], "card-item-icon.", [1], "close{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\n.", [1], "app-card-item .", [1], "card-item-text{color:#000;font-family:SF Pro Display,sans-serif;font-size:", [0, 24], ";font-style:normal;font-weight:500;line-height:", [0, 40], "}\n.", [1], "app-card-item .", [1], "card-icon-addition,.", [1], "app-card-item .", [1], "card-icon-subtraction{height:", [0, 32], ";position:absolute;right:0;top:0;width:", [0, 32], "}\nbody{background:#f5f5f5}\n.", [1], "app-list .", [1], "app-list-head{-ms-flex-pack:justify;background:#fff;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:", [0, 20], " ", [0, 24], "}\n.", [1], "app-list .", [1], "app-list-head,.", [1], "app-list .", [1], "app-list-head .", [1], "head-wrap{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-wrap{-ms-flex-align:center;-ms-flex-item-align:stretch;-ms-flex-pack:justify;-webkit-align-items:center;align-items:center;-webkit-align-self:stretch;align-self:stretch}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-wrap .", [1], "head-apps{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:", [0, 20], "}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-wrap .", [1], "head-apps .", [1], "head-apps-title{color:#000;font-family:SF Pro Display,sans-serif;font-size:", [0, 24], ";font-style:normal;font-weight:500;line-height:", [0, 40], "}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-wrap .", [1], "head-apps .", [1], "head-apps-item{height:", [0, 40], ";width:", [0, 40], "}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-wrap .", [1], "head-edit{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;background:#1a8cf4;border-radius:", [0, 5], ";display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;padding:0 ", [0, 36], "}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-wrap .", [1], "head-edit .", [1], "head-edit-text{color:#fff;font-family:SF Pro Display,sans-serif;font-size:", [0, 20], ";font-style:normal;font-weight:500;line-height:", [0, 40], "}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-home-apps{height:0;max-height:0;overflow:hidden;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:height,max-height;transition-property:height,max-height;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-home-apps .", [1], "home-apps-wrap{-ms-flex-item-align:stretch;-ms-flex-align:center;-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center;-webkit-align-items:center;align-items:center;-webkit-align-self:stretch;align-self:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 36], " ", [0, 70], ";padding-top:", [0, 24], "}\n.", [1], "app-list .", [1], "app-list-head .", [1], "head-home-apps.", [1], "expand{height:100%;max-height:", [0, 340], "}\n.", [1], "app-list .", [1], "app-list-main{-ms-flex-align:start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 20], ";padding:", [0, 40], " ", [0, 20], "}\n.", [1], "app-list .", [1], "app-card,.", [1], "app-list .", [1], "app-list-main{-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-flex;display:-ms-flexbox;display:flex}\n.", [1], "app-list .", [1], "app-card{-ms-flex-item-align:stretch;-ms-flex-align:start;-webkit-align-self:stretch;align-self:stretch;background:#fff;border-radius:", [0, 10], ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:", [0, 30], " ", [0, 40], "}\n.", [1], "app-list .", [1], "app-card .", [1], "card-title{color:#000;font-family:SF Pro Display,sans-serif;font-size:", [0, 28], ";font-style:normal;font-weight:600;line-height:", [0, 40], "}\n.", [1], "app-list .", [1], "app-card .", [1], "card-content{-ms-flex-item-align:stretch;-ms-flex-align:center;-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center;-webkit-align-items:center;align-items:center;-webkit-align-self:stretch;align-self:stretch;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 36], " ", [0, 50], ";padding:", [0, 24], " 0}\n",
    ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/others/pages/app-list/index.wxss:6:749)", {
        path: "./packages/others/pages/app-list/index.wxss"
    });
}