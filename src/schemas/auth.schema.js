import z from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: "Nombre De Usario es requerido",
    }),
    email: z.string({
        required_error: "Email es requerido",
    }).email({
        message: "Email Invalido",
    }),
    password:z.string({
        required_error: "Contraseña es requerida",
    }).min(6, {
        message: "La contraseña debe tener minimo 6 caracateres",
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email es requerido",
    }).email({
        message: "Email Invalido",
    }),
    password:z.string({
        required_error: "Contraseña es requerida",
    }).min(6, {
        message: "La contraseña debe tener minimo 6 caracateres",
    }),
})