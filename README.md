# Dream Log BackEnd
## Welcome to the Dream Log BackEnd 

### Built With
-Masonite
-Cors
-Python

### Model/Schema/
## Dreams

title: String,  
description: String,
image: String,
date: String, 
 

### Route Table
## Dreams
| URL | Method | Action |
|-----|--------|--------|
| / | GET | Index page of all Dreams|
| /dream/:id | GET | Show page for single dream|
| /new | POST | Create A Dream Log |
| /edit| PUT | Update Dream |
| /dream/:id | DELETE | Delete selected Dream |


### User Stories
When a user is in the backend of the application the user should be able to display all the Dreams created. If a user is using Postman, Thunder Client, or Insomnia they can go to the routes listed about to create, update, or delete Dreams. If any errors occur while trying to do so double check what kind of request, you are making to the server and verify it with what you are attempting. For reference use the table above for guidance on which route to take. 

### Challenges
I was having a issue with the carousel placement when trying to add it to the index page it would populate with every dream log. And once I finally got it to work but it would show on all pages instead of just the index page. So after much deliberation I decided to put it in the footer which so far has not given me any issues.