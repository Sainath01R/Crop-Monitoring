import * as graphql from "@nestjs/graphql";
import { SatelliteImageResolverBase } from "./base/satelliteImage.resolver.base";
import { SatelliteImage } from "./base/SatelliteImage";
import { SatelliteImageService } from "./satelliteImage.service";

@graphql.Resolver(() => SatelliteImage)
export class SatelliteImageResolver extends SatelliteImageResolverBase {
  constructor(protected readonly service: SatelliteImageService) {
    super(service);
  }
}
