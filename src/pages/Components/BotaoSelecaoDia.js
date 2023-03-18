import { useState } from "react"
import styled from "styled-components"

export default function BotaoSelecaoDia({ dia, habitoDia }) {

    const [escolheBtnSemana, setescolheBtnSemana] = useState(false)

    if (habitoDia.includes(dia.idDiaSemana) && escolheBtnSemana === false) {
        setescolheBtnSemana(true)
    }

    return (
        <BotaoDia
            data-test="habit-day"
            escolheBtnSemana={escolheBtnSemana}
        >
            {dia.inicial}
        </BotaoDia>
    )
}

const BotaoDia = styled.button`
width: 30px;
height: 30px;
font-weight: 400;
font-family: 'Lexend Deca';  
background-color: ${props => props.escolheBtnSemana ? "#CFCFCF" : "#FFFFFF"};
border: 1px solid #D4D4D4;
border-radius: 5px;
font-size: 20px;
color: ${props => props.escolheBtnSemana ? "#FFFFFF" : "#DBDBDB"};
margin-left: 4px;
`