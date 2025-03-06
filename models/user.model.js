import { DataTypes } from "sequelize"
import mySQLConnect from "../config/mysql.connection.js"
import logger from "../config/logger.js"

const sequelize = mySQLConnect()

const User = sequelize.define(
	"User",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true
		},
		pwd: {
			type: DataTypes.STRING(127),
			allowNull: false
		},
	},
	{
		tableName: "users",
		timestamps: true
	}
)


export default {
	User,
	createOne: async (data) => {
		try {
			const createData = await User.create(data)

			logger.info(`A data has be create: ${JSON.stringify(createData)}`)
			return createData
		} catch (err) {

			logger.error('Error createOne:', err)
		}
	},
	findOneByData: async (data) => {
		try {
			const findData = await User.findOne({ where: data })

			if(findData){

				logger.info(`Data found: ${JSON.stringify(findData)}`)
				return findData
			} else {

				return false
			}
		} catch (err) {

			logger.error('Error findOneByData:', err)
		}
	},
	findById: async (userId) => {
		try {
			const infoUser = await User.findByPk(userId, {
				include: [Dashboard],
				attributes: ['id', 'username', 'email']
			})

			return infoUser
		} catch (err) {
			
		}
	}
}