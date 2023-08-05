import express from 'express';
import { mongoose } from '../config/mongodb';

const connectRoute = express.Router()

connectRoute.get('/', (req, res) => {
    try {
      res.send(`${JSON.stringify(mongoose.connection.host)}`)
    }
    catch (error) {
        res.send(`${error}`)
    }
})

export { connectRoute }
