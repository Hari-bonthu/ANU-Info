import { createFileRoute } from "@tanstack/react-router";
import { AdmissionsShell } from "@/components/admissions/admissions-shell";
import { AdmissionsOverview } from "@/components/admissions/overview";
import { WhyChooseUs } from "@/components/admissions/why-choose-us";
import { HowToApply } from "@/components/admissions/how-to-apply";
import { FeeStructure } from "@/components/admissions/fee-structure";
import { Scholarships } from "@/components/admissions/scholarships";
import { AcademicCalendar } from "@/components/admissions/academic-calendar";
import { EligibilityCriteria } from "@/components/admissions/eligibility-criteria";
import { AffiliatedColleges } from "@/components/admissions/affiliated-colleges";
import { Helpdesk } from "@/components/admissions/helpdesk";
import { Faqs } from "@/components/admissions/faqs";
import { Brochure } from "@/components/admissions/brochure";

export const Route = createFileRoute("/admissions/$pageId")({
  component: AdmissionsPage,
});

const VALID_PAGES = [
  "overview",
  "why-choose-us",
  "academic-calendar",
  "fee-structure",
  "scholarships",
  "how-to-apply",
  "eligibility-criteria",
  "affiliated-colleges",
  "helpdesk",
  "faqs",
  "brochure",
];

function AdmissionsPage() {
  const { pageId } = Route.useParams();

  return (
    <AdmissionsShell pageId={pageId}>
      {pageId === "overview" && <AdmissionsOverview />}
      {pageId === "why-choose-us" && <WhyChooseUs />}
      {pageId === "academic-calendar" && <AcademicCalendar />}
      {pageId === "fee-structure" && <FeeStructure />}
      {pageId === "scholarships" && <Scholarships />}
      {pageId === "how-to-apply" && <HowToApply />}
      {pageId === "eligibility-criteria" && <EligibilityCriteria />}
      {pageId === "affiliated-colleges" && <AffiliatedColleges />}
      {pageId === "helpdesk" && <Helpdesk />}
      {pageId === "faqs" && <Faqs />}
      {pageId === "brochure" && <Brochure />}
      {!VALID_PAGES.includes(pageId) && (
        <div className="flex min-h-[40vh] items-center justify-center rounded border border-[var(--rule)] bg-white p-8 text-center shadow-sm">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[var(--ink)]">
              Page Under Construction
            </h2>
            <p className="mt-2 font-serif text-[var(--muted)]">
              The content for "{pageId.replace(/-/g, " ")}" is currently being prepared.
            </p>
          </div>
        </div>
      )}
    </AdmissionsShell>
  );
}
