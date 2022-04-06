//Only change code below this line 
lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
function myFunction(prop, value) {
    lion[prop] = value;
    return lion;
};
myFunction("roar", "roar-roar");
//Only change code above this line 
console.log(lion);
module.exportS = myFunction;