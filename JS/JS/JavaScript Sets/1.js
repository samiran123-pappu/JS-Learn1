{
    {
        console.log("\n\n\n\n1---------------------------");
        const set = new Set([1, 2, 3, 4, 5]);
        console.log(set);
    }{     
        console.log("\n\n\n\n2---------------------------");    
        const set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(4);
        set.add(5);
        console.log(set);
     }{
        console.log("\n\n\n\n3---------------------------");
        const set = new Set();
        const  a = "a";
        const b = "b";
        const c = "c";
        set.add(a);
        set.add(b);
        set.add(c);
        console.log(set);
     }{

        console.log("\n\n\n\n4---------------------------");
        const set = new Set();
        set.add(1);
        set.add("a");
        set.add({ name: "John", age: 30 });
        set.add([1, 2, 3]);
        console.log(set);
        console.log(typeof set);
        console.log(set instanceof Set);
     }{
        console.log("\n\n\n\n5---------------------------");
        const set = new Set([1, 2, 3, 4, 5]);
        let a = "";
        for(let x of set ){
            a += x + "\n";
        }
        console.log(a);
     }     
}