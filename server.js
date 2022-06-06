const { request } = require('express')
const { response } = require('express')
const express = require('express')
const app = express() // To allow this variable to use all the methods related to express.
const portNum = 8000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const pirates = {
    'luffy': {
        'full name': 'Monkey D. Luffy',
        'age': 19,
        'birthplace': 'East Blue',
        'bounty': '1,500,000,000 Beri',
        'weapon': 'Fists',
        'crew': 'Strawhat Pirates'
    }, 
    'zoro': {
        'full name': 'Roronoa Zoro',
        'age': 21,
        'birthplace': 'East Blue',
        'bounty': '320,000,000 Beri',
        'weapon': 'Enma',
        'crew': 'Strawhat Pirates'
    },
    'unknown': {
        'full name': 'unknown',
        'age': 0,
        'birthplace': 'unknown',
        'bounty': 'unknown',
        'weapon': 'unknown'
    }
}

app.get('/api/:name', (req, res) => {
    const reqName = req.params.name.toLowerCase();
    if(pirates[reqName]) {
        res.json(pirates[reqName])
    } else {
        res.json(pirates['unknown'])
    }
    
    res.json(pirates[reqName])
} )

app.listen(process.env.portNum || portNum, () => {
    console.log(`The server is running on port ${portNum}`)
})