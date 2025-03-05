#CULT OF THE READER

## SERVER SIDE

See the routes directory for more details of the routes

### Register && Login / Auth
{
	{
		"username": "mario",
		"email": "mario@email.com",
		"pwd": "test1234"
	},
	{
		"email": "mario@email.com",
		"pwd": "test1234"
	}
}

### Dashboard - User Profile

Can update fields, because when a user register to the system, we send de idUser to other table with a relation

PUT REQUEST
{
    "phoneNumber": "657894542",
    "dateOfBirth": "1995-05-15",
    "address": "Calle arriba",
    "city": "Dublin",
    "country": "Alemania",
    "postalCode": "28015"
}

---
### Review
Add reviews, needs authorization (token)

POST REQUEST
{
	{
		"bookId": "ID BOOK MONGO",
		"rating": 5,
		"comment": "Este libro es increíble, lo recomiendo totalmente."
	}
}

---
### Books

Books works well

---
## CLIENT SIDE

### Context
Token controller (login && logout)
