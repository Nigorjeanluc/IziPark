[![Build Status](https://travis-ci.org/Nigorjeanluc/IziPark.svg?branch=master)](https://travis-ci.org/Nigorjeanluc/IziPark)
[![Coverage Status](https://coveralls.io/repos/github/Nigorjeanluc/IziPark/badge.svg?branch=master)](https://coveralls.io/github/Nigorjeanluc/IziPark?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/f4c17c3908be957ea480/maintainability)](https://codeclimate.com/github/Nigorjeanluc/IziPark/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f4c17c3908be957ea480/test_coverage)](https://codeclimate.com/github/Nigorjeanluc/IziPark/test_coverage)

# IZI Parking
> What are we building?
Make company car parking easy and convenient for the strong workforce of savvy members of staff, by helping them to monitor the time spent and money in the parking.


### Syncing the database using sequelize migrations
#### (i) Make sure the following packages are installed

Postgres:
>npm install --save pg

Sequelize and pg-hstore:
>npm install --save sequelize pg-hstore

Sequelize CLI:
>npm install --save-dev sequelize-cli

dotenv for using database credentials from .env file:
>npm install --save dotenv

#### (ii) Run pending migrations and insert seed data

To run migrations run the following command:
>npx sequelize-cli db:migrate

To insert the seeds run the following command:
>npx sequelize-cli db:seed:all
