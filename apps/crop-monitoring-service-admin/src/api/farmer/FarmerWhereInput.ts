import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FieldModelListRelationFilter } from "../fieldModel/FieldModelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FarmerWhereInput = {
  email?: StringNullableFilter;
  fields?: FieldModelListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
