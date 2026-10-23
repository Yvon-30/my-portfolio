# Portfolio — Yvon MENSAH

Développeur full-stack basé à Abomey-Calavi (Bénin), spécialisé en Symfony et Laravel.

**Site en ligne : [yvon-30.github.io/my-portfolio](https://yvon-30.github.io/my-portfolio/)**

## Contenu

- **À propos** : mon parcours et mon rôle actuel.
- **Projets** : études de cas (problème, solution, stack, résultat), dont [Gestion Caisses](https://gestion-caisses.vercel.app), une application multi-caisses Symfony 7 / React en production.
- **Compétences** : backend, bases de données, front-end, outils et pratiques de sécurité.
- **Contact** : e-mail, WhatsApp, LinkedIn, GitHub.

## Technique

Site statique, sans framework ni dépendance JavaScript :

- HTML sémantique et CSS à base de variables (design tokens), sans Bootstrap ni jQuery.
- Thème sombre par défaut, bouton clair/sombre mémorisé dans `localStorage`, avec repli sur `prefers-color-scheme`.
- Accessibilité : lien d'évitement, focus visible, contrastes vérifiés, `prefers-reduced-motion` respecté.
- Icônes en SVG intégré, images WebP avec repli PNG, balises Open Graph pour le partage.
- Hébergé sur GitHub Pages.

```
index.html
assets/
├── css/main.css        styles et thèmes
├── js/main.js          bouton clair/sombre
├── images/             portrait, image Open Graph
└── favicon_io/         favicons et manifeste
```

## Lancer en local

Aucune installation nécessaire. Depuis la racine du dépôt :

```bash
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

## Contact

- E-mail : [yvonmensah22@gmail.com](mailto:yvonmensah22@gmail.com)
- LinkedIn : [yvon-mensah](https://www.linkedin.com/in/yvon-mensah-85a81320b/)
- GitHub : [Yvon-30](https://github.com/Yvon-30)
