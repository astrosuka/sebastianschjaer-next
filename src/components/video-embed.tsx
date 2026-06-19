"use client"

import { useEffect, useRef } from "react"
import type { INFO_QUERY_RESULT } from "@/sanity/types"

type VideoEmbedProps = {
  data: NonNullable<NonNullable<INFO_QUERY_RESULT>["coverVideo"]>
}

export default function VideoEmbed({ data }: VideoEmbedProps) {
  const coverVideo = data?.asset?.url
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      videoRef.current.style.opacity = "1"
    }
  }, [])

  if (!coverVideo) return null

  return (
    <div className="relative h-full overflow-hidden rounded-md">
      <video
        ref={videoRef}
        src={coverVideo}
        className="absolute inset-0 h-full w-full scale-110 object-cover"
        style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={(e) => {
          e.currentTarget.style.opacity = "1"
        }}
      />
    </div>
  )
}
