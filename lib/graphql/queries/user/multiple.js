import {GraphQLList} from 'graphql';

import {userType} from '../../types/user';
import UserModel from '../../../models/user';

export default {
  type: new GraphQLList(userType),
  resolve(root, params) {
    const users = UserModel.find().exec();
    if(!users) {
      throw new Error('Error getting users');
    }

    return users;
  }
};
