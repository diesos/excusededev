Excuses de Dev
==============

Bienvenue dans le projet **Excuses de Dev** ! 🎉 Ce projet est conçu pour générer des excuses amusantes et créatives, parfaites pour faire patienter les utilisateurs avec une touche d'humour. Ce guide vous expliquera comment installer, configurer et exécuter le projet, que ce soit pour le développement local ou pour le déploiement.

`✨LIVE DEMO ✨`: https://diesos-excusededev.netlify.app

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

    Ouvrez votre Terminal, et commencez par cloner le dépôt du projet :

    ```bash

    git clone https://github.com/diesos/excusededev.git
    cd excusededev
    cd back
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

    Pour démarrer le serveur back-end, utilisez :

    ```bash
    node server.js
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


Techno & Feedback personnel + Rétrospection
----------

Technologies utilisées :

Front-end : React
J'ai choisi React pour le développement du front-end en raison de sa rapidité et de sa flexibilité. React permet une expérience utilisateur fluide grâce à son approche de rendu côté client (CSR), et j'apprécie sa capacité à gérer les états de manière efficace.

Back-end : Node.js
Pour le back-end, j'ai opté pour Node.js afin de maintenir une uniformité dans le langage de programmation utilisé tout au long du projet. Utiliser JavaScript des deux côtés du développement permet de simplifier le code et de réduire la complexité en évitant de jongler avec plusieurs langages.

Base de données : MongoDB
Initialement, j'avais envisagé de lire les données directement à partir d'un fichier JSON. Cependant, j'ai rencontré des problèmes de mise à jour en temps réel, car le serveur ne récupérait pas les nouvelles excuses sans un redémarrage. Bien qu'il existe des techniques pour gérer le cache en Node.js, cela ne semblait pas optimal. J'ai donc choisi MongoDB pour une solution plus robuste et évolutive.

Déploiement : Netlify et Render.com

Netlify a été utilisé pour déployer le front-end en React, offrant une intégration continue et un déploiement simplifié.
Render.com héberge le back-end en Node.js, permettant une gestion fluide des requêtes et des opérations serveur.
Problèmes rencontrés :

Un des principaux défis a été la gestion des requêtes entre le front-end et le back-end, nécessitant une configuration précise des adresses IP pour permettre la communication inter-services. Pour résoudre cela, j'ai :

Whitelisté l'adresse IP du back-end sur MongoDB.
Configuré les options CORS sur Render.com pour autoriser les requêtes en provenance du front-end.
Autres considérations :

Redux : Bien que Redux soit une option puissante pour la gestion des états complexes, j'ai jugé que l'utilisation du state management de React (avec useState et useEffect) était suffisante pour les besoins de ce projet. Cela permet de garder le code plus léger et plus facile à maintenir pour cette application spécifique.

CSS : J'ai exploré les fonctionnalités CSS telles que clamp(), qui se sont révélées très intéressantes pour créer des mises en page réactives. Cette découverte enrichit mes compétences en design et je compte utiliser ces techniques dans mes futurs projets.

J'ai vraiment apprécié le processus de développement, des recherches aux résolutions de problèmes, et je suis heureux du résultat final. Merci pour votre attention, et je suis à votre disposition pour toute question !

Conclusion
----------

Merci d'avoir exploré **Excuses de Dev** ! C'était un projet amusant et utile pour revoir mes compétences en développement. 🚀


