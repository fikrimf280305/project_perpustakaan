import { z } from 'zod'

export const userRegistrationSchema = z.object({
    id: z.number().min(1),
    username: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    email: z.email(),
    password: z.string().min(6),
    role: z.string()
})

export const userLoginSchema = z.object({
    username: z.string(),
    password: z.string().min(6)
})
