import { GraphQLNonNull } from 'graphql';

import { applicantType, applicantInputType } from '../../types/applicant';
import ApplicantModel from '../../../models/applicant';

export default {
  type: applicantType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(applicantInputType)
    }
  },
  resolve(root, params) {
    const applicantModel = new ApplicantModel(params.data);
    const newApplicant = applicantModel.save();
    if (!newApplicant) {
      throw new Error('Cannot create new Applicant');
    }

    return newApplicant;
  }
};
