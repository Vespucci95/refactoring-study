import {readJSON} from '../fileController.js'

class Order {
    product = {}

    constructor(product) {
        this.product = product
    }
}

class CommandLine {}

const countOrders = (commandLine, args, filename) => {
    const input = readJSON(filename)
    const orders = input.map(item => new Order(item))

    if (args.includes('-r')) {
        const readyOrders = orders.filter(o => o.product.status === 'ready')
        return readyOrders.length
    } else {
        return orders.length
    }
}

const run = args => {
    if (args.length === 0) {
        throw new Error('파일명을 입력하세요')
    }
    const commandLine = new CommandLine();
    const filename = args[args.length - 1]
    return countOrders(commandLine, args, filename);
}

const main = (args) => {
    try {
        console.log(run(args));
    } catch (err) {
        console.error(err)
    }
}
main(process.argv.slice(2))

// node ch6/11-2.js -r ch6/11-products.json
// node ch6/11-2.js ch6/11-products.json
