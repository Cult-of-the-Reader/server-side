import { DataTypes } from "sequelize"
import mySQLConnect from "../config/mysql.connection.js"
import logger from "../config/logger.js"

const sequelize = mySQLConnect()

const Dashboard = sequelize.define(
	"Dashboard",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		user: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		phoneNumber: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		dateOfBirth: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		postalCode: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
	},
	{
		tableName: "dashboard",
		timestamps: true
	}
)


export default {
	Dashboard,
	getDashboard: async(userId) => {
		try {

			logger.info(`A user ${JSON.stringify(userId)} requested info`)

			return Dashboard.findOne({where: userId})
		} catch (err) {
			logger.error(err)
		}
	},
	createData: async (data) => {
		try {
			logger.debug(data)
			const createData = await Dashboard.create(data)

			logger.info(`A data has be create: ${JSON.stringify(createData)}`)
			return createData
		} catch (err) {

			logger.error('Error createOne:', err)
		}
	},
	updateDashboard: async (userId, data) => {
		try {
			const userDashboard = await Dashboard.findOne({ where: { userId } })

			if (userDashboard) {
				await userDashboard.update(data)

				logger.info(`Dashboard of ${JSON.stringify(userId)}, has been update with this data: ${JSON.stringify(data)}`)
			} else {
				logger.error('User ins\'t available')
			}
		} catch (err) {
			console.error('Error inserting data', err)
		}
	}
}