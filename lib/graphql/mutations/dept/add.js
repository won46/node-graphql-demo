import { GraphQLNonNull } from 'graphql';

import { deptType, deptInputType } from '../../types/dept';
import DeptModel from '../../../models/dept';

export default {
  type: deptType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(deptInputType)
    }
  },
  resolve(root, params) {
    const deptModel = new DeptModel(params.data);
    const newDept = deptModel.save();
    if (!newDept) {
      throw new Error('Cannot create new Departement');
    }

    return newDept;
  }
};
