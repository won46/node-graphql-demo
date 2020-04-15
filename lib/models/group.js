import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    group: { type: String, required: true },
    desc: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
});

groupSchema.pre('save', function (next) {
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

export default mongoose.model('groups', groupSchema);
