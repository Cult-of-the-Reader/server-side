import mySQLConnect from "../config/mysql.connection.js"
import userModel from "./user.model.js"
import dashboardModel from "./dashboard.model.js"
import dotenv from "dotenv"

dotenv.config()

const sequelize = mySQLConnect()

const User = userModel.User
const Dashboard = dashboardModel.Dashboard

User.hasOne(Dashboard)
Dashboard.belongsTo(User)

export default {
	syncDDBB: async () => {
		try {
			await sequelize.authenticate()
			await User.sync()
			await Dashboard.sync()

			await sequelize.sync({ alter: true })
			console.info('Model synchronization completed');
		} catch (err) {
			console.error('Unable to create table : ', err);
		}
	}
}
