import Joi from "joi";
import { Request, Response } from "express";

import { IPlacesService } from "./types";

export class PlacesController {
  private service: IPlacesService;
  constructor(service: IPlacesService) {
    this.service = service;
  }

  getPlacesWithInRadius = async (req: Request, res: Response) => {
    // Extract the query parameters
    const lat = Number(req.query.lat);
    const lon = Number(req.query.lon);
    const radius = Number(req.query.radius);

    try {
      const places = await this.service.getPlacesWithInRadius(lat, lon, radius);
      res.status(200).json(places);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error fetching places" });
    }
  };
}
