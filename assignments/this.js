/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. The This key word used in the global context results in the window object being referenced, since that is the object it is in at the time.
 * 2. The implicit approach means that based on how you use the 'this' keyword the javascript engine will automatically decide how it is referenced meaning if used with a method 'this' will refer to the object that has defined that method.
 * 3. When the new keyword is used the 'this' keyword behaves in a specific way automatically based on use of the new keyword. The new keyword automatically causes it to be bound to the new constructor it is creating.
 * 4. Explicit binding of the 'this' keyword just means you as the developer pick where you want the 'this' keyword to point to, specifically what object you want it to reference.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const person = {
  firstName: 'Fred',
  lastName: 'Flinstone',
  speak(prefix) {
    console.log(`Hello, I'm ${prefix} ${this.firstName} ${this.lastName}`);
  }
};

person.speak('Mr');

// Principle 3

// code example for New Binding

function Customer(name, age, phone, tier) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.tier = tier;
  this.message = function() {
    console.log(
      `Hello, ${
        this.name
      } we here at Lambda wanted to say thank you for your service you are a ${
        this.tier
      } to us.`
    );
  };
}

const steve = new Customer(
  'GreenHornSr',
  '27😏',
  123 - 456 - 7891,
  'Top Tier TL'
);

steve.message();

// Principle 4

// code example for Explicit Binding

function Student(name, cohort) {
  this.name = name;
  this.cohort = cohort;
  this.language = function(programming) {
    console.log(
      `my name is ${
        this.name
      } and I am in the ${cohort} 22 cohort at Lambda we are learning the ${programming} language right now.`
    );
  };
}

const student1 = new Student('Randy', 'Web');
const student2 = new Student('Samir', 'UX-Design');

student1.language('Javascript');
student2.language('Scratch');

//The explicit Binding part
student1.language.call(student2);
student2.language.call(student1);
