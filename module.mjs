// @ts-check
import { module } from "@prisma/composer";
import { postgres } from "@prisma/composer-prisma-cloud/orm";
import service, { contract } from "./server/src/service.mjs";

export default module("doomsday-ready", ({ provision }) => {
  const db = provision(postgres({ name: "db", contract, config: "./prisma.config.ts" }));
  provision(service, { deps: { db } });
});
