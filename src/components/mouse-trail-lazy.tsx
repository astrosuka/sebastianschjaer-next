"use client"
import dynamic from "next/dynamic"

const MouseTrail = dynamic(() => import("@/components/mouse-trail"), {
  ssr: false,
})

export default function MouseTrailLazy() {
  return <MouseTrail />
}
