import mongoose, { mongo } from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect("mongodb+srv://codehiveshir:Codehives_hir@codehivesv3.tbpi6gz.mongodb.net/");
};

export default dbConnect;
