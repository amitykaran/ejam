const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deploymentSchema = new Schema({
    url: String,
    templateName: String,
    version: String,
    deployedAt: {
        type: Date,
        default: Date.now()
    }
});

deploymentSchema.set('versionKey', false);

module.exports =  mongoose.model('Deployment', deploymentSchema);
