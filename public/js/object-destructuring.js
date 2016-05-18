'use strict';

let data = {
    name: 'Don',
    age: 30,
    results: ['some', 'result'],
    count: 1
};

function displayPerson({name, age}) {
    console.log(`User ${name} is ${age} years old.`);
}

displayPerson(data);

//let {name, age, results} = data;