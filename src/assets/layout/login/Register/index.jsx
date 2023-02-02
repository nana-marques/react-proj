import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import logoFull from "../../../img/logoTransparente.png";
import './styles.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data) {
    // console.log(data);
    await fetch('http://localhost:3030/add', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then( async (response) => { 
      if(response.status == 200){
        await alert('Cadastrado com Sucesso!')
        await alert('Bem vindo '+name+', a RadTek agradece ao seu registro.')
        setName('')
        setPassword('')
        setEmail('')
      }
      if(response.status == 435){
        alert('Email já cadastrado no sistema')
      }

     }).catch( () => {
      alert('problema na api, requisição não funcionou. Da um salv no Guilherme')
    }) 

  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      

      <span className="login-form-title">
        <img src={logoFull} alt="Radtek" />
      </span>
      <span className="login-form-title-register"> Criar Conta </span>

      <div className="wrap-input">
        <input id="name"
          className={name !== "" ? "has-val input" : "input"}
          type="text"
          value={name}
          name="name" {...register("name")}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Nome"></span>
      </div>

      <div className="wrap-input">
        <input id="email"
          className={email !== "" ? "has-val input" : "input"}
          type="email"
          name="email" {...register("email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Email"></span>
      </div>

      <div className="wrap-input">
        <input id="password"
          className={password !== "" ? "has-val input" : "input"}
          type="password"
          name="password" {...register("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Password"></span>
      </div>

      <div className="container-login-form-btn">
        <button className="login-form-btn">Login</button>
      </div>

      <div className="text-center">
        <span className="txt1">Já possui conta? </span>
        <Link className="txt2" to="/login">
          Acessar com Email e Senha.
        </Link>
      </div>
    </form>
  )
}

export default Register;