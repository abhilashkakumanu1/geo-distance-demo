import { PrismaClient } from "@prisma/client";
import { IPlace, IPlacesRepo } from "./types";

const prisma = new PrismaClient();

export class PlacesRepo implements IPlacesRepo {
  getPlacesWithInRadius = async (
    lat: number,
    lon: number,
    radius: number
  ): Promise<IPlace[]> => {
    const places: IPlace[] = await prisma.$queryRaw`
      SELECT * 
      FROM "Places"
      WHERE acos(
        sin(radians(${lat})) 
        * sin(radians(latitude)) 
        + cos(radians(${lat})) 
        * cos(radians(latitude)) 
        * cos(radians(${lon}) - radians(longitude))
      ) * 6371 <= ${radius};
    `;
    return places;
  };
}
