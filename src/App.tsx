import './App.css'
import {Header} from "./layout/header/Header.tsx";
import Main from "./layout/sections/main/Main.tsx";

// import styled from "styled-components";
function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    )
}

export default App

