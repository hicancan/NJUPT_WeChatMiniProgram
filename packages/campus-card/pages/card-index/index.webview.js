$gwx0_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_2 || [];

        function gz$gwx0_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_2 = true;
        var x = ['./packages/campus-card/pages/card-index/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_2_1()
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
                g = "$gwx0_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/campus-card/pages/card-index/index.wxml'] = [$gwx0_XC_2, './packages/campus-card/pages/card-index/index.wxml'];
else __wxAppCode__['packages/campus-card/pages/card-index/index.wxml'] = $gwx0_XC_2('./packages/campus-card/pages/card-index/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/campus-card/pages/card-index/index.wxss'] = setCssToHead([
        [2, "./packages/campus-card/sub-vendors.wxss"], ".", [1], "lost-container{display:grid;grid-template-columns:1fr 1fr;height:", [0, 332.6794], ";justify-items:center;margin:0 auto;place-content:space-evenly;width:84%}\n.", [1], "lost-container .", [1], "action{-ms-flex-pack:center;background:#fff;border:", [0, 2], " solid #000;border-radius:", [0, 18.1679], ";display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 102.4198], ";-webkit-justify-content:center;justify-content:center;justify-items:center;width:", [0, 234.8397], "}\n.", [1], "lost-container .", [1], "action .", [1], "text{-ms-flex-item-align:center;-webkit-align-self:center;align-self:center}\n.", [1], "container{backdrop-filter:blur(", [0, 10], ");-webkit-backdrop-filter:blur(", [0, 15], ");background-color:rgba(0,0,0,.3);height:100vh;position:fixed;width:100vw;z-index:3}\n.", [1], "button-click{background-color:#d0f5ff;background-image:none}\n.", [1], "container1{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden}\n.", [1], "bg{background-color:#f5f5f5;height:100vh;position:fixed;width:100vw;z-index:-2}\n.", [1], "index-head{-ms-flex-align:center;-ms-flex-pack:space-evenly;-webkit-align-items:center;align-items:center;background-color:#fff;color:#353535;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:", [0, 400], ";-webkit-justify-content:space-evenly;justify-content:space-evenly;position:relative;width:100%}\n.", [1], "index-head .", [1], "index-head-bg{height:", [0, 400], ";position:absolute;width:", [0, 750], ";z-index:0}\n.", [1], "tip{font-size:", [0, 24], ";z-index:1}\n.", [1], "tip:first-child{margin-top:", [0, 30], "}\n.", [1], "balance{font-size:", [0, 90], "}\n.", [1], "balance,.", [1], "card-text{font-weight:700;z-index:1}\n.", [1], "card-text{font-size:", [0, 30], "}\n.", [1], "list{margin:", [0, 20], " 0;padding-left:1%;width:100%}\n.", [1], "chart-container{background-color:#fff;height:auto;overflow:hidden;padding-top:", [0, 26], ";width:100%}\n.", [1], "chart-container .", [1], "title{color:#353535;font-size:", [0, 32], ";font-weight:700;margin:", [0, 30], " 0 0 ", [0, 20], "}\n.", [1], "tab-list{display:-webkit-flex;display:-ms-flexbox;display:flex;margin:", [0, 15], " 0 0 ", [0, 20], "}\n.", [1], "tab{border:", [0, 2], " solid #999ca0;border-radius:", [0, 60], ";color:#999ca0;font-size:", [0, 24], ";padding:", [0, 4], " ", [0, 16], "}\n.", [1], "tab:last-child{margin-left:", [0, 18.626], "}\n.", [1], "active{background-color:#47cff5;border:", [0, 2], " solid #47cff5;color:#fff}\n.", [1], "item-container{-ms-flex-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 98], ";padding:0 ", [0, 16], " 0 1%;position:relative}\n.", [1], "item-container .", [1], "content:last-child{border-style:none!important}\n.", [1], "iconx{height:", [0, 38], ";margin:0 ", [0, 45], " 0 ", [0, 25], ";width:", [0, 38], "}\n.", [1], "content{-ms-flex-align:center;-ms-flex-pack:justify;-webkit-align-items:center;align-items:center;border-bottom:", [0, 2], " solid #e3e3e3;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 96], ";-webkit-justify-content:space-between;justify-content:space-between;margin-right:", [0, 20], ";width:100%}\n.", [1], "iconRight{height:", [0, 35], ";width:", [0, 35], "}\n.", [1], "text{color:#353535;font-size:", [0, 32], "}\n.", [1], "canvas{height:", [0, 420], ";margin-top:", [0, 26], ";-webkit-transition:display .15s;transition:display .15s;width:", [0, 750], "}\n",
    ], undefined, {
        path: "./packages/campus-card/pages/card-index/index.wxss"
    });
}