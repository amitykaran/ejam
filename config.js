// configuration

export default {
    stage: 'local',
    MONGO_URL: 'mongodb://localhost:27017/vm-test',
    PORT: int(process.env.PORT) || 8080
}
