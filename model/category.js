var mongoose = require('mongoose');

var catschema = new mongoose.Schema({

    catname:{
        type:String
    }

})

module.exports = mongoose.model('categories',catschema);