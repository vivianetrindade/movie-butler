require('dotenv').config();
const { Collection, Db, MongoClient} = require('mongodb');


let client;

const connectToDatabase = async () => {
  client = new MongoClient(`${process.env.MONGO_INITDB_URI}`);
  try {
  await client.connect();

  const db = client.db(process.env.MONGO_INITDB_DATABASE);
  const favoriteMoviesCollection = db.collection(`${process.env.MONGO_INITDB_COLLECTION}`);

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteMoviesCollection.collectionName}`);
  return favoriteMoviesCollection;
  } catch (error) {
    console.log(error)
  } 
  
}

module.exports = { connectToDatabase, client }