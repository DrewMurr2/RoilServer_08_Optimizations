var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    instant: { type: Date, required: true },
    name: { type: String, required: true },
    Channels: { type: Array, required: true }
});


module.exports = mongoose.model('WitsChannels', schema);