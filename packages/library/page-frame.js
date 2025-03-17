var __wxAppData = __wxAppData || {};
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var __vd_version_info__ = __vd_version_info__ || {};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};
if (this && this.__g === undefined) Object.defineProperty(this, "__g", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: function() {
        function D(e, t) {
            if (typeof t != "undefined") e.children.push(t)
        }

        function S(e) {
            if (typeof e != "undefined") return {
                tag: "virtual",
                wxKey: e,
                children: []
            };
            return {
                tag: "virtual",
                children: []
            }
        }

        function v(e) {
            return {
                tag: "wx-" + e,
                attr: {},
                children: [],
                n: [],
                raw: {},
                generics: {}
            }
        }

        function e(e, t) {
            t && e.properities.push(t)
        }

        function t(e, t, r) {
            return typeof e[r] != "undefined" ? e[r] : t[r]
        }

        function u(e) {
            console.warn("WXMLRT_" + g + ":" + e)
        }

        function r(e, t) {
            u(t + ":-1:-1:-1: Template `" + e + "` is being called recursively, will be stop.")
        }
        var s = console.warn;
        var n = console.log;

        function o() {
            function e() {}
            e.prototype = {
                hn: function(e, t) {
                    if (typeof e == "object") {
                        var r = 0;
                        var n = false,
                            o = false;
                        for (var a in e) {
                            n = n | a === "__value__";
                            o = o | a === "__wxspec__";
                            r++;
                            if (r > 2) break
                        }
                        return r == 2 && n && o && (t || e.__wxspec__ !== "m" || this.hn(e.__value__) === "h") ? "h" : "n"
                    }
                    return "n"
                },
                nh: function(e, t) {
                    return {
                        __value__: e,
                        __wxspec__: t ? t : true
                    }
                },
                rv: function(e) {
                    return this.hn(e, true) === "n" ? e : this.rv(e.__value__)
                },
                hm: function(e) {
                    if (typeof e == "object") {
                        var t = 0;
                        var r = false,
                            n = false;
                        for (var o in e) {
                            r = r | o === "__value__";
                            n = n | o === "__wxspec__";
                            t++;
                            if (t > 2) break
                        }
                        return t == 2 && r && n && (e.__wxspec__ === "m" || this.hm(e.__value__))
                    }
                    return false
                }
            };
            return new e
        }
        var A = o();

        function T(e) {
            var t = e.split("\n " + " " + " " + " ");
            for (var r = 0; r < t.length; ++r) {
                if (0 == r) continue;
                if (")" === t[r][t[r].length - 1]) t[r] = t[r].replace(/\s\(.*\)$/, "");
                else t[r] = "at anonymous function"
            }
            return t.join("\n " + " " + " " + " ")
        }

        function a(M) {
            function m(e, t, r, n, o) {
                var a = false;
                var i = e[0][1];
                var p, u, l, f, v, c;
                switch (i) {
                    case "?:":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : x(e[3], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "&&":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : A.rv(p);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "||":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? A.rv(p) : x(e[2], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "+":
                    case "*":
                    case "/":
                    case "%":
                    case "|":
                    case "^":
                    case "&":
                    case "===":
                    case "==":
                    case "!=":
                    case "!==":
                    case ">=":
                    case "<=":
                    case ">":
                    case "<":
                    case "<<":
                    case ">>":
                        p = x(e[1], t, r, n, o, a);
                        u = x(e[2], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        switch (i) {
                            case "+":
                                f = A.rv(p) + A.rv(u);
                                break;
                            case "*":
                                f = A.rv(p) * A.rv(u);
                                break;
                            case "/":
                                f = A.rv(p) / A.rv(u);
                                break;
                            case "%":
                                f = A.rv(p) % A.rv(u);
                                break;
                            case "|":
                                f = A.rv(p) | A.rv(u);
                                break;
                            case "^":
                                f = A.rv(p) ^ A.rv(u);
                                break;
                            case "&":
                                f = A.rv(p) & A.rv(u);
                                break;
                            case "===":
                                f = A.rv(p) === A.rv(u);
                                break;
                            case "==":
                                f = A.rv(p) == A.rv(u);
                                break;
                            case "!=":
                                f = A.rv(p) != A.rv(u);
                                break;
                            case "!==":
                                f = A.rv(p) !== A.rv(u);
                                break;
                            case ">=":
                                f = A.rv(p) >= A.rv(u);
                                break;
                            case "<=":
                                f = A.rv(p) <= A.rv(u);
                                break;
                            case ">":
                                f = A.rv(p) > A.rv(u);
                                break;
                            case "<":
                                f = A.rv(p) < A.rv(u);
                                break;
                            case "<<":
                                f = A.rv(p) << A.rv(u);
                                break;
                            case ">>":
                                f = A.rv(p) >> A.rv(u);
                                break;
                            default:
                                break
                        }
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "-":
                        p = e.length === 3 ? x(e[1], t, r, n, o, a) : 0;
                        u = e.length === 3 ? x(e[2], t, r, n, o, a) : x(e[1], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        f = l ? A.rv(p) - A.rv(u) : p - u;
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "!":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = !A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    case "~":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = ~A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    default:
                        s("unrecognized op" + i)
                }
            }

            function x(e, t, r, n, o, a) {
                var i = e[0];
                var p = false;
                if (typeof a !== "undefined") o.ap = a;
                if (typeof i === "object") {
                    var u = i[0];
                    var l, f, v, c, s, y, b, d, h, _, g;
                    switch (u) {
                        case 2:
                            return m(e, t, r, n, o);
                            break;
                        case 4:
                            return x(e[1], t, r, n, o, p);
                            break;
                        case 5:
                            switch (e.length) {
                                case 2:
                                    l = x(e[1], t, r, n, o, p);
                                    return M ? [l] : [A.rv(l)];
                                    return [l];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    l = x(e[1], t, r, n, o, p);
                                    v = x(e[2], t, r, n, o, p);
                                    l.push(M ? v : A.rv(v));
                                    return l;
                                    break
                            }
                            break;
                        case 6:
                            l = x(e[1], t, r, n, o);
                            var w = o.ap;
                            h = A.hn(l) === "h";
                            f = h ? A.rv(l) : l;
                            o.is_affected |= h;
                            if (M) {
                                if (f === null || typeof f === "undefined") {
                                    return h ? A.nh(undefined, "e") : undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return h || _ ? A.nh(undefined, "e") : undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return h || _ ? g ? y : A.nh(y, "e") : y
                            } else {
                                if (f === null || typeof f === "undefined") {
                                    return undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return g ? A.rv(y) : y
                            }
                        case 7:
                            switch (e[1][0]) {
                                case 11:
                                    o.is_affected |= A.hn(n) === "h";
                                    return n;
                                case 3:
                                    b = A.rv(r);
                                    d = A.rv(t);
                                    v = e[1][1];
                                    if (n && n.f && n.f.hasOwnProperty(v)) {
                                        l = n.f;
                                        o.ap = true
                                    } else {
                                        l = b && b.hasOwnProperty(v) ? r : d && d.hasOwnProperty(v) ? t : undefined
                                    }
                                    if (M) {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            y = h && !g ? A.nh(y, "e") : y;
                                            return y
                                        }
                                    } else {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            return A.rv(y)
                                        }
                                    }
                                    return undefined
                            }
                            break;
                        case 8:
                            l = {};
                            l[e[1]] = x(e[2], t, r, n, o, p);
                            return l;
                            break;
                        case 9:
                            l = x(e[1], t, r, n, o, p);
                            v = x(e[2], t, r, n, o, p);

                            function O(e, t, r) {
                                var n, o;
                                h = A.hn(e) === "h";
                                _ = A.hn(t) === "h";
                                f = A.rv(e);
                                c = A.rv(t);
                                for (var a in c) {
                                    if (r || !f.hasOwnProperty(a)) {
                                        f[a] = M ? _ ? A.nh(c[a], "e") : c[a] : A.rv(c[a])
                                    }
                                }
                                return e
                            }
                            var s = l;
                            var j = true;
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                l = v;
                                v = s;
                                j = false
                            }
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                var P = {};
                                return O(O(P, l, j), v, j)
                            } else return O(l, v, j);
                            break;
                        case 10:
                            l = x(e[1], t, r, n, o, p);
                            l = M ? l : A.rv(l);
                            return l;
                            break;
                        case 12:
                            var P;
                            l = x(e[1], t, r, n, o);
                            if (!o.ap) {
                                return M && A.hn(l) === "h" ? A.nh(P, "f") : P
                            }
                            var w = o.ap;
                            v = x(e[2], t, r, n, o, p);
                            o.ap = w;
                            h = A.hn(l) === "h";
                            _ = N(v);
                            f = A.rv(l);
                            c = A.rv(v);
                            snap_bb = K(c, "nv_");
                            try {
                                P = typeof f === "function" ? K(f.apply(null, snap_bb)) : undefined
                            } catch (t) {
                                t.message = t.message.replace(/nv_/g, "");
                                t.stack = t.stack.substring(0, t.stack.indexOf("\n", t.stack.lastIndexOf("at nv_")));
                                t.stack = t.stack.replace(/\snv_/g, " ");
                                t.stack = T(t.stack);
                                if (n.debugInfo) {
                                    t.stack += "\n " + " " + " " + " at " + n.debugInfo[0] + ":" + n.debugInfo[1] + ":" + n.debugInfo[2];
                                    console.error(t)
                                }
                                P = undefined
                            }
                            return M && (_ || h) ? A.nh(P, "f") : P
                    }
                } else {
                    if (i === 3 || i === 1) return e[1];
                    else if (i === 11) {
                        var l = "";
                        for (var D = 1; D < e.length; D++) {
                            var S = A.rv(x(e[D], t, r, n, o, p));
                            l += typeof S === "undefined" ? "" : S
                        }
                        return l
                    }
                }
            }

            function e(e, t, r, n, o, a) {
                if (e[0] == "11182016") {
                    n.debugInfo = e[2];
                    return x(e[1], t, r, n, o, a)
                } else {
                    n.debugInfo = null;
                    return x(e, t, r, n, o, a)
                }
            }
            return e
        }
        var f = a(true);
        var c = a(false);

        function i(e, t, r, n, o, a, i, p) {
            {
                var u = {
                    is_affected: false
                };
                var l = f(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(a) || u.is_affected != p) {
                    console.warn("A. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(a) + ", " + p + " is expected")
                }
            } {
                var u = {
                    is_affected: false
                };
                var l = c(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(i) || u.is_affected != p) {
                    console.warn("B. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(i) + ", " + p + " is expected")
                }
            }
        }

        function y(e, t, r, n, o, a, i, p, u) {
            var l = A.hn(e) === "n";
            var f = A.rv(n);
            var v = f.hasOwnProperty(i);
            var c = f.hasOwnProperty(p);
            var s = f[i];
            var y = f[p];
            var b = Object.prototype.toString.call(A.rv(e));
            var d = b[8];
            if (d === "N" && b[10] === "l") d = "X";
            var h;
            if (l) {
                if (d === "A") {
                    var _;
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        _ = A.rv(e[g]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    var _;
                    for (var O in e) {
                        f[i] = e[O];
                        f[p] = l ? O : A.nh(O, "h");
                        _ = A.rv(e[O]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < e; g++) {
                        f[i] = g;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            } else {
                var j = A.rv(e);
                var _, P;
                if (d === "A") {
                    for (var g = 0; g < j.length; g++) {
                        P = j[g];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    for (var O in j) {
                        P = j[O];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? O : A.nh(O, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < j.length; g++) {
                        P = A.nh(j[g], "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < j; g++) {
                        P = A.nh(g, "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            }
            if (v) {
                f[i] = s
            } else {
                delete f[i]
            }
            if (c) {
                f[p] = y
            } else {
                delete f[p]
            }
        }

        function N(e) {
            if (A.hn(e) == "h") return true;
            if (typeof e !== "object") return false;
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    if (N(e[t])) return true
                }
            }
            return false
        }

        function b(e, t, r, n, o) {
            var a = false;
            var i = K(n, "", 2);
            if (o.ap && i && i.constructor === Function) {
                t = "$wxs:" + t;
                e.attr["$gdc"] = K
            }
            if (o.is_affected || N(n)) {
                e.n.push(t);
                e.raw[t] = n
            }
            e.attr[t] = i
        }

        function d(e, t, r, n, o, a) {
            a.opindex = r;
            var i = {},
                p;
            var u = c(z[r], n, o, a, i);
            b(e, t, r, u, i)
        }

        function h(e, t, r, n, o, a, i) {
            i.opindex = n;
            var p = {},
                u;
            var l = c(e[n], o, a, i, p);
            b(t, r, n, l, p)
        }

        function p(e, t, r, n) {
            n.opindex = e;
            var o = {};
            var a = c(z[e], t, r, n, o);
            return a && a.constructor === Function ? undefined : a
        }

        function l(e, t, r, n, o) {
            o.opindex = t;
            var a = {};
            var i = c(e[t], r, n, o, a);
            return i && i.constructor === Function ? undefined : i
        }

        function _(e, t, r, n, o) {
            var o = o || {};
            n.opindex = e;
            return f(z[e], t, r, n, o)
        }

        function w(e, t, r, n, o, a) {
            var a = a || {};
            o.opindex = t;
            return f(e[t], r, n, o, a)
        }

        function O(e, t, r, n, o, a, i, p, u) {
            var l = {};
            var f = _(e, r, n, o);
            y(f, t, r, n, o, a, i, p, u)
        }

        function j(e, t, r, n, o, a, i, p, u, l) {
            var f = {};
            var v = w(e, t, n, o, a);
            y(v, r, n, o, a, i, p, u, l)
        }

        function P(e, t, r, n, o, a) {
            var i = v(e);
            var p = 0;
            for (var u = 0; u < t.length; u += 2) {
                if (p + t[u + 1] < 0) {
                    i.attr[t[u]] = true
                } else {
                    d(i, t[u], p + t[u + 1], n, o, a);
                    if (p === 0) p = t[u + 1]
                }
            }
            for (var u = 0; u < r.length; u += 2) {
                if (p + r[u + 1] < 0) {
                    i.generics[r[u]] = ""
                } else {
                    var l = c(z[p + r[u + 1]], n, o, a);
                    if (l != "") l = "wx-" + l;
                    i.generics[r[u]] = l;
                    if (p === 0) p = r[u + 1]
                }
            }
            return i
        }

        function M(e, t, r, n, o, a, i) {
            var p = v(t);
            var u = 0;
            for (var l = 0; l < r.length; l += 2) {
                if (u + r[l + 1] < 0) {
                    p.attr[r[l]] = true
                } else {
                    h(e, p, r[l], u + r[l + 1], o, a, i);
                    if (u === 0) u = r[l + 1]
                }
            }
            for (var l = 0; l < n.length; l += 2) {
                if (u + n[l + 1] < 0) {
                    p.generics[n[l]] = ""
                } else {
                    var f = c(e[u + n[l + 1]], o, a, i);
                    if (f != "") f = "wx-" + f;
                    p.generics[n[l]] = f;
                    if (u === 0) u = n[l + 1]
                }
            }
            return p
        }
        var m = function() {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                x();
                C();
                k();
                U();
                I();
                L();
                E();
                R();
                F()
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true
        };
        var x = function() {
            Object.defineProperty(Object.prototype, "nv_constructor", {
                writable: true,
                value: "Object"
            });
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[object Object]"
                }
            })
        };
        var C = function() {
            Object.defineProperty(Function.prototype, "nv_constructor", {
                writable: true,
                value: "Function"
            });
            Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function() {}
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[function Function]"
                }
            })
        };
        var k = function() {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return this.nv_join()
                }
            });
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true,
                value: function(e) {
                    e = undefined == e ? "," : e;
                    var t = "";
                    for (var r = 0; r < this.length; ++r) {
                        if (0 != r) t += e;
                        if (null == this[r] || undefined == this[r]) t += "";
                        else if (typeof this[r] == "function") t += this[r].nv_toString();
                        else if (typeof this[r] == "object" && this[r].nv_constructor === "Array") t += this[r].nv_join();
                        else t += this[r].toString()
                    }
                    return t
                }
            });
            Object.defineProperty(Array.prototype, "nv_constructor", {
                writable: true,
                value: "Array"
            });
            Object.defineProperty(Array.prototype, "nv_concat", {
                writable: true,
                value: Array.prototype.concat
            });
            Object.defineProperty(Array.prototype, "nv_pop", {
                writable: true,
                value: Array.prototype.pop
            });
            Object.defineProperty(Array.prototype, "nv_push", {
                writable: true,
                value: Array.prototype.push
            });
            Object.defineProperty(Array.prototype, "nv_reverse", {
                writable: true,
                value: Array.prototype.reverse
            });
            Object.defineProperty(Array.prototype, "nv_shift", {
                writable: true,
                value: Array.prototype.shift
            });
            Object.defineProperty(Array.prototype, "nv_slice", {
                writable: true,
                value: Array.prototype.slice
            });
            Object.defineProperty(Array.prototype, "nv_sort", {
                writable: true,
                value: Array.prototype.sort
            });
            Object.defineProperty(Array.prototype, "nv_splice", {
                writable: true,
                value: Array.prototype.splice
            });
            Object.defineProperty(Array.prototype, "nv_unshift", {
                writable: true,
                value: Array.prototype.unshift
            });
            Object.defineProperty(Array.prototype, "nv_indexOf", {
                writable: true,
                value: Array.prototype.indexOf
            });
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            });
            Object.defineProperty(Array.prototype, "nv_every", {
                writable: true,
                value: Array.prototype.every
            });
            Object.defineProperty(Array.prototype, "nv_some", {
                writable: true,
                value: Array.prototype.some
            });
            Object.defineProperty(Array.prototype, "nv_forEach", {
                writable: true,
                value: Array.prototype.forEach
            });
            Object.defineProperty(Array.prototype, "nv_map", {
                writable: true,
                value: Array.prototype.map
            });
            Object.defineProperty(Array.prototype, "nv_filter", {
                writable: true,
                value: Array.prototype.filter
            });
            Object.defineProperty(Array.prototype, "nv_reduce", {
                writable: true,
                value: Array.prototype.reduce
            });
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            });
            Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var U = function() {
            Object.defineProperty(String.prototype, "nv_constructor", {
                writable: true,
                value: "String"
            });
            Object.defineProperty(String.prototype, "nv_toString", {
                writable: true,
                value: String.prototype.toString
            });
            Object.defineProperty(String.prototype, "nv_valueOf", {
                writable: true,
                value: String.prototype.valueOf
            });
            Object.defineProperty(String.prototype, "nv_charAt", {
                writable: true,
                value: String.prototype.charAt
            });
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            });
            Object.defineProperty(String.prototype, "nv_concat", {
                writable: true,
                value: String.prototype.concat
            });
            Object.defineProperty(String.prototype, "nv_indexOf", {
                writable: true,
                value: String.prototype.indexOf
            });
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            });
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            });
            Object.defineProperty(String.prototype, "nv_match", {
                writable: true,
                value: String.prototype.match
            });
            Object.defineProperty(String.prototype, "nv_replace", {
                writable: true,
                value: String.prototype.replace
            });
            Object.defineProperty(String.prototype, "nv_search", {
                writable: true,
                value: String.prototype.search
            });
            Object.defineProperty(String.prototype, "nv_slice", {
                writable: true,
                value: String.prototype.slice
            });
            Object.defineProperty(String.prototype, "nv_split", {
                writable: true,
                value: String.prototype.split
            });
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            });
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            });
            Object.defineProperty(String.prototype, "nv_trim", {
                writable: true,
                value: String.prototype.trim
            });
            Object.defineProperty(String.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var I = function() {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {
                writable: true,
                value: "Boolean"
            });
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            });
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {
                writable: true,
                value: Boolean.prototype.valueOf
            })
        };
        var L = function() {
            Object.defineProperty(Number, "nv_MAX_VALUE", {
                writable: false,
                value: Number.MAX_VALUE
            });
            Object.defineProperty(Number, "nv_MIN_VALUE", {
                writable: false,
                value: Number.MIN_VALUE
            });
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
                writable: false,
                value: Number.NEGATIVE_INFINITY
            });
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
                writable: false,
                value: Number.POSITIVE_INFINITY
            });
            Object.defineProperty(Number.prototype, "nv_constructor", {
                writable: true,
                value: "Number"
            });
            Object.defineProperty(Number.prototype, "nv_toString", {
                writable: true,
                value: Number.prototype.toString
            });
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            });
            Object.defineProperty(Number.prototype, "nv_valueOf", {
                writable: true,
                value: Number.prototype.valueOf
            });
            Object.defineProperty(Number.prototype, "nv_toFixed", {
                writable: true,
                value: Number.prototype.toFixed
            });
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            });
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        };
        var E = function() {
            Object.defineProperty(Math, "nv_E", {
                writable: false,
                value: Math.E
            });
            Object.defineProperty(Math, "nv_LN10", {
                writable: false,
                value: Math.LN10
            });
            Object.defineProperty(Math, "nv_LN2", {
                writable: false,
                value: Math.LN2
            });
            Object.defineProperty(Math, "nv_LOG2E", {
                writable: false,
                value: Math.LOG2E
            });
            Object.defineProperty(Math, "nv_LOG10E", {
                writable: false,
                value: Math.LOG10E
            });
            Object.defineProperty(Math, "nv_PI", {
                writable: false,
                value: Math.PI
            });
            Object.defineProperty(Math, "nv_SQRT1_2", {
                writable: false,
                value: Math.SQRT1_2
            });
            Object.defineProperty(Math, "nv_SQRT2", {
                writable: false,
                value: Math.SQRT2
            });
            Object.defineProperty(Math, "nv_abs", {
                writable: false,
                value: Math.abs
            });
            Object.defineProperty(Math, "nv_acos", {
                writable: false,
                value: Math.acos
            });
            Object.defineProperty(Math, "nv_asin", {
                writable: false,
                value: Math.asin
            });
            Object.defineProperty(Math, "nv_atan", {
                writable: false,
                value: Math.atan
            });
            Object.defineProperty(Math, "nv_atan2", {
                writable: false,
                value: Math.atan2
            });
            Object.defineProperty(Math, "nv_ceil", {
                writable: false,
                value: Math.ceil
            });
            Object.defineProperty(Math, "nv_cos", {
                writable: false,
                value: Math.cos
            });
            Object.defineProperty(Math, "nv_exp", {
                writable: false,
                value: Math.exp
            });
            Object.defineProperty(Math, "nv_floor", {
                writable: false,
                value: Math.floor
            });
            Object.defineProperty(Math, "nv_log", {
                writable: false,
                value: Math.log
            });
            Object.defineProperty(Math, "nv_max", {
                writable: false,
                value: Math.max
            });
            Object.defineProperty(Math, "nv_min", {
                writable: false,
                value: Math.min
            });
            Object.defineProperty(Math, "nv_pow", {
                writable: false,
                value: Math.pow
            });
            Object.defineProperty(Math, "nv_random", {
                writable: false,
                value: Math.random
            });
            Object.defineProperty(Math, "nv_round", {
                writable: false,
                value: Math.round
            });
            Object.defineProperty(Math, "nv_sin", {
                writable: false,
                value: Math.sin
            });
            Object.defineProperty(Math, "nv_sqrt", {
                writable: false,
                value: Math.sqrt
            });
            Object.defineProperty(Math, "nv_tan", {
                writable: false,
                value: Math.tan
            })
        };
        var R = function() {
            Object.defineProperty(Date.prototype, "nv_constructor", {
                writable: true,
                value: "Date"
            });
            Object.defineProperty(Date, "nv_parse", {
                writable: true,
                value: Date.parse
            });
            Object.defineProperty(Date, "nv_UTC", {
                writable: true,
                value: Date.UTC
            });
            Object.defineProperty(Date, "nv_now", {
                writable: true,
                value: Date.now
            });
            Object.defineProperty(Date.prototype, "nv_toString", {
                writable: true,
                value: Date.prototype.toString
            });
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            });
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            });
            Object.defineProperty(Date.prototype, "nv_valueOf", {
                writable: true,
                value: Date.prototype.valueOf
            });
            Object.defineProperty(Date.prototype, "nv_getTime", {
                writable: true,
                value: Date.prototype.getTime
            });
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getMonth", {
                writable: true,
                value: Date.prototype.getMonth
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_getDate", {
                writable: true,
                value: Date.prototype.getDate
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {
                writable: true,
                value: Date.prototype.getUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_getDay", {
                writable: true,
                value: Date.prototype.getDay
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {
                writable: true,
                value: Date.prototype.getUTCDay
            });
            Object.defineProperty(Date.prototype, "nv_getHours", {
                writable: true,
                value: Date.prototype.getHours
            });
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_getMinutes", {
                writable: true,
                value: Date.prototype.getMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getSeconds", {
                writable: true,
                value: Date.prototype.getSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            });
            Object.defineProperty(Date.prototype, "nv_setTime", {
                writable: true,
                value: Date.prototype.setTime
            });
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setSeconds", {
                writable: true,
                value: Date.prototype.setSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setMinutes", {
                writable: true,
                value: Date.prototype.setMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setHours", {
                writable: true,
                value: Date.prototype.setHours
            });
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_setDate", {
                writable: true,
                value: Date.prototype.setDate
            });
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {
                writable: true,
                value: Date.prototype.setUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_setMonth", {
                writable: true,
                value: Date.prototype.setMonth
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            });
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            });
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            });
            Object.defineProperty(Date.prototype, "nv_toJSON", {
                writable: true,
                value: Date.prototype.toJSON
            })
        };
        var F = function() {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {
                writable: true,
                value: "RegExp"
            });
            Object.defineProperty(RegExp.prototype, "nv_exec", {
                writable: true,
                value: RegExp.prototype.exec
            });
            Object.defineProperty(RegExp.prototype, "nv_test", {
                writable: true,
                value: RegExp.prototype.test
            });
            Object.defineProperty(RegExp.prototype, "nv_toString", {
                writable: true,
                value: RegExp.prototype.toString
            });
            Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                    return this.source
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                    return this.global
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                    return this.ignoreCase
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                    return this.multiline
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                    return this.lastIndex
                },
                set: function(e) {
                    this.lastIndex = e
                }
            })
        };
        m();
        var J = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(Date);
            return new(Function.prototype.bind.apply(Date, e))
        };
        var B = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(RegExp);
            return new(Function.prototype.bind.apply(RegExp, e))
        };
        var Y = {};
        Y.nv_log = function() {
            var e = "WXSRT:";
            for (var t = 0; t < arguments.length; ++t) e += arguments[t] + " ";
            console.log(e)
        };
        var G = parseInt,
            X = parseFloat,
            H = isNaN,
            V = isFinite,
            $ = decodeURI,
            W = decodeURIComponent,
            Q = encodeURI,
            q = encodeURIComponent;

        function K(e, t, r) {
            e = A.rv(e);
            if (e === null || e === undefined) return e;
            if (typeof e === "string" || typeof e === "boolean" || typeof e === "number") return e;
            if (e.constructor === Object) {
                var n = {};
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o))
                        if (undefined === t) n[o.substring(3)] = K(e[o], t, r);
                        else n[t + o] = K(e[o], t, r);
                return n
            }
            if (e.constructor === Array) {
                var n = [];
                for (var a = 0; a < e.length; a++) n.push(K(e[a], t, r));
                return n
            }
            if (e.constructor === Date) {
                var n = new Date;
                n.setTime(e.getTime());
                return n
            }
            if (e.constructor === RegExp) {
                var i = "";
                if (e.global) i += "g";
                if (e.ignoreCase) i += "i";
                if (e.multiline) i += "m";
                return new RegExp(e.source, i)
            }
            if (r && typeof e === "function") {
                if (r == 1) return K(e(), undefined, 2);
                if (r == 2) return e
            }
            return null
        }
        var Z = {};
        Z.nv_stringify = function(e) {
            JSON.stringify(e);
            return JSON.stringify(K(e))
        };
        Z.nv_parse = function(e) {
            if (e === undefined) return undefined;
            var t = JSON.parse(e);
            return K(t, "nv_")
        };

        function ee(e, t, r, n) {
            e.extraAttr = {
                t_action: t,
                t_rawid: r
            };
            if (typeof n != "undefined") e.extraAttr.t_cid = n
        }

        function te() {
            if (typeof __globalThis.__webview_engine_version__ == "undefined") return 0;
            return __globalThis.__webview_engine_version__
        }

        function re(e, t, r, n, o, a) {
            var i = ne(t, r, n);
            if (i) e.push(i);
            else {
                e.push("");
                u(n + ":import:" + o + ":" + a + ": Path `" + t + "` not found from `" + n + "`.")
            }
        }

        function ne(e, t, r) {
            if (e[0] != "/") {
                var n = r.split("/");
                n.pop();
                var o = e.split("/");
                for (var a = 0; a < o.length; a++) {
                    if (o[a] == "..") n.pop();
                    else if (!o[a] || o[a] == ".") continue;
                    else n.push(o[a])
                }
                e = n.join("/")
            }
            if (r[0] == "." && e[0] == "/") e = "." + e;
            if (t[e]) return e;
            if (t[e + ".wxml"]) return e + ".wxml"
        }

        function oe(e, t, r, n) {
            if (!t) return;
            if (n[e][t]) return n[e][t];
            for (var o = r[e].i.length - 1; o >= 0; o--) {
                if (r[e].i[o] && n[r[e].i[o]][t]) return n[r[e].i[o]][t]
            }
            for (var o = r[e].ti.length - 1; o >= 0; o--) {
                var a = ne(r[e].ti[o], r, e);
                if (a && n[a][t]) return n[a][t]
            }
            var i = ae(r, e);
            for (var o = 0; o < i.length; o++) {
                if (i[o] && n[i[o]][t]) return n[i[o]][t]
            }
            for (var p = r[e].j.length - 1; p >= 0; p--)
                if (r[e].j[p]) {
                    for (var a = r[r[e].j[p]].ti.length - 1; a >= 0; a--) {
                        var u = ne(r[r[e].j[p]].ti[a], r, e);
                        if (u && n[u][t]) {
                            return n[u][t]
                        }
                    }
                }
        }

        function ae(e, t) {
            if (!t) return [];
            if ($gaic[t]) {
                return $gaic[t]
            }
            var r = [],
                n = [],
                o = 0,
                a = 0,
                i = {},
                p = {};
            n.push(t);
            p[t] = true;
            a++;
            while (o < a) {
                var u = n[o++];
                for (var l = 0; l < e[u].ic.length; l++) {
                    var f = e[u].ic[l];
                    var v = ne(f, e, u);
                    if (v && !p[v]) {
                        p[v] = true;
                        n.push(v);
                        a++
                    }
                }
                for (var l = 0; u != t && l < e[u].ti.length; l++) {
                    var c = e[u].ti[l];
                    var s = ne(c, e, u);
                    if (s && !i[s]) {
                        i[s] = true;
                        r.push(s)
                    }
                }
            }
            $gaic[t] = r;
            return r
        }
        var ie = {};

        function pe(e, t, r, n, o, a, i) {
            var p = ne(e, t, r);
            t[r].j.push(p);
            if (p) {
                if (ie[p]) {
                    u("-1:include:-1:-1: `" + e + "` is being included in a loop, will be stop.");
                    return
                }
                ie[p] = true;
                try {
                    t[p].f(n, o, a, i)
                } catch (n) {}
                ie[p] = false
            } else {
                u(r + ":include:-1:-1: Included path `" + e + "` not found from `" + r + "`.")
            }
        }

        function ue(e, t, r, n) {
            u(t + ":template:" + r + ":" + n + ": Template `" + e + "` not found.")
        }

        function le(e) {
            var t = false;
            delete e.properities;
            delete e.n;
            if (e.children) {
                do {
                    t = false;
                    var r = [];
                    for (var n = 0; n < e.children.length; n++) {
                        var o = e.children[n];
                        if (o.tag == "virtual") {
                            t = true;
                            for (var a = 0; o.children && a < o.children.length; a++) {
                                r.push(o.children[a])
                            }
                        } else {
                            r.push(o)
                        }
                    }
                    e.children = r
                } while (t);
                for (var n = 0; n < e.children.length; n++) {
                    le(e.children[n])
                }
            }
            return e
        }

        function fe(e) {
            if (e.tag == "wx-wx-scope") {
                e.tag = "virtual";
                e.wxCkey = "11";
                e["wxScopeData"] = e.attr["wx:scope-data"];
                delete e.n;
                delete e.raw;
                delete e.generics;
                delete e.attr
            }
            for (var t = 0; e.children && t < e.children.length; t++) {
                fe(e.children[t])
            }
            return e
        }
        return {
            a: D,
            b: S,
            c: v,
            d: e,
            e: t,
            f: u,
            g: r,
            h: s,
            i: n,
            j: o,
            k: A,
            l: T,
            m: a,
            n: f,
            o: c,
            p: i,
            q: y,
            r: N,
            s: b,
            t: d,
            u: h,
            v: p,
            w: l,
            x: _,
            y: w,
            z: O,
            A: j,
            B: P,
            C: M,
            D: J,
            E: B,
            F: Y,
            G: G,
            H: X,
            I: H,
            J: V,
            K: $,
            L: W,
            M: Q,
            N: q,
            O: K,
            P: Z,
            Q: ee,
            R: te,
            S: re,
            T: ne,
            U: oe,
            V: ae,
            W: ie,
            X: pe,
            Y: ue,
            Z: le,
            aa: fe
        }
    }()
});
Object.freeze(__g);
g = "";
__wxAppCode__['packages/library/pages/all-records/index.json'] = {
    "navigationBarTitleText": "全部馆藏",
    "disableScroll": true,
    "backgroundColor": "#FFFFFF",
    "backgroundTextStyle": "dark",
    "usingComponents": {
        "comp": "../../../../comp"
    }
};
__wxAppCode__['packages/library/pages/book-info/index.json'] = {
    "navigationBarTitleText": "图书信息",
    "disableScroll": true,
    "backgroundColor": "#FFFFFF",
    "backgroundTextStyle": "dark",
    "usingComponents": {
        "comp": "../../../../comp"
    }
};
__wxAppCode__['packages/library/pages/index.json'] = {
    "navigationBarTitleText": "图书馆",
    "disableScroll": true,
    "backgroundColor": "#FFFFFF",
    "backgroundTextStyle": "dark",
    "usingComponents": {
        "comp": "../../../comp"
    }
};;
var __WXML_DEP__ = __WXML_DEP__ || {};
__WXML_DEP__["./packages/library/pages/all-records/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/library/pages/book-info/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/library/pages/index.wxml"] = ["./base.wxml", ];
var __globalThis = (typeof __vd_version_info__ !== 'undefined' && typeof __vd_version_info__.globalThis !== 'undefined') ? __vd_version_info__.globalThis : window;
var __webviewId__ = __webviewId__;
var __wxAppCode__ = __wxAppCode__ || {};
var __subPageFrameReady__ = __globalThis.__subPageFrameReady__ || function() {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var __subPageFrameStartTime__ = Date.now();; /*v0.5vv_20211229_syb_scopedata*/
__globalThis.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
__globalThis.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
var outerGlobal = typeof __globalThis === 'undefined' ? window : __globalThis;
$gwx2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        if (typeof $gwx === 'function') $gwx('init', global);
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
        var z = __WXML_GLOBAL__.ops_set.$gwx2 || [];
        __WXML_GLOBAL__.ops_set.$gwx2 = z;
        __WXML_GLOBAL__.ops_init.$gwx2 = true;
        var nv_require = function() {
            var nnm = {};
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        var x = [];
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx2";
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
if (__vd_version_info__.delayedGwx || true) $gwx2();;
var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    var BASE_DEVICE_WIDTH = 750;
    var isIOS = navigator.userAgent.match("iPhone");
    var deviceWidth = window.screen.width || 375;
    var deviceDPR = window.devicePixelRatio || 2;
    var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
        var newDeviceWidth = window.screen.width || 375
        var newDeviceDPR = window.devicePixelRatio || 2
        var newDeviceHeight = window.screen.height || 375
        if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
        if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
            deviceWidth = newDeviceWidth
            deviceDPR = newDeviceDPR
        }
    }
    checkDeviceWidth()
    var eps = 1e-4;
    var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
        if (number === 0) return 0;
        number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
        number = Math.floor(number + eps);
        if (number === 0) {
            if (deviceDPR === 1 || !isIOS) {
                return 1;
            } else {
                return 0.5;
            }
        }
        return number;
    }
    window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
    var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__ || {}

    var setCssToHead = function(file, _xcInvalid, info) {
        var Ca = {};
        var css_id;
        var info = info || {};
        var _C = __COMMON_STYLESHEETS__

        function makeup(file, opt) {
            var _n = typeof(file) === "string";
            if (_n && Ca.hasOwnProperty(file)) return "";
            if (_n) Ca[file] = 1;
            var ex = _n ? _C[file] : file;
            var res = "";
            for (var i = ex.length - 1; i >= 0; i--) {
                var content = ex[i];
                if (typeof(content) === "object") {
                    var op = content[0];
                    if (op == 0)
                        res = transformRPX(content[1], opt.deviceWidth) + (window.__convertRpxToVw__ ? "vw" : "px") + res;
                    else if (op == 1)
                        res = opt.suffix + res;
                    else if (op == 2)
                        res = makeup(content[1], opt) + res;
                } else
                    res = content + res
            }
            return res;
        }
        var styleSheetManager = window.__styleSheetManager2__
        var rewritor = function(suffix, opt, style) {
            opt = opt || {};
            suffix = suffix || "";
            opt.suffix = suffix;
            if (opt.allowIllegalSelector != undefined && _xcInvalid != undefined) {
                if (opt.allowIllegalSelector)
                    console.warn("For developer:" + _xcInvalid);
                else {
                    console.error(_xcInvalid);
                }
            }
            Ca = {};
            css = makeup(file, opt);
            if (styleSheetManager) {
                var key = (info.path || Math.random()) + ':' + suffix
                if (!style) {
                    styleSheetManager.addItem(key, info.path);
                    window.__rpxRecalculatingFuncs__.push(function(size) {
                        opt.deviceWidth = size.width;
                        rewritor(suffix, opt, true);
                    });
                }
                styleSheetManager.setCss(key, css);
                return;
            }
            if (!style) {
                var head = document.head || document.getElementsByTagName('head')[0];
                style = document.createElement('style');
                style.type = 'text/css';
                style.setAttribute("wxss:path", info.path);
                head.appendChild(style);
                window.__rpxRecalculatingFuncs__.push(function(size) {
                    opt.deviceWidth = size.width;
                    rewritor(suffix, opt, style);
                });
            }
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                if (style.childNodes.length == 0)
                    style.appendChild(document.createTextNode(css));
                else
                    style.childNodes[0].nodeValue = css;
            }
        }
        return rewritor;
    }
    setCssToHead([])();
    setCssToHead([], undefined, {
        path: "./packages/library/app.wxss"
    })();;;
}
var __subPageFrameEndTime__ = Date.now();
__subPageFrameReady__('/packages/library/');
$gwx2_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_0 || [];

        function gz$gwx2_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx2_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx2_XC_0 = true;
        var x = ['./packages/library/pages/all-records/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx2_XC_0_1()
            var oB = e_[x[0]].i
            _ai(oB, x[1], e_, x[0], 1, 1)
            var xC = _v()
            _(r, xC)
            var oD = _oz(z, 1, e, s, gg)
            var fE = _gd(x[0], oD, e_, d_)
            if (fE) {
                var cF = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                xC.wxXCkey = 3
                fE(cF, cF, xC, gg)
                gg.f = cur_globalf
            } else _w(oD, x[0], 2, 14)
            oB.pop()
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
                g = "$gwx2_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/library/pages/all-records/index.wxml'] = [$gwx2_XC_0, './packages/library/pages/all-records/index.wxml'];
else __wxAppCode__['packages/library/pages/all-records/index.wxml'] = $gwx2_XC_0('./packages/library/pages/all-records/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/library/pages/all-records/index.wxss'] = setCssToHead([".", [1], "book-available-list{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:", [0, 30], ";margin-top:", [0, 20], "}\n.", [1], "book-available-list,.", [1], "book-available-list .", [1], "book-available-head{display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}\n.", [1], "book-available-list .", [1], "book-available-head{background-color:#afcaff;border-radius:", [0, 15], " ", [0, 15], " 0 0;gap:", [0, 5], ";padding:", [0, 25], " 0}\n.", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content{width:16.6666666667%}\n.", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content,.", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content-wide{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 24], ";height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-justify-content:center;justify-content:center}\n.", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content-wide{width:33.3333333333%}\n.", [1], "book-available-list .", [1], "book-available-item{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #e5e5e5;color:#0d0d0d;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 22], ";-webkit-justify-content:center;justify-content:center;margin-bottom:", [0, 4], ";padding:", [0, 20], " 0;width:100%}\n.", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content{width:16.6666666667%;word-break:break-all}\n.", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content,.", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content-wide{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;-webkit-justify-content:center;justify-content:center}\n.", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content-wide{font-size:", [0, 24], ";width:33.3333333333%}\n", ], undefined, {
        path: "./packages/library/pages/all-records/index.wxss"
    });
}
$gwx2_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_1 || [];

        function gz$gwx2_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx2_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx2_XC_1 = true;
        var x = ['./packages/library/pages/book-info/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx2_XC_1_1()
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
                g = "$gwx2_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/library/pages/book-info/index.wxml'] = [$gwx2_XC_1, './packages/library/pages/book-info/index.wxml'];
else __wxAppCode__['packages/library/pages/book-info/index.wxml'] = $gwx2_XC_1('./packages/library/pages/book-info/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packages/library/pages/book-info/index.wxss'] = setCssToHead(["{--nut-icon-height:", [0, 16], ";--nut-icon-width:", [0, 16], ";--nut-icon-line-height:", [0, 16], ";--animate-duration:1s;--animate-delay:0s}\nbody{--nut-icon-height:", [0, 20], ";--nut-icon-width:", [0, 20], ";--nut-icon-line-height:", [0, 20], ";--animate-duration:1s;--animate-delay:0s}\n.", [1], "nut-icon{display:inline-block;height:var(--nut-icon-height);line-height:var(--nut-icon-line-height);position:relative;text-align:right;width:var(--nut-icon-width)}\n.", [1], "nut-icon:before{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n.", [1], "nut-icon__img{height:var(--nut-icon-height);-o-object-fit:contain;object-fit:contain;width:var(--nut-icon-width)}\n.", [1], "nut-icon-loading,.", [1], "nut-icon-loading1{-webkit-animation:rotation 1s linear infinite;animation:rotation 1s linear infinite;display:inline-block}\n.", [1], "nut-icon-am-infinite{-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}\n.", [1], "nut-icon-am-jump{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:nutJumpOne;animation-name:nutJumpOne;-webkit-animation-timing-function:ease;animation-timing-function:ease}\n.", [1], "nut-icon-am-jump.", [1], "nut-icon-am-infinite{-webkit-animation-name:nutJump;animation-name:nutJump}\n.", [1], "nut-icon-am-rotate{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:rotation;animation-name:rotation;-webkit-animation-timing-function:linear;animation-timing-function:linear}\n.", [1], "nut-icon-am-rotate.", [1], "nut-icon-am-infinite{-webkit-animation-direction:normal;animation-direction:normal}\n.", [1], "nut-icon-am-blink{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:nutBlink;animation-name:nutBlink;-webkit-animation-timing-function:ease-in-out;-webkit-animation-timing-function:linear;animation-timing-function:linear}\n.", [1], "nut-icon-am-breathe{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);animation-duration:var(--animate-duration);-webkit-animation-name:nutBreathe;animation-name:nutBreathe;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\n.", [1], "nut-icon-am-breathe,.", [1], "nut-icon-am-flash{-webkit-animation-duration:var(--animate-duration)}\n.", [1], "nut-icon-am-flash{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);animation-duration:var(--animate-duration);-webkit-animation-name:nutFlash;animation-name:nutFlash;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\n.", [1], "nut-icon-am-bounce{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:nutBounce;animation-name:nutBounce;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\n.", [1], "nut-icon-am-bounce.", [1], "nut-icon-am-infinite{-webkit-animation-direction:normal;animation-direction:normal}\n.", [1], "nut-icon-am-shake{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:nutShake;animation-name:nutShake;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\n@-webkit-keyframes rotation{0%{-webkit-transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn)}\n}@keyframes rotation{0%{-webkit-transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn)}\n}@-webkit-keyframes nutJump{to{-webkit-transform:scale3d(.8,1,.9) translateY(", [0, -10], ");transform:scale3d(.8,1,.9) translateY(", [0, -10], ")}\n}@keyframes nutJump{to{-webkit-transform:scale3d(.8,1,.9) translateY(", [0, -10], ");transform:scale3d(.8,1,.9) translateY(", [0, -10], ")}\n}@-webkit-keyframes nutJumpOne{50%{-webkit-transform:scale3d(.8,1,.9) translateY(", [0, -10], ");transform:scale3d(.8,1,.9) translateY(", [0, -10], ")}\nto{-webkit-transform:scaleZ(1) translateY(0);transform:scaleZ(1) translateY(0)}\n}@keyframes nutJumpOne{50%{-webkit-transform:scale3d(.8,1,.9) translateY(", [0, -10], ");transform:scale3d(.8,1,.9) translateY(", [0, -10], ")}\nto{-webkit-transform:scaleZ(1) translateY(0);transform:scaleZ(1) translateY(0)}\n}@-webkit-keyframes nutBlink{0%{opacity:0}\nto{opacity:1}\n}@keyframes nutBlink{0%{opacity:0}\nto{opacity:1}\n}@-webkit-keyframes nutBreathe{0%,to{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.2);transform:scale(1.2)}\n}@keyframes nutBreathe{0%,to{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.2);transform:scale(1.2)}\n}@-webkit-keyframes nutFlash{0%,50%,to{opacity:1}\n25%,75%{opacity:0}\n}@keyframes nutFlash{0%,50%,to{opacity:1}\n25%,75%{opacity:0}\n}@-webkit-keyframes nutBounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}\n40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,", [0, -30], ",0) scaleY(1.1);transform:translate3d(0,", [0, -30], ",0) scaleY(1.1)}\n70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,", [0, -15], ",0) scaleY(1.05);transform:translate3d(0,", [0, -15], ",0) scaleY(1.05)}\n80%{-webkit-transform:translate3d(0,0,0) scaleY(.95);transform:translateZ(0) scaleY(.95);-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}\n90%{-webkit-transform:translate3d(0,", [0, -4], ",0) scaleY(1.02);transform:translate3d(0,", [0, -4], ",0) scaleY(1.02)}\n}@keyframes nutBounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}\n40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,", [0, -30], ",0) scaleY(1.1);transform:translate3d(0,", [0, -30], ",0) scaleY(1.1)}\n70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,", [0, -15], ",0) scaleY(1.05);transform:translate3d(0,", [0, -15], ",0) scaleY(1.05)}\n80%{-webkit-transform:translate3d(0,0,0) scaleY(.95);transform:translateZ(0) scaleY(.95);-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}\n90%{-webkit-transform:translate3d(0,", [0, -4], ",0) scaleY(1.02);transform:translate3d(0,", [0, -4], ",0) scaleY(1.02)}\n}@-webkit-keyframes nutShake{0%{-webkit-transform:translateX(0);transform:translate(0)}\n6.5%{-webkit-transform:translateX(", [0, -6], ") rotateY(-9deg);transform:translate(", [0, -6], ") rotateY(-9deg)}\n18.5%{-webkit-transform:translateX(", [0, 5], ") rotateY(7deg);transform:translate(", [0, 5], ") rotateY(7deg)}\n31.5%{-webkit-transform:translateX(", [0, -3], ") rotateY(-5deg);transform:translate(", [0, -3], ") rotateY(-5deg)}\n43.5%{-webkit-transform:translateX(", [0, 2], ") rotateY(3deg);transform:translate(", [0, 2], ") rotateY(3deg)}\n50%{-webkit-transform:translateX(0);transform:translate(0)}\n}@keyframes nutShake{0%{-webkit-transform:translateX(0);transform:translate(0)}\n6.5%{-webkit-transform:translateX(", [0, -6], ") rotateY(-9deg);transform:translate(", [0, -6], ") rotateY(-9deg)}\n18.5%{-webkit-transform:translateX(", [0, 5], ") rotateY(7deg);transform:translate(", [0, 5], ") rotateY(7deg)}\n31.5%{-webkit-transform:translateX(", [0, -3], ") rotateY(-5deg);transform:translate(", [0, -3], ") rotateY(-5deg)}\n43.5%{-webkit-transform:translateX(", [0, 2], ") rotateY(3deg);transform:translate(", [0, 2], ") rotateY(3deg)}\n50%{-webkit-transform:translateX(0);transform:translate(0)}\n}.", [1], "nut-rate{display:-webkit-flex;display:-ms-flexbox;display:flex}\n.", [1], "nut-rate-item{-ms-flex-negative:0;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-shrink:0;flex-shrink:0;margin-right:var(--nutui-rate-item-margin,", [0, 14], ");position:relative}\n.", [1], "nut-rate-item:last-child{margin-right:0}\n.", [1], "nut-rate-item__half{height:100%;left:0;overflow:hidden;position:absolute;top:0;width:50%!important}\n.", [1], "nut-rate-item__icon{color:var(--nutui-rate-icon-color,var(--nutui-brand-color,#fa2c19))}\n.", [1], "nut-rate-item__icon--disabled{color:var(--nutui-rate-icon-void-color,var(--nutui-gray-3,#bfbfbf))}\n.", [1], "nut-rate-item__icon.", [1], "nut-rate-item__icon.", [1], "nut-rate-item__icon--half{left:0;overflow:hidden;position:absolute;top:0}\n.", [1], "nut-rate-item__icon.", [1], "nut-rate-item__icon:before{left:auto;position:relative;top:auto;-webkit-transform:none;-ms-transform:none;transform:none}\n{--nut-icon-height:", [0, 16], ";--nut-icon-width:", [0, 16], ";--nut-icon-line-height:", [0, 16], ";--animate-duration:1s;--animate-delay:0s}\nbody{--nut-icon-height:", [0, 20], ";--nut-icon-width:", [0, 20], ";--nut-icon-line-height:", [0, 20], ";--animate-duration:1s;--animate-delay:0s}\n.", [1], "nut-icon{display:inline-block;font-size:var(--nut-icon-width);height:var(--nut-icon-height);line-height:var(--nut-icon-line-height);position:relative;text-align:right;width:var(--nut-icon-width)}\n.", [1], "nut-icon:before{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n.", [1], "nut-icon-img{height:var(--nut-icon-height);-o-object-fit:contain;object-fit:contain;width:var(--nut-icon-width)}\n.", [1], "nut-icon-Loading,.", [1], "nut-icon-Loading1,.", [1], "nut-icon-loading,.", [1], "nut-icon-loading1{-webkit-animation:rotation 1s linear infinite;animation:rotation 1s linear infinite;display:inline-block}\n.", [1], "nut-icon-am-infinite{-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}\n.", [1], "nut-icon-am-jump{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:nutJumpOne;animation-name:nutJumpOne;-webkit-animation-timing-function:ease;animation-timing-function:ease}\n.", [1], "nut-icon-am-jump.", [1], "nut-icon-am-infinite{-webkit-animation-name:nutJump;animation-name:nutJump}\n.", [1], "nut-icon-am-rotate{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:rotation;animation-name:rotation;-webkit-animation-timing-function:linear;animation-timing-function:linear}\n.", [1], "nut-icon-am-rotate.", [1], "nut-icon-am-infinite{-webkit-animation-direction:normal;animation-direction:normal}\n.", [1], "nut-icon-am-blink{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:nutBlink;animation-name:nutBlink;-webkit-animation-timing-function:ease-in-out;-webkit-animation-timing-function:linear;animation-timing-function:linear}\n.", [1], "nut-icon-am-breathe{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);animation-duration:var(--animate-duration);-webkit-animation-name:nutBreathe;animation-name:nutBreathe;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\n.", [1], "nut-icon-am-breathe,.", [1], "nut-icon-am-flash{-webkit-animation-duration:var(--animate-duration)}\n.", [1], "nut-icon-am-flash{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);animation-duration:var(--animate-duration);-webkit-animation-name:nutFlash;animation-name:nutFlash;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\n.", [1], "nut-icon-am-bounce{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:nutBounce;animation-name:nutBounce;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\n.", [1], "nut-icon-am-bounce.", [1], "nut-icon-am-infinite{-webkit-animation-direction:normal;animation-direction:normal}\n.", [1], "nut-icon-am-shake{-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay);-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-name:nutShake;animation-name:nutShake;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\n@-webkit-keyframes rotation{0%{-webkit-transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn)}\n}@keyframes rotation{0%{-webkit-transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn)}\n}@-webkit-keyframes nutJump{to{-webkit-transform:scale3d(.8,1,.9) translateY(", [0, -10], ");transform:scale3d(.8,1,.9) translateY(", [0, -10], ")}\n}@keyframes nutJump{to{-webkit-transform:scale3d(.8,1,.9) translateY(", [0, -10], ");transform:scale3d(.8,1,.9) translateY(", [0, -10], ")}\n}@-webkit-keyframes nutJumpOne{50%{-webkit-transform:scale3d(.8,1,.9) translateY(", [0, -10], ");transform:scale3d(.8,1,.9) translateY(", [0, -10], ")}\nto{-webkit-transform:scaleZ(1) translateY(0);transform:scaleZ(1) translateY(0)}\n}@keyframes nutJumpOne{50%{-webkit-transform:scale3d(.8,1,.9) translateY(", [0, -10], ");transform:scale3d(.8,1,.9) translateY(", [0, -10], ")}\nto{-webkit-transform:scaleZ(1) translateY(0);transform:scaleZ(1) translateY(0)}\n}@-webkit-keyframes nutBlink{0%{opacity:0}\nto{opacity:1}\n}@keyframes nutBlink{0%{opacity:0}\nto{opacity:1}\n}@-webkit-keyframes nutBreathe{0%,to{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.2);transform:scale(1.2)}\n}@keyframes nutBreathe{0%,to{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.2);transform:scale(1.2)}\n}@-webkit-keyframes nutFlash{0%,50%,to{opacity:1}\n25%,75%{opacity:0}\n}@keyframes nutFlash{0%,50%,to{opacity:1}\n25%,75%{opacity:0}\n}@-webkit-keyframes nutBounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}\n40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,", [0, -30], ",0) scaleY(1.1);transform:translate3d(0,", [0, -30], ",0) scaleY(1.1)}\n70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,", [0, -15], ",0) scaleY(1.05);transform:translate3d(0,", [0, -15], ",0) scaleY(1.05)}\n80%{-webkit-transform:translate3d(0,0,0) scaleY(.95);transform:translateZ(0) scaleY(.95);-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}\n90%{-webkit-transform:translate3d(0,", [0, -4], ",0) scaleY(1.02);transform:translate3d(0,", [0, -4], ",0) scaleY(1.02)}\n}@keyframes nutBounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}\n40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,", [0, -30], ",0) scaleY(1.1);transform:translate3d(0,", [0, -30], ",0) scaleY(1.1)}\n70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,", [0, -15], ",0) scaleY(1.05);transform:translate3d(0,", [0, -15], ",0) scaleY(1.05)}\n80%{-webkit-transform:translate3d(0,0,0) scaleY(.95);transform:translateZ(0) scaleY(.95);-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}\n90%{-webkit-transform:translate3d(0,", [0, -4], ",0) scaleY(1.02);transform:translate3d(0,", [0, -4], ",0) scaleY(1.02)}\n}@-webkit-keyframes nutShake{0%{-webkit-transform:translateX(0);transform:translate(0)}\n6.5%{-webkit-transform:translateX(", [0, -6], ") rotateY(-9deg);transform:translate(", [0, -6], ") rotateY(-9deg)}\n18.5%{-webkit-transform:translateX(", [0, 5], ") rotateY(7deg);transform:translate(", [0, 5], ") rotateY(7deg)}\n31.5%{-webkit-transform:translateX(", [0, -3], ") rotateY(-5deg);transform:translate(", [0, -3], ") rotateY(-5deg)}\n43.5%{-webkit-transform:translateX(", [0, 2], ") rotateY(3deg);transform:translate(", [0, 2], ") rotateY(3deg)}\n50%{-webkit-transform:translateX(0);transform:translate(0)}\n}@keyframes nutShake{0%{-webkit-transform:translateX(0);transform:translate(0)}\n6.5%{-webkit-transform:translateX(", [0, -6], ") rotateY(-9deg);transform:translate(", [0, -6], ") rotateY(-9deg)}\n18.5%{-webkit-transform:translateX(", [0, 5], ") rotateY(7deg);transform:translate(", [0, 5], ") rotateY(7deg)}\n31.5%{-webkit-transform:translateX(", [0, -3], ") rotateY(-5deg);transform:translate(", [0, -3], ") rotateY(-5deg)}\n43.5%{-webkit-transform:translateX(", [0, 2], ") rotateY(3deg);transform:translate(", [0, 2], ") rotateY(3deg)}\n50%{-webkit-transform:translateX(0);transform:translate(0)}\n}.", [1], "book-info-container{-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-backdrop-filter:blur(", [0, 140], ");backdrop-filter:blur(", [0, 140], ");background-color:rgba(0,0,0,.3);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:", [0, 50], ";padding:2% 4% 0 5%;width:", [0, 750], "}\n.", [1], "book-info-container .", [1], "book-info-title{display:-webkit-flex;display:-ms-flexbox;display:flex;height:", [0, 270], ";width:100%}\n.", [1], "book-info-container .", [1], "book-info-title .", [1], "book-pic{border-radius:8%;height:100%;margin-right:", [0, 20], ";width:", [0, 200], "}\n.", [1], "book-info-container .", [1], "book-info-title .", [1], "book-info-group{-ms-flex-pack:justify;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:space-between;justify-content:space-between;margin-right:", [0, 30], "}\n.", [1], "book-info-container .", [1], "book-info-title .", [1], "book-info-group .", [1], "rating-box{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-backdrop-filter:blur(", [0, 10], ");backdrop-filter:blur(", [0, 10], ");background-color:#9b9b9b;border-radius:", [0, 8], ";-webkit-box-shadow:0 ", [0, 8], " ", [0, 8], " rgba(0,0,0,.25);box-shadow:0 ", [0, 8], " ", [0, 8], " rgba(0,0,0,.25);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:", [0, 2], " ", [0, 30], "}\n.", [1], "book-info-container .", [1], "book-info-title .", [1], "book-info-group .", [1], "book-name{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#fff;display:-webkit-box;font-size:", [0, 38], ";font-weight:700;letter-spacing:", [0, 2], ";overflow:hidden}\n.", [1], "book-info-container .", [1], "book-info-title .", [1], "book-info-group .", [1], "info{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#f0f0f0;display:-webkit-box;font-size:", [0, 24], ";font-weight:350;letter-spacing:", [0, 2], ";opacity:.8;overflow:hidden}\n.", [1], "book-info-container .", [1], "book-info-content{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;background-color:#282828;border-radius:", [0, 25], ";-webkit-box-shadow:0 ", [0, 8], " ", [0, 8], " 0 rgba(0,0,0,.35);box-shadow:0 ", [0, 8], " ", [0, 8], " 0 rgba(0,0,0,.35);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;opacity:.35;padding:", [0, 20], " ", [0, 50], ";width:100%}\n.", [1], "book-info-container .", [1], "book-info-content .", [1], "book-content{color:#cbcbcb;font-size:", [0, 22], ";line-height:", [0, 40], ";opacity:1;text-shadow:0 ", [0, 8], " ", [0, 8], " rgba(0,0,0,.25)}\n.", [1], "book-info-container .", [1], "book-info-content .", [1], "divide{background:#ccc;height:", [0, 1], ";margin:", [0, 6], " auto ", [0, 12], ";-webkit-transform:scale(1,.5);-ms-transform:scale(1,.5);transform:scale(1,.5);width:100%}\n.", [1], "book-info-container .", [1], "book-description{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}\n.", [1], "book-info-container .", [1], "book-description .", [1], "book-des-title{color:#fff;font-size:", [0, 32], ";font-weight:600;margin-bottom:", [0, 12], "}\n.", [1], "book-info-container .", [1], "book-description .", [1], "description{color:#fff;font-size:", [0, 24], ";font-weight:400;letter-spacing:", [0, 3], ";line-height:", [0, 36], "}\n.", [1], "book-info-container .", [1], "book-available{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}\n.", [1], "book-info-container .", [1], "book-available .", [1], "divide{background:#ccc;height:", [0, 1], ";margin:", [0, 2], " auto ", [0, 12], ";-webkit-transform:scale(1,.5);-ms-transform:scale(1,.5);transform:scale(1,.5);width:90%}\n.", [1], "book-info-container .", [1], "book-available .", [1], "book-des-title{color:#fff;font-size:", [0, 32], ";font-weight:600;margin-bottom:", [0, 12], "}\n.", [1], "book-info-container .", [1], "book-available .", [1], "book-available-list{background:rgba(40,40,40,.35);border-radius:", [0, 25], ";-webkit-box-shadow:", [0, 0], " ", [0, 0], " ", [0, 0], " ", [0, 0], " #5a5a5a;box-shadow:", [0, 0], " ", [0, 0], " ", [0, 0], " ", [0, 0], " #5a5a5a;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:", [0, 4], ";width:100%}\n.", [1], "book-info-container .", [1], "book-available .", [1], "book-available-list .", [1], "book-available-head{-ms-flex-pack:justify;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 24], ";font-weight:400;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 10], " 0;width:100%}\n.", [1], "book-info-container .", [1], "book-available .", [1], "book-available-list .", [1], "book-available-head .", [1], "book-content{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;width:20%}\n.", [1], "book-info-container .", [1], "book-available .", [1], "book-available-list .", [1], "book-available-item{-ms-flex-pack:justify;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#cbcbcb;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:", [0, 22], ";-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 4], ";width:100%}\n.", [1], "book-info-container .", [1], "book-available .", [1], "book-available-list .", [1], "book-available-item .", [1], "book-content{-ms-flex-pack:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;width:20%;word-break:break-all}\n.", [1], "book-info-container .", [1], "book-prefer{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}\n.", [1], "book-info-container .", [1], "book-prefer .", [1], "book-des-title{color:#fff;font-size:", [0, 32], ";font-weight:600;margin-bottom:", [0, 20], "}\n.", [1], "book-info-container .", [1], "book-prefer .", [1], "book-prefer-list{color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:", [0, 20], ";gap:", [0, 10], ";width:100%}\n.", [1], "book-info-container .", [1], "book-recommend{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}\n.", [1], "book-info-container .", [1], "book-recommend .", [1], "book-des-title{color:#fff;font-size:", [0, 32], ";font-weight:600;margin-bottom:", [0, 12], "}\n.", [1], "book-info-container .", [1], "book-recommend .", [1], "book-recommend-list{color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:", [0, 20], ";gap:", [0, 10], ";width:100%}\n.", [1], "book-item{-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:", [0, 200], ";max-width:calc((100% - ", [0, 40], ") / 5);width:20%}\n.", [1], "book-item .", [1], "book-pic{border-radius:8%;height:", [0, 170], ";width:100%}\n.", [1], "book-item .", [1], "book-title{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#fff;display:-webkit-box;font-size:", [0, 22], ";font-weight:400;margin-top:", [0, 10], ";overflow:hidden}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packages/library/pages/book-info/index.wxss:3:565)", {
        path: "./packages/library/pages/book-info/index.wxss"
    });
}
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