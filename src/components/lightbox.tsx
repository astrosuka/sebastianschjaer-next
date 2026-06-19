"use client"

import { motion } from "motion/react"
import { useLanguage } from "@/context/LanguageContext"
import { useState, useRef } from "react"
import type { PHOTOS_QUERY_RESULT } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import useMousePosition from "@/hooks/useMousePosition"

type PhotoItem = NonNullable<NonNullable<PHOTOS_QUERY_RESULT>["photos"]>[number]

type LightboxProps = {
  photos: PhotoItem[]
  currentIndex: number
  onClose: () => void
  singleImage?: boolean
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  singleImage = false,
}: LightboxProps) {
  const { language } = useLanguage()
  const [index, setIndex] = useState(currentIndex)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()
  const [cursorIcon, setCursorIcon] = useState("")

  const currentPhoto = photos[index]

  const handleChangeImage = (direction: "prev" | "next") => {
    const img = wrapperRef.current?.querySelector("img")
    if (img) {
      img.style.opacity = "0"
    }

    const newIndex =
      direction === "next"
        ? (index + 1) % photos.length
        : (index - 1 + photos.length) % photos.length

    setIndex(newIndex)
  }

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = "1"
  }

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  }

  return (
    <div className="no-doc-scroll bg-background fixed top-0 left-0 z-10 flex h-screen w-full items-center justify-center select-none">
      <div
        ref={wrapperRef}
        style={{
          backgroundImage: `url(${urlFor(currentPhoto).height(10).blur(30).format("webp").url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="overflow-hidden rounded-sm"
      >
        <img
          src={urlFor(currentPhoto).height(1500).format("webp").url()}
          alt=""
          className="max-h-[calc(100vh-1.5rem)] max-w-[100vw] cursor-pointer"
          style={{
            opacity: "0",
            transition: "opacity 0.5s",
          }}
          onLoad={handleImageLoad}
          onClick={onClose}
        />
      </div>
      {!singleImage && (
        <div className="fixed top-0 left-0 grid h-screen w-full grid-cols-3 justify-between">
          <div
            onClick={() => handleChangeImage("prev")}
            onMouseEnter={() => setCursorIcon("arrow-back.svg")}
            className="h-full cursor-pointer"
          ></div>
          <div
            onClick={onClose}
            onMouseEnter={() => setCursorIcon("close.svg")}
            className="h-full cursor-pointer"
          ></div>
          <div
            onClick={() => handleChangeImage("next")}
            onMouseEnter={() => setCursorIcon("arrow-forward.svg")}
            className="h-full cursor-pointer"
          ></div>
        </div>
      )}
      <button
        onClick={onClose}
        onMouseEnter={() => setCursorIcon("close.svg")}
        className="font-display hover:text-accent fixed top-0 right-0 z-10 cursor-pointer px-4 py-2"
      >
        {language === "es" ? "CERRAR" : "CLOSE"}
      </button>

      {!singleImage && (
        <motion.div
          className="pointer-events-none fixed top-0 -left-12.5 grid place-items-center px-2 text-xl"
          variants={variants}
          animate="default"
          transition={{ type: "tween", ease: "backOut" }}
        >
          {cursorIcon && (
            <img src={`/assets/${cursorIcon}`} alt="arrow" className="size-8" />
          )}
        </motion.div>
      )}
    </div>
  )
}
