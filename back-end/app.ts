import express from 'express';
import { helloRoute } from './routes/hello';
import { productRoute } from './routes/product';
import { EXPRESS_PORT } from './config/environment';

const app = express();
// const port = 3000;

// Sample Route
app.get('/', (req, res) => {
    res.send('Hi Alex')
  })

app.use('/hello', helloRoute)
app.use('/product', productRoute)

app.listen(EXPRESS_PORT, () => {
    console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
});

export { app }; 
