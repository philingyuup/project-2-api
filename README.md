# FridgePal API

This is the API portion of my project. Here you'll find the instructions and some details on the server App.

### How to use API
Instructions for how to use the API is listed below this README file in the **Instructions** portion.

###  Links
[Client App](https://philingyuup.github.io/project-2-client/)
[Client Repo](https://github.com/philingyuup/project-2-client)
[API App](https://mysterious-dawn-86601.herokuapp.com/)
[API Repo](https://github.com/philingyuup/project-2-api)

### Planning Story
I initially made the item and user schema to start but mongoose makes it easy to expand my schemas. I added list and updated items/users to include refs to the list. Overall the backend was not too difficult to implement because the routes are so similar and the template was pretty generous.

### ERD
![ERD](https://github.com/philingyuup/project-2-api/raw/master/pblc/ERD.jpg "FridgePal API ERD")


### Technologies Used
- mongoDB
- mongoose
- express.js
- node.js
- Passport.js
- CORS

### Unsolved Problems
- ItemShow (search by name) is accomplished using a 'POST' request to pass in a data body. (workaround)

### Future Features
- Expand item schema
- Expand list schema to allow friends

### Instructions
Below are the instructions on how to make requests to the server API. The codeblocks are the necessary additions required to make a successful API call.

#### USER CRUD

| '/sign-up' | 'POST' |
|--- | ---|
```javascript
{
 "credentials": {
   "email": <email>,
   "password": <password>,
   "password_confirmation": <password_confirmation>
 }
}
```
returns status 201 w/ user object

---

| '/sign-in' | 'POST' |
|--- | ---|
```javascript
{
  "credentials" : {
    "email": <email>,
    "password": <password>
  }
}
```
returns a status 201 and user object w/ token

---

| '/change-password' | 'PATCH' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
-data {
  "passwords": {
    "old": <oldPW>,
    "new": <newPW>
  }
}
```
returns status 204

---

| '/sign-out' | 'DELETE' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
```
returns status 204

#### ITEM CRUD

| '/items' | 'GET' |
|--- | ---|
```javascript
-header "Authorization: Bearer <Token>"
```
returns all objects

---

| '/items/name' | 'POST' |
|--- | ---|
```javascript
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
   "item": {
    "name": "'"${NAME}"'"
  }
}'
```
returns item objects with matching name

---

| '/items' | 'POST' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
-data {
  "item": {
    "name": <name>,
    "quantity": <quantity>,
    "list": <listID>
  }
}
```
returns object

---

| '/items/:id' | 'PATCH' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
-data {
  "item": {
    "name": <name>,
    "quantity": <quantity>
  }
}
```
returns 204 status

---

| '/items/:id' | 'DELETE' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
```
returns 204 status

#### LIST CRUD

| '/lists' | 'GET' |
|--- | ---|
```javascript
-header "Authorization: Bearer <Token>"
```
returns all objects

---

| '/lists/:id' | 'GET' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
```
returns one objects

---

| '/lists' | 'POST' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
-data {
  "list": {
    "name": <name>
  }
}
```
returns object

---

| '/lists/:id' | 'PATCH' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
-data {
  "list": {
    "name": <name>,
  }
}
```
returns 204 status

---

| '/lists/:id' | 'DELETE' |
|--- | ---|
```javascript
-header "Authorization: Bearer <token>"
```
returns 204 status

**NOTE**: This deletes all items associated with the list as well
