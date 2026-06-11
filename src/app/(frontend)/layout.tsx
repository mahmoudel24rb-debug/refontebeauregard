import { Inter } from 'next/font/google'
import React from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './styles.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Parc Beauregard Fitness & Coaching — Rochecorbon',
  description:
    'Salle de sport et coaching au cœur de la nature à Rochecorbon (37) : cours collectifs, espace fonctionnel, cross-cardio et kid fitness.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className={inter.variable} lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
