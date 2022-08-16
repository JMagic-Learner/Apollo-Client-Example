const db = require('../config/connection');
const { Todos } = require('../models');
const todoSeeds = require('./todoSeeds.json');

db.once('open', async () => {
  try {
    await Todos.deleteMany({});
    await Todos.create(todoSeeds);
   

} catch (err) {
    console.error(err);
    process.exit(1);
  }
  

  console.log('all done!');
  process.exit(0);
});
  

