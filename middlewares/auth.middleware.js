import jwt from "jsonwebtoken"
import logger from "../config/logger.js"
import dotenv from "dotenv"

dotenv.config()

export const authMiddleware = (req, res, next) => {
	const token = req.headers.authorization

	if(!token) {
		logger.error('An user tried to access to an unauthorized zone')
		return res.status(401).json({ error: 'Unauthorized' })
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid token' })
		}

		req.userId = decoded.id
		next()
	})

}
