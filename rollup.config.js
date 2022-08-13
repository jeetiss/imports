import { terser } from "rollup-plugin-terser";
import compiler from "@ampproject/rollup-plugin-closure-compiler";

function base(name) {
  return [
    {
      input: `variants/${name}.js`,
      output: {
        file: `variants/${name}-builded.js`,
        format: "esm",
      },
    },
    {
      input: `variants/${name}.js`,
      output: {
        file: `variants/${name}-builded-terser.js`,
        format: "esm",
      },
      plugins: [
        terser({
          compress: {
            passes: 2,
          },
          format: {
            beautify: true,
          },
        }),
      ],
    },
    {
      input: `variants/${name}.js`,
      output: {
        file: `variants/${name}-builded-gcc.js`,
        format: "esm",
      },
      plugins: [
        compiler({
          formatting: "PRETTY_PRINT",
        }),
      ],
    },
  ];
}

export default [
  base("direct-import"),
  base("loop-import"),
  base("object-import"),
  base("wildcard-import"),
].flat();
