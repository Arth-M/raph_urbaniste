'use client'
import './globals.css'
import Script from "next/script"
import Navbar from './_components/navbar.jsx'
import Footer from './_components/footer.jsx'

import { useState, useEffect } from 'react'


// REMETTRE LES METADATA QUAND ON MET LE SITE EN LIGNE ET ENLEVER USE CLIENT ET PAGE CODE ET IMPORT USESTATE et USEEFFECT !!!!

// Métadonnées principales - OUTSIDE the component
// export const metadata = {
//   title:
//     'Novurba - Urbanisme en Occitanie',
//   description:
//     "Raphaël Sinet est urbaniste diplômé et dirigeant de Novurba. Il accompagne les métropoles, mairies et communes dans la réalisation de plans budgétaires, de plan locaux d'urbanisme ou de projet d'expansion ou de remodellement.",
//   // Auteur
//   authors: [{ name: 'Raphaël Sinet' }],
//   creator: 'ATU-Web',
//   // Open Graph
//   openGraph: {
//     type: 'website',
//     locale: 'fr_FR',
//     title: "L'urbanisme avec comme mots d'ordre: résilience, bas carbone, sobriété",
//     description:
//       'Urbaniste diplômé basé à Montpellier, Raphaël Sinet est le dirigeant de Novurba. Il accompagnement les communes, métropoles, et mairies pour la réalisation de plans financiers, PLU ou nouveaux projets.',
//     siteName: 'Novurba - Urbanisme en occitanie',
//     url: 'https://novurba.fr',
//     images: [
//       {
//         url: 'https://media.licdn.com/dms/image/v2/C4E0BAQG70Y3ZqeWGqQ/company-logo_200_200/company-logo_200_200/0/1678785499189?e=2147483647&v=beta&t=ZU4eGSYK1ZBKuX5rrXqULVpQnSn_bfO6VwIUOlEd4XY',
//         width: 309,
//         height: 303,
//         alt: 'Photographie de Raphaël Sinet, dirigeant de NovUrba',
//       },
//     ],
//   },
//   // Twitter Card
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Novurba - Urbanisme en Occitanie',
//     description: 'Accompagnement des métropoles, communes et mairies.',
//     images: [
//       'https://media.licdn.com/dms/image/v2/C4E0BAQG70Y3ZqeWGqQ/company-logo_200_200/company-logo_200_200/0/1678785499189?e=2147483647&v=beta&t=ZU4eGSYK1ZBKuX5rrXqULVpQnSn_bfO6VwIUOlEd4XY',
//     ],
//   },
//   // Lien canonique
//   alternates: {
//     canonical: 'https://novurba.fr/', // à remplacer
//   },
// }

// JSON-LD optimisé pour le SEO local - OUTSIDE the component
// export const jsonLdData = {
//   '@context': 'https://schema.org',
//   '@type': 'LocalBusiness',
//   additionalType: 'https://schema.org/Urbanist',
//   name: 'Raphaël Sinet',
//   image: 'https://media.licdn.com/dms/image/v2/C4E0BAQG70Y3ZqeWGqQ/company-logo_200_200/company-logo_200_200/0/1678785499189?e=2147483647&v=beta&t=ZU4eGSYK1ZBKuX5rrXqULVpQnSn_bfO6VwIUOlEd4XY',
//   description:
//     "Raphaël Sinet est urbaniste diplômé et dirigeant de Novurba. Il accompagne les métropoles, mairies et communes dans la réalisation de plans budgétaires, de plan locaux d'urbanisme ou de projet d'expansion ou de remodellement",
//   address: {
//     '@type': 'PostalAddress',
//     streetAddress: '21 AVENUE DE LA GALINE',
//     addressLocality: 'CASTELNAU-LE-LEZ',
//     postalCode: '34170',
//     addressCountry: 'FR',
//     addressRegion: 'Occitanie',
//   },
//   // "geo": {
//   //   "@type": "GeoCoordinates",
//   //   "latitude": 43.60048665192196,
//   //   "longitude": 3.867169968557686,
//   // },
//   // telephone: '+33-6-15-43-51-99',
//   // email: 'c.castronovo.34@gmail.com',
//   url: 'https://novurba.fr',
//   sameAs: [
//     'https://fr.linkedin.com/company/novurba?trk=public_post_feed-actor-image',
//   ],
//   openingHoursSpecification: [
//     {
//       '@type': 'OpeningHoursSpecification',
//       dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//       opens: '09:00',
//       closes: '18:00',
//     },
//   ],
// }

export default function RootLayout({ children }) {
  const [codeTrue, setCodeTrue] = useState(false)
  const [userTest, setUserTest] = useState(false)
  const [code, setCode] = useState("")

  useEffect(() => {
    const access = sessionStorage.getItem('siteAccess')
    if (access === 'true') {
      setCodeTrue(true)
    }
  }, [])


  const handleCodeSubmit = () => {
    if (code === '34000') {
      sessionStorage.setItem('siteAccess', 'true')
      setCodeTrue(true)
    } else {
      setUserTest(true)
    }
  }

  if (!codeTrue) {
    return (
      <html lang="fr">
        <head>
          {/* <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLdData),
            }}
          /> */}
          <link rel="icon" type="image/svg+xml" href="./images/cityN.svg"></link>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
          </style>
        </head>
        <body className='oswald  h-screen'>
       <div className="px-5 w-full h-full flex flex-col items-center justify-center">
        <label htmlFor="code" className="text-xl text-black text-center">Site en construction. <br></br>Un code est nécessaire pour y accéder</label>
        <input type="password" name='code' placeholder="xxxx"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border border-gray-200 rounded-lg mt-4 px-2 py-1"
        />
        <button onClick={handleCodeSubmit} className="rounded-xl bg-white shadow-calypso-800 shadow-lg hover:bg-calypso-500 hover:-translate-y-0.5 px-3 py-2 text-black font-semibold mt-6 tracking-wide">Envoyer</button>
        {userTest ?
        <div className="text-sm text-black mt-1">Il est nécessaire d'entrer le bon code pour continuer
      </div>
    :
    <div className="hidden"></div>}
    </div>
    </body>
    </html>
    )
  } else {
    return (
      <html lang="fr">
        <head>
          {/* <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLdData),
            }}
          /> */}
          <link rel="icon" type="image/svg+xml" href="./images/cityN.svg"></link>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
          </style>
        </head>
        <body className='oswald  h-screen'>
          <Navbar/>
          {children}
          <Footer />
          </body>
      </html>
    )
  }
}
