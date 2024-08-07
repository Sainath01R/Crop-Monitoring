import { FieldModel as TFieldModel } from "../api/fieldModel/FieldModel";

export const FIELDMODEL_TITLE_FIELD = "id";

export const FieldModelTitle = (record: TFieldModel): string => {
  return record.id?.toString() || String(record.id);
};
