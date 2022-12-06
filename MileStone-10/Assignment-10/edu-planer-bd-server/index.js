const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(cors());


app.get('/', (req, res) => {
    res.send('edu planer bd server side is running')
})

app.listen(port, () => {
    console.log(`edu planer bd running on post ${port}`);
})