// In-memory sliding-window rate limiter, keyed by IP.
// Serverless caveat: state lives per instance, so limits are approximate under
// horizontal scale. Good enough as a first line against casual form abuse;
// pair with the honeypot + timestamp checks.

type Bucket = { hits: number[] }

const buckets = new Map<string, Bucket>()

export type RateLimitResult = { ok: true } | { ok: false; retryAfterMs: number }

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now()
  const bucket = buckets.get(key) ?? { hits: [] }
  bucket.hits = bucket.hits.filter((t) => now - t < windowMs)

  if (bucket.hits.length >= limit) {
    const oldest = bucket.hits[0]
    buckets.set(key, bucket)
    return { ok: false, retryAfterMs: windowMs - (now - oldest) }
  }

  bucket.hits.push(now)
  buckets.set(key, bucket)

  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (v.hits.length === 0 || now - v.hits[v.hits.length - 1] > windowMs) {
        buckets.delete(k)
      }
    }
  }

  return { ok: true }
}
