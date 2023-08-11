!(function (A) {
  var e = A.WXConfig;
  (Foundation.env.workerType = "accelerate"),
    (Foundation.env.typeStr = "accelerateWorker"),
    (() => {
      var A = {
          425: (A) => {
            (A.exports = function (A, e, t) {
              return (
                e in A
                  ? Object.defineProperty(A, e, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (A[e] = t),
                A
              );
            }),
              (A.exports.__esModule = !0),
              (A.exports.default = A.exports);
          },
          29: (A, e, t) => {
            var r = t(425);
            function i(A, e) {
              var t = Object.keys(A);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(A);
                e &&
                  (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                  })),
                  t.push.apply(t, r);
              }
              return t;
            }
            (A.exports = function (A) {
              for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? i(Object(t), !0).forEach(function (e) {
                      r(A, e, t[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      A,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : i(Object(t)).forEach(function (e) {
                      Object.defineProperty(
                        A,
                        e,
                        Object.getOwnPropertyDescriptor(t, e)
                      );
                    });
              }
              return A;
            }),
              (A.exports.__esModule = !0),
              (A.exports.default = A.exports);
          },
        },
        t = {};
      function r(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var n = (t[e] = { exports: {} });
        return A[e](n, n.exports, r), n.exports;
      }
      (r.n = (A) => {
        var e = A && A.__esModule ? () => A.default : () => A;
        return r.d(e, { a: e }), e;
      }),
        (r.d = (A, e) => {
          for (var t in e)
            r.o(e, t) &&
              !r.o(A, t) &&
              Object.defineProperty(A, t, { enumerable: !0, get: e[t] });
        }),
        (r.g = (function () {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (A) {
            if ("object" == typeof window) return window;
          }
        })()),
        (r.o = (A, e) => Object.prototype.hasOwnProperty.call(A, e)),
        (() => {
          "use strict";
          class A extends Error {
            constructor(A) {
              super(`APP-SERVICE-SDK:${A}`),
                (this.type = "AppServiceSdkKnownError");
            }
          }
          Error;
          var t =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          function i(e) {
            for (
              var r,
                i = "",
                n = (r =
                  ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
                    ? e
                    : new Uint8Array(e)).byteLength,
                o = 0;
              o < n;
              o++
            )
              i += String.fromCharCode(r[o]);
            return (function (e) {
              if ("function" == typeof globalThis.btoa)
                return globalThis.btoa(e);
              for (
                var r, i, n = String(e), o = "", g = 0, s = t;
                n.charAt(0 | g) || ((s = "="), g % 1);
                o += s.charAt(63 & (r >> (8 - (g % 1) * 8)))
              ) {
                if ((i = n.charCodeAt((g += 3 / 4))) > 255)
                  throw new A("btoa failed");
                r = (r << 8) | i;
              }
              return o;
            })(i);
          }
          function n(e) {
            for (
              var r = (function (e) {
                  if ("function" == typeof globalThis.atob)
                    return globalThis.atob(e);
                  var r = String(e).replace(/=+$/, ""),
                    i = "";
                  if (r.length % 4 == 1)
                    throw new A(
                      `atob failed: invalid string length ${r.length}`
                    );
                  for (
                    var n, o, g = 0, s = 0;
                    (o = r.charAt(s++));
                    ~o && ((n = g % 4 ? 64 * n + o : o), g++ % 4)
                      ? (i += String.fromCharCode(255 & (n >> ((-2 * g) & 6))))
                      : 0
                  )
                    o = t.indexOf(o);
                  return i;
                })(e),
                i = r.length,
                n = new Uint8Array(i),
                o = 0;
              o < i;
              o++
            )
              n[o] = r.charCodeAt(o);
            return n.buffer;
          }
          var o,
            g = _WebAssembly,
            s = () => {
              var A,
                e = 3584,
                t = 4096,
                r = 16,
                i = {
                  L: { C: "t", M: "O", s: "a", P: "b", Q: "q" },
                  H: { C: "v", M: "x", s: "D", P: "b", Q: "q" },
                },
                o = new g.Memory({ initial: 1 }),
                s = new Uint8Array(o.buffer),
                a = new Promise((e) =>
                  g
                    .instantiate(
                      n(
                        "AGFzbQEAAAAAEAhkeWxpbmsuMAEFkAQEAAABDwNgA39/fwBgAn9/AGAAAAI7AwNlbnYPX19zdGFja19wb2ludGVyA38BA2Vudg1fX21lbW9yeV9iYXNlA38AA2VudgZtZW1vcnkCAAEDERACAQEAAQEBAAEBAAAAAAAAB0EMEV9fd2FzbV9jYWxsX2N0b3JzAAABcAABAWUAAwFoAAQBdAAFAXYACAFPAAoBeAALAWEADAFEAA0BYgAOAXEADwqKKBADAAELCAAgACABEAILjAMBCX8gACABLQAAOgAAIAAgAS0AAToAASAAIAEtAAI6AAIgACABLQADOgADIAAgAS0ABDoABCAAIAEtAAU6AAUgACABLQAGOgAGIAAgAS0ABzoAByAAIAEtAAg6AAggACABLQAJOgAJIAAgAS0ACjoACiAAIAEtAAs6AAsgACABLQAMOgAMIAAgAS0ADToADSAAIAEtAA46AA4gACABLQAPOgAPQQQhAwNAIANBAnQiBSAAaiICQQFrLQAAIQQgAkECay0AACEHIAJBA2stAAAhBiACQQRrLQAAIQgCfyADQQNxBEAgBCEJIAghCiAHDAELIwEiAUGAAmogA0ECdmotAAAgASAGai0AAHMhCiABIAhqLQAAIQkgASAHai0AACEGIAEgBGotAAALIQQgAiACQRBrLQAAIApzOgAAIAAgBUEBcmogAkEPay0AACAGczoAACAAIAVBAnJqIAJBDmstAAAgBHM6AAAgACAFQQNyaiACQQ1rLQAAIAlzOgAAIANBAWoiA0EsRw0ACwseACAAIAEQAiAAIAIpAAg3ALgBIAAgAikAADcAsAELGAAgACABKQAANwCwASAAIAEpAAg3ALgBCwgAIAEgABAGC70JARt/QQAgACABEAdBASEWA0AgACMBIgIgAC0AAGotAAAiEToAACAAIAIgAC0ABGotAAAiEjoABCAAIAIgAC0ACGotAAAiEzoACCAAIAIgAC0ADGotAAAiFDoADCAALQABIQMgACACIAAtAAVqLQAAIhU6AAEgAC0AAyEQIAAtAAchBCAALQAPIQYgAC0ACyEFIAAtAA4hCSAALQAGIQogAC0ACiELIAAtAAIhDCAALQAJIQ0gAC0ADSEOIAAgAiADai0AACIPOgANIAAgAiAOai0AACIOOgAJIAAgAiANai0AACIN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AwA3ALABIAFBEGohASAEQRBqIgQgAkkNAAsLIANBEGokAAvUAgECfyACBEAgAEGwAWohAwNAIAMgABAGIAEgAS0AACAALQCwAXM6AAAgASABLQABIAAtALEBczoAASABIAEtAAIgAC0AsgFzOgACIAEgAS0AAyAALQCzAXM6AAMgASABLQAEIAAtALQBczoABCABIAEtAAUgAC0AtQFzOgAFIAEgAS0ABiAALQC2AXM6AAYgASABLQAHIAAtALcBczoAByABQQhqIAEtAAggAC0AuAFzOgAAIAEgAS0ACSAALQC5AXM6AAkgASABLQAKIAAtALoBczoACiABIAEtAAsgAC0AuwFzOgALIAEgAS0ADCAALQC8AXM6AAwgASABLQANIAAtAL0BczoADSABIAEtAA4gAC0AvgFzOgAOIAEgAS0ADyAALQC/AXM6AA8gAyABKQAINwAIIAMgASkAADcAACABQRBqIQEgBEEQaiIEIAJJDQALCwv4AgEDfyMAQRBrIgMkACACBEAgAEGwAWohBANAIAMgASkAADcDACADIAFBCGopAAA3AwggBCAAEAYgASABLQAAIAAtALABczoAACABIAEtAAEgAC0AsQFzOgABIAEgAS0AAiAALQCyAXM6AAIgASABLQADIAAtALMBczoAAyABIAEtAAQgAC0AtAFzOgAEIAEgAS0ABSAALQC1AXM6AAUgASABLQAGIAAtALYBczoABiABIAEtAAcgAC0AtwFzOgAHIAEgAS0ACCAALQC4AXM6AAggASABLQAJIAAtALkBczoACSABIAEtAAogAC0AugFzOgAKIAEgAS0ACyAALQC7AXM6AAsgASABLQAMIAAtALwBczoADCABIAEtAA0gAC0AvQFzOgANIAEgAS0ADiAALQC+AXM6AA4gASABLQAPIAAtAL8BczoADyAEIAMpAwg3AAggBCADKQMANwAAIAFBEGohASAFQRBqIgUgAkkNAAsLIANBEGokAAu9AgECfyACBEAgAEGwAWohBANAIAQgABAGIAEgAS0AACAALQCwAXM6AAAgASABLQABIAAtALEBczoAASABIAEtAAIgAC0AsgFzOgACIAEgAS0AAyAALQCzAXM6AAMgASABLQAEIAAtALQBczoABCABIAEtAAUgAC0AtQFzOgAFIAEgAS0ABiAALQC2AXM6AAYgASABLQAHIAAtALcBczoAByABIAEtAAggAC0AuAFzOgAIIAEgAS0ACSAALQC5AXM6AAkgASABLQAKIAAtALoBczoACiABIAEtAAsgAC0AuwFzOgALIAEgAS0ADCAALQC8AXM6AAwgASABLQANIAAtAL0BczoADSABIAEtAA4gAC0AvgFzOgAOIAEgAS0ADyAALQC/AXM6AA8gAUEQaiEBIANBEGoiAyACSQ0ACwsLhwUBFH8jAEEQayIFJAAgAgRAIABBsQFqIQcgAEGyAWohCCAAQbMBaiEJIABBtAFqIQogAEG1AWohCyAAQbYBaiEMIABBtwFqIQ0gAEG4AWohDiAAQbkBaiEPIABBugFqIRAgAEG7AWohESAAQbwBaiESIABBvQFqIRMgAEG+AWohFCAAQb8BaiEWIABBsAFqIQZBECEDA0ACQCADQRBHDQAgBSAGKQAANwMAIAUgBikACDcDCCAFIAAQBiAWIQQCQCAALQC/ASIDQf8BRw0AIBZBADoAACAUIQQgFC0AACIDQf8BRw0AIBRBADoAACATIQQgEy0AACIDQf8BRw0AIBNBADoAACASIQQgEi0AACIDQf8BRw0AIBJBADoAACARIQQgES0AACIDQf8BRw0AIBFBADoAACAQIQQgEC0AACIDQf8BRw0AIBBBADoAACAPIQQgDy0AACIDQf8BRw0AIA9BADoAACAOIQQgDi0AACIDQf8BRw0AIA5BADoAACANIQQgDS0AACIDQf8BRw0AIA1BADoAACAMIQQgDC0AACIDQf8BRw0AIAxBADoAACALIQQgCy0AACIDQf8BRw0AIAtBADoAACAKIQQgCi0AACIDQf8BRw0AIApBADoAACAJIQQgCS0AACIDQf8BRw0AIAlBADoAACAIIQQgCC0AACIDQf8BRw0AIAhBADoAACAHIQQgBy0AACIDQf8BRw0AIAdBADoAACAGIQQgBi0AACIDQf8BRw0AQQAhAyAGQQA6AAAMAQsgBCADQQFqOgAAQQAhAwsgASAVaiIEIAMgBWotAAAgBC0AAHM6AAAgA0EBaiEDIBVBAWoiFSACRw0ACwsgBUEQaiQACwuXBAEAIwELkARjfHd78mtvxTABZyv+16t2yoLJffpZR/Ct1KKvnKRywLf9kyY2P/fMNKXl8XHYMRUExyPDGJYFmgcSgOLrJ7J1CYMsGhtuWqBSO9azKeMvhFPRAO0g/LFbasu+OUpMWM/Q76r7Q00zhUX5An9QPJ+oUaNAj5KdOPW8ttohEP/z0s0ME+xfl0QXxKd+PWRdGXNggU/cIiqQiEbuuBTeXgvb4DI6CkkGJFzC06xikZXkeefIN22N1U6pbFb06mV6rgi6eCUuHKa0xujddB9LvYuKcD61ZkgD9g5hNVe5hsEdnuH4mBFp2Y6Umx6H6c5VKN+MoYkNv+ZCaEGZLQ+wVLsWjQECBAgQIECAGzYAAAAAAFIJatUwNqU4v0CjnoHz1/t84zmCmy//hzSOQ0TE3unLVHuUMqbCIz3uTJULQvrDTgguoWYo2SSydluiSW2L0SVy+PZkhmiYFtSkXMxdZbaSbHBIUP3tudpeFUZXp42dhJDYqwCMvNMK9+RYBbizRQbQLB6Pyj8PAsGvvQMBE4prOpERQU9n3OqX8s/O8LTmc5asdCLnrTWF4vk36Bx1325H8RpxHSnFiW+3Yg6qGL4b/FY+S8bSeSCa28D+eM1a9B/dqDOIB8cxsRIQWSeA7F9gUX+pGbVKDS3lep+TyZzvoOA7Ta4q9bDI67s8g1OZYRcrBH66d9Ym4WkUY1UhDH0="
                      ),
                      {
                        env: {
                          memory: o,
                          __memory_base: 0,
                          __stack_pointer: new g.Global(
                            { mutable: !0, value: "i32" },
                            3584
                          ),
                        },
                      }
                    )
                    .then((t) => {
                      (A = t.instance.exports), e();
                    })
                );
              class I {
                constructor(A = null, e = null) {
                  (this._key = A), (this._iv = e);
                }
                crypt(n, o, g, a = this._key, I = this._iv) {
                  if (("C" === o || "M" === o) && g.length % r)
                    throw new Error(
                      "Buffer length must be evenly divisible by 16 in ECB/CBC mode"
                    );
                  if (!(o in i[n])) throw new Error("Invalid mode");
                  if (16 !== a.length) throw new Error("Key length must be 16");
                  if ("C" !== o && I.length !== r)
                    throw new Error("IV length must be 16");
                  var c = A[i[n][o]];
                  ((A, t, r) => {
                    s.set(t, 3776), r && s.set(r, 3760), A(e, 3776, 3760);
                  })(A["C" === o ? "p" : "e"], a, I);
                  for (
                    var B = new Uint8Array(g.length), C = 0;
                    C < g.length;

                  ) {
                    var Q = "C" === o ? r : Math.min(g.length - C, 61440);
                    s.set(g.subarray(C, C + Q), t),
                      c(e, t, Q),
                      B.set(s.subarray(t, t + Q), C),
                      (C += Q);
                  }
                  return B;
                }
                encrypt(A, e, t, r) {
                  return this.crypt("L", A, e, t, r);
                }
                decrypt(A, e, t, r) {
                  return this.crypt("H", A, e, t, r);
                }
              }
              return (
                (I.MODE_ECB = "C"),
                (I.MODE_CBC = "M"),
                (I.MODE_CFB = "s"),
                (I.MODE_OFB = "P"),
                (I.MODE_CTR = "Q"),
                a.then(() => I)
              );
            },
            a = () => (o || (o = s()), o);
          function I(A, e, t) {
            return (
              (A = ((A) => {
                var e = 17 + ~(15 & A.length),
                  t = A.length + e,
                  r = new Uint8Array(t);
                r.set(A, 0);
                for (var i = A.length; i < t; i++) r[i] = e;
                return r;
              })(A)),
              a().then((r) => new r().encrypt(r.MODE_CBC, A, e, t))
            );
          }
          var c = function (A, e) {
              var t = A + "",
                r = t.length,
                i = e ? +e : 0;
              if ((i != i && (i = 0), !(0 > i || i >= r))) {
                var n,
                  o = t.charCodeAt(i);
                return 55296 <= o &&
                  56319 >= o &&
                  r > i + 1 &&
                  56320 <= (n = t.charCodeAt(i + 1)) &&
                  57343 >= n
                  ? 1024 * (o - 55296) + n - 56320 + 65536
                  : o;
              }
            },
            B = function () {
              var A,
                e,
                t,
                r = [],
                i = -1,
                n = arguments.length;
              if (!n) return "";
              for (var o = ""; ++i < n; ) {
                if (
                  ((t = +arguments[i]),
                  !isFinite(t) || 0 > t || 1114111 < t || Math.floor(t) != t)
                )
                  throw RangeError("Invalid code point: " + t);
                65535 >= t
                  ? r.push(t)
                  : ((A = 55296 + ((t -= 65536) >> 10)),
                    (e = (t % 1024) + 56320),
                    r.push(A, e)),
                  (i + 1 == n || r.length > 16384) &&
                    ((o += String.fromCharCode.apply(null, r)), (r.length = 0));
              }
              return o;
            };
          function C(A, e = 0) {
            var t,
              r = 0,
              i = e,
              n = A.length
                ? ((A) => {
                    if ("string" != typeof A || 0 === A.length) return 0;
                    for (var e, t = 0, r = 0; r < A.length; r++)
                      if (!((e = A.codePointAt(r)) > 55295 && e < 57344))
                        if (e < 128) t++;
                        else if (e < 2048) t += 2;
                        else if (e < 65536) t += 3;
                        else {
                          if (!(e < 1114112))
                            throw new Error("Invalid char code");
                          t += 4;
                        }
                    return t;
                  })(A)
                : 0,
              o = e + n,
              g = new Uint8Array(o >= 0 ? o : 0);
            if (0 === n || (-1 !== n && 0 === g.length)) return g;
            for (; r < A.length; r++)
              if (!(((t = c(A, r)) > 55295 && t < 57344) || i < 0))
                if (t < 128) g[i++] = t;
                else if (t < 2048)
                  (g[i++] = (t >> 6) | 192), (g[i++] = (63 & t) | 128);
                else if (t < 65536)
                  (g[i++] = (t >> 12) | 224),
                    (g[i++] = ((t >> 6) & 63) | 128),
                    (g[i++] = (63 & t) | 128);
                else {
                  if (!(t < 1114112)) throw new Error("Invalid char code");
                  (g[i++] = (t >> 18) | 240),
                    (g[i++] = ((t >> 12) & 63) | 128),
                    (g[i++] = ((t >> 6) & 63) | 128),
                    (g[i++] = (63 & t) | 128);
                }
            return g;
          }
          var Q = (() => Object.prototype.toString)(),
            u = Function.prototype.call.bind(Q);
          function l(A) {
            return u(A).slice(8, -1);
          }
          var h = (A) => "Object" === l(A);
          var p = new Map(),
            y = (A, e, t) => {
              worker.postMessage({
                cmd: "callback",
                callbackId: A,
                data: { result: e, errMsg: t },
              });
            };
          worker.onMessage((A) => {
            var e,
              { data: t, callbackId: r, cmd: i } = A;
            try {
              var n = p.get(i);
              "function" == typeof n && (e = n(t));
            } catch (A) {
              y(r, void 0, A.message);
            }
            "Promise" === l(e)
              ? e
                  .then((A) => {
                    y(r, A);
                  })
                  .catch((A) => {
                    y(r, void 0, A.message);
                  })
              : y(r, e);
          });
          var E = (A, e) => {
              p.set(A, e);
            },
            d = r(29),
            f = r.n(d),
            v = (() => (
              e.onReady(() => {
                v !== e && void 0 !== v && Object.assign(v, e);
              }),
              e
            ))(),
            D = v,
            S = 0.0329,
            L = "__return_true",
            M = (A) => `__return_resolve_${A}`,
            w = (A) => {
              if ("string" == typeof A) {
                if (A.startsWith("[") || A.startsWith("{"))
                  try {
                    A = JSON.parse(A);
                  } catch (A) {}
                return A;
              }
              return A;
            },
            O = (A) => {
              try {
                return A.map((A) => A.join("."));
              } catch (A) {
                return [];
              }
            };
          var R,
            z,
            b = class {
              constructor(A) {
                var e;
                (this.prunePointKV = (A) =>
                  A.map((A) => this.pruneOriginData(A).data)),
                  "string" == typeof A && (A = JSON.parse(A)),
                  "[object Object]" !== Object.prototype.toString.call(A) &&
                    (A = { object: {}, string: {} }),
                  (this.objectSchema = A.object),
                  (this.stringSchema = A.string),
                  (this.schema = A),
                  this.preHandleSchema({
                    appId:
                      null == D || null === (e = D.accountInfo) || void 0 === e
                        ? void 0
                        : e.appId,
                  }),
                  (this.priorities = A.priorities || {});
              }
              getSchema() {
                return this.schema;
              }
              getSchemaVersion() {
                return this.schema.schemaVersion;
              }
              preHandleSchema(A = {}) {
                var { appId: e } = A,
                  t = (A) => {
                    Array.isArray(A) &&
                      A.forEach((r, i) => {
                        if (((A) => A.if || A.test)(r)) {
                          if (r.specific)
                            if ("include" === r.specific.type) {
                              if (
                                Array.isArray(r.specific.data) &&
                                !r.specific.data.includes(e)
                              )
                                return void delete A[i];
                            } else if (
                              "exclude" === r.specific.type &&
                              Array.isArray(r.specific.data) &&
                              r.specific.data.includes(e)
                            )
                              return void delete A[i];
                          [
                            r.with,
                            r.withRely,
                            r.someWith,
                            r.someWithRely,
                          ].forEach((A) => {
                            t(A);
                          });
                        }
                      });
                  };
                t(this.schema.object.conditions),
                  t(this.schema.string.conditions);
              }
              _pruneOriginData(A, e, t = {}) {
                try {
                  if (
                    ("number" == typeof A && (A = String(A)),
                    "string" == typeof A)
                  )
                    return "replace" === e.type
                      ? e.replace.reduce((A, e) => {
                          var r = new RegExp(e.test, e.flag);
                          return A.replace(
                            r,
                            (A) => (
                              Array.isArray(t.point) && t.point.push(e.tag),
                              "$&" === e.modify ? A : e.modify
                            )
                          );
                        }, A)
                      : A;
                  if ("object" == typeof A && null !== A)
                    return (
                      Object.keys(A).forEach((r) => {
                        if ("match" === e.type)
                          return new RegExp(e.test.test, e.test.flag).test(r)
                            ? void (e.rely
                                ? (A[r] = this._pruneOriginData(
                                    A[r],
                                    e.rely,
                                    t
                                  ))
                                : null != e.replace && (A[r] = e.replace))
                            : void (
                                e.deep &&
                                (A[r] = this._pruneOriginData(A[r], e, t))
                              );
                        e.deep && (A[r] = this._pruneOriginData(A[r], e, t));
                      }),
                      A
                    );
                } catch (A) {
                  return null;
                }
                return null;
              }
              pruneOriginData(A) {
                var e =
                    "string" == typeof A
                      ? this.stringSchema.prunes
                      : this.objectSchema.prunes,
                  t = { point: [] };
                return (
                  e &&
                    e.length &&
                    e.forEach((e) => {
                      "string" == typeof A
                        ? (A = this._pruneOriginData(A, e, t))
                        : this._pruneOriginData(A, e, t);
                    }),
                  { data: A, infos: t }
                );
              }
              _resolvePendingCondition(A, e, t, r = []) {
                if (!t) return !1;
                if ("pending" !== t.status) return "resolve" === t.status;
                if (r.includes(t.key)) return !1;
                var i = !0,
                  n = !1;
                for (var o of (r.push(t.key), t.peers)) {
                  var g;
                  if (!r.includes(o.key))
                    if (
                      "pending" ===
                      (null === (g = e[o.key]) || void 0 === g
                        ? void 0
                        : g.status)
                    ) {
                      var s = f()(f()({}, e[o.key]), {}, { key: o.key }),
                        a = this._resolvePendingCondition(
                          A,
                          e,
                          s,
                          r.concat(o.key)
                        );
                      o.not && (a = !a), a || (i = !1);
                    } else {
                      var I, c, B;
                      if (o.not)
                        "resolve" ===
                          (null === (I = e[o.key]) || void 0 === I
                            ? void 0
                            : I.status) && (i = !1);
                      else
                        (null !== (c = e[o.key]) &&
                          void 0 !== c &&
                          c.status &&
                          "reject" !==
                            (null === (B = e[o.key]) || void 0 === B
                              ? void 0
                              : B.status)) ||
                          (i = !1);
                      o.resolve &&
                        (A.push(t.push.concat(`p_${o.key}`)), (n = !0));
                    }
                }
                return (
                  r.splice(
                    r.findIndex((A) => A === t.key),
                    1
                  ),
                  (e[t.key].status = n || i ? "resolve" : "reject"),
                  !(n || !i) && (A.push(t.push.concat("p_a")), !0)
                );
              }
              resolvePendingCondition(A, e) {
                Object.entries(e).forEach(([t, r]) => {
                  (r.key = t), this._resolvePendingCondition(A, e, r, []);
                });
              }
              judgeData(A, e = {}) {
                e = f()({}, e);
                var t = [],
                  r = [],
                  i = {};
                try {
                  if (h(A)) {
                    var { conditions: n } = this.objectSchema || {};
                    if (!n) return { error: "noObjectCondition", result: !1 };
                    Object.keys(A).forEach((o) => {
                      var g = A[o];
                      n.forEach((A) => {
                        var n = A.key,
                          s = [];
                        (e.__pointCondition = s), (e.__kv = r);
                        var a = this.resolveCondition(A, o, g, e);
                        if ((A.not && ((a = !a), (n = "-" + n)), A.resolve)) {
                          var I = !0;
                          if (
                            ("reverse" === A.resolve
                              ? (a = !a)
                              : "reverse-true" === A.resolve
                              ? a
                                ? (a = !a)
                                : (I = !1)
                              : "reverse-false" === A.resolve
                              ? a
                                ? (I = !1)
                                : (a = !a)
                              : "true" !== A.resolve || a
                              ? "false" === A.resolve && a && (I = !1)
                              : (I = !1),
                            I)
                          )
                            throw (
                              (t.push([n].concat(s)), M(a ? "true" : "false"))
                            );
                        }
                        if (a) {
                          if (!i[n]) {
                            if (A.peers)
                              return void (i[n] = {
                                status: "pending",
                                peers: A.peers,
                                push: [n].concat(s),
                              });
                            i[n] = { status: "resolve" };
                          }
                          A.onlyAsRely || t.push([n].concat(s));
                        }
                      });
                    });
                  } else if ("string" == typeof A) {
                    var { conditions: o } = this.stringSchema || {};
                    if (!o) return { error: "noStringCondition", result: !1 };
                    o.forEach((e) => {
                      if ("Pat" === e.type) {
                        var r = !1;
                        if (
                          new RegExp(e.test.test, e.test.flag).test(A) &&
                          ((r = !0), e.not && (r = !r), e.resolve)
                        ) {
                          var i = !0;
                          if (
                            ("reverse" === e.resolve
                              ? (r = !r)
                              : "reverse-true" === e.resolve
                              ? r
                                ? (r = !r)
                                : (i = !1)
                              : "reverse-false" === e.resolve
                              ? r
                                ? (i = !1)
                                : (r = !r)
                              : "true" !== e.resolve || r
                              ? "false" === e.resolve && r && (i = !1)
                              : (i = !1),
                            i)
                          )
                            throw (t.push([e.key]), M(r ? "true" : "false"));
                        }
                        r && t.push([e.key]);
                      }
                    });
                  }
                } catch (A) {
                  if ("string" == typeof A) {
                    var g = A.match(/__return_resolve_(.*)/);
                    if (g)
                      return (g = "false" !== g[1])
                        ? {
                            result: !0,
                            point: O(t),
                            priority: "resolve",
                            kvResult: this.prunePointKV(r),
                          }
                        : { result: !1, point: O(t) };
                  }
                }
                this.resolvePendingCondition(t, i);
                var s,
                  a,
                  I,
                  c,
                  B =
                    ((s = t),
                    (a = this.priorities),
                    (I = !1),
                    (c = O(s).reduce((A, e) => {
                      var t,
                        r,
                        i,
                        n =
                          a[
                            ((A) => {
                              try {
                                return A.split(".")[0] + ".*";
                              } catch (A) {
                                return "";
                              }
                            })(e)
                          ];
                      return (
                        (i =
                          void 0 !== n
                            ? n
                            : "-" === e[0]
                            ? null !== (t = a[e]) && void 0 !== t
                              ? t
                              : -0.5
                            : null !== (r = a[e]) && void 0 !== r
                            ? r
                            : 0.5) === S && (I = !0),
                        A + i
                      );
                    }, 0)),
                    c > 0 && I ? S : c);
                return B > 0
                  ? {
                      result: !0,
                      point: O(t),
                      priority: B,
                      kvResult: this.prunePointKV(r),
                    }
                  : { result: !1, point: O(t) };
              }
              matchCondition(A, e) {
                if (!A || void 0 === e) return null;
                if ("Pat" === A.type && A.test)
                  return new RegExp(A.test.test, A.test.flag).test(e);
                if ("If" !== A.type || !A.if) return null;
                var t = A.if;
                if (t.pre)
                  switch (t.pre) {
                    case "number":
                      e = Number.isNaN(Number(e)) && null !== e ? e : Number(e);
                      break;
                    case "string":
                      e = String(e);
                      break;
                    case "boolean":
                      e = !!e;
                  }
                switch (t.compare) {
                  case "not":
                    return !e;
                  case "eq":
                    return e == t.right;
                  case "stricteq":
                    return e === t.right;
                  case "gt":
                    return e > t.right;
                  case "gte":
                    return e >= t.right;
                  case "lt":
                    return e < t.right;
                  case "lte":
                    return e <= t.right;
                  case "Type":
                    return (
                      Object.prototype.toString.call(e) ===
                      `[object ${t.right}]`
                    );
                  default:
                    return !1;
                }
              }
              resolveCondition(
                A,
                e,
                t,
                r = {},
                { deep: i = !1, judgeWith: n = !1, prefix: o = "" } = {}
              ) {
                var g = r.__pointCondition || [],
                  s = r.__kv;
                if (((r.__pointCondition = []), void 0 === e)) return !1;
                try {
                  if (h(e) && (n || i)) {
                    var a = e;
                    return (
                      Object.keys(a).forEach((e) => {
                        if (
                          (i && (r.__pointCondition = g),
                          this.resolveCondition(A, e, a[e], r, {
                            deep: i,
                            prefix: o,
                          }))
                        )
                          throw (i || g.push(A.key), L);
                      }),
                      !1
                    );
                  }
                  var I = null;
                  if (
                    ((I = this.matchCondition(A, e)),
                    Array.isArray(A.withRelyResponse) &&
                      I &&
                      (A.withRelyResponse.every((A) =>
                        this.matchCondition(A.condition, r[A.responseKey])
                      ) ||
                        (I = !1)),
                    A.not && null !== I && (I = !I),
                    I)
                  ) {
                    var c,
                      {
                        with: B,
                        withRely: C,
                        someWith: Q,
                        someWithRely: u,
                      } = A,
                      l = !(B || C || Q || u);
                    return (
                      B
                        ? ((c = B.every((A) =>
                            this.resolveCondition(A, e, t, r, {
                              deep: !1,
                              judgeWith: !0,
                            })
                          )),
                          c &&
                            g.push("a") &&
                            s.push({ [o + `${o ? "." : ""}${e}`]: t }))
                        : C
                        ? ((c = C.every((A) =>
                            this.resolveCondition(A, t, null, r)
                          )),
                          c &&
                            g.push("b") &&
                            s.push({ [o + `${o ? "." : ""}${e}`]: t }))
                        : Q
                        ? (c = Q.some((A) => {
                            var i = this.resolveCondition(A, e, t, r, {
                              deep: !1,
                              judgeWith: !0,
                            });
                            return (
                              i &&
                                g.push("c_" + A.key) &&
                                s.push({ [o + `${o ? "." : ""}${e}`]: t }),
                              i
                            );
                          }))
                        : u &&
                          (c = u.some((A) => {
                            var i = this.resolveCondition(A, t, null, r);
                            return (
                              i &&
                                g.push("d_" + A.key) &&
                                s.push({ [o + `${o ? "." : ""}${e}`]: t }),
                              i
                            );
                          })),
                      c || l
                        ? !0
                        : ((t = w(t)),
                          !(!A.deep || !h(t)) &&
                            ((r.__pointCondition = g),
                            this.resolveCondition(A, t, null, r, {
                              deep: !0,
                              prefix: o + `${o ? "." : ""}${e}`,
                            })))
                    );
                  }
                  if ((A.deep || A.thisDeep) && ((t = w(A.deep ? t : e)), h(t)))
                    return (
                      (r.__pointCondition = g),
                      this.resolveCondition(A, t, null, r, {
                        deep: !0,
                        prefix: o + `${o ? "." : ""}${A.deep ? e : ""}`,
                      })
                    );
                } catch (A) {
                  return A === L;
                }
              }
            },
            m = (A, e = !1) => {
              e ? (z = new b(A)) : (R = new b(A));
            },
            k = (A) => (Array.isArray(A) ? [...new Set(A)] : A),
            F = (A, e = !1, t = null) => {
              var r = t || (e ? z : R);
              return !!r && !!A.data && r.judgeData(A.data, A);
            },
            G = (A, e = !1) => {
              var t = e ? z : R;
              return !!t && t.pruneOriginData(A);
            },
            H = (A = !1) => {
              var e = A ? z : R;
              if (e) return e.getSchemaVersion();
            },
            P = (A, e, t = 1, r = 0) => (A += e ? t + "," : r + ","),
            X = (A, e = !1) => {
              var t,
                r =
                  (null === (t = R) || void 0 === t ? void 0 : t.keyPriority) <=
                  A,
                i = A === S,
                n = "";
              return (
                (n = P(n, !0, String(A))),
                (n = P(n, e)),
                (n = P(n, r)),
                (n = P(n, i)).endsWith(",") && (n = n.slice(0, n.length - 1)),
                n
              );
            },
            N = (A, e) => ({
              key: e,
              type: "Pat",
              test: { test: ".*", flag: "i" },
              someWithRely: A.map((A) => {
                var e;
                return {
                  type: "Pat",
                  test: {
                    test: A.pure,
                    flag: null !== (e = A.flag) && void 0 !== e ? e : "",
                  },
                  key: A.key,
                  deep: A.deep,
                };
              }),
            }),
            j = (A, e) =>
              A.map((A) => {
                var t, r;
                return {
                  type: "Pat",
                  key: e + A.key,
                  test: {
                    test: A.matchKey,
                    flag: null !== (t = A.flag) && void 0 !== t ? t : "",
                  },
                  deep: A.deep,
                  withRely: [
                    {
                      type: "Pat",
                      key: "",
                      test: {
                        test: A.pure,
                        flag: null !== (r = A.flag) && void 0 !== r ? r : "",
                      },
                    },
                  ],
                };
              }),
            x = (A, e) => ({
              key: e,
              type: "replace",
              replace: A.map((A) => {
                var e;
                return {
                  tag: A.key,
                  test: (A.prefix || "") + A.pure + (A.suffix || ""),
                  flag: null !== (e = A.flag) && void 0 !== e ? e : "",
                  modify: A.modify || "",
                };
              }),
            }),
            _ = (A) => {
              var {
                  importantKeyInfo: e = [],
                  sensitiveInfo: t = [],
                  safeSensitiveInfo: r = [],
                } = A,
                i = [],
                n = [],
                o = [],
                g = [];
              t.forEach((A) => {
                A.matchKey ? i.push(A) : n.push(A);
              }),
                r.forEach((A) => {
                  A.matchKey ? o.push(A) : g.push(A);
                });
              var s = N(n, "4000"),
                a = j(i, "4000.d_"),
                I = N(g, "2000"),
                c = j(o, "2000.d_"),
                B = ((A, e) =>
                  A.map((A) => {
                    var t;
                    return {
                      type: "Pat",
                      key: e,
                      test: {
                        test: A.pure,
                        flag: null !== (t = A.flag) && void 0 !== t ? t : "",
                      },
                      deep: A.deep,
                    };
                  }))(e, "3000"),
                C = ((A, e) =>
                  A.map((A) => {
                    var t;
                    return {
                      key: e,
                      type: "match",
                      test: {
                        test: A.pure,
                        flag: null !== (t = A.flag) && void 0 !== t ? t : "",
                      },
                      replace: "",
                      deep: A.deep,
                    };
                  }))(e, "502"),
                Q = ((A, e, t) => ({
                  key: t,
                  type: "match",
                  test: { test: ".*", flag: "" },
                  rely: {
                    type: "replace",
                    replace: [...A, ...e].map((A) => {
                      var e;
                      return {
                        tag: A.key,
                        test: A.pure,
                        flag: null !== (e = A.flag) && void 0 !== e ? e : "",
                        modify: A.modify || "",
                      };
                    }),
                  },
                }))(g, n, "501");
              return {
                prunes: [...C, Q],
                prefixPrunes: [x([...r, ...t], "500")],
                conditions: [s, ...a, I, ...c, ...B],
              };
            },
            U = (A) => {
              try {
                var e,
                  t,
                  r,
                  i = A.common;
                if (!i) return;
                var { conditions: n, prunes: o, prefixPrunes: g } = _(i);
                Array.isArray(
                  null == A || null === (e = A.object) || void 0 === e
                    ? void 0
                    : e.conditions
                ) && A.object.conditions.unshift(...n),
                  Array.isArray(
                    null == A || null === (t = A.object) || void 0 === t
                      ? void 0
                      : t.prunes
                  ) && A.object.prunes.push(...o),
                  Array.isArray(
                    null == A || null === (r = A.string) || void 0 === r
                      ? void 0
                      : r.prunes
                  ) && A.string.prunes.push(...g);
              } catch (A) {}
            },
            W = (A) => A && A.filter((A) => A.startsWith("2000")),
            K = { req: null, res: null },
            V = {};
          E("initAesWasm", a),
            E("aesEncrypt", (A) => {
              var e,
                { data: t, tokenInfo: r } = A;
              return (
                ArrayBuffer.isView(t) || (e = C(t)),
                I(
                  e,
                  new Uint8Array(r.encryptKeyBytes),
                  new Uint8Array(r.ivBytes)
                ).then((A) => i(A))
              );
            }),
            E("aesDecrypt", (A) => {
              var e,
                { tokenInfo: t, data: r } = A;
              return (
                (e = "string" == typeof r ? n(r) : new ArrayBuffer(0)),
                (function (A, e, t) {
                  return a().then((r) => {
                    var i = new r().decrypt(r.MODE_CBC, A, e, t);
                    return (
                      (i = ((A) => A.slice(0, A.length - A[A.length - 1]))(i)),
                      i
                    );
                  });
                })(
                  new Uint8Array(e),
                  new Uint8Array(t.encryptKeyBytes),
                  new Uint8Array(t.ivBytes)
                ).then((A) => {
                  var e = (function (A) {
                    for (var e = [], t = 0, r = 0, i = 0; i < A.length; i++)
                      if (t)
                        (r |= (63 & A[i]) << (6 * --t)),
                          0 === t && e.push(B(r));
                      else {
                        if (240 == (240 & A[i])) t = 3;
                        else if (224 == (224 & A[i])) t = 2;
                        else if (192 == (192 & A[i])) t = 1;
                        else if (0 == (128 & A[i])) {
                          e.push(String.fromCharCode(A[i]));
                          continue;
                        }
                        r = (A[i] & (255 >> (t + 2))) << (6 * t);
                      }
                    return e.join("");
                  })(A);
                  return e;
                })
              );
            }),
            E("createWeAppRequestInterpreter", (A) => {
              try {
                A = JSON.parse(A);
              } catch (A) {}
              if (A.exclusive) {
                var { req: e, res: t } = A;
                return (
                  e &&
                    (K.req = {
                      priorities: {},
                      keyPriority: 0,
                      schemaVersion: A.schemaVersion,
                      object: { conditions: e, prunes: null },
                      string: { conditions: [], prunes: null },
                    }),
                  void (
                    t &&
                    (K.res = {
                      priorities: {},
                      keyPriority: 0,
                      schemaVersion: A.schemaVersion,
                      object: { conditions: t, prunes: null },
                      string: { conditions: [], prunes: null },
                    })
                  )
                );
              }
              if (K.req) m(K.req, !0);
              else {
                var r = ((A) => {
                  if (null != A && A.common) {
                    var { conditions: e } = _(A.common);
                    return {
                      priorities: {},
                      keyPriority: 0,
                      schemaVersion: A.schemaVersion,
                      object: { conditions: e, prunes: null },
                      string: { conditions: [], prunes: null },
                    };
                  }
                })(A);
                m(r, !0);
              }
              K.res
                ? ((K.res.object.prunes = A.object.prunes),
                  (K.res.string.prunes = A.string.prunes),
                  (K.res.common = A.common),
                  U(K.res))
                : U(A),
                m(K.res || A);
            }),
            E("checkRequest", (A = {}) => {
              var { requestData: e, response: t, checkResponse: r = !0 } = A;
              return ((A, e, t) => {
                var r,
                  i,
                  n,
                  o = !1;
                try {
                  try {
                    A.data = JSON.parse(A.data);
                  } catch (A) {}
                  if (e.data)
                    try {
                      e.data = JSON.parse(e.data);
                    } catch (A) {}
                  var g = F(A, !0);
                  null != g && g.result && ((o = !0), (i = g.point));
                } catch (A) {}
                if (((r = o), t))
                  try {
                    if (e.errMsg || e.statusCode >= 400)
                      return {
                        hasError: !0,
                        reportBody: e.data,
                        isImportantRequest: r,
                        isWxClientError: !0,
                      };
                    var s,
                      a,
                      I,
                      c = F(e),
                      B =
                        (n = null == c ? void 0 : c.point) &&
                        n.filter(
                          (A) =>
                            A.startsWith("4000") ||
                            A.startsWith("3000") ||
                            A.startsWith("2000")
                        );
                    return (
                      (r = !!(
                        r ||
                        (null !== (s = B) && void 0 !== s && s.length)
                      )),
                      (i = k(W(i))),
                      (B = k(W(B))),
                      null != c && c.result
                        ? f()(
                            {
                              type: "checkResponse",
                              hasError: !0,
                              reportBody:
                                null === (a = G(e.data)) || void 0 === a
                                  ? void 0
                                  : a.data,
                              reportArgs:
                                null === (I = G(A.data)) || void 0 === I
                                  ? void 0
                                  : I.data,
                              isImportantRequest: r,
                              key: X(c.priority, r),
                              point: k(c.point),
                              priority: c.priority,
                              schemaVersion: H(),
                              kvResult: c.kvResult,
                            },
                            r
                              ? {
                                  sensitiveRequestPoint: i,
                                  sensitveResponsePoint: B,
                                }
                              : {}
                          )
                        : f()(
                            {
                              type: "checkResponse",
                              isImportantRequest: r,
                              hasError: !1,
                              sensitiveRequestPoint: i,
                            },
                            r
                              ? {
                                  sensitiveRequestPoint: i,
                                  sensitveResponsePoint: B,
                                }
                              : {}
                          )
                    );
                  } catch (A) {
                    wxNativeConsole.error("interprete 24247 error:", A);
                  }
                return {
                  type: "checkRequest",
                  point: i,
                  isImportantRequest: r,
                };
              })(e, t, r);
            }),
            E("resolveInteractiveApiContent", (A = {}) => {
              var { content: e } = A;
              return F({ data: e });
            }),
            E("resolveApiFullRule", (A = {}) => {
              var e = ((A = {}) => {
                var { name: e, rules: t, data: r } = A,
                  i = V[e];
                return i || (i = V[e] = new b(t)), F({ data: r }, !1, i);
              })({ data: A.data, rules: A.rules, name: "api" });
              return e;
            });
        })();
    })();
})(this);
/* appendSourceURL WAAccelerateWorker.js */
