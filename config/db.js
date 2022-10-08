const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://mongo_admin:OreNoSekai@99@cluster0.zeylwwj.mongodb.net/?retryWrites=true&w=majority";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
