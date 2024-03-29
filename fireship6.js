const tick = Date.now()
const log = (v) => console.log(`${v} \n Elapsed time ${Date.now() - tick}`)

const codeBlocker = () => {
    // instead of creating promise, resolve so we can have this code run after the sync code and macrotasks have been completed
    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000) { i++ }
        return 'billion loops done'
    })
}

log('sync 1')

codeBlocker().then(result => log(result))

log('sync 2')