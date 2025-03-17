$gwx3_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_8 || [];

        function gz$gwx3_XC_8_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_8_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_8 = true;
        var x = ['./packages/others/pages/school-bus/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_8_1()
            var oNB = e_[x[0]].i
            _ai(oNB, x[1], e_, x[0], 1, 1)
            var cOB = _v()
            _(r, cOB)
            var oPB = _oz(z, 1, e, s, gg)
            var lQB = _gd(x[0], oPB, e_, d_)
            if (lQB) {
                var aRB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                cOB.wxXCkey = 3
                lQB(aRB, aRB, cOB, gg)
                gg.f = cur_globalf
            } else _w(oPB, x[0], 2, 14)
            oNB.pop()
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
                g = "$gwx3_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/school-bus/index.wxml'] = [$gwx3_XC_8, './packages/others/pages/school-bus/index.wxml'];
else __wxAppCode__['packages/others/pages/school-bus/index.wxml'] = $gwx3_XC_8('./packages/others/pages/school-bus/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/others/pages/school-bus/index.wxss'] = setCssToHead([
        [2, "./packages/others/sub-vendors.wxss"], ".", [1], "tabs-folder-view .", [1], "tab-list{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 120], ";z-index:0}\n.", [1], "tabs-folder-view .", [1], "tab-list .", [1], "tab-list-item{background-color:gray;border-radius:", [0, 20], " ", [0, 20], " 0 0;color:#fff;font-size:", [0, 32], ";font-weight:600;height:", [0, 40], ";opacity:.7;padding:", [0, 20], " ", [0, 40], ";-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}\n.", [1], "tabs-folder-view .", [1], "tab-list .", [1], "tab-list-item-actived{background-color:#11c592;height:", [0, 50], ";opacity:1}\n.", [1], "tabs-folder-view .", [1], "tab-panels{min-height:78vh;overflow:unset;z-index:10}\n.", [1], "tabs-folder-view .", [1], "tab-panel-item{height:unset!important;overflow:unset;overflow-x:hidden}\n.", [1], "bus-container{padding:", [0, 40], "}\n.", [1], "bus-container .", [1], "bus-during{text-align:right}\n.", [1], "bus-container .", [1], "bus-sites-wrapper,.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container{-ms-flex-pack:justify;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:", [0, 250], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site-via-container{-ms-flex-pack:distribute;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:0;-webkit-justify-content:space-around;justify-content:space-around;overflow:hidden;-webkit-transform-origin:50% 0 0;-ms-transform-origin:50% 0 0;transform-origin:50% 0 0;-webkit-transition:all .4s ease-out;transition:all .4s ease-out}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site{margin:", [0, 22.5], " 0}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site.", [1], "start{margin-top:0}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site.", [1], "end{margin-bottom:", [0, 20], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "tips{border-bottom:", [0, 1], " solid #ccc;color:#353535;font-size:", [0, 28], ";margin-left:", [0, 52], ";min-width:", [0, 150], ";padding-bottom:", [0, 3], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "tips.", [1], "via{font-size:", [0, 22], ";opacity:.8}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "text{margin-left:", [0, 16], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "text.", [1], "via{font-size:", [0, 25], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "circle-container{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 36], ";-webkit-justify-content:center;justify-content:center;width:", [0, 36], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "circle-container .", [1], "ring,.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "circle-container .", [1], "round{background-color:#fff;border:", [0, 8], " solid #fff;border-radius:50%;height:", [0, 20], ";width:", [0, 20], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "circle-container .", [1], "vertical-line{height:", [0, 120], ";margin:0 auto;width:", [0, 8], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "circle-container .", [1], "vertical-line.", [1], "start,.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "circle-container .", [1], "vertical-line.", [1], "via{-webkit-transform:translateY(", [0, 20], ");-ms-transform:translateY(", [0, 20], ");transform:translateY(", [0, 20], ")}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "sites-container .", [1], "site .", [1], "site-text .", [1], "circle-container .", [1], "vertical-line.", [1], "end{-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "arrow-container{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "arrow-container .", [1], "arrow-down{display:inline-block;height:", [0, 30], ";margin-left:", [0, 10], ";position:relative;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;width:", [0, 60], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "arrow-container .", [1], "arrow-down::after{border-color:#999;border-style:solid;border-width:0 ", [0, 2], " ", [0, 2], " 0;content:\x22 \x22;display:inline-block;height:", [0, 18], ";margin-top:", [0, -14], ";position:absolute;right:", [0, 10], ";top:50%;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);-ms-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;width:", [0, 18], "}\n.", [1], "bus-container .", [1], "bus-sites-wrapper .", [1], "arrow-container .", [1], "arrow-down.", [1], "active{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}\n.", [1], "card-wrapper{border-radius:", [0, 35], ";height:", [0, 320], ";margin:0 auto;overflow:hidden;width:90vw;z-index:99}\n.", [1], "card-wrapper,.", [1], "card-wrapper .", [1], "card-inner{display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}\n.", [1], "card-wrapper .", [1], "card-inner{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:center;justify-content:center;width:100%}\n.", [1], "card-wrapper .", [1], "card-inner .", [1], "bg{height:100%;position:absolute;width:100%;z-index:-1}\n.", [1], "card-wrapper .", [1], "card-inner .", [1], "question-mark{height:", [0, 40], ";position:absolute;right:", [0, 40], ";top:", [0, 30], ";width:", [0, 40], "}\n.", [1], "card-wrapper .", [1], "card-inner .", [1], "bus-route{-ms-flex-pack:distribute;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60%;-webkit-justify-content:space-around;justify-content:space-around;width:90%}\n.", [1], "card-wrapper .", [1], "card-inner .", [1], "bus-route .", [1], "arrow{height:", [0, 50], ";width:", [0, 200], "}\n.", [1], "card-wrapper .", [1], "card-inner .", [1], "bus-route .", [1], "destination{font-size:1.6rem;letter-spacing:.2rem}\n.", [1], "card-wrapper .", [1], "card-inner .", [1], "tips{font-size:", [0, 24], ";height:", [0, 56], ";line-height:", [0, 56], ";text-align:center;width:100%}\n.", [1], "school-bus{height:100%;position:relative;width:100%}\n.", [1], "school-bus .", [1], "tips{padding:0 ", [0, 30], "}\n.", [1], "school-bus .", [1], "tips .", [1], "text{font-size:", [0, 25], ";line-height:2}\n.", [1], "school-bus .", [1], "tips .", [1], "text.", [1], "indent{text-indent:", [0, 50], "}\n.", [1], "school-bus .", [1], "tabs-folder-view .", [1], "tab-panels{-webkit-transform:translateY(", [0, -15], ");-ms-transform:translateY(", [0, -15], ");transform:translateY(", [0, -15], ")}\n.", [1], "school-bus .", [1], "tabs-folder-view .", [1], "tab-panels .", [1], "tab-panel-item{overflow:hidden}\n.", [1], "school-bus .", [1], "divider{background-color:#f5f5f5;height:", [0, 30], ";width:100vw}\n",
    ], undefined, {
        path: "./packages/others/pages/school-bus/index.wxss"
    });
}