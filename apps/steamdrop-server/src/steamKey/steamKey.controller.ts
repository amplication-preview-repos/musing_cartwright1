import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SteamKeyService } from "./steamKey.service";
import { SteamKeyControllerBase } from "./base/steamKey.controller.base";

@swagger.ApiTags("steamKeys")
@common.Controller("steamKeys")
export class SteamKeyController extends SteamKeyControllerBase {
  constructor(
    protected readonly service: SteamKeyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
