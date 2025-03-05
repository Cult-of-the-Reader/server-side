import mongoose from "mongoose"
import dotenv from "dotenv"
import logger from "./logger.js"

dotenv.config()

const mongoConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI)
		logger.info('Conectado a Mongo')

		mongoose.connection.on('disconnected', () => {
			logger.warn('Mongo desconectado')
		})
	} catch (err) {

		logger.error(`Error de conexión a MongoDB: ${err}`)
	}
}

export default mongoConnect
