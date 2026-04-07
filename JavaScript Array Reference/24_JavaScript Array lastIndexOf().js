{
  {
    console.log("\n\n\n\n1---------------------------");
    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    let index = fruits.lastIndexOf("Apple");
    console.log(index);
  }
  {
    const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
    let index = fruits.lastIndexOf("Apple",-3 );
    console.log(index);
  }
}
