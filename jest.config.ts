import type { Config } from "jest";

const config: Config = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).(js|ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;
