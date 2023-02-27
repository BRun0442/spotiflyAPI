import mysql2  from 'mysql2/promise';

const connection = async () => 
{
  try {
  // const connection = await mysql2.createConnection("http://localhost:3306");
  const connection = await mysql2.createConnection({
    host: "bixohb7bw3rkoahswsn1-mysql.services.clever-cloud.com",
    port: 3306,
    user: "uaxk4lui3ydynzye",
    password: "77mmKFttSYzeaT8j2XDS",
    database: "bixohb7bw3rkoahswsn1"
  });

  return connection;
  } 
  catch (error) {
    console.log(error);
  }
}

export default { connection };
