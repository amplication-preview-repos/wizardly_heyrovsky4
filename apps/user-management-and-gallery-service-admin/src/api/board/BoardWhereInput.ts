import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BoardWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  posterImageUrl?: StringNullableFilter;
};
