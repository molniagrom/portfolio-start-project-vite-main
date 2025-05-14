import './App.css'
import {Header} from "./layout/header/Header.tsx";
import Main from "./layout/sections/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Projects} from "./layout/sections/Projects/Projects.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Highlights} from "./layout/sections/highlights/Highlights.tsx";
import {MyStack} from "./layout/sections/myStack/MyStack.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Quote} from "./layout/sections/quote/Quote.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";


// import styled from "styled-components";
function App() {

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <AboutMe/>
            <Highlights/>
            <MyStack/>
            <Testimony/>
            <Quote/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App

