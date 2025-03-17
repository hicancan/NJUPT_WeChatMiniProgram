$gwx5_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_2 || [];

        function gz$gwx5_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx5_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx5_XC_2 = true;
        var x = ['./packages/stadium-booking/pages/notices/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx5_XC_2_1()
            var eN = e_[x[0]].i
            _ai(eN, x[1], e_, x[0], 1, 1)
            var bO = _v()
            _(r, bO)
            var oP = _oz(z, 1, e, s, gg)
            var xQ = _gd(x[0], oP, e_, d_)
            if (xQ) {
                var oR = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                bO.wxXCkey = 3
                xQ(oR, oR, bO, gg)
                gg.f = cur_globalf
            } else _w(oP, x[0], 2, 14)
            eN.pop()
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
                g = "$gwx5_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/stadium-booking/pages/notices/index.wxml'] = [$gwx5_XC_2, './packages/stadium-booking/pages/notices/index.wxml'];
else __wxAppCode__['packages/stadium-booking/pages/notices/index.wxml'] = $gwx5_XC_2('./packages/stadium-booking/pages/notices/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/stadium-booking/pages/notices/index.wxss'] = setCssToHead([".", [1], "card-container{-ms-flex-align:start;-ms-flex-item-align:stretch;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-self:stretch;align-self:stretch;background:#fff;border-radius:", [0, 19.084], ";-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 19.084], ";margin:0 auto;padding:", [0, 30.5344], " ", [0, 34.3511], ";width:", [0, 702.2901], "}\n.", [1], "card-container,.", [1], "card-container .", [1], "header{display:-webkit-flex;display:-ms-flexbox;display:flex}\n.", [1], "card-container .", [1], "header{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:", [0, 633.5878], "}\n.", [1], "card-container .", [1], "header .", [1], "notice-item{display:-webkit-flex;display:-ms-flexbox;display:flex}\n.", [1], "card-container .", [1], "header .", [1], "notice-icon{-ms-flex-align:center;-webkit-align-items:center;align-items:center;height:", [0, 40.0763], ";margin-right:", [0, 19.084], ";width:", [0, 40.0763], "}\n.", [1], "card-container .", [1], "header .", [1], "notice-desc{color:#000;font-family:SF Pro,sans-serif;font-size:", [0, 26.7176], ";font-style:normal;font-weight:510;line-height:normal}\n.", [1], "card-container .", [1], "header .", [1], "notice-time{-ms-flex-align:end;-ms-flex-item-align:center;-webkit-align-items:flex-end;align-items:flex-end;-webkit-align-self:center;align-self:center;color:rgba(0,0,0,.5);text-align:right}\n.", [1], "card-container .", [1], "header .", [1], "notice-time,.", [1], "card-container .", [1], "main{font-family:Inter,sans-serif;font-size:", [0, 22.9008], ";font-style:normal;font-weight:400}\n.", [1], "card-container .", [1], "main{color:#000;line-height:normal;width:", [0, 633.5878], "}\n.", [1], "notice-wrap{background-color:#fbfbfb}\n.", [1], "notice-wrap .", [1], "notices-container{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;background-color:#fbfbfb;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 19.084], ";margin:0 auto;padding:", [0, 30.5344], " ", [0, 24.8092], "}\n", ], undefined, {
        path: "./packages/stadium-booking/pages/notices/index.wxss"
    });
}