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
import { SatelliteImageWhereInput } from "./SatelliteImageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SatelliteImageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SatelliteImageWhereInput,
  })
  @ValidateNested()
  @Type(() => SatelliteImageWhereInput)
  @IsOptional()
  @Field(() => SatelliteImageWhereInput, {
    nullable: true,
  })
  every?: SatelliteImageWhereInput;

  @ApiProperty({
    required: false,
    type: () => SatelliteImageWhereInput,
  })
  @ValidateNested()
  @Type(() => SatelliteImageWhereInput)
  @IsOptional()
  @Field(() => SatelliteImageWhereInput, {
    nullable: true,
  })
  some?: SatelliteImageWhereInput;

  @ApiProperty({
    required: false,
    type: () => SatelliteImageWhereInput,
  })
  @ValidateNested()
  @Type(() => SatelliteImageWhereInput)
  @IsOptional()
  @Field(() => SatelliteImageWhereInput, {
    nullable: true,
  })
  none?: SatelliteImageWhereInput;
}
export { SatelliteImageListRelationFilter as SatelliteImageListRelationFilter };
