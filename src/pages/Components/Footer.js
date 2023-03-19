import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';


export default function FooterUsers() {

    return (
       
            <FooterUser data-test="menu">
                <Link 
                data-test="habit-link"
                to={"/habitos"}>
                <p>Hábitos</p>
                </Link>
                <CircleMenu>
                <Link
                    to="/hoje"
                    data-test="today-link"
                >
                    <CircularProgressbarWithChildren
                        
                        styles={buildStyles({
                            strokeLinecap: 'round',
                            pathTransitionDuration: 2,
                            pathTransition: "none",
                            pathColor: `#FFFFFF`,
                            textColor: '#FFFFFF',
                            trailColor: 'rgba(0, 0, 0, 0)',
                            backgroundColor: '#52B6FF',
                        })}>
                        <p>Hoje</p>
                    </CircularProgressbarWithChildren>
                </Link>
                    </CircleMenu>
                
                <Link 
                data-test="history-link"
                to={"/historico"}>
                <p>Histórico</p>
                </Link>
                
            </FooterUser>

        
    )



}



const FooterUser = styled.div`
box-sizing: border-box;
display: flex;
background-color:white;
width: 375px;
height: 70px;
position:fixed;
bottom: 0px;
justify-content: center;
font-size: 18px;
align-items:center;
justify-content: space-around;
font-family: 'Lexend Deca';
color: #52B6FF;


>a{
    text-decoration: none;
}


`

const CircleMenu = styled.div`
box-sizing: border-box;
width: 91px;
height: 91px;
border-radius: 50px;
margin-bottom: 40px;
display: flex;
align-items:center;
justify-content: center;
background-color: #52B6FF;
text-align: center;
color: white;




>p{
    font-family: 'Lexend Deca';
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
}

> a {
    text-decoration: none;
    padding: 4px;
    color: #FFFFFF;
}

`