export interface IDecoded {
    id: number,
    email: string,
    role: string,
    key?: any
}

export interface ITokenData {
    token: string, 
    decoded: IDecoded
}

type role = "USER" | "DOCTOR" | "ADMIN"

export interface IUser {
    id: number,
    email: string,
    role: role,
}

export interface IArtist extends IUser {
    services: string[]
}

export type tokenData = null | ITokenData