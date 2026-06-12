import { Link } from "@tanstack/react-router";

export function GoldenJubileeScroll({ variant = "fixed" }: { variant?: "fixed" | "inline" } = {}) {
  return (
    <Link
      to="/jubilee"
      aria-label="Open Golden Jubilee 1976 - 2026"
      className={
        variant === "fixed"
          ? "group fixed right-4 top-4 z-[60] md:right-6 md:top-6"
          : "group relative inline-flex mx-auto"
      }
    >
      <ScrollBadge />
    </Link>
  );
}

function ScrollBadge() {
  return (
    <div
      className="relative flex h-16 items-center gap-2 rounded-full pl-2 pr-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.05] md:h-20 md:pl-3 md:pr-5"
      style={{
        background:
          "linear-gradient(135deg,#fff7c0 0%,#f5d060 28%,#d4af37 54%,#b88916 78%,#7a4f05 100%)",
        boxShadow:
          "0 14px 36px -10px rgba(212,175,55,0.9), 0 0 0 2px rgba(255,244,194,0.75), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 8px rgba(80,55,5,0.3)",
        animation:
          "jubilee-pulse-glow 3.2s ease-in-out infinite, jubilee-float 4s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes jubilee-pulse-glow {
          0%,100%{box-shadow:0 14px 36px -10px rgba(212,175,55,0.9),0 0 0 2px rgba(255,244,194,0.75),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 8px rgba(80,55,5,0.3)}
          50%{box-shadow:0 18px 46px -8px rgba(245,208,96,1),0 0 0 3px rgba(255,247,192,0.95),inset 0 2px 0 rgba(255,255,255,0.86),inset 0 -3px 8px rgba(80,55,5,0.36)}
        }
        @keyframes jubilee-float {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)}
        }
        @keyframes jubilee-shine {
          0%{left:-60%} 100%{left:130%}
        }
      `}</style>

      <RodCurl side="left" height={48} />

      <span className="flex flex-col items-center px-1 leading-none">
        <span
          className="text-[9px] font-semibold uppercase tracking-[0.3em] md:text-[10px]"
          style={{ color: "#4a3206", textShadow: "0 1px 0 rgba(255,255,255,0.58)" }}
        >
          Celebrating
        </span>
        <span
          className="text-xl font-extrabold leading-none md:text-2xl"
          style={{ color: "#241600", textShadow: "0 1px 0 rgba(255,255,255,0.58)" }}
        >
          50
        </span>
        <span
          className="text-[10px] font-bold tracking-[0.25em] md:text-[11px]"
          style={{ color: "#332204", textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
        >
          GOLDEN JUBILEE
        </span>
        <span
          className="text-[8px] font-medium tracking-[0.35em] md:text-[9px]"
          style={{ color: "#4a3206" }}
        >
          1976 - 2026
        </span>
      </span>

      <RodCurl side="right" height={48} />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <span
          className="absolute inset-y-0 -left-1/3 w-1/2"
          style={{
            background:
              "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
            animation: "jubilee-shine 2.8s ease-in-out infinite",
            mixBlendMode: "screen",
          }}
        />
      </span>
    </div>
  );
}

function RodCurl({ side, height }: { side: "left" | "right"; height: number }) {
  const insetShadow =
    side === "left"
      ? "inset -2px 0 4px rgba(0,0,0,0.45), inset 2px 0 2px rgba(255,255,255,0.35)"
      : "inset 2px 0 4px rgba(0,0,0,0.45), inset -2px 0 2px rgba(255,255,255,0.35)";

  return (
    <span
      aria-hidden
      className="relative block overflow-hidden rounded-full"
      style={{
        width: 14,
        height,
        background:
          "linear-gradient(90deg,#2a1800 0%,#6b4e0c 14%,#c09020 28%,#ffe070 50%,#c09020 72%,#6b4e0c 86%,#2a1800 100%)",
        boxShadow: insetShadow,
      }}
    >
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 10px, rgba(40,20,0,0.18) 10px, rgba(40,20,0,0.18) 11px)",
        }}
      />
      <span
        aria-hidden
        className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2"
        style={{
          background: "linear-gradient(180deg,transparent,rgba(255,255,255,0.6),transparent)",
          mixBlendMode: "screen",
        }}
      />
    </span>
  );
}
