const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Problem 1 a <p> with red text that says “Hey I’m red!
const redContent = document.createElement('p');
redContent.textContent = "Hey I'm red!";
container.appendChild(redContent);

// Problem 2 an <h3> with blue text that says “I’m a blue h3!”
const blueHeader = document .createElement('h3');
blueHeader.textContent = "I'm a blue h3!";
container.appendChild(blueHeader);

// Problem 3 a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const div = document.createElement('div');
div.style.cssText = 'border: 1px solid black; background: pink;';
const divChildH1 = document.createElement('h1');
divChildH1.textContent = "I'm in a div";
const divChildP = document.createElement('p');
divChildP.textContent = "ME TOO!";
div.appendChild(divChildH1);
div.appendChild(divChildP);
container.appendChild(div);