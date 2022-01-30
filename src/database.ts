import mongoose from 'mongoose';

import { mongodb } from './keys'


//const { MongoClient } = require("mongodb");

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(db => console.log('Db is connected'))
  .catch(err => console.log(err))  