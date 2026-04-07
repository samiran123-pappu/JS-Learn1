{
  {
    console.log("\n\n\n\n1---------------------------");
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);
  }
  {
    console.log("\n\n\n\n2---------------------------");
    const numbers = [23, 55, 21, 87, 56];
    let minValue = Math.min(...numbers);
    let maxValue = Math.max(...numbers);
    console.log(minValue);
    console.log(maxValue);
  }
  {
    console.log("\n\n\n\n3---------------------------");
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1];
    console.log(arr2);
  }
}
