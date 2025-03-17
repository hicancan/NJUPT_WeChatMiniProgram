$gwx3_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_6 || [];

        function gz$gwx3_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_6 = true;
        var x = ['./packages/others/pages/news-message/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_6_1()
            var oBB = e_[x[0]].i
            _ai(oBB, x[1], e_, x[0], 1, 1)
            var lCB = _v()
            _(r, lCB)
            var aDB = _oz(z, 1, e, s, gg)
            var tEB = _gd(x[0], aDB, e_, d_)
            if (tEB) {
                var eFB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                lCB.wxXCkey = 3
                tEB(eFB, eFB, lCB, gg)
                gg.f = cur_globalf
            } else _w(aDB, x[0], 2, 14)
            oBB.pop()
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
                g = "$gwx3_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/news-message/index.wxml'] = [$gwx3_XC_6, './packages/others/pages/news-message/index.wxml'];
else __wxAppCode__['packages/others/pages/news-message/index.wxml'] = $gwx3_XC_6('./packages/others/pages/news-message/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/others/pages/news-message/index.wxss'] = setCssToHead([
        [2, "./packages/others/sub-vendors.wxss"], ".", [1], "news-item{-webkit-box-shadow:", [0, 0], " ", [0, 0], " ", [0, 10], " ", [0, 0], " #e9e9e9;box-shadow:", [0, 0], " ", [0, 0], " ", [0, 10], " ", [0, 0], " #e9e9e9;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:", [0, 30], ";padding:", [0, 30], " ", [0, 46], ";width:100vw}\n.", [1], "news-item,.", [1], "news-item .", [1], "news-header{background-color:#fff;overflow:hidden}\n.", [1], "news-item .", [1], "news-header{-ms-flex-negative:0;-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 35], ";font-weight:700;height:content;position:relative;text-overflow:ellipsis;width:", [0, 610], "}\n.", [1], "news-item .", [1], "news-header-icon{height:", [0, 40], ";padding-top:", [0, 6], ";position:absolute;right:", [0, 50], ";width:", [0, 40], "}\n.", [1], "news-item .", [1], "news-content{-webkit-box-orient:vertical;-webkit-line-clamp:3;color:#979797;display:-webkit-box;font-size:", [0, 22], ";margin-top:", [0, 10], ";overflow:hidden;width:", [0, 610], "}\n.", [1], "news-item .", [1], "news-time{color:#979797;font-size:", [0, 20], ";height:", [0, 20], "}\n.", [1], "more{font-size:small;padding-bottom:", [0, 49.6183], ";text-align:center;width:100%}\n.", [1], "search-bar{background:#e8e8e8;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;width:100%;z-index:99}\n.", [1], "search-bar .", [1], "search{background-color:#fff;border-radius:", [0, 12], ";color:#333;font-size:", [0, 32], ";height:", [0, 80], ";line-height:", [0, 80], ";margin:", [0, 20], " auto;padding-left:", [0, 30], ";width:70%}\n.", [1], "search-bar .", [1], "search-btn{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;background-color:#007aff;border-radius:", [0, 12], ";color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 28], ";height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;margin:", [0, 20], " ", [0, 25], " ", [0, 20], " 0;width:", [0, 120], "}\n.", [1], "search-bar .", [1], "search-btn:active{background-color:#006eda}\n",
    ], undefined, {
        path: "./packages/others/pages/news-message/index.wxss"
    });
}