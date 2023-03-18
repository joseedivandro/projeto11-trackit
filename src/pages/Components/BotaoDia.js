import { useState } from "react"


import styled from "styled-components"

export default function BotaoDia({ dia, escolheDia, setescolheDia, infoDisabled }) {

    const [escolheBtnSemana, setescolheBtnSemana] = useState(false)

    if (infoDisabled && escolheBtnSemana) {
        setescolheBtnSemana(false)
    }

    return (
        <BotaoDiaSemana
            data-test="habit-day"
            disabled={infoDisabled}
            escolheBtnSemana={escolheBtnSemana}
            onClick={() => {
                setescolheBtnSemana(!escolheBtnSemana)
                setescolheDia([...escolheDia, dia.idDiaSemana])
            }}>
            {dia.inicial}
        </BotaoDiaSemana>
    )
}

const BotaoDiaSemana = styled.button`
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