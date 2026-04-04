import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['live', 'research', 'archived', 'in-progress']),
    featured: z.boolean().default(false),
    order: z.number(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    links: z
      .object({
        github: z.string().optional(),
        live: z.string().optional(),
        demo: z.string().optional(),
        paper: z.string().optional(),
      })
      .optional(),
    recognition: z.array(z.string()).optional(),
    year: z.string(),
    paper: z.object({
      abstract: z.string(),
      problem: z.string(),
      method: z.string(),
      results: z.string(),
      limitations: z.string(),
    }).optional(),
  }),
});

export const collections = { projects };
