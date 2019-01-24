import mongoose from 'mongoose';
import db from './dbConfig.json';
/**
 * MongoDB connection function (with configuration from dbConfig.json file)
 */
const connect = () => {
    mongoose.connect(`mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.dbName}`, { useNewUrlParser: true });
};

export default connect;
