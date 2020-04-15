import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const vacantType = new GraphQLObjectType({
  name: 'Vacant',
  description: 'Vacant Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    batch: { 
      type: GraphQLString
    },
    dept: { 
      type: GraphQLString
    },
    sect: { 
      type: GraphQLString
    },
    persons: { 
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

export const vacantInputType = new GraphQLInputObjectType({
  name: 'VacantInput',
  description: 'Vacant Input Type',
  fields: () => ({
    batch: { 
      type: GraphQLString
    },
    dept: { 
      type: GraphQLString
    },
    sect: { 
      type: GraphQLString
    },
    persons: { 
      type: GraphQLString
    }
  })
});
