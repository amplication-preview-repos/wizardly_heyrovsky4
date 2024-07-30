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
import { ImageGenerationHistoryWhereInput } from "./ImageGenerationHistoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ImageGenerationHistoryOrderByInput } from "./ImageGenerationHistoryOrderByInput";

@ArgsType()
class ImageGenerationHistoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ImageGenerationHistoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ImageGenerationHistoryWhereInput, { nullable: true })
  @Type(() => ImageGenerationHistoryWhereInput)
  where?: ImageGenerationHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: [ImageGenerationHistoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ImageGenerationHistoryOrderByInput], { nullable: true })
  @Type(() => ImageGenerationHistoryOrderByInput)
  orderBy?: Array<ImageGenerationHistoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ImageGenerationHistoryFindManyArgs as ImageGenerationHistoryFindManyArgs };
