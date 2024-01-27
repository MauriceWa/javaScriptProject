"use strict";
(self.webpackChunkangular_client = self.webpackChunkangular_client || []).push([[1407], {
    1407: (_t,le,m)=>{
        m.r(le);
        var ue = m(63942)
            , L = m(34859)
            , _ = m(42090)
            , D = m(41877)
            , v = m(49681);
        m(12833);
        const B = "@firebase/performance"
            , b = "0.5.15"
            , z = b
            , S = "FB-PERF-TRACE-MEASURE"
            , V = "_wt_"
            , x = "_fcp"
            , j = "_fid"
            , K = "@firebase/performance/config"
            , q = "@firebase/performance/configexpire"
            , G = "Performance"
            , o = new _.LL("performance",G,{
            "trace started": "Trace {$traceName} was started before.",
            "trace stopped": "Trace {$traceName} is not running.",
            "nonpositive trace startTime": "Trace {$traceName} startTime should be positive.",
            "nonpositive trace duration": "Trace {$traceName} duration should be positive.",
            "no window": "Window is not available.",
            "no app id": "App id is not available.",
            "no project id": "Project id is not available.",
            "no api key": "Api key is not available.",
            "invalid cc log": "Attempted to queue invalid cc event",
            "FB not default": "Performance can only start when Firebase app instance is the default one.",
            "RC response not ok": "RC response is not ok",
            "invalid attribute name": "Attribute name {$attributeName} is invalid.",
            "invalid attribute value": "Attribute value {$attributeValue} is invalid.",
            "invalid custom metric name": "Custom metric name {$customMetricName} is invalid",
            "invalid String merger input": "Input for String merger is invalid, contact support team to resolve.",
            "already initialized": "initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."
        })
            , f = new D.Yd(G);
        let A, X, W, N;
        f.logLevel = D.in.INFO;
        class s {
            constructor(e) {
                if (this.window = e,
                    !e)
                    throw o.create("no window");
                this.performance = e.performance,
                    this.PerformanceObserver = e.PerformanceObserver,
                    this.windowLocation = e.location,
                    this.navigator = e.navigator,
                    this.document = e.document,
                this.navigator && this.navigator.cookieEnabled && (this.localStorage = e.localStorage),
                e.perfMetrics && e.perfMetrics.onFirstInputDelay && (this.onFirstInputDelay = e.perfMetrics.onFirstInputDelay)
            }
            getUrl() {
                return this.windowLocation.href.split("?")[0]
            }
            mark(e) {
                !this.performance || !this.performance.mark || this.performance.mark(e)
            }
            measure(e, n, i) {
                !this.performance || !this.performance.measure || this.performance.measure(e, n, i)
            }
            getEntriesByType(e) {
                return this.performance && this.performance.getEntriesByType ? this.performance.getEntriesByType(e) : []
            }
            getEntriesByName(e) {
                return this.performance && this.performance.getEntriesByName ? this.performance.getEntriesByName(e) : []
            }
            getTimeOrigin() {
                return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart)
            }
            requiredApisAvailable() {
                return fetch && Promise && (0,
                    _.zI)() ? !!(0,
                    _.hl)() || (f.info("IndexedDB is not supported by current browswer"),
                    !1) : (f.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),
                    !1)
            }
            setupObserver(e, n) {
                this.PerformanceObserver && new this.PerformanceObserver(r=>{
                        for (const a of r.getEntries())
                            n(a)
                    }
                ).observe({
                    entryTypes: [e]
                })
            }
            static getInstance() {
                return void 0 === A && (A = new s(X)),
                    A
            }
        }
        function R() {
            return W
        }
        function H(t, e) {
            const n = t.length - e.length;
            if (n < 0 || n > 1)
                throw o.create("invalid String merger input");
            const i = [];
            for (let r = 0; r < t.length; r++)
                i.push(t.charAt(r)),
                e.length > r && i.push(e.charAt(r));
            return i.join("")
        }
        class c {
            constructor() {
                this.instrumentationEnabled = !0,
                    this.dataCollectionEnabled = !0,
                    this.loggingEnabled = !1,
                    this.tracesSamplingRate = 1,
                    this.networkRequestsSamplingRate = 1,
                    this.logEndPointUrl = "https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",
                    this.flTransportEndpointUrl = H("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o"),
                    this.transportKey = H("AzSC8r6ReiGqFMyfvgow", "Iayx0u-XT3vksVM-pIV"),
                    this.logSource = 462,
                    this.logTraceAfterSampling = !1,
                    this.logNetworkAfterSampling = !1,
                    this.configTimeToLive = 12
            }
            getFlTransportFullUrl() {
                return this.flTransportEndpointUrl.concat("?key=", this.transportKey)
            }
            static getInstance() {
                return void 0 === N && (N = new c),
                    N
            }
        }
        var g = (()=>{
                return (t = g || (g = {}))[t.UNKNOWN = 0] = "UNKNOWN",
                    t[t.VISIBLE = 1] = "VISIBLE",
                    t[t.HIDDEN = 2] = "HIDDEN",
                    g;
                var t
            }
        )();
        const Ee = ["firebase_", "google_", "ga_"]
            , Te = new RegExp("^[a-zA-Z]\\w*$");
        function be() {
            const t = s.getInstance().navigator;
            return "serviceWorker"in t ? t.serviceWorker.controller ? 2 : 3 : 1
        }
        function Y() {
            switch (s.getInstance().document.visibilityState) {
                case "visible":
                    return g.VISIBLE;
                case "hidden":
                    return g.HIDDEN;
                default:
                    return g.UNKNOWN
            }
        }
        function Se() {
            const e = s.getInstance().navigator.connection;
            switch (e && e.effectiveType) {
                case "slow-2g":
                    return 1;
                case "2g":
                    return 2;
                case "3g":
                    return 3;
                case "4g":
                    return 4;
                default:
                    return 0
            }
        }
        function J(t) {
            var e;
            const n = null === (e = t.options) || void 0 === e ? void 0 : e.appId;
            if (!n)
                throw o.create("no app id");
            return n
        }
        const u = {
            loggingEnabled: !0
        };
        const Ce = "Could not fetch config, will use default configs";
        function Q(t) {
            if (!t)
                return t;
            const e = c.getInstance()
                , n = t.entries || {};
            return e.loggingEnabled = void 0 !== n.fpr_enabled ? "true" === String(n.fpr_enabled) : u.loggingEnabled,
                n.fpr_log_source ? e.logSource = Number(n.fpr_log_source) : u.logSource && (e.logSource = u.logSource),
                n.fpr_log_endpoint_url ? e.logEndPointUrl = n.fpr_log_endpoint_url : u.logEndPointUrl && (e.logEndPointUrl = u.logEndPointUrl),
                n.fpr_log_transport_key ? e.transportKey = n.fpr_log_transport_key : u.transportKey && (e.transportKey = u.transportKey),
                void 0 !== n.fpr_vc_network_request_sampling_rate ? e.networkRequestsSamplingRate = Number(n.fpr_vc_network_request_sampling_rate) : void 0 !== u.networkRequestsSamplingRate && (e.networkRequestsSamplingRate = u.networkRequestsSamplingRate),
                void 0 !== n.fpr_vc_trace_sampling_rate ? e.tracesSamplingRate = Number(n.fpr_vc_trace_sampling_rate) : void 0 !== u.tracesSamplingRate && (e.tracesSamplingRate = u.tracesSamplingRate),
                e.logTraceAfterSampling = Z(e.tracesSamplingRate),
                e.logNetworkAfterSampling = Z(e.networkRequestsSamplingRate),
                t
        }
        function Z(t) {
            return Math.random() <= t
        }
        let M, y = 1;
        function ee(t) {
            return y = 2,
                M = M || function De(t) {
                    return function Be() {
                        const t = s.getInstance().document;
                        return new Promise(e=>{
                                if (t && "complete" !== t.readyState) {
                                    const n = ()=>{
                                            "complete" === t.readyState && (t.removeEventListener("readystatechange", n),
                                                e())
                                        }
                                    ;
                                    t.addEventListener("readystatechange", n)
                                } else
                                    e()
                            }
                        )
                    }().then(()=>function he(t) {
                        const e = t.getId();
                        return e.then(n=>{
                                W = n
                            }
                        ),
                            e
                    }(t.installations)).then(e=>function Oe(t, e) {
                        const n = function Ue() {
                            const t = s.getInstance().localStorage;
                            if (!t)
                                return;
                            const e = t.getItem(q);
                            if (!e || !function ke(t) {
                                return Number(t) > Date.now()
                            }(e))
                                return;
                            const n = t.getItem(K);
                            if (n)
                                try {
                                    return JSON.parse(n)
                                } catch {
                                    return
                                }
                        }();
                        return n ? (Q(n),
                            Promise.resolve()) : function Fe(t, e) {
                            return function _e(t) {
                                const e = t.getToken();
                                return e.then(n=>{}
                                ),
                                    e
                            }(t.installations).then(n=>{
                                    const i = function Ne(t) {
                                        var e;
                                        const n = null === (e = t.options) || void 0 === e ? void 0 : e.projectId;
                                        if (!n)
                                            throw o.create("no project id");
                                        return n
                                    }(t.app)
                                        , r = function ye(t) {
                                        var e;
                                        const n = null === (e = t.options) || void 0 === e ? void 0 : e.apiKey;
                                        if (!n)
                                            throw o.create("no api key");
                                        return n
                                    }(t.app)
                                        , l = new Request(`https://firebaseremoteconfig.googleapis.com/v1/projects/${i}/namespaces/fireperf:fetch?key=${r}`,{
                                        method: "POST",
                                        headers: {
                                            Authorization: `FIREBASE_INSTALLATIONS_AUTH ${n}`
                                        },
                                        body: JSON.stringify({
                                            app_instance_id: e,
                                            app_instance_id_token: n,
                                            app_id: J(t.app),
                                            app_version: z,
                                            sdk_version: "0.0.1"
                                        })
                                    });
                                    return fetch(l).then(h=>{
                                            if (h.ok)
                                                return h.json();
                                            throw o.create("RC response not ok")
                                        }
                                    )
                                }
                            ).catch(()=>{
                                    f.info(Ce)
                                }
                            )
                        }(t, e).then(Q).then(i=>function we(t) {
                                const e = s.getInstance().localStorage;
                                !t || !e || (e.setItem(K, JSON.stringify(t)),
                                    e.setItem(q, String(Date.now() + 60 * c.getInstance().configTimeToLive * 60 * 1e3)))
                            }(i), ()=>{}
                        )
                    }(t, e)).then(()=>te(), ()=>te())
                }(t),
                M
        }
        function te() {
            y = 3
        }
        const P = 1e4;
        let O, E = 3, d = [], ie = !1;
        function T(t) {
            setTimeout(()=>{
                    if (0 !== E) {
                        if (!d.length)
                            return T(P);
                        !function xe() {
                            const t = d.splice(0, 1e3)
                                , e = t.map(i=>({
                                source_extension_json_proto3: i.message,
                                event_time_ms: String(i.eventTime)
                            }));
                            (function je(t, e) {
                                    return function Ke(t) {
                                        const e = c.getInstance().getFlTransportFullUrl();
                                        return fetch(e, {
                                            method: "POST",
                                            body: JSON.stringify(t)
                                        })
                                    }(t).then(n=>(n.ok || f.info("Call to Firebase backend failed."),
                                        n.json())).then(n=>{
                                            const i = Number(n.nextRequestWaitMillis);
                                            let r = P;
                                            isNaN(i) || (r = Math.max(i, r));
                                            const a = n.logResponseDetails;
                                            Array.isArray(a) && a.length > 0 && "RETRY_REQUEST_LATER" === a[0].responseAction && (d = [...e, ...d],
                                                f.info("Retry transport request later.")),
                                                E = 3,
                                                T(r)
                                        }
                                    )
                                }
                            )({
                                request_time_ms: String(Date.now()),
                                client_info: {
                                    client_type: 1,
                                    js_client_info: {}
                                },
                                log_source: c.getInstance().logSource,
                                log_event: e
                            }, t).catch(()=>{
                                    d = [...t, ...d],
                                        E--,
                                        f.info(`Tries left: ${E}.`),
                                        T(P)
                                }
                            )
                        }()
                    }
                }
                , t)
        }
        function re(t, e) {
            O || (O = function Ge(t) {
                return (...e)=>{
                    !function qe(t) {
                        if (!t.eventTime || !t.message)
                            throw o.create("invalid cc log");
                        d = [...d, t]
                    }({
                        message: t(...e),
                        eventTime: Date.now()
                    })
                }
            }(We)),
                O(t, e)
        }
        function I(t) {
            const e = c.getInstance();
            !e.instrumentationEnabled && t.isAuto || !e.dataCollectionEnabled && !t.isAuto || !s.getInstance().requiredApisAvailable() || t.isAuto && Y() !== g.VISIBLE || (function Le() {
                return 3 === y
            }() ? U(t) : ee(t.performanceController).then(()=>U(t), ()=>U(t)))
        }
        function U(t) {
            if (!R())
                return;
            const e = c.getInstance();
            !e.loggingEnabled || !e.logTraceAfterSampling || setTimeout(()=>re(t, 1), 0)
        }
        function We(t, e) {
            return 0 === e ? function He(t) {
                const e = {
                    url: t.url,
                    http_method: t.httpMethod || 0,
                    http_response_code: 200,
                    response_payload_bytes: t.responsePayloadBytes,
                    client_start_time_us: t.startTimeUs,
                    time_to_response_initiated_us: t.timeToResponseInitiatedUs,
                    time_to_response_completed_us: t.timeToResponseCompletedUs
                }
                    , n = {
                    application_info: se(t.performanceController.app),
                    network_request_metric: e
                };
                return JSON.stringify(n)
            }(t) : function Ye(t) {
                const e = {
                    name: t.name,
                    is_auto: t.isAuto,
                    client_start_time_us: t.startTimeUs,
                    duration_us: t.durationUs
                };
                0 !== Object.keys(t.counters).length && (e.counters = t.counters);
                const n = t.getAttributes();
                0 !== Object.keys(n).length && (e.custom_attributes = n);
                const i = {
                    application_info: se(t.performanceController.app),
                    trace_metric: e
                };
                return JSON.stringify(i)
            }(t)
        }
        function se(t) {
            return {
                google_app_id: J(t),
                app_instance_id: R(),
                web_app_info: {
                    sdk_version: z,
                    page_url: s.getInstance().getUrl(),
                    service_worker_status: be(),
                    visibility_state: Y(),
                    effective_connection_type: Se()
                },
                application_process_state: 0
            }
        }
        const Ze = ["_fp", x, j];
        class p {
            constructor(e, n, i=!1, r) {
                this.performanceController = e,
                    this.name = n,
                    this.isAuto = i,
                    this.state = 1,
                    this.customAttributes = {},
                    this.counters = {},
                    this.api = s.getInstance(),
                    this.randomId = Math.floor(1e6 * Math.random()),
                this.isAuto || (this.traceStartMark = `FB-PERF-TRACE-START-${this.randomId}-${this.name}`,
                    this.traceStopMark = `FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,
                    this.traceMeasure = r || `${S}-${this.randomId}-${this.name}`,
                r && this.calculateTraceMetrics())
            }
            start() {
                if (1 !== this.state)
                    throw o.create("trace started", {
                        traceName: this.name
                    });
                this.api.mark(this.traceStartMark),
                    this.state = 2
            }
            stop() {
                if (2 !== this.state)
                    throw o.create("trace stopped", {
                        traceName: this.name
                    });
                this.state = 3,
                    this.api.mark(this.traceStopMark),
                    this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark),
                    this.calculateTraceMetrics(),
                    I(this)
            }
            record(e, n, i) {
                if (e <= 0)
                    throw o.create("nonpositive trace startTime", {
                        traceName: this.name
                    });
                if (n <= 0)
                    throw o.create("nonpositive trace duration", {
                        traceName: this.name
                    });
                if (this.durationUs = Math.floor(1e3 * n),
                    this.startTimeUs = Math.floor(1e3 * e),
                i && i.attributes && (this.customAttributes = Object.assign({}, i.attributes)),
                i && i.metrics)
                    for (const r of Object.keys(i.metrics))
                        isNaN(Number(i.metrics[r])) || (this.counters[r] = Math.floor(Number(i.metrics[r])));
                I(this)
            }
            incrementMetric(e, n=1) {
                this.putMetric(e, void 0 === this.counters[e] ? n : this.counters[e] + n)
            }
            putMetric(e, n) {
                if (!function et(t, e) {
                    return !(0 === t.length || t.length > 100) && (e && e.startsWith(V) && Ze.indexOf(t) > -1 || !t.startsWith("_"))
                }(e, this.name))
                    throw o.create("invalid custom metric name", {
                        customMetricName: e
                    });
                this.counters[e] = function tt(t) {
                    const e = Math.floor(t);
                    return e < t && f.info(`Metric value should be an Integer, setting the value as : ${e}.`),
                        e
                }(n ?? 0)
            }
            getMetric(e) {
                return this.counters[e] || 0
            }
            putAttribute(e, n) {
                const i = function Ae(t) {
                    return !(0 === t.length || t.length > 40 || Ee.some(n=>t.startsWith(n)) || !t.match(Te))
                }(e)
                    , r = function Re(t) {
                    return 0 !== t.length && t.length <= 100
                }(n);
                if (i && r)
                    this.customAttributes[e] = n;
                else {
                    if (!i)
                        throw o.create("invalid attribute name", {
                            attributeName: e
                        });
                    if (!r)
                        throw o.create("invalid attribute value", {
                            attributeValue: n
                        })
                }
            }
            getAttribute(e) {
                return this.customAttributes[e]
            }
            removeAttribute(e) {
                void 0 !== this.customAttributes[e] && delete this.customAttributes[e]
            }
            getAttributes() {
                return Object.assign({}, this.customAttributes)
            }
            setStartTime(e) {
                this.startTimeUs = e
            }
            setDuration(e) {
                this.durationUs = e
            }
            calculateTraceMetrics() {
                const e = this.api.getEntriesByName(this.traceMeasure)
                    , n = e && e[0];
                n && (this.durationUs = Math.floor(1e3 * n.duration),
                    this.startTimeUs = Math.floor(1e3 * (n.startTime + this.api.getTimeOrigin())))
            }
            static createOobTrace(e, n, i, r) {
                const a = s.getInstance().getUrl();
                if (!a)
                    return;
                const l = new p(e,V + a,!0)
                    , h = Math.floor(1e3 * s.getInstance().getTimeOrigin());
                if (l.setStartTime(h),
                n && n[0] && (l.setDuration(Math.floor(1e3 * n[0].duration)),
                    l.putMetric("domInteractive", Math.floor(1e3 * n[0].domInteractive)),
                    l.putMetric("domContentLoadedEventEnd", Math.floor(1e3 * n[0].domContentLoadedEventEnd)),
                    l.putMetric("loadEventEnd", Math.floor(1e3 * n[0].loadEventEnd))),
                    i) {
                    const C = i.find(k=>"first-paint" === k.name);
                    C && C.startTime && l.putMetric("_fp", Math.floor(1e3 * C.startTime));
                    const F = i.find(k=>"first-contentful-paint" === k.name);
                    F && F.startTime && l.putMetric(x, Math.floor(1e3 * F.startTime)),
                    r && l.putMetric(j, Math.floor(1e3 * r))
                }
                I(l)
            }
            static createUserTimingTrace(e, n) {
                I(new p(e,n,!1,n))
            }
        }
        function oe(t, e) {
            const n = e;
            if (!n || void 0 === n.responseStart)
                return;
            const i = s.getInstance().getTimeOrigin()
                , r = Math.floor(1e3 * (n.startTime + i))
                , a = n.responseStart ? Math.floor(1e3 * (n.responseStart - n.startTime)) : void 0
                , l = Math.floor(1e3 * (n.responseEnd - n.startTime));
            !function Xe(t) {
                const e = c.getInstance();
                if (!e.instrumentationEnabled)
                    return;
                const n = t.url
                    , i = e.logEndPointUrl.split("?")[0]
                    , r = e.flTransportEndpointUrl.split("?")[0];
                n === i || n === r || !e.loggingEnabled || !e.logNetworkAfterSampling || setTimeout(()=>re(t, 0), 0)
            }({
                performanceController: t,
                url: n.name && n.name.split("?")[0],
                responsePayloadBytes: n.transferSize,
                startTimeUs: r,
                timeToResponseInitiatedUs: a,
                timeToResponseCompletedUs: l
            })
        }
        function ae(t) {
            !R() || (setTimeout(()=>function rt(t) {
                const e = s.getInstance()
                    , n = e.getEntriesByType("navigation")
                    , i = e.getEntriesByType("paint");
                if (e.onFirstInputDelay) {
                    let r = setTimeout(()=>{
                            p.createOobTrace(t, n, i),
                                r = void 0
                        }
                        , 5e3);
                    e.onFirstInputDelay(a=>{
                            r && (clearTimeout(r),
                                p.createOobTrace(t, n, i, a))
                        }
                    )
                } else
                    p.createOobTrace(t, n, i)
            }(t), 0),
                setTimeout(()=>function it(t) {
                    const e = s.getInstance()
                        , n = e.getEntriesByType("resource");
                    for (const i of n)
                        oe(t, i);
                    e.setupObserver("resource", i=>oe(t, i))
                }(t), 0),
                setTimeout(()=>function st(t) {
                    const e = s.getInstance()
                        , n = e.getEntriesByType("measure");
                    for (const i of n)
                        ce(t, i);
                    e.setupObserver("measure", i=>ce(t, i))
                }(t), 0))
        }
        function ce(t, e) {
            const n = e.name;
            n.substring(0, S.length) !== S && p.createUserTimingTrace(t, n)
        }
        class ot {
            constructor(e, n) {
                this.app = e,
                    this.installations = n,
                    this.initialized = !1
            }
            _init(e) {
                this.initialized || (void 0 !== e?.dataCollectionEnabled && (this.dataCollectionEnabled = e.dataCollectionEnabled),
                void 0 !== e?.instrumentationEnabled && (this.instrumentationEnabled = e.instrumentationEnabled),
                    s.getInstance().requiredApisAvailable() ? (0,
                        _.eu)().then(n=>{
                            n && (function $e() {
                                ie || (T(5500),
                                    ie = !0)
                            }(),
                                ee(this).then(()=>ae(this), ()=>ae(this)),
                                this.initialized = !0)
                        }
                    ).catch(n=>{
                            f.info(`Environment doesn't support IndexedDB: ${n}`)
                        }
                    ) : f.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))
            }
            set instrumentationEnabled(e) {
                c.getInstance().instrumentationEnabled = e
            }
            get instrumentationEnabled() {
                return c.getInstance().instrumentationEnabled
            }
            set dataCollectionEnabled(e) {
                c.getInstance().dataCollectionEnabled = e
            }
            get dataCollectionEnabled() {
                return c.getInstance().dataCollectionEnabled
            }
        }
        const lt = (t,{options: e})=>{
                const n = t.getProvider("app").getImmediate()
                    , i = t.getProvider("installations-internal").getImmediate();
                if ("[DEFAULT]" !== n.name)
                    throw o.create("FB not default");
                if (typeof window > "u")
                    throw o.create("no window");
                !function ge(t) {
                    X = t
                }(window);
                const r = new ot(n,i);
                return r._init(e),
                    r
            }
        ;
        !function ut() {
            (0,
                v._registerComponent)(new L.wA("performance",lt,"PUBLIC")),
                (0,
                    v.registerVersion)(B, b),
                (0,
                    v.registerVersion)(B, b, "esm2017")
        }();
        class ft {
            constructor(e, n) {
                this.app = e,
                    this._delegate = n
            }
            get instrumentationEnabled() {
                return this._delegate.instrumentationEnabled
            }
            set instrumentationEnabled(e) {
                this._delegate.instrumentationEnabled = e
            }
            get dataCollectionEnabled() {
                return this._delegate.dataCollectionEnabled
            }
            set dataCollectionEnabled(e) {
                this._delegate.dataCollectionEnabled = e
            }
            trace(e) {
                return function ct(t, e) {
                    return t = (0,
                        _.m9)(t),
                        new p(t,e)
                }(this._delegate, e)
            }
        }
        function gt(t) {
            const e = t.getProvider("app-compat").getImmediate()
                , n = t.getProvider("performance").getImmediate();
            return new ft(e,n)
        }
        !function mt(t) {
            t.INTERNAL.registerComponent(new L.wA("performance-compat",gt,"PUBLIC")),
                t.registerVersion("@firebase/performance-compat", "0.1.15")
        }(ue.Z)
    }
}]);
