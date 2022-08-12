function base(name) {
  return {
    input: `variants/${name}.js`,
    output: {
      file: `variants/${name}-builded.js`,
      format: "esm",
    },
  };
}

export default [
  base("direct-import"),
  base("loop-import"),
  base("object-import"),
  base("wildcard-import"),
];
