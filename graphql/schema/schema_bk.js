const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema
} = graphql

const movies = [
    {
        "id": 1,
        "name": "Black Panther",
        "language": "ENGLISH",
        "rate": 4.5,
        "type": "Action Adventure Fantasy",
        "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
      },
      {
        "id": 2,
        "name": "Death Wish",
        "language": "ENGLISH",
        "type": "Action Crime Thriller",
        "rate": 3.2,
        "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
      },
      {
        "id": 3,
        "name": "Coco",
        "language": "ENGLISH",
        "type": "Adventure Animation Family",
        "rate": 5,
        "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
      }
]

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
                return _.find(movies,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});