import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const sectType = new GraphQLObjectType({
  name: 'Sect',
  description: 'Sect Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    sect: {
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

export const sectInputType = new GraphQLInputObjectType({
  name: 'SectInput',
  description: 'Sect Input Type',
  fields: () => ({
    sect: {
      type: GraphQLString
    }
  })
});
