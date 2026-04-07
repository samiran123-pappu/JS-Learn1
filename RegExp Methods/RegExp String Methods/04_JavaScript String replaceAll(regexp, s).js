{
    {
        console.log("\n\n\n\n1---------------------------");
        let text = "Cats are great. Cats are friendly.";
        let result = text.replaceAll(/Cats/g, "Dogs");
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        let text = "1,1,1,1";
        console.log(text.replaceAll(/1/g, "2"));
    }
}
