import mongoose from 'mongoose';
import bluebird from 'bluebird';
import bcrypt from 'bcryptjs';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    dept: { type: String, required: true },
    sect: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
});

userSchema.pre('save', function (next) {
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

export default mongoose.model('users', userSchema);
