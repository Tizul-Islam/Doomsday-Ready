// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";
import { dataContract, postgres } from "@prisma/composer-prisma-cloud/orm";
import contractJson from "./prisma/contract.json" with { type: "json" };

export const contract = dataContract(contractJson);

export default compute({
  name: "server",
  deps: { db: postgres(contract) },
  build: node({ module: import.meta.url, dir: ".", entry: "server.js", dependencies: "external" }),
});
