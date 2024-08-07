import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SatelliteImageService } from "./satelliteImage.service";
import { SatelliteImageControllerBase } from "./base/satelliteImage.controller.base";

@swagger.ApiTags("satelliteImages")
@common.Controller("satelliteImages")
export class SatelliteImageController extends SatelliteImageControllerBase {
  constructor(protected readonly service: SatelliteImageService) {
    super(service);
  }
}
