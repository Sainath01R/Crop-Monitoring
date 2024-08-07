import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SatelliteImageUpdateManyWithoutFieldModelsInput } from "./SatelliteImageUpdateManyWithoutFieldModelsInput";

export type FieldModelUpdateInput = {
  cropType?: "Option1" | null;
  farmer?: FarmerWhereUniqueInput | null;
  fieldName?: string | null;
  location?: InputJsonValue;
  satelliteImages?: SatelliteImageUpdateManyWithoutFieldModelsInput;
};
