import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(["bits", "atoms"]),
    summary: z.string(),
    role: z.string(),
    year: z.string(),
    status: z.string(),
    externalUrl: z.url().optional(),
    logo: z.string().optional(),
    accent: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const links = defineCollection({
  loader: file("./src/content/links.json"),
  schema: z.object({
    title: z.string(),
    url: z.url(),
    note: z.string(),
    kind: z.enum(["read", "use", "visit", "follow"]),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, links };
