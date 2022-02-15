import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
});
const data = mongoose.model('data', dataSchema);

export const getData = async () => {
  const dataGot = await data.find();
  return dataGot;
};
