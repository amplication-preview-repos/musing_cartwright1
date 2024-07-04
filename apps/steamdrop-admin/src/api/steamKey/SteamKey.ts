import { Order } from "../order/Order";
import { User } from "../user/User";

export type SteamKey = {
  activated: boolean | null;
  createdAt: Date;
  expiryDate: Date | null;
  gameName: string | null;
  id: string;
  key: string | null;
  order?: Order | null;
  price: number | null;
  releaseDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
