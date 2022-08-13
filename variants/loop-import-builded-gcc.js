
var a = Object.freeze({__proto__:null, a:"a", b:"b", c:"c"});
for (let b of ["b"]) {
  console.log(a[b]);
}
