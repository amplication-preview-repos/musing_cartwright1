import { SteamKeyWhereUniqueInput } from "./SteamKeyWhereUniqueInput";
import { SteamKeyUpdateInput } from "./SteamKeyUpdateInput";

export type UpdateSteamKeyArgs = {
  where: SteamKeyWhereUniqueInput;
  data: SteamKeyUpdateInput;
};
