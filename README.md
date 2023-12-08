Intégrer un workflow de développement avec Git et un déploiement automatique vers Google Docs (Apps Script) peut être un peu complexe en raison des limitations actuelles de Google Apps Script, qui privilégie l'utilisation de son propre éditeur en ligne.

Cependant, vous pouvez suivre une approche manuelle pour synchroniser votre code entre Git et Google Apps Script. Voici comment vous pourriez le faire :

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
Développez localement :

Utilisez votre éditeur de texte pour écrire du code localement.
Utilisez clasp push pour pousser votre code vers le projet Google Apps Script.
Mettre à jour le script sur Google Apps Script :

Après avoir effectué vos changements locaux, exécutez clasp push pour mettre à jour le script sur Google Apps Script.
Déployez manuellement depuis l'interface web Google Apps Script :

Visitez la page du projet Google Apps Script en ligne.
Cliquez sur l'icône de déploiement et déployez la version appropriée.
Automatisation du déploiement (optionnel) :

Vous pouvez envisager d'automatiser davantage le processus de déploiement à l'aide de scripts ou de services CI/CD.
N'oubliez pas que cette approche a quelques limitations et peut ne pas être aussi fluide qu'un environnement de développement entièrement intégré. Cependant, cela vous permet de bénéficier des avantages de Git tout en utilisant Google Apps Script.