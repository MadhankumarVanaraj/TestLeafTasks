// Global variable
var name = "GlobalName";

function shadowingWithVar() {
    // Shadows the global variable using var
    var name = "LocalVarName";
    console.log("Inside function (var): " + name); // LocalVarName
}

function shadowingWithLet() {
    // Shadows the global variable using let
    let name = "LocalLetName";
    console.log("Inside function (let): " + name); // LocalLetName
}

// Calling the functions
shadowingWithVar();
shadowingWithLet();

// Accessing global variable outside functions
console.log("Outside function (Global): " + name); // GlobalName
