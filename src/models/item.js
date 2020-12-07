const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
    cache: Boolean,
    matches: [
        {
            unique_id: 
        }
    ]
});