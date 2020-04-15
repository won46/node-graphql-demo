import {GraphQLList} from 'graphql';

import {groupType} from '../../types/group';
import GroupsModel from '../../../models/group';

export default {
  type: new GraphQLList(groupType),
  resolve(root, params) {
    const groups = GroupsModel.find().exec();
    if(!groups) {
      throw new Error('Error getting groups');
    }

    return groups;
  }
};
