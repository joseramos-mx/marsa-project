'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

const GEIST  = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

type Post = {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage?: string
  publishedAt: string
  author?: string
}

/**
 * Renders once posts exist in Sanity and BLOG_ENABLED is true in page.tsx.
 * Until then the page shows <ComingSoon /> instead.
 */
export default function BlogIndex({ posts, locale }: { posts: Post[]; locale: string }) {
  const t = useTranslations('blog')

  return (
    <section className="bg-[#0c0c0c] py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p
            className="text-white/40 text-[10px] uppercase mb-5"
            style={{ ...GEIST, letterSpacing: '0.22em' }}
          >
            ▪ {t('eyebrow')}
          </p>
          <h1 className="text-[2.6rem] md:text-5xl text-white tracking-tight" style={ALBERT}>
            {t('indexHeading')}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/${locale === 'es' ? '' : locale + '/'}blog/${post.slug}`}
              className="group bg-[#141414] border border-white/5 rounded-3xl overflow-hidden hover:border-white/15 transition-colors"
            >
              {post.coverImage && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col gap-3">
                <p className="text-white/40 text-[11px] uppercase tracking-widest" style={GEIST}>
                  {new Date(post.publishedAt).toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </p>
                <h2 className="text-white text-[1.2rem] font-semibold leading-snug" style={ALBERT}>
                  {post.title}
                </h2>
                <p className="text-white/55 text-[13.5px] leading-relaxed" style={GEIST}>
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
