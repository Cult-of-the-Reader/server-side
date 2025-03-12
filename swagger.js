import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "2.0.0",
			description: "API for a book store",
			contact: {
				name: "MarcoApunto",
			},
		},
		servers: [
			{
				url: "http://localhost:3001",
			},
		],
		components: {
			securitySchemes: {
				jwtAuth: {
					type: "apiKey",
					in: "header",
					name: "Authorization",
					description: "JWT token without Bearer prefix"
				},
			},
			schemas: {
				Book: {
					type: "object",
					properties: {
						id: { type: "string" },
						title: { type: "string" },
						author: { type: "string" },
						price: { type: "number" },
						stock: { type: "number" },
					},
				},
				User: {
					type: "object",
					properties: {
						username: { type: "string" },
						email: { type: "string" },
						pwd: { type: "string" },
					},
				},
				Profile: {
					type: "object",
					properties: {
						phoneNumber: { type: "string" },
						dateOfBirth: { type: "string", format: "date" },
						address: { type: "string" },
						city: { type: "string" },
						country: { type: "string" },
						postalCode: { type: "string" }
					}
				},
				Review: {
					type: "object",
					properties: {
						bookId: { type: "string" },
						userId: { type: "string" },
						rating: { type: "number" },
						comment: { type: "string" },
						username: { type: "string" },
					},
				},
				CartItem: {
					type: "object",
					properties: {
						bookId: { type: "string" },
						quantity: { type: "number" },
					},
				},
			},
		},
	},
	apis: ["./routes/*.js"]
};


const specs = swaggerJSDoc(options)

export default {
	setup: (app) => {
		app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
	}
}