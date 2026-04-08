{
  {
    console.log("\n\n\n\n1---------------------------");
    const A = new Set(["a", "b", "c"]);
    const B = new Set(["b", "c", "d"]);
    const union = new Set([...A, ...B]);
    const union1 = A.union(B);
    console.log(union);
    console.log(union1);
  }{
    console.log("\n\n\n\n2------------------------------");
    const A = new Set(["a", "b", "c"]);
    const B = new Set(["b", "c", "d"]);
    const C = A.intersection(B);
    console.log(C);
  }{
    console.log("\n\n\n\n3------------------------------");
  }
  {
    console.log("\n\n\n\n4------------------------------");
    const A = new Set(["a", "b", "c"]);
    const B = new Set(["b", "c", "d"]);
    const C = A.difference(B);
    console.log(C);
  }{
    console.log("\n\n\n\n5------------------------------");
    const A = new Set(["a", "b", "c"]);
    const B = new Set(["b", "c", "d"]);
    const C = A.symmetricDifference(B);
    console.log(C);
  }{
    console.log("\n\n\n\n6------------------------------");
    const A = new Set(["a", "b", "c"]);
    const B = new Set(["b", "c", "d"]);
    const C = new Set(["b", "c"]);
    const D = A.isSubsetOf(B);
    const E = C.isSubsetOf(A);
    console.log(D);
    console.log(E);
  }{
    console.log("\n\n\n\n7------------------------------");
const A = new Set(["a", "b", "c"]);
    const B = new Set(["b", "c", "d"]);
    const C = new Set(["b", "c"]);
    const D = A.isSupersetOf(B);
    const E = C.isSupersetOf(A);
    console.log(D);
    console.log(E);

  }{
    console.log("\n\n\n\n8------------------------------");

    const A = new Set(["a", "b", "c"]);
    const B = new Set(["b", "c", "d"]);
    const C = new Set(["y", "z"]);
    const D = A.isDisjointFrom(B);
    const E = A.isDisjointFrom(C);
    console.log(D);
    console.log(E);
  }
}
