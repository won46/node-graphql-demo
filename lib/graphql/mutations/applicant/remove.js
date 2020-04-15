import {GraphQLNonNull, GraphQLID} from 'graphql';

import { applicantType } from '../../types/applicant';
import ApplicantModel from '../../../models/applicant';

export default {
  type: applicantType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedApplicant = ApplicantModel.findByIdAndRemove(params.id).exec();
    if(!removedApplicant) {
      throw new Error('Cannot remove Applicant');
    }

    return removedApplicant;
  }
};
