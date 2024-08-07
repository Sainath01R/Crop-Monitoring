/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumFieldModelCropType } from "./EnumFieldModelCropType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { FarmerWhereUniqueInput } from "../../farmer/base/FarmerWhereUniqueInput";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SatelliteImageListRelationFilter } from "../../satelliteImage/base/SatelliteImageListRelationFilter";

@InputType()
class FieldModelWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumFieldModelCropType,
  })
  @IsEnum(EnumFieldModelCropType)
  @IsOptional()
  @Field(() => EnumFieldModelCropType, {
    nullable: true,
  })
  cropType?: "Option1";

  @ApiProperty({
    required: false,
    type: () => FarmerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FarmerWhereUniqueInput)
  @IsOptional()
  @Field(() => FarmerWhereUniqueInput, {
    nullable: true,
  })
  farmer?: FarmerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fieldName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  location?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => SatelliteImageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SatelliteImageListRelationFilter)
  @IsOptional()
  @Field(() => SatelliteImageListRelationFilter, {
    nullable: true,
  })
  satelliteImages?: SatelliteImageListRelationFilter;
}

export { FieldModelWhereInput as FieldModelWhereInput };
