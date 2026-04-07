{
  {
    console.log("\n\n\n\n5---------------------------");
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // Create an Iterable
    const list = fruits.keys();

    // List the Keys
    let text = "";
    for (let x of list) {
      text += x + " , ";
    }
    console.log(text);
    console.log("original array:", fruits);
  }{
    console.log("\n\n\n\n6---------------------------");

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    let text = " ";
    for(let x of fruits.keys()){
        text += x + " , ";
    }
    console.log(text);
    console.log("original array:",fruits);
    }
  }

