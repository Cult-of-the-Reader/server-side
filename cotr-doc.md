# Project: Cult Of The Reader - API REST

## End-point: Register
### Method: POST
>```
>http://localhost:3001/api/v1/register
>```
### Body (**raw**)

```json
{
    "username": "marioo",
    "email": "marioo@email.com",
    "pwd": "test1234"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login
### Method: POST
>```
>http://localhost:3001/api/v1/login
>```
### Body (**raw**)

```json
{
    "email": "mario@email.com",
    "pwd": "test1234"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: putDashboard
Needs Authorization (login) for put a review
### Method: PUT
>```
>http://localhost:3001/api/v1/profile
>```
### Headers

|Content-Type|Value|
|---|---|
|Cache-Control|no-cache|


### Headers

|Content-Type|Value|
|---|---|
|Postman-Token|<calculated when request is sent>|


### Headers

|Content-Type|Value|
|---|---|
|Content-Length|0|


### Headers

|Content-Type|Value|
|---|---|
|Host|<calculated when request is sent>|


### Headers

|Content-Type|Value|
|---|---|
|User-Agent|PostmanRuntime/7.39.1|


### Headers

|Content-Type|Value|
|---|---|
|Accept|*/*|


### Headers

|Content-Type|Value|
|---|---|
|Accept-Encoding|gzip, deflate, br|


### Headers

|Content-Type|Value|
|---|---|
|Connection|keep-alive|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQxMDQwODI4LCJleHAiOjE3NDEwNDQ0Mjh9.bnpIdnan9gCUnsxB_UudmnmqJrIRO7b4TUXlPQTkkrE|


### Body (**raw**)

```json
{
    "phoneNumber": "657894542",
    "dateOfBirth": "1995-05-15",
    "address": "Calle arriba",
    "city": "Dublin",
    "country": "Alemania",
    "postalCode": "28015"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getDashboard
Needs Authorization (login) for see the reviews
### Method: GET
>```
>http://localhost:3001/api/v1/profile
>```
### Headers

|Content-Type|Value|
|---|---|
|Cache-Control|no-cache|


### Headers

|Content-Type|Value|
|---|---|
|Postman-Token|<calculated when request is sent>|


### Headers

|Content-Type|Value|
|---|---|
|Host|<calculated when request is sent>|


### Headers

|Content-Type|Value|
|---|---|
|User-Agent|PostmanRuntime/7.39.1|


### Headers

|Content-Type|Value|
|---|---|
|Accept|*/*|


### Headers

|Content-Type|Value|
|---|---|
|Accept-Encoding|gzip, deflate, br|


### Headers

|Content-Type|Value|
|---|---|
|Connection|keep-alive|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQwOTIwMjM5LCJleHAiOjE3NDA5MjM4Mzl9.VLx3BYZADn4H-kRoOFhT3iWT4TwwDzdUSuOtW3XA1OA|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: idBook
Get a specific book for use in the front with useParam and do a page. The idea is useParam (to study that option)
### Method: GET
>```
>http://localhost:3001/api/v1/book/67945004455b516fa53ef3df
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: newReview
Needs Authorization (login)
### Method: POST
>```
>http://localhost:3001/api/v1/reviews
>```
### Headers

|Content-Type|Value|
|---|---|
|Cache-Control|no-cache|


### Headers

|Content-Type|Value|
|---|---|
|Postman-Token|<calculated when request is sent>|


### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Content-Length|<calculated when request is sent>|


### Headers

|Content-Type|Value|
|---|---|
|Host|<calculated when request is sent>|


### Headers

|Content-Type|Value|
|---|---|
|User-Agent|PostmanRuntime/7.39.1|


### Headers

|Content-Type|Value|
|---|---|
|Accept|*/*|


### Headers

|Content-Type|Value|
|---|---|
|Accept-Encoding|gzip, deflate, br|


### Headers

|Content-Type|Value|
|---|---|
|Connection|keep-alive|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQxMDAyOTM5LCJleHAiOjE3NDEwMDY1Mzl9.oS14g4HH2GCFbUUc1SIvsDu_U7BYEKOEPpKmde7W0Ww|


### Body (**raw**)

```json
{
    "bookId": "67945004455b516fa53ef3df",
    "rating": 4,
    "comment": "Este libro es increíble, súper belico"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: seeBookREview
Every book page will have a specific review.
### Method: GET
>```
>http://localhost:3001/api/v1/book/67945004455b516fa53ef3db/reviews
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
