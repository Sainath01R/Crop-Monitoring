import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SatelliteImageCreateNestedManyWithoutFieldModelsInput } from "./SatelliteImageCreateNestedManyWithoutFieldModelsInput";

export type FieldModelCreateInput = {
  cropType?: "Option1" | null;
  farmer?: FarmerWhereUniqueInput | null;
  fieldName?: string | null;
  location?: InputJsonValue;
  satelliteImages?: SatelliteImageCreateNestedManyWithoutFieldModelsInput;
};
