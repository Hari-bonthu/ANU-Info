import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { facultyProfiles } from "@/data/facultyProfiles";

type FacultyMember = {
  name: string;
  image: string;
  slug: string;
  designation: string;
  department: string;
};

const facultyImages = import.meta.glob("../assets/faculty/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const imageByFileName = Object.entries(facultyImages).reduce<Record<string, string>>(
  (acc, [path, src]) => {
    const fileName = path.split("/").pop();
    if (fileName) acc[fileName] = src;
    return acc;
  },
  {},
);

const facultyMembers: FacultyMember[] = facultyProfiles
  .map((profile) => ({
    name: profile.name,
    slug: profile.slug,
    image: imageByFileName[profile.imageFile] ?? "",
    designation: profile.designation,
    department: profile.department,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const Route = createFileRoute("/faculty")({
  component: Faculty,
  head: () => ({
    meta: [
      { title: "Faculty | Acharya Nagarjuna University" },
      {
        name: "description",
        content: "Browse featured Acharya Nagarjuna University faculty profiles.",
      },
    ],
  }),
});

function Faculty() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/faculty") {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <main>
        <BreadcrumbTrail items={[{ label: "Home", href: "/" }, { label: "Faculty" }]} />

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-300 pb-4">
            <h1 className="text-4xl font-bold tracking-tight text-[#0f2345] md:text-5xl">
              Featured Faculty
            </h1>
            <Link
              to="/faculty"
              className="text-lg text-[#0f2345] transition-colors hover:text-[#0d3b66]"
            >
              View all faculty
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:items-stretch lg:grid-cols-4">
            {facultyMembers.map((member) => (
              <article key={member.slug} className="group flex h-full flex-col">
                <div className="overflow-hidden rounded-md bg-white shadow-sm">
                  <Link to="/faculty/$facultySlug" params={{ facultySlug: member.slug }}>
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-[#0f2345] to-[#f97316] px-6 text-center text-2xl font-semibold text-white transition-transform duration-300 group-hover:scale-[1.02]">
                        {member.name}
                      </div>
                    )}
                  </Link>
                </div>

                <h2 className="mt-4 text-2xl font-semibold leading-snug text-[#0d1f3f]">
                  {member.name}
                </h2>
                <p className="text-sm text-slate-600">{member.designation}</p>
                <p className="mt-auto pt-1 text-xs text-slate-500">{member.department}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
