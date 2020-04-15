import {GraphQLNonNull, GraphQLID} from 'graphql';

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
    const removedDept = DeptModel.findByIdAndRemove(params.id).exec();
    if(!removedDept) {
      throw new Error('Cannot remove Departement');
    }

    return removedDept;
  }
};
