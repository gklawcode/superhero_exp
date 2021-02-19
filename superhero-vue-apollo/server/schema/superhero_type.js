const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const ComicType = require('./comic_type');
const ThumbnailType = require('./thumbnail_type');

const SuperheroType = new GraphQLObjectType({
  name:  'SuperheroType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    modified: { type: GraphQLString },
    thumbnail: { type: ThumbnailType },
    resourceURI: { type: GraphQLString },
    comics: { type: ComicType }
  })
});

module.exports = SuperheroType;
