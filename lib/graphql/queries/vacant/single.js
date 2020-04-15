import {GraphQLID, GraphQLNonNull} from 'graphql';

import {vacantType} from '../../types/vacant';
import VacantModel from '../../../models/vacant';

export default {
  type: vacantType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return VacantModel.findById(params.id).exec();
  }
};
