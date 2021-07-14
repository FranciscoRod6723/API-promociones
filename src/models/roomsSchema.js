const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    idroom: String,
    discont: String,
    promo_a:{
        type: Schema.Types.ObjectId,
        ref: 'promo'
    }
})

module.exports = mongoose.model('room', roomSchema);