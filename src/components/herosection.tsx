import { useState, useEffect } from "react";
import { ArrowRight, Camera, GraduationCap, Users, BookOpen, Microscope } from "lucide-react";
import bgg1 from "@/assets/bgg/bgg1.jpg";
import bgg2 from "@/assets/bgg/bgg2.jpg";
import bgg6 from "@/assets/bgg/bgg6.jpg";

const bgImages = [bgg1, bgg2, bgg6];

const stats = [
  { icon: GraduationCap, value: "50+", label: "Years of Excellence" },
  { icon: BookOpen, value: "250+", label: "Academic Programs" },
  { icon: Users, value: "30,000+", label: "Students Empowered" },
  { icon: Users, value: "500+", label: "Faculty Members" },
  { icon: Microscope, value: "100+", label: "Research Centres" },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[550px] w-full overflow-hidden bg-[#050d1a]">
      {/* ── Background campus image carousel ── */}
      <div className="absolute inset-0">
        {bgImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Acharya Nagarjuna University campus image ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-[1500ms] ease-in-out ${
              currentSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ filter: "brightness(1.10) saturate(1.22) contrast(1.04)" }}
          />
        ))}

        {/* Teal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 via-teal-900/40 to-teal-950/80" />

        {/* Left-heavy overlay: dark on left (text), clear on right (gate photo) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(108deg, rgba(5,13,26,0.95) 0%, rgba(5,13,26,0.80) 26%, rgba(5,13,26,0.38) 48%, rgba(5,13,26,0.08) 66%, rgba(5,13,26,0.02) 100%)",
          }}
        />

        {/* Bottom vignette so stats bar sits on dark base */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: "linear-gradient(to top, rgba(5,13,26,0.94) 0%, transparent 100%)" }}
        />
      </div>

      {/* ── Gold top border ── */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-70" />

      {/* ── NAAC A+ badge top-right ── */}
      {/* <div className="absolute top-16 right-5 z-10 hidden md:flex flex-col items-center rounded-sm border border-white/20 bg-white/10 px-3 py-1.5 text-center backdrop-blur-sm shadow-xl">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]">NAAC</span>
        <span className="text-2xl font-black leading-none text-white">A+</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
          Grade
        </span>
        <div className="mt-1 text-[9px] leading-tight text-white/60">
          Excellence in
          <br />
          Education &amp; Research
        </div>
      </div> */}

      {/* ── Main layout ── */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 lg:px-8">
        {/* Hero text */}
        <div className="mt-8 flex-1 flex flex-col justify-center max-w-[90%] md:max-w-[52%]">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#c9a84c]">
            Igniting Knowledge.
          </p>

          <h1
            className="mt-2.5 text-3xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
            style={{ textShadow: "0 4px 32px rgba(0,0,0,0.55)" }}
          >
            Inspiring
            <br />
            Generations.
          </h1>

          <div className="mt-3 h-[3px] w-12 rounded-full bg-[#c9a84c]" />

          <p className="mt-4 max-w-sm text-[14px] leading-6 text-white/75">
            Acharya Nagarjuna University is a hub of academic excellence, innovation and holistic
            development.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#about-university"
              className="group inline-flex items-center gap-2 rounded-sm border-2 border-[#c9a84c] bg-[#c9a84c] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#050d1a] transition-all hover:bg-transparent hover:text-[#c9a84c]"
            >
              Explore ANU
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/campus-life"
              className="group inline-flex items-center gap-2 rounded-sm border-2 border-white/40 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/20"
            >
              <Camera className="h-4 w-4" />
              Take a Virtual Tour
            </a>
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="flex gap-2 mb-4 justify-start">
          {bgImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${
                currentSlide === idx ? "bg-[#c9a84c] w-6" : "bg-white/30 hover:bg-white/60 w-1.5"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ── Stats bar ── */}
        <div>
          {/* Gold separator */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

          {/*
            grid-cols-5 on mobile (5 stats fill the row)
            lg: adds a 6th auto column for the tagline so it never overlaps
          */}
          <div className="grid grid-cols-5 lg:grid-cols-[repeat(5,1fr)_auto] items-center bg-gradient-to-r from-[#050d1a]/95 via-[#0a1628]/90 to-[#050d1a]/80 py-3.5 backdrop-blur-sm">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center gap-1 px-3 text-center sm:px-4 ${
                    i !== stats.length - 1 ? "border-r border-white/10" : ""
                  }`}
                >
                  <Icon className="h-5 w-5 text-[#c9a84c]" aria-hidden />
                  <span className="text-base font-black leading-none text-[#c9a84c] sm:text-xl">
                    {stat.value}
                  </span>
                  <span className="text-[8px] font-medium uppercase tracking-wide text-white/60 sm:text-[10px]">
                    {stat.label}
                  </span>
                </div>
              );
            })}

            {/* Tagline — own grid column, no overlap ever */}
            <div className="hidden lg:block border-l border-white/10 pl-5 pr-4 text-right">
              <p className="whitespace-nowrap text-[12px] leading-5 text-white/55">
                Where tradition meets transformation,
              </p>
              <p className="whitespace-nowrap text-[12px] italic leading-5 text-white/85">
                we build the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
