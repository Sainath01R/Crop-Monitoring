import { AnalysisReportWhereInput } from "./AnalysisReportWhereInput";
import { AnalysisReportOrderByInput } from "./AnalysisReportOrderByInput";

export type AnalysisReportFindManyArgs = {
  where?: AnalysisReportWhereInput;
  orderBy?: Array<AnalysisReportOrderByInput>;
  skip?: number;
  take?: number;
};
