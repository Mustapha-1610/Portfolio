import mongoose from "mongoose";

let connected = false;
export async function connect() {
  if (connected) {
    return;
  }

  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
      connected = true;
    });
    connected = true;
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      connected = false;
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
