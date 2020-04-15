import {GraphQLNonNull, GraphQLID} from 'graphql';

import {groupType} from '../../types/group';
import GroupModel from '../../../models/group';

export default {
  type: groupType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedGroup = GroupModel.findByIdAndRemove(params.id).exec();
    if(!removedGroup) {
      throw new Error('Cannot remove Group');
    }

    return removedGroup;
  }
};
