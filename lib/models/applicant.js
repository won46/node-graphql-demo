import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const applicantSchema = new Schema({
    batch: { type: Number, required: true },
    name: { type: String, required: true },
    dob: { type: String, required: true },
    education: { type: String, required: true },
    gender: { type: String, required: true },
    religion: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
});

applicantSchema.pre('save', function (next) {
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

export default mongoose.model('applicants', applicantSchema);
