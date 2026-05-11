import { Routes, Route, Link } from 'react-router-dom';
import "./Board.css"
import Home from "./Home"
import Projects from "./Projects"

function Message(){
    return (<>
        <main className={"container"}>
            <div className={"title"}>
                <nav>
                    <Link to ="/" style={{textDecoration:"none"}}>
                        <span className={"rainbow-text-animated"}>
                            Joshua's Webpage
                        </span>
                    </Link>
                </nav>
            </div>  

            <div className={"table"}>
                <Routes>
                    <Route path="/" element={<Home/>}/> 
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>               
            </div>

            
        </main>    
        </>

    );

    
}

export default Message;