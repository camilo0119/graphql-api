import { getUserId } from '../utils'

const Author = {
    register_by: (parent, args, { prisma, request }, info) => {
        const userId = getUserId(request)
        return prisma.authors.findOne({
            where: {
                id: parent.id
            }
        }).users()
    },
    books: (parent, args, { prisma, request }, info) => {
        const userId = getUserId(request)
        return prisma.authors.findOne({
            where: {
                id: parent.id
            }
        }).books()
    }
}

export default Author