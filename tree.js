class Tree{
    constructor(name,parent=null,children=[]){
        this.name = name
        this.parent = parent
        this.children = children
        this.id = Math.floor( (1 + Math.random() * 0x10000)).toString(16).substring(1)
    }

    add(name){
        const child = new Tree(name)
        child.parent = this
        this.children.push(child)
        return child
    }

    getChild(id){
        const child = this.children.filter(child => child.id === id)[0]
        if(child) return child
        return false
    }

    remove(id){
        this.children.forEach((child,index) =>{
            if(child.id === id){
                this.children.splice(index,1)
            }
        } )
    }

}

export default Tree