import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"

import logger from "../config/logger.js"
import modelUser from "../models/user.model.js"
import modelDashboard from "../models/dashboard.model.js"

dotenv.config()

export default {
	register: async (req, res) => {
		try {
			const { username, email, pwd } = req.body

			const checkUser = await modelUser.findOneByData({ username })
			if(checkUser.dataValues?.username === username) {
				return res.status(409).json({ error: 'Username is taken' })
			}

			const checkEmail = await modelUser.findOneByData({ email })
			if(checkEmail.dataValues?.email === email) {
				return res.status(409).json({ error: 'Email already registered' })
			}

			const hashedPwd = await bcrypt.hash(pwd, parseInt(process.env.SALT))
			const user = await modelUser.createOne({
				username,
				email,
				pwd: hashedPwd
			})

			// EN EL REGISTER SE INSERTARÁ EL USERID A LA TABLA DASHBOARD🤯
			if(user) {
				const getId = {
					UserId: user.dataValues?.id,
					user: user.dataValues?.username,
					email: user.dataValues?.email
				}
				logger.debug(`Passing data ${JSON.stringify(getId)} to dashboard table`)
				modelDashboard.createData( getId )
			}

			logger.info(`User ${user.username} registered successfully`)
			res.status(201).json({ message: 'User registered successfully' })
		} catch (err) {

			logger.error('Error registering user:', err)
			res.status(500).json({ error: 'Something went wrong' })
		}
	},

	login: async (req, res) => {
		try {
			const { email, pwd } = req.body
			const user = await modelUser.findOneByData({ email })

			if (!user) {
				return res.status(404).json({ error: 'User not registered' })
			}

			const isMatch = await bcrypt.compare(pwd, user.pwd)

			if (!isMatch) {
				return res.status(401).json({ error: 'Wrong password' })
			}

			const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

			logger.info(`User ${user.username} logged in successfully`)
			res.status(200).json({
				message: 'Login successful',
				token
			})
		} catch (err) {

			logger.error('Error logging in:', err)
			res.status(500).json({ error: 'Something went wrong' })
		}
	}
}