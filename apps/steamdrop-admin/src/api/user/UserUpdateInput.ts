import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SteamKeyUpdateManyWithoutUsersInput } from "./SteamKeyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  steamKeys?: SteamKeyUpdateManyWithoutUsersInput;
  username?: string;
};
