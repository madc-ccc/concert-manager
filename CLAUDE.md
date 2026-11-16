# Concert Manager

PWA en un seul fichier (`index.html`, JS sans framework) + `sw.js`, déployée par Netlify à chaque push sur `main` (site `in-the-pit`, https://i.n-t.he-p.it). Backend : Supabase, projet `mes-concerts`.

## Règles de maintenance

- **Historique** : à chaque ajout ou changement de fonctionnalité, ajouter une ligne dans `historique.json`, sous la date du jour (créer l'entrée en tête de liste si elle n'existe pas, et vérifier que l'entrée de tête porte bien la date du jour). Les dates sont classées de la plus récente à la plus ancienne, et **les lignes d'une même date aussi** : la plus récente en premier (donc insérer la nouvelle ligne au début de `items`, jamais à la fin). Pas de numéro de version, uniquement des dates. Phrases courtes, du point de vue de l'utilisateur. Chaque ligne est un objet `{"fr":…,"en":…,"es":…,"it":…,"de":…}` (5 langues). Ajouter aussi `"niveau":"majeure"` (nouvelle fonction, changement visible de comportement, correction importante) ou `"niveau":"mineure"` (cosmétique : couleurs, marges, libellés, déplacements de boutons). L'historique n'affiche que les majeures, sauf si l'utilisateur coche « Inclure les modifications mineures ».
- **Commits** : auteur `madc-ccc <34864328+madc-ccc@users.noreply.github.com>`.
- **Cache** : incrémenter `V` dans `sw.js` quand la liste `SHELL` ou la logique du service worker change.
- **Langues** : l'interface est disponible en anglais (défaut), français, espagnol, italien, allemand. Les clés de traduction sont les textes français : tout nouveau texte d'interface doit être écrit en français dans le code via `tt('texte')` (ou en HTML statique), et ajouté avec ses 4 traductions (ordre : en, es, it, de) dans `i18n.js` (`DICT`). Les notifications push (Edge Function `rappels`) ont leurs propres textes.
- Interface par défaut en anglais.
- **Site vitrine** : à chaque fonctionnalité majeure déployée, mettre à jour le site web (`/home/claude/in-the-pit-site`, dépôt `madc-ccc/in-the-pit-site`, https://site.i.n-t.he-p.it) : textes dans `build.py` (5 langues), puis `DOMAIN=https://site.i.n-t.he-p.it python3 build.py`, commit et push sur `main`.

## Éditeur : passage de Pascal Berne à Zion Hut Studio (à faire)

Aujourd’hui, In The Pit et son site vitrine sont édités par **Pascal Berne, à titre personnel** (particulier, non commercial). À terme, l’éditeur doit devenir **Zion Hut Studio**, la société de Pascal dédiée à ses applis. Le jour du changement, mettre à jour tous les points suivants (5 langues à chaque fois) :

- `concert-manager/confidentialite.html` : section « Qui est responsable » (nom de la société, forme juridique, SIRET, adresse, contact) et date de mise à jour ; revoir les bases légales si l’activité devient commerciale.
- `in-the-pit-site/build.py` : mentions légales `lg_p1` (raison sociale, forme juridique, SIRET, adresse, directeur de la publication ; retirer « à titre non commercial »), puis régénérer le site.
- Copyright : déjà au nom de Zion Hut Studio (« © 2026 Zion Hut Studio » dans le pied de page du site vitrine, les mentions légales, la politique de confidentialité et la fenêtre « À propos » de l’app) ; mettre l’année à jour si besoin.
- Comptes des prestataires à transférer au nom de la société, et accords de traitement des données (DPA) à réaccepter : Supabase, Netlify, Resend, Anthropic, Cloudflare ; titulaire du domaine he-p.it (OVH) ; Ko-fi ; dépôts GitHub.
- Nom d’expéditeur des e-mails (secret `MAIL_FROM` des Edge Functions) et adresse de contact si elle change.
- Comptes développeur Google Play / App Store au nom de Zion Hut Studio le jour d’une publication en magasin.
- `historique.json` : une ligne pour annoncer le changement d’éditeur.
