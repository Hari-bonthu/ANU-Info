import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function JubileePage() {
  const [heroComplete, setHeroComplete] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: "radial-gradient(1200px 700px at 50% -10%, #fffaeb 0%, #fdf6e1 55%, #f5e9c4 100%)",
    color: "#3a2a08"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-16 text-center md:pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(JubileeScrollHero, { onComplete: () => setHeroComplete(true) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "timeline", className: "mx-auto max-w-6xl px-6 pb-24 transition-all duration-700", style: {
      opacity: heroComplete ? 1 : 0,
      transform: heroComplete ? "translateY(0)" : "translateY(18px)",
      pointerEvents: heroComplete ? "auto" : "none"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: [{
      year: "1976",
      title: "Founded",
      body: "ANU was established to advance higher education in Andhra Pradesh."
    }, {
      year: "2000",
      title: "Growth",
      body: "Expansion into research, professional, and interdisciplinary programs."
    }, {
      year: "2026",
      title: "Golden Jubilee",
      body: "Fifty years of legacy, learning, and leadership."
    }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border p-6 backdrop-blur-sm", style: {
      borderColor: "rgba(138,106,20,0.25)",
      background: "rgba(255,255,255,0.6)",
      boxShadow: "0 10px 30px -20px rgba(138,106,20,0.4)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-3xl", style: {
        backgroundImage: "linear-gradient(135deg,#ffedd5 0%,#fb923c 30%,#f97316 60%,#9a3412 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }, children: m.year }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold", style: {
        color: "#2a1d05"
      }, children: m.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", style: {
        color: "#5a4310"
      }, children: m.body })
    ] }, m.year)) }) })
  ] });
}
const jubileeCelebrationPieces = Array.from({
  length: 64
}, (_, i) => {
  const colors = ["#111827", "#1f2937", "#f5d77a", "#f97316", "#991414", "#ffedd5"];
  const shapes = ["rect", "circle", "streamer"];
  return {
    id: i,
    color: colors[i % colors.length],
    delay: i % 20 * 120 + Math.floor(i / 20) * 220,
    duration: 4800 + i % 10 * 260,
    left: 2 + i * 19 % 96,
    drift: (i % 13 - 6) * 10,
    size: 5 + i % 5 * 2,
    rotation: i * 41 % 360,
    shape: shapes[i % shapes.length]
  };
});
function JubileeCelebrationFall() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-x-0 top-0 z-30 h-[min(720px,100vh)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes jh-confetti-fall {
          0% {
            opacity: 0;
            transform: translate3d(0, -16vh, 0) rotate(0deg);
          }
          8% {
            opacity: 1;
          }
          78% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--jh-drift), 112vh, 0) rotate(760deg);
          }
        }
      ` }),
    jubileeCelebrationPieces.map((piece) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0 block", style: {
      left: `${piece.left}%`,
      width: piece.shape === "streamer" ? piece.size * 0.55 : piece.size,
      height: piece.shape === "streamer" ? piece.size * 3.4 : piece.size * 1.35,
      borderRadius: piece.shape === "circle" ? "999px" : piece.shape === "streamer" ? "999px" : "2px",
      background: piece.shape === "streamer" ? `linear-gradient(180deg, ${piece.color}, transparent)` : piece.color,
      boxShadow: piece.color === "#111827" || piece.color === "#1f2937" ? "0 0 0 1px rgba(255,244,194,0.14)" : "0 0 12px rgba(245,215,122,0.4)",
      opacity: 0,
      transform: `rotate(${piece.rotation}deg)`,
      animation: `jh-confetti-fall ${piece.duration}ms cubic-bezier(0.2,0.7,0.2,1) ${piece.delay}ms 1 forwards`,
      "--jh-drift": `${piece.drift}vw`
    } }, piece.id))
  ] });
}
function JubileeScrollHero({
  onComplete
}) {
  const [phase, setPhase] = reactExports.useState("idle");
  reactExports.useEffect(() => {
    const t = setTimeout(() => setPhase("expanding"), 120);
    return () => clearTimeout(t);
  }, []);
  reactExports.useEffect(() => {
    if (phase === "expanding") {
      const t = setTimeout(() => setPhase("unfurling"), 700);
      return () => clearTimeout(t);
    }
    if (phase === "unfurling") {
      const t = setTimeout(() => {
        setPhase("revealed");
        onComplete?.();
      }, 1100);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);
  const isOpen = phase !== "idle";
  const isUnfurled = phase === "unfurling" || phase === "revealed";
  const showText = phase === "revealed";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes jh-shine-slow {
          0%{left:-60%} 100%{left:130%}
        }
        @keyframes jh-shine {
          0%{left:-60%} 100%{left:130%}
        }
        @keyframes jh-float {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)}
        }
        @keyframes jh-pulse-glow {
          0%,100%{opacity:1} 50%{opacity:0.75}
        }
        @keyframes jh-content-in {
          0%{opacity:0;transform:translateY(14px) scale(0.97)}
          100%{opacity:1;transform:translateY(0) scale(1)}
        }
        @keyframes jh-below-in {
          0%{opacity:0;transform:translateY(20px)}
          100%{opacity:1;transform:translateY(0)}
        }
      ` }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(JubileeCelebrationFall, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: "100%",
      maxWidth: 1e3,
      height: "clamp(300px, 48vw, 520px)",
      transform: isOpen ? "scale(1)" : "scale(0.18)",
      opacity: isOpen ? 1 : 0,
      transition: "transform 1200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease-out",
      position: "relative",
      zIndex: 20
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollCanvas, { unfurled: isUnfurled, showText }) }),
    showText && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-10 max-w-2xl text-sm leading-relaxed md:text-base", style: {
        color: "#5a4310",
        animation: "jh-below-in 900ms cubic-bezier(0.22,1,0.36,1) 200ms both"
      }, children: "Five decades of academic excellence, research, and impact. Join us as we honour the legacy and reimagine the next fifty years." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", style: {
        animation: "jh-below-in 900ms cubic-bezier(0.22,1,0.36,1) 450ms both"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5", style: {
          background: "linear-gradient(135deg,#ffedd5 0%,#fb923c 30%,#f97316 60%,#9a3412 100%)",
          color: "#2a1d05",
          boxShadow: "0 10px 30px -10px rgba(255,215,0,0.6), inset 0 1px 0 rgba(255,255,255,0.5)"
        }, children: "Back to University Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timeline", className: "rounded-full border px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/5", style: {
          borderColor: "rgba(138,106,20,0.5)",
          color: "#3a2a08"
        }, children: "Explore the Journey" })
      ] })
    ] })
  ] });
}
function ScrollCanvas({
  unfurled,
  showText
}) {
  const ROD_W = 56;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-y-2 overflow-hidden", style: {
      left: ROD_W - 10,
      right: ROD_W - 10,
      transform: unfurled ? "scaleX(1)" : "scaleX(0.02)",
      transformOrigin: "center",
      transition: "transform 2000ms cubic-bezier(0.16, 1, 0.3, 1)",
      background: "radial-gradient(140% 160% at 50% 50%, #b91c1c 0%, #991414 55%, #6b0d0d 100%)",
      boxShadow: "inset 0 0 80px rgba(0,0,0,0.45), inset 0 0 120px rgba(255,200,120,0.08), 0 40px 80px -30px rgba(80,10,10,0.55)",
      borderTop: "2px solid rgba(212,175,55,0.65)",
      borderBottom: "2px solid rgba(212,175,55,0.65)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrnateGoldBorder, {}),
      unfurled && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-y-4 w-[55%]", style: {
          left: "-60%",
          background: "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.85) 50%, transparent 65%)",
          animation: "jh-shine-slow 1800ms cubic-bezier(0.22,1,0.36,1) 100ms 1 forwards",
          mixBlendMode: "screen",
          filter: "blur(2px)"
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-y-4 w-[35%]", style: {
          left: "-50%",
          background: "linear-gradient(115deg, transparent 40%, rgba(255,244,194,0.7) 50%, transparent 60%)",
          animation: "jh-shine-slow 2200ms cubic-bezier(0.22,1,0.36,1) 500ms 1 forwards",
          mixBlendMode: "screen",
          filter: "blur(6px)"
        } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center px-8 text-center", style: {
        opacity: 1
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-xs uppercase tracking-[0.45em] md:text-sm", style: {
          color: "#f5d77a"
        }, children: "Celebrating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-serif font-bold leading-none", style: {
          fontSize: "clamp(44px, 9vw, 96px)",
          backgroundImage: "linear-gradient(135deg,#fff7c0 0%,#f5d060 25%,#e8b820 50%,#f5d060 75%,#fff7c0 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          filter: "drop-shadow(0 2px 0 rgba(80,40,5,0.55)) drop-shadow(0 0 18px rgba(255,200,80,0.35))"
        }, children: "50 Years" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-serif italic", style: {
          fontSize: "clamp(18px, 3.2vw, 34px)",
          color: "#ffe9a8"
        }, children: "Golden Jubilee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-px w-24", style: {
          background: "linear-gradient(90deg, transparent, #f5d77a, transparent)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-semibold uppercase tracking-[0.3em]", style: {
          fontSize: "clamp(10px, 1.6vw, 16px)",
          color: "#fff4d1"
        }, children: "Acharya Nagarjuna University" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 tracking-[0.5em]", style: {
          fontSize: "clamp(9px, 1.2vw, 13px)",
          color: "#f5d77a"
        }, children: "1976 — 2026" })
      ] }),
      showText && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 -left-1/3 w-1/2", style: {
        background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
        animation: "jh-shine 6s cubic-bezier(0.22,1,0.36,1) 0.4s infinite",
        mixBlendMode: "screen"
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OrnateRod, { side: "left", width: ROD_W, unfurled }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OrnateRod, { side: "right", width: ROD_W, unfurled })
  ] });
}
function OrnateGoldBorder() {
  const W = 980;
  const H = 560;
  const bandH = 44;
  const archW = 29;
  const archCount = Math.floor((W - 68) / archW);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { "aria-hidden": true, preserveAspectRatio: "none", style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%"
  }, viewBox: `0 0 ${W} ${H}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "18", y: "18", width: W - 36, height: H - 36, fill: "none", stroke: "rgba(255,220,80,0.72)", strokeWidth: "1.4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "26", y: "26", width: W - 52, height: H - 52, fill: "none", stroke: "rgba(200,160,40,0.4)", strokeWidth: "0.7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "34", y: "34", width: W - 68, height: H - 68, fill: "none", stroke: "rgba(255,220,80,0.55)", strokeWidth: "0.9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "18", y: "18", width: W - 36, height: bandH, fill: "rgba(0,0,0,0.2)", stroke: "rgba(255,220,80,0.5)", strokeWidth: "0.7" }),
    Array.from({
      length: archCount
    }, (_, i) => {
      const x = 34 + i * archW;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${x} ${18 + bandH} Q${x} ${18 + bandH - 20} ${x + archW / 2} ${18 + bandH - 20} Q${x + archW} ${18 + bandH - 20} ${x + archW} ${18 + bandH}`, fill: "rgba(255,210,60,0.2)", stroke: "rgba(255,215,70,0.88)", strokeWidth: "0.75" }, `ta${i}`);
    }),
    Array.from({
      length: archCount
    }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 34 + i * archW + archW / 2, cy: 31, r: 2.2, fill: "rgba(255,220,80,0.75)" }, `td${i}`)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "18", y: H - 18 - bandH, width: W - 36, height: bandH, fill: "rgba(0,0,0,0.2)", stroke: "rgba(255,220,80,0.5)", strokeWidth: "0.7" }),
    Array.from({
      length: archCount
    }, (_, i) => {
      const x = 34 + i * archW;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${x} ${H - 18 - bandH} Q${x} ${H - 18 - bandH + 20} ${x + archW / 2} ${H - 18 - bandH + 20} Q${x + archW} ${H - 18 - bandH + 20} ${x + archW} ${H - 18 - bandH}`, fill: "rgba(255,210,60,0.2)", stroke: "rgba(255,215,70,0.88)", strokeWidth: "0.75" }, `ba${i}`);
    }),
    Array.from({
      length: archCount
    }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 34 + i * archW + archW / 2, cy: H - 31, r: 2.2, fill: "rgba(255,220,80,0.75)" }, `bd${i}`)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "18", y: "18", width: bandH, height: H - 36, fill: "rgba(0,0,0,0.2)", stroke: "rgba(255,220,80,0.5)", strokeWidth: "0.7" }),
    Array.from({
      length: 14
    }, (_, i) => {
      const y = 62 + i * 32;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${18 + bandH} ${y} Q${18 + bandH - 20} ${y} ${18 + bandH - 20} ${y + 16} Q${18 + bandH - 20} ${y + 32} ${18 + bandH} ${y + 32}`, fill: "rgba(255,210,60,0.2)", stroke: "rgba(255,215,70,0.88)", strokeWidth: "0.75" }, `la${i}`);
    }),
    Array.from({
      length: 14
    }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 31, cy: 78 + i * 32, r: 2.2, fill: "rgba(255,220,80,0.75)" }, `ld${i}`)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: W - 18 - bandH, y: "18", width: bandH, height: H - 36, fill: "rgba(0,0,0,0.2)", stroke: "rgba(255,220,80,0.5)", strokeWidth: "0.7" }),
    Array.from({
      length: 14
    }, (_, i) => {
      const y = 62 + i * 32;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${W - 18 - bandH} ${y} Q${W - 18 - bandH + 20} ${y} ${W - 18 - bandH + 20} ${y + 16} Q${W - 18 - bandH + 20} ${y + 32} ${W - 18 - bandH} ${y + 32}`, fill: "rgba(255,210,60,0.2)", stroke: "rgba(255,215,70,0.88)", strokeWidth: "0.75" }, `ra${i}`);
    }),
    Array.from({
      length: 14
    }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: W - 31, cy: 78 + i * 32, r: 2.2, fill: "rgba(255,220,80,0.75)" }, `rd${i}`)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "68", y: "68", width: W - 136, height: H - 136, fill: "none", stroke: "rgba(255,200,50,0.38)", strokeWidth: "0.6", strokeDasharray: "3 3", rx: "2" }),
    [[18, 18], [W - 62, 18], [18, H - 62], [W - 62, H - 62]].map(([ox, oy], idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${ox + 22},${oy + 22})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "18", fill: "rgba(100,65,8,0.65)", stroke: "rgba(255,220,80,0.9)", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "12", fill: "rgba(160,110,18,0.4)", stroke: "rgba(255,220,80,0.7)", strokeWidth: "0.7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "5.5", fill: "rgba(255,210,60,0.65)", stroke: "rgba(255,235,110,0.95)", strokeWidth: "0.6" }),
      Array.from({
        length: 8
      }, (_, p) => {
        const a = p * Math.PI / 4;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${(Math.cos(a) * 6).toFixed(1)} ${(Math.sin(a) * 6).toFixed(1)} L${(Math.cos(a) * 16).toFixed(1)} ${(Math.sin(a) * 16).toFixed(1)}`, stroke: "rgba(255,220,80,0.85)", strokeWidth: "2", strokeLinecap: "round", fill: "none" }, p);
      })
    ] }, idx)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${W / 2},18)`, stroke: "rgba(255,220,80,0.92)", fill: "rgba(255,210,60,0.28)", strokeWidth: "0.9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-38 44 L-24 14 L-38 24 L0 4 L38 24 L24 14 L38 44 Z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "28", r: "5.5", fill: "rgba(255,215,60,0.7)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "-38", y1: "44", x2: "38", y2: "44", stroke: "rgba(255,220,80,0.85)", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${W / 2},${H - 62})`, stroke: "rgba(255,220,80,0.92)", fill: "rgba(255,210,60,0.28)", strokeWidth: "0.9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-38 0 L-24 30 L-38 20 L0 40 L38 20 L24 30 L38 0 Z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "16", r: "5.5", fill: "rgba(255,215,60,0.7)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "-38", y1: "0", x2: "38", y2: "0", stroke: "rgba(255,220,80,0.85)", strokeWidth: "1.2" })
    ] })
  ] });
}
function OrnateRod({
  side,
  width,
  unfurled
}) {
  const offset = unfurled ? 0 : `calc(50% - ${width - 2}px)`;
  const bodyW = width - 8;
  const rodH = 600;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0", style: {
    width,
    height: "100%",
    [side]: offset,
    transition: `${side} 1600ms cubic-bezier(0.22, 1, 0.36, 1)`,
    filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.4))"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: -28,
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "radial-gradient(circle at 32% 28%, #ffedd5, #fb923c 52%, #9a3412 100%)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.7)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: -6,
      width: width + 4,
      height: 11,
      borderRadius: 6,
      background: "linear-gradient(180deg,#ffedd5 0%,#fb923c 50%,#9a3412 100%)",
      boxShadow: "0 2px 5px rgba(0,0,0,0.45)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "absolute",
      left: "50%",
      top: 0,
      transform: "translateX(-50%)",
      width: bodyW,
      height: "100%",
      borderRadius: bodyW / 2,
      overflow: "hidden",
      background: "linear-gradient(90deg,#1e1000 0%,#5a3e0a 10%,#a87420 22%,#ddb030 35%,#ffe870 50%,#ddb030 65%,#a87420 78%,#5a3e0a 90%,#1e1000 100%)",
      boxShadow: "0 0 0 1px rgba(255,240,180,0.3), inset 0 0 14px rgba(80,50,5,0.45)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { "aria-hidden": true, width: bodyW, height: rodH, viewBox: `0 0 ${bodyW} ${rodH}`, style: {
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0.52
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M4 0 Q6 80 4 160 Q3 240 5 320 Q6 400 4 480 Q3 560 5 ${rodH}`, fill: "none", stroke: "rgba(30,14,0,0.5)", strokeWidth: "0.9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M9 0 Q11 100 9 200 Q8 300 10 400 Q11 500 9 ${rodH}`, fill: "none", stroke: "rgba(255,190,60,0.28)", strokeWidth: "0.6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${bodyW / 2 - 2} 0 Q${bodyW / 2} 120 ${bodyW / 2 - 2} 240 Q${bodyW / 2 - 3} 360 ${bodyW / 2 - 1} 480 Q${bodyW / 2} 540 ${bodyW / 2 - 2} ${rodH}`, fill: "none", stroke: "rgba(30,14,0,0.4)", strokeWidth: "0.8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${bodyW - 8} 0 Q${bodyW - 6} 90 ${bodyW - 8} 180 Q${bodyW - 9} 270 ${bodyW - 7} 360 Q${bodyW - 6} 450 ${bodyW - 8} ${rodH}`, fill: "none", stroke: "rgba(30,14,0,0.35)", strokeWidth: "0.7" }),
        [16, 32, 50, 68, 84].map((pct) => {
          const y = pct / 100 * rodH;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: bodyW / 2, cy: y, rx: bodyW / 2, ry: 3.8, fill: "none", stroke: "rgba(18,10,0,0.62)", strokeWidth: "2.4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: bodyW / 2, cy: y - 1.2, rx: bodyW / 2, ry: 3.8, fill: "none", stroke: "rgba(255,225,90,0.7)", strokeWidth: "1.1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: bodyW / 2, cy: y + 0.8, rx: bodyW / 2 - 2, ry: 2.2, fill: "rgba(255,200,60,0.14)", stroke: "none" })
          ] }, pct);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, style: {
        position: "absolute",
        top: 0,
        left: "50%",
        width: 3,
        height: "100%",
        transform: "translateX(-50%)",
        background: "linear-gradient(180deg, transparent 4%, rgba(255,255,255,0.7) 50%, transparent 96%)",
        mixBlendMode: "screen"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, style: {
        position: "absolute",
        top: 0,
        left: "18%",
        width: 1.5,
        height: "100%",
        background: "linear-gradient(180deg, transparent 10%, rgba(255,255,255,0.32) 50%, transparent 90%)",
        mixBlendMode: "screen"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: -6,
      width: width + 4,
      height: 11,
      borderRadius: 6,
      background: "linear-gradient(0deg,#ffedd5 0%,#fb923c 50%,#9a3412 100%)",
      boxShadow: "0 -2px 5px rgba(0,0,0,0.4)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: -28,
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "radial-gradient(circle at 32% 28%, #ffedd5, #fb923c 52%, #9a3412 100%)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.7)"
    } })
  ] });
}
export {
  JubileePage as component
};
