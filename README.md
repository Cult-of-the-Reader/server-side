# CULT OF THE READER

## SERVER SIDE

```
server/
├── config/
│   ├── logger.js                 # Logging configuration
│   ├── mongo.connection.js       # MongoDB connection config
│   └── mysql.connection.js       # MySQL connection config
├── controllers/
│   ├── auth.controller.js        # Authentication controller
│   ├── book.controller.js        # Book operations controller
│   ├── cartitem.controller.js    # Cart items controller
│   ├── dashboard.controller.js   # Dashboard controller
│   └── review.controller.js      # Reviews controller
├── docs/
│   ├── jest
│   └── book.model.test.js        # Jest tester for CRUD book collection
│   ├── jmeter
│   │    ├── auth_test.jmx        # Template JMeter
│   │    └── auth.csv             # Template for the JMeter auth test
│   ├── diagram_UML.png           # Simple UML Diagram
│   └── ER_DDBB.png               # Database flow
├── middlewares/
│   └── auth.middleware.js        # Authentication middleware
├── models/
│   ├── book.model.js             # Book data model
│   ├── cartitem.model.js         # Cart item data model
│   ├── dashboard.model.js        # Dashboard data model
│   ├── review.model.js           # Review data model
│   ├── sync.model.js             # Synchronization model
│   └── user.model.js             # User data model
├── mongoDbsCollection/
│   └── cultofreader.books.json   # Books collection for MongoDB
├── routes/
│   ├── auth.js                   # Authentication routes
│   ├── book.js                   # Book-related routes
│   └── cartitem.js               # Cart item routes
├── .env                          # Environment variables
├── .gitignore                    # Git ignore configuration
├── coffeconfig.md                # Configuration documentation
├── package-lock.json             # Detailed dependencies
├── package.json                  # Project configuration
├── README.md                     # Project documentation
├── server.js                     # Main server file
└── swagger.js                    # Swagger API configuration
```

## Node.js Server Documentation

### Introduction

This project is a Node.js server application that implements a RESTful API for managing books, reviews, shopping carts, and users. It uses an MVC (Model-View-Controller) architecture and connects to both MongoDB and MySQL for data storage.

### Project Structure

```
server/
├── config/               # Application configurations
├── controllers/          # Business logic and request handling
├── middlewares/          # Intermediate functions for processing requests
├── models/               # Data schema definitions
├── mongoDbsCollection/   # Data collections for MongoDB
├── routes/               # API route definitions`
```

### Main Components

#### Configuration (/config)

This folder contains files to configure different aspects of the application:

- logger.js: Sets up the logging system for debugging and monitoring.
- mongo.connection.js: Establishes the connection to the MongoDB database.
- mysql.connection.js: Establishes the connection to the MySQL database.

#### Controllers (/controllers)

Controllers handle the business logic of the application:

- auth.controller.js: Handles user authentication (login, registration).
- book.controller.js: Manages operations related to books.
- cartitem.controller.js: Controls shopping cart functionalities.
- dashboard.controller.js: Handles data for the dashboard.
- review.controller.js: Manages book reviews.

#### Middlewares (/middlewares)

- auth.middleware.js: Verifies authentication and authorization before accessing protected routes.

#### Models (/models)

Define the data structure and the CRUD in the application:

- book.model.js: Data structure for books.
- cartitem.model.js: Structure for cart items.
- dashboard.model.js: Model for dashboard data.
- review.model.js: Structure for reviews.
- sync.model.js: Model for data synchronization.
- user.model.js: Model for application users.

#### MongoDB Database (/mongoDbsCollection)

- cultofreader.books.json: Book collection in JSON format for import in MongoDB.

#### Routes (/routes)

Define the API endpoints:

- auth.js: Routes for authentication (login, registration, etc.).
- book.js: Routes for book operations (list, create, update, delete).
- cartitem.js: Routes for managing the shopping cart.
- dashboard: Routes for the personal data of an user
- reviews: Routes for the reviews of a sepcific book

#### Main Files

- server.js: Main entry point of the application.
- swagger.js: Configuration for API documentation with Swagger.
- package.json: Defines dependencies and application scripts.
- README.md: General project documentation.

#### Basic Workflow

1. The client makes a request to a specific route.
2. The server.js file receives the request and directs it to the corresponding route.
3. The files in /routes define which controller should handle each route.
3.1 If necessary, middlewares (like auth.middleware.js) verify permissions.
4. The controller processes the request, interacting with models as needed.
5. Models interact with the database (MongoDB or MySQL) and executes the specif CRUD.
6. The controller returns a response to the client.

#### Database Connection

The application uses two databases:

- MongoDB: For storing collections such as books.
- MySQL: Possibly for relational data such as users and transactions.

#### API and Documentation

The API is documented using Swagger, which makes it easier to understand and test. You can access the documentation by running the application and navigating to the Swagger route (usually /api-docs).

#### Getting Started

1. Install dependencies: Run `npm install` in the project root.
2. Configure environment variables: Review and set up the `.env` file.
3. Start the server: Run `npm run server` or the command defined in package.json.
4. Explore the API: Use the Swagger documentation to familiarize yourself with the endpoints.
5. Examine the code: Start with `server.js` and then follow the flow to routes and controllers.

#### Tips for Contributing

- Before implementing new features, understand the current flow well.
- Maintain the MVC structure to keep the code organized.
- Use existing patterns to maintain consistency.
- Document any significant changes you make.