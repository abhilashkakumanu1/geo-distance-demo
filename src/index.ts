import express from "express";
import swaggerDocument from "../swaggerDef";

import { PlacesController } from "./controllers";
import { PlacesRepo } from "./repo";
import { PlacesService } from "./services";
import { validators } from "./validators";
import swaggerUi from "swagger-ui-express";

const app = express();
const PORT = 8080;

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Get an instance of repo, service and controller
const placesRepo = new PlacesRepo();
const placesService = new PlacesService(placesRepo);
const placesController = new PlacesController(placesService);

/**
 * @swagger
 * /places:
 *   get:
 *     summary: Retrieve a list of places with a certain radius from the given point
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: number
 *           default: 12.9716
 *         required: true
 *         description: Latitude of the point
 *       - in: query
 *         name: lon
 *         schema:
 *           type: number
 *           default: 77.5946
 *         required: true
 *         description: Longitude of the point
 *       - in: query
 *         name: radius
 *         schema:
 *           type: number
 *           default: 50
 *         required: true
 *         description: Radius in Klms around the point
 *     responses:
 *       200:
 *         description: A list of places
 */
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
