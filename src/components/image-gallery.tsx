"use client"
import { useState } from "react"
import type { PHOTOS_QUERY_RESULT } from "@/sanity/types"
import { Image } from "next-sanity/image"
import { urlFor } from "@/sanity/lib/image"
import Lightbox from "./lightbox"

type ImageGalleryProps = {
  data: PHOTOS_QUERY_RESULT
}

export default function ImageGallery({ data }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const photos = data?.photos ?? []

  return (
    <>
      <div className="columns-1 gap-2 sm:columns-3 2xl:columns-4">
        {photos.map((item, index) => (
          <div
            key={item._key}
            className="mb-2 break-inside-avoid-column overflow-hidden rounded-sm"
            style={{
              backgroundImage: `url(${urlFor(item).height(10).blur(30).format("webp").url()})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: `${item.dimensions?.aspectRatio}/1`,
            }}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={urlFor(item).height(500).format("webp").url()}
              alt={`Photo ${index + 1}`}
              width={item.dimensions?.width ?? 500}
              height={item.dimensions?.height ?? 500}
              className="h-auto w-full cursor-pointer"
              style={{
                opacity: "0",
                transition: "opacity 0.5s",
              }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = "1"
              }}
              loading={index < 4 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      {currentIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
        />
      )}
    </>
  )
}
