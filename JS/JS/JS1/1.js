
{
    console.log("2\n\n\n\n---------------------------------\n");
    var cars = ["Volvo", "BMW"]; // Allowed
    const cars = ["Volvo", "BMW"]; // Not allowed
    console.log(cars)
    
    {
        var cars = ["Volvo", "BMW"]; // Allowed
        const cars = ["Volvo", "BMW"]; // Not allowed
    }
}

{
  console.log("1\n\n\n\n---------------------------------\n");
  var cars = ["Volvo", "BMW"]; // Allowed
  var cars = ["Toyota", "BMW"]; // Allowed
  cars = ["Volvo", "Saab"]; // Allowed
}
{
  console.log("3\n\n\n\n---------------------------------\n");

  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"]; // Not allowed
  cars = ["Volvo", "BMW"]; // Not allowed

  {
    const cars = ["Volvo", "BMW"]; // Allowed
    const cars = ["Volvo", "BMW"]; // Not allowed
    var cars = ["Volvo", "BMW"]; // Not allowed
    cars = ["Volvo", "BMW"]; // Not allowed
  }
}
{
  console.log("4\n\n\n\n---------------------------------\n");
  const cars = ["Volvo", "BMW"]; // Allowed
  {
    const cars = ["Volvo", "BMW"]; // Allowed
  }
  {
    const cars = ["Volvo", "BMW"]; // Allowed
  }
}
{
    console.log("5\n\n\n\n---------------------------------\n");


}