import express from 'express';

const helloRoute = express.Router()

helloRoute.get('/', (req, res) => {
    res.send('hello world from alex')
})

export { helloRoute }
