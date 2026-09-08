# Personal Hub

Tableau de bord personnel en HTML, CSS et JavaScript vanilla, sans framework ni dépendance.

## Fonctionnalités

- prochaines actions avec cases à cocher ;
- notes rapides ;
- idées à garder ;
- raccourcis vers des liens utiles ;
- thème clair/sombre ;
- stockage local dans le navigateur (`localStorage`) ;
- interface responsive mobile et desktop.

Les données saisies restent dans le navigateur utilisé pour consulter la page. GitHub Pages ne stocke aucune donnée personnelle saisie dans l'application.

## Développement local

```bash
cd ~/projects/personal-hub
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/pages.yml` et publie automatiquement le contenu sur GitHub Pages.
