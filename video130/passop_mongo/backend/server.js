const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
dotenv.config()


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';
const app = express()
const port = 3000

await client.connect();


app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})