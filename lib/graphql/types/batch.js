import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const batchType = new GraphQLObjectType({
  name: 'Batch',
  description: 'Batch Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    batch: {
      type: GraphQLInt
    },
    batchDate: {
      type: GraphQLDate
    },
    createdAt: {
      type: GraphQLDate
    },
    updatedAt: {
      type: GraphQLDate
    }
  })
});

export const batchInputType = new GraphQLInputObjectType({
  name: 'BatchInput',
  description: 'Batch Input Type',
  fields: () => ({
    batch: {
      type: GraphQLInt
    },
    batchDate: {
      type: GraphQLDate
    }
  })
});
