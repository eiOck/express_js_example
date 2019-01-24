import mongoose from 'mongoose';
import User from './user.model';

/**
 * Implementation of user controller CRUD methods
 */

/**
 * CREATE user method - creates new user from request and saves it to DB
 */
function create(req, res) {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    user.save((err) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).json({ msg: 'User has been created.' });
    });
}

/**
 * GET user by Id method - gets user from DB by Id
 */
function getById(req, res) {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).json({ user });
    });
}

/**
 * GET all users from DB
 */
function getAll(req, res) {
    User.find({}, (err, users) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).json({ users });
    });
}

/**
 * DELETE user by Id method - removes specific user from DB
 */
function deleteById(req, res) {
    User.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            return res.json(err);
        }
        return res.status(200).json({ msg: 'User has been deleted.' });
    });
}

export default {
    create,
    deleteById,
    getById,
    getAll,
};
