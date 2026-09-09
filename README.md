# Personal Hub

Tableau de bord personnel mobile-first en HTML, CSS et JavaScript vanilla, sans framework ni dépendance. La page est volontairement en lecture seule : son contenu est maintenu par Hermes à partir des demandes envoyées par Telegram.

## Contenu affiché

- notes ;
- sessions techniques archivées par `protocole omega`, chacune avec un identifiant de référence ;
- projets locaux avec résumés dépliables ;
- liens vers des pages Demo dédiées ;
- une Demo Mermaid chargée depuis un fichier `.mmd` et rendue dans une page dédiée ;
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
