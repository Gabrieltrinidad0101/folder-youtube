import Tree from "./tree.js"
const button = document.querySelector(".addFolder")
const backFolder = document.getElementById("backFolder")
const containerFolders = document.querySelector(".containerFolders")

let tree = new Tree("root")

const render = _=>{
    const fragment = new DocumentFragment()
    containerFolders.innerHTML = ""
    tree.children.forEach(child=>{
        const folder = folderComponent(child)  
        fragment.appendChild(folder)
    })
    containerFolders.appendChild(fragment)
}

backFolder.addEventListener("click",_=>{
    if(!tree.parent) return
    tree = tree.parent
    render()
})

const folderComponent = ({name,id})=>{
    const folder = document.createElement("div")
    folder.className = "folder"
    folder.innerHTML = `<h2>${name}</h2>`
    
    const button = document.createElement("button")
    button.innerHTML = `<i class="fas fa-trash-alt"></i>`
    button.addEventListener("click",e=>{
        folder.remove()
        tree.remove(id)
        e.stopPropagation()
    })
    
    folder.appendChild(button)
    folder.addEventListener("click", _=>{
        tree = tree.getChild(id)
        render()
    })
    return folder
    
}

const folder = name =>{
    const newFolder = folderComponent(tree.add(name))
    containerFolders.appendChild(newFolder)
}

button.addEventListener("click",_=>{
    const name = prompt("folder name")
    if(!name) return
    folder(name)
})