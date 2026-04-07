{
    {
        console.log("\n\n\n\n1---------------------------");
        const ages = [3, 10, 18, 20];
        const result = ages.findIndex(checkAge);
        function checkAge(age){
            return age > 18;
        }
        console.log(result);
    }
}