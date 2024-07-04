import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { SteamKeyUpdateManyWithoutOrdersInput } from "./SteamKeyUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  steamKeys?: SteamKeyUpdateManyWithoutOrdersInput;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
