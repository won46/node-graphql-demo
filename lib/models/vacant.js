import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const vacantSchema = new Schema({
    batch: { type: String, required: true },
    dept: { type: String, required: true },
    sect: { type: String, required: true },
    persons: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
});

vacantSchema.pre('save', function (next) {
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

export default mongoose.model('vacants', vacantSchema);
