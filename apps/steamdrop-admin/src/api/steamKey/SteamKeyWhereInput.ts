import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SteamKeyWhereInput = {
  activated?: BooleanNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  gameName?: StringNullableFilter;
  id?: StringFilter;
  key?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
