import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageGenerationHistoryServiceBase } from "./base/imageGenerationHistory.service.base";

@Injectable()
export class ImageGenerationHistoryService extends ImageGenerationHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
