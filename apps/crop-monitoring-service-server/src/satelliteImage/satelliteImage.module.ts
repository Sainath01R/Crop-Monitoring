import { Module } from "@nestjs/common";
import { SatelliteImageModuleBase } from "./base/satelliteImage.module.base";
import { SatelliteImageService } from "./satelliteImage.service";
import { SatelliteImageController } from "./satelliteImage.controller";
import { SatelliteImageResolver } from "./satelliteImage.resolver";

@Module({
  imports: [SatelliteImageModuleBase],
  controllers: [SatelliteImageController],
  providers: [SatelliteImageService, SatelliteImageResolver],
  exports: [SatelliteImageService],
})
export class SatelliteImageModule {}
