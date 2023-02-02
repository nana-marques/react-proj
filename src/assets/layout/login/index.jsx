//import css
import logoFull from "../../img/logoTransparente.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const SubmitLogin = async (date) => {
      await fetch('http://localhost:3030/login',{
        method : 'POST',
        body: JSON.stringify(date),
        cors: 'cors',
        headers :{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        if(res.status == 200){
          res.json().then( async (date) =>(
            await localStorage.setItem('name', date.name),
            await localStorage.setItem('id', date.id),
            await navigate("/"),
            await window.location.reload(),
            alert('LOGADO')
            ))
        }
        
        if(res.status == 420){
          alert('Email incorreto ou nunca registrado em sistema')
        }

        if(res.status == 421){
          alert('Senha incorreta')
        }
      })
    }

    return (
        <form className="login-form" onSubmit={handleSubmit(SubmitLogin)}>
          <span className="login-form-title">
            <img src={logoFull} alt="Radtek" />
          </span>
          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              name='email'  {...register("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              name='password'  {...register("password")}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn" type="submit">Login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta? </span>
            <Link className="txt2" to="/register">
              Criar conta.
            </Link>
          </div>
        </form>
    )
}
 
export default Login