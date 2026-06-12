import React, { useState } from "react";
import { FileText, Download, CheckCircle2, Loader2, Info } from "lucide-react";

export function Brochure() {
  const brochures = [
    {
      id: "general-pg",
      title: "ANU General Prospectus (PG & Professional)",
      size: "4.5 MB",
      format: "PDF Document",
      description:
        "Comprehensive guide for postgraduate admissions, constituent college details, course seat matrices, and syllabus codes.",
      fileName: "ANU_General_Prospectus_2026-27.pdf",
    },
    {
      id: "btech-barch",
      title: "B.Tech & B.Arch Admission Booklet",
      size: "2.8 MB",
      format: "PDF Document",
      description:
        "Dedicated brochure for engineering and architecture admissions, campus labs facilities, and recent placements records.",
      fileName: "ANU_Engineering_Prospectus_2026-27.pdf",
    },
    {
      id: "distance-cde",
      title: "CDE Prospectus & Course Guide",
      size: "3.2 MB",
      format: "PDF Document",
      description:
        "Distance learning course guidelines, list of recognized regional study centers, fee payment schedules, and exams guidelines.",
      fileName: "ANUCDE_Admissions_Guide_2026.pdf",
    },
    {
      id: "intl-admissions",
      title: "International Students Leaflet",
      size: "1.9 MB",
      format: "PDF Document",
      description:
        "Application guidelines for foreign nationals, NRI candidate fee charts, English proficiency rules, and campus hostel manuals.",
      fileName: "ANU_International_Admissions_2026.pdf",
    },
  ];

  // Track downloading state per brochure ID
  const [downloadStates, setDownloadStates] = useState<Record<string, "idle" | "loading" | "done">>(
    {},
  );

  const handleDownload = (id: string, fileName: string) => {
    // Set downloading state
    setDownloadStates((prev) => ({ ...prev, [id]: "loading" }));

    // Simulate download delay
    setTimeout(() => {
      setDownloadStates((prev) => ({ ...prev, [id]: "done" }));

      // Reset back to idle after a few seconds
      setTimeout(() => {
        setDownloadStates((prev) => ({ ...prev, [id]: "idle" }));
      }, 3000);
    }, 1500);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">
          Brochure & Prospectus Downloads
        </h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            Download our latest official publications to understand our academic structures, fee
            setups, and on-campus facilities. Always refer to the active admissions portal for the
            most up-to-date schedule changes.
          </p>
        </div>
      </section>

      {/* Brochure Grid */}
      <section className="grid gap-6 md:grid-cols-2">
        {brochures.map((brochure) => {
          const downloadState = downloadStates[brochure.id] || "idle";

          return (
            <div
              key={brochure.id}
              className="rounded border border-[var(--rule)] bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-[var(--parchment)] flex items-center justify-center text-[var(--gold)] shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors">
                      {brochure.title}
                    </h3>
                    <p className="font-serif text-xs text-[var(--muted)] mt-0.5">
                      {brochure.format} &bull; {brochure.size}
                    </p>
                  </div>
                </div>

                <p className="font-serif mt-4 text-xs leading-relaxed text-[#4a4235]">
                  {brochure.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--rule)]/60 flex items-center justify-between">
                <span className="font-serif text-xs text-[var(--muted)] italic">
                  Release: 2026 Cycle
                </span>

                <button
                  onClick={() => handleDownload(brochure.id, brochure.fileName)}
                  disabled={downloadState === "loading"}
                  className={`flex items-center gap-2 rounded px-4 py-2 font-serif text-xs font-semibold transition-all focus:outline-none ${
                    downloadState === "loading"
                      ? "bg-[var(--parchment-dark)] text-[var(--muted)] cursor-not-allowed"
                      : downloadState === "done"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-[var(--ink)] text-white hover:bg-[var(--ink-mid)]"
                  }`}
                >
                  {downloadState === "loading" && (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Downloading...
                    </>
                  )}
                  {downloadState === "done" && (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      Downloaded!
                    </>
                  )}
                  {downloadState === "idle" && (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      Download Brochure
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Advisory Notification */}
      <section className="flex items-start gap-4 rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-6">
        <Info className="mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" />
        <div>
          <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
            Information Integrity Notice
          </h4>
          <p className="font-serif mt-1 text-sm text-[var(--muted)] leading-relaxed">
            The fee structures, seats allocation guidelines, and course requirements listed inside
            the brochures are subject to UGC regulations and government orders. Please double-check
            all active notifications on the university's primary admissions feed prior to final
            payment submission.
          </p>
        </div>
      </section>
    </div>
  );
}
