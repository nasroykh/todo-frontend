let loginBtn = document.querySelector('#login');
let loginForm = document.querySelector('#login-form');
let logged = document.querySelector('#logged');
let logoutBtn = document.querySelector('#logout');
let toDo = document.querySelector('#to-do');
let switchBtn = document.querySelector('#flexSwitchCheckDefault');
let submitTodoBtn = document.querySelector('#submit-todo');
let todos = document.querySelector('#todos');
let todoInput = document.querySelector('#todo-input');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (email === 'user' && password === '0000' && switchBtn.checked || true) {
        logged.className = logged.className.replace('d-none', '');
        toDo.className = toDo.className.replace('d-none', '');
        loginForm.className = loginForm.className + ' d-none';
    } else {
        alert('Unable to login')
    }
})

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    loginForm.className = toDo.className.replace('d-none', '');
    logged.className = logged.className + ' d-none';
    toDo.className = toDo.className + ' d-none';
})

submitTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (todoInput.value) {
        todos.innerHTML += (`<li class="list-group-item mb-2">${todoInput.value}</li>`)
    }
    
    todoInput.value = '';
})