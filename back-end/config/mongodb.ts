// import mongoose from 'mongoose';
// import { MONGO_DB_URI } from './environment';

// const connectToMongoDB = async () => {
//   try {
//     const conn = await mongoose.connect(MONGO_DB_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//     return conn;
//   } 
//   catch (error) {
//     console.log(`Error: ${error}`);
//     process.exit(1);
//   }
// }

// export { connectToMongoDB }

// import { MONGO_DB_URI } from './environment';

// // NOTE: (alopez) Unable to locate documentation to change the use of require to a dynamic import
// const mongoose = require('mongoose');

// const connectToMongoDB = async () => {
//   try {
//     const conn = await mongoose.connect(MONGO_DB_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//     return conn;
//   } 
//   catch (error) {
//     console.log(`Error: ${error}`);
//     process.exit(1);
//   }
// }

// connectToMongoDB()

// export { mongoose }

import { MONGO_DB_URI } from './environment';

// NOTE: (alopez) Unable to locate documentation to change the use of require to a dynamic import
const mongoose = require('mongoose');

try {
  const conn = mongoose.connect(MONGO_DB_URI);
} 
catch (error) {
  console.log(`Error: ${error}`);
  process.exit(1);
}

export { mongoose }
