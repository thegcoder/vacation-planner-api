const mongoose = require('./connection.js');

// Destinations schema
const DestinationSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    description: String,
    imageUrl: {
        type: String,
        default: 'https://place-hold.it/300x500'
    },
    type: {
        type: String,
        default: 'destination'
    }
});

// User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    imageUrl: {
        type: String,
        default: 'https://place-hold.it/300x500'
    },
    destinations: [],
    type: {
        type: String,
        default: 'user'
    }
});

// Destinations collection
const Destinations = mongoose.model('Destinations', DestinationSchema);

// Users collection
const Users = mongoose.model('Users', UserSchema);

module.exports = {
  Destinations,
  Users
}
