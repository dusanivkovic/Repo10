function myFunction(myObj, checkProp) {
//Only change code below this line 
if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
};

//Only change code above this line 
}
myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song");
myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title");
myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre");
module.exportS = myFunction;