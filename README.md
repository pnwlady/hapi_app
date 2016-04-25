## Hapi-appi

This is a single resource app that uses a server side framework (Hapi), Mongoose, MongoDB to enact basic CRUD and REST to GET, PUT, PATCH and DELETE content in a database.

## Dependencies
For app
Mongoose, Mongo DB, Hapi, Httpie*

*in command line only

For testing
Mocha, Chai: request, expect, and Chai-http

####Install dependencies
```
npm install
```


## Setup

###To run:

 You need to use mongod to run this application. See documentation for installation and use [mongod documentation](https://docs.mongodb.org/manual/reference/program/mongod/)


####In the first terminal activate the mongod daemon to sync with the data directory in the project:

```
mongod --dbpath=./data
```

  <em>This starts the mongod deamon and will run in the background.</em>



####In the second terminal activate app through index:

```
node index
```

  <em>This starts up the server.</em>


####In a third terminal run your httpie REST commands to create content for your database:

```
http POST localhost:5000/api/put name=Shirley instrument=violin actor='Karen Scott'
```

  <em>This will post a data object to the database created with mongoose.connection.</em>

```
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/pf_db')
```
  <em>And will add to the name, instrument and actor properties the values assigned.</em>


## Usage

```
```
