import { SatelliteImageWhereInput } from "./SatelliteImageWhereInput";
import { SatelliteImageOrderByInput } from "./SatelliteImageOrderByInput";

export type SatelliteImageFindManyArgs = {
  where?: SatelliteImageWhereInput;
  orderBy?: Array<SatelliteImageOrderByInput>;
  skip?: number;
  take?: number;
};
