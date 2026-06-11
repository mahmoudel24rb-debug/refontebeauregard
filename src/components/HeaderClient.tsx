'use client'

import Link from 'next/link'
import React, { useState } from 'react'

type Lien = { label: string; url: string }

export function HeaderClient({ navigation, cta }: { navigation: Lien[]; cta: Lien }) {
  const [ouvert, setOuvert] = useState(false)

  return (
    <header className="header">
      <div className="header__pill">
        <Link className="header__logo" href="/">
          parc<span>beauregard</span>
        </Link>
        <nav className="header__nav">
          {navigation.map((lien) => (
            <Link className="header__lien" href={lien.url} key={lien.url}>
              {lien.label}
            </Link>
          ))}
        </nav>
        <Link className="header__cta" href={cta.url}>
          {cta.label}
        </Link>
        <button
          aria-expanded={ouvert}
          aria-label="Ouvrir le menu"
          className="header__burger"
          onClick={() => setOuvert(!ouvert)}
          type="button"
        >
          ☰
        </button>
      </div>
      {ouvert && (
        <nav className="header__mobile">
          {navigation.map((lien) => (
            <Link href={lien.url} key={lien.url} onClick={() => setOuvert(false)}>
              {lien.label}
            </Link>
          ))}
          <Link href={cta.url} onClick={() => setOuvert(false)}>
            {cta.label}
          </Link>
        </nav>
      )}
    </header>
  )
}
