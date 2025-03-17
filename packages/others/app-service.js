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
__wxAppCode__['packages/others/pages/app-list/index.json'] = {
    "navigationBarTitleText": "应用中心",
    "backgroundColor": "#F5F5F5",
    "disableScroll": true,
    "usingComponents": {
        "comp": "../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/detail-info/annouce-detail/index.json'] = {
    "usingComponents": {
        "comp": "../../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/detail-info/edu-detail/index.json'] = {
    "usingComponents": {
        "comp": "../../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/detail-info/news-detail/index.json'] = {
    "usingComponents": {
        "comp": "../../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/edu-news/index.json'] = {
    "disableScroll": true,
    "usingComponents": {
        "comp": "../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/information/index.json'] = {
    "disableScroll": true,
    "usingComponents": {
        "comp": "../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/news-message/index.json'] = {
    "disableScroll": true,
    "usingComponents": {
        "comp": "../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/notice-announcement/index.json'] = {
    "disableScroll": true,
    "usingComponents": {
        "comp": "../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/school-bus/index.json'] = {
    "disableScroll": true,
    "usingComponents": {
        "comp": "../../../../comp"
    }
};
__wxAppCode__['packages/others/pages/school-calendar/index.json'] = {
    "disableScroll": true,
    "usingComponents": {
        "comp": "../../../../comp"
    }
};;
var __WXML_DEP__ = __WXML_DEP__ || {};
__WXML_DEP__["./packages/others/pages/app-list/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/detail-info/annouce-detail/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/detail-info/edu-detail/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/detail-info/news-detail/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/edu-news/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/information/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/news-message/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/notice-announcement/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/school-bus/index.wxml"] = ["./base.wxml", ];
__WXML_DEP__["./packages/others/pages/school-calendar/index.wxml"] = ["./base.wxml", ]; /*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3 || [];
        __WXML_GLOBAL__.ops_set.$gwx3 = z;
        __WXML_GLOBAL__.ops_init.$gwx3 = true;
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
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx3";
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
if (__vd_version_info__.delayedGwx || true) $gwx3();;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/others/sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see 5cadce6ba9a3c23f663c84fdf39fc435.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/5cadce6ba9a3c23f663c84fdf39fc435"], {
            "./src/packages/others/assets/back.svg": function(M) {
                M.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjAwMDA2IDQuNTYyNUw5LjA0NTUzIDMuNUwxNi43MTkxIDExLjI5ODZDMTcuMTAyMSAxMS42ODc4IDE3LjEwMjEgMTIuMzEyMiAxNi43MTkxIDEyLjcwMTRMOS4wNDU1MyAyMC41TDguMDAwMDYgMTkuNDM3NUwxNS4zMTgzIDEyTDguMDAwMDYgNC41NjI1WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC45Ii8+Cjwvc3ZnPgo="
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/others/sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/others/sub-common/ed38b011cfb987b1850ffd548c33fde1.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see ed38b011cfb987b1850ffd548c33fde1.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["sub-common/ed38b011cfb987b1850ffd548c33fde1"], {
            "./src/components/TabsFolder/index.tsx": function(e, n, t) {
                t.d(n, {
                    Tab: function() {
                        return d
                    },
                    TabList: function() {
                        return u
                    },
                    TabPanel: function() {
                        return m
                    },
                    TabPanels: function() {
                        return b
                    },
                    TabsFolderView: function() {
                        return o
                    }
                });
                var r = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    i = t("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    a = t("webpack/container/remote/react"),
                    l = t.n(a),
                    c = t("webpack/container/remote/react/jsx-runtime"),
                    s = (0, a.createContext)(null);

                function o(e) {
                    var n = (0, a.useState)(e.defaultActiveTab),
                        t = (0, r.default)(n, 2),
                        l = t[0],
                        o = t[1],
                        u = (0, a.useMemo)((function() {
                            return {
                                activeTab: l,
                                setActiveTab: o
                            }
                        }), [l, o]);
                    return (0, c.jsx)(i.View, {
                        className: "tabs-folder-view",
                        children: (0, c.jsx)(s.Provider, {
                            value: u,
                            children: e.children
                        })
                    })
                }

                function u(e) {
                    var n = (0, a.useContext)(s);
                    return (0, c.jsx)(i.View, {
                        className: "tab-list",
                        style: e.style,
                        children: l().Children.map(e.children, (function(e, t) {
                            if ((null == e ? void 0 : e.type) !== d) throw new Error("TabList children must be Tab component");
                            if (null != e) return l().cloneElement(e, {
                                onClick: function() {
                                    return null == n ? void 0 : n.setActiveTab(t)
                                },
                                active: (null == n ? void 0 : n.activeTab) === t
                            })
                        }))
                    })
                }

                function d(e) {
                    return (0, c.jsx)(i.View, {
                        style: e.style,
                        className: e.active ? "tab-list-item tab-list-item-actived" : "tab-list-item",
                        onClick: e.onClick,
                        children: e.children
                    })
                }

                function b(e) {
                    var n = (0, a.useContext)(s);
                    return l().Children.map(e.children, (function(e) {
                        if ((null == e ? void 0 : e.type) !== m) throw new Error("TabPanels children must be TabPanel component")
                    })), (0, c.jsx)(i.Swiper, {
                        style: {
                            height: e.height
                        },
                        className: "tab-panels",
                        current: null == n ? void 0 : n.activeTab,
                        onChange: function(e) {
                            null == n || n.setActiveTab(e.detail.current)
                        },
                        children: e.children
                    })
                }

                function m(e) {
                    return (0, c.jsx)(i.SwiperItem, {
                        className: "tab-panel-item",
                        children: e.children
                    })
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/others/sub-common/ed38b011cfb987b1850ffd548c33fde1.js'
});;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packages/others/sub-vendors.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    /*! For license information please see sub-vendors.js.LICENSE.txt */
    "use strict";
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/sub-vendors"], {
            "./src/components/LoadingIcon/index.tsx": function(e, n, t) {
                var s = t("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = t("webpack/container/remote/react/jsx-runtime");
                n.default = function() {
                    return (0, o.jsx)(s.View, {
                        className: "modal",
                        children: (0, o.jsxs)("div", {
                            className: "loading",
                            children: [(0, o.jsx)("div", {
                                className: "item1"
                            }), (0, o.jsx)("div", {
                                className: "item2"
                            }), (0, o.jsx)("div", {
                                className: "item3"
                            }), (0, o.jsx)("div", {
                                className: "item4"
                            }), (0, o.jsx)("div", {
                                className: "item5"
                            }), (0, o.jsx)("div", {
                                className: "item6"
                            }), (0, o.jsx)("div", {
                                className: "item7"
                            }), (0, o.jsx)("div", {
                                className: "item8"
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/api/index.ts": function(e, n, t) {
                t.d(n, {
                    DetailAnnoucement: function() {
                        return i
                    },
                    DetailEduMes: function() {
                        return l
                    },
                    DetailNewsMessage: function() {
                        return a
                    },
                    getAnnouceMessage: function() {
                        return u
                    },
                    getEduNewsMessage: function() {
                        return c
                    },
                    getNewsMessage: function() {
                        return r
                    },
                    getSchoolBus: function() {
                        return o
                    },
                    getSchoolCalendar: function() {
                        return s
                    }
                });
                var s = function(e) {
                        return e.request({
                            url: "/other/schoolCalender/",
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    },
                    o = function(e) {
                        return e.request({
                            url: "/other/schoolBus/",
                            method: "GET"
                        }, {
                            base: "main"
                        })
                    },
                    r = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/news",
                            method: "GET",
                            data: {
                                page: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    a = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/news/detail",
                            method: "GET",
                            data: {
                                url: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    u = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/notice",
                            method: "GET",
                            data: {
                                page: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    i = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/notice/detail",
                            method: "GET",
                            data: {
                                url: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    c = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/education",
                            method: "GET",
                            data: {
                                page: n
                            }
                        }, {
                            base: "main"
                        })
                    },
                    l = function(e, n) {
                        return e.request({
                            url: "/other/schoolInfo/education/detail",
                            method: "GET",
                            data: {
                                url: n
                            }
                        }, {
                            base: "main"
                        })
                    }
            },
            "./src/packages/others/assets/index.ts": function(e, n, t) {
                t.d(n, {
                    INFORMATION_ASSETS: function() {
                        return r
                    },
                    SCHOOL_BUS_ASSETS: function() {
                        return o
                    }
                });
                var s = t("./src/constants/assets.ts"),
                    o = new Proxy({
                        Card_0_Arrow: "packages/others/school-bus-arrow-0.png",
                        Card_0_Background: "packages/others/school-bus-bg-0.png",
                        Card_1_Arrow: "packages/others/school-bus-arrow-1.png",
                        Card_1_Background: "packages/others/school-bus-bg-1.png",
                        Card_2_Arrow: "packages/others/school-bus-arrow-2.png",
                        Card_2_Background: "packages/others/school-bus-bg-2.png"
                    }, s.handler),
                    r = new Proxy({
                        AllRead: "packages/others/all-read.png",
                        AllClear: "packages/others/all-clear.png"
                    }, s.handler)
            },
            "./src/packages/others/module/edu-news/hooks.ts": function(e, n, t) {
                t.d(n, {
                    useEduNews: function() {
                        return o
                    },
                    useEduNewsDetail: function() {
                        return r
                    }
                });
                var s = t("webpack/container/remote/react-redux"),
                    o = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.EduNewsMessage.EduNewsLists
                        }))
                    },
                    r = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.EduNewsMessage.DetailInfo
                        }))
                    }
            },
            "./src/packages/others/module/edu-news/index.ts": function(e, n, t) {
                t.d(n, {
                    EduModule: function() {
                        return g
                    },
                    useEduNews: function() {
                        return b.useEduNews
                    },
                    useEduNewsDetail: function() {
                        return b.useEduNewsDetail
                    }
                });
                var s, o = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    a = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    u = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    i = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    c = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    l = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    d = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = t("./src/packages/others/api/index.ts"),
                    p = t("./src/constants/module.ts"),
                    f = t("./src/common/mini4/Mini4BaseModule.ts"),
                    h = t("./src/packages/others/module/edu-news/store.ts"),
                    b = t("./src/packages/others/module/edu-news/hooks.ts"),
                    g = new((0, f.injectReducers)(h.EduNewsMessageSlice)(s = function(e, n) {
                        (0, c.default)(s, e);
                        var t = (0, l.default)(s);

                        function s() {
                            var e;
                            (0, a.default)(this, s);
                            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                            return e = t.call.apply(t, [this].concat(o)), (0, d.default)((0, i.default)(e), "id", p.ModuleID.edu_News), (0, d.default)((0, i.default)(e), "slice", h.EduNewsMessageSlice), e
                        }
                        return (0, u.default)(s, [{
                            key: "auto",
                            value: function() {
                                return (n = n || (0, r.default)((0, o.default)().mark((function e() {
                                    return (0, o.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.LoadEduNews();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }, {
                            key: "LoadEduNews",
                            value: function(e) {
                                var n = this;
                                return e ? (0, m.getEduNewsMessage)(this.requestController, e + 1).then((function(e) {
                                    return n.store.dispatch((0, h.setEduNewsContent)(e.data)), e.data
                                })) : (0, m.getEduNewsMessage)(this.requestController, 1).then((function(e) {
                                    return n.store.dispatch((0, h.setEduNewsContent)(e.data)), e.data
                                }))
                            }
                        }, {
                            key: "DetailInfo",
                            value: function(e) {
                                var n = this;
                                return (0, m.DetailEduMes)(this.requestController, e).then((function(e) {
                                    n.store.dispatch((0, h.storeDetailInfo)(e.data))
                                }))
                            }
                        }]), s
                    }(f.Mini4BaseModule)) || s)
            },
            "./src/packages/others/module/edu-news/store.ts": function(e, n, t) {
                t.d(n, {
                    EduNewsMessageSlice: function() {
                        return s
                    },
                    setEduNewsContent: function() {
                        return r
                    },
                    storeDetailInfo: function() {
                        return a
                    }
                });
                var s = (0, t("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "EduNewsMessage",
                        initialState: {
                            EduNewsLists: [],
                            DetailInfo: {}
                        },
                        reducers: {
                            setEduNewsContent: function(e, n) {
                                e.EduNewsLists = e.EduNewsLists.concat(n.payload)
                            },
                            storeDetailInfo: function(e, n) {
                                e.DetailInfo = n.payload
                            }
                        }
                    }),
                    o = s.actions,
                    r = o.setEduNewsContent,
                    a = o.storeDetailInfo
            },
            "./src/packages/others/module/news-message/hooks.ts": function(e, n, t) {
                t.d(n, {
                    useNewsDetail: function() {
                        return r
                    },
                    useNewsMessage: function() {
                        return o
                    }
                });
                var s = t("webpack/container/remote/react-redux"),
                    o = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.newsMessage.newsList
                        }))
                    },
                    r = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.newsMessage.DetailInfo
                        }))
                    }
            },
            "./src/packages/others/module/news-message/index.ts": function(e, n, t) {
                t.d(n, {
                    newsMessageModule: function() {
                        return g
                    },
                    useNewsDetail: function() {
                        return b.useNewsDetail
                    },
                    useNewsMessage: function() {
                        return b.useNewsMessage
                    }
                });
                var s, o = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    a = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    u = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    i = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    c = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    l = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    d = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = t("./src/packages/others/api/index.ts"),
                    p = t("./src/constants/module.ts"),
                    f = t("./src/common/mini4/Mini4BaseModule.ts"),
                    h = t("./src/packages/others/module/news-message/store.ts"),
                    b = t("./src/packages/others/module/news-message/hooks.ts"),
                    g = new((0, f.injectReducers)(h.newsMessageSlice)(s = function(e, n) {
                        (0, c.default)(s, e);
                        var t = (0, l.default)(s);

                        function s() {
                            var e;
                            (0, a.default)(this, s);
                            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                            return e = t.call.apply(t, [this].concat(o)), (0, d.default)((0, i.default)(e), "id", p.ModuleID.newsMessage), (0, d.default)((0, i.default)(e), "slice", h.newsMessageSlice), e
                        }
                        return (0, u.default)(s, [{
                            key: "auto",
                            value: function() {
                                return (n = n || (0, r.default)((0, o.default)().mark((function e() {
                                    return (0, o.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.LoadNewsMessage();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }, {
                            key: "LoadNewsMessage",
                            value: function(e) {
                                var n = this;
                                return e ? (0, m.getNewsMessage)(this.requestController, e + 1).then((function(e) {
                                    return n.store.dispatch((0, h.setNewsContent)(e.data)), e.data
                                })) : (0, m.getNewsMessage)(this.requestController, 1).then((function(e) {
                                    return n.store.dispatch((0, h.setNewsContent)(e.data)), e.data
                                }))
                            }
                        }, {
                            key: "DetailInfo",
                            value: function(e) {
                                var n = this;
                                return (0, m.DetailNewsMessage)(this.requestController, e).then((function(e) {
                                    n.store.dispatch((0, h.storeDetailInfo)(e.data))
                                }))
                            }
                        }]), s
                    }(f.Mini4BaseModule)) || s)
            },
            "./src/packages/others/module/news-message/store.ts": function(e, n, t) {
                t.d(n, {
                    newsMessageSlice: function() {
                        return s
                    },
                    setNewsContent: function() {
                        return r
                    },
                    storeDetailInfo: function() {
                        return a
                    }
                });
                var s = (0, t("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "newsMessage",
                        initialState: {
                            newsList: [],
                            DetailInfo: {}
                        },
                        reducers: {
                            setNewsContent: function(e, n) {
                                e.newsList = e.newsList.concat(n.payload)
                            },
                            storeDetailInfo: function(e, n) {
                                e.DetailInfo = n.payload
                            }
                        }
                    }),
                    o = s.actions,
                    r = o.setNewsContent,
                    a = o.storeDetailInfo
            },
            "./src/packages/others/module/notice-annoucement/hooks.ts": function(e, n, t) {
                t.d(n, {
                    useAnnouceDetail: function() {
                        return r
                    },
                    useAnnoucement: function() {
                        return o
                    }
                });
                var s = t("webpack/container/remote/react-redux"),
                    o = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.noticeAnnoucement.AnnouceList
                        }))
                    },
                    r = function() {
                        return (0, s.useSelector)((function(e) {
                            return null == e ? void 0 : e.noticeAnnoucement.DetailInfo
                        }))
                    }
            },
            "./src/packages/others/module/notice-annoucement/index.ts": function(e, n, t) {
                t.d(n, {
                    AnnouceModule: function() {
                        return g
                    },
                    useAnnouceDetail: function() {
                        return b.useAnnouceDetail
                    },
                    useAnnoucement: function() {
                        return b.useAnnoucement
                    }
                });
                var s, o = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    a = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    u = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    i = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    c = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    l = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    d = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = t("./src/packages/others/api/index.ts"),
                    p = t("./src/constants/module.ts"),
                    f = t("./src/common/mini4/Mini4BaseModule.ts"),
                    h = t("./src/packages/others/module/notice-annoucement/store.ts"),
                    b = t("./src/packages/others/module/notice-annoucement/hooks.ts"),
                    g = new((0, f.injectReducers)(h.AnnouceSlice)(s = function(e, n) {
                        (0, c.default)(s, e);
                        var t = (0, l.default)(s);

                        function s() {
                            var e;
                            (0, a.default)(this, s);
                            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                            return e = t.call.apply(t, [this].concat(o)), (0, d.default)((0, i.default)(e), "id", p.ModuleID.noticeAnnoucement), (0, d.default)((0, i.default)(e), "slice", h.AnnouceSlice), e
                        }
                        return (0, u.default)(s, [{
                            key: "auto",
                            value: function() {
                                return (n = n || (0, r.default)((0, o.default)().mark((function e() {
                                    return (0, o.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.LoadAnnoucement();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }, {
                            key: "LoadAnnoucement",
                            value: function(e) {
                                var n = this;
                                return e ? (0, m.getAnnouceMessage)(this.requestController, e + 1).then((function(e) {
                                    return n.store.dispatch((0, h.setAnnouceContent)(e.data)), e.data
                                })) : (0, m.getAnnouceMessage)(this.requestController, 1).then((function(e) {
                                    return n.store.dispatch((0, h.setAnnouceContent)(e.data)), e.data
                                }))
                            }
                        }, {
                            key: "DetailInfo",
                            value: function(e) {
                                var n = this;
                                return (0, m.DetailAnnoucement)(this.requestController, e).then((function(e) {
                                    n.store.dispatch((0, h.storeDetailInfo)(e.data))
                                }))
                            }
                        }]), s
                    }(f.Mini4BaseModule)) || s)
            },
            "./src/packages/others/module/notice-annoucement/store.ts": function(e, n, t) {
                t.d(n, {
                    AnnouceSlice: function() {
                        return s
                    },
                    setAnnouceContent: function() {
                        return r
                    },
                    storeDetailInfo: function() {
                        return a
                    }
                });
                var s = (0, t("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "noticeAnnoucement",
                        initialState: {
                            AnnouceList: [],
                            DetailInfo: {}
                        },
                        reducers: {
                            setAnnouceContent: function(e, n) {
                                e.AnnouceList = e.AnnouceList.concat(n.payload)
                            },
                            storeDetailInfo: function(e, n) {
                                e.DetailInfo = n.payload
                            }
                        }
                    }),
                    o = s.actions,
                    r = o.setAnnouceContent,
                    a = o.storeDetailInfo
            },
            "./src/packages/others/pages/detail-info/utils/preView.ts": function(e, n, t) {
                t.d(n, {
                    PreViewFile: function() {
                        return r
                    }
                });
                var s = t("webpack/container/remote/@tarojs/taro"),
                    o = t.n(s),
                    r = function(e) {
                        o().showLoading({
                            title: "请稍后..."
                        }), o().downloadFile({
                            url: e,
                            success: function(e) {
                                if (200 === e.statusCode) {
                                    var n = e.tempFilePath;
                                    o().hideLoading(), o().openDocument({
                                        filePath: n,
                                        success: function() {},
                                        fail: function(e) {
                                            o().showToast({
                                                icon: "error",
                                                title: "预览失败"
                                            })
                                        }
                                    })
                                }
                            },
                            fail: function(e) {
                                o().hideLoading(), o().showToast({
                                    icon: "error",
                                    title: "文件下载失败"
                                })
                            }
                        })
                    }
            },
            "./src/packages/others/pages/detail-info/utils/replaceScript.ts": function(e, n, t) {
                function s(e, n, t) {
                    var s = /font-size:\s*([^;]+);/g,
                        o = /text-indent:\s*([^;]+);/g,
                        r = e.replace(/&nbsp;/g, " ");
                    return (r = (r = (r = (r = (r = r.replace(/(<img\s+.*?src=(['"])([^'"]+)(['"])\s*.*?>)|(&nbsp;)|(font-size:\s*([^;]+);)|(text-indent:\s*([^;]+);)|(mso-[^:]+:[^;]+;)/g, (function(e, t, r, a, u, i, c, l, d) {
                        if (i) return " ";
                        if (t) {
                            if (a.toLowerCase().endsWith(".gif")) return '<img src="'.concat(n).concat(a, '" style="width: 10px; height: 10px; object-fit: cover; margin-right: 8px; font-size: 16px;"/>');
                            var m = "".concat(n).concat(a),
                                p = e.replace(s, "");
                            return (p = (p = p.replace(o, "")).replace(/mso-[^:]+:[^;]+;/g, "")).replace(a, m)
                        }
                        return c ? "font-size: 16px;" : l || d ? "" : e
                    }))).replace(/<tr\s+.*?>/g, "<tr>")).replace(/<td\s+.*?>/g, "<td>")).replace(/<table\s+.*?>/g, "<table>")).replace(/<a\s+href=["']([^"']+)["']\s*.*?>(.*?)<\/a>/g, (function(e, t, s) {
                        var o = t.startsWith("http") ? t : "".concat(n).concat(t);
                        return '<span class="hidelink" style="color: #1ABADE; width: 100%; display: block; padding: 5px 0; text-decoration: underline; cursor: pointer; position: relative;  width: 100%;" data-href="'.concat(o, '">').concat(s, "</span>")
                    }))).replace(/margin-bottom:\s*[^;]+;/g, "")
                }
                t.d(n, {
                    replaceScript: function() {
                        return s
                    }
                })
            },
            "./src/packages/others/pages/utils/debounce.ts": function(e, n, t) {
                t.d(n, {
                    deBounce: function() {
                        return s
                    }
                });
                var s = function(e, n) {
                    var t;
                    return function() {
                        for (var s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r];
                        t && clearTimeout(t), t = setTimeout((function() {
                            e.apply(void 0, o)
                        }), n)
                    }
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packages/others/sub-vendors.js'
});
$gwx3_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_0 || [];

        function gz$gwx3_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_0 = true;
        var x = ['./packages/others/pages/app-list/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_0_1()
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
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx3_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/app-list/index.wxml'] = [$gwx3_XC_0, './packages/others/pages/app-list/index.wxml'];
else __wxAppCode__['packages/others/pages/app-list/index.wxml'] = $gwx3_XC_0('./packages/others/pages/app-list/index.wxml');;
__wxRoute = "packages/others/pages/app-list/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/app-list/index.js";
define("packages/others/pages/app-list/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/app-list/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/app-list/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return b
                    }
                });
                var t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    r = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    n = a("webpack/container/remote/@tarojs/taro"),
                    o = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    c = a("./src/common/hook.ts"),
                    p = a("./src/components/PageLayout/index.tsx"),
                    d = a("./src/components/PageScroll/index.tsx"),
                    l = a("./src/packages/others/pages/app-list/AppCardItem/index.tsx"),
                    i = a("./src/common/module/app/index.ts"),
                    m = a("webpack/container/remote/react/jsx-runtime"),
                    u = a("webpack/container/remote/react"),
                    x = function(e) {
                        var s = e.title,
                            a = e.data;
                        return (0, m.jsxs)(o.View, {
                            className: "app-card",
                            children: [(0, m.jsx)(o.Text, {
                                className: "card-title",
                                children: s
                            }), (0, m.jsx)(o.View, {
                                className: "card-content",
                                children: a.map((function(e) {
                                    return (0, u.createElement)(l.AppCardItem, (0, r.default)((0, r.default)({}, e), {}, {
                                        key: e.id
                                    }))
                                }))
                            })]
                        })
                    },
                    h = function() {
                        var e = (0, i.useAllApps)(),
                            s = (0, i.useEditApps)(),
                            a = (0, i.useEditState)(),
                            c = (0, t.default)(a, 2),
                            p = c[0],
                            h = c[1];
                        return (0, n.useUnload)((function() {
                            p && i.AppListModule.refreshEdit()
                        })), (0, m.jsxs)(d.PageScroll, {
                            className: "app-list",
                            children: [(0, m.jsxs)(o.View, {
                                className: "app-list-head",
                                children: [(0, m.jsxs)(o.View, {
                                    className: "head-wrap",
                                    children: [(0, m.jsxs)(o.View, {
                                        className: "head-apps",
                                        children: [(0, m.jsx)(o.Text, {
                                            className: "head-apps-title",
                                            children: "主页应用"
                                        }), s.map((function(e) {
                                            return (0, m.jsx)(o.Image, {
                                                className: "head-apps-item",
                                                src: e.url.getNetCacheAsset()
                                            }, e.id)
                                        }))]
                                    }), (0, m.jsx)(o.View, {
                                        className: "head-edit",
                                        onClick: function() {
                                            if (!p) return h(!0);
                                            i.AppListModule.saveHomeApps(s)
                                        },
                                        children: (0, m.jsx)(o.Text, {
                                            className: "head-edit-text",
                                            children: p ? "保存" : "编辑"
                                        })
                                    })]
                                }), (0, m.jsx)(o.View, {
                                    className: "head-home-apps ".concat(p ? "expand" : ""),
                                    children: (0, m.jsx)(o.View, {
                                        className: "home-apps-wrap",
                                        children: s.map((function(e) {
                                            return (0, u.createElement)(l.AppCardItem, (0, r.default)((0, r.default)({}, e), {}, {
                                                key: e.id
                                            }))
                                        }))
                                    })
                                })]
                            }), (0, m.jsx)(o.View, {
                                className: "app-list-main",
                                children: e.map((function(e, s) {
                                    return (0, m.jsx)(x, {
                                        title: e[0],
                                        data: e[1]
                                    }, s)
                                }))
                            })]
                        })
                    };

                function b() {
                    var e = (0, c.useModule)(i.AppListModule),
                        s = e.loading,
                        a = e.success;
                    return (0, m.jsx)(p.Layout, {
                        titleText: "应用中心",
                        loading: s,
                        success: a,
                        children: (0, m.jsx)(h, {})
                    })
                }
            },
            "./src/packages/others/pages/app-list/AppCardItem/index.tsx": function(e, s, a) {
                a.d(s, {
                    AppCardItem: function() {
                        return i
                    }
                });
                var t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    r = a("webpack/container/remote/react"),
                    n = a("webpack/container/remote/@tarojs/taro"),
                    o = a.n(n),
                    c = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    p = a("./src/constants/assets.ts"),
                    d = a("./src/common/module/app/index.ts"),
                    l = a("webpack/container/remote/react/jsx-runtime"),
                    i = (0, r.memo)((function(e) {
                        var s = e.id,
                            a = e.name,
                            r = e.url,
                            i = e.open,
                            m = e.path,
                            u = e.isEdit,
                            x = void 0 !== u && u,
                            h = (0, d.useEditState)(),
                            b = (0, t.default)(h, 1)[0],
                            j = (0, d.useIsEditApps)(a);
                        return (0, l.jsxs)(c.View, {
                            className: "app-card-item",
                            onClick: function() {
                                b ? x || j ? d.AppListModule.deleteHomeApp(s) : d.AppListModule.addHomeApp(s) : i ? (0, n.navigateTo)({
                                    url: m
                                }) : o().showModal({
                                    title: "提示",
                                    content: "模块维护中",
                                    showCancel: !1
                                })
                            },
                            children: [b ? x || j ? (0, l.jsx)(c.Image, {
                                src: p.LOCAL_ASSETS.COMMON.Subtraction,
                                className: "card-icon-subtraction"
                            }) : (0, l.jsx)(c.Image, {
                                src: p.LOCAL_ASSETS.COMMON.Addition,
                                className: "card-icon-addition"
                            }) : null, (0, l.jsx)(c.Image, {
                                src: r.getNetCacheAsset(),
                                className: "card-item-icon ".concat(i ? "" : "close")
                            }), (0, l.jsx)(c.Text, {
                                className: "card-item-text",
                                children: a
                            })]
                        })
                    }))
            },
            "./src/packages/others/pages/app-list/index.tsx": function(e, s, a) {
                var t = a("webpack/container/remote/@tarojs/runtime"),
                    r = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/app-list/index.tsx");
                Page((0, t.createPageConfig)(r.default, "packages/others/pages/app-list/index", {
                    root: {
                        cn: []
                    }
                }, {
                    navigationBarTitleText: "应用中心",
                    backgroundColor: "#F5F5F5",
                    disableScroll: !0
                } || {})), r.default
            }
        },
        function(e) {
            e.O(0, ["taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/app-list/index.tsx", e(e.s = "./src/packages/others/pages/app-list/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/app-list/index.js'
});
require("packages/others/pages/app-list/index.js");
$gwx3_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_1 || [];

        function gz$gwx3_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_1 = true;
        var x = ['./packages/others/pages/detail-info/annouce-detail/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_1_1()
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
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx3_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/detail-info/annouce-detail/index.wxml'] = [$gwx3_XC_1, './packages/others/pages/detail-info/annouce-detail/index.wxml'];
else __wxAppCode__['packages/others/pages/detail-info/annouce-detail/index.wxml'] = $gwx3_XC_1('./packages/others/pages/detail-info/annouce-detail/index.wxml');;
__wxRoute = "packages/others/pages/detail-info/annouce-detail/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/detail-info/annouce-detail/index.js";
define("packages/others/pages/detail-info/annouce-detail/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/detail-info/annouce-detail/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/annouce-detail/index.tsx": function(e, t, a) {
                var s = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    n = a("./src/components/PageLayout/index.tsx"),
                    o = a("./src/common/hook.ts"),
                    r = a("webpack/container/remote/react"),
                    c = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    i = a("./src/packages/others/module/notice-annoucement/index.ts"),
                    l = a("./src/packages/others/pages/detail-info/utils/preView.ts"),
                    d = a("./src/packages/others/pages/detail-info/utils/deepReplace.ts"),
                    p = a("webpack/container/remote/react/jsx-runtime");
                t.default = function() {
                    var e = "https://www.njupt.edu.cn",
                        t = (0, i.useAnnouceDetail)(),
                        a = (0, o.useModule)(i.AnnouceModule),
                        u = a.loading,
                        f = a.success,
                        g = (0, r.useState)(""),
                        m = (0, s.default)(g, 2),
                        h = m[0],
                        b = m[1];
                    (0, r.useEffect)((function() {
                        b(t.content)
                    }), [t.content]);
                    var x = function(t) {
                            var a = t.startsWith("http") ? t : "".concat(e).concat(t);
                            (0, l.PreViewFile)(a)
                        },
                        w = h ? (0, d.replaceScriptDeep)(h, e, x) : "";
                    return (0, p.jsx)(n.Layout, {
                        titleText: "通知公告",
                        loading: u,
                        success: f,
                        backgroundColor: "#ffffff",
                        children: h && (0, p.jsxs)(c.View, {
                            className: "container",
                            children: [(0, p.jsx)(c.View, {
                                className: "title",
                                children: t.title
                            }), (0, p.jsxs)(c.View, {
                                className: "info",
                                children: [(0, p.jsx)(c.View, {
                                    className: "date",
                                    children: t.data
                                }), (0, p.jsxs)(c.View, {
                                    className: "viewCount",
                                    children: ["阅读量：", t.viewCount]
                                })]
                            }), (0, p.jsx)(c.View, {
                                onClick: function(e) {
                                    var t = e.target;
                                    t && t.dataset && t.dataset.href && x(t.dataset.href)
                                },
                                dangerouslySetInnerHTML: {
                                    __html: w
                                }
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/pages/detail-info/annouce-detail/index.tsx": function(e, t, a) {
                var s = a("webpack/container/remote/@tarojs/runtime"),
                    n = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/annouce-detail/index.tsx");
                Page((0, s.createPageConfig)(n.default, "packages/others/pages/detail-info/annouce-detail/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), n.default
            },
            "./src/packages/others/pages/detail-info/utils/deepReplace.ts": function(e, t, a) {
                function s(e, t, a) {
                    var s = /font-size:\s*([^;]+);/g,
                        n = /text-indent:\s*([^;]+);/g,
                        o = e.replace(/&nbsp;/g, " ");
                    return (o = (o = (o = (o = (o = o.replace(/(<img\s+.*?src=(['"])([^'"]+)(['"])\s*.*?>)|(&nbsp;)|(font-size:\s*([^;]+);)|(text-indent:\s*([^;]+);)|(mso-[^:]+:[^;]+;)/g, (function(e, a, o, r, c, i, l, d, p) {
                        if (i) return " ";
                        if (a) {
                            if (r.toLowerCase().endsWith(".gif")) return '<img src="'.concat(t).concat(r, '" style="width: 10px; height: 10px; object-fit: cover; margin-right: 8px; font-size: 16px;"/>');
                            var u = "".concat(t).concat(r),
                                f = e.replace(s, "");
                            return (f = (f = f.replace(n, "")).replace(/mso-[^:]+:[^;]+;/g, "")).replace(r, u)
                        }
                        return l ? "font-size: 16px;" : d || p ? "" : e
                    }))).replace(/<tr\s+.*?>/g, "<tr>")).replace(/<td\s+.*?>/g, "<td>")).replace(/<table\s+.*?>/g, "<table>")).replace(/<a\s+href=["']([^"']+)["']\s*.*?>(.*?)<\/a>/g, (function(e, a, s) {
                        var n = a.startsWith("http") ? a : "".concat(t).concat(a);
                        return '<span class="hidelink" style="color: #1ABADE; width: 100%; display: block; padding: 5px 0; text-decoration: underline; cursor: pointer; position: relative;  width: 100%;" data-href="'.concat(n, '">').concat(s, "</span>")
                    }))).replace(/margin-bottom:\s*[^;]+;/g, "")
                }
                a.d(t, {
                    replaceScriptDeep: function() {
                        return s
                    }
                })
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/detail-info/annouce-detail/index.tsx", e(e.s = "./src/packages/others/pages/detail-info/annouce-detail/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/detail-info/annouce-detail/index.js'
});
require("packages/others/pages/detail-info/annouce-detail/index.js");
$gwx3_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_2 || [];

        function gz$gwx3_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_2 = true;
        var x = ['./packages/others/pages/detail-info/edu-detail/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_2_1()
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
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx3_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/detail-info/edu-detail/index.wxml'] = [$gwx3_XC_2, './packages/others/pages/detail-info/edu-detail/index.wxml'];
else __wxAppCode__['packages/others/pages/detail-info/edu-detail/index.wxml'] = $gwx3_XC_2('./packages/others/pages/detail-info/edu-detail/index.wxml');;
__wxRoute = "packages/others/pages/detail-info/edu-detail/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/detail-info/edu-detail/index.js";
define("packages/others/pages/detail-info/edu-detail/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/detail-info/edu-detail/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/edu-detail/index.tsx": function(e, s, a) {
                var t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    o = a("./src/components/PageLayout/index.tsx"),
                    n = a("./src/common/hook.ts"),
                    r = a("webpack/container/remote/react"),
                    d = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    c = a("./src/packages/others/module/edu-news/index.ts"),
                    i = a("./src/packages/others/pages/detail-info/utils/preView.ts"),
                    l = a("./src/packages/others/pages/detail-info/utils/replaceScript.ts"),
                    u = a("webpack/container/remote/react/jsx-runtime");
                s.default = function() {
                    var e = (0, c.useEduNewsDetail)(),
                        s = "https://jwc.njupt.edu.cn",
                        a = (0, n.useModule)(c.EduModule),
                        p = a.loading,
                        m = a.success,
                        f = (0, r.useState)(""),
                        b = (0, t.default)(f, 2),
                        g = b[0],
                        w = b[1];
                    (0, r.useEffect)((function() {
                        w(e.content)
                    }), [e.content]);
                    var _ = function(e) {
                            var a = e.startsWith("http") ? e : "".concat(s).concat(e);
                            (0, i.PreViewFile)(a)
                        },
                        h = g ? (0, l.replaceScript)(g, s, _) : "";
                    return (0, u.jsx)(o.Layout, {
                        titleText: "教务快讯",
                        loading: p,
                        success: m,
                        backgroundColor: "#ffffff",
                        children: g && (0, u.jsxs)(d.View, {
                            className: "container",
                            children: [(0, u.jsx)(d.View, {
                                className: "title",
                                children: e.title
                            }), (0, u.jsxs)(d.View, {
                                className: "info",
                                children: [(0, u.jsx)(d.View, {
                                    className: "date",
                                    children: e.data
                                }), (0, u.jsxs)(d.View, {
                                    className: "viewCount",
                                    children: ["阅读量：", e.viewCount]
                                })]
                            }), (0, u.jsx)(d.View, {
                                onClick: function(e) {
                                    var s = e.target;
                                    s && s.dataset && s.dataset.href && _(s.dataset.href)
                                },
                                dangerouslySetInnerHTML: {
                                    __html: h
                                }
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/pages/detail-info/edu-detail/index.tsx": function(e, s, a) {
                var t = a("webpack/container/remote/@tarojs/runtime"),
                    o = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/edu-detail/index.tsx");
                Page((0, t.createPageConfig)(o.default, "packages/others/pages/detail-info/edu-detail/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), o.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/detail-info/edu-detail/index.tsx", e(e.s = "./src/packages/others/pages/detail-info/edu-detail/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/detail-info/edu-detail/index.js'
});
require("packages/others/pages/detail-info/edu-detail/index.js");
$gwx3_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_3 || [];

        function gz$gwx3_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_3 = true;
        var x = ['./packages/others/pages/detail-info/news-detail/index.wxml', '../../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_3_1()
            var cT = e_[x[0]].i
            _ai(cT, x[1], e_, x[0], 1, 1)
            var hU = _v()
            _(r, hU)
            var oV = _oz(z, 1, e, s, gg)
            var cW = _gd(x[0], oV, e_, d_)
            if (cW) {
                var oX = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                hU.wxXCkey = 3
                cW(oX, oX, hU, gg)
                gg.f = cur_globalf
            } else _w(oV, x[0], 2, 14)
            cT.pop()
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
                g = "$gwx3_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/detail-info/news-detail/index.wxml'] = [$gwx3_XC_3, './packages/others/pages/detail-info/news-detail/index.wxml'];
else __wxAppCode__['packages/others/pages/detail-info/news-detail/index.wxml'] = $gwx3_XC_3('./packages/others/pages/detail-info/news-detail/index.wxml');;
__wxRoute = "packages/others/pages/detail-info/news-detail/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/detail-info/news-detail/index.js";
define("packages/others/pages/detail-info/news-detail/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/detail-info/news-detail/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/news-detail/index.tsx": function(e, s, a) {
                var t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    o = a("./src/components/PageLayout/index.tsx"),
                    n = a("./src/common/hook.ts"),
                    r = a("webpack/container/remote/react"),
                    c = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    d = a("./src/packages/others/module/news-message/index.ts"),
                    i = a("./src/packages/others/pages/detail-info/utils/replaceScript.ts"),
                    l = a("./src/packages/others/pages/detail-info/utils/preView.ts"),
                    p = a("webpack/container/remote/react/jsx-runtime");
                s.default = function() {
                    var e = (0, d.useNewsDetail)(),
                        s = "https://www.njupt.edu.cn",
                        a = (0, n.useModule)(d.newsMessageModule),
                        u = a.loading,
                        m = a.success,
                        w = (0, r.useState)(""),
                        f = (0, t.default)(w, 2),
                        g = f[0],
                        b = f[1];
                    (0, r.useEffect)((function() {
                        b(e.content)
                    }), [e.content]);
                    var x = function(e) {
                            var a = e.startsWith("http") ? e : "".concat(s).concat(e);
                            (0, l.PreViewFile)(a)
                        },
                        _ = g ? (0, i.replaceScript)(g, s, x) : "";
                    return (0, p.jsx)(o.Layout, {
                        titleText: "南邮要闻",
                        loading: u,
                        success: m,
                        backgroundColor: "#ffffff",
                        children: g && (0, p.jsxs)(c.View, {
                            className: "container",
                            children: [(0, p.jsx)(c.Text, {
                                className: "title",
                                children: e.title
                            }), (0, p.jsxs)(c.View, {
                                className: "info",
                                children: [(0, p.jsx)(c.Text, {
                                    className: "date",
                                    children: e.data
                                }), (0, p.jsxs)(c.Text, {
                                    className: "viewCount",
                                    children: ["阅读量：", e.viewCount]
                                })]
                            }), (0, p.jsx)(c.View, {
                                onClick: function(e) {
                                    var s = e.target;
                                    s && s.dataset && s.dataset.href && x(s.dataset.href)
                                },
                                dangerouslySetInnerHTML: {
                                    __html: _
                                }
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/pages/detail-info/news-detail/index.tsx": function(e, s, a) {
                var t = a("webpack/container/remote/@tarojs/runtime"),
                    o = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/detail-info/news-detail/index.tsx");
                Page((0, t.createPageConfig)(o.default, "packages/others/pages/detail-info/news-detail/index", {
                    root: {
                        cn: []
                    }
                }, {} || {})), o.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/detail-info/news-detail/index.tsx", e(e.s = "./src/packages/others/pages/detail-info/news-detail/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/detail-info/news-detail/index.js'
});
require("packages/others/pages/detail-info/news-detail/index.js");
$gwx3_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_4 || [];

        function gz$gwx3_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_4 = true;
        var x = ['./packages/others/pages/edu-news/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_4_1()
            var aZ = e_[x[0]].i
            _ai(aZ, x[1], e_, x[0], 1, 1)
            var t1 = _v()
            _(r, t1)
            var e2 = _oz(z, 1, e, s, gg)
            var b3 = _gd(x[0], e2, e_, d_)
            if (b3) {
                var o4 = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                t1.wxXCkey = 3
                b3(o4, o4, t1, gg)
                gg.f = cur_globalf
            } else _w(e2, x[0], 2, 14)
            aZ.pop()
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
                g = "$gwx3_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/edu-news/index.wxml'] = [$gwx3_XC_4, './packages/others/pages/edu-news/index.wxml'];
else __wxAppCode__['packages/others/pages/edu-news/index.wxml'] = $gwx3_XC_4('./packages/others/pages/edu-news/index.wxml');;
__wxRoute = "packages/others/pages/edu-news/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/edu-news/index.js";
define("packages/others/pages/edu-news/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/edu-news/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/edu-news/index.tsx": function(e, s, n) {
                n.d(s, {
                    default: function() {
                        return h
                    }
                });
                var t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    o = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    c = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    d = n("webpack/container/remote/@tarojs/taro"),
                    u = n.n(d),
                    l = n("./src/common/hook.ts"),
                    i = n("./src/components/PageLayout/index.tsx"),
                    p = n("./src/packages/others/module/edu-news/index.ts"),
                    m = n("./src/components/PageScroll/index.tsx"),
                    b = n("./src/components/LoadingIcon/index.tsx"),
                    f = n("webpack/container/remote/react"),
                    w = n("./src/packages/others/pages/edu-news/news-item/index.tsx"),
                    g = n("./src/packages/others/pages/utils/debounce.ts"),
                    x = n("webpack/container/remote/react/jsx-runtime");

                function h() {
                    var e, s = (0, f.useRef)(1),
                        n = (0, l.useModule)(p.EduModule),
                        d = n.loading,
                        h = n.success,
                        _ = (0, p.useEduNews)(),
                        k = (0, f.useState)([]),
                        j = (0, c.default)(k, 2)[1];
                    (0, f.useEffect)((function() {
                        return _.length > 0 && j(_),
                            function() {
                                j([])
                            }
                    }), [_]);
                    var v = (0, g.deBounce)((function() {
                        ! function() {
                            (e = e || (0, o.default)((0, a.default)().mark((function e() {
                                var n;
                                return (0, a.default)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!d) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, p.EduModule.LoadEduNews(s.current);
                                        case 4:
                                            n = e.sent, j((function(e) {
                                                return [].concat((0, r.default)(e), (0, r.default)(n))
                                            })), s.current++;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }()
                    }), 1e3);
                    return (0, x.jsx)(i.Layout, {
                        titleText: "教务快讯",
                        loading: d,
                        success: h,
                        backgroundColor: "#F5F5F5",
                        children: (0, x.jsxs)(m.PageScroll, {
                            onScroll: function(e) {
                                var s = e.detail,
                                    n = s.scrollTop;
                                s.scrollHeight - n <= u().getSystemInfoSync().windowHeight + 10 && v()
                            },
                            children: [_.map((function(e) {
                                return (0, f.createElement)(w.default, (0, t.default)((0, t.default)({}, e), {}, {
                                    key: e.id
                                }))
                            })), (0, x.jsx)(b.default, {})]
                        })
                    })
                }
            },
            "./src/packages/others/pages/edu-news/index.tsx": function(e, s, n) {
                var t = n("webpack/container/remote/@tarojs/runtime"),
                    a = n("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/edu-news/index.tsx");
                Page((0, t.createPageConfig)(a.default, "packages/others/pages/edu-news/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), a.default
            },
            "./src/packages/others/pages/edu-news/news-item/index.tsx": function(e, s, n) {
                n.d(s, {
                    default: function() {
                        return l
                    }
                });
                var t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    r = n("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = n("webpack/container/remote/@tarojs/taro"),
                    c = n("./src/packages/others/module/edu-news/index.ts"),
                    d = n("./src/packages/others/assets/back.svg"),
                    u = n("webpack/container/remote/react/jsx-runtime");

                function l(e) {
                    var s, n;
                    return (0, u.jsxs)(r.View, {
                        className: "news-item",
                        onClick: function() {
                            (0, o.navigateTo)({
                                url: "/packages/others/pages/detail-info/edu-detail/index"
                            }),
                            function(e) {
                                (s = s || (0, a.default)((0, t.default)().mark((function e(s) {
                                    return (0, t.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c.EduModule.DetailInfo(s);
                                            case 3:
                                                e.next = 8;
                                                break;
                                            case 5:
                                                e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 5]
                                    ])
                                })))).apply(this, arguments)
                            }(e.url)
                        },
                        children: [(0, u.jsx)(r.View, {
                            className: "news-header",
                            children: e.title
                        }), (0, u.jsx)(r.Image, {
                            className: "news-header-icon",
                            src: d
                        }), (0, u.jsx)(r.View, {
                            className: "news-content",
                            children: null === (n = e.description) || void 0 === n ? void 0 : n.trimLeft()
                        }), (0, u.jsx)(r.Text, {
                            className: "news-time",
                            children: e.date
                        })]
                    })
                }
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "sub-common/5cadce6ba9a3c23f663c84fdf39fc435", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/edu-news/index.tsx", e(e.s = "./src/packages/others/pages/edu-news/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/edu-news/index.js'
});
require("packages/others/pages/edu-news/index.js");
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/information/index.wxml'] = [$gwx3_XC_5, './packages/others/pages/information/index.wxml'];
else __wxAppCode__['packages/others/pages/information/index.wxml'] = $gwx3_XC_5('./packages/others/pages/information/index.wxml');;
__wxRoute = "packages/others/pages/information/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/information/index.js";
define("packages/others/pages/information/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/information/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/information/index.tsx": function(e, n, t) {
                t.d(n, {
                    default: function() {
                        return g
                    }
                });
                var a = t("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    s = t("webpack/container/remote/@tarojs/taro"),
                    o = t.n(s),
                    r = t("webpack/container/remote/react"),
                    c = t("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    i = t("./src/common/hook.ts"),
                    l = t("./src/components/PageLayout/index.tsx"),
                    u = t("./src/constants/assets.ts"),
                    d = t("./src/packages/others/assets/index.ts"),
                    m = t("./src/components/PageScroll/index.tsx"),
                    f = t("./src/common/module/notice/index.ts"),
                    p = t("webpack/container/remote/react/jsx-runtime");

                function x() {
                    var e = (0, f.useInformation)(),
                        n = (0, r.useRef)(),
                        t = (0, r.useRef)(15),
                        s = (0, r.useRef)(0),
                        i = (0, r.useState)(1),
                        l = (0, a.default)(i, 2),
                        x = l[0],
                        g = l[1],
                        j = (0, r.useState)(0),
                        b = (0, a.default)(j, 2),
                        w = b[0],
                        _ = b[1],
                        N = (0, r.useState)(),
                        k = (0, a.default)(N, 2),
                        S = k[0],
                        T = k[1];
                    return (0, r.useEffect)((function() {
                        o().nextTick((function() {
                            n.current = o().createAnimation({
                                duration: 300
                            }), _(0), T(n.current.left("0%").step().export())
                        }))
                    }), []), (0, r.useEffect)((function() {
                        n.current && T(n.current.left("".concat(25 * w, "%")).step().export())
                    }), [n, w]), (0, p.jsxs)(c.View, {
                        className: "information",
                        children: [(0, p.jsxs)(c.View, {
                            className: "info-tab",
                            children: [e.category.map((function(e, n) {
                                return (0, p.jsx)(c.View, {
                                    className: "tab-item",
                                    onClick: function() {
                                        _(n)
                                    },
                                    children: e.title
                                }, n)
                            })), (0, p.jsx)(c.View, {
                                className: "bottom-bar",
                                animation: S
                            })]
                        }), (0, p.jsxs)(c.View, {
                            className: "info-top",
                            children: [(0, p.jsx)(c.Text, {
                                className: "title",
                                children: "消息列表"
                            }), (0, p.jsxs)(c.View, {
                                className: "widgets",
                                children: [!e.unread || (0, p.jsx)(c.Image, {
                                    mode: "aspectFit",
                                    className: "icon",
                                    src: d.INFORMATION_ASSETS.AllRead,
                                    onClick: function() {
                                        return f.InformationModule.allRead()
                                    }
                                }), !e.category[0].info.length || (0, p.jsx)(c.Image, {
                                    mode: "aspectFit",
                                    className: "icon",
                                    src: d.INFORMATION_ASSETS.AllClear,
                                    onClick: function() {
                                        return f.InformationModule.allClear()
                                    }
                                })]
                            })]
                        }), (0, p.jsx)(m.PageScroll, {
                            className: "info-main",
                            offsetHeight: "180rpx",
                            onPullRefresh: f.InformationModule.getInformation.bind(f.InformationModule),
                            onTouchStart: function(e) {
                                var n = (0, a.default)(e.touches, 1)[0].pageX;
                                return s.current = n
                            },
                            onTouchEnd: function(e) {
                                var n = (0, a.default)(e.changedTouches, 1)[0].pageX;
                                if (n + 45 < s.current) {
                                    if (3 === w) return;
                                    _((function(e) {
                                        return ++e
                                    }))
                                }
                                if (n - s.current > 45) {
                                    if (0 === w) return;
                                    _((function(e) {
                                        return --e
                                    }))
                                }
                            },
                            onScrollToLower: function() {
                                e.category[w].info.length > x * t.current && g((function(e) {
                                    return ++e
                                }))
                            },
                            children: (0, p.jsx)(c.View, {
                                className: "card-list",
                                children: e.category[w].info.length ? e.category[w].info.slice(0, x * t.current).map((function(n, t) {
                                    w && (t = n, n = e.category[0].info[n]);
                                    var a = n,
                                        s = a.id,
                                        o = a.tag,
                                        r = a.read,
                                        i = a.title,
                                        l = a.content,
                                        u = a.createDate;
                                    return (0, p.jsxs)(c.View, {
                                        onClick: function() {
                                            r || f.InformationModule.read(s, t, e.category[3].tag.includes(o))
                                        },
                                        className: "card-item ".concat(r ? "" : "unread", " ").concat(6 == o ? "noread" : ""),
                                        children: [(0, p.jsxs)(c.View, {
                                            className: "left",
                                            children: [(0, p.jsxs)(c.View, {
                                                className: "title",
                                                children: [r ? null : (0, p.jsx)(c.View, {
                                                    className: "dot"
                                                }), (0, p.jsx)(c.Text, {
                                                    children: i
                                                })]
                                            }), (0, p.jsx)(c.Text, {
                                                className: "content",
                                                children: l
                                            }), (0, p.jsx)(c.Text, {
                                                className: "createtime",
                                                children: h(Date.now() - new Date(null == u ? void 0 : u.replace(" ", "T")).getTime())
                                            })]
                                        }), (0, p.jsx)(c.View, {
                                            className: "right"
                                        })]
                                    }, s)
                                })) : (0, p.jsxs)(c.View, {
                                    className: "null-data",
                                    children: [(0, p.jsx)(c.Image, {
                                        mode: "widthFix",
                                        className: "null-img",
                                        src: u.COMMON_ASSETS.NullData
                                    }), (0, p.jsx)(c.Text, {
                                        className: "null-text",
                                        children: "目前还没有收到消息哦"
                                    })]
                                })
                            })
                        })]
                    })
                }

                function g() {
                    var e = (0, i.useModule)(f.InformationModule),
                        n = e.loading,
                        t = e.success;
                    return (0, p.jsx)(l.Layout, {
                        titleText: "消息盒子",
                        loading: n,
                        success: t,
                        children: (0, p.jsx)(x, {})
                    })
                }

                function h(e) {
                    if (!((e /= 1e3) <= 0)) return e < 60 ? ~~e + " 秒前" : e < 3600 ? ~~(e / 60) + " 分钟前" : e < 86400 ? ~~(e / 3600) + " 小时前" : ~~(e / 86400) + " 天前"
                }
            },
            "./src/packages/others/pages/information/index.tsx": function(e, n, t) {
                var a = t("webpack/container/remote/@tarojs/runtime"),
                    s = t("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/information/index.tsx");
                Page((0, a.createPageConfig)(s.default, "packages/others/pages/information/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), s.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/information/index.tsx", e(e.s = "./src/packages/others/pages/information/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/information/index.js'
});
require("packages/others/pages/information/index.js");
$gwx3_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_6 || [];

        function gz$gwx3_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_6 = true;
        var x = ['./packages/others/pages/news-message/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_6_1()
            var oBB = e_[x[0]].i
            _ai(oBB, x[1], e_, x[0], 1, 1)
            var lCB = _v()
            _(r, lCB)
            var aDB = _oz(z, 1, e, s, gg)
            var tEB = _gd(x[0], aDB, e_, d_)
            if (tEB) {
                var eFB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                lCB.wxXCkey = 3
                tEB(eFB, eFB, lCB, gg)
                gg.f = cur_globalf
            } else _w(aDB, x[0], 2, 14)
            oBB.pop()
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
                g = "$gwx3_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/news-message/index.wxml'] = [$gwx3_XC_6, './packages/others/pages/news-message/index.wxml'];
else __wxAppCode__['packages/others/pages/news-message/index.wxml'] = $gwx3_XC_6('./packages/others/pages/news-message/index.wxml');;
__wxRoute = "packages/others/pages/news-message/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/news-message/index.js";
define("packages/others/pages/news-message/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/news-message/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/news-message/index.tsx": function(e, s, n) {
                n.d(s, {
                    default: function() {
                        return h
                    }
                });
                var a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    r = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    o = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    c = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    d = n("webpack/container/remote/@tarojs/taro"),
                    l = n.n(d),
                    u = n("./src/common/hook.ts"),
                    i = n("./src/components/PageLayout/index.tsx"),
                    m = n("./src/packages/others/module/news-message/index.ts"),
                    p = n("./src/components/PageScroll/index.tsx"),
                    b = n("./src/components/LoadingIcon/index.tsx"),
                    g = n("webpack/container/remote/react"),
                    f = n("./src/packages/others/pages/news-message/news-item/index.tsx"),
                    w = n("./src/packages/others/pages/utils/debounce.ts"),
                    x = n("webpack/container/remote/react/jsx-runtime");

                function h() {
                    var e, s = (0, g.useRef)(1),
                        n = (0, u.useModule)(m.newsMessageModule),
                        d = n.loading,
                        h = n.success,
                        _ = (0, m.useNewsMessage)(),
                        k = (0, g.useState)([]),
                        j = (0, c.default)(k, 2)[1];
                    (0, g.useEffect)((function() {
                        return _.length > 0 && j(_),
                            function() {
                                j([])
                            }
                    }), [_]);
                    var v = (0, w.deBounce)((function() {
                        ! function() {
                            (e = e || (0, o.default)((0, t.default)().mark((function e() {
                                var n;
                                return (0, t.default)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!d) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, m.newsMessageModule.LoadNewsMessage(s.current);
                                        case 4:
                                            n = e.sent, j((function(e) {
                                                return [].concat((0, r.default)(e), (0, r.default)(n))
                                            })), s.current++;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }()
                    }), 1e3);
                    return (0, x.jsx)(i.Layout, {
                        titleText: "南邮要闻",
                        loading: d,
                        success: h,
                        backgroundColor: "#F5F5F5",
                        children: (0, x.jsxs)(p.PageScroll, {
                            onScroll: function(e) {
                                var s = e.detail,
                                    n = s.scrollTop;
                                s.scrollHeight - n <= l().getSystemInfoSync().windowHeight + 10 && v()
                            },
                            children: [_.map((function(e) {
                                return (0, g.createElement)(f.default, (0, a.default)((0, a.default)({}, e), {}, {
                                    key: e.id
                                }))
                            })), (0, x.jsx)(b.default, {})]
                        })
                    })
                }
            },
            "./src/packages/others/pages/news-message/index.tsx": function(e, s, n) {
                var a = n("webpack/container/remote/@tarojs/runtime"),
                    t = n("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/news-message/index.tsx");
                Page((0, a.createPageConfig)(t.default, "packages/others/pages/news-message/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), t.default
            },
            "./src/packages/others/pages/news-message/news-item/index.tsx": function(e, s, n) {
                n.d(s, {
                    default: function() {
                        return u
                    }
                });
                var a = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    t = n("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    r = n("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = n("webpack/container/remote/@tarojs/taro"),
                    c = n("./src/packages/others/module/news-message/index.ts"),
                    d = n("./src/packages/others/assets/back.svg"),
                    l = n("webpack/container/remote/react/jsx-runtime");

                function u(e) {
                    var s, n;
                    return (0, l.jsxs)(r.View, {
                        className: "news-item",
                        onClick: function() {
                            (0, o.navigateTo)({
                                url: "/packages/others/pages/detail-info/news-detail/index"
                            }),
                            function(e) {
                                (s = s || (0, t.default)((0, a.default)().mark((function e(s) {
                                    return (0, a.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c.newsMessageModule.DetailInfo(s);
                                            case 3:
                                                e.next = 8;
                                                break;
                                            case 5:
                                                e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 5]
                                    ])
                                })))).apply(this, arguments)
                            }(e.url)
                        },
                        children: [(0, l.jsx)(r.View, {
                            className: "news-header",
                            children: e.title
                        }), (0, l.jsx)(r.Image, {
                            className: "news-header-icon",
                            src: d
                        }), (0, l.jsx)(r.View, {
                            className: "news-content",
                            children: null === (n = e.description) || void 0 === n ? void 0 : n.trimLeft()
                        }), (0, l.jsx)(r.Text, {
                            className: "news-time",
                            children: e.date
                        })]
                    })
                }
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "sub-common/5cadce6ba9a3c23f663c84fdf39fc435", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/news-message/index.tsx", e(e.s = "./src/packages/others/pages/news-message/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/news-message/index.js'
});
require("packages/others/pages/news-message/index.js");
$gwx3_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_7 || [];

        function gz$gwx3_XC_7_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_7 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_7 = true;
        var x = ['./packages/others/pages/notice-announcement/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_7_1()
            var oHB = e_[x[0]].i
            _ai(oHB, x[1], e_, x[0], 1, 1)
            var xIB = _v()
            _(r, xIB)
            var oJB = _oz(z, 1, e, s, gg)
            var fKB = _gd(x[0], oJB, e_, d_)
            if (fKB) {
                var cLB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                xIB.wxXCkey = 3
                fKB(cLB, cLB, xIB, gg)
                gg.f = cur_globalf
            } else _w(oJB, x[0], 2, 14)
            oHB.pop()
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
                g = "$gwx3_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/notice-announcement/index.wxml'] = [$gwx3_XC_7, './packages/others/pages/notice-announcement/index.wxml'];
else __wxAppCode__['packages/others/pages/notice-announcement/index.wxml'] = $gwx3_XC_7('./packages/others/pages/notice-announcement/index.wxml');;
__wxRoute = "packages/others/pages/notice-announcement/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/notice-announcement/index.js";
define("packages/others/pages/notice-announcement/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/5cadce6ba9a3c23f663c84fdf39fc435.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/notice-announcement/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/notice-announcement/index.tsx": function(e, n, s) {
                s.d(n, {
                    default: function() {
                        return _
                    }
                });
                var t = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
                    o = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    a = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                    r = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    c = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    u = s("webpack/container/remote/@tarojs/taro"),
                    d = s.n(u),
                    l = s("./src/common/hook.ts"),
                    i = s("./src/components/PageLayout/index.tsx"),
                    m = s("./src/packages/others/module/notice-annoucement/index.ts"),
                    p = s("./src/components/PageScroll/index.tsx"),
                    b = s("./src/components/LoadingIcon/index.tsx"),
                    f = s("webpack/container/remote/react"),
                    g = s("./src/packages/others/pages/notice-announcement/news-item/index.tsx"),
                    x = s("./src/packages/others/pages/utils/debounce.ts"),
                    h = s("webpack/container/remote/react/jsx-runtime");

                function _() {
                    var e, n = (0, f.useRef)(1),
                        s = (0, l.useModule)(m.AnnouceModule),
                        u = s.loading,
                        _ = s.success,
                        k = (0, m.useAnnoucement)(),
                        w = (0, f.useState)([]),
                        j = (0, c.default)(w, 2)[1];
                    (0, f.useEffect)((function() {
                        return k.length > 0 && j(k),
                            function() {
                                j([])
                            }
                    }), [k]);
                    var v = (0, x.deBounce)((function() {
                        ! function() {
                            (e = e || (0, r.default)((0, o.default)().mark((function e() {
                                var s;
                                return (0, o.default)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!u) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, m.AnnouceModule.LoadAnnoucement(n.current);
                                        case 4:
                                            s = e.sent, j((function(e) {
                                                return [].concat((0, a.default)(e), (0, a.default)(s))
                                            })), n.current++;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }()
                    }), 1e3);
                    return (0, h.jsx)(i.Layout, {
                        titleText: "通知公告",
                        loading: u,
                        success: _,
                        backgroundColor: "#F5F5F5",
                        children: (0, h.jsxs)(p.PageScroll, {
                            onScroll: function(e) {
                                var n = e.detail,
                                    s = n.scrollTop;
                                n.scrollHeight - s <= d().getSystemInfoSync().windowHeight && v()
                            },
                            children: [k.map((function(e) {
                                return (0, f.createElement)(g.default, (0, t.default)((0, t.default)({}, e), {}, {
                                    key: e.id
                                }))
                            })), (0, h.jsx)(b.default, {})]
                        })
                    })
                }
            },
            "./src/packages/others/pages/notice-announcement/index.tsx": function(e, n, s) {
                var t = s("webpack/container/remote/@tarojs/runtime"),
                    o = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/notice-announcement/index.tsx");
                Page((0, t.createPageConfig)(o.default, "packages/others/pages/notice-announcement/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), o.default
            },
            "./src/packages/others/pages/notice-announcement/news-item/index.tsx": function(e, n, s) {
                s.d(n, {
                    default: function() {
                        return l
                    }
                });
                var t = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    o = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    a = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    r = s("webpack/container/remote/@tarojs/taro"),
                    c = s("./src/packages/others/module/notice-annoucement/index.ts"),
                    u = s("./src/packages/others/assets/back.svg"),
                    d = s("webpack/container/remote/react/jsx-runtime");

                function l(e) {
                    var n, s;
                    return (0, d.jsxs)(a.View, {
                        className: "news-item",
                        onClick: function() {
                            (0, r.navigateTo)({
                                url: "/packages/others/pages/detail-info/annouce-detail/index"
                            }),
                            function(e) {
                                (n = n || (0, o.default)((0, t.default)().mark((function e(n) {
                                    return (0, t.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c.AnnouceModule.DetailInfo(n);
                                            case 3:
                                                e.next = 8;
                                                break;
                                            case 5:
                                                e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 5]
                                    ])
                                })))).apply(this, arguments)
                            }(e.url)
                        },
                        children: [(0, d.jsx)(a.View, {
                            className: "news-header",
                            children: e.title
                        }), (0, d.jsx)(a.Image, {
                            className: "news-header-icon",
                            src: u
                        }), (0, d.jsx)(a.View, {
                            className: "news-content",
                            children: null === (s = e.description) || void 0 === s ? void 0 : s.trimLeft()
                        }), (0, d.jsx)(a.Text, {
                            className: "news-time",
                            children: e.date
                        })]
                    })
                }
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "sub-common/5cadce6ba9a3c23f663c84fdf39fc435", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/notice-announcement/index.tsx", e(e.s = "./src/packages/others/pages/notice-announcement/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/notice-announcement/index.js'
});
require("packages/others/pages/notice-announcement/index.js");
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/school-bus/index.wxml'] = [$gwx3_XC_8, './packages/others/pages/school-bus/index.wxml'];
else __wxAppCode__['packages/others/pages/school-bus/index.wxml'] = $gwx3_XC_8('./packages/others/pages/school-bus/index.wxml');;
__wxRoute = "packages/others/pages/school-bus/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/school-bus/index.js";
define("packages/others/pages/school-bus/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), require("../../sub-common/ed38b011cfb987b1850ffd548c33fde1.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/school-bus/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/school-bus/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return w
                    }
                });
                var r = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    o = a("webpack/container/remote/react"),
                    t = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = a("./src/components/PageLayout/index.tsx"),
                    c = a("./src/packages/others/assets/index.ts"),
                    l = a("./src/common/hook.ts"),
                    i = a("./src/components/Wigets/index.tsx"),
                    d = a("./src/components/HalfSubPage/index.tsx"),
                    u = a("./src/packages/others/module/schoolBus/index.ts"),
                    m = a("./src/components/TabsFolder/index.tsx"),
                    p = a("./src/packages/others/pages/school-bus/BusCard/index.tsx"),
                    h = a("./src/packages/others/pages/school-bus/BusOutlineCard/index.tsx"),
                    b = a("webpack/container/remote/react/jsx-runtime"),
                    x = [{
                        backgroundColor: "#82FBB3",
                        arrowImage: c.SCHOOL_BUS_ASSETS.Card_0_Arrow,
                        backgroundImage: c.SCHOOL_BUS_ASSETS.Card_0_Background
                    }, {
                        backgroundColor: "#64E0FD",
                        arrowImage: c.SCHOOL_BUS_ASSETS.Card_1_Arrow,
                        backgroundImage: c.SCHOOL_BUS_ASSETS.Card_1_Background
                    }, {
                        backgroundColor: "#FF9D6C",
                        arrowImage: c.SCHOOL_BUS_ASSETS.Card_2_Arrow,
                        backgroundImage: c.SCHOOL_BUS_ASSETS.Card_2_Background
                    }];

                function g() {
                    var e = (0, u.useSchoolBus)(),
                        s = (0, l.useSafeArea)(),
                        a = (0, o.useState)(!1),
                        n = (0, r.default)(a, 2),
                        c = n[0],
                        g = n[1];
                    return (0, b.jsxs)(t.View, {
                        className: "school-bus",
                        children: [(0, b.jsx)(d.HalfSubPage, {
                            title: "温馨提示",
                            show: c,
                            setHide: function() {
                                return g(!1)
                            },
                            children: (0, b.jsxs)(t.View, {
                                className: "tips",
                                children: [(0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "1、乘车人员凭支付宝（微信）扫码乘车；"
                                }), (0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "2、仙林校区内停靠站点："
                                }), (0, b.jsx)(t.View, {
                                    className: "text indent",
                                    children: "①由市区进入仙林校区的站点依次为：教学1号楼、行政楼、教学2号楼、教学5号楼、西门配电房、二食堂、青春剧场转盘、学科楼转盘、青教公寓；"
                                }), (0, b.jsx)(t.View, {
                                    className: "text indent",
                                    children: "②仙林校区返回市区的交通车均由学科楼转盘始发，站点依次为：青春剧场转盘、二食堂、西门配电房、教学5号楼、教学2号楼、行政楼、教学1号楼。"
                                }), (0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "3、法定节假日停运，寒暑假根据情况另行安排；"
                                }), (0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "4、后勤管理处根据交通车运行情况酌情进行调整；"
                                }), (0, b.jsx)(t.View, {
                                    className: "text",
                                    children: "5、运输服务中心联系电话：调度13913976262 主任18951650360"
                                })]
                            })
                        }), (0, b.jsxs)(m.TabsFolderView, {
                            defaultActiveTab: 0,
                            children: [(0, b.jsx)(m.TabList, {
                                style: {
                                    marginLeft: "68rpx",
                                    marginRight: "68rpx"
                                },
                                children: e.length ? e.map((function(e, s) {
                                    var a = x[s % 3].backgroundColor;
                                    return (0, b.jsx)(m.Tab, {
                                        style: {
                                            backgroundColor: "".concat(a)
                                        },
                                        children: e.tag
                                    }, e.tag)
                                })) : (0, b.jsx)(m.Tab, {
                                    style: {
                                        backgroundColor: "transparent"
                                    }
                                })
                            }), (0, b.jsx)(m.TabPanels, {
                                height: "calc(100vh - ".concat(s.safeAreaHeight, "px - 105rpx)"),
                                children: e.map((function(e, a) {
                                    var r = Math.floor(3 * Math.random()),
                                        o = ["#FF8181", "#FFC24E", "#4ABEFF"],
                                        n = e.startAddress,
                                        c = e.endAddress,
                                        l = e.updateTime,
                                        d = x[a % 3],
                                        u = d.arrowImage,
                                        w = d.backgroundImage;
                                    return (0, b.jsxs)(m.TabPanel, {
                                        children: [(0, b.jsx)(h.default, {
                                            onPopup: function() {
                                                return g(!0)
                                            },
                                            item: {
                                                startAddress: n,
                                                endAddress: c,
                                                updateTime: l,
                                                arrowImage: u,
                                                backgroundImage: w
                                            }
                                        }), (0, b.jsx)(t.View, {
                                            style: {
                                                height: "calc(100vh - ".concat(s.safeAreaHeight, "px - 425rpx)"),
                                                overflowY: "scroll"
                                            },
                                            children: (0, b.jsx)(i.LayoutLightweight, {
                                                children: e.buses.map((function(e, s) {
                                                    return r = (r + Math.floor(2 * Math.random() + 1)) % 3, (0, b.jsxs)(t.View, {
                                                        children: [(0, b.jsx)(p.default, {
                                                            item: e,
                                                            color: o[r]
                                                        }), (0, b.jsx)(t.View, {
                                                            className: "divider"
                                                        })]
                                                    }, e.carId || s)
                                                }))
                                            })
                                        })]
                                    }, e.tag)
                                }))
                            })]
                        })]
                    })
                }

                function w() {
                    var e = (0, l.useModule)(u.SchoolBusModule),
                        s = e.success,
                        a = e.loading;
                    return (0, b.jsx)(n.Layout, {
                        lightweight: !0,
                        titleText: "校车",
                        needAuth: !1,
                        loading: a,
                        success: s,
                        children: (0, b.jsx)(g, {})
                    })
                }
            },
            "./src/packages/others/module/schoolBus/hooks.ts": function(e, s, a) {
                a.d(s, {
                    useSchoolBus: function() {
                        return o
                    }
                });
                var r = a("webpack/container/remote/react-redux"),
                    o = function() {
                        return (0, r.useSelector)((function(e) {
                            var s;
                            return null == e || null === (s = e.SCHOOL_BUS) || void 0 === s ? void 0 : s.busInfo
                        }))
                    }
            },
            "./src/packages/others/module/schoolBus/index.ts": function(e, s, a) {
                a.d(s, {
                    SchoolBusModule: function() {
                        return g
                    },
                    useSchoolBus: function() {
                        return x.useSchoolBus
                    }
                });
                var r, o = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    t = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    n = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    c = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    l = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    i = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    d = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    u = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = a("./src/packages/others/api/index.ts"),
                    p = a("./src/constants/module.ts"),
                    h = a("./src/common/mini4/Mini4BaseModule.ts"),
                    b = a("./src/packages/others/module/schoolBus/store.ts"),
                    x = a("./src/packages/others/module/schoolBus/hooks.ts"),
                    g = new((0, h.injectReducers)(b.schoolBusSlice)(r = function(e, s) {
                        (0, i.default)(r, e);
                        var a = (0, d.default)(r);

                        function r() {
                            var e;
                            (0, n.default)(this, r);
                            for (var s = arguments.length, o = new Array(s), t = 0; t < s; t++) o[t] = arguments[t];
                            return e = a.call.apply(a, [this].concat(o)), (0, u.default)((0, l.default)(e), "id", p.ModuleID.schoolBus), e
                        }
                        return (0, c.default)(r, [{
                            key: "auto",
                            value: function() {
                                return (s = s || (0, t.default)((0, o.default)().mark((function e() {
                                    return (0, o.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, this.getSchoolBus();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }, {
                            key: "getSchoolBus",
                            value: function() {
                                var e = this;
                                return (0, m.getSchoolBus)(this.requestController).then((function(e) {
                                    return e.data
                                })).then((function(s) {
                                    e.store.dispatch((0, b.setSchoolBus)(s))
                                }))
                            }
                        }]), r
                    }(h.Mini4BaseModule)) || r)
            },
            "./src/packages/others/module/schoolBus/store.ts": function(e, s, a) {
                a.d(s, {
                    schoolBusSlice: function() {
                        return r
                    },
                    setSchoolBus: function() {
                        return o
                    }
                });
                var r = (0, a("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "SCHOOL_BUS",
                        initialState: {
                            busInfo: []
                        },
                        reducers: {
                            setSchoolBus: function(e, s) {
                                e.busInfo = s.payload
                            }
                        }
                    }),
                    o = r.actions.setSchoolBus
            },
            "./src/packages/others/pages/school-bus/BusCard/index.tsx": function(e, s, a) {
                a.d(s, {
                    default: function() {
                        return l
                    }
                });
                var r = a("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                    o = a("webpack/container/remote/react"),
                    t = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    n = a("webpack/container/remote/react/jsx-runtime");

                function c(e) {
                    var s = e.item,
                        a = s.time,
                        r = s.address;
                    return (0, n.jsxs)(t.View, {
                        className: "site via",
                        children: [a ? (0, n.jsxs)(t.View, {
                            className: "tips via",
                            children: ["预计到达 ", a]
                        }) : null, (0, n.jsxs)(t.View, {
                            className: "site-text",
                            children: [(0, n.jsx)(t.View, {
                                className: "circle-container",
                                children: (0, n.jsx)(t.View, {
                                    className: "round",
                                    style: {
                                        backgroundColor: e.color
                                    },
                                    children: (0, n.jsx)(t.View, {
                                        className: "vertical-line via",
                                        style: {
                                            backgroundColor: e.color
                                        }
                                    })
                                })
                            }), (0, n.jsx)(t.View, {
                                className: "text via",
                                children: r
                            })]
                        })]
                    })
                }

                function l(e) {
                    var s = (0, o.useState)(!1),
                        a = (0, r.default)(s, 2),
                        l = a[0],
                        i = a[1],
                        d = e.item,
                        u = d.days,
                        m = d.stops,
                        p = d.departure,
                        h = d.destination,
                        b = d.departureTime;
                    return (0, n.jsxs)(t.View, {
                        className: "bus-container",
                        children: [(0, n.jsx)(t.View, {
                            className: "bus-during",
                            children: u
                        }), (0, n.jsxs)(t.View, {
                            className: "bus-sites-wrapper",
                            children: [(0, n.jsxs)(t.View, {
                                className: "sites-container",
                                children: [(0, n.jsxs)(t.View, {
                                    className: "site start",
                                    children: [(0, n.jsxs)(t.View, {
                                        className: "tips",
                                        children: ["始发站 ", b]
                                    }), (0, n.jsxs)(t.View, {
                                        className: "site-text",
                                        children: [(0, n.jsx)(t.View, {
                                            className: "circle-container",
                                            children: (0, n.jsx)(t.View, {
                                                className: "ring",
                                                style: {
                                                    borderColor: e.color
                                                },
                                                children: l ? (0, n.jsx)(t.View, {
                                                    className: "vertical-line start",
                                                    style: {
                                                        backgroundColor: e.color
                                                    }
                                                }) : null
                                            })
                                        }), (0, n.jsx)(t.View, {
                                            className: "text",
                                            children: p
                                        })]
                                    })]
                                }), (0, n.jsx)(t.View, {
                                    className: "site-via-container",
                                    style: {
                                        height: "".concat(l ? 110 * m.length : 0, "rpx")
                                    },
                                    children: m.map((function(s, a) {
                                        return (0, n.jsx)(c, {
                                            item: s,
                                            color: e.color
                                        }, a)
                                    }))
                                }), (0, n.jsxs)(t.View, {
                                    className: "site end",
                                    children: [(0, n.jsx)(t.View, {
                                        className: "tips",
                                        children: "终点站"
                                    }), (0, n.jsxs)(t.View, {
                                        className: "site-text",
                                        children: [(0, n.jsx)(t.View, {
                                            className: "circle-container",
                                            children: (0, n.jsx)(t.View, {
                                                className: "ring",
                                                style: {
                                                    borderColor: e.color
                                                },
                                                children: l ? (0, n.jsx)(t.View, {
                                                    className: "vertical-line end",
                                                    style: {
                                                        backgroundColor: e.color
                                                    }
                                                }) : null
                                            })
                                        }), (0, n.jsx)(t.View, {
                                            className: "text",
                                            children: h
                                        })]
                                    })]
                                })]
                            }), (0, n.jsxs)(t.View, {
                                className: "arrow-container",
                                onClick: function() {
                                    return i((function(e) {
                                        return !e
                                    }))
                                },
                                children: [(0, n.jsx)(t.View, {
                                    className: "text",
                                    children: "途经站"
                                }), (0, n.jsx)(t.View, {
                                    className: l ? "arrow-down" : "arrow-down active"
                                })]
                            })]
                        })]
                    })
                }
            },
            "./src/packages/others/pages/school-bus/BusOutlineCard/index.tsx": function(e, s, a) {
                var r = a("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    o = a("./src/constants/assets.ts"),
                    t = a("webpack/container/remote/react/jsx-runtime");
                s.default = function(e) {
                    var s = e.item,
                        a = s.arrowImage,
                        n = void 0 === a ? "" : a,
                        c = s.updateTime,
                        l = void 0 === c ? "" : c,
                        i = s.endAddress,
                        d = void 0 === i ? "" : i,
                        u = s.startAddress,
                        m = void 0 === u ? "" : u,
                        p = s.backgroundImage,
                        h = void 0 === p ? "" : p,
                        b = e.onPopup;
                    return (0, t.jsx)(r.View, {
                        className: "card-wrapper",
                        children: (0, t.jsxs)(r.View, {
                            className: "card-inner",
                            children: [(0, t.jsx)(r.Image, {
                                className: "bg",
                                src: h
                            }), (0, t.jsx)(r.Image, {
                                onClick: b,
                                className: "question-mark",
                                src: o.COMMON_ASSETS.Question
                            }), (0, t.jsxs)(r.View, {
                                className: "bus-route",
                                children: [(0, t.jsx)(r.View, {
                                    className: "destination start",
                                    children: m
                                }), (0, t.jsx)(r.Image, {
                                    className: "arrow",
                                    src: n,
                                    mode: "aspectFit"
                                }), (0, t.jsx)(r.View, {
                                    className: "destination end",
                                    children: d
                                })]
                            }), (0, t.jsx)(r.View, {
                                className: "tips",
                                children: l ? "更新于：".concat(l) : ""
                            })]
                        })
                    })
                }
            },
            "./src/packages/others/pages/school-bus/index.tsx": function(e, s, a) {
                var r = a("webpack/container/remote/@tarojs/runtime"),
                    o = a("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/school-bus/index.tsx");
                Page((0, r.createPageConfig)(o.default, "packages/others/pages/school-bus/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), o.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "sub-common/ed38b011cfb987b1850ffd548c33fde1", "sub-common/707d16750112c4bb946873f88718cbfc", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/school-bus/index.tsx", e(e.s = "./src/packages/others/pages/school-bus/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/school-bus/index.js'
});
require("packages/others/pages/school-bus/index.js");
$gwx3_XC_9 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_9 || [];

        function gz$gwx3_XC_9_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1 = [];
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
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_9_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_9 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_9 = true;
        var x = ['./packages/others/pages/school-calendar/index.wxml', '../../../../base.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_9_1()
            var eTB = e_[x[0]].i
            _ai(eTB, x[1], e_, x[0], 1, 1)
            var bUB = _v()
            _(r, bUB)
            var oVB = _oz(z, 1, e, s, gg)
            var xWB = _gd(x[0], oVB, e_, d_)
            if (xWB) {
                var oXB = _1z(z, 0, e, s, gg) || {}
                var cur_globalf = gg.f
                bUB.wxXCkey = 3
                xWB(oXB, oXB, bUB, gg)
                gg.f = cur_globalf
            } else _w(oVB, x[0], 2, 14)
            eTB.pop()
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
                g = "$gwx3_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_9();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packages/others/pages/school-calendar/index.wxml'] = [$gwx3_XC_9, './packages/others/pages/school-calendar/index.wxml'];
else __wxAppCode__['packages/others/pages/school-calendar/index.wxml'] = $gwx3_XC_9('./packages/others/pages/school-calendar/index.wxml');;
__wxRoute = "packages/others/pages/school-calendar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packages/others/pages/school-calendar/index.js";
define("packages/others/pages/school-calendar/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../sub-vendors.js"), /*! For license information please see index.js.LICENSE.txt */ (wx.webpackJsonp = wx.webpackJsonp || []).push([
        ["packages/others/pages/school-calendar/index"], {
            "./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/school-calendar/index.tsx": function(e, a, s) {
                s.d(a, {
                    default: function() {
                        return m
                    }
                });
                var r = s("webpack/container/remote/@tarojs/taro"),
                    n = s.n(r),
                    o = s("./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.16_@types+react@18.2.21_@types+webpack@4.41.39_postcss@8.4.29/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"),
                    t = s("./src/common/hook.ts"),
                    l = s("./src/components/PageLayout/index.tsx"),
                    c = s("./src/components/PageScroll/index.tsx"),
                    d = s("./src/packages/others/module/schoolCalendar/index.ts"),
                    u = s("webpack/container/remote/react/jsx-runtime"),
                    i = function() {
                        var e = (0, d.useCalendarData)();
                        return (0, u.jsx)(c.PageScroll, {
                            className: "school-calendar",
                            children: e.map((function(a, s) {
                                return (0, u.jsx)(o.Image, {
                                    src: a,
                                    mode: "widthFix",
                                    className: "calendar-img",
                                    onClick: function() {
                                        return n().previewImage({
                                            urls: e
                                        })
                                    }
                                }, s)
                            }))
                        })
                    };

                function m() {
                    var e = (0, t.useModule)(d.CalendarModule),
                        a = e.loading,
                        s = e.success;
                    return (0, u.jsx)(l.Layout, {
                        titleText: "校历",
                        loading: a,
                        success: s,
                        children: (0, u.jsx)(i, {})
                    })
                }
            },
            "./src/packages/others/module/schoolCalendar/hooks.ts": function(e, a, s) {
                s.d(a, {
                    useCalendarData: function() {
                        return n
                    }
                });
                var r = s("webpack/container/remote/react-redux"),
                    n = function() {
                        return (0, r.useSelector)((function(e) {
                            return null == e ? void 0 : e.calendarData.imageUrl
                        }))
                    }
            },
            "./src/packages/others/module/schoolCalendar/index.ts": function(e, a, s) {
                s.d(a, {
                    CalendarModule: function() {
                        return _
                    },
                    useCalendarData: function() {
                        return f.useCalendarData
                    }
                });
                var r, n = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),
                    o = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),
                    t = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    l = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    c = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                    d = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    u = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/createSuper.js"),
                    i = s("./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    m = s("./src/constants/module.ts"),
                    p = s("./src/packages/others/api/index.ts"),
                    h = s("./src/common/mini4/Mini4BaseModule.ts"),
                    b = s("./src/packages/others/module/schoolCalendar/store.ts"),
                    f = s("./src/packages/others/module/schoolCalendar/hooks.ts"),
                    _ = new((0, h.injectReducers)(b.calendarSlice)(r = function(e, a) {
                        (0, d.default)(r, e);
                        var s = (0, u.default)(r);

                        function r() {
                            var e;
                            (0, t.default)(this, r);
                            for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
                            return e = s.call.apply(s, [this].concat(n)), (0, i.default)((0, c.default)(e), "id", m.ModuleID.calendar), (0, i.default)((0, c.default)(e), "slice", b.calendarSlice), e
                        }
                        return (0, l.default)(r, [{
                            key: "auto",
                            value: function() {
                                return (a = a || (0, o.default)((0, n.default)().mark((function e() {
                                    var a = this;
                                    return (0, n.default)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, p.getSchoolCalendar)(this.requestController).then((function(e) {
                                                    var s = e.data.imageUrl,
                                                        r = void 0 === s ? [] : s;
                                                    a.store.dispatch((0, b.setCalendarData)(r))
                                                }));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })))).apply(this, arguments)
                            }
                        }]), r
                    }(h.Mini4BaseModule)) || r)
            },
            "./src/packages/others/module/schoolCalendar/store.ts": function(e, a, s) {
                s.d(a, {
                    calendarSlice: function() {
                        return r
                    },
                    setCalendarData: function() {
                        return n
                    }
                });
                var r = (0, s("webpack/container/remote/@reduxjs/toolkit").createSlice)({
                        name: "calendarData",
                        initialState: {
                            imageUrl: []
                        },
                        reducers: {
                            setCalendarData: function(e, a) {
                                e.imageUrl = a.payload
                            }
                        }
                    }),
                    n = r.actions.setCalendarData
            },
            "./src/packages/others/pages/school-calendar/index.tsx": function(e, a, s) {
                var r = s("webpack/container/remote/@tarojs/runtime"),
                    n = s("./node_modules/.pnpm/thread-loader@4.0.2_webpack@5.78.0_@swc+core@1.3.23_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.18.6_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[10].use[1]!./src/packages/others/pages/school-calendar/index.tsx");
                Page((0, r.createPageConfig)(n.default, "packages/others/pages/school-calendar/index", {
                    root: {
                        cn: []
                    }
                }, {
                    disableScroll: !0
                } || {})), n.default
            }
        },
        function(e) {
            e.O(0, ["packages/others/sub-vendors", "taro", "vendors", "common"], (function() {
                return "./src/packages/others/pages/school-calendar/index.tsx", e(e.s = "./src/packages/others/pages/school-calendar/index.tsx")
            })), e.O()
        }
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packages/others/pages/school-calendar/index.js'
});
require("packages/others/pages/school-calendar/index.js");