import mysql2  from 'mysql2/promise';

const connection = async () => 
{
  try {
  // const connection = await mysql2.createConnection("http://localhost:3306");
  const connection = await mysql2.createConnection({
    host: process.env.db_host,
    port: process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_pwd,
    database: process.env.db_name
  });

  return connection;
  } 
  catch (error) {
    console.log(error);
  }
}

export default { connection };
