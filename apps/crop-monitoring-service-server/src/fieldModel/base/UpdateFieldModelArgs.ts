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
import { FieldModelWhereUniqueInput } from "./FieldModelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FieldModelUpdateInput } from "./FieldModelUpdateInput";

@ArgsType()
class UpdateFieldModelArgs {
  @ApiProperty({
    required: true,
    type: () => FieldModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FieldModelWhereUniqueInput)
  @Field(() => FieldModelWhereUniqueInput, { nullable: false })
  where!: FieldModelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FieldModelUpdateInput,
  })
  @ValidateNested()
  @Type(() => FieldModelUpdateInput)
  @Field(() => FieldModelUpdateInput, { nullable: false })
  data!: FieldModelUpdateInput;
}

export { UpdateFieldModelArgs as UpdateFieldModelArgs };
