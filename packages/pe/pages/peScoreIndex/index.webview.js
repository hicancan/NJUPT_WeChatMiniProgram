$gwx4_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_1 || [];

        function gz$gwx4_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx4_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx4_XC_1 = true;
        var x = ['./packages/pe/pages/peScoreIndex/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx4_XC_1_1()
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
                g = "$gwx4_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/pe/pages/peScoreIndex/index.wxml'] = [$gwx4_XC_1, './packages/pe/pages/peScoreIndex/index.wxml'];
else __wxAppCode__['packages/pe/pages/peScoreIndex/index.wxml'] = $gwx4_XC_1('./packages/pe/pages/peScoreIndex/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/pe/pages/peScoreIndex/index.wxss'] = setCssToHead([".", [1], "tabs-folder-view .", [1], "tab-list{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 120], ";z-index:0}\n.", [1], "tabs-folder-view .", [1], "tab-list .", [1], "tab-list-item{background-color:gray;border-radius:", [0, 20], " ", [0, 20], " 0 0;color:#fff;font-size:", [0, 32], ";font-weight:600;height:", [0, 40], ";opacity:.7;padding:", [0, 20], " ", [0, 40], ";-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}\n.", [1], "tabs-folder-view .", [1], "tab-list .", [1], "tab-list-item-actived{background-color:#11c592;height:", [0, 50], ";opacity:1}\n.", [1], "tabs-folder-view .", [1], "tab-panels{min-height:78vh;overflow:unset;z-index:10}\n.", [1], "tabs-folder-view .", [1], "tab-panel-item{height:unset!important;overflow:unset;overflow-x:hidden}\n.", [1], "score-card-view-body .", [1], "title-card{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-radius:", [0, 20], " ", [0, 20], " 0 0;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:", [0, 258], ";-webkit-justify-content:center;justify-content:center;margin-left:", [0, 20], ";margin-right:", [0, 20], ";width:auto}\n.", [1], "score-card-view-body .", [1], "title-card .", [1], "title{color:#fff;font-size:", [0, 60], ";font-weight:600}\n.", [1], "score-card-view-body .", [1], "title-card .", [1], "description{color:#fff;font-size:", [0, 37], ";font-weight:500}\n.", [1], "score-card-view-body .", [1], "score-body-wrap{overflow:auto}\n.", [1], "score-card-view-body .", [1], "score-body{-webkit-box-sizing:border-box;box-sizing:border-box;gap:", [0, 32], ";margin-bottom:", [0, 60], ";padding:", [0, 50], " ", [0, 22], " ", [0, 20], "}\n.", [1], "score-card-view-body .", [1], "score-body,.", [1], "score-card-view-body .", [1], "score-body .", [1], "score-item-body{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n.", [1], "score-card-view-body .", [1], "score-body .", [1], "score-item-body{min-height:0;z-index:0}\n.", [1], "score-card-view-body .", [1], "score-body .", [1], "score-item-body .", [1], "score-item{-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-top:", [0, 1], " solid #ededed;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-left:", [0, 38], ";padding-right:", [0, 38], "}\n.", [1], "score-card-view-body .", [1], "score-body .", [1], "score-item-body .", [1], "score-item .", [1], "title{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 100], ";width:40vw}\n.", [1], "score-card-view-body .", [1], "score-body .", [1], "score-item-body .", [1], "score-item .", [1], "score{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 100], ";width:30vw}\n.", [1], "score-card-view-body .", [1], "score-body .", [1], "score-item-body .", [1], "score-item .", [1], "credit{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 100], ";width:20vw}\n.", [1], "score-card-view-body .", [1], "score-body .", [1], "score-item-body .", [1], "score-item.", [1], "title{font-size:", [0, 32], ";font-weight:600}\n.", [1], "score-card-view-body .", [1], "collapse{-ms-flex-negative:0;border-radius:", [0, 20], ";-webkit-box-shadow:0 0 ", [0, 10], " rgba(0,0,0,.1);box-shadow:0 0 ", [0, 10], " rgba(0,0,0,.1);-webkit-box-sizing:border-box;box-sizing:border-box;display:grid;-webkit-flex-shrink:0;flex-shrink:0;grid-template-columns:100%;grid-template-rows:0fr 0fr;overflow:hidden;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}\n.", [1], "score-card-view-body .", [1], "collapse .", [1], "collapse-title{-ms-flex-pack:justify;-ms-flex-align:center;-webkit-align-items:center;align-items:center;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 34], ";font-weight:500;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 22], " ", [0, 38], " ", [0, 28], ";z-index:10}\n.", [1], "score-card-view-body .", [1], "collapse .", [1], "collapse-title .", [1], "icon{background:url(\x22data:image/svg+xml;charset\x3dutf-8,%3Csvg width\x3d\x2721\x27 height\x3d\x2722\x27 fill\x3d\x27none\x27 xmlns\x3d\x27http://www.w3.org/2000/svg\x27%3E%3Cpath d\x3d\x27M2.748 5.73 1.641 7.103l8.436 8.25.553.544.554-.544 8.436-8.25-1.107-1.375-7.883 7.706-7.882-7.706Z\x27 fill\x3d\x27%23000\x27/%3E%3C/svg%3E\x22);background-size:cover;height:", [0, 34], ";-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:", [0, 34], "}\n.", [1], "score-card-view-body .", [1], "collapse .", [1], "collapse-title .", [1], "invert{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}\n.", [1], "score-card-view-body .", [1], "collapse.", [1], "unfold{grid-template-rows:0fr 1fr;overflow-y:auto}\n", ], undefined, {
        path: "./packages/pe/pages/peScoreIndex/index.wxss"
    });
}