import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "../../../i18n/routing";
import { isSanityConfigured, sanityClient } from "../../../sanity/lib/client";
import { POSTS_QUERY } from "../../../sanity/lib/queries";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogIndex from "./BlogIndex";
import ComingSoon from "./ComingSoon";

// Flip this to `true` once you've added posts in Sanity Studio
const BLOG_ENABLED = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/blog" : `/${locale}/blog`,
      languages: { "es-MX": "/blog", "en-US": "/en/blog", "x-default": "/blog" },
    },
  };
}

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
  author?: string;
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Try to fetch posts only if Sanity is configured and the blog is enabled
  let posts: Post[] = [];
  if (BLOG_ENABLED && isSanityConfigured && sanityClient) {
    try {
      posts = await sanityClient.fetch<Post[]>(POSTS_QUERY, { locale });
    } catch {
      posts = [];
    }
  }

  const showComingSoon = !BLOG_ENABLED || posts.length === 0;

  return (
    <main className="bg-[#0c0c0c]">
      <Navbar />
      {showComingSoon ? <ComingSoon /> : <BlogIndex posts={posts} locale={locale} />}
      <Footer />
    </main>
  );
}
