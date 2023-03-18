
import ResetStyle from "./styles/ResetStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Habits from "./pages/Habits";
import styled from "styled-components";
import Hoje from "./pages/Hoje";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";



import {UserContext} from "./pages/Context/UseContext"
import { HabitsContext } from "./pages/Context/HabitsContext";


function App() {

  const [userReceivedInfo, setUserReceivedInfo] = useState({})
  const [HabitoPorcentagem, setHabitoPorcentagem] = useState(0)
  const [userHabits, setUserHabits] = useState([])
  const [habitNameToAdd, setHabitNameToAdd] = useState("")


 

  return (
    <>
    
      <Main>

      <HabitsContext.Provider
          value={{ HabitoPorcentagem, setHabitoPorcentagem, userHabits, setUserHabits, habitNameToAdd, setHabitNameToAdd }}
        >
      <UserContext.Provider
        value={{ userReceivedInfo, setUserReceivedInfo }}
    >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login />}

            />
            <Route
              path="/cadastro"
              element={<Register />}
            />
             <Route
            
            path="/hoje"
              element={<Hoje/>}
            />

            <Route
              path="/habitos"
              element={<Habits/>}
            />

           


          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </HabitsContext.Provider>
      </Main>
    </>
  );

}





const Main = styled.main`


`

export default App;