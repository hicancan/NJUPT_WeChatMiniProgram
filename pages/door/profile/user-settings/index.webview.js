$gwx_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];

        function gz$gwx_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
        var x = ['./pages/door/profile/user-settings/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_7_1()
            var xIB = e_[x[0]].i
            _ai(xIB, x[1], e_, x[0], 1, 1)
            var oJB = _v()
            _(r, oJB)
            var fKB = _oz(z, 1, e, s, gg)
            var cLB = _gd(x[0], fKB, e_, d_)
            if (cLB) {
                var hMB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                oJB.wxXCkey = 3
                cLB(hMB, hMB, oJB, gg)
                gg.f = cur_globalf
            } else _w(fKB, x[0], 2, 14)
            xIB.pop()
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
                g = "$gwx_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/user-settings/index.wxml'] = [$gwx_XC_7, './pages/door/profile/user-settings/index.wxml'];
else __wxAppCode__['pages/door/profile/user-settings/index.wxml'] = $gwx_XC_7('./pages/door/profile/user-settings/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/door/profile/user-settings/index.wxss'] = setCssToHead([".", [1], "collapse{-ms-flex-align:start;display:grid;grid-template-columns:100%;grid-template-rows:0fr 0fr;margin-top:3%;place-items:center;-webkit-align-items:start;align-items:start;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;position:relative;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:100%}\n.", [1], "collapse .", [1], "option-item{-ms-flex-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 138], ";padding-left:5%;position:relative;width:90%}\n.", [1], "collapse .", [1], "option-item wx-switch{position:absolute;right:5%}\n.", [1], "collapse .", [1], "notice-value-area{background-color:#fff;border-radius:0 0 ", [0, 25], " ", [0, 25], ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:95%}\n.", [1], "collapse .", [1], "notice-value-area,.", [1], "collapse .", [1], "notice-value-area .", [1], "notice-switch{display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;position:relative}\n.", [1], "collapse .", [1], "notice-value-area .", [1], "notice-switch{-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #dfe4ea;-webkit-box-sizing:border-box;box-sizing:border-box;color:#57606f;font-size:smaller;height:", [0, 93], ";padding-left:8%;width:100%}\n.", [1], "collapse .", [1], "notice-value-area .", [1], "notice-switch .", [1], "switch-btn-qw{position:absolute;right:5%}\n.", [1], "collapse .", [1], "notice-value-area .", [1], "notice-value-input{-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #dfe4ea;-webkit-box-sizing:border-box;box-sizing:border-box;color:#57606f;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:smaller;height:", [0, 93], ";padding-left:8%;position:relative;width:100%}\n.", [1], "collapse .", [1], "notice-value-area .", [1], "notice-value-input:last-child{border:0}\n.", [1], "collapse .", [1], "notice-value-area .", [1], "notice-value-input wx-Input{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-radius:5%;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 50], ";-webkit-justify-content:center;justify-content:center;position:absolute;right:", [0, 80], ";width:", [0, 55], "}\n.", [1], "collapse .", [1], "notice-value-area .", [1], "notice-value-input .", [1], "unit{position:absolute;right:", [0, 52], "}\n.", [1], "collapse.", [1], "unfold{grid-template-rows:0fr 1fr;overflow-y:auto}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/door/profile/user-settings/index.wxss:3:2607)", {
        path: "./pages/door/profile/user-settings/index.wxss"
    });
}