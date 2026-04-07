{
  {
    console.log("\n\n\n\n1---------------------------");
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.sort());
    console.log(fruits);
  }
  {
    console.log("\n\n\n\n2---------------------------");
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // Sort the Array
    console.log(fruits.sort());

    // Reverse the array
    fruits.reverse();
    console.log(fruits);
  }
  {
    console.log("\n\n\n\n3---------------------------");
    // Create an Array
    const points = [40, 100, 1, 5, 25, 10];

    // Sort the Array
    points.sort(function (a, b) {
      return a - b;
    });
    console.log(points);
  }
  {
    console.log("\n\n\n\n4---------------------------");
    // Create an Array
    const points = [40, 100, 1, 5, 25, 10];

    // Sort the numbers in descending order:
    points.sort(function (a, b) {
      return b - a;
    });

    let highest = points[0];
    console.log(highest);
    console.log(points);
  }
  {
    console.log("\n\n\n\n5---------------------------");

    // Create an Array
    const points = [40, 100, 1, 5, 25, 10];

    // Sort the numbers in ascending order:
    points.sort(function (a, b) {
      return a - b;
    });

    let highest = points[points.length - 1];
    console.log(highest);
    console.log(points);
  }
}
