import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const groupType = new GraphQLObjectType({
  name: 'Group',
  description: 'Group Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    group: {
      type: GraphQLString
    },
    desc: {
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

export const groupInputType = new GraphQLInputObjectType({
  name: 'GroupInput',
  description: 'Group Input Type',
  fields: () => ({
    group: {
      type: GraphQLString
    },
    desc: {
      type: GraphQLString
    }
  })
});
