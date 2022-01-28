class Tree{
    constructor(name){
        this.name = name
        this.parent = null
        this.children = []
    }

    add(name){
        const newNode = new Tree(name)
        newNode.parent = this
        this.children.push(newNode)
        return newNode
    }   
}

export default Tree