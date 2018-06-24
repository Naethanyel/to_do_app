 function createInput () {
    let inputToDo = document.createElement("input");
    inputToDo.classList.add("inputToDo");
    inputToDo.type = "text";
    inputToDo.value = document.getElementById("input-field").value;;
    inputToDo.readOnly = true;
    return(inputToDo);
 }

 function createEdit() {
    let editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.innerHTML = "Edit";
    return(editButton);
 }

 function createDelete() {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerHTML = "Delete"; 
    return (deleteButton);
 }

 function createContainer () {
    let toDo = document.createElement("div");
    toDo.classList.add("toDoContainer");
    toDo.append(createInput());
    toDo.append(createEdit());
    toDo.append(createDelete());
    return(toDo);
 }

// TODO create element when user hits "enter" in input field


document.querySelector('body').addEventListener('click', function(event) {

    if (event.target.id == "addButton") {
        let toDo = createContainer();
        document.getElementById("to-do-list").append(toDo); 
        document.getElementById("input-field").value = "";
    }

    if (event.target.className == "editButton") {
        event.target.parentNode.firstChild.readOnly = false;
    }

    if (event.target.className == "deleteButton") {
        let parentdiv = event.target.parentNode;
        event.target.parentNode.parentNode.removeChild(parentdiv);
    }
});



