export const HomeSection = () => {
    return (
        <div id="home" className="section header align-items-center d-flex">
            <div className="d-flex justify-content-center w-50 m-4 mr-2">
                <div className="img-container rounded-circle d-flex justify-content-center align-items-center">
                    <img src="/images/photo.png" alt="photo" className="img-photo img-fluid rounded-circle"/>
                </div>
            </div>
            <div className="w-50 m-4 ml-2 d-flex flex-column justify-content-center">
                <h1>Romain Hannoir</h1>
                <h4 className="my-2">Alternant chez Primever et étudiant en BUT informatique à l'IUT de Lens</h4>
                <div className="icon-container">
                    <a href="https://github.com/Romain-02"><img className="icon rounded-circle"
                                                                src="/images/iconeGithub.png" alt={"gihub-icon"}/></a>
                    <a href="https://www.linkedin.com/in/romain-hannoir"><img className="icon rounded-circle"
                                                                              src="/images/linkedinIcone.png"
                                                                              alt={"linkedin-icon"}/></a>
                    <a href="https://www.canva.com/design/DAGQtgf90tA/VEiTNxY6ucH3AxiKrfkP_Q/edit?utm_content=DAGQtgf90tA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img
                        className="icon rounded-circle" src="/images/canva.jpg" alt={"canva-icon"}/></a>

                </div>
            </div>

        </div>
    )
}