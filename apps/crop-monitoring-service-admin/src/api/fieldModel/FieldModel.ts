import { Farmer } from "../farmer/Farmer";
import { JsonValue } from "type-fest";
import { SatelliteImage } from "../satelliteImage/SatelliteImage";

export type FieldModel = {
  createdAt: Date;
  cropType?: "Option1" | null;
  farmer?: Farmer | null;
  fieldName: string | null;
  id: string;
  location: JsonValue;
  satelliteImages?: Array<SatelliteImage>;
  updatedAt: Date;
};
