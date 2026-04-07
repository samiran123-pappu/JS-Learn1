{
    {
        console.log("\n\n\n\n1---------------------------");
        let text = "hello.*+?^${}()|[]\\world";
        let result = RegExp.escape(text);
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        console.log(RegExp.escape("(test)"));
    }
}
