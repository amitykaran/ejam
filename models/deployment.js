import mongoose from 'mongoose';
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

export default mongoose.model('Deployment', deploymentSchema);
