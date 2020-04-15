import {GraphQLList} from 'graphql';

import {applicantType} from '../../types/applicant';
import ApplicantsModel from '../../../models/applicant';

export default {
  type: new GraphQLList(applicantType),
  resolve(root, params) {
    const applicants = ApplicantsModel.find().exec();
    if(!applicants) {
      throw new Error('Error getting departement');
    }

    return applicants;
  }
};
