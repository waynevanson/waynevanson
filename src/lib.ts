import type { HTMLTag } from "astro/types"
import * as cheerio from "cheerio"
import { marked } from "marked"

export async function markdownToHtml(markdown: string): Promise<string> {
  // Appends these classes to these elements
  const styles: Partial<Record<HTMLTag, string>> = {
    p: "py-2",
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
    h5: "text-md",
    h6: "text-sm",
  }

  const html = await marked(markdown)

  const $ = cheerio.load(html)

  for (const [tag, classes] of Object.entries(styles)) {
    const elements = $(tag)
    elements.attr("class", (attr) => attr + " " + classes)
  }

  return $.html()
}
