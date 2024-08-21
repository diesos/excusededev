Excuses de Dev
==============

Bienvenue dans le projet **Excuses de Dev** ! 🎉 Ce projet est conçu pour générer des excuses amusantes et créatives, parfaites pour faire patienter les utilisateurs avec une touche d'humour. Ce guide vous expliquera comment installer, configurer et exécuter le projet, que ce soit pour le développement local ou pour le déploiement.

Prérequis
---------

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

-   **Node.js** (version 18.20.4 recommandée) (node -v pour voir la version, sinon nvm use 18)
-   **npm** (ou **yarn** ( dans ce cas remplacer les commandes npm par yarn) )
-   **MongoDB** (ou un accès à une instance MongoDB)
-   **Git** (pour cloner les dépôts)

Installation du Backend
-----------------------

1.  **Cloner le dépôt**

    Commencez par cloner le dépôt du projet :

    ```bash

    https://github.com/diesos/excusededev
    cd excusededev
    ```

2.  **Installer les Dépendances**

    Installez les dépendances nécessaires avec npm ou yarn :

    ```bash

    npm install
    ```

3.  **Configurer les Variables d'Environnement**

    Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement nécessaires :

   
    ```env
    MONGO_URL=
    PORT=8000
    ```

    -   `MONGO_URL` : URL de connexion à votre base de données MongoDB.
    -   `PORT` : Port sur lequel le serveur Node.js sera accessible.

4.  **Démarrer le Serveur**

    Pour démarrer le serveur en mode développement, utilisez :

```bash
    npm run dev
```

    Pour démarrer le serveur en mode production :

    ```bash

    npm start
    ```


Installation du Frontend
------------------------

1.  **Accéder au dossier front**

    Accéder au dossier front :

   ```bash
    cd  // pour revenir à la racine du projet
    cd Front
```


2.  **Installer les Dépendances**

    Installez les dépendances nécessaires avec npm ou yarn :

    ```bash
    npm install
    ```


3.  **Configurer les Variables d'Environnement**

    Créez un fichier `.env` à la racine du projet frontend et ajoutez les variables d'environnement nécessaires. Par exemple :

    ```env

    VITE_API_URL=http://localhost:8000
    ```

    -   `VITE_API_URL` : URL de votre serveur backend.

      
4.  **Démarrer l'Application**

    Pour démarrer l'application en mode développement :

    ```bash
    npm run dev
    ```


Détails du Projet
-----------------

### Fonctionnalités

-   **Backend**

    -   **Route GET `/random`** : Récupère une excuse aléatoire.
    -   **Route GET `/:id`** : Récupère une excuse spécifique par son code HTTP.
    -   **Route POST `/create`** : Ajoute une nouvelle excuse à la base de données.
-   **Frontend**

    -   Affiche une phrase d'excuse générée aléatoirement.
    -   Permet de générer une nouvelle phrase avec un bouton.
    -   Affiche un message "i'm lost" avec un gif sur la page `/lost` et redirige automatiquement après 5 secondes.
    -   Gère les erreurs 404 et les messages d'erreur pour les codes HTTP non trouvés.

### Composants

-   **Composant Principal**

    -   Affiche le titre, la phrase d'excuse et le bouton pour générer une nouvelle phrase.
-   **Sous-Composant Bouton**

    -   Gère la génération de la phrase et la communication avec le composant principal.

### Animations et Bonus

-   **Animations** : Les animations incluent un "Fade In" pour le titre et un effet de déplacement pour le bouton.
-   **Bonus** : Ajout de nouvelles excuses via une interface modale avec un formulaire.

Déploiement
-----------

-   **Frontend** : Déployé sur Netlify. Assurez-vous de configurer les variables d'environnement dans les paramètres de déploiement sur Netlify.
-   **Backend** : Déployé sur Vercel. Configurez les variables d'environnement dans le panneau de gestion de Vercel.


Conclusion
----------

Merci d'avoir exploré **Excuses de Dev** ! C'était un projet amusant et utile pour revoir mes compétences en développement. 🚀
