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


// class expression
//const PersonCL = class {};

// class declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // методы будут добавлены к прототипу класса
  calcAge() {
    console.log(`${this.fullName} is ${2021 - this.birthYear} years old.`);
  }

  greet() {
    console.log(`Hey ${this.fullName}`)
  }

  get age() {
    return 2021 - this.birthYear;
  }
  
  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`)
  }

  get fullName() {
    return this._fullName
  }
}

const evgenii = new Person('Evgenii Bobkov', 1996);


const PersonProto = {
  
};



Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§
Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀


class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed+=10;
    console.log(this.speed);
  }
  
  brake() {
    this.speed-=5;
    console.log(this.speed);
  }

  get speedUS() {
    console.log(this.speed / 1.6);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarClass('ford', 120);
ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.brake()
ford.brake()
ford.accelerate()
ford.speedUS
ford.speedUS = 100
console.log(ford)

*/
/*

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




const ElectricCar = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

ElectricCar.prototype = Object.create(Car.prototype)

ElectricCar.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
}

ElectricCar.prototype.accelerate = function() {
  this.speed += 20
  this.charge -= 1
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new ElectricCar('tesla', 120, 23);
console.log(tesla)
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.charge = 100;
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()

4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§
Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

class Person {
   constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
   }

   // методы будут добавлены к прототипу класса
   calcAge() {
      console.log(`${this.fullName} is ${2021 - this.birthYear} years old.`);
   }

   greet() {
      console.log(`Hey ${this.fullName}`);
   }

   get age() {
      return 2021 - this.birthYear;
   }

   set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not full name`);
   }

   get fullName() {
      return this._fullName;
   }
}

class Student extends Person {
   constructor(fullName, birthYear, course) {
      // Всегда должно выполняться вначале конструктора!
      super(fullName, birthYear);

      this.course = course;
   }

   introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}.`);
   }
}

const martha = new Student('Martha Jones', 1992, 'Computer Science');
martha.introduce();
