/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SatelliteImageWhereUniqueInput } from "../../satelliteImage/base/SatelliteImageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SatelliteImageUpdateManyWithoutFieldModelsInput {
  @Field(() => [SatelliteImageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SatelliteImageWhereUniqueInput],
  })
  connect?: Array<SatelliteImageWhereUniqueInput>;

  @Field(() => [SatelliteImageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SatelliteImageWhereUniqueInput],
  })
  disconnect?: Array<SatelliteImageWhereUniqueInput>;

  @Field(() => [SatelliteImageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SatelliteImageWhereUniqueInput],
  })
  set?: Array<SatelliteImageWhereUniqueInput>;
}

export { SatelliteImageUpdateManyWithoutFieldModelsInput as SatelliteImageUpdateManyWithoutFieldModelsInput };
