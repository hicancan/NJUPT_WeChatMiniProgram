$gwx_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];

        function gz$gwx_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./pages/door/profile/update-log/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var f7 = e_[x[0]].i
            _ai(f7, x[1], e_, x[0], 1, 1)
            var c8 = _v()
            _(r, c8)
            var h9 = _oz(z, 1, e, s, gg)
            var o0 = _gd(x[0], h9, e_, d_)
            if (o0) {
                var cAB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                c8.wxXCkey = 3
                o0(cAB, cAB, c8, gg)
                gg.f = cur_globalf
            } else _w(h9, x[0], 2, 14)
            f7.pop()
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
                g = "$gwx_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/update-log/index.wxml'] = [$gwx_XC_5, './pages/door/profile/update-log/index.wxml'];
else __wxAppCode__['pages/door/profile/update-log/index.wxml'] = $gwx_XC_5('./pages/door/profile/update-log/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/door/profile/update-log/index.wxss'] = setCssToHead([".", [1], "log-item-wrap{padding:0 ", [0, 30], "}\n.", [1], "log-item-wrap .", [1], "item-header{color:#f65357;font-size:", [0, 36], ";margin:", [0, 2], " 0}\n.", [1], "log-item-wrap .", [1], "item-header .", [1], "header-round{height:", [0, 40], ";margin:0 ", [0, 48], " 0 0;vertical-align:middle;width:", [0, 40], "}\n.", [1], "log-item-wrap .", [1], "item-header wx-text{vertical-align:middle}\n.", [1], "log-item-wrap .", [1], "item-body{border-left:", [0, 4], " solid #6f8392;margin:0 ", [0, 30], " 0 ", [0, 20], ";padding:", [0, 20], " 0 ", [0, 40], "}\n.", [1], "log-item-wrap .", [1], "item-body .", [1], "change-item{color:#a4b6c2;font-size:", [0, 30], ";line-height:1.5;margin-left:", [0, 68], "}\n.", [1], "toTop{background:#f65758;border-radius:50%;color:#fff;display:inline-block;font-size:", [0, 36], ";height:", [0, 80], ";line-height:", [0, 80], ";margin-bottom:max(env(safe-area-inset-bottom),", [0, 50], ");margin-left:", [0, 10], ";position:relative;text-align:center;width:", [0, 80], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/door/profile/update-log/index.wxss:3:995)", {
        path: "./pages/door/profile/update-log/index.wxss"
    });
}