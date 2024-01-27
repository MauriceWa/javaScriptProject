"use strict";
(self.webpackChunkangular_client = self.webpackChunkangular_client || []).push([[2310], {
    72310: (j,m,i)=>{
        i.r(m),
            i.d(m, {
                RoadmapModule: ()=>V
            });
        var s = i(36895)
            , c = i(8929)
            , h = i(7625)
            , f = i(90801);
        const b = [{
            id: "1",
            name: "Climbing Stairs",
            backgroundColor: "#7ae4b5",
            url: "climbing-stairs",
            complete: !0
        }, {
            id: "2",
            name: "Min Cost Climbing Stairs",
            backgroundColor: "#7ae4b5",
            parentId: ["1"],
            url: "min-cost-climbing-stairs"
        }, {
            id: "3",
            name: "House Robber",
            backgroundColor: "#7ae4b5",
            parentId: ["2"],
            url: "house-robber"
        }, {
            id: "4",
            name: "House Robber II",
            backgroundColor: "#fae098",
            parentId: ["3"],
            url: "house-robber-ii",
            complete: !0
        }, {
            id: "5",
            name: "Longest Palindromic Substring",
            backgroundColor: "#f4708a",
            url: "longest-palindromic-substring",
            complete: !0
        }, {
            id: "6",
            name: "Palindromic Substring",
            backgroundColor: "#f4708a",
            url: "palindromic-substrings",
            parentId: ["5"]
        }, {
            id: "7",
            name: "Decode Ways",
            backgroundColor: "#fae098",
            parentId: ["3"],
            url: "decode-ways"
        }, {
            id: "8",
            name: "Coin Change",
            backgroundColor: "#fae098",
            parentId: ["7"],
            url: "coin-change"
        }, {
            id: "9",
            name: "Word Break",
            backgroundColor: "#fae098",
            parentId: ["7"],
            url: "word-break"
        }];
        var e = i(55062)
            , C = i(42982)
            , x = i(31434)
            , _ = i(60312)
            , y = i(3868)
            , k = i(86512)
            , v = i(15861)
            , P = i(50985)
            , w = i(56761)
            , g = i(72594);
        const l = "#FFFFFF"
            , Z = [{
            id: "1",
            name: "Algorithms & Data Structures for Beginners",
            backgroundColor: l,
            imgUrl: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a65736b6-151f-4572-8e10-87b2b75ab100/public",
            link: "/courses/dsa-for-beginners",
            courseId: "dsa-for-beginners",
            hours: 8.5,
            difficulty: g.x.Easy,
            description: "Learn the foundations of coding interviews."
        }, {
            id: "2",
            name: "Advanced Algorithms",
            backgroundColor: l,
            parentId: ["1"],
            imgUrl: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dd1abac9-220d-4c4d-a8c5-d755e2606800/public",
            link: "/courses/advanced-algorithms",
            courseId: "advanced-algorithms",
            hours: 8,
            difficulty: g.x.Hard,
            description: "Learn every algorithm you would ever need."
        }, {
            id: "3",
            name: "System Design for Beginners",
            backgroundColor: l,
            parentId: ["1"],
            imgUrl: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/cbf83d3b-b930-44e4-762e-df0e89ea5400/public",
            link: "/courses/system-design-for-beginners",
            courseId: "system-design-for-beginners",
            hours: 6,
            difficulty: g.x.Medium,
            description: "Learn the foundations of system design interviews."
        }, {
            id: "4",
            name: "System Design Interview",
            backgroundColor: l,
            parentId: ["3"],
            imgUrl: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0c64daac-e358-48b1-91f5-7d4953b40600/public",
            link: "/courses/system-design-interview",
            courseId: "system-design-interview",
            hours: 4.5,
            difficulty: g.x.Medium,
            description: "Learn common system design interviews questions."
        }, {
            id: "5",
            name: "Object Oriented Design Interviews",
            backgroundColor: l,
            parentId: ["1"],
            imgUrl: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/f96cc9c7-0515-4283-883c-14d346094400/public",
            link: "/courses/ood-interview",
            courseId: "ood-interview",
            hours: 4.5,
            difficulty: g.x.Medium,
            description: "Learn Object Oriented Design interview questions."
        }, {
            id: "6",
            backgroundColor: l,
            parentId: ["3"],
            courseId: "full-stack-dev",
            link: "/courses/full-stack-dev",
            name: "Full Stack Development",
            description: "Learn how to build an intermediate full stack app.",
            hours: 5.5,
            difficulty: g.x.Medium,
            imgUrl: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/8efc4993-9666-4ceb-c1cb-f1686cbcc300/public",
            newCourse: !0
        }];
        var M = i(16256)
            , O = i(21161)
            , p = i(38069)
            , T = i(86514);
        function A(o, r) {
            if (1 & o && (e.ynx(0),
                e._UZ(1, "progress", 17),
                e.TgZ(2, "p"),
                e._uU(3),
                e.qZA(),
                e.BQk()),
            2 & o) {
                const t = e.oxw().$implicit
                    , n = e.oxw();
                e.xp6(1),
                    e.uIk("value", n.getProgress(t))("max", n.getTotalCourseLength(t)),
                    e.xp6(2),
                    e.AsE("", n.getProgress(t), " / ", n.getTotalCourseLength(t), "")
            }
        }
        function E(o, r) {
            if (1 & o && (e.TgZ(0, "label", 18),
                e._uU(1),
                e.qZA()),
            2 & o) {
                const t = e.oxw().$implicit
                    , n = e.oxw();
                e.Q6J("ngClass", n.getStyleFromDifficulty(t.data.difficulty)),
                    e.xp6(1),
                    e.hij(" ", t.data.difficulty, " ")
            }
        }
        function U(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.O4$(),
                    e.TgZ(0, "g", 6)(1, "foreignObject"),
                    e.kcU(),
                    e.TgZ(2, "div", 7),
                    e.NdJ("click", function() {
                        const d = e.CHM(t).$implicit
                            , u = e.oxw();
                        return e.KtG(u.handleCourseClick(d))
                    }),
                    e.O4$(),
                    e.TgZ(3, "svg", 8),
                    e._UZ(4, "image", 9),
                    e.qZA(),
                    e.kcU(),
                    e.TgZ(5, "h1", 10)(6, "b"),
                    e._uU(7),
                    e.qZA()(),
                    e.TgZ(8, "p", 11),
                    e._uU(9),
                    e.qZA(),
                    e._UZ(10, "div", 12),
                    e.YNc(11, A, 4, 4, "ng-container", 13),
                    e.TgZ(12, "span", 14)(13, "label", 15),
                    e._uU(14),
                    e.qZA(),
                    e.YNc(15, E, 2, 2, "label", 16),
                    e.qZA()()()()
            }
            if (2 & o) {
                const t = r.$implicit
                    , n = e.oxw();
                e.uIk("width", n.nodeWidth)("height", n.nodeHeight),
                    e.xp6(1),
                    e.uIk("width", n.nodeWidth)("height", n.nodeHeight),
                    e.xp6(1),
                    e.Udp("height", n.nodeHeight - 8, "px"),
                    e.xp6(1),
                    e.uIk("width", n.nodeWidth)("height", n.nodeHeight - 200),
                    e.xp6(1),
                    e.uIk("href", n.getImgUrl(t)),
                    e.xp6(3),
                    e.Oqu(t.label),
                    e.xp6(2),
                    e.hij(" ", t.data.description, " "),
                    e.xp6(2),
                    e.Q6J("ngIf", 0 !== n.getProgress(t)),
                    e.xp6(3),
                    e.hij("", t.data.hours, " hours"),
                    e.xp6(1),
                    e.Q6J("ngIf", !!t.data.difficulty)
            }
        }
        function I(o, r) {
            1 & o && (e.O4$(),
                e.TgZ(0, "marker", 19),
                e._UZ(1, "path", 20),
                e.qZA())
        }
        function S(o, r) {
            1 & o && (e.O4$(),
                e.TgZ(0, "g", 21),
                e._UZ(1, "path", 22),
                e.qZA())
        }
        let D = (()=>{
                class o {
                    constructor(t, n, a) {
                        this.authService = t,
                            this.courseService = n,
                            this.router = a,
                            this.rotating = !1,
                            this.nodeWidth = 450,
                            this.nodeHeight = 9 * this.nodeWidth / 16 + 200,
                            this.draggingEnabled = !1,
                            this.panningEnabled = !1,
                            this.zoomingEnabled = !1,
                            this.graphData = [],
                            this.destroy$ = new c.xQ,
                            this.nodes = [],
                            this.links = [],
                            this.layoutSettings = {
                                orientation: "TB"
                            },
                            this.curve = w.Z,
                            this.layout = new P.gD,
                            this.zoomToFit$ = new c.xQ,
                            this.center$ = new c.xQ,
                            this.courseStats = {},
                            this.graphData = Z
                    }
                    ngOnInit() {
                        var t = this;
                        return (0,
                            v.Z)(function*() {
                            t.rotating && (t.graphData = t.graphData.slice(0, 10)),
                                t.authService.getAuthState().pipe((0,
                                    h.R)(t.destroy$)).subscribe(n=>{
                                        n && t.courseService.getUserStats().then(a=>t.courseStats = a.courses)
                                    }
                                );
                            for (const n of t.graphData)
                                t.nodes.push({
                                    id: n.id,
                                    label: n.name,
                                    data: {
                                        courseId: n.courseId,
                                        backgroundColor: n.backgroundColor,
                                        imgUrl: n.imgUrl,
                                        link: n.link,
                                        description: n.description,
                                        hours: n.hours,
                                        difficulty: n.difficulty
                                    }
                                });
                            for (const n of t.graphData)
                                if (n.parentId)
                                    for (const a of n.parentId)
                                        t.links.push({
                                            source: a,
                                            target: n.id,
                                            label: "",
                                            data: {}
                                        })
                        })()
                    }
                    ngAfterViewInit() {}
                    ngOnDestroy() {
                        this.destroy$.next(!0),
                            this.destroy$.complete()
                    }
                    getStyles(t) {
                        return {
                            "background-color": t.data.backgroundColor
                        }
                    }
                    getStyleFromDifficulty(t) {
                        switch (t) {
                            case "Easy":
                                return "is-success";
                            case "Medium":
                                return "is-warning";
                            case "Hard":
                                return "is-danger";
                            default:
                                return ""
                        }
                    }
                    getImgUrl(t) {
                        return t.data.imgUrl
                    }
                    resetGraph() {
                        this.center$.next(!0),
                            this.zoomToFit$.next(!0),
                            this.center$.next(!0),
                            this.zoomToFit$.next(!0)
                    }
                    getProgress(t) {
                        return this.courseStats[t.data.courseId]?.completed || 0
                    }
                    getTotalCourseLength(t) {
                        return this.courseStats[t.data.courseId]?.total || 0
                    }
                    getNodeName(t) {
                        return t.replace("Dynamic Programming", "DP")
                    }
                    handleCourseClick(t) {
                        t.data.link && this.router.navigate([t.data.link])
                    }
                }
                return o.\u0275fac = function(t) {
                    return new (t || o)(e.Y36(M.e),e.Y36(O.N),e.Y36(p.F0))
                }
                    ,
                    o.\u0275cmp = e.Xpm({
                        type: o,
                        selectors: [["app-course-graph"]],
                        inputs: {
                            rotating: "rotating",
                            nodeWidth: "nodeWidth",
                            nodeHeight: "nodeHeight",
                            draggingEnabled: "draggingEnabled",
                            panningEnabled: "panningEnabled",
                            zoomingEnabled: "zoomingEnabled",
                            graphData: "graphData"
                        },
                        decls: 9,
                        vars: 15,
                        consts: [[1, "graph-page-container", 3, "ngClass"], [1, "graph-container", 3, "ngClass"], [3, "links", "nodes", "layout", "nodeWidth", "nodeHeight", "draggingEnabled", "panningEnabled", "layoutSettings", "autoZoom", "autoCenter", "enableZoom", "center$", "zoomToFit$"], ["nodeTemplate", ""], ["defsTemplate", ""], ["linkTemplate", ""], ["xmlns", "http://www.w3.org/2000/xhtml", 1, "node"], ["xmlns", "http://www.w3.org/1999/xhtml", 1, "cardContainer", "cursor-hand", "my-card", 3, "click"], [1, "course-cover"], ["width", "100%", "height", "100%", "preserveAspectRatio", "none"], [1, "course-title"], [1, "course-desc"], [1, "spacer"], [4, "ngIf"], [1, "course-info", 2, "margin-bottom", "5px"], [1, "my-card-tag", "button", "is-info"], ["class", "my-card-tag button", 3, "ngClass", 4, "ngIf"], [1, "progress", "is-small", "is-success"], [1, "my-card-tag", "button", 3, "ngClass"], ["id", "arrow", "viewBox", "0 -5 10 10", "refX", "8", "refY", "0", "markerWidth", "20", "markerHeight", "4", "orient", "auto"], ["d", "M0,-5L10,0L0,5", "fill", "white", 1, "arrow-head"], [1, "edge"], ["stroke-width", "4.5", "stroke", "white", "marker", "white", "marker-end", "url(#arrow)", 1, "line"]],
                        template: function(t, n) {
                            1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "ngx-graph", 2),
                                e.YNc(3, U, 16, 14, "ng-template", null, 3, e.W1O),
                                e.YNc(5, I, 2, 0, "ng-template", null, 4, e.W1O),
                                e.YNc(7, S, 2, 0, "ng-template", null, 5, e.W1O),
                                e.qZA()()()),
                            2 & t && (e.Q6J("ngClass", n.rotating ? "outer-rotating" : ""),
                                e.xp6(1),
                                e.Q6J("ngClass", n.rotating ? "rotating-container" : ""),
                                e.xp6(1),
                                e.Q6J("links", n.links)("nodes", n.nodes)("layout", n.layout)("nodeWidth", n.nodeWidth)("nodeHeight", n.nodeHeight)("draggingEnabled", n.draggingEnabled)("panningEnabled", n.panningEnabled)("layoutSettings", n.layoutSettings)("autoZoom", !0)("autoCenter", !0)("enableZoom", n.zoomingEnabled)("center$", n.center$)("zoomToFit$", n.zoomToFit$))
                        },
                        dependencies: [s.mk, s.O5, T.B$],
                        styles: [".graph-page-container[_ngcontent-%COMP%]{height:inherit;width:inherit}.graph-container[_ngcontent-%COMP%]{padding:0;height:inherit;width:inherit}h1[_ngcontent-%COMP%]{font-size:24px;margin-bottom:5px;text-align:center}p[_ngcontent-%COMP%]{text-align:center}.panel-progress[_ngcontent-%COMP%]{width:50%;margin-top:10px;margin-bottom:10px;max-width:500px}.progress[_ngcontent-%COMP%]{margin-top:.7rem;margin-bottom:.3rem;height:.6rem;width:70%}.sidebar-metadata[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]    {overflow:hidden!important;display:block;height:inherit;width:inherit}[_nghost-%COMP%]     .ngx-charts-outer{background-color:inherit!important}[_nghost-%COMP%]     .cardContainer:hover{border-radius:0;transition:all .3s ease!important}[_nghost-%COMP%]     .is-info{background-color:#3e8ed0!important}[_nghost-%COMP%]     .is-success{background-color:#48c78e!important}[_nghost-%COMP%]     .is-danger{background-color:#f14668!important}[_nghost-%COMP%]     .is-warning{background-color:#ffe08a!important;color:#000000b3!important}[_nghost-%COMP%]     .cardContainer{transition:all .3s ease;border-radius:8px;height:60px;display:block;pointer-events:all}[_nghost-%COMP%]     .cardContainer .course-cover{border-top-left-radius:8px;border-top-right-radius:8px}[_nghost-%COMP%]     .cardContainer .course-cover:hover{border-top-left-radius:0;border-top-right-radius:0}[_nghost-%COMP%]     .cardContainer .button{background-color:transparent;border-color:transparent}[_nghost-%COMP%]     .cardContainer button{margin-top:15px;max-width:200px}[_nghost-%COMP%]     .cardContainer .button:hover{background-color:transparent;border-color:transparent}[_nghost-%COMP%]     .cardContainer label{color:#fff;text-align:center;font-size:18px;font-weight:700;margin-top:4px;margin-bottom:8px;padding-top:2px}[_nghost-%COMP%]     .cardContainer .small-label{font-size:14px}[_nghost-%COMP%]     .cardContainer .progress{margin:5px 5% 10px;width:90%;height:.5rem!important}[_nghost-%COMP%]     .cardContainer .progress::-webkit-progress-value{-webkit-transition:width .3s ease;transition:width .3s ease}[_nghost-%COMP%]     .linkMidpoint ellipse{fill:#fff;stroke:#000;stroke-width:1}[_nghost-%COMP%]     .linkMidpoint text{stroke:transparent;fill:#000;text-anchor:middle;font-size:10px}.course-title[_ngcontent-%COMP%]{margin-top:8px;font-size:21px;padding-left:20px;padding-right:20px}.course-info[_ngcontent-%COMP%], .course-desc[_ngcontent-%COMP%]{margin-top:10px}.course-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.my-card-tag[_ngcontent-%COMP%]{font-size:11px!important;font-weight:700!important;height:26px!important;border-radius:6px!important;padding:4px!important;margin:7px}.my-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-self:auto!important}.spacer[_ngcontent-%COMP%]{flex:1}"]
                    }),
                    o
            }
        )();
        var z = i(48635);
        const R = ["graph"]
            , G = ["courseGraph"]
            , $ = ["aboutModal"]
            , J = ["settingsModal"];
        function Q(o, r) {
            if (1 & o && e._UZ(0, "app-graph", 38, 39),
            2 & o) {
                const t = e.oxw();
                e.Q6J("draggingEnabled", t.draggingEnabled)("panningEnabled", t.panningEnabled)("zoomingEnabled", t.zoomingEnabled)
            }
        }
        function H(o, r) {
            if (1 & o && e._UZ(0, "app-course-graph", 38, 40),
            2 & o) {
                const t = e.oxw();
                e.Q6J("draggingEnabled", t.draggingEnabled)("panningEnabled", t.panningEnabled)("zoomingEnabled", t.zoomingEnabled)
            }
        }
        function L(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "button", 41),
                    e.NdJ("click", function() {
                        const d = e.CHM(t).$implicit
                            , u = e.oxw();
                        return e.KtG(u.switchRoadmap(d))
                    }),
                    e.TgZ(1, "span", 42),
                    e._uU(2),
                    e.qZA()()
            }
            if (2 & o) {
                const t = r.$implicit
                    , n = e.oxw();
                e.Q6J("ngClass", t === n.currentRoadmap ? "selected" : ""),
                    e.xp6(1),
                    e.Q6J("ngClass", t === n.currentRoadmap ? "selected-text" : ""),
                    e.xp6(1),
                    e.Oqu(t)
            }
        }
        function F(o, r) {
            if (1 & o && (e.ynx(0),
                e.TgZ(1, "p", 43),
                e._uU(2),
                e.qZA(),
                e._UZ(3, "progress", 44),
                e.BQk()),
            2 & o) {
                const t = e.oxw();
                e.xp6(2),
                    e.Oqu(t.completedRowsFraction),
                    e.xp6(1),
                    e.uIk("value", t.progressPercent)
            }
        }
        function N(o, r) {
            if (1 & o && (e._UZ(0, "iframe", 45),
                e.ALo(1, "safe")),
            2 & o) {
                const t = e.oxw();
                e.Q6J("src", e.lcZ(1, 1, t.embedVideoLink), e.uOi)
            }
        }
        let q = (()=>{
                class o {
                    constructor(t, n) {
                        this.localStorage = t,
                            this.tableProgressService = n,
                            this.draggingEnabled = this.localStorage.getGraphDragging(),
                            this.panningEnabled = this.localStorage.getGraphPanning(),
                            this.zoomingEnabled = this.localStorage.getGraphZooming(),
                            this.currentCompleteCount = 0,
                            this.progressPercent = 0,
                            this.completedRowsFraction = "",
                            this.currentTotalCount = 150,
                            this.faQuestion = f.Psp,
                            this.faSortDown = f.u9C,
                            this.embedVideoLink = "",
                            this.currentRoadmap = "Algorithms",
                            this.roadmaps = ["Algorithms", "Courses"],
                            this.dropdownOpen = !1,
                            this.dynamicProgrammingData = b,
                            this.destroy$ = new c.xQ
                    }
                    ngOnInit() {
                        const n = new URLSearchParams(window.location.search).get("map")?.split(" ").map(a=>a.charAt(0).toUpperCase() + a.slice(1)).join(" ");
                        n && this.roadmaps.includes(n) && (this.currentRoadmap = n),
                            this.tableProgressService.resetTableState(),
                            this.tableProgressService.getTotalProgress$().pipe((0,
                                h.R)(this.destroy$)).subscribe(a=>{
                                    this.updateCompletionCount(a)
                                }
                            )
                    }
                    ngAfterViewInit() {}
                    ngOnDestroy() {
                        this.destroy$.next(!0),
                            this.destroy$.complete()
                    }
                    toggleDragging() {
                        this.draggingEnabled = !this.draggingEnabled,
                            this.localStorage.setGraphDragging(this.draggingEnabled)
                    }
                    togglePanning() {
                        this.panningEnabled = !this.panningEnabled,
                            this.localStorage.setGraphPanning(this.panningEnabled)
                    }
                    toggleZooming() {
                        this.zoomingEnabled = !this.zoomingEnabled,
                            this.localStorage.setGraphZooming(this.zoomingEnabled)
                    }
                    resetGraph() {
                        this.graph.resetGraph()
                    }
                    updateCompletionCount(t) {
                        setTimeout(()=>{
                                this.currentCompleteCount = t,
                                    this.progressPercent = this.currentCompleteCount / this.currentTotalCount * 100,
                                    this.completedRowsFraction = `(${this.currentCompleteCount} / ${this.currentTotalCount})`
                            }
                        )
                    }
                    openAboutModal() {
                        this.embedVideoLink = "https://www.youtube.com/embed/jgQjes7MgTM",
                            this.aboutModal.handleOpenDialog()
                    }
                    openSettingsModal() {
                        this.settingsModal.handleOpenDialog()
                    }
                    pauseVideo() {
                        this.embedVideoLink = ""
                    }
                    switchRoadmap(t) {
                        this.currentRoadmap = t,
                            this.closeDropdown()
                    }
                    toggleDropdown() {
                        this.dropdownOpen = !this.dropdownOpen
                    }
                    closeDropdown() {
                        this.dropdownOpen = !1
                    }
                }
                return o.\u0275fac = function(t) {
                    return new (t || o)(e.Y36(C.n),e.Y36(x.H))
                }
                    ,
                    o.\u0275cmp = e.Xpm({
                        type: o,
                        selectors: [["app-page"]],
                        viewQuery: function(t, n) {
                            if (1 & t && (e.Gf(R, 5),
                                e.Gf(G, 5),
                                e.Gf($, 5),
                                e.Gf(J, 5)),
                            2 & t) {
                                let a;
                                e.iGM(a = e.CRH()) && (n.graph = a.first),
                                e.iGM(a = e.CRH()) && (n.courseGraph = a.first),
                                e.iGM(a = e.CRH()) && (n.aboutModal = a.first),
                                e.iGM(a = e.CRH()) && (n.settingsModal = a.first)
                            }
                        },
                        decls: 79,
                        vars: 9,
                        consts: [[1, "flex-container", "page-container"], [1, "graph-grid"], [3, "draggingEnabled", "panningEnabled", "zoomingEnabled", 4, "ngIf"], [1, "graph-menu-container", "my-card", 2, "justify-content", "space-between"], [1, "flex-container-col", 2, "width", "100%"], [1, "flex-container-row", 2, "margin-top", "10px", "margin-bottom", "20px", "flex-wrap", "wrap"], ["class", "button is-rounded navbar-btn", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "flex-container-row", 2, "justify-content", "space-between", "width", "100%", "margin-bottom", "40px"], ["data-tooltip", "Reset graph position", 1, "navbar-btn", "button", "has-tooltip-right", 3, "click"], ["data-tooltip", "What is this?", 1, "navbar-btn", "about-btn", "button", "has-tooltip-left", 3, "click"], [1, "pro-icon", 3, "icon"], ["data-tooltip", "Settings", 1, "navbar-btn", "about-btn", "button", "has-tooltip-left", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "1.5em", "height", "1.5em", "fill", "currentColor"], ["fill-rule", "evenodd", "d", "M7.174 5.619a8.064 8.064 0 011.635-.946l.29-1.158A2 2 0 0111.039 2h1.922a2 2 0 011.94 1.515l.29 1.158c.584.252 1.132.57 1.635.946l1.15-.329a2 2 0 012.282.923l.961 1.665a2 2 0 01-.342 2.437l-.86.832a8.151 8.151 0 010 1.888l.86.83a2 2 0 01.342 2.438l-.96 1.665a2 2 0 01-2.283.923l-1.15-.329a8.063 8.063 0 01-1.635.946l-.29 1.158a2 2 0 01-1.94 1.515H11.04a2 2 0 01-1.94-1.515l-.29-1.158a8.064 8.064 0 01-1.635-.946l-1.15.329a2 2 0 01-2.282-.923l-.961-1.665a2 2 0 01.342-2.437l.86-.831a8.158 8.158 0 010-1.889l-.86-.83a2 2 0 01-.342-2.438l.96-1.665a2 2 0 012.283-.923l1.15.329zm-1.7 1.594l-.961 1.665 1.57 1.518-.114.982a6.157 6.157 0 000 1.425l.114.982-1.57 1.518.96 1.665 2.104-.601.794.593c.38.284.793.523 1.23.711l.908.392.53 2.118h1.922l.53-2.118.909-.392a6.07 6.07 0 001.23-.711l.793-.593 2.103.601.961-1.665-1.57-1.518.114-.982a6.172 6.172 0 000-1.425l-.114-.982 1.57-1.518-.96-1.665-2.104.601-.794-.593a6.067 6.067 0 00-1.23-.71l-.908-.392L12.96 4H11.04l-.53 2.119-.909.391a6.064 6.064 0 00-1.23.711l-.793.593-2.103-.601zM12 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z", "clip-rule", "evenodd"], ["cancelText", "Close", 3, "modalCanceled"], ["aboutModal", ""], [1, "modal-card-head"], [1, "modal-card-title", "flex-container-row"], [1, "modal-card-body"], [1, "content", 2, "font-size", "18px"], [1, "bold-font"], ["routerLink", "/practice"], [1, "video-outer-container"], [1, "video-container"], ["class", "video", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["cancelText", "Close"], ["settingsModal", ""], [1, "toggle-container"], ["data-tooltip", "Drag individual topics", 1, "field", "has-tooltip-bottom"], ["id", "toggleDragging", "type", "checkbox", "name", "toggleDragging", 1, "switch", "is-rounded", "is-normal", "is-info", 3, "checked", "click"], ["for", "toggleDragging", 1, "toggle-label", 2, "font-weight", "bold"], ["data-tooltip", "Drag the roadmap", 1, "field", "has-tooltip-bottom"], ["id", "togglePanning", "type", "checkbox", "name", "togglePanning", 1, "switch", "is-rounded", "is-info", 3, "checked", "click"], ["for", "togglePanning", 1, "toggle-label", 2, "font-weight", "bold"], ["data-tooltip", "Zoom by scrolling", 1, "field", "has-tooltip-bottom"], ["id", "toggleZooming", "type", "checkbox", "name", "toggleZooming", 1, "switch", "is-rounded", "is-info", 3, "checked", "click"], ["for", "toggleZooming", 1, "toggle-label", 2, "font-weight", "bold"], [3, "draggingEnabled", "panningEnabled", "zoomingEnabled"], ["graph", ""], ["courseGraph", ""], [1, "button", "is-rounded", "navbar-btn", 3, "ngClass", "click"], [3, "ngClass"], [2, "margin-top", "15px"], ["max", "100", 1, "progress", "is-small", "is-success"], ["title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "video", 3, "src"]],
                        template: function(t, n) {
                            1 & t && (e.TgZ(0, "div", 0)(1, "div", 1),
                                e.YNc(2, Q, 2, 3, "app-graph", 2),
                                e.YNc(3, H, 2, 3, "app-course-graph", 2),
                                e.qZA(),
                                e.TgZ(4, "div", 3)(5, "div", 4)(6, "p"),
                                e._uU(7, "Select Roadmap"),
                                e.qZA(),
                                e.TgZ(8, "div", 5),
                                e.YNc(9, L, 3, 3, "button", 6),
                                e.qZA(),
                                e.YNc(10, F, 4, 2, "ng-container", 7),
                                e.qZA(),
                                e.TgZ(11, "div", 8)(12, "button", 9),
                                e.NdJ("click", function() {
                                    return n.resetGraph()
                                }),
                                e.TgZ(13, "span"),
                                e._uU(14, "Reset"),
                                e.qZA()(),
                                e.TgZ(15, "button", 10),
                                e.NdJ("click", function() {
                                    return n.openAboutModal()
                                }),
                                e._UZ(16, "fa-icon", 11),
                                e.qZA(),
                                e.TgZ(17, "button", 12),
                                e.NdJ("click", function() {
                                    return n.openSettingsModal()
                                }),
                                e.O4$(),
                                e.TgZ(18, "svg", 13),
                                e._UZ(19, "path", 14),
                                e.qZA()()()()(),
                                e.kcU(),
                                e.TgZ(20, "app-modal", 15, 16),
                                e.NdJ("modalCanceled", function() {
                                    return n.pauseVideo()
                                }),
                                e.TgZ(22, "header", 17)(23, "h1", 18)(24, "span")(25, "b"),
                                e._uU(26, "About"),
                                e.qZA()()()(),
                                e.TgZ(27, "section", 19)(28, "div", 20)(29, "p"),
                                e._uU(30, "This graph shows the recommended order to learn different algorithms topics."),
                                e.qZA(),
                                e.TgZ(31, "ul")(32, "li"),
                                e._uU(33, "Clicking each topic will open a list of problems for that topic."),
                                e.qZA(),
                                e.TgZ(34, "li"),
                                e._uU(35, "The problems list is identical to the "),
                                e.TgZ(36, "span", 21),
                                e._uU(37, "Neetcode 150"),
                                e.qZA(),
                                e._uU(38, " which can be found in the "),
                                e.TgZ(39, "a", 22)(40, "b"),
                                e._uU(41, "Practice"),
                                e.qZA()(),
                                e._uU(42, " page."),
                                e.qZA(),
                                e.TgZ(43, "li"),
                                e._uU(44, "Get stuck? I've created a detailed \u{1f3a5} "),
                                e.TgZ(45, "span", 21),
                                e._uU(46, "video explanation"),
                                e.qZA(),
                                e._uU(47, " for each problem."),
                                e.qZA(),
                                e.TgZ(48, "li"),
                                e._uU(49, "So far we have code solutions for "),
                                e.TgZ(50, "b"),
                                e._uU(51, "[Python, Java, JavaScript, C++]"),
                                e.qZA(),
                                e._uU(52, "."),
                                e.qZA()(),
                                e.TgZ(53, "p"),
                                e._uU(54, "See below for more details"),
                                e.qZA()(),
                                e.TgZ(55, "div", 23)(56, "div", 24),
                                e.YNc(57, N, 2, 3, "iframe", 25),
                                e.qZA()()()(),
                                e.TgZ(58, "app-modal", 26, 27)(60, "header", 17)(61, "h1", 18)(62, "span")(63, "b"),
                                e._uU(64, "Settings"),
                                e.qZA()()()(),
                                e.TgZ(65, "section", 19)(66, "div", 28)(67, "div", 29)(68, "input", 30),
                                e.NdJ("click", function() {
                                    return n.toggleDragging()
                                }),
                                e.qZA(),
                                e.TgZ(69, "label", 31),
                                e._uU(70, "Enable Dragging"),
                                e.qZA()(),
                                e.TgZ(71, "div", 32)(72, "input", 33),
                                e.NdJ("click", function() {
                                    return n.togglePanning()
                                }),
                                e.qZA(),
                                e.TgZ(73, "label", 34),
                                e._uU(74, "Enable Panning"),
                                e.qZA()(),
                                e.TgZ(75, "div", 35)(76, "input", 36),
                                e.NdJ("click", function() {
                                    return n.toggleZooming()
                                }),
                                e.qZA(),
                                e.TgZ(77, "label", 37),
                                e._uU(78, "Enable Zooming"),
                                e.qZA()()()()()),
                            2 & t && (e.xp6(2),
                                e.Q6J("ngIf", "Algorithms" === n.currentRoadmap),
                                e.xp6(1),
                                e.Q6J("ngIf", "Courses" === n.currentRoadmap),
                                e.xp6(6),
                                e.Q6J("ngForOf", n.roadmaps),
                                e.xp6(1),
                                e.Q6J("ngIf", "Algorithms" === n.currentRoadmap),
                                e.xp6(6),
                                e.Q6J("icon", n.faQuestion),
                                e.xp6(41),
                                e.Q6J("ngIf", !!n.embedVideoLink),
                                e.xp6(11),
                                e.Q6J("checked", n.draggingEnabled),
                                e.xp6(4),
                                e.Q6J("checked", n.panningEnabled),
                                e.xp6(4),
                                e.Q6J("checked", n.zoomingEnabled))
                        },
                        dependencies: [s.mk, s.sg, s.O5, _.z, y.BN, k.B, D, p.yS, z.y],
                        styles: [".flex-container[_ngcontent-%COMP%]{display:flex;margin-top:0}.graph-grid[_ngcontent-%COMP%]{flex:1;height:100vh;margin:0}.graph-menu-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;overflow:hidden;flex:0 0 25%;padding:15px;margin:7px;max-width:300px}.toggle-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:15px}.graph-grid[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]{max-height:100vh}.field[_ngcontent-%COMP%]{margin-bottom:0}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:x-large}.button[_ngcontent-%COMP%]{margin-top:10px}h1[_ngcontent-%COMP%], .toggle-container[_ngcontent-%COMP%]{margin-bottom:12px}progress[_ngcontent-%COMP%]{margin-bottom:15px}p[_ngcontent-%COMP%]{margin-bottom:5px}p[_ngcontent-%COMP%]{text-align:center}.x-large-font[_ngcontent-%COMP%]{font-size:24px}.button[_ngcontent-%COMP%]{padding:0 .5em;color:#000}@media screen and (max-width: 842px){.flex-container[_ngcontent-%COMP%]{flex-direction:column-reverse}.toggle-container[_ngcontent-%COMP%]{flex-direction:row}.toggle-container[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{margin-right:10px}.x-large-font[_ngcontent-%COMP%]{font-size:20px}.graph-menu-container[_ngcontent-%COMP%]{display:none}}.selected[_ngcontent-%COMP%]{background-color:#3e8ed0}.selected-text[_ngcontent-%COMP%], .toggle-btn[_ngcontent-%COMP%], a[_ngcontent-%COMP%], .toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.selected-item[_ngcontent-%COMP%]{background-color:#fff;color:#000}"]
                    }),
                    o
            }
        )();
        var W = i(20990);
        const Y = [{
            path: "",
            component: q
        }];
        let V = (()=>{
                class o {
                }
                return o.\u0275fac = function(t) {
                    return new (t || o)
                }
                    ,
                    o.\u0275mod = e.oAB({
                        type: o
                    }),
                    o.\u0275inj = e.cJS({
                        imports: [s.ez, W.m, p.Bz.forChild(Y)]
                    }),
                    o
            }
        )()
    }
}]);
