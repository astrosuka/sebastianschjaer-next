import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook"

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get(SIGNATURE_HEADER_NAME) ?? ""

  if (!isValidSignature(body, signature, process.env.SANITY_WEBHOOK_SECRET!)) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  const { _type, slug } = JSON.parse(body)

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
