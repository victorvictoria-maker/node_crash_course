console.log('I am going to change the world with my tech skills soon!!!!!!');

// object module
const person = require("./person");
console.log(person);


// class  module
const Person = require("./class");
const person1 = new Person("Josh", 9);
person1.greeting();
const person2 = new Person("Vee", 98);
person2.greeting();

// logger module - event emiiter
const Logger = require("./logger");
const logger = new Logger();
logger.on('message', (data) => {
    console.log('Called Listener : ', data);
});
logger.log('Hello World');
logger.log('Hi');
logger.log(`It's Vicky`);