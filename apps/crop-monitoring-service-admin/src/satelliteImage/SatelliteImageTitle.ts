import { SatelliteImage as TSatelliteImage } from "../api/satelliteImage/SatelliteImage";

export const SATELLITEIMAGE_TITLE_FIELD = "imageUrl";

export const SatelliteImageTitle = (record: TSatelliteImage): string => {
  return record.imageUrl?.toString() || String(record.id);
};
