import { AnalysisReport } from "../analysisReport/AnalysisReport";
import { FieldModel } from "../fieldModel/FieldModel";

export type SatelliteImage = {
  analysisReports?: Array<AnalysisReport>;
  createdAt: Date;
  dateCaptured: Date | null;
  fieldModel?: FieldModel | null;
  id: string;
  imageUrl: string | null;
  updatedAt: Date;
};
