## Suivi de la qualité de l’air intérieur

 Visualisation des données


---

##Architecture
	-app.js
	-bin
	-database
		-dbHandel.js
		-models.js
	-db	
	-node_modules
	-package.json
	-public
		-front
		-stylesheets
		-javascripts
			-bootstrap.min.js
			-heatmap.min.js
			-jquery.min.js
			-leaflet-heatmap.js
			-map.js	
	-routes
		-index.js
		-user.js
		-login.js
		-logout.js
		-config.js: ajouter et supprimer un capture
	-views
		-config.html
		-error.html
		-home.html
		-index.html
		-login.html
		-register.html

---
##MongoDB
Dans la ficher model.js, j'ai definit le schéma de user et capture. Et puis, on propose les fonctions de login/logout pour user(login.html, login.js,logout.js).  Pour l'instant, il y a deux compte dans le base de donnée:


Après authentification, dans la page config(config.js, config.html), on peut ajouetr une capture par cliquer la place qu'on veux déployer la capture sur la carte. On peut aussi supprimer une carte par clique la marquer de la capture.

Pour éviter autre personne faire ces opération, je ne propose pas la fonction register dans cette web application. Donc si on veux ajouetr user(admin), on peut le faire directement dans le mongodb:

```
cd <mongodb installation dir>
./bin/mongo
use nodedb
db.users.insert({name:"y",password:"y"}) 
```
---
##InfluxDB
Pour afficher un heatmap, il y a quatre étaps:

- [x] Connecter l’application Node.js à la base de données InfluxDB
- [x] Obtenir les coordonnées de chaque capture dans la base de données InfluxDB. 
- [ ] Obtenir le CO2 de temps réel de chaque capture
- [x] Utiliser heatmap.js qui permettent de visualiser une heat map

Pour l'instant, les data dans la base de données ne sont pas tout bonnes, il y a plusieurs captures ne sont que pour tester. Donc j'obtien le point plus recent dans chaque measurement. Mais je ne reussi pas à obtenir le CO2 de temps réel.  
