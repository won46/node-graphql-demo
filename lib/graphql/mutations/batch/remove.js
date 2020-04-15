import { GraphQLNonNull, GraphQLID } from 'graphql';

import { batchType } from '../../types/batch';
import BatchModel from '../../../models/batch';

export default {
  type: batchType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedBatch = BatchModel.findByIdAndRemove(params.id).exec();
    if (!removedBatch) {
      throw new Error('Cannot remove batch');
    }

    return removedBatch;
  }
};
