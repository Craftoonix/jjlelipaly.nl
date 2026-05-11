import { Routes, Route, Link } from 'react-router-dom';
import "./Board.css"
import Home from "./Home"
import Projects from "./Projects"

function Message(){
    return (<>
        <main className={"container"}>
            <div className={"title"}>
                <nav>
                    <Link to ="/"><span className={"rainbow-text-animated"}>Joshua's Webpage</span></Link>
                </nav>
                
            </div>  
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
            
        </main>    
        </>

    );

    
}

export default Message;