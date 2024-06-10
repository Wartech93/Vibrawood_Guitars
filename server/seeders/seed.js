const db = require('../config/connection');
const { Profile } = require('../models');
const cleanDB = require('./cleanDB');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles')
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
