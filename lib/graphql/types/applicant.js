import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const applicantType = new GraphQLObjectType({
  name: 'Applicant',
  description: 'Applicant Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    batch: { 
      type: GraphQLInt 
    },
    name: { 
      type: GraphQLString 
    },
    dob: { 
      type: GraphQLString 
    },
    education: { 
      type: GraphQLString 
    },
    gender: { 
      type: GraphQLString 
    },
    religion: { 
      type: GraphQLString 
    },
    email: { 
      type: GraphQLString 
    },
    createdAt: {
      type: GraphQLDate
    },
    updatedAt: {
      type: GraphQLDate
    }
  })
});

export const applicantInputType = new GraphQLInputObjectType({
  name: 'ApplicantInput',
  description: 'Applicant Input Type',
  fields: () => ({
    batch: { 
      type: GraphQLInt 
    },
    name: { 
      type: GraphQLString 
    },
    dob: { 
      type: GraphQLString 
    },
    education: { 
      type: GraphQLString 
    },
    gender: { 
      type: GraphQLString 
    },
    religion: { 
      type: GraphQLString 
    },
    email: { 
      type: GraphQLString 
    }
  })
});
