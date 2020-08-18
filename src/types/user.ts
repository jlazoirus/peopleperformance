
export interface User {
  id: string
  name: number
}

export interface Block {
    text: string,
    state: boolean,
    comment: string,
    code:string
}

export interface Step {
    number: number,
    mainState: boolean,
    blocks: Array<Block>
}

export interface Dimension {
    name: string,
    steps: Array<Step> 
}

export interface Matriz {
    id: string
    name: number
    dimensiones: Array<Dimension> 
}

export interface UserData {
    id: string
    name: number
    matriz: Matriz 
}

export default User;