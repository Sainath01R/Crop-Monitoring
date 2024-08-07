import { InputJsonValue } from "../../types";
import { SatelliteImageWhereUniqueInput } from "../satelliteImage/SatelliteImageWhereUniqueInput";

export type AnalysisReportCreateInput = {
  data?: InputJsonValue;
  reportDate?: Date | null;
  satelliteImage?: SatelliteImageWhereUniqueInput | null;
};
