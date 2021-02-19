const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = graphql;
const ItemType = require('./item_type');

const ComicType = new GraphQLObjectType({
  name:  'ComicType',
  fields: () => ({
    available: { type: GraphQLInt },
    collectionURI: { type: GraphQLString },
    items: { type: new GraphQLList(ItemType)}
  })
});

module.exports = ComicType;
