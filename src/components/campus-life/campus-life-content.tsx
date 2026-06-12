import React from "react";
import type { CampusLifeTab } from "@/data/campus-life-app";

export function CampusLifeContent({ tab }: { tab: CampusLifeTab }) {
  return (
    <div className="rounded border border-[var(--rule)] bg-white shadow-sm">
      <div className="border-b border-[var(--rule)] p-8">
        <div className="flex items-center gap-3">
          {tab.badge && (
            <span className="rounded bg-[var(--parchment-dark)] px-3 py-1 font-serif text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              {tab.badge}
            </span>
          )}
        </div>
        <h2 className="font-playfair mt-4 text-3xl font-bold text-[var(--ink)] md:text-4xl">
          {tab.title}
        </h2>
        <p className="font-serif mt-4 text-lg leading-relaxed text-[var(--muted)]">
          {tab.description}
        </p>
      </div>

      <div className="p-8">
        {/* Metrics */}
        {tab.metrics && tab.metrics.length > 0 && (
          <div className="mb-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {tab.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded border border-[var(--rule)] bg-[var(--parchment)] p-6"
              >
                <div className="font-serif text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                  {metric.label}
                </div>
                <div className="font-playfair mt-2 text-3xl font-bold text-[var(--ink)]">
                  {metric.value}
                </div>
                <div className="font-serif mt-2 text-sm text-[var(--muted)]">{metric.note}</div>
              </div>
            ))}
          </div>
        )}

        {/* Highlights */}
        {tab.highlights && tab.highlights.length > 0 && (
          <div className="mb-12">
            <h3 className="font-playfair mb-6 text-2xl font-bold text-[var(--ink)]">
              Key Highlights
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tab.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className={`rounded border p-6 ${
                    highlight.tone === "accent"
                      ? "border-[var(--gold)]/30 bg-[var(--gold)]/5"
                      : highlight.tone === "success"
                        ? "border-green-900/10 bg-green-50"
                        : "border-[var(--rule)] bg-white"
                  }`}
                >
                  <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
                    {highlight.title}
                  </h4>
                  <p className="font-serif mt-2 text-[var(--muted)]">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notices */}
        {tab.notices && tab.notices.length > 0 && (
          <div className="mb-12">
            <h3 className="font-playfair mb-6 text-2xl font-bold text-[var(--ink)]">
              Recent Notices
            </h3>
            <div className="space-y-4">
              {tab.notices.map((notice, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded border border-[var(--rule)] bg-white p-6 sm:flex-row sm:items-start"
                >
                  <div className="shrink-0 font-serif text-sm font-semibold text-[var(--gold-light)]">
                    {notice.date}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
                      {notice.title}
                    </h4>
                    <p className="font-serif mt-2 text-[var(--muted)]">{notice.description}</p>
                  </div>
                  <span className="shrink-0 rounded bg-[var(--parchment-dark)] px-3 py-1 font-serif text-xs font-semibold text-[var(--muted)]">
                    {notice.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Steps */}
        {tab.steps && tab.steps.length > 0 && (
          <div className="mb-12">
            <h3 className="font-playfair mb-6 text-2xl font-bold text-[var(--ink)]">
              Action Steps
            </h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--rule)] before:to-transparent">
              {tab.steps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--ink)] text-white font-playfair font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded border border-[var(--rule)] bg-white p-5 shadow-sm">
                    <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
                      {step.title}
                    </h4>
                    <p className="font-serif mt-2 text-[var(--muted)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources */}
        {tab.resources && tab.resources.length > 0 && (
          <div className="mb-12">
            <h3 className="font-playfair mb-6 text-2xl font-bold text-[var(--ink)]">
              Resources & Links
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {tab.resources.map((resource, i) => {
                const inner = (
                  <div className="flex h-full flex-col justify-between rounded border border-[var(--rule)] bg-[var(--parchment)] p-6 transition-colors hover:border-[var(--gold)]/50 hover:bg-white group">
                    <div>
                      <h4 className="font-playfair text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold-light)] transition-colors">
                        {resource.title}
                      </h4>
                      <div className="mt-4 space-y-2 font-serif text-sm">
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-[var(--ink)] min-w-[100px]">
                            Channel:
                          </span>
                          <span className="text-[var(--muted)]">{resource.channel}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-[var(--ink)] min-w-[100px]">
                            Turnaround:
                          </span>
                          <span className="text-[var(--muted)]">{resource.turnaround}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-[var(--ink)] min-w-[100px]">
                            Requirements:
                          </span>
                          <span className="text-[var(--muted)]">{resource.requirements}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                return resource.href ? (
                  <a href={resource.href} key={i} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  <div key={i} className="h-full">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* FAQs */}
        {tab.faq && tab.faq.length > 0 && (
          <div className="mb-12">
            <h3 className="font-playfair mb-6 text-2xl font-bold text-[var(--ink)]">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {tab.faq.map((faq, i) => (
                <div key={i} className="rounded border border-[var(--rule)] bg-white p-6">
                  <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
                    {faq.question}
                  </h4>
                  <p className="font-serif mt-3 text-[var(--muted)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Panel */}
        <div className="rounded border border-[var(--ink)]/10 bg-[var(--ink)] p-8 text-white">
          <h3 className="font-playfair text-2xl font-bold">Support Guide</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]">
                Availability
              </div>
              <p className="font-serif mt-2">{tab.supportPanel.availability}</p>
            </div>
            <div>
              <div className="font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]">
                Response Time
              </div>
              <p className="font-serif mt-2">{tab.supportPanel.responseTime}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]">
                Best For
              </div>
              <ul className="font-serif mt-3 list-inside list-disc space-y-2 opacity-90 marker:text-[var(--gold)]">
                {tab.supportPanel.bestFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]">
                Important Notes
              </div>
              <ul className="font-serif mt-3 list-inside list-disc space-y-2 opacity-90 marker:text-[var(--gold)]">
                {tab.supportPanel.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
