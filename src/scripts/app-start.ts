import { generateManifest } from "./manifest";

export const appStart = async () => {
  console.log("app started");

  generateManifest();
};
