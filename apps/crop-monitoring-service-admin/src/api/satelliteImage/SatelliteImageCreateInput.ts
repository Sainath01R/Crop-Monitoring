import { AnalysisReportCreateNestedManyWithoutSatelliteImagesInput } from "./AnalysisReportCreateNestedManyWithoutSatelliteImagesInput";
import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";

export type SatelliteImageCreateInput = {
  analysisReports?: AnalysisReportCreateNestedManyWithoutSatelliteImagesInput;
  dateCaptured?: Date | null;
  fieldModel?: FieldModelWhereUniqueInput | null;
  imageUrl?: string | null;
};
