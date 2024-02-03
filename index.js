const dateInput = document.getElementById("Form-date");
const taskInput = document.getElementById("Form-task");
const descriptionInput = document.getElementById("Form-description");
const taskList = document.getElementById("Task-List");

function addTask(e){
    if(dateInput.value == '' || taskInput.value == '' || descriptionInput.value == ''){
        alert("You must write something!");
    }
    else{
        try {
            let li = document.createElement("li");
            li.innerHTML = `<div style='border:1px solid gray;padding: 9px; border-radius:9px;'><p><b>Task:</b> ${ taskInput.value}</p> <br> <p> <b>Date:</b> ${dateInput.value}</p> <br><p> <b>Description</b> : ${descriptionInput.value} </p></div>`
            taskList.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        } catch (err) {
            console.log(err)
        }
        saveData();
    }
    
}


taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();