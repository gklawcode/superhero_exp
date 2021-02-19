const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const ThumbnailType = new GraphQLObjectType({
  name:  'ThumbnailType',
  fields: () => ({
    path: { type: GraphQLString },
    extension: { type: GraphQLString }
  })
});

module.exports = ThumbnailType;
