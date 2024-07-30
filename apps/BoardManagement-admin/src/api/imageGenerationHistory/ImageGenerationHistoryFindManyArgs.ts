import { ImageGenerationHistoryWhereInput } from "./ImageGenerationHistoryWhereInput";
import { ImageGenerationHistoryOrderByInput } from "./ImageGenerationHistoryOrderByInput";

export type ImageGenerationHistoryFindManyArgs = {
  where?: ImageGenerationHistoryWhereInput;
  orderBy?: Array<ImageGenerationHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
