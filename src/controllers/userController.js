import express from "express";
import { login, signUp } from "../services/userService.js";

const routes = express.Router();



routes.post('/signUp', async (req, res) => {
  const { name, email, password, birthday } = req.body;

  if(!name || !email || !password || !birthday)
  {
    return res.status(404).json({msg: 'Insira todos os dados!'})
  }

  try {
    await signUp(name, email, password, birthday)
    
    return res.status(201).json({msg: 'Usuário criado com sucesso!'})
  } 
  catch (error) {
    console.log(error)
    return res.status(400).json({msg: 'Erro ao criar usuário'})
  }

})



routes.post('/login', async (req, res) => {
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
    msg: 'Usuário logado com sucesso'
    // userName: user.nickname,
    // userId: user.id
  })
})

export default routes;
