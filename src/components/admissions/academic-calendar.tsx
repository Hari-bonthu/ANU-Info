import React from "react";
import { CalendarDays, Clock, AlertCircle } from "lucide-react";

export function AcademicCalendar() {
  const terms = [
    {
      name: "Odd Semester (July - December)",
      events: [
        { date: "July 15, 2026", event: "Commencement of Classes for Senior Students" },
        { date: "August 01, 2026", event: "Orientation & Classes for First Year Students" },
        { date: "September 15-20, 2026", event: "First Mid-Term Examinations" },
        { date: "November 05-10, 2026", event: "Second Mid-Term Examinations" },
        { date: "November 30, 2026", event: "Last Instruction Day" },
        { date: "December 05-20, 2026", event: "End Semester Examinations" },
      ],
    },
    {
      name: "Even Semester (January - June)",
      events: [
        { date: "January 04, 2027", event: "Commencement of Classes" },
        { date: "February 20-25, 2027", event: "First Mid-Term Examinations" },
        { date: "April 15-20, 2027", event: "Second Mid-Term Examinations" },
        { date: "May 05, 2027", event: "Last Instruction Day" },
        { date: "May 10-25, 2027", event: "End Semester Examinations" },
        { date: "June 01 - July 10, 2027", event: "Summer Vacation" },
      ],
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">
          Academic Calendar 2026-2027
        </h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            The academic calendar outlines the critical dates for the upcoming academic year.
            Students are advised to align their study plans, travel, and project submissions
            according to the timelines provided below.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        {terms.map((term, index) => (
          <div
            key={index}
            className="rounded border border-[var(--rule)] bg-white shadow-sm overflow-hidden"
          >
            <div className="bg-[var(--ink)] px-8 py-5 text-white">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-[var(--gold)]" />
                <h3 className="font-playfair text-xl font-bold">{term.name}</h3>
              </div>
            </div>
            <div className="divide-y divide-[var(--rule)]">
              {term.events.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row p-6 hover:bg-[var(--parchment)] transition-colors"
                >
                  <div className="sm:w-1/3 flex items-start gap-2 mb-2 sm:mb-0">
                    <Clock className="h-4 w-4 mt-1 text-[var(--gold)] shrink-0" />
                    <span className="font-serif font-bold text-[var(--ink)]">{item.date}</span>
                  </div>
                  <div className="sm:w-2/3 sm:pl-4 border-[var(--rule)] sm:border-l">
                    <span className="font-serif text-[var(--muted)]">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="flex items-start gap-4 rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-6">
        <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" />
        <div>
          <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">Disclaimers</h4>
          <ul className="font-serif mt-2 list-inside list-disc space-y-2 text-sm leading-relaxed text-[var(--muted)]">
            <li>
              The university reserves the right to modify these dates in case of unforeseen
              circumstances.
            </li>
            <li>
              Specific department-level schedules for practicals and vivas will be communicated by
              respective Heads of Departments.
            </li>
            <li>Holidays will be observed as per the official state government notifications.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
