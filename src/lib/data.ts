import { getPayload } from 'payload'
import { cache } from 'react'

import config from '@payload-config'

export const getPayloadClient = cache(async () => {
  return getPayload({ config })
})

export const getHeader = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'header' })
})

export const getFooter = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'footer' })
})

export const getInfosClub = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'infos-club' })
})

export const getBandeauPromo = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'bandeau-promo' })
})

export const getEspaces = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'espaces',
    sort: 'ordre',
    limit: 20,
  })
  return docs
})

export const getServices = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'services',
    sort: 'ordre',
    limit: 20,
  })
  return docs
})

export const getFormules = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'formules',
    sort: 'ordre',
    limit: 50,
  })
  return docs
})

export const getTemoignages = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'temoignages',
    where: { visible: { equals: true } },
    limit: 10,
  })
  return docs
})
