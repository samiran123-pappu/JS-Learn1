{
    {
        console.log("\n\n\n\n1---------------------------");
        const numbers = [1, 2, 3, 4];
       let sum =numbers.reduce(getSum, 0);


        function getSum(total, num){
            return total + Math.round(num);
        }
        console.log(sum);
        console.log(numbers);
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = [175, 50, 25];


        function myFunc(total, sum){
            return total - sum;
        }
        console.log(numbers.reduce(myFunc));
        console.log(numbers);
    
    }
}