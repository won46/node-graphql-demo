import { GraphQLNonNull, GraphQLID } from 'graphql';

import { sectType } from '../../types/sect';
import SectModel from '../../../models/sect';

export default {
  type: sectType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedSect = SectModel.findByIdAndRemove(params.id).exec();
    if (!removedSect) {
      throw new Error('Cannot remove Section');
    }

    return removedSect;
  }
};
