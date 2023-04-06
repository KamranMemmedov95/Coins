const express = require('express');
const app = express()

app.get('/blog',(req,res) => {
    res.json({message: 'Hello from server'})
})

app.listen(3001, ()=>{
    console.log('hello from 3001 port!')
})