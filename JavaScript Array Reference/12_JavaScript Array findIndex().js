{
  {
    console.log("\n\n\n\n1---------------------------");
    const ages = [3, 10, 18, 20];
    const result = ages.findIndex(checkAge);
    function checkAge(age) {
      return age > 18;
    }
    console.log(result);
  }
  {
    {
      console.log("\n\n\n\n2---------------------------");
      const ages = [3, 10, 18, 20];

      // 1. Our thisArg object
      const threshold = {
        limit: 18,
      };

      // 2. The function uses 'this' to refer to the threshold object
      function checkAge(age) {
        // 'this' becomes the 'threshold' object
        return age > this.limit;
      }

      // 3. Pass the function and the thisArg object
      const result = ages.findIndex(checkAge, threshold);

      console.log(result); // Output: 3 (because ages[3] is 20, which is > 18)
    }
  }
  {
    const ages = [3, 10, 18, 20];

    // 1. Our thisArg object
    const threshold = {
      limit: 18,
    };

    // 2. The function uses 'this' to refer to the threshold object
    function checkAge(age) {
      // 'this' becomes the 'threshold' object
      return age > this.limit;
    }

    // 3. Pass the function and the thisArg object
    const result = ages.findIndex(checkAge, threshold);

    console.log(result); // Output: 3 (because ages[3] is 20, which is > 18)
  }
}
