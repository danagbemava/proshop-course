import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${con.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDb;
