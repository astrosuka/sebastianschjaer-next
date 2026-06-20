import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const signature = request.headers.get("sanity-webhook-signature")
  if (signature !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  const body = await request.json()
  const { _type, slug } = body

  switch (_type) {
    case "director":
      revalidatePath("/director")
      if (slug?.current) {
        revalidatePath(`/director/${slug.current}`)
      }
      break
    case "info":
      revalidatePath("/")
      revalidatePath("/bio")
      break
    case "editor":
      revalidatePath("/editor")
      break
    case "mixtapes":
      revalidatePath("/mixtapes")
      break
    case "photos":
      revalidatePath("/fotos")
      break
    default:
      // Unknown type — revalidate everything
      revalidatePath("/", "layout")
  }

  // Also revalidate sitemap when director content changes
  // if (_type === "director") {
  //   revalidatePath("/sitemap.xml")
  // }

  return NextResponse.json({ revalidated: true })
}
