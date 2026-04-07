{
    {
        console.log("\n\n\n\n1---------------------------");
        const set = new Set(["Apple", "Banana", "Cherry"]);
        for (const value of set) {
            console.log(value);
        }
    }{
        console.log("\n\n\n\n2---------------------------");
        const set = new Set(["First", "Second", "Third"]);
        const arr = [...set];
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);
        console.log(set.size);
        console.log(set);
    }
}
