var o = Object.freeze({
    __proto__: null,
    a: "a",
    b: "b",
    c: "c"
});

for (let e of [ "b" ]) console.log(o[e]);
