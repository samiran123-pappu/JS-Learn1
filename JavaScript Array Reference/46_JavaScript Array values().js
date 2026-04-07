{
  {
    console.log("\n\n\n\n1---------------------------");
    const fruits = ["cherries", "apples", "bananas"];
    const list = fruits.values();
    let text = " ";
    for (let x of list) {
      text += x + " , ";
    }
    console.log(text);
    console.log(fruits);
    console.log(typeof text);
    console.log(typeof fruits);
    let a = text;
    let b = fruits;
  }
  {
    console.log("\n\n\n\n2---------------------------");
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // List the Values
    let text = "";
    for (let x of fruits.values()) {
      text += x + " , ";
    }
    console.log(text);
    console.log(fruits);
  }
  {
    console.log("\n\n\n\n3---------------------------");
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // List the Values
    let text = "";
    for (let x of Object.values(fruits)) {
      text += x + " , ";
    }
    console.log(text);
    console.log(fruits);
  }
}
