"use strict";
(self.webpackChunkangular_client = self.webpackChunkangular_client || []).push([[6709], {
    36709: (E,b,i)=>{
        i.d(b, {
            a: ()=>F
        });
        var h = i(15861)
            , l = i(90801)
            , f = i(534)
            , g = i(7625)
            , v = i(72986)
            , P = i(8929)
            , _ = i(90087)
            , u = i(5861)
            , d = i(68586)
            , p = i(7682)
            , e = i(55062)
            , w = i(96774)
            , S = i(16256)
            , L = i(21161)
            , k = i(58261)
            , y = i(42982)
            , A = i(31434)
            , D = i(27608)
            , Z = i(57805)
            , C = i(36895)
            , U = i(3868)
            , R = i(60312)
            , I = i(48635);
        const K = ["codeModal"]
            , B = ["videoModal"];
        function J(r, c) {
            if (1 & r) {
                const t = e.EpF();
                e.TgZ(0, "div", 25)(1, "p", 26),
                    e._uU(2),
                    e.qZA(),
                    e.TgZ(3, "button", 27),
                    e.NdJ("click", function() {
                        e.CHM(t);
                        const n = e.oxw();
                        return e.KtG(n.movePrevPage())
                    }),
                    e._UZ(4, "fa-icon", 6),
                    e.qZA(),
                    e.TgZ(5, "button", 28),
                    e.NdJ("click", function() {
                        e.CHM(t);
                        const n = e.oxw();
                        return e.KtG(n.moveNextPage())
                    }),
                    e._UZ(6, "fa-icon", 6),
                    e.qZA()()
            }
            if (2 & r) {
                const t = e.oxw();
                e.xp6(2),
                    e.AsE(" Displaying ", 1 + t.getRowLowerBound(), " - ", t.getRowUpperBound(), " "),
                    e.xp6(2),
                    e.Q6J("icon", t.faArrowLeft),
                    e.xp6(2),
                    e.Q6J("icon", t.faArrowRight)
            }
        }
        function Q(r, c) {
            if (1 & r && (e.TgZ(0, "a", 43),
                e._uU(1, "\xa0 "),
                e._UZ(2, "fa-icon", 44),
                e.qZA()),
            2 & r) {
                const t = e.oxw().$implicit
                    , o = e.oxw();
                e.uIk("href", t.freeLink, e.LSH),
                    e.xp6(2),
                    e.Q6J("icon", o.faLock)
            }
        }
        function W(r, c) {
            if (1 & r) {
                const t = e.EpF();
                e.TgZ(0, "button", 45),
                    e.NdJ("click", function() {
                        e.CHM(t);
                        const n = e.oxw().$implicit
                            , a = e.oxw();
                        return e.KtG(a.videoClickHandler(n.video, n.pattern))
                    }),
                    e._UZ(1, "fa-icon", 6),
                    e.qZA()
            }
            if (2 & r) {
                const t = e.oxw(2);
                e.xp6(1),
                    e.Q6J("icon", t.faVideo)
            }
        }
        function N(r, c) {
            if (1 & r) {
                const t = e.EpF();
                e.TgZ(0, "button", 47),
                    e.NdJ("click", function() {
                        e.CHM(t);
                        const n = e.oxw().$implicit
                            , a = e.oxw().$implicit
                            , s = e.oxw();
                        return e.KtG(s.codeClickHandler(a, n))
                    }),
                    e._uU(1),
                    e.qZA()
            }
            if (2 & r) {
                const t = e.oxw().$implicit
                    , o = e.oxw(2);
                e.xp6(1),
                    e.hij(" ", o.LanguageMap[t].name, " ")
            }
        }
        function H(r, c) {
            if (1 & r && (e.ynx(0),
                e.YNc(1, N, 2, 1, "button", 46),
                e.BQk()),
            2 & r) {
                const t = c.$implicit
                    , o = e.oxw().$implicit
                    , n = e.oxw();
                e.xp6(1),
                    e.Q6J("ngIf", !!o.code && !0 === o[t] && n.currentLanguage === t)
            }
        }
        function Y(r, c) {
            if (1 & r) {
                const t = e.EpF();
                e.TgZ(0, "tr", 29)(1, "td")(2, "div", 30)(3, "label", 31)(4, "input", 32),
                    e.NdJ("click", function() {
                        const a = e.CHM(t).index
                            , s = e.oxw();
                        return e.KtG(s.toggleRowSelect(a))
                    }),
                    e.qZA(),
                    e._UZ(5, "span", 33),
                    e.qZA()()(),
                    e.TgZ(6, "td", 4)(7, "div", 30)(8, "label", 31)(9, "input", 32),
                    e.NdJ("click", function() {
                        const a = e.CHM(t).index
                            , s = e.oxw();
                        return e.KtG(s.toggleRowStarred(a))
                    }),
                    e.qZA(),
                    e.TgZ(10, "span", 34),
                    e._UZ(11, "fa-icon", 6),
                    e.qZA()()()(),
                    e.TgZ(12, "td", 35)(13, "a", 36),
                    e.NdJ("click", function() {
                        const a = e.CHM(t).$implicit
                            , s = e.oxw();
                        return e.KtG(s.problemUrlClickHandler(a.pattern))
                    }),
                    e._uU(14),
                    e.qZA(),
                    e.YNc(15, Q, 3, 2, "a", 37),
                    e.qZA(),
                    e.TgZ(16, "td", 38)(17, "div", 39)(18, "button", 40)(19, "b"),
                    e._uU(20),
                    e.qZA()()()(),
                    e.TgZ(21, "td")(22, "div", 30),
                    e.YNc(23, W, 2, 1, "button", 41),
                    e.qZA()(),
                    e.TgZ(24, "td")(25, "div", 30),
                    e.YNc(26, H, 2, 1, "ng-container", 42),
                    e.qZA()()()
            }
            if (2 & r) {
                const t = c.$implicit
                    , o = e.oxw();
                e.Q6J("ngClass", null != t && t.completed ? "completed" : ""),
                    e.xp6(4),
                    e.Q6J("checked", null == t ? null : t.completed),
                    e.xp6(5),
                    e.Q6J("checked", null == t ? null : t.starred),
                    e.xp6(2),
                    e.Q6J("icon", null != t && t.starred ? o.faSolidStar : o.faStar),
                    e.xp6(2),
                    e.uIk("href", t.link, e.LSH),
                    e.xp6(1),
                    e.hij(" ", t.problem, " "),
                    e.xp6(1),
                    e.Q6J("ngIf", (null == t ? null : t.premium) && (null == t ? null : t.freeLink)),
                    e.xp6(3),
                    e.Q6J("ngClass", o.getButtonStyleByDifficulty(t.difficulty)),
                    e.xp6(2),
                    e.Oqu(t.difficulty),
                    e.xp6(3),
                    e.Q6J("ngIf", t.video),
                    e.xp6(3),
                    e.Q6J("ngForOf", o.Object.keys(o.LanguageMap))
            }
        }
        function $(r, c) {
            if (1 & r && (e._UZ(0, "app-code", 48),
                e.ALo(1, "lowercase")),
            2 & r) {
                const t = e.oxw();
                e.Q6J("code", t.code)("lang", e.lcZ(1, 2, t.lang))
            }
        }
        function z(r, c) {
            if (1 & r && (e._UZ(0, "iframe", 49),
                e.ALo(1, "safe")),
            2 & r) {
                const t = e.oxw();
                e.Q6J("src", e.lcZ(1, 1, t.videoLink), e.uOi)
            }
        }
        const x = function(r) {
            return [r]
        };
        let F = (()=>{
                class r {
                    constructor(t, o, n, a, s, O, T, M, m) {
                        this.analyticsService = t,
                            this.authService = o,
                            this.cd = n,
                            this.courseService = a,
                            this.githubService = s,
                            this.localStorageService = O,
                            this.tableProgressService = T,
                            this.languageState = M,
                            this.signInState = m,
                            this.problemsTopic = "any",
                            this.rows = [],
                            this.isPaginated = !1,
                            this.pageSize = 150,
                            this.currentPage = 1,
                            this.videoLink = "",
                            this.codeLink = "",
                            this.rawCodeLink = "",
                            this.code = "",
                            this.lang = "",
                            this.displayLang = _.Fv,
                            this.validLangs = [],
                            this.columnsList = ["Status", "Star", "Problem", "Difficulty", "Video Solution", "Code"],
                            this.faVideo = l.IyC,
                            this.faSort = l.CmM,
                            this.faStar = f.T,
                            this.faSolidStar = l.Tab,
                            this.faSortState = null,
                            this.faLock = l.tAh,
                            this.faArrowLeft = l.acZ,
                            this.faArrowRight = l.eFW,
                            this.sortedColumn = "",
                            this.destroy$ = new P.xQ,
                            this.isUserAuth = !1,
                            this.currentLanguage = "python",
                            this.LanguageMap = u._3,
                            this.Object = Object
                    }
                    ngOnInit() {
                        var t = this;
                        return (0,
                            h.Z)(function*() {
                            t.authService.getAuthState().pipe((0,
                                g.R)(t.destroy$)).subscribe(o=>{
                                    t.isUserAuth = !!o
                                }
                            ),
                                "any" === t.problemsTopic ? 0 === t.rows.length && t.tableProgressService.getAllProblems$().pipe((0,
                                    g.R)(t.destroy$)).subscribe(o=>{
                                        t.resetSort(),
                                            t.rows = [];
                                        for (const n in o)
                                            t.rows.push(...o[n]);
                                        t.rows.length > 150 ? (t.isPaginated = !0,
                                            t.pageSize = 150,
                                            t.currentPage = 1) : t.isPaginated = !1
                                    }
                                ) : t.tableProgressService.getAllProblems$().pipe((0,
                                    g.R)(t.destroy$)).subscribe(o=>{
                                        t.resetSort(),
                                            t.rows = o[t.problemsTopic] ?? []
                                    }
                                ),
                                t.languageState.getLanguage$().pipe((0,
                                    g.R)(t.destroy$)).subscribe(o=>{
                                        t.currentLanguage = o,
                                        t.codeLink && t.codeClickHandler(t.codeOpenRow, t.currentLanguage)
                                    }
                                )
                        })()
                    }
                    ngOnChanges(t) {
                        t.rows && this.resetSort()
                    }
                    ngOnDestroy() {
                        this.destroy$.next(!0),
                            this.destroy$.complete()
                    }
                    getButtonStyleByDifficulty(t) {
                        return (0,
                            p.j)(t)
                    }
                    toggleRowSelect(t) {
                        var o = this;
                        return (0,
                            h.Z)(function*() {
                            t = o.getRealRowIndex(t);
                            const n = o.rows[t]
                                , a = o.rows[t].link
                                , s = o.rows[t].pattern;
                            o.logCheckboxClickEvent(s),
                                n?.completed ? (o.isUserAuth ? yield o.courseService.toggleProblemComplete(s, a) : o.localStorageService.removeCompletedProblem(s, a),
                                    o.tableProgressService.removeCompletedProblem(n, s)) : (o.isUserAuth ? yield o.courseService.toggleProblemComplete(s, a) : o.localStorageService.addCompletedProblem(s, a),
                                    o.tableProgressService.addCompletedProblem(n, s))
                        })()
                    }
                    toggleRowStarred(t) {
                        var o = this;
                        return (0,
                            h.Z)(function*() {
                            t = o.getRealRowIndex(t);
                            const n = o.rows[t].link
                                , a = o.rows[t].pattern;
                            if (o.logStarClickEvent(a),
                                !o.isUserAuth)
                                return void o.signInState.openSigninModal("Please sign in first.");
                            const s = o.rows[t];
                            s?.starred ? o.tableProgressService.removeStarredProblem(s, a) : o.tableProgressService.addStarredProblem(s, a),
                                yield o.courseService.toggleProblemStarred(a, n)
                        })()
                    }
                    handleOpenCodeDialog() {
                        this.codeModal.handleOpenDialog()
                    }
                    handleOpenVideoDialog() {
                        this.videoModal.handleOpenDialog()
                    }
                    pauseVideo() {
                        this.videoLink = ""
                    }
                    logCheckboxClickEvent(t) {
                        this.analyticsService.logEvent("CHECKBOX_CLICK", {
                            pattern: t
                        })
                    }
                    logStarClickEvent(t) {
                        this.analyticsService.logEvent("STAR_CLICK", {
                            pattern: t
                        })
                    }
                    problemUrlClickHandler(t) {
                        this.analyticsService.logEvent("PROBLEM_URL_CLICK", {
                            pattern: t
                        })
                    }
                    videoClickHandler(t, o) {
                        this.analyticsService.logEvent("VIDEO_CLICK", {
                            pattern: o
                        }),
                            this.handleOpenVideoDialog(),
                            this.videoLink = u.ti + t
                    }
                    codeClickHandler(t, o) {
                        this.codeOpenRow = t;
                        const n = t.code
                            , a = t.pattern;
                        this.rawCodeLink = n,
                            this.analyticsService.logEvent(o + "_CODE_CLICK", {
                                pattern: a
                            });
                        const {directory: O, extension: T} = u._3[o];
                        this.handleCodeLinkClick(`${u.UZ}${O}/${n}.${T}`, o),
                            this.validLangs = [];
                        for (const m of d.F)
                            t[m] && this.validLangs.push(m)
                    }
                    viewOnYoutubeHandler() {
                        this.analyticsService.logEvent("VIEW_ON_YOUTUBE_CLICK")
                    }
                    getViewOnYoutubeLink(t) {
                        return `https://www.youtube.com/watch?v=${t.replace("https://youtube.com/embed/", "")}`
                    }
                    getRealRowIndex(t) {
                        return this.getRowLowerBound() + t
                    }
                    getRowLowerBound() {
                        return (this.currentPage - 1) * this.pageSize
                    }
                    getRowUpperBound() {
                        return Math.min(this.currentPage * this.pageSize, this.rows.length)
                    }
                    getCurrentRows() {
                        return this.isPaginated ? this.rows.slice(this.getRowLowerBound(), this.getRowUpperBound()) : this.rows
                    }
                    moveNextPage() {
                        this.getRowUpperBound() < this.rows.length && (this.currentPage += 1)
                    }
                    movePrevPage() {
                        this.currentPage > 1 && (this.currentPage -= 1)
                    }
                    resetSort() {
                        this.faSortState = null,
                            this.sortedColumn = ""
                    }
                    sortTable(t) {
                        this.sortedColumn === t ? this.faSortState = this.faSortState === l.u9C ? l.foy : l.u9C : (this.sortedColumn = t,
                            this.faSortState = l.u9C),
                            this.sortRows(t, this.faSortState === l.u9C)
                    }
                    sortRows(t, o) {
                        t = t.toLowerCase();
                        const n = {
                            Easy: 0,
                            Medium: 1,
                            Hard: 2
                        };
                        this.rows.sort((a,s)=>"difficulty" === t ? o ? n[a[t]] - n[s[t]] : n[s[t]] - n[a[t]] : a[t] < s[t] ? o ? -1 : 1 : a[t] > s[t] ? o ? 1 : -1 : 0),
                            this.cd.detectChanges()
                    }
                    handleCodeLinkClick(t, o) {
                        this.handleOpenCodeDialog(),
                            this.handleDisplayCode(t, o)
                    }
                    handleDisplayCode(t, o) {
                        this.lang = o,
                            this.codeLink = t,
                            this.githubService.getRawCode(this.codeLink).pipe((0,
                                g.R)(this.destroy$), (0,
                                v.q)(1)).subscribe(n=>{
                                    this.code = "",
                                        this.cd.detectChanges(),
                                        this.code = n.toString()
                                }
                            )
                    }
                    handleCodeClose() {
                        this.codeLink = "",
                            this.code = ""
                    }
                }
                return r.\u0275fac = function(t) {
                    return new (t || r)(e.Y36(w.m2),e.Y36(S.e),e.Y36(e.sBO),e.Y36(L.N),e.Y36(k.K),e.Y36(y.n),e.Y36(A.H),e.Y36(D.j),e.Y36(Z.y))
                }
                    ,
                    r.\u0275cmp = e.Xpm({
                        type: r,
                        selectors: [["app-table"]],
                        viewQuery: function(t, o) {
                            if (1 & t && (e.Gf(K, 5),
                                e.Gf(B, 5)),
                            2 & t) {
                                let n;
                                e.iGM(n = e.CRH()) && (o.codeModal = n.first),
                                e.iGM(n = e.CRH()) && (o.videoModal = n.first)
                            }
                        },
                        inputs: {
                            problemsTopic: ["pattern", "problemsTopic"],
                            rows: ["tableRows", "rows"]
                        },
                        features: [e.TTD],
                        decls: 51,
                        vars: 15,
                        consts: [[1, "my-table-container", "flex-container-col"], ["style", "width: 100%; margin-bottom: 15px; justify-content: end", "class", "flex-container-row", 4, "ngIf"], [1, "table", "is-fullwidth"], [1, "text-center", "table-header", "text-color"], [1, "star-col"], [1, "sortable", "table-header", "text-color", 2, "word-break", "keep-all", 3, "ngClass", "click"], [3, "icon"], [1, "sortable", "text-center", "table-header", "text-color", 2, "word-break", "keep-all", 3, "ngClass", "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["width", "90%", "cancelText", "Close", 3, "modalCanceled"], ["codeModal", ""], [1, "modal-card-head"], [1, "modal-card-title", "flex-container-row"], [3, "validLangs"], [1, "spacer"], ["target", "_blank", 3, "href"], [1, "modal-card-body", "code-card-body"], [3, "code", "lang", 4, "ngIf"], ["width", "70%", "cancelText", "Close", 3, "modalCanceled"], ["videoModal", ""], ["target", "_blank", 3, "href", "click"], [1, "modal-card-body"], [1, "video-outer-container"], [1, "video-container"], ["class", "video", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"], [1, "flex-container-row", 2, "width", "100%", "margin-bottom", "15px", "justify-content", "end"], [2, "font-family", "Arial, Helvetica, sans-serif", "margin-bottom", "0px", "margin-right", "10px", "font-size", "16px"], [1, "button", "is-warning", "is-light", 2, "font-size", "16px", "margin-right", "5px", "height", "2.2rem", 3, "click"], [1, "button", "is-warning", "is-light", 2, "font-size", "16px", "height", "2.2rem", 3, "click"], [3, "ngClass"], [1, "flex-container-row"], [1, "b-checkbox", "checkbox"], ["type", "checkbox", 3, "checked", "click"], [1, "check", "is-success"], [1, "star"], [2, "width", "350px", "overflow-wrap", "break-word"], ["target", "_blank", 1, "table-text", "text-color", 3, "click"], ["class", "has-tooltip-bottom", "target", "_blank", "data-tooltip", "Free Link", 4, "ngIf"], [1, "diff-col"], [1, "flex-container-row", "text-color"], ["id", "diff-btn", 1, "button", "table-button", 3, "ngClass"], ["class", "button navbar-btn video-icon is-rounded is-outlined", "target", "_blank", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["target", "_blank", "data-tooltip", "Free Link", 1, "has-tooltip-bottom"], [1, "my-lock", 3, "icon"], ["target", "_blank", 1, "button", "navbar-btn", "video-icon", "is-rounded", "is-outlined", 3, "click"], ["class", "button navbar-btn is-rounded table-text text-color", "target", "_blank", 3, "click", 4, "ngIf"], ["target", "_blank", 1, "button", "navbar-btn", "is-rounded", "table-text", "text-color", 3, "click"], [3, "code", "lang"], ["title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "video", 3, "src"]],
                        template: function(t, o) {
                            1 & t && (e.TgZ(0, "div", 0),
                                e.YNc(1, J, 7, 4, "div", 1),
                                e.TgZ(2, "table", 2)(3, "thead")(4, "tr")(5, "th")(6, "div", 3),
                                e._uU(7, "Status"),
                                e.qZA()(),
                                e.TgZ(8, "th", 4)(9, "div", 3),
                                e._uU(10, "Star"),
                                e.qZA()(),
                                e.TgZ(11, "th")(12, "div", 5),
                                e.NdJ("click", function() {
                                    return o.sortTable("Problem")
                                }),
                                e._uU(13, "Problem \xa0\xa0"),
                                e._UZ(14, "fa-icon", 6),
                                e.qZA()(),
                                e.TgZ(15, "th", 4)(16, "div", 7),
                                e.NdJ("click", function() {
                                    return o.sortTable("Difficulty")
                                }),
                                e._uU(17, "Difficulty \xa0\xa0"),
                                e._UZ(18, "fa-icon", 6),
                                e.qZA()(),
                                e.TgZ(19, "th")(20, "div", 3),
                                e._uU(21, "Video Solution"),
                                e.qZA()(),
                                e.TgZ(22, "th")(23, "div", 3),
                                e._uU(24, "Code"),
                                e.qZA()()()(),
                                e.TgZ(25, "tbody"),
                                e.YNc(26, Y, 27, 11, "tr", 8),
                                e.qZA()()(),
                                e.TgZ(27, "app-modal", 9, 10),
                                e.NdJ("modalCanceled", function() {
                                    return o.handleCodeClose()
                                }),
                                e.TgZ(29, "header", 11)(30, "h1", 12),
                                e._UZ(31, "app-code-language", 13)(32, "div", 14),
                                e.TgZ(33, "a", 15),
                                e._uU(34, "View on Github"),
                                e.qZA()()(),
                                e.TgZ(35, "section", 16),
                                e.YNc(36, $, 2, 4, "app-code", 17),
                                e.qZA()(),
                                e.TgZ(37, "app-modal", 18, 19),
                                e.NdJ("modalCanceled", function() {
                                    return o.pauseVideo()
                                }),
                                e.TgZ(39, "header", 11)(40, "h1", 12)(41, "span")(42, "b"),
                                e._uU(43, "Video Solution"),
                                e.qZA()(),
                                e._UZ(44, "div", 14),
                                e.TgZ(45, "a", 20),
                                e.NdJ("click", function() {
                                    return o.viewOnYoutubeHandler()
                                }),
                                e._uU(46, "View on Youtube"),
                                e.qZA()()(),
                                e.TgZ(47, "section", 21)(48, "div", 22)(49, "div", 23),
                                e.YNc(50, z, 2, 3, "iframe", 24),
                                e.qZA()()()()),
                            2 & t && (e.xp6(1),
                                e.Q6J("ngIf", o.isPaginated),
                                e.xp6(11),
                                e.Q6J("ngClass", e.VKq(11, x, "Problem" === o.sortedColumn ? "sortedColumn" : "")),
                                e.xp6(2),
                                e.Q6J("icon", "Problem" !== o.sortedColumn ? o.faSort : o.faSortState),
                                e.xp6(2),
                                e.Q6J("ngClass", e.VKq(13, x, "Difficulty" === o.sortedColumn ? "sortedColumn" : "")),
                                e.xp6(2),
                                e.Q6J("icon", "Difficulty" !== o.sortedColumn ? o.faSort : o.faSortState),
                                e.xp6(8),
                                e.Q6J("ngForOf", o.getCurrentRows()),
                                e.xp6(5),
                                e.Q6J("validLangs", o.validLangs),
                                e.xp6(2),
                                e.Q6J("href", o.codeLink, e.LSH),
                                e.xp6(3),
                                e.Q6J("ngIf", o.code),
                                e.xp6(9),
                                e.Q6J("href", o.getViewOnYoutubeLink(o.videoLink), e.LSH),
                                e.xp6(5),
                                e.Q6J("ngIf", !!o.videoLink))
                        },
                        dependencies: [C.mk, C.sg, C.O5, U.BN, R.z, _.QL, d.c, C.i8, I.y],
                        styles: [".my-table-container[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden}.table[_ngcontent-%COMP%]{max-width:1400px}.video-icon[_ngcontent-%COMP%], .table-text[_ngcontent-%COMP%]{font-size:1em}.table-header[_ngcontent-%COMP%]{font-size:.9em}.table-button[_ngcontent-%COMP%]{font-size:.8em}.modal-card-title[_ngcontent-%COMP%]{font-size:1.5em}#diff-btn[_ngcontent-%COMP%]{background-color:transparent}.button.is-success[_ngcontent-%COMP%], .button.is-success[_ngcontent-%COMP%]:hover, .button.is-success[_ngcontent-%COMP%]:focus{color:#00ad5f;border:0px}.button.is-warning[_ngcontent-%COMP%], .button.is-warning[_ngcontent-%COMP%]:hover, .button.is-warning[_ngcontent-%COMP%]:focus{color:#fb0;border:0px}.button.is-danger[_ngcontent-%COMP%], .button.is-danger[_ngcontent-%COMP%]:hover, .button.is-danger[_ngcontent-%COMP%]:focus{color:#ee2f56;border:0px}.sortable[_ngcontent-%COMP%]:hover{cursor:pointer;color:#9a00a5;transition:all .3s ease-in}.sortedColumn[_ngcontent-%COMP%]{color:#9a00a5}.star[_ngcontent-%COMP%]{color:#ffbc14;font-size:1.2rem}a[_ngcontent-%COMP%]:hover{color:#485fc7!important}@media screen and (max-width: 1100px){.video-icon[_ngcontent-%COMP%], .table-text[_ngcontent-%COMP%]{font-size:.9em}.table-header[_ngcontent-%COMP%]{font-size:.8em}.table-button[_ngcontent-%COMP%]{font-size:.7em}.modal-card-title[_ngcontent-%COMP%]{font-size:1.2em}}@media screen and (max-width: 842px){.video-icon[_ngcontent-%COMP%], .table-text[_ngcontent-%COMP%]{font-size:.8em}.table-header[_ngcontent-%COMP%]{font-size:.7em}.table-button[_ngcontent-%COMP%]{font-size:.6em}}@media screen and (max-width: 640px){.video-icon[_ngcontent-%COMP%], .table-text[_ngcontent-%COMP%]{font-size:.7em}.table-header[_ngcontent-%COMP%]{font-size:.6em}.table-button[_ngcontent-%COMP%]{font-size:.5em}.star-col[_ngcontent-%COMP%], .diff-col[_ngcontent-%COMP%]{display:none}}"]
                    }),
                    r
            }
        )()
    }
    ,
    58261: (E,b,i)=>{
        i.d(b, {
            K: ()=>P
        });
        var h = i(21086)
            , l = i(27221)
            , f = i(55062)
            , g = i(80529)
            , v = i(21161);
        let P = (()=>{
                class _ {
                    constructor(d, p) {
                        this.httpClient = d,
                            this.courseService = p
                    }
                    getRawCode(d) {
                        if ("" === d)
                            return (0,
                                h.of)("");
                        const p = d.replace("/blob", "").replace("github", "raw.githubusercontent");
                        return this.httpClient.get(p, {
                            responseType: "text"
                        }).pipe((0,
                            l.K)(e=>this.courseService.getCode(p)))
                    }
                }
                return _.\u0275fac = function(d) {
                    return new (d || _)(f.LFG(g.eN),f.LFG(v.N))
                }
                    ,
                    _.\u0275prov = f.Yz7({
                        token: _,
                        factory: _.\u0275fac,
                        providedIn: "root"
                    }),
                    _
            }
        )()
    }
}]);

