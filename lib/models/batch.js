import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const batchSchema = new Schema({
    batch: { type: Number, required: true },
    batchDate: { type: Date, required: true },
    createdAt: Date,
    updatedAt: Date
});

batchSchema.pre('save', function (next) {
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

export default mongoose.model('batches', batchSchema);
