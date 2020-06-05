import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query'
import db from './db'

const context = {
    db
}

const opts = {
    port: 4000,
    endpoint: '/graphql'
}

const resolvers = {
    Query
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context
})

server.start(() => {
    console.log(`Server is running on http://localhost:${opts.port}`)
})