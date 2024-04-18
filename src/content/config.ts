import { defineCollection, z } from "astro:content"

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.array(
      z.object({
        title: z.string(),
        summary: z.string(),
        body: z.string(),
      })
    ),
  }),
}
