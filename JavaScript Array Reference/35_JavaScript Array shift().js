{
    {// shift
        console.log("\n\n\n\n1---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits.shift());
        console.log(fruits);
    }
    {
        console.log("\n\n\n\n2---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let a = fruits.shift();
        console.log(a);
        console.log(fruits);
    }
    {
        //pop

        console.log("\n\n\n\n3-------------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let first = fruits.pop()
        console.log(first);
        console.log(fruits);
    
    }
    {
        //push
        console.log("\n\n\n\n4-------------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let a = fruits.push("Kiwi");
        console.log(a);
        console.log(fruits);

    }
    {
        console.log("\n\n\n\n5---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let a = fruits.push("Kiwi", "Lemon");
        console.log(a);
        console.log(fruits);
    }
    { // unshift
        console.log("\n\n\n\n6---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits.unshift("Lemon"));
        console.log(fruits);
        
    }
}