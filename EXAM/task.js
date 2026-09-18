let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// ADD TASK
function addTask() {

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("duedate").value;
    let priority = document.getElementById("priority").value;

    if (title === "") {
        alert("Please enter task title");
        return;
    }

    if (dueDate === "") {
        alert("Please select due date");
        return;
    }

    let task = {
        id: Date.now(),
        title: title,
        description: description,
        duedate: dueDate,
        priority: priority
    };

    tasks.push(task);

    saveTasks();
    displayTasks();
    clearForm();
}


// DISPLAY TASKS
function displayTasks(taskArray = tasks) {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    if (taskArray.length === 0) {
        taskList.innerHTML = "<p>Task not Found</p>";
        return;
    }

    taskArray.forEach(function (task) {

        let div = document.createElement("div");

        div.className = "task-card";

        div.innerHTML = `
            <h3>${task.title}</h3>

            <p>Description: ${task.description}</p>

            <p>Due Date: ${task.duedate}</p>

            <p>Priority: <b>${task.priority}</b></p>

            <button onclick="editTask(${task.id})">
                Edit
            </button>

            <button onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

        taskList.appendChild(div);
    });
}


// SAVE TASKS
function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// EDIT TASK
function editTask(id) {

    let task = tasks.find(function (task) {

        return task.id === id;

    });

    if (!task) {
        return;
    }

    document.getElementById("taskid").value = task.id;

    document.getElementById("title").value = task.title;

    document.getElementById("description").value = task.description;

    document.getElementById("duedate").value = task.duedate;

    document.getElementById("priority").value = task.priority;

    document.getElementById("summitbtn").innerText = "Update Task";
}


// UPDATE TASK
function updateTask() {

    let id = Number(
        document.getElementById("taskid").value
    );

    let title =
        document.getElementById("title").value

    let description =
        document.getElementById("description").value;

    let dueDate =
        document.getElementById("duedate").value;

    let priority =
        document.getElementById("priority").value;


    if (title === "") {
        alert("Please enter title");
        return;
    }

    if (dueDate === "") {
        alert("Please select due date");
        return;
    }


    tasks = tasks.map(function (task) {

        if (task.id === id) {

            return {
                id: task.id,
                title: title,
                description: description,
                duedate: dueDate,
                priority: priority
            };

        }

        return task;

    });


    saveTasks();

    displayTasks();

    clearForm();
}


// DELETE TASK
function deleteTask(id) {

    let answer =
        confirm("Are you sure you want to delete?");

    if (answer === true) {

        tasks = tasks.filter(function (task) {

            return task.id !== id;

        });

        saveTasks();

        displayTasks();
    }
}


// CLEAR FORM
function clearForm() {

    document.getElementById("title").value = "";

    document.getElementById("description").value = "";

    document.getElementById("duedate").value = "";

    document.getElementById("priority").value = "low";

    document.getElementById("taskid").value = "";

    document.getElementById("summitbtn").innerText = "Add Task";
}


// SEARCH TASK
function searchTasks() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();


    let result = tasks.filter(function (task) {

        return task.title
            .toLowerCase()
            .includes(searchValue);

    });


    displayTasks(result);
}


// FILTER TASK
function filterTasks() {

    let priority =
        document.getElementById("filterPriority").value;


    if (priority === "all") {

        displayTasks(tasks);

        return;
    }


    let result = tasks.filter(function (task) {

        return task.priority === priority;

    });


    displayTasks(result);
}


// FORM SUBMIT
function submitForm(event) {

    event.preventDefault();

    let id =
        document.getElementById("taskid").value;


    if (id === "") {

        addTask();

    } else {

        updateTask();

    }
}


// DISPLAY
displayTasks();