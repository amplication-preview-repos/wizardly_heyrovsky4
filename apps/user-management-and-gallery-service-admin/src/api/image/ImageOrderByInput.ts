import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
