'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const pathname = usePathname()
    const isHome = pathname === '/'
  return (
    <footer className="relative bottom-0 bg-transparent mt-10 sm:mt-5 md:mt-8 z-90">
        <div className="mx-auto w-screen px-4 py-2 text-xl">
          <div className="md:px-15 sm:px-8 px-4">
            <hr className={`mb-3 border-gray-300 mx-auto lg:mb-8 ${isHome ? 'hidden md:block' : ''}`}/>


          {/* logo novurba dans le cas screen >md */}
            <div className="flex flex-col md:hidden">
              <a href="/" className='mb-1 -mt-5 sm:mb-0 sm:mt-10 w-fit mx-auto'>
                <Image
                  src="/images/6410514c268519ca04980d2a_Logo essai 3.png"
                  alt="Logo de Novurba"
                  width={463}
                  height={452}
                  preload={true}
                  className="object-cover w-25 h-fit mx-auto bg-copperfield-400/90 rounded-full mt-5"
                  // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
                />
              </a>
             </div>


              <ul className="md:grid-cols-5 md:max-w-[95%] lg:max-w-[75%] items-center text-nowrap gap-x-2 gap-y-2 grid grid-cols-2 md:mx-auto tracking-wide sm:-mt-19 md:mt-18">

                <li className='text-center w-fit mx-auto hidden sm:block'>
                  <a href="/contact" className="w-fit" >Contact</a>
                </li>
                <li className='text-center w-fit mx-auto'>
                  <a
                    href="/notre-expertise"
                  >
                    Notre expertise
                  </a>
                </li>

                <li className="hidden md:flex"></li>

                <li className='text-center w-fit mx-auto'>
                  <a
                    href="/nos-realisations"
                  >
                    Nos réalisations
                  </a>
                </li>
                <li className='text-center w-fit mx-auto block sm:hidden'>
                  <a href="/contact" className="w-fit" >Contact</a>
                </li>
                <li className='text-center w-fit mx-auto'>
                  <a href="/sitemap">Plan du site</a>
                </li>

              </ul>

                  <a href="/" className="hidden md:flex mx-auto -mt-20 w-fit">
                    <Image
                      src="/images/6410514c268519ca04980d2a_Logo essai 3.png"
                      alt="Logo de Novurba"
                      width={463}
                      height={452}
                      preload={true}
                      className="object-cover w-25 h-fit mx-auto bg-copperfield-400/90 rounded-full mt-5"
                      // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
                    />
                  </a>

              <div className="w-full flex justify-end mt-5 md:-mt-5">
              <div className="w-fit">
                <p className="text-sm text-end ">2026 - Tous droits réservés</p>
                <hr className="my-1 border-gray-300 mx-auto md:my-1" />
                <p className="text-sm text-end tracking-wider">Réalisé par <a href="http://www.atuweb.fr" className="text-xs text-center" target="_blank">ATU-Web</a></p>
              </div>
              </div>
              </div>
            </div>

    </footer>
  )
}
