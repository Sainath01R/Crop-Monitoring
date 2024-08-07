import { FieldModelCreateNestedManyWithoutFarmersInput } from "./FieldModelCreateNestedManyWithoutFarmersInput";

export type FarmerCreateInput = {
  email?: string | null;
  fields?: FieldModelCreateNestedManyWithoutFarmersInput;
  name?: string | null;
  phone?: string | null;
};
