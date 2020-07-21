import { getUserId } from '../utils'

const Query = {
    hello(parent, args, ctx, info) {
        const { name } = args
        return `Hello ${name || 'world'}`
    },
    quantity: () => 1,
    user: (parent, { id }, { request, prisma }, info) => {
        const userId = getUserId(request)
        if (!id) {
            return prisma.users.findMany()
        }
        return prisma.users.findOne({
            where: {
                id
            }
        })
    },
    author: (parent, { id, first, skip, orderBy }, { prisma, request }, info) => {

        const userId = getUserId(request)

        if (!id) {
            return prisma.authors.findMany({
                first,
                skip,
                orderBy
            })
        }

        return prisma.authors.findOne({
            where: {
                id
            }
        })
    },
    book: (parent, { id, first, skip }, { prisma, request }, info) => {
        const userId = getUserId(request)
        if (!id) {
            return prisma.books.findMany({
                first,
                skip
            })
        }
        return prisma.books.findOne({
            where: {
                id
            }
        })
    }
}

export default Query