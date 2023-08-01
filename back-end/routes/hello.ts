import express from 'express';

const helloRoute = express.Router()

helloRoute.get('/', (req, res) => {
    res.send('hello world')
})

export { helloRoute }
