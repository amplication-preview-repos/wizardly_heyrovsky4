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
import { ImageGenerationHistory } from "./ImageGenerationHistory";
import { ImageGenerationHistoryCountArgs } from "./ImageGenerationHistoryCountArgs";
import { ImageGenerationHistoryFindManyArgs } from "./ImageGenerationHistoryFindManyArgs";
import { ImageGenerationHistoryFindUniqueArgs } from "./ImageGenerationHistoryFindUniqueArgs";
import { CreateImageGenerationHistoryArgs } from "./CreateImageGenerationHistoryArgs";
import { UpdateImageGenerationHistoryArgs } from "./UpdateImageGenerationHistoryArgs";
import { DeleteImageGenerationHistoryArgs } from "./DeleteImageGenerationHistoryArgs";
import { ImageGenerationHistoryService } from "../imageGenerationHistory.service";
@graphql.Resolver(() => ImageGenerationHistory)
export class ImageGenerationHistoryResolverBase {
  constructor(protected readonly service: ImageGenerationHistoryService) {}

  async _imageGenerationHistoriesMeta(
    @graphql.Args() args: ImageGenerationHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ImageGenerationHistory])
  async imageGenerationHistories(
    @graphql.Args() args: ImageGenerationHistoryFindManyArgs
  ): Promise<ImageGenerationHistory[]> {
    return this.service.imageGenerationHistories(args);
  }

  @graphql.Query(() => ImageGenerationHistory, { nullable: true })
  async imageGenerationHistory(
    @graphql.Args() args: ImageGenerationHistoryFindUniqueArgs
  ): Promise<ImageGenerationHistory | null> {
    const result = await this.service.imageGenerationHistory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ImageGenerationHistory)
  async createImageGenerationHistory(
    @graphql.Args() args: CreateImageGenerationHistoryArgs
  ): Promise<ImageGenerationHistory> {
    return await this.service.createImageGenerationHistory({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ImageGenerationHistory)
  async updateImageGenerationHistory(
    @graphql.Args() args: UpdateImageGenerationHistoryArgs
  ): Promise<ImageGenerationHistory | null> {
    try {
      return await this.service.updateImageGenerationHistory({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => ImageGenerationHistory)
  async deleteImageGenerationHistory(
    @graphql.Args() args: DeleteImageGenerationHistoryArgs
  ): Promise<ImageGenerationHistory | null> {
    try {
      return await this.service.deleteImageGenerationHistory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
