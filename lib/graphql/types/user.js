import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    dept: {
      type: GraphQLString
    },
    sect: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    role: {
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

export const userInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'User Input Type',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    dept: {
      type: GraphQLString
    },
    sect: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    role: {
      type: GraphQLString
    }
  })
});
