const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    name: String,
    versions: [String]
});

templateSchema.set('versionKey', false);

module.exports =  mongoose.model('Template', templateSchema);
