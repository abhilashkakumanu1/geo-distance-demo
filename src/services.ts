import { IPlacesRepo } from "./types";

export class PlacesService {
  private repo: IPlacesRepo;
  constructor(repo: IPlacesRepo) {
    this.repo = repo;
  }

  getPlacesWithInRadius = async (
    lat: number,
    long: number,
    radiusInKlms: number
  ) => {
    const places = await this.repo.getPlacesWithInRadius(
      lat,
      long,
      radiusInKlms
    );
    return places;
  };
}
