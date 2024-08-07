/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FarmerCreateInput } from "./FarmerCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateFarmerArgs {
  @ApiProperty({
    required: true,
    type: () => FarmerCreateInput,
  })
  @ValidateNested()
  @Type(() => FarmerCreateInput)
  @Field(() => FarmerCreateInput, { nullable: false })
  data!: FarmerCreateInput;
}

export { CreateFarmerArgs as CreateFarmerArgs };
