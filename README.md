# Sujet 402 Nuit de l'info 2023

## Le défi: Découvrir la création d’add-on Google Docs (by Requirement Yogi)

### Si vous faites un add-on Google Docs, intégré à la toolbar, aux menus ou au document, qui effectue cette transformation, vous avez réussi le défi

Remplace les keys dans le docs en cliquant sur le bouton dans la sidebar.

### Bonus niveau 1 : Faire un tableau récapitulatif des clés de requis en bas de page

Tableau récapitulatif des clés trouvées dans le document dans la sidebar après avoir remplacé les keys dans le document.

### Bonus niveau 3 : Si vous écrivez le code dans Git et que vous mettez en place un déploiement automatique vers Google Docs. Par défaut, Google Docs vous propose d'écrire le code dans leur IDE en ligne (Apps Script), il faut trouver un moyen d'écrire le code dans Git et de ne pas avoir besoin de toucher à leur IDE en ligne

Configurer votre environnement de développement :

Utilisez votre éditeur de code préféré (par exemple, Visual Studio Code, Sublime Text) psour écrire votre code et utilisez Git pour la gestion de version.

Clonez votre dépôt Git localement.
Configurer Google Apps Script CLI (clasp) :

1. Installez Node.js (version 14 ou supérieure) sur votre ordinateur.

2. Installez clasp (Google Apps Script CLI) en utilisant la commande : npm install -g @google/clasp.

3. Configurez clasp avec votre compte Google : clasp login.

4. Créez un nouveau projet Google Apps Script via le site web de Google Apps Script, et notez son ID de script.

5. Lier votre projet local avec le projet Google Apps Script :
    - Allez dans le répertoire de votre projet local.
    Exécutez clasp clone < script-id > pour lier votre projet local avec le projet Google Apps Script.

Utilisez votre éditeur de texte pour écrire du code localement.

Utilisez clasp push pour pousser votre code vers le projet Google Apps Script.
