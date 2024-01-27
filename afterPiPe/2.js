"use strict";
(self.webpackChunkangular_client = self.webpackChunkangular_client || []).push([[1293], {
    72594: (B,O,c)=>{
        c.d(O, {
            g: ()=>k,
            x: ()=>p
        });
        var x = c(8929)
            , w = c(7625)
            , t = c(55062)
            , y = c(96774)
            , L = c(16256)
            , A = c(21161)
            , T = c(42982)
            , S = c(38069)
            , _ = c(36895);
        function e(a, f) {
            1 & a && (t.TgZ(0, "button", 13),
                t._uU(1, "New"),
                t.qZA())
        }
        function d(a, f) {
            1 & a && (t.TgZ(0, "button", 14),
                t._uU(1, "Coming Soon"),
                t.qZA())
        }
        function s(a, f) {
            if (1 & a && (t.ynx(0),
                t._UZ(1, "progress", 15),
                t.TgZ(2, "p"),
                t._uU(3),
                t.qZA(),
                t.BQk()),
            2 & a) {
                const o = t.oxw().$implicit
                    , g = t.oxw();
                t.xp6(1),
                    t.Q6J("value", g.courseStats[o.courseId].completed)("max", g.courseStats[o.courseId].total),
                    t.xp6(2),
                    t.AsE("", g.courseStats[o.courseId].completed, " / ", g.courseStats[o.courseId].total, "")
            }
        }
        function m(a, f) {
            if (1 & a && (t.TgZ(0, "p", 16),
                t._uU(1),
                t.qZA()),
            2 & a) {
                const o = t.oxw().$implicit;
                t.xp6(1),
                    t.hij("", o.hours, " hours")
            }
        }
        function l(a, f) {
            1 & a && (t.TgZ(0, "p", 16),
                t._uU(1, "In-Progress"),
                t.qZA())
        }
        function v(a, f) {
            if (1 & a && (t.TgZ(0, "p", 17),
                t._uU(1),
                t.qZA()),
            2 & a) {
                const o = t.oxw().$implicit
                    , g = t.oxw();
                t.Q6J("ngClass", g.getStyleFromDifficulty(o.difficulty)),
                    t.xp6(1),
                    t.hij(" ", o.difficulty, " ")
            }
        }
        const P = function(a, f) {
            return {
                "cursor-not-allowed has-tooltip-bottom": a,
                "cursor-hand": f
            }
        };
        function E(a, f) {
            if (1 & a) {
                const o = t.EpF();
                t.TgZ(0, "div", 2),
                    t.NdJ("click", function() {
                        const D = t.CHM(o).$implicit
                            , I = t.oxw();
                        return t.KtG(I.handleCourseClick(D))
                    }),
                    t.YNc(1, e, 2, 0, "button", 3),
                    t.YNc(2, d, 2, 0, "button", 4),
                    t._UZ(3, "img", 5),
                    t.TgZ(4, "h1", 6),
                    t._uU(5),
                    t.qZA(),
                    t.TgZ(6, "p", 7),
                    t._uU(7),
                    t.qZA(),
                    t._UZ(8, "div", 8),
                    t.YNc(9, s, 4, 4, "ng-container", 9),
                    t.TgZ(10, "span", 10),
                    t.YNc(11, m, 2, 1, "p", 11),
                    t.YNc(12, l, 2, 0, "p", 11),
                    t._uU(13, " \xa0 "),
                    t.YNc(14, v, 2, 2, "p", 12),
                    t.qZA()()
            }
            if (2 & a) {
                const o = f.$implicit
                    , g = t.oxw();
                t.Q6J("ngClass", t.WLB(11, P, null == o ? null : o.comingSoon, !(null != o && o.comingSoon))),
                    t.uIk("data-tooltip", null != o && o.comingSoon ? "Coming Soon" : null),
                    t.xp6(1),
                    t.Q6J("ngIf", null == o ? null : o.newCourse),
                    t.xp6(1),
                    t.Q6J("ngIf", null == o ? null : o.comingSoon),
                    t.xp6(1),
                    t.Q6J("src", o.imgPath, t.LSH),
                    t.xp6(2),
                    t.Oqu(o.title),
                    t.xp6(2),
                    t.Oqu(o.description),
                    t.xp6(2),
                    t.Q6J("ngIf", g.courseStats.hasOwnProperty(o.courseId) && g.courseStats[o.courseId].completed),
                    t.xp6(2),
                    t.Q6J("ngIf", !!o.hours),
                    t.xp6(1),
                    t.Q6J("ngIf", null == o ? null : o.inProgress),
                    t.xp6(2),
                    t.Q6J("ngIf", !!o.difficulty)
            }
        }
        var p = (()=>{
                return (a = p || (p = {})).Easy = "Easy",
                    a.Medium = "Medium",
                    a.Hard = "Hard",
                    p;
                var a
            }
        )();
        let k = (()=>{
                class a {
                    constructor(o, g, M, D, I) {
                        this.analyticsService = o,
                            this.authService = g,
                            this.courseService = M,
                            this.localStorage = D,
                            this.router = I,
                            this.cardConfigs = [{
                                courseId: "dsa-for-beginners",
                                link: "/courses/dsa-for-beginners",
                                title: "Algorithms & Data Structures for Beginners",
                                description: "Learn the foundations of coding interviews.",
                                hours: 8.5,
                                difficulty: p.Easy,
                                imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a65736b6-151f-4572-8e10-87b2b75ab100/public"
                            }, {
                                courseId: "advanced-algorithms",
                                link: "/courses/advanced-algorithms",
                                title: "Advanced Algorithms",
                                description: "Learn every algorithm you would ever need.",
                                hours: 8,
                                difficulty: p.Hard,
                                imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dd1abac9-220d-4c4d-a8c5-d755e2606800/public"
                            }, {
                                courseId: "system-design-for-beginners",
                                link: "/courses/system-design-for-beginners",
                                title: "System Design for Beginners",
                                description: "Learn the foundations of system design interviews.",
                                hours: 6,
                                difficulty: p.Medium,
                                imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/cbf83d3b-b930-44e4-762e-df0e89ea5400/public"
                            }, {
                                courseId: "system-design-interview",
                                link: "/courses/system-design-interview",
                                title: "System Design Interview",
                                description: "Learn common system design interview questions.",
                                hours: 4.5,
                                difficulty: p.Medium,
                                imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0c64daac-e358-48b1-91f5-7d4953b40600/public",
                                inProgress: !1
                            }, {
                                courseId: "full-stack-dev",
                                link: "/courses/full-stack-dev",
                                title: "Full Stack Development",
                                description: "Learn how to build an intermediate full stack app.",
                                hours: 5.5,
                                difficulty: p.Medium,
                                imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/8efc4993-9666-4ceb-c1cb-f1686cbcc300/public"
                            }, {
                                courseId: "ood-interview",
                                link: "/courses/ood-interview",
                                title: "Object Oriented Design Interviews",
                                description: "Learn Object Oriented Design interview questions.",
                                hours: 2.5,
                                difficulty: p.Easy,
                                imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/f96cc9c7-0515-4283-883c-14d346094400/public"
                            }, {
                                courseId: "design-patterns",
                                link: "/courses/design-patterns",
                                title: "Object Oriented Design Patterns",
                                description: "Learn & implement common coding design patterns.",
                                hours: 2.5,
                                difficulty: p.Easy,
                                imgPath: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d84156ca-00bc-42b3-c809-c6e1ee83ac00/public",
                                newCourse: !0
                            }],
                            this.courseStats = {},
                            this.destroy$ = new x.xQ
                    }
                    ngOnInit() {
                        this.authService.getAuthState().pipe((0,
                            w.R)(this.destroy$)).subscribe(o=>{
                                o && this.courseService.getUserStats().then(g=>this.courseStats = g.courses)
                            }
                        );
                        for (const o of this.cardConfigs) {
                            const g = parseInt(this.localStorage.getLastViewedLesson(o.courseId));
                            o.link = g ? `${o.link}/${g}` : o.link
                        }
                    }
                    ngOnDestroy() {
                        this.destroy$.next(),
                            this.destroy$.complete()
                    }
                    getStyleFromDifficulty(o) {
                        switch (o) {
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
                    handleCourseClick(o) {
                        this.analyticsService.logEvent(o.courseId.toUpperCase()),
                        o.link && this.router.navigate([o.link])
                    }
                }
                return a.\u0275fac = function(o) {
                    return new (o || a)(t.Y36(y.m2),t.Y36(L.e),t.Y36(A.N),t.Y36(T.n),t.Y36(S.F0))
                }
                    ,
                    a.\u0275cmp = t.Xpm({
                        type: a,
                        selectors: [["app-course-list"]],
                        decls: 2,
                        vars: 1,
                        consts: [[1, "flex-container-row", "card-container", 2, "padding-left", "20px", "padding-right", "20px"], ["class", "box card my-card hover-large", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "box", "card", "my-card", "hover-large", 3, "ngClass", "click"], ["class", "button is-success newCourseBtn", 4, "ngIf"], ["class", "button is-warning newCourseBtn", 4, "ngIf"], ["loading", "lazy", 1, "card-img", 3, "src"], [1, "course-title"], [1, "course-desc"], [1, "spacer"], [4, "ngIf"], [1, "course-info"], ["class", "my-card-tag button is-info", 4, "ngIf"], ["class", "my-card-tag button", 3, "ngClass", 4, "ngIf"], [1, "button", "is-success", "newCourseBtn"], [1, "button", "is-warning", "newCourseBtn"], [1, "progress", "is-small", "is-success", 3, "value", "max"], [1, "my-card-tag", "button", "is-info"], [1, "my-card-tag", "button", 3, "ngClass"]],
                        template: function(o, g) {
                            1 & o && (t.TgZ(0, "div", 0),
                                t.YNc(1, E, 15, 14, "div", 1),
                                t.qZA()),
                            2 & o && (t.xp6(1),
                                t.Q6J("ngForOf", g.cardConfigs))
                        },
                        dependencies: [_.mk, _.sg, _.O5],
                        styles: [".flex-container-row[_ngcontent-%COMP%]{flex-flow:wrap}.my-card[_ngcontent-%COMP%]{align-self:stretch;display:flex;flex-direction:column;align-items:center;margin:20px 1% 1%;padding-left:0;padding-right:0;padding-top:0;width:40%;max-width:300px;text-align:center;border-radius:.75rem}.newCourseBtn[_ngcontent-%COMP%]{top:0;right:15px;position:absolute;padding:3px 6px}.course-info[_ngcontent-%COMP%], .course-desc[_ngcontent-%COMP%]{margin-top:10px}.cursor-not-allowed[_ngcontent-%COMP%]:hover{transform:translate(0)}button[_ngcontent-%COMP%]{margin-top:15px;max-width:200px}.my-card-tag[_ngcontent-%COMP%]{font-size:11px;font-weight:700;height:26px;border-radius:6px;padding:4px}.card-img[_ngcontent-%COMP%]{height:auto;max-width:100%;margin:0 15px 15px;border-top-left-radius:.75rem;border-top-right-radius:.75rem}.course-title[_ngcontent-%COMP%]{font-size:21px;padding-left:20px;padding-right:20px}.progress[_ngcontent-%COMP%]{margin-top:.7rem;margin-bottom:.3rem;height:.6rem;width:70%}@media (max-width: 1000px){.my-card[_ngcontent-%COMP%]{width:80%}}*[_ngcontent-%COMP%]{font-family:helvetica}p[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}"]
                    }),
                    a
            }
        )()
    }
    ,
    50985: (B,O,c)=>{
        c.d(O, {
            gD: ()=>S
        });
        var x = c(59695)
            , t = (()=>{
                return (_ = t || (t = {})).LEFT_TO_RIGHT = "LR",
                    _.RIGHT_TO_LEFT = "RL",
                    _.TOP_TO_BOTTOM = "TB",
                    _.BOTTOM_TO_TOM = "BT",
                    t;
                var _
            }
        )();
        class S {
            constructor() {
                this.defaultSettings = {
                    orientation: t.LEFT_TO_RIGHT,
                    marginX: 20,
                    marginY: 20,
                    edgePadding: 100,
                    rankPadding: 100,
                    nodePadding: 50,
                    curveDistance: 20,
                    multigraph: !1,
                    compound: !0
                },
                    this.settings = {}
            }
            run(e) {
                this.createDagreGraph(e),
                    x.layout(this.dagreGraph),
                    e.edgeLabels = this.dagreGraph._edgeLabels;
                for (const d in this.dagreGraph._nodes) {
                    const s = this.dagreGraph._nodes[d]
                        , m = e.nodes.find(l=>l.id === s.id);
                    m.position = {
                        x: s.x,
                        y: s.y
                    },
                        m.dimension = {
                            width: s.width,
                            height: s.height
                        }
                }
                for (const d of e.edges)
                    this.updateEdge(e, d);
                return e
            }
            updateEdge(e, d) {
                const s = e.nodes.find(g=>g.id === d.source)
                    , m = e.nodes.find(g=>g.id === d.target)
                    , l = "BT" === this.settings.orientation || "TB" === this.settings.orientation ? "y" : "x"
                    , v = "y" === l ? "x" : "y"
                    , P = "y" === l ? "height" : "width"
                    , E = s.position[l] <= m.position[l] ? -1 : 1
                    , p = {
                    [v]: s.position[v],
                    [l]: s.position[l] - E * (s.dimension[P] / 2)
                }
                    , k = {
                    [v]: m.position?.[v],
                    [l]: m.position[l] + E * (m.dimension[P] / 2)
                };
                d.points = [p, {
                    [l]: (p[l] + k[l]) / 2,
                    [v]: p[v]
                }, {
                    [v]: k[v],
                    [l]: (p[l] + k[l]) / 2
                }, k];
                const o = e.edgeLabels[`${d.source}\x01 ${d.target}\x01\0`];
                return o && (o.points = d.points),
                    e
            }
            createDagreGraph(e) {
                const d = Object.assign({}, this.defaultSettings, this.settings);
                this.dagreGraph = new x.graphlib.Graph({
                    compound: d.compound,
                    multigraph: d.multigraph
                }),
                    this.dagreGraph.setGraph({
                        rankdir: d.orientation,
                        marginx: d.marginX,
                        marginy: d.marginY,
                        edgesep: d.edgePadding,
                        ranksep: d.rankPadding,
                        nodesep: d.nodePadding,
                        align: d.align,
                        acyclicer: d.acyclicer,
                        ranker: d.ranker,
                        multigraph: d.multigraph,
                        compound: d.compound
                    }),
                    this.dagreGraph.setDefaultEdgeLabel(()=>({})),
                    this.dagreNodes = e.nodes.map(s=>{
                            const m = Object.assign({}, s);
                            return m.width = s?.dimension?.width,
                                m.height = s?.dimension?.height,
                                m.x = s?.position?.x,
                                m.y = s?.position?.y,
                                m
                        }
                    ),
                    this.dagreEdges = e.edges.map(s=>{
                            let m = 1;
                            const l = Object.assign({}, s);
                            return l.id || (l.id = m,
                                m++),
                                l
                        }
                    );
                for (const s of this.dagreNodes)
                    s.width || (s.width = 20),
                    s.height || (s.height = 30),
                        this.dagreGraph.setNode(s.id, s);
                for (const s of this.dagreEdges)
                    d.multigraph ? this.dagreGraph.setEdge(s.source, s.target, s, s.id) : this.dagreGraph.setEdge(s.source, s.target);
                return this.dagreGraph
            }
        }
    }
    ,
    86512: (B,O,c)=>{
        c.d(O, {
            B: ()=>I
        });
        var x = c(15861)
            , w = c(50985)
            , t = c(56761)
            , y = c(8929)
            , L = c(31434)
            , A = c(5861);
        const T = [{
            id: "1",
            name: "Arrays & Hashing",
            backgroundColor: "#3f4bd1"
        }, {
            id: "2",
            name: "Two Pointers",
            backgroundColor: "#3f4bd1",
            parentId: ["1"]
        }, {
            id: "6",
            name: "Binary Search",
            backgroundColor: "#3f4bd1",
            parentId: ["2"]
        }, {
            id: "3",
            name: "Stack",
            backgroundColor: "#3f4bd1",
            parentId: ["1"]
        }, {
            id: "4",
            name: "Sliding Window",
            backgroundColor: "#3f4bd1",
            parentId: ["2"]
        }, {
            id: "5",
            name: "Linked List",
            backgroundColor: "#3f4bd1",
            parentId: ["2"]
        }, {
            id: "7",
            name: "Trees",
            backgroundColor: "#3f4bd1",
            parentId: ["5", "6"]
        }, {
            id: "8",
            name: "Tries",
            backgroundColor: "#3f4bd1",
            parentId: ["7"]
        }, {
            id: "9",
            name: "Heap / Priority Queue",
            backgroundColor: "#3f4bd1",
            parentId: ["7"]
        }, {
            id: "10",
            name: "Backtracking",
            backgroundColor: "#3f4bd1",
            parentId: ["7"]
        }, {
            id: "11",
            name: "Graphs",
            backgroundColor: "#3f4bd1",
            parentId: ["10"]
        }, {
            id: "12",
            name: "1-D Dynamic Programming",
            backgroundColor: "#3f4bd1",
            parentId: ["10"]
        }, {
            id: "13",
            name: "Intervals",
            backgroundColor: "#3f4bd1",
            parentId: ["9"]
        }, {
            id: "17",
            name: "Advanced Graphs",
            backgroundColor: "#3f4bd1",
            parentId: ["9", "11"]
        }, {
            id: "18",
            name: "Math & Geometry",
            backgroundColor: "#3f4bd1",
            parentId: ["11", "15"]
        }, {
            id: "14",
            name: "2-D Dynamic Programming",
            backgroundColor: "#3f4bd1",
            parentId: ["11", "12"]
        }, {
            id: "15",
            name: "Bit Manipulation",
            backgroundColor: "#3f4bd1",
            parentId: ["12"]
        }, {
            id: "16",
            name: "Greedy",
            backgroundColor: "#3f4bd1",
            parentId: ["9"]
        }];
        var S = c(7625);
        const _ = {
            "Arrays & Hashing": [{
                course: "Data Structures & Algorithms for Beginners",
                name: "Dynamic Arrays",
                routerLink: "/courses/dsa-for-beginners/3"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Hash Usage",
                routerLink: "/courses/dsa-for-beginners/26"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Hash Implementation",
                routerLink: "/courses/dsa-for-beginners/27"
            }, {
                course: "Advanced Algorithms",
                name: "Prefix Sums",
                routerLink: "/courses/advanced-algorithms/4"
            }],
            "Two Pointers": [{
                course: "Advanced Algorithms",
                name: "Two Pointers",
                routerLink: "/courses/advanced-algorithms/3"
            }],
            Stack: [{
                course: "Data Structures & Algorithms for Beginners",
                name: "Stacks",
                routerLink: "/courses/dsa-for-beginners/4"
            }],
            "Binary Search": [{
                course: "Data Structures & Algorithms for Beginners",
                name: "Search Array",
                routerLink: "/courses/dsa-for-beginners/14"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Search Range",
                routerLink: "/courses/dsa-for-beginners/15"
            }],
            "Sliding Window": [{
                course: "Advanced Algorithms",
                name: "Sliding Window Fixed Size",
                routerLink: "/courses/advanced-algorithms/1"
            }, {
                course: "Advanced Algorithms",
                name: "Sliding Window Variable Size",
                routerLink: "/courses/advanced-algorithms/2"
            }],
            "Linked List": [{
                course: "Data Structures & Algorithms for Beginners",
                name: "Singly Linked Lists",
                routerLink: "/courses/dsa-for-beginners/5"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Doubly Linked Lists",
                routerLink: "/courses/dsa-for-beginners/6"
            }, {
                course: "Advanced Algorithms",
                name: "Fast and Slow Pointers",
                routerLink: "/courses/advanced-algorithms/5"
            }],
            Trees: [{
                course: "Data Structures & Algorithms for Beginners",
                name: "BST Insert and Remove",
                routerLink: "/courses/dsa-for-beginners/18"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Depth-First Search",
                routerLink: "/courses/dsa-for-beginners/19"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Breadth-First Search",
                routerLink: "/courses/dsa-for-beginners/20"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "BST Sets and Maps",
                routerLink: "/courses/dsa-for-beginners/21"
            }, {
                course: "Advanced Algorithms",
                name: "Iterative DFS",
                routerLink: "/courses/advanced-algorithms/9"
            }],
            Tries: [{
                course: "Advanced Algorithms",
                name: "Trie",
                routerLink: "/courses/advanced-algorithms/6"
            }],
            "Heap / Priority Queue": [{
                course: "Data Structures & Algorithms for Beginners",
                name: "Heap Properties",
                routerLink: "/courses/dsa-for-beginners/23"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Push and Pop",
                routerLink: "/courses/dsa-for-beginners/24"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Heapify",
                routerLink: "/courses/dsa-for-beginners/25"
            }, {
                course: "Advanced Algorithms",
                name: "Two Heaps",
                routerLink: "/courses/advanced-algorithms/10"
            }],
            Intervals: [],
            Greedy: [{
                course: "Advanced Algorithms",
                name: "Kadane's Algorithm",
                routerLink: "/courses/advanced-algorithms/0"
            }],
            Graphs: [{
                course: "Data Structures & Algorithms for Beginners",
                name: "Intro to Graphs",
                routerLink: "/courses/dsa-for-beginners/28"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Matrix DFS",
                routerLink: "/courses/dsa-for-beginners/29"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Matrix BFS",
                routerLink: "/courses/dsa-for-beginners/30"
            }, {
                course: "Data Structures & Algorithms for Beginners",
                name: "Adjacency List",
                routerLink: "/courses/dsa-for-beginners/31"
            }],
            "Advanced Graphs": [{
                course: "Advanced Algorithms",
                name: "Dijkstra's",
                routerLink: "/courses/advanced-algorithms/14"
            }, {
                course: "Advanced Algorithms",
                name: "Prim's",
                routerLink: "/courses/advanced-algorithms/15"
            }, {
                course: "Advanced Algorithms",
                name: "Kruskal's",
                routerLink: "/courses/advanced-algorithms/16"
            }, {
                course: "Advanced Algorithms",
                name: "Topological Sort",
                routerLink: "/courses/advanced-algorithms/17"
            }],
            Backtracking: [{
                course: "Data Structures & Algorithms for Beginners",
                name: "Tree Maze",
                routerLink: "/courses/dsa-for-beginners/22"
            }, {
                course: "Advanced Algorithms",
                name: "Subsets",
                routerLink: "/courses/advanced-algorithms/11"
            }, {
                course: "Advanced Algorithms",
                name: "Combinations",
                routerLink: "/courses/advanced-algorithms/12"
            }, {
                course: "Advanced Algorithms",
                name: "Permutations",
                routerLink: "/courses/advanced-algorithms/13"
            }],
            "1-D Dynamic Programming": [{
                course: "Data Structures & Algorithms for Beginners",
                name: "1-Dimension DP",
                routerLink: "/courses/dsa-for-beginners/32"
            }, {
                course: "Advanced Algorithms",
                name: "Palindromes",
                routerLink: "/courses/advanced-algorithms/21"
            }],
            "2-D Dynamic Programming": [{
                course: "Data Structures & Algorithms for Beginners",
                name: "2-Dimension DP",
                routerLink: "/courses/dsa-for-beginners/33"
            }, {
                course: "Advanced Algorithms",
                name: "0 / 1 Knapsack",
                routerLink: "/courses/advanced-algorithms/18"
            }, {
                course: "Advanced Algorithms",
                name: "Unbounded Knapsack",
                routerLink: "/courses/advanced-algorithms/19"
            }, {
                course: "Advanced Algorithms",
                name: "LCS",
                routerLink: "/courses/advanced-algorithms/20"
            }],
            "Bit Manipulation": [{
                course: "Data Structures & Algorithms for Beginners",
                name: "Bit Operations",
                routerLink: "/courses/dsa-for-beginners/34"
            }]
        };
        var e = c(55062)
            , d = c(16256)
            , s = c(21161)
            , m = c(38069)
            , l = c(36895)
            , v = c(86514)
            , P = c(36709)
            , E = c(6664);
        const p = ["sidebar"];
        function k(u, C) {
            if (1 & u && e._UZ(0, "progress", 16),
            2 & u) {
                const n = e.oxw().$implicit
                    , r = e.oxw();
                let i;
                e.uIk("value", null !== (i = r.progressMap[n.label]) && void 0 !== i ? i : 0)
            }
        }
        const a = function(u, C) {
            return {
                "small-label": u,
                "black-font": C
            }
        };
        function f(u, C) {
            if (1 & u) {
                const n = e.EpF();
                e.O4$(),
                    e.TgZ(0, "g", 12)(1, "foreignObject"),
                    e.kcU(),
                    e.TgZ(2, "div", 13),
                    e.NdJ("click", function() {
                        const b = e.CHM(n).$implicit
                            , h = e.oxw();
                        return e.KtG(h.openSidebar(b))
                    }),
                    e.TgZ(3, "label", 14),
                    e._uU(4),
                    e.qZA(),
                    e.YNc(5, k, 1, 1, "progress", 15),
                    e.qZA()()()
            }
            if (2 & u) {
                const n = C.$implicit
                    , r = e.oxw();
                e.uIk("width", r.nodeWidth)("height", r.nodeHeight),
                    e.xp6(1),
                    e.uIk("width", r.nodeWidth)("height", r.nodeHeight),
                    e.xp6(1),
                    e.Udp("height", r.nodeHeight - 8, "px"),
                    e.Q6J("ngStyle", r.getStyles(n)),
                    e.xp6(1),
                    e.Q6J("ngClass", e.WLB(10, a, r.rotating, r.problemData)),
                    e.xp6(1),
                    e.Oqu(r.getNodeName(n.label) + (n.data.complete ? "\xa0\xa0\u2705" : "")),
                    e.xp6(1),
                    e.Q6J("ngIf", !r.problemData)
            }
        }
        function o(u, C) {
            1 & u && (e.O4$(),
                e.TgZ(0, "marker", 17),
                e._UZ(1, "path", 18),
                e.qZA())
        }
        function g(u, C) {
            1 & u && (e.O4$(),
                e.TgZ(0, "g", 19),
                e._UZ(1, "path", 20),
                e.qZA())
        }
        function M(u, C) {
            if (1 & u && (e.TgZ(0, "a", 25)(1, "div", 26)(2, "span", 27),
                e._uU(3),
                e.qZA(),
                e.TgZ(4, "span")(5, "label", 28),
                e._UZ(6, "input", 29)(7, "span", 30),
                e.qZA()()(),
                e.TgZ(8, "a", 31),
                e._uU(9),
                e.qZA()()),
            2 & u) {
                const n = C.$implicit;
                e.Q6J("routerLink", null == n ? null : n.routerLink),
                    e.xp6(3),
                    e.Oqu(null == n ? null : n.name),
                    e.xp6(3),
                    e.Q6J("checked", null == n ? null : n.completed),
                    e.xp6(3),
                    e.Oqu(null == n ? null : n.course)
            }
        }
        function D(u, C) {
            if (1 & u && (e.TgZ(0, "div", 21)(1, "p", 22),
                e._uU(2, "Prerequisites"),
                e.qZA(),
                e.TgZ(3, "div", 23),
                e.YNc(4, M, 10, 4, "a", 24),
                e.qZA()()),
            2 & u) {
                const n = e.oxw();
                e.xp6(4),
                    e.Q6J("ngForOf", n.curLessons)
            }
        }
        let I = (()=>{
                class u {
                    constructor(n, r, i, b) {
                        this.authService = n,
                            this.courseService = r,
                            this.tableProgressService = i,
                            this.router = b,
                            this.rotating = !1,
                            this.nodeWidth = 200,
                            this.nodeHeight = 70,
                            this.draggingEnabled = !1,
                            this.panningEnabled = !1,
                            this.zoomingEnabled = !1,
                            this.graphData = T,
                            this.problemData = !1,
                            this.destroy$ = new y.xQ,
                            this.NEETCODE_LIST = [],
                            this.selectedPattern = "",
                            this.nodes = [],
                            this.links = [],
                            this.layoutSettings = {
                                orientation: "TB"
                            },
                            this.curve = t.Z,
                            this.layout = new w.gD,
                            this.zoomToFit$ = new y.xQ,
                            this.center$ = new y.xQ,
                            this.curTableRows = [],
                            this.curLessons = [],
                            this.patternToIndex = {},
                            this.NEETCODE_LENGTH = 150,
                            this.BLIND_LENGTH = 75,
                            this.TableView = L.v,
                            this.LEETCODE_BASE_URL = A.Ms,
                            this.GITHUB_BASE_URL = A.UZ,
                            this.BLIND_LIST = [],
                            this.PATTERN_LIST = [],
                            this.progressMap = {},
                            this.progressFractionMap = {},
                            this.listsInitialized = !1,
                            this.sidebarOpen = !1
                    }
                    ngOnInit() {
                        var n = this;
                        return (0,
                            x.Z)(function*() {
                            n.rotating && (n.graphData = n.graphData.slice(0, 10));
                            for (const r of n.graphData)
                                n.nodes.push({
                                    id: r.id,
                                    label: r.name,
                                    data: {
                                        backgroundColor: r.backgroundColor,
                                        url: r.url,
                                        complete: r.complete
                                    }
                                });
                            for (const r of n.graphData)
                                if (r.parentId)
                                    for (const i of r.parentId)
                                        n.links.push({
                                            source: i,
                                            target: r.id,
                                            label: "",
                                            data: {}
                                        });
                            if (n.tableProgressService.resetTableState(),
                                n.authService.getAuthState().pipe((0,
                                    S.R)(n.destroy$)).subscribe(function() {
                                    var r = (0,
                                        x.Z)(function*(i) {
                                        n.listsInitialized || (n.initLists(),
                                            n.listsInitialized = !0),
                                            i ? yield n.initCompletedRows(!0) : yield n.initCompletedRows(!1)
                                    });
                                    return function(i) {
                                        return r.apply(this, arguments)
                                    }
                                }()),
                                n.tableProgressService.getTopicProgress$().pipe((0,
                                    S.R)(n.destroy$)).subscribe(r=>{
                                        r.forEach(i=>n.updateProgress(i.topic, i.completeCount, i.totalCount))
                                    }
                                ),
                                !n.rotating) {
                                const r = [];
                                let i = yield n.courseService.getCourseInfo("dsa-for-beginners");
                                for (const b of i.sections)
                                    for (const h of b.lessons)
                                        r.push(h);
                                i = yield n.courseService.getCourseInfo("advanced-algorithms");
                                for (const b of i.sections)
                                    for (const h of b.lessons)
                                        r.push(h);
                                for (const b of Object.values(_))
                                    for (const h of b)
                                        h.completed = r.find(Z=>Z.name === h.name)?.completed ?? !1
                            }
                        })()
                    }
                    ngAfterViewInit() {}
                    ngOnDestroy() {
                        this.destroy$.next(!0),
                            this.destroy$.complete()
                    }
                    initCompletedRows(n) {
                        var r = this;
                        return (0,
                            x.Z)(function*() {
                            r.tableProgressService.initTableState(r.NEETCODE_LIST, n)
                        })()
                    }
                    openProblem(n) {
                        n?.data?.url && window.open("https://leetcode.com/problems/" + n.data.url, "_blank")
                    }
                    openSidebar(n) {
                        this.problemData ? this.openProblem(n) : this.rotating ? this.router.navigate(["/roadmap"]) : (this.curTableRows = this.NEETCODE_LIST[this.patternToIndex[n.label]],
                            this.curLessons = _[n.label] ?? [],
                            this.selectedPattern = n.label,
                            this.sidebar.toggleSidebar(),
                            this.sidebarOpen = !0)
                    }
                    closeSidebar() {
                        this.sidebarOpen = !1
                    }
                    getStyles(n) {
                        return {
                            "background-color": n.data.backgroundColor
                        }
                    }
                    resetGraph() {
                        this.center$.next(!0),
                            this.zoomToFit$.next(!0),
                            this.center$.next(!0),
                            this.zoomToFit$.next(!0)
                    }
                    initLists() {
                        let n = []
                            , r = [];
                        const i = JSON.parse(JSON.stringify(A.JA));
                        let b = 0;
                        for (const h of i) {
                            if (h.link.startsWith("https") || (h.link = this.LEETCODE_BASE_URL + h.link),
                            n.length > 0 && n[0].pattern != h.pattern && (this.PATTERN_LIST.push(n[0].pattern),
                                this.NEETCODE_LIST.push(n),
                                this.BLIND_LIST.push(r),
                                this.patternToIndex[n[0].pattern] = b++,
                                n = [],
                                r = []),
                            "JavaScript" === h?.pattern)
                                break;
                            !0 === h?.blind75 && r.push(h),
                            !0 === h?.neetcode150 && n.push(h)
                        }
                        n.length > 0 && (this.PATTERN_LIST.push(n[0].pattern),
                            this.NEETCODE_LIST.push(n),
                            this.patternToIndex[n[0].pattern] = b++),
                        r.length > 0 && this.BLIND_LIST.push(r)
                    }
                    updateProgress(n, r, i) {
                        setTimeout(()=>{
                                this.progressMap[n] = r / i * 100,
                                    this.progressFractionMap[n] = `(${r} / ${i})`
                            }
                        )
                    }
                    getNodeName(n) {
                        return n.replace("Dynamic Programming", "DP")
                    }
                }
                return u.\u0275fac = function(n) {
                    return new (n || u)(e.Y36(d.e),e.Y36(s.N),e.Y36(L.H),e.Y36(m.F0))
                }
                    ,
                    u.\u0275cmp = e.Xpm({
                        type: u,
                        selectors: [["app-graph"]],
                        viewQuery: function(n, r) {
                            if (1 & n && e.Gf(p, 5),
                            2 & n) {
                                let i;
                                e.iGM(i = e.CRH()) && (r.sidebar = i.first)
                            }
                        },
                        inputs: {
                            rotating: "rotating",
                            nodeWidth: "nodeWidth",
                            nodeHeight: "nodeHeight",
                            draggingEnabled: "draggingEnabled",
                            panningEnabled: "panningEnabled",
                            zoomingEnabled: "zoomingEnabled",
                            graphData: "graphData",
                            problemData: "problemData"
                        },
                        decls: 19,
                        vars: 20,
                        consts: [[1, "graph-page-container", 3, "ngClass"], [1, "graph-container", 3, "ngClass"], [3, "links", "nodes", "layout", "nodeWidth", "nodeHeight", "draggingEnabled", "panningEnabled", "layoutSettings", "autoZoom", "autoCenter", "enableZoom", "center$", "zoomToFit$"], ["nodeTemplate", ""], ["defsTemplate", ""], ["linkTemplate", ""], [3, "closed"], ["sidebar", ""], [1, "flex-container-col", "sidebar-metadata"], ["max", "100", 1, "progress", "panel-progress", "is-small", "is-success"], ["class", "flex-container-col", "style", "margin-top: 20px; margin-bottom: 20px", 4, "ngIf"], [3, "tableRows"], ["xmlns", "http://www.w3.org/2000/xhtml", 1, "node"], ["xmlns", "http://www.w3.org/1999/xhtml", 1, "cardContainer", "cursor-hand", 3, "ngStyle", "click"], [1, "cursor-hand", 3, "ngClass"], ["class", "progress is-small is-success", "max", "100", 4, "ngIf"], ["max", "100", 1, "progress", "is-small", "is-success"], ["id", "arrow", "viewBox", "0 -5 10 10", "refX", "8", "refY", "0", "markerWidth", "20", "markerHeight", "4", "orient", "auto"], ["d", "M0,-5L10,0L0,5", "fill", "white", 1, "arrow-head"], [1, "edge"], ["stroke-width", "4.5", "stroke", "white", "marker", "white", "marker-end", "url(#arrow)", 1, "line"], [1, "flex-container-col", 2, "margin-top", "20px", "margin-bottom", "20px"], [2, "margin-bottom", "10px"], [1, "lesson-container", "flex-container-row"], ["class", "card menu-card my-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", "menu-card", "my-card", 3, "routerLink"], [1, "flex-container-row", 2, "justify-content", "space-between", "align-items", "start"], [2, "margin-right", "10px"], [1, "b-checkbox", "checkbox", 2, "margin", "0px"], ["type", "checkbox", 3, "checked"], [1, "check", "is-success", 2, "height", "0.9em", "width", "0.9em"], [2, "font-size", "12px"]],
                        template: function(n, r) {
                            if (1 & n && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "ngx-graph", 2),
                                e.YNc(3, f, 6, 13, "ng-template", null, 3, e.W1O),
                                e.YNc(5, o, 2, 0, "ng-template", null, 4, e.W1O),
                                e.YNc(7, g, 2, 0, "ng-template", null, 5, e.W1O),
                                e.qZA()()(),
                                e.TgZ(9, "app-sidebar", 6, 7),
                                e.NdJ("closed", function() {
                                    return r.closeSidebar()
                                }),
                                e.TgZ(11, "div", 8)(12, "h1"),
                                e._uU(13),
                                e.qZA(),
                                e.TgZ(14, "p"),
                                e._uU(15),
                                e.qZA(),
                                e._UZ(16, "progress", 9),
                                e.qZA(),
                                e.YNc(17, D, 5, 1, "div", 10),
                                e._UZ(18, "app-table", 11),
                                e.qZA()),
                            2 & n) {
                                let i;
                                e.Q6J("ngClass", r.rotating ? "outer-rotating" : ""),
                                    e.xp6(1),
                                    e.Q6J("ngClass", r.rotating ? "rotating-container" : ""),
                                    e.xp6(1),
                                    e.Q6J("links", r.links)("nodes", r.nodes)("layout", r.layout)("nodeWidth", r.nodeWidth)("nodeHeight", r.nodeHeight)("draggingEnabled", r.draggingEnabled)("panningEnabled", r.panningEnabled)("layoutSettings", r.layoutSettings)("autoZoom", !0)("autoCenter", !0)("enableZoom", r.zoomingEnabled)("center$", r.center$)("zoomToFit$", r.zoomToFit$),
                                    e.xp6(11),
                                    e.Oqu(r.selectedPattern),
                                    e.xp6(2),
                                    e.Oqu(r.progressFractionMap[r.selectedPattern]),
                                    e.xp6(1),
                                    e.uIk("value", null !== (i = r.progressMap[r.selectedPattern]) && void 0 !== i ? i : 0),
                                    e.xp6(1),
                                    e.Q6J("ngIf", r.curLessons.length),
                                    e.xp6(1),
                                    e.Q6J("tableRows", r.curTableRows)
                            }
                        },
                        dependencies: [l.mk, l.sg, l.O5, l.PC, m.yS, v.B$, P.a, E.k],
                        styles: [".graph-page-container[_ngcontent-%COMP%]{height:inherit;width:inherit}.graph-container[_ngcontent-%COMP%]{padding:0;height:inherit;width:inherit}h1[_ngcontent-%COMP%]{font-size:24px;margin-bottom:5px}.panel-progress[_ngcontent-%COMP%]{width:50%;margin-top:10px;margin-bottom:10px;max-width:500px}.sidebar-metadata[_ngcontent-%COMP%]{margin-bottom:10px}.lesson-container[_ngcontent-%COMP%]{flex-flow:wrap}.menu-card[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px;padding:15px;max-width:225px;min-width:225px;align-self:stretch}[_nghost-%COMP%]    {overflow:hidden!important;display:block;height:inherit;width:inherit}[_nghost-%COMP%]     .ngx-charts-outer{background-color:inherit!important}[_nghost-%COMP%]     .outer-rotating .ngx-charts-outer{pointer-events:none}[_nghost-%COMP%]     .outer-rotating .panning-rect{cursor:default!important}[_nghost-%COMP%]     .cardContainer:hover{border-radius:0;transition:all .3s ease!important}[_nghost-%COMP%]     .cardContainer{transition:all .3s ease;border-radius:8px;height:70px;display:block;pointer-events:all}[_nghost-%COMP%]     .cardContainer .button{background-color:transparent;border-color:transparent}[_nghost-%COMP%]     .cardContainer .button:hover{background-color:transparent;border-color:transparent}[_nghost-%COMP%]     .cardContainer label{color:#fff!important;display:block;text-align:center;font-size:18px;font-weight:700;margin-top:4px;margin-bottom:8px;padding-top:2px}[_nghost-%COMP%]     .cardContainer label.black-font{color:#000!important}[_nghost-%COMP%]     .cardContainer .small-label{font-size:14px}[_nghost-%COMP%]     .cardContainer .progress{margin-top:0;margin-left:5%;margin-right:5%;width:90%;height:.5rem!important}[_nghost-%COMP%]     .cardContainer .progress::-webkit-progress-value{-webkit-transition:width .3s ease;transition:width .3s ease}[_nghost-%COMP%]     .linkMidpoint ellipse{fill:#fff;stroke:#000;stroke-width:1}[_nghost-%COMP%]     .linkMidpoint text{stroke:transparent;fill:#000;text-anchor:middle;font-size:10px}@keyframes rotating{0%,to{transform:rotateY(1.2deg)}50%{transform:rotateY(-1.2deg)}}.rotating-container[_ngcontent-%COMP%]{animation:rotating 8s linear infinite}.outer-rotating[_ngcontent-%COMP%]{perspective:100px}"]
                    }),
                    u
            }
        )()
    }
}]);
