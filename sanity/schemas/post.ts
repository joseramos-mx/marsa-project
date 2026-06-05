/**
 * Sanity schema for a Blog Post.
 *
 * To activate Sanity Studio later:
 * 1. Create a project at https://sanity.io/manage and copy the project ID
 * 2. Add to .env.local:
 *      NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
 *      NEXT_PUBLIC_SANITY_DATASET=production
 * 3. Install sanity studio packages (sanity, @sanity/vision)
 * 4. Mount a /studio route exporting this schema
 */
export const postSchema = {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    { name: "title",       type: "string",   title: "Title" },
    { name: "slug",        type: "slug",     title: "Slug", options: { source: "title", maxLength: 96 } },
    { name: "locale",      type: "string",   title: "Locale", options: { list: ["es", "en"] }, initialValue: "es" },
    { name: "excerpt",     type: "text",     title: "Short excerpt", rows: 3 },
    { name: "coverImage",  type: "image",    title: "Cover image", options: { hotspot: true } },
    { name: "publishedAt", type: "datetime", title: "Published at" },
    { name: "author",      type: "string",   title: "Author name" },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    },
  ],
} as const;

export const schemaTypes = [postSchema];
