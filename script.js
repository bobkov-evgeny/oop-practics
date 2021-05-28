'use strict';
/*
const Person = function (firstName, lastName, birthYear) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.birthYear = birthYear;
};

const bob = new Person('Evgeny', 'Bobkov', 1996);

// Prototypes
Person.prototype.calcAge = function () {
   console.log(2021 - this.birthYear);
};

bob.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(bob.species);

console.log(bob.__proto__);
console.log(bob.__proto__.__proto__.__proto__);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__ === Array.__proto__);

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h


const Car = function (make, speed) {
   this.make = make;
   this.speed = speed;
};
Car.prototype.accelerate = function () {
   this.speed += 10;
   console.log(this.speed);
};
Car.prototype.brake = function () {
   this.speed -= 5;
   console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);
car1.accelerate();
car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

console.log(car1);
*/

// class expression
//const PersonCL = class {};

// class declaration
class Person {
   constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
   }

   // методы будут добавлены к прототипу класса
   calcAge() {
      console.log(2021 - this.birthYear);
   }
}

const jessica = new Person('Jessica', 1996);
console.log(jessica);
console.log(jessica.__proto__);
