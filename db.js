const { MongoClient, ObjectId } = require('mongodb')
require('dotenv').config()
const db_username = process.env.DB_USERNAME 
const db_password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const database = process.env.DB_NAME
const port = process.env.DB_PORT
const connectionUrl = `mongodb://${db_username}:${db_password}@${host}:${port}`


let db

const init = () => 
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(database)
  })

const insertItem = (item) => {
  const collection = db.collection('items')
  return collection.insertOne(item)
}

const getItems = () => {
  const collection = db.collection('items')
  return collection.find({}).toArray()
}

const updateQuantity = (id, quantity) => {
  const collection = db.collection('items')
  return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } })
}

module.exports = { init, insertItem, getItems, updateQuantity }
