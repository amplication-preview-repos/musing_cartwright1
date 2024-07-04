import { SteamKeyWhereInput } from "./SteamKeyWhereInput";
import { SteamKeyOrderByInput } from "./SteamKeyOrderByInput";

export type SteamKeyFindManyArgs = {
  where?: SteamKeyWhereInput;
  orderBy?: Array<SteamKeyOrderByInput>;
  skip?: number;
  take?: number;
};
