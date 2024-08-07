import { SortOrder } from "../../util/SortOrder";

export type AnalysisReportOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  reportDate?: SortOrder;
  satelliteImageId?: SortOrder;
  updatedAt?: SortOrder;
};
