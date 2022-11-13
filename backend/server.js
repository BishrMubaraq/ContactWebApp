const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middlewares/errorMiddleware')
const contactsRoutes = require('./routes/contactsRoutes')
const cors = require('cors')
const connectDB = require('./config/db')

connectDB()
const app = express()
app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/contacts', contactsRoutes)

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})