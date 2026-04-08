{
  {
    console.log("\n\n\n\n1---------------------------");
    const numbers = new Set([1, 2, 3]);
    console.log(numbers.size);
  }
  {
    console.log("\n\n\n\n2------------------------------");
    const numbers = new Set([1, 2, 3, 4]);
    let x = " ";
    for (let x1 of numbers) {
      x += "\n" + x1;
    }
    console.log(x);
  }
  {
    console.log("\n\n\n\n3------------------------------");
    const numbers = new Set([1, 2, 3, 4]);
    console.log(numbers.has(2));
  }
  {
    console.log("\n\n\n\n4------------------------------");
    const numbers = new Set([1, 2, 3, 4]);
    let text = 2;
    numbers.forEach((value) => (text += value));
    console.log(text);
  }
  {
    console.log("\n\n\n\n5------------------------------");
    const numbers = new Set(["a", "b", "c"]);
    let text = 2;
    numbers.forEach((value) => (text += value));
    console.log(text);
  }
  {
    console.log("\n\n\n\n6------------------------------");
    // Create a Set
    const letters = new Set(["a", "b", "c"]);

    // List all entries
    let text = "";
    letters.forEach(function (value) {
      text += value;
    });
    console.log(text);
  }
  {
    console.log("\n\n\n\n7------------------------------");
    const a = new Set([1, 2, 3]);
    let x = "2";
    for (let i of a) {
      x *= i + "\n";
      console.log(x);
    }
  }
  {
    console.log("\n\n\n\n8------------------------------");
    for (let i = 1; i < 11; i++) {
      console.log(i * 2);
    }
  }
  {
    console.log("\n\n\n\n9------------------------------");
    const a = new Set([1, 2, 3]);
    let x = a.values();

    let y = " ";
    for (let i of x) {
      y += "\n" + i;
    }
    console.log(y);
  }
  {
    console.log("\n\n\n\n10------------------------------"); // Create a Set
    const letters = new Set(["a", "b", "c"]);
    // Create an Iterator
    const myIterator = letters.keys();
    console.log(myIterator);
    const myIterator1 = letters.values();
    console.log(myIterator1);
    // List all Elements
    let text = "";
    for (const x of myIterator) {
      text += x;
    }
    console.log(text);
  }
  {
    // Create a Set
    const letters = new Set(["a", "b", "c"]);

    // Get all Entries
    const myIterator = letters.entries();
    console.log(myIterator);

    // List all Entries
    let text = "";
    for (const entry of myIterator) {
      text += "\n" +entry;
    }
    console.log(text);
  }{
    console.log("\n\n\n\n11------------------------------");
    const letters = new Set(["a", "b", "c"]);
    const letters1 = new Set(["a", "b", "c"]);
    const letters2 = new Set(["a", "b", "c"]);

    // List all Entries
    let text = "";
    for (const entry of letters.entries()) {
      text += "\n" + entry;
    }
    console.log(text);
    // List all Keys
    let text1 = "";
    for (const key of letters.keys()) {
      text1 += "\n" + key;
    }
    console.log(text1);

    // List all Values
    let text2 = "";
    for (const value of letters.values()) {
      text2 += "\n" + value;
    }
    console.log(text2);
  }
}
