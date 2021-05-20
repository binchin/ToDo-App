// SELECTORS 
const todoInput = document.querySelector('.todo-input')
const todoDescription = document.querySelector('.todo-description')
const todoButton = document.querySelector('.todo-button')
const todoBody = document.querySelector('.task-body')
const todoOngoingTask = document.querySelector('.ongoing-task')
// EVENT LISTENER 
todoButton.addEventListener('click', addTodo);
// FUNCTIONS 
function addTodo(e){
    //Preventing refreshing 
    e.preventDefault();
    //Creating div
    const ongoingDiv = document.createElement('div');
    //Adding class
    ongoingDiv.classList.add('o-task');
    //Creating div elements
    const ongoingHeading = document.createElement('h4');
    inputValue = todoInput.value;
    ongoingHeading.innerText = inputValue;

    const ongoingDescription = document.createElement('p');
    inputDescription = todoDescription.value;
    ongoingDescription.innerText = inputDescription;

    const ongoingButton = document.createElement('button');
    ongoingButton.innerText = "Mark as Done";
    ongoingButton.classList.add('ongoing-button');
    //Appending child node into div
    ongoingDiv.appendChild(ongoingHeading)
    ongoingDiv.appendChild(ongoingDescription)
    ongoingDiv.appendChild(ongoingButton)
    //Appending div into its parent div
    todoOngoingTask.appendChild(ongoingDiv)
    //Clear todo input and description value
    todoInput.value = "";
    todoDescription.value = "";
}