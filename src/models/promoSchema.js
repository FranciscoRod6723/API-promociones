const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoSchema = new Schema({
    name: String,
    description: String,
    status: String,
    start_date: String,
    end_date: String,
    discont: String,
    type: String,
    dependence: String,
    rooms:[{
        type: Schema.Types.ObjectId,
        ref: 'room'
    }]
})

module.exports = mongoose.model('promo', promoSchema);