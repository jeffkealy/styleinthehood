var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;
var hoodSchema = new Schema({
    user_id: {
      type: ObjectId
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    date : { type : Date, default: Date.now }

    // link: {
    //     type: String
    // },
    // up_count: {
    //     type: Number,
    //     default: 0
    // },
    // down_count: {
    //     type: Number,
    //     default: 0
    // },
    // approved: {
    //     type: Boolean,
    //     default: true
    // }
});

// user model
var Hood = mongoose.model('hood', hoodSchema);

// Export model
module.exports = Hood;
