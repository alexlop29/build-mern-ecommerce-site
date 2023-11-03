import express from 'express';
import { helloRoute } from './routes/hello';
import { productRoute } from './routes/product';
import { connectRoute } from './routes/connect';
import { cartRoute } from './routes/cart';
import { EXPRESS_PORT } from './config/environment';

const app = express();

app.use('/hello', helloRoute)
app.use('/product', productRoute)
app.use('/connect', connectRoute)
app.use('/cart', cartRoute)

app.listen(EXPRESS_PORT, () => {
    console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
});

export { app }; 
