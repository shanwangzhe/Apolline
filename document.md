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
Dans la ficher model.js, j'ai definit le schéma de user et capture. Et puis, on propose les fonctions de login/logout pour user(login.html, login.js,logout.js). 

Après authentification, dans la page config(config.js, config.html), on peut ajouetr une capture par cliquer la place qu'on veux déployer la capture sur la carte. On peut aussi supprimer une carte par clique la marquer de la capture.

Pour éviter autre personne faire ces opération, je ne propose pas la fonction register dans cette web application. Comme j'ai effacé tous les fichers de base de donnée, il n'y a plus de compte pour tester. Donc vous devez ajouetr un user(admin) directement dans le mongodb:

```
cd <mongodb installation dir>
./bin/mongo
use nodedb
db.users.insert({name:"x",password:"x"}) 
```

D'allier, pour voir le effet de heatmap, vous devez acces à la page config et ajouter une capture qui a le même nom de location dans le influxDB. Par exemple: inria, bureau107.

---
##InfluxDB
Pour afficher un heatmap, il y a quatre étaps:

- [x] Connecter l’application Node.js à la base de données InfluxDB
- [x] Obtenir les coordonnées de chaque capture dans la base de données InfluxDB. 
- [ ] Obtenir le CO2 de temps réel de chaque capture
- [x] Utiliser heatmap.js qui permettent de visualiser une heat map

Pour l'instant, les data dans la base de données ne sont pas tout bonnes, il y a plusieurs captures ne sont que pour tester. Donc j'obtien le point plus recent dans chaque measurement. Mais je ne reussi pas à obtenir le CO2 de temps réel.  
