this.__wxLibrary = {
  fileName: "WAWorker.js",
  envType: "Worker",
  contextType: "others",
  execStart: Date.now(),
  mayHaveSnapshot: !1,
};
var __WAWorkerStartTime__ = this.__wxLibrary.execStart;
!(function (e) {
  var t = {
      updateTime: "2022.8.31 17:16:22",
      version: "2.26.0",
      features: {
        pruneWxConfigByPage: !0,
        injectGameContextPlugin: !0,
        lazyCodeLoading2: !0,
        lazyCodeLoadingForDevTool: !0,
        injectAppSeparatedPlugin: !0,
        nativeTrans: !0,
        gameLive: !0,
        skyline: !0,
        supportInvokeWithAppId: !0,
        wkFeatureVersion: 3,
        delayedServiceCodeCache: !0,
        gameLiveInvite: !0,
        expt: [
          "clicfg_appbrand_ios_native_download_new",
          "clicfg_appbrand_native_download",
          "clicfg_appbrand_ios_native_socket_wcwss_new",
          "clicfg_navigation_use_scl_alert_v5",
          "clicfg_appbrand_ios_native_readfile",
          "clicfg_appbrand_native_readfile",
          "clicfg_appbrand_ios_game_split_multi_plugincode",
          "clicfg_appbrand_game_split_multi_plugincode",
          "clicfg_appbrand_android_tcp_buffer",
          "clicfg_appbrand_ios_tcp_buffer",
          "clicfg_weapp_weak_net_predict_local",
          "clicfg_wa_ar_iosurface_switch",
          "clicfg_canvas_use_magic_brush",
          "clicfg_appbrand_report_trace_event",
          "clicfg_appbrand_ios_allow_inner_context_use_webaudio",
          "clicfg_appbrand_android_reject_inner_context_use_webaudio",
          "clicfg_appbrand_skyline_text_style",
          "clicfg_appbrand_ios_free_httpdns_sdk_cache",
          "clicfg_appbrand_android_free_httpdns_sdk_cache",
        ],
        snapshotConfig: {
          "app:main": ["WAServiceMainContext.js"],
          "app:sub": ["WASubContext.js"],
          "app:subRender": ["WARenderContext.js"],
          "game:main": ["WAGame.js"],
          "game:sub": ["WAGameSubContext.js"],
        },
      },
      debugOptions: {},
    },
    r = e.Function,
    n = r,
    o = {};
  (() => {
    var e = {
        2230: (e, t, r) => {
          var n = {
            "./applyDecoratedDescriptor": 1356,
            "./asyncToGenerator": 6591,
            "./extends": 1782,
            "./initializerDefineProperty": 5672,
            "./initializerWarningHelper": 2741,
            "./objectSpread2": 4067,
            "./objectWithoutProperties": 858,
          };
          function o(e) {
            var t = i(e);
            return r(t);
          }
          function i(e) {
            if (!r.o(n, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            }
            return n[e];
          }
          (o.keys = function () {
            return Object.keys(n);
          }),
            (o.resolve = i),
            (e.exports = o),
            (o.id = 2230);
        },
        1356: (e, t, r) => {
          "use strict";
          function n(e, t, r, n, o) {
            var i = {};
            return (
              Object.keys(n).forEach(function (e) {
                i[e] = n[e];
              }),
              (i.enumerable = !!i.enumerable),
              (i.configurable = !!i.configurable),
              ("value" in i || i.initializer) && (i.writable = !0),
              (i = r
                .slice()
                .reverse()
                .reduce(function (r, n) {
                  return n(e, t, r) || r;
                }, i)),
              o &&
                void 0 !== i.initializer &&
                ((i.value = i.initializer ? i.initializer.call(o) : void 0),
                (i.initializer = void 0)),
              void 0 === i.initializer &&
                (Object.defineProperty(e, t, i), (i = null)),
              i
            );
          }
          r.r(t), r.d(t, { default: () => n });
        },
        6591: (e, t, r) => {
          "use strict";
          function n(e, t, r, n, o, i, a) {
            try {
              var s = e[i](a),
                c = s.value;
            } catch (e) {
              return void r(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(n, o);
          }
          function o(e) {
            return function () {
              var t = this,
                r = arguments;
              return new Promise(function (o, i) {
                var a = e.apply(t, r);
                function s(e) {
                  n(a, o, i, s, c, "next", e);
                }
                function c(e) {
                  n(a, o, i, s, c, "throw", e);
                }
                s(void 0);
              });
            };
          }
          r.r(t), r.d(t, { default: () => o });
        },
        1782: (e, t, r) => {
          "use strict";
          function n() {
            return (
              (n = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  }),
              n.apply(this, arguments)
            );
          }
          r.r(t), r.d(t, { default: () => n });
        },
        5672: (e, t, r) => {
          "use strict";
          function n(e, t, r, n) {
            r &&
              Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0,
              });
          }
          r.r(t), r.d(t, { default: () => n });
        },
        2741: (e, t, r) => {
          "use strict";
          function n(e, t) {
            throw new Error(
              "Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform."
            );
          }
          r.r(t), r.d(t, { default: () => n });
        },
        4067: (e, t, r) => {
          "use strict";
          function n(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function o(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function i(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(r), !0).forEach(function (t) {
                    n(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : o(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          r.r(t), r.d(t, { default: () => i });
        },
        858: (e, t, r) => {
          "use strict";
          function n(e, t) {
            if (null == e) return {};
            var r,
              n,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]));
            }
            return o;
          }
          r.r(t), r.d(t, { default: () => n });
        },
        3869: (e, t, r) => {
          var n = r(7289),
            o = r(7121),
            i = r(1896),
            a = r(140),
            s = i.data,
            c = i.normalize,
            l = "USE_FUNCTION_CONSTRUCTOR",
            u = "AsyncIteratorPrototype",
            f = function (e, t) {
              if (o(e)) for (var r = 0; r < e.length; r++) s[c(e[r])] = t;
            };
          e.exports = function (e) {
            "object" == typeof e &&
              (f(e.useNative, i.NATIVE),
              f(e.usePolyfill, i.POLYFILL),
              f(e.useFeatureDetection, null),
              n(e, l) &&
                (a.USE_FUNCTION_CONSTRUCTOR = !!e.USE_FUNCTION_CONSTRUCTOR),
              n(e, u) &&
                (a.USE_FUNCTION_CONSTRUCTOR = e.AsyncIteratorPrototype));
          };
        },
        2764: (e) => {
          e.exports = function (e) {
            if ("function" != typeof e)
              throw TypeError(String(e) + " is not a function");
            return e;
          };
        },
        4212: (e, t, r) => {
          var n = r(1635);
          e.exports = function (e) {
            if (!n(e) && null !== e)
              throw TypeError("Can't set " + String(e) + " as a prototype");
            return e;
          };
        },
        199: (e, t, r) => {
          var n = r(4946),
            o = r(7520),
            i = r(7447),
            a = n("unscopables"),
            s = Array.prototype;
          null == s[a] && i.f(s, a, { configurable: !0, value: o(null) }),
            (e.exports = function (e) {
              s[a][e] = !0;
            });
        },
        2597: (e, t, r) => {
          "use strict";
          var n = r(7433).charAt;
          e.exports = function (e, t, r) {
            return t + (r ? n(e, t).length : 1);
          };
        },
        6435: (e) => {
          e.exports = function (e, t, r) {
            if (!(e instanceof t))
              throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return e;
          };
        },
        9973: (e, t, r) => {
          var n = r(1635);
          e.exports = function (e) {
            if (!n(e)) throw TypeError(String(e) + " is not an object");
            return e;
          };
        },
        8548: (e) => {
          e.exports =
            "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
        },
        5310: (e, t, r) => {
          "use strict";
          var o,
            i = r(8548),
            a = r(7048),
            s = r(9065),
            c = r(1635),
            l = r(7289),
            u = r(5225),
            f = r(2784),
            p = r(1198),
            d = r(7447).f,
            h = r(7435),
            g = r(3474),
            v = r(4946),
            y = r(9086),
            m = s.Int8Array,
            _ = m && m.prototype,
            b = s.Uint8ClampedArray,
            w = b && b.prototype,
            k = m && h(m),
            S = _ && h(_),
            T = Object.prototype,
            A = T.isPrototypeOf,
            x = v("toStringTag"),
            P = y("TYPED_ARRAY_TAG"),
            I = i && !!g && "Opera" !== u(s.opera),
            E = !1,
            C = {
              Int8Array: 1,
              Uint8Array: 1,
              Uint8ClampedArray: 1,
              Int16Array: 2,
              Uint16Array: 2,
              Int32Array: 4,
              Uint32Array: 4,
              Float32Array: 4,
              Float64Array: 8,
            },
            O = { BigInt64Array: 8, BigUint64Array: 8 },
            M = function (e) {
              if (!c(e)) return !1;
              var t = u(e);
              return l(C, t) || l(O, t);
            };
          for (o in C) s[o] || (I = !1);
          if (
            (!I || "function" != typeof k || k === n.prototype) &&
            ((k = function () {
              throw TypeError("Incorrect invocation");
            }),
            I)
          )
            for (o in C) s[o] && g(s[o], k);
          if ((!I || !S || S === T) && ((S = k.prototype), I))
            for (o in C) s[o] && g(s[o].prototype, S);
          if ((I && h(w) !== S && g(w, S), a && !l(S, x)))
            for (o in ((E = !0),
            d(S, x, {
              get: function () {
                return c(this) ? this[P] : void 0;
              },
            }),
            C))
              s[o] && f(s[o], P, o);
          e.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: I,
            TYPED_ARRAY_TAG: E && P,
            aTypedArray: function (e) {
              if (M(e)) return e;
              throw TypeError("Target is not a typed array");
            },
            aTypedArrayConstructor: function (e) {
              if (g) {
                if (A.call(k, e)) return e;
              } else
                for (var t in C)
                  if (l(C, o)) {
                    var r = s[t];
                    if (r && (e === r || A.call(r, e))) return e;
                  }
              throw TypeError("Target is not a typed array constructor");
            },
            exportTypedArrayMethod: function (e, t, r) {
              if (a) {
                if (r)
                  for (var n in C) {
                    var o = s[n];
                    if (o && l(o.prototype, e))
                      try {
                        delete o.prototype[e];
                      } catch (e) {}
                  }
                (S[e] && !r) || p(S, e, r ? t : (I && _[e]) || t);
              }
            },
            exportTypedArrayStaticMethod: function (e, t, r) {
              var n, o;
              if (a) {
                if (g) {
                  if (r)
                    for (n in C)
                      if ((o = s[n]) && l(o, e))
                        try {
                          delete o[e];
                        } catch (e) {}
                  if (k[e] && !r) return;
                  try {
                    return p(k, e, r ? t : (I && k[e]) || t);
                  } catch (e) {}
                }
                for (n in C) !(o = s[n]) || (o[e] && !r) || p(o, e, t);
              }
            },
            isView: function (e) {
              if (!c(e)) return !1;
              var t = u(e);
              return "DataView" === t || l(C, t) || l(O, t);
            },
            isTypedArray: M,
            TypedArray: k,
            TypedArrayPrototype: S,
          };
        },
        6678: (e, t, r) => {
          "use strict";
          var n = r(9065),
            o = r(7048),
            i = r(8548),
            a = r(2784),
            s = r(7692),
            c = r(1668),
            l = r(6435),
            u = r(1597),
            f = r(4086),
            p = r(137),
            d = r(9896),
            h = r(7435),
            g = r(3474),
            v = r(8476).f,
            y = r(7447).f,
            m = r(5385),
            _ = r(7277),
            b = r(8927),
            w = b.get,
            k = b.set,
            S = "ArrayBuffer",
            T = "DataView",
            A = "Wrong index",
            x = n.ArrayBuffer,
            P = x,
            I = n.DataView,
            E = I && I.prototype,
            C = Object.prototype,
            O = n.RangeError,
            M = d.pack,
            j = d.unpack,
            R = function (e) {
              return [255 & e];
            },
            L = function (e) {
              return [255 & e, (e >> 8) & 255];
            },
            D = function (e) {
              return [
                255 & e,
                (e >> 8) & 255,
                (e >> 16) & 255,
                (e >> 24) & 255,
              ];
            },
            N = function (e) {
              return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
            },
            W = function (e) {
              return M(e, 23, 4);
            },
            F = function (e) {
              return M(e, 52, 8);
            },
            $ = function (e, t) {
              y(e.prototype, t, {
                get: function () {
                  return w(this)[t];
                },
              });
            },
            B = function (e, t, r, n) {
              var o = p(r),
                i = w(e);
              if (o + t > i.byteLength) throw O(A);
              var a = w(i.buffer).bytes,
                s = o + i.byteOffset,
                c = a.slice(s, s + t);
              return n ? c : c.reverse();
            },
            U = function (e, t, r, n, o, i) {
              var a = p(r),
                s = w(e);
              if (a + t > s.byteLength) throw O(A);
              for (
                var c = w(s.buffer).bytes,
                  l = a + s.byteOffset,
                  u = n(+o),
                  f = 0;
                f < t;
                f++
              )
                c[l + f] = u[i ? f : t - f - 1];
            };
          if (i) {
            if (
              !c(function () {
                x(1);
              }) ||
              !c(function () {
                new x(-1);
              }) ||
              c(function () {
                return new x(), new x(1.5), new x(NaN), x.name != S;
              })
            ) {
              for (
                var G,
                  Z = ((P = function (e) {
                    return l(this, P), new x(p(e));
                  }).prototype = x.prototype),
                  q = v(x),
                  H = 0;
                q.length > H;

              )
                (G = q[H++]) in P || a(P, G, x[G]);
              Z.constructor = P;
            }
            g && h(E) !== C && g(E, C);
            var V = new I(new P(2)),
              K = E.setInt8;
            V.setInt8(0, 2147483648),
              V.setInt8(1, 2147483649),
              (!V.getInt8(0) && V.getInt8(1)) ||
                s(
                  E,
                  {
                    setInt8: function (e, t) {
                      K.call(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                      K.call(this, e, (t << 24) >> 24);
                    },
                  },
                  { unsafe: !0 }
                );
          } else
            (P = function (e) {
              l(this, P, S);
              var t = p(e);
              k(this, { bytes: m.call(new Array(t), 0), byteLength: t }),
                o || (this.byteLength = t);
            }),
              (I = function (e, t, r) {
                l(this, I, T), l(e, P, T);
                var n = w(e).byteLength,
                  i = u(t);
                if (i < 0 || i > n) throw O("Wrong offset");
                if (i + (r = void 0 === r ? n - i : f(r)) > n)
                  throw O("Wrong length");
                k(this, { buffer: e, byteLength: r, byteOffset: i }),
                  o ||
                    ((this.buffer = e),
                    (this.byteLength = r),
                    (this.byteOffset = i));
              }),
              o &&
                ($(P, "byteLength"),
                $(I, "buffer"),
                $(I, "byteLength"),
                $(I, "byteOffset")),
              s(I.prototype, {
                getInt8: function (e) {
                  return (B(this, 1, e)[0] << 24) >> 24;
                },
                getUint8: function (e) {
                  return B(this, 1, e)[0];
                },
                getInt16: function (e) {
                  var t = B(
                    this,
                    2,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                  return (((t[1] << 8) | t[0]) << 16) >> 16;
                },
                getUint16: function (e) {
                  var t = B(
                    this,
                    2,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                  return (t[1] << 8) | t[0];
                },
                getInt32: function (e) {
                  return N(
                    B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
                  );
                },
                getUint32: function (e) {
                  return (
                    N(
                      B(
                        this,
                        4,
                        e,
                        arguments.length > 1 ? arguments[1] : void 0
                      )
                    ) >>> 0
                  );
                },
                getFloat32: function (e) {
                  return j(
                    B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
                    23
                  );
                },
                getFloat64: function (e) {
                  return j(
                    B(this, 8, e, arguments.length > 1 ? arguments[1] : void 0),
                    52
                  );
                },
                setInt8: function (e, t) {
                  U(this, 1, e, R, t);
                },
                setUint8: function (e, t) {
                  U(this, 1, e, R, t);
                },
                setInt16: function (e, t) {
                  U(
                    this,
                    2,
                    e,
                    L,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setUint16: function (e, t) {
                  U(
                    this,
                    2,
                    e,
                    L,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setInt32: function (e, t) {
                  U(
                    this,
                    4,
                    e,
                    D,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setUint32: function (e, t) {
                  U(
                    this,
                    4,
                    e,
                    D,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setFloat32: function (e, t) {
                  U(
                    this,
                    4,
                    e,
                    W,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
                setFloat64: function (e, t) {
                  U(
                    this,
                    8,
                    e,
                    F,
                    t,
                    arguments.length > 2 ? arguments[2] : void 0
                  );
                },
              });
          _(P, S), _(I, T), (e.exports = { ArrayBuffer: P, DataView: I });
        },
        5385: (e, t, r) => {
          "use strict";
          var n = r(8432),
            o = r(3225),
            i = r(4086);
          e.exports = function (e) {
            for (
              var t = n(this),
                r = i(t.length),
                a = arguments.length,
                s = o(a > 1 ? arguments[1] : void 0, r),
                c = a > 2 ? arguments[2] : void 0,
                l = void 0 === c ? r : o(c, r);
              l > s;

            )
              t[s++] = e;
            return t;
          };
        },
        8117: (e, t, r) => {
          var n = r(2401),
            o = r(4086),
            i = r(3225),
            a = function (e) {
              return function (t, r, a) {
                var s,
                  c = n(t),
                  l = o(c.length),
                  u = i(a, l);
                if (e && r != r) {
                  for (; l > u; ) if ((s = c[u++]) != s) return !0;
                } else
                  for (; l > u; u++)
                    if ((e || u in c) && c[u] === r) return e || u || 0;
                return !e && -1;
              };
            };
          e.exports = { includes: a(!0), indexOf: a(!1) };
        },
        4100: (e, t, r) => {
          var n = r(3280),
            o = r(3231),
            i = r(8432),
            a = r(4086),
            s = function (e) {
              var t = 6 == e;
              return function (r, s, c) {
                for (
                  var l, u = i(r), f = o(u), p = n(s, c, 3), d = a(f.length);
                  d-- > 0;

                )
                  if (p((l = f[d]), d, u))
                    switch (e) {
                      case 5:
                        return l;
                      case 6:
                        return d;
                    }
                return t ? -1 : void 0;
              };
            };
          e.exports = { findLast: s(5), findLastIndex: s(6) };
        },
        4937: (e, t, r) => {
          var n = r(3280),
            o = r(3231),
            i = r(8432),
            a = r(4086),
            s = r(1785),
            c = [].push,
            l = function (e) {
              var t = 1 == e,
                r = 2 == e,
                l = 3 == e,
                u = 4 == e,
                f = 6 == e,
                p = 7 == e,
                d = 5 == e || f;
              return function (h, g, v, y) {
                for (
                  var m,
                    _,
                    b = i(h),
                    w = o(b),
                    k = n(g, v, 3),
                    S = a(w.length),
                    T = 0,
                    A = y || s,
                    x = t ? A(h, S) : r || p ? A(h, 0) : void 0;
                  S > T;
                  T++
                )
                  if ((d || T in w) && ((_ = k((m = w[T]), T, b)), e))
                    if (t) x[T] = _;
                    else if (_)
                      switch (e) {
                        case 3:
                          return !0;
                        case 5:
                          return m;
                        case 6:
                          return T;
                        case 2:
                          c.call(x, m);
                      }
                    else
                      switch (e) {
                        case 4:
                          return !1;
                        case 7:
                          c.call(x, m);
                      }
                return f ? -1 : l || u ? u : x;
              };
            };
          e.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6),
            filterOut: l(7),
          };
        },
        834: (e, t, r) => {
          "use strict";
          var n = r(1668);
          e.exports = function (e, t) {
            var r = [][e];
            return (
              !!r &&
              n(function () {
                r.call(
                  null,
                  t ||
                    function () {
                      throw 1;
                    },
                  1
                );
              })
            );
          };
        },
        8113: (e, t, r) => {
          var n = r(2764),
            o = r(8432),
            i = r(3231),
            a = r(4086),
            s = function (e) {
              return function (t, r, s, c) {
                n(r);
                var l = o(t),
                  u = i(l),
                  f = a(l.length),
                  p = e ? f - 1 : 0,
                  d = e ? -1 : 1;
                if (s < 2)
                  for (;;) {
                    if (p in u) {
                      (c = u[p]), (p += d);
                      break;
                    }
                    if (((p += d), e ? p < 0 : f <= p))
                      throw TypeError(
                        "Reduce of empty array with no initial value"
                      );
                  }
                for (; e ? p >= 0 : f > p; p += d)
                  p in u && (c = r(c, u[p], p, l));
                return c;
              };
            };
          e.exports = { left: s(!1), right: s(!0) };
        },
        5713: (e) => {
          var t = Math.floor,
            r = function (e, i) {
              var a = e.length,
                s = t(a / 2);
              return a < 8
                ? n(e, i)
                : o(r(e.slice(0, s), i), r(e.slice(s), i), i);
            },
            n = function (e, t) {
              for (var r, n, o = e.length, i = 1; i < o; ) {
                for (n = i, r = e[i]; n && t(e[n - 1], r) > 0; ) e[n] = e[--n];
                n !== i++ && (e[n] = r);
              }
              return e;
            },
            o = function (e, t, r) {
              for (
                var n = e.length, o = t.length, i = 0, a = 0, s = [];
                i < n || a < o;

              )
                i < n && a < o
                  ? s.push(r(e[i], t[a]) <= 0 ? e[i++] : t[a++])
                  : s.push(i < n ? e[i++] : t[a++]);
              return s;
            };
          e.exports = r;
        },
        1785: (e, t, r) => {
          var n = r(1635),
            o = r(7121),
            i = r(4946)("species");
          e.exports = function (e, t) {
            var r;
            return (
              o(e) &&
                ("function" != typeof (r = e.constructor) ||
                (r !== Array && !o(r.prototype))
                  ? n(r) && null === (r = r[i]) && (r = void 0)
                  : (r = void 0)),
              new (void 0 === r ? Array : r)(0 === t ? 0 : t)
            );
          };
        },
        7513: (e, t, r) => {
          var n = r(4946)("iterator"),
            o = !1;
          try {
            var i = 0,
              a = {
                next: function () {
                  return { done: !!i++ };
                },
                return: function () {
                  o = !0;
                },
              };
            (a[n] = function () {
              return this;
            }),
              Array.from(a, function () {
                throw 2;
              });
          } catch (e) {}
          e.exports = function (e, t) {
            if (!t && !o) return !1;
            var r = !1;
            try {
              var i = {};
              (i[n] = function () {
                return {
                  next: function () {
                    return { done: (r = !0) };
                  },
                };
              }),
                e(i);
            } catch (e) {}
            return r;
          };
        },
        7020: (e) => {
          var t = {}.toString;
          e.exports = function (e) {
            return t.call(e).slice(8, -1);
          };
        },
        5225: (e, t, r) => {
          var n = r(1590),
            o = r(7020),
            i = r(4946)("toStringTag"),
            a =
              "Arguments" ==
              o(
                (function () {
                  return arguments;
                })()
              );
          e.exports = n
            ? o
            : function (e) {
                var t, r, n;
                return void 0 === e
                  ? "Undefined"
                  : null === e
                  ? "Null"
                  : "string" ==
                    typeof (r = (function (e, t) {
                      try {
                        return e[t];
                      } catch (e) {}
                    })((t = Object(e)), i))
                  ? r
                  : a
                  ? o(t)
                  : "Object" == (n = o(t)) && "function" == typeof t.callee
                  ? "Arguments"
                  : n;
              };
        },
        5323: (e, t, r) => {
          var n = r(7289),
            o = r(5044),
            i = r(8225),
            a = r(7447);
          e.exports = function (e, t) {
            for (var r = o(t), s = a.f, c = i.f, l = 0; l < r.length; l++) {
              var u = r[l];
              n(e, u) || s(e, u, c(t, u));
            }
          };
        },
        9471: (e, t, r) => {
          var n = r(1668);
          e.exports = !n(function () {
            function e() {}
            return (
              (e.prototype.constructor = null),
              Object.getPrototypeOf(new e()) !== e.prototype
            );
          });
        },
        918: (e, t, r) => {
          "use strict";
          var n = r(4180).IteratorPrototype,
            o = r(7520),
            i = r(9910),
            a = r(7277),
            s = r(5488),
            c = function () {
              return this;
            };
          e.exports = function (e, t, r) {
            var l = t + " Iterator";
            return (
              (e.prototype = o(n, { next: i(1, r) })),
              a(e, l, !1, !0),
              (s[l] = c),
              e
            );
          };
        },
        2784: (e, t, r) => {
          var n = r(7048),
            o = r(7447),
            i = r(9910);
          e.exports = n
            ? function (e, t, r) {
                return o.f(e, t, i(1, r));
              }
            : function (e, t, r) {
                return (e[t] = r), e;
              };
        },
        9910: (e) => {
          e.exports = function (e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t,
            };
          };
        },
        7615: (e, t, r) => {
          "use strict";
          var n = r(3979),
            o = r(7447),
            i = r(9910);
          e.exports = function (e, t, r) {
            var a = n(t);
            a in e ? o.f(e, a, i(0, r)) : (e[a] = r);
          };
        },
        7387: (e, t, r) => {
          var n = r(242),
            o = r(7289),
            i = r(2869),
            a = r(7447).f;
          e.exports = function (e) {
            var t = n.Symbol || (n.Symbol = {});
            o(t, e) || a(t, e, { value: i.f(e) });
          };
        },
        7048: (e, t, r) => {
          var n = r(1668);
          e.exports = !n(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        6385: (e, t, r) => {
          var n = r(9065),
            o = r(1635),
            i = n.document,
            a = o(i) && o(i.createElement);
          e.exports = function (e) {
            return a ? i.createElement(e) : {};
          };
        },
        8482: (e, t, r) => {
          var n = r(8177).match(/firefox\/(\d+)/i);
          e.exports = !!n && +n[1];
        },
        4194: (e) => {
          e.exports = "object" == typeof window;
        },
        7302: (e, t, r) => {
          var n = r(8177);
          e.exports = /MSIE|Trident/.test(n);
        },
        6250: (e, t, r) => {
          var n = r(8177);
          e.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(n);
        },
        8563: (e, t, r) => {
          var n = r(7020),
            o = r(9065);
          e.exports = "process" == n(o.process);
        },
        2813: (e, t, r) => {
          var n = r(8177);
          e.exports = /web0s(?!.*chrome)/i.test(n);
        },
        8177: (e, t, r) => {
          var n = r(8905);
          e.exports = n("navigator", "userAgent") || "";
        },
        5753: (e, t, r) => {
          var n,
            o,
            i = r(9065),
            a = r(8177),
            s = i.process,
            c = s && s.versions,
            l = c && c.v8;
          l
            ? (o = (n = l.split("."))[0] < 4 ? 1 : n[0] + n[1])
            : a &&
              (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
              (n = a.match(/Chrome\/(\d+)/)) &&
              (o = n[1]),
            (e.exports = o && +o);
        },
        4289: (e, t, r) => {
          var n = r(8177).match(/AppleWebKit\/(\d+)\./);
          e.exports = !!n && +n[1];
        },
        905: (e) => {
          e.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        3151: (e, t, r) => {
          var n = r(9065),
            o = r(8225).f,
            i = r(2784),
            a = r(1198),
            s = r(4553),
            c = r(5323),
            l = r(1896);
          e.exports = function (e, t) {
            var r,
              u,
              f,
              p,
              d,
              h = e.target,
              g = e.global,
              v = e.stat;
            if ((r = g ? n : v ? n[h] || s(h, {}) : (n[h] || {}).prototype))
              for (u in t) {
                if (
                  ((p = t[u]),
                  (f = e.noTargetGet ? (d = o(r, u)) && d.value : r[u]),
                  !l(g ? u : h + (v ? "." : "#") + u, e.forced) && void 0 !== f)
                ) {
                  if (typeof p == typeof f) continue;
                  c(p, f);
                }
                (e.sham || (f && f.sham)) && i(p, "sham", !0), a(r, u, p, e);
              }
          };
        },
        1668: (e) => {
          e.exports = function (e) {
            try {
              return !!e();
            } catch (e) {
              return !0;
            }
          };
        },
        2982: (e, t, r) => {
          "use strict";
          r(1283);
          var n = r(1198),
            o = r(2591),
            i = r(1668),
            a = r(4946),
            s = r(2784),
            c = a("species"),
            l = RegExp.prototype;
          e.exports = function (e, t, r, u) {
            var f = a(e),
              p = !i(function () {
                var t = {};
                return (
                  (t[f] = function () {
                    return 7;
                  }),
                  7 != ""[e](t)
                );
              }),
              d =
                p &&
                !i(function () {
                  var t = !1,
                    r = /a/;
                  return (
                    "split" === e &&
                      (((r = {}).constructor = {}),
                      (r.constructor[c] = function () {
                        return r;
                      }),
                      (r.flags = ""),
                      (r[f] = /./[f])),
                    (r.exec = function () {
                      return (t = !0), null;
                    }),
                    r[f](""),
                    !t
                  );
                });
            if (!p || !d || r) {
              var h = /./[f],
                g = t(f, ""[e], function (e, t, r, n, i) {
                  var a = t.exec;
                  return a === o || a === l.exec
                    ? p && !i
                      ? { done: !0, value: h.call(t, r, n) }
                      : { done: !0, value: e.call(r, t, n) }
                    : { done: !1 };
                });
              n(String.prototype, e, g[0]), n(l, f, g[1]);
            }
            u && s(l[f], "sham", !0);
          };
        },
        6007: (e, t, r) => {
          "use strict";
          var n = r(7121),
            o = r(4086),
            i = r(3280),
            a = function (e, t, r, s, c, l, u, f) {
              for (var p, d = c, h = 0, g = !!u && i(u, f, 3); h < s; ) {
                if (h in r) {
                  if (((p = g ? g(r[h], h, t) : r[h]), l > 0 && n(p)))
                    d = a(e, t, p, o(p.length), d, l - 1) - 1;
                  else {
                    if (d >= 9007199254740991)
                      throw TypeError("Exceed the acceptable array length");
                    e[d] = p;
                  }
                  d++;
                }
                h++;
              }
              return d;
            };
          e.exports = a;
        },
        3280: (e, t, r) => {
          var n = r(2764);
          e.exports = function (e, t, r) {
            if ((n(e), void 0 === t)) return e;
            switch (r) {
              case 0:
                return function () {
                  return e.call(t);
                };
              case 1:
                return function (r) {
                  return e.call(t, r);
                };
              case 2:
                return function (r, n) {
                  return e.call(t, r, n);
                };
              case 3:
                return function (r, n, o) {
                  return e.call(t, r, n, o);
                };
            }
            return function () {
              return e.apply(t, arguments);
            };
          };
        },
        8905: (e, t, r) => {
          var n = r(242),
            o = r(9065),
            i = function (e) {
              return "function" == typeof e ? e : void 0;
            };
          e.exports = function (e, t) {
            return arguments.length < 2
              ? i(n[e]) || i(o[e])
              : (n[e] && n[e][t]) || (o[e] && o[e][t]);
          };
        },
        6265: (e, t, r) => {
          var n = r(5225),
            o = r(5488),
            i = r(4946)("iterator");
          e.exports = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[n(e)];
          };
        },
        1383: (e, t, r) => {
          var n = r(8432),
            o = Math.floor,
            i = "".replace,
            a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            s = /\$([$&'`]|\d{1,2})/g;
          e.exports = function (e, t, r, c, l, u) {
            var f = r + e.length,
              p = c.length,
              d = s;
            return (
              void 0 !== l && ((l = n(l)), (d = a)),
              i.call(u, d, function (n, i) {
                var a;
                switch (i.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return e;
                  case "`":
                    return t.slice(0, r);
                  case "'":
                    return t.slice(f);
                  case "<":
                    a = l[i.slice(1, -1)];
                    break;
                  default:
                    var s = +i;
                    if (0 === s) return n;
                    if (s > p) {
                      var u = o(s / 10);
                      return 0 === u
                        ? n
                        : u <= p
                        ? void 0 === c[u - 1]
                          ? i.charAt(1)
                          : c[u - 1] + i.charAt(1)
                        : n;
                    }
                    a = c[s - 1];
                }
                return void 0 === a ? "" : a;
              })
            );
          };
        },
        9065: (e, t, r) => {
          var o = function (e) {
            return e && e.Math == Math && e;
          };
          e.exports =
            o("object" == typeof globalThis && globalThis) ||
            o("object" == typeof window && window) ||
            o("object" == typeof self && self) ||
            o("object" == typeof r.g && r.g) ||
            (function () {
              return this;
            })() ||
            n("return this")();
        },
        7289: (e, t, r) => {
          var n = r(8432),
            o = {}.hasOwnProperty;
          e.exports =
            Object.hasOwn ||
            function (e, t) {
              return o.call(n(e), t);
            };
        },
        352: (e) => {
          e.exports = {};
        },
        336: (e, t, r) => {
          var n = r(9065);
          e.exports = function (e, t) {
            var r = n.console;
            r &&
              r.error &&
              (1 === arguments.length ? r.error(e) : r.error(e, t));
          };
        },
        7738: (e, t, r) => {
          var n = r(8905);
          e.exports = n("document", "documentElement");
        },
        3731: (e, t, r) => {
          var n = r(7048),
            o = r(1668),
            i = r(6385);
          e.exports =
            !n &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        9896: (e) => {
          var t = Math.abs,
            r = Math.pow,
            n = Math.floor,
            o = Math.log,
            i = Math.LN2;
          e.exports = {
            pack: function (e, a, s) {
              var c,
                l,
                u,
                f = new Array(s),
                p = 8 * s - a - 1,
                d = (1 << p) - 1,
                h = d >> 1,
                g = 23 === a ? r(2, -24) - r(2, -77) : 0,
                v = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
                y = 0;
              for (
                (e = t(e)) != e || e === 1 / 0
                  ? ((l = e != e ? 1 : 0), (c = d))
                  : ((c = n(o(e) / i)),
                    e * (u = r(2, -c)) < 1 && (c--, (u *= 2)),
                    (e += c + h >= 1 ? g / u : g * r(2, 1 - h)) * u >= 2 &&
                      (c++, (u /= 2)),
                    c + h >= d
                      ? ((l = 0), (c = d))
                      : c + h >= 1
                      ? ((l = (e * u - 1) * r(2, a)), (c += h))
                      : ((l = e * r(2, h - 1) * r(2, a)), (c = 0)));
                a >= 8;
                f[y++] = 255 & l, l /= 256, a -= 8
              );
              for (
                c = (c << a) | l, p += a;
                p > 0;
                f[y++] = 255 & c, c /= 256, p -= 8
              );
              return (f[--y] |= 128 * v), f;
            },
            unpack: function (e, t) {
              var n,
                o = e.length,
                i = 8 * o - t - 1,
                a = (1 << i) - 1,
                s = a >> 1,
                c = i - 7,
                l = o - 1,
                u = e[l--],
                f = 127 & u;
              for (u >>= 7; c > 0; f = 256 * f + e[l], l--, c -= 8);
              for (
                n = f & ((1 << -c) - 1), f >>= -c, c += t;
                c > 0;
                n = 256 * n + e[l], l--, c -= 8
              );
              if (0 === f) f = 1 - s;
              else {
                if (f === a) return n ? NaN : u ? -1 / 0 : 1 / 0;
                (n += r(2, t)), (f -= s);
              }
              return (u ? -1 : 1) * n * r(2, f - t);
            },
          };
        },
        3231: (e, t, r) => {
          var n = r(1668),
            o = r(7020),
            i = "".split;
          e.exports = n(function () {
            return !Object("z").propertyIsEnumerable(0);
          })
            ? function (e) {
                return "String" == o(e) ? i.call(e, "") : Object(e);
              }
            : Object;
        },
        7133: (e, t, r) => {
          var n = r(1635),
            o = r(3474);
          e.exports = function (e, t, r) {
            var i, a;
            return (
              o &&
                "function" == typeof (i = t.constructor) &&
                i !== r &&
                n((a = i.prototype)) &&
                a !== r.prototype &&
                o(e, a),
              e
            );
          };
        },
        3724: (e, t, r) => {
          var o = r(140),
            i = n.toString;
          "function" != typeof o.inspectSource &&
            (o.inspectSource = function (e) {
              return i.call(e);
            }),
            (e.exports = o.inspectSource);
        },
        8927: (e, t, r) => {
          var n,
            o,
            i,
            a = r(1454),
            s = r(9065),
            c = r(1635),
            l = r(2784),
            u = r(7289),
            f = r(140),
            p = r(2929),
            d = r(352),
            h = "Object already initialized",
            g = s.WeakMap;
          if (a || f.state) {
            var v = f.state || (f.state = new g()),
              y = v.get,
              m = v.has,
              _ = v.set;
            (n = function (e, t) {
              if (m.call(v, e)) throw new TypeError(h);
              return (t.facade = e), _.call(v, e, t), t;
            }),
              (o = function (e) {
                return y.call(v, e) || {};
              }),
              (i = function (e) {
                return m.call(v, e);
              });
          } else {
            var b = p("state");
            (d[b] = !0),
              (n = function (e, t) {
                if (u(e, b)) throw new TypeError(h);
                return (t.facade = e), l(e, b, t), t;
              }),
              (o = function (e) {
                return u(e, b) ? e[b] : {};
              }),
              (i = function (e) {
                return u(e, b);
              });
          }
          e.exports = {
            set: n,
            get: o,
            has: i,
            enforce: function (e) {
              return i(e) ? o(e) : n(e, {});
            },
            getterFor: function (e) {
              return function (t) {
                var r;
                if (!c(t) || (r = o(t)).type !== e)
                  throw TypeError("Incompatible receiver, " + e + " required");
                return r;
              };
            },
          };
        },
        8057: (e, t, r) => {
          var n = r(4946),
            o = r(5488),
            i = n("iterator"),
            a = Array.prototype;
          e.exports = function (e) {
            return void 0 !== e && (o.Array === e || a[i] === e);
          };
        },
        7121: (e, t, r) => {
          var n = r(7020);
          e.exports =
            Array.isArray ||
            function (e) {
              return "Array" == n(e);
            };
        },
        1896: (e, t, r) => {
          var n = r(1668),
            o = /#|\.prototype\./,
            i = function (e, t) {
              var r = s[a(e)];
              return (
                r == l || (r != c && ("function" == typeof t ? n(t) : !!t))
              );
            },
            a = (i.normalize = function (e) {
              return String(e).replace(o, ".").toLowerCase();
            }),
            s = (i.data = {}),
            c = (i.NATIVE = "N"),
            l = (i.POLYFILL = "P");
          e.exports = i;
        },
        1635: (e) => {
          e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
          };
        },
        6326: (e) => {
          e.exports = !1;
        },
        8101: (e, t, r) => {
          var n = r(1635),
            o = r(7020),
            i = r(4946)("match");
          e.exports = function (e) {
            var t;
            return n(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e));
          };
        },
        4242: (e, t, r) => {
          var n = r(9973),
            o = r(8057),
            i = r(4086),
            a = r(3280),
            s = r(6265),
            c = r(7590),
            l = function (e, t) {
              (this.stopped = e), (this.result = t);
            };
          e.exports = function (e, t, r) {
            var u,
              f,
              p,
              d,
              h,
              g,
              v,
              y = r && r.that,
              m = !(!r || !r.AS_ENTRIES),
              _ = !(!r || !r.IS_ITERATOR),
              b = !(!r || !r.INTERRUPTED),
              w = a(t, y, 1 + m + b),
              k = function (e) {
                return u && c(u), new l(!0, e);
              },
              S = function (e) {
                return m
                  ? (n(e), b ? w(e[0], e[1], k) : w(e[0], e[1]))
                  : b
                  ? w(e, k)
                  : w(e);
              };
            if (_) u = e;
            else {
              if ("function" != typeof (f = s(e)))
                throw TypeError("Target is not iterable");
              if (o(f)) {
                for (p = 0, d = i(e.length); d > p; p++)
                  if ((h = S(e[p])) && h instanceof l) return h;
                return new l(!1);
              }
              u = f.call(e);
            }
            for (g = u.next; !(v = g.call(u)).done; ) {
              try {
                h = S(v.value);
              } catch (e) {
                throw (c(u), e);
              }
              if ("object" == typeof h && h && h instanceof l) return h;
            }
            return new l(!1);
          };
        },
        7590: (e, t, r) => {
          var n = r(9973);
          e.exports = function (e) {
            var t = e.return;
            if (void 0 !== t) return n(t.call(e)).value;
          };
        },
        4180: (e, t, r) => {
          "use strict";
          var n,
            o,
            i,
            a = r(1668),
            s = r(7435),
            c = r(2784),
            l = r(7289),
            u = r(4946),
            f = r(6326),
            p = u("iterator"),
            d = !1;
          [].keys &&
            ("next" in (i = [].keys())
              ? (o = s(s(i))) !== Object.prototype && (n = o)
              : (d = !0));
          var h =
            null == n ||
            a(function () {
              var e = {};
              return n[p].call(e) !== e;
            });
          h && (n = {}),
            (f && !h) ||
              l(n, p) ||
              c(n, p, function () {
                return this;
              }),
            (e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d });
        },
        5488: (e) => {
          e.exports = {};
        },
        81: (e, t, r) => {
          var n,
            o,
            i,
            a,
            s,
            c,
            l,
            u,
            f = r(9065),
            p = r(8225).f,
            d = r(2258).set,
            h = r(6250),
            g = r(2813),
            v = r(8563),
            y = f.MutationObserver || f.WebKitMutationObserver,
            m = f.document,
            _ = f.process,
            b = f.Promise,
            w = p(f, "queueMicrotask"),
            k = w && w.value;
          k ||
            ((n = function () {
              var e, t;
              for (v && (e = _.domain) && e.exit(); o; ) {
                (t = o.fn), (o = o.next);
                try {
                  t();
                } catch (e) {
                  throw (o ? a() : (i = void 0), e);
                }
              }
              (i = void 0), e && e.enter();
            }),
            h || v || g || !y || !m
              ? b && b.resolve
                ? (((l = b.resolve(void 0)).constructor = b),
                  (u = l.then),
                  (a = function () {
                    u.call(l, n);
                  }))
                : (a = v
                    ? function () {
                        _.nextTick(n);
                      }
                    : function () {
                        d.call(f, n);
                      })
              : ((s = !0),
                (c = m.createTextNode("")),
                new y(n).observe(c, { characterData: !0 }),
                (a = function () {
                  c.data = s = !s;
                }))),
            (e.exports =
              k ||
              function (e) {
                var t = { fn: e, next: void 0 };
                i && (i.next = t), o || ((o = t), a()), (i = t);
              });
        },
        71: (e, t, r) => {
          var n = r(9065);
          e.exports = n.Promise;
        },
        7693: (e, t, r) => {
          var n = r(5753),
            o = r(1668);
          e.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var e = Symbol();
              return (
                !String(e) ||
                !(Object(e) instanceof Symbol) ||
                (!Symbol.sham && n && n < 41)
              );
            });
        },
        1454: (e, t, r) => {
          var n = r(9065),
            o = r(3724),
            i = n.WeakMap;
          e.exports = "function" == typeof i && /native code/.test(o(i));
        },
        9494: (e, t, r) => {
          "use strict";
          var n = r(2764),
            o = function (e) {
              var t, r;
              (this.promise = new e(function (e, n) {
                if (void 0 !== t || void 0 !== r)
                  throw TypeError("Bad Promise constructor");
                (t = e), (r = n);
              })),
                (this.resolve = n(t)),
                (this.reject = n(r));
            };
          e.exports.f = function (e) {
            return new o(e);
          };
        },
        3310: (e, t, r) => {
          var n = r(9065),
            o = r(903).trim,
            i = r(9525),
            a = n.parseFloat,
            s = 1 / a(i + "-0") != -1 / 0;
          e.exports = s
            ? function (e) {
                var t = o(String(e)),
                  r = a(t);
                return 0 === r && "-" == t.charAt(0) ? -0 : r;
              }
            : a;
        },
        7520: (e, t, r) => {
          var n,
            o = r(9973),
            i = r(2152),
            a = r(905),
            s = r(352),
            c = r(7738),
            l = r(6385),
            u = r(2929),
            f = u("IE_PROTO"),
            p = function () {},
            d = function (e) {
              return "<script>" + e + "</" + "script>";
            },
            h = function () {
              try {
                n = document.domain && new ActiveXObject("htmlfile");
              } catch (e) {}
              var e, t;
              h = n
                ? (function (e) {
                    e.write(d("")), e.close();
                    var t = e.parentWindow.Object;
                    return (e = null), t;
                  })(n)
                : (((t = l("iframe")).style.display = "none"),
                  c.appendChild(t),
                  (t.src = String("javascript:")),
                  (e = t.contentWindow.document).open(),
                  e.write(d("document.F=Object")),
                  e.close(),
                  e.F);
              for (var r = a.length; r--; ) delete h.prototype[a[r]];
              return h();
            };
          (s[f] = !0),
            (e.exports =
              Object.create ||
              function (e, t) {
                var r;
                return (
                  null !== e
                    ? ((p.prototype = o(e)),
                      (r = new p()),
                      (p.prototype = null),
                      (r[f] = e))
                    : (r = h()),
                  void 0 === t ? r : i(r, t)
                );
              });
        },
        2152: (e, t, r) => {
          var n = r(7048),
            o = r(7447),
            i = r(9973),
            a = r(7583);
          e.exports = n
            ? Object.defineProperties
            : function (e, t) {
                i(e);
                for (var r, n = a(t), s = n.length, c = 0; s > c; )
                  o.f(e, (r = n[c++]), t[r]);
                return e;
              };
        },
        7447: (e, t, r) => {
          var n = r(7048),
            o = r(3731),
            i = r(9973),
            a = r(3979),
            s = Object.defineProperty;
          t.f = n
            ? s
            : function (e, t, r) {
                if ((i(e), (t = a(t, !0)), i(r), o))
                  try {
                    return s(e, t, r);
                  } catch (e) {}
                if ("get" in r || "set" in r)
                  throw TypeError("Accessors not supported");
                return "value" in r && (e[t] = r.value), e;
              };
        },
        8225: (e, t, r) => {
          var n = r(7048),
            o = r(1738),
            i = r(9910),
            a = r(2401),
            s = r(3979),
            c = r(7289),
            l = r(3731),
            u = Object.getOwnPropertyDescriptor;
          t.f = n
            ? u
            : function (e, t) {
                if (((e = a(e)), (t = s(t, !0)), l))
                  try {
                    return u(e, t);
                  } catch (e) {}
                if (c(e, t)) return i(!o.f.call(e, t), e[t]);
              };
        },
        8476: (e, t, r) => {
          var n = r(5266),
            o = r(905).concat("length", "prototype");
          t.f =
            Object.getOwnPropertyNames ||
            function (e) {
              return n(e, o);
            };
        },
        119: (e, t) => {
          t.f = Object.getOwnPropertySymbols;
        },
        7435: (e, t, r) => {
          var n = r(7289),
            o = r(8432),
            i = r(2929),
            a = r(9471),
            s = i("IE_PROTO"),
            c = Object.prototype;
          e.exports = a
            ? Object.getPrototypeOf
            : function (e) {
                return (
                  (e = o(e)),
                  n(e, s)
                    ? e[s]
                    : "function" == typeof e.constructor &&
                      e instanceof e.constructor
                    ? e.constructor.prototype
                    : e instanceof Object
                    ? c
                    : null
                );
              };
        },
        5266: (e, t, r) => {
          var n = r(7289),
            o = r(2401),
            i = r(8117).indexOf,
            a = r(352);
          e.exports = function (e, t) {
            var r,
              s = o(e),
              c = 0,
              l = [];
            for (r in s) !n(a, r) && n(s, r) && l.push(r);
            for (; t.length > c; )
              n(s, (r = t[c++])) && (~i(l, r) || l.push(r));
            return l;
          };
        },
        7583: (e, t, r) => {
          var n = r(5266),
            o = r(905);
          e.exports =
            Object.keys ||
            function (e) {
              return n(e, o);
            };
        },
        1738: (e, t) => {
          "use strict";
          var r = {}.propertyIsEnumerable,
            n = Object.getOwnPropertyDescriptor,
            o = n && !r.call({ 1: 2 }, 1);
          t.f = o
            ? function (e) {
                var t = n(this, e);
                return !!t && t.enumerable;
              }
            : r;
        },
        3474: (e, t, r) => {
          var n = r(9973),
            o = r(4212);
          e.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var e,
                    t = !1,
                    r = {};
                  try {
                    (e = Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set).call(r, []),
                      (t = r instanceof Array);
                  } catch (e) {}
                  return function (r, i) {
                    return n(r), o(i), t ? e.call(r, i) : (r.__proto__ = i), r;
                  };
                })()
              : void 0);
        },
        9810: (e, t, r) => {
          var n = r(7048),
            o = r(7583),
            i = r(2401),
            a = r(1738).f,
            s = function (e) {
              return function (t) {
                for (
                  var r, s = i(t), c = o(s), l = c.length, u = 0, f = [];
                  l > u;

                )
                  (r = c[u++]),
                    (n && !a.call(s, r)) || f.push(e ? [r, s[r]] : s[r]);
                return f;
              };
            };
          e.exports = { entries: s(!0), values: s(!1) };
        },
        5044: (e, t, r) => {
          var n = r(8905),
            o = r(8476),
            i = r(119),
            a = r(9973);
          e.exports =
            n("Reflect", "ownKeys") ||
            function (e) {
              var t = o.f(a(e)),
                r = i.f;
              return r ? t.concat(r(e)) : t;
            };
        },
        242: (e, t, r) => {
          var n = r(9065);
          e.exports = n;
        },
        9958: (e) => {
          e.exports = function (e) {
            try {
              return { error: !1, value: e() };
            } catch (e) {
              return { error: !0, value: e };
            }
          };
        },
        6038: (e, t, r) => {
          var n = r(9973),
            o = r(1635),
            i = r(9494);
          e.exports = function (e, t) {
            if ((n(e), o(t) && t.constructor === e)) return t;
            var r = i.f(e);
            return (0, r.resolve)(t), r.promise;
          };
        },
        7692: (e, t, r) => {
          var n = r(1198);
          e.exports = function (e, t, r) {
            for (var o in t) n(e, o, t[o], r);
            return e;
          };
        },
        1198: (e, t, r) => {
          var o = r(9065),
            i = r(2784),
            a = r(7289),
            s = r(4553),
            c = r(3724),
            l = r(8927),
            u = l.get,
            f = l.enforce,
            p = String(String).split("String");
          (e.exports = function (e, t, r, n) {
            var c,
              l = !!n && !!n.unsafe,
              u = !!n && !!n.enumerable,
              d = !!n && !!n.noTargetGet;
            "function" == typeof r &&
              ("string" != typeof t || a(r, "name") || i(r, "name", t),
              (c = f(r)).source ||
                (c.source = p.join("string" == typeof t ? t : ""))),
              e !== o
                ? (l ? !d && e[t] && (u = !0) : delete e[t],
                  u ? (e[t] = r) : i(e, t, r))
                : u
                ? (e[t] = r)
                : s(t, r);
          })(n.prototype, "toString", function () {
            return ("function" == typeof this && u(this).source) || c(this);
          });
        },
        2186: (e, t, r) => {
          var n = r(7020),
            o = r(2591);
          e.exports = function (e, t) {
            var r = e.exec;
            if ("function" == typeof r) {
              var i = r.call(e, t);
              if ("object" != typeof i)
                throw TypeError(
                  "RegExp exec method returned something other than an Object or null"
                );
              return i;
            }
            if ("RegExp" !== n(e))
              throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(e, t);
          };
        },
        2591: (e, t, r) => {
          "use strict";
          var n,
            o,
            i = r(230),
            a = r(2149),
            s = r(1546),
            c = r(7520),
            l = r(8927).get,
            u = r(8570),
            f = r(2804),
            p = RegExp.prototype.exec,
            d = s("native-string-replace", String.prototype.replace),
            h = p,
            g =
              ((n = /a/),
              (o = /b*/g),
              p.call(n, "a"),
              p.call(o, "a"),
              0 !== n.lastIndex || 0 !== o.lastIndex),
            v = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            y = void 0 !== /()??/.exec("")[1];
          (g || y || v || u || f) &&
            (h = function (e) {
              var t,
                r,
                n,
                o,
                a,
                s,
                u,
                f = this,
                m = l(f),
                _ = m.raw;
              if (_)
                return (
                  (_.lastIndex = f.lastIndex),
                  (t = h.call(_, e)),
                  (f.lastIndex = _.lastIndex),
                  t
                );
              var b = m.groups,
                w = v && f.sticky,
                k = i.call(f),
                S = f.source,
                T = 0,
                A = e;
              if (
                (w &&
                  (-1 === (k = k.replace("y", "")).indexOf("g") && (k += "g"),
                  (A = String(e).slice(f.lastIndex)),
                  f.lastIndex > 0 &&
                    (!f.multiline ||
                      (f.multiline && "\n" !== e[f.lastIndex - 1])) &&
                    ((S = "(?: " + S + ")"), (A = " " + A), T++),
                  (r = new RegExp("^(?:" + S + ")", k))),
                y && (r = new RegExp("^" + S + "$(?!\\s)", k)),
                g && (n = f.lastIndex),
                (o = p.call(w ? r : f, A)),
                w
                  ? o
                    ? ((o.input = o.input.slice(T)),
                      (o[0] = o[0].slice(T)),
                      (o.index = f.lastIndex),
                      (f.lastIndex += o[0].length))
                    : (f.lastIndex = 0)
                  : g &&
                    o &&
                    (f.lastIndex = f.global ? o.index + o[0].length : n),
                y &&
                  o &&
                  o.length > 1 &&
                  d.call(o[0], r, function () {
                    for (a = 1; a < arguments.length - 2; a++)
                      void 0 === arguments[a] && (o[a] = void 0);
                  }),
                o && b)
              )
                for (o.groups = s = c(null), a = 0; a < b.length; a++)
                  s[(u = b[a])[0]] = o[u[1]];
              return o;
            }),
            (e.exports = h);
        },
        230: (e, t, r) => {
          "use strict";
          var n = r(9973);
          e.exports = function () {
            var e = n(this),
              t = "";
            return (
              e.global && (t += "g"),
              e.ignoreCase && (t += "i"),
              e.multiline && (t += "m"),
              e.dotAll && (t += "s"),
              e.unicode && (t += "u"),
              e.sticky && (t += "y"),
              t
            );
          };
        },
        2149: (e, t, r) => {
          var n = r(1668),
            o = function (e, t) {
              return RegExp(e, t);
            };
          (t.UNSUPPORTED_Y = n(function () {
            var e = o("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          })),
            (t.BROKEN_CARET = n(function () {
              var e = o("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            }));
        },
        8570: (e, t, r) => {
          var n = r(1668);
          e.exports = n(function () {
            var e = RegExp(".", "string".charAt(0));
            return !(e.dotAll && e.exec("\n") && "s" === e.flags);
          });
        },
        2804: (e, t, r) => {
          var n = r(1668);
          e.exports = n(function () {
            var e = RegExp("(?<a>b)", "string".charAt(5));
            return (
              "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            );
          });
        },
        7968: (e) => {
          e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
          };
        },
        4553: (e, t, r) => {
          var n = r(9065),
            o = r(2784);
          e.exports = function (e, t) {
            try {
              o(n, e, t);
            } catch (r) {
              n[e] = t;
            }
            return t;
          };
        },
        8003: (e, t, r) => {
          "use strict";
          var n = r(8905),
            o = r(7447),
            i = r(4946),
            a = r(7048),
            s = i("species");
          e.exports = function (e) {
            var t = n(e),
              r = o.f;
            a &&
              t &&
              !t[s] &&
              r(t, s, {
                configurable: !0,
                get: function () {
                  return this;
                },
              });
          };
        },
        7277: (e, t, r) => {
          var n = r(7447).f,
            o = r(7289),
            i = r(4946)("toStringTag");
          e.exports = function (e, t, r) {
            e &&
              !o((e = r ? e : e.prototype), i) &&
              n(e, i, { configurable: !0, value: t });
          };
        },
        2929: (e, t, r) => {
          var n = r(1546),
            o = r(9086),
            i = n("keys");
          e.exports = function (e) {
            return i[e] || (i[e] = o(e));
          };
        },
        140: (e, t, r) => {
          var n = r(9065),
            o = r(4553),
            i = "__core-js_shared__",
            a = n[i] || o(i, {});
          e.exports = a;
        },
        1546: (e, t, r) => {
          var n = r(6326),
            o = r(140);
          (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {});
          })("versions", []).push({
            version: "3.15.1",
            mode: n ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
          });
        },
        2437: (e, t, r) => {
          var n = r(9973),
            o = r(2764),
            i = r(4946)("species");
          e.exports = function (e, t) {
            var r,
              a = n(e).constructor;
            return void 0 === a || null == (r = n(a)[i]) ? t : o(r);
          };
        },
        7433: (e, t, r) => {
          var n = r(1597),
            o = r(7968),
            i = function (e) {
              return function (t, r) {
                var i,
                  a,
                  s = String(o(t)),
                  c = n(r),
                  l = s.length;
                return c < 0 || c >= l
                  ? e
                    ? ""
                    : void 0
                  : (i = s.charCodeAt(c)) < 55296 ||
                    i > 56319 ||
                    c + 1 === l ||
                    (a = s.charCodeAt(c + 1)) < 56320 ||
                    a > 57343
                  ? e
                    ? s.charAt(c)
                    : i
                  : e
                  ? s.slice(c, c + 2)
                  : a - 56320 + ((i - 55296) << 10) + 65536;
              };
            };
          e.exports = { codeAt: i(!1), charAt: i(!0) };
        },
        6359: (e, t, r) => {
          var n = r(8177);
          e.exports =
            /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
              n
            );
        },
        2468: (e, t, r) => {
          var n = r(4086),
            o = r(2630),
            i = r(7968),
            a = Math.ceil,
            s = function (e) {
              return function (t, r, s) {
                var c,
                  l,
                  u = String(i(t)),
                  f = u.length,
                  p = void 0 === s ? " " : String(s),
                  d = n(r);
                return d <= f || "" == p
                  ? u
                  : ((c = d - f),
                    (l = o.call(p, a(c / p.length))).length > c &&
                      (l = l.slice(0, c)),
                    e ? u + l : l + u);
              };
            };
          e.exports = { start: s(!1), end: s(!0) };
        },
        2630: (e, t, r) => {
          "use strict";
          var n = r(1597),
            o = r(7968);
          e.exports = function (e) {
            var t = String(o(this)),
              r = "",
              i = n(e);
            if (i < 0 || i == 1 / 0)
              throw RangeError("Wrong number of repetitions");
            for (; i > 0; (i >>>= 1) && (t += t)) 1 & i && (r += t);
            return r;
          };
        },
        3413: (e, t, r) => {
          var n = r(1668),
            o = r(9525);
          e.exports = function (e) {
            return n(function () {
              return !!o[e]() || "​᠎" != "​᠎"[e]() || o[e].name !== e;
            });
          };
        },
        903: (e, t, r) => {
          var n = r(7968),
            o = "[" + r(9525) + "]",
            i = RegExp("^" + o + o + "*"),
            a = RegExp(o + o + "*$"),
            s = function (e) {
              return function (t) {
                var r = String(n(t));
                return (
                  1 & e && (r = r.replace(i, "")),
                  2 & e && (r = r.replace(a, "")),
                  r
                );
              };
            };
          e.exports = { start: s(1), end: s(2), trim: s(3) };
        },
        2258: (e, t, r) => {
          var o,
            i,
            a,
            s = r(9065),
            c = r(1668),
            l = r(3280),
            u = r(7738),
            f = r(6385),
            p = r(6250),
            d = r(8563),
            h = s.location,
            g = s.setImmediate,
            v = s.clearImmediate,
            y = s.process,
            m = s.MessageChannel,
            _ = s.Dispatch,
            b = 0,
            w = {},
            k = "onreadystatechange",
            S = function (e) {
              if (w.hasOwnProperty(e)) {
                var t = w[e];
                delete w[e], t();
              }
            },
            T = function (e) {
              return function () {
                S(e);
              };
            },
            A = function (e) {
              S(e.data);
            },
            x = function (e) {
              s.postMessage(e + "", h.protocol + "//" + h.host);
            };
          (g && v) ||
            ((g = function (e) {
              for (var t = [], r = 1; arguments.length > r; )
                t.push(arguments[r++]);
              return (
                (w[++b] = function () {
                  ("function" == typeof e ? e : n(e)).apply(void 0, t);
                }),
                o(b),
                b
              );
            }),
            (v = function (e) {
              delete w[e];
            }),
            d
              ? (o = function (e) {
                  y.nextTick(T(e));
                })
              : _ && _.now
              ? (o = function (e) {
                  _.now(T(e));
                })
              : m && !p
              ? ((a = (i = new m()).port2),
                (i.port1.onmessage = A),
                (o = l(a.postMessage, a, 1)))
              : s.addEventListener &&
                "function" == typeof postMessage &&
                !s.importScripts &&
                h &&
                "file:" !== h.protocol &&
                !c(x)
              ? ((o = x), s.addEventListener("message", A, !1))
              : (o =
                  k in f("script")
                    ? function (e) {
                        u.appendChild(f("script")).onreadystatechange =
                          function () {
                            u.removeChild(this), S(e);
                          };
                      }
                    : function (e) {
                        setTimeout(T(e), 0);
                      })),
            (e.exports = { set: g, clear: v });
        },
        3225: (e, t, r) => {
          var n = r(1597),
            o = Math.max,
            i = Math.min;
          e.exports = function (e, t) {
            var r = n(e);
            return r < 0 ? o(r + t, 0) : i(r, t);
          };
        },
        137: (e, t, r) => {
          var n = r(1597),
            o = r(4086);
          e.exports = function (e) {
            if (void 0 === e) return 0;
            var t = n(e),
              r = o(t);
            if (t !== r) throw RangeError("Wrong length or index");
            return r;
          };
        },
        2401: (e, t, r) => {
          var n = r(3231),
            o = r(7968);
          e.exports = function (e) {
            return n(o(e));
          };
        },
        1597: (e) => {
          var t = Math.ceil,
            r = Math.floor;
          e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? r : t)(e);
          };
        },
        4086: (e, t, r) => {
          var n = r(1597),
            o = Math.min;
          e.exports = function (e) {
            return e > 0 ? o(n(e), 9007199254740991) : 0;
          };
        },
        8432: (e, t, r) => {
          var n = r(7968);
          e.exports = function (e) {
            return Object(n(e));
          };
        },
        2961: (e, t, r) => {
          var n = r(5750);
          e.exports = function (e, t) {
            var r = n(e);
            if (r % t) throw RangeError("Wrong offset");
            return r;
          };
        },
        5750: (e, t, r) => {
          var n = r(1597);
          e.exports = function (e) {
            var t = n(e);
            if (t < 0) throw RangeError("The argument can't be less than 0");
            return t;
          };
        },
        3979: (e, t, r) => {
          var n = r(1635);
          e.exports = function (e, t) {
            if (!n(e)) return e;
            var r, o;
            if (
              t &&
              "function" == typeof (r = e.toString) &&
              !n((o = r.call(e)))
            )
              return o;
            if ("function" == typeof (r = e.valueOf) && !n((o = r.call(e))))
              return o;
            if (
              !t &&
              "function" == typeof (r = e.toString) &&
              !n((o = r.call(e)))
            )
              return o;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        1590: (e, t, r) => {
          var n = {};
          (n[r(4946)("toStringTag")] = "z"),
            (e.exports = "[object z]" === String(n));
        },
        3860: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(9065),
            i = r(7048),
            a = r(5792),
            s = r(5310),
            c = r(6678),
            l = r(6435),
            u = r(9910),
            f = r(2784),
            p = r(4086),
            d = r(137),
            h = r(2961),
            g = r(3979),
            v = r(7289),
            y = r(5225),
            m = r(1635),
            _ = r(7520),
            b = r(3474),
            w = r(8476).f,
            k = r(4617),
            S = r(4937).forEach,
            T = r(8003),
            A = r(7447),
            x = r(8225),
            P = r(8927),
            I = r(7133),
            E = P.get,
            C = P.set,
            O = A.f,
            M = x.f,
            j = Math.round,
            R = o.RangeError,
            L = c.ArrayBuffer,
            D = c.DataView,
            N = s.NATIVE_ARRAY_BUFFER_VIEWS,
            W = s.TYPED_ARRAY_TAG,
            F = s.TypedArray,
            $ = s.TypedArrayPrototype,
            B = s.aTypedArrayConstructor,
            U = s.isTypedArray,
            G = "BYTES_PER_ELEMENT",
            Z = "Wrong length",
            q = function (e, t) {
              for (var r = 0, n = t.length, o = new (B(e))(n); n > r; )
                o[r] = t[r++];
              return o;
            },
            H = function (e, t) {
              O(e, t, {
                get: function () {
                  return E(this)[t];
                },
              });
            },
            V = function (e) {
              var t;
              return (
                e instanceof L ||
                "ArrayBuffer" == (t = y(e)) ||
                "SharedArrayBuffer" == t
              );
            },
            K = function (e, t) {
              return (
                U(e) &&
                "symbol" != typeof t &&
                t in e &&
                String(+t) == String(t)
              );
            },
            Y = function (e, t) {
              return K(e, (t = g(t, !0))) ? u(2, e[t]) : M(e, t);
            },
            J = function (e, t, r) {
              return !(K(e, (t = g(t, !0))) && m(r) && v(r, "value")) ||
                v(r, "get") ||
                v(r, "set") ||
                r.configurable ||
                (v(r, "writable") && !r.writable) ||
                (v(r, "enumerable") && !r.enumerable)
                ? O(e, t, r)
                : ((e[t] = r.value), e);
            };
          i
            ? (N ||
                ((x.f = Y),
                (A.f = J),
                H($, "buffer"),
                H($, "byteOffset"),
                H($, "byteLength"),
                H($, "length")),
              n(
                { target: "Object", stat: !0, forced: !N },
                { getOwnPropertyDescriptor: Y, defineProperty: J }
              ),
              (e.exports = function (e, t, r) {
                var i = e.match(/\d+$/)[0] / 8,
                  s = e + (r ? "Clamped" : "") + "Array",
                  c = "get" + e,
                  u = "set" + e,
                  g = o[s],
                  v = g,
                  y = v && v.prototype,
                  A = {},
                  x = function (e, t) {
                    O(e, t, {
                      get: function () {
                        return (function (e, t) {
                          var r = E(e);
                          return r.view[c](t * i + r.byteOffset, !0);
                        })(this, t);
                      },
                      set: function (e) {
                        return (function (e, t, n) {
                          var o = E(e);
                          r &&
                            (n = (n = j(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
                            o.view[u](t * i + o.byteOffset, n, !0);
                        })(this, t, e);
                      },
                      enumerable: !0,
                    });
                  };
                N
                  ? a &&
                    ((v = t(function (e, t, r, n) {
                      return (
                        l(e, v, s),
                        I(
                          m(t)
                            ? V(t)
                              ? void 0 !== n
                                ? new g(t, h(r, i), n)
                                : void 0 !== r
                                ? new g(t, h(r, i))
                                : new g(t)
                              : U(t)
                              ? q(v, t)
                              : k.call(v, t)
                            : new g(d(t)),
                          e,
                          v
                        )
                      );
                    })),
                    b && b(v, F),
                    S(w(g), function (e) {
                      e in v || f(v, e, g[e]);
                    }),
                    (v.prototype = y))
                  : ((v = t(function (e, t, r, n) {
                      l(e, v, s);
                      var o,
                        a,
                        c,
                        u = 0,
                        f = 0;
                      if (m(t)) {
                        if (!V(t)) return U(t) ? q(v, t) : k.call(v, t);
                        (o = t), (f = h(r, i));
                        var g = t.byteLength;
                        if (void 0 === n) {
                          if (g % i) throw R(Z);
                          if ((a = g - f) < 0) throw R(Z);
                        } else if ((a = p(n) * i) + f > g) throw R(Z);
                        c = a / i;
                      } else (c = d(t)), (o = new L((a = c * i)));
                      for (
                        C(e, {
                          buffer: o,
                          byteOffset: f,
                          byteLength: a,
                          length: c,
                          view: new D(o),
                        });
                        u < c;

                      )
                        x(e, u++);
                    })),
                    b && b(v, F),
                    (y = v.prototype = _($))),
                  y.constructor !== v && f(y, "constructor", v),
                  W && f(y, W, s),
                  (A[s] = v),
                  n({ global: !0, forced: v != g, sham: !N }, A),
                  G in v || f(v, G, i),
                  G in y || f(y, G, i),
                  T(s);
              }))
            : (e.exports = function () {});
        },
        5792: (e, t, r) => {
          var n = r(9065),
            o = r(1668),
            i = r(7513),
            a = r(5310).NATIVE_ARRAY_BUFFER_VIEWS,
            s = n.ArrayBuffer,
            c = n.Int8Array;
          e.exports =
            !a ||
            !o(function () {
              c(1);
            }) ||
            !o(function () {
              new c(-1);
            }) ||
            !i(function (e) {
              new c(), new c(null), new c(1.5), new c(e);
            }, !0) ||
            o(function () {
              return 1 !== new c(new s(2), 1, void 0).length;
            });
        },
        4617: (e, t, r) => {
          var n = r(8432),
            o = r(4086),
            i = r(6265),
            a = r(8057),
            s = r(3280),
            c = r(5310).aTypedArrayConstructor;
          e.exports = function (e) {
            var t,
              r,
              l,
              u,
              f,
              p,
              d = n(e),
              h = arguments.length,
              g = h > 1 ? arguments[1] : void 0,
              v = void 0 !== g,
              y = i(d);
            if (null != y && !a(y))
              for (p = (f = y.call(d)).next, d = []; !(u = p.call(f)).done; )
                d.push(u.value);
            for (
              v && h > 2 && (g = s(g, arguments[2], 2)),
                r = o(d.length),
                l = new (c(this))(r),
                t = 0;
              r > t;
              t++
            )
              l[t] = v ? g(d[t], t) : d[t];
            return l;
          };
        },
        9086: (e) => {
          var t = 0,
            r = Math.random();
          e.exports = function (e) {
            return (
              "Symbol(" +
              String(void 0 === e ? "" : e) +
              ")_" +
              (++t + r).toString(36)
            );
          };
        },
        9534: (e, t, r) => {
          var n = r(7693);
          e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        2869: (e, t, r) => {
          var n = r(4946);
          t.f = n;
        },
        4946: (e, t, r) => {
          var n = r(9065),
            o = r(1546),
            i = r(7289),
            a = r(9086),
            s = r(7693),
            c = r(9534),
            l = o("wks"),
            u = n.Symbol,
            f = c ? u : (u && u.withoutSetter) || a;
          e.exports = function (e) {
            return (
              (i(l, e) && (s || "string" == typeof l[e])) ||
                (s && i(u, e) ? (l[e] = u[e]) : (l[e] = f("Symbol." + e))),
              l[e]
            );
          };
        },
        9525: (e) => {
          e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        2326: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(7435),
            i = r(3474),
            a = r(7520),
            s = r(2784),
            c = r(9910),
            l = r(4242),
            u = function (e, t) {
              var r = this;
              if (!(r instanceof u)) return new u(e, t);
              i && (r = i(new Error(void 0), o(r))),
                void 0 !== t && s(r, "message", String(t));
              var n = [];
              return l(e, n.push, { that: n }), s(r, "errors", n), r;
            };
          (u.prototype = a(Error.prototype, {
            constructor: c(5, u),
            message: c(5, ""),
            name: c(5, "AggregateError"),
          })),
            n({ global: !0 }, { AggregateError: u });
        },
        3657: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(9065),
            i = r(6678),
            a = r(8003),
            s = "ArrayBuffer",
            c = i.ArrayBuffer;
          n({ global: !0, forced: o.ArrayBuffer !== c }, { ArrayBuffer: c }),
            a(s);
        },
        6068: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(1668),
            i = r(6678),
            a = r(9973),
            s = r(3225),
            c = r(4086),
            l = r(2437),
            u = i.ArrayBuffer,
            f = i.DataView,
            p = u.prototype.slice;
          n(
            {
              target: "ArrayBuffer",
              proto: !0,
              unsafe: !0,
              forced: o(function () {
                return !new u(2).slice(1, void 0).byteLength;
              }),
            },
            {
              slice: function (e, t) {
                if (void 0 !== p && void 0 === t) return p.call(a(this), e);
                for (
                  var r = a(this).byteLength,
                    n = s(e, r),
                    o = s(void 0 === t ? r : t, r),
                    i = new (l(this, u))(c(o - n)),
                    d = new f(this),
                    h = new f(i),
                    g = 0;
                  n < o;

                )
                  h.setUint8(g++, d.getUint8(n++));
                return i;
              },
            }
          );
        },
        5979: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(6007),
            i = r(8432),
            a = r(4086),
            s = r(2764),
            c = r(1785);
          n(
            { target: "Array", proto: !0 },
            {
              flatMap: function (e) {
                var t,
                  r = i(this),
                  n = a(r.length);
                return (
                  s(e),
                  ((t = c(r, 0)).length = o(
                    t,
                    r,
                    r,
                    n,
                    0,
                    1,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  )),
                  t
                );
              },
            }
          );
        },
        9581: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(6007),
            i = r(8432),
            a = r(4086),
            s = r(1597),
            c = r(1785);
          n(
            { target: "Array", proto: !0 },
            {
              flat: function () {
                var e = arguments.length ? arguments[0] : void 0,
                  t = i(this),
                  r = a(t.length),
                  n = c(t, 0);
                return (
                  (n.length = o(n, t, t, r, 0, void 0 === e ? 1 : s(e))), n
                );
              },
            }
          );
        },
        6540: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(8113).right,
            i = r(834),
            a = r(5753),
            s = r(8563);
          n(
            {
              target: "Array",
              proto: !0,
              forced: !i("reduceRight") || (!s && a > 79 && a < 83),
            },
            {
              reduceRight: function (e) {
                return o(
                  this,
                  e,
                  arguments.length,
                  arguments.length > 1 ? arguments[1] : void 0
                );
              },
            }
          );
        },
        5075: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(8113).left,
            i = r(834),
            a = r(5753),
            s = r(8563);
          n(
            {
              target: "Array",
              proto: !0,
              forced: !i("reduce") || (!s && a > 79 && a < 83),
            },
            {
              reduce: function (e) {
                return o(
                  this,
                  e,
                  arguments.length,
                  arguments.length > 1 ? arguments[1] : void 0
                );
              },
            }
          );
        },
        6621: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(7121),
            i = [].reverse,
            a = [1, 2];
          n(
            {
              target: "Array",
              proto: !0,
              forced: String(a) === String(a.reverse()),
            },
            {
              reverse: function () {
                return o(this) && (this.length = this.length), i.call(this);
              },
            }
          );
        },
        5711: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(2764),
            i = r(8432),
            a = r(4086),
            s = r(1668),
            c = r(5713),
            l = r(834),
            u = r(8482),
            f = r(7302),
            p = r(5753),
            d = r(4289),
            h = [],
            g = h.sort,
            v = s(function () {
              h.sort(void 0);
            }),
            y = s(function () {
              h.sort(null);
            }),
            m = l("sort"),
            _ = !s(function () {
              if (p) return p < 70;
              if (!(u && u > 3)) {
                if (f) return !0;
                if (d) return d < 603;
                var e,
                  t,
                  r,
                  n,
                  o = "";
                for (e = 65; e < 76; e++) {
                  switch (((t = String.fromCharCode(e)), e)) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                      r = 3;
                      break;
                    case 68:
                    case 71:
                      r = 4;
                      break;
                    default:
                      r = 2;
                  }
                  for (n = 0; n < 47; n++) h.push({ k: t + n, v: r });
                }
                for (
                  h.sort(function (e, t) {
                    return t.v - e.v;
                  }),
                    n = 0;
                  n < h.length;
                  n++
                )
                  (t = h[n].k.charAt(0)),
                    o.charAt(o.length - 1) !== t && (o += t);
                return "DGBEFHACIJK" !== o;
              }
            });
          n(
            { target: "Array", proto: !0, forced: v || !y || !m || !_ },
            {
              sort: function (e) {
                void 0 !== e && o(e);
                var t = i(this);
                if (_) return void 0 === e ? g.call(t) : g.call(t, e);
                var r,
                  n,
                  s = [],
                  l = a(t.length);
                for (n = 0; n < l; n++) n in t && s.push(t[n]);
                for (
                  s = c(
                    s,
                    (function (e) {
                      return function (t, r) {
                        return void 0 === r
                          ? -1
                          : void 0 === t
                          ? 1
                          : void 0 !== e
                          ? +e(t, r) || 0
                          : String(t) > String(r)
                          ? 1
                          : -1;
                      };
                    })(e)
                  ),
                    r = s.length,
                    n = 0;
                  n < r;

                )
                  t[n] = s[n++];
                for (; n < l; ) delete t[n++];
                return t;
              },
            }
          );
        },
        3684: (e, t, r) => {
          r(199)("flatMap");
        },
        4891: (e, t, r) => {
          r(199)("flat");
        },
        1127: (e, t, r) => {
          r(3151)({ global: !0 }, { globalThis: r(9065) });
        },
        5985: (e, t, r) => {
          var n = r(3151),
            o = r(8905),
            i = r(1668),
            a = o("JSON", "stringify"),
            s = /[\uD800-\uDFFF]/g,
            c = /^[\uD800-\uDBFF]$/,
            l = /^[\uDC00-\uDFFF]$/,
            u = function (e, t, r) {
              var n = r.charAt(t - 1),
                o = r.charAt(t + 1);
              return (c.test(e) && !l.test(o)) || (l.test(e) && !c.test(n))
                ? "\\u" + e.charCodeAt(0).toString(16)
                : e;
            },
            f = i(function () {
              return (
                '"\\udf06\\ud834"' !== a("\udf06\ud834") ||
                '"\\udead"' !== a("\udead")
              );
            });
          a &&
            n(
              { target: "JSON", stat: !0, forced: f },
              {
                stringify: function (e, t, r) {
                  var n = a.apply(null, arguments);
                  return "string" == typeof n ? n.replace(s, u) : n;
                },
              }
            );
        },
        9423: (e, t, r) => {
          var n = r(3151),
            o = Math.hypot,
            i = Math.abs,
            a = Math.sqrt;
          n(
            {
              target: "Math",
              stat: !0,
              forced: !!o && o(1 / 0, NaN) !== 1 / 0,
            },
            {
              hypot: function (e, t) {
                for (
                  var r, n, o = 0, s = 0, c = arguments.length, l = 0;
                  s < c;

                )
                  l < (r = i(arguments[s++]))
                    ? ((o = o * (n = l / r) * n + 1), (l = r))
                    : (o += r > 0 ? (n = r / l) * n : r);
                return l === 1 / 0 ? 1 / 0 : l * a(o);
              },
            }
          );
        },
        3759: (e, t, r) => {
          var n = r(3151),
            o = r(3310);
          n(
            { target: "Number", stat: !0, forced: Number.parseFloat != o },
            { parseFloat: o }
          );
        },
        5007: (e, t, r) => {
          var n = r(3151),
            o = r(9810).entries;
          n(
            { target: "Object", stat: !0 },
            {
              entries: function (e) {
                return o(e);
              },
            }
          );
        },
        314: (e, t, r) => {
          var n = r(3151),
            o = r(4242),
            i = r(7615);
          n(
            { target: "Object", stat: !0 },
            {
              fromEntries: function (e) {
                var t = {};
                return (
                  o(
                    e,
                    function (e, r) {
                      i(t, e, r);
                    },
                    { AS_ENTRIES: !0 }
                  ),
                  t
                );
              },
            }
          );
        },
        5463: (e, t, r) => {
          var n = r(3151),
            o = r(9810).values;
          n(
            { target: "Object", stat: !0 },
            {
              values: function (e) {
                return o(e);
              },
            }
          );
        },
        2261: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(2764),
            i = r(9494),
            a = r(9958),
            s = r(4242);
          n(
            { target: "Promise", stat: !0 },
            {
              allSettled: function (e) {
                var t = this,
                  r = i.f(t),
                  n = r.resolve,
                  c = r.reject,
                  l = a(function () {
                    var r = o(t.resolve),
                      i = [],
                      a = 0,
                      c = 1;
                    s(e, function (e) {
                      var o = a++,
                        s = !1;
                      i.push(void 0),
                        c++,
                        r.call(t, e).then(
                          function (e) {
                            s ||
                              ((s = !0),
                              (i[o] = { status: "fulfilled", value: e }),
                              --c || n(i));
                          },
                          function (e) {
                            s ||
                              ((s = !0),
                              (i[o] = { status: "rejected", reason: e }),
                              --c || n(i));
                          }
                        );
                    }),
                      --c || n(i);
                  });
                return l.error && c(l.value), r.promise;
              },
            }
          );
        },
        6696: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(2764),
            i = r(8905),
            a = r(9494),
            s = r(9958),
            c = r(4242),
            l = "No one promise resolved";
          n(
            { target: "Promise", stat: !0 },
            {
              any: function (e) {
                var t = this,
                  r = a.f(t),
                  n = r.resolve,
                  u = r.reject,
                  f = s(function () {
                    var r = o(t.resolve),
                      a = [],
                      s = 0,
                      f = 1,
                      p = !1;
                    c(e, function (e) {
                      var o = s++,
                        c = !1;
                      a.push(void 0),
                        f++,
                        r.call(t, e).then(
                          function (e) {
                            c || p || ((p = !0), n(e));
                          },
                          function (e) {
                            c ||
                              p ||
                              ((c = !0),
                              (a[o] = e),
                              --f || u(new (i("AggregateError"))(a, l)));
                          }
                        );
                    }),
                      --f || u(new (i("AggregateError"))(a, l));
                  });
                return f.error && u(f.value), r.promise;
              },
            }
          );
        },
        1269: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(6326),
            i = r(71),
            a = r(1668),
            s = r(8905),
            c = r(2437),
            l = r(6038),
            u = r(1198);
          if (
            (n(
              {
                target: "Promise",
                proto: !0,
                real: !0,
                forced:
                  !!i &&
                  a(function () {
                    i.prototype.finally.call(
                      { then: function () {} },
                      function () {}
                    );
                  }),
              },
              {
                finally: function (e) {
                  var t = c(this, s("Promise")),
                    r = "function" == typeof e;
                  return this.then(
                    r
                      ? function (r) {
                          return l(t, e()).then(function () {
                            return r;
                          });
                        }
                      : e,
                    r
                      ? function (r) {
                          return l(t, e()).then(function () {
                            throw r;
                          });
                        }
                      : e
                  );
                },
              }
            ),
            !o && "function" == typeof i)
          ) {
            var f = s("Promise").prototype.finally;
            i.prototype.finally !== f &&
              u(i.prototype, "finally", f, { unsafe: !0 });
          }
        },
        7169: (e, t, r) => {
          "use strict";
          var n,
            o,
            i,
            a,
            s = r(3151),
            c = r(6326),
            l = r(9065),
            u = r(8905),
            f = r(71),
            p = r(1198),
            d = r(7692),
            h = r(3474),
            g = r(7277),
            v = r(8003),
            y = r(1635),
            m = r(2764),
            _ = r(6435),
            b = r(3724),
            w = r(4242),
            k = r(7513),
            S = r(2437),
            T = r(2258).set,
            A = r(81),
            x = r(6038),
            P = r(336),
            I = r(9494),
            E = r(9958),
            C = r(8927),
            O = r(1896),
            M = r(4946),
            j = r(4194),
            R = r(8563),
            L = r(5753),
            D = M("species"),
            N = "Promise",
            W = C.get,
            F = C.set,
            $ = C.getterFor(N),
            B = f && f.prototype,
            U = f,
            G = B,
            Z = l.TypeError,
            q = l.document,
            H = l.process,
            V = I.f,
            K = V,
            Y = !!(q && q.createEvent && l.dispatchEvent),
            J = "function" == typeof PromiseRejectionEvent,
            X = "unhandledrejection",
            z = !1,
            Q = O(N, function () {
              var e = b(U) !== String(U);
              if (!e && 66 === L) return !0;
              if (c && !G.finally) return !0;
              if (L >= 51 && /native code/.test(U)) return !1;
              var t = new U(function (e) {
                  e(1);
                }),
                r = function (e) {
                  e(
                    function () {},
                    function () {}
                  );
                };
              return (
                ((t.constructor = {})[D] = r),
                !(z = t.then(function () {}) instanceof r) || (!e && j && !J)
              );
            }),
            ee =
              Q ||
              !k(function (e) {
                U.all(e).catch(function () {});
              }),
            te = function (e) {
              var t;
              return !(!y(e) || "function" != typeof (t = e.then)) && t;
            },
            re = function (e, t) {
              if (!e.notified) {
                e.notified = !0;
                var r = e.reactions;
                A(function () {
                  for (
                    var n = e.value, o = 1 == e.state, i = 0;
                    r.length > i;

                  ) {
                    var a,
                      s,
                      c,
                      l = r[i++],
                      u = o ? l.ok : l.fail,
                      f = l.resolve,
                      p = l.reject,
                      d = l.domain;
                    try {
                      u
                        ? (o || (2 === e.rejection && ae(e), (e.rejection = 1)),
                          !0 === u
                            ? (a = n)
                            : (d && d.enter(),
                              (a = u(n)),
                              d && (d.exit(), (c = !0))),
                          a === l.promise
                            ? p(Z("Promise-chain cycle"))
                            : (s = te(a))
                            ? s.call(a, f, p)
                            : f(a))
                        : p(n);
                    } catch (e) {
                      d && !c && d.exit(), p(e);
                    }
                  }
                  (e.reactions = []),
                    (e.notified = !1),
                    t && !e.rejection && oe(e);
                });
              }
            },
            ne = function (e, t, r) {
              var n, o;
              Y
                ? (((n = q.createEvent("Event")).promise = t),
                  (n.reason = r),
                  n.initEvent(e, !1, !0),
                  l.dispatchEvent(n))
                : (n = { promise: t, reason: r }),
                !J && (o = l["on" + e])
                  ? o(n)
                  : e === X && P("Unhandled promise rejection", r);
            },
            oe = function (e) {
              T.call(l, function () {
                var t,
                  r = e.facade,
                  n = e.value;
                if (
                  ie(e) &&
                  ((t = E(function () {
                    R ? H.emit("unhandledRejection", n, r) : ne(X, r, n);
                  })),
                  (e.rejection = R || ie(e) ? 2 : 1),
                  t.error)
                )
                  throw t.value;
              });
            },
            ie = function (e) {
              return 1 !== e.rejection && !e.parent;
            },
            ae = function (e) {
              T.call(l, function () {
                var t = e.facade;
                R
                  ? H.emit("rejectionHandled", t)
                  : ne("rejectionhandled", t, e.value);
              });
            },
            se = function (e, t, r) {
              return function (n) {
                e(t, n, r);
              };
            },
            ce = function (e, t, r) {
              e.done ||
                ((e.done = !0),
                r && (e = r),
                (e.value = t),
                (e.state = 2),
                re(e, !0));
            },
            le = function (e, t, r) {
              if (!e.done) {
                (e.done = !0), r && (e = r);
                try {
                  if (e.facade === t)
                    throw Z("Promise can't be resolved itself");
                  var n = te(t);
                  n
                    ? A(function () {
                        var r = { done: !1 };
                        try {
                          n.call(t, se(le, r, e), se(ce, r, e));
                        } catch (t) {
                          ce(r, t, e);
                        }
                      })
                    : ((e.value = t), (e.state = 1), re(e, !1));
                } catch (t) {
                  ce({ done: !1 }, t, e);
                }
              }
            };
          if (
            Q &&
            ((G = (U = function (e) {
              _(this, U, N), m(e), n.call(this);
              var t = W(this);
              try {
                e(se(le, t), se(ce, t));
              } catch (e) {
                ce(t, e);
              }
            }).prototype),
            ((n = function (e) {
              F(this, {
                type: N,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0,
              });
            }).prototype = d(G, {
              then: function (e, t) {
                var r = $(this),
                  n = V(S(this, U));
                return (
                  (n.ok = "function" != typeof e || e),
                  (n.fail = "function" == typeof t && t),
                  (n.domain = R ? H.domain : void 0),
                  (r.parent = !0),
                  r.reactions.push(n),
                  0 != r.state && re(r, !1),
                  n.promise
                );
              },
              catch: function (e) {
                return this.then(void 0, e);
              },
            })),
            (o = function () {
              var e = new n(),
                t = W(e);
              (this.promise = e),
                (this.resolve = se(le, t)),
                (this.reject = se(ce, t));
            }),
            (I.f = V =
              function (e) {
                return e === U || e === i ? new o(e) : K(e);
              }),
            !c && "function" == typeof f && B !== Object.prototype)
          ) {
            (a = B.then),
              z ||
                (p(
                  B,
                  "then",
                  function (e, t) {
                    var r = this;
                    return new U(function (e, t) {
                      a.call(r, e, t);
                    }).then(e, t);
                  },
                  { unsafe: !0 }
                ),
                p(B, "catch", G.catch, { unsafe: !0 }));
            try {
              delete B.constructor;
            } catch (e) {}
            h && h(B, G);
          }
          s({ global: !0, wrap: !0, forced: Q }, { Promise: U }),
            g(U, N, !1, !0),
            v(N),
            (i = u(N)),
            s(
              { target: N, stat: !0, forced: Q },
              {
                reject: function (e) {
                  var t = V(this);
                  return t.reject.call(void 0, e), t.promise;
                },
              }
            ),
            s(
              { target: N, stat: !0, forced: c || Q },
              {
                resolve: function (e) {
                  return x(c && this === i ? U : this, e);
                },
              }
            ),
            s(
              { target: N, stat: !0, forced: ee },
              {
                all: function (e) {
                  var t = this,
                    r = V(t),
                    n = r.resolve,
                    o = r.reject,
                    i = E(function () {
                      var r = m(t.resolve),
                        i = [],
                        a = 0,
                        s = 1;
                      w(e, function (e) {
                        var c = a++,
                          l = !1;
                        i.push(void 0),
                          s++,
                          r.call(t, e).then(function (e) {
                            l || ((l = !0), (i[c] = e), --s || n(i));
                          }, o);
                      }),
                        --s || n(i);
                    });
                  return i.error && o(i.value), r.promise;
                },
                race: function (e) {
                  var t = this,
                    r = V(t),
                    n = r.reject,
                    o = E(function () {
                      var o = m(t.resolve);
                      w(e, function (e) {
                        o.call(t, e).then(r.resolve, n);
                      });
                    });
                  return o.error && n(o.value), r.promise;
                },
              }
            );
        },
        4950: (e, t, r) => {
          var n = r(3151),
            o = r(9065),
            i = r(7277);
          n({ global: !0 }, { Reflect: {} }), i(o.Reflect, "Reflect", !0);
        },
        1460: (e, t, r) => {
          var n = r(7048),
            o = r(9065),
            i = r(1896),
            a = r(7133),
            s = r(2784),
            c = r(7447).f,
            l = r(8476).f,
            u = r(8101),
            f = r(230),
            p = r(2149),
            d = r(1198),
            h = r(1668),
            g = r(7289),
            v = r(8927).enforce,
            y = r(8003),
            m = r(4946),
            _ = r(8570),
            b = r(2804),
            w = m("match"),
            k = o.RegExp,
            S = k.prototype,
            T = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
            A = /a/g,
            x = /a/g,
            P = new k(A) !== A,
            I = p.UNSUPPORTED_Y,
            E =
              n &&
              (!P ||
                I ||
                _ ||
                b ||
                h(function () {
                  return (
                    (x[w] = !1), k(A) != A || k(x) == x || "/a/i" != k(A, "i")
                  );
                }));
          if (i("RegExp", E)) {
            for (
              var C = function (e, t) {
                  var r,
                    n,
                    o,
                    i,
                    c,
                    l,
                    p = this instanceof C,
                    d = u(e),
                    h = void 0 === t,
                    y = [],
                    m = e;
                  if (!p && d && h && e.constructor === C) return e;
                  if (
                    ((d || e instanceof C) &&
                      ((e = e.source),
                      h && (t = ("flags" in m) ? m.flags : f.call(m))),
                    (e = void 0 === e ? "" : String(e)),
                    (t = void 0 === t ? "" : String(t)),
                    (m = e),
                    _ &&
                      ("dotAll" in A) &&
                      (n = !!t && t.indexOf("s") > -1) &&
                      (t = t.replace(/s/g, "")),
                    (r = t),
                    I &&
                      ("sticky" in A) &&
                      (o = !!t && t.indexOf("y") > -1) &&
                      (t = t.replace(/y/g, "")),
                    b &&
                      ((i = (function (e) {
                        for (
                          var t,
                            r = e.length,
                            n = 0,
                            o = "",
                            i = [],
                            a = {},
                            s = !1,
                            c = !1,
                            l = 0,
                            u = "";
                          n <= r;
                          n++
                        ) {
                          if ("\\" === (t = e.charAt(n))) t += e.charAt(++n);
                          else if ("]" === t) s = !1;
                          else if (!s)
                            switch (!0) {
                              case "[" === t:
                                s = !0;
                                break;
                              case "(" === t:
                                T.test(e.slice(n + 1)) && ((n += 2), (c = !0)),
                                  (o += t),
                                  l++;
                                continue;
                              case ">" === t && c:
                                if ("" === u || g(a, u))
                                  throw new SyntaxError(
                                    "Invalid capture group name"
                                  );
                                (a[u] = !0), i.push([u, l]), (c = !1), (u = "");
                                continue;
                            }
                          c ? (u += t) : (o += t);
                        }
                        return [o, i];
                      })(e)),
                      (e = i[0]),
                      (y = i[1])),
                    (c = a(k(e, t), p ? this : S, C)),
                    (n || o || y.length) &&
                      ((l = v(c)),
                      n &&
                        ((l.dotAll = !0),
                        (l.raw = C(
                          (function (e) {
                            for (
                              var t, r = e.length, n = 0, o = "", i = !1;
                              n <= r;
                              n++
                            )
                              "\\" !== (t = e.charAt(n))
                                ? i || "." !== t
                                  ? ("[" === t
                                      ? (i = !0)
                                      : "]" === t && (i = !1),
                                    (o += t))
                                  : (o += "[\\s\\S]")
                                : (o += t + e.charAt(++n));
                            return o;
                          })(e),
                          r
                        ))),
                      o && (l.sticky = !0),
                      y.length && (l.groups = y)),
                    e !== m)
                  )
                    try {
                      s(c, "source", "" === m ? "(?:)" : m);
                    } catch (e) {}
                  return c;
                },
                O = function (e) {
                  (e in C) ||
                    c(C, e, {
                      configurable: !0,
                      get: function () {
                        return k[e];
                      },
                      set: function (t) {
                        k[e] = t;
                      },
                    });
                },
                M = l(k),
                j = 0;
              M.length > j;

            )
              O(M[j++]);
            (S.constructor = C), (C.prototype = S), d(o, "RegExp", C);
          }
          y("RegExp");
        },
        566: (e, t, r) => {
          var n = r(7048),
            o = r(8570),
            i = r(7447).f,
            a = r(8927).get,
            s = RegExp.prototype;
          n &&
            o &&
            i(s, "dotAll", {
              configurable: !0,
              get: function () {
                if (this !== s) {
                  if (this instanceof RegExp) return !!a(this).dotAll;
                  throw TypeError("Incompatible receiver, RegExp required");
                }
              },
            });
        },
        1283: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(2591);
          n(
            { target: "RegExp", proto: !0, forced: /./.exec !== o },
            { exec: o }
          );
        },
        3694: (e, t, r) => {
          var n = r(7048),
            o = r(7447),
            i = r(230),
            a = r(1668);
          n &&
            a(function () {
              return (
                "sy" !==
                Object.getOwnPropertyDescriptor(
                  RegExp.prototype,
                  "flags"
                ).get.call({ dotAll: !0, sticky: !0 })
              );
            }) &&
            o.f(RegExp.prototype, "flags", { configurable: !0, get: i });
        },
        5698: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(918),
            i = r(7968),
            a = r(4086),
            s = r(2764),
            c = r(9973),
            l = r(7020),
            u = r(8101),
            f = r(230),
            p = r(2784),
            d = r(1668),
            h = r(4946),
            g = r(2437),
            v = r(2597),
            y = r(8927),
            m = r(6326),
            _ = h("matchAll"),
            b = "RegExp String",
            w = "RegExp String Iterator",
            k = y.set,
            S = y.getterFor(w),
            T = RegExp.prototype,
            A = T.exec,
            x = "".matchAll,
            P =
              !!x &&
              !d(function () {
                "a".matchAll(/./);
              }),
            I = o(
              function (e, t, r, n) {
                k(this, {
                  type: w,
                  regexp: e,
                  string: t,
                  global: r,
                  unicode: n,
                  done: !1,
                });
              },
              b,
              function () {
                var e = S(this);
                if (e.done) return { value: void 0, done: !0 };
                var t = e.regexp,
                  r = e.string,
                  n = (function (e, t) {
                    var r,
                      n = e.exec;
                    if ("function" == typeof n) {
                      if ("object" != typeof (r = n.call(e, t)))
                        throw TypeError("Incorrect exec result");
                      return r;
                    }
                    return A.call(e, t);
                  })(t, r);
                return null === n
                  ? { value: void 0, done: (e.done = !0) }
                  : e.global
                  ? ("" == String(n[0]) &&
                      (t.lastIndex = v(r, a(t.lastIndex), e.unicode)),
                    { value: n, done: !1 })
                  : ((e.done = !0), { value: n, done: !1 });
              }
            ),
            E = function (e) {
              var t,
                r,
                n,
                o,
                i,
                s,
                l = c(this),
                u = String(e);
              return (
                (t = g(l, RegExp)),
                void 0 === (r = l.flags) &&
                  l instanceof RegExp &&
                  !("flags" in T) &&
                  (r = f.call(l)),
                (n = void 0 === r ? "" : String(r)),
                (o = new t(t === RegExp ? l.source : l, n)),
                (i = !!~n.indexOf("g")),
                (s = !!~n.indexOf("u")),
                (o.lastIndex = a(l.lastIndex)),
                new I(o, u, i, s)
              );
            };
          n(
            { target: "String", proto: !0, forced: P },
            {
              matchAll: function (e) {
                var t,
                  r,
                  n,
                  o = i(this);
                if (null != e) {
                  if (
                    u(e) &&
                    !~String(i("flags" in T ? e.flags : f.call(e))).indexOf("g")
                  )
                    throw TypeError(
                      "`.matchAll` does not allow non-global regexes"
                    );
                  if (P) return x.apply(o, arguments);
                  if (
                    (void 0 === (r = e[_]) && m && "RegExp" == l(e) && (r = E),
                    null != r)
                  )
                    return s(r).call(e, o);
                } else if (P) return x.apply(o, arguments);
                return (
                  (t = String(o)),
                  (n = new RegExp(e, "g")),
                  m ? E.call(n, t) : n[_](t)
                );
              },
            }
          ),
            m || _ in T || p(T, _, E);
        },
        2460: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(2468).end;
          n(
            { target: "String", proto: !0, forced: r(6359) },
            {
              padEnd: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        1377: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(2468).start;
          n(
            { target: "String", proto: !0, forced: r(6359) },
            {
              padStart: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          );
        },
        586: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(7968),
            i = r(8101),
            a = r(230),
            s = r(1383),
            c = r(4946),
            l = r(6326),
            u = c("replace"),
            f = RegExp.prototype,
            p = Math.max,
            d = function (e, t, r) {
              return r > e.length ? -1 : "" === t ? r : e.indexOf(t, r);
            };
          n(
            { target: "String", proto: !0 },
            {
              replaceAll: function (e, t) {
                var r,
                  n,
                  c,
                  h,
                  g,
                  v,
                  y,
                  m,
                  _ = o(this),
                  b = 0,
                  w = 0,
                  k = "";
                if (null != e) {
                  if (
                    (r = i(e)) &&
                    !~String(o("flags" in f ? e.flags : a.call(e))).indexOf("g")
                  )
                    throw TypeError(
                      "`.replaceAll` does not allow non-global regexes"
                    );
                  if (void 0 !== (n = e[u])) return n.call(e, _, t);
                  if (l && r) return String(_).replace(e, t);
                }
                for (
                  c = String(_),
                    h = String(e),
                    (g = "function" == typeof t) || (t = String(t)),
                    v = h.length,
                    y = p(1, v),
                    b = d(c, h, 0);
                  -1 !== b;

                )
                  (m = g ? String(t(h, b, c)) : s(h, c, b, [], void 0, t)),
                    (k += c.slice(w, b) + m),
                    (w = b + v),
                    (b = d(c, h, b + y));
                return w < c.length && (k += c.slice(w)), k;
              },
            }
          );
        },
        6081: (e, t, r) => {
          "use strict";
          var n = r(2982),
            o = r(1668),
            i = r(9973),
            a = r(4086),
            s = r(1597),
            c = r(7968),
            l = r(2597),
            u = r(1383),
            f = r(2186),
            p = r(4946)("replace"),
            d = Math.max,
            h = Math.min,
            g = "$0" === "a".replace(/./, "$0"),
            v = !!/./[p] && "" === /./[p]("a", "$0");
          n(
            "replace",
            function (e, t, r) {
              var n = v ? "$" : "$0";
              return [
                function (e, r) {
                  var n = c(this),
                    o = null == e ? void 0 : e[p];
                  return void 0 !== o
                    ? o.call(e, n, r)
                    : t.call(String(n), e, r);
                },
                function (e, o) {
                  if (
                    "string" == typeof o &&
                    -1 === o.indexOf(n) &&
                    -1 === o.indexOf("$<")
                  ) {
                    var c = r(t, this, e, o);
                    if (c.done) return c.value;
                  }
                  var p = i(this),
                    g = String(e),
                    v = "function" == typeof o;
                  v || (o = String(o));
                  var y = p.global;
                  if (y) {
                    var m = p.unicode;
                    p.lastIndex = 0;
                  }
                  for (var _ = []; ; ) {
                    var b = f(p, g);
                    if (null === b) break;
                    if ((_.push(b), !y)) break;
                    "" === String(b[0]) &&
                      (p.lastIndex = l(g, a(p.lastIndex), m));
                  }
                  for (var w, k = "", S = 0, T = 0; T < _.length; T++) {
                    b = _[T];
                    for (
                      var A = String(b[0]),
                        x = d(h(s(b.index), g.length), 0),
                        P = [],
                        I = 1;
                      I < b.length;
                      I++
                    )
                      P.push(void 0 === (w = b[I]) ? w : String(w));
                    var E = b.groups;
                    if (v) {
                      var C = [A].concat(P, x, g);
                      void 0 !== E && C.push(E);
                      var O = String(o.apply(void 0, C));
                    } else O = u(A, g, x, P, E, o);
                    x >= S && ((k += g.slice(S, x) + O), (S = x + A.length));
                  }
                  return k + g.slice(S);
                },
              ];
            },
            !!o(function () {
              var e = /./;
              return (
                (e.exec = function () {
                  var e = [];
                  return (e.groups = { a: "7" }), e;
                }),
                "7" !== "".replace(e, "$<a>")
              );
            }) ||
              !g ||
              v
          );
        },
        1720: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(903).end,
            i = r(3413)("trimEnd"),
            a = i
              ? function () {
                  return o(this);
                }
              : "".trimEnd;
          n(
            { target: "String", proto: !0, forced: i },
            { trimEnd: a, trimRight: a }
          );
        },
        4069: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(903).start,
            i = r(3413)("trimStart"),
            a = i
              ? function () {
                  return o(this);
                }
              : "".trimStart;
          n(
            { target: "String", proto: !0, forced: i },
            { trimStart: a, trimLeft: a }
          );
        },
        2348: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(903).trim;
          n(
            { target: "String", proto: !0, forced: r(3413)("trim") },
            {
              trim: function () {
                return o(this);
              },
            }
          );
        },
        7705: (e, t, r) => {
          r(7387)("asyncIterator");
        },
        6479: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(7048),
            i = r(9065),
            a = r(7289),
            s = r(1635),
            c = r(7447).f,
            l = r(5323),
            u = i.Symbol;
          if (
            o &&
            "function" == typeof u &&
            (!("description" in u.prototype) || void 0 !== u().description)
          ) {
            var f = {},
              p = function () {
                var e =
                    arguments.length < 1 || void 0 === arguments[0]
                      ? void 0
                      : String(arguments[0]),
                  t = this instanceof p ? new u(e) : void 0 === e ? u() : u(e);
                return "" === e && (f[t] = !0), t;
              };
            l(p, u);
            var d = (p.prototype = u.prototype);
            d.constructor = p;
            var h = d.toString,
              g = "Symbol(test)" == String(u("test")),
              v = /^Symbol\((.*)\)[^)]+$/;
            c(d, "description", {
              configurable: !0,
              get: function () {
                var e = s(this) ? this.valueOf() : this,
                  t = h.call(e);
                if (a(f, e)) return "";
                var r = g ? t.slice(7, -1) : t.replace(v, "$1");
                return "" === r ? void 0 : r;
              },
            }),
              n({ global: !0, forced: !0 }, { Symbol: p });
          }
        },
        2054: (e, t, r) => {
          r(7387)("matchAll");
        },
        7100: (e, t, r) => {
          "use strict";
          var n = r(5310),
            o = r(5385),
            i = n.aTypedArray;
          (0, n.exportTypedArrayMethod)("fill", function (e) {
            return o.apply(i(this), arguments);
          });
        },
        2848: (e, t, r) => {
          r(3860)("Float32", function (e) {
            return function (t, r, n) {
              return e(this, t, r, n);
            };
          });
        },
        2126: (e, t, r) => {
          r(3860)("Float64", function (e) {
            return function (t, r, n) {
              return e(this, t, r, n);
            };
          });
        },
        4208: (e, t, r) => {
          "use strict";
          var n = r(5792);
          (0, r(5310).exportTypedArrayStaticMethod)("from", r(4617), n);
        },
        532: (e, t, r) => {
          r(3860)("Int16", function (e) {
            return function (t, r, n) {
              return e(this, t, r, n);
            };
          });
        },
        6514: (e, t, r) => {
          r(3860)("Int32", function (e) {
            return function (t, r, n) {
              return e(this, t, r, n);
            };
          });
        },
        3848: (e, t, r) => {
          r(3860)("Int8", function (e) {
            return function (t, r, n) {
              return e(this, t, r, n);
            };
          });
        },
        4035: (e, t, r) => {
          "use strict";
          var n = r(5310),
            o = r(5792),
            i = n.aTypedArrayConstructor;
          (0, n.exportTypedArrayStaticMethod)(
            "of",
            function () {
              for (
                var e = 0, t = arguments.length, r = new (i(this))(t);
                t > e;

              )
                r[e] = arguments[e++];
              return r;
            },
            o
          );
        },
        4092: (e, t, r) => {
          "use strict";
          var n = r(5310),
            o = r(4086),
            i = r(2961),
            a = r(8432),
            s = r(1668),
            c = n.aTypedArray;
          (0, n.exportTypedArrayMethod)(
            "set",
            function (e) {
              c(this);
              var t = i(arguments.length > 1 ? arguments[1] : void 0, 1),
                r = this.length,
                n = a(e),
                s = o(n.length),
                l = 0;
              if (s + t > r) throw RangeError("Wrong length");
              for (; l < s; ) this[t + l] = n[l++];
            },
            s(function () {
              new Int8Array(1).set({});
            })
          );
        },
        2791: (e, t, r) => {
          "use strict";
          var n = r(5310),
            o = r(9065),
            i = r(1668),
            a = r(2764),
            s = r(4086),
            c = r(5713),
            l = r(8482),
            u = r(7302),
            f = r(5753),
            p = r(4289),
            d = n.aTypedArray,
            h = n.exportTypedArrayMethod,
            g = o.Uint16Array,
            v = g && g.prototype.sort,
            y =
              !!v &&
              !i(function () {
                var e = new g(2);
                e.sort(null), e.sort({});
              }),
            m =
              !!v &&
              !i(function () {
                if (f) return f < 74;
                if (l) return l < 67;
                if (u) return !0;
                if (p) return p < 602;
                var e,
                  t,
                  r = new g(516),
                  n = Array(516);
                for (e = 0; e < 516; e++)
                  (t = e % 4), (r[e] = 515 - e), (n[e] = e - 2 * t + 3);
                for (
                  r.sort(function (e, t) {
                    return ((e / 4) | 0) - ((t / 4) | 0);
                  }),
                    e = 0;
                  e < 516;
                  e++
                )
                  if (r[e] !== n[e]) return !0;
              });
          h(
            "sort",
            function (e) {
              var t = this;
              if ((void 0 !== e && a(e), m)) return v.call(t, e);
              d(t);
              var r,
                n = s(t.length),
                o = Array(n);
              for (r = 0; r < n; r++) o[r] = t[r];
              for (
                o = c(
                  t,
                  (function (e) {
                    return function (t, r) {
                      return void 0 !== e
                        ? +e(t, r) || 0
                        : r != r
                        ? -1
                        : t != t
                        ? 1
                        : 0 === t && 0 === r
                        ? 1 / t > 0 && 1 / r < 0
                          ? 1
                          : -1
                        : t > r;
                    };
                  })(e)
                ),
                  r = 0;
                r < n;
                r++
              )
                t[r] = o[r];
              return t;
            },
            !m || y
          );
        },
        5681: (e, t, r) => {
          r(3860)("Uint16", function (e) {
            return function (t, r, n) {
              return e(this, t, r, n);
            };
          });
        },
        7764: (e, t, r) => {
          r(3860)("Uint32", function (e) {
            return function (t, r, n) {
              return e(this, t, r, n);
            };
          });
        },
        8049: (e, t, r) => {
          r(3860)("Uint8", function (e) {
            return function (t, r, n) {
              return e(this, t, r, n);
            };
          });
        },
        8239: (e, t, r) => {
          r(3860)(
            "Uint8",
            function (e) {
              return function (t, r, n) {
                return e(this, t, r, n);
              };
            },
            !0
          );
        },
        3879: (e, t, r) => {
          r(2326);
        },
        8060: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(8432),
            i = r(4086),
            a = r(1597),
            s = r(199);
          n(
            { target: "Array", proto: !0 },
            {
              at: function (e) {
                var t = o(this),
                  r = i(t.length),
                  n = a(e),
                  s = n >= 0 ? n : r + n;
                return s < 0 || s >= r ? void 0 : t[s];
              },
            }
          ),
            s("at");
        },
        9215: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(4100).findLastIndex,
            i = r(199);
          n(
            { target: "Array", proto: !0 },
            {
              findLastIndex: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          ),
            i("findLastIndex");
        },
        8535: (e, t, r) => {
          "use strict";
          var n = r(3151),
            o = r(4100).findLast,
            i = r(199);
          n(
            { target: "Array", proto: !0 },
            {
              findLast: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          ),
            i("findLast");
        },
        6524: (e, t, r) => {
          r(1127);
        },
        3671: (e, t, r) => {
          r(3151)({ target: "Object", stat: !0 }, { hasOwn: r(7289) });
        },
        9292: (e, t, r) => {
          r(2261);
        },
        5975: (e, t, r) => {
          r(6696);
        },
        8852: (e, t, r) => {
          r(5698);
        },
        6706: (e, t, r) => {
          r(586);
        },
        8276: (e, t, r) => {
          "use strict";
          var n = r(5310),
            o = r(4086),
            i = r(1597),
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)("at", function (e) {
            var t = a(this),
              r = o(t.length),
              n = i(e),
              s = n >= 0 ? n : r + n;
            return s < 0 || s >= r ? void 0 : t[s];
          });
        },
        2379: (e, t, r) => {
          "use strict";
          var n = r(5310),
            o = r(4100).findLastIndex,
            i = n.aTypedArray;
          (0, n.exportTypedArrayMethod)("findLastIndex", function (e) {
            return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        3412: (e, t, r) => {
          "use strict";
          var n = r(5310),
            o = r(4100).findLast,
            i = n.aTypedArray;
          (0, n.exportTypedArrayMethod)("findLast", function (e) {
            return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        3995: (e, t, r) => {
          var n = r(2230);
          n.keys().forEach((e) => {
            o[e.substr(2)] = n(e);
          });
        },
        4825: (e, t, r) => {
          "use strict";
          r.r(t);
          r(6479),
            r(7705),
            r(2054),
            r(2326),
            r(9581),
            r(5979),
            r(5075),
            r(6540),
            r(6621),
            r(5711),
            r(4891),
            r(3684),
            r(3657),
            r(6068),
            r(1127),
            r(5985),
            r(9423),
            r(3759),
            r(5007),
            r(314),
            r(5463),
            r(7169),
            r(2261),
            r(6696),
            r(1269),
            r(4950),
            r(1460),
            r(566),
            r(1283),
            r(3694),
            r(5698),
            r(2460),
            r(1377),
            r(6081),
            r(586),
            r(2348),
            r(1720),
            r(4069),
            r(2848),
            r(2126),
            r(3848),
            r(532),
            r(6514),
            r(8049),
            r(8239),
            r(5681),
            r(7764),
            r(7100),
            r(4208),
            r(4035),
            r(4092),
            r(2791),
            r(3879),
            r(8060),
            r(6524),
            r(3671),
            r(9292),
            r(5975),
            r(8852),
            r(6706),
            r(8276),
            r(8535),
            r(9215),
            r(3412),
            r(2379);
          [
            "Int8Array",
            "Uint8Array",
            "Uint8ClampedArray",
            "Int16Array",
            "Uint16Array",
            "Int32Array",
            "Uint32Array",
            "Float32Array",
            "Float64Array",
          ].forEach((e) => {
            var t = globalThis[e];
            t && t.name !== e && Object.defineProperty(t, "name", { value: e });
          });
        },
      },
      t = {};
    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = (t[n] = { exports: {} });
      return e[n](i, i.exports, r), i.exports;
    }
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
      (r.d = (e, t) => {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new n("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (() => {
        r.g.__polyfill_injecting = !0;
        var e = !1,
          t = !1;
        if (r.g.__wxConfig && "string" == typeof r.g.__wxConfig.platform)
          "ios" === r.g.__wxConfig.platform.toLowerCase()
            ? (e = !0)
            : "mac" === r.g.__wxConfig.platform.toLowerCase() && (t = !0);
        else if (
          "undefined" != typeof navigator &&
          "string" == typeof navigator.userAgent
        ) {
          var n = navigator.userAgent.toLowerCase();
          n.indexOf("iphone") >= 0 || n.indexOf("ipad") >= 0
            ? (e = !0)
            : n.indexOf("miniprogramenv/mac") >= 0 && (t = !0);
        }
        var o = [];
        (e || t) && ((r.g.Promise = void 0), o.push("Promise")),
          r(3869)({ usePolyfill: o, useNative: ["WeakMap"] }),
          r(4825),
          r(3995),
          delete r.g.__polyfill_injecting;
      })();
  })();
  var i,
    a,
    s = function (e) {
      e();
    };
  (() => {
    "use strict";
    var e = {
      n: (t) => {
        var r = t && t.__esModule ? () => t.default : () => t;
        return e.d(r, { a: r }), r;
      },
      d: (t, r) => {
        for (var n in r)
          e.o(r, n) &&
            !e.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
      },
    };
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new n("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
      (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (e.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var s = {};
    (() => {
      e.d(s, { default: () => et });
      var a = {};
      e.r(a),
        e.d(a, {
          emitFrameworkError: () => Q,
          emitUnhandledError: () => ee,
          emitUnhandledRejection: () => J,
          onFrameworkError: () => re,
          onUnhandledError: () => ne,
          onUnhandledRejection: () => te,
        });
      var l = o.objectSpread2,
        u = e.n(l),
        f = e.g.__wxLibrary,
        p = e.g.__wxConfig,
        d = f.envType,
        g = f.contextType,
        v = "Service" === d,
        y = "WebView" === d,
        m = "Worker" === d,
        b = y || (v && 0 === g.indexOf("App:")),
        w = v && 0 === g.indexOf("Game:"),
        k = !!p.isIsolateContext,
        S = k && v && g.indexOf("MainContext") >= 0,
        T = k && v && g.indexOf("SubContext") >= 0,
        A = T && g.indexOf("Safe") >= 0,
        x = S || T,
        P = "wxlib" === p.workerContentType,
        I = y || S || A || P,
        E = (function () {
          var e,
            t,
            r = p.platform;
          if (
            !r &&
            "string" ==
              typeof (null === (e = window) ||
              void 0 === e ||
              null === (t = e.navigator) ||
              void 0 === t
                ? void 0
                : t.userAgent)
          ) {
            var n = window.navigator.userAgent.toLowerCase();
            n.indexOf("devtools") >= 0
              ? (r = "devtools")
              : n.indexOf("miniprogramenv/windows") >= 0
              ? (r = "windows")
              : n.indexOf("miniprogramenv/mac") >= 0
              ? (r = "mac")
              : n.indexOf("miniprogramenv/mina") >= 0
              ? (r = "mina")
              : n.indexOf("iphone") >= 0 || n.indexOf("ipad") >= 0
              ? (r = "ios")
              : n.indexOf("android") >= 0 && (r = "android");
          }
          return (r || "unknown").toLowerCase();
        })(),
        C = {
          platform: E,
          SDKVersion:
            void 0 === t || "develop" === t.version ? "9.9.9" : t.version,
          isIsolateContext: x,
          isGame: w,
          isApp: b,
          isMainContext: S,
          isSubContext: T,
          isSafeEnv: I,
          isService: v,
          isWebView: y,
          isWorker: m,
          isWidget: !1,
          typeStr: T ? "SubContext" : d,
          isWXLibWorker: P,
          workerType: "user",
          contextName: "",
          mayHaveSnapShot: !!f.mayHaveSnapshot,
        },
        O = () => {},
        M = "devtools" === C.platform;
      "undefined" != typeof performance && performance.now;
      function j(e, t = () => O) {
        return e.reduce((e, r) => ((e[r] = t(r)), e), {});
      }
      function R() {
        var t = i || e.g.__wxConfig;
        if (t && "debug" in t && void 0 !== t.debug) return !!t.debug;
      }
      var L = ["log", "info", "warn", "error", "debug"],
        D = j(L),
        N = [
          "log",
          "info",
          "warn",
          "error",
          "profile",
          "profileSync",
          "traceBegin",
          "traceEnd",
        ],
        W = (() => {
          var e = j(N);
          return e;
        })(),
        F = W,
        $ = Symbol("error"),
        B = Symbol("slow");
      class U {
        constructor() {
          (this.$ = Object.create(null)), (this.$$ = Object.create(null));
        }
        onInternalEvent(e, t) {
          var r = this.$$[e];
          return r ? r.push(t) : (this.$$[e] = [t]), this;
        }
        emitPrivate(e, ...t) {
          var r = this.$$[e];
          return (
            !!(r && r.length > 0) &&
            (r.forEach((e) => {
              try {
                e(...t);
              } catch (e) {
                console.error("EventEmitter error:", e);
              }
            }),
            !0)
          );
        }
        onError(e) {
          return this.onInternalEvent($, e), this;
        }
        onSlow(e) {
          return this.onInternalEvent(B, e), this;
        }
        _privEmit(e, t, ...r) {
          var n = this.$[e];
          if (n && n.length > 0) {
            var o,
              i = !1;
            for (var a of n) {
              if (0 !== a.count)
                try {
                  var s = Date.now();
                  o = a.cb(...r);
                  var c = Date.now();
                  c - s > U.SLOW_CALLBACK_THRESHOLD &&
                    this.emitPrivate(B, e, s, c, a.cb);
                } catch (t) {
                  if (!this.emitPrivate($, e, t)) throw t;
                }
              if (
                (a.count > 0 && a.count--,
                0 === a.count && (i = !0),
                !1 === o && t.cancelable)
              )
                break;
            }
            return i && (this.$[e] = n.filter((e) => 0 !== e.count)), !0;
          }
          return !1;
        }
        emit(e, ...t) {
          return this._privEmit(e, {}, ...t);
        }
        emitCancelable(e, ...t) {
          return this._privEmit(e, { cancelable: !0 }, ...t);
        }
        many(e, t, r, n = {}) {
          if (!t) return this;
          var o = { count: r, cb: t },
            i = this.$[e];
          return (
            i ? (n.prepend ? i.unshift(o) : i.push(o)) : (this.$[e] = [o]), this
          );
        }
        on(e, t, r) {
          return this.many(e, t, -1, r);
        }
        once(e, t, r) {
          return this.many(e, t, 1, r);
        }
        off(e, t) {
          var r = this.$[e];
          if (!r) return !1;
          var n = r.findIndex((e) => e.cb === t);
          return !(n < 0) && (r.splice(n, 1), !0);
        }
      }
      U.SLOW_CALLBACK_THRESHOLD = 50;
      var G = new U(),
        Z = "unhandlederror",
        q = "unhandledrejection",
        H = "frameworkerror",
        V = new WeakMap();
      var K = Object.prototype.hasOwnProperty;
      function Y(e) {
        var t;
        if (
          e &&
          "Object" ===
            (null === (t = e.constructor) || void 0 === t ? void 0 : t.name) &&
          "string" == typeof e.message &&
          "string" == typeof e.stack
        ) {
          var r = new Error(e.message);
          return Object.assign(r, e), r;
        }
        return e;
      }
      function J(e, t) {
        (e = Y(e)),
          Le.onLoad(() => {
            G.emit(q, { reason: e, promise: t }) ||
              console.error("Uncaught (in promise)", e);
          }, !0);
      }
      var X = !1,
        z = !1;
      function Q(e, t) {
        if (
          (e instanceof Error && t && (e.message = `${t} fail: ${e.message}`),
          (e = Y(e)),
          i.isSnapshoting)
        )
          throw e;
        Le.onLoad(() => {
          if (X)
            console.error(
              "[ErrorHandler] recursive framework error detected.",
              e
            );
          else {
            X = !0;
            try {
              G.emit(H, e) || ee(e);
            } catch (e) {
              console.error("Framework", e);
            }
            X = !1;
          }
        }, !0);
      }
      function ee(e) {
        if (((e = Y(e)), i.isSnapshoting)) throw e;
        Le.onLoad(() => {
          if (z)
            console.error(
              "[ErrorHandler] recursive uncaught error detected.",
              e
            );
          else {
            z = !0;
            try {
              G.emit(Z, e) || console.error("Uncaught", e);
            } catch (e) {
              console.error("Uncaught", e);
            }
            z = !1;
          }
        }, !0);
      }
      function te(e) {
        G.on(q, e);
      }
      function re(e) {
        G.on(H, e);
      }
      function ne(e) {
        G.on(Z, e);
      }
      !(function (e) {
        "object" == typeof e && "function" == typeof e.addEventListener
          ? (e.addEventListener("unhandledrejection", (e) => {
              J(e.reason, e.promise), e.preventDefault();
            }),
            e.addEventListener("error", (t) => {
              var r, n;
              ee(
                t.error || {
                  message: t.message,
                  stack: `${t.message}\nEmpty stack, maybe muted error. (xweb=${
                    (null === (r = e.navigator) ||
                    void 0 === r ||
                    null === (n = r.userAgent) ||
                    void 0 === n
                      ? void 0
                      : n.toUpperCase().indexOf("XWEB")) >= 0
                  })`,
                }
              ),
                t.error && t.preventDefault();
            }))
          : void 0 === e.onunhandledrejection &&
            Object.defineProperty(e, "onunhandledrejection", {
              value(e = {}) {
                var t, r;
                K.call(e, "type")
                  ? ((t = {
                      type: e.type,
                      reason: e.reason,
                      promise: e.promise,
                    }),
                    (r = t.promise) &&
                      (V.has(r) ||
                        setTimeout(() => {
                          var e = V.get(r);
                          0 === (null == e ? void 0 : e.type) &&
                            J(e.reason, e.promise),
                            V.delete(r);
                        }, 0),
                      V.set(r, t)))
                  : J(e.reason, e.promise);
              },
            });
      })(e.g);
      var oe,
        ie = JSON.parse,
        ae = JSON.stringify;
      function se(e) {
        return ie(ae(e));
      }
      function ce(e) {
        (e.platform = C.platform),
          e.brand || "ios" !== e.platform || (e.brand = "iPhone"),
          (e.sdkVersion = e.SDKVersion = C.SDKVersion),
          (e.isReady = !1),
          (e.onReady = Le.onStart);
      }
      function le(e) {
        var r;
        ce(e),
          C.isSubContext || (e.preload = !0 === e.preload),
          "number" == typeof e.pixelRatio
            ? (e.devicePixelRatio = e.pixelRatio)
            : "number" == typeof e.devicePixelRatio &&
              (e.pixelRatio = e.devicePixelRatio);
        var n =
          null === (r = t.debugOptions) || void 0 === r
            ? void 0
            : r.overwriteExpt;
        n && (e.expt = Object.assign(e.expt || {}, n));
      }
      function ue(e) {
        if (
          (le(e),
          (e.isReady = !0),
          (e.appLaunchInfo = e.appLaunchInfo || {}),
          (e.preloadType =
            e.preloadType || e.appLaunchInfo.preloadType || e.preload),
          "ios" === e.platform)
        ) {
          var t = (i = e.appLaunchInfo.clickTimestampInMs)
              ? i +
                9782784e5 -
                (new Date().getTimezoneOffset() / 60) * 3600 * 1e3
              : 0,
            r = Number.MAX_SAFE_INTEGER,
            n = e.instanceId;
          if (n)
            try {
              var o = n.split("&").filter((e) => 0 === e.indexOf("ts="));
              o.length > 0 && (r = parseInt(o[0].slice(3), 10));
            } catch (e) {
              Q(e, "parseInstanceId");
            }
          e.coldLaunchTime = Math.min(t, r);
        } else e.coldLaunchTime = e.appLaunchInfo.clickTimestamp || 0;
        var i;
      }
      var fe = !(
          null === (oe = t.features) ||
          void 0 === oe ||
          !oe.pruneWxConfigByPage
        ),
        pe = Object.defineProperty,
        de = [
          "env",
          "appLaunchInfo",
          "ext",
          "wxAppInfo",
          "debug",
          "entryPagePath",
          "envVersion",
          "tabBar",
          "pages",
          "page",
          "accountInfo",
          "global",
          "platform",
          "system",
          "appType",
          "networkTimeout",
          "navigateToMiniProgramAppIdList",
          "plugins",
          "extAppid",
          "host",
          "prerender",
        ];
      function he(e, t, r, n) {
        pe(e, r, {
          configurable: !0,
          enumerable: !0,
          get() {
            if (r in t) return t[r];
            try {
              var e;
              D.warn("[__wxConfig usage] developer uses __wxConfig." + r),
                "function" ==
                  typeof (null === (e = h) || void 0 === e
                    ? void 0
                    : e.reportKeyValue) &&
                  h.reportKeyValue({
                    key: "DeprecatedAPI",
                    value: "__wxConfig." + r,
                    force: !0,
                  });
            } catch (e) {
              Q(e, "report __wxConfig usage");
            }
            try {
              return "function" != typeof n ? n : n();
            } catch (e) {
              return void Q(e, `read mock wxConfig.${r}`);
            }
          },
          set(e) {
            t[r] = e;
          },
        });
      }
      var ge = C.isSafeEnv,
        ve = Object.create(null),
        ye = C.isService
          ? (function (e) {
              return new Proxy(e, {
                set(e, t, r, n) {
                  if ("__siblings__" === t) return Reflect.set(e, t, r, n);
                  var o = Reflect.get(e, "__siblings__", n);
                  return Array.isArray(o)
                    ? (o.length > 1 &&
                        D.log(
                          `[WXConfig] write __wxConfig.${t.toString()}, sync to all contexts.`
                        ),
                      o.forEach((e) => {
                        Reflect.set(e, t, r);
                      }),
                      !0)
                    : Reflect.set(e, t, r, n);
                },
              });
            })(ve)
          : ve,
        me = (e) => {},
        _e = "wxConfig:updatePage";
      function be(t, r = !1) {
        return (
          me(!1),
          (ve.currentPhase = "onStart"),
          void 0 === t ||
            (r
              ? (Object.assign(ve, t),
                Object.defineProperty(ve, "__siblings__", {
                  value: t.__siblings__,
                  enumerable: !1,
                  writable: !1,
                  configurable: !1,
                }))
              : (Object.assign(ve, ge ? t : se(t)),
                ue(ve),
                (function (t, r) {
                  var n;
                  Array.isArray(
                    null == t || null === (n = t.tabBar) || void 0 === n
                      ? void 0
                      : n.list
                  ) &&
                    t.tabBar.list.forEach((e) => {
                      delete e.iconData, delete e.selectedIconData;
                    }),
                    delete t.permission;
                  var o = t.subPackages || t.subpackages;
                  Array.isArray(o) &&
                    o.length > 0 &&
                    (o.forEach((e) => {
                      delete e.pages;
                    }),
                    (t.subPackages = t.subpackages = o)),
                    fe &&
                      (C.isSubContext ||
                        (delete t.usingComponents,
                        Object.values(t.page || {}).forEach((e) => {
                          null != e &&
                            e.window &&
                            delete e.window.usingComponents;
                        }),
                        (t._preloadRule = t.preloadRule || {}),
                        (t._page = t.page || {}),
                        delete t.preloadRule,
                        delete t.page),
                      (t.updatePage = function (e, t) {
                        null != t &&
                          t.window &&
                          delete t.window.usingComponents,
                          r(e, t);
                      }),
                      (t.updatePreloadRule = function (e, r) {
                        (t.preloadRule = t.preloadRule || {}),
                          (t.preloadRule[e] = r);
                      })),
                    (e.g.__wxConfig.page = e.g.__wxConfig.page || {}),
                    (t.page = t.page || {});
                })(ve, (e, t) => {
                  Le.emit(_e, { key: e, value: t });
                }),
                Object.defineProperty(ve, "__siblings__", {
                  value: [],
                  enumerable: !1,
                  writable: !1,
                  configurable: !1,
                })),
            Array.isArray(ve.__siblings__) && ve.__siblings__.push(ve),
            ve.onPageUpdate(({ key: e, value: t }) => {
              (ve.page = ve.page || {}),
                (ve.page[e] = ve.page[e + ".html"] = t),
                n && (n[e + ".html"] = se(t));
            }),
            ge ||
              (n = (function () {
                var t = e.g.__wxConfig,
                  r = {},
                  n = {},
                  o = fe ? {} : t.page || {};
                try {
                  he(n, r, "deprecated", !0),
                    de.forEach((e) => {
                      if (e in t) {
                        var i = t[e];
                        switch (e) {
                          case "page":
                            he(n, r, e, o);
                            break;
                          case "env":
                            he(
                              n,
                              r,
                              e,
                              () => (
                                console.warn(
                                  "[Deprecation] __wxConfig.env is deprecated, please use wx.env instead."
                                ),
                                { USER_DATA_PATH: i.USER_DATA_PATH }
                              )
                            );
                            break;
                          case "accountInfo":
                            he(n, r, e, {
                              appId: i.appId,
                              icon: i.icon,
                              nickname: i.nickname,
                            });
                            break;
                          case "appLaunchInfo":
                            he(
                              n,
                              r,
                              e,
                              () => (
                                console.warn(
                                  "[Deprecation] __wxConfig.appLaunchInfo is deprecated, please use wx.getLaunchOptionsSync() instead."
                                ),
                                wx &&
                                "function" == typeof wx.getLaunchOptionsSync
                                  ? wx.getLaunchOptionsSync()
                                  : {}
                              )
                            );
                            break;
                          case "wxAppInfo":
                            he(n, r, e, {
                              maxRequestConcurrent: i.maxRequestConcurrent,
                              maxUploadConcurrent: i.maxUploadConcurrent,
                              maxDownloadConcurrent: i.maxDownloadConcurrent,
                              maxWorkerConcurrent: i.maxWorkerConcurrent,
                              maxWebsocketConnect: i.maxWebsocketConnect,
                            });
                            break;
                          default:
                            he(n, r, e, i);
                        }
                      }
                    }),
                    (e.g.__wxConfig = n);
                } catch (r) {
                  Q(r, "mockGloablWxConfig"), (e.g.__wxConfig = t);
                }
                return o;
              })())),
          ye
        );
        var n;
      }
      var we = new U(),
        ke = new U(),
        Se = {},
        Te = "WeixinJSBridgeReady",
        Ae = "libraryEnd",
        xe = "load",
        Pe = "postLoad",
        Ie = "start",
        Ee = "postStart";
      function Ce(e, t) {
        if (e in Se)
          try {
            t(Se[e]);
          } catch (t) {
            Q(t, "LifeCycle." + e);
          }
        else ke.once(e, t);
      }
      function Oe(e, t) {
        return !(e in Se) && ((Se[e] = t), ke.emit(e, t));
      }
      var Me,
        je = Ce.bind(null, Ae),
        Re = Ce.bind(null, xe),
        Le = {
          EventEmitter: U,
          on: we.on.bind(we),
          emit: we.emit.bind(we),
          once: we.once.bind(we),
          getIsLoaded: () => xe in Se,
          getIsStarted: () => Ie in Se,
          onBridgeReady(e) {
            Ce(Te, e);
          },
          setWeixinJSBridge(e) {
            Oe(Te, e);
          },
          onLibraryEnd: je,
          onCreate(e) {
            e();
          },
          onLoadInstant(e) {
            i.isSnapshoting && C.mayHaveSnapShot
              ? Re(() => {
                  e();
                })
              : e();
          },
          onLoad(e, t = !1) {
            t
              ? je(() => {
                  Re(e);
                })
              : Re(e);
          },
          _onPostLoad: Ce.bind(null, Pe),
          onStart: Ce.bind(null, Ie),
          onPostStart: Ce.bind(null, Ee),
        };
      ke
        .onError((e, t) => {
          D.error(`[LifeCycle/${C.typeStr}] ${e.toString()} failed: `, t),
            Q(t, "LifeCycle." + e.toString());
        })
        .onSlow((e, t, r, n) => {
          F.warn(
            `[LifeCycle/${C.typeStr}] slow ${e.toString()} callback (${
              r - t
            }ms)\n${n + ""}`
          );
        }),
        (e.g.__wxLibrary.onEnd = function () {
          Oe(Ae);
        }),
        (Me = e.g.__wxConfig),
        (ve.currentPhase = "onCreate"),
        void 0 === Me ||
          (me(!1), Object.assign(ve, ge ? Me : se(Me)), ce(ve), me(!0));
      var De = !1,
        Ne = !1;
      function We() {
        De || Ne
          ? Q(new Error(`LifeCycle error: undesired onLoad(${De}/${Ne})`))
          : ((De = !0),
            (i = (function (e) {
              return (
                (ve.currentPhase = "onLoad"),
                void 0 === e ||
                  (me(!1),
                  Object.assign(ve, ge ? e : se(e)),
                  (ve.onPageUpdate = Le.on.bind(null, _e)),
                  le(ve),
                  me(!0)),
                ye
              );
            })(e.g.__wxConfig)),
            Oe(xe, i),
            C.isSubContext
              ? (i.__readyHandler = (e) => {
                  Fe(e, !0);
                })
              : !0 === i.preload
              ? Le.onBridgeReady((t) => {
                  t.on("onWxConfigReady", () => {
                    Fe(e.g.__wxConfig);
                  });
                })
              : Le.onLibraryEnd(() => {
                  Fe(e.g.__wxConfig);
                }),
            Oe(Pe, i));
      }
      function Fe(e, t = !1) {
        if (De && !Ne) {
          Ne = !0;
          var r = Date.now();
          "onReadyStart" in (i = be(e, t)) || (i.onReadyStart = r),
            Oe(Ie, i),
            (i.onReadyEnd = Date.now()),
            Oe(Ee, i);
        } else Q(new Error(`LifeCycle error: undesired onStart(${De}/${Ne})`));
      }
      (i = ye).isSnapshoting
        ? (e.g.WeixinSnapshot = {
            snapshotContextReady() {
              delete e.g.WeixinSnapshot, We();
            },
          })
        : C.mayHaveSnapShot
        ? Le.onLibraryEnd(We)
        : We();
      class $e {
        constructor(e, t) {
          (this.num = e), (this.type = t);
        }
      }
      var Be = {
          ALL: new $e(Number.MIN_VALUE, "ALL"),
          DEBUG: new $e(5e3, "DEBUG"),
          LOG: new $e(1e4, "LOG"),
          INFO: new $e(2e4, "INFO"),
          WARN: new $e(3e4, "WARN"),
          ERROR: new $e(4e4, "ERROR"),
          OFF: new $e(Number.MAX_VALUE, "OFF"),
        },
        Ue = (e, t) => ({
          debug: e(Be.DEBUG, t),
          log: e(Be.LOG, t),
          info: e(Be.INFO, t),
          warn: e(Be.WARN, t),
          error: e(Be.ERROR, t),
        }),
        Ge = Be.INFO,
        Ze = () => {
          var e = C.platform,
            t = [],
            r = function (t) {
              var r = ("0" + (t.getMonth() + 1)).slice(-2),
                n = ("0" + t.getDate()).slice(-2),
                o = ("0" + t.getHours()).slice(-2),
                i = ("0" + t.getMinutes()).slice(-2),
                a = ("0" + t.getSeconds()).slice(-2),
                s = ("00" + t.getMilliseconds()).slice(-3),
                c = t.getFullYear() + "-" + r + "-" + n,
                l = o + ":" + i + ":" + a + "." + s;
              return "ios" === e
                ? c +
                    " " +
                    l +
                    "000" +
                    ((t.getTimezoneOffset() / 6e3) * -1)
                      .toFixed(4)
                      .replace(/^0\./, "+")
                      .replace(/-0\./, "-")
                : c +
                    " " +
                    ((t.getTimezoneOffset() / 60) * -1)
                      .toFixed(1)
                      .replace(/^(\d)/, "+$1") +
                    " " +
                    l;
            },
            n = (e) => {
              if (e instanceof Error) return `${e.message}\n${e.stack}`;
              switch (typeof e) {
                case "bigint":
                case "boolean":
                case "function":
                case "number":
                case "symbol":
                  return e.toString();
                case "string":
                  return e;
                case "undefined":
                  return "undefined";
                case "object":
                  var t;
                  try {
                    t = JSON.stringify(e);
                  } catch (e) {
                    t = "[对象含有循环引用]";
                  }
                  return t;
                default:
                  return;
              }
            },
            o = function (e, r) {
              var o = e.type;
              return function (...i) {
                var a;
                (r && Array.prototype.unshift.call(i, "[" + r + "]"),
                R() || e.num >= Be.WARN.num) &&
                  (null === (a = D[o.toLowerCase()]) ||
                    void 0 === a ||
                    a.call(D, ...i));
                if (e.num >= Ge.num) {
                  var s = new Date(),
                    c = Array.prototype.slice.call(i).map(n).join(" ");
                  t && t.length > 1024 && t.shift(),
                    t.push({ date: s, type: o, content: c });
                }
              };
            };
          Le.onStart(() => {
            setTimeout(function n() {
              var o;
              (setTimeout(n, 4e3), 0 !== t.length) &&
                ((o = t),
                "ios" === e
                  ? c.invoke("systemLog", {
                      dataArray: o.map((e) => ({
                        message:
                          "\n" +
                          r(e.date) +
                          " [" +
                          e.type[0].toUpperCase() +
                          "][wxapplib]] " +
                          e.content,
                      })),
                    })
                  : "android" === e &&
                    c.invoke("systemLog", {
                      message: ["\n"]
                        .concat(
                          o.map(
                            (e) =>
                              "[" +
                              e.type[0].toUpperCase() +
                              "][" +
                              r(e.date) +
                              "][wxapplib]] " +
                              e.content
                          )
                        )
                        .join("\n"),
                    }),
                (t = []));
            }, 4e3);
          });
          return u()(
            u()({}, Ue(o)),
            {},
            {
              createLogger: function (e) {
                return Ue(o, "string" == typeof e ? e : "default");
              },
              __mergeSubContextLogs: (e) => {
                Array.isArray(e) &&
                  e.forEach((e) => {
                    var { level: t, logs: r, category: n } = e;
                    o(t, n)(...r);
                  });
              },
              __isFromMainContext: !0,
            }
          );
        },
        qe = (() => {
          if (C.isWorker || C.isWidget) {
            return Object.assign(
              {
                createLogger: function () {
                  return D;
                },
              },
              D
            );
          }
          return C.isSubContext && C.isIsolateContext
            ? ((e = []),
              (t =
                (t, r) =>
                (...n) => {
                  e.push({ level: t, logs: n, category: r });
                }),
              (r = () => {
                setTimeout(() => {
                  var t = _.__isFromMainContext
                    ? _.__mergeSubContextLogs
                    : null;
                  t ? (t(e), (e = [])) : r();
                }, 1e3);
              }),
              Le.onStart(r),
              u()(
                u()({}, Ue(t)),
                {},
                {
                  createLogger: (e) =>
                    Ue(t, "string" == typeof e ? e : "default"),
                  __isFromMainContext: !1,
                }
              ))
            : Ze();
          var e, t, r;
        })();
      Le.onLoad(() => {
        qe.info("[BaseLibVersion] " + JSON.stringify(t));
      });
      var He,
        Ve = qe,
        Ke = j(
          ["log", "info", "warn", "error"],
          (e) =>
            function (...t) {
              (M || R()) && console[e]("[system]", ...t);
            }
        );
      function Ye() {
        return (
          He ||
          ("undefined" != typeof NativeGlobal &&
          void 0 !== NativeGlobal.WebAssembly
            ? NativeGlobal.WebAssembly
            : void 0 !== globalThis.WebAssembly
            ? globalThis.WebAssembly
            : void 0)
        );
      }
      Le.onLoad(() => {
        He = Ye();
      });
      var Je = Object.create(null);
      Object.defineProperty(Je, "WebAssembly", { enumerable: !0, get: Ye });
      var Xe = Je,
        ze = e.g,
        Qe = u()(
          u()(
            u()(
              {
                env: C,
                global: ze,
                get isConfigReady() {
                  return Le.getIsStarted();
                },
                get isStarted() {
                  return Le.getIsStarted();
                },
                get isLoaded() {
                  return Le.getIsLoaded();
                },
              },
              Le
            ),
            a
          ),
          {},
          {
            wxConsole: D,
            wxPerfConsole: F,
            wxNativeConsole: Ve,
            libConsole: Ke,
            libGlobal: Xe,
          }
        );
      void 0 !== r &&
        ((n = function () {
          return "return this" === arguments[arguments.length - 1]
            ? function () {
                return ze;
              }
            : new r(...arguments);
        }),
        (n.prototype = r.prototype));
      var et = Qe;
    })(),
      (a = s.default);
  })();
  var c,
    l,
    u,
    f,
    p,
    d,
    h,
    g,
    v,
    y = a.wxConsole,
    m = a.wxPerfConsole,
    _ = a.wxNativeConsole;
  a.libConsole, a.libGlobal;
  (() => {
    "use strict";
    var e = {
      d: (t, r) => {
        for (var n in r)
          e.o(r, n) &&
            !e.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
      },
    };
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new n("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
      (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
    var t = {};
    e.d(t, { default: () => P });
    class r {
      constructor(e = 0) {
        (this.id = e), (this.$ = {});
      }
      add(e) {
        var t = this.id++;
        return "function" == typeof e && (this.$[t] = e), t;
      }
      has(e) {
        return "function" == typeof this.$[e];
      }
      callAndRemove(e, t) {
        if (e in this.$) {
          var r = this.$[e];
          delete this.$[e], "function" == typeof r && r(t);
        }
      }
    }
    class o {
      constructor() {
        this.$ = {};
      }
      set(e, t) {
        this.$[e] = t;
      }
      emit(e, ...t) {
        var r = this.$[e];
        "function" == typeof r && r(...t);
      }
    }
    var s = () => {},
      l = JSON.parse,
      f = JSON.stringify,
      p = "custom_event_",
      d = 0;
    function h(t) {
      var n = (function () {
          var t = e.g.webkit;
          return delete e.g.webkit, t;
        })(),
        c = (function () {
          var t = e.g.WeixinJSCore;
          return (
            "object" == typeof t &&
              "function" != typeof t.publishHandler &&
              (t.publishHandler = s),
            a.env.isWorker &&
              "function" == typeof e.g.workerInvokeJsApi &&
              ((t = {
                invokeHandler: e.g.workerInvokeJsApi,
                publishHandler: s,
              }),
              (d = 1 << 25)),
            (e.g.WeixinJSCore = {
              invokeHandler: s,
              publishHandler: s,
              setTimerHandler: s,
              clearTimerHandler: s,
            }),
            t
          );
        })(),
        h = new r(d),
        g = new o(),
        v = new o();
      function y(e, t) {
        if (void 0 !== e && h.has(t) && "" !== e && null !== e) {
          if ("string" == typeof e)
            try {
              (e = l(e)), (e = u.unpack(e));
            } catch (t) {
              e = {};
            }
          h.callAndRemove(t, e);
        }
      }
      return {
        invoke(e, r, o, s = {}) {
          var l = r;
          s.keepOriginalParams ||
            t.directInvokeJS ||
            ((r = u.pack(r)), (l = f(r || {}))),
            delete s.keepOriginalParams,
            (function (e, r, o, s = {}) {
              if (c) {
                var l, u;
                y(
                  "splashad" === a.env.workerType || i.supportInvokeWithAppId
                    ? null === (l = c.invokeHandler) || void 0 === l
                      ? void 0
                      : l.call(c, e, r, o, s)
                    : null === (u = c.invokeHandler) || void 0 === u
                    ? void 0
                    : u.call(c, e, r, o),
                  o
                );
              } else {
                var p = {
                  event: e,
                  paramsString: r,
                  callbackId: o,
                  privateArgs: f(s),
                };
                if (t.isWebMiniGame) y(prompt("webgame_invoke", f(p)), o);
                else {
                  var d =
                    null == n
                      ? void 0
                      : n.messageHandlers.invokeHandler.postMessage(p);
                  null != d &&
                    d.catch &&
                    d.catch((t) => {
                      var n = console.error.bind(console);
                      n(
                        "webkit.messageHandlers.invokeHandler.postMessage fail"
                      ),
                        n(`event=${e}`),
                        n("params=", r),
                        n("err=", t),
                        n("err.code=", t.code),
                        n("err.message=", t.message),
                        n("err.name=", t.name);
                    });
                }
              }
            })(e, l, h.add(o), s);
        },
        on(e, t) {
          g.set(e, t);
        },
        subscribe(e, t) {
          v.set(p + e, t);
        },
        publish(e, r, o) {
          e = p + e;
          var i = o,
            a = r;
          t.directInvokeJS || ((a = f(r)), (i = f(o))),
            (function (e, t, r) {
              if (c) {
                var o;
                null === (o = c.publishHandler) ||
                  void 0 === o ||
                  o.call(c, e, t, r);
              } else {
                var i =
                  null == n
                    ? void 0
                    : n.messageHandlers.publishHandler.postMessage({
                        event: e,
                        paramsString: t,
                        webviewIds: r,
                      });
                null != i &&
                  i.catch &&
                  i.catch((r) => {
                    var n = console.error.bind(console);
                    n("webkit.messageHandlers.publishHandler.postMessage fail"),
                      n(`event=${e}`),
                      n("params=", t),
                      n("err=", r),
                      n("err.code=", r.code),
                      n("err.message=", r.message),
                      n("err.name=", r.name);
                  });
              }
            })(e, a, i);
        },
        invokeCallbackHandler: function (e, t) {
          (t = u.unpack(t)), h.callAndRemove(e, t);
        },
        subscribeHandler: function (e, t, r, n) {
          (t = u.unpack(t)),
            -1 !== e.indexOf(p)
              ? v.emit(e, t, r, n || {})
              : g.emit(e, t, r, n || {});
        },
      };
    }
    var g = !0,
      v = {},
      y = {},
      m = new Set([
        "getSystemInfo",
        "getNetworkType",
        "isGameRecorderSupported",
        "getDeviceInfo",
      ]);
    a.onPostStart(() => {
      (g = !1), (v = {}), (y = {});
    });
    var _ = new Set([
      "onTouchStart",
      "onTouchMove",
      "onTouchEnd",
      "onTouchCancel",
      "onTextViewDrag",
      "onImageViewLoad",
      "onScrollViewScroll",
    ]);
    "function" == typeof logxx && logxx("jsbridge start");
    var b = null;
    var w = new (class {
        constructor() {
          (this.value = void 0), (this.pending = []);
        }
        ready(e) {
          "function" == typeof e &&
            (void 0 === this.value ? this.pending.push(e) : e(this.value));
        }
        done(e) {
          (this.value = e),
            this.pending.forEach((t) => {
              t(e);
            }),
            (this.pending = []);
        }
      })(),
      k = w.ready.bind(w),
      S = new (class {
        constructor(e) {
          (this.onNewEvent = e),
            (this.$ = {}),
            (this.$e = new a.EventEmitter()),
            (this.knownEvents = new Set());
        }
        emitNewEvent(e) {
          this.knownEvents.has(e) ||
            (this.knownEvents.add(e), this.onNewEvent(e, this));
        }
        add(e, t, r) {
          this.emitNewEvent(e), this.$e.on(e, t, r);
        }
        remove(e, t) {
          this.$e.off(e, t);
        }
        setSingle(e, t) {
          this.emitNewEvent(e), (this.$[e] = t);
        }
        emit(e, ...t) {
          var r = this.$[e];
          "function" == typeof r && r(...t), this.$e.emit(e, ...t);
        }
        emitCancelable(e, ...t) {
          this.$e.emitCancelable(e, ...t);
        }
      })((e, t) => {
        k((r) => {
          r.on(e, (...r) => {
            _.has(e) ? t.emitCancelable(e, ...r) : t.emit(e, ...r);
          });
        });
      }),
      T = () => {},
      A = [],
      x = {
        on(e, t) {
          _.has(e) ? S.add(e, t) : S.setSingle(e, t);
        },
        addEventListener(e, t, r) {
          S.add(e, t, r);
        },
        removeEventListener(e, t) {
          S.remove(e, t);
        },
        invoke(e, t, r, n = {}) {
          var o = !0,
            i = !1,
            a = [],
            s = (e) => {
              for (var t of (i || (o = !1), a)) t(e, o);
              null == r || r(e);
            };
          if (b) {
            var c = (e) => {
              a.push(e);
            };
            for (var l of A) {
              var u = l(e, t, c);
              if (u)
                return u instanceof Promise
                  ? (u.then((e) => {
                      s(e);
                    }),
                    !0)
                  : (s(u), !1);
            }
            b.invoke(e, t, s, n);
          } else
            console.error(`[jsbridge] invoke ${e} fail: jsbridge not ready.`),
              s({ errMsg: `${e}:fail jsbridge not ready`, errno: 4 });
          return (i = !0), o;
        },
        get invokeCallbackHandler() {
          var e;
          return null === (e = b) || void 0 === e
            ? void 0
            : e.invokeCallbackHandler;
        },
        get subscribeHandler() {
          var e;
          return null === (e = b) || void 0 === e ? void 0 : e.subscribeHandler;
        },
        publish: T,
        subscribe: T,
        addSubscribeListener: T,
        removeSubscribeListener: T,
        addInvokeInterceptor(e) {
          return A.push(e), this;
        },
      };
    a.onLoad(() => {
      !(function (t) {
        if (
          !(
            ("devtools" === a.env.platform && !a.env.isWorker) ||
            e.g.useGlobalJSBridge ||
            e.g.OSUseGlobalJSBridge
          )
        ) {
          var r = h({
              directInvokeJS: !!i.wmpfDirectInvokeJs,
              isWebMiniGame: !!i.isWK,
            }),
            n = {
              get invokeCallbackHandler() {
                return r.invokeCallbackHandler;
              },
              get subscribeHandler() {
                return r.subscribeHandler;
              },
            };
          return (
            i.clientDebug &&
              Object.assign(n, {
                on: r.on,
                publish: r.publish,
                invoke: r.invoke,
                subscribe: r.subscribe,
              }),
            (e.g.WeixinJSBridge = n),
            t(r, !1)
          );
        }
        if (void 0 !== e.g.WeixinJSBridge) return t(e.g.WeixinJSBridge, !0);
        document.addEventListener(
          "WeixinJSBridgeReady",
          () => {
            t(e.g.WeixinJSBridge, !0);
          },
          !1
        );
      })((t, r) => {
        (b = t),
          r &&
            e.g.WeixinJSBridge === c &&
            Object.keys(t).forEach((e) => {
              e in x || (x[e] = (...r) => t[e](...r));
            }),
          w.done(b);
      });
    }),
      x
        .addInvokeInterceptor((e) => {
          if (!a.isStarted && "splashad" !== a.env.workerType)
            return (
              console.error(`[jsbridge] invoke ${e} fail: too eayly.`),
              { errMsg: `${e}:fail too early`, errno: 4 }
            );
        })
        .addInvokeInterceptor((e, t, r) => {
          if (g && m.has(e)) {
            if (e in v) return v[e];
            if (e in y) return y[e];
            if (m.has(e)) {
              var n = new Promise((t) => {
                r((r, n) => {
                  n ? t(r) : (delete y[e], (v[e] = r));
                });
              });
              y[e] = n;
            }
          }
        });
    new Map();
    a.setWeixinJSBridge(x);
    var P = x;
    c = t.default;
  })(),
    (() => {
      var e = {
          642: (e) => {
            var t = (function (e) {
              "use strict";
              var t,
                r = Object.prototype,
                n = r.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                i = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                s = o.toStringTag || "@@toStringTag";
              function c(e, t, r) {
                return (
                  Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  }),
                  e[t]
                );
              }
              try {
                c({}, "");
              } catch (e) {
                c = function (e, t, r) {
                  return (e[t] = r);
                };
              }
              function l(e, t, r, n) {
                var o = t && t.prototype instanceof v ? t : v,
                  i = Object.create(o.prototype),
                  a = new I(n || []);
                return (
                  (i._invoke = (function (e, t, r) {
                    var n = f;
                    return function (o, i) {
                      if (n === d)
                        throw new Error("Generator is already running");
                      if (n === h) {
                        if ("throw" === o) throw i;
                        return C();
                      }
                      for (r.method = o, r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                          var s = A(a, r);
                          if (s) {
                            if (s === g) continue;
                            return s;
                          }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                          if (n === f) throw ((n = h), r.arg);
                          r.dispatchException(r.arg);
                        } else
                          "return" === r.method && r.abrupt("return", r.arg);
                        n = d;
                        var c = u(e, t, r);
                        if ("normal" === c.type) {
                          if (((n = r.done ? h : p), c.arg === g)) continue;
                          return { value: c.arg, done: r.done };
                        }
                        "throw" === c.type &&
                          ((n = h), (r.method = "throw"), (r.arg = c.arg));
                      }
                    };
                  })(e, r, a)),
                  i
                );
              }
              function u(e, t, r) {
                try {
                  return { type: "normal", arg: e.call(t, r) };
                } catch (e) {
                  return { type: "throw", arg: e };
                }
              }
              e.wrap = l;
              var f = "suspendedStart",
                p = "suspendedYield",
                d = "executing",
                h = "completed",
                g = {};
              function v() {}
              function y() {}
              function m() {}
              var _ = {};
              _[i] = function () {
                return this;
              };
              var b = Object.getPrototypeOf,
                w = b && b(b(E([])));
              w && w !== r && n.call(w, i) && (_ = w);
              var k = (m.prototype = v.prototype = Object.create(_));
              function S(e) {
                ["next", "throw", "return"].forEach(function (t) {
                  c(e, t, function (e) {
                    return this._invoke(t, e);
                  });
                });
              }
              function T(e, t) {
                function r(o, i, a, s) {
                  var c = u(e[o], e, i);
                  if ("throw" !== c.type) {
                    var l = c.arg,
                      f = l.value;
                    return f && "object" == typeof f && n.call(f, "__await")
                      ? t.resolve(f.__await).then(
                          function (e) {
                            r("next", e, a, s);
                          },
                          function (e) {
                            r("throw", e, a, s);
                          }
                        )
                      : t.resolve(f).then(
                          function (e) {
                            (l.value = e), a(l);
                          },
                          function (e) {
                            return r("throw", e, a, s);
                          }
                        );
                  }
                  s(c.arg);
                }
                var o;
                this._invoke = function (e, n) {
                  function i() {
                    return new t(function (t, o) {
                      r(e, n, t, o);
                    });
                  }
                  return (o = o ? o.then(i, i) : i());
                };
              }
              function A(e, r) {
                var n = e.iterator[r.method];
                if (n === t) {
                  if (((r.delegate = null), "throw" === r.method)) {
                    if (
                      e.iterator.return &&
                      ((r.method = "return"),
                      (r.arg = t),
                      A(e, r),
                      "throw" === r.method)
                    )
                      return g;
                    (r.method = "throw"),
                      (r.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ));
                  }
                  return g;
                }
                var o = u(n, e.iterator, r.arg);
                if ("throw" === o.type)
                  return (
                    (r.method = "throw"),
                    (r.arg = o.arg),
                    (r.delegate = null),
                    g
                  );
                var i = o.arg;
                return i
                  ? i.done
                    ? ((r[e.resultName] = i.value),
                      (r.next = e.nextLoc),
                      "return" !== r.method &&
                        ((r.method = "next"), (r.arg = t)),
                      (r.delegate = null),
                      g)
                    : i
                  : ((r.method = "throw"),
                    (r.arg = new TypeError("iterator result is not an object")),
                    (r.delegate = null),
                    g);
              }
              function x(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                  2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                  this.tryEntries.push(t);
              }
              function P(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
              }
              function I(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                  e.forEach(x, this),
                  this.reset(!0);
              }
              function E(e) {
                if (e) {
                  var r = e[i];
                  if (r) return r.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                    var o = -1,
                      a = function r() {
                        for (; ++o < e.length; )
                          if (n.call(e, o))
                            return (r.value = e[o]), (r.done = !1), r;
                        return (r.value = t), (r.done = !0), r;
                      };
                    return (a.next = a);
                  }
                }
                return { next: C };
              }
              function C() {
                return { value: t, done: !0 };
              }
              return (
                (y.prototype = k.constructor = m),
                (m.constructor = y),
                (y.displayName = c(m, s, "GeneratorFunction")),
                (e.isGeneratorFunction = function (e) {
                  var t = "function" == typeof e && e.constructor;
                  return (
                    !!t &&
                    (t === y ||
                      "GeneratorFunction" === (t.displayName || t.name))
                  );
                }),
                (e.mark = function (e) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, m)
                      : ((e.__proto__ = m), c(e, s, "GeneratorFunction")),
                    (e.prototype = Object.create(k)),
                    e
                  );
                }),
                (e.awrap = function (e) {
                  return { __await: e };
                }),
                S(T.prototype),
                (T.prototype[a] = function () {
                  return this;
                }),
                (e.AsyncIterator = T),
                (e.async = function (t, r, n, o, i) {
                  void 0 === i && (i = Promise);
                  var a = new T(l(t, r, n, o), i);
                  return e.isGeneratorFunction(r)
                    ? a
                    : a.next().then(function (e) {
                        return e.done ? e.value : a.next();
                      });
                }),
                S(k),
                c(k, s, "Generator"),
                (k[i] = function () {
                  return this;
                }),
                (k.toString = function () {
                  return "[object Generator]";
                }),
                (e.keys = function (e) {
                  var t = [];
                  for (var r in e) t.push(r);
                  return (
                    t.reverse(),
                    function r() {
                      for (; t.length; ) {
                        var n = t.pop();
                        if (n in e) return (r.value = n), (r.done = !1), r;
                      }
                      return (r.done = !0), r;
                    }
                  );
                }),
                (e.values = E),
                (I.prototype = {
                  constructor: I,
                  reset: function (e) {
                    if (
                      ((this.prev = 0),
                      (this.next = 0),
                      (this.sent = this._sent = t),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = "next"),
                      (this.arg = t),
                      this.tryEntries.forEach(P),
                      !e)
                    )
                      for (var r in this)
                        "t" === r.charAt(0) &&
                          n.call(this, r) &&
                          !isNaN(+r.slice(1)) &&
                          (this[r] = t);
                  },
                  stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                  },
                  dispatchException: function (e) {
                    if (this.done) throw e;
                    var r = this;
                    function o(n, o) {
                      return (
                        (s.type = "throw"),
                        (s.arg = e),
                        (r.next = n),
                        o && ((r.method = "next"), (r.arg = t)),
                        !!o
                      );
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                      var a = this.tryEntries[i],
                        s = a.completion;
                      if ("root" === a.tryLoc) return o("end");
                      if (a.tryLoc <= this.prev) {
                        var c = n.call(a, "catchLoc"),
                          l = n.call(a, "finallyLoc");
                        if (c && l) {
                          if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                          if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                        } else if (c) {
                          if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        } else {
                          if (!l)
                            throw new Error(
                              "try statement without catch or finally"
                            );
                          if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                      var o = this.tryEntries[r];
                      if (
                        o.tryLoc <= this.prev &&
                        n.call(o, "finallyLoc") &&
                        this.prev < o.finallyLoc
                      ) {
                        var i = o;
                        break;
                      }
                    }
                    i &&
                      ("break" === e || "continue" === e) &&
                      i.tryLoc <= t &&
                      t <= i.finallyLoc &&
                      (i = null);
                    var a = i ? i.completion : {};
                    return (
                      (a.type = e),
                      (a.arg = t),
                      i
                        ? ((this.method = "next"),
                          (this.next = i.finallyLoc),
                          g)
                        : this.complete(a)
                    );
                  },
                  complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                      "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                        ? ((this.rval = this.arg = e.arg),
                          (this.method = "return"),
                          (this.next = "end"))
                        : "normal" === e.type && t && (this.next = t),
                      g
                    );
                  },
                  finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var r = this.tryEntries[t];
                      if (r.finallyLoc === e)
                        return this.complete(r.completion, r.afterLoc), P(r), g;
                    }
                  },
                  catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var r = this.tryEntries[t];
                      if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                          var o = n.arg;
                          P(r);
                        }
                        return o;
                      }
                    }
                    throw new Error("illegal catch attempt");
                  },
                  delegateYield: function (e, r, n) {
                    return (
                      (this.delegate = {
                        iterator: E(e),
                        resultName: r,
                        nextLoc: n,
                      }),
                      "next" === this.method && (this.arg = t),
                      g
                    );
                  },
                }),
                e
              );
            })(e.exports);
            try {
              l = t;
            } catch (e) {
              n("r", "regeneratorRuntime = r")(t);
            }
          },
        },
        t = {};
      function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = (t[n] = { exports: {} });
        return e[n](i, i.exports, r), i.exports;
      }
      (() => {
        r(642);
        var e = i,
          t = () => {
            var e = {};
            Object.keys(l).forEach((t) => {
              Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: () => l[t],
                set(r) {
                  delete e[t], (e[t] = r);
                },
              });
            }),
              (globalThis.regeneratorRuntime = e);
          };
        "function" == typeof e.onReady
          ? e.onReady(() => {
              "devtools" === e.platform ||
                ["develop", "trial"].includes(e.envVersion) ||
                t();
            })
          : t();
      })();
    })(),
    (() => {
      "use strict";
      var e = {
        d: (t, r) => {
          for (var n in r)
            e.o(r, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
        },
      };
      (e.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new n("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
        (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
      var t = {};
      (() => {
        e.d(t, { default: () => b });
        var r =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function n(e) {
          for (
            var t = "", n = new Uint8Array(e), o = n.byteLength, i = 0;
            i < o;
            i++
          )
            t += String.fromCharCode(n[i]);
          return (function (e) {
            if ("function" == typeof btoa) return btoa(e);
            for (
              var t, n, o = String(e), i = "", a = 0, s = r;
              o.charAt(0 | a) || ((s = "="), a % 1);
              i += s.charAt(63 & (t >> (8 - (a % 1) * 8)))
            ) {
              if ((n = o.charCodeAt((a += 3 / 4))) > 255)
                throw new Error('"btoa" failed');
              t = (t << 8) | n;
            }
            return i;
          })(t);
        }
        function o(e) {
          for (
            var t = (function (e) {
                if ("function" == typeof atob) return atob(e);
                var t = String(e).replace(/=+$/, ""),
                  n = "";
                if (t.length % 4 == 1) throw new Error('"atob" failed');
                for (
                  var o, i, a = 0, s = 0;
                  (i = t.charAt(s++));
                  ~i && ((o = a % 4 ? 64 * o + i : i), a++ % 4)
                    ? (n += String.fromCharCode(255 & (o >> ((-2 * a) & 6))))
                    : 0
                )
                  i = r.indexOf(i);
                return n;
              })(e),
              n = t.length,
              o = new Uint8Array(n),
              i = 0;
            i < n;
            i++
          )
            o[i] = t.charCodeAt(i);
          return o.buffer;
        }
        var s,
          c = i.platform,
          l = "ios" === c || "mac" === c,
          u = "android" === c || "windows" === c || "mina" === c;
        l && (s = e.g.WeixinNativeBuffer);
        var f = null;
        function p(e, t = !1) {
          var r = {};
          if (f && !t) {
            var o = !1,
              i = Object.getPrototypeOf(e);
            i !== ArrayBuffer.prototype &&
              ((o = !0), Object.setPrototypeOf(e, ArrayBuffer.prototype)),
              (r.id = f.create(e)),
              o && Object.setPrototypeOf(e, i);
          } else r.base64 = n(e);
          return r;
        }
        function d(e) {
          if (null != e)
            return f && void 0 !== e.id
              ? f.get(e.id)
              : void 0 !== e.base64
              ? o(e.base64)
              : void 0;
        }
        a.onLoad(() => {
          f = (function (e) {
            var t = s,
              r = e.getNativeBufferId,
              n = e.setNativeBuffer,
              o = e.getNativeBuffer;
            delete e.getNativeBufferId,
              delete e.setNativeBuffer,
              delete e.getNativeBuffer;
            var a = null;
            return (
              u &&
              "function" == typeof r &&
              "function" == typeof n &&
              "function" == typeof o &&
              i.nativeBufferEnabled
                ? (a = {
                    create(e) {
                      var t = r();
                      return n(t, e), t;
                    },
                    get: (e) => o(e),
                    useCompatibleMode() {},
                  })
                : l &&
                  t &&
                  (a = {
                    create: (e) => t.new(e),
                    get: (e) => t.get(e),
                    useCompatibleMode(e) {
                      t.useCompatibleMode(e);
                    },
                  }),
              a
            );
          })(e.g);
        });
        var h = Object.prototype.toString;
        function g(e) {
          return "[object Array]" === h.call(e);
        }
        function v(e) {
          return "[object ArrayBuffer]" === h.call(e);
        }
        function y(e, t) {
          if (!t) return null;
          var r = t.split(".");
          if (!r.length) return null;
          for (var n = r[r.length - 1], o = e, i = 0; i < r.length - 1; i++) {
            if (!o) return null;
            o = o[r[i]];
          }
          return [o, n];
        }
        function m(e, t = !1, r = !1) {
          if (null == e) return e;
          var n;
          if (t)
            n = (function (e, t = !1) {
              var r = [],
                n = function (e, r, o = []) {
                  for (var i in e) {
                    var a = e[i];
                    if (((u = a), "[object Object]" === h.call(u) || g(a))) {
                      var s = [...o];
                      s.push(i), n(a, r, s);
                    } else if (v(a)) {
                      if (e._sabId) continue;
                      var c = p(a, t),
                        l = Array.prototype.concat.call(o, i).join(".");
                      (c.key = l), delete e[i], r.push(c);
                    }
                  }
                  var u;
                };
              return n(e, r), r;
            })(e, r);
          else {
            for (var o in ((n = []), e)) {
              var i = e[o];
              if (v(i)) {
                var a = p(i, r);
                (a.key = o), n.push(a);
              }
            }
            if (n.length > 0) for (var s of n) delete e[s.key];
          }
          return n.length > 0 && (e.__nativeBuffers__ = n), e;
        }
        function _(e, t = !1) {
          if (null == e || null == e.__nativeBuffers__) return e;
          var r = e.__nativeBuffers__;
          for (var n of (delete e.__nativeBuffers__, r))
            if (null != n) {
              var o = d(n);
              if (v(o))
                if (t) {
                  var i = y(e, n.key);
                  if (!i) return;
                  var [a, s] = i;
                  a[s] = o;
                } else e[n.key] = o;
            }
          return e;
        }
        var b = {
          new: p,
          get: d,
          useCompatibleMode: function (e) {
            var t;
            null === (t = f) || void 0 === t || t.useCompatibleMode(e);
          },
          pack: m,
          unpack: _,
          packPostMessage: (e, t = !1) => m(e, !0, t),
          unpackPostMessage: (e) => _(e, !0),
        };
      })(),
        (u = t.default);
    })(),
    (() => {
      "use strict";
      var e = {
        d: (t, r) => {
          for (var n in r)
            e.o(r, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
        },
      };
      (e.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new n("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
        (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
      var t = {};
      e.d(t, { default: () => k });
      var r,
        o,
        s = [
          "request",
          "createSocketTask",
          "operateSocketTask",
          "onSocketTaskStateChange",
          "createRequestTask",
          "createRequestTaskAsync",
          "operateRequestTask",
          "onRequestTaskStateChange",
          "createDownloadTask",
          "createDownloadTaskAsync",
          "operateDownloadTask",
          "onDownloadTaskStateChange",
          "createUploadTask",
          "createUploadTaskAsync",
          "operateUploadTask",
          "onUploadTaskStateChange",
          "getNetworkType",
          "createAudioInstance",
          "createAudioInstanceAsync",
          "operateAudio",
          "destroyAudioInstance",
          "getAudioState",
          "setAudioState",
          "onAudioStateChange",
          "uploadFile",
          "downloadFile",
          "saveFile",
          "getFileInfo",
          "getSavedFileInfo",
          "getSavedFileList",
          "removeSavedFile",
          "readFile",
          "readCompressedFile",
          "writeFile",
          "mkdir",
          "readdir",
          "rmdir",
          "access",
          "unlink",
          "stat",
          "copyFile",
          "rename",
          "fs_appendFile",
          "fs_appendFileSync",
          "fs_copyFile",
          "fs_copyFileSync",
          "fs_rename",
          "fs_renameSync",
          "getABTestConfig",
          "reportKeyValue",
          "reportIDKey",
          "getPermissionBytes",
        ],
        c = [],
        l = [],
        p = [],
        d = {},
        h = function (e) {
          return d[e];
        },
        g = function (e, t) {
          d[e] = t;
        },
        v = function (e) {
          (e = u.unpackPostMessage(e)),
            l.forEach((t) => {
              "function" == typeof t && t(e);
            });
        },
        y = function (e, t) {
          (t = u.unpackPostMessage(t)),
            c.forEach((r) => {
              "function" == typeof r && r(e, t);
            });
        },
        m = function (e, t) {
          p.forEach((r) => {
            "function" == typeof r && r(e, t);
          });
        },
        _ = function (e) {
          a.emitUnhandledError(e);
        },
        b = {
          get appServiceMsgHandler() {
            return v;
          },
          get workerMsgHandler() {
            return y;
          },
          get workerCreatedHandler() {
            return m;
          },
          get errorHandler() {
            return _;
          },
          get __workerId__() {
            return o.__workerId__;
          },
        },
        w = {
          create: function (e, t) {
            var n,
              i,
              a = !(!(t = t || {}).useExperimentalWorker || !r);
            if (
              (a
                ? ((i = r), (n = JSON.stringify(t)))
                : ((i = o), (n = { APIList: s })),
              "function" == typeof i.create)
            ) {
              var c = i.create.call(i, e, n);
              return g(c, i), { workerId: c, useWKWorker: a };
            }
            return { workerId: -1, useWKWorker: a };
          },
          createWXLibWorker: function (e, t) {
            var r = { APIList: s };
            t.APIList && (r.APIList = s.concat(t.APIList)),
              t.type && (r.type = t.type);
            var n = o;
            if ("function" == typeof n.createWXLibWorker) {
              var i = n.createWXLibWorker.call(n, e, JSON.stringify(r));
              return g(i, n), { workerId: i };
            }
            return { workerId: -1 };
          },
          terminate: function (e) {
            var t = h(e);
            if ("function" == typeof (null == t ? void 0 : t.terminate))
              return (
                (function (e) {
                  delete d[e];
                })(e),
                t.terminate.call(t, e)
              );
          },
          postMsgToAppService: function (e, t) {
            try {
              !1 !== t && ((e = u.packPostMessage(e)), (e = JSON.stringify(e)));
            } catch (e) {
              console.error(e);
            }
            o.postMsgToAppService(e);
          },
          postMsgToWorker: function (e, t, r, n) {
            var o = h(e);
            try {
              !1 !== r &&
                ((t = u.packPostMessage(t, n)), (t = JSON.stringify(t))),
                null == o || o.postMsgToWorker(e, t);
            } catch (e) {
              console.error(e);
            }
          },
          onWorkerMsg: function (e) {
            c.push(e);
          },
          onWorkerCreated: function (e) {
            p.push(e);
          },
          onAppServiceMsg: function (e) {
            l.push(e);
          },
          get WebAssembly() {
            return o.WebAssembly;
          },
          isSupportWXLibWorker: function () {
            return "function" == typeof o.createWXLibWorker;
          },
        };
      a.onLoadInstant(() => {
        (r = e.g.WeAppWorker),
          (o = e.g.WeixinWorker),
          (e.g.WeixinWorker = b),
          (e.g.WeAppWorker = b),
          "devtools" === i.platform &&
            ((w.appServiceMsgHandler = b.appServiceMsgHandler),
            (w.workerMsgHandler = b.workerMsgHandler),
            (w.errorHandler = b.errorHandler),
            (w.__workerId__ = b.__workerId__));
      });
      var k = w;
      f = t.default;
    })(),
    (() => {
      var e = {
          632: (e, t, r) => {
            "use strict";
            r.r(t);
            var n = (() => (
              i.onReady(() => {
                n !== i && void 0 !== n && Object.assign(n, i);
              }),
              i
            ))();
            t.default = n;
          },
          401: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { reportDeprecatedAPI: () => n });
            var n = (e) => {
              h.reportKeyValue({ key: "DeprecatedAPI", value: e });
            };
          },
          387: (e, t, r) => {
            var { reportDeprecatedAPI: n } = r(401),
              { default: o } = r(632);
            e.exports = {
              hijack: function (e = !0, t = !0) {
                !(function (e) {
                  if ("function" == typeof globalThis.Function) {
                    var t = {};
                    (r.prototype = globalThis.Function.prototype),
                      (r.prototype.constructor = r),
                      (globalThis.Function = r);
                  }
                  function r() {
                    if (
                      arguments.length > 0 &&
                      "return this" === arguments[arguments.length - 1]
                    )
                      return function () {
                        return e ? t : {};
                      };
                  }
                })(t),
                  "undefined" != typeof eval &&
                    (("ios" === o.platform &&
                      r.g.__isAppServiceRemoteDebugMode__) ||
                      (globalThis.eval = void 0)),
                  e &&
                    (function () {
                      if ("undefined" != typeof setTimeout) {
                        var e = setTimeout;
                        globalThis.setTimeout = function (t, r = 0) {
                          if ("function" != typeof t)
                            throw new TypeError(
                              `setTimeout expects a function as first argument but got ${typeof t}.`
                            );
                          var n = d.surroundThirdByTryCatch(
                              t,
                              "at setTimeout callback function"
                            ),
                            o = [].slice.call(arguments, 2);
                          return e(() => {
                            n.apply(globalThis, o);
                          }, r);
                        };
                        var t = setInterval;
                        globalThis.setInterval = function (e, r) {
                          if ("function" != typeof e)
                            throw new TypeError(
                              `setInterval expects a function as first argument but got ${typeof e}.`
                            );
                          var n = d.surroundThirdByTryCatch(
                              e,
                              "at setInterval callback function"
                            ),
                            o = [].slice.call(arguments, 2);
                          return t(() => {
                            n.apply(globalThis, o);
                          }, r);
                        };
                      }
                    })(),
                  "undefined" != typeof WebAssembly &&
                    [
                      "compile",
                      "compileStreaming",
                      "instantiate",
                      "instantiateStreaming",
                      "validate",
                      "Module",
                    ].forEach((e) => {
                      if (void 0 !== WebAssembly[e]) {
                        var t = WebAssembly[e];
                        Object.defineProperty(WebAssembly, e, {
                          get: () => (n("globalWa"), t),
                          set: (t) => {
                            Object.defineProperty(WebAssembly, e, {
                              value: t,
                              writable: !0,
                              configurable: !0,
                              enumerable: !0,
                            });
                          },
                          configurable: !0,
                          enumerable: !0,
                        });
                      }
                    });
              },
            };
          },
          585: () => {
            if ("undefined" == typeof navigator) {
              try {
                new n(
                  'var GeneratorFunctionProto = Object.getPrototypeOf(function* () {});var FakeGeneratorFunction = function () {};FakeGeneratorFunction.prototype = GeneratorFunctionProto;Object.defineProperty(GeneratorFunctionProto, "constructor", { value: FakeGeneratorFunction });'
                )();
              } catch (e) {}
              try {
                new n(
                  'var AsyncFunctionProto = Object.getPrototypeOf(async function () {});var FakeAsyncFunction = function () {};FakeAsyncFunction.prototype = AsyncFunctionProto;Object.defineProperty(AsyncFunctionProto, "constructor", { value: FakeAsyncFunction });'
                )();
              } catch (e) {}
              try {
                new n(
                  'var AsyncGeneratorFunctionProto = Object.getPrototypeOf(async function* () {});var FakeAsyncGeneratorFunction = function () {};FakeAsyncGeneratorFunction.prototype = AsyncGeneratorFunctionProto;Object.defineProperty(AsyncGeneratorFunctionProto, "constructor", { value: FakeAsyncGeneratorFunction });'
                )();
              } catch (e) {}
            }
          },
        },
        t = {};
      function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = (t[n] = { exports: {} });
        return e[n](i, i.exports, r), i.exports;
      }
      (r.d = (e, t) => {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
        (r.g = (function () {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new n("return this")();
          } catch (e) {
            if ("object" == typeof window) return window;
          }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var o = {};
      (() => {
        "use strict";
        r.r(o),
          r.d(o, {
            bridgeGlobalInstanceOf: () => ee,
            deepFreezeGlobalObjs: () => V,
            deepFreezeObj: () => j,
            deepFreezeObjProperty: () => M,
            doNotWriteGlobalObjs: () => H,
            doNotWriteObj: () => N,
            doNotWriteObjProperty: () => R,
            globalEsHiddenObjs: () => t,
            globalEsObjs: () => n,
            hijack: () => K.hijack,
            overwriteSetPrototypeOf: () => q,
          });
        r(585);
        var e = globalThis.Function,
          t = [
            () => Object.getPrototypeOf(Uint8Array.prototype).constructor,
            () =>
              new e(
                "return Object.getPrototypeOf((function* () {})()).constructor"
              )(),
            () =>
              new e(
                "return Object.getPrototypeOf(function* () {}).constructor"
              )(),
            () =>
              new e(
                "return Object.getPrototypeOf(async function () {}).constructor"
              )(),
            () =>
              new e(
                "return Object.getPrototypeOf(async function* () {}).constructor"
              )(),
          ]
            .map((e) => {
              try {
                return e();
              } catch (e) {}
            })
            .filter(Boolean),
          n = [
            "AggregateError",
            "Array",
            "ArrayBuffer",
            "Atomics",
            "BigInt",
            "BigInt64Array",
            "BigUint64Array",
            "Boolean",
            "DataView",
            "Date",
            "EvalError",
            "FinalizationRegistry",
            "Float32Array",
            "Float64Array",
            "Function",
            "globalThis",
            "Infinity",
            "Int16Array",
            "Int32Array",
            "Int8Array",
            "Intl",
            "JSON",
            "Map",
            "Math",
            "NaN",
            "Number",
            "Object",
            "Promise",
            "Proxy",
            "RangeError",
            "ReferenceError",
            "Reflect",
            "RegExp",
            "Set",
            "SharedArrayBuffer",
            "String",
            "Symbol",
            "SyntaxError",
            "TypeError",
            "URIError",
            "Uint16Array",
            "Uint32Array",
            "Uint8Array",
            "Uint8ClampedArray",
            "WeakMap",
            "WeakSet",
            "WebAssembly",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "eval",
            "isFinite",
            "isNaN",
            "null",
            "parseFloat",
            "parseInt",
            "undefined",
            "unescape",
            "uneval",
          ],
          i = [
            "getApp",
            "getCurrentPages",
            "define",
            "require",
            "Reporter",
            "Protect",
            "requirePlugin",
            "definePlugin",
          ],
          a = globalThis,
          s = r(632),
          c = (() => s.default.platform)(),
          l = (() => "ios" === c)(),
          u = (() => "mac" === c)();
        var f = /^\s*at .*(\S+:\d+|\(native\))/m,
          p = /^(eval@)?(\[native code\])?$/;
        function d(e, t = 1 / 0) {
          if ("string" != typeof e.stack)
            throw new Error("Cannot parse given Error object");
          var r = e.stack;
          return l || u
            ? (function (e, t) {
                for (
                  var r = [], n = e.split("\n"), o = 0, i = 0;
                  o < n.length && i < t;
                  ++o
                ) {
                  var a = n[o];
                  if (!p.test(a)) {
                    ++i;
                    var s = a.indexOf("@");
                    if (-1 === s) {
                      var c = h(a);
                      r.push({
                        fileName: c.URI,
                        lineNumber: c.line,
                        columnNumber: c.column,
                        source: a,
                      });
                    } else {
                      var l = a.substring(0, s),
                        u = h(a.substr(s + 1));
                      r.push({
                        functionName: l,
                        fileName: u.URI,
                        lineNumber: u.line,
                        columnNumber: u.column,
                        source: a,
                      });
                    }
                  }
                }
                return r;
              })(r, t)
            : (function (e, t) {
                for (
                  var r = [], n = e.split("\n"), o = 0, i = 0;
                  o < n.length && i < t;
                  ++o
                ) {
                  var a = n[o];
                  f.test(a) && (r.push(a), ++i);
                }
                return r.map((e) => {
                  e.indexOf("(eval ") > -1 &&
                    (e = e
                      .replace(/eval code/g, "eval")
                      .replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                  var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                    r = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                    n = (t = r ? t.replace(r[0], "") : t).split(/\s+/).slice(1),
                    o = h(r ? r[1] : n.pop());
                  return {
                    functionName: n.join(" ") || void 0,
                    fileName:
                      ["eval", "<anonymous>"].indexOf(o[0]) > -1
                        ? void 0
                        : o[0],
                    lineNumber: o[1],
                    columnNumber: o[2],
                    source: e,
                  };
                });
              })(r, t);
        }
        function h(e) {
          var t = /(?::(\d+))?(?::(\d+))?$/.exec(e);
          return t
            ? {
                URI: e.substring(0, e.length - t[0].length),
                line: t[1],
                column: t[2],
              }
            : { URI: e };
        }
        var g = Object.freeze,
          v = Object.setPrototypeOf,
          y = Object.defineProperty,
          m = Object.getOwnPropertyDescriptor,
          _ = Object.getOwnPropertyNames,
          b = Object.getOwnPropertySymbols,
          w = Object.getPrototypeOf,
          k = Object.preventExtensions;
        var S = [[(e) => !/(WAServiceMainContext|WAGame)\.js/.test(e)]];
        function T() {
          var e,
            t,
            r = Date.now(),
            n = d(new Error(), 3),
            o = n[1],
            i = n[2],
            a = !(
              o.fileName &&
              i.fileName &&
              i.fileName !== o.fileName &&
              ((e = i.fileName),
              (t = o.fileName),
              !S.some((r) => r.some((t) => t(e)) && r.some((e) => e(t))))
            );
          return Date.now() - r, a;
        }
        function A(e, t = !1) {
          if ("function" == typeof e || ("object" == typeof e && null !== e)) {
            var r = m(e, "__proto__");
            (r && !r.configurable) ||
              ((r || Object.isExtensible(e)) &&
                y(e, "__proto__", {
                  get() {
                    return w(this);
                  },
                  set(r) {
                    if (this === e) t && T() && v(e, r);
                    else {
                      if (
                        "function" != typeof this &&
                        ("object" != typeof this || null === e)
                      )
                        return;
                      v(this, r);
                    }
                  },
                  enumerable: !1,
                  configurable: !1,
                }));
          }
        }
        var x = new Map(),
          P = (e, t, r) => {
            x.has(e) || x.set(e, new Map());
            var n = x.get(e);
            n.has(t) ? Object.assign(n.get(t), r) : n.set(t, r);
          };
        function I(e, t, r = !1) {
          if ("function" != typeof e && ("object" != typeof e || null === e))
            return !1;
          try {
            var n = m(e, t);
            return (
              !!n &&
              (n.configurable &&
                (y(e, t, {
                  get: n.get || (() => n.value),
                  set(o) {
                    if (this === e)
                      r &&
                        T() &&
                        (n.set
                          ? n.set.call(this, o)
                          : n.writable && (n.value = o));
                    else {
                      if ("function" != typeof this && "object" != typeof this)
                        return;
                      !(function (e, t, r) {
                        try {
                          "__proto__" === t
                            ? v(e, r)
                            : y(e, t, {
                                value: r,
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                              });
                        } catch (e) {}
                      })(this, t, o);
                    }
                  },
                  enumerable: n.enumerable,
                  configurable: !1,
                }),
                r && P(e, t, n)),
              !n.get &&
                ("function" == typeof n.value ||
                  ("object" == typeof n.value && null !== n.value)))
            );
          } catch (e) {
            throw (e.message, e);
          }
        }
        var E = new WeakSet();
        function C(e) {
          E.add(e);
        }
        function O(e) {
          return E.has(e);
        }
        function M(e, t, r) {
          I(e, t) && j(e[t], r);
        }
        function j(e, t) {
          if (
            e &&
            !O(e) &&
            ("function" == typeof e || "object" == typeof e) &&
            e !== globalThis
          )
            if (e !== Error) {
              C(e);
              for (var r = _(e), n = b(e), o = 0; o < r.length; ++o)
                M(e, r[o], t);
              for (var i = 0; i < n.length; ++i) M(e, n[i], t);
              t ? k(e) : A(e, !1);
            } else if (t) {
              var a = (e) => {
                if (
                  e &&
                  !O(e) &&
                  ("function" == typeof e || "object" == typeof e) &&
                  e !== globalThis
                ) {
                  C(e), g(e);
                  for (var t = _(e), r = b(e), n = 0; n < t.length; ++n)
                    a(e[t[n]]);
                  for (var o = 0; o < r.length; ++o) a(e[r[o]]);
                }
              };
              a(Error);
            }
        }
        function R(e, t) {
          I(e, t, !0) && N(e[t]);
        }
        var L = new WeakSet();
        function D(e) {
          return L.has(e);
        }
        function N(e) {
          if (
            e &&
            !D(e) &&
            ("function" == typeof e || "object" == typeof e) &&
            e !== globalThis
          ) {
            !(function (e) {
              L.add(e);
            })(e);
            for (var t = _(e), r = b(e), n = 0; n < t.length; ++n) R(e, t[n]);
            for (var o = 0; o < r.length; ++o) R(e, r[o]);
            A(e, !0);
          }
        }
        var W = Object.prototype.hasOwnProperty,
          F = Object.defineProperty,
          $ = Object.defineProperties,
          B = Object.getOwnPropertyNames,
          U = Object.getOwnPropertySymbols,
          G = Object.getOwnPropertyDescriptor,
          Z = !1,
          q = function () {
            Z ||
              ((Z = !0),
              F(a.Object, "setPrototypeOf", {
                value: (e, t) => ((e.__proto__ = t), e),
                configurable: !0,
              }),
              F(a.Object, "defineProperty", {
                value(e, t, r) {
                  if (!D(e)) return F(e, t, r);
                  if (!T()) return r;
                  var n = G(e, t);
                  if (!n || n.configurable) {
                    var o = F(e, t, r);
                    return R(e, t), o;
                  }
                  return P(e, t, r), r;
                },
                configurable: !0,
              }),
              F(a.Object, "defineProperties", {
                value(e, t) {
                  if (!D(e)) return $(e, t);
                  if (!T()) return t;
                  var r = (r) => {
                    var n = G(e, r);
                    if (!n || n.configurable) {
                      var o = F(e, r, t[r]);
                      return R(e, r), o;
                    }
                    return P(e, r, t[r]), t[r];
                  };
                  return B(t).forEach(r), U(t).forEach(r), t;
                },
                configurable: !0,
              }));
          },
          H = function (e = []) {
            try {
              for (
                var r = [...n, ...i, ...t, ...e], o = (Date.now(), 0);
                o < r.length;
                ++o
              ) {
                var s = r[o],
                  c = typeof s;
                "string" === c
                  ? W.call(a, s) && R(a, s)
                  : ("function" !== c && "object" !== c) || N(s);
              }
              Date.now();
            } catch (e) {}
          },
          V = function (e = [], r = !1) {
            try {
              for (
                var o = [...n, ...i, ...t, ...e], s = (Date.now(), 0);
                s < o.length;
                ++s
              ) {
                var c = o[s],
                  l = typeof c;
                "string" === l
                  ? W.call(a, c) && M(a, c, r)
                  : ("function" !== l && "object" !== l) || j(c, r);
              }
              Date.now();
            } catch (e) {}
          },
          K = r(387),
          Y = Object.prototype.isPrototypeOf,
          J = Object.defineProperty,
          X = Symbol.hasInstance,
          z = function (e) {
            return (
              !("function" != typeof this || !Q(e)) &&
              ((e, t) => Y.call(t.prototype, e))(e, this)
            );
          },
          Q = (e) =>
            "object" == typeof e ? null !== e : "function" == typeof e;
        function ee(e, t) {
          for (
            var r = function (r) {
                var n = e[r],
                  o = t[r];
                if ("function" != typeof n) return "continue";
                var i = n[X] || z,
                  a = o[X] || z;
                J(n, X, {
                  value(e) {
                    return i.call(this, e) || a.call(o, e);
                  },
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                }),
                  J(o, X, {
                    value(e) {
                      return a.call(this, e) || i.call(n, e);
                    },
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                  });
              },
              n = 0;
            n < e.length;
            ++n
          )
            r(n);
        }
      })(),
        (p = o);
    })(),
    (() => {
      "use strict";
      var e = {
          d: (t, r) => {
            for (var n in r)
              e.o(r, n) &&
                !e.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
          },
          o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
          r: (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          },
        },
        t = {};
      e.r(t),
        e.d(t, {
          callMiniProgramOrPluginFunction: () => u,
          callSystemFunction: () => c,
          callThirdPartyFunction: () => f,
          surroundThirdByTryCatch: () => v,
          wrapMiniProgramOrPluginFunction: () => p,
          wrapSystemFunction: () => l,
          wrapThirdPartyFunction: () => g,
        });
      var r = /[ (@]*https?:\/\/([^/]*)\/+(.*?):(\d+):(\d+)/,
        n = [];
      function o(e) {
        if (!e || e.__wxOriginalStack__) return !1;
        var t = e.stack;
        if (void 0 === t) return !1;
        for (var r = t, o = n.length - 1, a = 0; a >= 0 && o >= 0; ) {
          var s = r.length,
            c = 0;
          for (var l in i)
            if (i[l]) {
              var u = r.indexOf(i[l], a);
              u < 0 || s <= u || ((s = u), (c = i[l].length));
            }
          if (s >= r.length) break;
          var f = `at <${n[o--].description}>`;
          (r = r.slice(0, s) + f + r.slice(s + c)), (a = s + f.length);
        }
        return (
          Object.defineProperties(e, {
            __wxOriginalStack__: { value: t, writable: !0, configurable: !0 },
            stack: { value: r, writable: !0, enumerable: !0, configurable: !0 },
          }),
          !0
        );
      }
      var i = {
        wrapSystemFunction: null,
        wrapMiniProgramOrPluginFunction: null,
      };
      function a(e) {
        var t = (new Error().stack || "").match(/.+/gm),
          n = "",
          o = 0;
        t &&
          t.forEach((e) => {
            if (r.test(e) && 2 === (o += 1)) {
              var t = e.match(/^(\s*)at /),
                i = t ? t[1].length : 0;
              return (n = e.slice(i)), !1;
            }
            return !0;
          }),
          (i[e] = n);
      }
      function s() {
        for (var e = "", t = n.length - 1; t >= 0; t--)
          n[t].pluginAppId && (e = n[t].pluginAppId);
        return e;
      }
      function c(e, t, r, c, u, f = !1) {
        var p;
        null === i.wrapSystemFunction &&
          ((i.wrapSystemFunction = ""), l("", "", a)("wrapSystemFunction")),
          n.push({ description: t });
        try {
          p = r.apply(c, u);
        } catch (t) {
          if (o(t)) {
            if ("AppServiceSdkKnownError" === t.type) throw (n.pop(), t);
            if ("ThirdScriptError" === t.type) {
              var d = s();
              h.thirdErrorReport({
                error: t,
                source: d,
                triggerErrorCallback: !f,
              });
            } else
              h.errorReport({ key: e, error: t, triggerErrorCallback: !f });
          }
          if (f) throw (n.pop(), t);
        }
        return n.pop(), p;
      }
      function l(e, t, r, n = !1) {
        return function (...o) {
          return c(e, t, r, this, o, n);
        };
      }
      function u(e, t, r, s, c, l = !1) {
        var u;
        null === i.wrapMiniProgramOrPluginFunction &&
          ((i.wrapMiniProgramOrPluginFunction = ""),
          p("", "", a)("wrapMiniProgramOrPluginFunction")),
          n.push({ description: t, pluginAppId: e });
        try {
          u = r.apply(s, c);
        } catch (t) {
          if (
            (o(t) &&
              h.thirdErrorReport({
                error: t,
                source: e || "",
                triggerErrorCallback: !l,
              }),
            l)
          )
            throw (n.pop(), t);
        }
        return n.pop(), u;
      }
      function f(e, t, r, n, o = !1) {
        return u(s(), e, t, r, n, o);
      }
      function p(e, t, r, n = !1) {
        return function (...o) {
          return u(e, t, r, this, o, n);
        };
      }
      function g(e, t, r = !1) {
        return function (...n) {
          return u(s(), e, t, this, n, r);
        };
      }
      function v(e, t) {
        var r = (t || "").match(/^\s*(?:at )?([\s\S]*)$/),
          n = r ? r[1] : "",
          o = e || function () {};
        return function (...e) {
          return u(s(), n, o, o, e, !1);
        };
      }
      d = t;
    })(),
    (() => {
      "use strict";
      var e = {
        d: (t, r) => {
          for (var n in r)
            e.o(r, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
        },
      };
      (e.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new n("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
        (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
      var r = {};
      (() => {
        e.d(r, { default: () => ae });
        var o = {
            APP: 0,
            WIDGET: 1,
            GAME: 2,
            GAME_SUBCONTEXT: 3,
            APP_SUBCONTEXT: 4,
          },
          s = {
            Speed: 13544,
            Error: 13582,
            Slow: 13968,
            Clipboard: 14367,
            NetworkAPI: 14480,
            NetworkAPI2: 26057,
            Display: 15496,
            WebviewRecycle: 15352,
            WebviewRestore: 15353,
            PluginDisplay: 15364,
            functionalPageOperation: 15804,
            RecycledAPI: 15649,
            GameReportKV: 15677,
            RecycleView: 15864,
            GameADFunnelModel: 15859,
            CustomComponent: 15948,
            VideoAction: 16137,
            SameLayerRender: 16360,
            MediaCompStatus: 16435,
            NavigateToMiniProgramAlert: 16432,
            LaunchDetailSpeed: 16514,
            CloudReport: 16588,
            DeprecatedAPI: 16624,
            Share: 16717,
            APIUse: 17619,
            SetDataPerf: 17176,
            UserLog: 17809,
            GameInteractiveData: 17836,
            GameRecorder: 17833,
            UserLogFail: 17975,
            WeAppInvoke: 18042,
            RenderCache: 18052,
            RenderStages: 18321,
            ShareCardClick: 18352,
            PerfReport: 18748,
            GameServerInvite: 18768,
            NpmExtendedLib: 18874,
            FirstInteraction: 19136,
            GameComponent: 19283,
            GameWhatsNew: 19335,
            TradeService: 19286,
            LazyCodeLoading: 20030,
            MidasFriendPayment: 20285,
            Handoff: 20888,
            ShareToWeRun: 21272,
            WeAppOperateWXData: 21359,
            WXGameWASMLaunchClose: 21494,
            WXGameWASMLaunchException: 21493,
            WXGameWASMLaunchTime: 21492,
            ExptHit: 21627,
            WeAppInvoke2: 21688,
            GameLifeMiniGameCardAction: 21898,
            ShareImageMenu: 22050,
            WeAppToChannels: 22082,
            RequestPaymentCheckTicket: 22273,
            WeAppNavBan: 22762,
            GameAdsSkipCard: 20267,
            MiniGameOpenDataMonitor: 23536,
            BLEConnection: 23886,
            WeAppRequestError: 24247,
            ClickWechatAppPreviewPage: 24298,
            MiniprogramOnWeakNetwork: 24499,
            MiniprogramOnUserCaptureScreen: 26252,
            MiniprogramDoEvilIdentification: 26447,
            WeAppRequestErrnoInfo: 24321,
            PublishWechatState: 24488,
            OpenEmbeddedMiniProgramResult: 24542,
            RequestPaymentRiskConfirm: 24544,
            InitRenderDone: 24643,
            SdkInnerApiInvoke: 24927,
            WeAppSensitiveRequest: 25214,
            OpenUrl: 25265,
            WeAppInteractionApiCall: 25394,
            Route: 25520,
            detachFromNestWebviewPage: 25651,
            WeAppInteractiveApiError: 25972,
            WeAppCoreWebVitals: 26147,
            WxappNicknameAvatarAutofill: 26249,
            WeFreeHttpDns: 26411,
            LaunchApplicationInfo: 26472,
            WxappChannelVideo: 26614,
            WeAppSDKSubpackageInject: 27065,
          },
          l = {
            webview2AppService: 1,
            appService2Webview: 2,
            funcReady: 3,
            firstGetData: 4,
            firstRenderTime: 5,
            reRenderTime: 6,
            forceUpdateRenderTime: 7,
            appRoute2newPage: 8,
            newPage2pageReady: 9,
            thirdScriptRunTime: 10,
            pageframe: 11,
            WAWebview: 12,
            WAWidget: 13,
            widgetCanvasReady: 14,
            widgetFirstDataPush: 15,
          },
          u = { apiCallback: 1, pageInvoke: 2, widgetInvoke: 3 },
          f = {
            appServiceSDKScriptError: 1,
            webviewSDKScriptError: 2,
            jsEnginScriptError: 3,
            thirdScriptError: 4,
            webviewScriptError: 5,
            exparserScriptError: 6,
            widgetEnginScriptError: 7,
            widgetThirdScriptError: 8,
            gameSDKScriptError: 10,
            gameSubContextSDKScriptError: 12,
            gameThirdScriptError: 13,
            gameSubContextThirdScriptError: 14,
            appSubContextThirdScriptError: 15,
            appSubContextSDKScriptError: 16,
          },
          p = {
            [o.APP]: "thirdScriptError",
            [o.APP_SUBCONTEXT]: "appSubContextThirdScriptError",
            [o.WIDGET]: "widgetThirdScriptError",
            [o.GAME]: "gameThirdScriptError",
            [o.GAME_SUBCONTEXT]: "gameSubContextThirdScriptError",
          };
        var h = {
            offset: 0,
            now: function () {
              if (0 === this.offset) throw Error("offset not ready");
              return Date.now() - this.offset;
            },
          },
          g = 0;
        function v() {
          var e = 0;
          return {
            get() {
              if (e > 0) return e;
              if (0 === g) throw Error("initTime not ready");
              return (e = g);
            },
            since() {
              return Date.now() - this.get();
            },
            set(t) {
              e = t;
            },
            reset() {
              e = Date.now();
            },
          };
        }
        void 0 !== a
          ? a.onLoad(() => {
              (h.offset = Date.now()), (g = Date.now());
            })
          : ((h.offset = Date.now()), (g = Date.now()));
        class y {
          constructor(e, t, r, n) {
            (this.BATCH_KEYVALUE_INTERVAL = e),
              (this.REPORT_DECREASE_RATE = t),
              (this.PERIOD_TIME = n),
              (this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE = r),
              (this.periodStartTime = v()),
              (this.currentPeriodSurplusReportCount =
                this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE),
              (this.currentMiniPeriodReportCount = 0),
              (this.currentPeriodReportQueue = []),
              (this._currentMiniPeriodFlag = 1),
              (this._lastReportTime = v()),
              (this._periods = parseInt(
                this.PERIOD_TIME / this.BATCH_KEYVALUE_INTERVAL,
                10
              ));
          }
          get _currentMiniPeriod() {
            var e = this._evaluateCurrentMiniPeriodBatch();
            return this._currentMiniPeriodFlag !== e
              ? ((this._currentMiniPeriodFlag = e),
                (this.currentPeriodSurplusReportCount -=
                  this.currentMiniPeriodReportCount),
                (this.currentMiniPeriodReportCount = 0),
                this._currentMiniPeriod)
              : e;
          }
          _evaluateCurrentMiniPeriodBatch() {
            for (
              var e = this.periodStartTime.since(), t = 1;
              t <= this._periods;
              t++
            )
              if (e < this.BATCH_KEYVALUE_INTERVAL * t) return t;
            return this._periods;
          }
          get _currentMiniPeriodMaxReportCount() {
            return this.periodStartTime.since() > this.PERIOD_TIME
              ? (this.periodStartTime.reset(),
                (this.currentPeriodSurplusReportCount =
                  this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE),
                this._currentMiniPeriodMaxReportCount)
              : this._currentMiniPeriod === this._periods
              ? this.currentPeriodSurplusReportCount
              : parseInt(
                  this.currentPeriodSurplusReportCount *
                    this.REPORT_DECREASE_RATE,
                  10
                );
          }
          pushReportQueue(e, t = !1) {
            this.currentMiniPeriodReportCount >=
            this._currentMiniPeriodMaxReportCount
              ? t &&
                (this.currentPeriodReportQueue.unshift(e),
                this.currentPeriodReportQueue.pop())
              : (this.currentPeriodReportQueue.push(e),
                this.currentMiniPeriodReportCount++);
          }
          attemptReportAndGetReportMsgs(e = !1) {
            var t = Date.now();
            if (
              t - this._lastReportTime.get() > this.BATCH_KEYVALUE_INTERVAL ||
              e
            ) {
              if (!this.currentPeriodReportQueue.length) return [];
              var r = this.currentPeriodReportQueue.splice(
                0,
                this.currentPeriodReportQueue.length
              );
              return this._lastReportTime.set(t), r;
            }
            return [];
          }
          isLimit() {
            return (
              this.currentMiniPeriodReportCount >=
              this._currentMiniPeriodMaxReportCount
            );
          }
        }
        class m {
          constructor(e, t, r, n) {
            (this.BATCH_KEYVALUE_INTERVAL = t),
              (this.PERIOD_TIME = n),
              (this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE = r),
              (this.keyStr = e),
              (this._lastReportTime = v()),
              (this._periodStartTime = v()),
              (this._periodReportCountMP = {}),
              (this.cacheMP = {});
          }
          pushReportQueue(e, t = !1) {
            var r = e[this.keyStr];
            this.cacheMP[r] || (this.cacheMP[r] = []),
              this._periodReportCountMP[r] ||
                (this._periodReportCountMP[r] = 0),
              this._periodReportCountMP[r] >
              this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE
                ? t && (this.cacheMP[r].unshift(e), this.cacheMP[r].pop())
                : (this._periodReportCountMP[r]++, this.cacheMP[r].push(e));
          }
          isLimit(e) {
            return (
              this._periodReportCountMP[e] >
              this.NATIVE_LIMIT_REPORT_KEY_VALUE_MAX_COUNT_ON_MINUTE
            );
          }
          attemptReportAndGetReportMsgs(e) {
            var t = Date.now();
            if (
              t - this._lastReportTime.get() > this.BATCH_KEYVALUE_INTERVAL ||
              e
            ) {
              var r = Array.prototype.concat.call(
                [],
                ...Object.values(this.cacheMP)
              );
              return (
                Object.keys(this.cacheMP).forEach((e) => {
                  this.cacheMP[e].length = 0;
                }),
                this._lastReportTime.set(t),
                t - this._periodStartTime.get() > this.PERIOD_TIME &&
                  (this._periodStartTime.set(t),
                  (this._periodReportCountMP = {}),
                  (this.cacheMP = {})),
                r
              );
            }
            return [];
          }
        }
        class _ {
          constructor(e, t, r, n) {
            (this.reportTime = v()),
              (this.continueDecreaseReportLimitStrategys = {}),
              (this.reportLimitStrategy = new m(e, t, r, n)),
              (this.BATCH_KEYVALUE_INTERVAL = t),
              (this.keyStr = e);
          }
          shouldReport() {
            return this.reportTime.since() >= this.BATCH_KEYVALUE_INTERVAL;
          }
          setContinueDecreaseReportLimitStrategyKey(e, t, r, n, o) {
            this.continueDecreaseReportLimitStrategys[e] = new y(t, r, n, o);
          }
          pushReportQueue(e, t) {
            var r = e[this.keyStr];
            r in this.continueDecreaseReportLimitStrategys
              ? this.continueDecreaseReportLimitStrategys[r].pushReportQueue(
                  e,
                  t
                )
              : this.reportLimitStrategy.pushReportQueue(e, t);
          }
          attemptReportAndGetReportMsgs(e) {
            if (e || this.shouldReport()) {
              var t = this.reportLimitStrategy.attemptReportAndGetReportMsgs(e),
                r = Object.values(
                  this.continueDecreaseReportLimitStrategys
                ).reduce(
                  (e, t) => (e.push(...t.attemptReportAndGetReportMsgs()), e),
                  []
                );
              return this.reportTime.reset(), t.concat(r);
            }
            return [];
          }
          isLimit(e) {
            return e in this.continueDecreaseReportLimitStrategys
              ? this.continueDecreaseReportLimitStrategys[e].isLimit()
              : this.reportLimitStrategy.isLimit(e);
          }
        }
        var b = (() => (
            i.onReady(() => {
              b !== i && void 0 !== b && Object.assign(b, i);
            }),
            i
          ))(),
          w = b,
          k = (() => w.platform)(),
          S = (() => "devtools" === k)(),
          T = (() => "ios" === k)();
        var A = (() => Object.prototype.toString)(),
          x = n.prototype.call.bind(A);
        function P(e) {
          return x(e).slice(8, -1);
        }
        var I = 6e4,
          E = 15e3;
        function C(...e) {
          c.invoke(...e);
        }
        var O = {
            login: 1,
            login_cancel: 2,
            login_fail: 3,
            request_fail: 4,
            connectSocket_fail: 5,
            closeSocket_fail: 6,
            sendSocketMessage_fail: 7,
            uploadFile_fail: 8,
            downloadFile_fail: 9,
            redirectTo_fail: 10,
            navigateTo_fail: 11,
            navigateBack_fail: 12,
            appServiceSDKScriptError: 13,
            webviewSDKScriptError: 14,
            jsEnginScriptError: 15,
            thirdScriptError: 16,
            webviewScriptError: 17,
            exparserScriptError: 18,
            widgetEnginScriptError: 113,
            widgetThirdScriptError: 114,
            gameSDKScriptError: 135,
            gameSubContextSDKScriptError: 136,
            gameThirdScriptError: 137,
            gameSubContextThirdScriptError: 138,
            appSubContextThirdScriptError: 191,
            appSubContextSDKScriptError: 192,
            startRecord: 19,
            startRecord_fail: 20,
            getLocation: 21,
            getLocation_fail: 22,
            chooseLocation: 23,
            chooseLocation_fail: 24,
            openAddress: 25,
            openAddress_fail: 26,
            openLocation: 27,
            openLocation_fail: 28,
            makePhoneCall: 29,
            makePhoneCall_fail: 30,
            operateWXData: 31,
            operateWXData_fail: 32,
            checkLogin: 33,
            checkLogin_fail: 34,
            refreshSession: 35,
            refreshSession_fail: 36,
            chooseVideo: 37,
            chooseVideo_fail: 38,
            chooseImage: 39,
            chooseImage_fail: 40,
            verifyPaymentPassword: 41,
            verifyPaymentPassword_fail: 42,
            requestPayment: 43,
            requestPayment_fail: 44,
            bindPaymentCard: 45,
            bindPaymentCard_fail: 46,
            requestPaymentToBank: 47,
            requestPaymentToBank_fail: 48,
            openDocument: 49,
            openDocument_fail: 50,
            chooseContact: 51,
            chooseContact_fail: 52,
            operateMusicPlayer: 53,
            operateMusicPlayer_fail: 54,
            getMusicPlayerState_fail: 55,
            playVoice_fail: 56,
            setNavigationBarTitle_fail: 57,
            switchTab_fail: 58,
            getImageInfo_fail: 59,
            enableCompass_fail: 60,
            enableAccelerometer_fail: 61,
            getStorage_fail: 62,
            setStorage_fail: 63,
            clearStorage_fail: 64,
            removeStorage_fail: 65,
            getStorageInfo_fail: 66,
            getStorageSync_fail: 67,
            setStorageSync_fail: 68,
            addCard_fail: 69,
            openCard_fail: 70,
            openSetting_fail: 71,
            reLaunch_fail: 72,
            getClipboardData_fail: 73,
            setClipboardData_fail: 74,
            showShareMenu_fail: 75,
            hideShareMenu_fail: 76,
            showToast_fail: 77,
            hideToast_fail: 78,
            openBluetoothAdapter_fail: 79,
            closeBluetoothAdapter_fail: 80,
            getBluetoothAdapterState_fail: 81,
            startBluetoothDevicesDiscovery_fail: 82,
            stopBluetoothDevicesDiscovery_fail: 83,
            getBluetoothDevices_fail: 84,
            getConnectedBluetoothDevices_fail: 85,
            createBLEConnection_fail: 86,
            closeBLEConnection_fail: 87,
            getBLEDeviceServices_fail: 88,
            getBLEDeviceCharacteristics_fail: 89,
            notifyBLECharacteristicValueChanged_fail: 90,
            readBLECharacteristicValue_fail: 91,
            checkIsSupportFacialRecognition_fail: 92,
            startFacialRecognitionVerify_fail: 93,
            startFacialRecognitionVerifyAndUploadVideo_fail: 94,
            startBeaconDiscovery_fail: 95,
            stopBeaconDiscovery_fail: 96,
            getBeacons_fail: 97,
            getSetting_fail: 98,
            setScreenBrightness_fail: 99,
            getScreenBrightness_fail: 100,
            vibrateShort_fail: 101,
            vibrateLong_fail: 102,
            shareAppMessage: 103,
            shareAppMessage_fail: 104,
            shareAppMessage_cancel: 105,
            shareAppMessageDirectly: 106,
            shareAppMessageDirectly_fail: 107,
            shareAppMessageDirectly_cancel: 108,
            sendBizRedPacket_fail: 109,
            addPhoneContact_fail: 110,
            saveImageToPhotosAlbum_fail: 111,
            saveVideoToPhotosAlbum_fail: 112,
            setTopBarText_fail: 115,
            setNavigationBarRightButton_fail: 116,
            setEnableDebug_fail: 117,
            captureScreen_fail: 118,
            setKeepScreenOn_fail: 119,
            createRequestTask: 120,
            createRequestTask_fail: 121,
            createDownloadTask: 122,
            createDownloadTask_fail: 123,
            createUploadTask: 124,
            createUploadTask_fail: 125,
            checkIsSupportSoterAuthentication_fail: 126,
            startSoterAuthentication_fail: 127,
            navigateToMiniProgram_fail: 128,
            navigateBackMiniProgram_fail: 129,
            openDeliveryList_fail: 130,
            setNavigationBarColor_fail: 131,
            setStatusBarStyle_fail: 132,
            getFileInfo_fail: 133,
            global_objs_readonly: 134,
            writeBLECharacteristicValue_fail: 206,
            adData_error: 140,
            adExposureReport_fail: 141,
            adClickReport_fail: 142,
            adNavigateToMiniProgram_fail: 143,
            adOpenUrl_fail: 144,
            initGameIsolatedContext: 145,
            initGameIsolatedContext_fail: 146,
            initGameOpenDataContext: 147,
            initGameOpenDataContext_fail: 148,
            initAppIsolatedContext: 149,
            initAppIsolatedContext_fail: 150,
            adFollowReport_fail: 151,
            adAddContact_fail: 152,
            adDownloadAppInternal_fail: 153,
            adGetInstallState_fail: 154,
            adQueryDownloadTask_fail: 155,
            adAddDownloadTaskStraight_fail: 156,
            adPauseDownloadTask_fail: 157,
            adResumeDownloadTask_fail: 158,
            adInstallDownloadTask_fail: 159,
            pluginDisplayInPage: 160,
            functionalPageSuccess: 161,
            functionalPageFail: 162,
            functionalPageReject: 163,
            insertInputToWebLayer_fail: 166,
            insertVideoToWebLayer_fail: 167,
            insertInputToWebLayer_succ: 168,
            insertVideoToWebLayer_succ: 169,
            insertMapToWebLayer_fail: 171,
            insertMapToWebLayer_succ: 172,
            insertLiveToWebLayer_fail: 178,
            insertLiveToWebLayer_succ: 179,
            insertCanvas2dToWebLayer_fail: 180,
            insertCanvas2dToWebLayer_succ: 181,
            insertWebGLToWebLayer_fail: 187,
            insertWebGLToWebLayer_succ: 186,
            insertVideo2ToWebLayer_fail: 182,
            insertVideo2ToWebLayer_succ: 183,
            insertCameraToWebLayer_fail: 184,
            insertCameraToWebLayer_succ: 185,
            insertTextareaToWebLayer_fail: 189,
            insertTextareaToWebLayer_succ: 188,
            showImageOperateSheet_fail: 190,
            audioInstancesCountReach1024: 170,
            bindUDP: 173,
            sendUDPMessage: 174,
            receiveUDPMessage: 175,
            UDPError: 176,
            sendUDPMessageToInvalidAddress: 177,
            clientLibVersionNotMatch: 205,
            subContextLibVersionNotMatch: 207,
            oaAddContact_fail: 201,
            oaReportBehavior_fail: 202,
            oaGetContactData_fail: 203,
            demoEnterHomePage: 210,
            demoConfigRepeat: 211,
            getUserInteractiveStorage: 212,
            modifyFriendInteractiveStorage: 213,
            modifyFriendInteractiveStorageShowModal: 214,
            modifyFriendInteractiveStorageConfirm: 215,
            modifyFriendInteractiveStorageCancel: 216,
            disableLivePlayer: 220,
            disableLivePusher: 221,
            disableVideo: 222,
            asyncApiCost: 226,
            asyncApiCount: 227,
            requestSubscribeMessageWithNative: 230,
            requestSubscribeMessageWithNativeSuccess: 231,
            requestSubscribeMessageWithNativeFail: 232,
            pageNotFound: 234,
            tradeServiceGetPermissionBytesSuccess: 235,
            tradeServiceGetPermissionBytesFail: 236,
            tradeServiceCanUse: 237,
            tradeServiceCanNotUse: 238,
            tradeServiceTapCard: 239,
            midasLaunchFeatureFail: 240,
            createNormalWorker: 241,
            createWKWorker: 242,
            onWorkerWebViewTerminate: 244,
            loadGameIndependentSubPackageFail: 243,
            requestPaymentCheckTicketCount: 245,
            requestPaymentCheckTicketFail: 246,
            requestPaymentCheckTicketTimeout: 247,
            useLaunchExptInfo: 249,
            useOriginLaunchExptInfo: 250,
            useContactExptInfo: 251,
            reportEventInvoke: 252,
            readdirTraverseRootDir: 253,
            useWxProtobuf: 254,
            useWxLanDebug: 255,
          },
          M = new _("id", E, 100, I);
        function j(e) {
          w.onReady(() => {
            C("reportIDKey", { dataArray: e });
          });
        }
        function R(e, t, r, n = !1) {
          if (
            Number.isInteger(e) &&
            !(!Number.isInteger(t) || t < 0 || t > 255)
          ) {
            M.pushReportQueue({ id: e, key: t, value: r });
            var o = M.attemptReportAndGetReportMsgs(n);
            o.length && j(o);
          }
        }
        function L() {
          var e = M.attemptReportAndGetReportMsgs(!0);
          e.length && j(e);
        }
        var D = [],
          N = 0,
          W = 0,
          F = 0,
          $ = {},
          B = {},
          U = {},
          G = new _("key", E, 100, I);
        function Z(e) {
          w.onReady(() => {
            C("reportKeyValue", { dataArray: e });
          });
        }
        function q() {
          w.onReady(() => {
            !D || D.length <= 0 || (C("systemLog", { dataArray: D }), (D = []));
          });
        }
        function H(e) {
          var t = w && w.appContactInfo && w.appContactInfo.call_plugin_info;
          if (!t || !Array.isArray(t)) return 0;
          var r = t.find((t) => t.plugin_id === e);
          return r && void 0 !== r.inner_version ? r.inner_version : 0;
        }
        G.setContinueDecreaseReportLimitStrategyKey(18042, E, 0.5, 100, I);
        var V = () => {},
          K = () => {},
          Y = () => {},
          J = () => {},
          X = "",
          z = {},
          Q = -1,
          ee = 0,
          te = o.APP,
          re = "";
        "function" == typeof w.onReady &&
          w.onReady(() => {
            void 0 !== w.appType && (Q = w.appType),
              "object" == typeof w.appLaunchInfo &&
                (ee = w.appLaunchInfo.scene);
            var e = w.networkType;
            e
              ? (re = e)
              : c.invoke("getNetworkType", {}, (e) => {
                  e && e.networkType && (re = e.networkType);
                }),
              "function" == typeof c.addEventListener &&
                c.addEventListener("onNetworkStatusChange", (e) => {
                  re = e.networkType;
                });
          });
        var ne = {
            surroundThirdByTryCatch: d.surroundThirdByTryCatch,
            slowReport: ({ key: e, cost: t, extend: r, force: n }) => {
              var o = u[e],
                i = Date.now();
              if (
                o &&
                (n || !(i - F < 500)) &&
                !(
                  Object.keys(U).length > 50 ||
                  (U[r] || (U[r] = 0), U[r]++, U[r] > 3)
                )
              ) {
                F = i;
                var a = `${t},${encodeURIComponent(r)},${o},${ne.getAppType()}`;
                ne.reportKeyValue({ key: "Slow", value: a });
              }
            },
            isLimitReport: (e) => G.isLimit(e),
            speedReport: ({ key: e, data: t, timeMark: r, force: n }) => {
              var o = l[e],
                i = Date.now(),
                a = 0,
                s = r.nativeTime;
              if (
                o &&
                (n || !(i - ($[o] || 0) < 500)) &&
                r.startTime &&
                r.endTime &&
                ((1 !== o && 2 !== o) || s)
              ) {
                t && (a = JSON.stringify(t).length), ($[o] = i);
                var c = `${o},${r.startTime},${s},${s},${
                  r.endTime
                },${a},${ne.getAppType()}`;
                ne.reportKeyValue({ key: "Speed", value: c });
              }
            },
            reportQualityData(e, t, r, n = []) {
              var o = r - t;
              o < 0 && (o = 0),
                C("reportKeyValue", {
                  version: 2,
                  dataArray: [
                    { key: s[e], value: [o, ee, t, r, ...n].join(",") },
                  ],
                });
            },
            reportQualityData2(e, t = []) {
              C("reportKeyValue", {
                version: 2,
                dataArray: [{ key: s[e], value: t.join(",") }],
              });
            },
            flushReportKeyValueList: () => {
              var e = G.attemptReportAndGetReportMsgs(!0);
              e.length && Z(e);
            },
            reportKeyValue: ({
              key: e,
              value: t,
              immediately: r = !1,
              number: n = !1,
            }) => {
              if (n || s[e]) {
                G.pushReportQueue({ key: n ? e : s[e], value: t }, r);
                var o = G.attemptReportAndGetReportMsgs(r);
                o.length && Z(o);
              }
            },
            flushReportIDKeyList: L,
            reportIDKey: function ({
              id: e,
              key: t,
              value: r = 1,
              force: n = !1,
            }) {
              O[t] && R(e || (T ? 356 : 358), O[t], r, n);
            },
            reportIDKeyDirectly: function ({
              id: e,
              key: t,
              immediately: r = !1,
            }) {
              void 0 !== t && 356 !== e && 358 !== e && R(e, (t = +t), 1, r);
            },
            assertWithIDKey: function (e, t, r = 1) {
              e || R(1872, t, r, !0);
            },
            reportFrameworkIDKey: function (e, t = 1) {
              R(1874, e, t);
            },
            thirdErrorReport: ({
              key: e = te,
              error: t,
              triggerErrorCallback: r = !0,
              isUnhandledRejection: n = !1,
              promise: o,
              source: i = "",
            }) => {
              ne.errorReport({
                key: p[e],
                error: t,
                triggerErrorCallback: r,
                isThirdScriptError: !0,
                isUnhandledRejection: n,
                promise: o,
                source: i,
              });
            },
            errorReport: ({
              key: e,
              error: r,
              isThirdScriptError: n = !1,
              triggerErrorCallback: i = !0,
              isUnhandledRejection: a = !1,
              promise: s,
              source: l = "",
            }) => {
              if (f[e] && r) {
                var u, p;
                "function" == typeof __wxSourceMapRetrace__ &&
                  (r = __wxSourceMapRetrace__(r)),
                  "object" == typeof r && (r.message || r.stack)
                    ? ((u = r.message), (p = r.stack))
                    : ((u = (function (e) {
                        try {
                          return JSON.stringify(e);
                        } catch (e) {
                          return e.message, "";
                        }
                      })(r)),
                      (p = P(r)));
                var d = n ? "MiniProgramError" : `SystemError (${e})`,
                  h = u,
                  g = "";
                r.name &&
                  0 !== (p || "").indexOf(r.name) &&
                  (g = "\n" + r.name + ": " + h);
                var v = `${d}\n${h}${g}\n${p}`;
                if (S) {
                  var y = new Error(`${d}\n${h}`);
                  "object" == typeof r &&
                    void 0 !== r.name &&
                    Object.defineProperty(y, "name", { value: r.name }),
                    "object" == typeof r &&
                      void 0 !== r.stack &&
                      Object.defineProperty(y, "stack", { value: r.stack }),
                    console.error(y);
                } else
                  a ? console.error("(in promise) " + v) : console.error(v);
                if (
                  !(
                    v.indexOf("subContext.js") >= 0 ||
                    ("undefined" != typeof window &&
                    void 0 !== window.__webviewId__
                      ? (function (...e) {
                          c.publish(...e);
                        })("WEBVIEW_ERROR_MSG", {
                          data: { msg: v },
                          options: { timestamp: Date.now() },
                        })
                      : i &&
                        (ne.triggerErrorMessage(v, a, r, s),
                        n && ne.triggerThirdErrorMessage(v, a, r, s)),
                    Object.keys(B).length > 50 || (a && "Error" !== P(r)))
                  )
                ) {
                  var m = "",
                    _ = "";
                  (te !== o.APP && te !== o.GAME) ||
                    ((m = X),
                    (_ = (function (e) {
                      var t = "";
                      return (
                        Object.keys(e).forEach((r, n) => {
                          0 !== n && (t += "&");
                          try {
                            t += `${encodeURIComponent(r)}=${encodeURIComponent(
                              e[r]
                            )}`;
                          } catch (e) {}
                        }),
                        t
                      );
                    })(z)));
                  var b = 0;
                  if (1004 === ne.getAppType())
                    try {
                      re = __appServiceSDK__
                        .getGameRelatedContextsExports()
                        .game._getCurrentNetworkType();
                      var w = r.stackInfoArr;
                      if ((delete r.stackInfoArr, w)) {
                        var k = w[0];
                        if (
                          k &&
                          "usr" === k.type &&
                          "__plugin__" === k.package &&
                          "string" == typeof k.file
                        ) {
                          var T = k.file.split("/");
                          b = H((l = T && T[0]));
                        }
                      }
                    } catch (y) {}
                  else b = l.match(/wx[0-9a-f]{16}/) ? H(l) : 0;
                  var A = [
                    f[e],
                    r.name,
                    ...[
                      h,
                      p,
                      (void 0 !== t && t.version) || "",
                      ne.getAppType(),
                      m,
                      _,
                      (void 0 !== t && t.updateTime) || "",
                      "",
                      a ? 1 : 0,
                      l,
                      b,
                      re,
                    ].map((e) => {
                      var t;
                      try {
                        t = encodeURIComponent(e);
                      } catch (r) {
                        t = e;
                      }
                      return t;
                    }),
                  ].join(",");
                  if (
                    (B[A] || (B[A] = 0), B[A]++, !((n && B[A] > 3) || B[A] > 3))
                  ) {
                    ne.reportIDKey({ key: e }),
                      ne.reportKeyValue({ key: "Error", value: A });
                    var x = G.attemptReportAndGetReportMsgs(!0);
                    x.length && Z(x), L(), q();
                  }
                }
              }
            },
            log: (e, t) => {
              e &&
                "string" == typeof e &&
                ((!t && Date.now() - N < 50) ||
                  ((N = Date.now()), D.push(e + ""), D.length >= 50 && q()));
            },
            submit: () => {
              Date.now() - W < 50 ||
                ((W = Date.now()),
                L(),
                Z(G.attemptReportAndGetReportMsgs(!0)),
                q());
            },
            registerErrorListener: (e) => {
              "function" == typeof e && (V = e);
            },
            registerThirdErrorListener: (e) => {
              "function" == typeof e && (K = e);
            },
            registerUnhandledRejectionListener: (e) => {
              "function" == typeof e && (Y = e);
            },
            registerThirdUnhandledRejectionListener: (e) => {
              "function" == typeof e && (J = e);
            },
            triggerErrorMessage: (e, t = !1, r, n) => {
              setTimeout(() => {
                try {
                  t ? Y(r, n) : V(e);
                } catch (e) {
                  console.error(e.message, "at onError callback function");
                }
              }, 0);
            },
            triggerThirdErrorMessage: (e, t = !1, r, n) => {
              setTimeout(() => {
                try {
                  t ? J(r, n) : K(e);
                } catch (e) {
                  console.error(e.message, "at onError callback function");
                }
              }, 0);
            },
            setAsWidget: () => {
              te = o.WIDGET;
            },
            setAsGame: () => {
              te = o.GAME;
            },
            setAsGameSubContext: () => {
              te = o.GAME_SUBCONTEXT;
            },
            getAppType: () => (-1 === Q ? 0 : Q + 1e3),
          },
          oe = {};
        function ie(e) {
          Object.defineProperty(oe, e, {
            get() {
              return (
                (t = ne[e]),
                function (...e) {
                  try {
                    return t.apply(t, e);
                  } catch (e) {
                    return void console.error(
                      "reporter error:" + e.message,
                      e.stack
                    );
                  }
                }
              );
              var t;
            },
            configurable: !0,
            enumerable: !0,
          });
        }
        Object.keys(ne).forEach((e) => {
          ie(e);
        }),
          Object.defineProperty(oe, "__route__", {
            set(e) {
              X = e;
            },
          }),
          Object.defineProperty(oe, "__method__", { set() {} }),
          Object.defineProperty(oe, "__query__", {
            set(e) {
              z = e;
            },
          }),
          (oe.RunType = o),
          "undefined" != typeof window &&
            Object.defineProperty(window, "onbeforeunload", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                ne.submit();
              },
            });
        var ae = oe;
      })(),
        (h = r.default);
    })(),
    (() => {
      var e = {
          638: (e, t, r) => {
            "use strict";
            r.d(t, { Wkc: () => n, Z9j: () => o, tHd: () => i });
            var n = 1001,
              o = 600009,
              i = 600010;
          },
          102: (e, t, r) => {
            "use strict";
            r.d(t, { b: () => i });
            var n = r(632),
              o = r(78),
              i = (e = {}) => {
                if (
                  "[object Object]" === Object.prototype.toString.call(n.Z.expt)
                ) {
                  var t = n.Z.expt[e.experimentId];
                  if (void 0 !== t)
                    return void (
                      "function" == typeof e.success &&
                      e.success({ testConfig: t })
                    );
                }
                (0, o.IN)("getABTestConfig", e);
              };
          },
          281: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            var n = r(125),
              o = null,
              i = void 0,
              a = {
                lastRoute: "",
                lastOpenType: "",
                query: {},
                runningStatus: "active",
                navigatorLock: !1,
                openUrlLock: !1,
                openUrlExtBrowserLock: !1,
                possessingBackgroundAudioPlayer: !1,
                webviewEventCallback: null,
                hanged: !1,
                appStatus: 0,
                navigationBarTitleMap: {},
                currentNetworkType: "",
                get currentWebviewId() {
                  return i;
                },
                set currentWebviewId(e) {
                  (i = e), o && (o(null), (o = null));
                },
                currentWebviewIdPromise: new Promise((e) => {
                  o = e;
                }),
                getWebviewIds: () => n.hr.getGlobalWebviewIds(),
              };
          },
          777: (e, t, r) => {
            "use strict";
            r.d(t, {
              Em: () => a.Em,
              Nf: () => u,
              S0: () => c,
              iZ: () => i.i,
              pD: () => l,
            });
            var n = r(632),
              o = r(125),
              i = r(912),
              a = (r(56), r(6)),
              s = /^[-+a-zA-Z0-9]+:\/\//;
            function c(e) {
              var t = e.match(s);
              if (!t) return e;
              var r = t[0];
              if ("plugin://" === r) {
                var a = r.length,
                  c = e.indexOf("/", a);
                if (c >= 0) {
                  var l = e.slice(a, c),
                    u =
                      n.Z.plugins && n.Z.plugins[l]
                        ? n.Z.plugins[l].provider
                        : l;
                  e = e.slice(0, a) + u + e.slice(c);
                }
                var f = e.indexOf("?");
                f < 0 && (f = e.length);
                var p = e.slice(0, f),
                  d = o.Ve.Component._list[p];
                if (!d) throw new i.l(`Page "${p}" is not found`);
                e = d.is + e.slice(f);
              } else if ("plugin-private://" === r) {
                var h = e.indexOf("?");
                h < 0 && (h = e.length);
                var g = e.slice(0, h);
                e = "/" + o.hr.convertComponentAliasToRoute(g) + e.slice(h);
              } else {
                if ("wx://" !== r) throw new i.l(`Unknown URL protocol "${r}"`);
                e = "/__wx__/" + e.slice(5);
              }
              return e;
            }
            function l(e) {
              var t = e.match(s);
              return t ? t[0] : null;
            }
            function u(e) {
              return Object.keys(e).reduce(
                (t, r) => (
                  "string" == typeof e[r]
                    ? (t[r] = e[r])
                    : "number" == typeof e[r]
                    ? (t[r] = e[r] + "")
                    : (t[r] = Object.prototype.toString.apply(e[r])),
                  t
                ),
                {}
              );
            }
          },
          125: (e, t, r) => {
            "use strict";
            r.d(t, { Ve: () => o, hr: () => n });
            var n,
              o,
              i = new (r(211).Z)();
            i.on.bind(i, "__virtualDOM__"), i.on.bind(i, "__webnode__");
          },
          481: (e, t, r) => {
            "use strict";
            r.d(t, { a: () => i });
            var n = null,
              o = new Proxy(
                {},
                {
                  get(e, t, r) {
                    if (!n) throw new Error("NativeGlobal not ready");
                    return Reflect.get(n, t, r);
                  },
                  set(e, t, r, o) {
                    if (!n) throw new Error("NativeGlobal not ready");
                    return Reflect.set(n, t, r, o);
                  },
                }
              );
            function i(e) {
              a.onLoad(() => {
                e(o);
              });
            }
            a.onLoad(() => {
              n = "undefined" != typeof NativeGlobal ? NativeGlobal : {};
            }),
              (t.Z = o);
          },
          33: (e, t, r) => {
            "use strict";
            r.d(t, { En: () => d, IF: () => v, Y2: () => g });
            var n,
              o = r(6),
              i = r(912),
              s = 0,
              c = 1,
              l = 2,
              u = new WeakMap(),
              f = new Map(),
              p = ArrayBuffer;
            function d(e) {
              a.onLoad(() => {
                n.new || e(n);
              });
            }
            a.onLoad(() => {
              (n =
                "undefined" == typeof WeixinSharedBuffer
                  ? {}
                  : WeixinSharedBuffer),
                "undefined" == typeof WeixinSharedBuffer &&
                  ("undefined" != typeof __global
                    ? (p = __global.SharedArrayBuffer)
                    : r.g.SharedArrayBuffer && (p = r.g.SharedArrayBuffer));
            });
            class h {
              constructor(e, t) {
                if (!(0, o.hj)(e) || e < 0)
                  throw new i.i(`Invalid array buffer length ${e}`);
                if ((0, o.hj)(t)) {
                  var r;
                  try {
                    r = n.get(t);
                  } catch (e) {
                    throw new Error(
                      `WeixinSharedBuffer.get${t} fail: ${e.message}`
                    );
                  }
                  Object.defineProperty(this, "buffer", {
                    value: r,
                    writable: !1,
                    enumerable: !0,
                  }),
                    Object.defineProperty(this, "_sabId", {
                      value: t,
                      enumerable: !0,
                      writable: !1,
                    });
                } else {
                  Object.defineProperty(this, "buffer", {
                    value: new p(e),
                    writable: !1,
                    enumerable: !0,
                  });
                  var a = n.new(this.buffer);
                  Object.defineProperty(this, "_sabId", {
                    value: a,
                    enumerable: !0,
                    writable: !1,
                  });
                }
                var c = {
                  writeStatus: s,
                  readStatus: s,
                  writeLockCallbacks: [],
                  readLockCallbacks: [],
                  writeLockId: void 0,
                  readLockId: void 0,
                  destroyed: !1,
                };
                u.set(this, c), f.set(this._sabId, this);
              }
              destroy() {
                var e = u.get(this);
                (e.writeLockCallbacks = []),
                  (e.readLockCallbacks = []),
                  f.delete(this._sabId),
                  (u.get(this).destroyed = !0),
                  this.unlock(),
                  n.destroy(this._sabId);
              }
              lock(e, t = !1) {
                var r = u.get(this),
                  {
                    destroyed: a,
                    writeStatus: s,
                    readStatus: f,
                    writeLockCallbacks: p,
                    readLockCallbacks: d,
                  } = r;
                if (a) throw new i.i("SharedArrayBuffer has been destroyed");
                if (!(0, o.mf)(e)) throw new i.i("callback must be a function");
                s !== l
                  ? (p.push(e),
                    s === c ||
                      ((r.writeStatus = c),
                      (r.writeLockId = n.Lock(this._sabId, () => {
                        p.forEach((e) => e()),
                          d.forEach((e) => e()),
                          (r.writeStatus = l),
                          (r.writeLockCallbacks = []),
                          (r.readLockCallbacks = []);
                      }))))
                  : e();
              }
              unlock() {
                var e = u.get(this),
                  {
                    writeLockId: t,
                    readLockId: r,
                    writeStatus: o,
                    readStatus: i,
                    destroyed: a,
                  } = e;
                a
                  ? console.warn("unlock: SharedArrayBuffer has been destroyed")
                  : ((o !== c && o !== l) ||
                      (n.Unlock(this._sabId, t),
                      (e.writeStatus = s),
                      (e.writeLockId = void 0),
                      (e.writeLockCallbacks = [])),
                    (i !== c && i !== l) ||
                      (n.Unlock(this._sabId, r),
                      (e.readStatus = s),
                      (e.readLockId = void 0),
                      (e.readLockCallbacks = [])));
              }
            }
            var g = (e) => new h(e),
              v = (e) => {
                return (0, o.Kn)(e)
                  ? (0, o.hj)(e._sabId)
                    ? ((t = e._sabId), f.has(t) ? f.get(t) : new h(0, t))
                    : Object.keys(e).reduce((t, r) => {
                        var n = e[r];
                        return (t[r] = v(n)), t;
                      }, {})
                  : (0, o.kJ)(e)
                  ? e.map(v)
                  : e;
                var t;
              };
          },
          632: (e, t) => {
            "use strict";
            var r = (() => (
              i.onReady(() => {
                r !== i && void 0 !== r && Object.assign(r, i);
              }),
              i
            ))();
            t.Z = r;
          },
          578: (e, t, r) => {
            "use strict";
            r.d(t, { J: () => c });
            var n = r(78),
              o = r(6),
              i = r(632),
              a = r(556),
              s = {};
            i.Z.onReady(() => {
              var e = Object.keys(a.Z).map((e) => a.Z[e]);
              (0, n.IN)("getPermissionBytes", {
                indexes: e,
                success(t) {
                  if (t.permissionBytes)
                    for (var r = 0; r < t.permissionBytes.length; r++) {
                      var n = e[r];
                      s[n] = 1 === t.permissionBytes[r];
                    }
                },
                fail(e) {},
              });
            });
            var c = (e) => {
              var t = a.Z[e];
              if ("number" != typeof t) return !1;
              if (!(0, o.o8)(s[t])) return s[t];
              var r = !1;
              return (
                (0, n.IN)("getPermissionBytes", {
                  indexes: [t],
                  success(e) {
                    e.permissionBytes &&
                      ((r = 1 === e.permissionBytes[0]), (s[t] = r));
                  },
                }),
                r
              );
            };
          },
          8: (e, t, r) => {
            "use strict";
            r.d(t, {
              Ae: () => u,
              DD: () => f,
              KU: () => h,
              LU: () => g,
              aI: () => d,
              cj: () => s,
              gm: () => i,
              iw: () => o,
              jP: () => p,
              wZ: () => a,
            });
            var n = r(632),
              o = (() => n.Z.platform)(),
              i = (() => "devtools" === o)(),
              a = (() => "android" === o)(),
              s = (() => "ios" === o)(),
              c = (() => "windows" === o)(),
              l = (() => "mac" === o)(),
              u = (() => "mina" === o)(),
              f = (() => c || l)();
            var p = (() =>
              "object" == typeof window && window && window.__wkrenderer_h5)();
            function d() {
              return !1;
            }
            var h = (() => !1)();
            function g() {
              return [0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13].includes(
                n.Z.appType
              );
            }
          },
          912: (e, t, r) => {
            "use strict";
            r.d(t, { i: () => o, l: () => n });
            class n extends Error {
              constructor(e) {
                super(`APP-SERVICE-SDK:${e}`),
                  (this.type = "AppServiceSdkKnownError");
              }
            }
            class o extends Error {
              constructor(...e) {
                super(...e), (this.type = "ThirdScriptError");
              }
            }
          },
          186: (e, t, r) => {
            "use strict";
            r.d(t, { s: () => s });
            var n = r(211),
              o = (() => new n.Z({ maxListeners: 20, newListener: !1 }))(),
              i = (() => new n.Z({ maxListeners: 30, newListener: !1 }))();
            var a = {};
            function s(e) {
              if (((e = e[0].toUpperCase() + e.slice(1)), !a[e])) {
                var t = new WeakMap();
                a[e] = {
                  getGlobalListeners: () => o.listeners(e),
                  getInternalListeners: () => i.listeners(e),
                  emit: (...t) => {
                    i.emit(e, ...t), o.emit(e, ...t);
                  },
                  emitGlobal: (...t) => {
                    o.emit(e, ...t);
                  },
                  emitInternal: (...t) => {
                    i.emit(e, ...t);
                  },
                  internalOnMethod: (t, r = {}) => {
                    "function" == typeof t &&
                      (r.prepend
                        ? r.once
                          ? i.prependOnceListener(e, t)
                          : i.prependListener(e, t)
                        : r.once
                        ? i.once(e, t)
                        : i.on(e, t));
                  },
                  internalOffMethod: (t) => {
                    "function" == typeof t && i.off(e, t);
                  },
                  onMethod: (r) => {
                    var n = (function (e, t) {
                      return "function" != typeof t
                        ? (console.error(
                            `on${e} should accept a function instead of ${typeof t}`
                          ),
                          null)
                        : d.surroundThirdByTryCatch(
                            t,
                            `at api on${e} callback function`
                          );
                    })(e, r);
                    if (n) {
                      if (t.has(r)) {
                        var i = t.get(r);
                        i.push(n), t.set(r, i);
                      } else t.set(r, [n]);
                      o.on(e, n);
                    }
                  },
                  offMethod: (r) => {
                    if (
                      (function (e, t) {
                        return (
                          !t ||
                          "function" == typeof t ||
                          (console.error(
                            `off${e} should accept a function instead of ${typeof t}`
                          ),
                          !1)
                        );
                      })(e, r)
                    )
                      if (r) {
                        if (t.has(r)) {
                          t.get(r).forEach((t) => o.off(e, t)), t.delete(r);
                        }
                      } else (t = new WeakMap()), o.removeAllListeners(e);
                  },
                };
              }
              return a[e];
            }
          },
          211: (e, t, r) => {
            "use strict";
            var o = Array.isArray
              ? Array.isArray
              : function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                };
            function i() {
              (this._events = {}), this._conf && a.call(this, this._conf);
            }
            function a(e) {
              e
                ? ((this._conf = e),
                  e.delimiter && (this.delimiter = e.delimiter),
                  (this._maxListeners =
                    void 0 !== e.maxListeners ? e.maxListeners : 20),
                  e.newListener && (this._newListener = e.newListener),
                  e.removeListener && (this._removeListener = e.removeListener))
                : (this._maxListeners = 20);
            }
            function s(e, t) {
              console.warn(
                `[Event] ${e} listeners of event ${t} have been added, possibly causing memory leak.`
              );
            }
            function c(e) {
              (this._events = {}),
                (this._newListener = !1),
                (this._removeListener = !1),
                a.call(this, e);
            }
            (c.prototype.delimiter = "."),
              (c.prototype.setMaxListeners = function (e) {
                void 0 !== e &&
                  ((this._maxListeners = e),
                  this._conf || (this._conf = {}),
                  (this._conf.maxListeners = e));
              }),
              (c.prototype.event = ""),
              (c.prototype.once = function (e, t) {
                return this._once(e, t, !1);
              }),
              (c.prototype.prependOnceListener = function (e, t) {
                return this._once(e, t, !0);
              }),
              (c.prototype._once = function (e, t, r) {
                return this._many(e, 1, t, r), this;
              }),
              (c.prototype.many = function (e, t, r) {
                return this._many(e, t, r, !1);
              }),
              (c.prototype.prependMany = function (e, t, r) {
                return this._many(e, t, r, !0);
              }),
              (c.prototype._many = function (e, t, r, n) {
                var o = this;
                if ("function" != typeof r)
                  throw new Error("many only accepts instances of Function");
                function i() {
                  return 0 == --t && o.off(e, i), r.apply(this, arguments);
                }
                return (i._origin = r), this._on(e, i, n), o;
              }),
              (c.prototype.emit = function () {
                this._events || i.call(this);
                var e = arguments[0];
                if (
                  "newListener" === e &&
                  !this._newListener &&
                  !this._events.newListener
                )
                  return !1;
                var t,
                  r,
                  n,
                  o,
                  a,
                  s = arguments.length;
                if (this._all && this._all.length) {
                  if (((a = this._all.slice()), s > 3))
                    for (t = new Array(s), o = 0; o < s; o++)
                      t[o] = arguments[o];
                  for (n = 0, r = a.length; n < r; n++)
                    switch (((this.event = e), s)) {
                      case 1:
                        a[n].call(this, e);
                        break;
                      case 2:
                        a[n].call(this, e, arguments[1]);
                        break;
                      case 3:
                        a[n].call(this, e, arguments[1], arguments[2]);
                        break;
                      default:
                        a[n].apply(this, t);
                    }
                }
                if ("function" == typeof (a = this._events[e])) {
                  switch (((this.event = e), s)) {
                    case 1:
                      a.call(this);
                      break;
                    case 2:
                      a.call(this, arguments[1]);
                      break;
                    case 3:
                      a.call(this, arguments[1], arguments[2]);
                      break;
                    default:
                      for (t = new Array(s - 1), o = 1; o < s; o++)
                        t[o - 1] = arguments[o];
                      a.apply(this, t);
                  }
                  return !0;
                }
                if ((a && (a = a.slice()), a && a.length)) {
                  if (s > 3)
                    for (t = new Array(s - 1), o = 1; o < s; o++)
                      t[o - 1] = arguments[o];
                  for (n = 0, r = a.length; n < r; n++)
                    switch (((this.event = e), s)) {
                      case 1:
                        a[n].call(this);
                        break;
                      case 2:
                        a[n].call(this, arguments[1]);
                        break;
                      case 3:
                        a[n].call(this, arguments[1], arguments[2]);
                        break;
                      default:
                        a[n].apply(this, t);
                    }
                  return !0;
                }
                if (!this._all && "error" === e)
                  throw arguments[1] instanceof Error
                    ? arguments[1]
                    : new Error("Uncaught, unspecified 'error' event.");
                return !!this._all;
              }),
              (c.prototype.emitAsync = function () {
                this._events || i.call(this);
                var e = arguments[0];
                if (
                  "newListener" === e &&
                  !this._newListener &&
                  !this._events.newListener
                )
                  return Promise.resolve([!1]);
                var t,
                  r,
                  n,
                  o,
                  a,
                  s = [],
                  c = arguments.length;
                if (this._all) {
                  if (c > 3)
                    for (t = new Array(c), o = 1; o < c; o++)
                      t[o] = arguments[o];
                  for (n = 0, r = this._all.length; n < r; n++)
                    switch (((this.event = e), c)) {
                      case 1:
                        s.push(this._all[n].call(this, e));
                        break;
                      case 2:
                        s.push(this._all[n].call(this, e, arguments[1]));
                        break;
                      case 3:
                        s.push(
                          this._all[n].call(this, e, arguments[1], arguments[2])
                        );
                        break;
                      default:
                        s.push(this._all[n].apply(this, t));
                    }
                }
                if ("function" == typeof (a = this._events[e]))
                  switch (((this.event = e), c)) {
                    case 1:
                      s.push(a.call(this));
                      break;
                    case 2:
                      s.push(a.call(this, arguments[1]));
                      break;
                    case 3:
                      s.push(a.call(this, arguments[1], arguments[2]));
                      break;
                    default:
                      for (t = new Array(c - 1), o = 1; o < c; o++)
                        t[o - 1] = arguments[o];
                      s.push(a.apply(this, t));
                  }
                else if (a && a.length) {
                  if (((a = a.slice()), c > 3))
                    for (t = new Array(c - 1), o = 1; o < c; o++)
                      t[o - 1] = arguments[o];
                  for (n = 0, r = a.length; n < r; n++)
                    switch (((this.event = e), c)) {
                      case 1:
                        s.push(a[n].call(this));
                        break;
                      case 2:
                        s.push(a[n].call(this, arguments[1]));
                        break;
                      case 3:
                        s.push(a[n].call(this, arguments[1], arguments[2]));
                        break;
                      default:
                        s.push(a[n].apply(this, t));
                    }
                } else if (!this._all && "error" === e)
                  return arguments[1] instanceof Error
                    ? Promise.reject(arguments[1])
                    : Promise.reject("Uncaught, unspecified 'error' event.");
                return Promise.all(s);
              }),
              (c.prototype.on = function (e, t) {
                return this._on(e, t, !1);
              }),
              (c.prototype.prependListener = function (e, t) {
                return this._on(e, t, !0);
              }),
              (c.prototype.onAny = function (e) {
                return this._onAny(e, !1);
              }),
              (c.prototype.prependAny = function (e) {
                return this._onAny(e, !0);
              }),
              (c.prototype.addListener = c.prototype.on),
              (c.prototype._onAny = function (e, t) {
                if ("function" != typeof e)
                  throw new Error("onAny only accepts instances of Function");
                return (
                  this._all || (this._all = []),
                  t ? this._all.unshift(e) : this._all.push(e),
                  this
                );
              }),
              (c.prototype._on = function (e, t, r) {
                if ("function" == typeof e) return this._onAny(e, t), this;
                if ("function" != typeof t)
                  throw new Error("on only accepts instances of Function");
                return (
                  this._events || i.call(this),
                  this._newListener && this.emit("newListener", e, t),
                  this._events[e]
                    ? ("function" == typeof this._events[e] &&
                        (this._events[e] = [this._events[e]]),
                      r ? this._events[e].unshift(t) : this._events[e].push(t),
                      !this._events[e].warned &&
                        this._maxListeners > 0 &&
                        this._events[e].length > this._maxListeners &&
                        ((this._events[e].warned = !0),
                        s.call(this, this._events[e].length, e)))
                    : (this._events[e] = t),
                  this
                );
              }),
              (c.prototype.off = function (e, t) {
                if ("function" != typeof t)
                  throw new Error(
                    "removeListener only takes instances of Function"
                  );
                var r,
                  i = [];
                if (!this._events[e]) return this;
                (r = this._events[e]), i.push({ _listeners: r });
                for (var a = 0; a < i.length; a++) {
                  if (((r = i[a]._listeners), o(r))) {
                    for (var s = -1, c = 0, l = r.length; c < l; c++)
                      if (
                        r[c] === t ||
                        (r[c].listener && r[c].listener === t) ||
                        (r[c]._origin && r[c]._origin === t)
                      ) {
                        s = c;
                        break;
                      }
                    if (s < 0) continue;
                    return (
                      this._events[e].splice(s, 1),
                      0 === r.length && delete this._events[e],
                      this._removeListener && this.emit("removeListener", e, t),
                      this
                    );
                  }
                  (r === t ||
                    (r.listener && r.listener === t) ||
                    (r._origin && r._origin === t)) &&
                    (delete this._events[e],
                    this._removeListener && this.emit("removeListener", e, t));
                }
                return (
                  (function e(t) {
                    if (void 0 !== t) {
                      var r = Object.keys(t);
                      for (var o in r) {
                        var i = r[o],
                          a = t[i];
                        a instanceof n ||
                          "object" != typeof a ||
                          null === a ||
                          (Object.keys(a).length > 0 && e(t[i]),
                          0 === Object.keys(a).length && delete t[i]);
                      }
                    }
                  })(this.listenerTree),
                  this
                );
              }),
              (c.prototype.offAny = function (e) {
                var t,
                  r = 0,
                  n = 0;
                if (e && this._all && this._all.length > 0) {
                  for (r = 0, n = (t = this._all).length; r < n; r++)
                    if (e === t[r])
                      return (
                        t.splice(r, 1),
                        this._removeListener &&
                          this.emit("removeListenerAny", e),
                        this
                      );
                } else {
                  if (((t = this._all), this._removeListener))
                    for (r = 0, n = t.length; r < n; r++)
                      this.emit("removeListenerAny", t[r]);
                  this._all = [];
                }
                return this;
              }),
              (c.prototype.removeListener = c.prototype.off),
              (c.prototype.removeAllListeners = function (e) {
                return void 0 === e
                  ? (!this._events || i.call(this), this)
                  : (this._events && delete this._events[e], this);
              }),
              (c.prototype.listeners = function (e) {
                return (
                  this._events || i.call(this),
                  this._events[e] || (this._events[e] = []),
                  o(this._events[e]) || (this._events[e] = [this._events[e]]),
                  this._events[e]
                );
              }),
              (c.prototype.eventNames = function () {
                return Object.keys(this._events);
              }),
              (c.prototype.listenerCount = function (e) {
                return this.listeners(e).length;
              }),
              (c.prototype.listenersAny = function () {
                return this._all ? this._all : [];
              }),
              (t.Z = c);
          },
          556: (e, t) => {
            "use strict";
            t.Z = {
              openAddress: 62,
              setNavigationBarRightButton: 238,
              requestVirtualPayment: 285,
              navigateToDevMiniProgram: 351,
              insertLivePusher: 360,
              updateLivePusher: 361,
              removeLivePusher: 362,
              operateLivePusher: 363,
              insertLivePlayer: 364,
              updateLivePlayer: 365,
              removeLivePlayer: 366,
              operateLivePlayer: 367,
              openOfflinePayView: 403,
              setCookies: 502,
              getCookies: 503,
              joinVoIPChat: 516,
              exitVoIPChat: 517,
              onVoIPChatMembersChanged: 518,
              onVoIPChatSpeakersChanged: 519,
              onVoIPChatInterrupted: 520,
              updateVoIPChatMuteConfig: 521,
              insertXWebLivePlayer: 561,
              updateXWebLivePlayer: 562,
              removeXWebLivePlayer: 563,
              insertXWebLivePusher: 564,
              updateXWebLivePusher: 565,
              removeXWebLivePusher: 566,
              operateXWebLivePlayer: 567,
              operateXWebLivePusher: 568,
              UDP: 606,
              launchApplicationDirectly: 620,
              insertVoIPView: 623,
              updateVoIPView: 624,
              removeVoIPView: 625,
              chooseShareGroup: 627,
              screenCanvasReadPixels: 631,
              navigateToMiniProgramDirectly: 632,
              openDataContextExtension: 638,
              navigateBackNative: 646,
              batchGetContactDirectly: 676,
              operateMediaContainer: 686,
              operateMediaTrack: 687,
              launchApp: 692,
              sendBizRedPacketForOpen: 694,
              openVideoEditor: 705,
              operateMediaRecorder: 712,
              onMediaRecorderStateChange: 713,
              openWxappLimit5: 720,
              shareCallback: 740,
              operateCanvasPlayer: 741,
              onCanvasPlayerStateChange: 742,
              chooseAddressForPlugin: 765,
              openSettingForPlugin: 768,
              requestPaymentForPlugin: 771,
              WeAppWorker: 775,
              listenFrameChangeInWorker: 776,
              subscribeVoIPMembers: 780,
              onVoIPVideoMembersChanged: 781,
              requestSubscribeWhatsNew: 782,
              getGroupToolbarInfo: 803,
              requestMidasFriendPayment: 804,
              createWebView: 805,
              openUrlForPlugin: 844,
              enterContactForPlugin: 850,
              authShareRelationship: 852,
              setLoginAuthForPlugin: 855,
              uploadToCommonCDN: 878,
              quicklyAddBrandContact: 879,
              engineOpenData: 894,
              preloadMiniProgramEnvDirectly: 900,
              predownloadMiniProgramPackageDirectly: 901,
              openAddressWithLightMode: 905,
              editTextWithPopForm: 906,
              enableShareTimeLine: 909,
              private_getEnterOptions: 911,
              addPhoneCalendar: 912,
              addPhoneRepeatCalendar: 913,
              privateScanItem: 917,
              shareDataToWeRun: 926,
              requestLivePlayerPictureInPicture: 930,
              handoff: 931,
              private_chooseInvoiceTitleDirectly: 932,
              insertXWebVoIPView: 934,
              updateXWebVoIPView: 935,
              removeXWebVoIPView: 936,
              private_getPhoneNumberDirectly: 937,
              preloadWebview: 955,
              private_openCardDirectly: 961,
              bindingDownload: 972,
              bindingReadFile: 973,
              bindingWebSocket: 974,
              openH5GameClub: 975,
              WXA_JSAPI_INDEX_useOldCanvas: 977,
              showShareImageMenu: 978,
              openChannelsCreateContact: 985,
              private_plugin_webview: 986,
              private_launchTrialMiniProgram: 992,
              showSalesDrivingMenu: 1003,
              onSalesDrivingMessage: 1004,
              plugin_launchApplicationDirectly_operateDirectly: 1009,
              private_setNavigateBackInterception: 1020,
              private_stopNavigateBackInterception: 1021,
              privateSearchContacts: 1024,
              TCP: 1025,
              TCPServer: 1026,
              inputTypeSafePassword: 1027,
              startGameLiveDirectly: 1045,
              getUserRecentGameLiveInfo: 1049,
              private_getWebviewDebugInfo: 1051,
              showRedPackage: 1052,
              allowBufferWASM: 1067,
              reportRequestError: 1069,
              traceUAReport: 1079,
              chooseAvatar: 1081,
              showNicknameAccessory: 1082,
              openPublicServicePayment: 1084,
              reportRequestError2: 1085,
              openUrlByExtBrowser: 1115,
              reportRequestError3: 1131,
              requestOrderPaymentForPlugin: 1147,
              useFreeHttpDns: 1151,
              openUrlByExtBrowser2: 1161,
              reportRresult: 1167,
              setFileSpaceStatistics: 1168,
              setFileSpaceStatisticsSwitch: 1174,
            };
          },
          6: (e, t, r) => {
            "use strict";
            r.d(t, {
              AT: () => d,
              Em: () => a,
              Ft: () => f,
              HD: () => s,
              Kn: () => h,
              ZT: () => b,
              eP: () => y,
              fU: () => m,
              hj: () => c,
              i2: () => p,
              jn: () => l,
              kJ: () => g,
              mf: () => v,
              o8: () => u,
              x7: () => _,
            });
            var o = (() => Object.prototype.toString)(),
              i = n.prototype.call.bind(o);
            function a(e) {
              return i(e).slice(8, -1);
            }
            var s = (e) => "String" === a(e),
              c = (e) => "Number" === a(e),
              l = (e) => !0 === e || !1 === e || "Boolean" === a(e),
              u = (e) => void 0 === e,
              f = (e) => null === e,
              p = (() => Number.isNaN || ((e) => e != e))(),
              d = (e) => c(e) && Math.abs(e) === 1 / 0,
              h = (e) => "Object" === a(e),
              g = (() => Array.isArray || ((e) => "Array" === a(e)))(),
              v = (e) => "function" == typeof e,
              y = (e) => "ArrayBuffer" === a(e),
              m = (e) =>
                ArrayBuffer.isView(e) && !((e) => "DataView" === a(e))(e);
            function _(e, t, r = "parameter") {
              var n = a(t),
                o = a(e);
              if (o !== n) return `${r} should be ${n} instead of ${o};`;
              var i = "";
              switch (n) {
                case "Object":
                  Object.keys(t).forEach((n) => {
                    i += _(e[n], t[n], `${r}.${n}`);
                  });
                  break;
                case "Array":
                  if (e.length < t.length)
                    return `${r} should have at least ${t.length} item;`;
                  for (var s = 0; s < t.length; ++s)
                    i += _(e[s], t[s], `${r}[${s}]`);
                  break;
                case "String":
                  if (t.length > 0 && 0 === e.length)
                    return `${r} should be not empty string`;
              }
              return i;
            }
            function b() {}
          },
          256: (e, t, r) => {
            "use strict";
            r.d(t, { Hw: () => i, Qu: () => o });
            var n = (() => Object.assign)();
            function o(e, t, r) {
              var o = (function (e) {
                return function (t = {}, ...r) {
                  t = t || {};
                  var { success: o, fail: i, complete: a } = t;
                  return o || i || a
                    ? e.apply(this, [t].concat(r))
                    : new Promise((o, i) => {
                        var a = n({ success: o, fail: i }, t);
                        e.apply(this, [a].concat(r));
                      });
                };
              })(r.value);
              return (
                (r.value = function () {
                  return o.apply(this, arguments);
                }),
                r
              );
            }
            function i(e, t) {
              return function (...r) {
                try {
                  return e(...r);
                } catch (e) {
                  if ("[object Error]" === Object.prototype.toString.apply(e)) {
                    if ("AppServiceSdkKnownError" === e.type) throw e;
                    "ThirdScriptError" === e.type
                      ? h.thirdErrorReport({ error: e, extend: t })
                      : h.errorReport({
                          key: "appServiceSDKScriptError",
                          error: e,
                          extend: t,
                        });
                  }
                }
              };
            }
          },
          560: (e, t, r) => {
            "use strict";
            r.d(t, { Tk: () => i });
            var n = r(8),
              o = [
                { match: /^connectSocket/, version: 1 },
                { match: /^request/, version: n.wZ ? 3 : 1 },
                { match: /^downloadFile/, version: n.wZ ? 3 : 1 },
              ];
            function i(e, t) {
              o.push({ match: e, version: t });
            }
          },
          56: (e, t, r) => {
            "use strict";
            r.d(t, {
              cE: () => c,
              wK: () => a,
              en: () => i,
              HR: () => s,
              mQ: () => l,
            });
            var n = Object.prototype.hasOwnProperty;
            function o(e, t) {
              return n.call(e, t);
            }
            function i(e) {
              var t = {
                protocol: /^(.+):\/\//,
                host: /:\/\/(.+?)[?#\s/]/,
                path: /\w(\/.*?)[?#\s]/,
                query: /\?(.+?)[#/\s]/,
                hash: /#(\w+)\s$/,
              };
              return (
                (e += " "),
                Object.keys(t).forEach((r) => {
                  var n = t[r];
                  t[r] =
                    "query" === r
                      ? n.exec(e) &&
                        n
                          .exec(e)[1]
                          .split("&")
                          .reduce((e, t) => {
                            var r = t.split("=");
                            return (e[r[0]] = r[1]), e;
                          }, {})
                      : n.exec(e) && n.exec(e)[1];
                }),
                t
              );
            }
            var a = (e) => {
              if ("string" == typeof e) {
                var t = e.indexOf("?");
                if (-1 !== t) return e.slice(0, t);
              }
              return e;
            };
            function s(e, t = !1) {
              if ("object" != typeof e) return e;
              var r = [];
              for (var n in e)
                if (o(e, n))
                  if (t)
                    try {
                      r.push(
                        `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`
                      );
                    } catch (t) {
                      r.push(`${n}=${e[n]}`);
                    }
                  else r.push(`${n}=${e[n]}`);
              return r.join("&");
            }
            function c(e, t) {
              if (
                "string" == typeof e &&
                "object" == typeof t &&
                null !== t &&
                Object.keys(t).length > 0
              ) {
                var r = e.split("?");
                return (
                  r[0] +
                  "?" +
                  s(
                    (function (...e) {
                      return e.reduce((e, t) => {
                        for (var r in t) e[r] = t[r];
                        return e;
                      }, {});
                    })(
                      (r[1] || "").split("&").reduce((e, t) => {
                        if ("string" == typeof t && t.length > 0) {
                          var r = t.split("="),
                            n = r[0],
                            o = r[1];
                          e[n] = o;
                        }
                        return e;
                      }, {}),
                      Object.keys(t).reduce(
                        (e, r) => (
                          "object" == typeof t[r]
                            ? (e[encodeURIComponent(r)] = encodeURIComponent(
                                JSON.stringify(t[r])
                              ))
                            : (e[encodeURIComponent(r)] = encodeURIComponent(
                                t[r]
                              )),
                          e
                        ),
                        {}
                      )
                    )
                  )
                );
              }
              return e;
            }
            function l(e, t = "http") {
              return "http" === t
                ? /^(http|https):\/\/.*/i.test(e)
                : "websocket" === t
                ? /^(ws|wss):\/\/.*/i.test(e)
                : void 0;
            }
          },
          580: (e, t, r) => {
            "use strict";
            r.d(t, { j: () => i });
            var n = Object.create(null);
            var o = r(256);
            function i(e, t) {
              !(function (e, t) {
                n[e] instanceof Array
                  ? n[e].push(t)
                  : ((n[e] = null), c.on(e, t));
              })(e, (0, o.Hw)(t, `at api ${e} callback function`));
            }
          },
          78: (e, r, o) => {
            "use strict";
            var s;
            o.d(r, {
              be: () => Ae,
              Rn: () => Oe,
              gM: () => Be,
              r3: () => Ie,
              FE: () => Ce,
              YG: () => Ee,
              IN: () => Se,
              yD: () => qe,
              Qh: () => He,
              oQ: () => ke,
              jQ: () => xe.j,
              TG: () => Ke,
              nY: () => P,
            });
            var l = {
                get invoke() {
                  return s;
                },
                set invoke(e) {
                  s = e;
                },
              },
              u = o(632),
              f = o(556),
              p = null,
              g = [],
              v = (e) => {
                null !== p ? e() : g.push(e);
              },
              y = (e) => {
                (p = e.data.pluginPermissionBytes),
                  g.forEach((e) => e()),
                  (g = []);
              };
            c.subscribe("batchGetPluginPermissionBytes", y),
              a.onLibraryEnd(() => {
                "undefined" != typeof __subContextEngine__ &&
                  "function" ==
                    typeof __subContextEngine__.onAppRenderContextMessage &&
                  __subContextEngine__.onAppRenderContextMessage((e) => {
                    "batchGetPluginPermissionBytes" === e.name && y(e);
                  });
              }),
              c.subscribe("getPluginPermissionBytesByJsApi", (e) => {
                w(e.data.pluginId, e.data.apiName, (t) => {
                  c.publish("responseGetPluginPermissionBytesByJsApi", {
                    data: { reqId: e.data.reqId, bytes: t },
                    options: { timestamp: Date.now() },
                  });
                });
              });
            var m = (e) => e.split("/", 1)[0],
              b = (e, t) => {
                var r,
                  n,
                  o =
                    null === (r = p) ||
                    void 0 === r ||
                    null === (n = r[e]) ||
                    void 0 === n
                      ? void 0
                      : n[t];
                return (
                  null == o
                    ? (o = [0, 0, 0])
                    : "object" != typeof o && (o = [o, o, o]),
                  o
                );
              };
            function w(e, t, r) {
              (e = m(e)),
                i.supportInvokeWithAppId
                  ? c.invoke(
                      "getPluginPermissionBytes",
                      { pluginList: [{ pluginId: e, indexes: [f.Z[t]] }] },
                      (t) => {
                        var n = t.pluginPermissionMap[e][0];
                        r([n, n, n]);
                      }
                    )
                  : v(() => {
                      var n = b(e, t);
                      r(n);
                    });
            }
            var k = o(700),
              S = o(8);
            var T = {},
              A = (e, t = {}, r) => {
                Array.isArray(r)
                  ? r.forEach((r) => {
                      __subContextEngine__.postMessageToAppRenderContext({
                        event: e,
                        params: { params: t, pageId: r },
                      });
                    })
                  : __subContextEngine__.postMessageToAppRenderContext({
                      event: e,
                      params: { params: t },
                    });
              };
            function x(e, t, r) {
              !(function (e, t, r) {
                c.publish(e, t, r);
              })(e, { data: t, options: { timestamp: Date.now() } }, r);
            }
            var P = S.KU
              ? (e, t, r) => {
                  if (null == r) x(e, t, r), A(e, t, r);
                  else {
                    var n = ((e) => {
                      if (void 0 === e || 0 === e.length) return {};
                      if (1 === e.length)
                        return "webview" === T[e[0]]
                          ? { webview: e }
                          : { context: e };
                      var t = {};
                      return (
                        e.forEach((e) => {
                          void 0 !== t[T[e]]
                            ? t[T[e]].push(e)
                            : (t[T[e]] = [e]);
                        }),
                        t
                      );
                    })(r);
                    void 0 !== n.webview && x(e, t, n.webview),
                      void 0 !== n.context && A(e, t, n.context);
                  }
                }
              : x;
            function I(e, t) {}
            var E = (e, t) => {
                C.on(e, (e) => {
                  var r;
                  void 0 === ((r = e.pageId), T[r]) &&
                    ((e, t) => {
                      T[e] = t;
                    })(e.pageId, "context"),
                    t(e.params, e.pageId);
                });
              },
              C = S.KU ? new a.EventEmitter() : null;
            S.KU &&
              a.onLibraryEnd(() => {
                __subContextEngine__.onAppRenderContextMessage((e) => {
                  C.emit(e.event, e.params);
                });
              });
            var O = S.KU
                ? (e, t) => {
                    E(e, t);
                  }
                : I,
              M = "",
              j = (e = {}) => {
                try {
                  M = e.transitExtraData.adUxInfo;
                } catch (e) {
                  M = "";
                }
              };
            u.Z.onReady(() => {
              j(u.Z.appLaunchInfo);
            }),
              (0, k.n)("onAppEnterForeground", (e) => {
                j(e);
              }),
              (0, k.n)("onAppEnterBackground", (e = {}) => {
                ("back" !== e.mode && "close" !== e.mode) || (M = "");
              }),
              O("getAdUxInfo", (e, t) => {
                P("adUxInfoGot", { adUxInfo: M, callbackId: e.callbackId }, [
                  t,
                ]);
              });
            function R(e, t, r, n = {}) {
              ("navigateToMiniProgram" !== e &&
                "openUrl" !== e &&
                "private_openUrl" !== e) ||
                (t.adUxInfo = t.adUxInfo || M);
              var o = n.appId;
              return "splashad" === a.env.workerType ||
                u.Z.supportInvokeWithAppId ||
                void 0 === o ||
                (void 0 !== a && a.env.isGame) ||
                4 === u.Z.appType
                ? c.invoke(e, t, r, n)
                : v(() => {
                    var i = (function (e, t, r) {
                      (t = m(t)), delete r.permissionBytes;
                      var n = b(t, e);
                      return (r.permissionBytes = n), r;
                    })(e, o, t);
                    c.invoke(e, i, r, n);
                  });
            }
            var L = {},
              D = {},
              N = {},
              W = 0,
              F = (e, t) =>
                Object.keys(t).map((r) =>
                  Object.keys(t[r]).map((n) => ({
                    func: r,
                    result: e,
                    errMsg: n,
                    count: t[r][n],
                  }))
                ),
              $ = () => {
                var e = F(1, L),
                  t = F(2, D),
                  r = F(3, N),
                  n = [].concat(e, t, r);
                0 !== n.length &&
                  Se("reportRealtimeAction", {
                    actionData: JSON.stringify({
                      business: "mmbizwxajsapi",
                      dataType: 1,
                      dataArray: n,
                      appType: h.getAppType(),
                    }),
                  }),
                  (L = {}),
                  (D = {}),
                  (N = {});
              },
              B = o(256),
              U = o(6),
              G = o(281),
              Z = 0,
              q = 1,
              H = 2,
              V = 1,
              K = 2,
              Y = 3,
              J = 4,
              X = _.createLogger("BanForPage"),
              z = !1,
              Q = new Set([
                "shareAppMessage",
                "shareAppMessageDirectly",
                "requestPayment",
                "setClipboardData",
                "getClipboardData",
                "getLocation",
                "getPhoneNumber",
                "navigateToMiniProgram",
                "navigateBackMiniProgram",
              ]),
              ee = [];
            function te(e, t, r) {
              var n = (function (e, t, r) {
                for (var n = -1, o = 0; o < ee.length; o++) {
                  var i = ee[o];
                  if (
                    (!(0, U.HD)(i.path_rule) ||
                      !i.path_rule ||
                      new RegExp(i.path_rule).test(t)) &&
                    (!(0, U.HD)(i.title_rule) ||
                      !i.title_rule ||
                      new RegExp(i.title_rule).test(r))
                  ) {
                    n = o;
                    break;
                  }
                }
                return X.log(`[getBanRuleIndexForPage] banRuleIndex=${n}`), n;
              })(0, t, r);
              return -1 === n
                ? (re(e, V, J, e), !0)
                : (function (e, t) {
                    var r,
                      n,
                      o = e.ban_jsapi_list.find((e) => e.jsapi_name === t);
                    if (!o)
                      return (
                        X.log(
                          "[checkAPIAvailableForPageByRule], no APIItem found"
                        ),
                        !0
                      );
                    if (
                      (X.log(
                        "[checkAPIAvailableForPageByRule], found APIItem:",
                        o
                      ),
                      o.state === Z)
                    )
                      r = !1;
                    else if (o.state === q) r = !0;
                    else if (o.state === H && ((r = !0), 1 === e.is_valid)) {
                      var i = o.toast_wording || "该功能暂时无法使用";
                      Ae("showToast", { title: i, icon: "none" });
                    }
                    return (
                      (n = r ? (e.is_valid ? K : Y) : V),
                      re(t, n, J, t),
                      1 !== e.is_valid || !r
                    );
                  })(ee[n], e);
            }
            function re(e, t, r, n = "", o = "") {
              if (
                (X.log(
                  `[reportAPIBanForPage] APIName=${e}, blockType=${t}, checkScene=${r}, extraInfo=${n}, needReport=${z}`
                ),
                z)
              ) {
                var { appLaunchInfo: i } = u.Z,
                  a = Object.keys(G.Z.query)
                    .map((e) => `${e}=${G.Z.query[e]}`)
                    .join("&"),
                  s = {
                    session_id: i.sessionid || i.sessionId,
                    cur_path: G.Z.lastRoute + (a ? `?${a}` : ""),
                    title: G.Z.navigationBarTitleMap[G.Z.lastRoute],
                    check_scene: r,
                    block_status: t,
                    extra_info: n,
                    launch_scene: i.scene,
                    launch_path: i.path,
                    target_path: o,
                  };
                X.log("[reportAPIBanForPage], reqData:", s),
                  qe({
                    reqData: s,
                    apiName: "webapi_reportnvgcheckinfo",
                    complete(e) {
                      X.log(`[reportAPIBanForPage], res.errMsg=${e.errMsg}`);
                    },
                  });
              }
            }
            u.Z.onReady(() => {
              if (!S.gm)
                try {
                  var { do_report: e, navigate_ban_rule_list: t } =
                    u.Z.appContactInfo.operationInfo.jsonInfo.navigate_ban_info;
                  (ee = t),
                    (z = 1 === e),
                    (Q = new Set(
                      t.reduce((e, t) => [...e, ...t.ban_jsapi_list], Q)
                    ));
                } catch (e) {
                  X.error(`[BanForPage][init] fail, errMsg=${e.message}`);
                }
            });
            var ne = n.prototype.call.bind(Array.prototype.push),
              oe =
                (n.prototype.call.bind(Array.prototype.forEach),
                ["startPullDownRefresh"]),
              ie = [],
              ae = { appRoute: !1, appRouteDone: !1 };
            o(125);
            var se,
              ce = (() => Object.create)(),
              le = (() => Object.assign)(),
              ue = (() => Object.keys)(),
              fe = (() => Array.prototype.reduce)(),
              pe = Array.prototype.includes.bind(oe),
              de = n.prototype.call.bind(fe),
              he = [
                "open",
                "openSync",
                "close",
                "closeSync",
                "fstat",
                "fstatSync",
                "write",
                "writeSync",
                "read",
                "readSync",
                "truncate",
                "truncateSync",
                "ftruncate",
                "ftruncateSync",
              ];
            function ge(e, t, r, n, o) {
              e.errMsg = e.errMsg || `${t}:ok`;
              var i = 0 === e.errMsg.indexOf(`${t}:ok`),
                a = new RegExp(`${t}:(fail |fail:)?cancel`).test(e.errMsg),
                s = 0 === e.errMsg.indexOf(`${t}:fail`);
              "function" == typeof n.beforeAll && n.beforeAll(e),
                i
                  ? (function (e, t, r, n, o) {
                      var i = function () {
                        "function" == typeof e.success && e.success(r),
                          "function" == typeof n.afterSuccess &&
                            n.afterSuccess(r);
                      };
                      "function" == typeof n.beforeSuccess
                        ? 2 === n.beforeSuccess._argumentsLength
                          ? n.beforeSuccess(r, i)
                          : (n.beforeSuccess(r), i())
                        : i(),
                        "function" == typeof se && se(t, o);
                    })(r, t, e, n, o)
                  : a
                  ? (function (e, t, r, n) {
                      var o = new RegExp(`${t}:(fail |fail:)?cancel`);
                      (e.errMsg = e.errMsg.replace(o, `${t}:fail cancel`)),
                        "function" == typeof r.fail && r.fail(e),
                        "function" == typeof n.beforeCancel &&
                          n.beforeCancel(e),
                        "function" == typeof r.cancel && r.cancel(e),
                        "function" == typeof n.afterCancel && n.afterCancel(e);
                    })(e, t, r, n)
                  : s &&
                    (function (e, t, r, n) {
                      "function" == typeof e.beforeFail && e.beforeFail(r),
                        "function" == typeof n.fail && n.fail(r),
                        "function" == typeof e.afterFail && e.afterFail(r),
                        ((0, U.mf)(e.checkNeedReportFail) &&
                          !1 === e.checkNeedReportFail(r)) ||
                          h.reportIDKey({ key: `${t}_fail` });
                    })(n, t, e, r),
                "function" == typeof r.complete && r.complete(e),
                "function" == typeof n.afterAll && n.afterAll(e),
                ((e, t, r, n, o) => {
                  var i;
                  ((i = t ? L : r ? D : N)[e] = i[e] || {}),
                    (i[e][o] = (i[e][o] || 0) + 1),
                    Date.now() - W >= 6e4 &&
                      ((W = Date.now()), setTimeout($, 6e4));
                })(t, i, s, 0, e.errMsg);
            }
            function ve(e, t, r, n) {
              var o = (function (e, t) {
                return de(
                  ue(e),
                  (r, n) => (
                    "function" == typeof e[n] &&
                      ((r[n] = d.surroundThirdByTryCatch(
                        e[n],
                        `at api ${t} ${n} callback function`
                      )),
                      delete e[n]),
                    r
                  ),
                  {}
                );
              })(e, t);
              return (e) => {
                ge(e, t, o, r, n);
              };
            }
            var ye = (() => String.prototype.split)(),
              me = (() => String.prototype.startsWith)(),
              _e = n.prototype.call.bind(ye),
              be = n.prototype.call.bind(me);
            function we(e) {
              return (t, r = {}, n = {}, o = "/") => {
                (0, U.Kn)(r) || (r = {}),
                  "operateWXData" === t &&
                    (r._isFromBaseOperateWXData,
                    delete r._isFromBaseOperateWXData),
                  (n = (function (e, t) {
                    return de(
                      ue(e),
                      (r, n) => (
                        "function" == typeof e[n] &&
                          ((r[n] = (0, B.Hw)(
                            e[n],
                            `at api ${t} ${n} callback function`
                          )),
                          (r[n]._argumentsLength = e[n].length)),
                        r
                      ),
                      {}
                    );
                  })(n, t)),
                  (0, U.Kn)(r) && (r = le(ce(null), r));
                var i = ve(r, t, n, o);
                h.reportIDKey({ key: t });
                var s,
                  c,
                  l,
                  u = {
                    keepOriginalParams:
                      ((s = t), S.jP || (S.wZ && he.includes(s))),
                  };
                if (!e && "splashad" !== a.env.workerType) {
                  if (
                    (0, S.LU)() &&
                    Q.has(t) &&
                    ((c = t),
                    (l = Object.keys(G.Z.query)
                      .reduce((e, t) => [...e, `${t}=${G.Z.query[t]}`], [])
                      .join("&")),
                    !te(
                      c,
                      G.Z.lastRoute + (l ? `?${l}` : ""),
                      G.Z.navigationBarTitleMap[G.Z.lastRoute] || ""
                    ))
                  )
                    return void i({ errMsg: `${t}:fail API has been banned` });
                  if (
                    ((0, U.Kn)(r) &&
                      (delete r.pluginId, delete r.permissionBytes),
                    "string" == typeof o && be(o, "wx"))
                  ) {
                    var f = ((e) => _e(e, "/", 1)[0])(o);
                    u.appId = f;
                  }
                }
                R(t, r, i, u);
              };
            }
            var ke = we(!1),
              Se = (e, t, r) => {
                pe(e)
                  ? ((e, t, r) => {
                      var { appRoute: n, appRouteDone: o } = ae;
                      !n && o
                        ? ke(e, t, r)
                        : ne(ie, { name: e, args: t, option: r });
                    })(e, t, r)
                  : ke(e, t, r);
              },
              Te = we(!0),
              Ae = (e, t, r) => {
                Te(e, t, r);
              },
              xe = o(580);
            l.invoke = Se;
            var Pe = o(638);
            function Ie(e, t, r) {
              var n = (0, U.x7)(t, r);
              return (
                !n ||
                (Ce({
                  name: e,
                  args: t,
                  errno: Pe.Wkc,
                  errMsg: `parameter error: ${n}`,
                  success: !1,
                }),
                !1)
              );
            }
            function Ee(e, t = {}, r, n) {
              var o = (0, U.hj)(r);
              Ce({
                name: e,
                args: t,
                errno: o ? r : void 0,
                errMsg: o ? void 0 : r,
                errCode: o ? void 0 : n,
                success: !1,
              });
            }
            function Ce({
              name: e,
              args: t = {},
              success: r = !0,
              errno: n,
              errMsg: o = "",
              errCode: i,
              res: a = {},
            }) {
              t = t || {};
              var s = d.surroundThirdByTryCatch(
                  (r ? t.success : t.fail) || U.ZT,
                  `at api ${e} ${r ? "success" : "fail"} callback function`
                ),
                c = d.surroundThirdByTryCatch(
                  t.complete || U.ZT,
                  `at api ${e} complete callback function`
                );
              (0, U.hj)(n)
                ? ((a.errno = n),
                  (a.errMsg = `${e}:fail${o && ":" !== o[0] ? " " : ""}${
                    o || ""
                  }`))
                : ((a.errMsg = r ? `${e}:ok` : `${e}:fail ${o}`),
                  (0, U.hj)(i) && (a.errCode = i)),
                s(a),
                c(a);
            }
            var Oe = ({ success: e, fail: t, complete: r } = {}, n) => {
                var o = (e) => {
                  "function" == typeof t &&
                    (n
                      ? d.surroundThirdByTryCatch(
                          t,
                          `at api ${n} fail callback function`
                        )(e)
                      : t(e)),
                    "function" == typeof r &&
                      (n
                        ? d.surroundThirdByTryCatch(
                            r,
                            `at api ${n} complete callback function`
                          )(e)
                        : r(e));
                };
                return {
                  success: (t) => {
                    void 0 === t.errMsg && n && (t.errMsg = `${n}:ok`),
                      "function" == typeof e &&
                        (n
                          ? d.surroundThirdByTryCatch(
                              e,
                              `at api ${n} success callback function`
                            )(t)
                          : e(t)),
                      "function" == typeof r &&
                        (n
                          ? d.surroundThirdByTryCatch(
                              r,
                              `at api ${n} complete callback function`
                            )(t)
                          : r(t));
                  },
                  fail: o,
                  failWithMsg: ({
                    code: e,
                    msg: t,
                    errno: r,
                    name: i,
                  } = {}) => {
                    var a = {};
                    "number" == typeof r && r > 0
                      ? ((a.errno = r), (a.errMsg = `${i || n}:fail`))
                      : ((a.errMsg = `${i || n}:fail ${t || ""}`),
                        "number" == typeof e && (a.errCode = e)),
                      o(a);
                  },
                };
              },
              Me = (() => {
                var e = void 0 !== t && t ? t.version : "unknown";
                return (0, U.HD)(e) && (e = e.replace(" ", "")), e;
              })(),
              je = (() => {
                var e = void 0 !== t && t ? t.updateTime : "unknown";
                return (0, U.HD)(e) && (e = e.replace(" ", "-")), e;
              })();
            function Re(e) {
              return (t) => ((0, U.HD)(t) && t.length > e ? t.substr(0, e) : t);
            }
            function Le(e, t = !0) {
              var r = (0, U.Em)(e);
              switch (r) {
                case "Number":
                case "Boolean":
                  return e;
                case "String":
                  return Re(512)(e).replace(/\|/g, "||").replace(/,/g, "|.");
                case "Error":
                  return `[Error:${Le(e.message)}|${Le(e.stack)}]`;
                case "Object":
                  return t
                    ? Object.keys(e)
                        .map((t) => `${Le(t)}=${Le(e[t], !1)}`)
                        .sort((e, t) => e.length - t.length)
                        .join("&") || "{}"
                    : `[${r}]`;
                default:
                  return `[${r}]`;
              }
            }
            function De({
              WXDataApiName: e,
              argument: t,
              isSuccess: r,
              invokeTime: n,
              costTime: o,
              result: i,
              errMsg: a,
              isConfirm: s,
              queueLength: c,
              wxdataQueueTimestamp: l,
              wxdataDequeueTimestamp: f,
              beginCGITimestamp: p,
              CGICallbackTimestamp: d,
              beginCGITimestampAfterConfirm: g,
              CGICallbackTimestampAfterConfirm: v,
              wxlibCallbackTimestamp: y,
              requestInQueue: m,
              requestingCount: _,
              cost1: b,
              cost2: w,
              cost3: k,
              cost4: S,
              cost5: T,
              cost6: A,
            }) {
              Math.random() < 0.05 &&
                setTimeout(() => {
                  var x = G.Z.currentNetworkType,
                    P = u.Z.appType + 1e3,
                    I =
                      u.Z.appLaunchInfo && void 0 !== u.Z.appLaunchInfo.scene
                        ? u.Z.appLaunchInfo.scene
                        : 0,
                    E = [
                      e,
                      Le(JSON.stringify(t)),
                      r ? 1 : 0,
                      n,
                      o,
                      x,
                      Le(i),
                      P,
                      I,
                      Me,
                      je,
                      (a && Le(a)) || "",
                      s ? 1 : 0,
                      c,
                      b,
                      w,
                      k,
                      S,
                      T,
                      A,
                      0,
                      m ? 1 : 0,
                      _,
                      n,
                      l,
                      f,
                      p,
                      d,
                      g,
                      v,
                      y,
                    ]
                      .map(Re(1024))
                      .join(",");
                  h.reportKeyValue({ key: "WeAppOperateWXData", value: E });
                }, 0);
            }
            var Ne = 0,
              We = [
                "webapi_getuserinfo",
                "webapi_getwerunstep_history",
                "subscribemsg",
                "webapi_getfrienduserstorage",
                "webapi_getgroupuserstorage",
                "webapi_game_potential_friends",
                "webapi_getuserinteractivedata",
                "webapi_setselfuserstorage",
                "webapi_modifyfriendinteractivedata",
                "webapi_getuserstorageallappkey",
                "webapi_getshareinfo_byopengid",
                "webapi_getuserinfo_byopenid",
                "webapi_opengameinfo_getfriendsuserdata",
              ],
              Fe = [
                "webapi_getuserinfo",
                "webapi_getuserallappauth",
                "webapi_getadvert",
                "webapi_getshareinfo",
                "webapi_getuserprofile",
              ],
              $e = ["qbase_commapi", "webapi_botdemo"],
              Be = (e = {}, t = {}, ...r) => {
                var n = Object.assign({}, e);
                n._isFromBaseOperateWXData = !0;
                var o = t.beforeAll,
                  i = t.beforeSuccess,
                  a = t.beforeFail,
                  s = n.data && n.data.api_name;
                We.includes(s)
                  ? (n.requestInQueue = !0)
                  : (n.requestInQueue = !1),
                  Fe.includes(s) ? (n.isImportant = !0) : (n.isImportant = !1),
                  $e.includes(n.data && n.data.api_name) && (n.keepAlive = !0);
                var c = {
                  isSuccess: void 0,
                  WXDataApiName: s,
                  argument: n,
                  invokeTime: Date.now(),
                  requestInQueue: n.requestInQueue,
                  requestingCount: ++Ne,
                };
                Se(
                  "operateWXData",
                  n,
                  {
                    beforeAll(e) {
                      var r = Date.now();
                      Ne--, (c.costTime = r - c.invokeTime);
                      try {
                        if (
                          (e && e.data && e.data.data
                            ? (c.result = JSON.stringify(e.data))
                            : (c.result = e.data),
                          e.clientInfo && "object" == typeof e.clientInfo)
                        ) {
                          var n = e.clientInfo;
                          delete e.clientInfo,
                            Object.keys(n).forEach((e) => {
                              c[e] = n[e];
                            }),
                            (c.cost1 = n.wxdataQueueTimestamp - c.invokeTime),
                            (c.cost2 =
                              n.wxdataDequeueTimestamp -
                              n.wxdataQueueTimestamp),
                            (c.cost3 =
                              n.beginCGITimestamp - n.wxdataDequeueTimestamp),
                            (c.cost4 =
                              n.CGICallbackTimestamp - n.beginCGITimestamp),
                            (c.cost5 =
                              n.wxlibCallbackTimestamp -
                              n.CGICallbackTimestamp),
                            (c.cost6 = r - n.wxlibCallbackTimestamp);
                        }
                      } catch (e) {
                        _.error(e);
                      }
                      "function" == typeof o && o.call(t, e);
                    },
                    beforeSuccess(e) {
                      (c.isSuccess = !0),
                        n.data.data &&
                          n.data.data.__wxdataUseProfile__ &&
                          (e.__wxdataProfileInfo = c),
                        "function" == typeof i && i.call(t, e),
                        De(c);
                    },
                    beforeFail(e) {
                      (c.isSuccess = !1),
                        (c.errMsg = e.errMsg),
                        n.data.data &&
                          n.data.data.__wxdataUseProfile__ &&
                          (e.__wxdataProfileInfo = c),
                        "function" == typeof a && a.call(t, e),
                        De(c);
                    },
                  },
                  ...r
                );
              },
              Ue = o(874),
              Ge = (() => JSON.parse)(),
              Ze =
                (e) =>
                ({
                  apiName: t,
                  reqData: r,
                  sdkApiName: n,
                  pluginId: o,
                  success: i,
                  fail: a,
                  complete: s,
                  fromComponent: c = !1,
                  withCredentials: l = !1,
                  showConfirm: u = !1,
                } = {}) => {
                  if (
                    Ie(
                      "operateWXData",
                      { apiName: t, success: i, fail: a, complete: s },
                      { apiName: "" }
                    )
                  ) {
                    var f = { success: i, fail: a, complete: s };
                    n = n || "operateWXData";
                    var p = { api_name: t, data: r || {}, operate_directly: e };
                    "string" == typeof o && (p.plugin_appid = o),
                      !0 === c && (p.from_component = !0),
                      !0 === l && (p.with_credentials = !0),
                      !0 === u && (p.show_confirm = !0),
                      Be(
                        {
                          data: p,
                          success(t) {
                            if ("string" == typeof t.data)
                              try {
                                t.data = Ge(t.data);
                              } catch (e) {
                                return void Ee(
                                  n,
                                  f,
                                  `json parse error, json="${t.data}"`
                                );
                              }
                            var { data: r } = t;
                            delete t.data;
                            var {
                              data: o,
                              encryptedData: a,
                              iv: c,
                              cloud_id: l,
                              err_no: u,
                              signature: p,
                            } = r;
                            if (e)
                              void 0 !== o && (t.rawData = o), (t.respData = r);
                            else if ("string" == typeof o)
                              try {
                                t.data = Ge(o);
                              } catch (e) {
                                return void Ee(
                                  n,
                                  f,
                                  `json parse error, json="${o}"`
                                );
                              }
                            else t.data = {};
                            p && (t.signature = p),
                              a &&
                                ((t.encryptedData = a),
                                (t.iv = c),
                                l && (t.cloudID = l)),
                              "number" == typeof u && 0 !== u
                                ? Ee(n, f, u)
                                : ("function" == typeof i && i(t),
                                  "function" == typeof s && s(t));
                          },
                          fail(e) {
                            "function" == typeof a && a(e),
                              "function" == typeof s && s(e);
                          },
                        },
                        {
                          beforeAll(e) {
                            "operateWXData" !== n &&
                              (e.errMsg = e.errMsg.replace("operateWXData", n));
                          },
                        }
                      );
                  }
                },
              qe = Ze(!1),
              He = (0, Ue.Fr)(qe),
              Ve = (() => Object.assign)();
            function Ke(e, t, r = () => {}, n = () => {}) {
              return (o = {}) => {
                var { success: i, fail: a } = Oe(o, e);
                qe({
                  apiName: t,
                  reqData: r(o) || {},
                  sdkApiName: e,
                  success(e) {
                    (e.rawDataObject = e.data),
                      delete e.data,
                      Ve(e, e.rawDataObject),
                      n(e),
                      delete e.rawDataObject,
                      i(e);
                  },
                  fail: a,
                });
              };
            }
          },
          700: (e, t, r) => {
            "use strict";
            r.d(t, { n: () => s });
            var n = r(580),
              o = r(186),
              i = {},
              a = [
                "onGameLiveStateChange",
                "onAppEnterForeground",
                "onAppEnterBackground",
                "onWebviewFinishLoad",
                "onWebInvokeAppService",
                "WEB_INVOKE_APPSERVICE",
              ],
              s = (e, t) => {
                var r = (0, o.s)(`WeixinJSBridge-${e}`);
                i[e] ||
                  ((0, n.j)(e, (...t) => {
                    r.emit(...t),
                      ((e, ...t) => {
                        if (
                          "undefined" != typeof __IS_MINIGAME_LIVE_SUB_PACKAGE__
                        ) {
                          if (!a.includes(e)) return;
                          var {
                            acceptSyncMainPackageNativeEventFromSubPackage: r,
                          } = __appServiceSDK__;
                          r(e, ...t);
                        }
                      })(e, ...t);
                  }),
                  (i[e] = !0)),
                  r.internalOnMethod(t);
              };
          },
          765: (e, t, r) => {
            "use strict";
            r.d(t, { $: () => a, T: () => s });
            var n = r(78),
              o = (r(481), r(6)),
              i = r(777),
              a = (e = {}) => {
                (0, n.r3)("readCompressedFile", e, {
                  filePath: "",
                  compressionAlgorithm: "",
                }) && (0, n.IN)("readCompressedFile", e);
              },
              s = ({ filePath: e, compressionAlgorithm: t } = {}) => {
                if (!(0, o.HD)(e)) throw new i.iZ(`invalid filePath: ${e}`);
                if (!(0, o.HD)(t))
                  throw new i.iZ(`invalid compressionAlgorithm: ${t}`);
                var r, a;
                if (
                  ((0, n.IN)("readCompressedFileSync", {
                    filePath: e,
                    compressionAlgorithm: t,
                    success(e) {
                      r = e.data;
                    },
                    fail(e) {
                      a = e.errMsg;
                    },
                  }),
                  a)
                )
                  throw new Error(a);
                return r;
              };
          },
          976: (e, t, r) => {
            "use strict";
            r.d(t, { N: () => h, p: () => d });
            var n = r(78),
              o = r(578),
              i = r(481),
              a = r(8),
              s = r(632),
              c = r(102),
              l = r(560),
              u = r(6),
              f = r(912),
              p = !1;
            s.Z.onReady(() => {
              var e = i.Z.fs;
              if (e && e.FileReader) {
                var t = !1,
                  r = a.cj
                    ? "clicfg_appbrand_ios_native_readfile"
                    : "clicfg_appbrand_native_readfile";
                (0, c.b)({
                  experimentId: r,
                  experimentType: "Expt",
                  success: (e) => {
                    e &&
                      1 === Number(e.testConfig) &&
                      ((0, l.Tk)(/readFile(?:Sync)?$/, 1), (t = !0));
                  },
                  fail(e) {},
                });
                var n = (0, o.J)("bindingReadFile");
                (p = t || n),
                  _.info(
                    `${
                      p ? "binding" : "jsapi"
                    } readfile, abtest: ${t}, permission: ${n}`
                  );
              }
            });
            var d = (e = {}) => {
                if ((0, n.r3)("readFile", e, { filePath: "" }))
                  if ((0, u.o8)(e.encoding) || (0, u.HD)(e.encoding))
                    if ((0, u.o8)(e.position) || (0, u.hj)(e.position))
                      if ((0, u.o8)(e.length) || (0, u.hj)(e.length))
                        if (p) {
                          var t,
                            r = i.Z.fs;
                          ((t = e.workerId
                            ? new r.FileReader(e.workerId)
                            : new r.FileReader()).onerror = (t) =>
                            (0, n.YG)("readFile", e, t)),
                            (t.onread = (t) =>
                              (0, n.FE)({
                                name: "readFile",
                                args: e,
                                res: { data: t },
                              }));
                          var o = {};
                          Object.keys(e).forEach((t) => {
                            var r = e[t];
                            ["success", "fail", "complete"].includes(t) ||
                              (o[t] = r);
                          }),
                            t.read(o);
                        } else (0, n.IN)("readFile", e);
                      else
                        (0, n.YG)("readFile", e, `invalid length: ${e.length}`);
                    else
                      (0, n.YG)(
                        "readFile",
                        e,
                        `invalid position: ${e.position}`
                      );
                  else
                    (0, n.YG)("readFile", e, `invalid encoding: ${e.encoding}`);
              },
              h = (e, t, r, o, a) => {
                if (!e || !(0, u.HD)(e))
                  throw new f.i(`invalid filePath: ${e}`);
                if (!(0, u.o8)(t) && !(0, u.HD)(t))
                  throw new f.i(`invalid encoding: ${t}`);
                if (!(0, u.o8)(r) && !(0, u.hj)(r))
                  throw new f.i(`invalid position: ${r}`);
                if (!(0, u.o8)(o) && !(0, u.hj)(o))
                  throw new f.i(`invalid length: ${o}`);
                if (p) {
                  var s = i.Z.fs;
                  try {
                    return a ? s.readFileSync(e, t, a) : s.readFileSync(e, t);
                  } catch (l) {
                    throw new Error(l);
                  }
                }
                var c, l;
                if (
                  ((0, n.IN)("readFileSync", {
                    filePath: e,
                    encoding: t,
                    position: r,
                    length: o,
                    success(e) {
                      c = e.data;
                    },
                    fail(e) {
                      l = e.errMsg;
                    },
                  }),
                  l)
                )
                  throw new Error(l);
                return c;
              };
          },
          874: (e, t, r) => {
            "use strict";
            r.d(t, {
              Av: () => f,
              Fr: () => c,
              Y6: () => a,
              v7: () => u,
              vB: () => l,
            });
            var n = r(632),
              o = r(8),
              i = r(6);
            function a(e) {
              return "string" == typeof e
                ? e.length
                : "object" == typeof e &&
                  null !== e &&
                  "number" == typeof e.byteLength
                ? e.byteLength
                : 0;
            }
            var s = (() => Object.assign)();
            function c(e) {
              return (t = {}) =>
                new Promise((r, n) => {
                  e(s(t, { success: r, fail: n }));
                });
            }
            function l() {
              return o.gm ? !n.Z.urlCheck : !0 === n.Z.debug;
            }
            function u(e, t) {
              return t.reduce(
                (t, r) => ((0, i.o8)(e[r]) || (t[r] = e[r]), t),
                {}
              );
            }
            function f() {
              return (
                n.Z.appLaunchInfo && "singlePage" === n.Z.appLaunchInfo.mode
              );
            }
          },
          100: (e, t, r) => {
            "use strict";
            r.d(t, { p: () => i });
            var n = r(347),
              o = [],
              i = (e) => {
                o.push(e);
              };
            n.U.on("appServiceMessage", (e) => {
              o.forEach((t) => {
                "function" == typeof t && t(e);
              });
            });
          },
          128: (e, t, r) => {
            "use strict";
            r.d(t, { V: () => n, o: () => o });
            var n = (e) => {
                (e = { data: e, __inner_postmsg_flag__: !0 }),
                  f.postMsgToAppService(e);
              },
              o = (e) => {
                n(e);
              };
          },
          359: (e, r, n) => {
            "use strict";
            n.r(r),
              n.d(r, {
                createSharedArrayBuffer: () => f.Y2,
                onMessage: () => l.p,
                postMessage: () => u.o,
              });
            var o = n(632),
              i = n(554),
              l = n(100),
              u = n(128),
              f = n(33);
            (n.g.Reporter = h),
              (n.g.__errorTracer__ = d),
              (n.g._WebAssembly = i._WebAssembly),
              (n.g.Foundation = a),
              (n.g.WXConfig = o.Z),
              (n.g.wxConsole = y),
              (n.g.wxNativeConsole = _),
              (n.g.wxPerfConsole = m),
              (n.g.__libVersionInfo__ = t),
              (n.g.wxRunOnDebug = s),
              (n.g.WeixinJSBridge = c);
          },
          554: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { _WebAssembly: () => l });
            var n = r(347),
              o = r(481),
              i = r(976),
              a = r(8),
              s = r(765),
              c = null;
            (c = f.WebAssembly),
              f.WebAssembly
                ? (c = f.WebAssembly)
                : o.Z.WebAssembly
                ? (c = o.Z.WebAssembly)
                : "undefined" != typeof WebAssembly && (c = WebAssembly),
              c &&
                (globalThis.WXWebAssembly = {
                  Table: c.Table,
                  Memory: c.Memory,
                  Global: c.Global,
                  Instance: c.Instance,
                  instantiate(e, t = {}) {
                    var r = n.q.pluginId;
                    return (
                      r &&
                        "string" == typeof e &&
                        (0 === e.indexOf(`__plugin__/${r}/`) ||
                          (e = `__plugin__/${r}/${(e = e.replace(
                            /^\//,
                            ""
                          ))}`)),
                      "string" != typeof e
                        ? Promise.reject(new Error("path must be a string"))
                        : /^(wxfile|https?):/.test(e)
                        ? Promise.reject(new Error("invalid file path"))
                        : new Promise((r, n) => {
                            if (a.cj || a.wZ) {
                              var o = c.instantiate(e, t);
                              if (a.wZ && "function" == typeof o.then) {
                                var l = !1;
                                o.then(() => {
                                  l = !0;
                                });
                                var u = () => {
                                  setTimeout(() => {
                                    l || u();
                                  }, 5);
                                };
                                u();
                              }
                              r(o);
                            } else {
                              var f = i.p;
                              /\.br$/.test(e) && !a.DD && (f = s.$),
                                f({
                                  compressionAlgorithm: "br",
                                  filePath: e,
                                  success(e) {
                                    c.instantiate(e.data, t).then(
                                      (e) => {
                                        r(e);
                                      },
                                      (e) => {
                                        n(e);
                                      }
                                    );
                                  },
                                  fail({ errMsg: e }) {
                                    n(new Error(e.replace(/^\w+:fail\s*/, "")));
                                  },
                                });
                            }
                          })
                    );
                  },
                });
            var l = {
              Table: c.Table,
              Memory: c.Memory,
              Global: c.Global,
              Instance: c.Instance,
              compile: c.compile,
              compileStreaming: c.compileStreaming,
              instantiateStreaming: c.instantiateStreaming,
              validate: c.validate,
              CompileError: c.CompileError,
              LinkError: c.LinkError,
              Module: c.Module,
              RuntimeError: c.RuntimeError,
              instantiate: (e, t, r) => Promise.resolve(c.instantiate(e, t, r)),
            };
          },
          931: (e, t, r) => {
            "use strict";
            r.r(t);
            var n = r(128),
              o = r(6);
            var i = {
              String: 0,
              NaN: "<NaN>",
              Infinity: (e) => (e > 0 ? "<Infinity>" : "<-Infinity>"),
              Number: 0,
              Boolean: 0,
              Null: 0,
              Undefined: "<Undefined>",
              Function: (e) =>
                "" === e.name ? "<Function>" : `<Function: ${e.name}>`,
              Date: (e) => `<Date: ${e.toJSON()}>`,
              RegExp: (e) => `<RegExp: ${e.toString()}>`,
              Error: (e) =>
                `<${e.name}: ${e.message}>${e.stack ? "\n" + e.stack : ""}`,
              Symbol: (e) => `<Symbol: ${e.toString()}>`,
              Promise: "<Promise>",
              Map: (e) => `<Map: size=${e.size}>`,
              WeakMap: "<WeakMap>",
              Set: (e) => `<Set: size=${e.size}>`,
              WeakSet: "<WeakSet>",
              ArrayBuffer: (e) => `<ArrayBuffer: byteLength=${e.byteLength}>`,
              DataView: (e) =>
                `<DataView: byteLength=${e.byteLength}, byteOffset=${e.byteOffset}>`,
              TypedArray: (e) =>
                `<${
                  e.constructor && e.constructor.name
                    ? e.constructor.name
                    : "TypedArray"
                }: byteLength=${e.byteLength}, length=${e.length}>`,
            };
            function a(e) {
              var t = (function (e) {
                var t = (0, o.Em)(e);
                if ("Number" === t) {
                  if ((0, o.i2)(e)) return "NaN";
                  if ((0, o.AT)(e)) return "Infinity";
                } else if ("Object" === t) {
                  if ((0, o.Ft)(e)) return "Null";
                } else if (t.endsWith("Array") && "Array" !== t && (0, o.fU)(e))
                  return "TypedArray";
                return t;
              })(e);
              return t in i
                ? i[t]
                  ? (0, o.mf)(i[t])
                    ? [i[t](e), !0]
                    : [i[t], !0]
                  : [e, !0]
                : [null, !1];
            }
            function s(e) {
              var t = new WeakMap(),
                r = 0;
              return (function e(n, i) {
                var s,
                  [c, l] = a(n);
                return l
                  ? c
                  : r > 3e3
                  ? "<Hidden>"
                  : t.has(n)
                  ? `<Circular: ${t.get(n)}>`
                  : (t.set(n, i),
                    r++,
                    (0, o.kJ)(n)
                      ? n.map((t, r) => e(t, `${i}[${r}]`))
                      : ((s = {}),
                        Object.keys(n).forEach((t) => {
                          s[t] = e(n[t], `${i}.${t}`);
                        }),
                        s));
              })(e, "@");
            }
            function c(e) {
              try {
                return (e = Array.prototype.slice.call(e)).map(s);
              } catch (e) {
                return void console.warn(
                  "[console] This object can not be logged"
                );
              }
            }
            var l = "log",
              u = "info",
              f = "warn",
              p = "error",
              d = "debug",
              h = "time",
              g = "timeEnd";
            var v = r(632),
              y = () => {};
            (y = function (e, t) {
              var r = (function (e, t, r = !0) {
                if (r || e === f || e === p) {
                  var n = c(t);
                  if (void 0 !== n) return { level: e, logs: n, __log__: !0 };
                }
              })(e, t, "devtools" === v.Z.platform || v.Z.debug);
              r && (0, n.V)(r);
            }),
              (globalThis.console = {
                log() {
                  y(l, arguments);
                },
                info() {
                  y(u, arguments);
                },
                warn() {
                  y(f, arguments);
                },
                error() {
                  y(p, arguments);
                },
                debug() {
                  y(d, arguments);
                },
                time() {
                  y(h, arguments);
                },
                timeEnd() {
                  y(g, arguments);
                },
                group() {},
                groupEnd() {},
              });
          },
          854: (e, t, r) => {
            "use strict";
            r.r(t);
            var n,
              o = r(347),
              i = globalThis,
              s = function (e) {
                e &&
                  (void 0 === n && (n = i.require),
                  e.startsWith("/") && (e = e.substring(1)),
                  n(e));
              },
              c = r(33),
              l = 0,
              p = {},
              d = {};
            (0, c.En)((e) => {
              var t = 0,
                r = 0;
              Object.assign(e, {
                new(e) {
                  var r = ++t + l;
                  return (
                    (p[r] = e),
                    f.postMsgToAppService(
                      { __cmd__: "setSharedBuffer", __buffer__: e, __id__: r },
                      !1
                    ),
                    r
                  );
                },
                get: (e) => p[e],
                destroy(e) {
                  delete p[e];
                },
                Lock(e, t) {
                  var n = ++r + l;
                  return (
                    (d[n] = t),
                    f.postMsgToAppService({
                      __cmd__: "lockSharedBuffer",
                      __sid__: e,
                      __lid__: n,
                    }),
                    n
                  );
                },
                Unlock(e, t) {
                  f.postMsgToAppService({
                    __cmd__: "unlockSharedBuffer",
                    __sid__: e,
                    __lid__: t,
                  });
                },
              });
            }),
              f.onAppServiceMsg((e) => {
                (e = u.unpackPostMessage(e)),
                  (e = (0, c.IF)(e)).__inner_postmsg_flag__ && (e = e.data),
                  e && e.__cmd__
                    ? "requireScript" === e.__cmd__
                      ? ((o.q.pluginId =
                          e.__options__ && e.__options__.pluginId),
                        (o.q.workerId =
                          e.__options__ && e.__options__.workerId),
                        (l = Number(`.${e.__id__}`)),
                        s(e.__script__))
                      : "setSharedBuffer" === e.__cmd__
                      ? (p[e.__id__] = e.__buffer__)
                      : "lockSharedBuffer" === e.__cmd__ &&
                        "function" == typeof d[e.__lid__] &&
                        (d[e.__lid__](), delete d[e.__lid__])
                    : o.U.emit("appServiceMessage", e);
              }),
              a.onFrameworkError((e) => {
                "function" == typeof __wxSourceMapRetrace__ &&
                  (e = __wxSourceMapRetrace__(e)),
                  console.error("[worker] Uncaught FrameworkError", e);
              }),
              a.onUnhandledError((e) => {
                "function" == typeof __wxSourceMapRetrace__ &&
                  (e = __wxSourceMapRetrace__(e)),
                  console.error("[worker] Uncaught", e);
              }),
              a.onUnhandledRejection((e = {}) => {
                "function" == typeof __wxSourceMapRetrace__ &&
                  (e.reason = __wxSourceMapRetrace__(e.reason)),
                  console.error("[worker] Uncaught (in promise)", e.reason);
              });
          },
          591: (e, t, r) => {
            r(931),
              r(854),
              r(554),
              !0 === a.env.isWXLibWorker
                ? (e.exports = r(359))
                : "function" == typeof r.g.workerInvokeJsApi &&
                  (e.exports = r(845)),
              p.hijack();
          },
          347: (e, t, r) => {
            "use strict";
            r.d(t, { U: () => n, q: () => o });
            var n = new (r(211).Z)(),
              o = { pluginId: "", workerId: "" };
          },
          845: (e, r, n) => {
            "use strict";
            n.r(r),
              n.d(r, {
                connectSocket: () => ni,
                createInnerAudioContext: () => zn,
                createSharedArrayBuffer: () => Qn.Y2,
                downloadFile: () => zo,
                env: () => ti,
                getFileSystemManager: () => Ko,
                onMessage: () => eo.p,
                postMessage: () => to.o,
                request: () => tr,
                uploadFile: () => ur,
              });
            var i = n(632),
              s = {};
            i.Z.onReady(() => {
              "object" == typeof i.Z.env &&
                (s.USER_DATA_PATH = i.Z.env.USER_DATA_PATH);
            });
            var c = s,
              l = { USER_DATA_PATH: null, CLIENT_DATA_PATH: null };
            i.Z.onReady(() => {
              "object" == typeof i.Z.env && Object.assign(l, i.Z.env);
            });
            var u = l,
              f = n(8),
              p = o.objectSpread2,
              g = n.n(p),
              v = n(78),
              y = n(56),
              m = (JSON.parse, JSON.stringify, n(186)),
              b = n(281),
              w = "",
              k = !1,
              S = (0, m.s)("networkstatusChange"),
              T = (0, m.s)("networkWeakChange"),
              A = (0, m.s)("networkTypeReady"),
              x = (e) => {
                (0, v.IN)("getNetworkType", e);
              },
              P = S.onMethod,
              I = (S.offMethod, T.onMethod, T.offMethod, () => w),
              E = (A.onMethod, () => k);
            "undefined" != typeof IS_SDK_PACKAGE ||
              ((0, v.jQ)("onNetworkStatusChange", (e = {}) => {
                (w = e.networkType),
                  (b.Z.currentNetworkType = w),
                  S.emit(e),
                  (0, v.nY)("onNetworkStatusChange", e);
              }),
              (0, v.jQ)("onNetworkWeakChange", (e = {}) => {
                T.emit(e);
              })),
              i.Z.onReady(() => {
                i.Z.networkType && (w = i.Z.networkType),
                  x({
                    success(e) {
                      (w = e.networkType),
                        (b.Z.currentNetworkType = w),
                        (k = e.hasSystemProxy),
                        A.emit(w);
                    },
                  });
              });
            var C = {},
              O = 0,
              M = "",
              j = n(125),
              R = 0,
              L = [],
              D = Math.random,
              N = () => {
                var e = JSON.stringify(
                  {
                    business: "mmbizwxaservicequality",
                    dataArray: L,
                    appType: h.getAppType(),
                  },
                  null,
                  2
                );
                (0, v.IN)("reportRealtimeAction", { actionData: e }), (L = []);
              },
              W = (e) => {
                var t = "";
                return (
                  Object.keys(e).forEach((r, n) => {
                    try {
                      var o = `${encodeURIComponent(r)}=${encodeURIComponent(
                        e[r]
                      )}`;
                      0 !== n && (t += "&"), (t += o);
                    } catch (e) {}
                  }),
                  t
                );
              },
              F = (
                e,
                t,
                r,
                n,
                o,
                i,
                a,
                s = 0,
                c = 0,
                l = {},
                u = 0,
                p = {},
                d,
                g = !0
              ) => {
                t.length > 1024 && (t = t.substring(0, 1024));
                var v = "",
                  y = "",
                  m = 0,
                  _ = "";
                if (
                  ((0, f.aI)()
                    ? ((y = W(C)), (m = O), (_ = M))
                    : ((m = b.Z.scene), (_ = b.Z.sceneNote)),
                  void 0 !== j.hr)
                ) {
                  var w = j.hr.getCurrentPages();
                  if (w && w.length > 0) {
                    var k = w[w.length - 1];
                    k &&
                      ((v = k.route),
                      (y =
                        k.__displayReporter &&
                        k.__displayReporter.showOptions &&
                        k.__displayReporter.showOptions.query));
                  }
                }
                var S = null == r ? void 0 : r.errno;
                !S &&
                  null != r &&
                  r.errMsg &&
                  /超时|timeout/.test(r.errMsg) &&
                  (S = 5);
                var T = JSON.stringify(p),
                  A = [
                    e,
                    t,
                    r,
                    n,
                    o,
                    h.getAppType(),
                    i,
                    s,
                    I(),
                    v,
                    y,
                    c,
                    W(l),
                    m,
                    _,
                    d,
                    S,
                    u,
                    T,
                  ]
                    .map(encodeURIComponent)
                    .join(","),
                  x = !1;
                if (
                  (n < 5e3 && 1 == r ? D() < 0.01 && (x = !0) : (x = !0),
                  g || (x = !1),
                  x)
                ) {
                  var P = [
                    e,
                    t,
                    r,
                    n,
                    o,
                    h.getAppType(),
                    i,
                    s,
                    I(),
                    v,
                    y,
                    c,
                    W(l),
                    m,
                    _,
                    S,
                    u,
                    T,
                  ]
                    .map(encodeURIComponent)
                    .join(",");
                  h.reportKeyValue({ key: "NetworkAPI2", value: P });
                }
                h.reportKeyValue({ key: "NetworkAPI", value: A }),
                  h.reportIDKey({ key: `${e}_${1 === r ? "ok" : "fail"}` }),
                  L.push(
                    [
                      e,
                      t,
                      r,
                      i || "",
                      n,
                      o,
                      I(),
                      a ? "1" : "0",
                      h.getAppType(),
                      s,
                    ]
                      .map((e) => {
                        var t;
                        try {
                          t = encodeURIComponent(e);
                        } catch (r) {
                          t = e;
                        }
                        return t;
                      })
                      .join(",")
                  ),
                  Date.now() - R >= 6e4 &&
                    ((R = Date.now()), setTimeout(N, 6e4));
              },
              $ = n(6);
            class B {
              constructor(e = "", t = !1) {
                (this.type = ""),
                  (this.surround = !1),
                  (this.eventMap = new Map()),
                  (this.type = e),
                  (this.surround = t);
              }
              on(e, t) {
                (0, $.mf)(t)
                  ? this.eventMap.has(e)
                    ? this.eventMap.get(e).add(t)
                    : this.eventMap.set(e, new Set([t]))
                  : console.error("EmitterError: callback must be a function");
              }
              off(e, t) {
                var r = this.eventMap.get(e);
                "function" != typeof t
                  ? null == r || r.clear()
                  : null == r || r.delete(t);
              }
              emit(e, ...t) {
                var r = [...(this.eventMap.get(e) || [])],
                  n = `at ${this.type}${e} callback function`;
                r.forEach((e) =>
                  this.surround
                    ? ((e, t, ...r) => {
                        if (void 0 !== d) d.surroundThirdByTryCatch(e, t)(...r);
                        else if ("undefined" != typeof __subContextEngine__)
                          __subContextEngine__.surroundThirdByTryCatch(
                            e,
                            t
                          )(...r);
                        else
                          try {
                            e(...r);
                          } catch (e) {
                            console.error(
                              `thirdScriptError\n${
                                null == e ? void 0 : e.message
                              };${t}`
                            ),
                              console.error(e);
                          }
                      })(e, n, ...t)
                    : e(...t)
                );
              }
              removeAllListeners(e) {
                this.off(e);
              }
              getListenersLength(e) {
                var t;
                return (
                  (null === (t = this.eventMap.get(e)) || void 0 === t
                    ? void 0
                    : t.size) || 0
                );
              }
            }
            var U = n(874),
              G = n(976),
              Z = [
                "ascii",
                "base64",
                "binary",
                "hex",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "utf8",
                "utf-8",
                "latin1",
              ];
            class q {
              constructor({
                mode: e,
                size: t,
                lastAccessedTime: r,
                lastModifiedTime: n,
              }) {
                (this.mode = e),
                  (this.size = t),
                  (this.lastAccessedTime = r),
                  (this.lastModifiedTime = n);
              }
              _checkModeProperty(e) {
                return (61440 & this.mode) === e;
              }
              isDirectory() {
                return this._checkModeProperty(16384);
              }
              isFile() {
                return this._checkModeProperty(32768);
              }
            }
            var H = (e, t) => {
                var r = !0;
                if (
                  ([
                    "mode",
                    "size",
                    "lastAccessedTime",
                    "lastModifiedTime",
                  ].forEach((t) => {
                    r = r && void 0 !== e[t];
                  }),
                  r)
                )
                  (e.stats = new q(e)),
                    delete e.mode,
                    delete e.size,
                    delete e.lastAccessedTime,
                    delete e.lastModifiedTime;
                else if (
                  e.stats &&
                  1 === Object.keys(e.stats).length &&
                  e.stats[""]
                )
                  e.stats = new q(e.stats[""]);
                else {
                  var n = [],
                    o = e.stats;
                  f.wZ && ((o = e), n.push({ path: "/", stats: V(t) })),
                    Object.keys(o).forEach((e) => {
                      if ("errMsg" !== e) {
                        var t = o[e];
                        "" === e && (e = "/"),
                          n.push({ path: e, stats: new q(t) }),
                          delete o[e];
                      }
                    }),
                    (e.stats = n);
                }
              },
              V = (e, t = !1) => {
                if (!e || "string" != typeof e)
                  throw new Error("path must be a string");
                var r, n;
                if (
                  ((0, v.IN)("statSync", {
                    path: e,
                    recursive: t,
                    success(t) {
                      H(t, e), (r = t.stats);
                    },
                    fail(e) {
                      n = e.errMsg;
                    },
                  }),
                  n)
                )
                  throw new Error(n);
                return r;
              },
              K = "readZipEntry",
              Y = [
                "a",
                "ax",
                "a+",
                "ax+",
                "as",
                "as+",
                "r",
                "r+",
                "w",
                "wx",
                "w+",
                "wx+",
              ],
              J = n(777),
              X = null,
              z = !1;
            function Q() {
              if (!z) throw new Error("WeixinArrayBuffer not ready");
              return X;
            }
            a.onLoad(() => {
              (X = n.g.WeixinArrayBuffer), (z = !0);
            });
            var ee = n(765),
              te = {
                saveFile: (e) => {
                  (0, v.r3)("saveFile", e, { tempFilePath: "" }) &&
                    (0, v.IN)("saveFile", e);
                },
                saveFileSync: (e, t) => {
                  if (!e || "string" != typeof e)
                    throw new Error("tempFilePath must be a string");
                  if (void 0 !== t && "string" != typeof t)
                    throw new Error("filePath must be a string");
                  var r, n;
                  if (
                    ((0, v.IN)("saveFileSync", {
                      tempFilePath: e,
                      filePath: t,
                      success(e) {
                        n = e.savedFilePath;
                      },
                      fail(e) {
                        r = e.errMsg;
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                  return n;
                },
                getSavedFileList: (e = {}) => {
                  (0, v.IN)("getSavedFileList", e);
                },
                getSavedFileInfo: (e = {}) => {
                  (0, v.r3)("getSavedFileInfo", e, { filePath: "" }) &&
                    (0, v.IN)("getSavedFileInfo", e);
                },
                removeSavedFile: (e = {}) => {
                  (0, v.r3)("removeSavedFile", e, { filePath: "" }) &&
                    (0, v.IN)("removeSavedFile", e);
                },
                getFileInfo: (e = {}) => {
                  if ((0, v.r3)("getFileInfo", e, { filePath: "" })) {
                    if (void 0 !== e.digestAlgorithm) {
                      var t = (0, $.x7)(e, { digestAlgorithm: "" });
                      if (t)
                        return void (0, v.YG)(
                          "getFileInfo",
                          e,
                          `parameter error: ${t}`
                        );
                      if (-1 === ["md5", "sha1"].indexOf(e.digestAlgorithm))
                        return void (0, v.YG)(
                          "getFileInfo",
                          e,
                          `parameter error: invalid digestAlgorithm "${e.digestAlgorithm}"`
                        );
                    }
                    (0, v.IN)("getFileInfo", e, {});
                  }
                },
                readFile: G.p,
                readFileSync: G.N,
                writeFile: (e = {}) => {
                  (0, v.r3)("writeFile", e, { filePath: "" }) &&
                    (e.encoding && -1 === Z.indexOf(e.encoding)
                      ? (0, v.YG)(
                          "writeFile",
                          e,
                          `invalid encoding "${e.encoding}"`
                        )
                      : (0, v.IN)("writeFile", e, {}));
                },
                writeFileSync: (e, t, r) => {
                  if (!e || "string" != typeof e)
                    throw new Error("path must be a string");
                  if (r && -1 === Z.indexOf(r))
                    throw new Error(`invalid encoding "${r}"`);
                  var n;
                  if (
                    ((0, v.IN)("writeFileSync", {
                      filePath: e,
                      data: t,
                      encoding: r,
                      fail(e) {
                        n = e.errMsg;
                      },
                    }),
                    n)
                  )
                    throw new Error(n);
                },
                mkdir: (e = {}) => {
                  (0, v.r3)("mkdir", e, { dirPath: "" }) &&
                    (0, v.IN)("mkdir", e);
                },
                mkdirSync: (e, t = !1) => {
                  if (!e || "string" != typeof e)
                    throw new TypeError("dirPath must be a string");
                  var r;
                  if (
                    ((0, v.IN)("mkdirSync", {
                      dirPath: e,
                      recursive: t,
                      fail(e) {
                        r = e.errMsg;
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                },
                rmdir: (e = {}) => {
                  (0, v.r3)("rmdir", e, { dirPath: "" }) &&
                    (0, v.IN)("rmdir", e);
                },
                rmdirSync: (e, t = !1) => {
                  if (!e || "string" != typeof e)
                    throw new Error("dirPath must be a string");
                  var r;
                  if (
                    ((0, v.IN)("rmdirSync", {
                      dirPath: e,
                      recursive: t,
                      fail(e) {
                        r = e.errMsg;
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                },
                readdir: (e = {}) => {
                  (f.DD || "wxfile://" !== e.dirPath) &&
                  (!f.DD ||
                    ("wxfile://tmp" !== e.dirPath &&
                      "wxfile://tmp/" !== e.dirPath))
                    ? (0, v.r3)("readdir", e, { dirPath: "" }) &&
                      (0, v.IN)("readdir", e)
                    : (0, v.YG)("readdir", e, "path permission denied");
                },
                readdirSync: (e) => {
                  if ("wxfile://" === e) throw Error("path permission denied");
                  if (!e || "string" != typeof e)
                    throw new TypeError("dirPath must be a string");
                  var t, r;
                  if (
                    ((0, v.IN)("readdirSync", {
                      dirPath: e,
                      success(e) {
                        t = e.files;
                      },
                      fail(e) {
                        r = e.errMsg;
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                  return t;
                },
                access: (e = {}) => {
                  (0, v.r3)("access", e, { path: "" }) &&
                    (0, v.IN)("access", e);
                },
                accessSync: (e) => {
                  if (!e || "string" != typeof e)
                    throw new TypeError("path must be a string");
                  var t;
                  if (
                    ((0, v.IN)("accessSync", {
                      path: e,
                      fail(e) {
                        t = e.errMsg;
                      },
                    }),
                    t)
                  )
                    throw new Error(t);
                },
                unlink: (e = {}) => {
                  (0, v.r3)("unlink", e, { filePath: "" }) &&
                    (0, v.IN)("unlink", e);
                },
                unlinkSync: (e) => {
                  if (!e || "string" != typeof e)
                    throw new Error("filePath must be a string");
                  var t;
                  if (
                    ((0, v.IN)("unlinkSync", {
                      filePath: e,
                      fail(e) {
                        t = e.errMsg;
                      },
                    }),
                    t)
                  )
                    throw new Error(t);
                },
                stat: (e = {}) => {
                  (0, v.r3)("stat", e, { path: "" }) &&
                    (0, v.IN)("stat", e, {
                      beforeSuccess: (t) => {
                        H(t, e.path);
                      },
                    });
                },
                statSync: V,
                unzip: (e = {}) => {
                  (0, v.r3)("unzip", e, { zipFilePath: "" }) &&
                    (0, v.IN)(
                      "unzip",
                      Object.assign({}, e, { targetDirectory: e.targetPath })
                    );
                },
                copyFile: (e = {}) => {
                  (0, v.r3)("copyFile", e, { srcPath: "", destPath: "" }) &&
                    (0, v.IN)("fs_copyFile", e, {
                      beforeAll(e) {
                        e.errMsg = e.errMsg.replace(
                          "fs_copyFile:",
                          "copyFile:"
                        );
                      },
                    });
                },
                copyFileSync: (e, t) => {
                  if (!e || "string" != typeof e)
                    throw new Error("srcPath must be a string");
                  if (!t || "string" != typeof t)
                    throw new Error("destPath must be a string");
                  var r;
                  if (
                    ((0, v.IN)("fs_copyFileSync", {
                      srcPath: e,
                      destPath: t,
                      fail(e) {
                        r = e.errMsg.replace(
                          "fs_copyFileSync:",
                          "copyFileSync:"
                        );
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                },
                rename: (e = {}) => {
                  (0, v.r3)("rename", e, { oldPath: "", newPath: "" }) &&
                    (0, v.IN)("fs_rename", e, {
                      beforeAll(e) {
                        e.errMsg = e.errMsg.replace(/^fs_/, "");
                      },
                    });
                },
                renameSync: (e, t) => {
                  if (!e || "string" != typeof e)
                    throw new Error("oldPath must be a string");
                  if (!t || "string" != typeof t)
                    throw new Error("newPath must be a string");
                  var r;
                  if (
                    ((0, v.IN)("fs_renameSync", {
                      oldPath: e,
                      newPath: t,
                      fail(e) {
                        r = e.errMsg.replace(/^fs_/, "");
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                },
                appendFile: (e = {}) => {
                  (0, v.r3)("appendFile", e, { filePath: "" }) &&
                    (e.encoding && -1 === Z.indexOf(e.encoding)
                      ? (0, v.YG)(
                          "appendFile",
                          e,
                          `invalid encoding "${e.encoding}"`
                        )
                      : (0, v.IN)("fs_appendFile", e, {}));
                },
                appendFileSync: (e, t, r) => {
                  if (!e || "string" != typeof e)
                    throw new Error("path must be a string");
                  if (r && -1 === Z.indexOf(r))
                    throw new Error(`invalid encoding "${r}"`);
                  var n;
                  if (
                    ((0, v.IN)("fs_appendFileSync", {
                      filePath: e,
                      data: t,
                      encoding: r,
                      fail(e) {
                        n = e.errMsg;
                      },
                    }),
                    n)
                  )
                    throw new Error(n);
                },
                readZipEntry: (e = {}) => {
                  (0, v.r3)(K, e, { filePath: "" }) &&
                    ((0, $.o8)(e.encoding) || -1 !== Z.indexOf(e.encoding)
                      ? "all" === e.entries || Array.isArray(e.entries)
                        ? (0, v.IN)(K, e, {
                            beforeSuccess: (e) => (
                              e.entries &&
                                Object.keys(e.entries).forEach((t) => {
                                  if (
                                    (e[t] &&
                                      ((e.entries[t].data = e[t]), delete e[t]),
                                    "ok" === e.entries[t].errMsg
                                      ? (e.entries[t].errMsg =
                                          "readZipEntry:ok")
                                      : (e.entries[
                                          t
                                        ].errMsg = `readZipEntry:fail ${e.entries[t].errMsg}`),
                                    0 === t.indexOf("file:"))
                                  ) {
                                    var r = t.replace("file:", "");
                                    (e.entries[r] = e.entries[t]),
                                      delete e.entries[t];
                                  }
                                }),
                              e
                            ),
                          })
                        : (0, v.YG)(K, e, "invalid entries")
                      : (0, v.YG)(K, e, `invalid encoding "${e.encoding}"`));
                },
                open: (e = {}) => {
                  var t = Object.assign({}, e);
                  (0, v.r3)("open", e, { filePath: "" }) &&
                    (void 0 === e.flag || Y.includes(e.flag)
                      ? (void 0 === e.flag && (t.flag = "r"),
                        (0, v.IN)("open", t))
                      : (0, v.YG)("open", e, `invalid flag "${e.flag}"`));
                },
                openSync: (e = {}) => {
                  var t,
                    r,
                    { filePath: n } = e,
                    { flag: o } = e;
                  if (!n || "string" != typeof n)
                    throw new TypeError("filePath must be a string");
                  if (void 0 !== o && !Y.includes(o))
                    throw new J.iZ(`invalid flag: ${o}`);
                  if (
                    (void 0 === o && (o = "r"),
                    (0, v.IN)("openSync", {
                      filePath: n,
                      flag: o,
                      fail(e) {
                        r = e.errMsg;
                      },
                      success(e) {
                        t = e.fd;
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                  return t;
                },
                truncate: (e = {}) => {
                  (0, v.r3)("truncate", e, { filePath: "" }) &&
                    ("number" != typeof (e = Object.assign({}, e)).length &&
                      (e.length = 0),
                    (e.length = Math.floor(e.length)),
                    e.length < 0 && (e.length = 0),
                    (0, v.IN)("truncate", e, {}));
                },
                truncateSync: ({ filePath: e, length: t } = {}) => {
                  if (!e || "string" != typeof e)
                    throw new Error("filePath must be a string");
                  var r;
                  if (
                    ("number" != typeof t && (t = 0),
                    (t = Math.floor(t)) < 0 && (t = 0),
                    (0, v.IN)("truncateSync", {
                      filePath: e,
                      length: t,
                      fail(e) {
                        r = e.errMsg;
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                },
                readCompressedFile: ee.$,
                readCompressedFileSync: ee.T,
              },
              re = {
                close: (e = {}) => {
                  (0, v.r3)("close", e, { fd: "" }) && (0, v.IN)("close", e);
                },
                closeSync: ({ fd: e } = {}) => {
                  if (!e || "string" != typeof e)
                    throw new TypeError("fd must be a string");
                  var t;
                  if (
                    ((0, v.IN)("closeSync", {
                      fd: e,
                      fail(e) {
                        t = e.errMsg;
                      },
                    }),
                    t)
                  )
                    throw new Error(t);
                },
                fstat: (e = {}) => {
                  (0, v.r3)("fstat", e, { fd: "" }) &&
                    (0, v.IN)("fstat", e, {
                      beforeSuccess(e) {
                        var { mode: t, size: r } = e,
                          { lastAccessedTime: n, lastModifiedTime: o } = e;
                        n > 1617e9 && (n = Math.floor(n / 1e3)),
                          o > 1617e9 && (o = Math.floor(o / 1e3)),
                          (e.stats = new q({
                            mode: t,
                            size: r,
                            lastAccessedTime: n,
                            lastModifiedTime: o,
                          })),
                          delete e.mode,
                          delete e.size,
                          delete e.lastAccessedTime,
                          delete e.lastModifiedTime;
                      },
                    });
                },
                fstatSync: ({ fd: e } = {}) => {
                  if (!e || "string" != typeof e)
                    throw new TypeError("fd must be a string");
                  var t, r;
                  if (
                    ((0, v.IN)("fstatSync", {
                      fd: e,
                      fail(e) {
                        r = e.errMsg;
                      },
                      success(e) {
                        var { mode: r, size: n } = e,
                          { lastAccessedTime: o, lastModifiedTime: i } = e;
                        o > 1617e9 && (o = Math.floor(o / 1e3)),
                          i > 1617e9 && (i = Math.floor(i / 1e3)),
                          (t = new q({
                            mode: r,
                            size: n,
                            lastAccessedTime: o,
                            lastModifiedTime: i,
                          }));
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                  return t;
                },
                write: (e = {}) => {
                  var t = Object.assign({}, e);
                  if ((0, v.r3)("write", t, { fd: "" }))
                    if (t.encoding && -1 === Z.indexOf(t.encoding))
                      (0, v.YG)("write", t, `invalid encoding "${t.encoding}"`);
                    else {
                      if ((0, $.eP)(t.data)) {
                        if (t.data.byteLength > 10485760)
                          return void (0, v.YG)(
                            "write",
                            t,
                            "ArrayBuffer exceed size limit (10M)"
                          );
                        ("number" != typeof t.offset || t.offset < 0) &&
                          (t.offset = 0),
                          ("number" != typeof t.length || t.length < 0) &&
                            (t.length = t.data.byteLength - t.offset);
                      } else if (!(0, $.HD)(t.data))
                        return void (0, v.YG)(
                          "write",
                          t,
                          "data must be a string or ArrayBuffer"
                        );
                      "number" != typeof t.position && (t.position = void 0),
                        (0, v.IN)("write", t);
                    }
                },
                writeSync: ({
                  fd: e,
                  data: t,
                  offset: r,
                  length: n,
                  encoding: o,
                  position: i,
                } = {}) => {
                  if (!e || "string" != typeof e)
                    throw new TypeError("fd must be a string");
                  if (o && -1 === Z.indexOf(o))
                    throw new J.iZ(`invalid encoding "${o}"`);
                  if ((0, $.eP)(t)) {
                    if (t.byteLength > 10485760)
                      throw new J.iZ("ArrayBuffer exceed size limit (10M)");
                    ("number" != typeof r || r < 0) && (r = 0),
                      ("number" != typeof n || n < 0) && (n = t.byteLength - r);
                  } else if (!(0, $.HD)(t))
                    throw new TypeError("data must be a string or ArrayBuffer");
                  var a, s;
                  if (
                    ("number" != typeof i && (i = void 0),
                    (0, v.IN)("writeSync", {
                      fd: e,
                      data: t,
                      offset: r,
                      length: n,
                      encoding: o,
                      position: i,
                      fail(e) {
                        a = e.errMsg;
                      },
                      success(e) {
                        s = { bytesWritten: e.bytesWritten };
                      },
                    }),
                    a)
                  )
                    throw new Error(a);
                  return s;
                },
                read: (e = {}) => {
                  if ((0, v.r3)("read", e, { fd: "" }))
                    if ((0, $.eP)(e.arrayBuffer)) {
                      var t = Object.assign({}, e),
                        r = Q();
                      f.cj &&
                        r &&
                        r.trace &&
                        ((t.arrayBufferId = r.trace(t.arrayBuffer, "rw")),
                        delete t.arrayBuffer),
                        (0, $.hj)(t.position) && t.position < 0
                          ? (t.position = 0)
                          : (0, $.o8)(t.position) || (0, $.Ft)(t.position)
                          ? (t.position = null)
                          : (0, $.hj)(t.position) || (t.position = 0);
                      var n = Number(t.length);
                      Number.isNaN(n) ? (t.length = 0) : (t.length = n);
                      var o = Number(t.offset);
                      Number.isNaN(o) ? (t.offset = 0) : (t.offset = o),
                        (0, v.IN)("read", t, {
                          beforeSuccess(t) {
                            t.arrayBuffer = e.arrayBuffer;
                          },
                          afterAll() {
                            f.cj &&
                              r &&
                              r.untrace &&
                              r.untrace(t.arrayBufferId);
                          },
                        });
                    } else
                      (0, v.YG)(
                        "FileSystemManager.read",
                        e,
                        "arrayBuffer must be an ArrayBuffer"
                      );
                },
                readSync: (e = {}) => {
                  var { fd: t, arrayBuffer: r } = e;
                  if (!t || "string" != typeof t)
                    throw new TypeError("fd must be a string");
                  if (!(0, $.eP)(r))
                    throw new TypeError("arrayBuffer must be an ArrayBuffer");
                  var n = Object.assign({}, e),
                    o = Q();
                  f.cj &&
                    o &&
                    o.trace &&
                    ((n.arrayBufferId = o.trace(n.arrayBuffer, "rw")),
                    delete n.arrayBuffer),
                    (0, $.hj)(n.position) && n.position < 0
                      ? (n.position = 0)
                      : (0, $.o8)(n.position) || (0, $.Ft)(n.position)
                      ? (n.position = null)
                      : (0, $.hj)(n.position) || (n.position = 0);
                  var i = Number(n.length);
                  Number.isNaN(i) ? (n.length = 0) : (n.length = i);
                  var a,
                    s,
                    c = Number(n.offset);
                  if (
                    (Number.isNaN(c) ? (n.offset = 0) : (n.offset = c),
                    (0, v.IN)(
                      "readSync",
                      g()(
                        g()({}, n),
                        {},
                        {
                          fail(e) {
                            s = e.errMsg;
                          },
                          success(e) {
                            a = { bytesRead: e.bytesRead, arrayBuffer: r };
                          },
                        }
                      )
                    ),
                    f.cj && o && o.untrace && o.untrace(n.arrayBufferId),
                    s)
                  )
                    throw new Error(s);
                  return a;
                },
                ftruncate: (e = {}) => {
                  (0, v.r3)("ftruncate", e, { fd: "" }) &&
                    ("number" != typeof (e = Object.assign({}, e)).length &&
                      (e.length = 0),
                    (e.length = Math.floor(e.length)),
                    e.length < 0 && (e.length = 0),
                    (0, v.IN)("ftruncate", e));
                },
                ftruncateSync: ({ fd: e, length: t } = {}) => {
                  if (!e || "string" != typeof e)
                    throw new Error("fd must be a string");
                  var r;
                  if (
                    ("number" != typeof t && (t = 0),
                    (t = Math.floor(t)) < 0 && (t = 0),
                    (0, v.IN)("ftruncateSync", {
                      fd: e,
                      length: t,
                      fail(e) {
                        r = e.errMsg;
                      },
                    }),
                    r)
                  )
                    throw new Error(r);
                },
              },
              ne = "",
              oe = "",
              ie = "";
            i.Z.onReady(() => {
              try {
                (ne = i.Z.env.USER_DATA_PATH),
                  (oe = i.Z.env.OPEN_DATA_PATH),
                  delete i.Z.env.OPEN_DATA_PATH,
                  (ie = ne + "/__plugins__");
              } catch (e) {}
            });
            var ae = {
                saveFile: ["filePath"],
                saveFileSync: [1],
                getSavedFileList: null,
                getSavedFileInfo: null,
                removeSavedFile: null,
                getFileInfo: null,
                readFile: ["filePath"],
                readFileSync: [0],
                writeFile: ["filePath"],
                writeFileSync: [0],
                mkdir: ["dirPath"],
                mkdirSync: [0],
                rmdir: ["dirPath"],
                rmdirSync: [0],
                readdir: ["dirPath"],
                readdirSync: [0],
                access: ["path"],
                accessSync: [0],
                unlink: ["filePath"],
                unlinkSync: [0],
                stat: ["path"],
                statSync: [0],
                unzip: ["zipFilePath", "targetPath"],
                copyFile: ["srcPath", "destPath"],
                copyFileSync: [0, 1],
                rename: ["oldPath", "newPath"],
                renameSync: [0, 1],
                appendFile: ["filePath"],
                appendFileSync: [0],
                readZipEntry: ["filePath"],
                open: ["filePath"],
                openSync: ["filePath"],
                truncate: ["filePath"],
                truncateSync: ["filePath"],
                close: null,
                closeSync: null,
                fstat: null,
                fstatSync: null,
                write: null,
                writeSync: null,
                read: null,
                readSync: null,
                ftruncate: null,
                ftruncateSync: null,
                readCompressedFile: ["filePath"],
                readCompressedFileSync: [0],
              },
              se = { openSync: !0, truncateSync: !0 },
              ce = (e, t, r) =>
                "string" != typeof e ||
                (!e.startsWith("wxfile://ad") &&
                  (!(0, U.Av)() ||
                    (!e.startsWith("wxfile://usr") &&
                      !e.startsWith("http://usr"))) &&
                  ("opendata" === t
                    ? !e.startsWith(ne)
                    : "game" === t
                    ? !e.startsWith(oe)
                    : "app" === t
                    ? !e.startsWith(oe) &&
                      !e.startsWith(ie) &&
                      !e.match(/__plugin__\/wx[a-z0-9]{16}/)
                    : "app-plugin" === t &&
                      !e.startsWith(oe) &&
                      (!e.startsWith(ne) ||
                        e.startsWith(((e) => `${ie}/${e}`)(r))))),
              le = (e, t = "") => {
                var r = {},
                  n = new Set();
                return (
                  Object.keys(te).forEach((o) => {
                    var i = te[o];
                    if (!(0, $.o8)(ae[o])) {
                      r[o] = (...r) => {
                        if (null === ae[o]) return i(...r);
                        var n = o.endsWith("Sync"),
                          a = !n || se[o] ? r[0] : r,
                          s = ae[o].every((r) => ce(a[r], e, t));
                        if (
                          ("app-plugin" === e &&
                            ae[o].forEach((e) => {
                              var n = o.endsWith("Sync") ? r : r[0];
                              if (
                                "string" == typeof n[e] &&
                                !n[e].match(/^[a-zA-Z0-9]+:\/\//)
                              ) {
                                var i = `plugin-private://${t}`;
                                n[e].startsWith("/") || (i += "/"),
                                  (n[e] = (0, J.S0)(i + n[e]));
                              }
                            }),
                          s)
                        )
                          return i(...r);
                        if (n) throw new Error(`${o}:fail permission denied`);
                        (0, v.YG)(o, a, "permission denied");
                      };
                      var a = r[o];
                      "open" === o
                        ? (r[o] = (e = {}) => {
                            var { success: t } = e;
                            a(
                              Object.assign({}, e, {
                                success: (e) => {
                                  n.add(e.fd), "function" == typeof t && t(e);
                                },
                              })
                            );
                          })
                        : "openSync" === o
                        ? (r[o] = (e = {}) => {
                            var t = a(e);
                            return n.add(t), t;
                          })
                        : "close" === o
                        ? (r[o] = (e = {}) => {
                            var { fd: t, success: r } = e;
                            a(
                              Object.assign({}, e, {
                                fd: t,
                                success: (e) => {
                                  n.delete(t), "function" == typeof r && r(e);
                                },
                              })
                            );
                          })
                        : "closeSync" === o &&
                          (r[o] = (e = {}) => {
                            var { fd: t } = e;
                            a({ fd: t }), n.delete(t);
                          });
                    }
                  }),
                  Object.keys(re).forEach((e) => {
                    var t = re[e];
                    r[e] = (r = {}) => {
                      var { fd: o } = r;
                      if (n.has(o)) return t(Object.assign({}, r, { fd: o }));
                      if (e.endsWith("Sync"))
                        throw new Error(`${e}:fail invalid fd`);
                      (0, v.YG)(e, r, "invalid fd");
                    };
                  }),
                  r
                );
              },
              ue = {
                app: le("app"),
                game: le("game"),
                opendata: le("opendata"),
              };
            Object.assign({}, te, re);
            var {
              saveFile: fe,
              saveFileSync: pe,
              getSavedFileList: de,
              getSavedFileInfo: he,
              removeSavedFile: ge,
              getFileInfo: ve,
              readFile: ye,
              readFileSync: me,
              writeFile: _e,
              writeFileSync: be,
              mkdir: we,
              mkdirSync: ke,
              rmdir: Se,
              rmdirSync: Te,
              readdir: Ae,
              readdirSync: xe,
              access: Pe,
              accessSync: Ie,
              unlink: Ee,
              unlinkSync: Ce,
              stat: Oe,
              statSync: Me,
              unzip: je,
              copyFile: Re,
              copyFileSync: Le,
              rename: De,
              renameSync: Ne,
              appendFile: We,
              appendFileSync: Fe,
            } = ue.app;
            class $e {
              constructor(e) {
                if (
                  ((this._status = "pending"),
                  (this._return = void 0),
                  (this._processors = []),
                  "function" != typeof e)
                )
                  throw new TypeError("Promise resolver is not a function");
                try {
                  e(
                    (e) => {
                      "pending" === this._status &&
                        ((this._status = "then"),
                        (this._return = e),
                        this._consume());
                    },
                    (e) => {
                      "pending" === this._status &&
                        ((this._status = "catch"),
                        (this._return = e),
                        this._consume());
                    }
                  );
                } catch (e) {
                  (this._status = "catch"), (this._return = e), this._consume();
                }
              }
              _consume() {
                if ("pending" !== this._status) {
                  var e;
                  do {
                    e = this._processors.shift();
                  } while (e && e.type !== this._status);
                  if (e)
                    try {
                      (this._return = e.func(this._return)),
                        (this._status = "then");
                    } catch (e) {
                      (this._return = e), (this._status = "catch");
                    } finally {
                      this._consume();
                    }
                }
              }
              then(e) {
                return (
                  this._processors.push({ func: e, type: "then" }),
                  this._consume(),
                  this
                );
              }
              catch(e) {
                return (
                  this._processors.push({ func: e, type: "catch" }),
                  this._consume(),
                  this
                );
              }
              static resolve(e) {
                return new $e((t) => t(e));
              }
              static reject(e) {
                return new $e(() => {
                  throw e;
                });
              }
            }
            var Be = (0, U.Fr)(Oe),
              Ue = 0,
              Ge = new WeakMap(),
              Ze = new WeakMap(),
              qe = new WeakMap(),
              He = new WeakMap(),
              Ve = new WeakMap(),
              Ke = new WeakMap(),
              Ye = new WeakMap(),
              Je = new WeakMap(),
              Xe = new WeakMap(),
              ze = new WeakMap(),
              Qe = new WeakMap(),
              et = {},
              tt = new B("Network", !0),
              rt = _.createLogger("NetworkTask"),
              nt = new WeakMap();
            class ot {
              constructor(
                e,
                { taskType: t, beforeSend: r, beforeSuccess: n, beforeFail: o }
              ) {
                var i = Ue++;
                (this.uniqueId =
                  1e4 * Date.now() + Math.round(9999 * Math.random())),
                  Ge.set(this, i),
                  qe.set(this, "waiting"),
                  He.set(this, e),
                  Ve.set(this, t),
                  Je.set(this, r),
                  Xe.set(this, n),
                  (0, $.mf)(o) && ze.set(this, o);
                var a,
                  s,
                  c = !1;
                (((e) => {
                  if (f.jP) return !0;
                  if (!f.wZ) return !1;
                  switch (e) {
                    case "Download":
                    case "Request":
                      return !0;
                    default:
                      return !1;
                  }
                })(t) ||
                  ((f.cj || f.wZ) && e.forceCellularNetwork)) &&
                  (c = !0),
                  Qe.set(this, c);
                var l = new $e((e, t) => {
                  (a = e), (s = t);
                });
                nt.set(this, { promise: l, resolve: a, reject: s });
                var u = () => {
                  ft.call(this)
                    ? (Ye.set(this, [Date.now()]),
                      et[t].taskQueue.push({ id: i, item: this }))
                    : at.call(this);
                };
                (0, $.mf)(e.customCheck)
                  ? e.customCheck(e, (r) => {
                      r ? it(t, e, r) : u();
                    })
                  : u();
              }
              abort() {
                if (
                  (rt.info(`[${Ve.get(this)}][${Ge.get(this)}]abort()`),
                  "waiting" === qe.get(this))
                ) {
                  rt.info(`[${Ve.get(this)}][${Ge.get(this)}] waiting=true`);
                  var e = et[Ve.get(this)].taskQueue.findIndex(
                    (e) => e.id === Ge.get(this)
                  );
                  e > -1 &&
                    (et[Ve.get(this)].taskQueue.splice(e, 1),
                    (0, v.YG)(
                      et[Ve.get(this)].functionName,
                      He.get(this),
                      "abort"
                    )),
                    qe.set(this, "done");
                } else {
                  nt.get(this).promise.then(() => {
                    (0, v.IN)(`operate${Ve.get(this)}Task`, {
                      [`${Ve.get(this).toLowerCase()}TaskId`]: Ze.get(this),
                      operationType: "abort",
                    });
                  });
                }
              }
              onProgressUpdate(e) {
                nt.get(this).promise.then(() => {
                  tt.on(`${Ve.get(this)}${Ze.get(this)}progressUpdate`, e);
                });
              }
              offProgressUpdate(e) {
                nt.get(this).promise.then(() => {
                  tt.off(`${Ve.get(this)}${Ze.get(this)}progressUpdate`, e);
                });
              }
              onHeadersReceived(e) {
                nt.get(this).promise.then(() => {
                  tt.on(`${Ve.get(this)}${Ze.get(this)}headersReceived`, e);
                });
              }
              offHeadersReceived(e) {
                nt.get(this).promise.then(() => {
                  tt.off(`${Ve.get(this)}${Ze.get(this)}headersReceived`, e);
                });
              }
              onChunkReceived(e) {
                nt.get(this).promise.then(() => {
                  tt.on(`${Ve.get(this)}${Ze.get(this)}chunked`, e);
                });
              }
              offChunkReceived(e) {
                nt.get(this).promise.then(() => {
                  tt.off(`${Ve.get(this)}${Ze.get(this)}chunked`, e);
                });
              }
            }
            function it(e, t, r) {
              (0, v.FE)({
                name: et[e].functionName,
                args: {
                  success: t.success,
                  fail: t.fail,
                  complete: t.complete,
                },
                success: !1,
                errMsg: r,
              });
            }
            function at() {
              var e = He.get(this),
                t = Ve.get(this),
                r = Qe.get(this);
              qe.set(this, "sending"), Ke.set(this, Date.now());
              var n = st.call(this);
              if (r) {
                var o = nt.get(this).promise;
                return (
                  F(
                    et[t].functionName,
                    e.url,
                    null,
                    0,
                    null,
                    null,
                    e.__skipDomainCheck__,
                    null,
                    null,
                    {},
                    null,
                    {},
                    this.uniqueId,
                    !1
                  ),
                  void o
                    .then(() => {
                      ct.call(this);
                    })
                    .catch((r) => {
                      it(t, e, r);
                    })
                );
              }
              n
                ? it(t, e, n)
                : Ze.get(this)
                ? ct.call(this)
                : nt.get(this).promise.then(() => {
                    ct.call(this);
                  });
              F(
                et[t].functionName,
                e.url,
                null,
                0,
                null,
                null,
                e.__skipDomainCheck__,
                null,
                null,
                {},
                null,
                {},
                this.uniqueId,
                !1
              );
            }
            function st() {
              var e,
                t = Ve.get(this),
                r = He.get(this);
              et[t].currentTaskCount++;
              var n = {
                  data: r.data,
                  url: r.url,
                  header: r.header,
                  method: r.method,
                  timeout: (0, $.hj)(r.timeout) ? r.timeout : 0,
                  enableHttp2: !!(0, $.jn)(r.enableHttp2) && r.enableHttp2,
                  enableQuic: !!(0, $.jn)(r.enableQuic) && r.enableQuic,
                  enableCache: !!(0, $.jn)(r.enableCache) && r.enableCache,
                  enableProfile: !(0, $.jn)(r.enableProfile) || r.enableProfile,
                  ip: r.ip,
                  port: r.port,
                  forbidReuse: !!(0, $.jn)(r.forbidReuse) && r.forbidReuse,
                  host: r.host,
                  enableChunked: r.enableChunked,
                  __skipDomainCheck__: r.__skipDomainCheck__,
                  success: (e) => {
                    var r = e[`${t.toLowerCase()}TaskId`];
                    Ze.set(this, r),
                      (et[t].taskIdMap[r] = this),
                      (0, nt.get(this).resolve)();
                  },
                  fail: (n) => {
                    et[t].currentTaskCount--;
                    var o = n[`${t.toLowerCase()}TaskId`];
                    (e = n.errMsg),
                      lt.call(this, {
                        taskType: t,
                        options: r,
                        errMsg: e,
                        success: !1,
                      }),
                      (0, nt.get(this).reject)(e),
                      rt.error(`[${t}][createTask][Fail] taskId=${o}`);
                  },
                  complete: () => {
                    qe.set(this, "done");
                  },
                },
                o = Qe.get(this),
                i = `create${t}Task${o ? "Async" : ""}`;
              return (
                (f.cj || f.wZ) &&
                  r.forceCellularNetwork &&
                  (i = "createCellularNetworkRequestTaskAsync"),
                (0, v.IN)(i, Je.get(this)(n)),
                e
              );
            }
            function ct() {
              var e = Ze.get(this),
                t = He.get(this),
                r = Ve.get(this),
                n = et[r].functionName;
              tt.on(`${r}${e}success`, (e) => {
                Xe.get(this).call(this, e),
                  (0, v.FE)({
                    name: n,
                    args: {
                      success: t.success,
                      fail: t.fail,
                      complete: t.complete,
                    },
                    res: e,
                  });
              }),
                tt.on(`${r}${e}fail`, (e) => {
                  var r = ze.get(this),
                    o = r && r.call(this, e);
                  if (o && o.__retry__)
                    _.info(`httpDns we retry url: ${t.url}`);
                  else {
                    o && o.__changeError__ && (e = o.__changeError__);
                    var i = {
                      name: n,
                      args: {
                        success: t.success,
                        fail: t.fail,
                        complete: t.complete,
                      },
                      success: !1,
                      errMsg: e.errMsg,
                    };
                    e.errno && (i.errno = e.errno), (0, v.FE)(i);
                  }
                });
            }
            function lt({
              taskType: e,
              options: t,
              errMsg: r,
              success: n = !0,
              dataLength: o = 0,
              statusCode: i = "",
              responseDataLength: a = 0,
              profile: s = {},
              queueTime: c,
              uniqueId: l,
            }) {
              var u = t.url,
                f = n ? 1 : 2,
                p = Date.now() - Ke.get(this),
                d = t.__skipDomainCheck__;
              p >= 6e4 &&
                rt.error(
                  `reportTask costTime too long: ${p}ms, taskId=${Ze.get(this)}`
                ),
                F(et[e].functionName, u, f, p, r, i, d, o, a, s, c, {}, l);
            }
            function ut(e, t) {
              var r,
                n = `${t.toLowerCase()}TaskId`,
                o = e[n],
                { state: i, header: a } = e;
              if (
                (delete e.state,
                delete e[n],
                "chunked" !== i &&
                  (e.cookies =
                    a && (r = a["Set-Cookie"] || a["set-cookie"])
                      ? Array.isArray(r)
                        ? r
                        : r
                            .split(",")
                            .reduce(
                              (e, t) => (
                                /^\s*\S+=/.test(t)
                                  ? e.push(t)
                                  : e.length && (e[e.length - 1] += t),
                                e
                              ),
                              []
                            )
                            .map((e) => e.trim())
                      : []),
                tt.emit(`${t}${o}${i}`, e),
                "success" === i || "fail" === i)
              ) {
                var s = et[t].taskIdMap[o],
                  c = He.get(s);
                if (!s) return;
                if (
                  ((et[t].currentTaskCount -= 1), et[t].taskQueue.length > 0)
                ) {
                  var l = et[t].taskQueue.shift().item,
                    u = Ye.get(l);
                  if (u && u[0]) {
                    var f = u[0];
                    if (f > 0) {
                      var p = Date.now() - f;
                      Ye.set(l, [f, p]);
                    }
                  }
                  at.call(l);
                }
                var d = Promise.resolve((0, U.Y6)(c.data));
                if ("Upload" === t) {
                  var h = 0;
                  "object" == typeof c.formData &&
                    null !== c.formData &&
                    (h = JSON.stringify(c.formData).length),
                    (d = Be({ path: c.filePath })
                      .then((e) => h + e.stats.size)
                      .catch(() => h));
                }
                var g = Promise.resolve((0, U.Y6)(e.data));
                if ("Download" === t) {
                  var v = e.dataLength;
                  g =
                    "number" == typeof v
                      ? Promise.resolve(v)
                      : Be({ path: e.filePath || e.tempFilePath || "" })
                          .then((e) => e.stats.size)
                          .catch(() => 0);
                }
                Promise.all([d, g]).then(([r, n]) => {
                  var o = Ye.get(s);
                  lt.call(s, {
                    taskType: t,
                    options: c,
                    errMsg: e.errMsg,
                    statusCode: e.statusCode,
                    success: "success" === i,
                    dataLength: r,
                    responseDataLength: n,
                    profile: e.profile,
                    queueTime: o && o[1],
                    uniqueId: s.uniqueId,
                  }),
                    Ye.delete(s);
                }),
                  pt.call(s);
              }
            }
            function ft() {
              var e = Ve.get(this);
              return et[e].currentTaskCount >= et[e].maxTaskCount;
            }
            function pt() {
              var e = Ve.get(this),
                t = Ze.get(this);
              delete et[e].taskIdMap[t],
                tt.removeAllListeners(`${e}${t}success`),
                tt.removeAllListeners(`${e}${t}fail`),
                tt.removeAllListeners(`${e}${t}complete`);
            }
            function dt(e, t) {
              var r = et[e]
                ? et[e]
                : {
                    currentTaskCount: 0,
                    maxTaskCount: 10,
                    taskQueue: [],
                    functionName: "",
                    taskIdMap: {},
                  };
              (0, v.jQ)(`on${e}TaskStateChange`, (t) => {
                ut.call(this, t, e);
              }),
                (et[e] = Object.assign(r, t));
            }
            var ht = void 0 !== t && t ? t.version : "unknown",
              gt = void 0 !== t && t ? t.updateTime : "unknown";
            function vt({
              isSuccess: e,
              invokeTime: t,
              costTime: r,
              wxdataQueueTimestamp: n,
              wxdataDequeueTimestamp: o,
              beginCGITimestamp: a,
              CGICallbackTimestamp: s,
              wxlibCallbackTimestamp: c,
              requestingCount: l,
              cost1: u,
              cost2: f,
              cost3: p,
              cost4: d,
              cost5: g,
              cost6: v,
              JSApiType: y,
            }) {
              Math.random() < 0.002 &&
                setTimeout(() => {
                  var m,
                    _ = b.Z.currentNetworkType,
                    w = i.Z.appType + 1e3,
                    k =
                      i.Z.appLaunchInfo && void 0 !== i.Z.appLaunchInfo.scene
                        ? i.Z.appLaunchInfo.scene
                        : 0,
                    S = [
                      "",
                      "",
                      e ? 1 : 0,
                      t,
                      r,
                      _,
                      "",
                      w,
                      k,
                      ht,
                      gt,
                      "",
                      0,
                      0,
                      u,
                      f,
                      p,
                      d,
                      g,
                      v,
                      0,
                      0,
                      l,
                      t,
                      n,
                      o,
                      a,
                      s,
                      0,
                      0,
                      c,
                      y,
                    ]
                      .map(
                        ((m = 1024),
                        (e) =>
                          (0, $.HD)(e) && e.length > m ? e.substr(0, m) : e)
                      )
                      .join(",");
                  h.reportKeyValue({ key: "WeAppOperateWXData", value: S });
                }, 0);
            }
            (0, $.HD)(ht) && (ht = ht.replace(" ", "")),
              (0, $.HD)(gt) && (gt = gt.replace(" ", "-"));
            var yt = ({
                url: e,
                result: t,
                cost: r,
                pointCacheType: n,
                errMsg: o,
                errno: i,
                host: a,
                fullCost: s,
              }) => {
                var c = [
                  e,
                  t,
                  r,
                  n,
                  o ? encodeURIComponent(o) : o,
                  i,
                  a,
                  s,
                ].join(",");
                h.reportKeyValue({ key: "WeFreeHttpDns", value: c });
              },
              mt = n(578),
              _t = n(700),
              bt = n(211);
            Math.random;
            var wt = {};
            i.Z.onReady(() => {
              Object.assign(wt, i.Z.appLaunchInfo),
                i.Z.appLaunchInfo.sessionid || i.Z.appLaunchInfo.sessionId,
                (0, _t.n)("onAppEnterForeground", (e) => {
                  Object.assign(wt, e),
                    e &&
                      (e.sessionid || e.sessionId) &&
                      (e.sessionid || e.sessionId);
                });
            });
            var kt = {},
              St = {},
              Tt = {},
              At = (e, t, r) => {
                if (Tt[e]) return Tt[e];
                var n,
                  o = e && e.indexOf(":");
                n = (n = -1 !== o ? e.slice(0, o) : e).toLowerCase();
                var i = r
                  ? {
                      sdkApiName: "getFreeDNSInfo",
                      apiName: "webapi_wxahttpdns_getfreehostip",
                      reqData: { domain: n },
                    }
                  : {
                      sdkApiName: "getDNSInfo",
                      apiName: "webapi_wxahttpdns_gethostip",
                      reqData: { domain: n, service_id: t },
                    };
                return (
                  (Tt[e] = (0, v.Qh)(i)
                    .then((t) => {
                      delete Tt[e];
                      var {
                        wxa_state: n,
                        ip: o,
                        ttl: i,
                        hit_cache: a,
                      } = t.data;
                      if (0 === n)
                        return (
                          (kt[e] = { ip: o, expireTime: 1e3 * i + Date.now() }),
                          r ? g()(g()({}, kt[e]), {}, { hitCache: a }) : kt[e]
                        );
                      throw new Error(n);
                    })
                    .catch((t) => {
                      throw (delete Tt[e], t);
                    })),
                  Tt[e]
                );
              },
              xt = (e) => {
                var t = kt[e];
                return t
                  ? { expired: Date.now() > t.expireTime, ip: t.ip }
                  : null;
              };
            P(() => {
              (kt = {}), (St = {}), (Tt = {});
            });
            var Pt = new RegExp("name_not_resolved", "i"),
              It = (e, t, r) =>
                !E() &&
                !(
                  !(0, mt.J)("useFreeHttpDns") || !((e) => Pt.test(e.errMsg))(e)
                ) &&
                (nr(t, r), !0),
              Et = 0;
            dt("Request", { maxTaskCount: 10, functionName: "request" }),
              i.Z.onReady(() => {
                try {
                  "number" == typeof i.Z.wxAppInfo.maxRequestConcurrent &&
                    dt("Request", {
                      maxTaskCount: i.Z.wxAppInfo.maxRequestConcurrent,
                    });
                } catch (e) {}
              });
            function Ct(e, t, r) {
              var n = Date.now();
              if (
                (Et--,
                (t.costTime = n - t.invokeTime),
                e.clientInfo && "object" == typeof e.clientInfo)
              ) {
                var o = e.clientInfo;
                (t.wxdataQueueTimestamp = o.invokeTime),
                  (t.wxdataDequeueTimestamp = o.invokeTime),
                  (t.beginCGITimestamp = o.beginCGITimestamp),
                  (t.CGICallbackTimestamp = o.CGICallbackTimestamp),
                  (t.wxlibCallbackTimestamp = o.wxlibCallbackTimestamp),
                  (t.cost1 = t.wxdataQueueTimestamp - t.invokeTime),
                  (t.cost2 = t.wxdataDequeueTimestamp - t.wxdataQueueTimestamp),
                  (t.cost3 = t.beginCGITimestamp - t.wxdataDequeueTimestamp),
                  (t.cost4 = t.CGICallbackTimestamp - t.beginCGITimestamp),
                  (t.cost5 = t.wxlibCallbackTimestamp - t.CGICallbackTimestamp),
                  (t.cost6 = n - t.wxlibCallbackTimestamp),
                  r && r.__wxUseProfile__ && (e.__requestProfileInfo = t),
                  delete e.clientInfo,
                  vt(t);
              }
            }
            var Ot = class extends ot {
                constructor(e) {
                  null == e || e.__wx_inner_uuid__;
                  var t = null == e ? void 0 : e.__wx_inner_invokeTime__;
                  null == e || e.__wx_inner_request_network_type__,
                    null == e || e.__wx_request_route_path__;
                  null == e || delete e.__wx_inner_uuid__,
                    null == e || delete e.__wx_inner_invokeTime__,
                    null == e || delete e.__wx_inner_request_network_type__,
                    null == e || delete e.__wx_request_route_path__;
                  var r = {
                    JSApiType: 1,
                    invokeTime: Date.now(),
                    requestingCount: ++Et,
                  };
                  super(e, {
                    taskType: "Request",
                    beforeSend: (t) => ((t.responseType = e.responseType), t),
                    beforeSuccess: (n) => {
                      var o, i;
                      e.host && e.ip && ((o = e.host), (i = e.ip), (St[o] = i)),
                        (r.isSuccess = !0),
                        (function (e) {
                          "string" == typeof e.data &&
                            65279 === e.data.charCodeAt(0) &&
                            (e.data = e.data.substr(1));
                        })(n),
                        (function (e) {
                          e.statusCode = parseInt(e.statusCode, 10);
                        })(n),
                        (function (e) {
                          "object" == typeof e.header &&
                            (e.header = Object.keys(e.header).reduce(
                              (t, r) => (
                                Array.isArray(e.header[r])
                                  ? (t[r] = e.header[r].join(","))
                                  : "string" == typeof e.header[r] &&
                                    (t[r] = e.header[r]),
                                t
                              ),
                              {}
                            ));
                        })(n);
                      try {
                        e.dataType;
                      } catch (e) {
                        _.error("checkAndReportError error:", e);
                      }
                      if (
                        ("json" === e.dataType &&
                          (function (e, t) {
                            try {
                              e.data = (t || JSON.parse)(e.data);
                            } catch (e) {}
                          })(n, e._jsonParse),
                        e.__retryHttpDNS__)
                      ) {
                        var a =
                          n.profile.domainLookUpStart - n.profile.fetchStart;
                        (n.profile.domainLookUpStart = e.lastRequestStartTime),
                          (n.profile.fetchStart = e.lastRequestStartTime - a),
                          yt({
                            url: e.lastUrl,
                            result: 0,
                            fullCost: Date.now() - t,
                            host: e.lastHost,
                            cost: e.weHttpDNSCoast,
                            pointCacheType: e.hitCache,
                          });
                      }
                      return Ct(n, r, e), n;
                    },
                    beforeFail(n) {
                      var o,
                        i = !1;
                      if (((r.isSuccess = !1), Ct(n, r, e), e.__retryHttpDNS__))
                        yt({
                          url: e.lastUrl,
                          result: 1,
                          fullCost: Date.now() - t,
                          pointCacheType: e.hitCache,
                          errMsg: n.errMsg,
                          errno: n.errno,
                          host: e.lastHost,
                          cost:
                            null !== (o = e.weHttpDNSCoast) && void 0 !== o
                              ? o
                              : -1,
                        }),
                          (i = e.lastErrorResponse);
                      else if (
                        It(n, e.originArgs, {
                          lastRequestStartTime: e.currentRequestStartTime,
                          lastErrorResponse: n,
                          lastUrl: e.url,
                          lastHost: e.host,
                        })
                      )
                        return { __retry__: !0 };
                      return i ? { __changeError__: i } : n;
                    },
                  });
                }
              },
              Mt = new WeakMap();
            class jt {
              constructor() {
                var e,
                  t = new Promise((t) => {
                    e = t;
                  });
                Mt.set(this, { promise: t, resolve: e });
              }
              abort() {
                var { promise: e } = Mt.get(this);
                e.then((e) => {
                  e.abort();
                });
              }
              onHeadersReceived(e) {
                var { promise: t } = Mt.get(this);
                t.then((t) => {
                  t.onHeadersReceived(e);
                });
              }
              offHeadersReceived(e) {
                var { promise: t } = Mt.get(this);
                t.then((t) => {
                  t.offHeadersReceived(e);
                });
              }
              onChunkReceived(e) {
                var { promise: t } = Mt.get(this);
                t.then((t) => {
                  t.onChunkReceived(e);
                });
              }
              offChunkReceived(e) {
                var { promise: t } = Mt.get(this);
                t.then((t) => {
                  t.offChunkReceived(e);
                });
              }
              onProgressUpdate(e) {
                var { promise: t } = Mt.get(this);
                t.then((t) => {
                  t.onProgressUpdate(e);
                });
              }
              offProgressUpdate(e) {
                var { promise: t } = Mt.get(this);
                t.then((t) => {
                  t.offProgressUpdate(e);
                });
              }
            }
            function Rt({
              args: e,
              options: {
                __retryHttpDNS__: t,
                __notAutofillContentType__: r,
                lastRequestStartTime: n,
                lastUrl: o,
                lastHost: i,
                lastErrorResponse: a,
              } = {},
            }) {
              var s = (0, J.Em)(e.header);
              (e.header = e.header || {}),
                (e.header = (0, J.Nf)(e.header)),
                "Undefined" !== s &&
                  "Object" !== s &&
                  (console.warn("wx.request: header must be an object"),
                  (e.header = {})),
                (e.header = Object.keys(e.header).reduce(
                  (t, r) => (
                    "content-type" === r.toLowerCase()
                      ? (t[r.toLowerCase()] = e.header[r])
                      : (t[r] = e.header[r]),
                    t
                  ),
                  {}
                ));
              var c = "text";
              e.responseType && (c = e.responseType.toLowerCase());
              var l,
                u = e.header || {},
                f = "GET";
              return (
                "string" == typeof e.method && (f = e.method.toUpperCase()),
                (e.dataType = e.dataType || "json"),
                r ||
                  (u["content-type"] = u["content-type"] || "application/json"),
                (l =
                  void 0 === e.data
                    ? ""
                    : "string" != typeof e.data &&
                      "ArrayBuffer" !== (0, J.Em)(e.data)
                    ? u["content-type"].indexOf(
                        "application/x-www-form-urlencoded"
                      ) > -1
                      ? (0, y.HR)(e.data, !0)
                      : u["content-type"].indexOf("application/json") > -1 ||
                        "object" == typeof e.data
                      ? JSON.stringify(e.data)
                      : l.toString()
                    : e.data),
                "GET" === f && (e.url = (0, y.cE)(e.url, e.data)),
                {
                  header: u,
                  method: f,
                  responseType: c,
                  dataStr: l,
                  args: e,
                  currentRequestStartTime: Date.now(),
                  lastRequestStartTime: n,
                  lastHost: i,
                  lastUrl: o,
                  __retryHttpDNS__: t,
                  lastErrorResponse: a,
                }
              );
            }
            var Lt = Symbol("skipDNS");
            function Dt({ args: e = {}, host: t, skipDNS: r, banHttpDNS: n }) {
              if (r === Lt || n) return {};
              var o,
                { enableHttpDNS: i, httpDNSServiceId: a } = e;
              if (E()) return {};
              if (!0 === i && (0, $.HD)(a)) {
                var s = xt(t);
                return s && !1 === s.expired
                  ? ((o = s.ip), { host: t, ip: o })
                  : At(t, a).then((e) => ((o = e.ip), { host: t, ip: o }));
              }
              return !0 === i
                ? Promise.reject(new Error("invalid httpDNSServiceId"))
                : {};
            }
            function Nt({ host: e, ip: t }) {
              var r = ((e, t) => {
                var r = St[e];
                return t
                  ? !((r && r === t) || (delete St[e], 0))
                  : (delete St[e], !1);
              })(e, t);
              return { forbidReuse: r };
            }
            function Wt({ args: e }) {
              var { host: t, protocol: r } = (0, y.en)(e.url);
              return { host: t, protocol: r };
            }
            function Ft({ protocol: e }) {
              return { port: "http" === e ? 80 : "https" === e ? 443 : 0 };
            }
            var $t = {},
              Bt = {
                wxGA: 846,
                Kanata: 933,
                reportIDKey: 847,
                reportKeyValue: 848,
                getXLogManager: 849,
                getUserCloudStorage: 883,
                getFriendCloudStorage: 884,
                getGroupCloudStorage: 885,
                getPotentialFriendList: 886,
                getGroupInfo: 887,
                shareMessageToFriend: 888,
                getUserInfo: 915,
                getUserCloudStorageKeys: 950,
                modifyFriendInteractiveStorage: 951,
                WebAssembly: 962,
                Function: 963,
                getGameLifeProfile: 964,
                getGreetingControlInfo: 965,
                interactGameLifeTag: 966,
                openGameLifeAccountInfo: 979,
                openGameLifeMiniGameTransfer: 980,
                gameTransfer: 981,
                createCanvas: 987,
                createScreenCanvas: 987,
                createWebView: 991,
                navigateToMiniProgramDirectly: 1002,
                coverview: 1005,
                launchApplication: 1006,
                privateOpenUrl: 1007,
                launchApplicationDirectly: 1008,
                encode: 1022,
                decode: 1023,
                onStoreEmoticonSelect: 1053,
                offStoreEmoticonSelect: 1053,
                PIXI: 1057,
                TWEEN: 1058,
                onKeyboardHeightChange: 1062,
                offKeyboardHeightChange: 1062,
                allowBufferWASM: 1068,
                showUserGrantInfoModal: 1073,
                __wxSourceMapRetrace__: 1074,
                setPluginLoginAuth: 1078,
                createScreenCanvas2: 1096,
                clearCreateCanvas: 1097,
                getABTestConfig: 1108,
                getSelfUserInfo: 1110,
                gamelifeManager: 1111,
                getGameLifeRedCount: 1111,
                onGameLifeMsg: 1111,
                offGameLifeMsg: 1111,
                onWebRTCLoadedMetaData: 1116,
                offWebRTCLoadedMetaData: 1116,
                requestForPlugin: 1118,
                requestSubscribeSystemMessage: 1124,
                skipDNSRequest: 1125,
                useRequest: 1126,
                requestSubscribeSystemMessageSkipTouchCheck: 1127,
                requirePlugin: 1150,
                transformFakePath2RealPath: 1175,
              },
              Ut = (e, t) => {
                var r = Bt[t];
                return void 0 === r
                  ? (console.error(
                      "请在 PluginPermissionIndex 中配置需要查询的权限位"
                    ),
                    !1)
                  : $t[e]
                  ? $t[e][r]
                  : (((e) => {
                      if ($t[e]) return $t[e];
                      var t = {},
                        r = Object.values(Bt);
                      (0, v.IN)("getPluginPermissionBytes", {
                        pluginList: [{ indexes: r, pluginId: e }],
                        success(n) {
                          var o = n.pluginPermissionMap;
                          if (o && o[e]) {
                            for (var i = 0; i < o[e].length; i++) {
                              var a = r[i];
                              t[a] = 1 === o[e][i];
                            }
                            $t[e] = t;
                          }
                        },
                        fail(e) {},
                      });
                    })(e),
                    $t[e] && $t[e][r]);
              },
              Gt = {
                emitter: new bt.Z(),
                puidToPluginWX: {},
                pluginIDs: {},
                pluginVersions: {},
                pluginInfos: {},
              },
              Zt = new WeakMap(),
              qt = (e) => {
                for (var t in Gt.puidToPluginWX)
                  if (Gt.puidToPluginWX[t] === e) return t;
              },
              Ht = (e) => {
                if ((0, f.aI)()) {
                  var t = ((r = e), Zt.get(r));
                  return t && t.provider ? t.provider : void 0;
                }
                return Gt.pluginIDs[qt(e)];
                var r;
              },
              Vt =
                (Object.keys,
                function ({ args: e = {} }) {
                  var { ip: t } = e;
                  if (!t) return {};
                  var r = Ht(this);
                  return r && Ut(r, "skipDNSRequest")
                    ? { skipDNS: Lt, ip: e.ip }
                    : {};
                }),
              Kt = n(638),
              Yt = n(102),
              Jt = {},
              Xt = !1;
            function zt({
              args: { url: e, __wx_inner_invokeTime__: t },
              host: r,
              options: { __retryHttpDNS__: n, lastErrorResponse: o },
            }) {
              var i;
              if (!n) return {};
              if (
                !(
                  (null === (i = Jt[e]) || void 0 === i ? void 0 : i.count) >= 4
                )
              ) {
                var a;
                if (E()) return {};
                if (Xt) {
                  var s = xt(r);
                  if (s && !1 === s.expired)
                    return (a = s.ip), { host: r, ip: a, hitCache: 1 };
                }
                var c = Date.now();
                return At(r, void 0, !0)
                  .then((e) => {
                    a = e.ip;
                    var t = e.hitCache ? 2 : 0,
                      n = Date.now() - c;
                    return {
                      host: r,
                      ip: a,
                      banHttpDNS: !0,
                      weHttpDNSCoast: n,
                      hitCache: t,
                    };
                  })
                  .catch((n) => {
                    Jt[e] ? Jt[e].count++ : (Jt[e] = { count: 1 });
                    var i = setTimeout(() => {
                      delete Jt[e];
                    }, 3e4);
                    throw (
                      (Jt[e].cf && clearTimeout(Jt[e].cf),
                      (Jt[e].cf = i),
                      yt({
                        url: e,
                        result: 1,
                        fullCost: Date.now() - t,
                        pointCacheType: 0,
                        errMsg: n.errMsg || n.message || n.msg,
                        errno: n.errno,
                        host: r,
                      }),
                      o)
                    );
                  });
              }
              yt({
                url: e,
                result: 1,
                fullCost: Date.now() - t,
                pointCacheType: 0,
                errMsg: "we_reject_free_httpdns",
                errno: 10455,
                host: r,
              });
            }
            i.Z.onReady(() => {
              var e = f.cj
                ? "clicfg_appbrand_ios_free_httpdns_sdk_cache"
                : "clicfg_appbrand_android_free_httpdns_sdk_cache";
              (0, Yt.b)({
                experimentId: e,
                experimentType: "Expt",
                success: (e) => {
                  e && 1 === Number(e.testConfig) && (Xt = !0);
                },
              });
            });
            class Qt {
              constructor(e) {
                (this.innerParams = e), (this.asyncTasks = []);
              }
              use(e) {
                var t = e(this.innerParams, this.asyncTasks);
                if (t instanceof Promise) {
                  var r = t.then((e) => {
                    Object.assign(this.innerParams, e);
                  });
                  this.asyncTasks.push(r);
                } else Object.assign(this.innerParams, t);
                return this;
              }
              useAfterAsyncTasks(e) {
                return (
                  this.asyncTasks.length > 0
                    ? Promise.all(this.asyncTasks)
                        .then(() => {
                          this.use(e);
                        })
                        .catch((e) => e)
                    : this.use(e),
                  this
                );
              }
              catch(e) {
                return (this.catchFn = e), this;
              }
              execute() {
                if (this.asyncTasks.length > 0) {
                  var e = new jt();
                  return (
                    Promise.all(this.asyncTasks)
                      .then(() => {
                        var t = this.createRequestTask();
                        ((e, t) => {
                          var { resolve: r } = Mt.get(e);
                          r(t);
                        })(e, t);
                      })
                      .catch((e) => {
                        this.catchFn && this.catchFn(e), delete this.catchFn;
                      }),
                    e
                  );
                }
                return this.createRequestTask();
              }
              createRequestTask() {
                var {
                  args: e,
                  host: t,
                  ip: r,
                  header: n,
                  method: o,
                  port: i,
                  responseType: a,
                  dataStr: s,
                  options: c,
                  forbidReuse: l,
                  currentRequestStartTime: u,
                  lastRequestStartTime: f,
                  weHttpDNSCoast: p,
                  hitCache: d,
                  lastHost: h,
                  lastUrl: v,
                  __retryHttpDNS__: y,
                  lastErrorResponse: m,
                } = this.innerParams;
                try {
                  return new Ot(
                    Object.assign({}, e, {
                      header: n,
                      method: o,
                      responseType: a,
                      data: s,
                      ip: r,
                      host: t,
                      port: i,
                      forbidReuse: l,
                      currentRequestStartTime: u,
                      lastRequestStartTime: f,
                      originArgs: g()({}, e),
                      weHttpDNSCoast: p,
                      hitCache: d,
                      lastHost: h,
                      lastUrl: v,
                      __retryHttpDNS__: y,
                      lastErrorResponse: m,
                      url: e.url,
                      __skipDomainCheck__: c.__skipDomainCheck__,
                    })
                  );
                } catch (e) {
                  return (
                    this.catchFn && this.catchFn(e), void delete this.catchFn
                  );
                }
              }
            }
            var er = (e = {}) => (
                (e = Object.assign(
                  {
                    __skipDomainCheck__: !1,
                    __notAutofillContentType__: !1,
                    __retryHttpDNS__: !1,
                  },
                  e
                )),
                function (t = {}) {
                  if ((0, v.r3)("request", t, { url: "" }))
                    if (!1 !== (0, y.mQ)(t.url)) {
                      try {
                        JSON.stringify(t.data);
                      } catch (e) {
                        return void (0, v.FE)({
                          name: "request",
                          args: t,
                          errno: Kt.tHd,
                          errMsg: "fail to stringify data",
                          success: !1,
                        });
                      }
                      if ("function" != typeof t.data) {
                        var r = new Qt({ args: t, options: e });
                        return (
                          r
                            .catch((e) => {
                              (0, v.YG)(
                                "request",
                                t,
                                e.message || e.errMsg,
                                e.errno
                              );
                            })
                            .use(Rt)
                            .use(Wt)
                            .use(Ft)
                            .use(Vt.bind(this))
                            .use(zt)
                            .use(Dt)
                            .useAfterAsyncTasks(Nt),
                          r.execute()
                        );
                      }
                      (0, v.FE)({
                        name: "request",
                        args: t,
                        errno: Kt.tHd,
                        errMsg: "data should not be Function",
                        success: !1,
                      });
                    } else
                      (0, v.FE)({
                        name: "request",
                        args: t,
                        errno: Kt.Z9j,
                        errMsg: `invalid url "${t.url}"`,
                        success: !1,
                      });
                }
              ),
              tr = er({ __skipDomainCheck__: !1 }),
              rr =
                (er({ __skipDomainCheck__: !0 }),
                er({
                  __skipDomainCheck__: !0,
                  __notAutofillContentType__: !0,
                })),
              nr = (
                (e = {}) =>
                (t = {}, r = {}) =>
                  er(g()(g()({}, e), r))(t)
              )({ __retryHttpDNS__: !0 });
            dt("Upload", { maxTaskCount: 10, functionName: "uploadFile" }),
              i.Z.onReady(() => {
                try {
                  "number" == typeof i.Z.wxAppInfo.maxUploadConcurrent &&
                    dt("Upload", {
                      maxTaskCount: i.Z.wxAppInfo.maxUploadConcurrent,
                    });
                } catch (e) {}
              });
            var or,
              ir,
              ar,
              sr,
              cr = class extends ot {
                constructor(e) {
                  super(e, {
                    taskType: "Upload",
                    beforeSend: (t) => (
                      (t.filePath = e.filePath),
                      (t.name = e.name),
                      (t.formData = e.formData),
                      t
                    ),
                    beforeSuccess: (e) => e,
                  });
                }
              },
              lr = (e = {}) => (
                (e = Object.assign({ __skipDomainCheck__: !1 }, e)),
                (t = {}) => {
                  if (
                    (0, v.r3)("uploadFile", t, {
                      url: "",
                      filePath: "",
                      name: "",
                    })
                  ) {
                    "object" != typeof t.header &&
                      void 0 !== t.header &&
                      (console.warn("uploadFile: header must be an object"),
                      delete t.header),
                      "object" != typeof t.formData &&
                        void 0 !== t.formData &&
                        (console.warn("uploadFile: formData must be an object"),
                        delete t.formData);
                    var r = {},
                      n = {};
                    t.header && (r = (0, J.Nf)(t.header)),
                      t.formData && (n = (0, J.Nf)(t.formData));
                    try {
                      return new cr(
                        Object.assign({}, t, {
                          header: r,
                          formData: n,
                          __skipDomainCheck__: e.__skipDomainCheck__,
                        })
                      );
                    } catch (e) {
                      return void (0, v.YG)("uploadFile", t, e.message);
                    }
                  }
                }
              ),
              ur = lr(),
              fr = (lr({ __skipDomainCheck__: !0 }), n(481)),
              pr = JSON.parse,
              dr = JSON.stringify,
              hr = i.Z.SDKVersion,
              gr =
                ((or = "getSystemInfo"),
                (ir = (e) => {
                  i.Z.isReady || new Error().stack,
                    (0, v.IN)("getSystemInfo", e, {
                      beforeSuccess: (e) => {
                        ((e) => {
                          var t = f.iw;
                          f.cj && (e.brand = "iPhone"),
                            f.gm &&
                              "devtools" !== e.brand &&
                              (t = "iPhone" === e.brand ? "ios" : "android"),
                            (e.platform = t),
                            (e.SDKVersion = hr),
                            (e.enableDebug = Boolean(i.Z.debug)),
                            i.Z.devicePixelRatio &&
                              (e.devicePixelRatio = i.Z.devicePixelRatio),
                            i.Z.theme && (e.theme = i.Z.theme),
                            i.Z.host && (e.host = i.Z.host),
                            i.Z.appLaunchInfo &&
                              i.Z.appLaunchInfo.mode &&
                              (e.mode = i.Z.appLaunchInfo.mode),
                            f.wZ &&
                              /^\d+\.\d+$/.test(e.version) &&
                              (e.version += ".0"),
                            (0, U.Av)() &&
                              !(0, f.aI)() &&
                              ((e.safeArea = Object.assign({}, e.safeArea)),
                              (e.safeArea.top = 0),
                              (e.safeArea.bottom = e.screenHeight),
                              (e.safeArea.height =
                                e.safeArea.bottom - e.safeArea.top)),
                            f.jP && (e.renderer = "h5");
                        })(e),
                          mr(e);
                      },
                    });
                }),
                (e = {}) => {
                  var { success: t, fail: r } = (0, v.Rn)(e, or);
                  if (ar) {
                    var n = {};
                    try {
                      n = pr(ar);
                    } catch (e) {
                      _.error(
                        "constructCachedOptimizedSyncApi parse error",
                        e.message
                      );
                    }
                    t(n);
                  } else
                    ir(
                      Object.assign({}, e, {
                        success(e) {
                          try {
                            ar = dr(e);
                          } catch (e) {
                            _.error(
                              "constructCachedOptimizedSyncApi stringify error",
                              e.message
                            );
                          }
                          Promise.resolve().then(() => {
                            ar = void 0;
                          }),
                            t(e);
                        },
                        fail(e) {
                          (ar = void 0), r(e);
                        },
                        complete: void 0,
                      })
                    );
                }),
              vr = () => {
                var e = {};
                return (
                  gr({
                    success(t) {
                      delete t.errMsg, (e = t);
                    },
                  }),
                  e
                );
              },
              yr = () => sr || (sr = Object.assign({}, vr())),
              mr = (e) => {
                delete (sr = Object.assign({}, e)).errMsg;
              },
              _r = null,
              br = [
                "brand",
                "model",
                "pixelRatio",
                "language",
                "version",
                "system",
                "platform",
                "SDKVersion",
              ];
            i.Z.onReady(() => {
              _r = {};
              for (var e = 0; e < br.length; e++) {
                if (!(br[e] in i.Z)) {
                  _r = yr();
                  break;
                }
                _r[br[e]] = i.Z[br[e]];
              }
              if (i.Z.screenHeight && i.Z.screenWidth)
                i.Z.screenWidth, i.Z.screenHeight;
              else {
                var t = yr();
                t.screenWidth, t.screenHeight;
              }
            });
            (() => {
              var e;
            })();
            var wr = (0, m.s)("AudioInterruptionBegin"),
              kr =
                (wr.onMethod,
                wr.offMethod,
                wr.internalOnMethod,
                wr.internalOffMethod,
                (0, m.s)("AudioInterruptionEnd")),
              Sr =
                (kr.onMethod,
                kr.offMethod,
                kr.internalOnMethod,
                kr.internalOffMethod,
                void 0),
              Tr = !1;
            a.onLoad(() => {
              (Sr =
                fr.Z && fr.Z.WXAUDIO
                  ? fr.Z.WXAUDIO
                  : fr.Z && fr.Z.AudioContext
                  ? fr.Z.AudioContext
                  : "undefined" != typeof AudioContext
                  ? AudioContext
                  : "undefined" != typeof webkitAudioContext
                  ? webkitAudioContext
                  : null),
                (Tr = !0);
            });
            var Ar = (function (e, t) {
              return (0, v.TG)(
                e,
                t,
                function (e) {
                  var t = e.data;
                  return {
                    qbase_api_name: "tcbapi_component_gettempfileurl",
                    qbase_req: JSON.stringify({
                      fileid_list: t.fileid_list.slice(),
                      type: t.type,
                    }),
                    cli_req_id: `${+new Date()}_${Math.random()}`,
                  };
                },
                function (e) {
                  return e;
                }
              );
            })("getCloudFileUrl", "qbase_commapi");
            var xr = function (e, t, r) {
                Ir({ fileIds: e, type: t, success: r });
              },
              Pr = new Map(),
              Ir = function (e) {
                var { fileIds: t, type: r, success: n } = e,
                  o = new Map(),
                  i = [],
                  a = !1;
                if (
                  (t.forEach((e) => {
                    var t = Pr.get(e);
                    if (t) {
                      if (Date.now() < t.expireTime)
                        return void (
                          o.has(e) || (o.set(e, t.data), a || (a = !0))
                        );
                      Pr.delete(e);
                    }
                    /^(cloud):\/\//.test(e) && i.push(e);
                  }),
                  0 !== i.length)
                ) {
                  var s = 0,
                    c = (function (e, t) {
                      for (
                        var r = [], n = Math.ceil(e.length / t), o = 0;
                        o < n;
                        o++
                      )
                        r.push(e.slice(o * t, (o + 1) * t));
                      return r;
                    })(t, 50);
                  Promise.all(
                    c.map(
                      (e) =>
                        new Promise((t) => {
                          Ar({
                            data: { fileid_list: e, type: r },
                            requestInQueue: !1,
                            success(r) {
                              var n = r;
                              if (
                                (n.baseresponse && 0 === n.baseresponse.errcode
                                  ? n.download_list.forEach((e) => {
                                      o.set(e.fileid, e),
                                        !Pr.has(e.fileid) &&
                                          e.max_age &&
                                          Pr.set(e.fileid, {
                                            data: e,
                                            expireTime:
                                              Date.now() + 1e3 * e.max_age,
                                          });
                                    })
                                  : n.baseresponse
                                  ? e.forEach((e) => {
                                      o.set(e, {
                                        download_url: e,
                                        service_errcode: n.baseresponse.errcode,
                                        errmsg:
                                          "system error baseresponse.errcode " +
                                          n.baseresponse.errcode,
                                      }),
                                        Pr.has(e) && Pr.delete(e);
                                    })
                                  : e.forEach((e) => {
                                      o.set(e, {
                                        download_url: e,
                                        service_errcode: -1,
                                        errmsg:
                                          "system error baseresponse empty",
                                      }),
                                        Pr.has(e) && Pr.delete(e);
                                    }),
                                n.baseresponse &&
                                  n.baseresponse.stat &&
                                  n.baseresponse.stat.qbase_cost_time)
                              ) {
                                var i = n.baseresponse.stat.qbase_cost_time;
                                i > s && (s = i);
                              }
                              t();
                            },
                            fail() {
                              t();
                            },
                            complete(e) {},
                          });
                        })
                    )
                  )
                    .then(() => {
                      Er(t, o, s, n);
                    })
                    .catch((e) => {
                      "function" == typeof n &&
                        n({
                          data: t.map((t) => ({
                            url: t,
                            service_errcode: -1,
                            errmsg: e + "",
                          })),
                        });
                    });
                } else
                  a
                    ? Er(t, o, 0, n)
                    : "function" == typeof n &&
                      n({ data: t.map((e) => ({ url: e })) });
              };
            function Er(e, t, r, n) {
              var o = [];
              e.forEach((e) => {
                if (/^(cloud):\/\//.test(e)) {
                  var r = t.get(e);
                  r
                    ? 0 === r.service_errcode
                      ? o.push({ url: r.download_url })
                      : o.push({
                          url: e,
                          code: r.service_errcode,
                          msg: r.errmsg,
                        })
                    : o.push({ url: e, code: -1, msg: "NO_RESULT" });
                } else o.push({ url: e });
              }),
                "function" == typeof n && n({ data: o, cost: r });
            }
            class Cr {
              constructor() {
                (this._internal = new Map()), (this._once = new Map());
              }
              add(e, t = null) {
                this._internal.set(e, t);
              }
              get(e, t) {
                var r = this._internal.get(e);
                return (
                  this._once.get(e) && this.off(e),
                  void 0 === r && void 0 !== t ? t : r
                );
              }
              compare(e, t) {
                return this.get(e) === t;
              }
              off(e) {
                this._internal.delete(e), this._once.delete(e);
              }
              once(e, t = null) {
                this._once.set(e, !0), this.add(e, t);
              }
              set(e, t, r = !1) {
                return (
                  !(!this._internal.get(e) && !r) &&
                  (this._internal.set(e, t), !0)
                );
              }
            }
            var Or,
              Mr = (() => new Cr())(),
              jr = new WeakMap(),
              Rr = new WeakMap(),
              Lr = new WeakMap(),
              Dr = new WeakMap(),
              Nr = new WeakMap(),
              Wr = new WeakMap(),
              Fr = new WeakMap(),
              $r = new WeakMap(),
              Br = new WeakMap(),
              Ur = new WeakMap(),
              Gr = new WeakMap(),
              Zr = {},
              qr = (0, U.Fr)(rr),
              Hr = (0, U.Fr)(G.p),
              Vr = (e) => Hr({ filePath: e }).then((e) => e.data),
              Kr = (e) =>
                qr({
                  url: e,
                  responseType: "arraybuffer",
                  enableHttp2: !0,
                  enableCache: !0,
                }).then((e) => e.data),
              Yr = (e) =>
                new Promise((t) => {
                  xr([e], "audio", (e) => {
                    t(Kr(e.data[0].url));
                  });
                }),
              Jr = (e) => Promise.resolve(Mr.get(e)),
              Xr = function (e) {
                jr.set(this, Object.assign(jr.get(this), e));
              },
              zr = function (e) {
                return jr.get(this)[e];
              },
              Qr = function () {
                return jr.get(this);
              },
              en = function () {
                this.stop(!0), Xr.call(this, { _source: null });
                var e = Lr.get(this);
                e && e();
              },
              tn = function (e) {
                var t = Or.createBufferSource(),
                  { currentPlayBackTime: r, state: n } = rn.call(this, e),
                  { loop: o, playbackRate: i, _buffer: a, _gainNode: s } = n,
                  c = en.bind(this);
                (t.onended = c),
                  (t.buffer = a),
                  (t.loop = o),
                  (t.playbackRate.value = i),
                  s && t.connect(s),
                  t.start(0, r),
                  Or.resume(),
                  Xr.call(this, {
                    _isPlaying: !0,
                    paused: !1,
                    _source: t,
                    _played: !0,
                    _playbackTime: 0,
                    _lastCurrentTime: r,
                    _startedAt: Or.currentTime,
                    _endedHandler: c,
                  });
              },
              rn = function (e) {
                e = e || Qr.call(this);
                var t,
                  {
                    _startedAt: r,
                    _playbackTime: n,
                    _isPlaying: o,
                    playbackRate: i,
                    _lastCurrentTime: a,
                    duration: s,
                  } = e;
                return (
                  (t = o ? a + (Or.currentTime - r) * i : n) > s && (t %= s),
                  { currentPlayBackTime: t, state: e }
                );
              },
              nn = function () {
                this.stop(!0);
                var { _gainNode: e } = Qr.call(this);
                e && e.disconnect(),
                  Xr.call(this, {
                    _buffer: null,
                    _source: null,
                    _loadPromise: null,
                    _gainNode: null,
                    _audioLoadPromiseResolve: null,
                  }),
                  Rr.delete(this),
                  Lr.delete(this),
                  Dr.delete(this),
                  Nr.delete(this),
                  Fr.delete(this),
                  Wr.delete(this),
                  $r.delete(this),
                  Br.delete(this),
                  Gr.delete(this),
                  clearInterval(Ur.get(this)),
                  Ur.delete(this);
              },
              on = function () {
                this.stop(!0),
                  Xr.call(this, {
                    _buffer: null,
                    _source: null,
                    _loadPromise: null,
                    _audioLoadPromiseResolve: null,
                  });
              },
              an = function (e) {
                var t;
                on.call(this);
                var r = new Promise((e) => {
                  t = e;
                });
                Xr.call(this, {
                  src: e,
                  _ready: !1,
                  _played: !1,
                  _loadPromise: r,
                  _audioLoadPromiseResolve: t,
                });
              };
            class sn {
              constructor() {
                Or ||
                  ("function" == typeof (Or = new Sr()).create && Or.create());
                var e = Or.createGain();
                e.connect(Or.destination);
                var t = {},
                  r = new Promise((e) => {
                    t._audioLoadPromiseResolve = e;
                  });
                jr.set(
                  this,
                  Object.assign(t, {
                    startTime: 0,
                    autoplay: !1,
                    loop: !1,
                    volume: 1,
                    playbackRate: 1,
                    paused: !1,
                    duration: NaN,
                    _loadPromise: r,
                    _gainNode: e,
                    _played: !1,
                    _playbackTime: 0,
                    _ready: !1,
                    _isPlaying: !1,
                    src: "",
                  })
                );
              }
              get src() {
                return zr.call(this, "src");
              }
              set src(e) {
                var { src: t } = Qr.call(this);
                "string" == typeof e &&
                  e.length > 0 &&
                  t !== e &&
                  (t && an.call(this, e),
                  Xr.call(this, { src: e }),
                  ((e) => {
                    var t = Zr[e];
                    if (t && t.audioBuffer)
                      return Promise.resolve(t.audioBuffer);
                    if (t && t.loadPromise) return t.loadPromise;
                    var r = (
                      /^(http|https):\/\//.test(e)
                        ? Kr(e)
                        : /^(cloud):\/\//.test(e)
                        ? Yr(e)
                        : /^(wxblob:\/\/)/.test(e)
                        ? Jr(e)
                        : Vr(e)
                    ).then(
                      (t) =>
                        new Promise((r, n) => {
                          Or.decodeAudioData(
                            t,
                            (t) => {
                              var n = Zr[e];
                              n.audioBuffer || (n.audioBuffer = t),
                                r(n.audioBuffer);
                            },
                            n
                          );
                        })
                    );
                    return (Zr[e] = { loadPromise: r }), r;
                  })(e)
                    .then((e) => {
                      var t = Qr.call(this),
                        r = Rr.get(this),
                        {
                          _isPlaying: n,
                          autoplay: o,
                          _audioLoadPromiseResolve: i,
                        } = t;
                      return (
                        Xr.call(this, {
                          _ready: !0,
                          _buffer: e,
                          duration: e.duration,
                        }),
                        r && r(),
                        o && !n && this.play(),
                        i(),
                        null
                      );
                    })
                    .catch((t) => {
                      var r = Dr.get(this);
                      r &&
                        r({
                          type: "error",
                          errMsg: `set audio src ${e} fail: ${t.message}`,
                        });
                    }));
              }
              get startTime() {
                return zr.call(this, "startTime");
              }
              set startTime(e) {
                var { _played: t, startTime: r } = Qr.call(this);
                e !== r &&
                  "number" == typeof e &&
                  e >= 0 &&
                  (Xr.call(this, { startTime: e }), t || this.seek(e));
              }
              get autoplay() {
                return zr.call(this, "autoplay");
              }
              set autoplay(e) {
                var { autoplay: t } = Qr.call(this);
                if (!!e !== t && (Xr.call(this, { autoplay: !!e }), e)) {
                  var { _loadPromise: r } = Qr.call(this);
                  r.then(() => {
                    var e = Qr.call(this),
                      { _isPlaying: t, autoplay: r, _source: n } = e;
                    return n && !t && r && this.play(), null;
                  });
                }
              }
              get loop() {
                return zr.call(this, "loop");
              }
              set loop(e) {
                var t = zr.call(this, "_source");
                Xr.call(this, { loop: (e = !!e) }), t && (t.loop = e);
              }
              get volume() {
                return zr.call(this, "volume");
              }
              set volume(e) {
                var { volume: t, _gainNode: r } = Qr.call(this);
                "number" == typeof e &&
                  e >= 0 &&
                  e <= 1 &&
                  e !== t &&
                  (Xr.call(this, { volume: e }),
                  r && r.gain && (r.gain.value = e));
              }
              get playbackRate() {
                return zr.call(this, "playbackRate");
              }
              set playbackRate(e) {
                var { playbackRate: t, _source: r } = Qr.call(this);
                "number" == typeof e &&
                  t !== e &&
                  e >= 0.5 &&
                  e <= 2 &&
                  (Xr.call(this, {
                    playbackRate: e,
                    _lastCurrentTime: this.currentTime,
                    _startedAt: Or.currentTime,
                  }),
                  r && (r.playbackRate.value = e));
              }
              get duration() {
                return zr.call(this, "duration");
              }
              get currentTime() {
                var { currentPlayBackTime: e } = rn.call(this);
                return e;
              }
              get paused() {
                return zr.call(this, "paused");
              }
              get buffered() {
                var { duration: e } = Qr.call(this);
                return e > 0 ? e : 0;
              }
              play(e = !1) {
                var t = Qr.call(this),
                  { _isPlaying: r, _ready: n, _loadPromise: o } = t;
                if (!r) {
                  var i = () => (e ? null : Nr.get(this));
                  if (n) {
                    tn.call(this, t);
                    var a = i();
                    a && a();
                  } else
                    o.then(() => {
                      tn.call(this);
                      var e = i();
                      return e && e(), null;
                    });
                }
              }
              pause() {
                var e = Qr.call(this),
                  { _isPlaying: t, _source: r } = e;
                if (r && t) {
                  var n = Wr.get(this);
                  r.stop(0),
                    r.disconnect(),
                    (r.onended = null),
                    Xr.call(this, {
                      _isPlaying: !1,
                      _playbackTime: this.currentTime,
                      paused: !0,
                      _endedHandler: null,
                    }),
                    n && n();
                }
              }
              stop(e = !1) {
                var { _source: t } = Qr.call(this);
                if (t) {
                  var r = Fr.get(this);
                  t.stop(0),
                    t.disconnect(),
                    (t.onended = null),
                    Xr.call(this, {
                      _isPlaying: !1,
                      _playbackTime: 0,
                      paused: !0,
                      _endedHandler: null,
                    }),
                    !e && r && r();
                }
              }
              seek(e) {
                if ("number" == typeof e && e >= 0) {
                  var { _isPlaying: t } = Qr.call(this),
                    r = $r.get(this),
                    n = Br.get(this),
                    o = Rr.get(this);
                  n && n(),
                    t
                      ? (this.stop(!0),
                        Xr.call(this, { _playbackTime: e }),
                        this.play(!0))
                      : Xr.call(this, { _playbackTime: e }),
                    r && r(),
                    o && o();
                }
              }
              destroy() {
                nn.call(this);
              }
              set oncanplay(e) {
                "function" == typeof e ? Rr.set(this, e) : Rr.delete(this);
              }
              set onended(e) {
                "function" == typeof e ? Lr.set(this, e) : Lr.delete(this);
              }
              set onerror(e) {
                "function" == typeof e ? Dr.set(this, e) : Dr.delete(this);
              }
              set onplay(e) {
                "function" == typeof e ? Nr.set(this, e) : Nr.delete(this);
              }
              set onpause(e) {
                "function" == typeof e ? Wr.set(this, e) : Wr.delete(this);
              }
              set onstop(e) {
                "function" == typeof e ? Fr.set(this, e) : Fr.delete(this);
              }
              set onseeked(e) {
                "function" == typeof e ? $r.set(this, e) : $r.delete(this);
              }
              set onseeking(e) {
                "function" == typeof e ? Br.set(this, e) : Br.delete(this);
              }
              set ontimeupdate(e) {
                if ("function" == typeof e) {
                  var t = Ur.get(this);
                  clearInterval(t);
                  var r = setInterval(() => {
                    var { _isPlaying: t } = Qr.call(this);
                    t && e();
                  }, 350);
                  Ur.set(this, r);
                } else Ur.delete(this);
              }
              set onwaiting(e) {
                "function" == typeof e ? Gr.set(this, e) : Gr.delete(this);
              }
            }
            var cn = () =>
                (function () {
                  if (!Tr) throw new Error("detect WebAudioContext too early");
                  return !!Sr;
                })() && !0,
              ln = [
                "src",
                "startTime",
                "autoplay",
                "loop",
                "obeyMuteSwitch",
                "volume",
                "playbackRate",
                "duration",
                "currentTime",
                "paused",
                "buffered",
                "referrerPolicy",
              ],
              un = ["startTime", "duration", "currentTime"],
              fn = [
                "Canplay",
                "Ended",
                "Error",
                "Pause",
                "Play",
                "Seeked",
                "Seeking",
                "Stop",
                "TimeUpdate",
                "Waiting",
              ],
              pn = new Set(),
              dn = new WeakMap(),
              hn = new WeakMap(),
              gn = new WeakMap(),
              vn = new WeakMap();
            class yn {
              constructor(e, t = 1e3) {
                var r = new bt.Z();
                dn.set(this, e),
                  pn.add(this),
                  vn.set(this, { conversion: t }),
                  ln.forEach((r) =>
                    Object.defineProperty(this, r, {
                      get: () => (un.includes(r) ? e[r] / t : e[r]),
                      set(n) {
                        un.includes(r) ? (e[r] = t * n) : (e[r] = n);
                      },
                    })
                  ),
                  fn.forEach((t) => {
                    (this["on" + t] = (e) => {
                      var n = d.surroundThirdByTryCatch(
                        e,
                        `at audioContext.on${t} callback function`
                      );
                      hn.set(e, n), gn.set(n, e), r.on(t, n);
                    }),
                      (this["off" + t] = (e) => {
                        if ((0, $.mf)(e)) {
                          var n = hn.get(e);
                          (0, $.mf)(n) &&
                            (r.off(t, n), hn.delete(e), gn.delete(n));
                        } else
                          r.listeners(t).forEach((e) => {
                            var t = gn.get(e);
                            hn.delete(t), gn.delete(e);
                          }),
                            r.removeAllListeners(t);
                      }),
                      (e["on" + t.toLowerCase()] = (e, n) => {
                        e ? r.emit(t, { errCode: e, errMsg: n }) : r.emit(t);
                      });
                  });
              }
              play() {
                var e;
                null === (e = dn.get(this)) || void 0 === e || e.play();
              }
              stop() {
                var e;
                null === (e = dn.get(this)) || void 0 === e || e.stop();
              }
              pause() {
                var e;
                null === (e = dn.get(this)) || void 0 === e || e.pause();
              }
              seek(e) {
                var t,
                  r,
                  { conversion: n } =
                    null !== (t = vn.get(this)) && void 0 !== t ? t : {};
                null === (r = dn.get(this)) || void 0 === r || r.seek(n * e);
              }
              destroy() {
                var e = dn.get(this);
                e.destroy && e.destroy(),
                  fn.forEach((e) => {
                    this["off" + e]();
                  }),
                  pn.delete(this),
                  dn.delete(this);
              }
              static pauseAllAudio() {
                pn.forEach((e) => {
                  var t = dn.get(e);
                  t && t.pause();
                });
              }
            }
            class mn extends yn {
              constructor() {
                super(new fr.Z.Audio(), 1e3);
              }
            }
            class _n extends yn {
              constructor() {
                super(new sn(), 1);
              }
            }
            var bn = !1;
            "undefined" != typeof IS_SDK_PACKAGE ||
              (0, v.jQ)("onAudioInterruptionBegin", (e) => {
                !0, !1 === bn && wr.emit(e);
              }),
              "undefined" != typeof IS_SDK_PACKAGE ||
                (0, v.jQ)("onAudioInterruptionEnd", (e) => {
                  !1, !1 === bn && kr.emit(e);
                });
            var wn = () => bn,
              kn = new WeakMap(),
              Sn = new WeakMap(),
              Tn = new WeakMap(),
              An = new WeakMap(),
              xn = new WeakMap(),
              Pn = new WeakMap(),
              In = new WeakMap(),
              En = new WeakMap(),
              Cn = new Map(),
              On = new Map(),
              Mn = new Map(),
              jn = _.createLogger("InnerAudio");
            (0, fr.a)((e) => {
              e.EventHandler &&
                (e.EventHandler.onbindingobjectdestruct = (e) => {
                  var t = On[e];
                  t &&
                    (0, v.IN)("getAudioState", {
                      audioId: t,
                      success(e) {
                        !0 === e.paused
                          ? (Cn.delete(t),
                            (0, v.IN)("destroyAudioInstance", { audioId: t }))
                          : Cn.get(t) &&
                            !1 === Cn.get(t).loop &&
                            Fn.once(`${t}_onAudioStateChange_ended`, () => {
                              Cn.delete(t),
                                (0, v.IN)("destroyAudioInstance", {
                                  audioId: t,
                                });
                            });
                      },
                    });
                });
            });
            var Rn = function (e, t) {
                Sn.set(this, Object.assign(Sn.get(this), { [e]: t })),
                  "src" === e &&
                    Sn.set(this, Object.assign(Sn.get(this), { paused: !0 })),
                  An.get(this) &&
                    (setTimeout(() => {
                      var r = Object.assign({}, Sn.get(this), xn.get(this), {
                        timestamp: Date.now(),
                        audioId: kn.get(this),
                        success: () => {
                          Sn.set(this, Object.assign(Sn.get(this), { [e]: t }));
                        },
                        fail: () => {
                          Dn.call(this);
                        },
                      });
                      wn() && (r.autoplay = !1),
                        (0, v.IN)("setAudioState", r),
                        An.set(this, !0);
                    }, 0),
                    An.set(this, !1)),
                  xn.set(this, Object.assign(xn.get(this), { [e]: t }));
              },
              Ln = function (e, t) {
                In.get(this).then(() => {
                  Rn.call(this, e, t);
                });
              },
              Dn = function (e, t) {
                var r = Sn.get(this)[e];
                return (
                  (0, v.IN)("getAudioState", {
                    audioId: kn.get(this),
                    success: (n) => {
                      delete n.errMsg,
                        Sn.set(this, Object.assign(Sn.get(this), n)),
                        (r = n[e]),
                        "function" == typeof t && t(r);
                    },
                  }),
                  r
                );
              },
              Nn = function (e) {
                var t = kn.get(this);
                (0, v.IN)(
                  "operateAudio",
                  Object.assign(
                    {
                      timestamp: Date.now(),
                      audioId: t,
                      fail: ({ errMsg: e }) => {
                        jn.error(`operateAudio fail: errMsg="${e}"`),
                          Zn.call(this, "error", { errMsg: e, errCode: -1 });
                      },
                    },
                    e
                  )
                );
              },
              Wn = function (e) {
                In.get(this).then(() => {
                  setTimeout(() => {
                    Nn.call(this, e);
                  }, 0);
                });
              },
              Fn = new bt.Z();
            "undefined" != typeof IS_SDK_PACKAGE ||
              (0, v.jQ)("onAudioStateChange", (e = {}) => {
                e.state = e.state.toLowerCase();
                var { state: t, audioId: r } = e;
                delete e.audioId, delete e.state;
                var n = "play" !== t,
                  o = Cn.get(r);
                o && (o.paused = n);
                var i = Mn.get(r);
                i && t in i && Fn.emit(`${r}_onAudioStateChange_${t}`, e);
              });
            var $n = function (e, t) {
                var r = `${kn.get(this)}_onAudioStateChange_${e}`,
                  n = (r) => {
                    d.surroundThirdByTryCatch(
                      t,
                      `at audioContext.on${e} callback function`
                    )(r);
                  };
                Pn.set(t, n), Fn.on(r, n);
              },
              Bn = function (e, t) {
                In.get(this).then(() => {
                  $n.call(this, e, t);
                });
              },
              Un = function (e, t) {
                var r = `${kn.get(this)}_onAudioStateChange_${e}`;
                if ((0, $.mf)(t)) {
                  var n = Pn.get(t);
                  (0, $.mf)(n) && Fn.off(r, n);
                } else Fn.removeAllListeners(r);
              },
              Gn = function (e, t) {
                In.get(this).then(() => {
                  Un.call(this, e, t);
                });
              },
              Zn = function (e, t) {
                Fn.emit(`${kn.get(this)}_onAudioStateChange_${e}`, t);
              },
              qn = 0,
              Hn = !1;
            var Vn = class {
              constructor(e) {
                var t, r;
                Sn.set(this, {}),
                  xn.set(this, {}),
                  Tn.set(this, void 0),
                  An.set(this, !0),
                  "string" == typeof e && En.set(this, e.split("/", 1)[0]),
                  In.set(
                    this,
                    new $e((e, n) => {
                      (t = e), (r = n);
                    })
                  );
                var n = {};
                (0, v.IN)(
                  f.wZ || f.jP || f.Ae
                    ? "createAudioInstanceAsync"
                    : "createAudioInstance",
                  {
                    timestamp: Date.now(),
                    success: (e) => {
                      var r = {
                        src: "",
                        startTime: 0,
                        paused: !0,
                        currentTime: 0,
                        duration: 0,
                        obeyMuteSwitch: !0,
                        volume: 1,
                        autoplay: !1,
                        loop: !1,
                        buffered: 0,
                        referrerPolicy: "",
                      };
                      if (
                        (Mn.set(e.audioId, n),
                        Cn.set(e.audioId, r),
                        kn.set(this, e.audioId),
                        Sn.set(this, r),
                        fr.Z.BindingObject)
                      ) {
                        var o = new fr.Z.BindingObject();
                        (this.__bindingObject = o), (On[o.__id] = e.audioId);
                      }
                      (qn += 1),
                        ++qn >= 1024 &&
                          !Hn &&
                          f.cj &&
                          ((Hn = !0),
                          h.reportIDKey({
                            id: 356,
                            key: "audioInstancesCountReach1024",
                          })),
                        setTimeout(t, 0);
                    },
                    fail: (e) => {
                      r(e.errMsg);
                    },
                  }
                ),
                  [
                    "Play",
                    "Pause",
                    "Stop",
                    "Canplay",
                    "Error",
                    "Ended",
                    "Waiting",
                    "Seeking",
                    "Seeked",
                  ].forEach((e) => {
                    (this[`on${e}`] = (t) => {
                      var r = e.toLowerCase();
                      (n[r] = 1), Bn.call(this, r, t);
                    }),
                      (this[`off${e}`] = (t) => {
                        var r = e.toLowerCase();
                        delete n[r], Gn.call(this, r, t);
                      });
                  });
              }
              get src() {
                return this.cloudId ? this.cloudId : Dn.call(this, "src");
              }
              set src(e) {
                if ("string" == typeof e && 0 !== e.length) {
                  var t = En.get(this);
                  "string" == typeof t &&
                    null === (0, J.pD)(e) &&
                    (e.startsWith("/") || (e = "/" + e),
                    (e = (0, J.S0)(`plugin-private://${t}${e}`))),
                    xr([e], "audio", (t) => {
                      /^(cloud):\/\//.test(e)
                        ? (this.cloudId = e)
                        : (this.cloudId = ""),
                        (e = t.data[0].url),
                        Ln.call(this, "src", e);
                    });
                } else
                  Zn.call(this, "error", {
                    errMsg: `Failed to set src, the src ${e} is invalid.`,
                  });
              }
              get startTime() {
                return Dn.call(this, "startTime") / 1e3;
              }
              set startTime(e) {
                "number" == typeof e
                  ? Ln.call(this, "startTime", 1e3 * e)
                  : Zn("error", {
                      errMsg: `Failed to set startTime, the startTime ${e} is invalid.`,
                    });
              }
              set autoplay(e) {
                "boolean" == typeof e && Ln.call(this, "autoplay", e);
              }
              get autoplay() {
                return Dn.call(this, "autoplay");
              }
              set loop(e) {
                "boolean" == typeof e && Ln.call(this, "loop", e);
              }
              get loop() {
                return Dn.call(this, "loop");
              }
              set obeyMuteSwitch(e) {
                "boolean" == typeof e && Ln.call(this, "obeyMuteSwitch", e);
              }
              get obeyMuteSwitch() {
                return Dn.call(this, "obeyMuteSwitch");
              }
              set volume(e) {
                "number" != typeof e ||
                  e < 0 ||
                  e > 1 ||
                  Ln.call(this, "volume", e);
              }
              get volume() {
                return Dn.call(this, "volume");
              }
              set playbackRate(e) {
                "number" != typeof e ||
                  e < 0 ||
                  Ln.call(this, "playbackRate", e);
              }
              get playbackRate() {
                return Dn.call(this, "playbackRate");
              }
              set referrerPolicy(e) {
                "string" == typeof e && Ln.call(this, "referrerPolicy", e);
              }
              get referrerPolicy() {
                return Dn.call(this, "referrerPolicy");
              }
              get paused() {
                return Dn.call(this, "paused");
              }
              get duration() {
                return Dn.call(this, "duration") / 1e3;
              }
              get currentTime() {
                return Dn.call(this, "currentTime") / 1e3;
              }
              get buffered() {
                return Dn.call(this, "buffered") / 1e3;
              }
              play() {
                !1 === wn() && Wn.call(this, { operationType: "play" });
              }
              pause() {
                Wn.call(this, { operationType: "pause" });
              }
              stop() {
                Wn.call(this, { operationType: "stop" });
              }
              seek(e) {
                "number" != typeof e || e < 0
                  ? Zn("error", {
                      errMsg: `Failed to seek, the currentTime ${e} is invalid.`,
                    })
                  : Wn.call(this, {
                      operationType: "seek",
                      currentTime: 1e3 * e,
                    });
              }
              destroy() {
                In.get(this).then(() => {
                  var e = kn.get(this);
                  Cn.has(e) &&
                    ([
                      "play",
                      "pause",
                      "stop",
                      "canplay",
                      "error",
                      "ended",
                      "waiting",
                      "seeking",
                      "seeked",
                    ].forEach((t) => {
                      var r = `${e}_onAudioStateChange_${t}`;
                      Fn.removeAllListeners(r);
                    }),
                    Mn.delete(e),
                    Cn.delete(e),
                    (qn -= 1),
                    (0, v.IN)("destroyAudioInstance", { audioId: e }));
                });
              }
              onTimeUpdate(e) {
                In.get(this).then(() => {
                  var t = `${kn.get(this)}_onAudioStateChange_timeupdate`;
                  void 0 === Tn.get(this) &&
                    Tn.set(
                      this,
                      setInterval(() => {
                        if (
                          "active" === b.Z.runningStatus &&
                          !0 !== Sn.get(this).paused &&
                          1 !== Sn.get(this).paused
                        ) {
                          var e = Sn.get(this).currentTime;
                          Dn.call(this, "currentTime", (r) => {
                            r !== e && Fn.emit(t);
                          });
                        }
                      }, 250)
                    ),
                    Fn.removeAllListeners(t);
                  var r = (t) => {
                    d.surroundThirdByTryCatch(
                      e,
                      "at audioContext.onTimeUpdate callback function"
                    )(t);
                  };
                  Pn.set(e, r), Fn.on(t, r);
                });
              }
              offTimeUpdate(e) {
                In.get(this).then(() => {
                  Gn.call(this, "timeupdate", e);
                });
              }
              static pauseAllAudio() {
                Cn.forEach((e, t) => {
                  (0, v.IN)("operateAudio", {
                    timestamp: Date.now(),
                    audioId: t,
                    operationType: "pause",
                  });
                });
              }
            };
            function Kn(e) {
              if ("string" != typeof e) return String(Number.parseInt(e, 10));
              for (var t, r = 0; r < e.length; r++)
                if (!Number.isNaN(parseInt(e[r], 10))) {
                  t = r;
                  break;
                }
              return e.slice(t);
            }
            function Yn(e, t) {
              return e || t
                ? e
                  ? t
                    ? (function (e, t) {
                        if ("string" != typeof e || "string" != typeof t)
                          return 0;
                        for (
                          var r = e.split("."),
                            n = t.split("."),
                            o = Math.max(r.length, n.length);
                          r.length < o;

                        )
                          r.push("0");
                        for (; n.length < o; ) n.push("0");
                        for (var i = 0; i < o; i++) {
                          var a = parseInt(r[i], 10),
                            s = parseInt(n[i], 10);
                          if (a > s) return 1;
                          if (a < s) return -1;
                        }
                        return 0;
                      })(Kn(e), Kn(t))
                    : 1
                  : -1
                : 0;
            }
            var Jn = _.createLogger("InnerAudioContext"),
              Xn = !f.cj;
            i.Z.onReady(() => {
              if (f.cj || f.wZ) {
                var e = f.cj
                  ? "clicfg_appbrand_ios_allow_inner_context_use_webaudio"
                  : "clicfg_appbrand_android_reject_inner_context_use_webaudio";
                (0, Yt.b)({
                  experimentId: e,
                  experimentType: "Expt",
                  success: (e) => {
                    _.warn(
                      `innerAudioContext webaudio adapater expt result: ${
                        e && Number(e.testConfig)
                      }`
                    ),
                      e && 1 === Number(e.testConfig) && (Xn = !!f.cj);
                  },
                  fail(e) {
                    _.warn(
                      `innerAudioContext webaudio adapater expt result: err: ${e}`
                    );
                  },
                });
              }
            });
            var zn = function (e = {}) {
                var t = !1;
                if (f.wZ) {
                  var { system: r } = i.Z.isReady
                    ? Object.assign({}, _r)
                    : (new Error().stack, {});
                  -1 === Yn(r, "6.0.0") && (t = !0);
                }
                var n = Ht(this),
                  { useWebAudioImplement: o } = e;
                return (f.DD || f.Ae) && fr.Z.Audio
                  ? (Jn.info("using NativeAudio"), new mn())
                  : !t && o && cn() && Xn && !f.jP
                  ? (Jn.info("using WebAudio"), new _n())
                  : (Jn.info("using AudioJsApi"), new Vn(n));
              },
              Qn = n(33),
              eo = n(100),
              to = n(128);
            dt("Download", { maxTaskCount: 10, functionName: "downloadFile" }),
              i.Z.onReady(() => {
                try {
                  "number" == typeof i.Z.wxAppInfo.maxDownloadConcurrent &&
                    dt("Download", {
                      maxTaskCount: i.Z.wxAppInfo.maxDownloadConcurrent,
                    });
                } catch (e) {}
              });
            var ro = class extends ot {
                constructor(e) {
                  super(e, {
                    taskType: "Download",
                    beforeSend: (t) => ((t.filePath = e.filePath), t),
                    beforeSuccess: (e) => (delete e.timeInterval, e),
                  });
                }
              },
              no = ({ api: e, url: t }) =>
                (0, U.vB)()
                  ? Promise.resolve({
                      isInDomainList: !0,
                      isLocalHost: !1,
                      isInLAN: !0,
                    })
                  : new Promise((r, n) => {
                      (0, v.IN)("checkNetworkAPIURL", {
                        api: e,
                        url: t,
                        success: r,
                        fail: n,
                      });
                    }),
              oo = new WeakMap(),
              io = new WeakMap(),
              ao = new WeakMap(),
              so = [],
              co = 0,
              lo = 10;
            function uo(e = !1) {
              for (
                e && (oo.delete(e), io.delete(e), ao.delete(e), co--);
                so.length > 0 && co < lo;

              ) {
                var t = so.shift(),
                  r = oo.get(t),
                  n = io.get(t);
                r && n && (r.start(n), co++);
              }
            }
            i.Z.onReady(() => {
              i.Z.wxAppInfo &&
                i.Z.wxAppInfo.maxDownloadConcurrent &&
                (lo = i.Z.wxAppInfo.maxDownloadConcurrent);
            });
            class fo {
              constructor(e) {
                var t = fr.Z.Download,
                  r = e.workerId ? new t(e.workerId) : new t();
                delete e.workerId;
                var n = new bt.Z();
                oo.set(this, r),
                  ao.set(this, n),
                  io.set(
                    this,
                    (0, U.v7)(e, [
                      "url",
                      "header",
                      "filePath",
                      "enableProfile",
                      "timeout",
                    ])
                  ),
                  (r.onfail = (t) => {
                    (0, v.YG)("downloadFile", e, t), uo(!0);
                  }),
                  (r.onsuccess = (t) => {
                    (0, v.FE)({ name: "downloadFile", args: e, res: t }),
                      uo(!0);
                  }),
                  (r.onheader = (e) => n.emit("header", { header: e })),
                  (r.onprogress = (e, t, r) =>
                    n.emit("progress", {
                      progress: e,
                      totalBytesWritten: t,
                      totalBytesExpectedToWrite: r,
                    })),
                  no({ api: "downloadFile", url: e.url })
                    .then((t) => {
                      e.__skipDomainCheck__ ||
                      t.isInDomainList ||
                      (t.isInLAN && !t.isLocalHost)
                        ? (so.push(this), uo())
                        : (0, v.YG)("downloadFile", e, "invalid url");
                    })
                    .catch(() => {
                      (0, v.YG)("downloadFile", e, "url validate error");
                    });
              }
              abort() {
                var e = oo.get(this);
                e && e.abort();
              }
              onHeadersReceived(e) {
                var t = ao.get(this);
                t && t.on("header", e);
              }
              onProgressUpdate(e) {
                var t = ao.get(this);
                t && t.on("progress", e);
              }
              offHeadersReceived(e) {
                var t = ao.get(this);
                t && t.off("header", e);
              }
              offProgressUpdate(e) {
                var t = ao.get(this);
                t && t.off("progress", e);
              }
            }
            var po = n(560),
              ho = !1;
            function go(e) {
              return ho ? new fo(e) : new ro(e);
            }
            n.g.__isAppServiceRemoteDebugMode__ ||
              (0, fr.a)((e) => {
                e.Download &&
                  i.Z.onReady(() => {
                    var e = !1,
                      t = f.cj
                        ? "clicfg_appbrand_ios_native_download_new"
                        : "clicfg_appbrand_native_download";
                    (0, Yt.b)({
                      experimentId: t,
                      experimentType: "Expt",
                      success: (t) => {
                        t &&
                          1 === Number(t.testConfig) &&
                          ((e = !0), (0, po.Tk)(/^downloadFile/, 2));
                      },
                      fail(e) {},
                    });
                    var r = (0, mt.J)("bindingDownload");
                    (ho = e || r),
                      _.info(
                        `${
                          ho ? "binding" : "jsapi"
                        } download, abtest: ${e}, permission: ${r}`
                      );
                  });
              });
            var vo,
              yo = (e = {}) => (
                (e = Object.assign({ __skipDomainCheck__: !1 }, e)),
                (t = {}) => {
                  if ((0, v.r3)("downloadFile", t, { url: "" })) {
                    t.__skipDomainCheck__ = e.__skipDomainCheck__;
                    try {
                      return new go(t);
                    } catch (e) {
                      return void (0, v.YG)("downloadFile", t, e.message);
                    }
                  }
                }
              ),
              mo = yo(),
              _o =
                (yo({ __skipDomainCheck__: !0 }),
                (e = {}) => {
                  if (
                    "string" != typeof e.filePath ||
                    !e.filePath.startsWith(oe)
                  )
                    return mo(e);
                  (0, v.YG)("downloadFile", e, "permission denied");
                }),
              bo = o.applyDecoratedDescriptor,
              wo = n.n(bo),
              ko = n(256),
              So = 0,
              To = new WeakMap(),
              Ao = new WeakMap(),
              xo = new WeakMap(),
              Po = new WeakMap(),
              Io = {},
              Eo = new B();
            (0, v.jQ)("onSocketTaskStateChange", (e = {}) => {
              var { state: t, socketTaskId: r } = e,
                n = Io[r];
              if (n) {
                var o = To.get(n);
                if ((delete e.state, delete e.socketTaskId, n)) {
                  if ("open" === t) {
                    n.readyState = n.OPEN;
                    var i = xo.get(n).url,
                      a = Date.now() - Po.get(n),
                      s = e.statusCode,
                      c = xo.get(n).__skipDomainCheck__,
                      l = e.profile;
                    F("connectSocket", i, 1, a, "", s, c, 0, 0, l, 0);
                  } else
                    ("close" !== t && "error" !== t) ||
                      (n.readyState = n.CLOSED);
                  Eo.emit(`${o}${t}`, e),
                    Eo.emit(
                      `onSocket${t[0].toUpperCase() + t.substr(1)}`,
                      e,
                      n
                    ),
                    "close" === t &&
                      (delete Io[r],
                      Eo.removeAllListeners(`${o}open`),
                      Eo.removeAllListeners(`${o}close`),
                      Eo.removeAllListeners(`${o}error`),
                      Eo.removeAllListeners(`${o}message`));
                }
              }
            });
            var Co = function (e, t) {
                Eo.on(
                  `${To.get(this)}${e}`,
                  d.surroundThirdByTryCatch(
                    t,
                    `at socketTask.on${e} callback function`
                  )
                );
              },
              Oo =
                ((vo = class {
                  constructor(e, t) {
                    (this.CONNECTING = 0),
                      (this.OPEN = 1),
                      (this.CLOSING = 2),
                      (this.CLOSED = 3);
                    var r = this.CONNECTING;
                    Object.defineProperty(this, "readyState", {
                      get: () => r,
                      set: (e) => {
                        r = e;
                      },
                      enumerable: !0,
                      configurable: !0,
                    });
                    var n,
                      o = So++;
                    To.set(this, o),
                      xo.set(this, t),
                      Object.defineProperty(this, "__socketInstance__", {
                        value: e,
                        writable: !1,
                        configurable: !1,
                        enumerable: !1,
                      }),
                      ["success", "fail", "complete"].forEach((e) => {
                        "function" == typeof t[e] &&
                          (t[e] = d.surroundThirdByTryCatch(
                            t[e],
                            `at api connectSocket ${e} callback function`
                          ));
                      }),
                      Po.set(this, Date.now()),
                      (0, $.hj)(t.timeout) || (t.timeout = 0);
                    var i = () => {
                      (0, v.IN)("createSocketTask", t, {
                        beforeAll(e) {
                          e.errMsg = e.errMsg.replace(
                            "createSocketTask",
                            "connectSocket"
                          );
                        },
                        beforeSuccess: (e) => {
                          Ao.set(this, e.socketTaskId),
                            (Io[e.socketTaskId] = this);
                        },
                        beforeFail: (e) => {
                          var r = t.url,
                            o = Date.now() - Po.get(this),
                            i = t.__skipDomainCheck__;
                          (n = e.errMsg),
                            F("connectSocket", r, 2, o, n, "", i, 0);
                        },
                      }),
                        n &&
                          ((this.readyState = this.CLOSED),
                          setTimeout(() => {
                            Eo.emit(`${o}error`, { errMsg: n });
                          }, 0));
                    };
                    (0, $.mf)(t.customCheck)
                      ? t.customCheck(t, (e) => {
                          e
                            ? ((0, v.YG)("connectSocket", t, e),
                              (this.readyState = this.CLOSED),
                              setTimeout(() => {
                                Eo.emit(`${o}error`, { errMsg: e });
                              }, 0))
                            : i();
                        })
                      : i();
                  }
                  send(e) {
                    if (this.readyState === this.OPEN) {
                      var t = Date.now();
                      (0, v.IN)(
                        "operateSocketTask",
                        Object.assign({}, e, {
                          operationType: "send",
                          socketTaskId: Ao.get(this),
                        }),
                        {
                          beforeAll: (r) => {
                            if (
                              ((r.errMsg = r.errMsg.replace(
                                "operateSocketTask",
                                "sendSocketMessage"
                              )),
                              Math.random() > 0.99)
                            ) {
                              var n = xo.get(this).url,
                                o = r.errMsg.indexOf("ok") > -1 ? 1 : 2,
                                i = Date.now() - t,
                                a = r.errMsg,
                                s = xo.get(this).__skipDomainCheck__,
                                c = (0, U.Y6)(e.data);
                              F("sendSocketMessage", n, o, i, a, "", s, c);
                            }
                          },
                        }
                      );
                    } else
                      (0, v.YG)(
                        "SocketTask.send",
                        e,
                        "SocketTask.readyState is not OPEN"
                      );
                  }
                  close(e = {}) {
                    (0, v.IN)(
                      "operateSocketTask",
                      Object.assign({ code: 1e3 }, e, {
                        operationType: "close",
                        socketTaskId: Ao.get(this),
                      }),
                      {
                        beforeAll(e) {
                          e.errMsg = e.errMsg.replace(
                            "operateSocketTask",
                            "closeSocket"
                          );
                        },
                      }
                    );
                  }
                  onOpen(e) {
                    Co.call(this, "open", e);
                  }
                  onClose(e) {
                    Co.call(this, "close", e);
                  }
                  onMessage(e) {
                    Co.call(this, "message", e);
                  }
                  onError(e) {
                    Co.call(this, "error", e);
                  }
                }),
                wo()(
                  vo.prototype,
                  "send",
                  [ko.Qu],
                  Object.getOwnPropertyDescriptor(vo.prototype, "send"),
                  vo.prototype
                ),
                wo()(
                  vo.prototype,
                  "close",
                  [ko.Qu],
                  Object.getOwnPropertyDescriptor(vo.prototype, "close"),
                  vo.prototype
                ),
                vo),
              Mo = 5;
            i.Z.onReady(() => {
              i.Z.wxAppInfo &&
                i.Z.wxAppInfo.maxWebsocketConnect &&
                (Mo = i.Z.wxAppInfo.maxWebsocketConnect);
            });
            var jo = new WeakMap(),
              Ro = new WeakMap(),
              Lo = new WeakMap(),
              Do = {},
              No = new B(),
              Wo = 0,
              Fo = 0;
            function $o(e, t, r) {
              t.errMsg = t.errMsg || "ok";
              var n = "ok" === t.errMsg;
              (0, v.FE)({ name: e, args: r, success: n, errMsg: t.errMsg });
            }
            class Bo {
              constructor(e, t) {
                (this.CONNECTING = 0),
                  (this.OPEN = 1),
                  (this.CLOSING = 2),
                  (this.CLOSED = 3);
                var r = this.CONNECTING;
                Object.defineProperty(this, "readyState", {
                  get: () => r,
                  set: (e) => {
                    r = e;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                  Object.defineProperty(this, "__socketInstance__", {
                    value: e,
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                  });
                var n = fr.Z.WSS,
                  o = Wo++,
                  i = t.workerId ? new n(t.workerId) : new n();
                delete t.workerId,
                  jo.set(this, t),
                  Ro.set(this, i),
                  Lo.set(this, o);
                var a = Date.now();
                (i.onopen = (e, r) => {
                  this.readyState !== this.CLOSED &&
                    (Fo++,
                    (this.readyState = this.OPEN),
                    No.emit(`${o}open`, { header: e, profile: r }),
                    No.emit("onSocketOpen", { header: e, profile: r }, this),
                    F(
                      "connectSocket",
                      t.url,
                      1,
                      Date.now() - a,
                      "",
                      "",
                      t.__skipDomainCheck__,
                      0,
                      0,
                      r,
                      0
                    ));
                }),
                  (i.onclose = (e, t) => {
                    Fo--,
                      (this.readyState = this.CLOSED),
                      No.emit(`${o}close`, { code: e, reason: t }),
                      No.emit("onSocketClose", { code: e, reason: t }, this);
                  }),
                  (i.onmessage = (e) => {
                    this.readyState !== this.CLOSED &&
                      ((0, $.eP)(e) && (e.__proto__ = ArrayBuffer.prototype),
                      No.emit(`${o}message`, { data: e }),
                      No.emit("onSocketMessage", { data: e }, this));
                  }),
                  (i.onerror = (e, t) => {
                    Fo--,
                      (this.readyState = this.CLOSED),
                      setTimeout(() => {
                        No.emit(`${o}error`, { errCode: e, errMsg: t }),
                          No.emit(
                            "onSocketError",
                            { errCode: e, errMsg: t },
                            this
                          );
                      }, 0);
                  });
                var s = () => {
                  var e = { errMsg: "" };
                  Fo >= Mo
                    ? ((this.readyState = this.CLOSED),
                      (e.errMsg = `fail reach max websocket connect count ${Mo}`))
                    : ((e.errMsg = i.connect(
                        (0, U.v7)(t, [
                          "url",
                          "header",
                          "timeout",
                          "protocols",
                          "tcpNoDelay",
                          "perMessageDeflate",
                          "enableProfile",
                        ])
                      )),
                      ("string" == typeof e.errMsg && "" !== e.errMsg) ||
                        (e.errMsg = "ok")),
                    e.errMsg,
                    "ok" === e.errMsg && (Do[o] = this),
                    $o("connectSocket", e, t);
                };
                (0, $.mf)(t.customCheck)
                  ? t.customCheck(t, (e) => {
                      e ? $o("connectSocket", { errMsg: e }, t) : s();
                    })
                  : (s(),
                    no({ api: "websocket", url: t.url })
                      .then((e) => {
                        if (
                          (t.url,
                          !(
                            t.__skipDomainCheck__ ||
                            e.isInDomainList ||
                            (e.isInLAN && !e.isLocalHost)
                          ))
                        )
                          throw new Error("fail:url not in domain list");
                      })
                      .catch((e) => {
                        this.readyState = this.CLOSED;
                        var t = e.message || e.errMsg;
                        No.emit(`${o}error`, { errMsg: t }),
                          No.emit("onSocketError", { errMsg: t }, this);
                      }));
              }
              send(e = {}) {
                var t = { errMsg: Ro.get(this).send(e.data) };
                (e.success || e.fail || e.complete) &&
                  $o("sendSocketMessage", t, e);
              }
              close(e = {}) {
                this.readyState,
                  $o(
                    "closeSocket",
                    {
                      errMsg: Ro.get(this).close(
                        (0, $.hj)(e.code) ? e.code : 1e3,
                        e.reason
                      ),
                    },
                    e
                  );
              }
              onOpen(e) {
                No.on(
                  `${Lo.get(this)}open`,
                  d.surroundThirdByTryCatch(
                    e,
                    "at socketTask.onOpen callback function"
                  )
                );
              }
              onClose(e) {
                No.on(
                  `${Lo.get(this)}close`,
                  d.surroundThirdByTryCatch(
                    e,
                    "at socketTask.onClose callback function"
                  )
                );
              }
              onMessage(e) {
                No.on(
                  `${Lo.get(this)}message`,
                  d.surroundThirdByTryCatch(
                    e,
                    "at socketTask.onMessage callback function"
                  )
                );
              }
              onError(e) {
                No.on(
                  `${Lo.get(this)}error`,
                  d.surroundThirdByTryCatch(
                    e,
                    "at socketTask.onError callback function"
                  )
                );
              }
            }
            var Uo = Oo,
              Go = Io;
            n.g.__isAppServiceRemoteDebugMode__ ||
              (0, fr.a)((e) => {
                e.WSS &&
                  i.Z.onReady(() => {
                    var t = !1,
                      r = f.cj
                        ? "clicfg_appbrand_ios_native_socket_wcwss_new"
                        : 1;
                    1 === r
                      ? (t = !0)
                      : (0, Yt.b)({
                          experimentId: r,
                          experimentType: "Expt",
                          success: (e) => {
                            e && 1 === Number(e.testConfig) && (t = !0);
                          },
                        });
                    var n = (0, mt.J)("bindingWebSocket");
                    t || n || e.WSS.force
                      ? ((Uo = Bo),
                        (Go = Do),
                        (0, po.Tk)(/^connectSocket/, 2),
                        _.info(
                          `binding socket, abtest: ${t}, permission: ${n}`
                        ))
                      : _.info(`jsapi socket, abtest: ${t}, permission: ${n}`);
                  });
              });
            var Zo = new WeakMap(),
              qo = {};
            function Ho(e, t) {
              return (
                qo[t] ||
                  ((qo[t] = new WeakMap()),
                  Eo.on(`onSocket${t}`, Vo(t)),
                  No.on(`onSocket${t}`, Vo(t))),
                function (r) {
                  (0, v.r3)(`onSocket${t}`, r, $.ZT) && qo[t].set(e, r);
                }
              );
            }
            function Vo(e) {
              return function (t, r) {
                var n = r.__socketInstance__,
                  o = qo[e].get(n),
                  i = Zo.get(n);
                o &&
                  r === i &&
                  d.surroundThirdByTryCatch(
                    o,
                    `at onSocket${e} callback function`
                  )(t);
              };
            }
            var Ko,
              Yo = (e = {}) => {
                e = Object.assign({ __skipDomainCheck__: !1 }, e);
                var t = {};
                return {
                  connectSocket(r) {
                    var { workerId: n } = r;
                    if (
                      (delete r.workerId,
                      (0, v.r3)("connectSocket", r, { url: "" }))
                    )
                      if (!1 !== (0, y.mQ)(r.url, "websocket")) {
                        "object" != typeof r.header &&
                          void 0 !== r.header &&
                          delete r.header;
                        var o = {};
                        r.header && (o = (0, J.Nf)(r.header)),
                          (r.__skipDomainCheck__ = e.__skipDomainCheck__);
                        try {
                          var i = Zo.get(t),
                            a = new Uo(
                              t,
                              Object.assign(
                                {},
                                r,
                                g()({ header: o }, n ? { workerId: n } : {})
                              )
                            );
                          return (
                            i && i.readyState !== i.CLOSED
                              ? i.readyState
                              : Zo.set(t, a),
                            a
                          );
                        } catch (e) {
                          return (
                            e.message,
                            void (0, v.YG)("connectSocket", r, e.message)
                          );
                        }
                      } else
                        (0, v.YG)("connectSocket", r, `invalid url "${r.url}"`);
                  },
                  closeSocket(e) {
                    var r = Zo.get(t);
                    for (var n in (r && r.readyState !== r.CLOSED
                      ? ((r.readyState = r.CLOSED), r.close(e))
                      : (0, v.YG)(
                          "closeSocket",
                          e,
                          "WebSocket is not connected"
                        ),
                    Go)) {
                      var o = Go[n];
                      o.__socketInstance__ === t &&
                        ((o.readyState = o.CLOSED), o !== r && o.close());
                    }
                  },
                  sendSocketMessage(e) {
                    var r = Zo.get(t);
                    r && r.readyState === r.OPEN
                      ? r.send(e)
                      : (0, v.YG)(
                          "sendSocketMessage",
                          e,
                          "WebSocket is not connected"
                        );
                  },
                  onSocketOpen: Ho(t, "Open"),
                  onSocketClose: Ho(t, "Close"),
                  onSocketMessage: Ho(t, "Message"),
                  onSocketError: Ho(t, "Error"),
                };
              },
              Jo = Yo(),
              Xo = n(347),
              zo = (e = {}) => {
                var t = Xo.q.workerId,
                  r = g()(g()({}, e), {}, { workerId: t });
                return _o(r);
              },
              Qo = !1,
              ei = (e) => {
                var t,
                  r = Xo.q.workerId;
                if ("app" === e) t = ue.app;
                else {
                  if ("game" !== e) throw Error("context must app or game");
                  t = ue.game;
                }
                if (!Qo) {
                  var n = t.readFile,
                    o = t.readFileSync;
                  (t.readFile = (e = {}) => {
                    var t = g()(g()({}, e), {}, { workerId: r });
                    return n(t);
                  }),
                    (t.readFileSync = (...e) => {
                      for (var t = Array.from(e), n = t.length; n < 4; n++)
                        t[n] = void 0;
                      return (t[4] = r), o(...t);
                    }),
                    (Qo = !0);
                }
                return t;
              };
            i.Z.onReady(() => {
              Ko = (0, f.aI)() ? () => ei("game") : () => ei("app");
            });
            var ti,
              ri = Jo.connectSocket,
              ni = (e = {}) => {
                var t = Xo.q.workerId,
                  r = g()(g()({}, e), {}, { workerId: t });
                return ri(r);
              };
            i.Z.onReady(() => {
              ti = (0, f.aI)() ? u : c;
            });
          },
        },
        r = {};
      function l(t) {
        var n = r[t];
        if (void 0 !== n) return n.exports;
        var o = (r[t] = { exports: {} });
        return e[t](o, o.exports, l), o.exports;
      }
      (l.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return l.d(t, { a: t }), t;
      }),
        (l.d = (e, t) => {
          for (var r in t)
            l.o(t, r) &&
              !l.o(e, r) &&
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (l.g = (function () {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new n("return this")();
          } catch (e) {
            if ("object" == typeof window) return window;
          }
        })()),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var v = l(591);
      g = v;
    })(),
    (() => {
      "use strict";
      var e = {
          d: (t, r) => {
            for (var n in r)
              e.o(r, n) &&
                !e.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
          },
          o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
          r: (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          },
        },
        t = {};
      e.r(t),
        e.d(t, { define: () => u, require: () => T, requireOnce: () => A });
      var r = globalThis,
        n = {},
        o = {};
      if (globalThis.wxModuleVersion) {
        var a = ~~globalThis.wxModuleVersion;
        globalThis.enableWxModule = 2 > a;
      } else (globalThis.wxModuleVersion = 2), (globalThis.enableWxModule = !0);
      var s = () => ({
          __wxRoute: r.__wxRoute,
          __wxAppCurrentFile__: r.__wxAppCurrentFile__,
          __wxRouteBegin: r.__wxRouteBegin,
        }),
        l = (e) => {
          (r.__wxRoute = e.__wxRoute),
            (r.__wxAppCurrentFile__ = e.__wxAppCurrentFile__),
            (r.__wxRouteBegin = e.__wxRouteBegin);
        };
      function u(e, t) {
        if (n[e] && n[e].factory) {
          var r = n[e],
            o = t.toString();
          r.factoryString || (r.factoryString = r.factory.toString()),
            o !== r.factoryString &&
              (n[e] = { status: 1, factory: t, factoryString: o });
        } else n[e] = { status: 1, factory: t };
      }
      var f = (e) => {
          if (e && i.subPackages)
            for (var t = 0, r = i.subPackages.length; t < r; t++)
              if (0 === e.indexOf(i.subPackages[t].root))
                return i.subPackages[t];
        },
        p = (e) => {
          for (var t = [], r = e.split("/"), n = 0, o = r.length; n < o; ++n) {
            var i = r[n];
            if ("" !== i && "." !== i)
              if (".." === i) {
                if (0 === t.length) {
                  t = null;
                  break;
                }
                t.pop();
              } else n + 1 < o && ".." === r[n + 1] ? n++ : t.push(i);
          }
          return t;
        },
        d = (e) => {
          var t = p(e + "/index.js").join("/");
          return n[t]
            ? t
            : ((t = p(e).join("/")),
              /\.js$/.test(t) || (t += ".js"),
              n[t] ? t : "");
        },
        g = ["wx0354ba48aadc0ab2", "wxfa43a4a7041a84de"];
      function y(e, t) {
        var r = "__APP__" === e;
        "/" === e.slice(-1) || r || (e += "/"),
          "devtools" === i.platform
            ? (_.info("[WebNode] injectSubPackages: " + e),
              c.invoke("injectSubPackages", { subPackages: [e] }, t))
            : (_.info("[WebNode] loadSubpackage: " + e),
              __appServiceSDK__.loadSubpackage({
                name: e,
                success() {
                  var n = i.subPackages.find((t) => t.root === e) || {},
                    o = Object.assign({}, n.plugins);
                  r && Object.assign(o, i.plugins);
                  var a = Object.keys(o || {}).map((e) => {
                    var t = o[e].provider,
                      r = "__plugin__/" + t;
                    return {
                      plugin_id: t,
                      prefix_path: g.includes(t) ? null : r,
                    };
                  });
                  __subContextEngine__.injectEntryFile(r ? "" : e, a),
                    t({ errMsg: "loadSubPackage:ok", loaded: !0 });
                },
                fail() {
                  _.error(`[WebNode] loadSubPackage fail ${e}`),
                    t({ errMsg: "loadSubPackage:false", loaded: !1 });
                },
              }));
      }
      var m = (e) => {
          var t = i && i.subPackages;
          t || (t = []);
          for (var r = 0; r < t.length; ++r) {
            var n = t[r].root || "";
            if (
              (n && "/" !== n.slice(-1) && (n += "/"),
              e.slice(0, n.length) === n)
            )
              return { subPackage: n, independent: !!t[r].independent };
          }
          return { subPackage: "__APP__", independent: !1 };
        },
        b = !1,
        w = [],
        k = (e) => {
          Object.keys(e).forEach((t) => {
            var r = t;
            t.endsWith("*") && (r = r.slice(0, -1));
            var n = e[t];
            e[t].endsWith("*") && (n = n.slice(0, -1)),
              w.push({ key: r, value: n });
          });
        };
      "function" == typeof i.onReady
        ? i.onReady(() => {
            "object" == typeof i.resolveAlias &&
              (b = !!Object.keys(i.resolveAlias).length) &&
              k(i.resolveAlias);
          })
        : "object" == typeof i.resolveAlias &&
          (b = !!Object.keys(i.resolveAlias).length) &&
          k(i.resolveAlias);
      var S = (e) => {
        var t = ((e) => {
            var t = e.match(/(.*)\/([^/]+)?$/);
            return t && t[1] ? t[1] : "./";
          })(e),
          r = function (r, o, a) {
            var s,
              c = t;
            if ("string" != typeof r)
              throw new Error("require args must be a string");
            if (
              ("/__wx__/private-api" === r
                ? (s = p(r).join("/"))
                : (b &&
                    (s = ((e) => {
                      var t = { key: "" },
                        r = !1;
                      if (
                        (w.forEach((n) => {
                          e.startsWith(n.key) &&
                            t.key.length < n.key.length &&
                            ((t = n), (r = !0));
                        }),
                        r)
                      ) {
                        var n = e.replace(t.key, t.value);
                        return "/" === n[0] && (n = n.slice(1)), n;
                      }
                    })(r)),
                  void 0 !== s
                    ? ((c = ""), (s = p(s).join("/")))
                    : (s = p(c + "/" + r).join("/"))),
              !s)
            )
              throw new Error(
                `can not find module : ${s}, require args is ${r}`
              );
            try {
              var l = ((e, t, r) => {
                  var o = e;
                  if (
                    (/\.js$/.test(o) || (o += ".js"),
                    "string" == typeof o && n[o])
                  )
                    return o;
                  var i = p(t);
                  if (!i) throw new Error("can not find module : " + r);
                  for (
                    var a, s, c = e.substring(i.join("/").length);
                    i.length &&
                    ((s = i.join("/") + "/miniprogram_npm" + c), !(a = d(s)));

                  )
                    i.pop();
                  return (
                    a ||
                      ((c = "/" === c[0] ? c : "/" + c),
                      (a = d((s = "miniprogram_npm" + c)))),
                    a || e
                  );
                })(s, c, r),
                u = (e) => "functional-pages" === p(e)[0];
              if (
                (u(l) !== u(e) &&
                  h.thirdErrorReport({
                    error: new Error(
                      'should not require across "functional-pages" folder'
                    ),
                    extend: 'at require("' + r + '") in ' + e,
                  }),
                "devtools" === i.platform && i.subPackages && void 0 === o)
              ) {
                var g = f(l),
                  v = f(e);
                g &&
                  g !== v &&
                  console.warn(
                    `Requires "${r}" from "${e}" without a callback may fail in production, since they are in different subPackages`
                  );
              }
              return T(l, void 0, o, r, t, a);
            } catch (e) {
              throw e;
            }
          };
        return (
          (r.async = (e) =>
            new Promise((t, n) => {
              try {
                return r(e, t, n);
              } catch (e) {
                n(e);
              }
            })),
          r
        );
      };
      function T(e, t, r, a = "", c, u) {
        if ((void 0 === t && (t = !0), "string" != typeof e))
          throw new Error("require args must be a string");
        var f = n[e];
        if (!f) {
          var p = -1 === e.indexOf("/") ? e + "/index.js" : e;
          /\.js$/.test((p = "miniprogram_npm/" + p)) || (p += ".js"),
            (f = n[p]);
        }
        if (
          (e.endsWith(".js") || (e += ".js"),
          !f &&
            "devtools" !== i.platform &&
            "undefined" != typeof __subContextEngine__)
        ) {
          var d = "/" + e.substr(0, e.length - 3) + ".appservice.js",
            h = s(),
            g = __subContextEngine__.loadJsFiles([d], null, {
              waitResult: !0,
              reportKey: `webnode-require-${e.slice(0, e.length - 3)}`,
            });
          l(h), (f = n[e]), g && g(!!f);
        }
        if ("function" != typeof r) {
          if (!f)
            throw new Error(
              `module '${e}' is not defined, require args is '${
                "" === a ? e : a
              }'`
            );
          var v = { exports: {} },
            _ = f.factory;
          if (!t || o[e])
            return (
              delete f.exports,
              (f.status = 1),
              (o[e] = !0),
              _ && _(S(e), v, v.exports),
              v.exports
            );
          if (1 === f.status) {
            var b;
            (f.exports = v.exports), (f.status = 2);
            try {
              _ && (b = _(S(e), v, v.exports));
            } catch (e) {
              throw ((f.status = 1), e);
            }
            f.exports = void 0 !== v.exports ? v.exports : b;
          }
          return f.exports;
        }
        var w = (t) => {
            var r = "function" == typeof u ? u : () => {},
              n = "async require: fail";
            "object" == typeof t && t && t.message && (n = t.message),
              r({ errMsg: n, mod: e });
          },
          k = function (...e) {
            try {
              var t = T(...e);
              r(t);
            } catch (e) {
              w(e);
            }
          };
        if (f) setTimeout(() => k(e));
        else {
          var A = s(),
            x = "string" == typeof c && m(c).independent,
            { subPackage: P, independent: I } = m(e);
          !I && x
            ? y("__APP__", (t) =>
                t && !1 === t.loaded
                  ? (w(), void l(A))
                  : "__APP__" === P
                  ? (r(k(e)), void l(A))
                  : void y(P, (t) => {
                      t && !1 === t.loaded ? w() : k(e), l(A);
                    })
              )
            : y(P, (t) => {
                t && !1 === t.loaded ? w() : k(e), l(A);
              });
        }
      }
      function A(e) {
        return T(e, !1);
      }
      (r.__modules__ = n), (v = t);
    })();
  (globalThis.define = v.define), (globalThis.require = v.require);
  (globalThis.requireOnce = v.requireOnce), (e.worker = g);
})(this);
var __WAWorkerEndTime__ = Date.now();
"function" == typeof this.__wxLibrary.onEnd && this.__wxLibrary.onEnd(),
  delete this.__wxLibrary;
/* appendSourceURL WAWorker.js */
