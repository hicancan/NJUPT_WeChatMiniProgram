$gwx_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];

        function gz$gwx_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./pages/door/profile/about/protocol/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var hU = e_[x[0]].i
            _ai(hU, x[1], e_, x[0], 1, 1)
            var oV = _v()
            _(r, oV)
            var cW = _oz(z, 1, e, s, gg)
            var oX = _gd(x[0], cW, e_, d_)
            if (oX) {
                var lY = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                oV.wxXCkey = 3
                oX(lY, lY, oV, gg)
                gg.f = cur_globalf
            } else _w(cW, x[0], 2, 14)
            hU.pop()
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
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_3";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/door/profile/about/protocol/index.wxml'] = [$gwx_XC_3, './pages/door/profile/about/protocol/index.wxml'];
else __wxAppCode__['pages/door/profile/about/protocol/index.wxml'] = $gwx_XC_3('./pages/door/profile/about/protocol/index.wxml');;
__wxRoute = "pages/door/profile/about/protocol/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/door/profile/about/protocol/index.js";
define("pages/door/profile/about/protocol/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see index.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["pages/door/profile/about/protocol/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/about/protocol/index.tsx": function(e, o, r) {
                r.d(o, {
                    default: function() {
                        return d
                    }
                });
                var s = r("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    i = r("./src/components/PageLayout/index.tsx"),
                    n = r("webpack/container/remote/react/jsx-runtime"),
                    c = function() {
                        return (0, n.jsxs)(s.View, {
                            className: "protocol-container",
                            children: [(0, n.jsx)(s.View, {
                                className: "head",
                                children: "“南京邮电大学”微信小程序用户协议"
                            }), (0, n.jsx)(s.View, {
                                children: "青柚工作室（以下简称“青柚”）在此特别提醒您（用户）在注册成为用户之前，请认真阅读本《用户协议》（以下简称“协议”），确保您充分理解本协议中各条款，包括免除青柚责任的条款及限制用户权利的条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。"
                            }), (0, n.jsx)(s.View, {
                                children: "本协议约定青柚与用户之间关于“南京邮电大学”微信小程序（以下简称“南邮小程序”）服务（以下简称“服务”）的权利义务。“用户”是指注册、登录、使用本服务的个人。本协议可由青柚随时更新，更新后的协议条款在代替原来的协议条款之前会另行通知用户，用户可在南邮小程序中查阅最新版协议条款。在青柚修改协议条款后，如果用户不接受修改后的条款，请立即停止使用青柚提供的服务，用户继续使用青柚提供的服务将被视为接受修改后的协议。"
                            }), (0, n.jsx)(s.View, {
                                children: "一、账号注册"
                            }), (0, n.jsx)(s.View, {
                                children: "1、账号须知："
                            }), (0, n.jsx)(s.View, {
                                children: "用户在使用本服务前需要注册一个“南邮小程序”账号。“南邮小程序”账号应当使用手机号码绑定注册，请用户使用尚未与“南邮小程序”账号绑定的手机号码注册“南邮小程序”账号。青柚可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。"
                            }), (0, n.jsx)(s.View, {
                                children: "2、用户信息："
                            }), (0, n.jsx)(s.View, {
                                children: "南邮小程序用户系统与南邮正方教务系统接入，个人用户基本信息（如：昵称、头像等）使用微信小程序的用户信息，遵守微信小程序平台的相关用户规范。"
                            }), (0, n.jsx)(s.View, {
                                children: "二、服务内容"
                            }), (0, n.jsx)(s.View, {
                                children: "1、南邮小程序网络服务的具体内容由南邮小程序根据实际情况提供，例如实用功能、社交消息和信息推送等。"
                            }), (0, n.jsx)(s.View, {
                                children: "2、南邮小程序仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。"
                            }), (0, n.jsx)(s.View, {
                                children: "3、南邮小程序与南邮正方教务系统接入，提供课程查询、成绩查询、跑操查询等实用服务，在您注册使用之前，会提示需要提供正方教务系统和其他系统学号、密码等信息。您输入学号、密码后即同意授权并委托我们以您的名义接入正方和其他系统。在等级查询相关功能中，我们会提示您输入准考证号，在您输入后即视为同意授权并委托我们以您的名义查询信息，我们将通过相关等级考试官方查询渠道的方式为您获取成绩等信息。对于在上述过程中所获悉的用户个人的学号、密码、准考证号、姓名、课程、成绩等信息我们将会严格保密，不会以任何形式向其他第三方组织或个人泄露。"
                            }), (0, n.jsx)(s.View, {
                                children: "三、隐私保护"
                            }), (0, n.jsx)(s.View, {
                                children: "1、用户在注册账号或使用本服务的过程中，可能需要填写或提交一些必要的信息，如法律法规、规章规范性文件（以下称“法律法规”）规定的需要填写的身份信息。如用户提交的信息不完整或不符合法律法规的规定，则用户可能无法使用本服务或在使用本服务的过程中受到限制。"
                            }), (0, n.jsx)(s.View, {
                                children: "2、个人隐私信息是指涉及用户个人身份或个人隐私的信息，比如，用户真实姓名、身份证号、手机号码、手机设备识别码、IP地址。非个人隐私信息是指用户对本服务的操作状态以及使用习惯等明确且客观反映在青柚服务器端的基本记录信息、个人隐私信息范围外的其它普通信息，以及用户同意公开的上述隐私信息。"
                            }), (0, n.jsx)(s.View, {
                                children: "3、尊重用户个人隐私信息的私有性是青柚的一贯制度，青柚将采取技术措施和其他必要措施，确保用户个人隐私信息安全，防止在本服务中收集的用户个人隐私信息泄露、毁损或丢失。在发生前述情形或者青柚发现存在发生前述情形的可能时，将及时采取补救措施。"
                            }), (0, n.jsx)(s.View, {
                                children: "4、青柚未经用户同意不向任何第三方公开、 透露用户个人隐私信息。但以下特定情形除外："
                            }), (0, n.jsx)(s.View, {
                                children: "青柚根据法律法规规定或有权机关的指示提供用户的个人隐私信息；"
                            }), (0, n.jsx)(s.View, {
                                children: "由于用户将其用户密码告知他人或与他人共享注册帐户与密码，由此导致的任何个人信息的泄漏，或其他非因青柚原因导致的个人隐私信息的泄露；"
                            }), (0, n.jsx)(s.View, {
                                children: "用户自行向第三方公开其个人隐私信息；"
                            }), (0, n.jsx)(s.View, {
                                children: "用户与青柚及合作单位之间就用户个人隐私信息的使用公开达成约定，青柚因此向合作单位公开用户个人隐私信息；"
                            }), (0, n.jsx)(s.View, {
                                children: "任何由于黑客攻击、电脑病毒侵入及其他不可抗力事件导致用户个人隐私信息的泄露。"
                            }), (0, n.jsx)(s.View, {
                                children: "5、用户同意青柚可在以下事项中使用用户的个人隐私信息："
                            }), (0, n.jsx)(s.View, {
                                children: "青柚向用户及时发送重要通知，如软件更新、本协议条款的变更；"
                            }), (0, n.jsx)(s.View, {
                                children: "青柚内部进行审计、数据分析和研究等，以进行相关总结活动，改进青柚的产品、服务和与用户之间的沟通；"
                            }), (0, n.jsx)(s.View, {
                                children: "依本协议约定，青柚管理、审查用户信息及进行处理措施；"
                            }), (0, n.jsx)(s.View, {
                                children: "适用法律法规规定的其他事项。"
                            }), (0, n.jsx)(s.View, {
                                children: "除上述事项外，如未取得用户事先同意，青柚不会将用户个人隐私信息使用于任何其他用途。"
                            }), (0, n.jsx)(s.View, {
                                children: "6、为了改善青柚的技术和服务，向用户提供更好的服务体验，青柚或可会自行收集使用或向第三方提供用户的非个人隐私信息。"
                            })]
                        })
                    };

                function d() {
                    return (0, n.jsx)(i.Layout, {
                        titleText: "用户协议",
                        success: !0,
                        loading: !1,
                        children: (0, n.jsx)(c, {})
                    })
                }
            },
            "./src/pages/door/profile/about/protocol/index.tsx": function(e, o, r) {
                var s = r("webpack/container/remote/@tarojs/runtime"),
                    i = r("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/pages/door/profile/about/protocol/index.tsx");
                Page((0, s.createPageConfig)(i.default, "pages/door/profile/about/protocol/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), i.default
            }
        },
        function(e) {
            e.O(0, ["taro", "vendors", "common"], (function() {
                return "./src/pages/door/profile/about/protocol/index.tsx", e(e.s = "./src/pages/door/profile/about/protocol/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/door/profile/about/protocol/index.js'
});
require("pages/door/profile/about/protocol/index.js");