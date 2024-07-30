import { ImageGenerationHistory as TImageGenerationHistory } from "../api/imageGenerationHistory/ImageGenerationHistory";

export const IMAGEGENERATIONHISTORY_TITLE_FIELD = "generatedImageUrl";

export const ImageGenerationHistoryTitle = (
  record: TImageGenerationHistory
): string => {
  return record.generatedImageUrl?.toString() || String(record.id);
};
