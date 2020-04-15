import {GraphQLList} from 'graphql';

import {batchType} from '../../types/batch';
import BatchsModel from '../../../models/batch';

export default {
  type: new GraphQLList(batchType),
  resolve(root, params) {
    const batchs = BatchsModel.find().exec();
    if(!batchs) {
      throw new Error('Error getting batchs');
    }

    return batchs;
  }
};
