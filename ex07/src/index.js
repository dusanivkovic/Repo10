//Only change code below this line 
lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar"
};
function myFunction(prop) {
    delete lion[prop];
    return lion;
};
myFunction("roar");
//Only change code above this line 
console.log(lion);
module.exportS = myFunction;