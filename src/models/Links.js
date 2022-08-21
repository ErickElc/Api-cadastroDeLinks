const mongoose = require('mongoose');


const LinksSchema = new mongoose.Schema(
    {
        clicks: {type: Number, default: 0},
        
        title: {type: String, required:true, unique: true},
        
        description:{type: String},
        
        url: {type: String, required:true}
    }
);

const LinkModel = mongoose.model('Link', LinksSchema);

module.exports = LinkModel;