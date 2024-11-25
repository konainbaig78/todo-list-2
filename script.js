const newTask = document.querySelector("#new-task");
const addTask = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");

function taskadding() {
  const text = newTask.value.trim(); // Get the trimmed input value

  if (!text) {
    Swal.fire("Enter task!");
    return; // Stop execution if input is empty
  }

  // Create a new task item (li)
  const li = document.createElement("li");
  li.className = "task-item";

  // Create the task text (span)
  const span = document.createElement("span");
  span.textContent = text;

  //Create a checkbox
  const checkBox=document.createElement("input")
  checkBox.type="checkbox"
  checkBox.classList="checkBox"

  // Create the delete button
  const dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  dltBtn.className = "dltBtn";

  // Add the delete functionality
  dltBtn.addEventListener("click", () => {
    taskList.removeChild(li); // Remove the task item from the list
  });

  // Append the span and delete button to the list item
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(dltBtn);

  checkBox.addEventListener(("click"),()=>{
    span.style.textDecorationLine="line-through"
  })


  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear the input field after adding the task
  newTask.value = "";
};

addTask.addEventListener(("click"), taskadding)
newTask.addEventListener(("keypress"), (e)=>{
    if(e.key==="Enter"){
        taskadding()
    }
})
