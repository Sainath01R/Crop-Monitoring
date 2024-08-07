import { FieldModelUpdateManyWithoutFarmersInput } from "./FieldModelUpdateManyWithoutFarmersInput";

export type FarmerUpdateInput = {
  email?: string | null;
  fields?: FieldModelUpdateManyWithoutFarmersInput;
  name?: string | null;
  phone?: string | null;
};
