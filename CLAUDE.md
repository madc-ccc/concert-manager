# Concert Manager

PWA en un seul fichier (`index.html`, JS sans framework) + `sw.js`, déployée par Netlify à chaque push sur `main` (site `concertmanager`). Backend : Supabase, projet `mes-concerts`.

## Règles de maintenance

- **Historique** : à chaque ajout ou changement de fonctionnalité, ajouter une ligne dans `historique.json`, sous la date du jour (créer l'entrée en tête de liste si elle n'existe pas). Pas de numéro de version, uniquement des dates. Phrases courtes en français, du point de vue de l'utilisateur.
- **Commits** : auteur `madc-ccc <34864328+madc-ccc@users.noreply.github.com>`.
- **Cache** : incrémenter `V` dans `sw.js` quand la liste `SHELL` ou la logique du service worker change.
- Interface en français.
