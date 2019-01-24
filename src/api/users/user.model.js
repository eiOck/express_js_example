import mongoose from 'mongoose';

/**
 * User model schema for MongoDB
 */
const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('User', userSchema);
