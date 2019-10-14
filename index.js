// Store tasks in local storage
            
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

                // Save to local storage
                var task = {
                    name: userInput
                }
                
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
                    
                    addTask();
                    
                }
            }
            
            // Mouse click functions
            function handleClick(e){
                // Detect delete button click and remove item
                if (e.target.classList.contains("deleteTask")) {
                    var deleteTask = e.target.parentElement;
                    listArea.removeChild(deleteTask);
                }
                
                //Detect task click and line through text
                if (e.target.classList.contains("listItem")) {
                    var id = e.target.id;
                    var completeTask = document.getElementById(id);
                    completeTask.classList.add("strike");
                }
                
            }