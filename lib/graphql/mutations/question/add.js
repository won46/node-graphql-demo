import { GraphQLNonNull } from 'graphql';

import { questionType, questionInputType } from '../../types/question';
import QuestionModel from '../../../models/question';

export default {
  type: questionType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(questionInputType)
    }
  },
  resolve(root, params) {
    const questionModel = new QuestionModel(params.data);
    const newQuestion = questionModel.save();
    if (!newQuestion) {
      throw new Error('Cannot create new Question');
    }
    return newQuestion;
  }
};
