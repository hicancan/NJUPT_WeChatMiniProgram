$gwx3_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_5 || [];

        function gz$gwx3_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_5 = true;
        var x = ['./packages/others/pages/information/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_5_1()
            var o6 = e_[x[0]].i
            _ai(o6, x[1], e_, x[0], 1, 1)
            var f7 = _v()
            _(r, f7)
            var c8 = _oz(z, 1, e, s, gg)
            var h9 = _gd(x[0], c8, e_, d_)
            if (h9) {
                var o0 = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                f7.wxXCkey = 3
                h9(o0, o0, f7, gg)
                gg.f = cur_globalf
            } else _w(c8, x[0], 2, 14)
            o6.pop()
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
                g = "$gwx3_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/information/index.wxml'] = [$gwx3_XC_5, './packages/others/pages/information/index.wxml'];
else __wxAppCode__['packages/others/pages/information/index.wxml'] = $gwx3_XC_5('./packages/others/pages/information/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/others/pages/information/index.wxss'] = setCssToHead([
        [2, "./packages/others/sub-vendors.wxss"], ".", [1], "information .", [1], "info-tab{-ms-flex-align:center;-ms-flex-pack:distribute;-webkit-align-items:center;align-items:center;border-bottom:", [0, 2], " solid #e3e3e3;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 80], ";-webkit-justify-content:space-around;justify-content:space-around;position:relative;width:", [0, 750], "}\n.", [1], "information .", [1], "info-tab .", [1], "bottom-bar{border-bottom:", [0, 6], " solid #cc4545;bottom:0;left:0;position:absolute;-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);width:", [0, 90], "}\n.", [1], "information .", [1], "info-tab .", [1], "tab-item{-ms-flex-pack:center;color:#474747;font-weight:600;height:100%;-webkit-justify-content:center;justify-content:center;position:relative;width:25%}\n.", [1], "information .", [1], "info-tab .", [1], "tab-item,.", [1], "information .", [1], "info-top{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 30], "}\n.", [1], "information .", [1], "info-top{-ms-flex-pack:justify;border-bottom:", [0, 2], " solid #e3e3e3;-webkit-box-sizing:border-box;box-sizing:border-box;height:", [0, 80], ";-webkit-justify-content:space-between;justify-content:space-between;padding:0 ", [0, 30], "}\n.", [1], "information .", [1], "info-top .", [1], "title{color:#b4b4b4;font-weight:600;text-align:center}\n.", [1], "information .", [1], "info-top .", [1], "widgets{display:-webkit-flex;display:-ms-flexbox;display:flex;gap:", [0, 40], "}\n.", [1], "information .", [1], "info-top .", [1], "widgets .", [1], "icon{height:", [0, 40], ";width:", [0, 40], "}\n.", [1], "information .", [1], "info-main{position:relative}\n.", [1], "information .", [1], "info-main .", [1], "card-list{-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 30], ";min-height:100%;padding:", [0, 30], " ", [0, 20], " 0}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "null-data{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 20], ";-webkit-justify-content:center;justify-content:center}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "null-data .", [1], "null-img{height:auto;width:", [0, 500], "}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "null-data .", [1], "null-text{color:#e3e3e3;font-size:", [0, 30], ";text-align:center}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item{background:#f5f5f5;border-radius:", [0, 15], ";color:#888;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 24], ";white-space:normal}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item.", [1], "unread{background:-webkit-linear-gradient(315deg,#e5f4ff,#e8fbff);background:linear-gradient(-225deg,#e5f4ff,#e8fbff);color:#353535}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item.", [1], "unread .", [1], "right{background:#47cff5}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item.", [1], "noread{background:-webkit-linear-gradient(46deg,#f7e5a4,#fee082);background:linear-gradient(44deg,#f7e5a4,#fee082);color:#353535}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item.", [1], "noread .", [1], "left .", [1], "title .", [1], "dot,.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item.", [1], "noread .", [1], "right{background:#f6b500}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item .", [1], "right{border-bottom-right-radius:", [0, 15], ";border-top-right-radius:", [0, 15], ";overflow:hidden;width:", [0, 14], "}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item .", [1], "left{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 20], ";padding:", [0, 20], " ", [0, 40], ";word-break:break-all}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item .", [1], "left .", [1], "title{-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#353535;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 36], ";font-weight:700;gap:", [0, 15], "}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item .", [1], "left .", [1], "title .", [1], "dot{background:#47cff5;border-radius:50%;display:inline-block;min-height:", [0, 15], ";min-width:", [0, 15], "}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item .", [1], "left .", [1], "content{font-size:", [0, 28], "}\n.", [1], "information .", [1], "info-main .", [1], "card-list .", [1], "card-item .", [1], "left .", [1], "createtime{color:#888;font-size:", [0, 26], "}\n",
    ], undefined, {
        path: "./packages/others/pages/information/index.wxss"
    });
}