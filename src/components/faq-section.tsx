import { useMemo, useState } from "react";
import { HelpCircle, Mail, MessageSquare, Phone, Plus, Search } from "lucide-react";

type Faq = {
  q: string;
  a: string;
  category: "Admissions" | "Academics" | "About" | "Campus";
};

const faqs: Faq[] = [
  {
    category: "Academics",
    q: "How many PG courses are offered by Acharya Nagarjuna University?",
    a: "ANU offers 100+ postgraduate programmes across Engineering, Sciences, Pharmacy, Arts, Management, Education, Law and Physical Sciences - including M.Tech, M.Sc, M.A, M.Com, MBA, MCA, M.Pharm and integrated dual-degree tracks.",
  },
  {
    category: "About",
    q: "How many colleges are affiliated under Acharya Nagarjuna University?",
    a: "Over 450 colleges across the Krishna, Guntur, Bapatla, Palnadu and Prakasam districts are affiliated to ANU, spanning constituent, autonomous and professional institutions.",
  },
  {
    category: "About",
    q: "What is the vision of Acharya Nagarjuna University?",
    a: 'To emerge as a globally recognised centre of academic excellence and research, fostering intellectual, social and ethical development guided by the principle "Satye Sarvam Pratishitam" - everything is established in truth.',
  },
  {
    category: "About",
    q: "What is the mission of Acharya Nagarjuna University?",
    a: "To impart quality higher education, promote interdisciplinary research, nurture innovation and entrepreneurship, and develop socially responsible citizens equipped to serve the nation and humanity.",
  },
  {
    category: "Admissions",
    q: "Is Acharya Nagarjuna University a government or private institution?",
    a: "ANU is a state public university, established by an Act of the Andhra Pradesh State Legislature in 1976, and is fully recognised by the UGC. It is accredited by NAAC with an A+ grade.",
  },
  {
    category: "Admissions",
    q: "How do I apply for admissions at ANU?",
    a: "Admissions are conducted through state-level common entrance tests (AP EAPCET, ICET, PGCET, LAWCET) and direct ANU notifications. Visit the Directorate of Admissions portal during the announced admission window.",
  },
  {
    category: "Campus",
    q: "What facilities are available on the ANU campus?",
    a: "The 300-acre campus offers modern hostels, a central library with 3 lakh+ volumes, sports complex, health centre, banks, post office, transport, and dedicated research labs across every school.",
  },
];

const categories = ["All", "Admissions", "Academics", "About", "Campus"] as const;
type Category = (typeof categories)[number];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchCat = active === "All" || faq.category === active;
      const matchQ = !q || faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[oklch(0.985_0.005_250)] py-20 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.32_0.12_260)]/20 bg-white px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.32_0.12_260)]">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden />
            Help Centre
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[oklch(0.22_0.06_265)] sm:text-4xl">
            Get every answer, right here.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Search the most common questions about admissions, academics and campus life - or reach
            out to our team directly.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:registrar@anu.ac.in"
              className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition hover:border-[oklch(0.32_0.12_260)]/40 hover:shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <span className="block text-sm font-medium text-foreground">
                  registrar@anu.ac.in
                </span>
              </span>
            </a>
            <a
              href="tel:+918632346114"
              className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition hover:border-[oklch(0.32_0.12_260)]/40 hover:shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Call
                </span>
                <span className="block text-sm font-medium text-foreground">+91 863 234 6114</span>
              </span>
            </a>
            <a
              href="/admissions/helpdesk"
              className="group flex items-center gap-3 rounded-xl border border-[oklch(0.32_0.12_260)]/20 bg-[oklch(0.32_0.12_260)] p-4 text-white transition hover:bg-[oklch(0.28_0.1_265)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white">
                <MessageSquare className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-medium uppercase tracking-wider text-white/70">
                  Live chat
                </span>
                <span className="block text-sm font-medium">Talk to a counsellor</span>
              </span>
            </a>
          </div>
        </div>

        <div>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions - e.g. admissions, hostel, PG courses..."
              className="h-14 w-full rounded-2xl border border-border bg-white pl-12 pr-4 text-base shadow-sm outline-none ring-0 transition placeholder:text-muted-foreground focus:border-[oklch(0.32_0.12_260)]/40 focus:shadow-md"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={
                    "rounded-full border px-4 py-1.5 text-xs font-medium transition " +
                    (isActive
                      ? "border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white shadow-sm"
                      : "border-border bg-white text-foreground hover:border-[oklch(0.32_0.12_260)]/40")
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {filtered.length === 0 && (
              <div className="p-10 text-center text-sm text-muted-foreground">
                No questions match your search. Try a different keyword.
              </div>
            )}
            {filtered.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.q} className="group">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-start gap-4 p-5 text-left transition hover:bg-[oklch(0.97_0.02_260)] sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-md bg-[oklch(0.32_0.12_260)]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.32_0.12_260)]">
                      {faq.category}
                    </span>
                    <span className="flex-1 text-[15px] font-medium leading-snug text-foreground sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      className={
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground transition-transform duration-300 " +
                        (isOpen
                          ? "rotate-45 border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white"
                          : "group-hover:border-[oklch(0.32_0.12_260)]/40")
                      }
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <div className="px-5 pb-6 pl-[4.25rem] pr-12 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pl-[5.25rem]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
