$gwx3_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_3 || [];

        function gz$gwx3_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_3 = true;
        var x = ['./packages/others/pages/detail-info/news-detail/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_3_1()
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
                g = "$gwx3_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/detail-info/news-detail/index.wxml'] = [$gwx3_XC_3, './packages/others/pages/detail-info/news-detail/index.wxml'];
else __wxAppCode__['packages/others/pages/detail-info/news-detail/index.wxml'] = $gwx3_XC_3('./packages/others/pages/detail-info/news-detail/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/others/pages/detail-info/news-detail/index.wxss'] = setCssToHead([
        [2, "./packages/others/sub-vendors.wxss"], "wx-text,wx-view{font-size:", [0, 34], "}\n.", [1], "container{margin:0 auto;width:90%}\n.", [1], "container .", [1], "title{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:", [0, 50], ";font-weight:600;margin:", [0, 20], " ", [0, 0], "}\n.", [1], "container .", [1], "info{display:-webkit-flex;display:-ms-flexbox;display:flex;font-weight:400;padding-bottom:", [0, 20], ";padding-top:", [0, 20], ";position:relative}\n.", [1], "container .", [1], "info .", [1], "viewCount{display:block}\n.", [1], "container .", [1], "info .", [1], "date{display:block;margin-right:auto}\n.", [1], "h5-a{color:#0358b3;text-decoration:none}\n.", [1], "h5-a:hover{text-decoration:underline}\n.", [1], "h5-table{border-collapse:collapse;margin:", [0, 10], " auto;text-align:center;width:98%}\n.", [1], "h5-td,.", [1], "h5-th{border:", [0, 1], " solid #ddd;padding:", [0, 8], ";text-align:center;vertical-align:middle}\n.", [1], "h5-tr:nth-child(odd){background-color:#f9f9f9}\n.", [1], "h5-table{border:", [0, 1], " solid #ccc;font-size:", [0, 18], "!important;width:100%}\n.", [1], "h5-table,.", [1], "h5-tbody{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n.", [1], "h5-table,.", [1], "h5-tbody,.", [1], "h5-tr{display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 24], "!important}\n.", [1], "h5-tr{border-bottom:", [0, 1], " solid #ccc;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}\n.", [1], "h5-tr .", [1], "h5-td{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;max-height:", [0, 150], ";overflow:scroll;width:", [0, 20], "}\n.", [1], "h5-tr .", [1], "h5-td .", [1], "h5-span{font-size:", [0, 24], "!important}\n.", [1], "h5-span{font-size:", [0, 34], "!important}\n.", [1], "h5-td{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;padding:", [0, 8], "}\n.", [1], "h5-td,.", [1], "h5-td .", [1], "h5-span{font-size:", [0, 24], "!important}\n.", [1], "h5-td .", [1], "h5-span{position:relative;top:0}\n.", [1], "h5-p .", [1], "h5-a,.", [1], "h5-p .", [1], "h5-a .", [1], "h5-span,.", [1], "h5-td .", [1], "h5-a{font-size:", [0, 24], "!important}\n.", [1], "h5-p .", [1], "h5-a .", [1], "h5-span{display:block}\n",
    ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/others/pages/detail-info/news-detail/index.wxss:3:764)", {
        path: "./packages/others/pages/detail-info/news-detail/index.wxss"
    });
}