{
  {
    console.log("\n\n\n\n1---------------------------");

    let a, rest;
    const arr1 = [1, 2, 3, 4, 5];
    [a, ...rest] = arr1;
    console.log(a);
    console.log(rest);
  }
  {
    console.log("\n\n\n\n2---------------------------");
    let a, b, c, rest;
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

    [a, b, c, ...rest] = arr1;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(rest);
  }
}
