{
    {
        console.log("\n\n\n\n1---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let list = fruits.entries();
        console.log(list);
        let text = " ";
        for (let x of list) {
            text  += x + " ";
        }
        console.log(text);
        console.log("orginal array:",fruits);
    }{
        console.log("\n\n\n\n2---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let list = fruits.entries();
        let text = " ";
        for( let x of list){
            text += x + " ";
        }
        console.log(text);
        console.log("orginal array:",fruits);
    }{
        console.log("\n\n\n\n3---------------------------");
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let text = " ";
        for(let x of fruits.entries()){
            text += x + " ";
        }
        console.log(text);
        console.log("orginal array:",fruits);
    
    }
}