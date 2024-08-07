import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SatelliteImageServiceBase } from "./base/satelliteImage.service.base";

@Injectable()
export class SatelliteImageService extends SatelliteImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
