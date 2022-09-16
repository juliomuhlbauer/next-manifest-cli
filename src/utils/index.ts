import path from "path";
import jiti from "jiti";
import { Config } from "types";

export const getConfig = (): Config => {
  const configPath = path.resolve(process.cwd(), "manifest-config.ts");

  console.log("configPath: ", configPath);

  const config = jiti(process.cwd(), {
    interopDefault: true,
    esmResolve: true,
  });

  return config("./manifest-config.ts");
};

export const parseJson = (json: string): string =>
  JSON.stringify(JSON.parse(json));
