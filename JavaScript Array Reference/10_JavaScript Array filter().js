{
  {
    console.log("\n\n\n\n1---------------------------");
    const ages = [32, 33, 16, 40];
    const result = ages.filter(checkAdult);

    function checkAdult(age) {
      return age >= 18;
    }

    console.log(result);
  }
  {
    console.log("\n\n\n\n2---------------------------");
    const ages = [32, 33, 16, 40];

    // 1. This is our "thisArg" object
    const filterSettings = {
      minimum: 18,
    };

    // 2. The function uses 'this' to access the object's property
    function checkAdult(age) {
      // 'this' will refer to 'filterSettings' because we pass it below
      return age >= this.minimum;
    }

    // 3. We pass the function AND the object (thisArg)
    const result = ages.filter(checkAdult, filterSettings);

    console.log(result); // [32, 33, 40]
  }{

    console.log("\n\n\n\n3---------------------------");
    const ages = [32, 33, 16, 40];

    const filterSettings = {
      minimum: 18,
    }

    function checkAdult(age){
      return age >= this.minimum;
    }

    const result = ages.filter(checkAdult, filterSettings);

    console.log(result);
  }
}
