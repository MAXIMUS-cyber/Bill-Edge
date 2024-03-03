import Chance from 'chance';

const chance = new Chance();

const baseUrl = 'http://localhost:3000'

const users = [
    {
        email: chance.email(),
        password: chance.string({length:10}),
        role:['admin']
    },
    {
        email: chance.email(),
        password: chance.string({length:10}),
        role:['user']
    },
    {
        email: chance.email(),
        password: chance.string({length:10}),
        role:['user']
    }
]

console.log("RANDOM USERS",users)

for(let user of users){
    await fetch(`${baseUrl}/register`,{
        method:'POST',
        body:JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
}
