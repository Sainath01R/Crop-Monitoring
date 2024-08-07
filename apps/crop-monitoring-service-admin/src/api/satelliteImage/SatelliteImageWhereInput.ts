import { AnalysisReportListRelationFilter } from "../analysisReport/AnalysisReportListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SatelliteImageWhereInput = {
  analysisReports?: AnalysisReportListRelationFilter;
  dateCaptured?: DateTimeNullableFilter;
  fieldModel?: FieldModelWhereUniqueInput;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
};
