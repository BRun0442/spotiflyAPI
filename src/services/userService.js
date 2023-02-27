import database from '../database/connection.js';

async function login(email)
{
  const connection = await database.connection();
  
  try {
    const sql = "SELECT * from user WHERE email=?";

    const userData = await connection.query(sql, [email]);
    connection.end();
  
    console.log(userData[0])
    //Index 0 to prevent conflicts
    return userData[0];
  } catch (error) {
    console.log(error);
  }
}

// async function getUserDataByEmail()
// {
//   const connection = database.connection();
//   const sql = 'SELECT * from user '
// }

export default login;