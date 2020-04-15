import { GraphQLNonNull } from 'graphql';

import { groupType, groupInputType } from '../../types/group';
import GroupModel from '../../../models/group';

export default {
  type: groupType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(groupInputType)
    }
  },
  resolve(root, params) {
    const groupModel = new GroupModel(params.data);
    const newGroup = groupModel.save();
    if (!newGroup) {
      throw new Error('Cannot create new Group');
    }

    return newGroup;
  }
};
