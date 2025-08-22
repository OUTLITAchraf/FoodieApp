# FoodieApp - Application de Commande de Repas

FoodieApp est une application web moderne de commande de repas qui permet aux utilisateurs de parcourir les restaurants, consulter leurs menus et commander des plats en ligne.

## Fonctionnalités

- Parcourir une liste de restaurants
- Consulter les menus détaillés des restaurants
- Ajouter des plats au panier
- Gérer le panier (ajout/suppression d'articles)
- Persistance des données avec localStorage
- Interface utilisateur réactive et moderne

## Technologies et Outils Utilisés

### Framework et Bibliothèques

- **React 19** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur
- **Redux Toolkit** : Gestion d'état prédictible pour l'application
- **React Router v7** : Gestion de la navigation entre les pages
- **Tailwind CSS v4** : Framework CSS utilitaire pour un design moderne
- **Axios** : Client HTTP pour les requêtes API

### Outils de Développement

- **Vite** : Outil de build rapide pour une expérience de développement optimale
- **ESLint** : Outil de linting pour maintenir la qualité du code
- **React Refresh** : Rechargement à chaud pour une expérience de développement fluide

## Installation et Lancement

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. Cloner le dépôt :
   ```bash
   git clone <url-du-depot>
   ```

2. Naviguer vers le répertoire du projet :
   ```bash
   cd brief_foodieapp
   ```

3. Installer les dépendances :
   ```bash
   npm install
   ```

### Variables d'Environnement

Créer un fichier `.env` à la racine du projet avec la clé API suivante :

```env
VITE_RAPIDAPI_KEY=votre_cle_api_rapidapi
```

### Lancement de l'Application

Pour lancer l'application en mode développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:5173` (ou un port similaire indiqué dans le terminal).

### Construction pour la Production

Pour créer une version optimisée de l'application :

```bash
npm run build
```

### Aperçu de la Version de Production

Pour prévisualiser la version de production localement :

```bash
npm run preview
```

## Choix Techniques

### Gestion d'État avec Redux Toolkit

Nous avons choisi Redux Toolkit pour la gestion d'état de notre application pour les raisons suivantes :

1. **Structure Prédéfinie** : Redux Toolkit fournit une structure standardisée pour le code Redux, réduisant le code boilerplate.
2. **Performance** : Utilisation de l'Immer pour permettre des mises à jour immuables de l'état de manière intuitive.
3. **Slices Organisés** : Organisation du code en slices (restaurants, menu, panier) pour une meilleure maintenabilité.
4. **Gestion Asynchrone** : Utilisation de createAsyncThunk pour gérer les requêtes API asynchrones de manière propre.

### Gestion des Erreurs

Notre approche de gestion des erreurs comprend :

1. **Gestion des Erreurs API** : Capture et stockage des messages d'erreur dans l'état Redux pour les requêtes asynchrones.
2. **Validation des Données** : Vérification des données reçues des API avant leur utilisation.
3. **Persistance Sécurisée** : Gestion des erreurs lors de la lecture/écriture dans localStorage.

### Optimisations

Plusieurs optimisations ont été mises en place pour améliorer les performances :

1. **Mise en Cache avec localStorage** : Les données des restaurants et des menus sont stockées dans localStorage pour réduire les appels API répétés.
2. **Chargement Asynchrone** : Chargement différé des données avec indicateurs de chargement pour une meilleure expérience utilisateur.
3. **Bundle Optimisé** : Utilisation de Vite pour créer des bundles optimisés lors de la construction de l'application.
4. **Styles Optimisés** : Utilisation de Tailwind CSS pour générer uniquement les styles nécessaires.

## Structure du Projet

```
src/
├── components/     # Composants React réutilisables
├── redux/          # Configuration Redux et slices
├── assets/         # Images, polices et autres ressources
├── App.jsx         # Composant principal de l'application
└── main.jsx        # Point d'entrée de l'application
```

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/ma-fonctionnalité`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Acknowledgments

I would like to acknowledge the following technologies and platforms that made this project possible:

- [Tripadvisor API via RapidAPI](https://rapidapi.com/) – For providing restaurant data.
- [Yelp Business API via RapidAPI](https://rapidapi.com/) – For providing menu data.
- [React](https://reactjs.org/) – For building the frontend user interface.
- [Vite](https://vitejs.dev/) – For fast and efficient development setup.
- [Redux Toolkit](https://redux-toolkit.js.org/) – For state management.
- [Tailwind CSS](https://tailwindcss.com/) – For styling and responsive design.
