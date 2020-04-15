import { GraphQLNonNull } from 'graphql';

import { sectType, sectInputType } from '../../types/sect';
import SectModel from '../../../models/sect';

export default {
  type: sectType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(sectInputType)
    }
  },
  resolve(root, params) {
    const sectModel = new SectModel(params.data);
    const newSect = sectModel.save();
    if (!newSect) {
      throw new Error('Cannot create new Section');
    }
    return newSect;
  }
};
