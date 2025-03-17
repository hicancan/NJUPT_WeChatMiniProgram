$gwx_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];

        function gz$gwx_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
        var x = ['./pages/door/profile/user-qrcode/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_6_1()
            var lCB = e_[x[0]].i
            _ai(lCB, x[1], e_, x[0], 1, 1)
            var aDB = _v()
            _(r, aDB)
            var tEB = _oz(z, 1, e, s, gg)
            var eFB = _gd(x[0], tEB, e_, d_)
            if (eFB) {
                var bGB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                aDB.wxXCkey = 3
                eFB(bGB, bGB, aDB, gg)
                gg.f = cur_globalf
            } else _w(tEB, x[0], 2, 14)
            lCB.pop()
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
                g = "$gwx_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/user-qrcode/index.wxml'] = [$gwx_XC_6, './pages/door/profile/user-qrcode/index.wxml'];
else __wxAppCode__['pages/door/profile/user-qrcode/index.wxml'] = $gwx_XC_6('./pages/door/profile/user-qrcode/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/door/profile/user-qrcode/index.wxss'] = setCssToHead([".", [1], "body{background-color:#1a8cf4;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 32], ";height:100%;width:100%}\n.", [1], "body,.", [1], "body .", [1], "time-wrap{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "body .", [1], "time-wrap{background-color:#fff;border:", [0, 10], " solid #165ea2;border-radius:", [0, 32], ";width:", [0, 700], "}\n.", [1], "body .", [1], "time-wrap .", [1], "time{font-size:", [0, 80], "}\n.", [1], "body .", [1], "code{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;background-color:#fff;border:", [0, 10], " solid #165ea2;border-radius:", [0, 32], ";display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 20], ";height:", [0, 900], ";-webkit-justify-content:center;justify-content:center;position:relative;width:", [0, 700], "}\n.", [1], "body .", [1], "code .", [1], "border{height:100%;position:absolute;width:100%}\n.", [1], "body .", [1], "code .", [1], "description{color:#b9b9b9;font-size:", [0, 32], ";font-weight:600}\n.", [1], "body .", [1], "code .", [1], "loader{-webkit-animation:animloader 2s ease infinite;animation:animloader 2s ease infinite;display:block;margin:", [0, -120], " ", [0, -32], ";position:relative;-webkit-transform:translateY(", [0, 60], ");-ms-transform:translateY(", [0, 60], ");transform:translateY(", [0, 60], ")}\n.", [1], "body .", [1], "code .", [1], "loader,.", [1], "body .", [1], "code .", [1], "loader::after,.", [1], "body .", [1], "code .", [1], "loader::before{background:currentColor;border-radius:", [0, 8], ";-webkit-box-shadow:0 ", [0, 60], ",0 ", [0, -60], ";box-shadow:0 ", [0, 60], ",0 ", [0, -60], ";-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:", [0, 32], ";width:", [0, 32], "}\n.", [1], "body .", [1], "code .", [1], "loader::after,.", [1], "body .", [1], "code .", [1], "loader::before{-webkit-animation:animloader 2s ease .2s infinite;animation:animloader 2s ease .2s infinite;content:\x22\x22;left:", [0, 60], ";position:absolute;top:0}\n.", [1], "body .", [1], "code .", [1], "loader::before{-webkit-animation-delay:.4s;animation-delay:.4s;left:", [0, 120], "}\n@-webkit-keyframes animloader{0%{color:#1a8cf4;top:0}\n50%{color:hsla(0,0%,100%,.2);top:", [0, 60], "}\n100%{color:rgba(24,130,201,.333);top:0}\n}@keyframes animloader{0%{color:#1a8cf4;top:0}\n50%{color:hsla(0,0%,100%,.2);top:", [0, 60], "}\n100%{color:rgba(24,130,201,.333);top:0}\n}", ], undefined, {
        path: "./pages/door/profile/user-qrcode/index.wxss"
    });
}