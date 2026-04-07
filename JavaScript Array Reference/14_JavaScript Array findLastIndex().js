{
    {
        console.log("\n\n\n\n1---------------------------");
        const ages = [32, 33, 16, 40, 6, 1, 9];
        function checkAge(age){
            return age > 18; 
        }
        const result = ages.findLastIndex(checkAge);
        console.log(result);
    }
}