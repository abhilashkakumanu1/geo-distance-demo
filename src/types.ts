import { Decimal } from "@prisma/client/runtime/library";
import { request, Response } from "express";

export interface IPlace {
  id: number;
  name: string;
  latitude: Decimal;
  longitude: Decimal;
}

export interface IPlacesRepo {
  getPlacesWithInRadius(
    lat: number,
    lon: number,
    radius: number
  ): Promise<IPlace[]>;
}

export interface IPlacesService {
  getPlacesWithInRadius(
    lat: number,
    long: number,
    radiusInKlms: number
  ): Promise<IPlace[]>;
}
