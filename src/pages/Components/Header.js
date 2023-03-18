import styled from "styled-components";
import { useNavigate } from "react-router-dom";




export default function HeaderUser() {


    return (
        <>
        <HeaderPage>
            <p>TrackIt</p>
            <img></img>
        </HeaderPage>
      
        </>

    )
}


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
    height: 51px;8
    background-color: black;
    margin-right: 18px;
    border-radius: 40px;
    
}

`
