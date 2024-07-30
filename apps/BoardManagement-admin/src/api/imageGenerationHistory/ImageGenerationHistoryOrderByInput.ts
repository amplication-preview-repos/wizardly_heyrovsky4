import { SortOrder } from "../../util/SortOrder";

export type ImageGenerationHistoryOrderByInput = {
  createdAt?: SortOrder;
  generatedImageUrl?: SortOrder;
  id?: SortOrder;
  parametersUsed?: SortOrder;
  promptDescription?: SortOrder;
  updatedAt?: SortOrder;
};
