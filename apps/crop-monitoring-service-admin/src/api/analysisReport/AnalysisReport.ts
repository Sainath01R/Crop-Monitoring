import { JsonValue } from "type-fest";
import { SatelliteImage } from "../satelliteImage/SatelliteImage";

export type AnalysisReport = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  reportDate: Date | null;
  satelliteImage?: SatelliteImage | null;
  updatedAt: Date;
};
