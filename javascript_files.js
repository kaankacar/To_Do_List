let taskDOM = document.querySelector("#task")
let liveToastBtnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let ullenght = document.getElementsByTagName("li")

for (let i = 0; i < ullength.length; i++) {
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close");
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; 
}

function check() {
    this.classList.toggle("checked"); 
}

function removeButton() {
    this.parentElement.remove();  
}

function newElement() {
    let liDOM = document.createElement('li')
    listDOM.append(liDOM)
    liDOM.innerHTML = task.value
    console.log("aha")
    taskDOM.value = ""

    liDOM.onclick = check;

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;

    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = ("");
}
