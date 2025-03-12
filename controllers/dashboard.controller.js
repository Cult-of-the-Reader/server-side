import logger from "../config/logger.js"
import dashboardModel from "../models/dashboard.model.js"

export default {
	/**
		 * Gets the dashboard information of a user.
		 * @param {Object} req - The HTTP request object.
		 * @param {string} req.userId - User ID (added by authentication middleware).
		 * @param {Object} res - The HTTP response object.
		 * @returns {Object} JSON response with dashboard information or error message.
		 */
	getDashboard: async (req, res) => {
		try {
			const userId = req.userId
			const info = await dashboardModel.getDashboard({ userId })

			res.status(200).json(info)
		} catch (err) {

			logger.error('Error getting userId info:', err)
			res.status(500).json({ error: 'Something went wrong' })
		}
	},

	/**
		 * Updates / add personal information in the user's dashboard.
		 * @param {Object} req - The HTTP request object.
		 * @param {string} req.userId - User ID (added by authentication middleware).
		 * @param {Object} req.body - Request body with personal information.
		 * @param {Object} res - The HTTP response object.
		 * @returns {Object} JSON response with confirmation message or error.
		 */
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