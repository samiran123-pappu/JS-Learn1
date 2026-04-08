{
  {
    /// WeakSet objects are collections of key/value pairs in which the keys are weakly referenced. The keys must be objects, not primitive values. The values can be arbitrary values. A WeakSet is a collection of objects. An object in the WeakSet may only occur once; it is unique in the WeakSet's collection. The WeakSet is not enumerable.

    console.log("\n\n\n\n1---------------------------");
    const ws = new WeakSet();
    const obj1 = { name: "Alice" };
    const obj2 = { name: "Bob" };
    ws.add(obj1);
    ws.add(obj2);
    console.log(ws.has(obj1)); // true
    console.log(ws.has(obj2)); // true
    ws.delete(obj1);
    console.log(ws.has(obj1)); // false
    console.log(ws.has(obj2)); // true
  }
  {
    console.log("\n\n\n\n2---------------------------");
    // Create a WeakSet
    let mySet = new WeakSet();

    // Create an Object
    let myObj = { fname: "John", lname: "Doe" };

    // Add the Object
    mySet.add(myObj);

    // Do I have myObj in the mySet?
    let answer = mySet.has(myObj);
    console.log(answer);
  }
  {
    console.log("\n\n\n\n3---------------------------");

    // Create a WeakSet
    let mySet = new WeakSet();
    // Create an Object
    let myObj = { fname: "John", lname: "Doe" };
    // Add the Object
    mySet.add(myObj);
    // Do I have myObj in the mySet?
    let answer = mySet.has(myObj);
    // Remove the Object
    mySet.delete(myObj);
    // Do I have myObj in the mySet?
    answer = mySet.has(myObj);
    console.log(answer);
  }
  {
    console.log("\n\n\n\n4---------------------------");
    // Create a WeakSet
    let mySet = new WeakSet();

    // Create an Object
    let myObj = { fname: "John", lname: "Doe" };

    // Add the Object
    mySet.add(myObj);
    console.log(mySet.has(myObj));

    // Remove the Object from memory
    myObj = null;

    // Now myObj in mySet will be garbage collected`
    console.log(mySet.has(myObj));
  }
  {
    console.log("\n\n\n\n5---------------------------------");
    let text = "";
    // Create a Weakset to track a person
    const persons = new WeakSet();

    // Visitor Objects
    let John = { name: "John", age: 40 };
    const Paul = { name: "Paul", age: 30 };
    const Mary = { name: "Mary", age: 25 };
    const Peter = { name: "Peter", age: 35 };

    // Track visitors
    track(John);
    track(Paul);
    track(Mary);
    track(Peter);

    // Function to track visitors

    function track(visitor) {
      if (persons.has(visitor)) {
        text += visitor.name + " is already tracked.\n";
      } else {
        persons.add(visitor);
        text +=
          "Tracking " +
          visitor.name +
          "\t -->" +
          "age is " +
          visitor.age +
          "\n";
      }
    }
    console.log(persons.has(John));
    // persons.delete(John); // Remove John from the WeakSet so it won't show up in the output anymore
    John = null; // John is no longer referenced and can be garbage collected

    console.log(persons.has(John)); // John is no longer tracked.
  }

  {
    console.log("\n\n\n\n6---------------------------");
    const obj1 = { name: "John" };
    const obj2 = { name: "Doe" };
    const weakSet = new WeakSet([obj1, obj2]);
    console.log(weakSet.has(obj1));
    console.log(weakSet.has(obj2));
  }
  {
    console.log("\n\n\n\n7---------------------------");
    const weakSet = new WeakSet();
    const user = { id: 1 };
    weakSet.add(user);
    console.log(weakSet.has(user));
  }
  {
    console.log("\n\n\n\n8---------------------------");
    const weakSet = new WeakSet();
    const person = { name: "John" };
    weakSet.add(person);
    console.log(weakSet.has(person));
  }
  {
    console.log("\n\n\n\n9---------------------------");
    const weakSet = new WeakSet();
    const car = { brand: "BMW" };
    const bike = { brand: "Yamaha" };
    weakSet.add(car);
    weakSet.add(bike);
    console.log(weakSet.has(car));
    console.log(weakSet.has(bike));
  }
  {
    console.log("\n\n\n\n10---------------------------");
    const weakSet = new WeakSet();
    const person = { name: "John" };
    weakSet.add(person);
    console.log(weakSet.has(person));

    weakSet.delete(person);
    console.log(weakSet.has(person));
  }
  {
    console.log("\n\n\n\n11---------------------------");
    const weakSet = new WeakSet();
    const car = { brand: "BMW" };
    weakSet.add(car);
    console.log(weakSet.has(car));
    let result = weakSet.delete(car);
    console.log(result);
    console.log(weakSet.has(car));
  }

  {
    console.log("\n\n\n\n12---------------------------");
    const weakSet = new WeakSet();
    const person = { name: "John" };
    weakSet.add(person);
    console.log(weakSet.has(person));
  }
  {
    console.log("\n\n\n\n13---------------------------");
    const weakSet = new WeakSet();
    const car = { brand: "BMW" };
    console.log(weakSet.has(car));
  }{
    console.log("\n\n\n\n14---------------------------");
    const weakSet = new WeakSet();
    const person = { name: "John" };
    weakSet.add(person);
    console.log(weakSet.has(person));
    weakSet.delete(person)
    console.log(weakSet.has(person));
  }
  {
    console.log("\n\n\n\n15--------------------------------");
    const WS = new WeakSet();

    WS.add("Hello");
    WS.add("Hello1");
    let a = WS.has("Hello");
    let b = WS.has("Hello1");
    console.log(a);
    console.log(b);
    



  }


}
