import React from "react";
import { Building2, MapPin, GraduationCap, Award, HelpCircle } from "lucide-react";

export function AffiliatedColleges() {
  const stats = [
    { value: "300+", label: "Total Colleges", note: "Under ANU Affiliation" },
    { value: "3", label: "Districts", note: "Guntur, Palnadu & Bapatla" },
    { value: "50,000+", label: "Enrolled Students", note: "Across various courses" },
    { value: "10+", label: "Professional Fields", note: "Engg, Pharm, Law, Ed, etc." },
  ];

  const collegeCategories = [
    {
      title: "Engineering & Architecture",
      colleges: [
        {
          name: "R.V.R. & J.C. College of Engineering",
          location: "Chowdavaram, Guntur",
          type: "Private Autonomous",
          established: "1985",
          highlight: "NAAC 'A+' Grade, Ranked top in AP",
        },
        {
          name: "Bapatla Engineering College",
          location: "Bapatla",
          type: "Private Autonomous",
          established: "1981",
          highlight: "One of the oldest private engg colleges in AP",
        },
        {
          name: "ANU College of Engineering & Technology",
          location: "ANU Campus, Guntur",
          type: "University Constituent",
          established: "2009",
          highlight: "State-of-the-art campus infrastructure",
        },
      ],
    },
    {
      title: "Pharmacy Colleges",
      colleges: [
        {
          name: "Chalapathi Institute of Pharmaceutical Sciences",
          location: "Lam, Guntur",
          type: "Private Autonomous",
          established: "2004",
          highlight: "NAAC 'A' Grade, NBA Accredited",
        },
        {
          name: "KVSR Siddhartha College of Pharmaceutical Sciences",
          location: "Vijayawada Road, Guntur Region",
          type: "Private",
          established: "1994",
          highlight: "Pioneer in pharmacy education",
        },
        {
          name: "ANU College of Pharmaceutical Sciences",
          location: "ANU Campus, Guntur",
          type: "University Constituent",
          established: "2010",
          highlight: "Advanced research labs and PG programs",
        },
      ],
    },
    {
      title: "Degree (Arts & Sciences) & Law",
      colleges: [
        {
          name: "Hindu College",
          location: "Guntur",
          type: "Aided College",
          established: "1935",
          highlight: "90-year legacy of educational excellence",
        },
        {
          name: "J.K.C. College (Jagarlamudi Kuppuswamy Choudary)",
          location: "Guntur",
          type: "Aided Autonomous",
          established: "1968",
          highlight: "NAAC 'A' Grade, Top placements in degree courses",
        },
        {
          name: "Dr. B.R. Ambedkar School of Legal Education",
          location: "ANU Campus, Guntur",
          type: "University Constituent",
          established: "2015",
          highlight: "Premium 5-year integrated law programs",
        },
      ],
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">Affiliated Colleges</h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            Acharya Nagarjuna University governs a massive network of affiliated, autonomous, and
            constituent institutions across three key districts of coastal Andhra Pradesh. Following
            the reorganization of districts and university boundaries, our colleges focus on
            regional upliftment and industry-aligned skill building.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded border border-[var(--rule)] bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="font-playfair text-3xl font-bold text-[var(--gold)]">
                {stat.value}
              </div>
              <div className="font-serif mt-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                {stat.label}
              </div>
              <div className="font-garamond mt-1 text-sm italic text-[var(--muted)]/80">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Districts Restructuring Alert */}
      <section className="rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-6">
        <div className="flex gap-4">
          <MapPin className="h-6 w-6 text-[var(--gold)] shrink-0 mt-1" />
          <div>
            <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
              Geographical Jurisdiction
            </h4>
            <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Following the state-wide administrative restructuring, ANU's primary jurisdiction
              spans
              <strong> Guntur, Palnadu, and Bapatla</strong> districts. Please note that all
              affiliated colleges in the erstwhile Prakasam district have been officially
              transferred under the governance of the newly established
              <strong> Andhra Kesari University</strong>, Ongole.
            </p>
          </div>
        </div>
      </section>

      {/* Categories / College List */}
      <section className="space-y-10">
        {collegeCategories.map((category, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)] pb-2 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[var(--gold)]" />
              {category.title}
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              {category.colleges.map((college, collegeIdx) => (
                <div
                  key={collegeIdx}
                  className="rounded border border-[var(--rule)] bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="inline-flex items-center gap-1 rounded bg-[var(--parchment)] px-2.5 py-0.5 text-xs font-semibold text-[var(--gold)]">
                      Est. {college.established}
                    </span>
                    <h4 className="font-playfair text-lg font-bold text-[var(--ink)] mt-3">
                      {college.name}
                    </h4>
                    <p className="font-serif mt-2 text-xs italic text-[var(--muted)]">
                      {college.type} &bull; {college.location}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--rule)]/60 flex items-start gap-2">
                    <Award className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="font-serif text-xs text-[#4a4235] leading-relaxed">
                      {college.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer Info */}
      <section className="flex items-start gap-4 rounded border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6">
        <HelpCircle className="mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" />
        <div>
          <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
            Looking for the Complete Directory?
          </h4>
          <p className="font-serif mt-1 text-sm text-[var(--muted)]">
            The university publishes a detailed district-wise and college-wise directory including
            fee structures, sanctioned seat intakes, and course codes annually. You can download the
            complete list of affiliated institutions on the official university portal or request it
            from the College Development Council (CDC) office.
          </p>
        </div>
      </section>
    </div>
  );
}
