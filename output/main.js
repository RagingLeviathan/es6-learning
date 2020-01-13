'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TaskCollection = require('./TaskCollection');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

new _TaskCollection.TaskCollection(['Go to the store', 'Finish screencast', 'Eat cake']).dump();

/* /* /* /*  function fire(bool) {
    if(bool) {
        let foo = 'bar';

        console.log(foo);
    }
    else {
        console.log(foo);
    }
}

fire(false);

class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach((task, index) => console.log('task'));
    }

    prepare() {
        this.tasks.forEach(task => 
        console.log(this));
        //task.toGulp());
    }
}

class Task {
    toGulp() {
        console.log('converting to gulp');
    }
}

new TaskCollection([ 
    new Task, new Task, new Task
]).prepare();

let names = ['Taylor','Jeffrey','Adam'];

//old way
names = names.map(function(name) {
    return name + ' is cool.';
});

console.log(names);

//using new syntax
let names2 = ['Taylor','Jeffrey','Adam'];
names2 = names2.map(name => name + ' is cool.');

console.log(names2);
 

//default params

function defaultDiscountRate()
{
    return .10;
}

 function applyDiscount(cost,discount = defaultDiscountRate()) {
     return cost - (cost * discount);
 }

console.log(applyDiscount(100)); 

//rest in es6
function sum(...numbers) {
    return numbers.reduce(function(prev, current) {
        return prev + current;
    }) 
}

console.log(sum(1,2,3)); //supplying any number of arguments */

//object shorthand

/*
function getPerson() {
    let name = 'John';
    let age = 25;

    return { 
        name, 
        age,
        greet() {
            return `Hello, ${this.name}`;
        }
    }
}*/

//alert(getPerson().greet());
/*
function getData({ results, count }) {
    console.log(results, count);
}

getData({
    name: 'Karen',
    age: 32,
    results: ['foo', 'bar'],
    count: 30
});

function greet({ name, age}) {
    console.log(`Hello, ${name}. You are ${age}.`);
}

greet({
    name: 'Luke',
    age: 24
})

 */
/*
 function User(username, email) {
     this.username = username;
     this.email = email;
 }

 User.prototype.changeEmail = function(newEmail) {
     this.email = newEmail;
 };

 var user = new User('JK', 'support@lracasts.com');

 user.changeEmail('foo@example.com');

 console.dir(user);
 console.log(user);
*/

var User = function () {
    function User(username, email) {
        _classCallCheck(this, User);

        this.username = username;
        this.email = email;
    }

    _createClass(User, [{
        key: 'changeEmail',
        value: function changeEmail(newEmail) {
            this.email = newEmail;
        }
    }], [{
        key: 'register',
        value: function register(username, email) {
            return new User(username, email);
        }
    }]);

    return User;
}();

var user = User.register('JeffreyWay', 'support@laracasts.com');

console.dir(user);