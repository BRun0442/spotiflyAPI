import mysql2  from 'mysql2/promise';

const connection = async () => 
{
  try {
    const connection = await mysql2.createConnection(process.env.DATABASE_URL);

    return connection;
  } 
  catch (error) {
    console.log(error);
  }
}

export default { connection };
