let mainContainer = document.getElementById("container");

function addText() {
    let inputText = document.getElementById("addInput");
    let inputValue = inputText.value;
    let initialText = document.createElement("p");
    initialText.innerText = inputValue;
    mainContainer.appendChild(initialText);
    inputText.value = "";

    let newDiv = document.createElement("div");
    mainContainer.appendChild(newDiv);

    let removeEl = document.createElement("button");
    removeEl.innerText = "❌";
    newDiv.appendChild(removeEl);
    removeEl.classList.add("deleteButton");
    removeEl.addEventListener("click",function(){
        initialText.remove();
    })

    let completeEl = document.createElement("button");
    completeEl.innerText = "✔";
    newDiv.appendChild(completeEl);
    completeEl.classList.add("completeButton");
    completeEl.addEventListener("click",function(){
        if(initialText.classList.contains("complete")) {
            initialText.classList.remove("complete");
        }
        else {
            initialText.classList.add("complete");
        }
    })

    let editEl = document.createElement("button");
    editEl.innerText = "✏";
    newDiv.appendChild(editEl);
    editEl.classList.add("editButton");
    editEl.addEventListener("click",function(){
        let newText = document.createElement("input");
        newText.value = initialText.innerText;
         newDiv.appendChild(newText);
        initialText.remove();

        newText.addEventListener("keypress",function(e){
            if(e.key == "Enter") {
                let updatedText = document.createElement("p");
                updatedText.innerHTML = newText.value;
                newDiv.appendChild(updatedText);
                newText.remove();
            }
        })
        
    })
   
}