document.getElementById("userInput").addEventListener("keypress", handleEnter);

var listArea = document.getElementById("listArea");
var userInput = document.getElementById("userInput").value;

listArea.addEventListener("click", completeButtonClick);

listArea.addEventListener("click", deleteButtonClick);

function randomNumberGenerator() {
    return Math.floor(Math.random() * 9000) + 1000;
}

function addText(userInput, newTask) {
  var textButton = document.createElement("button");
  textButton.className = "listItem task textButton";
  textButton.id = "task" + randomNumberGenerator();
  textButton.appendChild(document.createTextNode(userInput));
  newTask.appendChild(textButton);
}

function addDelete(newTask) {
  var deleteButton = document.createElement("button");
  deleteButton.className = "deleteTask deleteButton";
  deleteButton.appendChild(document.createTextNode("X"));
  newTask.appendChild(deleteButton);
}

function addTask() {
    
  var userInput = document.getElementById("userInput").value;

  var task = {
    name: userInput
  };

  if (localStorage.getItem("tasks") === null) {
    var tasks = [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    // Get tasks from local storage
    var tasks = JSON.parse(localStorage.getItem("tasks"));

    // Add new task
    tasks.push(task);

    // Save to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Create new div, add id, add class, add input
  var newTask = document.createElement("div");
  newTask.className = "taskDiv";

  // Add item to list
  listArea.appendChild(newTask);

  // Clear input after enter
  document.getElementById("userInput").value = "";

  addText(userInput, newTask);

  addDelete(newTask);
}

function handleEnter(e) {
  if (e.keyCode == 13) {
    addTask();
  }
}

function deleteButtonClick(e) {
  // Detect delete button click and remove item
  if (e.target.classList.contains("deleteTask")) {
    var deleteTask = e.target.parentElement;
    listArea.removeChild(deleteTask);
  }
}

function completeButtonClick(e) {
    if (e.target.classList.contains("listItem")) {
        var id = e.target.id;
        var completeTask = document.getElementById(id);
        completeTask.classList.add("strike");
      }
}
