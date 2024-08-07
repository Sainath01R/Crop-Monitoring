import { AnalysisReport as TAnalysisReport } from "../api/analysisReport/AnalysisReport";

export const ANALYSISREPORT_TITLE_FIELD = "id";

export const AnalysisReportTitle = (record: TAnalysisReport): string => {
  return record.id?.toString() || String(record.id);
};
