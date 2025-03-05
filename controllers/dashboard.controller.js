import logger from "../config/logger.js"
import dashboardModel from "../models/dashboard.model.js"

export default {
	getDashboard: async (req, res) => {
		try {
			const userId = req.userId
			const info = await dashboardModel.getDashboard({userId})

			res.status(200).json(info)
		} catch(err) {
		
			logger.error('Error getting userId info:', err)
			res.status(500).json({ error: 'Something went wrong' })
		}
	},
	personalInfo: async (req, res) => {
		try {
			const userId = req.userId
			const personalInfo = req.body

			const newData = await dashboardModel.updateDashboard(userId, personalInfo)

			logger.info(`The new data is: ${newData}`)
			res.status(200).json({ message: 'Dashboard updated' })
		} catch (err) {
			logger.error('Error:', err)
			res.status(500).json({ error: 'Something went wrong' })
		}
	}
}