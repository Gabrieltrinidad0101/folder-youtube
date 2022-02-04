const button = document.querySelector(".addFolder")
const containerFolders = document.querySelector(".containerFolders")

const folder = name =>{
    const folder = document.createElement("div")
    folder.className = "folder"
    folder.innerHTML = `<h2>${name}</h2>`

    const button = document.createElement("button")
    button.innerHTML = `<i class="fas fa-trash-alt"></i>`
    button.addEventListener("click", _=>alert(name))
    folder.appendChild(button)
    containerFolders.appendChild(folder)
}

button.addEventListener("click", _=>{
    const name = prompt("name of folder")
    if(!name) return
    folder(name)
})