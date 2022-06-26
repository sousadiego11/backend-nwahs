import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { environments } from './utils/environments.js'
import { userRouter } from './users/router.js'
const { PORT } = environments

const app = express()

app.use(cors())
app.use(userRouter)
app.listen(PORT, () => console.log(`App running at port: ${PORT}`))
