"use client"
import { motion } from "motion/react"
export default function LoadingAnimation() {
  return (
    <motion.div
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      className="bg-accent mt-2 h-2 w-2 rounded-full"
    ></motion.div>
  )
}
