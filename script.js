function add() {
    let mainContainer = document.getElementById("container");
    let inputText = document.getElementById("addInput");
    let inputValue = inputText.value;
    let newElement = document.createElement("p");
    newElement.innerText = inputValue;
    mainContainer.appendChild(newElement);

    let removeElement = newElement.setAttribute("onclick", "removeText(this)");
    

}

function removeText(hi) {
    let mainContainer = document.getElementById("container");
    mainContainer.removeChild(hi);
}
