const express = require('express');
const bodyParser = require('body-parser');
let middleware = require('./controllers/middleware.js');
let mainCtrl = require('./controllers/mainCtrl.js');
const app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupation)
app.get('/occupations/latest', mainCtrl.getOccLate)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobby/:type', mainCtrl.getHobby);
app.get('/family/:gender', mainCtrl.getFamily);
app.get('/restaurants/:name', mainCtrl.getRestaurants)
app.put('/name/', mainCtrl.updateName);
app.put('/location/', mainCtrl.updateLocation);
app.post('/hobbies/', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/family/', mainCtrl.addFamily)
app.post('/restaurants/', mainCtrl.addRestaurant)
app.get('/skillz', mainCtrl.getSkillz);
app.post('/skillz/', mainCtrl.addSkillz);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);
app.listen(3000, function() {
    console.log("currently on port 3000")
})