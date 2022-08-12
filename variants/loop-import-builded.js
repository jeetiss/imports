const a = "a";

const b = "b";

const c = "c";

var items = /*#__PURE__*/Object.freeze({
  __proto__: null,
  a: a,
  b: b,
  c: c
});

for (let key of ['b']) {
  console.log(items[key]);
}
