const graphql = require('graphql');
const _ = require('lodash');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema
} = graphql

const MoviesType = new GraphQLObjectType({
    name:'Movies',
    fields:{
        id: {type:GraphQLInt},
        name: {type:GraphQLString},
        language: {type:GraphQLString},
        type: {type:GraphQLString},
        rate: {type:GraphQLFloat},
        imageUrl: {type:GraphQLString}
    }
});


const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        movies:{
            type: MoviesType,
            args: {id:{type:GraphQLInt}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:7900/movies/${args.id}`)
                .then((res) => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});