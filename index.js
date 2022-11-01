const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
const Pet = require("./models/Pet")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const petsRoutes = require("./controllers/petsController");
app.use("/api/pets",petsRoutes)

const ownersRoutes = require("./controllers/ownersController");
app.use("/api/owners",ownersRoutes)

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
