function error(message: string): never {
    throw new Error(message)
}

function exec(message: string): number | never {
    if (message.length < 4) throw new Error(message)
    return message.length
}

let len = exec('aaa')
console.log(len)