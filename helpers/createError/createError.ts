import errorMessages from "./errorMessages";

type TError = {
    status?: number,
    message: string,
}

const createError = (status: number, message: string = errorMessages[status]): TError => {
    const error: TError = new Error(message);
    error.status = status;
    return error;
}

export default createError;