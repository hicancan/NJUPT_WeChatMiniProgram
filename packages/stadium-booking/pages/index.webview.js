$gwx5_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_1 || [];

        function gz$gwx5_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx5_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx5_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx5_XC_1 = true;
        var x = ['./packages/stadium-booking/pages/index.wxml', '../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx5_XC_1_1()
            var oH = e_[x[0]].i
            _ai(oH, x[1], e_, x[0], 1, 1)
            var cI = _v()
            _(r, cI)
            var oJ = _oz(z, 1, e, s, gg)
            var lK = _gd(x[0], oJ, e_, d_)
            if (lK) {
                var aL = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                cI.wxXCkey = 3
                lK(aL, aL, cI, gg)
                gg.f = cur_globalf
            } else _w(oJ, x[0], 2, 14)
            oH.pop()
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
                g = "$gwx5_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/stadium-booking/pages/index.wxml'] = [$gwx5_XC_1, './packages/stadium-booking/pages/index.wxml'];
else __wxAppCode__['packages/stadium-booking/pages/index.wxml'] = $gwx5_XC_1('./packages/stadium-booking/pages/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/stadium-booking/pages/index.wxss'] = setCssToHead([".", [1], "card-container{-ms-flex-align:start;-ms-flex-item-align:stretch;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-self:stretch;align-self:stretch;background:#fff;border-radius:", [0, 19.084], ";-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:", [0, 293.8931], ";margin:", [0, 20.9924], " auto;padding:", [0, 20.9924], " 0;width:", [0, 702.2901], "}\n.", [1], "card-container,.", [1], "card-container .", [1], "header{display:-webkit-flex;display:-ms-flexbox;display:flex}\n.", [1], "card-container .", [1], "header{-ms-flex-align:center;-webkit-align-items:center;align-items:center;height:", [0, 64.8855], ";margin:0 auto;width:", [0, 637.4046], "}\n.", [1], "card-container .", [1], "header .", [1], "type-icon{background-size:cover;height:", [0, 45.8015], ";margin-right:", [0, 19.084], ";width:", [0, 45.8015], "}\n.", [1], "card-container .", [1], "header .", [1], "type-text{-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#242424;font-size:", [0, 22.9008], ";margin-right:", [0, 9.542], "}\n.", [1], "card-container .", [1], "header .", [1], "order-type,.", [1], "card-container .", [1], "header .", [1], "type-text{font-family:SF Pro,sans-serif;font-style:normal;font-weight:400;line-height:normal}\n.", [1], "card-container .", [1], "header .", [1], "order-type{color:#d4d4d4;font-size:", [0, 19.084], "}\n.", [1], "card-container .", [1], "header .", [1], "status{color:#39b1d7;font-family:SF Pro,sans-serif;font-size:", [0, 26.7176], ";font-style:normal;font-weight:400;margin-left:auto}\n.", [1], "card-container .", [1], "main{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;width:", [0, 637.4046], "}\n.", [1], "card-container .", [1], "main .", [1], "position{font-weight:510;height:", [0, 40.0763], ";margin:", [0, 19.084], " 0;width:1}\n.", [1], "card-container .", [1], "main .", [1], "booking-time,.", [1], "card-container .", [1], "main .", [1], "position{color:#000;font-family:SF Pro,sans-serif;font-size:", [0, 34.3511], ";font-style:normal;line-height:normal}\n.", [1], "card-container .", [1], "main .", [1], "booking-time{font-weight:400;height:", [0, 24.8092], "}\n.", [1], "card-container .", [1], "footer{-ms-flex-align:center;-ms-flex-pack:justify;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 68.8855], ";-webkit-justify-content:space-between;justify-content:space-between;margin:", [0, 30.084], " auto 0;width:", [0, 637.4046], "}\n.", [1], "card-container .", [1], "footer .", [1], "booking-pay{font-size:", [0, 22.9008], "}\n.", [1], "card-container .", [1], "footer .", [1], "btn-pay{border:", [0, 1.9084], " solid #37b3db;border-radius:", [0, 9.542], ";color:#39b0d6}\n.", [1], "card-container .", [1], "footer .", [1], "btn-cancel,.", [1], "card-container .", [1], "footer .", [1], "btn-pay{-ms-flex-pack:justify;-ms-flex-align:center;-webkit-align-items:center;align-items:center;font-family:SF Pro,sans-serif;font-size:", [0, 22.9008], ";font-weight:400;height:", [0, 59.1603], ";-webkit-justify-content:space-between;justify-content:space-between;line-height:", [0, 59.1603], ";text-align:center;width:", [0, 166.0305], "}\n.", [1], "card-container .", [1], "footer .", [1], "btn-cancel{border:", [0, 1.9084], " solid #ff4d4f;border-radius:", [0, 9.542], ";color:#ff4d4f}\n.", [1], "card-container:first-child{margin-top:", [0, 9.542], "}\n.", [1], "container{background:#fbfbfb}\n.", [1], "container,.", [1], "container .", [1], "notice{-webkit-box-sizing:border-box;box-sizing:border-box}\n.", [1], "container .", [1], "notice{background:#fff;border-radius:", [0, 19.084], ";margin:0 auto;padding:", [0, 30.5344], " ", [0, 34.3511], ";position:relative;top:", [0, 19.084], ";width:", [0, 702.2901], "}\n.", [1], "container .", [1], "notice .", [1], "notice-title{-ms-flex-pack:justify;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:SF Pro,sans-serif;font-size:", [0, 26.7176], ";font-style:normal;font-weight:510;height:", [0, 40.0763], ";-webkit-justify-content:space-between;justify-content:space-between;line-height:normal;padding:", [0, 19.084], " 0;width:", [0, 633.5878], "}\n.", [1], "container .", [1], "notice .", [1], "notice-title .", [1], "notice-more{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end;color:rgba(0,0,0,.5);font-size:", [0, 22.9008], ";font-style:normal;font-weight:400;line-height:normal;text-align:right}\n.", [1], "container .", [1], "notice .", [1], "notice-content .", [1], "notice-item{-ms-flex-pack:justify;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between;width:", [0, 633.5878], "}\n.", [1], "container .", [1], "notice .", [1], "notice-content .", [1], "notice-item .", [1], "notice-icon{-ms-flex-align:center;-webkit-align-items:center;align-items:center;height:", [0, 40.0763], ";margin-right:", [0, 19.084], ";width:", [0, 40.0763], "}\n.", [1], "container .", [1], "notice .", [1], "notice-content .", [1], "notice-item .", [1], "notice-desc{-ms-flex-item-align:center;color:#000;line-height:normal;max-width:", [0, 350.1298], ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "container .", [1], "notice .", [1], "notice-content .", [1], "notice-item .", [1], "notice-desc,.", [1], "container .", [1], "notice .", [1], "notice-content .", [1], "notice-item .", [1], "notice-time{-webkit-align-self:center;align-self:center;font-family:Inter,sans-serif;font-size:", [0, 22.9008], ";font-style:normal;font-weight:400}\n.", [1], "container .", [1], "notice .", [1], "notice-content .", [1], "notice-item .", [1], "notice-time{-ms-flex-align:end;-ms-flex-item-align:center;-webkit-align-items:flex-end;align-items:flex-end;color:rgba(0,0,0,.5);text-align:right}\n.", [1], "container .", [1], "items{-ms-flex-align:start;-ms-flex-negative:0;-ms-flex-item-align:stretch;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-self:stretch;align-self:stretch;background-color:initial;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 19.084], ";height:", [0, 190.8397], ";margin:0 auto;position:relative;top:", [0, 35.084], ";width:", [0, 702.2901], "}\n.", [1], "container .", [1], "items .", [1], "item{-ms-flex-pack:center;-webkit-backdrop-filter:blur(", [0, 2], ");backdrop-filter:blur(", [0, 2], ");border-radius:", [0, 19.084], ";-webkit-box-shadow:0 ", [0, 1], " ", [0, 7], " 0 rgba(0,0,0,.03);box-shadow:0 ", [0, 1], " ", [0, 7], " 0 rgba(0,0,0,.03);height:", [0, 190.8397], ";-webkit-justify-content:center;justify-content:center;text-align:center;width:", [0, 161.2595], "}\n.", [1], "container .", [1], "items .", [1], "item .", [1], "item-icon{background-size:cover;display:block;height:", [0, 114.5038], ";margin:0 auto;width:", [0, 114.5038], "}\n.", [1], "container .", [1], "items .", [1], "item .", [1], "item-text{position:relative;top:", [0, 19.084], "}\n.", [1], "container .", [1], "my-booking{margin:0 auto;position:relative;top:", [0, 57.2519], ";width:", [0, 702.2901], "}\n.", [1], "container .", [1], "my-booking .", [1], "my-booking-title{display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:SF Pro,sans-serif;font-size:", [0, 26.7176], ";font-style:normal;font-weight:510;line-height:normal;margin-left:", [0, 19.084], ";padding:", [0, 19.084], " ", [0, 19.084], " ", [0, 9.542], ";width:", [0, 234.7328], "}\n.", [1], "container .", [1], "my-booking .", [1], "my-booking-title .", [1], "booking-icon{background-size:cover;height:", [0, 41.0763], ";margin-right:", [0, 19.084], ";width:", [0, 41.0763], "}\n.", [1], "container .", [1], "my-booking .", [1], "booking-list{background:#fbfbfb;min-height:", [0, 293.8931], ";padding-bottom:", [0, 13.3588], "}\n", ], undefined, {
        path: "./packages/stadium-booking/pages/index.wxss"
    });
}