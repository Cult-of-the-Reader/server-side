import express, { json, urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"

import swaggerConfig from "./swagger.js"
import logger from "./config/logger.js"

import sync from "./models/sync.model.js"
import mongoConnect from "./config/mongo.connection.js"

import authRoutes from "./routes/auth.js"
import bookRoutes from "./routes/book.js"
import reviewRoutes from "./routes/reviews.js"
import dashboardRoutes from "./routes/dashboard.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))


mongoConnect()

swaggerConfig.setup(app)

// Routes
app.use("/api/v1/", authRoutes)
app.use("/api/v1/", bookRoutes)
app.use("/api/v1/", reviewRoutes)
app.use("/api/v1/", dashboardRoutes)

const PORT = process.env.PORT

sync.syncDDBB().then(() => {
	app.listen(PORT, () => {
		logger.info(`Server is running`)
	})
})

