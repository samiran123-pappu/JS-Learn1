{
  {
    console.log("\n\n\n\n1---------------------------");

    const fruits = ["cherries", "apples", "bananas"];
    console.log(fruits.toSpliced(2, 1, "pears"));
    console.log(fruits);
  }
  {
    console.log("\n\n\n\n2---------------------------");
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // At position 2, remove 2 items
    const fruits2 = fruits.toSpliced(2, 2);
    console.log(fruits2);
    console.log(fruits);
  }
  {
    console.log("\n\n\n\n3---------------------------");
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // At position 2, remove 1 item, add "Lemon" and "Kiwi"
    const fruits2 = fruits.toSpliced(2, 1, "Lemon", "Kiwi");
    console.log(fruits2);
    console.log(fruits);
  }
}
