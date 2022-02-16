# Instructions

Configuration :

le fichier `config/default.json` doit être configuré.

activez/désactivez les différents éléments.

    "taskbar": true, //Barre des tache
    
    "startButton": true, //Bouton Démarrer
    
    "quickAction": true, //Accès Rapide
    
    "contentWindows": true, //Barre du millieu
    
    "clock": true //Horloge
    
  
    "title": "Monodie", //Test de bouton démarrer
    
    "height": 40, //Hauteur de la barre
    
    "colors": {
    
      "infoBulle": "#FFFDD5"  //Couleur de fond de l'infobulle
      
    },
    
    "transition": {
    
      "duration": 5,  // Temps entre les bulles en secondes
      
      "pause-time": 10  //Temps en secondes de pause entre les animations
      
    },
    
    "icons": [  //Icones de la barre d'accès rapide
    
      { "id": 1, "file": "images/desktop.png", "desc": "Uno Dos Tres ! Oune pacito par la t'est Maria" },
      
      { "id": 2, "file": "images/twitch.png", "desc": "Salut c'est moi coxy ! L'ami des grand et des petits !" },
      
      { "id": 3, "file": "images/youtube.png", "desc": "Les meilleurs VOD de votre vie, pour vous, les geux, sur Youtube ! @monodie" },
      
      { "id": 4, "file": "images/demineur.png", "desc": "Jouez au démineur toute votre vie en me suivant sur insta : @mododie" }
      
    ]
    

NodeJS et Yarn sont necessaire pour lancer le serveur de développement.

via votre terminal :
### `yarn`
Pour installer toutes les dépendances

### `yarn start`

Lance l'application en mode Dev.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

La page se rechargera à chaque changements.\

### `yarn build`

Construit l'app pour un environnement de production dans le dossier `build`.\
