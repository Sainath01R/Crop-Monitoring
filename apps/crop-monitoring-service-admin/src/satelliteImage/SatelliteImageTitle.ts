import { SatelliteImage as TSatelliteImage } from "../api/satelliteImage/SatelliteImage";

export const SATELLITEIMAGE_TITLE_FIELD = "id";

export const SatelliteImageTitle = (record: TSatelliteImage): string => {
  return record.id?.toString() || String(record.id);
};
