import * as fs from "fs";
import { Config, Manifest } from "../../types";
import { getConfig, parseJson } from "../utils";

const newManifest = (config: Config): Manifest => {
  const { name, description, icons } = config;

  const manifest: Manifest = {
    name,
    description,
    icons: [icons.app],
  };

  return manifest;
};

const writeManifest = (config: Config) => {
  const generatedManifest = newManifest(config);

  fs.writeFile(
    "public/manifest.json",
    JSON.stringify(generatedManifest, null, 2),
    function (err) {
      console.log("manifest.json is being generated...");

      if (err) {
        console.log(err);
        return err;
      }
      console.log("manifest.json generated!");

      return generatedManifest;
    }
  );
};

export const generateManifest = async () => {
  const config = getConfig();

  fs.readFile("public/manifest.json", "utf8", (err, data) => {
    if (err) {
      console.log("manifest.json does not exist");

      writeManifest(config);
      return;
    }

    console.log("manifest.json exists");

    const parsedExistedManifestJson = parseJson(data);

    const newParsedManifest = JSON.stringify(newManifest(config));

    if (parsedExistedManifestJson !== newParsedManifest) {
      console.log("app was updated");

      return writeManifest(config);
    }

    if (parsedExistedManifestJson === newParsedManifest) {
      console.log("app is up to date");

      return parsedExistedManifestJson;
    }
  });
};
