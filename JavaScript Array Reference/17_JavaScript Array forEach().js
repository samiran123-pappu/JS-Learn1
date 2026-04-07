{
  {
    console.log("\n\n\n\n1---------------------------");
    let text = "";
    const fruits = ["apple", "orange", "cherry"];
    fruits.forEach(myFunction);
    console.log(text);


    function myFunction(item, index) {
      text += index + ": " + item + ",";
    }
  }
}
