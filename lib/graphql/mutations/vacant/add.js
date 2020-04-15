import { GraphQLNonNull } from 'graphql';

import { vacantType, vacantInputType } from '../../types/vacant';
import VacantModel from '../../../models/vacant';

export default {
  type: vacantType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(vacantInputType)
    }
  },
  resolve(root, params) {
    const vacantModel = new VacantModel(params.data);
    const newVacant = vacantModel.save();
    if (!newVacant) {
      throw new Error('Cannot create new Vacantion');
    }
    return newVacant;
  }
};
