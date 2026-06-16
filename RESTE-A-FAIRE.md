# Reste à faire — Finalisation site Parc Beauregard

État au moment de la rédaction : **site en ligne sur Vercel**, contenu réel, **Payload CMS éditable** (Neon Postgres), formulaire de contact fonctionnel (sans CRM branché), SEO de base, déployé.

---

## ✅ Déjà fait
- Refonte complète (template Sportix → Next.js 16), 100% FR, contenu aligné sur le vrai site
- Pages : Accueil, Nos espaces (3) + fiches, Cours (11) + fiches, Coaching, Location de terrain, Tarifs, Contact, Mentions légales, 404
- Images Beauregard intégrées (anciennes photos 2022 — **à remplacer**, voir ci-dessous)
- **Payload CMS** branché et en ligne : Cours / Espaces / Formules / Témoignages éditables, rôles Admin (DGL) / Éditeur (client), ISR (modifs visibles < 1 min)
- **Formulaire de contact** fonctionnel (validation, anti-spam, UTM) → prêt pour webhook Make
- SEO : titres par page, favicon, mentions légales propres
- Déploiement Vercel + base Neon

---

## ⏳ En attente du client (bloquant pour la mise en prod finale)
- [ ] **Photos** — nouveau shooting (cf. `BRIEF-PHOTOS-BEAUREGARD.pdf`). Les visuels actuels datent de 2022 (personnes parties / t-shirts d'autres clubs). → dès réception, je les intègre.
- [ ] **Coachs** — vrais noms + bios + portraits (avec **Bastien**). La page Coaching est générique en attendant.
- [x] **Témoignages** — 3 vrais avis Google 5★ intégrés (Christele P., Jemsa F., Janelle L.), repris à l'identique et éditables dans l'admin. (D'autres avis pourront être ajoutés.)
- [ ] **CRM + webhook Make** — le client choisit son CRM, puis : créer le scénario Make → coller l'URL dans `MAKE_WEBHOOK_URL` (Vercel). Tant que vide, le formulaire marche mais n'envoie rien.
- [ ] **Tarifs Location de terrain** — montants exacts (non trouvés au crawl).
- [ ] **Nom de domaine** — brancher `parcbeauregard.com` (ou sous-domaine) sur Vercel quand on bascule du WordPress actuel.

## 🔧 Technique à faire quand les photos arrivent
- [ ] **Stockage Media sur Vercel** — pour uploader les photos via l'admin Payload, il faut un stockage externe (Vercel Blob ou S3) car le serveur Vercel est en lecture seule. À configurer (≈ 30 min). Sinon, on garde le système actuel (chemins `.webp` en dur, je remplace les fichiers).
- [ ] **Intégration des nouvelles photos** : conversion `.webp` + remplacement (hero, teasers, espaces, cours, coachs, témoignages).

## ✨ Finitions recommandées (autonomes, sans attendre le client)
- [ ] **SEO technique** : `sitemap.xml`, `robots.txt`, **image Open Graph** (aperçu lors du partage Facebook/WhatsApp/Insta).
- [ ] **Accessibilité** : textes alternatifs des images (actuellement génériques), contrastes, labels.
- [ ] **Performance** : audit Lighthouse + allègement des composants portés (lourds).
- [ ] **Homogénéiser les fiches espaces** sur le modèle riche des fiches cours (bannière + infos).
- [ ] **Rendre éditables d'autres contenus** dans Payload si souhaité : coordonnées/horaires (Infos club), bandeau promo, en-tête/pied de page, textes de la home. *(Aujourd'hui en dur.)*

## 🚀 Go-live (checklist finale)
- [ ] Contenu relu/validé par le client dans l'admin
- [ ] Photos + coachs + témoignages intégrés
- [ ] CRM branché (webhook Make)
- [ ] `PAYLOAD_SECRET` confirmé en prod, `MAKE_WEBHOOK_URL` rempli
- [ ] Domaine pointé sur Vercel + redirections SEO depuis l'ancien site
- [ ] Test final mobile + formulaire + admin éditeur
