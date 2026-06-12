import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CollegeSection } from "@/components/college-section";
import { FaqSection } from "@/components/faq-section";
import { StatsSection } from "@/components/stats-section";
import { NotificationsSection, WelcomeSection } from "@/components/welcome-section";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HeroSection } from "./herosection";

const bannerImages = Object.entries(
  import.meta.glob("../assets/banners/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
  .map(([path, src]) => ({
    src: src as string,
    alt: `Acharya Nagarjuna University banner ${
      path
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "") ?? ""
    }`,
  }));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full overflow-hidden border-y border-border bg-[oklch(0.98_0.005_250)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-2 text-sm">
          <span className="rounded bg-[oklch(0.72_0.18_145)] px-2 py-0.5 text-xs font-bold text-white">
            NEW
          </span>
          <p className="truncate text-foreground">
            Advertisement for the post of Research Assistant and Field Investigator for ICSSR funded
            Major Research Project 2026-2027 &nbsp; || &nbsp; EXAMINATION SCHEDULE OF M.PHIL PART-1
            / PRE Ph.D EXAMINATION JULY 2026.
          </p>
        </div>
      </div>

      <main className="w-full bg-background">
        <HeroSection />
        {/* <BannerCarousel /> */}
        <NotificationsSection />
        <WelcomeSection />
        <CollegeSection />
        <StatsSection />
        <FaqSection />
      </main>
    </div>
  );
}

function BannerCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section
      aria-label="University banners"
      className="w-full overflow-hidden border-b border-border bg-[oklch(0.12_0.03_260)]"
    >
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-0">
          {bannerImages.map((banner, index) => (
            <CarouselItem key={banner.src} className="pl-0">
              <div className="relative w-full min-h-[60vh] overflow-hidden bg-[oklch(0.12_0.03_260)] sm:min-h-[70vh] lg:min-h-[68vh]">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  sizes="100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 h-10 w-10 border-white/40 bg-white/85 text-foreground hover:bg-white" />
        <CarouselNext className="right-4 h-10 w-10 border-white/40 bg-white/85 text-foreground hover:bg-white" />
      </Carousel>
    </section>
  );
}
