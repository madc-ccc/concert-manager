# Concert Manager

PWA en un seul fichier (`index.html`, JS sans framework) + `sw.js`, déployée par Netlify à chaque push sur `main` (site `in-the-pit`, https://in-the-pit.netlify.app). Backend : Supabase, projet `mes-concerts`.

## Règles de maintenance

- **Historique** : à chaque ajout ou changement de fonctionnalité, ajouter une ligne dans `historique.json`, sous la date du jour (créer l'entrée en tête de liste si elle n'existe pas). Pas de numéro de version, uniquement des dates. Phrases courtes, du point de vue de l'utilisateur. Chaque ligne est un objet `{"fr":…,"en":…,"es":…,"it":…,"de":…}` (5 langues).
- **Commits** : auteur `madc-ccc <34864328+madc-ccc@users.noreply.github.com>`.
- **Cache** : incrémenter `V` dans `sw.js` quand la liste `SHELL` ou la logique du service worker change.
- **Langues** : l'interface est disponible en anglais (défaut), français, espagnol, italien, allemand. Les clés de traduction sont les textes français : tout nouveau texte d'interface doit être écrit en français dans le code via `tt('texte')` (ou en HTML statique), et ajouté avec ses 4 traductions (ordre : en, es, it, de) dans `i18n.js` (`DICT`). Les notifications push (Edge Function `rappels`) ont leurs propres textes.
- Interface par défaut en anglais.
