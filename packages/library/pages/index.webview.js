$gwx2_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_2 || [];

        function gz$gwx2_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx2_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx2_XC_2 = true;
        var x = ['./packages/library/pages/index.wxml', '../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx2_XC_2_1()
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
                g = "$gwx2_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/library/pages/index.wxml'] = [$gwx2_XC_2, './packages/library/pages/index.wxml'];
else __wxAppCode__['packages/library/pages/index.wxml'] = $gwx2_XC_2('./packages/library/pages/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/library/pages/index.wxss'] = setCssToHead([".", [1], "search-container .", [1], "search-bar-container{height:", [0, 150], ";width:", [0, 750], "}\n.", [1], "search-container .", [1], "search-bar-container .", [1], "search-bar{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 30], ";height:", [0, 60], ";padding:0 ", [0, 40], " ", [0, 0], " ", [0, 20], ";position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}\n.", [1], "search-container .", [1], "search-bar-container .", [1], "search-bar .", [1], "search-picker{display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 60], ";justify-self:center;left:", [0, 56], ";line-height:", [0, 60], ";padding:0 ", [0, 20], ";position:absolute}\n.", [1], "search-container .", [1], "search-bar-container .", [1], "search-bar .", [1], "search-picker .", [1], "search-icon{display:inline-block;height:", [0, 48], ";padding-left:", [0, 14], ";position:absolute;top:", [0, 19.084], ";width:", [0, 48], "}\n.", [1], "search-container .", [1], "search-bar-container .", [1], "search-bar .", [1], "search-input{background:#d9d9d9;border-radius:", [0, 15], ";-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;font-size:", [0, 26], ";height:", [0, 80], ";margin:0 ", [0, 43], ";padding:0 ", [0, 30], " 0 ", [0, 100], ";width:", [0, 500], "}\n.", [1], "search-container .", [1], "search-bar-container .", [1], "search-bar .", [1], "search-btn{background-color:#a34fe5;border-radius:", [0, 20], ";color:#fff;font-size:1rem;font-weight:300;height:", [0, 80], ";letter-spacing:", [0, 1], ";line-height:", [0, 80], ";text-align:center;width:", [0, 142], "}\n.", [1], "search-container .", [1], "search-recommend{margin-top:", [0, 120], ";width:", [0, 750], "}\n.", [1], "search-container .", [1], "search-recommend .", [1], "search-recommend-title{font-size:", [0, 30], ";font-weight:bolder;text-align:center}\n.", [1], "search-container .", [1], "search-recommend .", [1], "search-recommend-content .", [1], "search-recommend-book{color:#5c8ff3;font-size:", [0, 24], ";line-height:1.5em;margin:", [0, 30], " auto;text-align:center;width:", [0, 630], "}\n.", [1], "search-container .", [1], "search-result .", [1], "more{font-size:small;padding-bottom:", [0, 49.6183], ";text-align:center;width:100%}\n.", [1], "search-container .", [1], "search-result{-ms-flex-align:center;-webkit-align-items:center;align-items:center;margin-top:", [0, 19.084], ";width:", [0, 750], "}\n.", [1], "search-container .", [1], "search-result,.", [1], "search-container .", [1], "search-result .", [1], "book-item{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item{background-color:#fff;-webkit-box-shadow:", [0, 0], " ", [0, 0], " ", [0, 10], " ", [0, 0], " #e9e9e9;box-shadow:", [0, 0], " ", [0, 0], " ", [0, 10], " ", [0, 0], " #e9e9e9;-webkit-box-sizing:border-box;box-sizing:border-box;height:", [0, 300], ";margin-bottom:", [0, 30], ";overflow:hidden;padding:", [0, 20], " ", [0, 46], ";width:100vw}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item:first-child{border-radius:", [0, 30], " ", [0, 30], " 0 0}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item .", [1], "above-book-info{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;font-size:", [0, 30], ";width:100%}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item .", [1], "above-book-info .", [1], "book-pic{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 100], ";-webkit-justify-content:center;justify-content:center;max-width:", [0, 140], ";min-width:", [0, 140], ";width:", [0, 140], "}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item .", [1], "above-book-info .", [1], "news-header-icon{-ms-flex-item-align:start;-webkit-align-self:start;align-self:start;height:", [0, 40], ";margin-top:1.1rem;position:absolute;right:", [0, 30], ";width:", [0, 40], "}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item .", [1], "above-book-info .", [1], "book-info{-ms-flex-positive:1;-ms-flex-pack:justify;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-grow:1;flex-grow:1;height:", [0, 180], ";-webkit-justify-content:space-between;justify-content:space-between;margin:0 1.5rem 0 1rem}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item .", [1], "above-book-info .", [1], "book-info .", [1], "book-name{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#000;display:-webkit-box;font-size:", [0, 38], ";font-weight:700;letter-spacing:", [0, 2], ";overflow:hidden}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item .", [1], "above-book-info .", [1], "book-info .", [1], "info{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#979797;display:-webkit-box;font-size:", [0, 24], ";font-weight:400;letter-spacing:", [0, 2], ";overflow:hidden}\n.", [1], "search-container .", [1], "search-result .", [1], "book-item .", [1], "bottom-time{font-size:", [0, 26], ";gap:", [0, 30], ";width:100%}\n.", [1], "books-list,.", [1], "search-container .", [1], "search-result .", [1], "book-item .", [1], "bottom-time{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex}\n.", [1], "books-list{margin-top:", [0, 19.084], ";width:", [0, 750], "}\n.", [1], "books-list,.", [1], "books-list .", [1], "book-item{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n.", [1], "books-list .", [1], "book-item{background-color:#fff;-webkit-box-shadow:", [0, 0], " ", [0, 0], " ", [0, 10], " ", [0, 0], " #e9e9e9;box-shadow:", [0, 0], " ", [0, 0], " ", [0, 10], " ", [0, 0], " #e9e9e9;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 300], ";margin-bottom:", [0, 30], ";overflow:hidden;padding:", [0, 20], " ", [0, 46], ";width:100vw}\n.", [1], "books-list .", [1], "book-item .", [1], "above-book-info{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;font-size:", [0, 30], ";width:100%}\n.", [1], "books-list .", [1], "book-item .", [1], "above-book-info .", [1], "book-pic{height:", [0, 180], ";margin-right:", [0, 20], ";width:", [0, 180], "}\n.", [1], "books-list .", [1], "book-item .", [1], "above-book-info .", [1], "news-header-icon{-ms-flex-item-align:start;-webkit-align-self:start;align-self:start;height:", [0, 50], ";margin-top:", [0, 30], ";position:absolute;right:", [0, 50], ";width:", [0, 50], "}\n.", [1], "books-list .", [1], "book-item .", [1], "above-book-info .", [1], "book-info{-ms-flex-positive:1;-ms-flex-pack:justify;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-grow:1;flex-grow:1;height:", [0, 180], ";-webkit-justify-content:space-between;justify-content:space-between;margin:0 ", [0, 20], " 0 0}\n.", [1], "books-list .", [1], "book-item .", [1], "above-book-info .", [1], "book-info .", [1], "book-name{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#000;display:-webkit-box;font-size:", [0, 38], ";font-weight:600;letter-spacing:", [0, 2], ";overflow:hidden}\n.", [1], "books-list .", [1], "book-item .", [1], "above-book-info .", [1], "book-info .", [1], "info{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#979797;display:-webkit-box;font-size:", [0, 26], ";font-weight:300;letter-spacing:", [0, 2], ";overflow:hidden}\n.", [1], "books-list .", [1], "book-item .", [1], "bottom-time{-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 26], ";gap:", [0, 30], ";width:100%}\n.", [1], "empty-icon{height:", [0, 286], ";opacity:.8;width:", [0, 286], "}\n.", [1], "library-container{height:90vh}\n.", [1], "library-container .", [1], "tabs-folder-view{height:100%}\n.", [1], "library-container .", [1], "tabs-folder-view .", [1], "tab-list .", [1], "tab-list-item{width:50%}\n.", [1], "library-container .", [1], "tabs-folder-view .", [1], "tab-panels{height:90%;min-height:auto}\n.", [1], "library-container .", [1], "books-tip{color:#e64340;font-size:", [0, 24], ";margin-bottom:", [0, 30], ";margin-left:", [0, 60], ";margin-top:", [0, 20], ";width:", [0, 250], "}\n.", [1], "library-container .", [1], "books-tip .", [1], "books-question{height:", [0, 25], ";margin-left:", [0, 10], ";width:", [0, 25], "}\n.", [1], "library-container .", [1], "books-none-container{color:#999ca0;font-size:", [0, 28], ";height:", [0, 700], ";padding-top:", [0, 180], ";text-align:center;width:", [0, 750], "}\n.", [1], "library-container .", [1], "books-none-container .", [1], "books-none-img{height:", [0, 291], ";margin-bottom:", [0, 50], ";width:", [0, 400], "}\n.", [1], "library-container .", [1], "button-renew{background-position:top;background-repeat:no-repeat;background-size:", [0, 605], " ", [0, 80], ";color:#fff;font-size:", [0, 30], ";height:", [0, 80], ";line-height:", [0, 80], ";margin:", [0, 50], " auto 15%;text-align:center;width:", [0, 605], "}\n.", [1], "library-container .", [1], "library-tabBar{-ms-flex-pack:distribute;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:", [0, 2], " solid #ddd;display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 48], ";-webkit-justify-content:space-around;justify-content:space-around;padding-bottom:", [0, 24], ";padding-top:", [0, 8.5], ";position:relative;text-align:center;width:100%}\n.", [1], "library-container .", [1], "library-tabBar .", [1], "tab-item{color:#353535;font-size:", [0, 34], ";text-align:center;-webkit-transition:color .5s;transition:color .5s;width:50%}\n.", [1], "library-container .", [1], "library-tabBar .", [1], "active-line{background-color:#4a7ee3;border-radius:", [0, 8], ";bottom:", [0, 10], ";height:", [0, 8], ";left:", [0, 128], ";position:absolute;-webkit-transition:left .15s ease-in-out;transition:left .15s ease-in-out;width:", [0, 136], "}\n.", [1], "library-container .", [1], "library-swiper .", [1], "swiperItem{overflow:scroll}\n", ], undefined, {
        path: "./packages/library/pages/index.wxss"
    });
}