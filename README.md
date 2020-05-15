# Application Title: A Description

This application allows the user to do x, y, and z. Maybe here's a reason why I wanted to do this project, or
came up with this idea.

## How to use API

**USER CRUD**

| '/sign-up' | 'POST' |
```
{
 "credentials": {
   "email": <email>,
   "password": <password>,
   "password_confirmation": <password_confirmation>
 }
}
```
returns status 201 w/ user object

| '/sign-in' | 'POST' |
```
{
  "credentials" : {
    "email": <email>,
    "password": <password>
  }
}
```
returns a status 201 and user object w/ token


| '/change-password' | 'PATCH' |
```
-header "Authorization: Bearer <token>"
-data {
  "passwords": {
    "old": <oldPW>,
    "new": <newPW>
  }
}
```
returns status 204

| '/sign-out' | 'DELETE' |
```
-header "Authorization: Bearer <token>"
```
returns status 204

**ITEM CRUD**
| '/items' | 'GET' |
```
-header "Authorization: Bearer <Token>"
```
returns all objects

| '/items/:id' | 'GET' |
```
-header "Authorization: Bearer <token>"
```
returns one objects

| '/items' | 'POST' |
```
-header "Authorization: Bearer <token>"
-data {
  "item": {
    "name": <name>,
    "quantity": <quantity>
  }
}
```
returns object

| '/items/:id' | 'PATCH' |
```
-header "Authorization: Bearer <token>"
-data {
  "item": {
    "name": <name>,
    "quantity": <quantity>
  }
}
```
returns 204 status

| '/items/:id' | 'DELETE' |
```
-header "Authorization: Bearer <token>"
```
returns 204 status



## Important Links

- [Other Repo](www.link.com)
- [Deployed API](www.link.com)
- [Deployed Client](www.link.com)

## Planning Story

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ornare magna. Curabitur leo arcu, elementum in posuere vitae, rutrum eu urna. Quisque tincidunt nulla sed mi cursus, nec tristique est fermentum. Etiam lacinia id neque ut egestas. Sed consequat convallis felis nec posuere. Sed non eros sed velit viverra tincidunt. Etiam et tortor sit amet lacus volutpat dignissim. Vestibulum convallis, felis a posuere pretium, turpis enim sollicitudin neque, pretium finibus leo metus sed sapien. Praesent iaculis pharetra nunc ac rhoncus. Duis eu risus in est porttitor egestas sit amet eget metus. Maecenas iaculis auctor ullamcorper. Donec pretium dolor non nisl egestas bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper pulvinar orci interdum mattis. Ut gravida volutpat mauris, a semper risus maximus ut.

### User Stories

- As a user I want to sign in/up
- As a user I want to Create a new < resource >
- As a user I want to Read multiple < resources >
- As a user I want to Read a single < resource >
- As a user I want to Update a < resource > I own
- As a user I want to Delete a < resource > I own

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Unsolved Problems

- Still need to ....
- Would like to eventually ....

## Images

---

#### Wireframe:
![wireframe](https://lucidchart.zendesk.com/hc/article_attachments/360001080866/Facebook_Wireframe_-_New_Page.png)
