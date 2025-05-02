import './App.css'
import {Header} from "./layout/header/Header.tsx";
import Main from "./layout/sections/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Projects} from "./layout/sections/Projects/Projects.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Highlights} from "./layout/sections/highlights/Highlights.tsx";
import {MyStack} from "./layout/sections/myStack/MyStack.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {Quote} from "./layout/sections/quote/Quote.tsx";
import styled from "styled-components";
import {Icon} from "./components/icon/Icon.tsx";
// import {IconsContact} from "./layout/sections/contact/iconsContact/IconsContact.tsx";


// import styled from "styled-components";
function App() {
    return (
        <AppStyled className="App">
            <Header/>
            <Icon zIndex={"-1"} top={"0"} left={"0"} position={"absolute"} iconId={"BlueBgKv"} width="380" height="936" viewBox="0 0 380 936"/>
            <Main/>
            <Projects/>
            <AboutMe/>
            <Highlights/>
            <MyStack/>
            <Testimony/>
            <Contact/>
            <Quote/>
            <Footer/>
        </AppStyled>
    )
}

export default App

const AppStyled = styled.div`
    position: relative;
`