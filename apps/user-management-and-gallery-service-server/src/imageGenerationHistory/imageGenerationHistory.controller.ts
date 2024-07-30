import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageGenerationHistoryService } from "./imageGenerationHistory.service";
import { ImageGenerationHistoryControllerBase } from "./base/imageGenerationHistory.controller.base";

@swagger.ApiTags("imageGenerationHistories")
@common.Controller("imageGenerationHistories")
export class ImageGenerationHistoryController extends ImageGenerationHistoryControllerBase {
  constructor(protected readonly service: ImageGenerationHistoryService) {
    super(service);
  }
}
