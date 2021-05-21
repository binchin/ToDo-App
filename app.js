// SELECTORS 
const todoInput = document.querySelector('.todo-input')
const todoDescription = document.querySelector('.todo-description')
const todoButton = document.querySelector('.todo-button')
const todoBody = document.querySelector('.task-body')
const todoOngoingTask = document.querySelector('.ongoing-task')
const todoCompletedTask = document.querySelector('.completed-task')
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
    //Add todos to local storage
    
    const ongoingDescription = document.createElement('p');
    inputDescription = todoDescription.value;
    ongoingDescription.innerText = inputDescription;
    // var newItem = {
    // 'todo-input': todoInput.value,
    // 'todo-description': todoDescription.value,
    // };
    // setOngoingIntoLocal(newItem);
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
    ongoingButton.addEventListener('click', function(){
        ongoingDiv.classList.add('c-task');
        ongoingButton.innerText = "Delete";
        todoCompletedTask.appendChild(ongoingDiv)
        ongoingButton.addEventListener('click',function(){
            item = ongoingButton.parentElement
            //Deleting item
            item.remove();
            
        });
    });
}

// function setOngoingIntoLocal(todo){
//     //Check if todos exist or not
//     var todos = [];
//     // Parse the serialized data back into an aray of objects
//     todos = JSON.parse(localStorage.getItem('todos')) || [];
//     // Push the new data (whether it be an object or anything else) onto the array
//     todos.push(todo);
//     // Re-serialize the array back into a string and store it in localStorage
//     localStorage.setItem('todos', JSON.stringify(todos));
// }
// function getOngoingTodos(){
//     var todos = [];
//     // Parse the serialized data back into an aray of objects
//     todos = JSON.parse(localStorage.getItem('todos')) || [];
//     todos.forEach(function(todo){
//         const ongoingDiv = document.createElement('div');
//         //Adding class
//         ongoingDiv.classList.add('o-task');
//         //Creating div elements
//         const ongoingHeading = document.createElement('h4');
//         inputObj= todo["todo-input"]
//         inputValue = inputObj;
//         ongoingHeading.innerText = inputValue;
//         //Add todos to local storage
//         const ongoingDescription = document.createElement('p');
//         descObj= todo["todo-description"]
//         inputDescription = descObj;
//         ongoingDescription.innerText = inputDescription;
//         //Button
//         const ongoingButton = document.createElement('button');
//         ongoingButton.innerText = "Mark as Done";
//         ongoingButton.classList.add('ongoing-button');
//         //Appending child node into div
//         ongoingDiv.appendChild(ongoingHeading)
//         ongoingDiv.appendChild(ongoingDescription)
//         ongoingDiv.appendChild(ongoingButton)
//         //Appending div into its parent div
//         todoOngoingTask.appendChild(ongoingDiv)
//         //Clear todo input and description value
//         ongoingButton.addEventListener('click', function(){
//             ongoingDiv.classList.add('c-task');
//             ongoingButton.innerText = "Delete";
//             todoCompletedTask.appendChild(ongoingDiv)
//             ongoingButton.addEventListener('click',function(){
//                 item = ongoingButton.parentElement
//                 //Deleting item
//                 removeLocalTodos(todo);
//                 item.remove();
//             });
//         });
//     })
// }

// function removeLocalTodos(todo){
//     //Check if todos exist or not
//     var todos = [];
//     // Parse the serialized data back into an aray of objects
//     todos = JSON.parse(localStorage.getItem('todos')) || [];
//     console.log(todo);
//     todos.splice(todos.indexOf(todo), 1)
// }