import mysql2  from 'mysql2/promise';

const connection = async () => 
{
  try {
  const connection = await mysql2.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.PASSWORD,
    database: process.DB,
    uri: process.env.URI
  });

  return connection;
  } 
  catch (error) {
    console.log(error);
  }
}

export default { connection };
