import {GraphQLNonNull, GraphQLID} from 'graphql';

import {questionType} from '../../types/question';
import QuestionModel from '../../../models/question';

export default {
  type: questionType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedQuestion = QuestionModel.findByIdAndRemove(params.id).exec();
    if(!removedQuestion) {
      throw new Error('Cannot remove Question');
    }

    return removedQuestion;
  }
};
