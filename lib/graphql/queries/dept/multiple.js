import {GraphQLList} from 'graphql';

import {deptType} from '../../types/dept';
import DeptsModel from '../../../models/dept';

export default {
  type: new GraphQLList(deptType),
  resolve(root, params) {
    const depts = DeptsModel.find().exec();
    if(!depts) {
      throw new Error('Error getting departement');
    }

    return depts;
  }
};
