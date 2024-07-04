import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SteamKeyCreateNestedManyWithoutUsersInput } from "./SteamKeyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  steamKeys?: SteamKeyCreateNestedManyWithoutUsersInput;
  username: string;
};
