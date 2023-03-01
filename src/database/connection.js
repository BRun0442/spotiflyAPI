import mysql2  from 'mysql2/promise';

const connection = async () => 
{
  try {
  const connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.DB_PASSWORD,
    database: process.DB_NAME,
    uri: process.env.DB_URI
  });

  return connection;
  } 
  catch (error) {
    console.log(error);
  }
}

export default { connection };
