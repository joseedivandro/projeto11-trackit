//bibliotecas 




//componentes 
import ResetStyle from "./styles/ResetStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Habits from "./pages/Habits";
import styled from "styled-components";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import logo from "./img/logo.svg"



function App() {



  return (
    <>
      <Main>
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
              path="/habitos"
              element={<Habits/>}

            />



          </Routes>
        </BrowserRouter>
      </Main>
    </>
  );

}


export default App;


const Main = styled.main`
display:flex;
align-items: center;
justify-content: center;

flex-direction: column;

`