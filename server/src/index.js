const { GraphQLServer } = require('graphql-yoga')
const typeDefs  = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://akhil1234:akhil1234@test-app-afd2r.mongodb.net/test?retryWrites=true&w=majority')


const server = new GraphQLServer({ typeDefs, resolvers })
mongoose.connection.once('open', function() {
    server.start(() => console.log('Server is running on localhost:4000'))
});
