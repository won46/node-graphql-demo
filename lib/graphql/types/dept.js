import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const deptType = new GraphQLObjectType({
  name: 'Departement',
  description: 'Departement Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    dept: {
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

export const deptInputType = new GraphQLInputObjectType({
  name: 'DeptInput',
  description: 'Dept Input Type',
  fields: () => ({
    dept: {
      type: GraphQLString
    }
  })
});
