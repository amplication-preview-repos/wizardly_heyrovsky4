import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "title";

export const ImageTitle = (record: TImage): string => {
  return record.title?.toString() || String(record.id);
};
