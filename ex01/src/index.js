//Only change code below this line 
myPet = {
    species: "dog",
    name: "bob",
    legs: 4,
    friends: ("cat", "mouse")
};
function myFunction(myObj){
    return myObj;
};

//Only change code above this line 
console.log(myFunction(myPet));
module.exportS ={
    myPet, 
    myFunction
};