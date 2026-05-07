import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
    return(<>
        <div className={"content"}>
            <img
                src="https://cdn.discordapp.com/avatars/230000463225946112/16da53128431c314472bb5bdb73526bb.webp?size=28"
                alt="Profile" 
            />
            <h1 className={"name"}>Joshua J. Lelipaly</h1>
            <p className={"tagline"}>Backend Developer - Software Engineer</p>

            <h2 className={"sectionTitle"}>About</h2>
            <p className={"text"}>
                I'm a Bachelor Computer Science graduate at <a href="https://www.universiteitleiden.nl">Leiden University</a> and
                I'm ready to enter the job market.
                My specialty lies within backend development, optimizations, data-driven services,
                and designing and maintaining server-side systems. I enjoy solving problems,
                learning new technologies, and collaborating on meaningful projects.
            </p>

            <h2 className={"sectionTitle"}>Projects</h2>
            <ul className={"list"}>

            </ul>

            <h2 className={"sectionTitle"}>Contact</h2>
            <p className={"text"}>
                Email: <a href="mailto:j.j.lelipaly@gmail.com">j.j.lelipaly@gmail.com</a>
            </p>
        </div>
        <div className={"stars"}>
            <h2>
                Stars
            </h2>
            <nav>
                {/* <Link to="/aboutme">About Me</Link>  */}
                <Link to="/resume">Resume</Link>  
            </nav> 
        </div>
        <div className={"friends"}>
            <h2>Friends</h2>
            <ul className={"list"}>
                <li><a href="https://marchoek.nl" target="_blank" rel="noreferrer">Marc Hoek</a></li>
            </ul>            
            <h2>Socials</h2>
            <ul className={"list"}>
                <li><a href="https://github.com/Craftoonix" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://x.com/Craftoonix" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/joshua-jordan-lelipaly-928ba4302" target="_blank" rel="noreferrer">LinkedIn</a></li>

            </ul>
        </div>
    </>);
}

export default Home;