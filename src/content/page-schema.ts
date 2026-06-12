import { z } from "zod";

export const linkItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const pageMetaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  keywords: z.array(z.string().min(1)).default([]),
  owner: z.string().min(1),
  lastUpdated: z.string().min(1),
  canonicalUrl: z.string().min(1),
});

const heroSchema = z.object({
  heading: z.string().min(1),
  subheading: z.string().min(1),
  ctaLabel: z.string().optional(),
  ctaLink: z.string().optional(),
});

const governanceSchema = z.object({
  sourceRef: z.string().min(1),
  approvedBy: z.string().min(1),
  approvedOn: z.string().min(1),
});

const richTextSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("richText"),
  title: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
});

const cardsSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("cards"),
  title: z.string().min(1),
  items: z.array(
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
    }),
  ),
});

const noticesSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("notices"),
  title: z.string().min(1),
  items: z.array(
    z.object({
      date: z.string().min(1),
      title: z.string().min(1),
      details: z.string().min(1),
      href: z.string().optional(),
    }),
  ),
});

const downloadsSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("downloads"),
  title: z.string().min(1),
  items: z.array(
    z.object({
      name: z.string().min(1),
      format: z.string().min(1),
      href: z.string().min(1),
      note: z.string().optional(),
    }),
  ),
});

const faqSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("faq"),
  title: z.string().min(1),
  items: z.array(
    z.object({
      question: z.string().min(1),
      answer: z.string().min(1),
    }),
  ),
});

const contactSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("contact"),
  title: z.string().min(1),
  items: z.array(
    z.object({
      label: z.string().min(1),
      value: z.string().min(1),
      href: z.string().optional(),
    }),
  ),
});

const timelineSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("timeline"),
  title: z.string().min(1),
  items: z.array(
    z.object({
      period: z.string().min(1),
      title: z.string().min(1),
      description: z.string().min(1),
    }),
  ),
});

const tableSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("table"),
  title: z.string().min(1),
  columns: z.array(z.string().min(1)).min(1),
  rows: z.array(z.array(z.string().min(1))).min(1),
});

export const pageSectionSchema = z.discriminatedUnion("type", [
  richTextSectionSchema,
  cardsSectionSchema,
  noticesSectionSchema,
  downloadsSectionSchema,
  faqSectionSchema,
  contactSectionSchema,
  timelineSectionSchema,
  tableSectionSchema,
]);

export const pageContentSchema = z.object({
  meta: pageMetaSchema,
  hero: heroSchema,
  governance: governanceSchema,
  breadcrumbs: z.array(linkItemSchema).min(1),
  relatedLinks: z.array(linkItemSchema).default([]),
  onThisPage: z.array(linkItemSchema).default([]),
  sections: z.array(pageSectionSchema).min(1),
});

export type PageContent = z.infer<typeof pageContentSchema>;
export type PageSection = z.infer<typeof pageSectionSchema>;

export function validatePageContent(content: PageContent): PageContent {
  return pageContentSchema.parse(content);
}
