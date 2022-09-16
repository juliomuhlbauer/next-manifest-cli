import path from "path";
import * as tsImport from "ts-import";

export const getConfig = async () => {
  const configPath = path.resolve(process.cwd(), "manifest-config.ts");

  const config = await tsImport.load(configPath).catch((err) => {
    console.error(err);
  });

  return config.default;
};

export const parseJson = (json: string): string =>
  JSON.stringify(JSON.parse(json));
