import {GraphQLID, GraphQLNonNull} from 'graphql';

import {batchType} from '../../types/batch';
import batchModel from '../../../models/batch';

export default {
  type: batchType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return batchModel.findById(params.id).exec();
  }
};

