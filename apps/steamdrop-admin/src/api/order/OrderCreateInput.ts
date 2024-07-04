import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";
import { SteamKeyCreateNestedManyWithoutOrdersInput } from "./SteamKeyCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  steamKeys?: SteamKeyCreateNestedManyWithoutOrdersInput;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
