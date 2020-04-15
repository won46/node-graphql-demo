import {GraphQLNonNull} from 'graphql';

import{userType, userInputType} from '../../types/user';
import UserModel from '../../../models/user';

export default {
  type: userType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType)
    }
  },
  resolve(root, params) {
    const userModel = new UserModel(params.data);
    const newUser = userModel.save();
    if(!newUser) {
      throw new Error('Cannot create new User');
    }

    return newUser;
  }
};
