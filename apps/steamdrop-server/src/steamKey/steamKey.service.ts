import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SteamKeyServiceBase } from "./base/steamKey.service.base";

@Injectable()
export class SteamKeyService extends SteamKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
