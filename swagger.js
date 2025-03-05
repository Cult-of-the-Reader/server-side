import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "0.1.0",
			description: "API for managing books and review"
		},
		servers: [
			{
				url: "http://localhost:3001"
			}
		]
	},
	apis: ["./routes/*.js"],
}

const specs = swaggerJSDoc(options)

export default {
	setup: (app) => {
		app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
	}
}