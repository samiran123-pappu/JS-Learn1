{
  {
    console.log("\n\n\n\n1---------------------------");
    const ages = [3, 19, 10, 18, 20];
    const result = ages.find(checkAdult);
    function checkAdult(age) {
      return age >= 18;
    }
    console.log(result);
    console.log("original array: " + ages);
  }
  {
    console.log("\n\n\n\n2---------------------------");
    const users = [
      { name: "Alice", deptId: 101 },
      { name: "Bob", deptId: 102 },
      { name: "Charlie", deptId: 103 },
    ];

    // This is our thisArg object
    const searchCriteria = {
      targetDept: 102,
    };

    // The predicate function
    function findByDept(user) {
      // 'this' refers to 'searchCriteria'
      return user.deptId === this.targetDept;
    }

    // We pass 'searchCriteria' as the second argument (thisArg)
    const foundUser = users.find(findByDept, searchCriteria);

    console.log(foundUser); // { name: "Bob", deptId: 102 }
  }{
    console.log("\n\n\n\n3---------------------------");
    const users = [
        { name : "Alice", deptId: 101},
        { name : "Bob", deptId: 102},
        { name : "Charlie", deptId: 103}
    ];
    const searchCriteria = {
        targetDept: 102

    }

    function findByDept(user){
        return user.deptId === this.targetDept;
    }

    const foundUser = users.find(findByDept, searchCriteria);

    console.log(foundUser);
    
    

  }
}
