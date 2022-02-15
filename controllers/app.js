import { getData } from '../models/app.js';

export const getRouter = async (req, res) => {
  const dataGot = await getData();
  return res.send(dataGot);
};
