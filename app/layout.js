import './globals.css'
import { tel, email } from './info.js'
import Navbar from './_components/navbar.jsx'
import Footer from './_components/footer.jsx'

import {
  Source_Sans_3,
  Barlow_Condensed
} from "next/font/google";

// Métadonnées principales - OUTSIDE the component
export const metadata = {
  metadataBase: new URL('https://novurba.fr'),
  title:
    'Novurba - Urbanisme en Occitanie',
  description:
    "Raphaël Sinet est urbaniste diplômé et dirigeant de Novurba. Il accompagne les métropoles, mairies et communes dans la réalisation de plans budgétaires, de plan locaux d'urbanisme ou de projet d'expansion ou de remodellement.",
  // Auteur
  authors: [{ name: 'Raphaël Sinet' }],
  creator: 'ATU-Web',
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: "L'urbanisme avec comme mots d'ordre: résilience, bas carbone, sobriété",
    description:
      'Urbaniste diplômé basé à Montpellier, Raphaël Sinet est le dirigeant de Novurba. Il accompagnement les communes, métropoles, et mairies pour la réalisation de plans financiers, PLU ou nouveaux projets.',
    siteName: 'Novurba - Urbanisme en occitanie',
    url: 'https://novurba.fr',
    images: [
      {
        url: '/images/Logo_Novurba.png',
        width: 463,
        height: 452,
        alt: 'Logo de NovUrba, dirigé par Raphaël Sinet',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Novurba - Urbanisme en Occitanie',
    description: 'Accompagnement des métropoles, communes et mairies.',
    images: [
      '/images/Logo_Novurba.png',
    ],
  },
}

// JSON-LD optimisé pour le SEO local - OUTSIDE the component
export const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Novurba',
  founder: {
    '@type': 'Person',
    name: 'Raphaël Sinet',
    jobTitle: 'Urbaniste',
  },
  image: 'https://novurba.fr/images/Logo_Novurba.png',
  logo: 'https://novurba.fr/images/Logo_Novurba.png',
  description:
    "Raphaël Sinet est urbaniste diplômé et dirigeant de Novurba. Il accompagne les métropoles, mairies et communes dans la réalisation de plans budgétaires, de plan locaux d'urbanisme ou de projet d'expansion ou de remodellement",
  address: {
    '@type': 'PostalAddress',
    streetAddress: '21 AVENUE DE LA GALINE',
    addressLocality: 'CASTELNAU-LE-LEZ',
    postalCode: '34170',
    addressCountry: 'FR',
    addressRegion: 'Occitanie',
  },
  // "geo": {
  //   "@type": "GeoCoordinates",
  //   "latitude": 43.60048665192196,
  //   "longitude": 3.867169968557686,
  // },
  telephone: tel,
  email,
  url: 'https://novurba.fr',
  sameAs: [
    'https://www.linkedin.com/company/novurba/',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
}

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData).replace(/</g, '\\u003c'),
          }}
        />
        <link rel="icon" type="image/svg+xml" href="/images/cityN.svg"></link>
      </head>
      <body className={`${barlowCondensed.variable} ${sourceSans.variable} h-screen`}>
        <Navbar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
