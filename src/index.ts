import express from "express";

import { PlacesController } from "./controllers";
import { PlacesRepo } from "./repo";
import { PlacesService } from "./services";
import { validators } from "./validators";

const app = express();
const PORT = 8080;

// Get an instance of repo, service and controller
const placesRepo = new PlacesRepo();
const placesService = new PlacesService(placesRepo);
const placesController = new PlacesController(placesService);

// Get Places with in a radius from a point
app.get(
  "/places",
  validators.getPlacesWithInRadius,
  placesController.getPlacesWithInRadius
);

app.listen(PORT, () => {
  return console.log(
    `Express server is listening at http://localhost:${PORT} 🚀`
  );
});
