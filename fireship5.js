const tick = Date.now()
const log = (v) => console.log(`${v} \n Elapsed time ${Date.now() - tick}`)

const codeBlocker = () => {
    // promise and while loop is created on main thread 
    return new Promise((resolve, reject) => {
        let i = 0
        while (i < 1000000000) { i++ }
        // resolving promise is microthread
        resolve('billion loops done')
    })
}

log('sync 1')

log(codeBlocker())

log('sync 2')