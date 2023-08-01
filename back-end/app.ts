import express from 'express';
import { helloRoute } from './routes/hello';
import { productRoute } from './routes/product';

const app = express();
const port = 3000;

// Sample Route
app.get('/', (req, res) => {
    res.send('Hi Alex')
  })

app.use('/hello', helloRoute)
app.use('/product', productRoute)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export { app }; 
