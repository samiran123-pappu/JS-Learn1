{
  {
    console.log("\n\n\n\n1---------------------------");
    const fruits = ["cherries", "apples", "bananas"];
    console.log(fruits.toSorted());
    console.log(fruits);
  }
  {
    console.log("\n\n\n\n2---------------------------");
    const fruits = ["cherries", "apples", "bananas"];
    console.log(fruits.toSorted());
    fruits.reverse();
    console.log(fruits);
  }
  {
    console.log("\n\n\n\n3---------------------------");

    const points = [40, 100, 1, 5, 25, 10];
    const points2 = points.toSorted(function (a, b) {
      return a - b;
    });
    console.log(points2);
    console.log(points);
  }
  {
    console.log("\n\n\n\n4---------------------------");
    const points = [40, 100, 1, 5, 25, 10];
    const points2 = points.toSorted(function (a, b) {
      return b - a;
    });
    console.log(points2);
    console.log(points2[points2.length - 1]);
    console.log(points2[0]);
    console.log(points);
  }
  {
    console.log("\n\n\n\n5---------------------------");
    // Create an Array
    const points = [40, 100, 1, 5, 25, 10];

    // Sort the numbers in ascending order:
    let points2 = points.toSorted(function (a, b) {
      return a - b;
    });

    let highest = points2[points.length - 1];
    console.log(highest);       
    console.log(points);
    console.log(points2);
  }
}
