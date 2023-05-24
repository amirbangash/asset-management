import { toast } from "react-toastify"

const defaultOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export const successToast = (message, options) => {
    toast.success(message, {
        ...defaultOptions,
        ...options,
    })
}

export const errorToast = (message, options) => {
    toast.error(message, {
        ...defaultOptions,
        ...options,
    })
}
