import React from 'react'

import { getHeader } from '@/lib/data'
import { HeaderClient } from './HeaderClient'

export async function Header() {
  const header = await getHeader()

  const navigation = (header.navigation ?? []).map((lien) => ({
    label: lien.label,
    url: lien.url,
  }))

  return (
    <HeaderClient
      cta={{ label: header.cta?.label ?? 'Nous rejoindre', url: header.cta?.url ?? '/contact' }}
      navigation={navigation}
    />
  )
}
