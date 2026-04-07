{
    {
        console.log("\n\n\n\n1 ---------------------------");
        const numbers = [175, 50, 25];

        function myFunc(total, sum){
            return total - sum;
        }
        console.log(numbers.reduce(myFunc));
        console.log(numbers);
    
    }
    {
        console.log("\n\n\n\n2---------------------------");
        const a1 = [1, 2, 3, 4];
        let b  = a1.reduce(a);
        console.log(b);
        function a(total, num){
            return total + Math.round(num);
        }
    
    }
}