const mongoose = require('mongoose');

// Mock data needs to be merged to dev first!
// const mockData = require('./data/mockData');

// When models are finished:
// const User = require('./models/user')
// const Event = require('./models/event')
// const Match = require('./models/match')

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://process.env.MONGODB_USER:process.env.MONGODB_PASSWORD@cluster0.0rmucpd.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('Connected to mongodb atlas');
  } catch (e) {
    console.log('Connection to mongodb atlas failed', e.message);
  }
})();

const seedDb = async () => {
  try {
    await User.deleteMany({});
    await Event.deleteMany({});
    await Match.deleteMany({});
    await User.insertMany(mockData.users);
    await Event.insertMany(mockData.event);
    await Match.insertMany(mockData.match);
    console.log('Database successfully seeded!');
    mongoose.connection.close();
  } catch (e) {
    console.log('Could not seed database', e.message);
  }
};
