import type { PageContent, PageSection } from "@/content/page-schema";
import { Link } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";

function renderLink(href: string, label: string) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal) {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-1.5 text-[var(--gold)] hover:text-[var(--gold-light)] font-semibold transition-colors hover:underline"
      >
        {label}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
    );
  }
  return (
    <Link
      to={href}
      className="text-[var(--gold)] hover:text-[var(--gold-light)] font-semibold transition-colors hover:underline"
    >
      {label}
    </Link>
  );
}

export function PageHero({ content }: { content: PageContent }) {
  // Try to determine section title from breadcrumbs (e.g. Home / Section / Page)
  const sectionName =
    content.breadcrumbs[1]?.label || content.breadcrumbs[0]?.label || "University";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        .anu-page-root {
          --ink: #12213a;
          --ink-mid: #1e3558;
          --gold: #b8860b;
          --gold-light: #d4a017;
          --parchment: #faf7f2;
          --parchment-dark: #f0ebe0;
          --cream: #f5f0e8;
          --rule: #d9d0bf;
          --muted: #6b6352;
          background-color: var(--parchment);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        .anu-hero-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .anu-hero-masthead::before {
          content: 'ANU';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 14rem;
          font-weight: 700;
          color: rgba(184,134,11,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .anu-gold-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }
      `}</style>

      <section className="anu-hero-masthead py-16 text-center text-white lg:py-20">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="font-serif text-xs font-bold uppercase tracking-widest text-[var(--gold-light)]">
            {sectionName}
          </p>
          <h1 className="font-playfair mt-3 text-4xl font-bold tracking-tight md:text-5xl text-white">
            {content.hero.heading}
          </h1>
          <p className="font-garamond mx-auto mt-4 max-w-3xl text-base italic leading-relaxed text-white/80 md:text-lg">
            {content.hero.subheading}
          </p>
          {content.hero.ctaLabel && content.hero.ctaLink ? (
            <div className="mt-6">{renderLink(content.hero.ctaLink, content.hero.ctaLabel)}</div>
          ) : null}
        </div>
      </section>
      <div className="anu-gold-rule" />
    </>
  );
}

export function BreadcrumbsBlock({ content }: { content: PageContent }) {
  return (
    <nav aria-label="Page breadcrumb" className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-serif text-[var(--muted)]">
        {content.breadcrumbs.map((item, index) => (
          <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {renderLink(item.href, item.label)}
            {index < content.breadcrumbs.length - 1 ? (
              <span className="text-[var(--rule)]">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function RichTextSection({ section }: { section: Extract<PageSection, { type: "richText" }> }) {
  return (
    <section id={section.id} className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
      <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3">
        {section.title}
      </h2>
      <div className="font-serif mt-5 space-y-4 text-base leading-relaxed text-[#4a4235]">
        {section.paragraphs.map((paragraph, index) => (
          <p key={`${section.id}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function CardsSection({ section }: { section: Extract<PageSection, { type: "cards" }> }) {
  return (
    <section id={section.id} className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
      <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3">
        {section.title}
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {section.items.map((item) => (
          <article
            key={item.title}
            className="rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="font-playfair text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors">
              {item.title}
            </h3>
            <p className="font-serif mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NoticesSection({ section }: { section: Extract<PageSection, { type: "notices" }> }) {
  return (
    <section id={section.id} className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
      <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3">
        {section.title}
      </h2>
      <ul className="mt-6 space-y-5">
        {section.items.map((item, index) => (
          <li
            key={`${item.title}-${index}`}
            className="rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-5 shadow-sm hover:shadow-md transition-shadow relative"
          >
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--gold)]">
              {item.date}
            </span>
            <h3 className="font-playfair text-base font-bold text-[var(--ink)] mt-1.5">
              {item.title}
            </h3>
            <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {item.details}
            </p>
            {item.href ? <div className="mt-3">{renderLink(item.href, "View details")}</div> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

function DownloadsSection({ section }: { section: Extract<PageSection, { type: "downloads" }> }) {
  return (
    <section id={section.id} className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
      <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3">
        {section.title}
      </h2>
      <ul className="mt-6 space-y-4">
        {section.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-4 shadow-sm"
          >
            <div>
              <p className="font-playfair text-sm font-bold text-[var(--ink)]">{item.name}</p>
              <p className="font-serif text-xs text-[var(--muted)] mt-0.5">
                {item.format}
                {item.note ? ` · ${item.note}` : ""}
              </p>
            </div>
            <a
              href={item.href}
              className="flex items-center justify-center gap-1.5 rounded bg-[var(--ink)] px-4 py-2 font-serif text-xs font-semibold text-white transition hover:bg-[var(--ink-mid)] shrink-0"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              Download Document
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FAQSection({ section }: { section: Extract<PageSection, { type: "faq" }> }) {
  return (
    <section id={section.id} className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
      <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3">
        {section.title}
      </h2>
      <div className="mt-6 space-y-5">
        {section.items.map((item) => (
          <article
            key={item.question}
            className="rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-5 shadow-sm"
          >
            <h3 className="font-playfair text-base font-bold text-[var(--ink)]">{item.question}</h3>
            <p className="font-serif mt-2.5 text-sm leading-relaxed text-[#4a4235]">
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ section }: { section: Extract<PageSection, { type: "contact" }> }) {
  return (
    <section id={section.id} className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
      <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3">
        {section.title}
      </h2>
      <ul className="mt-4 divide-y divide-[var(--rule)]/40">
        {section.items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4"
          >
            <span className="font-playfair text-sm font-bold text-[var(--ink)]">{item.label}</span>
            <span className="font-serif text-sm text-[var(--muted)]">
              {item.href ? renderLink(item.href, item.value) : item.value}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TimelineSection({ section }: { section: Extract<PageSection, { type: "timeline" }> }) {
  return (
    <section id={section.id} className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
      <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3">
        {section.title}
      </h2>
      <ol className="mt-6 space-y-5">
        {section.items.map((item) => (
          <li
            key={`${item.period}-${item.title}`}
            className="rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-5 shadow-sm"
          >
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--gold)]">
              {item.period}
            </span>
            <h3 className="font-playfair text-base font-bold text-[var(--ink)] mt-1">
              {item.title}
            </h3>
            <p className="font-serif mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TableSection({ section }: { section: Extract<PageSection, { type: "table" }> }) {
  return (
    <section id={section.id} className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
      <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3">
        {section.title}
      </h2>
      <div className="mt-6 overflow-x-auto rounded border border-[var(--rule)]">
        <table className="min-w-full bg-white text-left text-sm">
          <thead className="bg-[var(--parchment-dark)] text-[var(--ink)] font-playfair font-bold">
            <tr className="border-b border-[var(--rule)]">
              {section.columns.map((column) => (
                <th key={column} className="px-4 py-3 font-semibold tracking-wider">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--rule)]/60">
            {section.rows.map((row, index) => (
              <tr
                key={`${section.id}-${index}`}
                className="hover:bg-[var(--parchment)]/30 transition-colors"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${section.id}-${index}-${cellIndex}`}
                    className="px-4 py-3 font-serif text-[#4a4235]"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function PageSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {sections.map((section) => {
        switch (section.type) {
          case "richText":
            return <RichTextSection key={section.id} section={section} />;
          case "cards":
            return <CardsSection key={section.id} section={section} />;
          case "notices":
            return <NoticesSection key={section.id} section={section} />;
          case "downloads":
            return <DownloadsSection key={section.id} section={section} />;
          case "faq":
            return <FAQSection key={section.id} section={section} />;
          case "contact":
            return <ContactSection key={section.id} section={section} />;
          case "timeline":
            return <TimelineSection key={section.id} section={section} />;
          case "table":
            return <TableSection key={section.id} section={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export function SideNavigation({ content }: { content: PageContent }) {
  return (
    <aside className="space-y-6">
      <section className="rounded border border-[var(--rule)] bg-white p-5 shadow-sm">
        <h2 className="font-playfair text-sm font-bold uppercase tracking-wider text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1.5">
          On this page
        </h2>
        <ul className="mt-3 space-y-2 text-sm font-serif">
          {content.onThisPage.map((item) => (
            <li key={item.label}>{renderLink(item.href, item.label)}</li>
          ))}
        </ul>
      </section>

      <section className="rounded border border-[var(--rule)] bg-white p-5 shadow-sm">
        <h2 className="font-playfair text-sm font-bold uppercase tracking-wider text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1.5">
          Related links
        </h2>
        <ul className="mt-3 space-y-2 text-sm font-serif">
          {content.relatedLinks.map((item) => (
            <li key={item.label}>{renderLink(item.href, item.label)}</li>
          ))}
        </ul>
      </section>

      <section className="rounded border border-[var(--rule)] bg-white p-5 shadow-sm">
        <h2 className="font-playfair text-sm font-bold uppercase tracking-wider text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1.5">
          Content Governance
        </h2>
        <ul className="mt-3 space-y-2.5 text-xs text-[var(--muted)] font-serif">
          <li>
            <span className="font-bold text-[var(--ink)]">Office:</span> {content.meta.owner}
          </li>
          <li>
            <span className="font-bold text-[var(--ink)]">Last updated:</span>{" "}
            {content.meta.lastUpdated}
          </li>
          <li>
            <span className="font-bold text-[var(--ink)]">Approved by:</span>{" "}
            {content.governance.approvedBy}
          </li>
          <li>
            <span className="font-bold text-[var(--ink)]">Approved on:</span>{" "}
            {content.governance.approvedOn}
          </li>
        </ul>
      </section>
    </aside>
  );
}
