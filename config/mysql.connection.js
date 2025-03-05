import { Sequelize } from "sequelize"
import dotenv from "dotenv"
import logger from "./logger.js"

dotenv.config()

const mySQLConnect = () => new Sequelize(
	process.env.MYSQL_DATABASE,
	process.env.MYSQL_USER,
	process.env.MYSQL_PASSWORD,
	{
		host: process.env.MYSQL_HOST,
		port: 3306,
		dialect: 'mysql',
		logging: false
	}
)

export default mySQLConnect
