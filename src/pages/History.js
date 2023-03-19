import styled from "styled-components";
import FooterUsers from "./Components/Footer";
import HeaderUser from "./Components/Header";




export default function History (){


    return (

        <>
        <HeaderUser></HeaderUser>
        <Corpo>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Corpo>
        <FooterUsers></FooterUsers>
        </>
    )
}




const Main = styled.main`
    


`

const Corpo = styled.div`
flex-direction: column;
display: flex;
margin-bottom: 70px;
margin-top: 70px;
background: #F2F2F2;
height: 800px;


>p{
    margin-top: 17px;
    margin-left: 20px;
    margin-right: 70px;
    font-size: 18px;
    color:  #666666;
}


>h1{
    

    color:#126BA5;
    font-family: 'Lexend Deca';
    font-size: 23px;
    font-height: 400px;
    margin-left: 20px;
    margin-top: 25px;

}
`