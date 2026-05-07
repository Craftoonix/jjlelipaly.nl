import { Routes, Route } from 'react-router-dom';
import "./Board.css"
import Home from "./Home"
import AboutMe from "./AboutMe"

function Message(){
    return (
        <main className={"container"}>
            <div className={"board"}>
                <Routes>
                    <Route path="/" element={<Home/>}/> 
                    <Route path="/aboutme" element={<AboutMe/>}/>
                </Routes>
            </div>
        </main>
    );

    
}

export default Message;