let myArray = ["AA","BB","CC"];
myArray = myArray.map((str) => ({ uri: str }));
console.log(myArray)
console.log(typeof myArray)