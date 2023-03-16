//bibliotecas 




//componentes 
import ResetStyle from "./styles/ResetStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Habits from "./pages/Habits";
import styled from "styled-components";
import Hoje from "./pages/Hoje";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";



import {UserContext} from "./pages/UseContext"


function App() {

  const [userReceivedInfo, setUserReceivedInfo] = useState({})

  return (
    <>
    
      <Main>
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
      </Main>
    </>
  );

}





const Main = styled.main`
display:flex;
align-items: center;
justify-content: center;

flex-direction: column;

`

export default App;