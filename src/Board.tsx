import { Routes, Route, Link } from 'react-router-dom';
import "./Board.css"
import Home from "./Home"
import AboutMe from "./AboutMe"

function Message(){
    return (
        <main className={"container"}>
            <div className={"title"}>
                <nav>
                    <Link to ="/"><span className={"rainbow-text-animated"}>Joshua's Webpage</span></Link>
                </nav>
                
            </div>  
            <div className={"board"}>
           
                <Routes>
                    <Route path="/" element={<Home/>}/> 
                    <Route path="/projects" element={<AboutMe/>}/>
                </Routes>
            </div>
        </main>
    );

    
}

export default Message;