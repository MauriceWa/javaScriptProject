(()=>{
        "use strict";
        var e, v = {}, g = {};
        function a(e) {
            var c = g[e];
            if (void 0 !== c)
                return c.exports;
            var f = g[e] = {
                id: e,
                loaded: !1,
                exports: {}
            };
            return v[e].call(f.exports, f, f.exports, a),
                f.loaded = !0,
                f.exports
        }
        a.m = v,
            a.amdO = {},
            e = [],
            a.O = (c,f,b,t)=>{
                if (!f) {
                    var d = 1 / 0;
                    for (r = 0; r < e.length; r++) {
                        for (var [f,b,t] = e[r], l = !0, n = 0; n < f.length; n++)
                            (!1 & t || d >= t) && Object.keys(a.O).every(p=>a.O[p](f[n])) ? f.splice(n--, 1) : (l = !1,
                            t < d && (d = t));
                        if (l) {
                            e.splice(r--, 1);
                            var o = b();
                            void 0 !== o && (c = o)
                        }
                    }
                    return c
                }
                t = t || 0;
                for (var r = e.length; r > 0 && e[r - 1][2] > t; r--)
                    e[r] = e[r - 1];
                e[r] = [f, b, t]
            }
            ,
            a.n = e=>{
                var c = e && e.__esModule ? ()=>e.default : ()=>e;
                return a.d(c, {
                    a: c
                }),
                    c
            }
            ,
            a.d = (e,c)=>{
                for (var f in c)
                    a.o(c, f) && !a.o(e, f) && Object.defineProperty(e, f, {
                        enumerable: !0,
                        get: c[f]
                    })
            }
            ,
            a.f = {},
            a.e = e=>Promise.all(Object.keys(a.f).reduce((c,f)=>(a.f[f](e, c),
                c), [])),
            a.u = e=>(8592 === e ? "common" : e) + "." + {
                176: "45df9eb45109626e",
                326: "7e8db9c20a2c0109",
                368: "2f7513f02a56b1c8",
                472: "73dda39ffcb78752",
                562: "7941696fa21b5262",
                643: "97c17b52ffa14089",
                665: "3e8ef89754bcddd5",
                747: "ce15972d290fe69c",
                838: "b27256239dd291c9",
                903: "d4630db3526f1c3a",
                1138: "a0d95cef61ea631d",
                1293: "09c335c7d1f9535a",
                1404: "ff10878504d78b38",
                1407: "ec73af0ead14eca4",
                1633: "60aed1f8c0119142",
                1701: "61fb9e51ff65dca1",
                1755: "8a0309f481f13950",
                1808: "a1bbd251c0719cd5",
                1863: "7bafc0e649fb7c1f",
                1981: "9472a88d23c6eb78",
                2026: "03ad71646b7451a5",
                2179: "e6c1ef2f8073daea",
                2223: "f95a20e1df89469d",
                2310: "6e489caaa31a678a",
                2594: "50a4c422d980cc48",
                2949: "a16daa02e34b055e",
                3085: "a03b4ca08dc007aa",
                3109: "27aad4d7641f29ab",
                3180: "10d84a4cb12ea285",
                3190: "ee96a8f28fadd345",
                3371: "ee6aa7b777fce664",
                3385: "f785ee68d5e0a6b1",
                3403: "ed746a7c56e490f8",
                3510: "d2e36fe66df3d742",
                3597: "fc3edd698c2efa01",
                3606: "ef24acb4a5a91bc6",
                3731: "8692d56e4da50486",
                3814: "6dcce2a5489fc596",
                4118: "67bde1c928628220",
                4121: "61ce17377d23a449",
                4164: "39e70290350571a9",
                4217: "38399cc026ea1166",
                4286: "de8c2cc48b390f77",
                4515: "4ae1a9ee5f4d8184",
                4553: "6b5fbfe595c18429",
                4563: "9c19e088fa996533",
                4823: "4a0cbc9c8cf925d3",
                5084: "5987814b03d2aa4f",
                5115: "5763cee761dd67a8",
                5124: "b4e2233fdcad126a",
                5228: "2512a04a2ffa8b07",
                5447: "d841454200f0de97",
                5554: "c58b2f8834a9c749",
                5638: "3ec5cd9351d9e7b5",
                5723: "a41e182fe3e07b4b",
                5733: "c863daf960d9848d",
                5880: "3a6df4d161c185d4",
                5922: "151fad70c72e8029",
                5930: "8c822fcd4e763c36",
                6069: "b46954f6679470d2",
                6073: "c812f42e223dbeaf",
                6709: "9bd0569d2ace5708",
                6890: "9c5ce69c1031d440",
                6982: "7832674c8d83e57f",
                7340: "61714d90100340a3",
                7381: "fd05464c09cf0002",
                7526: "1d21e302747b35a1",
                7568: "5697ebd8f7fc8738",
                7616: "cc7fd5f2c1d2202c",
                7725: "7305c12488255056",
                7769: "ef56483736ea2812",
                7831: "9c8a5fd3e8c98fc4",
                7848: "556d43393ad7b2d8",
                7933: "483e775b7c16ed4e",
                8007: "386a08fd069d4a9f",
                8032: "b6c2e61eafcd58ba",
                8037: "2e64f22c54be396f",
                8058: "5c8ec57056be01c4",
                8186: "7bb77031884e270a",
                8218: "261b19b22e59b726",
                8353: "19999fa65619624b",
                8371: "93dcda153b65b01a",
                8566: "fb8377ebe3046dec",
                8586: "8525ac42061ce7f7",
                8592: "0305c10a26036b56",
                8643: "08b1ca2b3b21e81c",
                8679: "18236823ea7082c9",
                8727: "27f6bd0fa245737e",
                8844: "99a3e4d3115fc676",
                8866: "6744dcba47fe85d0",
                8896: "3a6096404c051d45",
                8960: "fab451844c9cf7c6",
                8992: "c8af0dfff8a3b7d8",
                9063: "93517dd217b16b06",
                9113: "ad007bea52b861d9",
                9224: "a498e1a733589440",
                9258: "5493cd899d124f41",
                9313: "a24975065fc65742",
                9432: "8a0b1bdc48a58da8",
                9613: "e73eb6d5b643b10a",
                9621: "34f0acb5090d394a",
                9745: "63e4cb3ec03dbcb8",
                9892: "e36a9ff91a29d676"
            }[e] + ".js",
            a.miniCssF = e=>{}
            ,
            a.hmd = e=>((e = Object.create(e)).children || (e.children = []),
                Object.defineProperty(e, "exports", {
                    enumerable: !0,
                    set: ()=>{
                        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                    }
                }),
                e),
            a.o = (e,c)=>Object.prototype.hasOwnProperty.call(e, c),
            (()=>{
                    var e = {}
                        , c = "angular-client:";
                    a.l = (f,b,t,r)=>{
                        if (e[f])
                            e[f].push(b);
                        else {
                            var d, l;
                            if (void 0 !== t)
                                for (var n = document.getElementsByTagName("script"), o = 0; o < n.length; o++) {
                                    var i = n[o];
                                    if (i.getAttribute("src") == f || i.getAttribute("data-webpack") == c + t) {
                                        d = i;
                                        break
                                    }
                                }
                            d || (l = !0,
                                (d = document.createElement("script")).type = "module",
                                d.charset = "utf-8",
                                d.timeout = 120,
                            a.nc && d.setAttribute("nonce", a.nc),
                                d.setAttribute("data-webpack", c + t),
                                d.src = a.tu(f)),
                                e[f] = [b];
                            var u = (h,p)=>{
                                d.onerror = d.onload = null,
                                    clearTimeout(s);
                                var m = e[f];
                                if (delete e[f],
                                d.parentNode && d.parentNode.removeChild(d),
                                m && m.forEach(_=>_(p)),
                                    h)
                                    return h(p)
                            }
                                , s = setTimeout(u.bind(null, void 0, {
                                type: "timeout",
                                target: d
                            }), 12e4);
                            d.onerror = u.bind(null, d.onerror),
                                d.onload = u.bind(null, d.onload),
                            l && document.head.appendChild(d)
                        }
                    }
                }
            )(),
            a.r = e=>{
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            a.nmd = e=>(e.paths = [],
            e.children || (e.children = []),
                e),
            (()=>{
                    var e;
                    a.tt = ()=>(void 0 === e && (e = {
                        createScriptURL: c=>c
                    },
                    typeof trustedTypes < "u" && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("angular#bundler", e))),
                        e)
                }
            )(),
            a.tu = e=>a.tt().createScriptURL(e),
            a.p = "",
            (()=>{
                    var e = {
                        3666: 0
                    };
                    a.f.j = (b,t)=>{
                        var r = a.o(e, b) ? e[b] : void 0;
                        if (0 !== r)
                            if (r)
                                t.push(r[2]);
                            else if (3666 != b) {
                                var d = new Promise((i,u)=>r = e[b] = [i, u]);
                                t.push(r[2] = d);
                                var l = a.p + a.u(b)
                                    , n = new Error;
                                a.l(l, i=>{
                                        if (a.o(e, b) && (0 !== (r = e[b]) && (e[b] = void 0),
                                            r)) {
                                            var u = i && ("load" === i.type ? "missing" : i.type)
                                                , s = i && i.target && i.target.src;
                                            n.message = "Loading chunk " + b + " failed.\n(" + u + ": " + s + ")",
                                                n.name = "ChunkLoadError",
                                                n.type = u,
                                                n.request = s,
                                                r[1](n)
                                        }
                                    }
                                    , "chunk-" + b, b)
                            } else
                                e[b] = 0
                    }
                        ,
                        a.O.j = b=>0 === e[b];
                    var c = (b,t)=>{
                        var n, o, [r,d,l] = t, i = 0;
                        if (r.some(s=>0 !== e[s])) {
                            for (n in d)
                                a.o(d, n) && (a.m[n] = d[n]);
                            if (l)
                                var u = l(a)
                        }
                        for (b && b(t); i < r.length; i++)
                            a.o(e, o = r[i]) && e[o] && e[o][0](),
                                e[o] = 0;
                        return a.O(u)
                    }
                        , f = self.webpackChunkangular_client = self.webpackChunkangular_client || [];
                    f.forEach(c.bind(null, 0)),
                        f.push = c.bind(null, f.push.bind(f))
                }
            )(),
            a.nc = void 0
    }
)();
