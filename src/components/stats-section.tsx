import { useEffect, useRef, useState } from "react";
import { Award, BookOpen, FlaskConical, Sparkles, Trophy } from "lucide-react";

type Stat = {
  icon: typeof Award;
  value: number;
  suffix?: string;
  label: string;
  caption: string;
};

const stats: Stat[] = [
  {
    icon: Award,
    value: 66,
    label: "Patents",
    caption: "Granted to faculty & researchers",
    suffix: "",
  },
  {
    icon: FlaskConical,
    value: 200,
    suffix: "+",
    label: "Research Projects",
    caption: "Funded by ICSSR, DST, UGC & industry",
  },
  {
    icon: Trophy,
    value: 112,
    label: "National Ranks",
    caption: "Academic & sports achievements",
    suffix: "",
  },
  {
    icon: BookOpen,
    value: 15000,
    suffix: "+",
    label: "Research Publications",
    caption: "In peer-reviewed journals worldwide",
  },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const startTs = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}

function StatCard({ stat, inView, index }: { stat: Stat; inView: boolean; index: number }) {
  const Icon = stat.icon;
  const v = useCountUp(stat.value, inView);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white p-6 text-center shadow-[0_18px_50px_-34px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[oklch(0.65_0.19_42)]/40 hover:shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] sm:p-8"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.18_45)]/60 to-transparent opacity-50" />

      <div className="relative flex flex-col items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[oklch(0.72_0.18_45)]/30 bg-[oklch(0.72_0.18_45)]/10 text-[oklch(0.78_0.17_45)]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {stat.label}
        </span>
      </div>

      <div className="relative mt-6 flex min-h-[64px] items-baseline justify-center gap-1">
        <span className="text-5xl font-semibold leading-none tracking-tight text-[oklch(0.22_0.06_265)] tabular-nums sm:text-6xl">
          {v.toLocaleString()}
        </span>
        {stat.suffix && (
          <span className="text-3xl font-semibold leading-none text-[oklch(0.65_0.19_42)] sm:text-4xl">
            {stat.suffix}
          </span>
        )}
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{stat.caption}</p>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setInView(true), {
      threshold: 0.25,
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_45)]/30 bg-[oklch(0.72_0.18_45)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.55_0.16_42)]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            By the Numbers
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[oklch(0.22_0.06_265)] sm:text-4xl lg:text-5xl">
            Five decades of impact, measured in milestones
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From pioneering research to national recognition - a snapshot of what Acharya Nagarjuna
            University delivers, year after year.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
