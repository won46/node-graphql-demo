import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const questionType = new GraphQLObjectType({
  name: 'Question',
  description: 'Question Type',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    group: {
      type: GraphQLString
    },
    question: {
      type: GraphQLString
    },
    answer: {
      type: GraphQLString
    },
    choices: [{
      choice_1: {
        type: GraphQLString
      },
      choice_2: {
        type: GraphQLString
      },
      choice_3: {
        type: GraphQLString
      },
      choice_4: {
        type: GraphQLString
      },
      choice_5: {
        type: GraphQLString
      }
    }],
    createdAt: {
      type: GraphQLDate
    },
    updatedAt: {
      type: GraphQLDate
    }
  })
});

export const questionInputType = new GraphQLInputObjectType({
  name: 'QuestionInput',
  description: 'Question Input Type',
  fields: () => ({
    group: {
      type: GraphQLString
    },
    question: {
      type: GraphQLString
    },
    answer: {
      type: GraphQLString
    },
    choices: [{
      choice_1: {
        type: GraphQLString
      },
      choice_2: {
        type: GraphQLString
      },
      choice_3: {
        type: GraphQLString
      },
      choice_4: {
        type: GraphQLString
      },
      choice_5: {
        type: GraphQLString
      }
    }]
  })
});
