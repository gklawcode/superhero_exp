const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const ItemType = new GraphQLObjectType({
  name:  'ItemType',
  fields: () => ({
    resourceURI: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

module.exports = ItemType;
