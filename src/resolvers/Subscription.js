import { getUserId } from '../utils'

const Subscription = {
    count: {
        subscribe(parent, args, { pubsub, request }, info) {
            const userId = getUserId(request)
            let count = 0
            setInterval(() => {
                count++
                pubsub.publish('count', {
                    count
                })
            }, 1000)
            return pubsub.asyncIterator('count')
        }
    },
    author: {
        subscribe(parent, args, { pubsub, request }, info) {
            const userId = getUserId(request)
            return pubsub.asyncIterator('author')
        }
    },
    book: {
        subscribe(parent, { authorId }, { pubsub, request }, info) {
            const userId = getUserId(request)
            return pubsub.asyncIterator(`book - ${authorId}`)
        }
    }
}

export default Subscription