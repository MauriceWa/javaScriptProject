"use strict";
(self.webpackChunkangular_client = self.webpackChunkangular_client || []).push([[8592], {
    7415: (f,l,i)=>{
        i.d(l, {
            Z: ()=>g
        });
        var e = i(37340)
            , t = i(55062)
            , p = i(36895);
        const m = ["panel"]
            , u = ["content"]
            , a = [[["", "button-body", ""]], [["", "panel-body", ""]]]
            , _ = function(o, c) {
            return {
                active: o,
                "disable-border": c
            }
        }
            , n = ["[button-body]", "[panel-body]"];
        let g = (()=>{
                class o {
                    constructor() {
                        this.widthPercent = "100%",
                            this.maxWidth = "1400px",
                            this.disableBorder = !1,
                            this.isPanelOpen = !1
                    }
                    toggleOpen(r) {
                        this.isPanelOpen = !this.isPanelOpen,
                        this.isPanelOpen && setTimeout(()=>r.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        }), 100)
                    }
                }
                return o.\u0275fac = function(r) {
                    return new (r || o)
                }
                    ,
                    o.\u0275cmp = t.Xpm({
                        type: o,
                        selectors: [["app-accordion"]],
                        viewQuery: function(r, s) {
                            if (1 & r && (t.Gf(m, 5),
                                t.Gf(u, 5)),
                            2 & r) {
                                let d;
                                t.iGM(d = t.CRH()) && (s.panel = d.first),
                                t.iGM(d = t.CRH()) && (s.content = d.first)
                            }
                        },
                        inputs: {
                            widthPercent: "widthPercent",
                            maxWidth: "maxWidth",
                            disableBorder: "disableBorder"
                        },
                        ngContentSelectors: n,
                        decls: 7,
                        vars: 13,
                        consts: [[1, "accordion-container", "flex-container-col"], [1, "flex-container-row", "accordion", "button", "is-fullwidth", 3, "ngClass", "click"], ["btn", ""], [1, "accordion-panel"], ["panel", ""]],
                        template: function(r, s) {
                            if (1 & r) {
                                const d = t.EpF();
                                t.F$t(a),
                                    t.TgZ(0, "div", 0)(1, "button", 1, 2),
                                    t.NdJ("click", function() {
                                        t.CHM(d);
                                        const h = t.MAs(2);
                                        return t.KtG(s.toggleOpen(h))
                                    }),
                                    t.Hsn(3),
                                    t.qZA(),
                                    t.TgZ(4, "div", 3, 4),
                                    t.Hsn(6, 1, ["#content", ""]),
                                    t.qZA()()
                            }
                            2 & r && (t.xp6(1),
                                t.Udp("width", s.widthPercent)("max-width", s.maxWidth),
                                t.Q6J("ngClass", t.WLB(10, _, s.isPanelOpen, s.disableBorder)),
                                t.xp6(3),
                                t.Udp("width", s.widthPercent)("max-width", s.maxWidth),
                                t.Q6J("@panelExpansion", s.isPanelOpen ? "expanded" : "collapsed"))
                        },
                        dependencies: [p.mk],
                        styles: [".accordion[_ngcontent-%COMP%]{width:100%;font-size:large;font-weight:700}.accordion[_ngcontent-%COMP%]:focus{border-color:#dbdbdb}.panel[_ngcontent-%COMP%]{width:100%;background-color:#d3d3d3;overflow-x:auto;overflow-y:hidden}.spacer[_ngcontent-%COMP%]{flex:1}button[_ngcontent-%COMP%]{border-width:2px!important}.disable-border[_ngcontent-%COMP%], .disable-border[_ngcontent-%COMP%]:active{border-color:transparent!important}"],
                        data: {
                            animation: [(0,
                                e.X$)("panelExpansion", [(0,
                                e.SB)("expanded", (0,
                                e.oB)({
                                display: "block",
                                height: "*",
                                opacity: 1
                            })), (0,
                                e.SB)("collapsed", (0,
                                e.oB)({
                                display: "none",
                                height: "0px",
                                opacity: 0
                            })), (0,
                                e.eR)("expanded <=> collapsed", (0,
                                e.jt)("200ms cubic-bezier(.37,1.04,.68,.98)"))])]
                        }
                    }),
                    o
            }
        )()
    }
    ,
    55035: (f,l,i)=>{
        i.d(l, {
            d: ()=>a,
            o: ()=>_
        });
        var e = i(55062)
            , t = i(96774)
            , p = i(36895)
            , m = i(38069);
        function u(n, g) {
            if (1 & n) {
                const o = e.EpF();
                e.TgZ(0, "div", 2),
                    e.NdJ("click", function() {
                        const s = e.CHM(o).$implicit
                            , d = e.oxw();
                        return e.KtG(d.logCourseClick(s.lessonId))
                    }),
                    e._UZ(1, "img", 3),
                    e.TgZ(2, "h1", 4),
                    e._uU(3),
                    e.qZA()()
            }
            if (2 & n) {
                const o = g.$implicit;
                e.Q6J("routerLink", "/courses/lessons/" + o.lessonId),
                    e.xp6(1),
                    e.Q6J("src", o.imgPath, e.LSH),
                    e.xp6(2),
                    e.Oqu(o.title)
            }
        }
        const a = [{
            lessonId: "python-for-coding-interviews",
            youtubeLink: "0K_eZGS5NsU",
            title: "Python for Coding Interviews",
            imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/fe189989-f574-4bf8-a562-b8e44d286000/public",
            article: "https://github.com/neetcode-gh/lesson-data/blob/main/python.md"
        }, {
            lessonId: "big-o-notation",
            youtubeLink: "BgLTDT03QtU",
            title: "Big-O Notation",
            imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c21f735d-f9f7-4efe-1cb1-2982fa151400/public",
            article: "https://github.com/neetcode-gh/lesson-data/blob/main/bigO.md"
        }, {
            lessonId: "8-design-patterns",
            youtubeLink: "tAuRQs_d9F8",
            title: "8 Design Patterns Every Programmer Should Know",
            imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d1971965-f033-4c26-6925-c0b06a270500/public",
            article: "https://github.com/neetcode-gh/lesson-data/blob/main/designPatterns.md"
        }, {
            lessonId: "20-sysdes-concepts",
            youtubeLink: "i53Gi_K3o7I",
            title: "20 Must-Know System Design Concepts",
            imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e19bb26d-9436-4f98-7852-d1a181818d00/public"
        }, {
            lessonId: "30-day-javascript-challenge",
            youtubeList: ["P9Ldx1eTlRc", "yEGQQAG5V68", "UXNXKGFZD08", "7FhJHA5jlYk", "w1o81gbEEJU", "KmTbYfpGxdM", "mIFw1H7Ljco", "m_SWhM9iX3s", "oFXyzJt9VeU", "pi4kqMWQXxA", "P0D9Z6H7O00", "hfH57rdZhOk", "DB8pAAg-9xw", "w772gtNK0Gw", "1sxSpnxNx5w", "zyGZV_fIQWk", "4JVZ-mVqJPg", "f94fUbHU-FY", "LJwgAMHGcI0", "gH7oZs1WZfg", "VUN-O3B9ceY", "_DetLPKtFNk", "3JdtfMBrUqc", "zs9axOyYHRE", "meIo-Q07Ba8", "du_GH-Ooa8E", "M69bjWFarU0", "XoGjPdPTAVA", "T643rQ70Jlk", "yo-J1jQaZYU"],
            title: "30-Day JavaScript Coding Challenge",
            imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/5b31c7ef-d597-4b08-be82-15e3db17e100/public"
        }, {
            lessonId: "design-youtube",
            title: "Design a YouTube Clone",
            imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/2d33be5f-6a51-4475-6975-7350d9d3d700/public",
            article: "https://github.com/neetcode-gh/lesson-data/blob/main/youtubeDesignDoc.md"
        }, {
            lessonId: "mongodb",
            youtubeLink: "QPFlGswpyJY",
            title: "MongoDB Crash Course",
            imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/cc61ac8a-d7b5-4f47-b001-c7736ae43600/public",
            article: "https://github.com/neetcode-gh/lesson-data/blob/main/mongodb.md"
        }];
        let _ = (()=>{
                class n {
                    constructor(o) {
                        this.analyticsService = o,
                            this.cardConfigs = a
                    }
                    ngOnInit() {}
                    logCourseClick(o) {
                        this.analyticsService.logEvent(o.toUpperCase())
                    }
                }
                return n.\u0275fac = function(o) {
                    return new (o || n)(e.Y36(t.m2))
                }
                    ,
                    n.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [["app-lesson-list"]],
                        decls: 2,
                        vars: 1,
                        consts: [[1, "flex-container-row", "card-container", 2, "padding-left", "20px", "padding-right", "20px"], ["class", "box card my-card hover-large cursor-hand", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "box", "card", "my-card", "hover-large", "cursor-hand", 3, "routerLink", "click"], ["loading", "lazy", 1, "card-img", 3, "src"], [1, "course-title"]],
                        template: function(o, c) {
                            1 & o && (e.TgZ(0, "div", 0),
                                e.YNc(1, u, 4, 3, "div", 1),
                                e.qZA()),
                            2 & o && (e.xp6(1),
                                e.Q6J("ngForOf", c.cardConfigs))
                        },
                        dependencies: [p.sg, m.rH],
                        styles: [".flex-container-row[_ngcontent-%COMP%]{flex-flow:wrap;width:100%}.my-card[_ngcontent-%COMP%]{align-self:stretch;display:flex;flex-direction:column;align-items:center;margin:40px 1% 1%;padding-left:0;padding-right:0;padding-top:0;width:40%;max-width:300px;text-align:center;border-radius:.75rem}button[_ngcontent-%COMP%]{margin-top:15px;max-width:200px}.card-img[_ngcontent-%COMP%]{height:auto;max-width:100%;margin:0 15px 15px;border-top-left-radius:.75rem;border-top-right-radius:.75rem}.course-title[_ngcontent-%COMP%]{font-size:21px;padding-left:20px;padding-right:20px}@media (max-width: 1000px){.my-card[_ngcontent-%COMP%]{width:80%}}*[_ngcontent-%COMP%]{font-family:helvetica}"]
                    }),
                    n
            }
        )()
    }
    ,
    51703: (f,l,i)=>{
        i.d(l, {
            T: ()=>u
        });
        var e = i(72986)
            , t = i(24850)
            , p = i(55062)
            , m = i(34758);
        let u = (()=>{
                class a {
                    constructor(n) {
                        this.userService = n
                    }
                    resolve() {
                        return this.userService.getUserInfo$().pipe((0,
                            e.q)(1), (0,
                            t.U)(n=>null !== n && ("yearly" === n.proStatus || "lifetime" === n.proStatus))).toPromise()
                    }
                }
                return a.\u0275fac = function(n) {
                    return new (n || a)(p.LFG(m.K))
                }
                    ,
                    a.\u0275prov = p.Yz7({
                        token: a,
                        factory: a.\u0275fac,
                        providedIn: "root"
                    }),
                    a
            }
        )()
    }
    ,
    61696: (f,l,i)=>{
        i.r(l),
            i.d(l, {
                conf: ()=>g,
                language: ()=>o
            });
        var e = i(16136)
            , t = Object.defineProperty
            , p = Object.getOwnPropertyDescriptor
            , m = Object.getOwnPropertyNames
            , u = Object.prototype.hasOwnProperty
            , a = (c,r,s,d)=>{
            if (r && "object" == typeof r || "function" == typeof r)
                for (let b of m(r))
                    !u.call(c, b) && b !== s && t(c, b, {
                        get: ()=>r[b],
                        enumerable: !(d = p(r, b)) || d.enumerable
                    });
            return c
        }
            , n = {};
        a(n, e, "default");
        var g = {
            wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
            comments: {
                lineComment: "//",
                blockComment: ["/*", "*/"]
            },
            brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
            onEnterRules: [{
                beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
                afterText: /^\s*\*\/$/,
                action: {
                    indentAction: n.languages.IndentAction.IndentOutdent,
                    appendText: " * "
                }
            }, {
                beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
                action: {
                    indentAction: n.languages.IndentAction.None,
                    appendText: " * "
                }
            }, {
                beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
                action: {
                    indentAction: n.languages.IndentAction.None,
                    appendText: "* "
                }
            }, {
                beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
                action: {
                    indentAction: n.languages.IndentAction.None,
                    removeText: 1
                }
            }],
            autoClosingPairs: [{
                open: "{",
                close: "}"
            }, {
                open: "[",
                close: "]"
            }, {
                open: "(",
                close: ")"
            }, {
                open: '"',
                close: '"',
                notIn: ["string"]
            }, {
                open: "'",
                close: "'",
                notIn: ["string", "comment"]
            }, {
                open: "`",
                close: "`",
                notIn: ["string", "comment"]
            }, {
                open: "/**",
                close: " */",
                notIn: ["string"]
            }],
            folding: {
                markers: {
                    start: new RegExp("^\\s*//\\s*#?region\\b"),
                    end: new RegExp("^\\s*//\\s*#?endregion\\b")
                }
            }
        }
            , o = {
            defaultToken: "invalid",
            tokenPostfix: ".ts",
            keywords: ["abstract", "any", "as", "asserts", "bigint", "boolean", "break", "case", "catch", "class", "continue", "const", "constructor", "debugger", "declare", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "from", "function", "get", "if", "implements", "import", "in", "infer", "instanceof", "interface", "is", "keyof", "let", "module", "namespace", "never", "new", "null", "number", "object", "out", "package", "private", "protected", "public", "override", "readonly", "require", "global", "return", "satisfies", "set", "static", "string", "super", "switch", "symbol", "this", "throw", "true", "try", "type", "typeof", "undefined", "unique", "unknown", "var", "void", "while", "with", "yield", "async", "await", "of"],
            operators: ["<=", ">=", "==", "!=", "===", "!==", "=>", "+", "-", "**", "*", "/", "%", "++", "--", "<<", "</", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "??", "?", ":", "=", "+=", "-=", "*=", "**=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", "@"],
            symbols: /[=><!~?:&|+\-*\/\^%]+/,
            escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
            digits: /\d+(_+\d+)*/,
            octaldigits: /[0-7]+(_+[0-7]+)*/,
            binarydigits: /[0-1]+(_+[0-1]+)*/,
            hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
            regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
            regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
            tokenizer: {
                root: [[/[{}]/, "delimiter.bracket"], {
                    include: "common"
                }],
                common: [[/#?[a-z_$][\w$]*/, {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "identifier"
                    }
                }], [/[A-Z][\w\$]*/, "type.identifier"], {
                    include: "@whitespace"
                }, [/\/(?=([^\\\/]|\\.)+\/([dgimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/, {
                    token: "regexp",
                    bracket: "@open",
                    next: "@regexp"
                }], [/[()\[\]]/, "@brackets"], [/[<>](?!@symbols)/, "@brackets"], [/!(?=([^=]|$))/, "delimiter"], [/@symbols/, {
                    cases: {
                        "@operators": "delimiter",
                        "@default": ""
                    }
                }], [/(@digits)[eE]([\-+]?(@digits))?/, "number.float"], [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, "number.float"], [/0[xX](@hexdigits)n?/, "number.hex"], [/0[oO]?(@octaldigits)n?/, "number.octal"], [/0[bB](@binarydigits)n?/, "number.binary"], [/(@digits)n?/, "number"], [/[;,.]/, "delimiter"], [/"([^"\\]|\\.)*$/, "string.invalid"], [/'([^'\\]|\\.)*$/, "string.invalid"], [/"/, "string", "@string_double"], [/'/, "string", "@string_single"], [/`/, "string", "@string_backtick"]],
                whitespace: [[/[ \t\r\n]+/, ""], [/\/\*\*(?!\/)/, "comment.doc", "@jsdoc"], [/\/\*/, "comment", "@comment"], [/\/\/.*$/, "comment"]],
                comment: [[/[^\/*]+/, "comment"], [/\*\//, "comment", "@pop"], [/[\/*]/, "comment"]],
                jsdoc: [[/[^\/*]+/, "comment.doc"], [/\*\//, "comment.doc", "@pop"], [/[\/*]/, "comment.doc"]],
                regexp: [[/(\{)(\d+(?:,\d*)?)(\})/, ["regexp.escape.control", "regexp.escape.control", "regexp.escape.control"]], [/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/, ["regexp.escape.control", {
                    token: "regexp.escape.control",
                    next: "@regexrange"
                }]], [/(\()(\?:|\?=|\?!)/, ["regexp.escape.control", "regexp.escape.control"]], [/[()]/, "regexp.escape.control"], [/@regexpctl/, "regexp.escape.control"], [/[^\\\/]/, "regexp"], [/@regexpesc/, "regexp.escape"], [/\\\./, "regexp.invalid"], [/(\/)([dgimsuy]*)/, [{
                    token: "regexp",
                    bracket: "@close",
                    next: "@pop"
                }, "keyword.other"]]],
                regexrange: [[/-/, "regexp.escape.control"], [/\^/, "regexp.invalid"], [/@regexpesc/, "regexp.escape"], [/[^\]]/, "regexp"], [/\]/, {
                    token: "regexp.escape.control",
                    next: "@pop",
                    bracket: "@close"
                }]],
                string_double: [[/[^\\"]+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/"/, "string", "@pop"]],
                string_single: [[/[^\\']+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/'/, "string", "@pop"]],
                string_backtick: [[/\$\{/, {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }], [/[^\\`$]+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/`/, "string", "@pop"]],
                bracketCounting: [[/\{/, "delimiter.bracket", "@bracketCounting"], [/\}/, "delimiter.bracket", "@pop"], {
                    include: "common"
                }]
            }
        }
    }
}]);
