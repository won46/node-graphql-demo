import {GraphQLID, GraphQLNonNull} from 'graphql';

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
    return GroupModel.findById(params.id).exec();
  }
};
