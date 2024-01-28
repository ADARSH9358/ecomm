import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();
const connectDB = async () => {
  try {
     await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    
  } catch (error) {
  console.error('Error connecting to MongoDB:', error.message);
    // Handle the error appropriately, e.g., throw an error or exit the application.
    process.exit(1);
  }
};

export default connectDB;
