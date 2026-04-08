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
    
    }{
        console.log("\n\n\n\n4---------------------------");
        const a = [10, 20, 30];
        const b = [40, 50, 60];
        const c = a.concat(b);
        console.log(c);
    }
}