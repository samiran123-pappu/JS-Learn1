
    // Experiment with different scopes
let globalVar = "I'm global";

function outerFunction() {
  let outerVar = "I'm in outer function";

  function innerFunction() {
    let innerVar = "I'm in inner function";

    // Try accessing different variables
    console.log("From inner:");
    console.log("- innerVar:", innerVar);
    console.log("- outerVar:", outerVar);
    console.log("- globalVar:", globalVar);
  }

  innerFunction();

  console.log("\nFrom outer:");
  console.log("- outerVar:", outerVar);
  console.log("- globalVar:", globalVar);
  // console.log("- innerVar:", innerVar); // Would cause error
}

outerFunction();

console.log("\nFrom global:");
console.log("- globalVar:", globalVar);
// console.log("- outerVar:", outerVar); // Would cause error
