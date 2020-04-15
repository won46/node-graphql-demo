import {GraphQLID, GraphQLNonNull} from 'graphql';

import {deptType} from '../../types/dept';
import DeptModel from '../../../models/dept';

export default {
  type: deptType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return DeptModel.findById(params.id).exec();
  }
};
