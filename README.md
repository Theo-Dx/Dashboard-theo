=======================Exercice_1=======================

Installation npm (node-v22.14.0-x64.msi) que j'ai trouver sur leur site 
mais j'ai eu un problème de restriction
lever la restriction script windows j'ai trouver une personne qui avais le meme problème et qui avais la solution
https://answers.microsoft.com/fr-fr/windows/forum/all/lever-la-restriction-des-scripts-sous-win-10/31ea5b49-2d37-4ef2-9505-0bc37c436d05
la solution était de mettre cette commande : Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force


commencer le projet -> npx create-react-app mini-dashboard --template typescript

https://react.dev/

installation de axios pour faire des requetes

pour le backend choix entre Flask ou FastAPI
https://www.reddit.com/r/flask/comments/13pyxie/flask_vs_fastapi/
j'ai donc choisi FastAPI

mais j'ai eu un problème avec FastAPI qui n'autorisait pas les requêtes externes avec comme nom CORS
Solutions -> https://stackoverflow.com/questions/65635346/how-can-i-enable-cors-in-fastapi




COMMENT LANCER EXERCICE_1


mettre dans le terminal les commandes ci-dessous :

python -m uvicorn main:app           lancer le backend
npm start                            lancer le frontend











=======================Exercice_2=======================

j'ai choisi l'option bash car cela me semblais plus simple que sur python
je n'avais pas curl sur mon système   ->     sudo apt update && sudo apt install curl -y

COMMENT LANCER EXERCICE_1
./ScriptExo2.sh
