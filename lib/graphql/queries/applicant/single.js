import {GraphQLID, GraphQLNonNull} from 'graphql';

import {applicantType} from '../../types/applicant';
import applicantModel from '../../../models/applicant';

export default {
  type: applicantType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return applicantModel.findById(params.id).exec();
  }
};

