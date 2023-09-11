const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    description: {
        type : String,
        required: true
    },
    due:{
        type: String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    checked: {
        type : Boolean,
        required : true
        // default :false
    }
});
 const List = mongoose.model('List',listSchema);
 module.exports = List;
