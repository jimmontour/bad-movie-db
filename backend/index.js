import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'
import movieRoutes from './routes/movieRoutes.js'

const app = express()

dotenv.config();

// Database
mongoose.connect(process.env.DATABASE_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, console.log('you are connected to MongoDB!'))

// Routes
app.use("/movies", movieRoutes);

// Middlewares
app.use(morgan('common'))
app.use(helmet())
app.use(cors({
   origin: process.env.CORS_ORIGIN
}))

const PORT = process.env.PORT || 1337;
app.listen(PORT, console.log(`Listening on port ${PORT}`))
