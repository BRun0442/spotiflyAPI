import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors'
import routes from './src/routes.js';

dotenv.config()

const api = express();
const port = process.env.API_PORT || 3333;

  //Convert json received into an js object
  api.use(express.json())

  //Using this the API accept preflights
  api.use(cors())

  api.use("/", routes)

api.listen(port, () => 
  console.log("api running!")
);

export default api;