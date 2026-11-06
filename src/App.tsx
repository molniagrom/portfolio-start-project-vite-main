import './App.css'
import {Suspense, lazy} from "react";
import {Header} from "./layout/header/Header.tsx";
import Main from "./layout/sections/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";

const Projects = lazy(() => import("./layout/sections/Projects/Projects.tsx").then((module) => ({default: module.Projects})));
const AboutMe = lazy(() => import("./layout/sections/aboutMe/AboutMe.tsx").then((module) => ({default: module.AboutMe})));
// const Highlights = lazy(() => import("./layout/sections/highlights/Highlights.tsx").then((module) => ({default: module.Highlights})));
const MyStack = lazy(() => import("./layout/sections/myStack/MyStack.tsx").then((module) => ({default: module.MyStack})));
// const Testimony = lazy(() => import("./layout/sections/testimony/Testimony.tsx").then((module) => ({default: module.Testimony})));
const Contact = lazy(() => import("./layout/sections/contact/Contact.tsx").then((module) => ({default: module.Contact})));
// todo: Сделать нормальную форму в Contact
function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Suspense fallback={null}>
                <Projects/>
                <AboutMe/>
                {/*<Highlights/>*/}
                <MyStack/>
                {/* <Testimony/> */}
                <Contact/>
            </Suspense>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}

export default App
