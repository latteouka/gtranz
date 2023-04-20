import { defineConfig } from "tsup";
import babel from "esbuild-plugin-babel";

// https://tsup.egoist.sh/
// https://esbuild.github.io/

export default defineConfig({
  // name: "tsup",
  entry: ["./src/index.ts"],
  // outExtension({ format }) {
  //   const extension = format === "esm" ? ".mjs" : ".js";
  //   return {
  //     js: extension,
  //   };
  // },
  // target: "es6",
  format: ["cjs", "esm"],
  clean: true,
  dts: true,
  splitting: false,
  // minify: true,
  // esbuildPlugins: [babel()],
});
