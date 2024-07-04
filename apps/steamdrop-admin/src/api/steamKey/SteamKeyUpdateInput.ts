import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SteamKeyUpdateInput = {
  activated?: boolean | null;
  expiryDate?: Date | null;
  gameName?: string | null;
  key?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  releaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
