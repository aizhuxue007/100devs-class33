import fetch from 'node-fetch'

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
    .then(res => {
        return res.json()
    })
    .then(user => {
            console.log(user)
        }
    )

console.log('synchronous 1')