
# Players Agent


Players Agent is a legal representative for professional soccer figures such as athletes and coaches. We handle contract negotiations when a particular company considers their client for an endorsement deal. Players Agent is also in charge of recruiting new talent and managing marketing and promotion.


## Technologies

The following techniques were used in the making of the website:

* Javascript
  * Express js
  * React js
  * Node js
  * MongoDB
* HTML
* CSS

## Installation

* You will need to install the following packages:
  * dotenv
  * express
  * express-react-views
  * method-override
  * mongoose
  * react
  * react-dom
* You will need to make an .env file and put the Port and MongoDB connection string 

## Routes

| Method | URL                   | Description                                   |
| ------ | --------------------- | --------------------------------------------- |
| GET    | /players              | Get all players                               |
| GET    | /players/new          | Get a form to create a new player             |
| DELETE | /players/:id          | Delete a single player by id                  |
| Patch  | /players/:id          | Update the availablity in a single player     |
| PUT    | /players/:id          | Update a single player                        |
| POST   | /players              | Create a new player                           |
| GET    | /players/:id/edit     | Get edit form to edit player by id            |
| GET    | /players/:id          | Get a player by id                            |

## Link to the Game

[Link to Player's Agent](https://enthusiastic-frog-rugby-shirt.cyclic.app/)
