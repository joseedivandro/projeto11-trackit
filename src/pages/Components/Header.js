import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ReceivedInfoContext } from "../Context/UseContext";


export default function HeaderUser() {


    const { userReceivedInfo, setUserReceivedInfo } = useContext(ReceivedInfoContext)

    const nagivate = useNavigate()


    if (userReceivedInfo.token === undefined) {

        setUserReceivedInfo(JSON.parse(localStorage.getItem('userInfo')))
    }


    
    return (
        <div data-test="header">
            <HeaderPage>
                <p>TrackIt</p>
                <ContainerImagem>
               
                <img src={userReceivedInfo.image} alt="perfil"/>

                </ContainerImagem>

            </HeaderPage>

        </div>

    )
}


const ContainerImagem = styled.div`
display: flex ;
justify-content: center;
align-items: center;
> img {
    width: 51px;
    height: 51px;
    background: url(image.png);
    border-radius: 98px;
    margin-right:20px;
}

`

const HeaderPage = styled.header`

position: fixed;
font-size: 39px;
top: 0px;
background-color: #126BA5;
height: 70px;
width:100%;
display:flex;
align-items:center;
justify-content: space-between;
margin: auto 0px;

>p{
    margin-left: 18px;
    color: white;
    font-family: 'Playball';
    font-size: 39px;
}

>img{
    width: 51px;
    height: 51px;
    background-color: black;
    margin-right: 100px;
    border-radius: 50px;
    
}

`
