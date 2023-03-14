import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


import logo from "../img/logo.svg"






export default function Login() {
    const [userLogin, setUserLogin] = useState('')
    const [disableInfo, setDisableInfo] = useState(false)
    const [userPassword, setPassword] = useState('')

    return (
        <>
            <Header>
                <img src={logo} alt="logo"></img>
            </Header>

            <Form>
                <input
                    value={userLogin}
                    type="email"
                    disabled={disableInfo}
                    placeholder="email"
                    data-test="email-input"
                />
                <input
                    value={userPassword}
                    type="password"
                    disabled={disableInfo}
                    placeholder="senha"
                    data-test="password-input"
                />


                <button
                type="submit"
                disabled={disableInfo}
                data-test="login-btn"
                >Entrar</button>
            </Form>

            <Link to="/cadastro" data-test="signup-link">
                <Text><p>Não tem uma conta? Cadastre-se!</p></Text>
            </Link>

        </>
    )

}



const Text = styled.text`
>p{
    margin-top: 25px;
    color: #52B6FF;
    text-decoration: underline; 
}


`

const Header = styled.header`

display: flex;
flex-direction: column;


>img{
    margin-top: 68px;
}


`


const Form = styled.form`

display: flex;
flex-direction: column;
align-items:center;

>input{
width: 303px;
height: 45px;
font-size:20px;
margin-top: 6px;
border-color: #D4D4D4;
}

>button{
    width: 310px;
    height: 45px;
    margin-top: 6px;
    background-color: #52B6FF;
    font-size: 21px;
    color: white;
    font-weight: bold;
    border-color: #D4D4D4;
   
`
