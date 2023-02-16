# Installation:
- Angular CLI: 13.3.10
- Node: 18.14.0 
- npm 9.3.1
- mariadb

# Usage:
- Il faudrait creer la base de donnee form (les details de connexion sont situé dans le fichier .env-local dans le repertoire backend )

- Se situé dans le repertoire frontend et lancer la commande : npm run startServer
- Se situé dans le repertoire backemd et lancer la commandde : npm run startServer

Cette application est tres basique, elle ne gere pas les erreurs, elle se comptente de creer un compte de chiffrer le email et le password et de les envoyer dans la base de données, puis lorsque on essaye de se connecter a un compte deja existant, le programme chiffre l'identifiant et le mot de passe saisi (mon objectif etait de ne pas dechiffrer mais de faire uniquememt le sens inverse et donc de chiffrer uniquement ensuite de comparer les resultats et d'afficher s'ils identiquent)

(J'aurais voulu faire mieux mais ma situation actuelle ne me l'a pas permet)