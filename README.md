Configurer votre environnement de développement :

Utilisez votre éditeur de code préféré (par exemple, Visual Studio Code, Sublime Text) pour écrire votre code et utilisez Git pour la gestion de version.
Clonez votre dépôt Git localement.
Configurer Google Apps Script CLI (clasp) :

Installez clasp (Google Apps Script CLI) en utilisant la commande : npm install -g @google/clasp.
Configurez clasp avec votre compte Google : clasp login.
Créez un nouveau projet Google Apps Script via le site web de Google Apps Script, et notez son ID de script.
Lier votre projet local avec le projet Google Apps Script :

Allez dans le répertoire de votre projet local.
Exécutez clasp clone <script-id> pour lier votre projet local avec le projet Google Apps Script.

Utilisez votre éditeur de texte pour écrire du code localement.
Utilisez clasp push pour pousser votre code vers le projet Google Apps Script.
