import type { INFO_QUERY_RESULT } from "@/sanity/types"

type VideoEmbedProps = {
  data: NonNullable<NonNullable<INFO_QUERY_RESULT>["coverVideo"]>
}

export default function VideoEmbed({ data }: VideoEmbedProps) {
  const coverVideo = data?.asset?.url

  if (!coverVideo) return null

  return (
    <>
      <div className="relative h-full overflow-hidden rounded-md">
        {data?.asset?.url && (
          <video
            src={coverVideo}
            className="absolute h-full w-full scale-110 object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          ></video>
        )}
      </div>
    </>
  )
}
