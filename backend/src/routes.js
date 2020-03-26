const express = require("express");

const OngController = require("./controllers/OngController");
const ProfileController = require("./controllers/ProfileController");
const IncidentsController = require("./controllers/IncidentsController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.post("/sessions", SessionController.create);

module.exports = routes;
