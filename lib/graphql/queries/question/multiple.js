import {GraphQLList} from 'graphql';

import {questionType} from '../../types/question';
import QuestionsModel from '../../../models/question';

export default {
  type: new GraphQLList(questionType),
  resolve(root, params) {
    const questions = QuestionsModel.find().exec();
    if(!questions) {
      throw new Error('Error getting groups');
    }

    return questions;
  }
};
