import express from 'express'
import { registerUser } from '../controllers/auth.controller.js'

const userRouter = express.Router()

Router.post('/',registerUser);

export default userRouter;