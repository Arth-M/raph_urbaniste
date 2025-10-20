'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef(null)




  // Handle clicking outside to close menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className='w-screen fixed top-0 right-0 left-0 z-5 py-3 bg-transparent'
      ref={menuRef}
    >
      <div id='nav-div' className="mx-auto opacity-70 w-screen px-2 md:px-5">
        <div className="relative w-full flex flex-nowrap items-center justify-between px-4 mx-auto">
          <div className="inset-y-0 left-0 flex items-center" id="doctolibButton">
            <span className="sr-only">Rendez-vous Doctolib</span>
            <a
              href="/"
              rel="keep-params"
              className="rounded-3xl md:rounded-4xl bg-[url('/images/child3.svg')] sm:w-25 sm:h-11 w-18 h-8 bg-contain bg-no-repeat lg:mx-auto"
            ></a>
          </div>

          <div className="hidden lg:flex items-center justify-end min-w-[500px]">
            <div className="space-x-4 justify-end items-center">
              <a
                href="/"
                className={`rounded-md font-light text-md   ${
                  ' text-gray-900  hover:text-gray-600 hover:bg-gray-100 px-2 py-1'
                }`}
              >
                Accueil
              </a>
              <a
                href="/notre-expertise"
                className={`rounded-md font-light text-md   ${
                  ' text-gray-900  hover:text-gray-600 hover:bg-gray-100 px-2 py-1'
                }`}
              >
                Notre expertise
              </a>
              <a
                href="/nos-realisations"
                className={`rounded-md font-light text-md  ${
                  ' text-gray-900  hover:text-gray-600 hover:bg-gray-100 px-2 py-1'
                }`}
              >
                Nos réalisations
              </a>
              <a
                href="/entreprise"
                className={`rounded-md font-light text-md  ${
                 ' text-gray-900  hover:text-gray-600 hover:bg-gray-100 px-2 py-1'
                }`}
              >
                L'entreprise
              </a>

            </div>
          </div>


          <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0 lg:hidden">
            {/* Mobile menu button with hamburger icon */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="relative inline-flex items-center justify-center content-center rounded-md my-auto px-0 text-gray-600  focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 z-50"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} flex justify-end`}
      >
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-50 w-fit">
          <a
            href="/"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="/notre-expertise"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Notre expertise
          </a>
          <a
            href="/nos-realisations"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nos réalisations
          </a>
          <a
            href="/entreprise"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            L'entreprise
          </a>

        </div>
      </div>
    </nav>
  )
}
