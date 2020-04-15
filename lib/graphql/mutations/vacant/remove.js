import { GraphQLNonNull, GraphQLID } from 'graphql';

import { vacantType } from '../../types/vacant';
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
    const removedVacant = VacantModel.findByIdAndRemove(params.id).exec();
    if (!removedVacant) {
      throw new Error('Cannot remove Vacant');
    }

    return removedVacant;
  }
};
