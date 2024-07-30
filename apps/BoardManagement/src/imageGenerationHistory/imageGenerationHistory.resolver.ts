import * as graphql from "@nestjs/graphql";
import { ImageGenerationHistoryResolverBase } from "./base/imageGenerationHistory.resolver.base";
import { ImageGenerationHistory } from "./base/ImageGenerationHistory";
import { ImageGenerationHistoryService } from "./imageGenerationHistory.service";

@graphql.Resolver(() => ImageGenerationHistory)
export class ImageGenerationHistoryResolver extends ImageGenerationHistoryResolverBase {
  constructor(protected readonly service: ImageGenerationHistoryService) {
    super(service);
  }
}
