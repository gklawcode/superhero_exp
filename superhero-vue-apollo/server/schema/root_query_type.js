const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const SuperHeroType = require('./superhero_type');
const superherosDb = require('../superherosDb.json');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    superheros: {
      type: new GraphQLList(SuperHeroType),
      resolve() {
        return superherosDb.data.results;
      }
    },
    superhero: {
      type: SuperHeroType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return _.find(superherosDb.data.results, { id: parseInt(id) });
      }
    }
  })
});

module.exports = RootQuery;
