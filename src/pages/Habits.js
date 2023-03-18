// libraries
import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

// components
import BotaoDia from "./Components/BotaoDia"
import BotaoSelecaoDia from "./Components/BotaoSelecaoDia"
import UserHeader from "./Components/Header"
import FooterUsers from "./Components/Footer"


// contexts
import { HabitsContext } from "./Context/HabitsContext"

// images
import trashCan from "../img/trash-can.png"

export default function Habits() {

    const [canBeLoaded, setCanBeLoaded] = useState(false)
    const [addButtonWasClicked, setAddButtonWasClicked] = useState(false)
    const [infoDisabled, setinfoDisabled] = useState(false)
    const [habitName, setHabitName] = useState('')
    const [escolheDia, setescolheDia] = useState([])

    const { userHabits, setUserHabits } = useContext(HabitsContext)

   
    const weekDaysArray = [
        {
            inicial: 'D',
            weekDay: "domingo",
            idDiaSemana: 0,
        },
        {
            inicial: 'S',
            weekDay: "segunda",
            idDiaSemana: 1,
        },
        {
            inicial: 'T',
            weekDay: "terca",
            idDiaSemana: 2,
        },
        {
            inicial: 'Q',
            weekDay: "quarta",
            idDiaSemana: 3,
        },
        {
            inicial: 'Q',
            weekDay: "quinta",
            idDiaSemana: 4,
        },
        {
            inicial: 'S',
            weekDay: "sexta",
            idDiaSemana: 5,
        },
        {
            inicial: 'S',
            weekDay: "sabado",
            idDiaSemana: 6,
        }]
    const newHabit = {
        name: habitName,
        days: escolheDia
    }

    const config = {
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem('userInfo')).token
        }
    }

    function salvarHabitos() {
        const postHabitUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        setinfoDisabled(true)

        axios.post(postHabitUrl, newHabit, config)
            .then(response => {
                getHabits()
            })
            .catch(err => {
                console.log(err)
                alert("Seu hábito não foi criado! Tente novamente...")
                setinfoDisabled(false)
            })
    }

    function getHabits() {
        const getHabitUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        axios.get(getHabitUrl, config)
            .then(response => {
                setUserHabits(response.data)
                setinfoDisabled(false)
                setHabitName("")
                setescolheDia([])
                if (addButtonWasClicked) {
                    setAddButtonWasClicked(!addButtonWasClicked)
                }
                setCanBeLoaded(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function deleteHabit(habitId) {

        if (window.confirm('Você realmente deseja deletar este hábito?')) {

            const deleteHabitUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + habitId

            axios.delete(deleteHabitUrl, config)
                .then(response => getHabits())
                .catch(err => console.log(err))

        }
    }

    useEffect(getHabits, [])

    return (
        <Main>
            <UserHeader />
            {canBeLoaded ? (<>
                <Container>
                    <div>
                        <p>Meus hábitos</p>
                        <button
                            data-test="habit-create-btn"
                            onClick={() => setAddButtonWasClicked(!addButtonWasClicked)}
                            disabled={infoDisabled}
                        >
                            +
                        </button>
                    </div>
                    <Habitos
                        addButtonWasClicked={addButtonWasClicked}
                        data-test="habit-create-container"
                    >
                        <input
                            type="text"
                            value={habitName}
                            onChange={(e) => setHabitName(e.currentTarget.value)}
                            placeholder="nome do hábito"
                            disabled={infoDisabled}
                            data-test="habit-name-input"
                        />
                        <WeekDaysWrapper>
                            {weekDaysArray.map((dia, i) => (
                                <BotaoDia
                                    key={i}
                                    dia={dia}
                                    escolheDia={escolheDia}
                                    setescolheDia={setescolheDia}
                                    infoDisabled={infoDisabled}
                                />
                            ))}
                        </WeekDaysWrapper>
                        <ButtonsWrapper>
                            <Cancelar
                                data-test="habit-create-cancel-btn"
                                disabled={infoDisabled}
                                onClick={() => {
                                    setAddButtonWasClicked(!addButtonWasClicked)
                                }}
                            >
                                Cancelar
                            </Cancelar>
                            <SaveButton
                                data-test="habit-create-save-btn"
                                onClick={salvarHabitos}
                                disabled={infoDisabled}
                            >
                                {infoDisabled ? <ThreeDots
                                    height="30"
                                    width="70"
                                    radius="9"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                /> : "Salvar"}
                            </SaveButton>
                        </ButtonsWrapper>
                    </Habitos>
                    {!userHabits[0] && (
                        <NoHabitsText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsText>
                    )}
                </Container>
                {userHabits[0] && (
                    userHabits.map((habit, i) => (
                        <Habit data-test="habit-container" key={i} >
                            <header>
                                <p data-test="habit-name">{habit.name}</p>
                                <img
                                    data-test="habit-delete-btn"
                                    src={trashCan} alt="imagem"
                                    onClick={() => deleteHabit(habit.id)}
                                />
                            </header>
                            {weekDaysArray.map((dia, i) => (
                                <BotaoSelecaoDia
                                    key={i}
                                    dia={dia}
                                    habitoDia={habit.days}
                                />
                            ))}
                        </Habit>
                    ))
                )}
            </>) : <div>CARREGANDO</div>}
            <FooterUsers />
        </Main>
    )
}

const Main = styled.main`
    margin-top: 70px;  
    overflow-y: scroll;
    background: #F2F2F2;
    margin-bottom: 90px;
    alig-items: center;
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    > div {
        width: 340px;
        display: flex;
        justify-content: space-between;  
        margin: 20px 0px;
        > p {
            font-family: 'Lexend Deca';
            font-size: 23px;
            color: #126BA5;
            margin: auto 0px;
        }
        > button {
            width: 40px;
            height: 35px;
            border: none;
            background: #52B6FF;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-size: 27px;
            text-align: center;
            color: #FFFFFF;
        }
    }
`

const Habitos = styled.section`
    display: ${props => props.addButtonWasClicked ? "flex" : "none"};
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    width: 340px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    > input {
        font-family: 'Lexend Deca';
        box-sizing: border-box;
        font-size: 20px;
        padding: 0 20px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        
    }
    
`

const WeekDaysWrapper = styled.span`
    margin: 20px 0;
    margin-left: -55px;
`

const NoHabitsText = styled.text`
    font-family: 'Lexend Deca';
    font-size: 18px;
    color: #666666;
    padding: 0px 40px;
    margin-top: 20px;
`

const ButtonsWrapper = styled.span`
    display: flex;
`

const Cancelar = styled.button`
    font-family: 'Lexend Deca';
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    background: none;
    border: none;
`

const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;   
    font-family: 'Lexend Deca';
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 20px;
    margin-right: -120px;
`

const Habit = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 105px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0px auto;
    margin-bottom: 20px;
    padding: 15px;
    > header {
        display: flex;
        justify-content: space-between;
        > p {
            font-family: 'Lexend Deca';
            margin-bottom: 10px;
            font-size: 20px;
            color: #666666;
        }
        > img {
            width: 13px;
            height: 15px;
        }
    }
`
