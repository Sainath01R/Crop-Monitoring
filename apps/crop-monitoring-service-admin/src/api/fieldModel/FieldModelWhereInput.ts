import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SatelliteImageListRelationFilter } from "../satelliteImage/SatelliteImageListRelationFilter";

export type FieldModelWhereInput = {
  cropType?: "Option1";
  farmer?: FarmerWhereUniqueInput;
  fieldName?: StringNullableFilter;
  id?: StringFilter;
  location?: JsonFilter;
  satelliteImages?: SatelliteImageListRelationFilter;
};
