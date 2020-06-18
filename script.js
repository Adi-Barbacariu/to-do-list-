let input = document.querySelector(".input");
input.focus();
let submit = document.querySelector(".submit");
let tasks = document.querySelector(".tasks");

let taskCounter = 0;

let deleteButtons;

submit.addEventListener("click", () => {
    taskCounter++;

    if(input.value !== ""){
        let task = document.createElement("p");
        tasks.appendChild(task);
        task.innerHTML = input.value;
        task.classList.add("task","task-"+taskCounter);
    
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML="delete"
        deleteBtn.classList.add("delete-btn", "delete-btn-"+taskCounter);
        task.appendChild(deleteBtn);
        input.focus();
        input.value = "";
    
        deleteBtn.addEventListener("click", () => {
            deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
        })
        
    }else{
        alert("empty task can't be added to the list of tasks")
    }

})

window.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        submit.focus();
        submit.classList.add("focus");
        setTimeout(() =>{
            submit.classList.remove("focus");
        }, 200)
    }
})

let deleteAll = document.querySelector(".deleteAll");

deleteAll.addEventListener("click", () => {
    
    tasks.innerHTML = "";
    deleteAll.classList.add("focus");
    setTimeout(() =>{
        deleteAll.classList.remove("focus");
    }, 200)

})





