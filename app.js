//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFood(person) {
    for (let key in person){
        let value = person[key];
        if (Array.isArray(person[key])) {
            console.log(`${key}: ${person[key].join(", ")}`);
        } else if (typeof person[key] === "object") {
            for (let subKey in person[key][0]) {
              console.log(`${subKey}: ${person[key][0][subKey]}`);
            }
        } else {
       console.log(value);
        }
    }
}
favoriteFood(person3);

// Array.isArray just checks to see if the data is an array that way the loop will know how to handle the condition. the typeof checks to see what type of key is and in this case checking for an object so we can parse through the data within that as well //

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(name, age){
    this.name = name;
    this.age=age;
}
    printInfo= () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    };

    incrementAge= () => {
        this.age +=1;
    };
}
let person = new Person('William',31);
person.printInfo();
for (let indx =0; indx < 3; indx++) {
    person.incrementAge();
}
person.printInfo();

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/
const driverStandings = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)
  }
  driverStandings()

  

  
  https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
  function findAverage(array) {

    if (array.length>0 ){
    
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum)
  
    const result = sum/array.length
    
    return result;
  
    }else {
      return 0
    }
    }

    // Used .length to get the number of items in array and partialSum to add together each number in the array.
