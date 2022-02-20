import {
  getData,
  getDataById,
  postData,
  putData,
  deleteData,
} from '../models/app.js';

export const getRouter = async (req, res) => {
  const dataGot = await getData();
  return res.send(dataGot);
};
export const getRouterById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const dataGotById = await getDataById(id);
  return res.send(dataGotById);
};
export const postRouter = async (req, res) => {
  const { body } = req;
  const dataPosted = await postData(body);
  return res.send(dataPosted);
};
export const putRouter = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const dataPut = await putData(id, body);
  return res.send(dataPut);
};
export const deleteRouter = async (req, res) => {
  const {
    params: { id },
  } = req;
  const dataDeleted = await deleteData(id);
  return res.send(dataDeleted);
};
