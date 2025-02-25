const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const emptylist = document.getElementsByClassName("empty-list");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let taskcnt = 0;
let completed = 0;

// Function to update task count
function updateTaskCount() {
  const total = document.querySelectorAll(".task-item").length;
  const completedCount = document.querySelectorAll(".task-item.completed").length;

  totalTasks.innerText = `Total tasks: ${total}`;
  completedTasks.innerText = `Completed: ${completedCount}`;
}

addButton.addEventListener("click", () => {
  const val = taskInput.value.trim();

  if (val === "") {
    alert("Please enter some input");
    return;
  }

  if (emptylist.length > 0) {
    emptylist[0].remove(); // Remove "No tasks yet" message if present
  }

  // Create task item (li)
  const li = document.createElement("li");
  li.classList.add("task-item");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete-checkbox");
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
    updateTaskCount();
  });

  // Task text
  const span = document.createElement("span");
  span.innerText = val;
  span.classList.add("task-text");

  // Delete button
  const delbtn = document.createElement("button");
  delbtn.style.backgroundColor="red"
  delbtn.style.color="white"
  delbtn.innerText = "Delete";
  delbtn.classList.add("delbtn");
  delbtn.addEventListener("click", () => {
    li.remove();
    updateTaskCount();
  });

  // Append elements to list item
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delbtn);

  // Append list item to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";

  // Update task count
  updateTaskCount();
});
