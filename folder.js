import Tree from "./tree.js"
class Folder{
    constructor(){
        this.addFolder = document.querySelector(".addFolder")
        this.container = document.querySelector(".folders")
        this.addFolder.addEventListener("click",_=>this.makePrompt())
        this.folder = new Tree("root")
    }

    makePrompt(){
        const name = prompt("Add folder name")
        if(!name) return
        this.folder.add(name)
        this.render()
    }



    render(){
        this.container.innerHTML = ""
        const fragment = new DocumentFragment()
        this.folder.children.forEach(child=>{
            const text = document.createElement("h2")
            text.textContent = child.name
            fragment.append(text)
        })
        this.container.append(fragment)
    }
}

new Folder()