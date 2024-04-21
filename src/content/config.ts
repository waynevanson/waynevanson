import { defineCollection, z } from "astro:content"

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      summary: z.string(),
    }),
  }),
  pages: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      path: z.string(),
    }),
  }),
}
