import database from '../database/connection.js';

async function signUp(name, email, password, birthday)
{
  const connection = await database.connection();
  
  try {
    const data = [name, email, password, birthday]

    const sql = `INSERT into user(name, email, password, birthday) 
                  values(?, ?, ?, ?)`;
      
    await connection.query(sql, data)
    connection.end();
  } 
  catch (error) {
    connection.end();
    console.log(error)
  }
}
async function login(email)
{
  const connection = await database.connection();
  
  try {
    const sql = "SELECT * from user WHERE email=?";

    const userData = await connection.query(sql, [email]);
    connection.end();
  
    return userData[0];
  } 
  catch (error) {
    connection.end();
    console.log(error);
  }
}

// async function getUserDataByEmail()
// {
//   const connection = database.connection();
//   const sql = 'SELECT * from user '
// }

export { login, signUp};