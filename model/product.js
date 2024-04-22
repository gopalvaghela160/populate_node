var mongoose = require('mongoose');


var proschema = new mongoose.Schema({
    proname: {
        type: String
    },
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    }


    });

module.exports = mongoose.model('products', proschema);

