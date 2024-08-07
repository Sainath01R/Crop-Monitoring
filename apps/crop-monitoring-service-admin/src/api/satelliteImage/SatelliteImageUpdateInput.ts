import { AnalysisReportUpdateManyWithoutSatelliteImagesInput } from "./AnalysisReportUpdateManyWithoutSatelliteImagesInput";
import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";

export type SatelliteImageUpdateInput = {
  analysisReports?: AnalysisReportUpdateManyWithoutSatelliteImagesInput;
  dateCaptured?: Date | null;
  fieldModel?: FieldModelWhereUniqueInput | null;
  imageUrl?: string | null;
};
