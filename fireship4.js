const tick = Date.now()
const log = (v) => console.log(`${v} \n Elapsed time ${Date.now() - tick}`)

const codeBlocker = () => {
    let i = 0
    while (i < 1000000000) {i++}
    return 'billion loops done'
}

log('sync 1')

log(codeBlocker())

log('sync 2')