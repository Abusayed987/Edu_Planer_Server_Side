const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(cors());

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('edu planer bd server side is running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id)
    res.send(course);
})



app.listen(port, () => {
    console.log(`edu planer bd running on post ${port}`);
})