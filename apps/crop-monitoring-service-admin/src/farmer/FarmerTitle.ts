import { Farmer as TFarmer } from "../api/farmer/Farmer";

export const FARMER_TITLE_FIELD = "id";

export const FarmerTitle = (record: TFarmer): string => {
  return record.id?.toString() || String(record.id);
};
