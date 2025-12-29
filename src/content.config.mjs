import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema for CV data
const cv = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/cv' }),
  schema: z.object({
    name: z.string(),
    headline: z.string().nullable().optional(),
    location: z.string().nullable().optional(),
    email: z.string().email(),
    photo: z.string().nullable().optional(),
    phone: z.string().optional(),
    website: z.string().nullable().optional(),
    social_networks: z.array(z.object({
      network: z.string(),
      username: z.string(),
    })).optional(),
    sections: z.object({
      education: z.array(z.object({
        institution: z.string(),
        area: z.string(),
        degree: z.string(),
        date: z.string().nullable().optional(),
        start_date: z.union([z.string(), z.number()]),
        end_date: z.union([z.string(), z.number()]).optional(),
        location: z.string(),
        summary: z.string().nullable().optional(),
        highlights: z.array(z.string()).optional(),
      })).optional(),
      experience: z.array(z.object({
        company: z.string(),
        position: z.string(),
        date: z.string().nullable().optional(),
        start_date: z.union([z.string(), z.number()]),
        end_date: z.union([z.string(), z.number()]).optional(),
        location: z.string(),
        summary: z.string().nullable().optional(),
        highlights: z.array(z.string()).optional(),
      })).optional(),
      projects: z.array(z.object({
        name: z.string(),
        date: z.string().nullable().optional(),
        start_date: z.union([z.string(), z.number()]).optional(),
        end_date: z.union([z.string(), z.number()]).optional(),
        location: z.string().optional(),
        summary: z.string().nullable().optional(),
        highlights: z.array(z.string()).optional(),
        url: z.string().optional(),
      })).optional(),
      skills: z.array(z.object({
        label: z.string(),
        details: z.string(),
      })).optional(),
      awards_and_certifications: z.array(z.object({
        label: z.string(),
        details: z.string().optional(),
      })).optional(),
    }),
  }),
});

// Schema for page layouts
const pages = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    blocks: z.array(z.object({
      type: z.string(),
      data: z.union([z.string(), z.record(z.string())]).optional(),
      props: z.record(z.any()).optional(),
    })),
  }),
});

export const collections = { cv, pages };
