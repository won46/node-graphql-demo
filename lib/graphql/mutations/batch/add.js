import { GraphQLNonNull } from 'graphql';

import { batchType, batchInputType } from '../../types/batch';
import BatchModel from '../../../models/batch';

export default {
  type: batchType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(batchInputType)
    }
  },
  resolve(root, params) {
    const batchModel = new BatchModel(params.data);
    const newBatch = batchModel.save();
    if (!newBatch) {
      throw new Error('Cannot create new Batchion');
    }
    return newBatch;
  }
};
