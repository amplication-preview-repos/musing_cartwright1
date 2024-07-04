import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SteamKeyController } from "../steamKey.controller";
import { SteamKeyService } from "../steamKey.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activated: "true",
  createdAt: new Date(),
  expiryDate: new Date(),
  gameName: "exampleGameName",
  id: "exampleId",
  key: "exampleKey",
  price: 42.42,
  releaseDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  activated: "true",
  createdAt: new Date(),
  expiryDate: new Date(),
  gameName: "exampleGameName",
  id: "exampleId",
  key: "exampleKey",
  price: 42.42,
  releaseDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    activated: "true",
    createdAt: new Date(),
    expiryDate: new Date(),
    gameName: "exampleGameName",
    id: "exampleId",
    key: "exampleKey",
    price: 42.42,
    releaseDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  activated: "true",
  createdAt: new Date(),
  expiryDate: new Date(),
  gameName: "exampleGameName",
  id: "exampleId",
  key: "exampleKey",
  price: 42.42,
  releaseDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createSteamKey() {
    return CREATE_RESULT;
  },
  steamKeys: () => FIND_MANY_RESULT,
  steamKey: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("SteamKey", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SteamKeyService,
          useValue: service,
        },
      ],
      controllers: [SteamKeyController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /steamKeys", async () => {
    await request(app.getHttpServer())
      .post("/steamKeys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        releaseDate: CREATE_RESULT.releaseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /steamKeys", async () => {
    await request(app.getHttpServer())
      .get("/steamKeys")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expiryDate: FIND_MANY_RESULT[0].expiryDate.toISOString(),
          releaseDate: FIND_MANY_RESULT[0].releaseDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /steamKeys/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/steamKeys"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /steamKeys/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/steamKeys"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expiryDate: FIND_ONE_RESULT.expiryDate.toISOString(),
        releaseDate: FIND_ONE_RESULT.releaseDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /steamKeys existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/steamKeys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        releaseDate: CREATE_RESULT.releaseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/steamKeys")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
