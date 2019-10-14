// Store tasks in local storage
            var taskArray = [];
            
            localStorage.setItem('tasks', JSON.stringify(taskArray));
            var taskList = JSON.parse(localStorage.getItem('tasks'));
            
            // Detect enter in input
            document.getElementById("userInput").addEventListener("keypress", handleEnter);
            
            // List area
            var listArea = document.getElementById("listArea");
            
            // Detect button click
            listArea.addEventListener("click", handleClick);
            
            // Generate random number for task id
            function randomNumber () {
                var randomNumber = Math.floor(Math.random() * 9000) + 1000;
                return randomNumber;
            }
            
            // Add task to task list
            function addTask() {
                
                // Get user input
                var userInput = document.getElementById("userInput").value;
                
                
                
                // Create new div, add id, add class, add input
                var newTask = document.createElement("div");
                newTask.className = 'taskDiv';
                
                // Add item to list
                listArea.appendChild(newTask);
                
                // Clear input after enter
                document.getElementById("userInput").value = "";
                
                // Add text button
                var textButton = document.createElement('button');
                textButton.className = "listItem task textButton"
                textButton.id = "task" + randomNumber();
                textButton.appendChild(document.createTextNode(userInput));
                newTask.appendChild(textButton);
                
                // Add delete button
                var deleteButton = document.createElement('button');
                deleteButton.className = "deleteTask deleteButton"
                deleteButton.appendChild(document.createTextNode("X"));
                newTask.appendChild(deleteButton);
            }
            
            // Add tasks on enter
            function handleEnter(e) {
                if (e.keyCode == 13) {
                    
                    // Add task to local storage
                    taskArray.push(userInput);
                    localStorage.setItem('tasks', JSON.stringify(taskArray));
                    addTask();
                    
                }
            }
            
            // Delete tasks
            function handleClick(e){
                if (e.target.classList.contains("deleteTask")) {
                    var item = e.target.parentElement;
                    listArea.removeChild(item);
                }
                
                if (e.target.classList.contains("listItem")) {
                    var id = e.target.id;
                    var task = document.getElementById(id);
                    task.classList.add("strike");
                }
                
            }