import {readJSON} from '../fileController.js'

class Order {
    product = {}

    constructor(product) {
        this.product = product
    }
}

class CommandLine {
    constructor(args) {
        if (args.length === 0) {
            throw new Error('파일명을 입력하세요')
        }
        this.onlyCountReady = args.includes('-r')
        this.fileName = args[args.length - 1]
    }
}

const countOrders = (commandLine) => {
    const input = readJSON(commandLine.fileName)
    const orders = input.map(item => new Order(item))
    if (commandLine.onlyCountReady) {
        const readyOrders = orders.filter(o => o.product.status === 'ready')
        return readyOrders.length
    } else {
        return orders.length
    }
}

const main = (args) => {
    try {
        console.log(countOrders(new CommandLine(args)));
    } catch (err) {
        console.error(err)
    }
}
main(process.argv.slice(2))

// node ch6/11-2.js -r ch6/11-products.json
// node ch6/11-2.js ch6/11-products.json
