import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ThreeDots } from "react-loader-spinner";

import axios from "axios";

import logo from "../img/logo.svg"




//use de context para o projeto em si



import { userContext } from "./Context/UseContext";

export default function Login() {


    const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState('')
    const [disableInfo, setDisableInfo] = useState(false)
    const [userPassword, setUserPassword] = useState('')

    const { setUserReceivedInfo } = useContext(userContext)




    function enviaLoginUser(e) {
        e.preventDefault()

        setDisableInfo(true)

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const infoLoginUser = {
            email: userLogin,
            password: userPassword
        }

        axios.post(url, infoLoginUser)
            .then(res => {  
                const userInfoToStore = JSON.stringify(res.data)
                localStorage.setItem('userInfo', userInfoToStore)
                setUserReceivedInfo(JSON.parse(userInfoToStore))
                setDisableInfo(false)
                navigate("/hoje")
            })
            .catch(err => {
                console.log(err)
                setDisableInfo(false)
                alert('Usuário ou senha invalido(s), tente novamente')
            })
    }



    return (
        <Main>
            <Header>
                <img src={logo} alt="logo"></img>
            </Header>

            <Form onSubmit={(e) => enviaLoginUser(e)}>
                <input
                    value={userLogin}
                    type="email"
                    disabled={disableInfo}
                    onChange={(e) => setUserLogin(e.currentTarget.value)}
                    placeholder="email"

                    data-test="email-input"
                />
                <input
                    value={userPassword}
                    type="password"
                    disabled={disableInfo}
                    onChange={(e) => setUserPassword(e.currentTarget.value)}
                    placeholder="senha"

                    data-test="password-input"
                />


                <button
                    type="submit"
                    disabled={disableInfo}
                    data-test="login-btn"
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
                        "Entrar"
                    )}
                </button>

                <Link to="/cadastro" data-test="signup-link">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </Form>
        </Main>
    )

}




const Main = styled.main`

display:flex;
flex-direction: column;
align-items: center;

`

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
