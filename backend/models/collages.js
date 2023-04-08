const mongoose = require('mongoose');

const collagesSchema = new mongoose.Schema({
    collagename: String,
    rating: String,
    city: String,
    state: String,
    collegetype: String,
    averagefees: String,
});

module.exports = mongoose.model('collages', collagesSchema);
