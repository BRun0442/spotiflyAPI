import express from "express";
import login from "../services/userService.js";

const routes = express.Router();

routes.get('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({msg: 'Insira todos os dados!'})
  }

  const user = await login(email);

    if(user.length == 0)
    {
      return res.status(404).json({msg: 'Esse usuário não existe!'})
    }

    if(password != user[0].password)
    {
      return res.status(400).json({msg: 'O email/senha não coincidem!'})
    }

  return res.status(200).json({
    msg: 'Usuário logado com sucesso',
    userName: user.nickname,
    userId: user.id
  })
})

export default routes;