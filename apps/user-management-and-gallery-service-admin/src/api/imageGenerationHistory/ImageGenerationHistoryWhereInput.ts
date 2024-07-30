import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageGenerationHistoryWhereInput = {
  generatedImageUrl?: StringNullableFilter;
  id?: StringFilter;
  parametersUsed?: StringNullableFilter;
  promptDescription?: StringNullableFilter;
};
