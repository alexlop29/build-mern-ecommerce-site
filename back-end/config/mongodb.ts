import mongoose from 'mongoose';
import { MONGO_DB_URI } from './environment';

const connectToMongoDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_DB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } 
  catch (error) {
    console.log(`Error: ${error}`)
    process.exit(1);
  }
}

export { connectToMongoDB }
