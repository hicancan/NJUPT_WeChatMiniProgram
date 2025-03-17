$gwx2_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_0 || [];

        function gz$gwx2_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx2_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx2_XC_0 = true;
        var x = ['./packages/library/pages/all-records/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx2_XC_0_1()
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
                g = "$gwx2_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/library/pages/all-records/index.wxml'] = [$gwx2_XC_0, './packages/library/pages/all-records/index.wxml'];
else __wxAppCode__['packages/library/pages/all-records/index.wxml'] = $gwx2_XC_0('./packages/library/pages/all-records/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/library/pages/all-records/index.wxss'] = setCssToHead([".", [1], "book-available-list{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:", [0, 30], ";margin-top:", [0, 20], "}\n.", [1], "book-available-list,.", [1], "book-available-list .", [1], "book-available-head{display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}\n.", [1], "book-available-list .", [1], "book-available-head{background-color:#afcaff;border-radius:", [0, 15], " ", [0, 15], " 0 0;gap:", [0, 5], ";padding:", [0, 25], " 0}\n.", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content{width:16.6666666667%}\n.", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content,.", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content-wide{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 24], ";height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-justify-content:center;justify-content:center}\n.", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content-wide{width:33.3333333333%}\n.", [1], "book-available-list .", [1], "book-available-item{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #e5e5e5;color:#0d0d0d;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 22], ";-webkit-justify-content:center;justify-content:center;margin-bottom:", [0, 4], ";padding:", [0, 20], " 0;width:100%}\n.", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content{width:16.6666666667%;word-break:break-all}\n.", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content,.", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content-wide{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-justify-content:center;justify-content:center}\n.", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content-wide{font-size:", [0, 24], ";width:33.3333333333%}\n", ], undefined, {
        path: "./packages/library/pages/all-records/index.wxss"
    });
}