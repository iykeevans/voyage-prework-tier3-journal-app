# Digital Journal
Digital journal is an application or users to display their notes.

## Prerequisites
To run this application, you should have the following:
- Node
- NPM/Yarn (NPM comes with Node)

Set enviroment variables
- MONGODB_URI // - This is the mongodb uri
- SECRET // - This is the JWT SECRET KEY

## Installation
Follow the instructions to have the app up and run:
- clone the repo: RUN THE COMMAND
```shell
>> git clone https://github.com/iykeevans/voyage-prework-tier3-journal-app.git
```
- Install the production dependencies: RUN THE COMMAND
```shell
>> npm i
```

- Start the app: RUN THE COMMAND
```shell
>> npm start
```
- You should use ```localhost:5000``` as your base url

## Features

* User can sign up.
* User can login.
* User can create a journal entry.
* User can delete a journal entry.
* User can edit a journal entry.
* User can view a specific journal entry.
* User can view all journal entries.

## Running the test
To run the test USE the following command
```shell
>> npm test
```
#### What does this test covers?
The test covers all the endpoints and requests sent to them.

## Deployments
This application was deployed to the following:
- [Heroku](https://chingu-journal-app.herokuapp.com) : For APP.

## API Endpoints
| METHOD   | DESCRIPTION                                  | ENDPOINTS                 
| ---------|----------------------------------------------| ------------------------------------------------|
| POST     | User's Sign up                               | `/api/v1/auth/signup`                           |
| POST     | User's Sign in                               | `/api/v1/auth/signin`                           |
| POST     | Users can create a journal entry             | `/api/v1/journals`                              |
| PATCH    | User's can edit journal entry                | `/api/v1/journals/<id>`                         |
| DELETE   | User's can delete a journal entry            | `/api/v1/journals/<id>`                         |
| GET      | User's can view a journal entry              | `/api/v1/journals`                              |
| GET      | User's can view a specific journal entry     | `/api/v1/journals/<id>`                         |


## Author
Ezeani Ikenna
