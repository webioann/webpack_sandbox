// import './template.html';
import './styles.scss';

type nameList = 'John' | 'Ioann' | 'Lucifer';

type Person = {
    name: nameList;
    age: number;
};
let person: Person = {
    name: 'John',
    age: 30,
};

console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);

const newDiv = document.createElement('div');
newDiv.textContent = `Hello, my name is ${person.name} and I am ${person.age} years old.`;
newDiv.className = 'new-div';
document.body.appendChild(newDiv);
