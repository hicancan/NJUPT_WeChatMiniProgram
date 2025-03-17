$gwx_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];

        function gz$gwx_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
        var x = ['./pages/door/profile/about/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_2_1()
            var bO = e_[x[0]].i
            _ai(bO, x[1], e_, x[0], 1, 1)
            var oP = _v()
            _(r, oP)
            var xQ = _oz(z, 1, e, s, gg)
            var oR = _gd(x[0], xQ, e_, d_)
            if (oR) {
                var fS = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                oP.wxXCkey = 3
                oR(fS, fS, oP, gg)
                gg.f = cur_globalf
            } else _w(xQ, x[0], 2, 14)
            bO.pop()
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
                g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/about/index.wxml'] = [$gwx_XC_2, './pages/door/profile/about/index.wxml'];
else __wxAppCode__['pages/door/profile/about/index.wxml'] = $gwx_XC_2('./pages/door/profile/about/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/door/profile/about/index.wxss'] = setCssToHead([".", [1], "header{background-size:contain;height:", [0, 340], ";text-align:center}\n.", [1], "header .", [1], "header-logo{margin-top:", [0, -70], ";width:", [0, 390], "}\n.", [1], "body-head{font-size:", [0, 34], ";margin-bottom:", [0, 30], ";text-align:center}\n.", [1], "body-content{color:#888;font-size:", [0, 32], ";line-height:200%;padding:0 ", [0, 60], ";text-align:justify;text-indent:", [0, 64], "}\n.", [1], "footer{font-size:", [0, 24], ";padding:", [0, 100], " 0 max(env(safe-area-inset-bottom),", [0, 50], ");text-align:center}\n.", [1], "footer .", [1], "footer-dialog-btn{color:#4ad1f4;margin:", [0, 15], " 0}\n.", [1], "footer .", [1], "footer-version{color:#7d7d7d}\n", ], undefined, {
        path: "./pages/door/profile/about/index.wxss"
    });
}