/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  FieldModel as PrismaFieldModel,
  SatelliteImage as PrismaSatelliteImage,
  Farmer as PrismaFarmer,
} from "@prisma/client";

export class FieldModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FieldModelCountArgs, "select">
  ): Promise<number> {
    return this.prisma.fieldModel.count(args);
  }

  async fieldModels(
    args: Prisma.FieldModelFindManyArgs
  ): Promise<PrismaFieldModel[]> {
    return this.prisma.fieldModel.findMany(args);
  }
  async fieldModel(
    args: Prisma.FieldModelFindUniqueArgs
  ): Promise<PrismaFieldModel | null> {
    return this.prisma.fieldModel.findUnique(args);
  }
  async createFieldModel(
    args: Prisma.FieldModelCreateArgs
  ): Promise<PrismaFieldModel> {
    return this.prisma.fieldModel.create(args);
  }
  async updateFieldModel(
    args: Prisma.FieldModelUpdateArgs
  ): Promise<PrismaFieldModel> {
    return this.prisma.fieldModel.update(args);
  }
  async deleteFieldModel(
    args: Prisma.FieldModelDeleteArgs
  ): Promise<PrismaFieldModel> {
    return this.prisma.fieldModel.delete(args);
  }

  async findSatelliteImages(
    parentId: string,
    args: Prisma.SatelliteImageFindManyArgs
  ): Promise<PrismaSatelliteImage[]> {
    return this.prisma.fieldModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .satelliteImages(args);
  }

  async getFarmer(parentId: string): Promise<PrismaFarmer | null> {
    return this.prisma.fieldModel
      .findUnique({
        where: { id: parentId },
      })
      .farmer();
  }
}
