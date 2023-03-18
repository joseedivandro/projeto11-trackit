import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import logo from "../img/logo.svg"






export default function Register() {

    const navigate = useNavigate()

    const [userLoginRegister, setUserLoginRegister] = useState('')
    const [userPasswordRegister, setUserPasswordRegister] = useState('')
    const [disableInfo, setDisableInfo] = useState(false)
    const [userNameRegister, setUserNameRegister] = useState('')
    const [userImageRegister, setUserImageRegister] = useState('')
    


    function EnviaDados(e) {
        e.preventDefault()

        setDisableInfo(true)

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

        const registraEnvio = {
            email: userLoginRegister,
            name: userNameRegister,
            image: userImageRegister,
            password: userPasswordRegister
        }

        axios.post(url, registraEnvio)
            .then(res => {
                navigate("/")
                setDisableInfo(false)

            })
            .catch(err => {
                alert("tente novamente mais tarde")
                setDisableInfo(false)

            })
    }

    return (
        <Main>
            <Header>
                <img src={logo} alt="logo"></img>
            </Header>

            <Form onSubmit={(e) => EnviaDados(e)}>
                <input
                    value={userLoginRegister}
                    type="email"
                    disabled={disableInfo}
                    onChange={(e) => setUserLoginRegister(e.currentTarget.value)}
                    placeholder="email"
                    data-test="email-input"
                />
                <input
                    value={userPasswordRegister}
                    type="password"
                    disabled={disableInfo}
                    onChange={(e) => setUserPasswordRegister(e.currentTarget.value)}
                    placeholder="senha"
                    data-test="email-input"
                />
                <input
                    value={userNameRegister}
                    type="text"
                    disabled={disableInfo}
                    onChange={(e) => setUserNameRegister(e.currentTarget.value)}
                    placeholder="nome"
                    data-test="user-name-input"
                />
                <input
                    value={userImageRegister}
                    type="url"
                    disabled={disableInfo}
                    onChange={(e) => setUserImageRegister(e.currentTarget.value)}
                    placeholder="foto"
                    data-test="user-image-input"
                />


                <button
                    type="submit"
                    data-test="signup-btn"
                    disabled={disableInfo}
                >
                    {disableInfo ? (
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    ) : (
                        "Cadastrar"
                    )}
                </button>


            </Form>

            <Link to="/" data-test="login-link" >
                <p>Já tem uma conta? Faça login!</p>
            </Link>


        </Main>
    )

}


const Main = styled.main`
display:flex;
flex-direction: column;
align-items: center;

`


const Textrun = styled.text`
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
    width: 250px;
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
