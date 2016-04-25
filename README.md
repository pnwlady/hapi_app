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
npm Install
```


## Setup

###To run Hapi-appi:


####In the first terminal activate the mongo daemon to sync with the data directory in the project:

```
mongod --dbpath=./data
```

  This starts the mongod deamon and will run in the background.



####In the second terminal activate app through index:

```
node index
```

  This starts up the server.


####In a third terminal run your httpie REST commands to create content for your database:

```
http POST localhost:5000/api/put name=Shirley instrument=violin actor='Karen Scott'
```

  This will post a data object to the database created with mongoose.connection

```
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/pf_db')
```
  And will add to the name, instrument and actor properties the values assigned.


## Usage

```
```
