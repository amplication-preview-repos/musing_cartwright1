import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SteamKeyModuleBase } from "./base/steamKey.module.base";
import { SteamKeyService } from "./steamKey.service";
import { SteamKeyController } from "./steamKey.controller";
import { SteamKeyResolver } from "./steamKey.resolver";

@Module({
  imports: [SteamKeyModuleBase, forwardRef(() => AuthModule)],
  controllers: [SteamKeyController],
  providers: [SteamKeyService, SteamKeyResolver],
  exports: [SteamKeyService],
})
export class SteamKeyModule {}
