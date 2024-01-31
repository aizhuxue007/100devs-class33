const tick = Date.now()
const log = (v) => console.log(`${v} \n Elapsed time ${Date.now() - tick}`)

const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const codeBlocker = () => {
    let i = 0
    while (i < 1000000000) { i++ }
    return 'billion loops done'
}

// Basic
const getFruit = async (name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        strawberry: 'strawberry'
    }

    return Promise.resolve(fruits[name])
}

getFruit('peach').then(console.log)

// async + await
const makeSmoothie = async () => {
    // not using concurrency!!
    const a = await getFruit2('pineapple')
    const b = await getFruit2('strawberry')

    return [a, b]
}

// makeSmoothie equivalent with just regular promises
const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
        .then(v => {
            v = a;
            return getFruit('strawberry')
        })
        .then(v => v + a)
}


// using concurrently (execute lines simultaneously)

const getFruit2 = async (name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        strawberry: 'strawberry'
    }

    await delay(1000)

    return fruits[name]
}

// makeSmoothie().then(log)


// concurrent
const makeSmoothie3 = () => {
    const a = getFruit2('pineapple')
    const b = getFruit2('strawberry')

    return Promise.all([a, b])
}

const makeSmoothie4 = async () => {
    const a = getFruit2('pineapple')
    const b = getFruit2('strawberry')
    const promiseArray = await Promise.all([a, b])

    return promiseArray
}

// makeSmoothie().then(log)

// Error handling async await
const badSmoothie = async () => {
    try {
        const a = getFruit2('pineapple')
        const b = getFruit2('strawberry')
        const promiseArray = await Promise.all([a, b])

        throw 'broken!'

        return promiseArray
    } catch (err) {
        console.log(err)
    }
}

badSmoothie()
    .then(v => log({ v }))
    .catch(err => log({ err }))

// use traditional for loop for every iteration to await a promise rather than map or forEach

const fruits = ['peach', 'pineapple', 'strawberry']

// Like this!
const fruitLoop = async() => {
    for (const f of fruits) {
        const emoji = await getFruit(f)
        log(emoji)
    }
    // for promise that resolves to an array, which will wait for items in array to resolve, then loop through that array
    for await (const emoji of smoothie) {
        log(emoji)
    }
}

fruitLoop();

const fruitInspection = async() => {
    if (await getFruit2('peach') === 'peach') {
        console.log('looks peachy!')
    }
}