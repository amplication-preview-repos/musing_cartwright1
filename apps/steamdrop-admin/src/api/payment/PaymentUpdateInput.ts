import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  order?: OrderWhereUniqueInput | null;
  paymentDate?: Date | null;
};
