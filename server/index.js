const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("You hit the home route")
})


app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})