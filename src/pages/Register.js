import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


import logo from "../img/logo.svg"






export default function Register() {
    const [userLoginRegister, setUserLoginRegister] = useState('')
    const [userPasswordRegister, setUserPasswordRegister] = useState('')
    const [disableInfo, setDisableInfo] = useState(false)
    const [userNameRegister, setUserNameRegister]= useState('')
    const [userImageRegister, setUserImageRegister] = useState('')

    return (
        <>
            <Header>
                <img src={logo} alt="logo"></img>
            </Header>

            <Form>
                <input
                    value={userLoginRegister}
                    type="email"
                    disabled={disableInfo}
                    placeholder="email"
                    data-test="email-input"
                />
                <input
                    value={userPasswordRegister}
                    type="password"
                    disabled={disableInfo}
                    placeholder="senha"
                    data-test="email-input"
                />
                <input
                    value={userNameRegister}
                    type="text"
                    disabled={disableInfo}
                    placeholder="nome"
                    data-test="user-name-input"
                />
                 <input
                    value={userImageRegister}
                    type="url"
                    disabled={disableInfo}
                    placeholder="foto"
                    data-test="user-image-input"
                />


                <button>Entrar</button>
            </Form>

            <Link to="/" data-test="login-link" >
            <Text><p>Já tem uma conta? Faça login!</p></Text>
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
