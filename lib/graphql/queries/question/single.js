import {GraphQLID, GraphQLNonNull} from 'graphql';

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
    return QuestionModel.findById(params.id).exec();
  }
};
