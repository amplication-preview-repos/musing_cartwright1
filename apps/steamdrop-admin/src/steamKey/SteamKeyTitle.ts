import { SteamKey as TSteamKey } from "../api/steamKey/SteamKey";

export const STEAMKEY_TITLE_FIELD = "gameName";

export const SteamKeyTitle = (record: TSteamKey): string => {
  return record.gameName?.toString() || String(record.id);
};
