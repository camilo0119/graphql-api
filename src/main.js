import { GraphQLServer, PubSub } from 'graphql-yoga'
import Query from './resolvers/Query'
import db from './db'
import Author from './resolvers/Author'
import Book from './resolvers/Book'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import { PrismaClient } from '@prisma/client'


const pubsub = new PubSub()

const prisma = new PrismaClient()

const context = {
    db,
    pubsub,
    prisma
}

const resolvers = {
    Query,
    Author,
    Book,
    Mutation,
    Subscription
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            ...context
        }
    }
})

server.start(() => {
    console.log('Server is running on http://localhost:4000')
})