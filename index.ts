import { IArtist, IUser, tokenData } from "./types"

const token = "ey,78324ew6rfghafsdgt76wwrygh37ewif6gfyfewh"
const decoded = {
    id: 3,
    email: "email1@email.com",
    role: "user"
}

let miObjeto: tokenData = {
    token: "",
    decoded: {
        id: 5,
        email: "demian@email.com",
        role: "user",
        key: "hola yo no soy un objeto"
    }
}

// cannot read properties of undefined (reading "name")

const user: IUser = {
    id: 5,
    email: "",
    role: "USER"
}

const artist: IArtist = {
    id: 5,
    email: "",
    role: "ADMIN",
    services: ["hola"]
}