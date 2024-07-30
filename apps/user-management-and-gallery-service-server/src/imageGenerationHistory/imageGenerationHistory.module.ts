import { Module } from "@nestjs/common";
import { ImageGenerationHistoryModuleBase } from "./base/imageGenerationHistory.module.base";
import { ImageGenerationHistoryService } from "./imageGenerationHistory.service";
import { ImageGenerationHistoryController } from "./imageGenerationHistory.controller";
import { ImageGenerationHistoryResolver } from "./imageGenerationHistory.resolver";

@Module({
  imports: [ImageGenerationHistoryModuleBase],
  controllers: [ImageGenerationHistoryController],
  providers: [ImageGenerationHistoryService, ImageGenerationHistoryResolver],
  exports: [ImageGenerationHistoryService],
})
export class ImageGenerationHistoryModule {}
