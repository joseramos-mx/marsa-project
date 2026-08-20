import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import LandingPage, { landingMetadata } from "../../components/landing/LandingPage"
import { carillas } from "../../../lib/landings"

/** Landing de Google Ads: solo existe en español, no se genera variante /en. */
export function generateStaticParams() {
  return [{ locale: "es" }]
}

export const dynamicParams = false

export const metadata: Metadata = landingMetadata(carillas)

export default async function CarillasLanding({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== "es") notFound()
  setRequestLocale(locale)

  return <LandingPage content={carillas} />
}
