const db = require('../config/connection');
const { Todos } = require('../models');
const todoSeeds = require('./todoSeeds.json');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

db.once('open', async () => {
  try {
    await Todos.counterReset('id', function(err) {
    });
    await Todos.deleteMany({});
    await Todos.create(todoSeeds);
    

} catch (err) {
    console.error(err);
    process.exit(1);
  }
  

  console.log('all done!');
  process.exit(0);
});
  

