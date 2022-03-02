# COVID-19 Dashboard

## Description
The goal of this project was to create a simple ReactJS application that displays COVID-19 case numbers in New Zealand. 

In order to achieve this, data was collected in JSON format through the [REST API](https://api.stats.govt.nz) that Stats NZ provides. You can find more about REST APIs in general [here](https://restfulapi.net).

The deployed COVID-19 Dashboard site can be accessed [here](https://jacobm184.github.io/react-app/).

## Features
This web application has two main features:
- Displays the `New Active Cases` for each day.
- Displays the total `Active cases`, total `Recovered cases`, and total `Deaths` filtered by District Health Board (DHB) .

## Known Issues
- The Stats NZ COVID-19 database is currently not updated on Saturdays and Sundays.
- The Stats NZ COVID-19 database updates around 5:00pm - 5:30pm each day, and so (depending on when you access the site) the data may not be the most up-to-date.

## Running the code locally
If you wish to run the code for this project from your local host, do the following:

- [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the repository
- Navigate to the project folder using your terminal
- Type: npm start
- Run the above command (press Enter)

Note: the above instruction assumes youhave [NodeJS](https://nodejs.org/en/) installed. If not, please donload and install it first.