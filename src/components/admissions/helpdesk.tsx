import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export function Helpdesk() {
  const sections = [
    {
      title: "Directorate of Admissions (DOA)",
      description:
        "For general campus admissions, web counseling, on-campus PG programs, and professional course approvals.",
      location: "Directorate of Admissions Building, 1st Floor, Main Campus, Guntur",
      contacts: [
        { label: "General Helpline Hotline", value: "+91 9030088685", type: "tel" },
        { label: "Office Landline 1", value: "0863-2346171", type: "tel" },
        { label: "Office Landline 2", value: "0863-2346138", type: "tel" },
        { label: "Office Landline 3 (Main)", value: "0863-2346114", type: "tel" },
        { label: "DOA Extension Lines", value: "Ext: 170 or 171 (via 0863-2346)", type: "text" },
      ],
      emails: [
        { label: "Director's Email", value: "diranuadmissions@gmail.com" },
        { label: "Technical Helpdesk", value: "helpcenter@anu.ac.in" },
      ],
    },
    {
      title: "Centre for Distance Education (CDE)",
      description:
        "For distance learning enrollments, student registry, study materials, and distance exams queries.",
      location: "Centre for Distance Education Block, Main Campus, Guntur",
      contacts: [
        { label: "General CDE Inquiries", value: "0863-2346222", type: "tel" },
        { label: "Director's Office Phone", value: "0863-2346323", type: "tel" },
        { label: "Online Portal Tech Support", value: "0863-2346208", type: "tel" },
      ],
      emails: [
        { label: "General Info", value: "info@anucde.ac.in" },
        { label: "Director's Office", value: "anucdedirector@gmail.com" },
      ],
    },
    {
      title: "International Students Cell",
      description:
        "For foreign national admissions, NRI enrollments, eligibility conversion certificates, and international scholarships.",
      location: "International Students Relations Office, Main Campus, Guntur",
      contacts: [
        { label: "International Cell Phone", value: "+91 863-2346596", type: "tel" },
        { label: "Cell Hotline Helpline", value: "+91 7093526596", type: "tel" },
        { label: "Student Care Desk", value: "+91 8555050042", type: "tel" },
      ],
      emails: [{ label: "International Inquiries", value: "moocs@anuonline.ac.in" }],
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">Admissions Helpdesk</h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            If you have questions about the online application process, course eligibility, seat
            allocations, or documentation requirements, please reach out to the appropriate
            department. Our counseling staff are available during administrative office hours.
          </p>
        </div>
      </section>

      {/* Quick Office Schedule Alert */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded border border-[var(--rule)] bg-white p-6 shadow-sm flex items-start gap-4">
          <Clock className="h-6 w-6 text-[var(--gold)] shrink-0 mt-1" />
          <div>
            <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">Office Hours</h4>
            <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]">
              <strong>10:00 AM to 5:30 PM</strong>
              <br />
              Monday through Friday.
              <br />
              The office is closed on Saturdays, Sundays, and official public holidays.
            </p>
          </div>
        </div>

        <div className="rounded border border-[var(--rule)] bg-white p-6 shadow-sm flex items-start gap-4">
          <MapPin className="h-6 w-6 text-[var(--gold)] shrink-0 mt-1" />
          <div>
            <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
              Physical Campus Address
            </h4>
            <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]">
              <strong>Directorate of Admissions Building</strong>
              <br />
              Acharya Nagarjuna University, NH16, Nagarjuna Nagar,
              <br />
              Guntur, Andhra Pradesh, Pin - 522510, India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Helpdesk Sections */}
      <section className="space-y-10">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="rounded border border-[var(--rule)] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-[var(--ink)] px-8 py-5 text-white">
              <h3 className="font-playfair text-xl font-bold">{section.title}</h3>
              <p className="font-serif text-xs text-white/70 mt-1">{section.description}</p>
            </div>

            <div className="p-8 space-y-6">
              {/* Address / Location */}
              <div className="flex gap-3 text-sm text-[var(--muted)]">
                <MapPin className="h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="font-serif">
                  <strong>Office Desk Location:</strong> {section.location}
                </span>
              </div>

              {/* Phone Contacts */}
              <div className="grid gap-4 md:grid-cols-2 pt-2">
                <div className="space-y-3">
                  <h4 className="font-playfair text-sm font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[var(--gold)]" />
                    Phone Numbers
                  </h4>
                  <ul className="space-y-2">
                    {section.contacts.map((contact, contactIdx) => (
                      <li
                        key={contactIdx}
                        className="font-serif text-xs flex justify-between gap-4"
                      >
                        <span className="text-[var(--muted)]">{contact.label}:</span>
                        {contact.type === "tel" ? (
                          <a
                            href={`tel:${contact.value.replace(/[-\s]/g, "")}`}
                            className="font-bold text-[var(--ink)] hover:text-[var(--gold)] transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="font-bold text-[var(--ink)]">{contact.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Email Contacts */}
                <div className="space-y-3">
                  <h4 className="font-playfair text-sm font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[var(--gold)]" />
                    Email Directory
                  </h4>
                  <ul className="space-y-2">
                    {section.emails.map((email, emailIdx) => (
                      <li key={emailIdx} className="font-serif text-xs flex justify-between gap-4">
                        <span className="text-[var(--muted)]">{email.label}:</span>
                        <a
                          href={`mailto:${email.value}`}
                          className="font-bold text-[var(--ink)] hover:text-[var(--gold)] transition-colors break-all"
                        >
                          {email.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Disclaimers & Notes */}
      <section className="flex items-start gap-4 rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-6">
        <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" />
        <div>
          <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">Security Advisory</h4>
          <p className="font-serif mt-1 text-sm leading-relaxed text-[var(--muted)]">
            Acharya Nagarjuna University does not authorize any external consultants, agents, or
            websites to accept admission fees or secure seats on behalf of the university. Always
            utilize the official payment pathways linked within the secure admissions portal.
          </p>
        </div>
      </section>
    </div>
  );
}
