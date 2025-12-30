import express from 'express'
import { validateData } from '../middleware/validationMiddleware.js'
import { userRegistrationSchema } from '../schemas/userSchemas.js'
import { registerUser } from '../handler/userHandler.js'

const userRoutes = express.Router()

userRoutes.post('/register', validateData(userRegistrationSchema), registerUser)

export default userRoutes