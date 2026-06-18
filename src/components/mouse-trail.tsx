"use client"
import { useRef, useEffect } from "react"

type Point = { x: number; y: number }

export default function MouseTrail() {
  const pointsRef = useRef<Point[]>([])
  const mousePositionRef = useRef<Point>({ x: 0, y: 0 })
  const segments = 50
  const pathRef = useRef<SVGPathElement>(null)
  const rafRef = useRef<number>(0)

  const move = (e: MouseEvent) => {
    const x = e.clientX
    const y = e.clientY

    mousePositionRef.current = { x, y }

    if (pointsRef.current.length === 0) {
      for (let i = 0; i < segments; i++) {
        pointsRef.current.push({ x, y })
      }
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", move)

    const anim = () => {
      const { x: px, y: py } = mousePositionRef.current

      pointsRef.current = pointsRef.current.map((p, index) => {
        const nextPoint = pointsRef.current[index + 1] || { x: px, y: py }

        return {
          x: p.x + (nextPoint.x - p.x) * 0.5,
          y: p.y + (nextPoint.y - p.y) * 0.5,
        }
      })

      if (pathRef.current && pointsRef.current.length > 0) {
        const d = `M ${pointsRef.current.map(({ x, y }) => `${x} ${y}`).join(" L ")}`
        pathRef.current.setAttribute("d", d)
      }

      rafRef.current = requestAnimationFrame(anim)
    }

    rafRef.current = requestAnimationFrame(anim)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <svg className="pointer-events-none fixed inset-0 z-50 hidden h-screen w-full mix-blend-multiply md:block">
      <path
        ref={pathRef}
        className="stroke-accent fill-none stroke-4"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      />
    </svg>
  )
}
