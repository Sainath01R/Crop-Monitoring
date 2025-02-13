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
import { IsJSONValue } from "../../validators";
import { IsOptional, IsDate, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { Type } from "class-transformer";
import { SatelliteImageWhereUniqueInput } from "../../satelliteImage/base/SatelliteImageWhereUniqueInput";

@InputType()
class AnalysisReportUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  data?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reportDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => SatelliteImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SatelliteImageWhereUniqueInput)
  @IsOptional()
  @Field(() => SatelliteImageWhereUniqueInput, {
    nullable: true,
  })
  satelliteImage?: SatelliteImageWhereUniqueInput | null;
}

export { AnalysisReportUpdateInput as AnalysisReportUpdateInput };
