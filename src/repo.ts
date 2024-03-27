import { PrismaClient } from "@prisma/client";
import { IPlacesRepo } from "./types";

const prisma = new PrismaClient();

export class PlacesRepo implements IPlacesRepo {
  getPlacesWithInRadius = async (lat, lon, radius) => {
    const places = await prisma.places.findMany();
    return places;
  };
}
