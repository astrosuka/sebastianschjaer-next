"use client"
import { DIRECTOR_BY_SLUG_QUERY_RESULT } from "@/sanity/types"
import { useLanguage } from "@/context/LanguageContext"
import { Image } from "next-sanity/image"
import { urlFor } from "@/sanity/lib/image"

type DirectorProjectProps = {
  data: DIRECTOR_BY_SLUG_QUERY_RESULT
}
export default function DirectorProject({ data }: DirectorProjectProps) {
  const { language } = useLanguage()
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
          <Image
            src={urlFor(data.image).url()}
            alt={`${data.titleEng} poster`}
            width={600}
            height={800}
          />
        )}
      </div>
    </>
  )
}
