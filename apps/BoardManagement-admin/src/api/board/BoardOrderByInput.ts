import { SortOrder } from "../../util/SortOrder";

export type BoardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  posterImageUrl?: SortOrder;
  updatedAt?: SortOrder;
};
