# Dream Log Front End
## Welcome to the Dream Log App

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
  When using the dream log app a user can log and keep a record of all of their dreams. The user also has a choice to add an image that they find that reminds them of the dream or, they can add thier own drawings/artwork to the log. They can add a date so they can remeber the day it happend. They also have the option to add a brief description of they dream for reference because we all know that we usually forget our dreams within like five minutes after waking up.


### Challenges
I was having a issue with the carousel placement when trying to add it to the index page it would populate with every dream log. And once I finally got it to work but it would show on all pages instead of just the index page. So after much deliberation I decided to put it in the footer which so far has not given me any issues.