import express from 'express';

const api = express();
const port = process.env.port || 3333;

  //Convert json received into an js object
  app.use(express.json())

  //Using this the API accept preflights
  app.use(cors())

  app.use("/", routes)

api.listen(port, () => 
  console.log("API running on port:", port)
);

export default api;