import express, { json, urlencoded } from "express"
import path from 'path';
import { fileURLToPath } from 'url';
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
import cartItemRoutes from "./routes/cartItem.js"

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))


mongoConnect()

// Swagger implement
swaggerConfig.setup(app)

// Routes
app.use("/api/v4/", authRoutes)
app.use("/api/v4/", bookRoutes)
app.use("/api/v4/", reviewRoutes)
app.use("/api/v4/", dashboardRoutes)
app.use("/api/v4/", cartItemRoutes)

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

sync.syncDDBB().then(() => {
	app.listen(PORT, () => {
		logger.info(`Server is running`)
	})
})

