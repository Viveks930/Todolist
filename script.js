// Select elements
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const div = document.querySelector('.task');

// Create and append the ul element immediately
const ul = document.createElement('ul');
ul.className = "list";
div.appendChild(ul);

// Add task on Enter key press or button click
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && input.value != '') {
        add();
    }
});

btn.addEventListener('click', () => {
    if (input.value == '') {
        alert('Enter a task to add');
    } else {
        add();
    }
});

// Function to add a new task
function add() {
    let task = input.value;
    ul.innerHTML += `
        <li class="items">${task}<img src="checked.png" alt="" class="checked"><img src="remove.png" alt="" class="remove"></li>
    `;
    localStorage.setItem('key', ul.innerHTML);
    input.value = ``;
}

// Populate the list from localStorage on page load
function onreload() {
    let savedTasks = localStorage.getItem('key');
    if (savedTasks) {
        ul.innerHTML = savedTasks;
    }
}
onreload();

// Event listener to handle task completion and removal
body.addEventListener('click', (e) => {
    if (e.target.parentElement.tagName == 'LI' && e.target.className == 'remove') {
        e.target.parentElement.remove();
        localStorage.setItem('key', ul.innerHTML);
    } else if (e.target.parentElement.tagName == 'LI' && e.target.className == 'checked') {
        e.target.parentElement.style.backgroundColor = 'green';
    }
});
