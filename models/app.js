import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
});
const data = mongoose.model('data', dataSchema);

export const getData = async () => {
  const dataGot = await data.find();
  return dataGot;
};
export const getDataById = async (id) => {
  const dataGotById = await data.findById(id);
  return dataGotById;
};
export const postData = async (body) => {
  const dataPosted = await data.create(body);
  return dataPosted;
};
export const putData = async (id, body) => {
  const dataPut = await data.findByIdAndUpdate(id, body);
  return dataPut;
};
export const deleteData = async (id) => {
  const dataDeleted = await data.findByIdAndDelete(id);
  return dataDeleted;
};
