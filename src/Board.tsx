import "./Board.css"


function Message(){
    // const name = 'JOwOsh';
    // if (name)
    //     return <h1> Hello {name} </h1>;
    // return <h1> Hello  world </h1>;
    return (

    <main className={"container"}>
      <section className={"card"}>
        <img
          src="https://cdn.discordapp.com/avatars/230000463225946112/16da53128431c314472bb5bdb73526bb.webp?size=28"
          alt="Profile"
        />
        <h1 className={"name"}>Joshua J. Lelipaly</h1>
        <p className={"tagline"}>Backend Developer - Software Engineer</p>

        <h2 className={"sectionTitle"}>About</h2>
        <p className={"text"}>
          I'm in my third year of persuing my Computer Science Bachelor's degree at <a href="https://www.universiteitleiden.nl">Leiden University</a> and I'm ready to enter the job market. My specialty lies within backend development, optimizations, 
          data-driven services, and designing and maintaining server-side systems. I enjoy solving problems,
          learning new technologies, and collaborating on meaningful projects.
        </p>

        <h2 className={"sectionTitle"}>Skills</h2>
        <ul className={"list"}>
          <li>C++</li>
          <li>Python</li>
          <li>C</li>
          <li>Testing, CI/CD, Docker</li>
          <li>JavaScript / TypeScript</li>
          <li>React</li>
        </ul>

        <h2 className={"sectionTitle"}>Contact</h2>
        <p className={"text"}>
          Email: <a href="mailto:j.j.lelipaly@gmail.com">j.j.lelipaly@gmail.com</a>
        </p>
      </section>
    </main>
  );

    
}

export default Message;