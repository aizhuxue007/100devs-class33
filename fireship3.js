import fetch from 'node-fetch'

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
    .then(res => {
        return res.json()
    })
    .then(_ => {
        throw new Error('error thrown')
    })
    .then(user => {
            console.log(user)
        }
    )
    .catch(error => console.log(error))

console.log('synchronous 1')