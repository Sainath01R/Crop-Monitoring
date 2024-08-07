/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FieldModel } from "./FieldModel";
import { FieldModelCountArgs } from "./FieldModelCountArgs";
import { FieldModelFindManyArgs } from "./FieldModelFindManyArgs";
import { FieldModelFindUniqueArgs } from "./FieldModelFindUniqueArgs";
import { CreateFieldModelArgs } from "./CreateFieldModelArgs";
import { UpdateFieldModelArgs } from "./UpdateFieldModelArgs";
import { DeleteFieldModelArgs } from "./DeleteFieldModelArgs";
import { SatelliteImageFindManyArgs } from "../../satelliteImage/base/SatelliteImageFindManyArgs";
import { SatelliteImage } from "../../satelliteImage/base/SatelliteImage";
import { Farmer } from "../../farmer/base/Farmer";
import { FieldModelService } from "../fieldModel.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FieldModel)
export class FieldModelResolverBase {
  constructor(
    protected readonly service: FieldModelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "read",
    possession: "any",
  })
  async _fieldModelsMeta(
    @graphql.Args() args: FieldModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FieldModel])
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "read",
    possession: "any",
  })
  async fieldModels(
    @graphql.Args() args: FieldModelFindManyArgs
  ): Promise<FieldModel[]> {
    return this.service.fieldModels(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FieldModel, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "read",
    possession: "own",
  })
  async fieldModel(
    @graphql.Args() args: FieldModelFindUniqueArgs
  ): Promise<FieldModel | null> {
    const result = await this.service.fieldModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FieldModel)
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "create",
    possession: "any",
  })
  async createFieldModel(
    @graphql.Args() args: CreateFieldModelArgs
  ): Promise<FieldModel> {
    return await this.service.createFieldModel({
      ...args,
      data: {
        ...args.data,

        farmer: args.data.farmer
          ? {
              connect: args.data.farmer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FieldModel)
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "update",
    possession: "any",
  })
  async updateFieldModel(
    @graphql.Args() args: UpdateFieldModelArgs
  ): Promise<FieldModel | null> {
    try {
      return await this.service.updateFieldModel({
        ...args,
        data: {
          ...args.data,

          farmer: args.data.farmer
            ? {
                connect: args.data.farmer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FieldModel)
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "delete",
    possession: "any",
  })
  async deleteFieldModel(
    @graphql.Args() args: DeleteFieldModelArgs
  ): Promise<FieldModel | null> {
    try {
      return await this.service.deleteFieldModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SatelliteImage], { name: "satelliteImages" })
  @nestAccessControl.UseRoles({
    resource: "SatelliteImage",
    action: "read",
    possession: "any",
  })
  async findSatelliteImages(
    @graphql.Parent() parent: FieldModel,
    @graphql.Args() args: SatelliteImageFindManyArgs
  ): Promise<SatelliteImage[]> {
    const results = await this.service.findSatelliteImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Farmer, {
    nullable: true,
    name: "farmer",
  })
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "read",
    possession: "any",
  })
  async getFarmer(
    @graphql.Parent() parent: FieldModel
  ): Promise<Farmer | null> {
    const result = await this.service.getFarmer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
