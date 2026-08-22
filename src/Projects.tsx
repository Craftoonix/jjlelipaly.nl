import { Link } from 'react-router-dom'
import "./Projects.css"

function Projects () {
    return(
        <div className={"td"}>
            <div className={"head"}>
                <div>
                    <nav><Link to="/" className={"back"}></Link></nav>
                </div>

                <h2 className={"header"} style={{fontSize:"2.5em", margin:"0em 0em 0.5em 0em"}}>
                    Projects
                </h2>
            </div>


            <h2 style={{textAlign:"left"}}>
                Solving and Generating Numberlink puzzles
            </h2>   
            <p style={{textAlign:"left"}}>
                This program was part of 
                my <Link to="https://theses.liacs.nl/pdf/2025-2026-LelipalyJJoshua.pdf" 
                target="_blank" rel="noreferrer">bachelor thesis project</Link>. It is capable
                of solving and generating any solvable Numberlink puzzle by encoding it to a SAT problem and 
                feeding this encoding to <Link to="http://minisat.se/">Minisat</Link>. 
                The project can be found <Link target="_blank" rel="noreferrer" 
                to="https://github.com/Craftoonix/numberlink-generator-solver">
                here</Link>. 
                Demo: <span className='rainbow-text-animated'>COMING SOON</span>.
            </p>

            <h2 style={{textAlign:"left", paddingTop:"1em"}}>
                Startup Market Readiness Tool
            </h2>
            <p style={{textAlign:"left"}}>
                A tool requested by <Link to="https://plnt.nl/" target="_blank" rel="noreferrer">
                PLNT</Link> that is meant to assess startups on their progress to enter the market. 
                This project was part of a university course and brought by <Link to="https://ludev.nl"
                target="_blank" rel="noreferrer">LUdev</Link>.
            </p>

            <h2 style={{textAlign:"left", paddingTop:"1em"}}>
                Tiny Doctor
            </h2>
            <p style={{textAlign:"left"}}>
                A videogame in which the player is instructed to enter a patient as a tiny doctor to combat 
                their issue from the inside. This game has metroidvania and 2D platformer elements where the 
                player can defeat enemies with unlockable weapons and explore through the means of 
                parkouring. A demo of the game can be found on <Link to="https://earlgreysuperior.itch.io/tiny-doctor" target="_blank" rel="noreferrer">
                Itch.io</Link>

            </p>
        </div>
    );
}

export default Projects