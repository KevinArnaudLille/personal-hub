# Personal Hub

Tableau de bord personnel mobile-first en HTML, CSS et JavaScript vanilla, sans framework ni dépendance. La page est volontairement en lecture seule : son contenu est maintenu par Hermes à partir des demandes envoyées par Telegram.

## Contenu affiché

- notes ;
- sessions techniques archivées par `protocole omega`, chacune avec un identifiant de référence ;
- projets locaux avec résumés dépliables et liens GitHub lorsqu'un remote existe ;
- liens vers des pages Demo dédiées ;
- un sommaire des cadrages en cours, chaque cadrage vivant sur sa propre page ;
- une Demo Mermaid chargée depuis un fichier `.mmd` et rendue dans une page dédiée ;
- une Demo de carte géographique libre avec Leaflet et OpenStreetMap ;
- une Demo d’apprentissage animée du kata Heian Shodan ;
- une Demo de petit jardin interactif inspiré des premiers Tamagotchi ;
- thème clair/sombre pour la consultation.

Aucune donnée n'est saisie sur la page et aucun formulaire n'est présent. Pour modifier le contenu, il suffit d'envoyer une demande à Hermes sur Telegram.

## Cadrages

Les cadrages sont des pages dédiées aux futurs projets. Chaque page conserve le contexte, les décisions, les questions ouvertes et des diagrammes Mermaid explicatifs dans `diagrams/*.mmd`. `protocole CA1` commence un cadrage ; `protocole CA2` poursuit un cadrage existant. Le résumé très court des cadrages actifs est affiché sur l'accueil.

Le cadrage actif **Stack web européenne** recommande Clever Cloud + ZITADEL pour Nuxt/Vue, Spring Boot, Python IA et PostgreSQL. Le scénario minimal est estimé à environ 18,80 €/mois hors TVA, modèle IA, domaine et options de stockage ; des alternatives Scaleway (~17,94 €/mois) et Clever Cloud confort (~38,80 €/mois) sont détaillées dans la page CA2.

## Développement local

```bash
cd ~/projects/personal-hub
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/pages.yml` et publie automatiquement le contenu sur GitHub Pages.
