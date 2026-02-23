"use client"
import Image from "next/image";
import { useState, useEffect } from "react"

export default function ArrowUp() {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const section1 = document.querySelector(".not-arrow-up")
    if (!section1) return

    // Observe when section1 leaves the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section1 is NOT visible, show the arrow
        setShowArrow(!entry.isIntersecting)
      },
      { threshold: 0.3 } // Adjust sensitivity: 0 = any pixel, 1 = fully visible
    )

    observer.observe(section1)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-15 md:bottom-25 -right-7 z-90 p-3 rounded-xl shadow transition-all duration-300
        bg-copperfield-300 hover:bg-copperfield-500
        ${showArrow ? "opacity-100 sm:-translate-x-10 -translate-x-15 duration-300 ease-in" : "translate-x-0 invisible"}`}
      aria-label="Retour en haut"
    >
      <Image
        src="/images/up.svg"
        alt="Flèche pour remonter en haut de la page"
        width="15"
        height="15"
        loading={lazy}
        className="object-cover h-fit rounded-l-xl text-copperfield-400"
        // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
      />
    </button>
  )
}
