import { Order } from "../order/Order";
import { JsonValue } from "type-fest";
import { SteamKey } from "../steamKey/SteamKey";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  roles: JsonValue;
  steamKeys?: Array<SteamKey>;
  updatedAt: Date;
  username: string;
};
