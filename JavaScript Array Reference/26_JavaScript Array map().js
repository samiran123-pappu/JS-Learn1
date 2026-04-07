{
  {
    console.log("\n\n\n\n1---------------------------");
    const numbers = [4, 9, 16, 25];
    const newArr = numbers.map(Math.sqrt);
    console.log(numbers);
    console.log(newArr);
  }
  {
    console.log("\n\n\n\n2---------------------------");

    const numbers = [65, 44, 12, 4];
    const newArr = numbers.map(myFunction);

    function myFunction(num) {
      return num * 10;
    }
    console.log(numbers);
    console.log(newArr);
  }
  {
    console.log("\n\n\n\n3---------------------------");
    const persons = [
      { firstname: "Malcom", lastname: "Reynolds" },
      { firstname: "Kaylee", lastname: "Frye" },
      { firstname: "Jayne", lastname: "Cobb" },
    ];

    let a = persons.map(getFullName);

    function getFullName(item) {
      return [item.firstname, item.lastname].join(" ");
    }
    console.log(a);

    console.log(persons);
  }
}
