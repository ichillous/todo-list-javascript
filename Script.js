//Create a clone of of div
function createList() {
    const list = document.querySelector("#list")
    document.addEventListener("click", createList)
    document.body.appendChild(list.cloneNode(true))
}


