import ResumeFile from "./assets/resume.pdf"


function resume () {
    return <iframe src={ResumeFile} title="Resume" style={{width:'100%',height:'100vh',border:0}} />;
}

export default resume