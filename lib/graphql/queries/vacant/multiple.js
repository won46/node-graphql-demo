import {GraphQLList} from 'graphql';

import {vacantType} from '../../types/vacant';
import VacantsModel from '../../../models/vacant';

export default {
  type: new GraphQLList(vacantType),
  resolve(root, params) {
    const vacants = VacantsModel.find().exec();
    if(!vacants) {
      throw new Error('Error getting groups');
    }

    return vacants;
  }
};
