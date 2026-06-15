import configPromise from '@payload-config'
import { getPayload } from 'payload'

// Client Payload (API locale) pour lire le contenu côté serveur.
export const getPayloadClient = () => getPayload({ config: configPromise })
