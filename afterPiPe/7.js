(self.webpackChunkangular_client = self.webpackChunkangular_client || []).push([[8586], {
    45616: (ve,ae)=>{
        "use strict";
        ae.DF = {
            prefix: "fas",
            iconName: "sort-down",
            icon: [320, 512, [], "f0dd", "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"]
        },
            ae.u9 = ae.DF
    }
    ,
    68586: (ve,ae,y)=>{
        "use strict";
        y.d(ae, {
            F: ()=>Te,
            c: ()=>De
        });
        var se = y(8929)
            , w = y(7625)
            , Y = y(90087)
            , J = y(45616)
            , E = y(55062)
            , q = y(27608)
            , Q = y(36895)
            , H = y(3868)
            , Ee = y(46375);
        const Ie = ["listParent"];
        function pe(ie, ee) {
            if (1 & ie) {
                const $ = E.EpF();
                E.TgZ(0, "a", 10),
                    E.NdJ("click", function() {
                        const Ke = E.CHM($).$implicit
                            , ze = E.oxw();
                        return E.KtG(ze.updateLang(Ke))
                    }),
                    E._uU(1),
                    E.qZA()
            }
            if (2 & ie) {
                const $ = ee.$implicit
                    , W = E.oxw();
                E.Q6J("ngClass", W.currentLang === $ ? "selected-item" : ""),
                    E.xp6(1),
                    E.hij(" ", W.displayLang[$], " ")
            }
        }
        const Te = ["python", "java", "cpp", "javascript", "typescript", "go", "swift", "csharp", "rust", "kotlin", "ruby", "c", "scala", "dart"];
        let De = (()=>{
                class ie {
                    constructor($) {
                        this.languageState = $,
                            this.destroy$ = new se.xQ,
                            this.faSortDown = J.u9,
                            this.lightTheme = !1,
                            this.validLangs = Te,
                            this.dropdownOpen = !1,
                            this.displayLang = Y.Fv,
                            this.currentLang = "python"
                    }
                    ngOnInit() {
                        this.languageState.getLanguage$().pipe((0,
                            w.R)(this.destroy$)).subscribe($=>{
                                this.currentLang = $
                            }
                        )
                    }
                    ngAfterViewInit() {}
                    ngOnDestroy() {
                        this.destroy$.next(!0),
                            this.destroy$.complete()
                    }
                    toggleDropdown() {
                        this.dropdownOpen = !this.dropdownOpen
                    }
                    closeDropdown() {
                        this.dropdownOpen = !1
                    }
                    updateLang($) {
                        this.toggleDropdown(),
                            this.currentLang = $,
                            this.languageState.setLanguage($)
                    }
                }
                return ie.\u0275fac = function($) {
                    return new ($ || ie)(E.Y36(q.j))
                }
                    ,
                    ie.\u0275cmp = E.Xpm({
                        type: ie,
                        selectors: [["app-code-language"]],
                        viewQuery: function($, W) {
                            if (1 & $ && E.Gf(Ie, 5),
                            2 & $) {
                                let ue;
                                E.iGM(ue = E.CRH()) && (W.listParent = ue.first)
                            }
                        },
                        inputs: {
                            lightTheme: "lightTheme",
                            validLangs: "validLangs"
                        },
                        decls: 12,
                        vars: 6,
                        consts: [["appClickOutside", "", 1, "dropdown", "is-right", 3, "ngClass", "clickOutside"], [1, "dropdown-trigger"], ["aria-haspopup", "true", "aria-controls", "dropdown-menu3", 1, "toggle-btn", "button", "flex-container-row", 2, "height", "2rem", 3, "ngClass", "click"], [1, "spacer"], [1, "icon", "is-small"], [3, "icon"], ["id", "dropdown-menu3", "role", "menu", 1, "dropdown-menu"], [2, "border-radius", "4px", "overflow-y", "auto", 3, "ngClass"], ["listParent", ""], ["class", "dropdown-item", "style", "text-align: left; padding-right: 15px; padding-left: 15px", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 2, "text-align", "left", "padding-right", "15px", "padding-left", "15px", 3, "ngClass", "click"]],
                        template: function($, W) {
                            1 & $ && (E.TgZ(0, "div", 0),
                                E.NdJ("clickOutside", function() {
                                    return W.closeDropdown()
                                }),
                                E.TgZ(1, "div", 1)(2, "button", 2),
                                E.NdJ("click", function() {
                                    return W.toggleDropdown()
                                }),
                                E.TgZ(3, "span"),
                                E._uU(4),
                                E.qZA(),
                                E._UZ(5, "div", 3),
                                E.TgZ(6, "span", 4),
                                E._UZ(7, "fa-icon", 5),
                                E.qZA()()(),
                                E.TgZ(8, "div", 6)(9, "div", 7, 8),
                                E.YNc(11, pe, 2, 2, "a", 9),
                                E.qZA()()()),
                            2 & $ && (E.Q6J("ngClass", W.dropdownOpen ? "is-active" : ""),
                                E.xp6(2),
                                E.Q6J("ngClass", W.lightTheme ? "editor-language-btn" : "is-info"),
                                E.xp6(2),
                                E.Oqu(W.displayLang[W.currentLang]),
                                E.xp6(3),
                                E.Q6J("icon", W.faSortDown),
                                E.xp6(2),
                                E.Q6J("ngClass", W.lightTheme ? "editor-language-btn" : "dropdown-content"),
                                E.xp6(2),
                                E.Q6J("ngForOf", W.validLangs))
                        },
                        dependencies: [Q.mk, Q.sg, H.BN, Ee._],
                        styles: [".dropdown[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]{overflow-y:visible}.dropdown-menu[_ngcontent-%COMP%]{min-width:0px}.dropdown-menu[_ngcontent-%COMP%], .dropdown-trigger[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:140px}.dropdown-content[_ngcontent-%COMP%]{background-color:#3e8ed0;max-height:190px;overflow-y:auto}.button[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%], a[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.selected-item[_ngcontent-%COMP%]{background-color:#fff;color:#000}.dropdown-item[_ngcontent-%COMP%]:hover{color:#000!important}span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-size:16px}@media screen and (max-width: 842px){span[_ngcontent-%COMP%], a[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{font-size:13px}.dropdown-menu[_ngcontent-%COMP%], .dropdown-trigger[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:120px}}@media screen and (max-width: 560px){span[_ngcontent-%COMP%], a[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{font-size:10px}.dropdown-menu[_ngcontent-%COMP%], .dropdown-trigger[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px}}"]
                    }),
                    ie
            }
        )()
    }
    ,
    90087: (ve,ae,y)=>{
        "use strict";
        y.d(ae, {
            QL: ()=>n,
            Fv: ()=>Me
        });
        const w = y(84940);
        var J = "[0-9](_*[0-9])*"
            , E = `\\.(${J})`
            , q = "[0-9a-fA-F](_*[0-9a-fA-F])*"
            , Q = {
            className: "number",
            variants: [{
                begin: `(\\b(${J})((${E})|\\.)?|(${E}))[eE][+-]?(${J})[fFdD]?\\b`
            }, {
                begin: `\\b(${J})((${E})[fFdD]?\\b|\\.([fFdD]\\b)?)`
            }, {
                begin: `(${E})[fFdD]?\\b`
            }, {
                begin: `\\b(${J})[fFdD]\\b`
            }, {
                begin: `\\b0[xX]((${q})\\.?|(${q})?\\.(${q}))[pP][+-]?(${J})[fFdD]?\\b`
            }, {
                begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
            }, {
                begin: `\\b0[xX](${q})[lL]?\\b`
            }, {
                begin: "\\b0(_*[0-7])*[lL]?\\b"
            }, {
                begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
            }],
            relevance: 0
        };
        function H(e, t, i) {
            return -1 === i ? "" : e.replace(t, s=>H(e, t, i - 1))
        }
        const Ie = "[A-Za-z$_][0-9A-Za-z$_]*"
            , pe = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"]
            , Te = ["true", "false", "null", "undefined", "NaN", "Infinity"]
            , De = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"]
            , ie = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]
            , ee = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"]
            , $ = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"]
            , W = [].concat(ee, De, ie);
        function Le(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }
        function xe(e) {
            return L("(?=", e, ")")
        }
        function L(...e) {
            return e.map(i=>Le(i)).join("")
        }
        function j(...e) {
            const t = function Ge(e) {
                const t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1),
                    t) : {}
            }(e);
            return "(" + (t.capture ? "" : "?:") + e.map(s=>Le(s)).join("|") + ")"
        }
        const ke = e=>L(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/)
            , Qe = ["Protocol", "Type"].map(ke)
            , Xe = ["init", "self"].map(ke)
            , bn = ["Any", "Self"]
            , be = ["actor", "any", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "distributed", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"]
            , Ve = ["false", "nil", "true"]
            , fn = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"]
            , mn = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"]
            , Se = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"]
            , Je = j(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/)
            , je = j(Je, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/)
            , He = L(Je, je, "*")
            , en = j(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/)
            , Be = j(en, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/)
            , le = L(en, Be, "*")
            , We = L(/[A-Z]/, Be, "*")
            , Nn = ["autoclosure", L(/convention\(/, j("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", L(/objc\(/, le, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"]
            , hn = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"]
            , Ue = "[A-Za-z$_][0-9A-Za-z$_]*"
            , nn = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"]
            , tn = ["true", "false", "null", "undefined", "NaN", "Infinity"]
            , an = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"]
            , sn = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]
            , rn = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"]
            , on = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"]
            , cn = [].concat(rn, an, sn);
        var he = "[0-9](_*[0-9])*"
            , Fe = `\\.(${he})`
            , we = "[0-9a-fA-F](_*[0-9a-fA-F])*"
            , fe = {
            className: "number",
            variants: [{
                begin: `(\\b(${he})((${Fe})|\\.)?|(${Fe}))[eE][+-]?(${he})[fFdD]?\\b`
            }, {
                begin: `\\b(${he})((${Fe})[fFdD]?\\b|\\.([fFdD]\\b)?)`
            }, {
                begin: `(${Fe})[fFdD]?\\b`
            }, {
                begin: `\\b(${he})[fFdD]\\b`
            }, {
                begin: `\\b0[xX]((${we})\\.?|(${we})?\\.(${we}))[pP][+-]?(${he})[fFdD]?\\b`
            }, {
                begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
            }, {
                begin: `\\b0[xX](${we})[lL]?\\b`
            }, {
                begin: "\\b0(_*[0-7])*[lL]?\\b"
            }, {
                begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
            }],
            relevance: 0
        }
            , vn = y(8929)
            , Ze = y(35083)
            , _n = y.n(Ze)
            , K = y(55062)
            , In = y(36895);
        const Fn = ["codeBlock"];
        w.registerLanguage("java", function Ee(e) {
            const t = e.regex
                , i = "[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*"
                , s = i + H("(?:<" + i + "~~~(?:\\s*,\\s*" + i + "~~~)*>)?", /~~~/g, 2)
                , d = {
                keyword: ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed"],
                literal: ["false", "true", "null"],
                type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
                built_in: ["super", "this"]
            }
                , _ = {
                className: "meta",
                begin: "@" + i,
                contains: [{
                    begin: /\(/,
                    end: /\)/,
                    contains: ["self"]
                }]
            }
                , p = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: d,
                relevance: 0,
                contains: [e.C_BLOCK_COMMENT_MODE],
                endsParent: !0
            };
            return {
                name: "Java",
                aliases: ["jsp"],
                keywords: d,
                illegal: /<\/|#/,
                contains: [e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0,
                    contains: [{
                        begin: /\w+@/,
                        relevance: 0
                    }, {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }]
                }), {
                    begin: /import java\.[a-z]+\./,
                    keywords: "import",
                    relevance: 2
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    begin: /"""/,
                    end: /"""/,
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE]
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                    match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, i],
                    className: {
                        1: "keyword",
                        3: "title.class"
                    }
                }, {
                    match: /non-sealed/,
                    scope: "keyword"
                }, {
                    begin: [t.concat(/(?!else)/, i), /\s+/, i, /\s+/, /=(?!=)/],
                    className: {
                        1: "type",
                        3: "variable",
                        5: "operator"
                    }
                }, {
                    begin: [/record/, /\s+/, i],
                    className: {
                        1: "keyword",
                        3: "title.class"
                    },
                    contains: [p, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    beginKeywords: "new throw return else",
                    relevance: 0
                }, {
                    begin: ["(?:" + s + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
                    className: {
                        2: "title.function"
                    },
                    keywords: d,
                    contains: [{
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: d,
                        relevance: 0,
                        contains: [_, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, Q, e.C_BLOCK_COMMENT_MODE]
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, Q, _]
            }
        }),
            w.registerLanguage("python", function Y(e) {
                const t = e.regex
                    , i = /[\p{XID_Start}_]\p{XID_Continue}*/u
                    , s = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"]
                    , u = {
                    $pattern: /[A-Za-z]\w+|__\w+__/,
                    keyword: s,
                    built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
                    literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
                    type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
                }
                    , d = {
                    className: "meta",
                    begin: /^(>>>|\.\.\.) /
                }
                    , _ = {
                    className: "subst",
                    begin: /\{/,
                    end: /\}/,
                    keywords: u,
                    illegal: /#/
                }
                    , p = {
                    begin: /\{\{/,
                    relevance: 0
                }
                    , h = {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE],
                    variants: [{
                        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE, d],
                        relevance: 10
                    }, {
                        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, d],
                        relevance: 10
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE, d, p, _]
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, d, p, _]
                    }, {
                        begin: /([uU]|[rR])'/,
                        end: /'/,
                        relevance: 10
                    }, {
                        begin: /([uU]|[rR])"/,
                        end: /"/,
                        relevance: 10
                    }, {
                        begin: /([bB]|[bB][rR]|[rR][bB])'/,
                        end: /'/
                    }, {
                        begin: /([bB]|[bB][rR]|[rR][bB])"/,
                        end: /"/
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])'/,
                        end: /'/,
                        contains: [e.BACKSLASH_ESCAPE, p, _]
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, p, _]
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                }
                    , N = "[0-9](_?[0-9])*"
                    , T = `(\\b(${N}))?\\.(${N})|\\b(${N})\\.`
                    , R = `\\b|${s.join("|")}`
                    , k = {
                    className: "number",
                    relevance: 0,
                    variants: [{
                        begin: `(\\b(${N})|(${T}))[eE][+-]?(${N})[jJ]?(?=${R})`
                    }, {
                        begin: `(${T})[jJ]?`
                    }, {
                        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${R})`
                    }, {
                        begin: `\\b0[bB](_?[01])+[lL]?(?=${R})`
                    }, {
                        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${R})`
                    }, {
                        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${R})`
                    }, {
                        begin: `\\b(${N})[jJ](?=${R})`
                    }]
                }
                    , A = {
                    className: "comment",
                    begin: t.lookahead(/# type:/),
                    end: /$/,
                    keywords: u,
                    contains: [{
                        begin: /# type:/
                    }, {
                        begin: /#/,
                        end: /\b\B/,
                        endsWithParent: !0
                    }]
                }
                    , v = {
                    className: "params",
                    variants: [{
                        className: "",
                        begin: /\(\s*\)/,
                        skip: !0
                    }, {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: u,
                        contains: ["self", d, k, h, e.HASH_COMMENT_MODE]
                    }]
                };
                return _.contains = [h, k, d],
                    {
                        name: "Python",
                        aliases: ["py", "gyp", "ipython"],
                        unicodeRegex: !0,
                        keywords: u,
                        illegal: /(<\/|->|\?)|=>/,
                        contains: [d, k, {
                            begin: /\bself\b/
                        }, {
                            beginKeywords: "if",
                            relevance: 0
                        }, h, A, e.HASH_COMMENT_MODE, {
                            match: [/\bdef/, /\s+/, i],
                            scope: {
                                1: "keyword",
                                3: "title.function"
                            },
                            contains: [v]
                        }, {
                            variants: [{
                                match: [/\bclass/, /\s+/, i, /\s*/, /\(\s*/, i, /\s*\)/]
                            }, {
                                match: [/\bclass/, /\s+/, i]
                            }],
                            scope: {
                                1: "keyword",
                                3: "title.class",
                                6: "title.class.inherited"
                            }
                        }, {
                            className: "meta",
                            begin: /^[\t ]*@/,
                            end: /(?=#)|$/,
                            contains: [k, v, h]
                        }]
                    }
            }),
            w.registerLanguage("javascript", function ue(e) {
                const t = e.regex
                    , s = Ie
                    , c = {
                    begin: /<[A-Za-z0-9\\._:-]+/,
                    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                    isTrulyOpeningTag: (m,M)=>{
                        const P = m[0].length + m.index
                            , Z = m.input[P];
                        if ("<" === Z || "," === Z)
                            return void M.ignoreMatch();
                        let ce;
                        ">" === Z && (((m,{after: M})=>{
                                const P = "</" + m[0].slice(1);
                                return -1 !== m.input.indexOf(P, M)
                            }
                        )(m, {
                            after: P
                        }) || M.ignoreMatch()),
                        (ce = m.input.substring(P).match(/^\s+extends\s+/)) && 0 === ce.index && M.ignoreMatch()
                    }
                }
                    , u = {
                    $pattern: Ie,
                    keyword: pe,
                    literal: Te,
                    built_in: W,
                    "variable.language": $
                }
                    , d = "[0-9](_?[0-9])*"
                    , _ = `\\.(${d})`
                    , p = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*"
                    , h = {
                    className: "number",
                    variants: [{
                        begin: `(\\b(${p})((${_})|\\.)?|(${_}))[eE][+-]?(${d})\\b`
                    }, {
                        begin: `\\b(${p})\\b((${_})\\b|\\.)?|(${_})\\b`
                    }, {
                        begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                    }, {
                        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                    }, {
                        begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                    }, {
                        begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                    }, {
                        begin: "\\b0[0-7]+n?\\b"
                    }],
                    relevance: 0
                }
                    , N = {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}",
                    keywords: u,
                    contains: []
                }
                    , T = {
                    begin: "html`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, N],
                        subLanguage: "xml"
                    }
                }
                    , R = {
                    begin: "css`",
                    end: "",
                    starts: {
                        end: "`",
                        returnEnd: !1,
                        contains: [e.BACKSLASH_ESCAPE, N],
                        subLanguage: "css"
                    }
                }
                    , k = {
                    className: "string",
                    begin: "`",
                    end: "`",
                    contains: [e.BACKSLASH_ESCAPE, N]
                }
                    , v = {
                    className: "comment",
                    variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                        relevance: 0,
                        contains: [{
                            begin: "(?=@[A-Za-z]+)",
                            relevance: 0,
                            contains: [{
                                className: "doctag",
                                begin: "@[A-Za-z]+"
                            }, {
                                className: "type",
                                begin: "\\{",
                                end: "\\}",
                                excludeEnd: !0,
                                excludeBegin: !0,
                                relevance: 0
                            }, {
                                className: "variable",
                                begin: s + "(?=\\s*(-)|$)",
                                endsParent: !0,
                                relevance: 0
                            }, {
                                begin: /(?=[^\n])\s/,
                                relevance: 0
                            }]
                        }]
                    }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                }
                    , z = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, T, R, k, h];
                N.contains = z.concat({
                    begin: /\{/,
                    end: /\}/,
                    keywords: u,
                    contains: ["self"].concat(z)
                });
                const I = [].concat(v, N.contains)
                    , B = I.concat([{
                    begin: /\(/,
                    end: /\)/,
                    keywords: u,
                    contains: ["self"].concat(I)
                }])
                    , G = {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: u,
                    contains: B
                }
                    , ne = {
                    variants: [{
                        match: [/class/, /\s+/, s, /\s+/, /extends/, /\s+/, t.concat(s, "(", t.concat(/\./, s), ")*")],
                        scope: {
                            1: "keyword",
                            3: "title.class",
                            5: "keyword",
                            7: "title.class.inherited"
                        }
                    }, {
                        match: [/class/, /\s+/, s],
                        scope: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }]
                }
                    , D = {
                    relevance: 0,
                    match: t.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                    className: "title.class",
                    keywords: {
                        _: [...De, ...ie]
                    }
                }
                    , oe = {
                    variants: [{
                        match: [/function/, /\s+/, s, /(?=\s*\()/]
                    }, {
                        match: [/function/, /\s*(?=\()/]
                    }],
                    className: {
                        1: "keyword",
                        3: "title.function"
                    },
                    label: "func.def",
                    contains: [G],
                    illegal: /%/
                }
                    , de = {
                    match: t.concat(/\b/, function Ce(m) {
                        return t.concat("(?!", m.join("|"), ")")
                    }([...ee, "super"]), s, t.lookahead(/\(/)),
                    className: "title.function",
                    relevance: 0
                }
                    , me = {
                    begin: t.concat(/\./, t.lookahead(t.concat(s, /(?![0-9A-Za-z$_(])/))),
                    end: s,
                    excludeBegin: !0,
                    keywords: "prototype",
                    className: "property",
                    relevance: 0
                }
                    , l = {
                    match: [/get|set/, /\s+/, s, /(?=\()/],
                    className: {
                        1: "keyword",
                        3: "title.function"
                    },
                    contains: [{
                        begin: /\(\)/
                    }, G]
                }
                    , b = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>"
                    , S = {
                    match: [/const|var|let/, /\s+/, s, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead(b)],
                    keywords: "async",
                    className: {
                        1: "keyword",
                        3: "title.function"
                    },
                    contains: [G]
                };
                return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: u,
                    exports: {
                        PARAMS_CONTAINS: B,
                        CLASS_REFERENCE: D
                    },
                    illegal: /#(?![$_A-z])/,
                    contains: [e.SHEBANG({
                        label: "shebang",
                        binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict",
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, T, R, k, v, h, D, {
                        className: "attr",
                        begin: s + t.lookahead(":"),
                        relevance: 0
                    }, S, {
                        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        relevance: 0,
                        contains: [v, e.REGEXP_MODE, {
                            className: "function",
                            begin: b,
                            returnBegin: !0,
                            end: "\\s*=>",
                            contains: [{
                                className: "params",
                                variants: [{
                                    begin: e.UNDERSCORE_IDENT_RE,
                                    relevance: 0
                                }, {
                                    className: null,
                                    begin: /\(\s*\)/,
                                    skip: !0
                                }, {
                                    begin: /\(/,
                                    end: /\)/,
                                    excludeBegin: !0,
                                    excludeEnd: !0,
                                    keywords: u,
                                    contains: B
                                }]
                            }]
                        }, {
                            begin: /,/,
                            relevance: 0
                        }, {
                            match: /\s+/,
                            relevance: 0
                        }, {
                            variants: [{
                                begin: "<>",
                                end: "</>"
                            }, {
                                match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                            }, {
                                begin: c.begin,
                                "on:begin": c.isTrulyOpeningTag,
                                end: c.end
                            }],
                            subLanguage: "xml",
                            contains: [{
                                begin: c.begin,
                                end: c.end,
                                skip: !0,
                                contains: ["self"]
                            }]
                        }]
                    }, oe, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0,
                        label: "func.def",
                        contains: [G, e.inherit(e.TITLE_MODE, {
                            begin: s,
                            className: "title.function"
                        })]
                    }, {
                        match: /\.\.\./,
                        relevance: 0
                    }, me, {
                        match: "\\$" + s,
                        relevance: 0
                    }, {
                        match: [/\bconstructor(?=\s*\()/],
                        className: {
                            1: "title.function"
                        },
                        contains: [G]
                    }, de, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, ne, l, {
                        match: /\$[(.]/
                    }]
                }
            }),
            w.registerLanguage("cpp", function Ke(e) {
                const t = e.regex
                    , i = e.COMMENT("//", "$", {
                    contains: [{
                        begin: /\\\n/
                    }]
                })
                    , s = "decltype\\(auto\\)"
                    , r = "[a-zA-Z_]\\w*::"
                    , c = "(?!struct)(" + s + "|" + t.optional(r) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")"
                    , u = {
                    className: "type",
                    begin: "\\b[a-z\\d_]*_t\\b"
                }
                    , _ = {
                    className: "string",
                    variants: [{
                        begin: '(u8?|U|L)?"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                        end: "'",
                        illegal: "."
                    }, e.END_SAME_AS_BEGIN({
                        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                        end: /\)([^()\\ ]{0,16})"/
                    })]
                }
                    , p = {
                    className: "number",
                    variants: [{
                        begin: "\\b(0b[01']+)"
                    }, {
                        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                    }, {
                        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                    }],
                    relevance: 0
                }
                    , h = {
                    className: "meta",
                    begin: /#\s*[a-z]+\b/,
                    end: /$/,
                    keywords: {
                        keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                    },
                    contains: [{
                        begin: /\\\n/,
                        relevance: 0
                    }, e.inherit(_, {
                        className: "string"
                    }), {
                        className: "string",
                        begin: /<.*?>/
                    }, i, e.C_BLOCK_COMMENT_MODE]
                }
                    , N = {
                    className: "title",
                    begin: t.optional(r) + e.IDENT_RE,
                    relevance: 0
                }
                    , T = t.optional(r) + e.IDENT_RE + "\\s*\\("
                    , B = {
                    type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"],
                    keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"],
                    literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                    built_in: ["_Pragma"],
                    _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"]
                }
                    , G = {
                    className: "function.dispatch",
                    relevance: 0,
                    keywords: {
                        _hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"]
                    },
                    begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/))
                }
                    , ne = [G, h, u, i, e.C_BLOCK_COMMENT_MODE, p, _]
                    , D = {
                    variants: [{
                        begin: /=/,
                        end: /;/
                    }, {
                        begin: /\(/,
                        end: /\)/
                    }, {
                        beginKeywords: "new throw return else",
                        end: /;/
                    }],
                    keywords: B,
                    contains: ne.concat([{
                        begin: /\(/,
                        end: /\)/,
                        keywords: B,
                        contains: ne.concat(["self"]),
                        relevance: 0
                    }]),
                    relevance: 0
                };
                return {
                    name: "C++",
                    aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                    keywords: B,
                    illegal: "</",
                    classNameAliases: {
                        "function.dispatch": "built_in"
                    },
                    contains: [].concat(D, {
                        className: "function",
                        begin: "(" + c + "[\\*&\\s]+)+" + T,
                        returnBegin: !0,
                        end: /[{;=]/,
                        excludeEnd: !0,
                        keywords: B,
                        illegal: /[^\w\s\*&:<>.]/,
                        contains: [{
                            begin: s,
                            keywords: B,
                            relevance: 0
                        }, {
                            begin: T,
                            returnBegin: !0,
                            contains: [N],
                            relevance: 0
                        }, {
                            begin: /::/,
                            relevance: 0
                        }, {
                            begin: /:/,
                            endsWithParent: !0,
                            contains: [_, p]
                        }, {
                            relevance: 0,
                            match: /,/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: B,
                            relevance: 0,
                            contains: [i, e.C_BLOCK_COMMENT_MODE, _, p, u, {
                                begin: /\(/,
                                end: /\)/,
                                keywords: B,
                                relevance: 0,
                                contains: ["self", i, e.C_BLOCK_COMMENT_MODE, _, p, u]
                            }]
                        }, u, i, e.C_BLOCK_COMMENT_MODE, h]
                    }, G, ne, [h, {
                        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                        end: ">",
                        keywords: B,
                        contains: ["self", u]
                    }, {
                        begin: e.IDENT_RE + "::",
                        keywords: B
                    }, {
                        match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }])
                }
            }),
            w.registerLanguage("go", function ze(e) {
                const o = {
                    keyword: ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"],
                    type: ["bool", "byte", "complex64", "complex128", "error", "float32", "float64", "int8", "int16", "int32", "int64", "string", "uint8", "uint16", "uint32", "uint64", "int", "uint", "uintptr", "rune"],
                    literal: ["true", "false", "iota", "nil"],
                    built_in: ["append", "cap", "close", "complex", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "delete"]
                };
                return {
                    name: "Go",
                    aliases: ["golang"],
                    keywords: o,
                    illegal: "</",
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "string",
                        variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                            begin: "`",
                            end: "`"
                        }]
                    }, {
                        className: "number",
                        variants: [{
                            begin: e.C_NUMBER_RE + "[i]",
                            relevance: 1
                        }, e.C_NUMBER_MODE]
                    }, {
                        begin: /:=/
                    }, {
                        className: "function",
                        beginKeywords: "func",
                        end: "\\s*(\\{|$)",
                        excludeEnd: !0,
                        contains: [e.TITLE_MODE, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            endsParent: !0,
                            keywords: o,
                            illegal: /["']/
                        }]
                    }]
                }
            }),
            w.registerLanguage("swift", function On(e) {
                const t = {
                    match: /\s+/,
                    relevance: 0
                }
                    , i = e.COMMENT("/\\*", "\\*/", {
                    contains: ["self"]
                })
                    , s = [e.C_LINE_COMMENT_MODE, i]
                    , r = {
                    match: [/\./, j(...Qe, ...Xe)],
                    className: {
                        2: "keyword"
                    }
                }
                    , o = {
                    match: L(/\./, j(...be)),
                    relevance: 0
                }
                    , c = be.filter(U=>"string" == typeof U).concat(["_|0"])
                    , d = {
                    variants: [{
                        className: "keyword",
                        match: j(...be.filter(U=>"string" != typeof U).concat(bn).map(ke), ...Xe)
                    }]
                }
                    , _ = {
                    $pattern: j(/\b\w+/, /#\w+/),
                    keyword: c.concat(mn),
                    literal: Ve
                }
                    , p = [r, o, d]
                    , T = [{
                    match: L(/\./, j(...Se)),
                    relevance: 0
                }, {
                    className: "built_in",
                    match: L(/\b/, j(...Se), /(?=\()/)
                }]
                    , R = {
                    match: /->/,
                    relevance: 0
                }
                    , A = [R, {
                    className: "operator",
                    relevance: 0,
                    variants: [{
                        match: He
                    }, {
                        match: `\\.(\\.|${je})+`
                    }]
                }]
                    , v = "([0-9]_*)+"
                    , z = "([0-9a-fA-F]_*)+"
                    , I = {
                    className: "number",
                    relevance: 0,
                    variants: [{
                        match: `\\b(${v})(\\.(${v}))?([eE][+-]?(${v}))?\\b`
                    }, {
                        match: `\\b0x(${z})(\\.(${z}))?([pP][+-]?(${v}))?\\b`
                    }, {
                        match: /\b0o([0-7]_*)+\b/
                    }, {
                        match: /\b0b([01]_*)+\b/
                    }]
                }
                    , B = (U="")=>({
                    className: "subst",
                    variants: [{
                        match: L(/\\/, U, /[0\\tnr"']/)
                    }, {
                        match: L(/\\/, U, /u\{[0-9a-fA-F]{1,8}\}/)
                    }]
                })
                    , G = (U="")=>({
                    className: "subst",
                    match: L(/\\/, U, /[\t ]*(?:[\r\n]|\r\n)/)
                })
                    , ne = (U="")=>({
                    className: "subst",
                    label: "interpol",
                    begin: L(/\\/, U, /\(/),
                    end: /\)/
                })
                    , D = (U="")=>({
                    begin: L(U, /"""/),
                    end: L(/"""/, U),
                    contains: [B(U), G(U), ne(U)]
                })
                    , re = (U="")=>({
                    begin: L(U, /"/),
                    end: L(/"/, U),
                    contains: [B(U), ne(U)]
                })
                    , oe = {
                    className: "string",
                    variants: [D(), D("#"), D("##"), D("###"), re(), re("#"), re("##"), re("###")]
                }
                    , ye = {
                    match: L(/`/, le, /`/)
                }
                    , me = [ye, {
                    className: "variable",
                    match: /\$\d+/
                }, {
                    className: "variable",
                    match: `\\$ ${Be}+`
                }]
                    , m = [{
                    match: /(@|#(un)?)available/,
                    className: "keyword",
                    starts: {
                        contains: [{
                            begin: /\(/,
                            end: /\)/,
                            keywords: hn,
                            contains: [...A, I, oe]
                        }]
                    }
                }, {
                    className: "keyword",
                    match: L(/@/, j(...Nn))
                }, {
                    className: "meta",
                    match: L(/@/, le)
                }]
                    , M = {
                    match: xe(/\b[A-Z]/),
                    relevance: 0,
                    contains: [{
                        className: "type",
                        match: L(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Be, "+")
                    }, {
                        className: "type",
                        match: We,
                        relevance: 0
                    }, {
                        match: /[?!]+/,
                        relevance: 0
                    }, {
                        match: /\.\.\./,
                        relevance: 0
                    }, {
                        match: L(/\s+&\s+/, xe(We)),
                        relevance: 0
                    }]
                }
                    , P = {
                    begin: /</,
                    end: />/,
                    keywords: _,
                    contains: [...s, ...p, ...m, R, M]
                };
                M.contains.push(P);
                const ce = {
                    begin: /\(/,
                    end: /\)/,
                    relevance: 0,
                    keywords: _,
                    contains: ["self", {
                        match: L(le, /\s*:/),
                        keywords: "_|0",
                        relevance: 0
                    }, ...s, ...p, ...T, ...A, I, oe, ...me, ...m, M]
                }
                    , X = {
                    begin: /</,
                    end: />/,
                    contains: [...s, M]
                }
                    , Ye = {
                    begin: /\(/,
                    end: /\)/,
                    keywords: _,
                    contains: [{
                        begin: j(xe(L(le, /\s*:/)), xe(L(le, /\s+/, le, /\s*:/))),
                        end: /:/,
                        relevance: 0,
                        contains: [{
                            className: "keyword",
                            match: /\b_\b/
                        }, {
                            className: "params",
                            match: le
                        }]
                    }, ...s, ...p, ...A, I, oe, ...m, M, ce],
                    endsParent: !0,
                    illegal: /["']/
                }
                    , En = {
                    match: [/func/, /\s+/, j(ye.match, le, He)],
                    className: {
                        1: "keyword",
                        3: "title.function"
                    },
                    contains: [X, Ye, t],
                    illegal: [/\[/, /%/]
                }
                    , Dn = {
                    match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                    className: {
                        1: "keyword"
                    },
                    contains: [X, Ye, t],
                    illegal: /\[|%/
                }
                    , Ln = {
                    match: [/operator/, /\s+/, He],
                    className: {
                        1: "keyword",
                        3: "title"
                    }
                }
                    , xn = {
                    begin: [/precedencegroup/, /\s+/, We],
                    className: {
                        1: "keyword",
                        3: "title"
                    },
                    contains: [M],
                    keywords: [...fn, ...Ve],
                    end: /}/
                };
                for (const U of oe.variants) {
                    const Ae = U.contains.find(_e=>"interpol" === _e.label);
                    Ae.keywords = _;
                    const qe = [...p, ...T, ...A, I, oe, ...me];
                    Ae.contains = [...qe, {
                        begin: /\(/,
                        end: /\)/,
                        contains: ["self", ...qe]
                    }]
                }
                return {
                    name: "Swift",
                    keywords: _,
                    contains: [...s, En, Dn, {
                        beginKeywords: "struct protocol class extension enum actor",
                        end: "\\{",
                        excludeEnd: !0,
                        keywords: _,
                        contains: [e.inherit(e.TITLE_MODE, {
                            className: "title.class",
                            begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                        }), ...p]
                    }, Ln, xn, {
                        beginKeywords: "import",
                        end: /$/,
                        contains: [...s],
                        relevance: 0
                    }, ...p, ...T, ...A, I, oe, ...me, ...m, M, ce]
                }
            }),
            w.registerLanguage("csharp", function Un(e) {
                const c = {
                    keyword: ["abstract", "as", "base", "break", "case", "catch", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "scoped", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]),
                    built_in: ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
                    literal: ["default", "false", "null", "true"]
                }
                    , u = e.inherit(e.TITLE_MODE, {
                    begin: "[a-zA-Z](\\.?\\w)*"
                })
                    , d = {
                    className: "number",
                    variants: [{
                        begin: "\\b(0b[01']+)"
                    }, {
                        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                    }, {
                        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                    }],
                    relevance: 0
                }
                    , _ = {
                    className: "string",
                    begin: '@"',
                    end: '"',
                    contains: [{
                        begin: '""'
                    }]
                }
                    , p = e.inherit(_, {
                    illegal: /\n/
                })
                    , h = {
                    className: "subst",
                    begin: /\{/,
                    end: /\}/,
                    keywords: c
                }
                    , N = e.inherit(h, {
                    illegal: /\n/
                })
                    , T = {
                    className: "string",
                    begin: /\$"/,
                    end: '"',
                    illegal: /\n/,
                    contains: [{
                        begin: /\{\{/
                    }, {
                        begin: /\}\}/
                    }, e.BACKSLASH_ESCAPE, N]
                }
                    , R = {
                    className: "string",
                    begin: /\$@"/,
                    end: '"',
                    contains: [{
                        begin: /\{\{/
                    }, {
                        begin: /\}\}/
                    }, {
                        begin: '""'
                    }, h]
                }
                    , k = e.inherit(R, {
                    illegal: /\n/,
                    contains: [{
                        begin: /\{\{/
                    }, {
                        begin: /\}\}/
                    }, {
                        begin: '""'
                    }, N]
                });
                h.contains = [R, T, _, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, d, e.C_BLOCK_COMMENT_MODE],
                    N.contains = [k, T, p, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, d, e.inherit(e.C_BLOCK_COMMENT_MODE, {
                        illegal: /\n/
                    })];
                const A = {
                    variants: [R, T, _, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                }
                    , v = {
                    begin: "<",
                    end: ">",
                    contains: [{
                        beginKeywords: "in out"
                    }, u]
                }
                    , z = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?"
                    , I = {
                    begin: "@" + e.IDENT_RE,
                    relevance: 0
                };
                return {
                    name: "C#",
                    aliases: ["cs", "c#"],
                    keywords: c,
                    illegal: /::/,
                    contains: [e.COMMENT("///", "$", {
                        returnBegin: !0,
                        contains: [{
                            className: "doctag",
                            variants: [{
                                begin: "///",
                                relevance: 0
                            }, {
                                begin: "\x3c!--|--\x3e"
                            }, {
                                begin: "</?",
                                end: ">"
                            }]
                        }]
                    }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "meta",
                        begin: "#",
                        end: "$",
                        keywords: {
                            keyword: "if else elif endif define undef warning error line region endregion pragma checksum"
                        }
                    }, A, d, {
                        beginKeywords: "class interface",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:,]/,
                        contains: [{
                            beginKeywords: "where class"
                        }, u, v, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        beginKeywords: "namespace",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:]/,
                        contains: [u, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        beginKeywords: "record",
                        relevance: 0,
                        end: /[{;=]/,
                        illegal: /[^\s:]/,
                        contains: [u, v, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        className: "meta",
                        begin: "^\\s*\\[(?=[\\w])",
                        excludeBegin: !0,
                        end: "\\]",
                        excludeEnd: !0,
                        contains: [{
                            className: "string",
                            begin: /"/,
                            end: /"/
                        }]
                    }, {
                        beginKeywords: "new return throw await else",
                        relevance: 0
                    }, {
                        className: "function",
                        begin: "(" + z + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                        returnBegin: !0,
                        end: /\s*[{;=]/,
                        excludeEnd: !0,
                        keywords: c,
                        contains: [{
                            beginKeywords: ["public", "private", "protected", "static", "internal", "protected", "abstract", "async", "extern", "override", "unsafe", "virtual", "new", "sealed", "partial"].join(" "),
                            relevance: 0
                        }, {
                            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                            returnBegin: !0,
                            contains: [e.TITLE_MODE, v],
                            relevance: 0
                        }, {
                            match: /\(\)/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: c,
                            relevance: 0,
                            contains: [A, d, e.C_BLOCK_COMMENT_MODE]
                        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, I]
                }
            }),
            w.registerLanguage("rust", function Pe(e) {
                const t = e.regex
                    , i = {
                    className: "title.function.invoke",
                    relevance: 0,
                    begin: t.concat(/\b/, /(?!let\b)/, e.IDENT_RE, t.lookahead(/\s*\(/))
                }
                    , s = "([ui](8|16|32|64|128|size)|f(32|64))?"
                    , c = ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "panic!", "file!", "format!", "format_args!", "include_bytes!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"]
                    , u = ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"];
                return {
                    name: "Rust",
                    aliases: ["rs"],
                    keywords: {
                        $pattern: e.IDENT_RE + "!?",
                        type: u,
                        keyword: ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"],
                        literal: ["true", "false", "Some", "None", "Ok", "Err"],
                        built_in: c
                    },
                    illegal: "</",
                    contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                        contains: ["self"]
                    }), e.inherit(e.QUOTE_STRING_MODE, {
                        begin: /b?"/,
                        illegal: null
                    }), {
                        className: "string",
                        variants: [{
                            begin: /b?r(#*)"(.|\n)*?"\1(?!#)/
                        }, {
                            begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
                        }]
                    }, {
                        className: "symbol",
                        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
                    }, {
                        className: "number",
                        variants: [{
                            begin: "\\b0b([01_]+)" + s
                        }, {
                            begin: "\\b0o([0-7_]+)" + s
                        }, {
                            begin: "\\b0x([A-Fa-f0-9_]+)" + s
                        }, {
                            begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + s
                        }],
                        relevance: 0
                    }, {
                        begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        }
                    }, {
                        className: "meta",
                        begin: "#!?\\[",
                        end: "\\]",
                        contains: [{
                            className: "string",
                            begin: /"/,
                            end: /"/
                        }]
                    }, {
                        begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "keyword",
                            4: "variable"
                        }
                    }, {
                        begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
                        className: {
                            1: "keyword",
                            3: "variable",
                            5: "keyword"
                        }
                    }, {
                        begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }, {
                        begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, e.UNDERSCORE_IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }, {
                        begin: e.IDENT_RE + "::",
                        keywords: {
                            keyword: "Self",
                            built_in: c,
                            type: u
                        }
                    }, {
                        className: "punctuation",
                        begin: "->"
                    }, i]
                }
            }),
            w.registerLanguage("typescript", function ln(e) {
                const t = function yn(e) {
                        const t = e.regex
                            , s = Ue
                            , c = {
                            begin: /<[A-Za-z0-9\\._:-]+/,
                            end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                            isTrulyOpeningTag: (m,M)=>{
                                const P = m[0].length + m.index
                                    , Z = m.input[P];
                                if ("<" === Z || "," === Z)
                                    return void M.ignoreMatch();
                                let ce;
                                ">" === Z && (((m,{after: M})=>{
                                        const P = "</" + m[0].slice(1);
                                        return -1 !== m.input.indexOf(P, M)
                                    }
                                )(m, {
                                    after: P
                                }) || M.ignoreMatch()),
                                (ce = m.input.substring(P).match(/^\s+extends\s+/)) && 0 === ce.index && M.ignoreMatch()
                            }
                        }
                            , u = {
                            $pattern: Ue,
                            keyword: nn,
                            literal: tn,
                            built_in: cn,
                            "variable.language": on
                        }
                            , d = "[0-9](_?[0-9])*"
                            , _ = `\\.(${d})`
                            , p = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*"
                            , h = {
                            className: "number",
                            variants: [{
                                begin: `(\\b(${p})((${_})|\\.)?|(${_}))[eE][+-]?(${d})\\b`
                            }, {
                                begin: `\\b(${p})\\b((${_})\\b|\\.)?|(${_})\\b`
                            }, {
                                begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                            }, {
                                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                            }, {
                                begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                            }, {
                                begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                            }, {
                                begin: "\\b0[0-7]+n?\\b"
                            }],
                            relevance: 0
                        }
                            , N = {
                            className: "subst",
                            begin: "\\$\\{",
                            end: "\\}",
                            keywords: u,
                            contains: []
                        }
                            , T = {
                            begin: "html`",
                            end: "",
                            starts: {
                                end: "`",
                                returnEnd: !1,
                                contains: [e.BACKSLASH_ESCAPE, N],
                                subLanguage: "xml"
                            }
                        }
                            , R = {
                            begin: "css`",
                            end: "",
                            starts: {
                                end: "`",
                                returnEnd: !1,
                                contains: [e.BACKSLASH_ESCAPE, N],
                                subLanguage: "css"
                            }
                        }
                            , k = {
                            className: "string",
                            begin: "`",
                            end: "`",
                            contains: [e.BACKSLASH_ESCAPE, N]
                        }
                            , v = {
                            className: "comment",
                            variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                                relevance: 0,
                                contains: [{
                                    begin: "(?=@[A-Za-z]+)",
                                    relevance: 0,
                                    contains: [{
                                        className: "doctag",
                                        begin: "@[A-Za-z]+"
                                    }, {
                                        className: "type",
                                        begin: "\\{",
                                        end: "\\}",
                                        excludeEnd: !0,
                                        excludeBegin: !0,
                                        relevance: 0
                                    }, {
                                        className: "variable",
                                        begin: s + "(?=\\s*(-)|$)",
                                        endsParent: !0,
                                        relevance: 0
                                    }, {
                                        begin: /(?=[^\n])\s/,
                                        relevance: 0
                                    }]
                                }]
                            }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                        }
                            , z = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, T, R, k, h];
                        N.contains = z.concat({
                            begin: /\{/,
                            end: /\}/,
                            keywords: u,
                            contains: ["self"].concat(z)
                        });
                        const I = [].concat(v, N.contains)
                            , B = I.concat([{
                            begin: /\(/,
                            end: /\)/,
                            keywords: u,
                            contains: ["self"].concat(I)
                        }])
                            , G = {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: u,
                            contains: B
                        }
                            , ne = {
                            variants: [{
                                match: [/class/, /\s+/, s, /\s+/, /extends/, /\s+/, t.concat(s, "(", t.concat(/\./, s), ")*")],
                                scope: {
                                    1: "keyword",
                                    3: "title.class",
                                    5: "keyword",
                                    7: "title.class.inherited"
                                }
                            }, {
                                match: [/class/, /\s+/, s],
                                scope: {
                                    1: "keyword",
                                    3: "title.class"
                                }
                            }]
                        }
                            , D = {
                            relevance: 0,
                            match: t.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                            className: "title.class",
                            keywords: {
                                _: [...an, ...sn]
                            }
                        }
                            , oe = {
                            variants: [{
                                match: [/function/, /\s+/, s, /(?=\s*\()/]
                            }, {
                                match: [/function/, /\s*(?=\()/]
                            }],
                            className: {
                                1: "keyword",
                                3: "title.function"
                            },
                            label: "func.def",
                            contains: [G],
                            illegal: /%/
                        }
                            , de = {
                            match: t.concat(/\b/, function Ce(m) {
                                return t.concat("(?!", m.join("|"), ")")
                            }([...rn, "super"]), s, t.lookahead(/\(/)),
                            className: "title.function",
                            relevance: 0
                        }
                            , me = {
                            begin: t.concat(/\./, t.lookahead(t.concat(s, /(?![0-9A-Za-z$_(])/))),
                            end: s,
                            excludeBegin: !0,
                            keywords: "prototype",
                            className: "property",
                            relevance: 0
                        }
                            , l = {
                            match: [/get|set/, /\s+/, s, /(?=\()/],
                            className: {
                                1: "keyword",
                                3: "title.function"
                            },
                            contains: [{
                                begin: /\(\)/
                            }, G]
                        }
                            , b = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>"
                            , S = {
                            match: [/const|var|let/, /\s+/, s, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead(b)],
                            keywords: "async",
                            className: {
                                1: "keyword",
                                3: "title.function"
                            },
                            contains: [G]
                        };
                        return {
                            name: "Javascript",
                            aliases: ["js", "jsx", "mjs", "cjs"],
                            keywords: u,
                            exports: {
                                PARAMS_CONTAINS: B,
                                CLASS_REFERENCE: D
                            },
                            illegal: /#(?![$_A-z])/,
                            contains: [e.SHEBANG({
                                label: "shebang",
                                binary: "node",
                                relevance: 5
                            }), {
                                label: "use_strict",
                                className: "meta",
                                relevance: 10,
                                begin: /^\s*['"]use (strict|asm)['"]/
                            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, T, R, k, v, h, D, {
                                className: "attr",
                                begin: s + t.lookahead(":"),
                                relevance: 0
                            }, S, {
                                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                                keywords: "return throw case",
                                relevance: 0,
                                contains: [v, e.REGEXP_MODE, {
                                    className: "function",
                                    begin: b,
                                    returnBegin: !0,
                                    end: "\\s*=>",
                                    contains: [{
                                        className: "params",
                                        variants: [{
                                            begin: e.UNDERSCORE_IDENT_RE,
                                            relevance: 0
                                        }, {
                                            className: null,
                                            begin: /\(\s*\)/,
                                            skip: !0
                                        }, {
                                            begin: /\(/,
                                            end: /\)/,
                                            excludeBegin: !0,
                                            excludeEnd: !0,
                                            keywords: u,
                                            contains: B
                                        }]
                                    }]
                                }, {
                                    begin: /,/,
                                    relevance: 0
                                }, {
                                    match: /\s+/,
                                    relevance: 0
                                }, {
                                    variants: [{
                                        begin: "<>",
                                        end: "</>"
                                    }, {
                                        match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                                    }, {
                                        begin: c.begin,
                                        "on:begin": c.isTrulyOpeningTag,
                                        end: c.end
                                    }],
                                    subLanguage: "xml",
                                    contains: [{
                                        begin: c.begin,
                                        end: c.end,
                                        skip: !0,
                                        contains: ["self"]
                                    }]
                                }]
                            }, oe, {
                                beginKeywords: "while if switch catch for"
                            }, {
                                begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                                returnBegin: !0,
                                label: "func.def",
                                contains: [G, e.inherit(e.TITLE_MODE, {
                                    begin: s,
                                    className: "title.function"
                                })]
                            }, {
                                match: /\.\.\./,
                                relevance: 0
                            }, me, {
                                match: "\\$" + s,
                                relevance: 0
                            }, {
                                match: [/\bconstructor(?=\s*\()/],
                                className: {
                                    1: "title.function"
                                },
                                contains: [G]
                            }, de, {
                                relevance: 0,
                                match: /\b[A-Z][A-Z_0-9]+\b/,
                                className: "variable.constant"
                            }, ne, l, {
                                match: /\$[(.]/
                            }]
                        }
                    }(e)
                    , s = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"]
                    , r = {
                        beginKeywords: "namespace",
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [t.exports.CLASS_REFERENCE]
                    }
                    , o = {
                        beginKeywords: "interface",
                        end: /\{/,
                        excludeEnd: !0,
                        keywords: {
                            keyword: "interface extends",
                            built_in: s
                        },
                        contains: [t.exports.CLASS_REFERENCE]
                    }
                    , d = {
                        $pattern: Ue,
                        keyword: nn.concat(["type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override"]),
                        literal: tn,
                        built_in: cn.concat(s),
                        "variable.language": on
                    }
                    , _ = {
                        className: "meta",
                        begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
                    }
                    , p = (N,T,R)=>{
                        const k = N.contains.findIndex(A=>A.label === T);
                        if (-1 === k)
                            throw new Error("can not find mode to replace");
                        N.contains.splice(k, 1, R)
                    }
                ;
                return Object.assign(t.keywords, d),
                    t.exports.PARAMS_CONTAINS.push(_),
                    t.contains = t.contains.concat([_, r, o]),
                    p(t, "shebang", e.SHEBANG()),
                    p(t, "use_strict", {
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use strict['"]/
                    }),
                    t.contains.find(N=>"func.def" === N.label).relevance = 0,
                    Object.assign(t, {
                        name: "TypeScript",
                        aliases: ["ts", "tsx"]
                    }),
                    t
            }),
            w.registerLanguage("kotlin", function un(e) {
                const t = {
                    keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                    built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                    literal: "true false null"
                }
                    , s = {
                    className: "symbol",
                    begin: e.UNDERSCORE_IDENT_RE + "@"
                }
                    , r = {
                    className: "subst",
                    begin: /\$\{/,
                    end: /\}/,
                    contains: [e.C_NUMBER_MODE]
                }
                    , o = {
                    className: "variable",
                    begin: "\\$" + e.UNDERSCORE_IDENT_RE
                }
                    , c = {
                    className: "string",
                    variants: [{
                        begin: '"""',
                        end: '"""(?=[^"])',
                        contains: [o, r]
                    }, {
                        begin: "'",
                        end: "'",
                        illegal: /\n/,
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: '"',
                        end: '"',
                        illegal: /\n/,
                        contains: [e.BACKSLASH_ESCAPE, o, r]
                    }]
                };
                r.contains.push(c);
                const u = {
                    className: "meta",
                    begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
                }
                    , d = {
                    className: "meta",
                    begin: "@" + e.UNDERSCORE_IDENT_RE,
                    contains: [{
                        begin: /\(/,
                        end: /\)/,
                        contains: [e.inherit(c, {
                            className: "string"
                        }), "self"]
                    }]
                }
                    , _ = fe
                    , p = e.COMMENT("/\\*", "\\*/", {
                    contains: [e.C_BLOCK_COMMENT_MODE]
                })
                    , h = {
                    variants: [{
                        className: "type",
                        begin: e.UNDERSCORE_IDENT_RE
                    }, {
                        begin: /\(/,
                        end: /\)/,
                        contains: []
                    }]
                }
                    , N = h;
                return N.variants[1].contains = [h],
                    h.variants[1].contains = [N],
                    {
                        name: "Kotlin",
                        aliases: ["kt", "kts"],
                        keywords: t,
                        contains: [e.COMMENT("/\\*\\*", "\\*/", {
                            relevance: 0,
                            contains: [{
                                className: "doctag",
                                begin: "@[A-Za-z]+"
                            }]
                        }), e.C_LINE_COMMENT_MODE, p, {
                            className: "keyword",
                            begin: /\b(break|continue|return|this)\b/,
                            starts: {
                                contains: [{
                                    className: "symbol",
                                    begin: /@\w+/
                                }]
                            }
                        }, s, u, d, {
                            className: "function",
                            beginKeywords: "fun",
                            end: "[(]|$",
                            returnBegin: !0,
                            excludeEnd: !0,
                            keywords: t,
                            relevance: 5,
                            contains: [{
                                begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                                returnBegin: !0,
                                relevance: 0,
                                contains: [e.UNDERSCORE_TITLE_MODE]
                            }, {
                                className: "type",
                                begin: /</,
                                end: />/,
                                keywords: "reified",
                                relevance: 0
                            }, {
                                className: "params",
                                begin: /\(/,
                                end: /\)/,
                                endsParent: !0,
                                keywords: t,
                                relevance: 0,
                                contains: [{
                                    begin: /:/,
                                    end: /[=,\/]/,
                                    endsWithParent: !0,
                                    contains: [h, e.C_LINE_COMMENT_MODE, p],
                                    relevance: 0
                                }, e.C_LINE_COMMENT_MODE, p, u, d, c, e.C_NUMBER_MODE]
                            }, p]
                        }, {
                            begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
                            beginScope: {
                                3: "title.class"
                            },
                            keywords: "class interface trait",
                            end: /[:\{(]|$/,
                            excludeEnd: !0,
                            illegal: "extends implements",
                            contains: [{
                                beginKeywords: "public protected internal private constructor"
                            }, e.UNDERSCORE_TITLE_MODE, {
                                className: "type",
                                begin: /</,
                                end: />/,
                                excludeBegin: !0,
                                excludeEnd: !0,
                                relevance: 0
                            }, {
                                className: "type",
                                begin: /[,:]\s*/,
                                end: /[<\(,){\s]|$/,
                                excludeBegin: !0,
                                returnEnd: !0
                            }, u, d]
                        }, c, {
                            className: "meta",
                            begin: "^#!/usr/bin/env",
                            end: "$",
                            illegal: "\n"
                        }, _]
                    }
            }),
            w.registerLanguage("ruby", function Oe(e) {
                const t = e.regex
                    , i = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)"
                    , s = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/)
                    , r = t.concat(s, /(::\w+)*/)
                    , o = {
                    "variable.constant": ["__FILE__", "__LINE__"],
                    "variable.language": ["self", "super"],
                    keyword: ["alias", "and", "attr_accessor", "attr_reader", "attr_writer", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "include", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield"],
                    built_in: ["proc", "lambda"],
                    literal: ["true", "false", "nil"]
                }
                    , c = {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }
                    , u = {
                    begin: "#<",
                    end: ">"
                }
                    , d = [e.COMMENT("#", "$", {
                    contains: [c]
                }), e.COMMENT("^=begin", "^=end", {
                    contains: [c],
                    relevance: 10
                }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)]
                    , _ = {
                    className: "subst",
                    begin: /#\{/,
                    end: /\}/,
                    keywords: o
                }
                    , p = {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE, _],
                    variants: [{
                        begin: /'/,
                        end: /'/
                    }, {
                        begin: /"/,
                        end: /"/
                    }, {
                        begin: /`/,
                        end: /`/
                    }, {
                        begin: /%[qQwWx]?\(/,
                        end: /\)/
                    }, {
                        begin: /%[qQwWx]?\[/,
                        end: /\]/
                    }, {
                        begin: /%[qQwWx]?\{/,
                        end: /\}/
                    }, {
                        begin: /%[qQwWx]?</,
                        end: />/
                    }, {
                        begin: /%[qQwWx]?\//,
                        end: /\//
                    }, {
                        begin: /%[qQwWx]?%/,
                        end: /%/
                    }, {
                        begin: /%[qQwWx]?-/,
                        end: /-/
                    }, {
                        begin: /%[qQwWx]?\|/,
                        end: /\|/
                    }, {
                        begin: /\B\?(\\\d{1,3})/
                    }, {
                        begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
                    }, {
                        begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
                    }, {
                        begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
                    }, {
                        begin: /\B\?\\(c|C-)[\x20-\x7e]/
                    }, {
                        begin: /\B\?\\?\S/
                    }, {
                        begin: t.concat(/<<[-~]?'?/, t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                        contains: [e.END_SAME_AS_BEGIN({
                            begin: /(\w+)/,
                            end: /(\w+)/,
                            contains: [e.BACKSLASH_ESCAPE, _]
                        })]
                    }]
                }
                    , N = "[0-9](_?[0-9])*"
                    , R = {
                    variants: [{
                        match: /\(\)/
                    }, {
                        className: "params",
                        begin: /\(/,
                        end: /(?=\))/,
                        excludeBegin: !0,
                        endsParent: !0,
                        keywords: o
                    }]
                }
                    , I = [p, {
                    variants: [{
                        match: [/class\s+/, r, /\s+<\s+/, r]
                    }, {
                        match: [/class\s+/, r]
                    }],
                    scope: {
                        2: "title.class",
                        4: "title.class.inherited"
                    },
                    keywords: o
                }, {
                    relevance: 0,
                    match: [r, /\.new[ (]/],
                    scope: {
                        1: "title.class"
                    }
                }, {
                    relevance: 0,
                    match: /\b[A-Z][A-Z_0-9]+\b/,
                    className: "variable.constant"
                }, {
                    match: [/def/, /\s+/, i],
                    scope: {
                        1: "keyword",
                        3: "title.function"
                    },
                    contains: [R]
                }, {
                    begin: e.IDENT_RE + "::"
                }, {
                    className: "symbol",
                    begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                    relevance: 0
                }, {
                    className: "symbol",
                    begin: ":(?!\\s)",
                    contains: [p, {
                        begin: i
                    }],
                    relevance: 0
                }, {
                    className: "number",
                    relevance: 0,
                    variants: [{
                        begin: `\\b([1-9](_?[0-9])*|0)(\\.(${N}))?([eE][+-]?(${N})|r)?i?\\b`
                    }, {
                        begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
                    }, {
                        begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                    }, {
                        begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
                    }, {
                        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
                    }, {
                        begin: "\\b0(_?[0-7])+r?i?\\b"
                    }]
                }, {
                    className: "variable",
                    begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
                }, {
                    className: "params",
                    begin: /\|/,
                    end: /\|/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0,
                    keywords: o
                }, {
                    begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                    keywords: "unless",
                    contains: [{
                        className: "regexp",
                        contains: [e.BACKSLASH_ESCAPE, _],
                        illegal: /\n/,
                        variants: [{
                            begin: "/",
                            end: "/[a-z]*"
                        }, {
                            begin: /%r\{/,
                            end: /\}[a-z]*/
                        }, {
                            begin: "%r\\(",
                            end: "\\)[a-z]*"
                        }, {
                            begin: "%r!",
                            end: "![a-z]*"
                        }, {
                            begin: "%r\\[",
                            end: "\\][a-z]*"
                        }]
                    }].concat(u, d),
                    relevance: 0
                }].concat(u, d);
                _.contains = I,
                    R.contains = I;
                const D = [{
                    begin: /^\s*=>/,
                    starts: {
                        end: "$",
                        contains: I
                    }
                }, {
                    className: "meta.prompt",
                    begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                    starts: {
                        end: "$",
                        keywords: o,
                        contains: I
                    }
                }];
                return d.unshift(u),
                    {
                        name: "Ruby",
                        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
                        keywords: o,
                        illegal: /\/\*/,
                        contains: [e.SHEBANG({
                            binary: "ruby"
                        })].concat(D).concat(d).concat(I)
                    }
            }),
            w.registerLanguage("c", function $e(e) {
                const t = e.regex
                    , i = e.COMMENT("//", "$", {
                    contains: [{
                        begin: /\\\n/
                    }]
                })
                    , s = "decltype\\(auto\\)"
                    , r = "[a-zA-Z_]\\w*::"
                    , c = "(" + s + "|" + t.optional(r) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")"
                    , u = {
                    className: "type",
                    variants: [{
                        begin: "\\b[a-z\\d_]*_t\\b"
                    }, {
                        match: /\batomic_[a-z]{3,6}\b/
                    }]
                }
                    , _ = {
                    className: "string",
                    variants: [{
                        begin: '(u8?|U|L)?"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                        end: "'",
                        illegal: "."
                    }, e.END_SAME_AS_BEGIN({
                        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                        end: /\)([^()\\ ]{0,16})"/
                    })]
                }
                    , p = {
                    className: "number",
                    variants: [{
                        begin: "\\b(0b[01']+)"
                    }, {
                        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                    }, {
                        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                    }],
                    relevance: 0
                }
                    , h = {
                    className: "meta",
                    begin: /#\s*[a-z]+\b/,
                    end: /$/,
                    keywords: {
                        keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                    },
                    contains: [{
                        begin: /\\\n/,
                        relevance: 0
                    }, e.inherit(_, {
                        className: "string"
                    }), {
                        className: "string",
                        begin: /<.*?>/
                    }, i, e.C_BLOCK_COMMENT_MODE]
                }
                    , N = {
                    className: "title",
                    begin: t.optional(r) + e.IDENT_RE,
                    relevance: 0
                }
                    , T = t.optional(r) + e.IDENT_RE + "\\s*\\("
                    , A = {
                    keyword: ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"],
                    type: ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal128", "const", "static", "complex", "bool", "imaginary"],
                    literal: "true false NULL",
                    built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
                }
                    , v = [h, u, i, e.C_BLOCK_COMMENT_MODE, p, _]
                    , z = {
                    variants: [{
                        begin: /=/,
                        end: /;/
                    }, {
                        begin: /\(/,
                        end: /\)/
                    }, {
                        beginKeywords: "new throw return else",
                        end: /;/
                    }],
                    keywords: A,
                    contains: v.concat([{
                        begin: /\(/,
                        end: /\)/,
                        keywords: A,
                        contains: v.concat(["self"]),
                        relevance: 0
                    }]),
                    relevance: 0
                }
                    , I = {
                    begin: "(" + c + "[\\*&\\s]+)+" + T,
                    returnBegin: !0,
                    end: /[{;=]/,
                    excludeEnd: !0,
                    keywords: A,
                    illegal: /[^\w\s\*&:<>.]/,
                    contains: [{
                        begin: s,
                        keywords: A,
                        relevance: 0
                    }, {
                        begin: T,
                        returnBegin: !0,
                        contains: [e.inherit(N, {
                            className: "title.function"
                        })],
                        relevance: 0
                    }, {
                        relevance: 0,
                        match: /,/
                    }, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: A,
                        relevance: 0,
                        contains: [i, e.C_BLOCK_COMMENT_MODE, _, p, u, {
                            begin: /\(/,
                            end: /\)/,
                            keywords: A,
                            relevance: 0,
                            contains: ["self", i, e.C_BLOCK_COMMENT_MODE, _, p, u]
                        }]
                    }, u, i, e.C_BLOCK_COMMENT_MODE, h]
                };
                return {
                    name: "C",
                    aliases: ["h"],
                    keywords: A,
                    disableAutodetect: !0,
                    illegal: "</",
                    contains: [].concat(z, I, v, [h, {
                        begin: e.IDENT_RE + "::",
                        keywords: A
                    }, {
                        className: "class",
                        beginKeywords: "enum class struct union",
                        end: /[{;:<>=]/,
                        contains: [{
                            beginKeywords: "final class struct"
                        }, e.TITLE_MODE]
                    }]),
                    exports: {
                        preprocessor: h,
                        strings: _,
                        keywords: A
                    }
                }
            }),
            w.registerLanguage("scala", function dn(e) {
                const s = {
                    className: "subst",
                    variants: [{
                        begin: "\\$[A-Za-z0-9_]+"
                    }, {
                        begin: /\$\{/,
                        end: /\}/
                    }]
                }
                    , r = {
                    className: "string",
                    variants: [{
                        begin: '"""',
                        end: '"""'
                    }, {
                        begin: '"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: '[a-z]+"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE, s]
                    }, {
                        className: "string",
                        begin: '[a-z]+"""',
                        end: '"""',
                        contains: [s],
                        relevance: 10
                    }]
                }
                    , o = {
                    className: "type",
                    begin: "\\b[A-Z][A-Za-z0-9_]*",
                    relevance: 0
                }
                    , c = {
                    className: "title",
                    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
                    relevance: 0
                }
                    , u = {
                    className: "class",
                    beginKeywords: "class object trait type",
                    end: /[:={\[\n;]/,
                    excludeEnd: !0,
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        beginKeywords: "extends with",
                        relevance: 10
                    }, {
                        begin: /\[/,
                        end: /\]/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        contains: [o]
                    }, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        contains: [o]
                    }, c]
                }
                    , d = {
                    className: "function",
                    beginKeywords: "def",
                    end: e.regex.lookahead(/[:={\[(\n;]/),
                    contains: [c]
                };
                return {
                    name: "Scala",
                    keywords: {
                        literal: "true false null",
                        keyword: "type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"
                    },
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, o, d, u, e.C_NUMBER_MODE, {
                        begin: [/^\s*/, "extension", /\s+(?=[[(])/],
                        beginScope: {
                            2: "keyword"
                        }
                    }, {
                        begin: [/^\s*/, /end/, /\s+/, /(extension\b)?/],
                        beginScope: {
                            2: "keyword",
                            4: "keyword"
                        }
                    }, {
                        match: /\.inline\b/
                    }, {
                        begin: /\binline(?=\s)/,
                        keywords: "inline"
                    }, {
                        begin: [/\(\s*/, /using/, /\s+(?!\))/],
                        beginScope: {
                            2: "keyword"
                        }
                    }, {
                        className: "meta",
                        begin: "@[A-Za-z]+"
                    }]
                }
            }),
            w.registerLanguage("dart", function Tn(e) {
                const t = {
                    className: "subst",
                    variants: [{
                        begin: "\\$[A-Za-z0-9_]+"
                    }]
                }
                    , i = {
                    className: "subst",
                    variants: [{
                        begin: /\$\{/,
                        end: /\}/
                    }],
                    keywords: "true false null this is new super"
                }
                    , s = {
                    className: "string",
                    variants: [{
                        begin: "r'''",
                        end: "'''"
                    }, {
                        begin: 'r"""',
                        end: '"""'
                    }, {
                        begin: "r'",
                        end: "'",
                        illegal: "\\n"
                    }, {
                        begin: 'r"',
                        end: '"',
                        illegal: "\\n"
                    }, {
                        begin: "'''",
                        end: "'''",
                        contains: [e.BACKSLASH_ESCAPE, t, i]
                    }, {
                        begin: '"""',
                        end: '"""',
                        contains: [e.BACKSLASH_ESCAPE, t, i]
                    }, {
                        begin: "'",
                        end: "'",
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE, t, i]
                    }, {
                        begin: '"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE, t, i]
                    }]
                };
                i.contains = [e.C_NUMBER_MODE, s];
                const r = ["Comparable", "DateTime", "Duration", "Function", "Iterable", "Iterator", "List", "Map", "Match", "Object", "Pattern", "RegExp", "Set", "Stopwatch", "String", "StringBuffer", "StringSink", "Symbol", "Type", "Uri", "bool", "double", "int", "num", "Element", "ElementList"]
                    , o = r.map(d=>`${d}?`);
                return {
                    name: "Dart",
                    keywords: {
                        keyword: ["abstract", "as", "assert", "async", "await", "break", "case", "catch", "class", "const", "continue", "covariant", "default", "deferred", "do", "dynamic", "else", "enum", "export", "extends", "extension", "external", "factory", "false", "final", "finally", "for", "Function", "get", "hide", "if", "implements", "import", "in", "inferface", "is", "late", "library", "mixin", "new", "null", "on", "operator", "part", "required", "rethrow", "return", "set", "show", "static", "super", "switch", "sync", "this", "throw", "true", "try", "typedef", "var", "void", "while", "with", "yield"],
                        built_in: r.concat(o).concat(["Never", "Null", "dynamic", "print", "document", "querySelector", "querySelectorAll", "window"]),
                        $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
                    },
                    contains: [s, e.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
                        subLanguage: "markdown",
                        relevance: 0
                    }), e.COMMENT(/\/{3,} ?/, /$/, {
                        contains: [{
                            subLanguage: "markdown",
                            begin: ".",
                            end: "$",
                            relevance: 0
                        }]
                    }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "class",
                        beginKeywords: "class interface",
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [{
                            beginKeywords: "extends implements"
                        }, e.UNDERSCORE_TITLE_MODE]
                    }, e.C_NUMBER_MODE, {
                        className: "meta",
                        begin: "@[A-Za-z]+"
                    }, {
                        begin: "=>"
                    }]
                }
            }),
            w.registerLanguage("markdown", function Sn(e) {
                const i = {
                    begin: /<\/?[A-Za-z_]/,
                    end: ">",
                    subLanguage: "xml",
                    relevance: 0
                }
                    , d = {
                    variants: [{
                        begin: /\[.+?\]\[.*?\]/,
                        relevance: 0
                    }, {
                        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                        relevance: 2
                    }, {
                        begin: e.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                        relevance: 2
                    }, {
                        begin: /\[.+?\]\([./?&#].*?\)/,
                        relevance: 1
                    }, {
                        begin: /\[.*?\]\(.*?\)/,
                        relevance: 0
                    }],
                    returnBegin: !0,
                    contains: [{
                        match: /\[(?=\])/
                    }, {
                        className: "string",
                        relevance: 0,
                        begin: "\\[",
                        end: "\\]",
                        excludeBegin: !0,
                        returnEnd: !0
                    }, {
                        className: "link",
                        relevance: 0,
                        begin: "\\]\\(",
                        end: "\\)",
                        excludeBegin: !0,
                        excludeEnd: !0
                    }, {
                        className: "symbol",
                        relevance: 0,
                        begin: "\\]\\[",
                        end: "\\]",
                        excludeBegin: !0,
                        excludeEnd: !0
                    }]
                }
                    , _ = {
                    className: "strong",
                    contains: [],
                    variants: [{
                        begin: /_{2}/,
                        end: /_{2}/
                    }, {
                        begin: /\*{2}/,
                        end: /\*{2}/
                    }]
                }
                    , p = {
                    className: "emphasis",
                    contains: [],
                    variants: [{
                        begin: /\*(?!\*)/,
                        end: /\*/
                    }, {
                        begin: /_(?!_)/,
                        end: /_/,
                        relevance: 0
                    }]
                }
                    , h = e.inherit(_, {
                    contains: []
                })
                    , N = e.inherit(p, {
                    contains: []
                });
                _.contains.push(N),
                    p.contains.push(h);
                let T = [i, d];
                return [_, p, h, N].forEach(A=>{
                        A.contains = A.contains.concat(T)
                    }
                ),
                    T = T.concat(_, p),
                    {
                        name: "Markdown",
                        aliases: ["md", "mkdown", "mkd"],
                        contains: [{
                            className: "section",
                            variants: [{
                                begin: "^#{1,6}",
                                end: "$",
                                contains: T
                            }, {
                                begin: "(?=^.+?\\n[=-]{2,}$)",
                                contains: [{
                                    begin: "^[=-]*$"
                                }, {
                                    begin: "^",
                                    end: "\\n",
                                    contains: T
                                }]
                            }]
                        }, i, {
                            className: "bullet",
                            begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                            end: "\\s+",
                            excludeEnd: !0
                        }, _, p, {
                            className: "quote",
                            begin: "^>\\s+",
                            contains: T,
                            end: "$"
                        }, {
                            className: "code",
                            variants: [{
                                begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
                            }, {
                                begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                            }, {
                                begin: "```",
                                end: "```+[ ]*$"
                            }, {
                                begin: "~~~",
                                end: "~~~+[ ]*$"
                            }, {
                                begin: "`.+?`"
                            }, {
                                begin: "(?=^( {4}|\\t))",
                                contains: [{
                                    begin: "^( {4}|\\t)",
                                    end: "(\\n)$"
                                }],
                                relevance: 0
                            }]
                        }, {
                            begin: "^[-\\*]{3,}",
                            end: "$"
                        }, d, {
                            begin: /^\[[^\n]+\]:/,
                            returnBegin: !0,
                            contains: [{
                                className: "symbol",
                                begin: /\[/,
                                end: /\]/,
                                excludeBegin: !0,
                                excludeEnd: !0
                            }, {
                                className: "link",
                                begin: /:\s*/,
                                end: /$/,
                                excludeBegin: !0
                            }]
                        }]
                    }
            }),
            w.registerLanguage("json", function wn(e) {
                const s = ["true", "false", "null"]
                    , r = {
                    scope: "literal",
                    beginKeywords: s.join(" ")
                };
                return {
                    name: "JSON",
                    keywords: {
                        literal: s
                    },
                    contains: [{
                        className: "attr",
                        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
                        relevance: 1.01
                    }, {
                        match: /[{}[\],:]/,
                        className: "punctuation",
                        relevance: 0
                    }, e.QUOTE_STRING_MODE, r, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                    illegal: "\\S"
                }
            }),
            w.registerLanguage("graphql", function Mn(e) {
                const t = e.regex;
                return {
                    name: "GraphQL",
                    aliases: ["gql"],
                    case_insensitive: !0,
                    disableAutodetect: !1,
                    keywords: {
                        keyword: ["query", "mutation", "subscription", "type", "input", "schema", "directive", "interface", "union", "scalar", "fragment", "enum", "on"],
                        literal: ["true", "false", "null"]
                    },
                    contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
                        scope: "punctuation",
                        match: /[.]{3}/,
                        relevance: 0
                    }, {
                        scope: "punctuation",
                        begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
                        relevance: 0
                    }, {
                        scope: "variable",
                        begin: /\$/,
                        end: /\W/,
                        excludeEnd: !0,
                        relevance: 0
                    }, {
                        scope: "meta",
                        match: /@\w+/,
                        excludeEnd: !0
                    }, {
                        scope: "symbol",
                        begin: t.concat(/[_A-Za-z][_0-9A-Za-z]*/, t.lookahead(/\s*:/)),
                        relevance: 0
                    }],
                    illegal: [/[;<']/, /BEGIN/]
                }
            }),
            w.registerLanguage("protobuf", function Cn(e) {
                return {
                    name: "Protocol Buffers",
                    keywords: {
                        keyword: ["package", "import", "option", "optional", "required", "repeated", "group", "oneof"],
                        type: ["double", "float", "int32", "int64", "uint32", "uint64", "sint32", "sint64", "fixed32", "fixed64", "sfixed32", "sfixed64", "bool", "string", "bytes"],
                        literal: ["true", "false"]
                    },
                    contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        match: [/(message|enum|service)\s+/, e.IDENT_RE],
                        scope: {
                            1: "keyword",
                            2: "title.class"
                        }
                    }, {
                        className: "function",
                        beginKeywords: "rpc",
                        end: /[{;]/,
                        excludeEnd: !0,
                        keywords: "rpc returns"
                    }, {
                        begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/
                    }]
                }
            }),
            w.registerLanguage("dockerfile", function gn(e) {
                return {
                    name: "Dockerfile",
                    aliases: ["docker"],
                    case_insensitive: !0,
                    keywords: ["from", "maintainer", "expose", "env", "arg", "user", "onbuild", "stopsignal"],
                    contains: [e.HASH_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
                        beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
                        starts: {
                            end: /[^\\]$/,
                            subLanguage: "bash"
                        }
                    }],
                    illegal: "</"
                }
            }),
            w.registerLanguage("bash", function An(e) {
                const i = {}
                    , s = {
                    begin: /\$\{/,
                    end: /\}/,
                    contains: ["self", {
                        begin: /:-/,
                        contains: [i]
                    }]
                };
                Object.assign(i, {
                    className: "variable",
                    variants: [{
                        begin: e.regex.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
                    }, s]
                });
                const r = {
                    className: "subst",
                    begin: /\$\(/,
                    end: /\)/,
                    contains: [e.BACKSLASH_ESCAPE]
                }
                    , o = {
                    begin: /<<-?\s*(?=\w+)/,
                    starts: {
                        contains: [e.END_SAME_AS_BEGIN({
                            begin: /(\w+)/,
                            end: /(\w+)/,
                            className: "string"
                        })]
                    }
                }
                    , c = {
                    className: "string",
                    begin: /"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE, i, r]
                };
                r.contains.push(c);
                const _ = {
                    begin: /\$\(\(/,
                    end: /\)\)/,
                    contains: [{
                        begin: /\d+#[0-9a-f]+/,
                        className: "number"
                    }, e.NUMBER_MODE, i]
                }
                    , h = e.SHEBANG({
                    binary: `(${["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"].join("|")})`,
                    relevance: 10
                })
                    , N = {
                    className: "function",
                    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                    returnBegin: !0,
                    contains: [e.inherit(e.TITLE_MODE, {
                        begin: /\w[\w\d_]*/
                    })],
                    relevance: 0
                };
                return {
                    name: "Bash",
                    aliases: ["sh"],
                    keywords: {
                        $pattern: /\b[a-z][a-z0-9._-]+\b/,
                        keyword: ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"],
                        literal: ["true", "false"],
                        built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
                    },
                    contains: [h, e.SHEBANG(), N, _, e.HASH_COMMENT_MODE, o, {
                        match: /(\/[a-z._-]+)+/
                    }, c, {
                        className: "",
                        begin: /\\"/
                    }, {
                        className: "string",
                        begin: /'/,
                        end: /'/
                    }, i]
                }
            }),
            w.registerLanguage("sql", function Rn(e) {
                const t = e.regex
                    , i = e.COMMENT("--", "$")
                    , o = ["true", "false", "unknown"]
                    , u = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"]
                    , p = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"]
                    , N = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"]
                    , T = p
                    , R = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter(I=>!p.includes(I))
                    , v = {
                    begin: t.concat(/\b/, t.either(...T), /\s*\(/),
                    relevance: 0,
                    keywords: {
                        built_in: T
                    }
                };
                return {
                    name: "SQL",
                    case_insensitive: !0,
                    illegal: /[{}]|<\//,
                    keywords: {
                        $pattern: /\b[\w\.]+/,
                        keyword: function z(I, {exceptions: B, when: G}={}) {
                            const ne = G;
                            return B = B || [],
                                I.map(D=>D.match(/\|\d+$/) || B.includes(D) ? D : ne(D) ? `${D}|0` : D)
                        }(R, {
                            when: I=>I.length < 3
                        }),
                        literal: o,
                        type: u,
                        built_in: ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"]
                    },
                    contains: [{
                        begin: t.either(...N),
                        relevance: 0,
                        keywords: {
                            $pattern: /[\w\.]+/,
                            keyword: R.concat(N),
                            literal: o,
                            type: u
                        }
                    }, {
                        className: "type",
                        begin: t.either("double precision", "large object", "with timezone", "without timezone")
                    }, v, {
                        className: "variable",
                        begin: /@[a-z0-9]+/
                    }, {
                        className: "string",
                        variants: [{
                            begin: /'/,
                            end: /'/,
                            contains: [{
                                begin: /''/
                            }]
                        }]
                    }, {
                        begin: /"/,
                        end: /"/,
                        contains: [{
                            begin: /""/
                        }]
                    }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, i, {
                        className: "operator",
                        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                        relevance: 0
                    }]
                }
            });
        const Me = {
            python: "Python",
            java: "Java",
            javascript: "JavaScript",
            cpp: "C++",
            go: "Go",
            swift: "Swift",
            csharp: "C#",
            rust: "Rust",
            typescript: "TypeScript",
            kotlin: "Kotlin",
            ruby: "Ruby",
            c: "C",
            scala: "Scala",
            dart: "Dart",
            all: "All"
        };
        let n = (()=>{
                class e {
                    constructor(i, s) {
                        this.renderer = i,
                            this.el = s,
                            this.destroy$ = new vn.xQ,
                            this.lang = "",
                            this.code = "",
                            this.fontSize = "16px",
                            this.theme = "",
                            this.highlighted = !1,
                            this.viewCheckedOnce = !1
                    }
                    ngOnInit() {}
                    ngAfterViewChecked() {
                        this.viewCheckedOnce || (this.setFontSize(),
                            this.viewCheckedOnce = !0)
                    }
                    ngOnDestroy() {
                        this.destroy$.next(),
                            this.destroy$.complete()
                    }
                    setFontSize() {
                        "16px" !== this.fontSize && this.el.nativeElement.querySelectorAll(".token.number").forEach(s=>{
                                this.renderer.setStyle(s, "fontSize", this.fontSize)
                            }
                        )
                    }
                }
                return e.\u0275fac = function(i) {
                    return new (i || e)(K.Y36(K.Qsj),K.Y36(K.SBq))
                }
                    ,
                    e.\u0275cmp = K.Xpm({
                        type: e,
                        selectors: [["app-code"]],
                        viewQuery: function(i, s) {
                            if (1 & i && K.Gf(Fn, 5),
                            2 & i) {
                                let r;
                                K.iGM(r = K.CRH()) && (s.codeBlock = r.first)
                            }
                        },
                        inputs: {
                            lang: "lang",
                            code: "code",
                            fontSize: "fontSize"
                        },
                        decls: 4,
                        vars: 4,
                        consts: [[1, "outer-container", 2, "padding", "0"], [2, "padding", "0"], ["highlight", "", 3, "ngClass"]],
                        template: function(i, s) {
                            1 & i && (K.TgZ(0, "div", 0)(1, "pre", 1)(2, "code", 2),
                                K._uU(3),
                                K.qZA()()()),
                            2 & i && (K.xp6(1),
                                K.Udp("font-size", s.fontSize),
                                K.xp6(1),
                                K.Q6J("ngClass", s.lang),
                                K.xp6(1),
                                K.Oqu(s.code))
                        },
                        dependencies: function() {
                            return [In.mk, a]
                        },
                        styles: [".outer-container pre{word-wrap:break-word;margin:0!important;padding:1.5em!important}.outer-container code,.outer-container code span{white-space:pre-wrap;word-break:break-word}.outer-container .number{margin-right:0;padding:0;background-color:transparent;display:inline;font-size:1rem}.outer-container .copy-to-clipboard-button{background-color:#696969!important;font-family:Arial,Helvetica,sans-serif;font-size:9px!important;padding-bottom:calc(.5em - 1px)!important;padding-left:1em!important;padding-right:1em!important;padding-top:calc(.5em - 1px)!important;margin-right:1em;margin-top:1em;border-radius:4px!important}.outer-container .copy-to-clipboard-button :hover{cursor:pointer}.outer-container .copy-to-clipboard-button span{font-weight:700;font-size:15px;color:#fff!important}@media screen and (max-width: 842px){.outer-container pre,.outer-container .copy-to-clipboard-button span{font-size:14px}.outer-container .number{font-size:.85rem}}@media screen and (max-width: 560px){.outer-container pre,.outer-container .copy-to-clipboard-button span{font-size:12px}.outer-container .number{font-size:.75rem}}\n"],
                        encapsulation: 2
                    }),
                    e
            }
        )()
            , a = (()=>{
                class e {
                    constructor(i) {
                        this.eltRef = i
                    }
                    ngAfterViewInit() {
                        w.highlightElement(this.eltRef.nativeElement),
                            _n().highlightElement(this.eltRef.nativeElement)
                    }
                }
                return e.\u0275fac = function(i) {
                    return new (i || e)(K.Y36(K.SBq))
                }
                    ,
                    e.\u0275dir = K.lG2({
                        type: e,
                        selectors: [["code", "highlight", ""]]
                    }),
                    e
            }
        )()
    }
    ,
    46375: (ve,ae,y)=>{
        "use strict";
        y.d(ae, {
            _: ()=>E
        });
        var se = y(36895)
            , w = y(55062)
            , Y = y(23753)
            , J = y(92198);
        let E = (()=>{
                class q {
                    constructor(H, Ee) {
                        this.element = H,
                            this.document = Ee,
                            this.clickOutside = new w.vpe
                    }
                    ngAfterViewInit() {
                        this.documentClickSubscription = (0,
                            Y.R)(this.document, "click").pipe((0,
                            J.h)(H=>!this.isInside(H.target))).subscribe(()=>{
                                this.clickOutside.emit()
                            }
                        )
                    }
                    ngOnDestroy() {
                        this.documentClickSubscription?.unsubscribe()
                    }
                    isInside(H) {
                        return H === this.element.nativeElement || this.element.nativeElement.contains(H)
                    }
                }
                return q.\u0275fac = function(H) {
                    return new (H || q)(w.Y36(w.SBq),w.Y36(se.K0))
                }
                    ,
                    q.\u0275dir = w.lG2({
                        type: q,
                        selectors: [["", "appClickOutside", ""]],
                        outputs: {
                            clickOutside: "clickOutside"
                        }
                    }),
                    q
            }
        )()
    }
    ,
    27608: (ve,ae,y)=>{
        "use strict";
        y.d(ae, {
            j: ()=>J
        });
        var se = y(591)
            , w = y(55062)
            , Y = y(42982);
        let J = (()=>{
                class E {
                    constructor(Q) {
                        this.localStorage = Q;
                        let H = this.localStorage.getLanguage();
                        (!H || "all" === H) && (H = "python"),
                            this.language$ = new se.X(H)
                    }
                    getLanguage$() {
                        return this.language$.asObservable()
                    }
                    setLanguage(Q) {
                        this.localStorage.setLanguage(Q),
                            this.language$.next(Q)
                    }
                }
                return E.\u0275fac = function(Q) {
                    return new (Q || E)(w.LFG(Y.n))
                }
                    ,
                    E.\u0275prov = w.Yz7({
                        token: E,
                        factory: E.\u0275fac,
                        providedIn: "root"
                    }),
                    E
            }
        )()
    }
    ,
    84940: ve=>{
        var ae = {
            exports: {}
        };
        function y(n) {
            return n instanceof Map ? n.clear = n.delete = n.set = function() {
                    throw new Error("map is read-only")
                }
                : n instanceof Set && (n.add = n.clear = n.delete = function() {
                    throw new Error("set is read-only")
                }
            ),
                Object.freeze(n),
                Object.getOwnPropertyNames(n).forEach(function(a) {
                    var e = n[a];
                    "object" == typeof e && !Object.isFrozen(e) && y(e)
                }),
                n
        }
        ae.exports = y,
            ae.exports.default = y;
        class se {
            constructor(a) {
                void 0 === a.data && (a.data = {}),
                    this.data = a.data,
                    this.isMatchIgnored = !1
            }
            ignoreMatch() {
                this.isMatchIgnored = !0
            }
        }
        function w(n) {
            return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }
        function Y(n, ...a) {
            const e = Object.create(null);
            for (const t in n)
                e[t] = n[t];
            return a.forEach(function(t) {
                for (const i in t)
                    e[i] = t[i]
            }),
                e
        }
        const E = n=>!!n.scope || n.sublanguage && n.language;
        class Q {
            constructor(a, e) {
                this.buffer = "",
                    this.classPrefix = e.classPrefix,
                    a.walk(this)
            }
            addText(a) {
                this.buffer += w(a)
            }
            openNode(a) {
                if (!E(a))
                    return;
                let e = "";
                e = a.sublanguage ? `language-${a.language}` : ((n,{prefix: a})=>{
                        if (n.includes(".")) {
                            const e = n.split(".");
                            return [`${a}${e.shift()}`, ...e.map((t,i)=>`${t}${"_".repeat(i + 1)}`)].join(" ")
                        }
                        return `${a}${n}`
                    }
                )(a.scope, {
                    prefix: this.classPrefix
                }),
                    this.span(e)
            }
            closeNode(a) {
                !E(a) || (this.buffer += "</span>")
            }
            value() {
                return this.buffer
            }
            span(a) {
                this.buffer += `<span class="${a}">`
            }
        }
        const H = (n={})=>{
                const a = {
                    children: []
                };
                return Object.assign(a, n),
                    a
            }
        ;
        class Ee {
            constructor() {
                this.rootNode = H(),
                    this.stack = [this.rootNode]
            }
            get top() {
                return this.stack[this.stack.length - 1]
            }
            get root() {
                return this.rootNode
            }
            add(a) {
                this.top.children.push(a)
            }
            openNode(a) {
                const e = H({
                    scope: a
                });
                this.add(e),
                    this.stack.push(e)
            }
            closeNode() {
                if (this.stack.length > 1)
                    return this.stack.pop()
            }
            closeAllNodes() {
                for (; this.closeNode(); )
                    ;
            }
            toJSON() {
                return JSON.stringify(this.rootNode, null, 4)
            }
            walk(a) {
                return this.constructor._walk(a, this.rootNode)
            }
            static _walk(a, e) {
                return "string" == typeof e ? a.addText(e) : e.children && (a.openNode(e),
                    e.children.forEach(t=>this._walk(a, t)),
                    a.closeNode(e)),
                    a
            }
            static _collapse(a) {
                "string" != typeof a && (!a.children || (a.children.every(e=>"string" == typeof e) ? a.children = [a.children.join("")] : a.children.forEach(e=>{
                        Ee._collapse(e)
                    }
                )))
            }
        }
        class Ie extends Ee {
            constructor(a) {
                super(),
                    this.options = a
            }
            addKeyword(a, e) {
                "" !== a && (this.openNode(e),
                    this.addText(a),
                    this.closeNode())
            }
            addText(a) {
                "" !== a && this.add(a)
            }
            addSublanguage(a, e) {
                const t = a.root;
                t.sublanguage = !0,
                    t.language = e,
                    this.add(t)
            }
            toHTML() {
                return new Q(this,this.options).value()
            }
            finalize() {
                return !0
            }
        }
        function pe(n) {
            return n ? "string" == typeof n ? n : n.source : null
        }
        function Te(n) {
            return ee("(?=", n, ")")
        }
        function De(n) {
            return ee("(?:", n, ")*")
        }
        function ie(n) {
            return ee("(?:", n, ")?")
        }
        function ee(...n) {
            return n.map(e=>pe(e)).join("")
        }
        function W(...n) {
            const a = function $(n) {
                const a = n[n.length - 1];
                return "object" == typeof a && a.constructor === Object ? (n.splice(n.length - 1, 1),
                    a) : {}
            }(n);
            return "(" + (a.capture ? "" : "?:") + n.map(t=>pe(t)).join("|") + ")"
        }
        function ue(n) {
            return new RegExp(n.toString() + "|").exec("").length - 1
        }
        const ze = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
        function Le(n, {joinWith: a}) {
            let e = 0;
            return n.map(t=>{
                    e += 1;
                    const i = e;
                    let s = pe(t)
                        , r = "";
                    for (; s.length > 0; ) {
                        const o = ze.exec(s);
                        if (!o) {
                            r += s;
                            break
                        }
                        r += s.substring(0, o.index),
                            s = s.substring(o.index + o[0].length),
                            "\\" === o[0][0] && o[1] ? r += "\\" + String(Number(o[1]) + i) : (r += o[0],
                            "(" === o[0] && e++)
                    }
                    return r
                }
            ).map(t=>`(${t})`).join(a)
        }
        const L = "[a-zA-Z]\\w*"
            , Ge = "[a-zA-Z_]\\w*"
            , j = "\\b\\d+(\\.\\d+)?"
            , ke = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"
            , Qe = "\\b(0b[01]+)"
            , be = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        }
            , Ve = {
            scope: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [be]
        }
            , fn = {
            scope: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [be]
        }
            , Se = function(n, a, e={}) {
            const t = Y({
                scope: "comment",
                begin: n,
                end: a,
                contains: []
            }, e);
            t.contains.push({
                scope: "doctag",
                begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                excludeBegin: !0,
                relevance: 0
            });
            const i = W("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
            return t.contains.push({
                begin: ee(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}")
            }),
                t
        }
            , Je = Se("//", "$")
            , je = Se("/\\*", "\\*/")
            , He = Se("#", "$");
        var Pe = Object.freeze({
            __proto__: null,
            MATCH_NOTHING_RE: /\b\B/,
            IDENT_RE: L,
            UNDERSCORE_IDENT_RE: Ge,
            NUMBER_RE: j,
            C_NUMBER_RE: ke,
            BINARY_NUMBER_RE: Qe,
            RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            SHEBANG: (n={})=>{
                const a = /^#![ ]*\//;
                return n.binary && (n.begin = ee(a, /.*\b/, n.binary, /\b.*/)),
                    Y({
                        scope: "meta",
                        begin: a,
                        end: /$/,
                        relevance: 0,
                        "on:begin": (e,t)=>{
                            0 !== e.index && t.ignoreMatch()
                        }
                    }, n)
            }
            ,
            BACKSLASH_ESCAPE: be,
            APOS_STRING_MODE: Ve,
            QUOTE_STRING_MODE: fn,
            PHRASAL_WORDS_MODE: {
                begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            },
            COMMENT: Se,
            C_LINE_COMMENT_MODE: Je,
            C_BLOCK_COMMENT_MODE: je,
            HASH_COMMENT_MODE: He,
            NUMBER_MODE: {
                scope: "number",
                begin: j,
                relevance: 0
            },
            C_NUMBER_MODE: {
                scope: "number",
                begin: ke,
                relevance: 0
            },
            BINARY_NUMBER_MODE: {
                scope: "number",
                begin: Qe,
                relevance: 0
            },
            REGEXP_MODE: {
                begin: /(?=\/[^/\n]*\/)/,
                contains: [{
                    scope: "regexp",
                    begin: /\//,
                    end: /\/[gimuy]*/,
                    illegal: /\n/,
                    contains: [be, {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [be]
                    }]
                }]
            },
            TITLE_MODE: {
                scope: "title",
                begin: L,
                relevance: 0
            },
            UNDERSCORE_TITLE_MODE: {
                scope: "title",
                begin: Ge,
                relevance: 0
            },
            METHOD_GUARD: {
                begin: "\\.\\s*" + Ge,
                relevance: 0
            },
            END_SAME_AS_BEGIN: function(n) {
                return Object.assign(n, {
                    "on:begin": (a,e)=>{
                        e.data._beginMatch = a[1]
                    }
                    ,
                    "on:end": (a,e)=>{
                        e.data._beginMatch !== a[1] && e.ignoreMatch()
                    }
                })
            }
        });
        function Ue(n, a) {
            "." === n.input[n.index - 1] && a.ignoreMatch()
        }
        function nn(n, a) {
            void 0 !== n.className && (n.scope = n.className,
                delete n.className)
        }
        function tn(n, a) {
            !a || !n.beginKeywords || (n.begin = "\\b(" + n.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)",
                n.__beforeBegin = Ue,
                n.keywords = n.keywords || n.beginKeywords,
                delete n.beginKeywords,
            void 0 === n.relevance && (n.relevance = 0))
        }
        function an(n, a) {
            !Array.isArray(n.illegal) || (n.illegal = W(...n.illegal))
        }
        function sn(n, a) {
            if (n.match) {
                if (n.begin || n.end)
                    throw new Error("begin & end are not supported with match");
                n.begin = n.match,
                    delete n.match
            }
        }
        function rn(n, a) {
            void 0 === n.relevance && (n.relevance = 1)
        }
        const on = (n,a)=>{
            if (!n.beforeMatch)
                return;
            if (n.starts)
                throw new Error("beforeMatch cannot be used with starts");
            const e = Object.assign({}, n);
            Object.keys(n).forEach(t=>{
                    delete n[t]
                }
            ),
                n.keywords = e.keywords,
                n.begin = ee(e.beforeMatch, Te(e.begin)),
                n.starts = {
                    relevance: 0,
                    contains: [Object.assign(e, {
                        endsParent: !0
                    })]
                },
                n.relevance = 0,
                delete e.beforeMatch
        }
            , cn = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
        function ln(n, a, e="keyword") {
            const t = Object.create(null);
            return "string" == typeof n ? i(e, n.split(" ")) : Array.isArray(n) ? i(e, n) : Object.keys(n).forEach(function(s) {
                Object.assign(t, ln(n[s], a, s))
            }),
                t;
            function i(s, r) {
                a && (r = r.map(o=>o.toLowerCase())),
                    r.forEach(function(o) {
                        const c = o.split("|");
                        t[c[0]] = [s, he(c[0], c[1])]
                    })
            }
        }
        function he(n, a) {
            return a ? Number(a) : function Fe(n) {
                return cn.includes(n.toLowerCase())
            }(n) ? 0 : 1
        }
        const we = {}
            , fe = n=>{
            console.error(n)
        }
            , un = (n,...a)=>{
            console.log(`WARN: ${n}`, ...a)
        }
            , Oe = (n,a)=>{
            we[`${n}/${a}`] || (console.log(`Deprecated as of ${n}. ${a}`),
                we[`${n}/${a}`] = !0)
        }
            , $e = new Error;
        function dn(n, a, {key: e}) {
            let t = 0;
            const i = n[e]
                , s = {}
                , r = {};
            for (let o = 1; o <= a.length; o++)
                r[o + t] = i[o],
                    s[o + t] = !0,
                    t += ue(a[o - 1]);
            n[e] = r,
                n[e]._emit = s,
                n[e]._multi = !0
        }
        function Mn(n) {
            (function wn(n) {
                    n.scope && "object" == typeof n.scope && null !== n.scope && (n.beginScope = n.scope,
                        delete n.scope)
                }
            )(n),
            "string" == typeof n.beginScope && (n.beginScope = {
                _wrap: n.beginScope
            }),
            "string" == typeof n.endScope && (n.endScope = {
                _wrap: n.endScope
            }),
                function Tn(n) {
                    if (Array.isArray(n.begin)) {
                        if (n.skip || n.excludeBegin || n.returnBegin)
                            throw fe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
                                $e;
                        if ("object" != typeof n.beginScope || null === n.beginScope)
                            throw fe("beginScope must be object"),
                                $e;
                        dn(n, n.begin, {
                            key: "beginScope"
                        }),
                            n.begin = Le(n.begin, {
                                joinWith: ""
                            })
                    }
                }(n),
                function Sn(n) {
                    if (Array.isArray(n.end)) {
                        if (n.skip || n.excludeEnd || n.returnEnd)
                            throw fe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
                                $e;
                        if ("object" != typeof n.endScope || null === n.endScope)
                            throw fe("endScope must be object"),
                                $e;
                        dn(n, n.end, {
                            key: "endScope"
                        }),
                            n.end = Le(n.end, {
                                joinWith: ""
                            })
                    }
                }(n)
        }
        function Cn(n) {
            function a(r, o) {
                return new RegExp(pe(r),"m" + (n.case_insensitive ? "i" : "") + (n.unicodeRegex ? "u" : "") + (o ? "g" : ""))
            }
            class e {
                constructor() {
                    this.matchIndexes = {},
                        this.regexes = [],
                        this.matchAt = 1,
                        this.position = 0
                }
                addRule(o, c) {
                    c.position = this.position++,
                        this.matchIndexes[this.matchAt] = c,
                        this.regexes.push([c, o]),
                        this.matchAt += ue(o) + 1
                }
                compile() {
                    0 === this.regexes.length && (this.exec = ()=>null);
                    const o = this.regexes.map(c=>c[1]);
                    this.matcherRe = a(Le(o, {
                        joinWith: "|"
                    }), !0),
                        this.lastIndex = 0
                }
                exec(o) {
                    this.matcherRe.lastIndex = this.lastIndex;
                    const c = this.matcherRe.exec(o);
                    if (!c)
                        return null;
                    const u = c.findIndex((_,p)=>p > 0 && void 0 !== _)
                        , d = this.matchIndexes[u];
                    return c.splice(0, u),
                        Object.assign(c, d)
                }
            }
            class t {
                constructor() {
                    this.rules = [],
                        this.multiRegexes = [],
                        this.count = 0,
                        this.lastIndex = 0,
                        this.regexIndex = 0
                }
                getMatcher(o) {
                    if (this.multiRegexes[o])
                        return this.multiRegexes[o];
                    const c = new e;
                    return this.rules.slice(o).forEach(([u,d])=>c.addRule(u, d)),
                        c.compile(),
                        this.multiRegexes[o] = c,
                        c
                }
                resumingScanAtSamePosition() {
                    return 0 !== this.regexIndex
                }
                considerAll() {
                    this.regexIndex = 0
                }
                addRule(o, c) {
                    this.rules.push([o, c]),
                    "begin" === c.type && this.count++
                }
                exec(o) {
                    const c = this.getMatcher(this.regexIndex);
                    c.lastIndex = this.lastIndex;
                    let u = c.exec(o);
                    if (this.resumingScanAtSamePosition() && (!u || u.index !== this.lastIndex)) {
                        const d = this.getMatcher(0);
                        d.lastIndex = this.lastIndex + 1,
                            u = d.exec(o)
                    }
                    return u && (this.regexIndex += u.position + 1,
                    this.regexIndex === this.count && this.considerAll()),
                        u
                }
            }
            if (n.compilerExtensions || (n.compilerExtensions = []),
            n.contains && n.contains.includes("self"))
                throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
            return n.classNameAliases = Y(n.classNameAliases || {}),
                function s(r, o) {
                    const c = r;
                    if (r.isCompiled)
                        return c;
                    [nn, sn, Mn, on].forEach(d=>d(r, o)),
                        n.compilerExtensions.forEach(d=>d(r, o)),
                        r.__beforeBegin = null,
                        [tn, an, rn].forEach(d=>d(r, o)),
                        r.isCompiled = !0;
                    let u = null;
                    return "object" == typeof r.keywords && r.keywords.$pattern && (r.keywords = Object.assign({}, r.keywords),
                        u = r.keywords.$pattern,
                        delete r.keywords.$pattern),
                        u = u || /\w+/,
                    r.keywords && (r.keywords = ln(r.keywords, n.case_insensitive)),
                        c.keywordPatternRe = a(u, !0),
                    o && (r.begin || (r.begin = /\B|\b/),
                        c.beginRe = a(c.begin),
                    !r.end && !r.endsWithParent && (r.end = /\B|\b/),
                    r.end && (c.endRe = a(c.end)),
                        c.terminatorEnd = pe(c.end) || "",
                    r.endsWithParent && o.terminatorEnd && (c.terminatorEnd += (r.end ? "|" : "") + o.terminatorEnd)),
                    r.illegal && (c.illegalRe = a(r.illegal)),
                    r.contains || (r.contains = []),
                        r.contains = [].concat(...r.contains.map(function(d) {
                            return function An(n) {
                                return n.variants && !n.cachedVariants && (n.cachedVariants = n.variants.map(function(a) {
                                    return Y(n, {
                                        variants: null
                                    }, a)
                                })),
                                    n.cachedVariants ? n.cachedVariants : gn(n) ? Y(n, {
                                        starts: n.starts ? Y(n.starts) : null
                                    }) : Object.isFrozen(n) ? Y(n) : n
                            }("self" === d ? r : d)
                        })),
                        r.contains.forEach(function(d) {
                            s(d, c)
                        }),
                    r.starts && s(r.starts, o),
                        c.matcher = function i(r) {
                            const o = new t;
                            return r.contains.forEach(c=>o.addRule(c.begin, {
                                rule: c,
                                type: "begin"
                            })),
                            r.terminatorEnd && o.addRule(r.terminatorEnd, {
                                type: "end"
                            }),
                            r.illegal && o.addRule(r.illegal, {
                                type: "illegal"
                            }),
                                o
                        }(c),
                        c
                }(n)
        }
        function gn(n) {
            return !!n && (n.endsWithParent || gn(n.starts))
        }
        class vn extends Error {
            constructor(a, e) {
                super(a),
                    this.name = "HTMLInjectionError",
                    this.html = e
            }
        }
        const Ze = w
            , _n = Y
            , K = Symbol("nomatch");
        var Me = function(n) {
            const a = Object.create(null)
                , e = Object.create(null)
                , t = [];
            let i = !0;
            const s = "Could not find the language '{}', did you forget to load/include a language module?"
                , r = {
                disableAutodetect: !0,
                name: "Plain text",
                contains: []
            };
            let o = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                cssSelector: "pre code",
                languages: null,
                __emitter: Ie
            };
            function c(l) {
                return o.noHighlightRe.test(l)
            }
            function d(l, b, S) {
                let m = ""
                    , M = "";
                "object" == typeof b ? (m = l,
                    S = b.ignoreIllegals,
                    M = b.language) : (Oe("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
                    Oe("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
                    M = l,
                    m = b),
                void 0 === S && (S = !0);
                const P = {
                    code: m,
                    language: M
                };
                de("before:highlight", P);
                const Z = P.result ? P.result : _(P.language, P.code, S);
                return Z.code = P.code,
                    de("after:highlight", Z),
                    Z
            }
            function _(l, b, S, m) {
                const M = Object.create(null);
                function P(g, f) {
                    return g.keywords[f]
                }
                function Z() {
                    if (!O.keywords)
                        return void V.addText(F);
                    let g = 0;
                    O.keywordPatternRe.lastIndex = 0;
                    let f = O.keywordPatternRe.exec(F)
                        , C = "";
                    for (; f; ) {
                        C += F.substring(g, f.index);
                        const x = _e.case_insensitive ? f[0].toLowerCase() : f[0]
                            , te = P(O, x);
                        if (te) {
                            const [Ne,zn] = te;
                            V.addText(C),
                                C = "",
                                M[x] = (M[x] || 0) + 1,
                            M[x] <= 7 && (pn += zn),
                                Ne.startsWith("_") ? C += f[0] : V.addKeyword(f[0], _e.classNameAliases[Ne] || Ne)
                        } else
                            C += f[0];
                        g = O.keywordPatternRe.lastIndex,
                            f = O.keywordPatternRe.exec(F)
                    }
                    C += F.substring(g),
                        V.addText(C)
                }
                function X() {
                    null != O.subLanguage ? function ce() {
                        if ("" === F)
                            return;
                        let g = null;
                        if ("string" == typeof O.subLanguage) {
                            if (!a[O.subLanguage])
                                return void V.addText(F);
                            g = _(O.subLanguage, F, !0, $n[O.subLanguage]),
                                $n[O.subLanguage] = g._top
                        } else
                            g = h(F, O.subLanguage.length ? O.subLanguage : null);
                        O.relevance > 0 && (pn += g.relevance),
                            V.addSublanguage(g._emitter, g.language)
                    }() : Z(),
                        F = ""
                }
                function ge(g, f) {
                    let C = 1;
                    const x = f.length - 1;
                    for (; C <= x; ) {
                        if (!g._emit[C]) {
                            C++;
                            continue
                        }
                        const te = _e.classNameAliases[g[C]] || g[C]
                            , Ne = f[C];
                        te ? V.addKeyword(Ne, te) : (F = Ne,
                            Z(),
                            F = ""),
                            C++
                    }
                }
                function Ye(g, f) {
                    return g.scope && "string" == typeof g.scope && V.openNode(_e.classNameAliases[g.scope] || g.scope),
                    g.beginScope && (g.beginScope._wrap ? (V.addKeyword(F, _e.classNameAliases[g.beginScope._wrap] || g.beginScope._wrap),
                        F = "") : g.beginScope._multi && (ge(g.beginScope, f),
                        F = "")),
                        O = Object.create(g, {
                            parent: {
                                value: O
                            }
                        }),
                        O
                }
                function En(g, f, C) {
                    let x = function Ke(n, a) {
                        const e = n && n.exec(a);
                        return e && 0 === e.index
                    }(g.endRe, C);
                    if (x) {
                        if (g["on:end"]) {
                            const te = new se(g);
                            g["on:end"](f, te),
                            te.isMatchIgnored && (x = !1)
                        }
                        if (x) {
                            for (; g.endsParent && g.parent; )
                                g = g.parent;
                            return g
                        }
                    }
                    if (g.endsWithParent)
                        return En(g.parent, f, C)
                }
                function Dn(g) {
                    return 0 === O.matcher.regexIndex ? (F += g[0],
                        1) : (Pn = !0,
                        0)
                }
                function xn(g) {
                    const f = g[0]
                        , C = b.substring(g.index)
                        , x = En(O, g, C);
                    if (!x)
                        return K;
                    const te = O;
                    O.endScope && O.endScope._wrap ? (X(),
                        V.addKeyword(f, O.endScope._wrap)) : O.endScope && O.endScope._multi ? (X(),
                        ge(O.endScope, g)) : te.skip ? F += f : (te.returnEnd || te.excludeEnd || (F += f),
                        X(),
                    te.excludeEnd && (F = f));
                    do {
                        O.scope && V.closeNode(),
                        !O.skip && !O.subLanguage && (pn += O.relevance),
                            O = O.parent
                    } while (O !== x.parent);
                    return x.starts && Ye(x.starts, g),
                        te.returnEnd ? 0 : f.length
                }
                let Ae = {};
                function qe(g, f) {
                    const C = f && f[0];
                    if (F += g,
                    null == C)
                        return X(),
                            0;
                    if ("begin" === Ae.type && "end" === f.type && Ae.index === f.index && "" === C) {
                        if (F += b.slice(f.index, f.index + 1),
                            !i) {
                            const x = new Error(`0 width match regex (${l})`);
                            throw x.languageName = l,
                                x.badRule = Ae.rule,
                                x
                        }
                        return 1
                    }
                    if (Ae = f,
                    "begin" === f.type)
                        return function Ln(g) {
                            const f = g[0]
                                , C = g.rule
                                , x = new se(C)
                                , te = [C.__beforeBegin, C["on:begin"]];
                            for (const Ne of te)
                                if (Ne && (Ne(g, x),
                                    x.isMatchIgnored))
                                    return Dn(f);
                            return C.skip ? F += f : (C.excludeBegin && (F += f),
                                X(),
                            !C.returnBegin && !C.excludeBegin && (F = f)),
                                Ye(C, g),
                                C.returnBegin ? 0 : f.length
                        }(f);
                    if ("illegal" === f.type && !S) {
                        const x = new Error('Illegal lexeme "' + C + '" for mode "' + (O.scope || "<unnamed>") + '"');
                        throw x.mode = O,
                            x
                    }
                    if ("end" === f.type) {
                        const x = xn(f);
                        if (x !== K)
                            return x
                    }
                    if ("illegal" === f.type && "" === C)
                        return 1;
                    if (Bn > 1e5 && Bn > 3 * f.index)
                        throw new Error("potential infinite loop, way more iterations than matches");
                    return F += C,
                        C.length
                }
                const _e = D(l);
                if (!_e)
                    throw fe(s.replace("{}", l)),
                        new Error('Unknown language: "' + l + '"');
                const Kn = Cn(_e);
                let kn = ""
                    , O = m || Kn;
                const $n = {}
                    , V = new o.__emitter(o);
                !function U() {
                    const g = [];
                    for (let f = O; f !== _e; f = f.parent)
                        f.scope && g.unshift(f.scope);
                    g.forEach(f=>V.openNode(f))
                }();
                let F = ""
                    , pn = 0
                    , Re = 0
                    , Bn = 0
                    , Pn = !1;
                try {
                    for (O.matcher.considerAll(); ; ) {
                        Bn++,
                            Pn ? Pn = !1 : O.matcher.considerAll(),
                            O.matcher.lastIndex = Re;
                        const g = O.matcher.exec(b);
                        if (!g)
                            break;
                        const C = qe(b.substring(Re, g.index), g);
                        Re = g.index + C
                    }
                    return qe(b.substring(Re)),
                        V.closeAllNodes(),
                        V.finalize(),
                        kn = V.toHTML(),
                        {
                            language: l,
                            value: kn,
                            relevance: pn,
                            illegal: !1,
                            _emitter: V,
                            _top: O
                        }
                } catch (g) {
                    if (g.message && g.message.includes("Illegal"))
                        return {
                            language: l,
                            value: Ze(b),
                            illegal: !0,
                            relevance: 0,
                            _illegalBy: {
                                message: g.message,
                                index: Re,
                                context: b.slice(Re - 100, Re + 100),
                                mode: g.mode,
                                resultSoFar: kn
                            },
                            _emitter: V
                        };
                    if (i)
                        return {
                            language: l,
                            value: Ze(b),
                            illegal: !1,
                            relevance: 0,
                            errorRaised: g,
                            _emitter: V,
                            _top: O
                        };
                    throw g
                }
            }
            function h(l, b) {
                b = b || o.languages || Object.keys(a);
                const S = function p(l) {
                    const b = {
                        value: Ze(l),
                        illegal: !1,
                        relevance: 0,
                        _top: r,
                        _emitter: new o.__emitter(o)
                    };
                    return b._emitter.addText(l),
                        b
                }(l)
                    , m = b.filter(D).filter(oe).map(X=>_(X, l, !1));
                m.unshift(S);
                const M = m.sort((X,ge)=>{
                        if (X.relevance !== ge.relevance)
                            return ge.relevance - X.relevance;
                        if (X.language && ge.language) {
                            if (D(X.language).supersetOf === ge.language)
                                return 1;
                            if (D(ge.language).supersetOf === X.language)
                                return -1
                        }
                        return 0
                    }
                )
                    , [P,Z] = M
                    , ce = P;
                return ce.secondBest = Z,
                    ce
            }
            function T(l) {
                let b = null;
                const S = function u(l) {
                    let b = l.className + " ";
                    b += l.parentNode ? l.parentNode.className : "";
                    const S = o.languageDetectRe.exec(b);
                    if (S) {
                        const m = D(S[1]);
                        return m || (un(s.replace("{}", S[1])),
                            un("Falling back to no-highlight mode for this block.", l)),
                            m ? S[1] : "no-highlight"
                    }
                    return b.split(/\s+/).find(m=>c(m) || D(m))
                }(l);
                if (c(S))
                    return;
                if (de("before:highlightElement", {
                    el: l,
                    language: S
                }),
                l.children.length > 0 && (o.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
                    console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                    console.warn("The element with unescaped HTML:"),
                    console.warn(l)),
                    o.throwUnescapedHTML))
                    throw new vn("One of your code blocks includes unescaped HTML.",l.innerHTML);
                b = l;
                const m = b.textContent
                    , M = S ? d(m, {
                    language: S,
                    ignoreIllegals: !0
                }) : h(m);
                l.innerHTML = M.value,
                    function N(l, b, S) {
                        const m = b && e[b] || S;
                        l.classList.add("hljs"),
                            l.classList.add(`language-${m}`)
                    }(l, S, M.language),
                    l.result = {
                        language: M.language,
                        re: M.relevance,
                        relevance: M.relevance
                    },
                M.secondBest && (l.secondBest = {
                    language: M.secondBest.language,
                    relevance: M.secondBest.relevance
                }),
                    de("after:highlightElement", {
                        el: l,
                        result: M,
                        text: m
                    })
            }
            let v = !1;
            function z() {
                "loading" !== document.readyState ? document.querySelectorAll(o.cssSelector).forEach(T) : v = !0
            }
            function D(l) {
                return l = (l || "").toLowerCase(),
                a[l] || a[e[l]]
            }
            function re(l, {languageName: b}) {
                "string" == typeof l && (l = [l]),
                    l.forEach(S=>{
                            e[S.toLowerCase()] = b
                        }
                    )
            }
            function oe(l) {
                const b = D(l);
                return b && !b.disableAutodetect
            }
            function de(l, b) {
                const S = l;
                t.forEach(function(m) {
                    m[S] && m[S](b)
                })
            }
            typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", function I() {
                v && z()
            }, !1),
                Object.assign(n, {
                    highlight: d,
                    highlightAuto: h,
                    highlightAll: z,
                    highlightElement: T,
                    highlightBlock: function me(l) {
                        return Oe("10.7.0", "highlightBlock will be removed entirely in v12.0"),
                            Oe("10.7.0", "Please use highlightElement now."),
                            T(l)
                    },
                    configure: function R(l) {
                        o = _n(o, l)
                    },
                    initHighlighting: ()=>{
                        z(),
                            Oe("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
                    }
                    ,
                    initHighlightingOnLoad: function A() {
                        z(),
                            Oe("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                    },
                    registerLanguage: function B(l, b) {
                        let S = null;
                        try {
                            S = b(n)
                        } catch (m) {
                            if (fe("Language definition for '{}' could not be registered.".replace("{}", l)),
                                !i)
                                throw m;
                            fe(m),
                                S = r
                        }
                        S.name || (S.name = l),
                            a[l] = S,
                            S.rawDefinition = b.bind(null, n),
                        S.aliases && re(S.aliases, {
                            languageName: l
                        })
                    },
                    unregisterLanguage: function G(l) {
                        delete a[l];
                        for (const b of Object.keys(e))
                            e[b] === l && delete e[b]
                    },
                    listLanguages: function ne() {
                        return Object.keys(a)
                    },
                    getLanguage: D,
                    registerAliases: re,
                    autoDetection: oe,
                    inherit: _n,
                    addPlugin: function Ce(l) {
                        (function ye(l) {
                                l["before:highlightBlock"] && !l["before:highlightElement"] && (l["before:highlightElement"] = b=>{
                                        l["before:highlightBlock"](Object.assign({
                                            block: b.el
                                        }, b))
                                    }
                                ),
                                l["after:highlightBlock"] && !l["after:highlightElement"] && (l["after:highlightElement"] = b=>{
                                        l["after:highlightBlock"](Object.assign({
                                            block: b.el
                                        }, b))
                                    }
                                )
                            }
                        )(l),
                            t.push(l)
                    }
                }),
                n.debugMode = function() {
                    i = !1
                }
                ,
                n.safeMode = function() {
                    i = !0
                }
                ,
                n.versionString = "11.6.0",
                n.regex = {
                    concat: ee,
                    lookahead: Te,
                    either: W,
                    optional: ie,
                    anyNumberOfTimes: De
                };
            for (const l in Pe)
                "object" == typeof Pe[l] && ae.exports(Pe[l]);
            return Object.assign(n, Pe),
                n
        }({});
        ve.exports = Me,
            Me.HighlightJS = Me,
            Me.default = Me
    }
}]);
