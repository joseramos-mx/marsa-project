import { groq } from "next-sanity";

// All posts of a given locale, newest first
export const POSTS_QUERY = groq`
  *[_type == "post" && locale == $locale && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    publishedAt,
    author
  }
`;

// A single post by slug
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug && locale == $locale][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    content,
    publishedAt,
    author
  }
`;
