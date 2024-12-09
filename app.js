
const path = require('path')
const express = require('express')
const app = express()
const port = 3010

const root = path.join(__dirname, 'public')

const randomJoke = [
    {
        id: 1,
        joke: "Why don’t skeletons fight each other?",
        punchline: "They don’t have the guts."
    },
    {
        id: 2,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta!"
    },
    {
        id: 3,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!"
    },
    {
        id: 4,
        joke: "What did one ocean say to the other ocean?",
        punchline: "Nothing, they just waved."
    },
    {
        id: 5,
        joke: "Why don’t eggs tell jokes?",
        punchline: "Because they might crack up!"
    }
]

app.use(express.json())

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile('index.html', {root})
})

app.get('/api/v1/random-joke', (request, response) => {
    const r = Math.floor(Math.random() * 5)
    response.send(randomJoke[r])
})

app.listen(port, () => console.log(`http://localhost:${port}/`))