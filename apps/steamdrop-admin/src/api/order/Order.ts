import { Payment } from "../payment/Payment";
import { SteamKey } from "../steamKey/SteamKey";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  payments?: Array<Payment>;
  steamKeys?: Array<SteamKey>;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
