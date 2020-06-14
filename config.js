// configuration

module.exports =  {
    stage: 'local',
    MONGO_URL: 'mongodb+srv://ejamuser:xUtz0nzty8gCjy5d@cluster0-w4rdf.gcp.mongodb.net/deployments?retryWrites=true&w=majority',
    PORT: process.env.PORT|| 8080
}
