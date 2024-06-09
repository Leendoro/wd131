// add enter keypress event listener keypress

document.getElementById('todoInput').addEventListener('keypress', addTodo)


// const addTodo = (event) => {
//     if (event.key === 'Enter') {
//       const todoItem = document.getElementById('todoInput').value;
//       if (todoItem) {
//         const todoList = document.getElementById('todoList');


//       }
//     }
// }


document.getElementById('todoInput').addEventListener('keypress', addTodo);

const addTodo = (event) => {
    if (event.key === 'Enter') {
        const todoItem = document.getElementById('todoInput').value;
        if (todoItem) {
            const todoList = document.getElementById('todoList');

            // Create a new list item
            const li = document.createElement('li');
            li.textContent = todoItem;

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            // Append the delete button to the list item
            li.appendChild(deleteButton);

            // Append the list item to the todo list
            todoList.appendChild(li);

            // Clear the input field
            document.getElementById('todoInput').value = '';
        }
    }
}
