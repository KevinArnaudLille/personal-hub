# Personal Hub

Tableau de bord personnel en HTML, CSS et JavaScript vanilla, sans framework ni dépendance. La page est volontairement en lecture seule : son contenu est maintenu par Hermes à partir des demandes envoyées sur Telegram.

## Contenu affiché

- prochaines actions ;
- notes rapides ;
- idées à garder ;
- raccourcis vers des liens utiles ;
- résumé et date de mise à jour ;
- thème clair/sombre pour la consultation.

Aucune donnée n'est saisie sur la page et aucun formulaire n'est présent. Pour modifier le contenu, il suffit d'envoyer une demande à Hermes sur Telegram.

## Développement local

```bash
cd ~/projects/personal-hub
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/pages.yml` et publie automatiquement le contenu sur GitHub Pages.
