import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SatelliteImageWhereUniqueInput } from "../satelliteImage/SatelliteImageWhereUniqueInput";

export type AnalysisReportWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  reportDate?: DateTimeNullableFilter;
  satelliteImage?: SatelliteImageWhereUniqueInput;
};
