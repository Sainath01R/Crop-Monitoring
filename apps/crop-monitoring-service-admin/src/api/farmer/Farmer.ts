import { FieldModel } from "../fieldModel/FieldModel";

export type Farmer = {
  createdAt: Date;
  email: string | null;
  fields?: Array<FieldModel>;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
