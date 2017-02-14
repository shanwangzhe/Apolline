# Apolline 
visualisation of data
---
>The aime of Apolline is to supervise indoor air quality of University of Lille 1 and diagnose possible domestic pollution. 

This project is to
- [x]  create a web application with node.js and Express and dispaly a map of University of Lille 1
- [x]  visualize a heat map
- [x]  add a sensor to the map
- [x]  delete a sensor from the map

To use this project, you first need to clone the repository:
```
git clone https://github.com/shanwangzhe/Apolline.git
```
You should have mongoDB and start it
```
cd <mongodb installation dir>
./bin/mongod -dbpath <apolline installation dir>/db
```
Then start project
```
npm start
```
Now, you can visit the site localhost:3000
