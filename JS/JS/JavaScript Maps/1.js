{
  // 🟨 1. Array Iteration (BEST & SIMPLEST)

  {
    console.log("\n\n\n\n1---------------------------\n");
    let arr = [10, 20, 30];
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  {
    console.log("\n\n\n\n2---------------------------\n");

    let arr = [10, 20, 30];
    for (let i of arr) {
      console.log(i);
    }
  }
  {
    console.log("\n\n\n\n3---------------------------\n");
    let arr = [10, 20, 30];
    arr.forEach(function (a) {
      console.log(a);
    });
  }

  // 🟩 2. Set Iteration (VERY CLEAN)

  {
    console.log("\n\n\n\n4---------------------------\n");
    let set = new Set([10, 20, 30]);
    for (let i of set) {
      console.log(i);
    }
  }
  {
    console.log("\n\n\n\n5---------------------------\n");
    let set = new Set([10, 20, 30]);
    set.forEach(function (value) {
      console.log(value);
    });
  }
  // 🟥 3. Map Iteration (KEY + VALUE)
  {
    console.log("\n\n\n\n6---------------------------\n");
    let map = new Map([
      ["name", "Samiran"],
      ["age", 21],
    ]);

    for ( let [key, value] of map){
        console.log(key, value);
    }
  }
  {
    console.log("\n\n\n\n7---------------------------\n");
    let map = new Map([
      ["name", "Samiran"],
      ["age", 21],
    ]);

    for(let key of map.keys()){
        console.log(key);
    }


  }
  {
    console.log("\n\n\n\n8---------------------------\n");
    let map = new Map([
      ["name", "Samiran"],
      ["age", 21],
    ]);


    for( let value of map.values()){
        console.log(value);
    }
  }

  {
    console.log("\n\n\n\n9---------------------------\n");
    let map = new Map([
        ["name", "Samiran"],
        ["age", 21],
    ])
    map.forEach(function(value, key){
        console.log(key, value);
    })
  }
// 🟦 4. Object Iteration (TRICKY ONE)
  {
    console.log("\n\n\n\n10---------------------------\n");

    let obj = {
        name: "Samiran",
        age: 21,
    }


    for ( let key in obj){
        console.log(key, obj[key]);

    }

  }
  {
    console.log("\n\n\n\n11---------------------------\n");


    let obj = {
        name: "Samiran",
        age: 21,
    }
    for ( let key of Object.keys(obj)){
        console.log(key, obj[key]);
    }
  }
  {
    console.log("\n\n\n\n12---------------------------\n");
    for ( let [key, value] of Object.entries(obj)){
        console.log(key, value);
    }
  }
}
