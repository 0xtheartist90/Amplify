import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default async function ServicesRedirectPage() {
  const cookieStore = await cookies()
  const locale = cookieStore.get("NEXT_LOCALE")?.value === "nl" ? "nl" : "en"
  redirect(`/${locale}/services/socials`)
  return null
}
