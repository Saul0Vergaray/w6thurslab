const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
const port = process.env.PORT || 4545

app.listen(4545, () => console.log('Take us to warp 4545!'))

