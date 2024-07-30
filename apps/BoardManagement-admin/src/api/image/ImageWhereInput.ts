import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  id?: StringFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
