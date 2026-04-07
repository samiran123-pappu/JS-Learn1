{
    {
        console.log("\n\n\n\n1---------------------------");
        const myArr = [1, 2 ,[3, [4, 5, 6], 8], 9];
        const newArr = myArr.flat(2);

        console.log(myArr);
        console.log(newArr);
    }{
        console.log("\n\n\n\n2---------------------------");

        const myArr = [1, 2 ,[3, [4, 5, 6], 8], 9];
        const newArr = myArr.flat(2);
        let text = JSON.stringify(newArr);
        console.log(myArr);
        console.log(text);
    }
}