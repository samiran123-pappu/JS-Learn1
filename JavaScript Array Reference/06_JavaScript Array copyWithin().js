{
    {
        console.log("\n\n\n\n1---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.copyWithin(1, 2)
        console.log(fruits);
    }
    {
        console.log("\n\n\n\n2---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.copyWithin(2, 0, 2);
        console.log(fruits);
    }
}