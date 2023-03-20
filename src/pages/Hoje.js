import UserHeader from "./Components/Header"
import FooterUsers from "./Components/Footer"
import TodayHabit from "./Components/TodayHabit"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import axios from "axios"
import { HabitsContext } from "./Context/HabitsContext"

export default function Today() {

    require("dayjs/locale/pt-br")

    const { HabitoPorcentagem, setHabitoPorcentagem } = useContext(HabitsContext)
    const [HabitosDia, setHabitosDia] = useState([])
    const [habitsConcluded, setHabitsConcluded] = useState([]);
    const [infoWasReceived, setInfoWasReceived] = useState(false)
    const [noHabitsConcluded, setNoHabitsConcluded] = useState(true)

    let diaAtual = dayjs().locale('pt-BR').format(`dddd, DD/MM`)
    diaAtual = setFirstLetterToUpper(diaAtual)

    function setFirstLetterToUpper(diaAtual) {
        diaAtual = Array.from(diaAtual)
        diaAtual[0] = diaAtual[0].toUpperCase()
        diaAtual = diaAtual.join("")
        return diaAtual
    }

    const config = {
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem('userInfo')).token
        }
    }

    useEffect(() => {
        const todayGetUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

        axios.get(todayGetUrl, config)
            .then(res => {
                setHabitosDia(res.data)

                let HabitosMap = (res.data).filter((habit) => {
                    if (habit.done) {
                        return true
                    }
                    return false
                })

                HabitosMap = HabitosMap.map((habit) => {
                    return habit.name
                })

                setHabitsConcluded([...HabitosMap])

                setHabitoPorcentagem((HabitosMap.length / res.data.length) * 100)

                setNoHabitsConcluded(HabitosMap.length === 0)

                setInfoWasReceived(true)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Container>
            <UserHeader />
            {infoWasReceived ? (
                <Main noHabitsConcluded={noHabitsConcluded}>
                    <Textos>
                        <h2 data-test="today">{diaAtual}</h2>
                        <p data-test="today-counter">{(!HabitoPorcentagem) ? ("Nenhum hábito concluído ainda") : (`${HabitoPorcentagem.toFixed(0)}% dos hábitos concluídos`)}</p>
                    </Textos>
                    <ContainerDia>
                        {HabitosDia[0] !== undefined && (HabitosDia.map((todayHabit, i) => (
                            <div key={i}>
                                <TodayHabit
                                    HabitoInfoHoje={todayHabit}
                                    habitsQuantity={HabitosDia.length}
                                    habitsConcluded={habitsConcluded}
                                    setHabitsConcluded={setHabitsConcluded}
                                />
                            </div>
                        )))}
                    </ContainerDia>
                </Main>) : (
                <div>CARREGANDO</div>
            )}
            <FooterUsers />
        </Container>
    )
}

const Container = styled.main`
    background: #F2F2F2;
    margin-top: 70px;
    height: calc(100% - 140px);
    overflow-y: scroll;
   height: 600px;
`

const Main = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`

const Textos = styled.div`
    width: 340px;
    margin: 20px 0px;
    > h2 {
        font-family: 'Lexend Deca';
        font-size: 23px;
        color: #126BA5;
        margin: auto 0px;
        margin-bottom: 10px;
    }
    > p {
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: ${props => props.noHabitsConcluded ? "#BABABA" : "#8FC549"}
    }
`

const ContainerDia = styled.section`
    > div {
        margin-bottom: 10px;
    }
`