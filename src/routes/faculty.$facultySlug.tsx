import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { Building2, Mail, Phone } from "lucide-react";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { facultyBySlug } from "@/data/facultyProfiles";

const facultyImages = import.meta.glob("../assets/faculty/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const imageByFileName = Object.entries(facultyImages).reduce<Record<string, string>>(
  (acc, [path, src]) => {
    const fileName = path.split("/").pop();
    if (fileName) {
      acc[fileName] = src;
    }
    return acc;
  },
  {},
);

const Section = ({ id, title, items }: { id: string; title: string; items: string[] }) => {
  if (!items.length) return null;

  return (
    <section id={id} className="mt-10 scroll-mt-28">
      <h2 className="border-b border-slate-200 pb-2 text-3xl font-semibold text-[#0d2f57]">
        {title}
      </h2>
      <ul className="mt-3 divide-y divide-slate-200/80">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="py-3 text-sm leading-relaxed text-slate-700">
            <span className="text-base font-semibold text-[#f97316]">- </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export const Route = createFileRoute("/faculty/$facultySlug")({
  component: FacultyProfile,
  head: () => ({
    meta: [
      { title: "Faculty Profile | Acharya Nagarjuna University" },
      {
        name: "description",
        content: "Faculty profile details for Acharya Nagarjuna University.",
      },
    ],
  }),
});

function FacultyProfile() {
  const { facultySlug = "" } = Route.useParams();
  const searchStr = useRouterState({
    select: (state) => state.location.searchStr,
  });
  const query = new URLSearchParams(searchStr);
  const fromDepartmentId = query.get("fromDepartmentId");
  const fromDepartmentName = query.get("fromDepartmentName");
  const fromCollegeName = query.get("fromCollegeName");
  const profile = facultyBySlug[facultySlug];
  const imageSrc = profile ? (imageByFileName[profile.imageFile] ?? "") : "";

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <main>
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              fromDepartmentId && fromDepartmentName
                ? { label: "Colleges" }
                : { label: "Faculty", href: "/faculty" },
              ...(fromDepartmentId && fromDepartmentName
                ? [
                    ...(fromCollegeName ? [{ label: fromCollegeName }] : []),
                    {
                      label: fromDepartmentName,
                      href: `/departments/${fromDepartmentId}`,
                    },
                  ]
                : []),
              { label: "Profile" },
            ]}
          />
          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h1 className="text-4xl font-bold text-[#0d2f57]">Faculty profile not found</h1>
            <p className="mt-4 text-lg text-slate-600">
              The requested faculty member could not be found.
            </p>
            <Link
              to="/faculty"
              className="mt-8 inline-flex rounded bg-[#0d3b66] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b3155]"
            >
              Back to Faculty List
            </Link>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <main>
        <BreadcrumbTrail
          items={[
            { label: "Home", href: "/" },
            fromDepartmentId && fromDepartmentName
              ? { label: "Colleges" }
              : { label: "Faculty", href: "/faculty" },
            ...(fromDepartmentId && fromDepartmentName
              ? [
                  ...(fromCollegeName ? [{ label: fromCollegeName }] : []),
                  {
                    label: fromDepartmentName,
                    href: `/departments/${fromDepartmentId}`,
                  },
                ]
              : []),
            { label: profile.name },
          ]}
        />

        <section className="mx-auto max-w-7xl px-6 py-10 md:py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Faculty Profile
                </h3>
                <nav className="mt-3 space-y-2 text-sm">
                  <Link to="/faculty" className="block font-semibold text-[#0d3b66]">
                    Back to Faculty
                  </Link>
                  <a href="#overview" className="block text-slate-600 hover:text-[#0d3b66]">
                    Overview
                  </a>
                  <a href="#research" className="block text-slate-600 hover:text-[#f97316]">
                    Research
                  </a>
                  <a href="#publications" className="block text-slate-600 hover:text-[#f97316]">
                    Publications
                  </a>
                  <a href="#achievements" className="block text-slate-600 hover:text-[#f97316]">
                    Achievements
                  </a>
                  <a href="#contact" className="block text-slate-600 hover:text-[#f97316]">
                    Contact
                  </a>
                </nav>
              </div>

              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Research Metrics
                </h3>
                <div className="mt-3 space-y-3">
                  {profile.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2 text-sm last:border-b-0 last:pb-0"
                    >
                      <span className="text-slate-600">{metric.label}</span>
                      <span className="font-semibold text-[#0d2f57]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div id="overview">
              <h1 className="text-4xl font-bold tracking-tight text-[#0d2f57]">{profile.name}</h1>

              <div className="mt-6 grid overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm xl:grid-cols-[280px_1fr_260px]">
                <div className="group bg-slate-100">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={profile.name}
                      className="h-full min-h-[320px] w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-gradient-to-br from-[#0d3b66] to-[#f97316] px-6 text-center text-2xl font-semibold text-white">
                      {profile.name}
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-[#0d3b66] to-[#0a2f52] p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#ffd8b5]">
                    Professor
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold leading-tight">
                    {profile.designation}
                  </h2>
                  <p className="mt-2 text-lg text-blue-100">{profile.department}</p>
                  <p className="mt-6 text-sm text-blue-100">
                    <span className="font-semibold text-white">Qualifications: </span>
                    {profile.qualifications}
                  </p>

                  <div className="mt-6 grid gap-3 text-sm">
                    <p>
                      <span className="font-semibold text-blue-100">Date of Joining:</span>{" "}
                      {profile.dateOfJoining}
                    </p>
                    {profile.dateOfBirth && (
                      <p>
                        <span className="font-semibold text-blue-100">Date of Birth:</span>{" "}
                        {profile.dateOfBirth}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-blue-100">Teaching Experience:</span>{" "}
                      {profile.teachingExperience}
                    </p>
                  </div>
                </div>

                <div id="contact" className="bg-[#e9eef4] p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Contact & Office
                  </h3>
                  <div className="mt-4 space-y-4 text-sm text-slate-700">
                    {profile.contact.email && (
                      <a
                        href={`mailto:${profile.contact.email}`}
                        className="flex gap-2 hover:text-[#0d3b66]"
                      >
                        <Mail className="mt-0.5 h-4 w-4" />
                        <span className="break-all">{profile.contact.email}</span>
                      </a>
                    )}
                    {profile.contact.phone && (
                      <a
                        href={`tel:${profile.contact.phone}`}
                        className="flex gap-2 hover:text-[#0d3b66]"
                      >
                        <Phone className="mt-0.5 h-4 w-4" />
                        <span>{profile.contact.phone}</span>
                      </a>
                    )}
                    <div className="flex gap-2">
                      <Building2 className="mt-0.5 h-4 w-4" />
                      <div>
                        {profile.contact.addressLines.map((line, index) => (
                          <p key={`address-${index}`}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-md border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold italic leading-snug text-[#0d2f57]">
                  Dedicated to quality teaching, learner support, and applied research.
                </h2>
                <div className="mt-3 h-0.5 w-24 rounded bg-[#f97316]" />

                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                  {profile.summary.map((paragraph, index) => (
                    <p key={`summary-${index}`}>{paragraph}</p>
                  ))}
                </div>

                {profile.thesis && (
                  <section id="doctoral-research" className="mt-10 scroll-mt-28">
                    <h2 className="border-b border-slate-200 pb-2 text-3xl font-semibold text-[#0d2f57]">
                      Doctoral Research
                    </h2>
                    <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                      <p>
                        <span className="font-semibold text-slate-900">Thesis Title:</span>{" "}
                        {profile.thesis.title}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">University:</span>{" "}
                        {profile.thesis.university}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Awarded Year:</span>{" "}
                        {profile.thesis.year}
                      </p>
                    </div>
                  </section>
                )}

                {profile.researchInterests.length > 0 && (
                  <section id="research" className="mt-10 scroll-mt-28">
                    <h2 className="border-b border-slate-200 pb-2 text-3xl font-semibold text-[#0d2f57]">
                      Research
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.researchInterests.map((interest, index) => (
                        <span
                          key={`interest-${index}`}
                          className="rounded-full border border-[#f97316]/40 bg-[#fff2e8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#b45309]"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                <Section
                  id="experience"
                  title="Administrative Experience"
                  items={profile.administrativeExperience}
                />
                <Section
                  id="achievements"
                  title="Academic Achievements"
                  items={profile.achievements}
                />
                <Section
                  id="publications"
                  title="Publications & Conferences"
                  items={profile.publications}
                />
                <Section id="memberships" title="Memberships" items={profile.memberships} />
                <Section
                  id="activities"
                  title="Professional Activities"
                  items={profile.professionalActivities}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
