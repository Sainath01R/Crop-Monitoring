import { InputJsonValue } from "../../types";
import { SatelliteImageWhereUniqueInput } from "../satelliteImage/SatelliteImageWhereUniqueInput";

export type AnalysisReportUpdateInput = {
  data?: InputJsonValue;
  reportDate?: Date | null;
  satelliteImage?: SatelliteImageWhereUniqueInput | null;
};
