"use client"
import { useState } from "react"
import { DIRECTOR_BY_SLUG_QUERY_RESULT } from "@/sanity/types"
import { useLanguage } from "@/context/LanguageContext"
import { urlFor } from "@/sanity/lib/image"
import Lightbox from "./lightbox"

type DirectorProjectProps = {
  data: DIRECTOR_BY_SLUG_QUERY_RESULT
}
export default function DirectorProject({ data }: DirectorProjectProps) {
  const { language } = useLanguage()
  const [showLightbox, setShowLightbox] = useState(false)

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">
            {data?.title && language === "es"
              ? data?.title
              : data?.titleEng || data?.title}
          </h1>

          <div>
            <div>
              <div>
                <span className="text-secondary text-sm uppercase">
                  {data?.premiere && language === "es"
                    ? "Estreno:"
                    : "Premiere:"}
                </span>
                <span> {data?.premiere}</span>
              </div>
              {data?.duration && language === "es" ? (
                <div>
                  <span className="text-secondary text-sm uppercase">
                    Duración:
                  </span>{" "}
                  {data?.duration} minutos
                </div>
              ) : (
                <div>
                  <span className="text-secondary text-sm uppercase">
                    Duration:
                  </span>{" "}
                  {data?.duration} minutes
                </div>
              )}
            </div>

            <div className="mt-4">
              {data?.credits?.map((credit) => (
                <p key={credit._key}>
                  <span className="text-secondary text-sm uppercase">
                    {credit.role && language === "es"
                      ? credit.role
                      : credit.roleEng || credit.role}
                  </span>
                  : {credit.name && credit.name}
                </p>
              ))}
            </div>
            {data?.synopsis && (
              <div className="mt-4">
                <div className="text-secondary text-sm uppercase">
                  {language === "es" ? "Sinopsis:" : "Synopsis:"}
                </div>
                <p className="md:max-w-prose">
                  {language === "es"
                    ? data?.synopsis
                    : data?.synopsisEng || data?.synopsis}
                </p>
              </div>
            )}
          </div>
        </div>

        {data?.image && (
          <div
            className="mx-auto max-h-[calc(100vh-11rem)] max-w-full overflow-hidden rounded-sm"
            style={{
              backgroundImage: `url(${urlFor(data.image).height(10).blur(30).format("webp").url()})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: `${data.image.dimensions?.aspectRatio}/1`,
            }}
            onClick={() => {
              if (window.matchMedia("(min-width: 768px)").matches) {
                setShowLightbox(true)
              }
            }}
          >
            <img
              src={urlFor(data.image).height(1080).format("webp").url()}
              alt={`${data.titleEng} poster`}
              className="max-h-full max-w-full md:cursor-pointer lg:mx-auto"
              style={{
                opacity: "0",
                transition: "opacity 0.5s",
              }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = "1"
              }}
            />
          </div>
        )}
      </div>

      {showLightbox && data?.image && (
        <Lightbox
          photos={[data.image]}
          currentIndex={0}
          onClose={() => setShowLightbox(false)}
          singleImage
        />
      )}
    </>
  )
}
