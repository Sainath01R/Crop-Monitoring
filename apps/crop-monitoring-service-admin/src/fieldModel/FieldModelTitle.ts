import { FieldModel as TFieldModel } from "../api/fieldModel/FieldModel";

export const FIELDMODEL_TITLE_FIELD = "fieldName";

export const FieldModelTitle = (record: TFieldModel): string => {
  return record.fieldName?.toString() || String(record.id);
};
