$gwx_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];

        function gz$gwx_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
        var x = ['./pages/door/profile/feedback/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_4_1()
            var t1 = e_[x[0]].i
            _ai(t1, x[1], e_, x[0], 1, 1)
            var e2 = _v()
            _(r, e2)
            var b3 = _oz(z, 1, e, s, gg)
            var o4 = _gd(x[0], b3, e_, d_)
            if (o4) {
                var x5 = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                e2.wxXCkey = 3
                o4(x5, x5, e2, gg)
                gg.f = cur_globalf
            } else _w(b3, x[0], 2, 14)
            t1.pop()
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
                g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/feedback/index.wxml'] = [$gwx_XC_4, './pages/door/profile/feedback/index.wxml'];
else __wxAppCode__['pages/door/profile/feedback/index.wxml'] = $gwx_XC_4('./pages/door/profile/feedback/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/door/profile/feedback/index.wxss'] = setCssToHead([".", [1], "feedback-container{color:#353535;padding:0 ", [0, 25], ";position:relative}\n.", [1], "feedback-container .", [1], "main-title{border-bottom:", [0, 1], " solid #e3e3e3;font-size:", [0, 34], ";font-weight:700;padding:", [0, 30], " 0}\n.", [1], "feedback-container .", [1], "detail-wrap{position:relative}\n.", [1], "feedback-container .", [1], "detail-wrap:last-of-type .", [1], "detail-title{border-bottom:none}\n.", [1], "feedback-container .", [1], "detail-wrap .", [1], "detail-title{border-bottom:", [0, 1], " solid #e3e3e3;font-size:", [0, 30], ";height:", [0, 35], ";line-height:", [0, 35], ";overflow:hidden;padding:", [0, 30], " 0;position:relative;-webkit-transition:all .3s ease;transition:all .3s ease}\n.", [1], "feedback-container .", [1], "detail-wrap .", [1], "detail-title .", [1], "arrow-image{height:", [0, 17], ";position:absolute;right:", [0, 30], ";top:", [0, 30], ";-webkit-transition:all .3s ease;transition:all .3s ease;width:", [0, 31], "}\n.", [1], "feedback-container .", [1], "detail-wrap .", [1], "detail-title .", [1], "main-info{-webkit-box-sizing:border-box;box-sizing:border-box;color:#888;font-size:", [0, 24], ";padding:", [0, 30], " 0;position:relative}\n.", [1], "bottom{background:-webkit-linear-gradient(135deg,#abdcff,#6ae4ff);background:linear-gradient(-45deg,#abdcff,#6ae4ff);bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:", [0, 120], ";left:0;padding-bottom:max(env(safe-area-inset-bottom),", [0, 50], ");position:fixed;right:0;width:", [0, 750], "}\n.", [1], "bottom .", [1], "feedback{background-color:initial;color:#fff;font-size:", [0, 36], ";font-weight:700;line-height:", [0, 100], ";text-align:center}\n.", [1], "bottom .", [1], "feedback::after{border:none}\n", ], undefined, {
        path: "./pages/door/profile/feedback/index.wxss"
    });
}