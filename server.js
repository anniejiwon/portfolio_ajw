'use strict'

const express = require('express')
const app = express()
const {resolve} = require('path')

app.use(express.static(resolve(__dirname)))

app.get('/',function(req,res) {
    console.log('hi')
})

app.listen(1337,function() {
    console.log('listening on port 1337')
})

