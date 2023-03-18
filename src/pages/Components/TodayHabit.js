import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components"
import {BsFillCheckSquareFill }from "react-icons/bs";
import { HabitsContext } from "../Context/HabitsContext"
import checkMark from ".././../img/check-mark.png"

export default function TodayHabit({ HabitoInfoHoje, habitsQuantity, habitsConcluded, setHabitsConcluded }) {

    const config = {
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem('userInfo')).token
        }
    }

    const { setHabitoPorcentagem } = useContext(HabitsContext)

    const [MarcouHabito, setMarcouHabito] = useState(HabitoInfoHoje.done)

    function concludeHabit() {
        const checkHabitUrl = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${HabitoInfoHoje.id}/check`
        const uncheckHabitUrl = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${HabitoInfoHoje.id}/uncheck`

        if (!MarcouHabito) {

            setMarcouHabito(!MarcouHabito)
            
            if (!habitsConcluded.includes(HabitoInfoHoje.name)) {
                setHabitsConcluded([...habitsConcluded, HabitoInfoHoje.name])
                setHabitoPorcentagem(((habitsConcluded.length + 1) / habitsQuantity) * 100)
            
                axios.post(checkHabitUrl, {}, config)
                    .catch(err => console.error(err))
            }
        } else {
            
            setMarcouHabito(!MarcouHabito)
            
            const newHabitsConcluded = habitsConcluded.filter((habit) => {
                if (habit === HabitoInfoHoje.name) {
                    return false
                }
                return true
            })
            
            setHabitsConcluded(newHabitsConcluded)
            setHabitoPorcentagem(((habitsConcluded.length - 1) / habitsQuantity) * 100)
            
            axios.post(uncheckHabitUrl, {}, config)
                .catch(err => console.error(err))
        }
    }

    return (
        <Main data-test="today-habit-container">
            <div>
                <Detalhes
                    MarcouHabito={MarcouHabito}
                    isEqual={HabitoInfoHoje.SequenciaAtual === HabitoInfoHoje.highestSequence}
                >
                    <h3 data-test="today-habit-name">
                        {HabitoInfoHoje.name}
                    </h3>
                    <SequenciaAtual data-test="today-habit-sequence">
                        <p>Sequencia atual:</p>
                        <p>{HabitoInfoHoje.SequenciaAtual} dias</p>
                    </SequenciaAtual>
                    <span data-test="today-habit-record">
                        <p>Seu recorde:</p>
                        <p>{HabitoInfoHoje.highestSequence} dias</p>
                    </span>
                </Detalhes>
                <BotaoVerifica
                    data-test="today-habit-check-btn"
                    MarcouHabito={MarcouHabito}
                    onClick={concludeHabit}
                >
                   <img src={checkMark} alt="verifica"/>
                </BotaoVerifica>
            </div>
        </Main>
    )
}







const Main = styled.div`
    box-sizing: border-box;
    padding: 10px;
    width: 340px;
    margin: auto;
    background: #FFFFFF;
    border-radius: 5px;
    
    > div {
        display: flex;
        justify-content: space-between;
    }
`

const Detalhes = styled.div`
    > h3 {
        font-family: 'Lexend Deca';
        font-size: 20px;
        color: #666666;
        margin-top: 5px;
    }
    > span {
        display: flex;
        > p {
            font-family: 'Lexend Deca';
            font-size: 13px;
            margin-top: 5px;
            color: #666666;
        }
        > p:nth-child(2) {
            margin-left: 5px;
            color: ${props => props.MarcouHabito && props.isEqual ? "#8FC549" : "#666666"};
        }
    }
`

const SequenciaAtual = styled.span`
    display: flex;
    > p {
        font-family: 'Lexend Deca';
        font-size: 13px;
        margin-top: 0px;
        color: #666666;
    }
    > p:nth-child(2) {
        
        margin-left: 5px;
        color: ${props => props.MarcouHabito ? "#8FC549" : "#666666"};
    }
`

const BotaoVerifica = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.MarcouHabito ? "#8FC549" : "#EBEBEB"};
    width: 69px;
    height: 69px;
    border-radius: 5px;
`