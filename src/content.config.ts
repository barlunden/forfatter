import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const about = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
    schema: z.object({
    name: z.string(),
    title: z.string(),
    tagline: z.string().optional(),
    avatar: z.string().optional(),
    email: z.string().optional(),
    location: z.string().optional(),
    social: z.object({
        instagram: z.string().optional(),
        facebook: z.string().optional(),
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
    }).optional(),
    cta: z.object({
        label: z.string(),
        url: z.string(),
    }).optional(),
})
})

const excerpts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/excerpts" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        type: z.string(),
        summary: z.string().optional(),
        publishedYear: z.number().min(1000).max(9999).optional(),
        publisher: z.string().optional(),
        pages: z.number().optional(),
        genre: z.string().optional(),
        language: z.string(),
        image: z.string().optional(),
        cta: z.object({
            label: z.string(),
            url: z.string(),
        }).optional(),
    })
})

export const collections = { about, excerpts };