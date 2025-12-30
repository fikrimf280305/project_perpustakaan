import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/userRoutes.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use('/api/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})
