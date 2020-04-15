import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    group: { type: String, required: true },
    question: { type: String, required: true,unique: true },
    answer: { type: String, required: true },
    choices: [{
        choice_1:{
            type: String, required: true,unique: true},
        choice_2:{type: String, required: true,unique: true},
        choice_3:{type: String, required: true,unique: true},
        choice_4:{type: String, required: true,unique: true},
        choice_5:{type: String, required: true,unique: true}
    }],
    createdAt: Date,
    updatedAt: Date
});

questionSchema.pre('save', function (next) {
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

export default mongoose.model('questions', questionSchema);
