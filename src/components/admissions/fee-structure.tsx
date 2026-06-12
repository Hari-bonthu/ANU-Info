import React from "react";
import { Info } from "lucide-react";

export function FeeStructure() {
  const fees = [
    {
      category: "Undergraduate Programs (B.A, B.Sc, B.Com)",
      tuition: "₹ 15,000 - ₹ 25,000",
      special: "₹ 2,000",
      total: "₹ 17,000 - ₹ 27,000",
    },
    {
      category: "Engineering (B.Tech / B.Arch)",
      tuition: "₹ 60,000 - ₹ 85,000",
      special: "₹ 5,000",
      total: "₹ 65,000 - ₹ 90,000",
    },
    {
      category: "Postgraduate Programs (M.A, M.Sc, M.Com)",
      tuition: "₹ 20,000 - ₹ 45,000",
      special: "₹ 3,000",
      total: "₹ 23,000 - ₹ 48,000",
    },
    {
      category: "Professional Courses (MBA / MCA)",
      tuition: "₹ 55,000 - ₹ 75,000",
      special: "₹ 4,500",
      total: "₹ 59,500 - ₹ 79,500",
    },
    {
      category: "Research Programs (Ph.D / M.Phil)",
      tuition: "₹ 30,000 - ₹ 40,000",
      special: "₹ 5,000",
      total: "₹ 35,000 - ₹ 45,000",
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">Fee Structure</h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            Acharya Nagarjuna University is committed to providing high-quality education at an
            accessible cost. The fee structure varies based on the level of study, specific program,
            and the mode of admission (Regular vs. Self-Financed).
          </p>
        </div>
      </section>

      <section>
        <h3 className="font-playfair text-2xl font-bold text-[var(--ink)]">
          Indicative Annual Fees
        </h3>
        <p className="font-serif mt-2 text-sm text-[var(--muted)]">
          * Note: Values represent typical ranges per annum and may change based on academic year
          and university notifications.
        </p>

        <div className="mt-6 overflow-hidden rounded border border-[var(--rule)] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--parchment-dark)] font-serif text-[var(--ink)]">
                <tr>
                  <th className="border-b border-[var(--rule)] px-6 py-4 font-bold">
                    Program Category
                  </th>
                  <th className="border-b border-[var(--rule)] px-6 py-4 font-bold">Tuition Fee</th>
                  <th className="border-b border-[var(--rule)] px-6 py-4 font-bold">
                    Special/Lab Fee
                  </th>
                  <th className="border-b border-[var(--rule)] px-6 py-4 font-bold text-[var(--gold-light)]">
                    Estimated Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--rule)] font-serif">
                {fees.map((row, i) => (
                  <tr key={i} className="transition-colors hover:bg-[var(--parchment)]">
                    <td className="px-6 py-4 font-semibold text-[var(--ink)]">{row.category}</td>
                    <td className="px-6 py-4 text-[var(--muted)]">{row.tuition}</td>
                    <td className="px-6 py-4 text-[var(--muted)]">{row.special}</td>
                    <td className="px-6 py-4 font-bold text-[var(--ink)]">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="flex items-start gap-4 rounded border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6">
        <Info className="mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" />
        <div>
          <h4 className="font-playfair text-lg font-bold text-[var(--ink)]">
            Important Information
          </h4>
          <ul className="font-serif mt-2 list-inside list-disc space-y-2 text-sm leading-relaxed text-[var(--muted)]">
            <li>
              Examination fees, hostel accommodation, and mess charges are collected separately.
            </li>
            <li>
              Self-financed (SF) courses carry a different fee structure compared to regular
              courses.
            </li>
            <li>
              Students eligible for State Government fee reimbursement (JVD) must submit relevant
              certificates during admission.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
