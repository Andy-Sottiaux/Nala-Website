// DOM elements
const rotateLeftButton = document.getElementById('rotate-left-button');
const rotateRightButton = document.getElementById('rotate-right-button');
const nalaBorder = document.getElementById('nala-border');
const nalaForm = document.getElementById('nala-form');

// global variables
let rotation = 0;

// event handlers
function toggleNala() {
    console.log('FIRING')
    const nala = document.getElementById('toggle-nala');
    toggleVisibility(nala);
}

function rotateNala(event) {
    const nala = document.getElementById('small-nala');
    rotate(nala, event);
}

function addGreet(event) {
    event.preventDefault();
    const greet = nalaForm.greet.value;
    const newGreetLi = document.createElement('li');
    const newGreetAvatar = document.createElement('div');
    newGreetAvatar.className = "avatar";
    const newGreetText = document.createElement('span');
    newGreetText.innerText = greet;
    const greets = document.getElementById('greets').getElementsByTagName('ul')[0];
    const newerGreetLi = greets.appendChild(newGreetLi);
    newerGreetLi.appendChild(newGreetAvatar);
    newerGreetLi.appendChild(newGreetText);
    nalaForm.greet.value = "";
}


// helpers
// given a DOM element, change it's visibilty style property from hidden to visible
function toggleVisibility(element) {
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible'
    } else {
        element.style.visibility = 'hidden'
    }
}

// given a DOM element and a direction, rotate the element that direction
function rotate(element, event) {
    if (event.target.id === 'rotate-left-button') {
        rotation = rotation - 45;
    } else {
        rotation = rotation + 45;
    }
    element.style.transform = 'rotate(' + rotation + 'deg)';
} 

// add event handlers when mouse events are triggered
nalaBorder.onmouseenter = toggleNala;
nalaBorder.onmouseleave = toggleNala;
rotateLeftButton.onclick = rotateNala;
rotateRightButton.onclick = rotateNala;
nalaForm.onsubmit = addGreet;