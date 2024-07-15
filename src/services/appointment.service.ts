const BASE_URL = "http://localhost:27017";

interface IAppointmentData {
    client: string,
    doctor: string,
    date: string
}

interface IResponseAppointmentData extends IAppointmentData {
    active: boolean,
    __v: number,
    _id: string
}

export interface IResponseData {
    success: boolean,
    message: string,
    data: IResponseAppointmentData,
}

export const createAppointment = async (appointmentData: IAppointmentData, token: string): Promise<IResponseData> => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(appointmentData),
    };

    console.log(appointmentData, token)
    try {

        const response = await fetch(`${BASE_URL}/appointments`, options)
        const data: IResponseData = await response.json()
        return data

    } catch (error) {
        console.log(error, 'error al crear la cita')
        return error as IResponseData
    }
}

export const getMyAppointments = async (token: string) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    };

    try {

        const response = await fetch(`${BASE_URL}/appointments`, options)
        const data = await response.json()
        console.log(data)
        return data

    } catch (error) {
        console.log(error, 'error al traer las cita')
    }
}

export const updateAppointmentById = async (data: any, token: string) => {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
    };

    console.log(data, token)
    try {

        const response = await fetch(`${BASE_URL}/appointments`, options)
        const data: IResponseData = await response.json()
        return data

    } catch (error) {
        console.log(error, 'error al crear la cita')
        return error as IResponseData
    }
}