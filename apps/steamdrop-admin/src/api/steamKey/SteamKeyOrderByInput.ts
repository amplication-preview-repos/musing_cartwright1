import { SortOrder } from "../../util/SortOrder";

export type SteamKeyOrderByInput = {
  activated?: SortOrder;
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  gameName?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  releaseDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
