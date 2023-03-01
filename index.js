import { config } from 'dotenv'
import express from 'express';
import cors from 'cors'
import routes from './src/routes.js';

config()

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const api = express();
const port = process.env.API_PORT || 3333;

  //Convert json received into an js object
  api.use(express.json())

  //Using this the API accept preflights
  api.use('*', cors(corsOptions))

  api.use("/", routes)

api.listen(port, () => 
  console.log("api running!")
);

export default api;